const gallery = document.getElementById("gallery");

// LOAD 56 IMAGES
for (let i = 1; i <= 56; i++) {

    const img = document.createElement("img");

    img.src = "images/design" + i + ".jpg.jpeg";

    img.alt = "Design " + i;

    img.onerror = function () {
        this.style.display = "none";
    };

    gallery.appendChild(img);
}
