"use strict";

window.addEventListener("load", start);

const endpoint = 'http://localhost:3000'

async function start() {
    console.log("We started the app");

    const artistData = await getData();
    console.log(artistData);
}

async function getData() {
    const response = await fetch(`${endpoint}/artists/data`);
    const data = await response.json();
    return data;
}