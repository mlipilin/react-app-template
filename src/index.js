import { sum } from './lib';

import './styles/styles.css';

console.log(sum(1, 2));

let img = new Image();
img.onload = () => {
    document.body.appendChild(img);
};
img.src = require('./images/logo.png');
