import React, { Component } from 'react';

import Modalian, { Confirm } from './Modalian';

// styles
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false,
      confirmVisible: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleConfirm = this.toggleConfirm.bind(this);
  }

  toggleModal () {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  toggleConfirm () {
    this.setState({ confirmVisible: !this.state.confirmVisible });
  }

  render () {
    return (
      <div>
        <button onClick={() => { this.setState({ modalVisible: !this.state.modalVisible }); }}>open</button>
        <br />
        <button onClick={() => { this.setState({ confirmVisible: !this.state.confirmVisible }); }}>open confirm</button>
        <Modalian
          visible={this.state.modalVisible}
          onClose={this.toggleModal}
          title='Invite developers to use Modalian'
          // footer={null}
          okBtnText='Invite'
          onOk={() => { console.log('click on OK'); }}
          onCancel={() => { console.log('click on Cancel'); this.toggleModal(); }}
          rtl
        >
          <p>body</p>
          <p>body</p>
          <p>body</p>
          <p>body</p>
          <p>body</p>
        </Modalian>
        <Confirm
          visible={this.state.confirmVisible}
          onClose={this.toggleConfirm}
          confirmBtnText='Confirm'
          onConfirm={() => { console.log('click on Confirm'); }}
          onCancel={() => { console.log('click on Cancel'); this.toggleConfirm(); }}
          title='Are you sure about this title?'
          description='yes, Im sure you should to that'
          rtl
        />
      </div>
    );
  }
}

export default App;
