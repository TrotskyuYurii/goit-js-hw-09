const registerForm = document.querySelector(".feedback-form");
let feedbackFormState = {
    email: '',
    message: ''
}

//Перевірка стану локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function () {

    feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state'));

     if (feedbackFormState) {
      document.querySelector('input[name="email"]').value = feedbackFormState.email || '';
      document.querySelector('textarea[name="message"]').value = feedbackFormState.message || '';
     }
  });


//Записуємо у локальне сховище при кожній подіі ІНПУТ
registerForm.addEventListener('input', function(event) {
    const target = event.target;

    if (target.tagName === 'INPUT') {
        feedbackFormState.email  = target.value;  
    } else if (target.tagName === 'TEXTAREA') {
        feedbackFormState.message  = target.value;
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
  });


//Відключаємо скидання форми дія за-замовченням
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('form').reset();
  console.log(feedbackFormState);
});
