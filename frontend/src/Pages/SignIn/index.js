import React, { useState, useEffect, useContext } from "react";
import styles from "./styles.module.css";
import { Link, useHistory } from "react-router-dom";
import getValidationErros from "../../utils/getValidationErros";
import * as Yup from "yup";
import api from "../../services/api";
import { useAuth } from "../../hooks/AuthContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erros, setErros] = useState("");
  const { signIn } = useAuth();
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail é obrigatorio")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("Informe o password"),
      });

      const data = {
        email: email,
        password: password,
      };

      await schema.validate(data, { abortEarly: false });

      // await api.post("users/authenticate", {
      //   email: email,
      //   password: password,
      // });

      await signIn(email, password);

      history.push("/MainPage");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);
        setErros(errors);
        return;
      }

      if (err.response) {
        console.log(err.response);
        setErros(err.response.data);
        return;
      }
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.login}>
        <form className={styles.loginArea}>
          <h2>Wellcome to Ailtenrest</h2>
          <div className={styles.formBody}>
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

          <button onClick={(e) => login(e)} className={styles.buttonBox}>
            Sign In
          </button>

          <div className={styles.errorBox}>
            <p>{erros.message}</p>
          </div>
        </form>
      </div>
      <Link to="/CreateUser">Create User</Link>
    </div>
  );
}

export default SignIn;
