import { InputProps } from '../../blocks/Input/input';
import Block from '../../utils/Block';
import template from './form.hbs';

export interface FormProps {
  inputs: InputProps[];
  title: string;
  events: {
    submit: (e: SubmitEvent) => void;
  };
  onSubmit: (e: SubmitEvent) => void;
  buttonEvent: () => void;
}

export class Form extends Block {
  constructor(props: FormProps) {
    super({
      inputs: props.inputs,
      title: props.title,
      events: {
        submit: props.onSubmit,
      },
      buttonEvent: props.buttonEvent
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
