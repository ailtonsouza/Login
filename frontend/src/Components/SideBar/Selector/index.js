import React, { useState, useEffect } from "react";


import "./selector.css";

const Selector = (props) => {
  return (
    <>
      <div className="options">
        {props.selectors.map((x) => (
          <div
            className="option"
            onClick={() =>
              props.setSelectedOption({
                Simbolo: x.Simbolo,
                valor: x.valor,
              })
            }
          >
            {x.Simbolo} - {x.valor}
          </div>
        ))}
      </div>

    </>
  );
};

export default Selector;
