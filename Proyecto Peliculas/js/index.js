const URL_PATH = "https://api.themoviedb.org";
const API_KEY = "589de366261321e4dcaa47ad662915e9";

document.addEventListener("DOMContentLoaded", async () => {
  renderNewMovies();
});

const getNewMovies = () => {
  const url = `${URL_PATH}/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;
  return axios
    .get(url)
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
};

const renderNewMovies = async () => {
  const newMovies = await getNewMovies();

  let html = "";

  newMovies.forEach((movie, index) => {
    const { id, title, overview, backdrop_path } = movie;
    const urlImage = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    const urlMovie = `../movie.html?id=${id}`;
    html += `
        <div class="carousel-item ${index === 0 ? "active" : null}" style="background-image: url('${urlImage}')">
            <div class="carousel-caption">
                <h5>${title}</h5>
                <p>${overview}</p>
                <a href="${urlMovie}" class="btn btn-primary">Más Información</a>
            </div>
        </div>
    `;
  });

  html += `
  <button class="carousel-control-prev" type="button" data-bs-target="#carousel-news-movies" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carousel-news-movies" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
  `;
  document.getElementsByClassName("list-news-movies")[0].innerHTML = html;
};
