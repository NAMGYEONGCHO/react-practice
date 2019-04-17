/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CoinInfoModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
  }

  async toggle() {
    this.props.setShowModal(false);
  }

  render() {
    return (
        <Modal isOpen={true} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            hi there!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default CoinInfoModal;