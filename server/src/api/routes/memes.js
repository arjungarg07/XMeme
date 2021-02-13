const { Router } = require("express");

const Memes = require("../../services/Memes");

const route = Router();

route.post("/memes", async (req, res) => {
  const data = req.body;
  try {
    const { status, id } = await Memes.addMemeToCollection(data);
    status == -1 ? res.sendStatus(409) : res.json({ id : id });
  } catch (err) {
    console.log(err);
    // 500: Internal Server Error
    res.sendStatus(500);
  }
});

route.get("/memes", async (req, res) => {
  try {
    const result = await getAllMemes();
    res.json(result);
  } catch (err) {
    console.log(err);
    // 500: Internal Server Error
    res.sendStatus(500);
  }
});

route.get("/memes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { status, result } = await Memes.getMemeById(id);
    status == -1 ? res.sendStatus(404) : res.json(result);
  } catch (err) {
    console.log(err);
    // 500: Internal Server Error
    res.sendStatus(500);
  }
});

route.delete("/memes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Memes.deleteMemeById(id);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    // 500: Internal Server Error
    res.sendStatus(500);
  }
});

route.patch("/memes/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await Memes.updateMeme(id, data);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    // 500: Internal Server Error
    res.sendStatus(500);
  }
});

module.exports = route;
