import {MapActions as actions} from 'actions/MapActions'
import {BasemapGallery} from 'map/BasemapGallery'
import {map as config} from 'js/config'
import React from 'react'

export class Map extends React.Component {

  componentDidMount () {
    actions.createMap();
  }

  render () {
      return (
        <div id={config.id}>
          <div className='map-widgets-wrapper'>
            <BasemapGallery />
          </div>
        </div>
      );
  }

}
