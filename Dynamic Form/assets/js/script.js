let dob = document.getElementById('dob');
dob.max = new Date().toISOString().split("T")[0];

let inputForm = document.getElementById('inputForm');
let detailsDisplay = document.getElementById('detailsDisplay')

let button = document.querySelector('button[type="submit"]');
let editButton = document.getElementById('editButton');

button.addEventListener('click', function (event) {
    event.preventDefault();

    let userName = document.getElementById('userName').value;
    let userEmail = document.getElementById('userEmail').value;
    let phone = document.getElementById('phone').value;
    let dobValue = dob.value;
    let gender = document.querySelector('input[name = "gender"]:checked').value;
    let qualification = document.getElementById('qualification').value;
    let skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(element => element.value);
    let address = document.getElementById('address').value;

    console.log(userName);
    console.log(userEmail);
    console.log(phone);
    console.log(dob.value);
    console.log(gender);
    console.log(qualification);
    console.log(skills);
    console.log(address);

    let displayName = document.getElementById('displayName');
    let displayEmail = document.getElementById('displayEmail');
    let displayPhone = document.getElementById('displayPhone');
    let displaydob = document.getElementById('displaydob');
    let displayGender = document.getElementById('displayGender');
    let displayQualification = document.getElementById('displayQualification');
    let displaySkills = document.getElementById('displaySkills');
    let displayAddress = document.getElementById('displayAddress');

    displayName.textContent = userName;
    displayEmail.textContent = userEmail;
    displayPhone.textContent = phone;
    displaydob.textContent = dobValue;
    displayGender.textContent = gender;
    displayQualification.textContent = qualification;
    displaySkills.textContent = skills.join(',');
    displayAddress.textContent = address;

    inputForm.style.display = 'none';
    detailsDisplay.style.display = 'block';

    console.log("Display Name", displayName);
    console.log("Display Email", displayEmail);
    console.log("Display Phone", displayPhone);
    console.log("Display dob", displaydob);
    console.log("Display Gender", displayGender);
    console.log("Display Qualification", displayQualification);
    console.log("Display Skills", displaySkills);
    console.log("Display Address", displayAddress);
});

editButton.addEventListener('click',function()
{
    inputForm.style.display = 'block';
    detailsDisplay.style.display = 'none';
})