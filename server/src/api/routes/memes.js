const { Router } = require('express');
const { getAllMemes } = require('../../services/Memes');

const Memes = require('../../services/Memes');

const route = Router();

route.post('/memes', async (req, res)=>{
    const data = req.body;
    // console.log(req.body);
    try{
        const  id = await Memes.addMemeToCollection(data);
        res.send({ id: id });
    }catch(err){
        console.log(err);
        res.send({ status: 0, msg: 'Failed to add Meme to Collection'});
    }
});

route.get('/memes', async (req,res)=> {
    try{
        const result = await getAllMemes();
        res.send({ status:1, msg: 'Successfully fetched all Memes', result});
    }catch(err){
        console.log(err);
        res.send({ status:0, msg: 'Failed to fetch Memes'});
    }
})

route.get('/memes/:id', async (req, res)=> {
    const { id } = req.params;
    try{
        const result = await Memes.getMemeById(id);
        res.send({ status: 1, msg: "Successfully fetch Meme of given id", result });
    }catch(err){
        console.log(err);
        res.send({ status: 0, msg: 'Failed to fetch Meme of given id'});
    }
})

route.delete('/memes/:id', async (req, res)=> {
    const { id } = req.params;
    try{
        await Memes.deleteMemeById(id);
        res.send({ status: 1, msg: 'Successfully deleted Meme of given id'});
    }catch(err){
        console.log(err);
        res.send({ status: 0, msg: 'Failed to delete Meme of given id'});
    }
})

route.patch('/memes/:id', async (req, res)=> {
    const { id } = req.params;
    const data = req.body;
    try{
        await Memes.updateMeme(id,data);
        res.send({ status: 1, msg: 'Successfully updated Meme of given id'});
    }catch(err){
        console.log(err);
        res.send({ status: 0, msg: 'Failed to update Meme of given id'});
    }
})

module.exports = route;