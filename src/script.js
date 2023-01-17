const _myAge = document.getElementById('age')
const _myExp = document.getElementById('exp')


document.addEventListener('contextmenu', event => event.preventDefault());

// To calculate information like age and experience:
function getInfo() {
    const expYear = 11;
    const birthYear = 2009;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const myAge = currentYear - birthYear;
    const myExp = myAge - expYear
    _myAge.innerText = myAge;
    _myExp.innerText = myExp;
    setTimeout(getInfo, 1);
}

getInfo();
