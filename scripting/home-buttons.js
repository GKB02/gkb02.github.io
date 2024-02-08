const gigButton = document.getElementById('grid-item-one');
const servicesButton = document.getElementById('grid-item-two');
const musicButton = document.getElementById('grid-item-three');
const vidoesButton = document.getElementById('grid-item-four');
const newReleaseButton = document.getElementById('grid-item-big');
const logoButton = document.getElementById('logo-img');

const gigButtonEvent = () => {
    window.location.assign();
}

const servicesButtonEvent = () => {
    window.location.assign();
}

const musicButtonEvent = () => {
    window.location.assign("./music.html");
}

const videosButtonEvent = () => {
    window.location.assign();
}

const newReleaseButtonEvent = () => {
    window.location.assign();
}

const logoButtonEvent = () => {
    window.location.assign("./index.html");
}


gigButton.addEventListener("click", gigButtonEvent);
servicesButton.addEventListener("click", servicesButtonEvent);
musicButton.addEventListener("click", musicButtonEvent);
vidoesButton.addEventListener("click", videosButtonEvent);
vidoesButton.addEventListener("click", videosButtonEvent);
newReleaseButton.addEventListener("click", newReleaseButtonEvent);
logoButton.addEventListener("click", logoButtonEvent);