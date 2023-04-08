// Carrinho de compras
let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartIcon();
}

function updateCartIcon() {
  let cartIcon = document.querySelector('.cart-icon');
  cartIcon.innerHTML = '&#9733;';
}

// Validação do formulário de cadastro
let form = document.querySelector('#user-form');
let firstNameInput = form.querySelector('#first-name');
let lastNameInput = form.querySelector('#last-name');
let emailInput = form.querySelector('#email');
let passwordInput = form.querySelector('#password');
let confirmPasswordInput = form.querySelector('#confirm-password');

firstNameInput.addEventListener('blur', validateFirstName);
lastNameInput.addEventListener('blur', validateLastName);
passwordInput.addEventListener('blur', validatePassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);

function validateFirstName() {
  if (firstNameInput.value === '') {
    showErrorMessage(firstNameInput, 'Por favor, informe o seu primeiro nome.');
  } else {
    hideErrorMessage(firstNameInput);
  }
}

function validateLastName() {
  if (lastNameInput.value === '') {
    showErrorMessage(lastNameInput, 'Por favor, informe o seu sobrenome.');
  } else {
    hideErrorMessage(lastNameInput);
  }
}

function validatePassword() {
  if (passwordInput.value.length < 8) {
    showErrorMessage(passwordInput, 'A sua senha deve ter no mínimo 8 caracteres.');
  } else {
    hideErrorMessage(passwordInput);
  }
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    showErrorMessage(confirmPasswordInput, 'As senhas informadas não coincidem.');
  } else {
    hideErrorMessage(confirmPasswordInput);
  }
}

function showErrorMessage(input, message) {
  let errorElement = input.nextElementSibling;
  errorElement.innerHTML = message;
  errorElement.classList.add('show');
}

function hideErrorMessage(input) {
  let errorElement = input.nextElementSibling;
  errorElement.innerHTML = '';
  errorElement.classList.remove('show');
}

// Validar todos os campos do formulário antes de enviar
form.addEventListener('submit', function (event) {
  validateFirstName();
  validateLastName();
  validatePassword();
  validateConfirmPassword();

  let errorMessages = form.querySelectorAll('.error-message.show');
  if (errorMessages.length > 0) {
    event.preventDefault();
  }
});

