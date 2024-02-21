const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  // Perform validation or other actions before submitting
  // For example, checking if email is valid using a regular expression:
  const email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    event.preventDefault(); // Prevent form submission
    return;
  }

  // Continue with form submission if everything is valid
  // (replace "/submit" with your actual endpoint here)
  form.submit();
});