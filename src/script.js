document.addEventListener('contextmenu', event => event.preventDefault());

var _myAge = document.getElementById('age')
var _myExp = document.getElementById('exp')

// To calculate information like age and experience:
function getInfo() {
    var expYear= 11;
    var birthYear = 2009;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const myAge = currentYear - birthYear;
    const myExp = myAge - expYear
    _myAge.innerHTML = myAge;
    _myExp.innerText = myExp;
    setTimeout(getInfo, 1);
}

getInfo();
