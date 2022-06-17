import React from "react";
import Link from "next/link";

import { useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState("hide");
  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="header__logo">
            <Link href="/">
              <a href="#">
                <img src="./pace_logo.webp" alt="" />
              </a>
            </Link>
          </div>
          <ul className="header__nav">
            <li className="header__nav__item">
              <Link href="/">
                <a className="header__nav__item__link active">Home</a>
              </Link>
            </li>
            <li className="header__nav__item">
              <Link href="/courses">
                <a className="header__nav__item__link">Courses</a>
              </Link>
            </li>
            <li className="header__nav__item">
              <Link href="/">
                <a className="header__nav__item__link">Video Gallery</a>
              </Link>
            </li>
            <li className="header__nav__item">
              <Link href="/image-gallery">
                <a className="header__nav__item__link">Image Gallery</a>
              </Link>
            </li>
            <li className="header__nav__item">
              <Link href="/">
                <a className="header__nav__item__link">About Pace</a>
              </Link>
            </li>
            <li className="header__nav__item">
              <Link href="/">
                <a className="header__nav__item__link">Admission Process</a>
              </Link>
            </li>
          </ul>
          <div className="hamburger_menu" onClick={() => setVisible("")}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${visible}`}
        onClick={() => setVisible("hide")}
      ></div>
      <div className={`sidenav ${visible}`}>
        <ul className="sidenav__list">
          <li
            className="sidenav__list__item sidenav__list__item--close"
            onClick={() => setVisible("hide")}
          >
            <i className="fa-regular fa-circle-xmark"></i> Close Navbar
          </li>
          <Link href="/">
            <a
              href="#"
              className="sidenav__list__item"
              onClick={() => setVisible("hide")}
            >
              Home
            </a>
          </Link>
          <Link href="/courses">
            <a
              href="#"
              className="sidenav__list__item"
              onClick={() => setVisible("hide")}
            >
              Courses
            </a>
          </Link>
          <Link href="/">
            <a
              href="#"
              className="sidenav__list__item"
              onClick={() => setVisible("hide")}
            >
              Video Gallery
            </a>
          </Link>
          <Link href="/image-gallery">
            <a
              href="#"
              className="sidenav__list__item"
              onClick={() => setVisible("hide")}
            >
              Image Gallery
            </a>
          </Link>
          <Link href="/">
            <a
              href="#"
              className="sidenav__list__item"
              onClick={() => setVisible("hide")}
            >
              About Pace
            </a>
          </Link>
          <Link href="/">
            <a
              href="#"
              className="sidenav__list__item"
              onClick={() => setVisible("hide")}
            >
              Admission Process
            </a>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
