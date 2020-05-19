import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/common.css';
import App from './App';

// import Address from './home/address/address'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <App />,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
