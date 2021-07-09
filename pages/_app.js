// pages/_app.js
import React from "react";
import NextApp from "next/app";
import "../styles/globals.css";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
