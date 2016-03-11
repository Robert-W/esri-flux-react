import ModalWrapper from 'components/shared/ModalWrapper';
import appActions from 'actions/AppActions';
import React, { Component } from 'react';

export default class ShareModal extends Component {

  close = () => {
    appActions.toggleShareModal({ visible: false });
  }

  render () {
    const {active} = this.props;

    return (
      <ModalWrapper theme='share-modal' active={active} close={this.close}>
        <h3>Share Something</h3>
      </ModalWrapper>
    );
  }
}
