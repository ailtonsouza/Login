import React from "react";

import style from "./burguer.module.css";

const Burguer = (props) => {
  return (
    <>
      <div className={style.StyledBurguer} onClick={() => props.setOpen()}>
        <div />
        <div />
        <div />
      </div>
    </>
  );
};

export default Burguer;