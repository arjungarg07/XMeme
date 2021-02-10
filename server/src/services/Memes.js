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
}

module.exports = new Memes();