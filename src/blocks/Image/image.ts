import Block from '../../utils/Block';
import template from './image.hbs';

interface ImageProps {
  src: string;
  alr: string;
  style: string;
}

export class Image extends Block {
  constructor(props: ImageProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
