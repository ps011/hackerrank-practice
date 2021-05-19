
const debounce = (func, wait) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args)
        }, wait);
    }
}

const debounceButton = document.getElementById('debounce-test');
debounceButton.addEventListener('click', debounce((e) => { console.log('I am Debounced', e) }, 500));


