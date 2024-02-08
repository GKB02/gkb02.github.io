const nextButton = document.getElementById('next-slide');
const prevButton = document.getElementById('prev-slide');
const slideshowContainer = document.getElementById('main-grid-container');
const slide = document.getElementById('grid-item-one');


const slideWidth = slide.offsetWidth + 32;
let totalSlideWidth = slideWidth * 6;
let scrolled = 0;



const nextButtonClick = () => {
    scrolled += slideWidth
    slideshowContainer.scrollLeft += slideWidth;
    btnVis();
}

const prevButtonClick = () => {
    scrolled -= slideWidth
    slideshowContainer.scrollLeft -= slideWidth;
    btnVis();
}

function btnVis () {
    if (scrolled === 0) {
        prevButton.style.visibility = "hidden";
    } else if (scrolled >= totalSlideWidth){
        nextButton.style.visibility = "hidden"
    } else if (scrolled > 0 ) {
        prevButton.style.visibility = "visible";
        nextButton.style.visibility = "visible";
    } 
}

btnVis();


nextButton.addEventListener('click', nextButtonClick);
prevButton.addEventListener('click', prevButtonClick)