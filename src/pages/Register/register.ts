import Block from '../../utils/Block';
import template from './register.hbs';
import { render } from '../../utils/render';
import { submit } from '../../utils/submit';

export class Register extends Block {
  constructor() {
    super({
      inputs: [
        { type: 'email', name: 'email', label: 'Почта', placeholder: 'Введите эл. почту' },
        { type: 'text', name: 'login', label: 'Логин', placeholder: 'Введите логин' },
        { type: 'text', name: 'first_name', label: 'Имя', placeholder: 'Введите имя' },
        { type: 'text', name: 'second_name', label: 'Фамилия', placeholder: 'Введите фамилию' },
        { type: 'phone', name: 'phone', label: 'Телефон', placeholder: 'Введите номер телефона' },
        { type: 'password', name: 'password', label: 'Пароль', placeholder: 'Введите пароль' },
        {
          type: 'password',
          name: 'password',
          label: 'Пароль(ещё раз)',
          placeholder: 'Повторите пароль',
        },
      ],
      title: 'Регистрация',
      onSubmit: submit,
      buttonEvent: () => {
        render('login');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
