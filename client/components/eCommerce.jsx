import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Header from './Header'

const ECommerce = () => {
  const test = useSelector((state) => state.goods.test)
  console.log(test)

  return (
    <div>
      <Head title="Catalog" />
      <div className="h-100 w-screen flex flex-col items-center justify-center bg-teal-lightest font-sans">
        <Header />
        Goods will be here!
        {test}

      </div>
    </div>
  )
}

export default ECommerce
