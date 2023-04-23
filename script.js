const form = document.querySelector('form');
const searchInput = document.querySelector('#search-input');
const API_KEY = '1';

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value;

    fetch(`https://www.themealdb.com/api/json/v1/${API_KEY}/search.php?s=${searchTerm}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          const queryString = '?results=' + encodeURIComponent(JSON.stringify(data.meals));
          window.location.href = 'results.html' + queryString;
        } else {
          window.location.href = 'results.html?results=';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
}
