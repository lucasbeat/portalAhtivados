import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logo from "./img/logo1.png";
import login from "./img/login.jpg";

function SignIn() {
  return (
    <>
      <div className="page">
        <img className="login" src={login} alt="login"></img>
        <div className="login-content">
          <img className="logo" src={logo} alt="Logo"></img>
          <form className="form">
            <input type="email" placeholder="Digite seu e-mail"></input>
            <input type="password" placeholder="Digite Sua senha"></input>

            <button type="submit">Acessar</button>
            <Link className="link" to="/passwordForgot">
              Esqueceu sua senha?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
