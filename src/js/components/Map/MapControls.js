import appActions from 'actions/AppActions';
import React, {
  Component,
  PropTypes
} from 'react';

const locateSvg = '<use xlink:href="#icon-locate" />';
const zoomOutSvg = '<use xlink:href="#icon-minus" />';
const zoomInSvg = '<use xlink:href="#icon-plus" />';
const shareSvg = '<use xlink:href="#icon-share" />';

export default class Test extends Component {

  static contextTypes = {
    map: PropTypes.object
  };

  zoomIn = () => {
    const {map} = this.context;
    map.setZoom(map.getZoom() + 1);
  };

  zoomOut = () => {
    const {map} = this.context;
    map.setZoom(map.getZoom() - 1);
  };

  share = () => {
    appActions.toggleShareModal({ visible: true });
  };

  locate = () => {
    appActions.toggleLocateModal({ visible: true });
  };

  render () {
    return (
      <div className='map__controls map-component shadow'>
        <ul className='map__controls__items'>
          <li className='map__controls__item pointer' onClick={this.zoomIn}>
            <svg className='map__controls__item-icon' dangerouslySetInnerHTML={{ __html: zoomInSvg }} />
          </li>
          <li className='map__controls__item pointer' onClick={this.zoomOut}>
            <svg className='map__controls__item-icon' dangerouslySetInnerHTML={{ __html: zoomOutSvg }} />
          </li>
          <li className='map__controls__item pointer' onClick={this.share}>
            <svg className='map__controls__item-icon' dangerouslySetInnerHTML={{ __html: shareSvg }} />
          </li>
          <li className='map__controls__item pointer' onClick={this.locate}>
            <svg className='map__controls__item-icon' dangerouslySetInnerHTML={{ __html: locateSvg }} />
          </li>
        </ul>
      </div>
    );
  }

}
