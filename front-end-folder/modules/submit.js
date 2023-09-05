"use strict";

import { createNew, deleteArtist } from "../index.js";
import { showUpdateForm } from "./dialogue.js";

export function cancelClicked() {
    // document.querySelector("#cancelButton").removeEventListener("click", cancelClicked);
    document.querySelector("#create-new-dialog").close();
    document.querySelector("#artistForm").reset();
}

export function cancelClickedInUpdate() {
    document.querySelector("#update-dialog").close();
}

export function createNewClicked(event) {
    event.preventDefault();

    // document.querySelector("#artistForm").removeEventListener("submit", createNewClicked);

    const formInput = event.target;
    const selectedGenres = [];
    const checkboxes =formInput.querySelectorAll(".genre-checkbox");
    const labels = formInput.labels.value.split(',').map(label => label.trim());

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedGenres.push(checkbox.value);
        }
    });

    const newArtist = {
        name: formInput.name.value,
        birthdate: formInput.birthdate.value,
        activeSince: formInput.activeSince.value,
        genres: selectedGenres,
        labels: labels,
        website: formInput.website.value,
        image: formInput.image.value,
        shortDescription: formInput.shortDescription.value,
    };

    createNew(newArtist);
    cancelClicked();
}

export function updateClicked(artist) {
    showUpdateForm();
    const form = document.querySelector("#updateForm");
    form.name.value = artist.name;
    form.birthdate.value = artist.birthdate;
}

export function updateArtistClicked(event) {
    event.preventDefault();
}