// import ZoomViewModel from 'esri/widgets/Zoom/ZoomViewModel';
import appActions from 'js/actions/AppActions';
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

// let zoomModel;

export default class Test extends Component {

  static contextTypes = {
    view: PropTypes.object
  };

  // componentDidUpdate() {
  //   const {view} = this.context;
  //   if (view.ready && !zoomModel) {
  //     zoomModel = new ZoomViewModel({ view: view });
  //   }
  // }

  zoomIn = () => {
    // zoomModel.zoomIn();
    const {view} = this.context;
    view.goTo({ zoom: view.zoom + 1 }, animationOptions);
  };

  zoomOut = () => {
    // zoomModel.zoomOut();
    const {view} = this.context;
    view.goTo({ zoom: view.zoom - 1 }, animationOptions);
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
            <svg role='img'
              aria-label='Zoom out'
              className='map__controls__item-icon'
              dangerouslySetInnerHTML={{ __html: zoomOutSvg }} />
          </li>
          <li className='map__controls__item pointer' onClick={this.zoomIn}>
            <svg role='img'
              aria-label='Zoom in'
              className='map__controls__item-icon'
              dangerouslySetInnerHTML={{ __html: zoomInSvg }} />
          </li>
          <li className='map__controls__item pointer' onClick={this.share}>
            <svg role='img'
              aria-label='Share your experience'
              className='map__controls__item-icon'
              dangerouslySetInnerHTML={{ __html: shareSvg }} />
          </li>
          <li className='map__controls__item pointer' onClick={this.locate}>
            <svg role='img'
              aria-label='Locate me on the map'
              className='map__controls__item-icon'
              dangerouslySetInnerHTML={{ __html: locateSvg }} />
          </li>
        </ul>
      </div>
    );
  }

}
