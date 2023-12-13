import { InputProps } from '../../blocks/Input/input';
import Block from '../../utils/Block';
import template from './profileSetting.hbs';

export interface ProfileSettingsProps {
  inputs: InputProps[];
  name: string;
}

export class ProfileSettings extends Block {
  constructor(props: ProfileSettingsProps) {
    super({
      inputs: props.inputs,
      name: props.name
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
