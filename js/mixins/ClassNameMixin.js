import {
  NAMESPACE,
  CLASSNAMES,
} from '../config';

const namespace = (NAMESPACE ? NAMESPACE + '-' : '');

const ClassNameMixin = {
  setClassNS(classPrefix) {
    const prefix = classPrefix || this.props.classPrefix || '';

    return namespace + prefix;
  },

  getClassSet(ignorePrefix) {
    let classNames = {};
    const {
      amSize,
      amStyle,
      hollow,
      radius,
      rounded,
      active,
      selected,
      disabled,
      inset,
      } = this.props;

    // uses `.am-` as prefix if `classPrefix` is not defined
    let prefix = namespace;

    if (this.props.classPrefix) {
      const classPrefix = this.setClassNS();

      prefix = classPrefix + '-';

      // don't return prefix if ignore flag set
      !ignorePrefix && (classNames[classPrefix] = true);
    }

    if (amSize) {
      classNames[prefix + amSize] = true;
    }

    if (amStyle) {
      classNames[prefix + amStyle] = true;
    }

    if (hollow) {
      classNames[prefix + 'hollow'] = true;
    }

    classNames[this.prefixClass('radius')] = radius;
    classNames[this.prefixClass('rounded')] = rounded;

    classNames[this.prefixClass('inset')] = inset;

    // state className
    // `selected` is an alias of active
    classNames[CLASSNAMES['active']] = active || selected;
    classNames[CLASSNAMES['disabled']] = disabled;

    // shape
    // classNames[constants.CLASSES.radius] = this.props.radius;
    // classNames[constants.CLASSES.round] = this.props.round;

    return classNames;
  },

  prefixClass(subClass) {
    return this.setClassNS() + '-' + subClass;
  }
};

export default ClassNameMixin;
