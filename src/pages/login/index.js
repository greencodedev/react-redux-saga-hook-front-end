import React from "react";
import { LoginForm } from "../../components/form";
import Header from '../../components/Header'
import Layout from "../../components/layout";

const Login = () => (
  <Layout>
    <Header></Header>
    <div className="account-layout">
      <div className="w-100">
        <h1>Sign in</h1>
        <LoginForm />
      </div>
    </div>`
  </Layout>
);

export default Login;
