import React from "react";
import HomePage from "containers/HomePage";
import { setArticles } from "containers/HomePage//actions";
import fetch from "isomorphic-unfetch";
const devUrl = "http://localhost:8082";
const Home = () => {
  return <HomePage />;
};

Home.getInitialProps = async ({ store, req }) => {
  if (req) {
    const res = await fetch(`${devUrl}/api/articles`);
    const data = await res.json();
    store.dispatch(setArticles({ data }));
  }
};

export default Home;
