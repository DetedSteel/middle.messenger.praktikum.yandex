import Block from '../../utils/Block';
import { MessageProps } from '../Message/message';
import template from './chatWith.hbs';

export type ImageT = {
  src: string,
  alt: string
}

interface ChatWithProps {
  messages: MessageProps[];
  chatPhoto: string;
  addFileImage: ImageT,
  sendMessageImage: ImageT,
  menuDotsImage: ImageT,
  readMessageImage: ImageT,
  name: string
}

export class ChatWith extends Block {
  constructor(props: ChatWithProps) {
    super({
      messages: props.messages,
      chatPhoto: props.chatPhoto,
      addFileImage: props.addFileImage,
      sendMessageImage: props.sendMessageImage,
      menuDotsImage: props.menuDotsImage,
      readMessageImage: props.readMessageImage,
      name: props.name
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
