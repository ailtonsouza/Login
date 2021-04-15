import React, { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";
import * as Yup from "yup";
import getValidationErros from "../../../utils/getValidationErros";
import api from "../../../services/api";
import Warning from "../../../assets/warning.png";
import rightcircle from "../../../assets/right90.svg";
import leftcircle from "../../../assets/left90.svg";
import useButtonLoader from "../../../hooks/useButtonLoader";
import { Link } from "react-router-dom";
//import "./button.css";

function CreateUserForm(props) {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [erros, setErros] = useState("");
  const [registered, setRegistered] = useState(true);
  //const [spinnerButton, setSpinnerButton] = useState(false);

  const [element, setLoading] = useButtonLoader("Create", "Creating ...");

  async function create(e) {
    e.preventDefault();
    setErros("");

    try {
      const schema = Yup.object().shape({
        userName: Yup.string().required("Nome é obrigatorio"),
        email: Yup.string()
          .required("E-mail é obrigatorio")
          .email("Digite um e-mail válido"),
        password: Yup.string()
          .required("Password de no mínimo 6 dígitos")
          .min(6, "Password de no mínimo 6 dígitos"),
      });

      const data = {
        userName: userName,
        email: email,
        password: password,
      };

      await schema.validate(data, { abortEarly: false });
      setLoading(true);

      await api.post("users/", {
        name: userName,
        email: email,
        password: password,
      });

      setUserName("");
      setEmail("");
      setPassword("");
      setErros("");
      setLoading(false);
      setRegistered(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);
        setErros(errors);
        return;
      }

      if (err.response) {
        setErros(err.response.data);
        setLoading(false);
        return;
      }

      setErros(err);
      setLoading(false);
    }
  }

  return registered ? (
    <form className={styles.loginArea}>
      <h2>Create user</h2>
      <div className={styles.formBody}>
        <div className={styles.input}>
          <label className={styles.labelLogin} htmlFor="name">
            Name
          </label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            className={styles.loginBox}
            id="userName"
            name="userName"
          ></input>
          <p className={styles.messageError}>{erros.userName}</p>
        </div>
        <div className={styles.input}>
          <label className={styles.labelLogin} htmlFor="E-mail">
            E-mail
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={styles.loginBox}
            id="E-mail"
          ></input>
          <p className={styles.messageError}>{erros.email}</p>
        </div>
        <div className={styles.input}>
          <label className={styles.labelLogin} htmlFor="senha">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className={styles.loginBox}
            id="password"
          ></input>
          <p className={styles.messageError}>{erros.password}</p>
        </div>
      </div>

      <button
        className={styles.buttonBox}
        type="button"
        onClick={(e) => create(e)}
        ref={element}
      >
        Create
      </button>

      <div className={styles.errorBox}>
        {erros.message ? (
          <>
            <img src={Warning} className={styles.imgWarning} alt="Warning" />
            <div className={styles.errorMessageBox}>
              <p>{erros.message}</p>
            </div>
          </>
        ) : null}
      </div>
    </form>
  ) : (
    <div className={styles.loginCreated}>
      <h1>Login Cretade Sucessufuly</h1>

      <Link to="/">
        <button className={styles.buttonLeft}>
          <img src={leftcircle} className={styles.imgLeft} alt="Left" />
          Sign In
        </button>
      </Link>

      <button
        className={styles.buttonRight}
        onClick={() => setRegistered(true)}
      >
        Create Another User
        <img src={rightcircle} className={styles.imgRight} alt="Right" />
      </button>
    </div>
  );
}

export default CreateUserForm;
