import React from 'react';
import Moment from 'moment';
import ReactDOM from 'react-dom';
import Patch from './lib.js';
import App from './App.jsx';

Moment.locale('bn'); 

ReactDOM.render(<App />, document.getElementById('app'));

