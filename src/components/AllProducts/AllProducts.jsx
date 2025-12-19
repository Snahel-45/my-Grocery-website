import React from 'react'
import CatagoryPage from '../CatagoryPage/CatagoryPage'
import BgAll from'../../assets/all-banner.jpg'
const AllProducts = () => {
  return (
    <div>
        <CatagoryPage title="All Products" bgImage={BgAll} catagories={['All']}/>
    </div>
  )
}

export default AllProducts