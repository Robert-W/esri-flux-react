import appActions from 'actions/AppActions';
import dispatcher from 'js/dispatcher';

class AppStore {

  constructor () {

    this.bindListeners({
      update: appActions.update
    });

  }

  update () {}

}

export default dispatcher.createStore(AppStore, 'AppStore');
