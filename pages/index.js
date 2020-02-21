import React from "react";
import HomePage from "containers/HomePage";
import { setArticles } from "containers/HomePage//actions";
import fetch from "isomorphic-unfetch";
import { baseUrl } from "utils";
const Home = () => {
  return <HomePage />;
};

Home.getInitialProps = async ({ store, req }) => {
  if (req) {
    const res = await fetch(`${baseUrl()}/api/articles`);
    const data = await res.json();
    store.dispatch(setArticles({ data }));
  }
};

export default Home;
