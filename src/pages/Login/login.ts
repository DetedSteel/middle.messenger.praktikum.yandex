import Block from '../../utils/Block';
import template from './login.hbs';
import { render } from '../../utils/render';
import { submit } from '../../utils/submit';

export class Login extends Block {
  constructor() {
    super({
      inputs: [
        {
          type: 'text',
          name: 'login',
          label: 'Логин',
          placeholder: 'Введите логин',
          errorLabel: '',
        },
        { type: 'password', name: 'password', label: 'Пароль', placeholder: 'Введите пароль' },
      ],
      title: 'Логин',
      btnText: 'Авторизоваться',
      linkText: 'Нет аккаунта?',
      onSubmit: submit,
      buttonEvent: () => {
        render('register');
      },
      onClick: () => {
        render('home');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
