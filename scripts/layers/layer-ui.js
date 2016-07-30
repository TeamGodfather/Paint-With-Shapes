function initializeLayerUI() {
    var layerUiContainer,

        layerList = document
            .querySelector('#layer-manager #layer-list'),

        btnCreateLayer = document
            .querySelector('#layer-manager #create-layer');

    btnCreateLayer.addEventListener('click', function () {
        var newLayer = createNewLayer();
        layersManager.allLayers.push(newLayer);
        layersManager.current = newLayer;
        kineticStage.add(layersManager.current.layer);
    });

    layerList.addEventListener('click', function (event) {
        var element = event.target;
        console.log(event);
        if (element && element.className.indexOf('list-item-id') >= 0) {
            // display this layer/ make it active
        } else if (element && element.className.indexOf('list-item-remove-btn') >= 0) {
            removeLayer(element);
        } else {
            return;
        }
    });

    layerUiContainer = document.querySelector('#layer-manager');
    layerUiContainer.style.left = canvasOptions.width - 200 + 'px';
}


