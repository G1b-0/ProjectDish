// Define a mock recipe database
const recipes = [
  {
    id: 1,
    title: 'Chicken Alfredo',
    ingredient: 'chicken',
    image: 'https://www.simplyrecipes.com/wp-content/uploads/2019/08/chicken-alfredo-vertical-a-1800-768x1152.jpg',
    description: 'A classic pasta dish made with chicken and Alfredo sauce.',
    instructions: 'Cook pasta according to package instructions. In a separate pan, cook chicken until browned. In a saucepan, heat Alfredo sauce over low heat. Drain pasta and add it to the saucepan with the Alfredo sauce. Add the chicken and stir to combine. Serve immediately.'
  },
  {
    id: 2,
    title: 'Grilled Cheese Sandwich',
    ingredient: 'cheese',
    image: 'https://www.simplyrecipes.com/wp-content/uploads/2019/08/grilled-cheese-vertical-a-1800-768x1152.jpg',
    description: 'A simple sandwich made with bread and cheese, toasted until golden brown.',
    instructions: 'Spread butter on one side of each bread slice. Place one slice, butter side down, in a skillet over medium heat. Add cheese on top of the bread. Place the other slice of bread, butter side up, on top of the cheese. Cook until the bottom bread slice is golden brown, then flip the sandwich and cook until the other side is golden brown. Serve hot.'
  },
  {
    id: 3,
    title: 'Spaghetti and Meatballs',
    ingredient: 'ground beef',
    image: 'https://www.simplyrecipes.com/wp-content/uploads/2020/12/Spaghetti-and-Meatballs-LEAD-1-768x512.jpg',
    description: 'A classic Italian dish made with spaghetti and meatballs.',
    instructions: 'Cook spaghetti according to package instructions. In a mixing bowl, combine ground beef, breadcrumbs, Parmesan cheese, egg, garlic, salt, and pepper. Mix well and form into meatballs. In a pan, heat olive oil over medium heat. Add meatballs and cook until browned on all sides. Add tomato sauce to the pan and simmer for 10-15 minutes. Serve over cooked spaghetti.'
  },
  {
    id: 4,
    title: 'Caprese Salad',
    ingredient: 'tomatoes',
    image: 'https://www.simplyrecipes.com/wp-content/uploads/2020/08/Caprese-Salad-LEAD-3-768x512.jpg',
    description: 'A simple salad made with fresh tomatoes, mozzarella, and basil.',
    instructions: 'Slice tomatoes and mozzarella and arrange them on a plate. Sprinkle with salt and pepper to taste. Drizzle with olive oil and balsamic vinegar. Top with fresh basil leaves and serve.'
  },
  {
    id: 5,
    title: 'Chocolate Chip Cookies',
    ingredient: 'chocolate chips',
    image: 'https://www.simplyrecipes.com/wp-content/uploads/2020/12/Chocolate-Chip-Cookies-LEAD-2-768x512.jpg',
    description: 'A classic cookie made with chocolate chips and butter.',
    instructions: 'Preheat oven to 375°F. In a mixing bowl, cream together butter, white sugar, and brown sugar until smooth. Beat in eggs one at a time, then stir in vanilla. In a separate bowl, combine flour, baking soda, and salt. Gradually add the dry ingredients to the butter mixture, mixing well. Stir in chocolate chips. Drop dough by rounded

    // Define a function to find recipes based on ingredient
function findRecipes() {
  // Get the input value from the user
  const ingredient = document.getElementById('ingredient-input').value;

  // Filter the recipe database by ingredient
  const matchingRecipes = recipes.filter(recipe => recipe.ingredient === ingredient);

  // Get the container where we will display the recipe cards
  const recipesContainer = document.getElementById('recipes-container');

  // Clear any existing recipe cards from the container
  recipesContainer.innerHTML = '';

  // Create a recipe card for each matching recipe
  matchingRecipes.forEach(recipe => {
    // Create the HTML elements for the recipe card
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    const image = document.createElement('img');
    image.src = recipe.image;
    const title = document.createElement('h3');
    title.textContent = recipe.title;
    const description = document.createElement('p');
    description.textContent = recipe.description;
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'View Recipe';
    link.addEventListener('click', () => {
      alert(recipe.instructions);
    });

    // Add the HTML elements to the recipe card
    recipeCard.appendChild(image);
    recipeCard.appendChild(title);
    recipeCard.appendChild(description);
    recipeCard.appendChild(link);

    // Add the recipe card to the container
    recipesContainer.appendChild(recipeCard);
  });
}
