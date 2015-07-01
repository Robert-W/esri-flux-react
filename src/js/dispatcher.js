var callbacks = [];

export const Dispatcher = {
  /**
  * Register callbacks to the dispatcher
  * @param {function} callback The callback were registering
  * @return {number} index of callback
  */
  register: (callback) => {
    callbacks[callbacks.length] = callback;
    return callbacks.length - 1;
  },

  /**
  * Dispatch a payload from an action
  * @param {object} payload Data coming from an action
  */
  dispatch: (payload) => {
    callbacks.forEach((callback) => callback(payload));
  }

};
