import React from 'react';
import foxicon from '../img/metamask_icon.png';
// import WalletConnect from '../img/walletConnect_Icon.svg';
// import CoinbaseWallet from '../img/coinbaseWallet_Icon.svg';

import Button from 'react-bootstrap/Button'

export default class walletModal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e)
    }
    render() {
        if (!this.props.show) {
            return null
        }
        return ( 
        
        <div className="wallet-root">
            <div>
                <p>Connect a wallet</p>
            </div>
            <div class="walletButtons">
                {/* Metamask wallet install */}
                <a target="_blank" rel="noreferrer noopener" href="https://metamask.io/">
                    <Button id="connect-Metamask">
                        <div id="button-text">
                            <div>Install Metamask</div>
                        </div>
                        <div className="button-icons">
                            <img width="24" height="24" src={foxicon} alt="Metamask Icon"></img>
                        </div>
                    </Button>
                </a>

                {/* WalletConnect install */}
                {/* <button id="connect-WalletConnect">
                    <div id="button-text">
                        <div>WalletConnect</div>
                    </div>
                    <div className="button-icons">
                        <img src={WalletConnect} alt="WalletConnect Icon"></img>
                    </div>
                </button> */}

                {/* Coinbase Wallet Connect */}
                {/* <button id="connect-CoinbaseWallet">
                    <div id="button-text">
                        <div>Coinbase Wallet</div>
                    </div>
                    <div className="button-icons">
                        <img src={CoinbaseWallet} alt="Coinbase Wallet Icon"></img>
                    </div>
                </button> */}
            </div>
        
            {/* <div>
                <button onClick={this.onClose}>Close</button>
            </div> */}
        </div>
        )
    }
}
