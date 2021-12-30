import './App.css';
import React from 'react';

// ======// Component imports //======
import Team from './components/team';
import Mint from './components/mint'
import Story from './components/story'
import Roadmap from './components/roadmap'
import WatchGallery from './components/watchgallery';
import TemposNav from './components/navbar'
import Artist from './components/artists';
import FAQ from './components/faq'

class App extends React.Component {
  
  render() {
  return (
    <div className="App">
      <div className="main">
        <header className="header">
          <TemposNav />
            <div className="small-title" id="sm-nav-title">
                  <div>Tempos</div>
            </div>
        </header>
        <section>
          <Mint />
        </section>
      </div>
      <section>
        <WatchGallery />
      </section>
      <section>
        <Story />
      </section>
      <section>
        <Artist/>
      </section>
      <section>
        <Roadmap />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <Team />
      </section>
    </div>
  );
}
}

export default App;
