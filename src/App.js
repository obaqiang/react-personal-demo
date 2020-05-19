import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './styles/common.css'

import Tabbar from './tabbar/tabbar'

import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (

    <Router>
      <div className="App">
        {/* <Route path='/' component={Home} exact ></Route>
        <Route path='/main' component={Main}></Route>
        <Route path='/user' component={User}></Route> */}
        {/* <Tab></Tab> */}
        <Tabbar/>
      </div>
    </Router>

  );
}

export default App;
