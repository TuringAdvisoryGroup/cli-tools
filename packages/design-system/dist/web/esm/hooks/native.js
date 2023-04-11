import { useState, useCallback } from 'react';
import { Platform } from 'react-native-web';

// Android has some issue while calculating the layout using `.measure`
// This hook is providing an onLayout handler to fix it
var useFloatingLayoutAndroidHandler = function (_a) {
  var x = _a.x,
    y = _a.y;
  var _b = useState([0, 0]),
    xy = _b[0],
    setXY = _b[1];
  var onLayout = useCallback(function (event) {
    var layout = event.nativeEvent.layout;
    setXY([layout.x, layout.y + layout.height]);
  }, []);
  return Platform.select({
    android: {
      xy: xy,
      onLayout: onLayout
    },
    default: {
      xy: [x !== null && x !== void 0 ? x : 0, y !== null && y !== void 0 ? y : 0],
      onLayout: undefined
    }
  });
};

export { useFloatingLayoutAndroidHandler };
