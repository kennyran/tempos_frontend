import React from 'react';
import '../App.css'
import Carousel from 'react-bootstrap/Carousel'

// =====// Watch image imports //======
import batmanOyster from '../img/watches/batman-oyster.png'
import batmanJubilee from '../img/watches/batmanjubilee.png'
import pepsiOyster from '../img/watches/pepsi-oyster.png'
import pepsiJubilee from '../img/watches/pepsi-jubilee.png'
import subDate from '../img/watches/submariner-date.png'
import subKermit from '../img/watches/submariner-kermit.png'
import skydweller from '../img/watches/skydweller.png'
import daytonaPanda from '../img/watches/daytona-panda.png'
import daytonaEverose from '../img/watches/daytona-rose-chocolate-dial.png'
import ap15500 from '../img/watches/ap-15500.png'
import apChrono from '../img/watches/ap-chrono-white.png'

export default class WatchGallery extends React.Component {

    render() {
        return(
            <div id="watch-inventory">
                <div id="watch-header">
                    <div className="arrow">
                        <span className="transition-arrow">&#187;</span>
                    </div>
                    <div className="watch-title sub-heading">
                        <div className="watch-title-row1">WATCH</div>
                        <div className="watch-title-row2">INVENTORY</div>
                    </div>
                </div>

                <div id="small-watch-header">
                    <div className="small-watch-title">
                        <div className="small-watch-title-row1">WATCH</div>
                        <div className="small-watch-title-row2">INVENTORY</div>
                    </div>
                </div>

                <div id="watch-body">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-50 img-slide" id="small-img" src={batmanOyster} alt="first slide"/>
                            <Carousel.Caption>
                                <div id="img-text">
                                    Rolex Batman Oyster
                                </div>
                                <p>AMOUNT: 3</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-50 img-slide" id="small-img" src={batmanJubilee} alt="2nd slide"/>
                            <Carousel.Caption>
                                <div id="img-text">
                                    Rolex Batman Jubilee
                                </div>
                                <p>AMOUNT: 3</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-50 img-slide" id="small-img" src={pepsiOyster} alt="3rd slide"/>
                            <Carousel.Caption>
                                <div id="img-text">
                                    Rolex Pepsi Oyster
                                </div>
                                <p>AMOUNT: 3</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-50 img-slide" id="small-img" src={pepsiJubilee} alt="4th slide"/>
                            <Carousel.Caption>
                                <div id="img-text">
                                    Rolex Pepsi Jubilee
                                </div>
                                <p>AMOUNT: 3</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-50 img-slide" id="small-img" src={subDate} alt="5th slide"/>
                            <Carousel.Caption>
                                <div id="img-text">
                                    Rolex Submariner Date
                                </div>
                                <p>AMOUNT: 3</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-50 img-slide" id="small-img" src={subKermit} alt="6th slide"/>
                            <Carousel.Caption>
                                <div id="img-text">
                                    Rolex Submariner Kermit
                                </div>
                                <p>AMOUNT: 3</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-50 img-slide" id="small-img" src={skydweller} alt="7th slide"/>
                            <Carousel.Caption>
                                <div id="img-text">
                                    Rolex Sky Dweller Blue Dial
                                </div>
                                <p>AMOUNT: 3</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-50 img-slide" id="small-img" src={daytonaPanda} alt="8th slide"/>
                            <Carousel.Caption>
                                <div id="img-text">
                                    Rolex Cosmograph Daytona White Gold Silver Dial Panda
                                </div>
                                <p>AMOUNT: 1</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-50 img-slide" id="small-img" src={daytonaEverose} alt="9th slide"/>
                            <Carousel.Caption>
                                <div id="img-text">
                                    Rolex Cosmograph Daytona Full Rose Gold Chocolate Dial
                                </div>
                                <p>AMOUNT: 1</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-50 img-slide" id="ap-watches" src={ap15500} alt="10th slide"/>
                            <Carousel.Caption>
                                <div id="img-text">
                                    AP Royal Oak 15500 Black Dial
                                </div>
                                <p>AMOUNT: 1</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-50 img-slide" id="ap-watches" src={apChrono} alt="11th slide"/>
                            <Carousel.Caption>
                                <div id="img-text">
                                    AP Chrono Panda
                                </div>
                                <p>AMOUNT: 1</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}