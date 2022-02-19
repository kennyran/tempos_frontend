import React from 'react';
import '../App.css'
// =====// Component imports //=====
import walking from '../characters/Hoodie-walking.png'
import kev from '../characters/kevin-transp.png'
import spence from '../characters/spencer-transp.png'

// =====// React Bootstrap imports //======
import Card from 'react-bootstrap/Card'

export default class Story extends React.Component {

    render() {
        return(
            <div className="story-root" id="about">

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