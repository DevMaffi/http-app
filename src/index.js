import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import logger from './services/logService';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

logger.init();

ReactDOM.render(<App />, document.getElementById('root'));
