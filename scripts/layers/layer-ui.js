function initializeLayerUI() {
    var layerUiContainer,

        layerList = document
            .querySelector('#layer-manager #layer-list'),

        btnCreateLayer = document
            .querySelector('#layer-manager #create-layer'),

        btnFlattenLayers = document
            .querySelector('#layer-manager #flatten-layers');

    btnCreateLayer.addEventListener('click', function () {
        var newLayer = createNewLayer();
        layersManager.allLayers.push(newLayer);
        layersManager.current = newLayer;
        kineticStage.add(layersManager.current.layer);
        setActiveLayer(newLayer.id);
        updateLayerListSelectedItem(newLayer);
    });

    btnFlattenLayers.addEventListener('click', function (event) {
        flattenLayersToBottomLayer();
        setActiveLayer(0);
        updateLayerListSelectedItem(layersManager.current);
    });

    layerList.addEventListener('click', function (event) {
        var element = event.target,
            currentId;
        if (element && element.className.indexOf('list-item-id') >= 0) {
            currentId = element.innerHTML;
            setActiveLayer(currentId);
            updateLayerListSelectedItem(layersManager.current);
        } else if (element && element.className.indexOf('list-item-remove-btn') >= 0) {
            removeLayer(element);
            updateLayerListSelectedItem(layersManager.current);
            setActiveLayer(layersManager.current.id);
        } else {
            return;
        }
    });

    layerUiContainer = document.querySelector('#layer-manager');
    layerUiContainer.style.left = canvasOptions.width - 100 + 'px';
    layerUiContainer.style.top = 30 + 'px';
}

function updateLayerUiContainerPosition() {
    var layerUiContainer = document.querySelector('#layer-manager'),

        currentLeft = layerUiContainer.style.left,
        currentWidth = layerUiContainer.style.width,

        currentTop = layerUiContainer.style.top,
        currentHeight = layerUiContainer.style.width,

        currentWindowWdith = window.innerWidth,
        currentWindowHeight = window.innerHeight;

    currentLeft = currentLeft.substr(0, currentLeft.length - 2);
    currentTop = currentTop.substr(0, currentTop.length - 2);

    if (+currentLeft + 80 > currentWindowWdith) {
        layerUiContainer.style.left = (currentWindowWdith - 20 - 80) + 'px';
    }

    if (+currentTop + 160 > currentWindowHeight) {
        layerUiContainer.style.top = (currentWindowHeight - 20 - 160) + 'px';
    }
}

function createNewKineticLayer() {
    var newLayer = createNewLayer();
    layersManager.allLayers.push(newLayer);
    layersManager.current = newLayer;
    kineticStage.add(layersManager.current.layer);
    setActiveLayer(newLayer.id);
    updateLayerListSelectedItem(newLayer);
}


