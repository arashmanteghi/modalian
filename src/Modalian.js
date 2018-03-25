import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import closeIcon from './close.svg';

import './Modalian.scss';

export default class Modalian extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalianMaskClass: 'modalian-mask modalian-mask--none',
      modalianWrapperClass: 'modalian-wrapper modalian-wrapper--none'
    };
    this.calculateBodyHeight = this.calculateBodyHeight.bind(this);
    this.handleMaskClick = this.handleMaskClick.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.visible !== nextProps.visible) {
      nextProps.visible
        ? this.setState({
          modalianMaskClass: 'modalian-mask modalian-mask--show',
          modalianWrapperClass: 'modalian-wrapper modalian-wrapper--show'
        })
        : this.setState({
          modalianMaskClass: 'modalian-mask modalian-mask--hide',
          modalianWrapperClass: 'modalian-wrapper modalian-wrapper--hide'
        });
      setTimeout(() => {
        nextProps.visible
          ? this.setState({
            modalianMaskClass: 'modalian-mask modalian-mask--show',
            modalianWrapperClass: 'modalian-wrapper modalian-wrapper--show'
          })
          : this.setState({
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

  handleMaskClick () {
    console.log('click on mask');
    if (this.props.closableMask) {
      this.props.onClose();
    }
  }

  render () {
    let bodyHeight = this.calculateBodyHeight();
    return (
      <Fragment>
        <div className={this.state.modalianMaskClass} onClick={() => { this.handleMaskClick(); }} />
        <div className={this.state.modalianWrapperClass} onClick={() => { this.handleMaskClick(); }}>
          <main className='modalian__content' onClick={(e) => { e.stopPropagation(); }}>
            {this.props.title && <header className='modalian__header'>
              <h2>{this.props.title}</h2>
              {this.props.closable && <img alt='close' className='modalian__close-btn' src={closeIcon} onClick={this.props.onClose} />}
            </header>}
            {!this.props.title && <header className='modalian__header--hidden'>
              {this.props.closable && <img alt='close' className='modalian__close-btn' src={closeIcon} onClick={this.props.onClose} />}
            </header>}
            <section className='modalian__body' style={{height: `calc(100% - ${bodyHeight}px)`}}>
              {this.props.children}
            </section>
            {this.props.footer && <footer className='modalian__footer'>
              <button className='modalian__btn--ok' onClick={this.props.onOk}>
                {this.props.okBtnText}
              </button>
              <button className='modalian__btn--cancel' onClick={this.props.onCancel || this.props.onClose}>
                {this.props.cancelBtnText}
              </button>
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
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  title: PropTypes.string,
  footer: PropTypes.bool,
  okBtnText: PropTypes.string,
  cancelBtnText: PropTypes.string,
  closable: PropTypes.bool,
  closableMask: PropTypes.bool
};

Modalian.defaultProps = {
  footer: true,
  okBtnText: 'OK',
  cancelBtnText: 'Cancel',
  closable: true,
  closableMask: true,
  onOk: () => {}
};



export class Confirm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalianMaskClass: 'modalian-mask modalian-mask--none',
      modalianWrapperClass: 'modalian-wrapper modalian-wrapper--none'
    };
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.visible !== nextProps.visible) {
      nextProps.visible
        ? this.setState({
          modalianMaskClass: 'modalian-mask modalian-mask--show',
          modalianWrapperClass: 'modalian-wrapper modalian-wrapper--show'
        })
        : this.setState({
          modalianMaskClass: 'modalian-mask modalian-mask--hide',
          modalianWrapperClass: 'modalian-wrapper modalian-wrapper--hide'
        });
      setTimeout(() => {
        nextProps.visible
          ? this.setState({
            modalianMaskClass: 'modalian-mask modalian-mask--show',
            modalianWrapperClass: 'modalian-wrapper modalian-wrapper--show'
          })
          : this.setState({
            modalianMaskClass: 'modalian-mask modalian-mask--none',
            modalianWrapperClass: 'modalian-wrapper modalian-wrapper--none'
          });
      }, 310);
    }
  }

  render () {
    return (
      <Fragment>
        <div className={this.state.modalianMaskClass} />
        <div className={this.state.modalianWrapperClass}>
          <main className='modalian__content--confirm' onClick={(e) => { e.stopPropagation(); }}>
            <header className='modalian__header--hidden'>
              <img alt='close' className='modalian__close-btn' src={closeIcon} onClick={this.props.onClose} />
            </header>
            <section className='modalian__body--confirm'>
              <h2>{this.props.title}</h2>
              <span>{this.props.description}</span>
            </section>
            <footer className='modalian__footer--confirm'>
              <button className='modalian__btn--ok' onClick={this.props.onConfirm}>
                {this.props.confirmBtnText}
              </button>
              <button className='modalian__btn--cancel' onClick={this.props.onCancel || this.props.onClose}>
                {this.props.cancelBtnText}
              </button>
            </footer>
          </main>
        </div>
      </Fragment>
    );
  }
}

Confirm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  title: PropTypes.string.isRequired,
  confirmBtnText: PropTypes.string,
  cancelBtnText: PropTypes.string,
  closableMask: PropTypes.bool
};

Confirm.defaultProps = {
  confirmBtnText: 'OK',
  cancelBtnText: 'Cancel',
  closableMask: true,
  onConfirm: () => {}
};