function initializeLayerUI() {
    var layerUiContainer,
        btnCreateLayer = document
            .querySelector('#create-layer');

    btnCreateLayer.addEventListener('click', function () {
        var newLayer = createNewLayer();
        layersManager.allLayers.push(newLayer);
        layersManager.current = newLayer;
        kineticStage.add(layersManager.current.layer);
    });

    layerUiContainer = document.querySelector('#layer-manager');
    layerUiContainer.style.left = canvasOptions.width - 200 + 'px';
}


