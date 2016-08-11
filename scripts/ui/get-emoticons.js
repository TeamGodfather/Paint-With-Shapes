/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('#emoticons-button')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var d = 0; d < dropdowns.length; d++) {
            var openDropdown = dropdowns[d];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var implementedEmoticons = {
    'blink': 'blink',
    'crying': 'crying',
    'inlove': 'inlove',
    'laughing': 'laughing',
    'sick': 'sick'
};

function initializeEmoticonssUI() {
    var emoticonsMenu = $('#myDropdown').hide(),
        btnGetEmoticon = $('#emoticons-button')
            .on('click', function () {
                emoticonsMenu.toggle();
            });
    intializeMenuButtonsEvents();
}

function intializeMenuButtonsEvents() {
    var emoticon;

    emoticon = $('#myDropdown #emoticons-button')
        .on('click', function (event) {
            var clicked = $(event.target),
                typeOfEmoticon,
                newEmoticon,
                tempLayer;

            if (clicked.hasClass('emoticon')) {

            } else if (clicked.parents('.dropdown-content')) {
                clicked = clicked.parents('.dropdown-content').first();
            } else {
                return;
            }
            typeOfEmoticon = $(clicked).attr('id');

            if (currentActiveEmoticon.emoticon) {
               cancelCurrentActiveEmoticon();
            }

            if (layersManager.current === null) {
                // Create a new layer.
                createNewKineticLayer();
            }

            newEmoticon = createNewEmoticonBasedOnInputTypeOfEmoticon(typeOfEmoticon);
            // mark the active shape with a border
            newEmoticon.setStroke(getActiveOutlineStrokeColor(newEmoticon));

            tempLayer = new Kinetic.Layer();

            tempLayer.add(newEmoticon);
            kineticStage.add(tempLayer);

            currentActiveEmoticon.emoticon = newEmoticon;
            currentActiveEmoticon.tempLayer = tempLayer;
            currentActiveEmoticon.tempLayer.draw();
        });
}

function createNewEmoticonBasedOnInputTypeOfEmoticon(typeOfEmoticon) {
    var newEmoticon;
    switch (typeOfEmoticon) {
               case implementedEmoticons.img:
            newEmoticon= createImg();
            break;
        default:
            break;
    }
    return newEmoticon;
};