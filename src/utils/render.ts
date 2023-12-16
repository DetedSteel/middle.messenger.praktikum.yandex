import { NotFoundPage } from '../pages/404/404';
import { ServerErrorPage } from '../pages/5xx/5xx';
import { changePassword } from '../pages/ChangePassword/changePassword';
import { Chat } from '../pages/Chat/chat';
import { HomePage } from '../pages/Home/home';
import { Login } from '../pages/Login/login';
import { Profile } from '../pages/Profile/profile';
import { Register } from '../pages/Register/register';

const ROUTES = {
  home: HomePage,
  notFound: NotFoundPage,
  serverErrorPage: ServerErrorPage,
  chat: Chat,
  login: Login,
  register: Register,
  profileSettings: Profile,
  changePassword: changePassword,
};

export function render(name: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!;

  root.innerHTML = '';

  const Page = ROUTES[name];

  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}
