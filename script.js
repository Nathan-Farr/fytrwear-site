document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  alert('Thank you for joining FYTRWEAR! We\'ll keep you updated.');
  document.getElementById('signup-form').reset();
});
