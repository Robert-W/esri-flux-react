let callbacks = {};
let prefix = '_';
let count = 1;

export const Dispatcher = {

  /**
  * Register callbacks to the dispatcher
  * @param {function} callback - The callback were registering
  * @return {number} index of callback
  */
  register: (callback) => {
    let id = prefix + count++;
    callbacks[id] = callback;
    return id;
  },

  /**
  * Dispatch a payload from an action
  * @param {object} payload - Data coming from an action
  */
  dispatch: (payload) => {
    for (let id in callbacks) {
      callbacks[id](payload);
    }
  }

};
