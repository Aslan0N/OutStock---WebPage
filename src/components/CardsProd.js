import React from "react";

const CardsProd = (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 col-lg-4">
      <div className="card mb-3 border-0" >
        <div className="row g-0">
          <div className="col-md-4">
            <img style={{width:"60%"}} src={props.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-title text-secondary">Sacrificial Chair Design</p>
              <p className="card-text" style={{fontWeight:"500"}}>
                ${props.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsProd;
