"use strict";

export function showAllArtists(allArtists) {
    document.querySelector("#artistTableBody").innerHTML = "";

    for(const oneArtist of allArtists) {
        showOneArtist(oneArtist);
    };
};

export function showOneArtist(artist) {
    const html = /*html*/ `
    <tr class="artist-row">
      <td>${artist.name}</td>
      <td>${artist.birthdate}</td>
      <td>${artist.activeSince}</td>
      <td>${artist.genres.join(', ')}</td>
      <td>${artist.labels.join(', ')}</td>
      <td><a href="${artist.website}" target="_blank">${artist.website}</a></td>
      <td><img src="${artist.image}" alt="${artist.name}" width="100"></td>
      <td>${artist.shortDescription}</td>
      <td><button class="update-button">Update</button></td>
      <td><button class="delete-button">Delete</button></td>
    </tr>
    `

    document.querySelector("#artistTableBody").insertAdjacentHTML("beforeend", html);
}
