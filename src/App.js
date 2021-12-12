import './App.css';
import React from 'react';

// ======// Component imports //======
//import web3 from './components/web3'
import Modal from './components/walletmodal';
import Team from './components/team';
import Mint from './components/mint'
import Story from './components/story'
import Roadmap from './components/roadmap'
import WatchGallery from './components/watchgallery';
//import WalletButton from './components/connectwallet';
import TemposNav from './components/navbar'
import Artist from './components/artists';

// ======// React Bootstrap imports //======

// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'

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
      <div className="main">
        <header className="header">
          <TemposNav />
            <div className="small-title" id="sm-nav-title">
                  <div>Tempos</div>
            </div>
        </header>

        <Modal onClose={this.state.modalPopUp} show={this.state.show} />
        <section>
          <Mint />
        </section>
      </div>
      <section>
        <WatchGallery />
      </section>
      <section>
        <Story />
      </section>
      <section>
        <Artist/>
      </section>
      <section>
        <Roadmap />
      </section>
      <section>
      <Team />
      </section>
    </div>
  );
}
}

export default App;
