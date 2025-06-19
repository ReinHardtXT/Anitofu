import React, { useContext } from "react";
import Context from "../context/Context";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  const { setSearch, search } = useContext(Context);
  const navigate = useNavigate();

  const find = (e) => {
    e.preventDefault();
    navigate("/results/" + search);
    window.location.reload();
  };

  const handleSignUpClick = () => {
    navigate("/signup"); // Navigate to the signup route
  };

  return (
    <Navbar
      bg="black"
      data-bs-theme="dark"
      expand="md"
      className="fixed-top navbar-container"
    >
      <Container>
        <div>
          <Navbar.Brand href="/" className="navB navbar-brand">
            <img
              src="/FNLogo.png"
              alt="logo"
              width="45"
              height="45"
              className="d-inline-block align-center"
            />
            <span className="navbar-brand-text">AniTofu</span>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link">
              <b>Home </b>
            </Nav.Link>
            <Nav.Link href="/top" className="nav-link">
              <b>Top Airing</b>
            </Nav.Link>
            <Nav.Link href="/genres" className="nav-link">
              <b>Genres</b>
            </Nav.Link>
            <Nav.Link href="/popular" className="nav-link">
              <b>Popular</b>
            </Nav.Link>
          </Nav>
          <div className="btn">
          <Form onSubmit={find} className="d-flex navbar-form">
            <Form.Control
              type="search"
              placeholder="Search For Anime"
              className="m-1 navbar-search-input"
              aria-label="Search"
              required
              onChange={(e) => setSearch(e.target.value)}
            />
            
            <Button type="submit" variant="light" className="navbar-search-button">
              <img width={'18px'} src="/search.png" alt="search" className="mx-2 mt-1"/>
            </Button>
          </Form>
          </div>
          <Nav>
          <Nav.Link href="/SignUp" className="nav-link">
              <b>SignUp </b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
