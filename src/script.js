const _root = document.getElementById('root')
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

!function () {
    function detectDevTool(allow) {
        if (isNaN(+allow)) allow = 100;
        var start = +new Date();
        debugger;
        var end = +new Date();
        if (isNaN(start) || isNaN(end) || end - start > allow) {
            alert('DevTools detected. All operations will be terminated.');
            document.write('DevTools detected.');
        }
    }
    if (window.attachEvent) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            detectDevTool();
            window.attachEvent('onresize', detectDevTool);
            window.attachEvent('onmousemove', detectDevTool);
            window.attachEvent('onfocus', detectDevTool);
            window.attachEvent('onblur', detectDevTool);
        } else {
            setTimeout(argument.callee, 0);
        }
    } else {
        window.addEventListener('load', detectDevTool);
        window.addEventListener('resize', detectDevTool);
        window.addEventListener('mousemove', detectDevTool);
        window.addEventListener('focus', detectDevTool);
        window.addEventListener('blur', detectDevTool);
    }
}();
