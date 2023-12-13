export function submit(e:SubmitEvent) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const inputs = form.querySelectorAll<HTMLInputElement>('input');

  inputs.forEach((i) => {
    console.log(i.value);
  });
}
