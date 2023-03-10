const gallerySlideList = [{
    gallerySrc: "./images/gallery/manicure2.jpg",
    galleryAuthor: "Kateryna Shevc"
},
{
    gallerySrc: "./images/gallery/manicure1.jpg",
    galleryAuthor: "Anna Biała"
},
{
    gallerySrc: "./images/gallery/manicure3.jpg",
    galleryAuthor: "Kateryna Shevc"
},
];

const galleryImage = document.getElementById('firstGalleryImg');
const authorName = document.getElementById('firstGalleryAuthor');
const galleryButton = document.getElementById('firstGalleryButton');

let activeGallery = 0;

galleryButton.onclick = function() {
    activeGallery++;
if (activeGallery === gallerySlideList.length) {
    activeGallery = 0;
}
galleryImage.src = gallerySlideList[activeGallery].gallerySrc;
authorName.textContent = gallerySlideList[activeGallery].galleryAuthor;
}