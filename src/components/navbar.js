import React from 'react'
import '../App.css'

// ======// React Bootstrap imports //======
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/esm/Container'

// ======// Local Imports //======
//import logo from '../img/tempos_logo.jpeg'
import ConnectButton from './connectWallet'

export default class TemposNav extends React.Component {

    render() {
        return(
            <div className="temposNav">
                <Navbar collapseOnSelect expand="sm" variant="dark">
                    <Container> 
                        <Navbar.Brand>
                                {/* <img src={logo} width="96" height="96" className="d-inline-block align-top" id="logo-header" alt="Tempos Logo"/> */}
                            <div className="title-block">
                                <div className="title">
                                    TEMPOS
                                </div>
                                {/* <div className="vert-text">
                                    .NFT
                                </div> */}
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="justify-content-end">
                                <Nav.Item>
                                    <Nav.Link href="#roadmap">
                                        <div className="nav-text">
                                            Road Map
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#faq">
                                        <div className="nav-text">
                                            FAQ
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#team">
                                        <div className="nav-text">
                                            Our Team
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <div className="nav-vert-line"></div>
                                <Nav.Item href="#mint">
                                    <ConnectButton/>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}