import dispatcher from 'js/dispatcher';

class AppActions {

  updateMap () {
    return {};
  }

  toggleShareModal = (data) => data;

  toggleLocateModal = (data) => data;

}

export default dispatcher.createActions(AppActions);
