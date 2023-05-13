import React from 'react'
import saleData from '../data/SaleData'
import CardSale from './CardSale'

const SaleCard = () => {
  return (
    <>
       <div className="container py-5">
        <div className="row g-4">
        {
            saleData.map(item=>(
                <CardSale 
                 image={item.image}
                 title={item.title} 
                 price={item.price} 
                 />
            ))
        }
        </div>
       </div>
    </>
  )
}

export default SaleCard