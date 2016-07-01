import ReactDOM from 'react-dom';
import routes from './routes';

import './style.scss';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('sk-root'));
});
