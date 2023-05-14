import React from 'react'
import CardsProd from './CardsProd'
import cardsData from '../data/DataCards'

const ManyCards = () => {
  return (
    <>
        <div className="container py-5">
            <div className="row g-3">
                {
                cardsData.map(item=>(
                <CardsProd 
                 image={item.image}
                 price={item.price} 
                 />
                 ))
                }
            </div>
        </div>
    </>
  )
}

export default ManyCards