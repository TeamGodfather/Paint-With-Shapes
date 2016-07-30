function initializeDraggableMenus() {
    $('section#layer-manager')
        .draggable()
        .resizable({
            maxHeight: 600,
            maxWidth: 160,
            minHeight: 300,
            minWidth: 80
        });
}