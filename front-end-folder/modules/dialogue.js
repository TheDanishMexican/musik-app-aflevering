"use strict";

import { cancelClickedInUpdate, createNewClicked } from "./submit.js";

export function showCreateForm() {
    const createForm = document.querySelector("#create-new-dialog");

    document.querySelector("#artistForm").addEventListener("submit", createNewClicked);

    createForm.showModal();
};

export function showUpdateForm() {
    const updateForm = document.querySelector("#update-dialog");

    document.querySelector("#cancelButtonInUpdate")
    .addEventListener('click', cancelClickedInUpdate);

    updateForm.showModal();
}