import React from 'react';

export class Loader extends React.Component {

  render () {
    let style = {
      display: (this.props.visible ? 'block' : 'none')
    };
    return (
      <div className='loading-container' style={style}>
        <div className='loader'></div>
        <div className='loader-label'>{this.props.text}</div>
      </div>
    );
  }

}

Loader.propTypes = {
  visible: React.PropTypes.bool.isRequired
};
