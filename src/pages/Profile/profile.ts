import Block from '../../utils/Block';
import template from './profile.hbs';
import data from '../../data';
import { submit } from '../../utils/submit';
import { render } from '../../utils/render';

export class Profile extends Block {
  constructor() {
    super({
      name: data.userInfo.displayName,
      profilePhoto: data.profilePhoto,
      inputs: [
        {
          type: 'email',
          name: 'email',
          label: 'Почта',
          placeholder: data.userInfo.email,
          style: 'inline',
        },
        {
          type: 'text',
          name: 'login',
          label: 'Логин',
          placeholder: data.userInfo.login,
          style: 'inline',
        },
        {
          type: 'text',
          name: 'first_name',
          label: 'Имя',
          placeholder: data.userInfo.firstName,
          style: 'inline',
        },
        {
          type: 'text',
          name: 'second_name',
          label: 'Фамилия',
          placeholder: data.userInfo.secondName,
          style: 'inline',
        },
        {
          type: 'text',
          name: 'display_name',
          label: 'Имя в чате',
          placeholder: data.userInfo.displayName,
          style: 'inline',
        },
        {
          type: 'phone',
          name: 'phone',
          label: 'Телефон',
          placeholder: data.userInfo.phone,
          style: 'inline',
        },
      ],
      events: {
        submit: submit
      },
      onClick: () => {render('home')}
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
