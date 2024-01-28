const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const movieDate = document.querySelector('.userInputDate');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieDateToDisplay = document.querySelector('.favoriteMovieDate');

let titleInStorage = localStorage.getItem('title');
let dateInStorage = localStorage.getItem('date');
let imageUrlInStorage = localStorage.getItem('imageUrl');

if (titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieDateToDisplay.textContent = dateInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)), url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieDateInput = movieDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('date', movieDateInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieDateToDisplay.textContent = movieDateInput;
    container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)), url('${posterUrlInput}')`;
    movieTitle.value = '';
    movieDate.value = '';
    moviePosterUrl.value = '';
});
