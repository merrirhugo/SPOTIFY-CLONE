import "../../index.css";
import logo from "../../assets/logo-spotify.png";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import { ReactDOM } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavLink from "react-router-dom";
import { onFormSubmit } from "../Search";

export default function NavBar() {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img alt="" src={logo} width="30px" /> Spotify
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/albums">Albums</Nav.Link>
            <Nav.Link href="/genres">Genres</Nav.Link>
            <Nav.Link href="/artists">Artists</Nav.Link>
          </Nav>
          <Form onSubmit={onFormSubmit} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              type="submit"
              style={{
                color: "white",
                background: "#212529",
                borderColor: "#1DB954",
                "&:hover": {
                  background: "#1DB954",
                },
              }}
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}