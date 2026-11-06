// Форма «Оставить заявку» (66:25): поля, согласия, тексты ошибок
export const formFields = [
  { name: 'name', type: 'text', placeholder: 'Имя', autoComplete: 'name' },
  { name: 'email', type: 'email', placeholder: 'E-mail', autoComplete: 'email' },
  { name: 'phone', type: 'tel', placeholder: 'Телефон', autoComplete: 'tel' },
];

export const formAgreements = [
  { name: 'consent', label: 'Согласие на обработку персональных данных' },
  { name: 'policy', label: 'Политика конфиденциальных данных' },
];

export const formText = {
  title: 'Оставить заявку',
  submit: 'Отправить',
  demoTitle: 'Это демо-версия: заявка не отправлена',
  demoText: 'Сайт — учебный концепт, данные никуда не передаются.',
  again: 'Заполнить снова',
};
