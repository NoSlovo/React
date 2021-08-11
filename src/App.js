import React from 'react';
import './App.css';
import Contents from './compo/Contents';
import Header from './compo/Header';
import Menu from './compo/Menu';

function App() {
  return (<div className="wrappe">
          <Header/>
          <div className="conteiner">
          <Menu/>
          <Contents/>
          </div>
          </div>);
}

export default App;
