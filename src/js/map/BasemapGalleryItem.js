import React from 'react';

class BasemapGalleryItem extends React.Component {

    render () {
      return (
        <li
          key={this.props.value}
          onClick={this.props.click.bind(this, this.props.value)}
          className={'basemap-gallery-item relative pointer' + (this.props.active ? ' active' : '')}
        >
          <span className={`basemap-gallery-item-icon ${this.props.iconClass}`}/>
          <div className='basemap-gallery-item-label'>{this.props.label}</div>
        </li>
      );
    }

}

BasemapGalleryItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  iconClass: React.PropTypes.string.isRequired,
  click: React.PropTypes.func.isRequired,
  active: React.PropTypes.bool.isRequired
};

export { BasemapGalleryItem as default };
