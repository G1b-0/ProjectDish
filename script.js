const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input.value;

  // Fetch the mock data
  const mockData = [
    {
      name: "Spaghetti Bolognese",
      ingredients: ['spaghetti', "ground beef", "tomato sauce", "onions", "garlic", "basil"],
      instructions: "1. Cook spaghetti according to package instructions.\n 2. In a separate pan, cook ground beef until browned.\n 3. Add chopped onions and garlic to the pan and cook until soft.\n 4. Stir in tomato sauce and basil.\n 5. Serve the sauce over cooked spaghetti.",
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
