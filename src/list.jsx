import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const list = ({ eligible, notEligible }) => {
  return (
    <ul className="fa-ul">
      {
      notEligible.map((ele) => {
        return (
          <li>
            <FontAwesomeIcon icon={faCheck} listItem />
            {ele}
          </li>
        )
      })}
      {notEligible.map((ele) => {
        return (
          <li>
            <FontAwesomeIcon icon={faCheck} listItem />
            {ele}
          </li>
        )
      })}
    </ul>
  )
};

export default list;
