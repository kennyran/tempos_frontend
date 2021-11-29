import './App.css';
import React from 'react';
// ======// Component imports //======
// import web3 from './components/web3'
import Modal from './components/walletmodal';
import Team from './components/team';
import Community from './components/community';
import Mint from './components/mint'
import SneakPeak from './components/sneakpeak'
import Story from './components/story'
import Roadmap from './components/roadmap'
import WatchGallery from './components/watchgallery';
import whitepaper from './whitepaper/Tempos_Whitepaper.pdf'

// ======// React Bootstrap imports //======

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class App extends React.Component {
  state = {
    show: false
  }

  modalPopUp = e => {
    this.setState({
      show: !this.state.show
    })
  }
  

  render() {
  return (
    <div className="App">
      <header className="header">
        <container>
          <Navbar>
            <Nav.Item><Community /></Nav.Item>
              <Navbar.Brand className="title" id="nav-title">
                Tempos
              </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link target="_blank" href={whitepaper} id="nav-item">Whitepaper</Nav.Link>
              <Nav.Item>
                <div className="wallet-button">
                  <button className="connect-wallet" onClick= {e => { this.modalPopUp(e)}}>
                    Connect Wallet
                  </button>
                </div>
              </Nav.Item>
            </Nav>
          </Navbar>
        </container>
      </header>

      <Modal onClose={this.state.modalPopUp} show={this.state.show} />
      <Mint />

      <SneakPeak />
      <hr className="hr-text"/>
      <Story />
      <hr className="hr-text"/>
      <WatchGallery />
      <hr className="hr-text"/>
      <Roadmap />
      <hr className="hr-text" data-content="Team"/>
      <div><h3>Team</h3></div>
      <Team />
      <div>Join our discord for updates!</div>
    </div>
  );
}
}

export default App;
