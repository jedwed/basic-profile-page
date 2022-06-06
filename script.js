// A script that runs when a button is clicked

// When a button is clicked, it toggles a div's visibility
// Below are two methods of doing the same thing

// A function that is called through 'onclick' property
const display_secret = () => {
  let secret = document.getElementById("secret");
  if (secret.style.display && secret.style.display !== "none") {
    secret.style.display = "none";
  } else {
    secret.style.display = "block";
  }
};

// Using an eventlistener to toggle div
// const toggle = document.getElementById("toggle-secret");
// toggle.addEventListener("click", () => {
//   let secret = document.getElementById("secret");
//   if (secret.style.display && secret.style.display !== "none") {
//     secret.style.display = "none";
//   } else {
//     secret.style.display = "block";
//   }
// });
