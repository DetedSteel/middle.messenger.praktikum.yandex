import Block from '../../utils/Block';
import template from './home.hbs';
import { render } from "../../utils/render";

export class HomePage extends Block {
  constructor() {
    super({
      buttons: [
        { text: 'Страница регистрации', onClick: () => {render('register')} },
        { text: 'Страница входа', onClick: () => {render('login')} },
        { text: 'Страница профиля', onClick: () => {render('profileSettings')} },
        { text: 'Чат', onClick: () => {render('chat')} },
        { text: '404', onClick: () => {render('notFound')} },
        { text: '5xx', onClick: () => {render('serverErrorPage')}},
      ],
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
