const { Op } = require("sequelize");

const { Meme } = require("../models");

class Memes {
  constructor() {}

  async addMemeToCollection(data) {
    const { name, caption, url } = data;
    // valid url regex
    const result = await Meme.findAll({
      where: {
        active: 1,
        [Op.or]: [{ name: name }, { caption: caption }, { url: url }],
      },
      attributes: ["id"],
    });
    if (result.length > 0) {
      return { status: -1 };
    }
    const {
      dataValues: { id },
    } = await Meme.create(data);
    return { status: 1, id };
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
      return { status: -1 };
    }
    return { status: 1, result };
  }

  // Implemented Soft Delete
  async softDeleteMemeById(id) {
    const result = await Meme.update(
      { active: 0 },
      {
        where: {
          id: id,
          active: 1,
        },
      }
    );
    return;
  }

  async updateMeme(id, data) {
    const { caption, url } = data;
    await Meme.update(
      { ...(caption && { caption }), ...(url && { url }) }, // Short Circuit Evaluation Technique
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

  async hardDeleteMemes() {
    const result = await Meme.destroy({
      where: {
        active: 0
      }
    });
  }
}

module.exports = new Memes();
