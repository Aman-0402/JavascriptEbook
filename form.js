function handleSubmit(event) {
    event.preventDefault(); // Stop form from submitting
  
    const username = document.getElementById('username').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.getElementById('gender').value;
  
    // Prepopulate: format inputs
    document.getElementById('username').value = username.toUpperCase();
    document.getElementById('email').value = email.toLowerCase();
  
    let errorMsg = '';
  
    if (username === '') {
      errorMsg += 'Username cannot be blank.<br />';
    }
  
    if (isNaN(age) || age === '') {
      errorMsg += 'Age must be a number and not empty.<br />';
    } else if (parseInt(age) < 1 || parseInt(age) > 120) {
      errorMsg += 'Age must be between 1 and 120.<br />';
    }
  
    if (!email.includes('@')) {
      errorMsg += 'Email must contain "@" character.<br />';
    }
  
    if (gender === '') {
      errorMsg += 'Please select a gender.<br />';
    }
  
    const messageBox = document.getElementById('message');
    const loadingBox = document.getElementById('loading');
  
    if (errorMsg !== '') {
      loadingBox.style.display = 'none';
      messageBox.style.color = 'red';
      messageBox.innerHTML = errorMsg;
      return false;
    }
  
    // Show loading screen
    loadingBox.style.display = 'block';
    messageBox.innerHTML = '';
  
    // Simulate delay (e.g., network request)
    setTimeout(() => {
      loadingBox.style.display = 'none';
      messageBox.style.color = 'green';
      messageBox.innerHTML = 'Form submitted successfully!';
    }, 2000); // 2 seconds
  
    return false;
  }
  