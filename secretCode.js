const keysPressed = [];
const code = "musicals";

function showMusicals() {
    const musicalImgs = document.querySelectorAll(".musical-img");

    musicalImgs.forEach(function (img) {
      img.style.display = "block";
    });
}

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  keysPressed.push(e.key);
  keysPressed.splice(-code.length - 1, keysPressed.length - code.length);
  if (keysPressed.join("").includes(code)) {
    showMusicals();
  }
});
