function createPentagon() {
    var pentagon=new Kinetic.RegularPolygon({
		x: canvasOptions.width / 2,
        y: canvasOptions.height / 2,
        width: 50,
        height: 50,
		sides:5,
		radius:80,
		fill: currentColor,
        draggable: true,
        offset: {
            x: 50,
            y: 50
        }
    });
    return pentagon;
}
