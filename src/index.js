import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './comps/App';
import * as serviceWorker from './helpers/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
