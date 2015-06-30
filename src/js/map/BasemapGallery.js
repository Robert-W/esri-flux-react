import {MapActions as actions} from 'actions/MapActions'
import BasemapGalleryItem from 'map/BasemapGalleryItem'
import constants from 'constants/MapConstants'
import MapStore from 'stores/MapStore'
import {basemaps} from 'js/config'
import hash from 'utils/hash'
import React from 'react'

const imagePrefix = 'css/images/';

const getBasemapFromHash = () => hash.get(constants.basemap);
const getBasemap = () => MapStore.get(constants.basemap) || app.map.getBasemap();

export class BasemapGallery extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      open: false,
      selectedValue: getBasemap()
    };
  }

  componentDidMount () {
    MapStore.registerCallback(this.onStoreChange.bind(this));
    // If their is a basemap present in the hash, use that basemap
    let basemap = getBasemapFromHash();
    if (basemap) { actions.setBasemap(basemap); }
  }

  render () {
    return (
      <div className={'basemap-gallery' + (this.state.open ? ' open' : '')}>
        <div className='basemap-gallery-icon pointer' onClick={this.toggleGallery.bind(this)}>
          <svg className='basemap-icon-svg' viewBox='0 0 96 96'>
            <polygon className='basemap-icon-themed' points="87,61.516 48,81.016 9,61.516 0,66.016 48,90.016 96,66.016 "/>
            <polygon points="87,44.531 48,64.031 9,44.531 0,49.031 48,73.031 96,49.031 "/>
            <path className='basemap-icon-themed' d="M48,16.943L78.111,32L48,47.057L17.889,32L48,16.943 M48,8L0,32l48,24l48-24L48,8L48,8z"/>
          </svg>
        </div>
        <ul className='basemap-gallery-item-list'>
          {this.renderBasemapItems(basemaps)}
        </ul>
      </div>
    )
  }

  renderBasemapItems (basemaps) {
    return basemaps.map(basemap => {
      return (
        <BasemapGalleryItem
          value={basemap.value}
          label={basemap.label}
          icon={imagePrefix + basemap.icon}
          active={this.state.selectedValue === basemap.value}
          click={this.onSelect}
        />
      )
    });
  }

  toggleGallery () {
    this.setState({ open: !this.state.open });
  }

  onSelect (selectedProps) {
    actions.setBasemap(selectedProps.value);
  }

  onStoreChange () {
    let basemap = getBasemap();
    app.map.setBasemap(basemap);
    this.setState({ selectedValue: basemap });
  }

}
