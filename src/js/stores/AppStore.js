import appActions from 'actions/AppActions';
import dispatcher from 'js/dispatcher';

class AppStore {

  constructor () {

    this.shareModalActive = false;
    this.locateModalActive = false;

    this.bindListeners({
      updateMap: appActions.updateMap,
      toggleShareModal: appActions.toggleShareModal,
      toggleLocateModal: appActions.toggleLocateModal
    });

  }

  updateMap () {}

  toggleShareModal (data) {
    this.shareModalActive = data.visible;
  }

  toggleLocateModal (data) {
    this.locateModalActive = data.visible;
  }

}

export default dispatcher.createStore(AppStore, 'AppStore');
