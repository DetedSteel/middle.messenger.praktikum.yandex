import Block from '../../utils/Block';
import template from './login.hbs';
import { render } from '../../utils/render';
import { submit } from '../../utils/submit';

export class Login extends Block {
  constructor() {
    super({
      inputs: [
        { type: 'text', name: 'login', label: 'Логин', placeholder: 'Введите логин' },
        { type: 'password', name: 'password', label: 'Пароль', placeholder: 'Введите пароль' },
      ],
      title: 'Логин',
      onSubmit: submit,
      buttonEvent: () => {render('register')}
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
