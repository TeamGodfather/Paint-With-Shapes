var btnCreateLayer;

function initializeLayerUI() {
    btnCreateLayer = document
        .querySelector('#create-layer');

    btnCreateLayer.addEventListener('click', function () {
        var newLayer = createNewLayer();
        layersManager.allLayers.push(newLayer);
        layersManager.current = newLayer;
        kineticStage.add(layersManager.current.layer);
    });
}


