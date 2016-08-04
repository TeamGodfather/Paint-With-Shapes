var shapeControls = {
    'container': null,
    'btnUp': null,
    'btnDown': null,
    'btnLeft': null,
    'btnRight': null,
    'btnRotateClockwise': null,
    'btnRotateCounterClockwise': null,
    'btnCommit': null,
    'sectionMovement': null,
    'sectionRotate': null,
    'sectionScale': null,
    'sectionOpacity': null
};

function initializeShapeControls() {
    buildShapeControlsElements();
    initializeShapeControlsEvents();
}

// TODO: Replace Text with direction/ rotational Arrows
function buildShapeControlsElements() {
    shapeControls.container = $('<section />')
        .attr('id', 'shape-controls');

    shapeControls.sectionMovement = $('<div />')
        .attr('id', 'section-movement');

    shapeControls.sectionRotate = $('<div />')
        .attr('id', 'section-rotate');

    shapeControls.sectionScale = $('<div />')
        .attr('id', 'section-scale');

    shapeControls.sectionOpacity = $('<div />')
        .attr('id', 'section-opacity');

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

    shapeControls.btnCommit = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-commit')
        .addClass('btn-shape-control')
        .html('commit to layer');

    shapeControls.sectionMovement
        .append(shapeControls.btnUp)
        .append(shapeControls.btnDown)
        .append(shapeControls.btnLeft)
        .append(shapeControls.btnRight);

    shapeControls.sectionRotate
        .append(shapeControls.btnRotateClockwise)
        .append(shapeControls.btnRotateCounterClockwise)

    shapeControls.container
        .append($('<p />').html('move'))
        .append(shapeControls.sectionMovement)
        .append($('<p />').html('rotate'))
        .append(shapeControls.sectionRotate)
        .append($('<p />').html('scale'))
        .append(shapeControls.sectionScale)
        .append($('<p />').html('opacity'))
        .append(shapeControls.sectionOpacity)
        .append(shapeControls.btnCommit)
        .appendTo('body')
        .accordion({
            collapsible: true
        });
}

function initializeShapeControlsEvents() {
    shapeControls.btnRotateClockwise.on('click', function () {
        rotateCurrentShape(10);
    });

    shapeControls.btnRotateCounterClockwise.on('click', function () {
        rotateCurrentShape(-10);
    });

    shapeControls.btnCommit.on('click', function () {
        releaseCurrentShape();
    });
}