const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error') //referred to CSS style when submit
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000) //error msg disappears after 3seconds (3000ms)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li); //adding stuff in the HTML ul

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
//this doesn't save anything, we need to link to a database