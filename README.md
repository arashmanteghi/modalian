# Modalian

Modalian is a simple react modal component. You can visit [online Demo](https://arashmanteghi.github.io/modalian/)


## Install

Install with [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/):

npm:
```sh
npm install modalian --save
```

Yarn :
```sh
yarn add modalian
```

## Usage

```js
import Modalian, { Confirm } from 'modalian';

<Modalian
  visible={this.state.modalVisible}
  onClose={this.toggleModal}
  title='Invite developers to use Modalian'
  okBtnText='Invite'
  onOk={() => { console.log('click on OK'); }}
	onCancel={() => { console.log('click on Cancel'); this.toggleModal(); }}
>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</Modalian>

<Confirm
  visible={this.state.confirmVisible}
  onClose={this.toggleConfirm}
  confirmBtnText='Confirm'
  onConfirm={() => { console.log('click on Confirm'); }}
  onCancel={() => { console.log('click on Cancel'); this.toggleConfirm(); }}
  title='Are you sure about it?'
  description='you cant undo this action'
/>
```



## Lunch demo as indepented project

1. `git clone https://github.com/arashmanteghi/modalian.git`
2. Run `npm install`
3. Start the dev-server using `npm start`
3. Open [http://localhost:3000](http://localhost:3000)



## Commands

- `npm start` - start the dev-server
- `npm run dist` - build as production



## Licence
_Modalian_ is available under MIT licence.
