import {MapActions as actions} from 'js/actions/MapActions';
import {MAP as constants} from 'js/constants/AppConstants';
import BasemapGalleryItem from 'js/map/BasemapGalleryItem';
import MapStore from 'js/stores/MapStore';
import {Spring} from 'react-motion';
import React from 'react';

/* Spring helper functions */
let springConfig = [300, 50];
let getEndValue = isOpen => { return { val: { height: isOpen ? 250 : 30, width: isOpen ? 210 : 30, opacity: isOpen ? 1.0 : 0 }, config: springConfig }; };
let getStyle = delta => { return { height: `${delta.val.height}px`, width: `${delta.val.width}px`}; };
let getDefaultValue = () => { return { val: { height: 30, width: 30, opacity: 0 } }; };
/* BasemapGallery helper function */
let getCurrentBasemap = () => MapStore.get(constants.basemap) || app.map.getBasemap();

/* Old render content that does not use Spring animation
<div className={'map-buttons basemap-gallery' + (this.state.open ? ' open' : '')} >
  <div className='basemap-gallery-icon pointer' onClick={this.toggleGallery.bind(this)}>BG</div>
  <ul className='basemap-gallery-list'>
    {this.renderBasemapItems(this.props.basemaps)}
  </ul>
</div>
*/

export class BasemapGallery extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false,
      activeBasemap: getCurrentBasemap()
    };
  }

  componentDidMount () {
    MapStore.registerCallback(this.storeDidUpdate.bind(this));
  }

  storeDidUpdate () {
    this.setState({ activeBasemap: getCurrentBasemap() });
  }

  render () {
    return (
      <Spring defaultValue={getDefaultValue()} endValue={getEndValue(this.state.open)}>
        {delta =>
          <div className='map-buttons basemap-gallery' style={getStyle(delta)}>
            <div className='basemap-gallery-icon pointer' onClick={this.toggleGallery.bind(this)}>BG</div>
            <ul className='basemap-gallery-list' style={{ opacity: delta.val.opacity }}>
              {this.renderBasemapItems(this.props.basemaps)}
            </ul>
          </div>
        }
      </Spring>
    );
  }

  renderBasemapItems (basemaps) {
    if (!basemaps) { return null; }
    return basemaps.map(basemap => {
      return (
        <BasemapGalleryItem
          value={basemap.value}
          label={basemap.label}
          iconClass={basemap.iconClass}
          click={this.onSelect}
          active={this.state.activeBasemap === basemap.value}
        />
      );
    });
  }

  toggleGallery () {
    this.setState({ open: !this.state.open });
  }

  onSelect (basemap) {
    actions.setBasemap(basemap);
  }

}
