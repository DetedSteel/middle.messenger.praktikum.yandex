import { validate } from "./validation";

export function submit(e:SubmitEvent) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const inputs = form.querySelectorAll<HTMLInputElement>('input');
  let isCorrect = false;
  const event = new Event('focusout', {bubbles: true, cancelable: true})
  inputs.forEach((i) => {
    if (!validate(i)) {
      isCorrect = true;
    } else {
      i.dispatchEvent(event);
      isCorrect = false;
    }
  });
  if (isCorrect) {
    inputs.forEach((i) => {
      console.log(i.value);
    });
  }
}
