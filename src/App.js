import React, { Component, Fragment } from 'react';

import Modalian, { Confirm } from './modalian/Modalian';

import download from './download.svg';
import code from './code.svg';

// styles
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false,
      confirmVisible: false,
      rtlModalVisible: false,
      rtlConfirmVisible: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleConfirm = this.toggleConfirm.bind(this);
    this.toggleRtlModal = this.toggleRtlModal.bind(this);
    this.toggleRtlConfirm = this.toggleRtlConfirm.bind(this);
  }

  toggleModal () {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  toggleConfirm () {
    this.setState({ confirmVisible: !this.state.confirmVisible });
  }

  toggleRtlModal () {
    this.setState({ rtlModalVisible: !this.state.rtlModalVisible });
  }

  toggleRtlConfirm () {
    this.setState({ rtlConfirmVisible: !this.state.rtlConfirmVisible });
  }

  render () {
    return (
      <Fragment>
        <header className='header'>
          <h1 className='title'><a href='https://github.com/arashmanteghi/modalian'>Modalian</a></h1>
          <p className='description'>Modalian is a simple react modal component.</p>
        </header>
        <section className='content'>
          <div>
            <button className='btn' onClick={this.toggleModal}>default</button>
            <button className='btn' onClick={this.toggleConfirm}>confirm</button>
            <button className='btn' onClick={this.toggleRtlModal}>rtl modal</button>
            <button className='btn' onClick={this.toggleRtlConfirm}>rtl confirm</button>
          </div>
          <div style={{marginTop: '20px'}}>
            <a href='https://github.com/arashmanteghi/modalian' className='btn--small'>
              <img className='icon' alt='doc-logo' src={code} />
              Document
            </a>
            <a href='https://github.com/arashmanteghi/modalian/archive/master.zip' className='btn--small'>
              <img className='icon' alt='download-logo' src={download} />
              Download
            </a>
          </div>
          <Modalian
            visible={this.state.modalVisible}
            onClose={this.toggleModal}
            title='Invite developers to use Modalian'
            okBtnText='Invite'
            onOk={() => { console.log('click on OK'); this.toggleModal(); }}
            onCancel={() => { console.log('click on Cancel'); this.toggleModal(); }}
          >
            <p>
              Modalian is a simple modal component with pleasing features. In fact it’s a react component which is writen in ES6 syntax based on Standardjs guidelines.
              <br /><br />
              Modalian’s design implemented in SCSS. It can supports confirm box and RTL(right-to-left) layout and by the way it’s open source. So you can help it to be better component :)
            </p>
          </Modalian>
          <Confirm
            visible={this.state.confirmVisible}
            onClose={this.toggleConfirm}
            confirmBtnText='Confirm'
            onConfirm={() => { console.log('click on Confirm'); this.toggleConfirm(); }}
            onCancel={() => { console.log('click on Cancel'); this.toggleConfirm(); }}
            title='Are you sure about this it?'
            description='you cant undo this action'
          />
          <Modalian
            visible={this.state.rtlModalVisible}
            onClose={this.toggleRtlModal}
            title='دعوت توسعه‌دهنگان به استفاده'
            // footer={null}
            okBtnText='دعوت'
            cancelBtnText='صرف نظر'
            onOk={() => { console.log('click on OK'); this.toggleRtlModal(); }}
            onCancel={() => { console.log('click on Cancel'); this.toggleRtlModal(); }}
            rtl
          >
            <p>
              مدالیَن یه کامپوننت ری‌اکتی هست که باهاش می‌تونین به راحتی انواع مدال مورد نظر خودتون رو پیاده‌سازی کنید و یا کاستومایز کنیدش
              <br /><br />
              در ضمن میتونین از قابلیت حالت تأیید و یا راست به چپ این کامپوننت هم استفاده کنید . اگر مشتاق بودین میتونین توی توسعه‌اش هم به من کمک کنین :)
            </p>
          </Modalian>
          <Confirm
            visible={this.state.rtlConfirmVisible}
            onClose={this.toggleRtlConfirm}
            confirmBtnText='بله، مطمئنم'
            cancelBtnText='صرف نظر'
            onConfirm={() => { console.log('click on Confirm'); this.toggleRtlConfirm(); }}
            onCancel={() => { console.log('click on Cancel'); this.toggleRtlConfirm(); }}
            title='آیا از این بابت مطمئن هستید؟'
            description='در صورت تأیید قادر به بازگشت نیستید'
            rtl
          />
        </section>
        <footer className='footer'>
          <span className='by'>by <a href='https://twitter.com/arashmanteghi'>@arashmanteghi</a></span>
          <div className='repo-info'>
            <iframe title='start' frameBorder='true' src='https://ghbtns.com/github-btn.html?user=arashmanteghi&amp;repo=modalian&amp;type=watch&amp;count=true' allowtransparency='true' scrolling='0' width='105' height='20' />
            <iframe title='fork' frameBorder='true' src='https://ghbtns.com/github-btn.html?user=arashmanteghi&amp;repo=modalian&amp;type=fork&amp;count=true' allowtransparency='true' scrolling='0' width='105' height='20' />
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default App;
