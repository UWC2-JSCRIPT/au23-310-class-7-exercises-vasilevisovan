// TODO
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const form = document.getElementById("connect-form");

//check if an imput meets a lenght requirement
const validLength = (input, min) => {
    if (input.value.trim().lenght > min) {
        input.parentElement.classList.remove('invalid');
    } else {
        input.parentElement.classList.add('invalid')
    }
}

form.addEventListener('submit', (e) => {
 e.preventDefault();
 validLength(firstName, 3);
 //debugger;
 input.parentElement.classList.remove('invalid');
 validLength(lastName,3);
 //validateEmail(email);

}); 
