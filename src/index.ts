import { render } from './utils/render';
import { registerComponent } from './utils/registerComponenrs';
import { Button } from './blocks/Button/button';
import { ErrorPage } from './components/ErrorPage/errorPage';
import { ChatItem } from './components/ChatItem/chatItem';
import { ChatList } from './components/ChatList/chatList';
import { Input } from './blocks/Input/input';
import { Image } from './blocks/Image/image';
import { Message } from './components/Message/message';
import { ChatWith } from './components/ChatWith/chatWith';
import { Form } from './components/Form/form';
import { ProfileSettings } from './components/ProfileSettings/profileSettings';

registerComponent('Button', Button)
registerComponent('ErrorPage', ErrorPage)
registerComponent('ChatItem', ChatItem)
registerComponent('ChatList', ChatList)
registerComponent('Input', Input)
registerComponent('Image', Image)
registerComponent('Message', Message)
registerComponent('ChatWith', ChatWith)
registerComponent('Form', Form)
registerComponent('ProfileSettings', ProfileSettings)


window.addEventListener('DOMContentLoaded', () => {
  render('home')
});
