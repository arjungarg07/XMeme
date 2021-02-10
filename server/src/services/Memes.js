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
        const result = await Meme.findOne({ where: { id: id, active: 1 } });
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
}

module.exports = new Memes();