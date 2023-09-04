"use strict";

window.addEventListener("load", start);

import { cancelClicked } from "./modules/submit.js";
import { showCreateForm } from "./modules/dialogue.js";
import { showAllArtists } from "./modules/display.js";

const endpoint = 'http://localhost:3000'

export async function start() {
    const artistData = await getData();

    document.querySelector("#add-new button")
    .addEventListener("click", showCreateForm)

    document.querySelector("#cancelButton")
    .addEventListener("click", cancelClicked)

    showAllArtists(artistData);
}

export async function getData() {
    const response = await fetch(`${endpoint}/artists/data`);
    const data = await response.json();
    return data;
}

export async function createNew(newArtist) {
    newArtist.id = new Date().getTime();

    const json = JSON.stringify(newArtist);
    const response = await fetch(`${endpoint}/artists/data`,
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    });
    if(response.ok){
        console.log("New artist created");
    }
}



