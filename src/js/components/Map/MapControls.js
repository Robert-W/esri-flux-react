// import ZoomViewModel from 'esri/widgets/Zoom/ZoomViewModel';
import { MODE_2D, MODE_3D } from 'constants/AppConstants';
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
    view.animateTo({ zoom: view.zoom + 1 }, animationOptions);
  };

  zoomOut = () => {
    // zoomModel.zoomOut();
    const {view} = this.context;
    view.animateTo({ zoom: view.zoom - 1 }, animationOptions);
  };

  share = () => {
    appActions.toggleShareModal({ visible: true });
  };

  locate = () => {
    appActions.toggleLocateModal({ visible: true });
  };

  updateViewMode = () => {
    const mode = this.props.currentViewMode === MODE_2D ? MODE_3D : MODE_2D;
    appActions.updateViewMode(mode);
  }

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
          <li className='map__controls__item pointer' onClick={this.updateViewMode}>
            <span>{this.props.currentViewMode}</span>
          </li>
          <li className='map__controls__item pointer' onClick={this.locate}>
            ?
          </li>
        </ul>
      </div>
    );
  }

}
