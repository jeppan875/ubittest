import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FETCH_ARTICLES } from "./constants";
import { articleSelector, fetchingArticles, errorArticles } from "./selectors";
import { createStructuredSelector } from "reselect";
import Fetching from "components/Fetching";
import ArticleItem from "components/ArticleItem";
import { media, colors, gutters } from "utils/cssMixins";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${gutters.pageGutter};

  > div {
    margin-top: 20px;
  }
  > div:nth-child(odd) {
    margin-right: ${gutters.pageGutter};
  }
  ${media.mobile`
  > div {
    margin-right: ${gutters.pageGutter};
  }
  `}
`;

const HomePage = ({ fetchArticles, articles, fetching, error }) => {
  useEffect(() => {
    fetchArticles();
  }, []);
  console.log(articles.Items?.[0]);
  return (
    <Fetching fetching={fetching} error={error}>
      <Flex>
        {articles.Items
          ? articles.Items?.map(article => <ArticleItem article={article} />)
          : null}
      </Flex>
    </Fetching>
  );
};
export default connect(
  createStructuredSelector({
    articles: articleSelector,
    fetching: fetchingArticles,
    error: errorArticles
  }),
  dispatch => ({
    fetchArticles: () => dispatch({ type: FETCH_ARTICLES })
  })
)(HomePage);
