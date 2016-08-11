function loadBackgroundImage(imageUrl) {
    var image = new Image();

    image.onload = setBackgroundImage;
    image.src = imageUrl;
}

function setBackgroundImage(image) {
    var bgLayer,
        kineticImg;

    kineticImg = new Kinetic.Image({
        x: 0,
        y: 0,
        width: kineticStage.getWidth(),
        height: kineticStage.getHeight(),
        image: this
    });

    var newLayer = createNewLayer();
    newLayer.layer.add(kineticImg);
    layersManager.allLayers.unshift(newLayer);
    layersManager.current = newLayer;
    kineticStage.add(layersManager.current.layer);
    setActiveLayer(newLayer.id);
    updateLayerListSelectedItem(newLayer);
}