const fallback = {
  detectionRegex: {
    uc: /ucbrowser/i,
    zuoku: /zuoku build/i
  },

  addHook: function () {
    // Android browsers legacy flexbox fallback
    try {
      const ua = navigator.userAgent;
      let fbNeeded = false;

      // TODO: - add version detecting when UC supports flexbox
      if (/android/i.test(ua)) {
        Object.keys(fallback.detectionRegex).forEach(key => {
          !fbNeeded && (fbNeeded = fallback.detectionRegex[key].test(ua));
        });

        fbNeeded && (document.documentElement.className += ' fb-legacy-flexbox');
      }
    } catch(e) {}
  }
};

fallback.addHook();

export default fallback;
