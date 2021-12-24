import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import tuxwalking from '../characters/Tux-walking.png'
import mig from '../characters/mig-transp.png'
//import Countdown from './countdownTimer';
import Whitelist from './whitelist';

export default class Mint extends React.Component {

    notStarted = () => {
        alert("Minting hasn't started yet!")
    }

    render() {

        return(
            <div id="mint">
                <div className="title-root">
                    <div className="title-block">
                        <div className="title">
                            TEMPOS
                        </div>
                        <div className="vert-text">
                            .NFT
                        </div>
                    </div>
                    <div className="title-text">
                        <p>TEMPOS is collection of 3,000 NFTs that bridges high end watches of the physical with the digital world. We are a community based project that utilizes the technology of NFTs to disrupt markets that are traditionally difficult to get into.</p>
                    </div>
                    <div className="gif-countdown">
                        <div className="countdown-card">
                            <div className="countdown">
                                {/* <Countdown/> */}
                                COUNTDOWN TO MINT & ART SNEAKPEAK:
                                <p>
                                    Coming soon<span className="dot dot1">.</span><span className="dot dot2">.</span><span className="dot dot3">.</span>
                                </p>
                            </div>
                            <div className="learn-btn">
                                <Whitelist/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mint-cards">
                    <div className="card1">
                        <Card className="normal-mint">
                            <Card.Body>
                                <Card.Img src={mig} className="mint-card-img" loading="lazy" /> 
                                <Card.Text>
                                    <div className="card-text-row1">
                                        NORMAL
                                    </div>
                                    <div className="card-text-row2">
                                        MINT
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="card-text-row3">
                                        Cost: 0.30Ξ
                                    </div>
                                    <div className="card-text-row3">
                                        Available: 3000/3000
                                    </div>
                                </Card.Text>
                                <div className="input">
                                    <input type="number" min="1" max="10" className="mint-amount-input" placeholder="AMOUNT TO MINT"/>
                                </div>

                                <Button className="normal-mint-btn" variant="light"
                                onClick={this.notStarted}>Mint</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card2">
                        <Card className="legendary-mint">
                            <Card.Body>
                                <Card.Img src={tuxwalking} className="mint-card-img" loading="lazy"/> 
                                <Card.Text>
                                    <div className="leg-text-row1">
                                        LEGENDARY
                                    </div>
                                    <div className="leg-text-row2">
                                        MINT
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div className="leg-text-row3">
                                        Cost: 50Ξ
                                    </div>
                                    <div className="leg-text-row3">
                                        Available: 4/4
                                    </div>
                                </Card.Text>

                                <Button className="leg-mint-btn" variant="light"
                                onClick={this.notStarted}>Mint</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}