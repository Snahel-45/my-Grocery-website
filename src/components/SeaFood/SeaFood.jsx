import React from 'react'
import Banner from '../Banner/Banner'
import CatagoryPage from '../CatagoryPage/CatagoryPage'
import BgSeaFood from'../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
        <CatagoryPage title="Meat & SeaFood" bgImage={BgSeaFood} catagories={['Meat','SeaFood']}/>
    </div>
  )
}

export default SeaFood