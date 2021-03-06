import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import makeStore from "../store";
import GlobalStyles from "../GlobalStyles";
import Header from "components/Header";
import PageWrapper from "components/PageWrapper";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return pageProps;
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Provider store={store}>
          <GlobalStyles />
          <Header />
          <PageWrapper>
            <Component {...pageProps} />
          </PageWrapper>
        </Provider>
      </>
    );
  }
}

export default withRedux(makeStore, withReduxSaga({ async: true }))(MyApp);
