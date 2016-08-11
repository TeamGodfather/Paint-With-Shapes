
function createEllipse() {
  var oval = new Kinetic.Ellipse({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    radius: {
      x: 100,
      y: 50
    },
    fill: currentColor,
    draggable: true,
    offset: {
      x: 0,
      y: 0
    }
  });
  return oval;
}