import React from 'react';
import '../App.css'

// =====// React Bootstrap Imports //======
import Accordion from 'react-bootstrap/Accordion'

export default class Roadmap extends React.Component {

    render() {
        return(
            <div id="roadmap">

                <div className="roadmap-title sub-heading">
                    <div className="roadmap-title-row1">ROAD</div>
                    <div className="roadmap-title-row2">MAP</div>
                </div>

                    <div className="small-roadmap-title">
                        <div className="small-roadmap-title-row1">ROAD</div>
                        <div className="small-roadmap-title-row2">MAP</div>
                    </div>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                        <Accordion.Header id="accordion-header">TEMPOS GEN 1: 2D ART</Accordion.Header>
                            <Accordion.Body>
                                <div id="v2-map-container">
                                    <div id="map map-center">
                                        <div id="map-titles">TEMPOS GEN 1: 2D ART</div>
                                        <div id="map-list">
                                            <div id="map-items">
                                                <div id="map-titles">PHASE 1-1</div>
                                                <div>
                                                    Dropping of 1st gen. luxury watch art
                                                </div>
                                            </div>
                                            <div id="map-items">
                                                <div id="map-titles">PHASE 1-2</div>
                                                <div>
                                                    Genesis giveaway winners will be randomly picked
                                                </div>
                                            </div>
                                            <div id="map-items">
                                                <div id="map-titles">PHASE 1-3</div>
                                                <div>
                                                    Shipping of the physical watches
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header id="accordion-header">TEMPOS GEN 2: 3D ART</Accordion.Header>
                            <Accordion.Body>
                                <div id="v2-map-container">
                                    <div>
                                    <div id="map-titles">TEMPOS GEN 2: 3D ART</div>
                                        <div id="map-list">
                                            <div id="map-items">
                                                <div id="map-titles">PHASE 2-1</div>
                                                <div>
                                                    Revealing the 3D creations
                                                </div>
                                            </div>
                                            <div id="map-items">
                                                <div id="map-titles">PHASE 2-2</div>
                                                <div>
                                                    Launching of Tempos Season 1
                                                </div>
                                            </div>
                                            <div id="map-items">
                                                <div id="map-titles">PHASE 2-3</div>
                                                <div>
                                                    Time to get personal, with custom experiences for all Season 1 winners
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header id="accordion-header">TEMPOS GEN 3: WATCH OF THE METAVERSE</Accordion.Header>
                            <Accordion.Body>
                                <div id="v2-map-container">
                                    <div>
                                    <div id="map-titles">TEMPOS GEN 3: WATCH OF THE METAVERSE</div>
                                        <div id="map-list">
                                            <div id="map-items">
                                                <div id="map-titles">PHASE 3-1</div>
                                                <div>
                                                    Bridging the physical and digital worlds with custom watches for the Metaverse
                                                </div>
                                            </div>
                                            <div id="map-items">
                                                <div id="map-titles">PHASE 3-2</div>
                                                <div>
                                                    Launching of Season 2
                                                </div>
                                            </div>
                                            <div id="map-items">
                                                <div id="map-titles">PHASE 3-3</div>
                                                <div>
                                                    Keep dropping dope shit
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Header id="accordion-header">
                                DONATION TO LOCAL & GLOBAL CAUSES
                            </Accordion.Header>
                            <Accordion.Body>
                                <div id="v2-map-container">
                                    <div id="map-titles">DONATION TO LOCAL AND GLOBAL CAUSES</div>
                                    <div id="map-list">
                                        <div id="map-items">
                                            <div id="donate">
                                                With all of our drops and Seasons we will be donating a portion of the profits to charities both locally in Puerto Rico and globally to help people everywhere in need affected by natual disasters
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
            </div>
        )
    }
}