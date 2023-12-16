import Block from '../../utils/Block';
import template from './chat.hbs';
import data from '../../data';

export class Chat extends Block {
  constructor() {
    super({
      chats: data.chats,
      messages: data.vadimChat.messages,
      profilePhoto: data.profilePhoto,
      addFileImage: data.addFileImage,
      sendMessageImage: data.sendMessageImage,
      menuDotsImage: data.menuDotsImage,
      readMessageImage: data.readMessageImage,
      name: data.vadimChat.name
    });
  }

  public messages = data.vadimChat.messages

  render() {
    return this.compile(template, this.props);
  }
}
