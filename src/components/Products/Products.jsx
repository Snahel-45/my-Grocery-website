import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'

const Products = () => {

  const catagories =['All','Fruits','Vegetables','Dairy','SeaFood']
  const [activeTab, setActiveTab] = useState('All');

  let filteredItems = activeTab ==='All'
  ? ProductList : ProductList.filter(item => item.catagory === activeTab);


    const renderCards = filteredItems.slice(0,8).map(Products =>{
      return(
        <Cards image={Products.image} name={Products.name} price={Products.price}/>
      )
    })
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'> 
        <Heading higlights="Our" heading="Products"/>

        {/* Tabs */}
        <div  className='flex flex-wrap gap-3 justify-center mt-10'>
          {catagories.map(catagory =>{
            return(
              <button key={catagory} 
              className={` px-5 py-2 text-lg rounded-lg cursor-pointer  ${activeTab === catagory ? 'bg-gradient-to-b from-orange-400 to-orange-500  text-white ':'bg-zinc-100'}`}
              onClick={()=>setActiveTab(catagory)}>
                {catagory}
              </button>
            )
          })}
        </div>

          {/*  Product Listing */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
            {renderCards}
          </div>

          <div className='mt-15 mx-auto w-fit'>
            <Link to="/allproducts" className='bg-gradient-to-b from bg-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer mt-5'>
            View All
            </Link>
          </div>

        </div>
    </section>
  )
}

export default Products



