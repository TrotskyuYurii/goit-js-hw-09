const registerForm = document.querySelector('.feedback-form');
let feedbackFormState = {
  email: '',
  message: '',
};

// Перевірка стану локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function () {
  feedbackFormState =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  if (feedbackFormState) {
    document.querySelector('input[name="email"]').value =
      feedbackFormState.email || '';
    document.querySelector('textarea[name="message"]').value =
      feedbackFormState.message || '';
  }
});

// Записуємо у локальне сховище при кожній події INPUT
registerForm.addEventListener('input', function (event) {
  const target = event.target;

  if (target.tagName === 'INPUT' && target.name === 'email') {
    feedbackFormState.email = target.value.trim();
  } else if (target.tagName === 'TEXTAREA' && target.name === 'message') {
    feedbackFormState.message = target.value.trim();
  }

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
});

// Сабмит форми
registerForm.addEventListener('submit', event => {
  event.preventDefault();

  if (
    document.querySelector('input[name="email"]').value.trim() !== '' &&
    document.querySelector('textarea[name="message"]').value.trim() !== ''
  ) {
    console.log(feedbackFormState);

    document.querySelector('form').reset();
    feedbackFormState.email = '';
    feedbackFormState.message = '';
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(feedbackFormState)
    );
  }
});
