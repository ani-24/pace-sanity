import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Pace Institute - We Make English Possible</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
