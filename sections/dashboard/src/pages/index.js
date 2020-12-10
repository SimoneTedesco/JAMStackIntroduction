import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>This app rules</h1>
    <h2>Login please</h2>
    <Link to="/dashboard">go to dashboard</Link>
  </Layout>
);
