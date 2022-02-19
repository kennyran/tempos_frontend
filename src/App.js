import './App.css';
import React from 'react';

// ======// Component imports //======
import Team from './components/team';
import Intro from './components/intro'
import FAQ from './components/faq'
import TemposNav from './components/navbar'
import Roadmap from './components/roadmap'


class App extends React.Component {
  
  render() {
  return (
    <div className="App">
      <div className="main">
        <header className="header">
          <TemposNav />
        </header>
        <section>
          <Intro />
        </section>
      </div>
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
