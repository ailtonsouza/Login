import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import CreateUserForm from "../CreateUser/CreateUserForm";
import { Link } from "react-router-dom";

function CreateUser() {

  return (
    <div className={styles.page}>
      <div className={styles.login}>

            <CreateUserForm /> 
   
   
      </div>
      <Link to="/">Sign In</Link>
    </div>
  );
}

export default CreateUser;
