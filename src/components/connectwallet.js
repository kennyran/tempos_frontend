import React from 'react'
import '../App.css'
import web3 from './web3'

export default class WalletButton extends React.Component {
    state = {
        wallet: 'Connect Wallet'
    }

    walletAddress = async () => {
        let showAddress = await web3.eth.getAccounts();
    
        this.setState({
          wallet: showAddress[0]
        })
    
        console.log(showAddress)
      }

    render() {
        return(
            <div className="wallet-button">
                  <button className="connect-wallet" onClick= {this.walletAddress}>
                    {this.state.wallet}
                  </button>
                </div>
        )
    }
}