function createImg() {

    var text = $("#url-img").val();

    var img = new Image();
    img.src = text; //"http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg";

    var imgs = new Kinetic.Image({
        x: 200,
        y: 200,
        image: img,
        draggable: true
    });
    return imgs;

}
