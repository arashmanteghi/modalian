'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Confirm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _close = require('./close.svg');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

try {
  require('./Modalian.css');
} catch (e) {
  require('./Modalian.scss');
}

var Modalian = function (_Component) {
  _inherits(Modalian, _Component);

  function Modalian(props) {
    _classCallCheck(this, Modalian);

    var _this = _possibleConstructorReturn(this, (Modalian.__proto__ || Object.getPrototypeOf(Modalian)).call(this, props));

    _this.state = {
      modalianMaskClass: 'modalian-mask modalian-mask--none',
      modalianWrapperClass: 'modalian-wrapper modalian-wrapper--none'
    };
    _this.calculateBodyHeight = _this.calculateBodyHeight.bind(_this);
    _this.handleMaskClick = _this.handleMaskClick.bind(_this);
    return _this;
  }

  _createClass(Modalian, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.handleShowHide(this.props, nextProps);
    }
  }, {
    key: 'generateModalianClasses',
    value: function generateModalianClasses(element, theme, isRtl) {
      return isRtl ? 'modalian-' + element + ' modalian-' + element + '--' + theme + ' rtl' : 'modalian-' + element + ' modalian-' + element + '--' + theme;
    }
  }, {
    key: 'handleShowHide',
    value: function handleShowHide(currentProps, nextProps) {
      var _this2 = this;

      if (currentProps.visible !== nextProps.visible) {
        nextProps.visible ? this.setState({
          modalianMaskClass: this.generateModalianClasses('mask', 'show'),
          modalianWrapperClass: this.generateModalianClasses('wrapper', 'show', nextProps.rtl)
        }) : this.setState({
          modalianMaskClass: this.generateModalianClasses('mask', 'hide'),
          modalianWrapperClass: this.generateModalianClasses('wrapper', 'hide', nextProps.rtl)
        });
        setTimeout(function () {
          nextProps.visible ? _this2.setState({
            modalianMaskClass: _this2.generateModalianClasses('mask', 'show'),
            modalianWrapperClass: _this2.generateModalianClasses('wrapper', 'show', nextProps.rtl)
          }) : _this2.setState({
            modalianMaskClass: _this2.generateModalianClasses('mask', 'none'),
            modalianWrapperClass: _this2.generateModalianClasses('wrapper', 'none')
          });
        }, 310);
      }
    }
  }, {
    key: 'calculateBodyHeight',
    value: function calculateBodyHeight() {
      if (this.props.title && this.props.footer) {
        return 118;
      } else if (this.props.title) {
        return 52;
      } else if (this.props.footer) {
        return 66;
      } else {
        return 0;
      }
    }
  }, {
    key: 'handleMaskClick',
    value: function handleMaskClick() {
      if (this.props.closableMask) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var bodyHeight = this.calculateBodyHeight();
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement('div', { className: this.state.modalianMaskClass, onClick: function onClick() {
            _this3.handleMaskClick();
          } }),
        _react2.default.createElement(
          'div',
          { className: this.state.modalianWrapperClass, onClick: function onClick() {
              _this3.handleMaskClick();
            } },
          _react2.default.createElement(
            'main',
            { className: 'modalian__content', onClick: function onClick(e) {
                e.stopPropagation();
              } },
            this.props.title && _react2.default.createElement(
              'header',
              { className: 'modalian__header' },
              _react2.default.createElement(
                'h2',
                null,
                this.props.title
              ),
              this.props.closable && _react2.default.createElement('img', { alt: 'close', className: 'modalian__close-btn', src: _close2.default, onClick: this.props.onClose })
            ),
            !this.props.title && _react2.default.createElement(
              'header',
              { className: 'modalian__header--hidden' },
              this.props.closable && _react2.default.createElement('img', { alt: 'close', className: 'modalian__close-btn', src: _close2.default, onClick: this.props.onClose })
            ),
            _react2.default.createElement(
              'section',
              { className: 'modalian__body', style: { height: 'calc(100% - ' + bodyHeight + 'px)' } },
              this.props.children
            ),
            this.props.footer && _react2.default.createElement(
              'footer',
              { className: 'modalian__footer' },
              _react2.default.createElement(
                'button',
                { className: 'modalian__btn--confirm', onClick: this.props.onOk },
                this.props.okBtnText
              ),
              _react2.default.createElement(
                'button',
                { className: 'modalian__btn--cancel', onClick: this.props.onCancel || this.props.onClose },
                this.props.cancelBtnText
              )
            )
          )
        )
      );
    }
  }]);

  return Modalian;
}(_react.Component);

exports.default = Modalian;


Modalian.propTypes = {
  children: _propTypes2.default.node.isRequired,
  visible: _propTypes2.default.bool.isRequired,
  onClose: _propTypes2.default.func.isRequired,
  onOk: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  title: _propTypes2.default.string,
  footer: _propTypes2.default.bool,
  okBtnText: _propTypes2.default.string,
  cancelBtnText: _propTypes2.default.string,
  closable: _propTypes2.default.bool,
  closableMask: _propTypes2.default.bool
};

Modalian.defaultProps = {
  footer: true,
  okBtnText: 'OK',
  cancelBtnText: 'Cancel',
  closable: true,
  closableMask: true,
  onOk: function onOk() {}
};

var Confirm = exports.Confirm = function (_Modalian) {
  _inherits(Confirm, _Modalian);

  function Confirm(props) {
    _classCallCheck(this, Confirm);

    var _this4 = _possibleConstructorReturn(this, (Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call(this, props));

    _this4.state = {
      modalianMaskClass: 'modalian-mask modalian-mask--none',
      modalianWrapperClass: 'modalian-wrapper modalian-wrapper--none'
    };
    return _this4;
  }

  _createClass(Confirm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.handleShowHide(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement('div', { className: this.state.modalianMaskClass }),
        _react2.default.createElement(
          'div',
          { className: this.state.modalianWrapperClass },
          _react2.default.createElement(
            'main',
            { className: 'modalian__content--confirm', onClick: function onClick(e) {
                e.stopPropagation();
              } },
            _react2.default.createElement(
              'header',
              { className: 'modalian__header--hidden' },
              _react2.default.createElement('img', { alt: 'close', className: 'modalian__close-btn', src: _close2.default, onClick: this.props.onClose })
            ),
            _react2.default.createElement(
              'section',
              { className: 'modalian__body--confirm' },
              _react2.default.createElement(
                'h2',
                null,
                this.props.title
              ),
              _react2.default.createElement(
                'span',
                null,
                this.props.description
              )
            ),
            _react2.default.createElement(
              'footer',
              { className: 'modalian__footer--confirm' },
              _react2.default.createElement(
                'button',
                { className: 'modalian__btn--confirm', onClick: this.props.onConfirm },
                this.props.confirmBtnText
              ),
              _react2.default.createElement(
                'button',
                { className: 'modalian__btn--cancel', onClick: this.props.onCancel || this.props.onClose },
                this.props.cancelBtnText
              )
            )
          )
        )
      );
    }
  }]);

  return Confirm;
}(Modalian);

Confirm.propTypes = {
  visible: _propTypes2.default.bool.isRequired,
  onClose: _propTypes2.default.func.isRequired,
  onConfirm: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  title: _propTypes2.default.string.isRequired,
  confirmBtnText: _propTypes2.default.string,
  cancelBtnText: _propTypes2.default.string
};

Confirm.defaultProps = {
  confirmBtnText: 'OK',
  cancelBtnText: 'Cancel',
  onConfirm: function onConfirm() {}
};