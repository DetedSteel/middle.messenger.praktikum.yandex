import Block from '../../utils/Block';
import template from './input.hbs';

export interface InputProps {
  style?: string;
  label?: string;
  type: string;
  placeholder: string;
  name?: string;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      style: props.style,
      label: props.label,
      type: props.type,
      placeholder: props.placeholder,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
