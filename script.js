function validateForm() {
    const form = document.getElementById('signUpForm');
    const messagePanel = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let query = document.getElementById('query').value;

        messagePanel.innerHTML='';
        if (!firstName || !lastName || !email || !phone || !query){
            displayErrorMessage('All fields are mandatory');
            return;
        }
        else if (!validateEmail(email)){
            displayErrorMessage('Please enter a valid email address');
            return;
        }
        else if (phone.length!=10){
            displayErrorMessage('Please enter a valid phone number');
            return;
        }

        messagePanel.innerHTML='';
        
        displaySuccessMessage('Form submitted successfully');
        window.alert("Thankyou!");
    });

    function validateEmail(email){
        const egemail = /\S+@\S+\.\S+/;
        return egemail.test(email);;
    }

    function displayErrorMessage(message) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent=message;
        errorMessage.classList.add('error-message');
        messagePanel.appendChild(errorMessage);
    }

    function displaySuccessMessage(message){
        const successMessage = document.createElement('p');
        successMessage.textContent = message;
        successMessage.classList.add('success-message');
        messagePanel.appendChild(successMessage);
    }
}

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
let iteration = 0;

button1.addEventListener("click", function(){
    iteration+=1;
    if (iteration % 5 === 0){
        document.body.style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
        document.body.style.color = `rgb(${255}, ${255}, ${255})`;
    } else if (iteration % 5 == 1){
        document.body.style.backgroundColor = `rgb(${128}, ${0}, ${128})`;
        document.body.style.color = `rgb(${144}, ${238}, ${144})`;
    } else if (iteration % 5 == 2){
        document.body.style.backgroundColor = `rgb(${255}, ${0}, ${0})`;
        document.body.style.color = `rgb(${0}, ${255}, ${255})`;
    } else if (iteration % 5 == 3){
        document.body.style.backgroundColor = `rgb(${0}, ${128}, ${0})`;
        document.body.style.color = `rgb(${255}, ${192}, ${203})`;
    } else if (iteration % 5 == 4){
        document.body.style.backgroundColor = `rgb(${255}, ${0}, ${0})`;
        document.body.style.color = `rgb(${120}, ${255}, ${120})`;
    }
});

button2.addEventListener("click", function(){
    iteration=0;
    document.body.style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
    document.body.style.color = `rgb(${255}, ${255}, ${255})`;
    iteration+=1;
});
