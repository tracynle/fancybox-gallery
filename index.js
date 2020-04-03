
let pictures = new Array(
    { image: 'images/coffee0.jpg', caption: 'Heart shaped latte art' },
    { image: 'images/coffee1.jpg', caption: 'Coffee tasting' },
    { image: 'images/coffee2.jpg', caption: 'Espresso pour' },
    { image: 'images/coffee3.jpg', caption: 'Coffee and tea tasting' }
);

function displayImages() {
    // console.log(pictures[i].image);

    for (let i = 0; i < pictures.length; i++) {
        let image = pictures[i].image;
        console.log(image);
        let caption = pictures[i].caption;
        console.log(caption);

        $(".thumbnails").append(
            "<div class='grid-item'" + ">" +
            "<a href='" + image + "' " + "data-fancybox='gallery'" + "data-caption='" + caption + "' " + ">" +
            "<img src='" + image + "' " + "alt='' ></div>");
    }
}
