export function validate(target: HTMLInputElement): string {
  switch (target.name) {
    case 'login':
      if (!(target.value.match(/^[a-zA-Z-_\d]{3,20}$/) && target.value.match(/[a-zA-Z]+/))) {
        return `Логин должен быть от 3 до 20 символов и 
        содержать хотя бы одну букву, может содержать цифры, знаки подчёркивания и тире`;
      } else {
        return '';
      }
    case 'password':
      if (
        !(
          target.value.match(/^.{8,40}$/) &&
          target.value.match(/[A-Z]+/) &&
          target.value.match(/\d+/)
        )
      ) {
        return `Пароль должен быть от 8 до 40 
        символов и содержать хотя бы 1 заглавную букву и цифру`;
      } else {
        return '';
      }
    case 'first_name':
      if (!target.value.match(/^[A-ZА-Я]{1}[A-Za-zа-яА-Я-]+$/)) {
        return 'Некорректное имя';
      } else {
        return '';
      }
    case 'second_name':
      if (!target.value.match(/^[A-ZА-Я]{1}[A-Za-zа-яА-Я-]+$/)) {
        return 'Некорректная фамилия';
      } else {
        return '';
      }
    case 'email':
      if (!target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
        return 'Некорректный email';
      } else {
        return '';
      }
    case 'phone':
      if (!target.value.match(/^\+?[0-9]{10,15}$/)) {
        return 'Некорректный номер телефона';
      } else {
        return '';
      }
    default:
      return '';
  }
}
