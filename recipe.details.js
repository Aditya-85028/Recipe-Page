let recipes = [];

// Fetch recipes from JSON file
async function loadRecipes() {
    const response = await fetch('../recipes.json'); // Adjust path if needed
    recipes = await response.json();
    displayRecipe();
}

function displayRecipe() {
    const recipeSlug = window.location.pathname.split("/").pop().replace(".html", "");
    const recipe = recipes.find(r => r.slug === recipeSlug);

    if (recipe) {
        document.getElementById("recipe-title").innerText = recipe.title;
        document.getElementById("recipe-cuisine").innerText = recipe.cuisine.join(", ");
        document.getElementById("recipe-time").innerText = recipe.cookingTime;
        document.getElementById("recipe-macros").innerText = 
            `Calories: ${recipe.macros.calories} kcal, Protein: ${recipe.macros.protein}g, Carbs: ${recipe.macros.carbs}g, Fat: ${recipe.macros.fat}g`;

        const ingredientsList = document.getElementById("recipe-ingredients");
        ingredientsList.innerHTML = ""; // Clear existing ingredients
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.innerText = ingredient;
            ingredientsList.appendChild(li);
        });

        document.getElementById("recipe-instructions").innerText = recipe.instructions;
    } else {
        document.getElementById("recipe-title").innerText = "Recipe Not Found";
    }
}

// Load the recipes and display the selected one on page load
document.addEventListener("DOMContentLoaded", loadRecipes);
