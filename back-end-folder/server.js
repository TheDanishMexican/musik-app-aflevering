import express from "express";
import fs from "fs";
import cors from "cors";
import { artists } from "./data.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get('/artists/data', (req, res) => {
    res.json(artists);
});

app.get('/artists/data/:id', (req, res) => {
    const result = artists.find(artist => artist.id === Number(req.params.id));
    res.json(result);
});

app.post('/artists/data', (req, res) => {
    const newArtist = req.body;
    console.log(newArtist);
    artists.push(newArtist);
    res.json(artists);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});