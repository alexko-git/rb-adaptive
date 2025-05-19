function resetSliderButtonStyles() {
    const buttonElements = document.getElementsByClassName('slider_button');
    for (let i=0; i < buttonElements.length; i++) {
        buttonElements[i].classList.remove('active');
    }
}

function setActiveSlide(idx) {
    resetSliderButtonStyles();
    const buttonElements = document.getElementsByClassName('slider_button');
    const sliderElementsBar = document.querySelector('.slider_elements');
    buttonElements[idx].classList.add('active');
    if (sliderElementsBar) {
        sliderElementsBar.style.transform = `translateX(${-200 * idx}px)`
    }
}