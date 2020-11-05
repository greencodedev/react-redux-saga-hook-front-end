import React from "react";
import { SignUpForm } from "../../components/form";
import Header from '../../components/Header';
import Layout from "../../components/layout";

const SignUp = () => (
  <Layout>
    <Header></Header>
    <div className="account-layout">
      <div className="w-100">
        <h1>Sign Up</h1>
        <SignUpForm />
      </div>
    </div>
  </Layout>
);

export default SignUp;
