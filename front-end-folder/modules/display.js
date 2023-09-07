"use strict";

import { deleteArtist, getData } from "../index.js";
import { updateClicked } from "./submit.js";

let currentArtists = [];

export function showAllArtists(allArtists) {
    document.querySelector("#artistTableBody").innerHTML = "";

    document.querySelector("#filterSelect")
    .addEventListener("change", SortAndFilterArtists)

    document.querySelector("#sortSelect")
    .addEventListener("change", SortAndFilterArtists);

    for(const oneArtist of allArtists) {
        showOneArtist(oneArtist);
    };
};

export function showOneArtist(artist) {
  const genres = artist.genres ? artist.genres.join(', ') : '';
  const labels = artist.labels ? artist.labels.join(', ') : '';

    const html = /*html*/ `
    <tr class="artist-row">
      <td>${artist.name}</td>
      <td>${artist.birthdate}</td>
      <td>${artist.activeSince}</td>
      <td>${genres}</td>
      <td>${labels}</td>
      <td><a href="${artist.website}" target="_blank">${artist.website}</a></td>
      <td><img src="${artist.image}" alt="${artist.name}" width="100"></td>
      <td>${artist.shortDescription}</td>
      <td><button class="update-button">Update</button></td>
      <td><button class="delete-button">Delete</button></td>
    </tr>
    `

    document.querySelector("#artistTableBody").insertAdjacentHTML("beforeend", html);

    document.querySelector("#artistTableBody .artist-row:last-child .update-button")
    .addEventListener("click", () => updateClicked(artist));

    document.querySelector('#artistTableBody .artist-row:last-child .delete-button')
    .addEventListener("click", () => deleteArtist(artist.id));
}

async function SortAndFilterArtists() {
    const artists = await getData();
    currentArtists = [];

    const filterSelect = document.querySelector("#filterSelect");
    const sortingSelect = document.querySelector('#sortSelect');

    const genre = filterSelect.value;

    currentArtists = artists.filter(artist => {
        if (genre !== '' && !artist.genres.includes(genre)) {
            return false;
        }   
        return true;
    });

    const sortingOption = sortingSelect.value;

        if (sortingOption === 'name') {
            currentArtists.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortingOption === 'birthdate') {
            currentArtists.sort((a, b) => b.birthdate.localeCompare(a.birthdate));
        } else if (sortingOption === 'activeSince') {
            currentArtists.sort((a, b) => b.activeSince - a.activeSince);
        }

    showAllArtists(currentArtists);
}

export async function showAllFavorites() {
    const artists = await getData()

    document.querySelector("#favoriteArtistTableBody").innerHTML = "";

    for(const artist of artists) {
        showOneFavorite(artist);
    };
};

export function showOneFavorite(artist) {
    if(artist.favorite === true) {

    const genres = artist.genres ? artist.genres.join(', ') : '';
    const labels = artist.labels ? artist.labels.join(', ') : '';

    const html = /*html*/ `
    <tr class="favorite-artist-row">
      <td>${artist.name}</td>
      <td>${artist.birthdate}</td>
      <td>${artist.activeSince}</td>
      <td>${genres}</td>
      <td>${labels}</td>
      <td><a href="${artist.website}" target="_blank">${artist.website}</a></td>
      <td><img src="${artist.image}" alt="${artist.name}" width="100"></td>
      <td>${artist.shortDescription}</td>
    </tr>
    `
    document.querySelector("#favoriteArtistTableBody").insertAdjacentHTML("beforeend", html);
}}
