// @see http://jamesknelson.com/re-exporting-es6-modules/
// @see http://exploringjs.com/es6/ch_modules.html#sec_all-exporting-styles

export const VERSION = '__VERSION__';

// Layout
export {default as Container} from './Container';
export {default as Grid} from './Grid';
export {default as Col} from './Col';
export {default as Group} from './Group';

// Components
export {default as Accordion} from './Accordion';
export {default as Badge} from './Badge';
export {default as Button} from './Button';
export {default as ButtonGroup} from './ButtonGroup';
export {default as ButtonToolbar} from './ButtonToolbar';
export {default as Card} from './Card';
export {default as Icon} from './Icon';
export {default as Field} from './Field';
export {default as List} from './List';
export {default as Loader} from './Loader';
export {default as Modal} from './Modal';
export {default as NavBar} from './NavBar';
export {default as Notification} from './Notification';
export {default as OffCanvas} from './OffCanvas';
export {default as OffCanvasTrigger} from './OffCanvasTrigger';
export {default as Popover} from './Popover';
export {default as PopoverTrigger} from './PopoverTrigger';
export {default as Slider} from './Slider';
export {default as Switch} from './Switch';
export {default as TabBar} from './TabBar';
export {default as Tabs} from './Tabs';
export {default as Touchable} from './Touchable';
export {default as View} from './View';

// Mixins
export * from './mixins';

// Compatibility fallback
export {default as fallback} from './utils/fallback';
