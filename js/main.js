import { profilePicture } from "./selectImage.js";

const userPhoto = document.getElementById("userPhoto");

let currentProfileImage = await profilePicture.getRandomImage();
userPhoto.style.backgroundImage = `url("${currentProfileImage.source}")`;