import React from 'react'
import Head from './head'
import Header from './Header'

const eCommerce = () => (
  <div>
    <Head title="Catalog" />
    <div className="h-100 w-screen flex flex-col items-center justify-center bg-teal-lightest font-sans">
      <Header/>
      All will be here!
    </div>
  </div>
)

export default eCommerce
