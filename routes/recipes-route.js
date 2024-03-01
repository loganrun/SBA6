const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes-Model')

router.get('/', async(req, res) => {
    try {
        //console.log('recipe')
        const recipes = await Recipes.find();
        res.json(recipes)
        
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})

router.post('/', async (req,res) =>{
    try {
       //console.log(req.body)
        const recipe = new Recipes(req.body)
        await recipe.save();
        res.json(recipe)
        
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
        
    }
})

module.exports = router;