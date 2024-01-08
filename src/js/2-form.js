const registerForm = document.querySelector(".feedback-form");
let feedbackFormState = {
    email: '',
    message: ''
}

registerForm.addEventListener('input', function(event) {
    const target = event.target;

    if (target.tagName === 'INPUT') {
        feedbackFormState.email  = target.value;  
    } else if (target.tagName === 'TEXTAREA') {
        feedbackFormState.message  = target.value;
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));

    // console.table(JSON.parse(localStorage.getItem("feedback-form-state")));

  });


registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
   
});
