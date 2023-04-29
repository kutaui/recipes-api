const pool = require('../db');

const getRecipes = (req, res) => {
    pool.query('SELECT * FROM recipes ORDER BY id ASC', (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

const getRecipeById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM recipes WHERE id = $1', [id], (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getRecipes,
    getRecipeById
}