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
    listId.innerHTML = `Layer ${id}`;

    listItem.appendChild(listId);

    document.querySelector('#layer-manager #layer-list')
        .appendChild(listItem);
}