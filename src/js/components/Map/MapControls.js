import appActions from 'actions/AppActions';
import React, {
  Component,
  PropTypes
} from 'react';

const locateSvg = '<use xlink:href="#icon-locate" />';
const zoomOutSvg = '<use xlink:href="#icon-minus" />';
const zoomInSvg = '<use xlink:href="#icon-plus" />';
const shareSvg = '<use xlink:href="#icon-share" />';

const animationOptions = {
  duration: 300
};

export default class Test extends Component {

  static contextTypes = {
    view: PropTypes.object
  };

  zoomIn = () => {
    const {view} = this.context;
    view.animateTo({ zoom: view.zoom + 1 }, animationOptions);
  };

  zoomOut = () => {
    const {view} = this.context;
    view.animateTo({ zoom: view.zoom - 1 }, animationOptions);
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
          <li className='map__controls__item pointer' onClick={this.zoomOut}>
            <svg className='map__controls__item-icon' dangerouslySetInnerHTML={{ __html: zoomOutSvg }} />
          </li>
          <li className='map__controls__item pointer' onClick={this.zoomIn}>
            <svg className='map__controls__item-icon' dangerouslySetInnerHTML={{ __html: zoomInSvg }} />
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
