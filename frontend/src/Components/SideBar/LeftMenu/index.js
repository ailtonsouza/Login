import React, {useState} from "react";
import "./leftMenu.css";

import { ReactComponent as FindIcon } from "../../../assets/find.svg";



const RightNav = (props) => {
  const [x, setx] = useState(true)

  function fil() {
      props.setFilters([]);
      props.filter();
  }

  return (
    <div className={"RightNav"}>
      <div className="rightNavHeader">
        <p>Filtros</p>
      </div>
      <div className="buttonSearch">
        <button className="findMenu" onClick={() => props.filter()}>
          <FindIcon />
        </button>


        <button className="findMenu" onClick={() => props.setFilters([])}>
          X 
        </button>


      </div>
      <div className="rightNavBody">
        
        {x && props.children}</div>
    </div>
  );
};

export default RightNav;