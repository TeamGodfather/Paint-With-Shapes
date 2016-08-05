function initializeClearCanvasButton() {
    var btnClearCanvas = document
        .querySelector('#clear #new-canvas-btn')
        .addEventListener('click', function () {

            kineticStage.removeChildren();

            layersManager = {
                'allLayers': [],
                'current': null
            };

            currentActiveShape = {
                'shape': null,
                'tempLayer': null
            };

            currentLayerId = 0;
            currentColor = '#cc00cc';
            document.querySelector('#layer-list').innerHTML = '';
        });

    var btnToggleColor = document
        .querySelector('#toggle-color')
        .addEventListener('click', function () {
            getColor();
        });
}