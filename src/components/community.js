import React from 'react';
import '../App.css';

export default class Community extends React.Component {

    render() {
        return(
            <div className="social-links secondary-text">
                    <p>
                        <span>
                            <a target="_blank" rel="noreferrer noopener" id="social-links" href="https://discord.gg/WrhPDzWmcP">Discord</a>
                        </span> / 
                        <span>
                            <a target="_blank" rel="noreferrer noopener" id="social-links" href="https://twitter.com/Tempos_NFT"> Twitter</a>
                        </span> / 
                        <span>
                            <a target="_blank" rel="noreferrer noopener" id="social-links" href="https://opensea.io/collection/temposnft"> OpenSea</a>
                        </span> / 
                        <span>
                            <a target="_blank" rel="noreferrer noopener" id="social-links" href="https://medium.com/@temposnft"> Medium</a>
                        </span>
                    </p>
                </div>
            // <div className="community-icons-root">
            //     <div className="community-icons-row">
            //         <div className="community-icons discord-link">
            //             <a target="_blank" rel="noreferrer noopener" id="social-links" href="https://discord.gg/WrhPDzWmcP">
            //                 <img className="img-color" src={discord} alt="discord logo"></img>
            //             </a>
            //         </div>
            //         <div className="community-icons twitter-link">
            //             <a target="_blank" rel="noreferrer noopener" id="social-links" href="https://twitter.com/Tempos_NFT">
            //                 <img src={twitter} className="img-color" alt="twitter logo, downloaded from fontawesome"></img>
            //                 </a>
            //         </div>
            //         <div className="community-icons opensea-icon">
            //             <a target="_blank" rel="noreferrer noopener" id="social-links" href="https://opensea.io/collection/temposnft">
            //                 <img src={opensea} alt="opensea logo" className="img-color"/></a>
            //         </div>
            //         <div className="community-icons">
            //             <a target="_blank" rel="noreferrer noopener" id="social-links" href="https://medium.com/@temposnft">
            //                 <img src={medium} alt="medium logo" className="medium img-color"/></a>
            //         </div>
            //     </div>
            // </div>
        )
    }
}