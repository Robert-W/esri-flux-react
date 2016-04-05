/* @flow */
import React, { Component } from 'react';

const stylesheet:any = {
  modalContainer: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    zIndex: 10,
    left: 0,
    top: 0
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    height: '100%',
    width: '100%'
  },
  modal: {
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    position: 'absolute',
    padding: '30px',
    height: 'auto',
    left: '50%',
    top: '50%'
  },
  close: {
    position: 'absolute',
    cursor: 'pointer',
    display: 'flex',
    height: '30px',
    width: '30px',
    right: 0,
    top: 0
  },
  closeSvg: {
    fill: '#555555',
    margin: 'auto',
    height: '26px',
    width: '26px'
  },
  content: {
    maxHeight: '450px',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: '5px'
  }
};

export default class ModalWrapper extends Component {

  props: {
    close: () => void,
    active: boolean,
    theme?: string,
    children?: any
  };

  render () {
    const { active, close, theme} = this.props;
    //- Build up the attributes
    const modalAttrs:any = {
      style: {...stylesheet.modal}
    };

    //- show or hide the container
    stylesheet.modalContainer.display = active ? 'block' : 'none';

    //- add a className if theme is provided
    if (theme) { modalAttrs.className = theme; }

    return (
      <div style={stylesheet.modalContainer}>
        <div style={stylesheet.modalBackground} onClick={close} />
        <article {...modalAttrs}>
          <div title='close' style={stylesheet.close} onClick={close}>
            <svg style={stylesheet.closeSvg} viewBox='0 0 25 25'>
              <title>Close</title>
              <path d="M 5 19 L 19 5 L 21 7 L 7 21 L 5 19 ZM 7 5 L 21 19 L 19 21 L 5 7 L 7 5 Z"></path>
            </svg>
          </div>
            <div style={stylesheet.content}>
              {this.props.children}
            </div>
        </article>
      </div>
    );
  }
}
