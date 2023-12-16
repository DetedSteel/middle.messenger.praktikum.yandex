import { InputProps } from '../../blocks/Input/input';
import Block from '../../utils/Block';
import { submit } from '../../utils/submit';
import template from './profileSetting.hbs';

export interface ProfileSettingsProps {
  inputs: InputProps[];
  name: string;
}

export class ProfileSettings extends Block {
  constructor(props: ProfileSettingsProps) {
    super({
      inputs: props.inputs,
      name: props.name,
      events: {
        submit: submit
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
