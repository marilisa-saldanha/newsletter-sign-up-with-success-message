const input = document.getElementById('email');
const btnSubmit = document.querySelector('.submit');
const btnDismiss = document.querySelector('.btnDismiss');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const infoError = document.querySelector('.infoError');
const hideScreen = document.querySelector('.hideScreen');
const mainScreen = document.querySelector('.mainScreen');
const subscribedEmail = document.querySelector('.subscribedEmail');

btnSubmit.addEventListener('click', (ev) => {
  ev.preventDefault();
  emailValidate();
  isEmailEmpty();
})

btnDismiss.addEventListener('click', () => {
  backToMainScreen();
})

function emailValidate() {
  if(emailRegex.test(input.value)) {
    mainScreen.style.display = 'none';
    hideScreen.style.display = 'flex';
    subscribedEmail.textContent = input.value;
  } else {
    input.style.border = '.063rem solid var(--tomato)';
    input.style.backgroundColor = 'var(--light-red)';
    input.style.color = 'var(--tomato)';
    infoError.textContent = 'Valid email required';
  }
}

function isEmailEmpty() {
  if(input.value === '') {
    input.style.border = '.063rem solid var(--tomato)';
    input.style.backgroundColor = 'var(--light-red)';
    input.style.color = 'var(--tomato)';
    infoError.textContent = 'Email cannot be empty';
  }
}

function backToMainScreen() {
  hideScreen.style.display = 'none';
  mainScreen.style.display = 'flex';
  input.value = '';
  infoError.textContent = '';
  input.style.border = '';
  input.style.backgroundColor = '';
}