const navDropDown = document.getElementById('navDropDown');
const button = document.getElementById('buttonDiv');
const navDropDown2 = document.getElementById('navDropDown2');
const button2 = document.getElementById('buttonDiv2');

button.addEventListener('click', () => {
    navDropDown2.classList.remove('active');
    navDropDown.classList.toggle('active');
});

button2.addEventListener('click', () => {
    navDropDown.classList.remove('active');
    navDropDown2.classList.toggle('active');
});