import React from 'react';
import '../App.css'

export default class Artist extends React.Component {

    render() {
        return(
            <div className="artist-root" id="artists">
                <div className="sub-heading artist-title" id="headers">
                    <div className="artist-title-row1">EMPOWERING YOUNG</div>
                    <div className="artist-title-row2">LOCAL ARTISTS</div>
                </div>

                <div className="small-artist-header" id="headers">
                    <div className="small-artist-title-row1">EMPOWERING YOUNG</div>
                    <div className="small-artist-title-row2">LOCAL ARTISTS</div>
                </div>

                <div className="artist-info-block">
                    <div className="artist-info">
                        Through this collection we also want to empower the community of young Puertorican artist from The School of Plastic Arts and Design of Puerto Rico. Having their art be showcased and giving them a platform to be exposed is very important to our team as we want to encourage every artist with ambitions from all over the world.
                    </div>
                    <div className="artist-info">
                        Our artists have spent over 100 hours of time hand-drawing each and every trait on our NFTs to make this project unique in every aspect imaginable.
                    </div>
                    <div className="artist-info">
                        From backgrounds, to watch faces, to watch dials, and unique interesting characters, our artists have shown their creative range and toolset. There is nothing left to be desired with over 100 traits to create thousands of combinations of artwork for Tempos NFTs thanks to the exceptional work our artists have done.
                    </div>
                </div>

                <div className="small-artist-info-block">
                    <div className="artist-info">
                        Through this collection we also want to empower the community of young puertorican artist from The School of Plastic Arts and Design of Puerto Rico. Having their art be showcased and giving them a platform to be exposed is very important to our team as we want to encourage every artist with ambitions from all over the world.
                    </div>
                    <div className="artist-info">
                        Our artists have spent over 100 hours of time hand-drawing each and every trait on our NFTs to make this project unique in every aspect imaginable.
                    </div>
                    <div className="artist-info">
                        From backgrounds, to watch faces, to watch dials, and unique interesting characters, our artists have shown their creative range and toolset. There is nothing left to be desired with over 100 traits to create thousands of combinations of artwork for Tempos NFTs.
                    </div>
                </div>
            </div>
        )
    }
}