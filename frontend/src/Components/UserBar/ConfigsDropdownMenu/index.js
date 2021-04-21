import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";

import { ReactComponent as ArrowIcon } from "../../../assets/arrow.svg";
import { ReactComponent as CogIcon } from "../../../assets/cog.svg";

import DropdownItem from "../../Dropdown/DropdownItem";

export default function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<CogIcon />}
            goToMenu="animals"
            setActiveMenu={setActiveMenu}
          >
            Profiles
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            setActiveMenu={setActiveMenu}
            leftIcon={<ArrowIcon />}
          >
            <h3>Back</h3>
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} to="/PersonalInformation">
            Personal Information
          </DropdownItem>

          <DropdownItem leftIcon={<CogIcon />} to="/">
            Acesses
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
