import React, { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 800);
  }, []);

  return (
    <div>
      <Head>
        <title>Lily-Rose Flower Delivery</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Stalemate&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        {isMobile && <Sidebar className="sidebar" />}
        <Topbar />
        <Navbar className="layout" />
      </header>
      <main className="main-container layout">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
