function createNewLayer() {
    var layer = new Kinetic.Layer(),
        id = getNextLayerId(),
        output;

    output = {
        "layer": layer,
        'id': id
    };
    return output;
}