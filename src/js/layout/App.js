import {MainPanel} from 'js/layout/MainPanel';
import {Header} from 'js/layout/Header';
import {appConfig} from 'js/config';
import React from 'react';

export class App extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='react-root'>
        <Header title={appConfig.title} subtitle={appConfig.subtitle} />
        <MainPanel />
      </div>
    );
  }

}
