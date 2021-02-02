import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedInLinkMobile from "./SignedInLinkMobile";
import SignedOutLink from "./SignedOutLink";
import SignedOutLinkMobile from "./SignedOutLinkMobile";

function Navbar() {
  return (
    <div>
      <nav className="nav-wrapper purple darken-4">
        <div className="container">
          <Link to="/" className="brand-logo">
            CITJS QUIZ
          </Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <SignedInLink />
          <SignedOutLink />
        </div>
      </nav>
      <ul id="mobile-demo" className="sidenav">
        <SignedInLinkMobile />
        <SignedOutLinkMobile />
      </ul>
    </div>
  );
}

export default Navbar;
