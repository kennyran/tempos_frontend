import React from 'react';
import discord from '../img/discord.png'
// import twitter from '../img/twitter.png'
// import opensea from '../img/opensea.svg'
import '../App.css';

export default class Community extends React.Component {

    render() {
        return(
            <div className="community-icons-root">
                <div className="community-icons-row">
                    <div className="community-icons discord-link">
                        <a target="_blank" rel="noreferrer noopener" id="social-links" href="https://discord.gg/WrhPDzWmcP">
                            <img height="36" width="36" src={discord} alt="discord logo"></img>
                        </a>
                    </div>
                    {/* <div className="community-icons twitter-link">
                        <a target="_blank" rel="noreferrer noopener" id="social-links" href="https://twitter.com">
                            <img height="36" width="36" src={twitter} alt="twitter logo, downloaded from fontawesome"></img>
                            </a>
                    </div>
                    <div className="community-icons opensea-icon">
                        <a target="_blank" rel="noreferrer noopener" id="social-links" href="https://opensea.io">
                            <img height="36" width="36" src={opensea} alt="opensea logo"/></a>
                    </div> */}
                </div>
            </div>
        )
    }
}