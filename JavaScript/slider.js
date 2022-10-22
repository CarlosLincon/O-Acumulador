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





