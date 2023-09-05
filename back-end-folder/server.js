import express from "express";
import fs from "fs/promises";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get('/artists/data', async (req, res) => {
    const data = await fs.readFile('data.json');
    const artists = JSON.parse(data);
    res.send(artists);
});

app.get('/artists/data/:id', (req, res) => {
    const result = artists.find(artist => artist.id === Number(req.params.id));
    res.json(result);
});

app.post('/artists/data', async (req, res) => {
// get new artist request
    const newArtist = req.body;
// get artist
    const data = await fs.readFile('data.json');
    const artists = JSON.parse(data);
    artists.push(newArtist);
// opdater original fil
    fs.writeFile('data.json', JSON.stringify(artists));
    res.json(artists);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});