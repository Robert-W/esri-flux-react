import appActions from 'actions/AppActions';
import dispatcher from 'js/dispatcher';

class AppStore {

  constructor () {

    this.modalVisible = false;

    this.bindListeners({
      update: appActions.update,
      toggleModal: appActions.toggleModal
    });

  }

  toggleModal (data) {
    this.modalVisible = data.visible;
  }

  update () {}

}

export default dispatcher.createStore(AppStore, 'AppStore');
