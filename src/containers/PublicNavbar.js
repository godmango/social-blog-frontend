import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublicNavbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const handleLogout = () => {};

  const authLinks = (
    <Nav>
      <Nav.Link as={Link} to="/admin/profile">
        <FontAwesomeIcon icon="chart-line" size="sm" /> Admin
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>
        <FontAwesomeIcon icon="sign-out-alt" size="sm" /> Logout
      </Nav.Link>
    </Nav>
  );

  const publicLinks = (
    <Nav>
      <Nav.Link as={Link} to="/register">
        <FontAwesomeIcon icon="registered" size="sm" /> Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        <FontAwesomeIcon icon="sign-in-alt" size="sm" /> Login
      </Nav.Link>
    </Nav>
  );

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/" className="mr-auto">
        CoderSchool Social Blog
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PublicNavbar;
