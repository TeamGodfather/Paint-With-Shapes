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

            currentColor = '#cc00cc';
            document.querySelector('#layer-list').innerHTML = '';
        });

    // DELETE THIS
    var btnToggleColor = document
        .querySelector('#toggle-color')
        .addEventListener('click', function () {
            getColor();
        });
}