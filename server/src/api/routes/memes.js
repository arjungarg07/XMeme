const { Router } = require('express');

const Memes = require('../../services/Memes');

const route = Router();

route.post('/memes', async (req, res)=>{
    const data = req.body;
    // console.log(req.body);
    try{
        const result = await Memes.addMemeToCollection(data);
        res.send({ status: 1, msg: "Successfully added Meme to the collection", result });
    }catch(err){
        console.log(err);
        res.send({ status: 0, msg: 'Failed to add Meme to Collection'});
    }
});

module.exports = route;