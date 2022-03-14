import React from 'react'
import features from "./features";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";



const list = ({providedFeature}) => {
  return (
    <ul className="fa-ul">
            {features.map((ele, index) => {
              if (providedFeature.find(a => a.includes(ele))) {
                return (
                  <li>
                    <FontAwesomeIcon icon={faCheck} listItem />
                    {providedFeature[index]}
                  </li>
                );
              }
              return <li className="text-muted">
              <FontAwesomeIcon icon={faTimes} listItem />
              {ele}
            </li>
            })}
          </ul>
  )
}

export default list