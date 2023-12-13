import Block from '../../utils/Block';
import template from './errorPage.hbs';
import { render } from '../../utils/render';

export class ErrorPage extends Block {
  constructor(data: {errorCode:string, text:string}) {
    super({
      errorCode: data.errorCode,
      text: data.text,
      onClick: () => { render('chat') },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
