// UC browser UI controller

const controller = global.navigator && global.navigator.control || {};

/**
 * ucUIControl
 * @param {string} feature - 'gesture' or 'longpressMenu'
 * @param {boolean} state
 * @returns {boolean}
 */
function ucUIControl(feature, state) {
  return controller[feature] && controller[feature](state);
}

// disable gesture
ucUIControl('gesture', false);

export default ucUIControl;
