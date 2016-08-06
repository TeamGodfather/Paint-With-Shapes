function createRing() {
    var ring = new Kinetic.Ring({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        innerRadius: 50,
        outerRadius: 75,
        fill: currentColor,
        draggable: true,
        offset: {
            x: 50,
            y: 50
          }
    });
    return ring;
}
