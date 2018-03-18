import React, { Component } from 'react';
import PropTypes from 'prop-types';

import closeIcon from './close.svg';

import './Modalian.scss';

export default class Modalian extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalianClass: 'modalian modalian--none'
    };
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.visible !== nextProps.visible) {
      nextProps.visible
        ? this.setState({modalianClass: 'modalian modalian--show'})
        : this.setState({modalianClass: 'modalian modalian--hide'});
      setTimeout(() => {
        nextProps.visible
          ? this.setState({modalianClass: 'modalian modalian--show'})
          : this.setState({modalianClass: 'modalian modalian--none'});
      }, 210);
    }
  }

  render () {
    console.log('rerender: ', this.state.modalianClass);
    return (
      <div className={this.state.modalianClass}>
        <div className='modalian-mask' onClick={this.props.onClose} />
        <div className='modalian-wrapper'>
          {this.props.children}
        </div>
        {/* <img src={closeIcon} onClick={() => { console.log('click'); }} />
        {this.props.children} */}
      </div>
    );
  }
}

Modalian.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool
};
