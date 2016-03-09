import { MODE_2D } from 'constants/AppConstants';
import appActions from 'actions/AppActions';
import dispatcher from 'js/dispatcher';

class AppStore {

  constructor () {

    this.currentViewMode = MODE_2D;
    this.shareModalActive = false;
    this.locateModalActive = false;

    this.bindListeners({
      update: appActions.update,
      updateViewMode: appActions.updateViewMode,
      toggleShareModal: appActions.toggleShareModal,
      toggleLocateModal: appActions.toggleLocateModal
    });

  }

  updateViewMode (data) {
    this.currentViewMode = data.viewMode;
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
