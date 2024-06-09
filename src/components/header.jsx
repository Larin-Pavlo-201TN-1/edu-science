import React, { Component } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./img/logo.webp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/heder.css"

import { Home } from "../pages/home";
import Equipment from "../pages/equipment.jsx";
import News from "../pages/news";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo} width="60" height="60" className="img_heder d-inline-block" alt="Logo" />
                            <p className="d-inline-block align-top logo-name">Навчальна лабораторія кафедри <span className="d-block">закладу вищої освіти</span></p>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='mr-auto mr-md-0 ms-3'>
                                <Nav.Link href="/">На головну</Nav.Link>
                                <Nav.Link href="/equipment">Обладнання</Nav.Link>
                                <Nav.Link href="/news">Новини</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <main>
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/equipment" element={<Equipment />} />
                            <Route exact path="/news" element={<News />} />
                        </Routes>
                    </Router>
                </main>
            </>
        );
    }
}
