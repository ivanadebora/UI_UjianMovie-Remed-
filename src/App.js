import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HeaderMovie from './components/Header';
import Homepage from './components/Homepage';
import ManageMovie from './components/ManageMovie';
import ManageCategory from './components/ManageCategory';
import ConnectMovCat from './components/ConnectMovCat';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMovie navBrand={"MovieBertasbih"}/>
        <div>
          <Route exact path="/" component={Homepage}/>
          <Route path="/movie" component={ManageMovie}/>
          <Route path="/category" component={ManageCategory}/>
          <Route path="/connect" component={ConnectMovCat}/>
          </div>
      </div>
    );
  }
}

export default App;
