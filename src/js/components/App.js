import AppStore from 'js/stores/AppStore';
import Header from 'js/components/Header';
import Map from 'js/components/Map';
import {text} from 'js/config';
import React, {
  Component
} from 'react';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = AppStore.getState();
  }

  componentDidMount() {
    AppStore.listen(this.storeDidUpdate);
  }

  // bound functions
  storeDidUpdate = () => {
    this.setState(AppStore.getState());
  };

  render () {
    return (
      <section className='page-content'>
        <Header title={text.title} />
        <Map {...this.state} />
      </section>
    );
  }
}
