import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";


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
          <ul className="fa-ul">
      {
      item[1].eligible.map((ele) => {
        return (
          <li>
            <FontAwesomeIcon icon={faCheck} listItem />
            {ele}
          </li>
        )
      })}
      {item[1].notEligible.map((ele) => {
        return (
          <li className="text-muted">
            <FontAwesomeIcon icon={faTimes} listItem />
            {ele}
          </li>
        )
      })}
    </ul>
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
