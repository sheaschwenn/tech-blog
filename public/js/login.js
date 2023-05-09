const loginFormHandler = async (event) => {
    event.preventDefault();

    // get login values
    const user_name = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (user_name && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ user_name, password }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Failed to login")
        }
    }
};

// const signupFormHandler = async (event) => {
//     event.preventDefault();
//     // event.stopPropagation();

//     const user_name = document.querySelector('#username-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     if (user_name && password) {
//         const response = await fetch('/api/user', {
//             method: 'POST',
//             body: JSON.stringify({ user_name, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             console.log("are you reaching here?")
           
//               const loginResponse = await fetch('/api/user/login', {
//                 method: 'POST',
//                 body: JSON.stringify({ user_name, password }),
//                 headers: { 'Content-Type': 'application/json' },
//             })

//             if (loginResponse.ok) {
//                 document.location.replace('/dashboard');

//             }else {
//             alert(response.statusText)
//         }
//     }
//     }
// }

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Get the username and password from the signup form inputs
    const user_name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
   
  
    if (user_name && password) {
      // Send a POST request to the users route to create a new user
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // Check if the response is successful
      if (response.ok) {
        // Redirect to the dashboard after successful signup
        document.location.replace('/dashboard');
      } else {
        // Display an alert if signup fails
        alert('Failed to sign up.');
      }
    }
  };
  

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('click', signupFormHandler);