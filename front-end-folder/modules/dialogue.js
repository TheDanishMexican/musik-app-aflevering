"use strict";

import { createNewClicked } from "./submit.js";

export function showCreateForm() {
    const createForm = document.querySelector("#create-new-dialog");

    document.querySelector("#artistForm").addEventListener("submit", createNewClicked);

    createForm.showModal();
};