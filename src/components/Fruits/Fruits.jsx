import React from 'react'
import CatagoryPage from '../CatagoryPage/CatagoryPage'
import BgFruits from'../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
        <CatagoryPage title="Fruits & Veggies" bgImage={BgFruits} catagories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits