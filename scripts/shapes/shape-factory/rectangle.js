function createRectangle() {
    var rect = new Kinetic.Rect({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        width: 200,
        height: 100,
        fill: currentColor,
        draggable: true,
        offset: {
            x: 100,
            y: 50
        }
    });
    return rect;
}
