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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Lily-Rose Flowers & Bouquets Delivery in Sunnyvale, Bay Area
        </title>
        <meta
          name="description"
          content="Online flowers and bouquets delivery in Sunnyvale, California. Wide variety of arrangements for Marriage Proposal, Marriage, Corporates and Funeral."
        />
        <meta
          name="keywords"
          content="flowers, bouquest, flowers in vase, arrangements, roses, tulips, 50 roses, 25 roses, 25 tulips, 50 tulips, bouquet of roses, flowers delivery, birthday flowers delivery, sympathy flowers delivery, same day flowers delivery, funeral flowers delivery, flowers delivery near me, flowers delivery bay area, flowers delivery sunnyvale, mothers day flowers delivery, online flowers shop, online flowers delivery, flowers for marriage, flowers for birthdays, flowers for events, flowers and gifts,Sunnyvale,
          Santa Clara,
          Mt. View,
          San Jose,
          Milpitas,
          Saratoga,
          Cupertino,
          Los Gatos,
          Los Altos,
          Los Altos Hills,
          Palo Alto,
          Menlo Park,
          Atherton,
          Monte Sereno,
          Stanford,"
        />
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
