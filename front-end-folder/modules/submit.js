"use strict";

import { createNew } from "../index.js";

export function cancelClicked() {
    // document.querySelector("#cancelButton").removeEventListener("click", cancelClicked);
    document.querySelector("#create-new-dialog").close();
    document.querySelector("#artistForm").reset();
}

export function createNewClicked(event) {
    event.preventDefault();

    // document.querySelector("#artistForm").removeEventListener("submit", createNewClicked);

    const formInput = event.target;

    const name = formInput.name.value;
    const newArtist = {
        name: formInput.name.value,
        birthdate: formInput.birthdate.value,
        activeSince: formInput.activeSince.value,
        genres: formInput.genres.value,
        labels: formInput.labels.value,
        website: formInput.website.value,
        image: formInput.image.value,
        shortDescription: formInput.shortDescription.value,
    };

    createNew(newArtist);
    cancelClicked();
}