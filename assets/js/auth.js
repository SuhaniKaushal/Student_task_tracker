const loginBox = document.getElementById('login-box');
const signupBox = document.getElementById('signup-box');

function switchToSignup() {
  loginBox.classList.add('hidden');
  signupBox.classList.remove('hidden');
}

function switchToLogin() {
  signupBox.classList.add('hidden');
  loginBox.classList.remove('hidden');
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email && password) {
    alert(`Welcome back, ${email.split('@')[0]}!`);
    window.location.href = 'dashboard.html'; // Replace with your dashboard path
  } else {
    alert('Please enter both email and password.');
  }
}

function signup() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  if (name && email && password) {
    alert(`Account created for ${name}! You can now sign in.`);
    switchToLogin();
  } else {
    alert('Please fill in all fields.');
  }
}