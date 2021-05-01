import React, { useState, useEffect } from "react";

import "./input.css";

const Input = ({ dataName, label, children, setFilters, filters, type }) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    Simbolo: "=",
    valor: "Igual a",
  });

  const Component = (props) => {
    return (
      <div onClick={props.teste}>
        {React.cloneElement(children, {
        setSelectedOption
      })}  
      </div>
    );
  };

  useEffect(() => {
    setFilters((f) => {
      if (f.find((x) => x.label === dataName)) {
        return [
          ...f.map((x) =>
            x.label === dataName
              ? {
                  label: dataName,
                  inputValue: inputValue,
                  valor: selectedOption.valor,
                }
              : x
          ),
        ];
      } else {
        return [
          ...f,
          {
            label: dataName,
            inputValue: inputValue,
            valor: selectedOption.valor,
          },
        ];
      }
    });
  }, [selectedOption, inputValue]);

  const config = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="InputBody">
        <input
          className="Input"
          type={type}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue ? <span id="Filled">{label}</span> : <span>{label}</span>}
        <button className="selectorButton" onClick={() => config()}>{selectedOption.Simbolo}</button>
      </div>
      {open && <Component teste={config} />}
    </>
  );
};

export default Input;
