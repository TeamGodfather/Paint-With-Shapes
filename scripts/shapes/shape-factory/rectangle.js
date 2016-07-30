function createRectangle() {
    var rect = new Kinetic.Rect({
        x: canvasOptions.width / 2,
        y: canvasOptions.height / 2,
        width: 100,
        height: 100,
        fill: currentColor,
        draggable: true,
        offset: {
            x: 50,
            y: 50
        }
    });
    return rect;
}