import express from 'express'
import path from 'path'
import cors from 'cors'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'

import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

const { readFile } = require('fs').promises

require('colors')

let Root
try {
  // eslint-disable-next-line import/no-unresolved
  Root = require('../dist/assets/js/ssr/root.bundle').default
} catch {
  console.log('SSR not found. Please run "yarn run build:ssr"'.red)
}

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  express.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

const pathGoods = `${__dirname}/data/data.json`
const safeSorts = ['title', 'price']
const sortingGoods = (listOfGoods, sortMode, isDescOrder) => {
  const order = isDescOrder === 'true' ? -1 : 1
  return ([...listOfGoods].sort((a, b) => (a[sortMode] > b[sortMode] ? 1 * order : -1 * order)))
}


server.post('/api/v1/log/', (req, res) => {
  const { type, message } = req.body
  res.json({ date: new Date(), event: { type, message } })
})


server.get(['/api/v1/goods/', '/api/v1/goods/:page'], (req, res) => {
  const { page = 1 } = req.params
  const { onpage = 20, sort = 'title', desc } = req.query
  readFile(pathGoods, { encoding: 'utf8' })
    .then((text) => {
      let allGoods = JSON.parse(text)
      if (typeof sort !== 'undefined' && safeSorts.includes(sort)) {
        allGoods = sortingGoods(allGoods, sort, desc)
      }
      const startOfPage = Number(onpage) * (Number(page) - 1)
      const pages = Math.ceil(allGoods.length / onpage)
      const goodsOnPage = allGoods.slice(startOfPage, startOfPage + Number(onpage))
      res.json({ status: 'ok', data: { goods: goodsOnPage, pages } })
    })
    .catch((err) => {
      console.log('Something wrong...')
      res.json({ status: 'error', message: err })
    })
})

server.get('/api/v1/rate', (req, res) => {
  axios.get('https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,CAD,RUB')
    .then((data) => {
      res.json({ status: 'ok', data: data.data })
    })
})

// recive array of { id: [count] } return info about goods in basket and total price
server.post(['/api/v1/total', '/api/v1/basket'], (req, res) => {
  const { sort = 'title', desc = false } = req.query
console.log(req.query)
  readFile(pathGoods, { encoding: 'utf8' })
    .then((text) => {
      const basket = req.body.items
      let goodsInBusket = JSON.parse(text)
        .filter((item) => (Object.keys(req.body.items).includes(item.id)))
        .map(item => ({ ...item, quanity: basket[item.id] }))
      const quanityInBasket = Object.values(basket).reduce((sum, quanityGood) => sum + quanityGood, 0)
      const totalOfBasket = goodsInBusket.reduce((total, good) => (
        total + good.price * basket[good.id]), 0)
      if (typeof sort !== 'undefined' && safeSorts.includes(sort)) {
        goodsInBusket = sortingGoods(goodsInBusket, sort, desc)
      }
      res.json({
        status: 'ok',
        data: {
          goods: goodsInBusket,
          quanity: quanityInBasket,
          total: totalOfBasket
        }
      })
    })
    .catch((err) => {
      res.json({ status: 'error', message: err })
    })
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => { })

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
