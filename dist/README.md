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

Modalian options:

| Property            | Description                                       | Type     | Default  |
|-                    |-                                                  |-         |-         |
| visible             | show or hide modal                                | boolean  | -        |
| onClose             | calles when a user clicks close icon              | function | -        |
| onOk                | calles when a user clicks OK button               | function | -        |
| onCancel            | calles when a user clicks Cancel button           | function | -        |
| title               | makes header for modal and show title there       | string   | -        |
| footer              | set null/false if you don't need default footer   | boolean  | true     |
| okBtnText           | specify text of OK button                         | string   | Ok       |
| cancelBtnText       | specify text of Cancel button                     | string   | Cancel   |
| closable            | specify modal has close icon or not               | boolean  | true     |
| closableMask        | specify when user clicks on mask modal will close | boolean  | true     |
| rtl                 | makes modal right to left                         | boolean  | false    |


Confirm options:

| Property            | Description                                       | Type     | Default  |
|-                    |-                                                  |-         |-         |
| visible             | show or hide confirm                              | boolean  | -        |
| onClose             | calles when a user clicks close icon              | function | -        |
| onConfirm           | calles when a user clicks Confirm button          | function | -        |
| onCancel            | calles when a user clicks Cancel button           | function | -        |
| title               | defines title of confirm box                      | string   | -        |
| description         | defines title of confirm box                      | string   | -        |
| confirmBtnText      | specify text of Confirm button                    | string   | Ok       |
| cancelBtnText       | specify text of Cancel button                     | string   | Cancel   |
| rtl                 | makes confirm modal right to left                 | boolean  | false    |



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
