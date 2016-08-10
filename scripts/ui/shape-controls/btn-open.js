function initializeOpenShapeControlsButton() {
    var btn = $('#controls-menu-toggle'),
        controls = $('#button-controls'),
        btncontainer = $('#btn-container');

    btn.on('click', function () {

        if (controls.hasClass('visible')) {

            btncontainer.animate({
                left: '-60px'
            });
            controls
                .removeClass('visible')
                .animate({
                    left: '-165px'
                });
            btn.html('show controls');

        } else {

            btncontainer.animate({
                left: '100px'
            });
            controls
                .addClass('visible')
                .animate({
                    left: '-10px'
                });;
            btn.html('hide controls');

        }
    });
}