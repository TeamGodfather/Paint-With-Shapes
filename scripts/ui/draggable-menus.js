function initializeDraggableMenus() {
    $('section#layer-manager')
        .draggable()
        .resizable({
            maxHeight: 400,
            maxWidth: 160,
            minHeight: 200,
            minWidth: 80
        });
}