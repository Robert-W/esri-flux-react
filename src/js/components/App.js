/* @flow */
import AppStore from 'stores/AppStore';
import {text} from 'js/config';
import Header from './Header';
import Map from './map/Map';
import React, {
  Component
} from 'react';

export default class App extends Component {

  constructor (props?: any) {
    super(props);
    this.state = AppStore.getState();
  }

  componentDidMount() {
    AppStore.listen(this.storeDidUpdate);
  }

  // bound functions
  storeDidUpdate: {state?: any} = (state) => {
    this.setState(state);
  };

  render () {
    return (
      <div className='root'>
        <Header title={text.title} />
        <Map {...this.state} />
      </div>
    );
  }
}
