import React from 'react';
import '../App.css'

// =====// React Bootstrap Imports //======
import Accordion from 'react-bootstrap/Accordion'

export default class FAQ extends React.Component {

    render() {
        return(
            <div>
                <div className="faq-title secondary-text">
                    FAQ's
                </div>
                <div id="faq">
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header id="accordion-header">What is the total supply?</Accordion.Header>
                                <Accordion.Body>
                                    <div id="v2-map-container">
                                        <div>
                                            <div id="map-titles">There will be a 1,000 piece initial supply for the Genesis Collection</div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header id="accordion-header">How will the marketplace work?</Accordion.Header>
                                <Accordion.Body>
                                    <div id="v2-map-container">
                                        <div>
                                            <div id="map-titles">
                                                Purchasing on the marketplace will be limited to holders of the Genesis Collection
                                            </div>
                                            <div id="map-titles">
                                                There will be monthly drops of watches, varying in style, price, and quantities, for our members to purchase with Ethereum
                                            </div>
                                            <div id="map-titles">
                                                It will be a first come, first serve basis with the watches listed on the marketplace to our holders
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header id="accordion-header">What blockchain will the marketplace be on?</Accordion.Header>
                                <Accordion.Body>
                                    <div id="v2-map-container">
                                        <div>
                                        <div id="map-titles">Ethereum Blockchain</div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item>
                                <Accordion.Header id="accordion-header">
                                    When is mint date?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div id="v2-map-container">
                                        <div id="map-titles">TBA</div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                </div>
            </div>
        )
    }
}