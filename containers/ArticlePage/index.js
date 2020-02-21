import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FETCH_ARTICLE } from "./constants";
import { articlesBySlug } from "./selectors";
import { createStructuredSelector } from "reselect";
import Fetching from "components/Fetching";
import { media, gutters } from "utils/cssMixins";
import { useRouter } from "next/router";

const ArticlePage = ({ fetchArticle, articles }) => {
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    fetchArticle({ slug });
  }, []);
  console.log(articles);
  return (
    <Fetching fetching={articles[slug]?.fetching} error={articles[slug]?.error}>
      <span>jsrgrjss</span>
    </Fetching>
  );
};
export default connect(
  createStructuredSelector({
    articles: articlesBySlug
  }),
  dispatch => ({
    fetchArticle: ({ slug }) => dispatch({ type: FETCH_ARTICLE, slug })
  })
)(ArticlePage);
