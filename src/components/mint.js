import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import web3 from './web3';
import tuxwalking from '../characters/Tux-walking.png'
import mig from '../characters/mig-transp.png'

export default class Mint extends React.Component {

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
                        <p>TEMPOS is a community based NFT project that utilizes the technology of NFT's to disrupt markets that are traditionally difficult to get into. We are the first watch project merging the digital world of NFT's and the physical world of high end watches.</p>
                    </div>
                    <div className="learn-btn">
                        <Button variant="light"><a href="https://linktr.ee/TemposNFT" target="_blank" rel="noreferrer" className="linktree">Learn More</a></Button>
                    </div>
                </div>

                <div className="mint-cards">
                    <div className="card1">
                        <Card className="normal-mint">
                            <Card.Body>
                                <Card.Img src={mig} className="mint-card-img" /> 
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
                                        Cost: 0.25Ξ
                                    </div>
                                    <div className="card-text-row3">
                                        Available: 3000/3000
                                    </div>
                                </Card.Text>
                                <div className="input">
                                    <input type="number" min="1" max="10" className="mint-amount-input" placeholder="AMOUNT TO MINT"/>
                                </div>

                                <Button className="normal-mint-btn" variant="light">Mint</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card2">
                        <Card className="legendary-mint">
                            <Card.Body>
                                <Card.Img src={tuxwalking} className="mint-card-img"/> 
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

                                <Button className="leg-mint-btn" variant="light">Mint</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}