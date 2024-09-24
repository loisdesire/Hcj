document.querySelector('.contact-form').addEventListener('submit', function(event) {
    // Get all the input fields
    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    const email = document.getElementById('email');
    const queryType = document.querySelector('input[name="querytype"]:checked');
    const message = document.getElementById('message');
    const consent = document.getElementById('consent');
  
    // Validate the fields
    if (!firstName.value || !lastName.value || !email.value || !queryType || !message.value || !consent.checked) {
      event.preventDefault();
      alert('Please fill out all required fields.');
    }
  });
  