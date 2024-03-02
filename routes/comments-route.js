const express = require('express');
const router = express.Router();
const Comments = require('../models/comment-Model')

router.get('/', async(req, res) => {
    try {
        //console.log('Users')
        const comment = await Comments.find();
        res.json(Comments)
        
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})

router.post('/', async (req,res) =>{
    try {
       //console.log(req.body)
        const comment = new Comments(req.body)
        await comment.save();
        res.json(comment)
        
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
        const comment = await Comments.findByIdAndUpdate(_id, updates,{new:true});
        await comment.save();
        res.json(comment)
    } catch (error) {
        // console.error(error);
        res.status(500).send(error)
        
    }
})

router.delete('/:id', async (req,res) =>{
    try {
        const _id= req.params.id
        //console.log(_id)
        const comment = await Comments.findByIdAndDelete(_id);
        res.json(comment)
    } catch (error) {
        // console.error(error);
        res.status(500).send(error)
        
    }
})

module.exports = router;