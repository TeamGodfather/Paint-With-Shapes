function createCircle() {
    var circle = new Kinetic.Circle({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        radius: 50,
        fill: currentColor,
        draggable: true,
        offset: {
            x: 50,
            y: 50
          }
    });
    return circle;
}
///