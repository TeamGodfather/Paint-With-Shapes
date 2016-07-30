function createNewLayer(options) {
    var layer = new Kinetic.Layer(),
        id = getNextLayerId(),
        output;

    addLayerListItem(id);

    output = {
        "layer": layer,
        'id': id
    };
    return output;
}

function addLayerListItem(id) {
    var listItem,
        listId;

    listItem = document.createElement('li');
    listItem.className = 'layer-list-item';

    listId = document.createElement('a');
    listId.href = '#';
    listId.className = 'list-item-id';
    listId.innerHTML = `${id}`;

    listRemoveBtn = document.createElement('a');
    listRemoveBtn.href = '#';
    listRemoveBtn.className = 'list-item-remove-btn';
    listRemoveBtn.innerHTML = '-';

    listItem.appendChild(listRemoveBtn);
    listItem.appendChild(listId);

    document.querySelector('#layer-manager #layer-list')
        .appendChild(listItem);
}

function removeLayer(layerListItem) {
    var parent = layerListItem,
        i, numberOfLayers;

    while (parent && parent.className.indexOf('layer-list-item') < 0) {
        parent = parent.parentNode;
    }
    if (!parent) {
        return;
    }

    var id = parent.querySelector('.list-item-id').innerHTML;
    for (i = 0; i < layersManager.allLayers.length; i += 1) {
        if (layersManager.allLayers[i].id === +id) {
            layersManager.allLayers[i].layer.removeChildren();
            layersManager.allLayers[i].layer.draw();
            layersManager.allLayers[i].layer.remove();
            layersManager.allLayers.splice(i, 1);
            break;
        }
    }

    numberOfLayers = layersManager.allLayers.length;
    if (numberOfLayers === 0) {
        layersManager.current = null;
    } else {
        layersManager.current = layersManager.allLayers[numberOfLayers - 1];
    }

    parent.parentNode.removeChild(parent);
}

function fallterLayersToBottomLayer() {
    var numberOfShapes,
        numberOfLayers,
        layerNr,
        shapeNr,
        allChildren,
        currentChild,
        i, j;

    numberOfLayers = layersManager.allLayers.length;
    for (layerNr = numberOfLayers - 1; layerNr >= 1; layerNr -= 1) {
        numberOfShapes = layersManager.allLayers[layerNr].layer.getChildren().length;

        allChildren = layersManager.allLayers[layerNr].layer.getChildren();
        for (shapeNr = numberOfShapes - 1; shapeNr >= 0; shapeNr -= 1) {
            currentChild = allChildren[shapeNr];
            currentChild.remove();

            layersManager.allLayers[0].layer.add(currentChild);
        }
        layersManager.allLayers[0].layer.draw();
        layersManager.allLayers[layerNr].layer.draw();
        layersManager.allLayers[layerNr].layer.remove();
    }
    layersManager.allLayers.splice(1);
    layersManager.current = layersManager.allLayers[0];
    document.querySelector('#layer-manager #layer-list').innerHTML = '';
    addLayerListItem(layersManager.allLayers[0].id);
    console.log(layersManager);
}
