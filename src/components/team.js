import React from 'react';
import '../App.css';
// ======// Avatar Imports //======
import kenny from '../img/avatars/kenny_avatar.png'
import spencer from '../img/avatars/Spencer-pfp.png'
import kevin from '../img/avatars/kevin-pfp.png'
import miguel from '../img/avatars/miguel-pfp.png'
import kiana from '../img/avatars/kiana-pfp.png'
import jan from '../img/avatars/jan-pfp.png'
import john from '../img/avatars/jose-pfp.png'
import jorge from '../img/avatars/mod-2-pfp.png'

// ======// Image imports //======
import twitter from '../img/twitter-white.svg'

// ======// React Bootstrap imports //======
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

export default class Team extends React.Component {

    render() {
        return(
            <div className="team-root" id="team">
                <div id="team-header">
                    <div className="team-title">
                        <div className="team-title-row1">OUR</div>
                        <div className="team-title-row2">TEAM</div>
                    </div>
                </div>

                <div id="small-team-header">
                    <div className="small-team-title">
                        <div className="small-team-title-row1">OUR</div>
                        <div className="small-team-title-row2">TEAM</div>
                    </div>
                </div>
                    <CardGroup className="team-cards-row1">
                    <Card className="team-cards">
                        <Card.Img className="card-imgs" id="john" src={john} variant="top" loading="lazy" />
                        <Card.Body>
                            <Card.Text>
                                <div className="team-members">
                                    <div id="team-name">John Velas</div>
                                    <div id="team-role">Investment Advisor</div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="team-cards">
                        <Card.Img className="card-imgs" src={jorge} variant="top" loading="lazy" />
                        <Card.Body>
                            <Card.Text>
                            <div className="team-members">
                                <div id="team-name">Jorge Viera</div>
                                <div id="team-role">Creative Director</div>
                            </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="team-cards">
                        <Card.Img className="card-imgs" src={jan} variant="top" loading="lazy" />
                        <Card.Body>
                            <Card.Text>
                            <div className="team-members">
                                <div id="team-name">Jan Viera</div>
                                <div id="team-role">Co-Founder</div>
                                <div id="team-socials">
                                        <a href="https://twitter.com/Janvieranft" target="_blank" rel="noreferrer">
                                            <img src={twitter} alt="Twitter"/>
                                        </a>
                                    </div>
                            </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="team-cards">
                        <Card.Img className="card-imgs" src={kevin} id="kevin" variant="top" loading="lazy" />
                        <Card.Body>
                            <Card.Text>
                                <div className="team-members">
                                    <div id="team-name">Kevin Rodriguez</div>
                                    <div id="team-role">Co-Founder</div>
                                    <div id="team-socials">
                                        <a href="https://twitter.com/kevinga_14" target="_blank" rel="noreferrer">
                                            <img src={twitter} alt="Twitter"/>
                                        </a>
                                    </div>
                                </div>
                            </Card.Text>
                            </Card.Body>
                    </Card>
                    </CardGroup>
                    <CardGroup className="team-cards-row2 row2">
                     <Card className="team-cards">
                        <Card.Img className="card-imgs" id="spence" src={spencer} variant="top" loading="lazy" />
                        <Card.Body>
                            <Card.Text>
                                <div className="team-members">
                                    <div id="team-name">Whitekicks</div>
                                    <div id="team-role">Crypto Market Advisor</div>
                                    <div id="team-socials">
                                        <a href="https://twitter.com/kickswhite" target="_blank" rel="noreferrer">
                                            <img src={twitter} alt="Twitter"/>
                                        </a>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="team-cards">
                    <Card.Img className="card-imgs" src={kenny} id="kenny" variant="top" loading="lazy" />
                    <Card.Body>
                        <Card.Text>
                            <div className="team-members">
                                <div id="team-name">Kennyran.eth</div>
                                <div id="team-role">Developer</div>
                                <div id="team-socials">
                                    <a href="https://www.twitter.com/kenny_rancour" target="_blank" rel="noreferrer">
                                        <img src={twitter} alt="Twitter"/>
                                    </a>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card className="team-cards">
                    <Card.Img className="card-imgs" id="mig" src={miguel} variant="top" loading="lazy" />
                        <Card.Body>
                            <Card.Text>
                                <div className="team-members">
                                    <div id="team-name">Miguel Storer</div>
                                    <div id="team-role">Art Director</div>
                                    <div id="team-socials">
                                        <a href="https://twitter.com/stolabonline" target="_blank" rel="noreferrer">
                                            <img src={twitter} alt="Twitter"/>
                                        </a>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="team-cards">
                        <Card.Img className="card-imgs" src={kiana} variant="top" loading="lazy" />
                        <Card.Body>
                            <Card.Text>
                            <div className="team-members">
                                <div id="team-name">Kiana Diaz</div>
                                <div id="team-role">Artist</div>
                                <div id="team-socials">
                                    <a href="https://twitter.com/kianadiazz" target="_blank" rel="noreferrer">
                                        <img src={twitter} alt="Twitter"/>
                                    </a>
                                </div>
                            </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup>
            </div>
        )
    }
}