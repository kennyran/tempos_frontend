import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Community from './community'
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     NavLink
//   } from 'react-router-dom';
//   import Mint from './mint'

import bgVideo from '../img/intro-video/0001-0150_Slomo.mp4'

export default class Intro extends React.Component {

    notStarted = () => {
        alert("Minting hasn't started yet!")
    }

    render() {

        return(
            <div>
                <video autoPlay id="video">
                    <source src={bgVideo} type="video/mp4"/>
                </video>
                <Community />
                <div id="intro">
                    <div className="intro-wrapper">
                        <div className="title-root">
                            {/* <div className="title-block">
                                <div className="title">
                                    TEMPOS
                                </div>
                                <div className="vert-text">
                                    .NFT
                                </div>
                            </div> */}
                            <div className="title-text-block">
                                <p className="title-text-row1">
                                    <span id="tagline-text-color">
                                        3D</span> LUXURY
                                        <br/> 
                                        WATCH COLLECTION
                                </p>
                                <p className="title-text-row2">
                                    Limited supply 
                                    <span id="h-line"> - </span> 
                                    1000 items</p>
                            </div>
                        </div>

                        {/* <Router>
                            <Button>
                                <NavLink to="/mint" activeClassName="selected">Mint</NavLink>
                            </Button>

                            <Routes>
                                <Route path="/mint" element={<Mint />}>
                                </Route>
                            </Routes>
                        </Router> */}

                        <div className="mint-card">
                            <div className="short-about-desc">
                                <p>As the first of it's kind, Tempos is focused on utility. Our Genesis members will be able to use their membership to buy any watch listed on the marketplace</p>
                            </div>
                            <div className="card1">
                                <Card className="mint-body">
                                    <Card.Body>
                                        {/* <Card.Img src={''} className="mint-card-img" loading="lazy" />  */}
                                        <Card.Text className="card-heading">
                                            <div className="card-text-row">
                                                MINT
                                            </div>
                                            <div className=" card-text-row live-text">
                                                Not Live <span className="live-dot"></span>
                                            </div>
                                        </Card.Text>
                                        <div className="card-contents">
                                            <Card.Text>
                                                <div className="card-text-row2 secondary-text price-header">
                                                    Mint Price
                                                </div>
                                                <div className="card-text-row2 mint-price">
                                                    0.12 ETH
                                                </div>
                                                <div className="card-text-row2 secondary-text">$450</div>
                                            </Card.Text>
                                            <Card.Text>
                                                <div className="card-text-row2 mint-countdown secondary-text">
                                                    Countdown to mint:
                                                </div>
                                                <div className="card-text-row2 mint-countdown">
                                                    TBA
                                                </div>
                                            </Card.Text>
                                        </div>
                                        <div className="card-contents">
                                        <Card.Text>
                                            {/* <div className="card-text-row3">
                                                Available: 1000/1000
                                            </div> */}
                                            <div className="input">
                                                <input type="number" min="1" max="10" className="mint-amount-input" placeholder="MINT AMOUNT"/>
                                            </div>
                                        </Card.Text>

                                        <Button className="mint-btn"
                                        onClick={this.notStarted}>Mint</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}