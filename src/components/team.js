import React from 'react';
import '../App.css';


export default class Team extends React.Component {

    render() {
        return(
            <div className="team-root" id="team">
                <div id="team-title">
                    <div className="team-header">Who are we?</div>
                </div>

                    <div className="team-members">
                        <div>Whitekicks</div>
                        <div>Crypto Market Advisor</div>
                    </div>
                    <div className="team-members">
                        <div>Kevin Rodriguez</div>
                    </div>
                    <div className="team-members">
                        <div>Jeicarlo Ruiz</div>
                    </div>
                    <div className="team-members">
                        <div>Kennyran.eth</div>
                        <div>Blockchain & Web developer</div>
                    </div>
                    <div className="team-members">
                        <div>Miguel Storer</div>
                        <div>Art Director</div>
                    </div>
                    <div className="team-members">
                        <div>Kiana Diaz</div>
                        <div>Artist</div>
                    </div>
            </div>
        )
    }
}