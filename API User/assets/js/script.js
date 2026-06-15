function getUser(userId) {

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("User Not Found");
            }
            else {
                return response.json();
            }
        })
        .then(user => {
            displayDetails.style.display = 'block';
            userName.textContent = user.name;
            userEmail.textContent = user.email;
        })
        .catch((error) => {
            console.log("Error", error);
            errorMessage.textContent = "Failed to fetch user data.";
        })
}

let button = document.querySelector('button');
let displayDetails = document.getElementById('displayDetails');
let errorMessage = document.getElementById('errorMessage');
let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');

displayDetails.style.display = 'none';

button.addEventListener('click',
    (event) => {
        const userInputId = document.getElementById('inputID').value;
        console.log(userInputId);
        if (userInputId > 0 && userInputId < 11) {
            errorMessage.style.display = 'none';
            getUser(userInputId);
        }
        else {
            displayDetails.style.display = 'none';
            errorMessage.style.display = 'block';
            errorMessage.textContent = "Enter the User ID between 1 and 11"
        }
    }
)