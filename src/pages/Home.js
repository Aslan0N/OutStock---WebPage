import React from 'react'
import Chair from '../components/Chair'
import Acs from '../components/Acs'
import Trending from '../components/Trending'
import TwoCard from '../components/TwoCard'
import Sale from '../components/Sale'
import SaleCard from '../components/SaleCard'
import Users from '../components/Users'
import StockCard from '../components/StockCard'

const Home = () => {
  return (
    <div>
        <Chair/>
        <Acs/>
        <Trending/>
        <TwoCard/>
        <Sale/>
        <SaleCard/>
        <Users/>
        <StockCard/>
    </div>
  )
}

export default Home