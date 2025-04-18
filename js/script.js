'use strict';

// navbar variables
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');

// navbar toggle functionality
navbarToggleBtn.addEventListener('click', function () {

  navbarNav.classList.toggle('active');
  this.classList.toggle('active');

});


  // Select the form element
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const emailInput = form.querySelector('input[name="subscribe"]');
    const email = emailInput.value.trim();

    if (email) {
      localStorage.setItem('subscribedEmail', email);
      alert('Email saved to local storage!');
      form.reset(); // Optional: clear input after submission
    } else {
      alert('Please enter a valid email address.');
    }
  });

