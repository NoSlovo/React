import React from 'react';
import './App.css';
import Contents from './compo/content/Contents';
import Header from './compo/header/Header';
import Menu from './compo/menu/Menu';
import classes from "./compo/menu/menu.module.css"
import Posts from './compo/MyPosts/Posts';


function App() {
  return (<div className="wrappe">
          <Header/>
          <div className={classes.conteiner}>
          <Menu/>
          <Contents/>
          </div>
          </div>);
}

export default App;
