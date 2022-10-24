
var containerSLider = document.querySelector(".slider-container");
var containerSlider = document.querySelector(".slider-containers");

document.getElementsByTagName("BODY")[0].onresize = function () { mudandoElementoNoHtml() };
let largura = window.screen.width;

if (largura < 1250) {

    containerSLider.innerHTML = ` <div class="section_slider_div_h1">
    <h1>Novidades do Instragram</h1>
    </div>
    <div class="section_slider_div">
    <a href="https://www.instagram.com/oacumuladorbaterias/" target="_blank">
        <img class="section_slider_div_img" src="./Images/SliderIMG1.jfif" alt="">
    </a>
    </div>`;
} else if (largura >= 1250) {

    containerSlider.innerHTML = `<div class="left-slide">
    <div style="background-color: #FD3555">
        <h1>Baterias para sua casa</h1>
        <p>Baterias para sistemas de energia solar!</p>
    </div>
    <div style="background-color: #2A86BA">
        <h1>A maior da cidade!</h1>
        <p>58 anos juntos com você!</p>
    </div>
    <div style="background-color: #252E33">
        <h1>Vem visitar a nossa loja!</h1>
        <p>Vem ver a loja do melhor atendimento da cidade!</p>
    </div>
    <div style="background-color: #FFB866">
        <h1>Compre Baterias</h1>
        <p>Na maior loja de bateria na Alagoinhas! </p>
    </div>
</div>
<div class="right-slide">
    <div style="background-image: url('./Images/SliderIMG1.jfif')"></div>
    <div style="background-image: url('./Images/SliderIMG2.jfif')"></div>
    <div style="background-image: url('./Images/SliderIMG3.jfif')"></div>
    <div style="background-image: url('./Images/sliderIMG4.jfif');"></div>
</div>
<div class="action-buttons">
    <button class="down-button">
        <i class="fas fa-arrow-down"> &darr;</i>
    </button>
    <button class="up-button">
        <i class="fas fa-arrow-up">&uarr;</i>
    </button>
</div>
</div>`;

}

if (largura >= 1250) {

    const sliderContainers = document.querySelector('.slider-containers')
    const slideRight = document.querySelector('.right-slide')
    const slideLeft = document.querySelector('.left-slide')
    const upButton = document.querySelector('.up-button')
    const downButton = document.querySelector('.down-button')
    const slidesLength = slideRight.querySelectorAll('div').length

    let activeSlideIndex = 0;

    slideLeft.style.top = `-${(slidesLength - 1) * 90}vh`

    upButton.addEventListener('click', () => changeSlide('up'))
    downButton.addEventListener('click', () => changeSlide('down'))
    const sliderHeight = sliderContainers.clientHeight
    const changeSlide = (direction) => {

        if (direction === 'up') {
            activeSlideIndex++
            if (activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0
            }
        } else if (direction === 'down') {
            activeSlideIndex--
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1
            }
        }

        slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
        slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    }


    setInterval(() => {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
        slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
        slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    }, 5000);
} else {
    console.log("Não");
}


function mudandoElementoNoHtml() {

    largura = window.screen.width;

    if (largura < 1250) {
        containerSLider.classList.remove("slider-container-null");
        containerSLider.innerHTML = ` <div class="section_slider_div_h1">
        <h1>Novidades do Instragram</h1>
        </div>
        <div class="section_slider_div">
        <a href="https://www.instagram.com/oacumuladorbaterias/" target="_blank">
            <img class="section_slider_div_img" src="./Images/SliderIMG1.jfif" alt="">
        </a>
        </div>`;
        containerSlider.innerHTML = ``;
        containerSlider.classList.add("slider-containers-null");
    } else if (largura >= 1250) {
        containerSlider.classList.remove("slider-containers-null");
        containerSlider.innerHTML = `<div class="left-slide">
        <div style="background-color: #FD3555">
            <h1>Baterias para sua casa</h1>
            <p>Baterias para sistemas de energia solar!</p>
        </div>
        <div style="background-color: #2A86BA">
            <h1>A maior da cidade!</h1>
            <p>58 anos juntos com você!</p>
        </div>
        <div style="background-color: #252E33">
            <h1>Vem visitar a nossa loja!</h1>
            <p>Vem ver a loja do melhor atendimento da cidade!</p>
        </div>
        <div style="background-color: #FFB866">
            <h1>Compre Baterias</h1>
            <p>Na maior loja de bateria na Alagoinhas! </p>
        </div>
    </div>
    <div class="right-slide">
        <div style="background-image: url('./Images/SliderIMG1.jfif')"></div>
        <div style="background-image: url('./Images/SliderIMG2.jfif')"></div>
        <div style="background-image: url('./Images/SliderIMG3.jfif')"></div>
        <div style="background-image: url('./Images/sliderIMG4.jfif');"></div>
    </div>
    <div class="action-buttons">
        <button class="down-button">
            <i class="fas fa-arrow-down"> &darr;</i>
        </button>
        <button class="up-button">
            <i class="fas fa-arrow-up">&uarr;</i>
        </button>
    </div>
    </div>`;
        containerSLider.innerHTML = ``;
        containerSLider.classList.add("slider-container-null");
    }

    if (largura >= 1250) {

        const sliderContainers = document.querySelector('.slider-containers')
        const slideRight = document.querySelector('.right-slide')
        const slideLeft = document.querySelector('.left-slide')
        const upButton = document.querySelector('.up-button')
        const downButton = document.querySelector('.down-button')
        const slidesLength = slideRight.querySelectorAll('div').length

        let activeSlideIndex = 0;

        slideLeft.style.top = `-${(slidesLength - 1) * 90}vh`

        upButton.addEventListener('click', () => changeSlide('up'))
        downButton.addEventListener('click', () => changeSlide('down'))
        const sliderHeight = sliderContainers.clientHeight
        const changeSlide = (direction) => {

            if (direction === 'up') {
                activeSlideIndex++
                if (activeSlideIndex > slidesLength - 1) {
                    activeSlideIndex = 0
                }
            } else if (direction === 'down') {
                activeSlideIndex--
                if (activeSlideIndex < 0) {
                    activeSlideIndex = slidesLength - 1
                }
            }

            slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
            slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
        }


        setInterval(() => {
            activeSlideIndex++;
            if (activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0
            }
            slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
            slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
        }, 5000);
    } else if (largura < 1250) {
        const section_slider_div_img = document.querySelector(".section_slider_div_img");
        var imageAtual = 1;
        var imgTestador = new Image();

        setInterval(() => {
            imageAtual++;

            imgTestador.src = `./Images/SliderIMG${imageAtual}.jfif`;

            imgTestador.onload = function () {

                section_slider_div_img.setAttribute("src", `./Images/SliderIMG${imageAtual}.jfif`);

            }
            imgTestador.onerror = function () {

                imageAtual = 1;
                section_slider_div_img.setAttribute("src", `./Images/SliderIMG${imageAtual}.jfif`);

            }
        }, 5000)
    }

}

