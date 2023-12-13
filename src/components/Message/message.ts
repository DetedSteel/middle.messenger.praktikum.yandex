import Block from '../../utils/Block';
import template from './message.hbs';

export interface MessageProps {
  author?: string;
  text?: string;
  image?: {
    src: string;
    alt: string;
  };
  status: string;
  statusImage?: {
    src: string;
    alt: string;
  };
  time: string;
  style: string;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super({
      style: props.style,
      image: props.image,
      text: props.text,
      statusImage: props.statusImage,
      time: props.time
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
