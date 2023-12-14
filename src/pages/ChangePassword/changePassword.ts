import Block from '../../utils/Block';
import template from './changePassword.hbs';
import data from '../../data';
import { submit } from '../../utils/submit';
import { render } from '../../utils/render';

export class changePassword extends Block {
  constructor() {
    super({
      name: data.userInfo.displayName,
      profilePhoto: data.profilePhoto,
      inputs: [
        {
          type: 'password',
          name: 'old_password',
          label: 'Старый пароль',
          placeholder: 'Введите старый пароль',
          style: 'inline',
        },
        {
          type: 'password',
          name: 'new_password',
          label: 'Новый пароль',
          placeholder: 'Введите новый пароль',
          style: 'inline',
        },
        {
          type: 'password',
          name: 'confirm_password',
          label: 'Подтверждение пароля',
          placeholder: 'Введите подтверждение пароля',
          style: 'inline',
        },
      ],
      events: {
        submit: submit,
      },
      onClick: () => {
        render('home');
      },
    });
  }

  public messages = data.vadimChat.messages;

  render() {
    return this.compile(template, this.props);
  }
}
