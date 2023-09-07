"use strict";

import { createNew, updateArtist } from "../index.js";
import { showUpdateForm } from "./dialogue.js";

export function cancelClicked() {
    document.querySelector("#create-new-dialog").close();
    document.querySelector("#artistForm").reset();
}

export function cancelClickedInUpdate() {
    document.querySelector("#update-dialog").close();
}

export function createNewClicked(event) {
    event.preventDefault();

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
    const form = document.querySelector("#updateForm");

    document.querySelector("#updateForm")
    .addEventListener("submit", updateArtistClicked)

    showUpdateForm();
    form.setAttribute('data-artist-id', artist.id);
    form.name.value = artist.name;
    form.birthdate.value = artist.birthdate;
    form.activeSince.value = artist.activeSince;
    form.labels.value = artist.labels.join(', ');
    form.website.value = artist.website;
    form.image.value = artist.image;
    form.shortDescription.value = artist.shortDescription;

    let genres = [];

    if (Array.isArray(artist.genres)) {
        genres = artist.genres;
    };

    const genreCheckboxes = form.querySelectorAll('input[name="genres"]');
    genreCheckboxes.forEach(checkbox => {
        if (genres.includes(checkbox.value)) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
}

export function updateArtistClicked(event) {
    event.preventDefault();
    
    const form = event.target;

    const id = form.getAttribute('data-artist-id');
    const name = form.name.value;
    const birthdate = form.birthdate.value;
    const activeSince = form.activeSince.value;
    const labels = form.labels.value.split(',').map(label => label.trim());
    const website = form.website.value;
    const image = form.image.value;
    const shortDescription = form.shortDescription.value;

    const genres = [];
    const checkboxes = form.querySelectorAll(".genre-checkbox");

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            genres.push(checkbox.value);
        }
    });

    const artist = {
        id,
        name,
        birthdate,
        activeSince,
        labels,
        website,
        image,
        shortDescription,
        genres
    }
    
    updateArtist(artist);
}

export async function favoriteArtists(artist) {
    console.log(`${artist.name} favorite status before checkbox: ${artist.favorite}`);
    if(artist.checkbox !== true) {
        artist.favorite = true;
    }
    console.log(artist);
    updateArtist(artist);
}