import dispatcher from 'js/dispatcher';

class AppActions {

  update () {
    return {};
  }

  toggleModal (data) {
    return data;
  }

}

export default dispatcher.createActions(AppActions);
