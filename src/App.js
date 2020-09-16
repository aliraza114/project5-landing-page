import React from 'react';
import Header from './components/header/header'
import Content from './components/content/content'
import Channel from './components/channel/channel'
import Footer from './components/footer/footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Channel />
      <Footer />
    </div>
  );
}

export default App;
