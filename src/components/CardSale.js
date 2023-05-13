import React from 'react'

const CardSale = (props) => {
  return (
    <>
                <div className="col-12 col-sm-3 col-md-2 col-lg-3">
                    <div className="card border-0">
                        <div className="card-img-top">
                            <img src={props.image}  className="card-img-top" alt="" />
                        </div>
                        <div className="card-body">
                            <div className="card-text"><span>{props.title}</span></div>
                            <div className="card-text"><span>${props.price}</span></div>
                        </div>
                    </div>
                </div>
    </>

  )
}

export default CardSale