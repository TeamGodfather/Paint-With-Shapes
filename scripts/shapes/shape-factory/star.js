// TODO:
function createStar() {
  var star = new Kinetic.Line({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        points: [50, 50,     
                74, 130,     
                155, 129,    
                87, 172,     
                120, 250,       
                52, 200,     
                -10, 250,     
                14, 172,     
                -55, 129,    
                26, 130],         
        fill: currentColor,
        draggable: true,
        closed: true,
        offset: {
            x: 50,
            y: 170
        }
    });
    return star;
}