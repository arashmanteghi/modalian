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
        >
          <h2 className='modalian__header'>Test Modalian</h2>
        </Modalian>
      </div>
    );
  }
}

export default App;
