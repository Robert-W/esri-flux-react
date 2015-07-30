import {Map} from 'js/map/Map';
import React from 'react';

export class MainPanel extends React.Component {

  render () {
    return (
      <div className='app-body'>
        <Map />
      </div>
    );
  }

}
