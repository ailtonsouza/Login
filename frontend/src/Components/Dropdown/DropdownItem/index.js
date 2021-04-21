import React from "react";
import "./index.css";
import { Link, useHistory } from "react-router-dom";

export default function DropdownItem(props) {
  const history = useHistory();

  function redirect() {
    if(props.goToMenu) {
      props.setActiveMenu(props.goToMenu)
      return
    }
    history.push(props.to);
  }


  return (
    <div
      className="menu-item"
      onClick={() => redirect()}
    >
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </div>
  );
}
