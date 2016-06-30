const supportTouch = !!(('ontouchstart' in global) ||
global.DocumentTouch && document instanceof DocumentTouch);

export default supportTouch;
