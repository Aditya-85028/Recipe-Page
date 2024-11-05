const recipes = [
    {
        title: "Spaghetti Carbonara",
        cuisine: "Italian",
        cookingTime: "30 mins",
        macros: { calories: 500, protein: 15, carbs: 75, fat: 20 },
        ingredients: ["Spaghetti", "Eggs", "Parmesan", "Pancetta"],
        instructions: "Boil pasta, cook pancetta, mix with eggs and cheese, combine.",
    },
    {
        title: "Tacos",
        cuisine: "Mexican",
        cookingTime: "20 mins",
        macros: { calories: 400, protein: 10, carbs: 50, fat: 15 },
        ingredients: ["Tortillas", "Ground Beef", "Cheese", "Lettuce"],
        instructions: "Cook beef, assemble tacos with toppings.",
    },
    // Add more recipes as needed
];

function displayRecipes(recipesToShow) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";

    recipesToShow.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `<h3>${recipe.title}</h3><p>Cuisine: ${recipe.cuisine}</p>`;
        recipeCard.onclick = () => displayRecipeDetails(index);
        recipeList.appendChild(recipeCard);
    });
}

function displayRecipeDetails(index) {
    const recipe = recipes[index];
    alert(
        `${recipe.title}\n\nCuisine: ${recipe.cuisine}\nCooking Time: ${recipe.cookingTime}\n` +
        `Macros: Calories - ${recipe.macros.calories}, Protein - ${recipe.macros.protein}, Carbs - ${recipe.macros.carbs}, Fat - ${recipe.macros.fat}\n\n` +
        `Ingredients: ${recipe.ingredients.join(", ")}\n\nInstructions: ${recipe.instructions}`
    );
}

function filterRecipes() {
    const selectedCuisine = document.getElementById("filter-cuisine").value;
    const filteredRecipes = selectedCuisine === "all" 
        ? recipes 
        : recipes.filter(recipe => recipe.cuisine === selectedCuisine);
    displayRecipes(filteredRecipes);
}

document.addEventListener("DOMContentLoaded", () => {
    displayRecipes(recipes);
});
