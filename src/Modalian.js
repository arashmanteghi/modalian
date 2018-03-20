import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import closeIcon from './close.svg';

import './Modalian.scss';

export default class Modalian extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalianClass: 'modalian modalian--none',
      modalianMaskClass: 'modalian-mask modalian-mask--none',
      modalianWrapperClass: 'modalain-wrapper modalian-wrapper--none'
    };
    this.calculateBodyHeight = this.calculateBodyHeight.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.visible !== nextProps.visible) {
      nextProps.visible
        ? this.setState({
          modalianClass: 'modalian modalian--show',
          modalianMaskClass: 'modalian-mask modalian-mask--show',
          modalianWrapperClass: 'modalian-wrapper modalian-wrapper--show'
        })
        : this.setState({
          modalianClass: 'modalian modalian--hide',
          modalianMaskClass: 'modalian-mask modalian-mask--hide',
          modalianWrapperClass: 'modalian-wrapper modalian-wrapper--hide'
        });
      setTimeout(() => {
        nextProps.visible
          ? this.setState({
            modalianClass: 'modalian modalian--show',
            modalianMaskClass: 'modalian-mask modalian-mask--show',
            modalianWrapperClass: 'modalian-wrapper modalian-wrapper--show'
          })
          : this.setState({
            modalianClass: 'modalian modalian--none',
            modalianMaskClass: 'modalian-mask modalian-mask--none',
            modalianWrapperClass: 'modalian-wrapper modalian-wrapper--none'
          });
      }, 310);
    }
  }

  calculateBodyHeight () {
    if (this.props.title && this.props.footer) {
      return 120;
    } else if (this.props.title || this.props.footer) {
      return 60;
    } else {
      return 0;
    }
  }

  render () {
    let bodyHeight = this.calculateBodyHeight();
    return (
      <Fragment>
        <div className={this.state.modalianMaskClass} onClick={this.props.onClose} />
        <div className={this.state.modalianWrapperClass}>
          <main className='modalian__content'>
            {this.props.title && <header className='modalian__header'>
              <h2>{this.props.title}</h2>
              <img className='modalian__close-btn' src={closeIcon} onClick={this.props.onClose} />
            </header>}
            {!this.props.title && <header className='modalian__header--hidden'>
              <img className='modalian__close-btn' src={closeIcon} onClick={this.props.onClose} />
            </header>}
            <section className='modalian__body' style={{height: `calc(100% - ${bodyHeight}px)`}}>
              {this.props.children}
            </section>
            {this.props.footer && <footer className='modalian__footer'>
              <button>OK</button>
              <button>Cancel</button>
            </footer>}
          </main>
        </div>
      </Fragment>
    );
  }
}

Modalian.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  footer: PropTypes.bool,
  okBtnText: PropTypes.string,
  cancelBtnText: PropTypes.string
};

Modalian.defaultProps = {
  footer: true,
  okBtnText: 'Ok',
  cancelBtnText: 'Cancel'
};
