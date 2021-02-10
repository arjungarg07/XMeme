const { Meme } = require('../models') 

class Memes {
    constructor() {

    }

    async addMemeToCollection (data) {
        const { name, caption, url } = data;
        // valid url regex
        console.log('Service inside');
        const res = await Meme.create(data);
        console.log(res);
    }

    async getMemeById (id) {
        const result = await Meme.findOne({
             where: { 
                 id: id,
                 active: 1 
            } });
        if(!result){
            console.log('Meme not found');
        }
        return result;
    }

    async deleteMemeById (id) {
        const result = await Meme.update({ active : 0}, {
            where: {
                id: id,
                active: 1
            }
        });
        console.log(result);
        return;
    }

    async updateMeme (id, data) {
        const { name, caption, url } = data;
        await Meme.update({ ...(caption && {caption}), ...(url && {url}) }, {
            where: {
                id: id,
                active: 1
            }
          });
          return;
    }

    async getAllMemes () {
        const result = await Meme.findAll({
            where: {
                active: 1
            }
          });
        // console.log('yeh aara result', result);
        return result;
    }
}

module.exports = new Memes();