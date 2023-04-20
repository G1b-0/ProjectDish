// Code to fetch the mock data from the JSON file and store it in a variable
const recipes = [
  {
    name: "Egg Benedict",
    ingredients: ["English muffins", "ham", "eggs", "hollandaise sauce"],
    image: "egg-benedict.jpg"
  },
  {
    name: "Omelette",
    ingredients: ["eggs", "cheese", "milk", "butter"],
    image: "omelette.jpg"
  },
  {
    name: "Scrambled Eggs",
    ingredients: ["eggs", "milk", "butter"],
    image: "scrambled-eggs.jpg"
  }
];

// Code to handle the search functionality
const searchForm = document.querySelector("form");
searchForm.addEventListener("submit", event => {
  event.preventDefault();
  const ingredient = searchForm.elements.ingredient.value.toLowerCase();
  const results = recipes.filter(
    recipe => recipe.ingredients.some(i => i.toLowerCase().includes(ingredient))
  );
  localStorage.setItem("results", JSON.stringify(results));
  window.location.href = "results.html";
});
