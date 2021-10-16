// packages
import Toast from "react-native-root-toast";

// methods

const toastService = (() => {
  const showToast = (text, duration = null) => {
    Toast.show(text, {
      duration: duration ? duration : Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
    });
  };

  const hideToast = (toast) => {
    setTimeout(() => {
      Toast.hide(toast);
    }, 500);
  };
  return {
    showToast,
    hideToast,
  };
})();

export default toastService;
