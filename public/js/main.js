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

function handleClosePopup() {
    const popupContainerElement = document.querySelector('.popup_container');
    popupContainerElement.style.display = 'none';
}

function handleAddToCart() {
    const popupContainerElement = document.querySelector('.popup_container');
    popupContainerElement.style.display = 'flex';
}

window.onload = () => {
    const addToCartButtonElements = document.getElementsByClassName('add_to_cart_btn');
    for (let i=0; i < addToCartButtonElements.length; i++) {
        addToCartButtonElements[i].addEventListener('click', handleAddToCart);
    }
}

window.onbeforeunload = () => {
    const addToCartButtonElements = document.getElementsByClassName('add_to_cart_btn');
    for (let i=0; i < addToCartButtonElements.length; i++) {
        addToCartButtonElements[i].removeEventListener('click', handleAddToCart);
    }
}