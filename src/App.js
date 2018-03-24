import React, { Component } from 'react';

import Modalian from './Modalian';

// styles
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal () {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render () {
    return (
      <div>
        <button onClick={() => { this.setState({ modalVisible: !this.state.modalVisible }); }}>open</button>
        <Modalian
          visible={this.state.modalVisible}
          onClose={this.toggleModal}
          title='Invite developers to use Modalian'
          // footer={null}
          okBtnText='Invite'
          onOk={() => { console.log('click on OK'); }}
          onCancel={() => { console.log('click on Cancel'); this.toggleModal(); }}
        >
          <p>body</p>
        </Modalian>
      </div>
    );
  }
}

export default App;
