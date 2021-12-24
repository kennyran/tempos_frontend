import React from 'react';
import '../App.css'

export default class Artist extends React.Component {

    render() {
        return(
            <div className="faq">
                <div className="faq-title">
                    FAQ's
                </div>
                <div className="faq-wrapper">
                    <div className="faq-nav">
                        <div id="ques-1">
                            <div id="ques-title">
                                1. How to Mint?
                            </div>
                            <div id="faq-ans">
                                <p>
                                    On the date both presale/whitelist and minting begins, you will need:
                                </p>
                                <p>
                                    - Ethereum wallet with the minimum amount of funds in it (account for gas fees)
                                </p>
                                <p>
                                    - Enter mint amount, and confirm transaction with your wallet
                                </p>
                                <p>
                                    - You can also reference this <a href="medium.com/@temposnft">Medium blog</a> where we explain in a step by step manner of how to mint
                                </p> 
                            </div>
                        </div>
                        <div id="ques-2">
                            <div id="ques-title">
                                2. What is a Season?
                            </div>
                            <div id="faq-ans">
                                <p>
                                    - A season is a unique way for us to drop more exclusive watches to our community. We will be selling "Seasons" to Genesis NFT holders, allowing access to unique and exclusive watches we acquire
                                </p>
                            </div>
                        </div>
                        <div id="ques-3">
                            <div id="ques-title">
                                3. What is the Genesis Collection?
                            </div>
                            <div id="faq-ans">
                                <p>
                                    - The Genesis collection is the collection of 3,000 NFTs that we are launching initially. Genesis holders will receive exclusive perks going forward with all of our drops and Seasons
                                </p>
                            </div>
                        </div>
                        <div id="ques-4">
                            <div id="ques-title">
                                4. How to receive physical watches?
                            </div>
                            <div id="faq-ans">
                                <p>
                                    - To receive a physical watch you will have to fill out the form within our "Giveaway" Discord channel giving physical shipping address and KYC requirements
                                </p>
                            </div>
                        </div>
                        <div id="ques-5">
                            <div id="ques-title">
                                5. How will winners be chosen for giveaway?
                            </div>
                            <div id="faq-ans">
                                <p>
                                    - The winners will be chosen based on a percentage basis, giving whitelisted holders higher odds. The percentages will be applied to all NFT holders and we will use a random number generator that will include all of the wallet addresses of current holders to randomize the drop
                                </p>
                                <p>
                                    -In an effort to prove further transparency all drops will be shared screen and live in front of the community
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}