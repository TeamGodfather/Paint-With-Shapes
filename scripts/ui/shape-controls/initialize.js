function initializeShapeControls() {

}

// TODO: Replace Text with direction/ rotational Arrows
function buildShapeControlsElements() {
    shapeControls.container = $('<section />')
        .attr('id', 'shape-controls');

    shapeControls.btnUp = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-up')
        .addClass('btn-shape-control')
        .html('U');

    shapeControls.btnDown = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-down')
        .addClass('btn-shape-control')
        .html('D');

    shapeControls.btnLeft = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-left')
        .addClass('btn-shape-control')
        .html('L');

    shapeControls.btnRight = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-right')
        .addClass('btn-shape-control')
        .html('R');

    shapeControls.btnRotateClockwise = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-rotate-clockwise')
        .addClass('btn-shape-control')
        .html('RR');

    shapeControls.btnRotateCounterClockwise = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-rotate-counter-clockwise')
        .addClass('btn-shape-control')
        .html('RL');

    shapeControls.container
        .append(shapeControls.btnUp)
        .append(shapeControls.btnDown)
        .append(shapeControls.btnLeft)
        .append(shapeControls.btnRight)
        .append(shapeControls.btnRotateClockwise)
        .append(shapeControls.btnRotateCounterClockwise)
        .appendTo('body');
}