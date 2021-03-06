import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import Head from "next/head";
import JumpToTop from "./Jump-to-Top";
import Wame from "./Wame";

import Router from "next/router";
import nProgress from "nprogress";

const Layout = ({ children }) => {
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
  });
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Pace Institute - We Make English Possible</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </Head>
      <Header />
      <div className="main">{children}</div>
      <JumpToTop />
      <Wame />
      <Footer />
    </>
  );
};

export default Layout;
