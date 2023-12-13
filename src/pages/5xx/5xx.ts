import { ErrorPage } from '../../components/ErrorPage/errorPage';
import template from './5xx.hbs';

export class ServerErrorPage extends ErrorPage {
  constructor() {
    super({errorCode:'500', text:'Мы уже фиксим'});
  }

  render() {
    return this.compile(template, this.props);
  }
}
