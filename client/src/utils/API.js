import axios from 'axios';

export default {
    // login
    getUser: (data) => axios.post("/api/users/login", data),

    // register
    createUser: (data) => axios.post("/api/users/register", data),

    //Logout
    logout: (data) => axios.post("api/users/logut", data),

    //get saved recipes
    getSavedRecipes: (recipeData) => axios.get('/api/recipe', recipeData),

    // create recipe
    createRecipes: (recipeData) => axios.post('/api/recipe', recipeData),

    // save new recipe
    saveRecipe: (recipeData) => axios.post('/api/recipe/create', recipeData),

    // delete a recipe by id
    deleteRecipe: (recipeId) => axios.delete(`/api/recipe/${recipeId}`),

    // update recipe by id
    updateRecipe: (recipeId) => axios.put(`/api/recipe/${recipeId}`),

    // get recipes by id
    getRecipeById: (recipeId) => axios.get(`/api/recipe/${recipeId}`),

}