import React from 'react';
import '../App.css'

import copperWatch from '../img/tempos_copper.png'


export default class Roadmap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map1: true,
            map2: false,
            map3: false,
            map4: false
        }
    }

    render() {
        return(
            <div>
                <div className="roadmap-title secondary">
                    ROADMAP
                </div>
                <div className="faq" id="roadmap">
                    <div className="faq-wrapper">
                        <div className="full-faq">
                            <div className="faq-nav">
                                <ul className="faq-list">
                                    <li id="ques-title" onClick={() => this.setState({ map1: true, map2: false, map3: false, map4: false })}>
                                        <div id="ques-1">
                                            1. <span>Genesis Collection</span>
                                        </div>
                                    </li>
                                    <li id="ques-title" onClick={() => this.setState({ map2: true, map1: false, map3: false, map4: false })}>
                                        <div id="ques-2">
                                            2. <span>Web3 Watch Marketplace by Tempos</span>
                                        </div>
                                    </li>
                                    <li id="ques-title" onClick={() => this.setState({ map3: true, map1: false, map2: false, map4: false })}>
                                        <div id="ques-3" >
                                            3. <span>Monthly Watch Drops</span>
                                        </div>
                                    </li>
                                    <li id="ques-title" onClick={() => this.setState({ map4: true, map1: false, map2: false, map3: false })}>
                                        <div id="ques-4">
                                            4. <span>Metaverse watch store development</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="faq-content">
                                {this.state.map1 && <div className="faq-ans" id="faq-1">
                                    <div className="inner-title">
                                        <h3>Genesis Collection</h3>
                                    </div>
                                    <p className="inner-faq">
                                        - 1,000 piece collection
                                    </p>
                                    <p className="inner-faq">
                                        - Genesis NFT's will provide access to Tempos Watch Marketplace
                                    </p>
                                    <p className="inner-faq">
                                        - Art reveal will be 48 hours post mint
                                    </p> 
                                </div> }
                                {this.state.map2 && <div className="faq-ans" id="faq-2">
                                    <div className="inner-title">
                                        <h3>Watch Marketplace</h3>
                                    </div>
                                    <p className="inner-faq">
                                        - Tempos will create the world's first members only web3 watch marketplace, with our membership is purchased on the blockchain as a Non-Fungible-Token (NFT) and owned by the token-holder to gain access to our marketplace and watch purchasing experience
                                    </p>
                                    <p className="inner-faq">
                                        - Anyone can enter the site and look at our watch inventory for sale, but only verified Tempos members will be able to purchase items in the marketplace
                                    </p>
                                    <p className="inner-faq">
                                        - Payment for watches will be in ETH
                                    </p>
                                </div> }
                                {this.state.map3 && <div className="faq-ans" id="faq-3">
                                    <div className="inner-title">
                                        <h3>Marketplace Monthly Drops</h3>
                                    </div>
                                    <p className="inner-faq">
                                        - Starting with a small sample size of high end watches, the first month of the marketplace our members will have exclusive access to purchase them on a first come, first serve basis.
                                    </p>
                                </div> }
                                {this.state.map4 && <div className="faq-ans" id="faq-4">
                                    <div className="inner-title">
                                        <h3>Metaverse Watch Store</h3>
                                    </div>
                                    <p className="inner-faq">
                                        - Post marketplace launch, we will begin developing a metaverse store in which Tempos Members will be able to shop and buy watches in the store, just as they would on the Tempos Marketplace
                                    </p>
                                    <p className="inner-faq">
                                        - Members will also be able to display their NFT in a display if they wish to. Any metaverse user will be able to enter the store, but only Tempos members will be able to shop in the store
                                    </p>
                                </div> }
                            </div>
                            <div className="faq-img">
                                <img className="inner-image small-img" src={copperWatch} alt="Watch Sneakpeak"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}