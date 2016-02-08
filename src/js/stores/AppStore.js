import appActions from 'actions/AppActions';
import dispatcher from 'js/dispatcher';

class AppStore {

  constructor () {

    this.bindListeners({
      updateMap: appActions.updateMap
    });

  }

  updateMap () {}

}

export default dispatcher.createStore(AppStore, 'AppStore');
