function createSquare() {
    var square = new Kinetic.Rect({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        width: 100,
        height: 100,
        fill: currentColor,
        draggable: true,
        offset: {
            x: 50,
            y: 50
        }
    });
    return square;
}
