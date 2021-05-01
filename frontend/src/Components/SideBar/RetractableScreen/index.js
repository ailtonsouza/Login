import React, { useState } from "react";
import styles from './styles.module.css';
import Burguer from '../Burguer';

function RetractableScreen({children}) {
    const [open, setOpen] = useState(true);

return(
        <div className={open ? styles.SideBarOpen : styles.SideBarClosed}>
        <Burguer setOpen={() => setOpen(x => !x)}/>
        {children}
        </div>
)
}
export default RetractableScreen