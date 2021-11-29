import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
// import web3 from './web3';

export default class Mint extends React.Component {

    render() {
        return(
            <div className="mint-cards" id="mint">
                <CardGroup>
                    <div className="mint-card-row">
                        <Card border="warning" className="mint-cards normal-mint">
                            <Card.Body>
                                <Card.Title>
                                    <div className="card-title">Mint</div>
                                </Card.Title>
                                <div className="card-info">
                                    <Card.Text>
                                        <div>0.25Ξ per mint</div>
                                    </Card.Text>
                                    <Card.Text>
                                        <div>Tokens left:</div>
                                        <div>3000/3000</div>
                                    </Card.Text>
                                </div>
                                <div className="input">
                                    <InputGroup>
                                        <input type="number" min="1" max="10" className="mint-amount-input" placeholder="amount to mint"/>
                                    </InputGroup>
                                </div>
                                <div className="main-mint-btn">
                                    <Button variant="outline-light" disabled>Mint</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                        <div className="legendary-mints">
                        <Card border="warning" className="mint-cards">
                            <Card.Body>
                                <Card.Title>
                                    <div className="card-title">Legendary Mint</div>
                                </Card.Title>
                                <div className="card-info">
                                <Card.Text>
                                    <div>
                                        4 exclusive high end luxury watches
                                    </div>
                                </Card.Text>
                                <div className="legendary-watches">
                                    <Card.Text>
                                        <div>
                                            50Ξ per mint
                                        </div>
                                    </Card.Text>
                                    <Card.Text>
                                        <div>Tokens left:</div>
                                        <div>4/4</div>
                                    </Card.Text>
                                    <Button variant="outline-light" disabled>Mint</Button>
                                </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </CardGroup>
            </div>
        )
    }
}