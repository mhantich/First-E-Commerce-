import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../state/Card";
function Navbars() {
  const [isTopOfPage, setTopOfPage] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleSCroll = () => {
      if (window.scrollY === 0) setTopOfPage(true);
      if (window.scrollY !== 0) setTopOfPage(false);
    };
    window.addEventListener("scroll", handleSCroll);
    return () => window.removeEventListener("scroll", handleSCroll);
  });

  const cart = useSelector((state) => state.Card.cart);
  return (
    <Navbar
      className={`${!isTopOfPage && "fixed-top  filternav z-index-2"}`}
      // bg="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <img src="/logo.png" alt="" width="50" height="50" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav bg-dark">
          <Nav className="m-auto  gap-3">
            <Nav>
              <Link
                className="text-decoration-none text-black fw-bold text-capitalize"
                to={"/"}
              >
                Home
              </Link>
            </Nav>
            <Nav>
              <Link
                className="text-decoration-none text-black fw-bold text-capitalize"
                to={"/about"}
              >
                about
              </Link>
            </Nav>
            <Nav>
              <Link
                className="text-decoration-none text-black fw-bold text-capitalize"
                to={"/shoop"}
              >
                shoop
              </Link>
            </Nav>

         
          </Nav>
          <Nav className="gap-2 align-items-center">
            <Nav>
              <Link
                className="text-decoration-none text-black fw-bold text-capitalize"
                to={"/login"}
              >
                <CiUser className="fw-bold fs-3" />
              </Link>
            </Nav>
            <Nav>
              <Link
                className="text-decoration-none text-black fw-bold text-capitalize"
                to={"/"}
              ></Link>
              <button
                className="btn position-relative"
                onClick={() => {
                  dispatch(setIsCartOpen({}));
                }}
              >
                <IoBagOutline className="fs-3" />
                <p
                  style={{ width: "1rem" }}
                  className="bg-danger text-white fs-7 position-absolute top-0 end-0 rounded-circle  "
                >
                  {cart.length}
                </p>
              </button>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
