import Block from '../../utils/Block';
import { render } from '../../utils/render';
import { ChatItem } from '../ChatItem/chatItem';
import template from './chatList.hbs';

interface ChatListProps {
  chats: ChatItem[];
  onClick: () => void;
}

export class ChatList extends Block {
  constructor(props: ChatListProps) {
    super({
      chats: props.chats,
      onClick: () => {render('profileSettings')},
      image: {
        src: '/icons/profileArrow.svg',
        alt: 'profileArrow'
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
