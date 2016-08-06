function createTriangle() {
    var triangle = new Kinetic.RegularPolygon({
        x: canvasOptions.width / 2,
        y: canvasOptions.height / 2,
        width: 50,
        height: 50,
        sides: 3,
        radius: 80,
        fill: currentColor,
        draggable: true,
        offset: {
            x: 50,
            y: 50
        }
    });
    return triangle;
}