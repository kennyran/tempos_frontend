import './App.css';
import React from 'react';
// ======// Component imports //======
//import web3 from './components/web3'
import Modal from './components/walletmodal';
import Team from './components/team';
import Community from './components/community';
import Mint from './components/mint'
import SneakPeak from './components/sneakpeak'
import Story from './components/story'
import Roadmap from './components/roadmap'
import WatchGallery from './components/watchgallery';
import whitepaper from './whitepaper/Tempos_Whitepaper.pdf'
import logo from './img/tempos_logo.jpeg'
//import Whitelist from './components/whitelist';
import WalletButton from './components/connectwallet';

// ======// React Bootstrap imports //======

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

class App extends React.Component {
  state = {
    show: false,
  }

  modalPopUp = e => {
    this.setState({
      show: !this.state.show
    })
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }
  
  render() {
  return (
    <div className="App">
      <header className="header">
          <Navbar collapseOnSelect expand="sm" variant="dark">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Item><Community /></Nav.Item>
              <Navbar.Brand className="title" id="nav-title">
              <img alt="logo" src={logo} width="72" height="72" className="title d-inline-block align-top"/>
                <div>Tempos</div>
              </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link target="_blank" href={whitepaper} id="nav-item">Whitepaper</Nav.Link>
              <Nav.Item>
                <WalletButton />
              </Nav.Item>
            </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="small-title" id="sm-nav-title">
              <img alt="logo" src={logo} width="72" height="72" className="title d-inline-block align-top"/>
                <div>Tempos</div>
          </div>
      </header>

      <Modal onClose={this.state.modalPopUp} show={this.state.show} />
      {/* <Whitelist/> */}
      <section>
        <Mint />
      </section>
      <hr className="hr-text" />
      <section>
        <SneakPeak />
      </section>
      <hr className="hr-text"/>
      <section>
        <Story />
      </section>
      <hr className="hr-text"/>
      <section>
        <WatchGallery />
      </section>
      <hr className="hr-text"/>
      <Roadmap />
      <hr className="hr-text" />
      <div><h3>Team</h3></div>
      <Team />
      <hr className="hr-text" />
      <div className="page-end">
        <div>
          Join our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/WrhPDzWmcP">Discord</a> for updates!
        </div>
      </div>
    </div>
  );
}
}

export default App;
