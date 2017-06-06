import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import registerServiceWorker from './registerServiceWorker';

import 'w3-css/w3.css';
import './fonts/fonts.css'
import './index.css';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
