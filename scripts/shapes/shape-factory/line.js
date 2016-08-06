function createLine() {
    var line = new Kinetic.Line({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        width: 100,
        height: 100,
        fill: currentColor,
        draggable: true,
        offset: {
            x: 50,
            y: 50
        },
        points: [73, 70, 340, 23, 450, 60, 500, 20],
        stroke: 'red',
        tension: 1
    });
    return line;
}