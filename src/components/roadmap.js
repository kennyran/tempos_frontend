import React from 'react';
import '../App.css'
import roadmap from '../img/roadmap.png';

export default class Roadmap extends React.Component {

    render() {
        return(
            <div id="roadmap">
                <div><h3>Roadmap</h3></div>
                <img id="roadmap-size" src={roadmap} alt="roadmap"/>
            </div>
        )
    }
}