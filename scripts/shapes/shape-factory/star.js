function createStar() {
    var star = new Kinetic.Star({
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
        numPoints: 5,
        innerRadius: 70,
        outerRadius: 70,
        stroke: 'black',
        strokeWidth: 4
    });
    return star;
}