import React from 'react';
import '../App.css'
// =====// Component imports //=====
//import tuxwalking from '../characters/Tux-walking.png'
import walking from '../characters/Hoodie-walking.png'
//import hoodie from '../characters/hoodie-sitting.png'
import kev from '../characters/kevin-transp.png'
import spence from '../characters/spencer-transp.png'

// =====// React Bootstrap imports //======
import Card from 'react-bootstrap/Card'

export default class Story extends React.Component {

    render() {
        return(
            <div className="story-root" id="about">
                <div className="arrow">
                    <span className="transition-arrow">&#187;</span>
                </div>
                <div className="about-header" id="headers">
                    <div className="about-title-row1">ABOUT</div>
                    <div className="about-title-row2">TEMPOS</div>
                </div>

                <div className="small-about-header" id="headers">
                    <div className="small-about-title-row1">ABOUT</div>
                    <div className="small-about-title-row2">TEMPOS</div>
                </div>

                <div className="art-sneakpeak" id="art-cards">
                    <Card className="card-art">
                        <Card.Body className="card-1">
                            <Card.Img className="art-img" src={spence}/>
                        </Card.Body>
                    </Card>
                    <Card className="card-art">
                        <Card.Body className="card-2">
                            <Card.Img className="art-img" src={walking}/>
                        </Card.Body>
                    </Card>
                    <Card className="card-art">
                        <Card.Body className="card-3">
                            <Card.Img className="art-img" src={kev}/>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <p className="story-enter">
                        All of our NFT holders will have the chance to win one of our limited selection watches currently held in inventory. This percentage is split into two categories, whitelisted addresses and public sale address.
                    </p>
                </div>

                <div>
                    <p className="story-enter">
                        The whitelisted addresses will receive a higher chance of receiving a physical watch via giveaway. Prior to the giveaway there will be a snapshot of all existing NFT holders, this will be used for determining the recipients of the physical watches.
                    </p>
                </div>
                <div>
                    <p className="story-enter">
                        In order to receive a physical watch you will have to fill out the registration form after successfully minting.
                    </p>
                </div>
            </div>
        )
    }
}