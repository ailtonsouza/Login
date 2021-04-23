import React, { useRef, useState, useEffect } from "react";
import styles from "./styles.module.css";

function useButtonLoader(defaultText = "Load", loadingText = "Loading...") {
  const [isLoading, setLoading] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    const time = setTimeout(() => {
      if (isLoading) {
        element.current.innerHTML = `
        <button type="button" class=${styles.spinnerButton}>
         <div class=${styles.spinner} >
         <div class=${styles.rect1} ></div>
         <div class=${styles.rect2} ></div>
         <div class=${styles.rect3}></div>
         <div class=${styles.rect4}></div>
         <div class=${styles.rect5}></div>
        
         </div>
         Creating
         </button>
        `;
        element.current.disabled = true;
      } else {
        if (element.current !== null) {
          element.current.disabled = false;
          element.current.innerHTML = defaultText;
        }
      }
    }, 100);

    return () => clearTimeout(time);
  }, [isLoading]);

  // useEffect(() => {
  //   unmounted = false;

  // }, [isLoading]);

  // useEffect(() => {
  //   const time = setTimeout(() => (setLoading2(x => !x)), 1000)

  //   return () => (clearTimeout(time));

  // }, [isLoading]);

  return [element, setLoading];
}

export default useButtonLoader;
