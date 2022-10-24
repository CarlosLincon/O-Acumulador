// const section_slider_div_img = document.querySelector(".section_slider_div_img");
// var imageAtual = 1;
// var imgTestador = new Image();

// setInterval(() => {
//     imageAtual++;

//     imgTestador.src = `./Images/SliderIMG${imageAtual}.jfif`;
    
//     imgTestador.onload = function () {
    
//         section_slider_div_img.setAttribute("src", `./Images/SliderIMG${imageAtual}.jfif`);
    
//     }
//     imgTestador.onerror = function () {
    
//         imageAtual = 1;
//         section_slider_div_img.setAttribute("src", `./Images/SliderIMG${imageAtual}.jfif`);
    
//     }
// }, 5000)


const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0;




slideLeft.style.top = `-${(slidesLength - 1) * 90}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))
const sliderHeight = sliderContainer.clientHeight
const changeSlide = (direction) => {
    
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


setInterval(() => {
    activeSlideIndex++;
    if(activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
},5000);