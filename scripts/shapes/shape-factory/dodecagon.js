function createDodecagon() {
    var dodecagon = new Kinetic.RegularPolygon({
        x: canvasOptions.width / 2,
        y: canvasOptions.height / 2,
        width: 50,
        height: 50,
        sides: 12,
        radius: 80,
        fill: currentColor,
        draggable: true,
        offset: {
            x: 0,
            y: 0
        }
    });
    return dodecagon;
}