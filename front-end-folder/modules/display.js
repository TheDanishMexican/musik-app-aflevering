"use strict";

import { deleteArtist, getData } from "../index.js";
import { updateClicked } from "./submit.js";

export function showAllArtists(allArtists) {
    document.querySelector("#artistTableBody").innerHTML = "";

    document.querySelector("#filterSelect")
    .addEventListener("change", filterArtists)

    document.querySelector("#sortSelect")
    .addEventListener("change", sortArtists);

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

export async function filterArtists(event) {
    const artists = await getData();
    const genre = event.target.value;

    if(genre === '') {
        showAllArtists(artists);
    } else {
        const filteredArtists = artists.filter(artist => artist.genres.includes(genre));
        showAllArtists(filteredArtists);
    }   
}

export async function sortArtists(event) {
    const artists = await getData();
    const sortingOption = event.target.value;

    if (sortingOption === 'name') {
        // Sort artists by name
        const sortedArtists = artists.sort((a, b) => a.name.localeCompare(b.name));
        showAllArtists(sortedArtists);
    } else if (sortingOption === 'gender') {
        // Sort artists by birthdate
        const sortedArtists = artists.sort((a, b) => a.gender.localeCompare(b.gender));
        showAllArtists(sortedArtists);
    } else {
        showAllArtists(artists);
    }
    // Add more sorting options as needed
}
