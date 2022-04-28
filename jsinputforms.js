let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let nameInput = document.querySelector('#name');
let countryInput = document.querySelector('#country');
let descriptionInput = document.querySelector('#description');
let ageInput = document.querySelector('#age');


btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let country = countryInput.value;
    let description = descriptionInput.value;
    let age = ageInput.value;

    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${country}</td>
                    <td>${description}</td>
                    <td>${age}</td>
                </tr>`;

    table.innerHTML += template;
});
window.addEventListener = function() {
    localStorage.setItem(nameInput, $('#name').val());
    localStorage.setItem(countryInput, $('#country').val());
    localStorage.setItem(descriptionInput, $('#description').val());
    localStorage.setItem(ageInput, $('#age').val());
 };

 window.addEventListener = function() {
    var name = localStorage.getItem(name);
    var phone = localStorage.getItem(country);
    var phone = localStorage.getItem(description);
    var phone = localStorage.getItem(age);
    if (name !== null) $('#inputName').val(name); if (cou !== null) $('#inputPhone').val(phone);
    // ...
 }