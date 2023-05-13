import React from 'react'

const StockCard = () => {
  return (
    <section id='products'>
        <div className="container">
           <div className="row">
           <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <h5>Top Seller Products</h5>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <h5>On Sale Products</h5>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <h5>Feture Products</h5>
            </div>
           </div>
        </div>
    </section>
  )
}

export default StockCard