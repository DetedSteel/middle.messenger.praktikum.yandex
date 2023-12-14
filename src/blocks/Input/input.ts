import Block from '../../utils/Block';
import { validate } from '../../utils/validation';
import template from './input.hbs';

export interface InputProps {
  style?: string;
  label?: string;
  type: string;
  placeholder: string;
  name?: string;
  errorLabel?: string;
  onBlur: (e: Event) => void;
  value?: string;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      style: props.style,
      label: props.label,
      type: props.type,
      name: props.name,
      placeholder: props.placeholder,
      errorLabel: '',
      value: props.value,
      events: {
        focusout: (e: Event) => {
          const target = e.target as HTMLInputElement;
          const value = target.value;
          this.setProps({ ...props, errorLabel: validate(target), value: value });
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
