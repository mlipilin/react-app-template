import { sum } from './lib';

import './styles/index.less';
import logo from './images/logo.png';
console.log('88887777777888', logo);
console.log(sum(1, 2));

let img = new Image();
img.onload = () => {
    document.body.appendChild(img);
};
img.src = require('./images/logo.png');
