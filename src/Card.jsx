import React from "react";

import List from './list'

const Card = ({ item }) => {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {item[0]}
          </h5>
          <h6 className="card-price text-center">
            {item[1].price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <List eligible = {item[1].eligible} notEligible = {item[1].notEligible}/>
          <div class="d-grid">
            <button href="#" class="btn btn-primary text-uppercase">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
