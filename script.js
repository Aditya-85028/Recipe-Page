let recipes = [];

// Fetch recipes from JSON file
async function loadRecipes() {
    const response = await fetch('recipes.json');
    recipes = await response.json();
    displayRecipes(recipes);
}

function displayRecipes(recipesToShow) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ""; // Clear existing recipes

    recipesToShow.forEach(recipe => {
        const recipeCard = document.createElement("a"); // Create an anchor tag for the card
        recipeCard.href = `recipes/${recipe.slug}.html`; // Set link to the recipe page
        recipeCard.classList.add("recipe-card"); // Add the recipe-card class

        // Add an image and title layout similar to the example you provided
        recipeCard.innerHTML = `
            <div class="recipe-image-container">
                <img src="images/${recipe.slug}.jpg" alt="${recipe.title}">
            </div>
            <div class="recipe-title">
                <h3>${recipe.title}</h3>
            </div>
        `;
        recipeList.appendChild(recipeCard);
    });
}

function filterRecipes() {
    const selectedCuisine = document.getElementById("filter-cuisine").value;
    const selectedCourse = document.getElementById("filter-course").value;
    const selectedMainIngredient = document.getElementById("filter-ingredient").value;
    const selectedDietary = document.getElementById("filter-dietary").value;

    const filteredRecipes = recipes.filter(recipe => {
        const matchesCuisine = selectedCuisine === "all" || recipe.cuisine.includes(selectedCuisine);
        const matchesCourse = selectedCourse === "all" || recipe.course === selectedCourse;
        const matchesMainIngredient = selectedMainIngredient === "all" || recipe.mainIngredient === selectedMainIngredient;
        const matchesDietary = selectedDietary === "all" || recipe.dietary.includes(selectedDietary);

        return matchesCuisine && matchesCourse && matchesMainIngredient && matchesDietary;
    });

    displayRecipes(filteredRecipes);
}

// Load all recipes initially and set up event listeners for each filter dropdown
document.addEventListener("DOMContentLoaded", () => {
    loadRecipes(); // Load recipes from JSON file

    // Add event listeners for each filter dropdown
    document.getElementById("filter-cuisine").addEventListener("change", filterRecipes);
    document.getElementById("filter-course").addEventListener("change", filterRecipes);
    document.getElementById("filter-ingredient").addEventListener("change", filterRecipes);
    document.getElementById("filter-dietary").addEventListener("change", filterRecipes);
});
