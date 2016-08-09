// TODO:
function createStar() {
  var star = new Kinetic.Line({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        fill: currentColor,
        draggable: true,
        closed: true,
        offset: {
            x: 50,
            y: 170
        }
    });
    return star;
}