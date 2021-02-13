const { Meme } = require("../models");
class Memes {
  constructor() {}

  async addMemeToCollection(data) {
    // const { name, caption, url } = data;
    // valid url regex
    const {
      dataValues: { id },
    } = await Meme.create(data);
    // console.log(id);
    return id;
  }

  async getMemeById(id) {
    const result = await Meme.findOne({
      where: {
        id: id,
        active: 1,
      },
      attributes: ["id", "name", "url", "caption"],
    });
    if (!result) {
      console.log("Meme not found");
      return { status: -1, result };
    }
    return { status: 1, result };
  }

  async deleteMemeById(id) {
    const result = await Meme.update(
      { active: 0 },
      {
        where: {
          id: id,
          active: 1,
        },
      }
    );
    console.log(result);
    return;
  }

  async updateMeme(id, data) {
    const { name, caption, url } = data;
    await Meme.update(
      { ...(caption && { caption }), ...(url && { url }) },
      {
        where: {
          id: id,
          active: 1,
        },
      }
    );
    return;
  }

  async getAllMemes() {
    const result = await Meme.findAll({
      where: {
        active: 1,
      },
      limit: 100,
      order: [["id", "DESC"]],
      attributes: ["id", "name", "url", "caption"],
    });
    return result;
  }
}

module.exports = new Memes();
