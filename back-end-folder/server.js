import express from "express";
import fs from "fs";
import { artists } from "./data.json";
const app = express();
app.use(express.json());
const port = 3000;


app.use(express.json());

app.get('/artists/data', (req, res) => {
    res.json(artists);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});