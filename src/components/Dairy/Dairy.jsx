import React from 'react'
import CatagoryPage from '../CatagoryPage/CatagoryPage'
import BgDairy from'../../assets/dairy-banner.jpg'
const Dairy = () => {
  return (
    <div>
      <CatagoryPage title="Dairy & Eggs" bgImage={BgDairy} catagories={['Dairy']} />
    </div>
  )
}

export default Dairy