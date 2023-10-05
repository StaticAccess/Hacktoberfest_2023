// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Sample recipe data (you can replace this with real data from your database)
    const recipes = [
        {
            title: "Spaghetti Carbonara",
            description: "A classic Italian pasta dish with eggs, cheese, and pancetta.",
            imageUrl: "recipe1.jpg",
            link: "recipe1.html"
        },
        {
            title: "Chicken Stir-Fry",
            description: "A quick and delicious stir-fry with chicken and vegetables.",
            imageUrl: "recipe2.jpg",
            link: "recipe2.html"
        },
        // Add more recipe objects as needed
    ];

    const recipeContainer = document.getElementById("recipeContainer");

    // Generate recipe cards dynamically
    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = recipe.imageUrl;
        image.alt = recipe.title;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h2");
        title.classList.add("card-title");
        title.textContent = recipe.title;

        const description = document.createElement("p");
        description.textContent = recipe.description;

        const link = document.createElement("a");
        link.href = recipe.link;
        link.classList.add("btn", "btn-primary");
        link.textContent = "View Recipe";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        recipeContainer.appendChild(card);
    });
});
