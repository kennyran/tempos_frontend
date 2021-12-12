import React from 'react'
import '../App.css'
import Web3 from 'web3'

// ======// React Bootstrap imports //======
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'

// ======// Local Imports //======
import whitepaper from '../whitepaper/Tempos_Whitepaper.pdf'
import Community from './community'
import logo from '../img/tempos_logo.jpeg'

export default class TemposNav extends React.Component {
    state ={
        account: 'Mint Watch'
    }

    async componentDidMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    async loadBlockchainData() {
        const web3 = window.web3
        
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0]})
    }

    loadWeb3 = async () => {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.request({ method: "eth_requestAccounts" })
        }
        else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('Non-Ethereum browser detected. Refresh your page with your browser wallet!')
        }

        const chainId = await window.ethereum.request({
            method: 'eth_chainId'
        })

        const web3 = window.web3
        
        const accounts = await web3.eth.getAccounts()

        if (chainId !== '0x1') {
            alert("Please connect to Mainnet");
        } else {
            let wallet = accounts[0]
            this.setState({
                account: wallet
            })
        }
      }

    render() {
        return(
            <div className="temposNav">
                <Community />
                <Navbar collapseOnSelect expand="sm" variant="dark">
                    <Container> 
                        <Navbar.Brand>
                                <img src={logo} width="96" height="96" className="d-inline-block align-top" id="logo-header" alt="Tempos Logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="justify-content-end">
                                <Nav.Item>
                                    <Nav.Link href="#about">About Us</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#roadmap">Road Map</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#watch-inventory">Watch Inventory</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#team">Our Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link target="_blank" href={whitepaper}>Whitepaper</Nav.Link>
                                </Nav.Item>
                                <Nav.Item href="#mint">
                                    {/* Check account string and slice it appropriately */}
                                    <Button variant="light" className="nav-mint-btn" onClick={this.loadWeb3}>{this.state.account && `${this.state.account.slice(0, 6)}...${this.state.account.slice(this.state.account.length - 4, this.state.account.length)}`}</Button>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}