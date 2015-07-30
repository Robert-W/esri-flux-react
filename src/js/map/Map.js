import {MapActions as actions} from 'js/actions/MapActions';
import {BasemapGallery} from 'js/map/BasemapGallery';
import {Loader} from 'js/map/Loader';
import {mapConfig} from 'js/config';
import React from 'react';

export class Map extends React.Component {

  constructor (props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount () {
    actions.createMap(mapConfig).then(() => {
      this.setState({ loaded: true });
    });
  }

  render () {
    var widgets = [<BasemapGallery />];

    return (
      <div className='map' id={mapConfig.id} >
        <Loader text='loading...' visible={!this.state.loaded} />
        {!this.state.loaded ? null : widgets }
      </div>
    );
  }

}
