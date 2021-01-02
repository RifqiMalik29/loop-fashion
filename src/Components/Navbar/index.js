import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchIcon from "../../Images/search-image.svg";

const NavbarComponent = () => {
  return (
    <>
      <div className="bg-color">
        <Container className="d-flex flex-row">
          <p className="title py-3"> Loop Fashion </p>
          <div className="ml-auto d-flex flex-row py-3 my-auto">
            <Link className="navbar-link mx-4" to="/">HOME</Link>
            <Link className="navbar-link" to="/pricing">PRICING</Link>
            <Link className="navbar-link mx-4" to="/features">FEATURES</Link>
            <Link className="navbar-link mr-7" to="/about">ABOUT</Link>
            <div className="search-group d-flex flex-row">
              <img className="search-img px-1" src={SearchIcon} />
              <input name="q" type="search" placeholder="" autoComplete="off" className="search-bar" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavbarComponent;
