import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import api from "../../services/api";

function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function  login(e) {
    e.preventDefault();
    const user = await api.get('/users/authenticate', {
      name,
      email,
      password
    })

    console.log(user);
  }

  return (
    <div className={styles.page}>
      <div className={styles.login}>
        <form className={styles.loginArea}>

        <label className={styles.labelLogin} for="E-mail">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className={styles.loginBox}
            id="E-mail"
          ></input>

          <label className={styles.labelLogin} for="E-mail">
            E-mail
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={styles.loginBox}
            id="E-mail"
          ></input>

          <label className={styles.labelLogin} for="senha">
            Senha
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={styles.passwordBox}
            id="password"
          ></input>

          <button onClick={(e) => login(e)} className={styles.buttonBox}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
