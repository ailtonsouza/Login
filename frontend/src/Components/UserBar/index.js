import React from "react";
import styles from "./style.module.css";
import { useAuth } from "../../hooks/AuthContext";
import logout from "../../assets/logout.svg";
import { ReactComponent as Gear } from "../../assets/gear.svg";
import NavItem from "../Dropdown/NavItem";
import ConfigsDropdownMenu from "./ConfigsDropdownMenu";

function UserBar() {
  const { signOut, user } = useAuth();

  return (
    <div>
      <div className={styles.userBar}>
        <h1 className={styles.title}>Ailtenrest</h1>
        <div className={styles.userAtributes}>
          <img alt="user" className={styles.userImg} />
          <p className={styles.userName}>{user.name}</p>
        </div>
      </div>

      <div className={styles.menuBar}>
        <NavItem icon={<Gear />}>
          <ConfigsDropdownMenu></ConfigsDropdownMenu>
        </NavItem>

        <button className={styles.signOut} onClick={signOut}>
          <img src={logout} className={styles.svgImg} alt="logOut" />
        </button>
      </div>
    </div>
  );
}

export default UserBar;
