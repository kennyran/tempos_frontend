import React from 'react';
import '../App.css'
import Web3 from 'web3'

import Button from 'react-bootstrap/Button'

export default class ConnectButton extends React.Component {
  
    state ={
        account: ''
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
  
    return this.state.account ? (
        
        <Button variant="light" className="nav-mint-btn">
          <div>
            {/* check account is defined and then slice the string */}
            {this.state.account &&
              `${this.state.account.slice(0, 6)}...${this.state.account.slice(
                this.state.account.length - 4,
                this.state.account.length
              )}`}
          </div>
        </Button>
    ) : (
      <Button onClick={this.loadWeb3} variant="light" className="nav-mint-btn">Connect Wallet</Button>
    );
    }
  }