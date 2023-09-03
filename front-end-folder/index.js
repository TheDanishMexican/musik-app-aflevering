"use strict";

window.addEventListener("load", start);

import { showCreateForm } from "./modules/dialogue.js";
import { showAllArtists } from "./modules/display.js";

const endpoint = 'http://localhost:3000'

export async function start() {
    const artistData = await getData();

    document.querySelector("#add-new button")
    .addEventListener("click", showCreateForm)

    showAllArtists(artistData);
}

export async function getData() {
    const response = await fetch(`${endpoint}/artists/data`);
    const data = await response.json();
    return data;
}



