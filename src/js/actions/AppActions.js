import dispatcher from 'js/dispatcher';

class AppActions {

  update = () => { return {}; };

  toggleShareModal = (data) => data;

  toggleLocateModal = (data) => data;

  updateViewMode = (mode) => {
    return { viewMode: mode };
  }

}

export default dispatcher.createActions(AppActions);
