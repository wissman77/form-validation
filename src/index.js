import './style.css';
import icon from './icon.png';

const validate = (() => {
  const form = document.querySelector('form');
  const email = document.querySelector('#email');
  const emailError = email.nextElementSibling;
  const country = document.querySelector('#country');
  const countryError = country.nextElementSibling;
  const zipcode = document.querySelector('#zipcode');
  const zipcodeError = zipcode.nextElementSibling;
  const password = document.querySelector('#password');
  const passwordError = password.nextElementSibling;
  const passwordConfirm = document.querySelector('#password-confirm');
  const passwordConfirmError = passwordConfirm.nextElementSibling;

  email.addEventListener('input', () => {
    let error = '';
    if (email.validity.valueMissing) {
      error = 'The email field is required';
    } else if (email.validity.typeMismatch) {
      error = 'Please enter a valid email address';
    }
    email.setCustomValidity(error);
    email.reportValidity();
    emailError.textContent = error;
  });

  country.addEventListener('input', () => {
    let error = '';
    if (country.validity.valueMissing) {
      error = 'The country field is required';
    } else if (country.validity.tooShort) {
      error = `The country field must be ${country.minLength} or more characters`;
    }
    country.setCustomValidity(error);
    country.reportValidity();
    countryError.textContent = error;
  });

  zipcode.addEventListener('input', () => {
    let error = '';
    if (zipcode.validity.valueMissing) {
      error = 'The Zip code field is required';
    } else if (zipcode.validity.patternMismatch) {
      error = 'The Zip code field must match this patten 11111';
    }
    zipcode.setCustomValidity(error);
    zipcode.reportValidity();
    zipcodeError.textContent = error;
  });

  password.addEventListener('input', () => {
    let error = '';
    if (password.validity.valueMissing) {
      error = 'The password field is required';
    } else if (password.validity.tooShort || password.validity.tooLong) {
      error = `The password field must be between ${password.minLength}-${password.maxLength} characters`;
    }
    password.setCustomValidity(error);
    password.reportValidity();
    passwordError.textContent = error;
  });

  passwordConfirm.addEventListener('input', () => {
    let error = '';
    if (passwordConfirm.validity.valueMissing) {
      error = 'The password field is required';
    } else if (
      passwordConfirm.validity.tooShort ||
      passwordConfirm.validity.tooLong
    ) {
      error = `The password field must be between ${passwordConfirm.minLength}-${passwordConfirm.maxLength} characters`;
    } else if (password.value !== passwordConfirm.value) {
      error = 'The two passwords must match';
    }
    passwordConfirm.setCustomValidity(error);
    passwordConfirm.reportValidity();
    passwordConfirmError.textContent = error;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (
      email.checkValidity() &&
      country.checkValidity() &&
      zipcode.checkValidity() &&
      password.checkValidity() &&
      passwordConfirm.checkValidity()
    )
      document.querySelector('h1').textContent =
        'Validation Form - Validated ✋✋';
  });

  // add favicon
  function addFavicon() {
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/png';
    link.href = icon;
    document.head.appendChild(link);
  }

  addFavicon();
})();
