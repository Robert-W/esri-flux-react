import appActions from 'js/actions/AppActions';
import dispatcher from 'js/dispatcher';

class AppStore {

  constructor () {

    this.shareModalActive = false;
    this.locateModalActive = false;

    this.bindListeners({
      update: appActions.update,
      toggleShareModal: appActions.toggleShareModal,
      toggleLocateModal: appActions.toggleLocateModal
    });

  }

  toggleShareModal (data) {
    this.shareModalActive = data.visible;
  }

  toggleLocateModal (data) {
    this.locateModalActive = data.visible;
  }

  update () {}

}

export default dispatcher.createStore(AppStore, 'AppStore');
