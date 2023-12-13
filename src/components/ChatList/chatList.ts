import Block from '../../utils/Block';
import { ChatItem } from '../ChatItem/chatItem';
import template from './chatList.hbs';

interface ChatListProps {
  chats: ChatItem[]
}

export class ChatList extends Block {
  constructor(props: ChatListProps) {
    super({
      chats: props.chats
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
