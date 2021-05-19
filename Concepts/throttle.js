const throttle = (func, limit) => {
    let inThrottle
    return function(...args) {
      if (!inThrottle) {
        func(args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }
  const throttleButton = document.getElementById('throttle-test');
  throttleButton.addEventListener('click', throttle(function(e) {
    return console.log('Hey! It is', new Date().toUTCString(), e);
  }, 3000));