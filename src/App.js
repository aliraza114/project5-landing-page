import React from 'react';
import Header from './components/header/header'
import Content from './components/content/content';
import Channel from './components/channel/channel'



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content/>
      <Channel />
    </div>
  );
}

export default App;
