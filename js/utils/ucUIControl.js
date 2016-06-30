// UC browser UI controller

const controller = navigator && navigator.control || {};

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
