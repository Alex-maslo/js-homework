// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

fetch("https://dummyjson.com/recipes")
  .then((res) => res.json())
  .then(({ recipes }) => {
    recipes.forEach(
      ({
        id,
        name,
        ingredients,
        instructions,
        prepTimeMinutes,
        cookTimeMinutes,
        servings,
        difficulty,
        cuisine,
        caloriesPerServing,
        tags,
        userId,
        image,
        rating,
        reviewCount,
        mealType,
      }) => {
        // Создание контейнера для карточки рецепта
        const recipesCard = document.createElement("div");
        recipesCard.classList.add("recipe-card");

        // Заполнение содержимого карточки
        recipesCard.innerHTML = `
        <h3>#${id} - ${name}</h3>
        <img src="${image}" alt="${name}" class="recipe-image">
        <p><strong>Cuisine:</strong> ${cuisine}</p>
        <p><strong>Difficulty:</strong> ${difficulty}</p>
        <p><strong>Prep Time:</strong> ${prepTimeMinutes} minutes</p>
        <p><strong>Servings:</strong> ${servings}</p>
        <p><strong>Calories per Serving:</strong> ${caloriesPerServing}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Reviews:</strong> ${reviewCount}</p>
        
        <h4>Tags:</h4>
        <ul class="tags-list">
          ${tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
        
        <h4>Ingredients:</h4>
        <ul class="ingredients-list">
          ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
        </ul>

        <h4>Instructions:</h4>
        <ol class="instructions-list">
          ${instructions.map((instruction) => `<li>${instruction}</li>`).join("")}
        </ol>
      `;

        // Добавляем карточку в контейнер
        document.getElementById("container").appendChild(recipesCard);
      },
    );
  })
  .catch((err) => console.error("Error fetching recipes:", err));
