import React from 'react';
import '../App.css'

import watch from '../img/watch-sneakpeak.png'

export default class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faq1: true,
            faq2: false,
            faq3: false,
            faq4: false,
            faq5: false
        }
    }

    render() {
        return(
            <div className="faq">
                <div className="faq-title">
                    FAQ's
                </div>
                <div className="faq-wrapper">
                    <div className="full-faq">
                        <div className="faq-nav">
                            <ul className="faq-list">
                                <li id="ques-title" onClick={() => this.setState({ faq1: true, faq2: false, faq3: false, faq4: false, faq5: false })}>
                                    <div id="ques-1">
                                        1. How to Mint?
                                    </div>
                                </li>
                                <li id="ques-title" onClick={() => this.setState({ faq2: true, faq1: false, faq3: false, faq4: false, faq5: false })}>
                                    <div id="ques-2">
                                        2. What's a Season?
                                    </div>
                                </li>
                                <li id="ques-title" onClick={() => this.setState({ faq3: true, faq1: false, faq2: false, faq4: false, faq5: false })}>
                                    <div id="ques-3" >
                                        3. What's the Genesis Collection?
                                    </div>
                                </li>
                                <li id="ques-title" onClick={() => this.setState({ faq4: true, faq1: false, faq2: false, faq3: false, faq5: false })}>
                                    <div id="ques-4">
                                        4. How to receive physical watches?
                                    </div>
                                </li>
                                <li id="ques-title" onClick={() => this.setState({ faq5: true, faq1: false, faq2: false, faq3: false, faq4: false })}>
                                    <div id="ques-5">
                                        5. How will the giveaway work?
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="faq-content">
                            {this.state.faq1 && <div className="faq-ans" id="faq-1">
                                <div className="inner-title">
                                    <h3>How to mint:</h3>
                                </div>
                                <p className="inner-faq">
                                    For both Whitelist and public mint, you will need:
                                </p>
                                <p className="inner-faq">
                                    - Ethereum wallet with the minimum amount of funds in it (account for gas fees)
                                </p>
                                <p className="inner-faq">
                                    - Enter amount of Tempos desired to mint, and confirm transaction with your wallet
                                </p>
                                <p className="inner-faq">
                                    - You can also reference this <a href="https://www.medium.com/@temposnft" target="_blank" rel="noreferrer">Medium blog</a> where we explain in a step by step manner of how to mint
                                </p> 
                            </div> }
                            {this.state.faq2 && <div className="faq-ans" id="faq-2">
                                <div className="inner-title">
                                    <h3>What is a Season?</h3>
                                </div>
                                <p className="inner-faq">
                                    - A season is a unique way for us to drop more exclusive watches to our community
                                </p>
                                <p className="inner-faq">
                                    - We will be selling Seasons to Genesis NFT holders, allowing access to unique and exclusive watches we acquire
                                </p>
                            </div> }
                            {this.state.faq3 && <div className="faq-ans" id="faq-3">
                                <div className="inner-title">
                                    <h3>Genesis Collection</h3>
                                </div>
                                <p className="inner-faq">
                                    - The Genesis collection is the collection of 3,000 NFTs that we are launching initially. Genesis holders will receive exclusive perks going forward with all of our drops and Seasons
                                </p>
                            </div> }
                            {this.state.faq4 && <div className="faq-ans" id="faq-4">
                                <div className="inner-title">
                                    <h3>Receiving Physical Watches</h3>
                                </div>
                                <p className="inner-faq">
                                    - To receive a physical watch you will have to fill out the form within our "Giveaway" Discord channel giving physical shipping address and KYC requirements
                                </p>
                                <p className="inner-faq">
                                    - Upon successful mint, you will be prompted to enter contact information to allow us, Tempos & it's team members, to contact you and get you your watch
                                </p>
                            </div> }
                            {this.state.faq5 && <div className="faq-ans" id="faq-5">
                                <div className="inner-title">
                                    <h3>How will the giveaway work?</h3>
                                </div>
                                <p className="inner-faq">
                                    - The winners will be chosen based on a percentage basis, giving whitelisted holders higher odds
                                </p>
                                <p className="inner-faq">
                                    - The percentages will be applied to all NFT holders and we will use a random number generator that will include all of the wallet addresses of current holders to randomize the drop
                                </p>
                                <p className="inner-faq">
                                    -In an effort to prove further transparency all drops will be shared screen and live in front of the community
                                </p>
                            </div> }
                        </div>
                        <div className="faq-img">
                            <img className="inner-image" src={watch} alt="Watch Sneakpeak"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}