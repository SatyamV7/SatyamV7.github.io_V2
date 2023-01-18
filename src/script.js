const _root = document.getElementById('root')
const _myAge = document.getElementById('age')
const _myExp = document.getElementById('exp')
const _home = document.getElementById('home')
const _about = document.getElementById('about')
const _projects = document.getElementById('projects')


document.addEventListener('contextmenu', event => event.preventDefault());

function onClickStyledMain() {
    _home.style.display = 'flex';
    _about.style.display = 'none';
    _projects.style.display = 'none';
}

function onClickStyledAbout() {
    _home.style.display = 'none';
    _about.style.display = 'flex';
    _projects.style.display = 'none';
}

function onClickStyledProjects() {
    _home.style.display = 'none';
    _about.style.display = 'none';
    _projects.style.display = 'flex';
}

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
    function detectDevTools(allow) {
        if (isNaN(+allow)) allow = 100;
        var start = +new Date();
        debugger;
        var end = +new Date();
        if (isNaN(start) || isNaN(end) || end - start > allow) {
            alert('DevTools detected. All operations are terminated.');
            _home.remove();
            _about.remove();
            _projects.remove();
            _root.innerHTML = `
            <nav class="navbar">
                <div class="logo">
                    <a href="/"><img src="/assets/icons/favicon.ico" width="50" height="50" alt="logo"></a>
                </div>
                <ul class="menu">
                    <li class="Home">
                        <a href="#home" class="StyledMain">
                            <font color="#64FFDA">01.&nbsp;</font>Home
                        </a>
                    </li>
                    <li class="About">
                        <a href="#about" class="StyledAbout">
                            <font color="#64FFDA">02.&nbsp;</font>About
                        </a>
                    </li>
                    <li class="Projects">
                        <a href="#projects" class="StyledProjects">
                            <font color="#64FFDA">03.&nbsp;</font>Projects
                        </a>
                    </li>
                </ul>
            </nav>
            <div style="color: #ccd6f6;position: fixed;top: 10%;bottom: 10%;left : 10%;right: 10%;display: flex;justify-content: center;align-items: center;">DevTools detected. All operations are terminated.</div>
        <div orientation="left" class="StyledSocialSection">
            <ul class="SocialLinks">
                <li><a href="https://github.com/SatyamV7" aria-label="GitHub" target="_blank" rel="noreferrer"><svg
                            xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-github">
                            <title>GitHub</title>
                            <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path>
                        </svg></a></li>
                <li><a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><svg
                            xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-instagram">
                            <title>Instagram</title>
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg></a></li>
                <li><a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer"><svg
                            xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-twitter">
                            <title>Twitter</title>
                            <path
                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                            </path>
                        </svg></a></li>
                <li><a href="https://www.linkedin.com/in/" aria-label="Linkedin" target="_blank" rel="noreferrer"><svg
                            xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-linkedin">
                            <title>LinkedIn</title>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                            </path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg></a></li>
            </ul>
        </div>
        <div orientation="right" class="StyledMailSection">
            <div class="MailContent"><a href="mailto:satyamverma8772020@gmail.com">satyamverma8772020@gmail.com</a>
            </div>
        </div>
`;
        }
    }
    if (window.attachEvent) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            detectDevTools();
            window.attachEvent('onresize', detectDevTools);
            window.attachEvent('onmousemove', detectDevTools);
            window.attachEvent('onfocus', detectDevTools);
            window.attachEvent('onblur', detectDevTools);
        } else {
            setTimeout(argument.callee, 0);
        }
    } else {
        window.addEventListener('load', detectDevTools);
        window.addEventListener('resize', detectDevTools);
        window.addEventListener('mousemove', detectDevTools);
        window.addEventListener('focus', detectDevTools);
        window.addEventListener('blur', detectDevTools);
    }
}();
