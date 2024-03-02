const express = require('express');
const router = express.Router();
const Users = require('../models/users-model')

router.get('/', async(req, res) => {
    try {
        //console.log('Users')
        const user = await Users.find();
        res.json(user)
        
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})

router.post('/', async (req,res) =>{
    try {
       //console.log(req.body)
        const user = new Users(req.body)
        await user.save();
        res.json(user)
        
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
        
    }
})

router.patch('/:id', async (req,res) =>{
    try {
        const _id= req.params.id
        const updates = req.body
        console.log(_id, updates)
        const user = await Users.findByIdAndUpdate(_id, updates,{new:true});
        await user.save();
        res.json(user)
    } catch (error) {
        // console.error(error);
        res.status(500).send(error)
        
    }
})

router.delete('/:id', async (req,res) =>{
    try {
        const _id= req.params.id
        //console.log(_id)
        const user = await Users.findByIdAndDelete(_id);
        res.json(user)
    } catch (error) {
        // console.error(error);
        res.status(500).send(error)
        
    }
})

module.exports = router;