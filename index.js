const detectColorScheme = function(){
    let theme = 'light';
    if (localStorage.getItem('theme')){
        if (localStorage.getItem('theme') == 'dark'){
            theme = 'dark';
        }
    } else if (!window.matchMedia){
        return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches){
        theme = 'dark';
    }
    if (theme == 'dark'){
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    return theme;
}

let theme = detectColorScheme();

const toggleColor = document.querySelector('#color');

const switchTheme = function() {
    if (theme == 'light'){
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        theme = 'dark';
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        theme = 'light';
    }
}

toggleColor.addEventListener('click', switchTheme)