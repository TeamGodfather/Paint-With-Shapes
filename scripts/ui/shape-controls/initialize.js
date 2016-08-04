var shapeControls = {
    'container': null,
    'btnUp': null,
    'btnDown': null,
    'btnLeft': null,
    'btnRight': null,
    'btnUpLeft': null,
    'btnUpRight': null,
    'btnDownLeft': null,
    'btnDownRight': null,
    'btnRotateClockwise': null,
    'btnRotateCounterClockwise': null,
    'btnScaleIncrease': null,
    'btnScaleDecrease': null,
    'btnOpacityIncrease': null,
    'btnOpacityDecrease': null,
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

    shapeControls.btnUpLeft = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-up-left')
        .addClass('btn-shape-control')
        .html('UL');

    shapeControls.btnUpRight = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-up-right')
        .addClass('btn-shape-control')
        .html('UR');

    shapeControls.btnDownLeft = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-down-left')
        .addClass('btn-shape-control')
        .html('DL');

    shapeControls.btnDownRight = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-down-right')
        .addClass('btn-shape-control')
        .html('DR');

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

    shapeControls.btnScaleIncrease = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-scale-increase')
        .addClass('btn-shape-control')
        .html('+');

    shapeControls.btnScaleDecrease = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-scale-decrease')
        .addClass('btn-shape-control')
        .html('-');

    shapeControls.btnOpacityIncrease = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-opacity-increase')
        .addClass('btn-shape-control')
        .html('+');

    shapeControls.btnOpacityDecrease = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-opacity-decrease')
        .addClass('btn-shape-control')
        .html('-');

    shapeControls.btnCommit = $('<a />')
        .attr('href', '#')
        .attr('id', 'btn-commit')
        .addClass('btn-shape-control')
        .html('commit to layer');

    shapeControls.sectionMovement
        .append(shapeControls.btnUpLeft)
        .append(shapeControls.btnUp)
        .append(shapeControls.btnUpRight)
        .append(shapeControls.btnRight)
        .append(shapeControls.btnDownRight)
        .append(shapeControls.btnDown)
        .append(shapeControls.btnDownLeft)
        .append(shapeControls.btnLeft);

    shapeControls.sectionRotate
        .append(shapeControls.btnRotateCounterClockwise)
        .append(shapeControls.btnRotateClockwise);

    shapeControls.sectionScale
        .append(shapeControls.btnScaleDecrease)
        .append(shapeControls.btnScaleIncrease);

    shapeControls.sectionOpacity
        .append(shapeControls.btnOpacityDecrease)
        .append(shapeControls.btnOpacityIncrease);

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

    shapeControls.btnScaleIncrease.on('click', function () {
        scaleCurrentShape(0.05);
    });

    shapeControls.btnScaleDecrease.on('click', function () {
        scaleCurrentShape(-0.05);
    });

    shapeControls.btnOpacityIncrease.on('click', function () {
        changeCurrentShapeOpacity(0.05);
    });

    shapeControls.btnOpacityDecrease.on('click', function () {
        changeCurrentShapeOpacity(-0.05);
    });

    shapeControls.btnUpLeft.on('click', function () {
        var delta = {
            'x': -5,
            'y': -5
        };
        moveCurrentActiveShape(delta);
    });

    shapeControls.btnUp.on('click', function () {
        var delta = {
            'x': 0,
            'y': -5
        };
        moveCurrentActiveShape(delta);
    });

    shapeControls.btnUpRight.on('click', function () {
        var delta = {
            'x': 5,
            'y': -5
        };
        moveCurrentActiveShape(delta);
    });

    shapeControls.btnRight.on('click', function () {
        var delta = {
            'x': +5,
            'y': 0
        };
        moveCurrentActiveShape(delta);
    });

    shapeControls.btnDownRight.on('click', function () {
        var delta = {
            'x': +5,
            'y': +5
        };
        moveCurrentActiveShape(delta);
    });

    shapeControls.btnDown.on('click', function () {
        var delta = {
            'x': 0,
            'y': +5
        };
        moveCurrentActiveShape(delta);
    });

    shapeControls.btnDownLeft.on('click', function () {
        var delta = {
            'x': -5,
            'y': +5
        };
        moveCurrentActiveShape(delta);
    });

    shapeControls.btnLeft.on('click', function () {
        var delta = {
            'x': -5,
            'y': 0
        };
        moveCurrentActiveShape(delta);
    });
}

function moveCurrentActiveShape(delta) {
    var position = currentActiveShape.shape.getPosition();
    currentActiveShape.shape.setPosition({
        x: position.x + delta.x,
        y: position.y + delta.y
    });
    currentActiveShape.tempLayer.draw();
}