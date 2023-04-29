
# RecipesAPI

RecipesAPI is a RESTful API that provides basic recipes. The API is built with Node.js and Express.js and uses Postgres. The data consist of; Name(string),Description(string),Image(string),Steps(array),Tags(array).
## Contribution
Contributions are highly needed and appreciated. Currently, there are around 10 recipes, so if you feel like adding some of your favorite recipes just open a issue with the recipes you want to add and I will add them as soon as possible. Here is a template for the recipes:

```json
{
    "name": "Recipe Name",
    "description": "Recipe Description",
    "image": "Recipe Image Link (preferably imgur)",
    "steps": [
        "Recipe Step 1",
        "Recipe Step 2",
        "Recipe Step 3",
        "Recipe Step 4",
        "Recipe Step 5"
    ],
    "tags": [
        "Recipe Tag 1",
        "Recipe Tag 2",
        "Recipe Tag 3",
        "Recipe Tag 4",
        "Recipe Tag 5"
    ]
}
```
## API Reference

#### Get all recipes

```http
  GET /recipes
```

#### Get recipe

```http
  GET /recipes/${id}
```

| Parameter | Type     | Description                         |
| :-------- | :------- |:------------------------------------|
| `id`      | `integer` | **Required**. Id of recipe to fetch |




## Usage

Base url: https://recipesapi.kutaybekleric.com

All requests are `GET` requests and go over `https`. All responses will return data in `json`.

To use the API, make a GET request to the endpoint `https://recipesapi.kutaybekleric.com/recipes/${id}`. You can replace `${id}` with a number.

The API will return a JSON response with the following fields:

- `id` - ID of the data

- `name` - The name of the recipe.

- `description` - A brief description of the food.

- `image` - The URL of the food's image.

- `steps` - An array of steps for the recipe.

- `tags` - An array of tags for the recipe.


### Example

```js
fetch('https://recipesapi.kutaybekleric.com/recipes/1')
  .then(response => response.json())
  .then(data => {
    console.log(data['name']);
    console.log(data['description']);
    console.log(data['image']);
    console.log(data['steps']);
    console.log(data['tags']);
  });
```

#### Response

```json

{
  "id": 1,
  "name": "Spaghetti Bolognese",
  "description": "Classic Italian dish with a rich tomato-based sauce and ground beef",
  "image": "https://i.imgur.com/mivLRhO.jpeg",
  "steps": [
    "Cook the spaghetti according to package instructions.",
    "In a large skillet, brown the ground beef over medium heat.",
    "Add the onion, garlic, and carrot and cook until softened.",
    "Stir in the tomato paste, canned tomatoes, and herbs.",
    "Simmer for 20-30 minutes until the sauce has thickened.",
    "Serve the spaghetti with the bolognese sauce on top."
  ],
  "tags": [
    "Italian",
    "Pasta",
    "Dinner"
  ]
}
```
## Demo

To be added.


## Roadmap

- Add more recipes

- Enable querying by tags

