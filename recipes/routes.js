const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getRecipes)
router.get('/:id', controller.getRecipeById)
module.exports = router;