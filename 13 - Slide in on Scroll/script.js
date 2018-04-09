const slideImages = document.querySelectorAll('.slide-in');
window.addEventListener('scroll', debounce(checkSlide));

function debounce(func, wait = 20, immediate = false) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  console.count('checkSlide called');
  const windowTop      = window.scrollY;
  const windowBot      = windowTop + window.innerHeight;
  // boundaryOffset is how far past the window's border images should activate,
  // in pixels:  
  const boundaryOffset = 100;

  slideImages.forEach(image => {
    const imageTop    = image.offsetTop
    const imageBot    = imageTop + image.height
    const activeImage =
      // image top is above window bottom by boundaryOffset px:
      imageTop < windowBot - boundaryOffset &&
      // and image bottom is below window top by boundaryOffset px:
      imageBot > windowTop + boundaryOffset;

    if (activeImage) { 
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

