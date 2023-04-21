const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input.value;

  // Fetch the mock data
  const mockData = [
    {
      title: 'Recipe 1',
      ingredients: ['apple', 'ingredient 2', 'ingredient 3']
    },
    {
      title: 'Recipe 2',
      ingredients: ['ingredient 2', 'ingredient 4', 'ingredient 5']
    },
    {
      title: 'Recipe 3',
      ingredients: ['ingredient 3', 'ingredient 5', 'ingredient 6']
    }
  ];

  // Filter the data based on the search query
  const results = mockData.filter(recipe => recipe.ingredients.includes(query));

  // Redirect to the results page and pass the search results as a query string
  window.location.href = `results.html?results=${encodeURIComponent(JSON.stringify(results))}`;
});
