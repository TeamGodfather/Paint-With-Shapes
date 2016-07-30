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
    listRemoveBtn.innerHTML = 'X';

    listItem.appendChild(listRemoveBtn);
    listItem.appendChild(listId);

    document.querySelector('#layer-manager #layer-list')
        .appendChild(listItem);
}

function removeLayer(layerListItem) {
    var parent = layerListItem,
        i;

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
    parent.parentNode.removeChild(parent);
}