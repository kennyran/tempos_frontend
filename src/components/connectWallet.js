import React from 'react';
import '../App.css'
import Web3 from 'web3'

import Web3Modal from 'web3modal'
import WalletConnectProvider from "@walletconnect/web3-provider";

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

    // loadWeb3 = async () => {
    //     if (window.ethereum) {
    //       window.web3 = new Web3(window.ethereum)
    //       await window.ethereum.request({ method: "eth_requestAccounts" })
    //     }
    //     else if (window.web3) {
    //       window.web3 = new Web3(window.web3.currentProvider)
    //     }
    //     else {
    //       window.alert('Non-Ethereum browser detected. Refresh your page with your browser wallet!')
    //     }

    //     const chainId = await window.ethereum.request({
    //         method: 'eth_chainId'
    //     })

    //     const web3 = window.web3
        
    //     const accounts = await web3.eth.getAccounts()

    //     if (chainId !== '0x1') {
    //         alert("Please connect to Mainnet");
    //     } else {
    //         let wallet = accounts[0]
    //         this.setState({
    //             account: wallet
    //         })
    //     }
    //   }

      async getWeb3() {
        const providerOptions = {
          walletconnect: {
            package: WalletConnectProvider, // required
            options: {
              infuraId: "https://mainnet.infura.io/v3/39c30420efe84c7fbcc7f1579604e64f", // required
              mobileLinks: [
                "rainbow",
                "metamask",
                "trust"
              ]
            }
          },
          metamask: {
            id: "injected",
            name: "MetaMask",
            type: "injected",
            check: "isMetaMask"
          },
          coinbase: {
            id: "injected",
            name: "Coinbase Wallet",
            type: "injected",
            check: "isCoinbase"
          }
        };
        
        const web3Modal = new Web3Modal({
          network: "mainnet", // optional
          cacheProvider: true, // optional
          providerOptions // required
        });
        
        const provider = await web3Modal.connect();
        
        let web3 = new Web3(provider);

        web3 = new Web3(provider);
            return web3;
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
      <Button onClick={this.getWeb3} variant="light" className="nav-mint-btn">Connect Wallet</Button>
    );
    }
  }