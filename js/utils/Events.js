import canUseDOM from './canUseDOM';

const noop = function() {};
let Events = {
  one: noop,
  on: noop,
  off: noop,
};

if (canUseDOM) {
  const bind = 'addEventListener';
  const unbind = 'removeEventListener';

  Events = {
    one: function(node, eventNames, eventListener) {
      var typeArray = eventNames.split(' ');
      var recursiveFunction = function(e) {
        e.target.removeEventListener(e.type, recursiveFunction);
        return eventListener(e);
      };

      for (var i = typeArray.length - 1; i >= 0; i--) {
        this.on(node, typeArray[i], recursiveFunction, false);
      }
    },


    /**
     * Bind `node` event `eventName` to `eventListener`.
     *
     * @param {Element} node
     * @param {String} eventName
     * @param {Function} eventListener
     * @param {Boolean} capture
     * @return {Obejct}
     * @api public
     */

    on: function(node, eventName, eventListener, capture) {
      node[bind](eventName, eventListener, capture || false);

      return {
        off: function() {
          node[unbind](eventName, eventListener, capture || false);
        }
      };
    },


    /**
     * Unbind `node` event `eventName`'s callback `eventListener`.
     *
     * @param {Element} node
     * @param {String} eventName
     * @param {Function} eventListener
     * @param {Boolean} capture
     * @return {Function}
     * @api public
     */

    off: function(node, eventName, eventListener, capture) {
      node[unbind](eventName, eventListener, capture || false);
      return eventListener;
    }
  };
}

export default Events;
