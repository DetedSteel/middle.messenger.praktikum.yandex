import Block from '../../utils/Block';
import template from './chatItem.hbs';

export interface ChatItemProps {
  chatItemPhoto: string;
  chatName: string;
  lastMessageAuthor?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount?: number;
}

export class ChatItem extends Block {
  constructor(props: ChatItemProps) {
    super({
      chatItemPhoto: props.chatItemPhoto,
      chatName: props.chatName,
      lastMessageAuthor: props.lastMessageAuthor,
      lastMessage: props.lastMessage,
      lastMessageTime: props.lastMessageTime,
      unreadCount: props.unreadCount,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
