import {
  canUseDOM,
} from './exenv';

let bodyElement = canUseDOM ? document.body : {
  appendChild: () => {}
};

export default bodyElement;
