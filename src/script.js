document.addEventListener('contextmenu', event => event.preventDefault());

var _myAge = document.getElementById('age')
var _myExp = document.getElementById('exp')

// To calculate age:
var year_born = 2009;
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
setTimeout(getAge, 1000)
let calculatedAge = getAge(year_born);

// To calculate Experience:
var year_exp = 11
let calculatedExp = calculatedAge - year_exp

_myExp.innerText = calculatedExp;

_myAge.innerText = calculatedAge;
