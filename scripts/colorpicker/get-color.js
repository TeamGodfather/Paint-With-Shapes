function getColor() {
    // // DELTE THIS WHEN COLOR PICKER IS WORKING
    // if (currentColor === '#cc00cc') {
    //     currentColor = '#000000';
    // } else {
    //     currentColor = '#cc00cc';
    // }




    var canvasPlace = document.getElementById('colorpicker');
    var canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.style.float = 'left';
    var ctx = canvas.getContext('2d');
    canvasPlace.appendChild(canvas);
    canvas.width = 256;
    canvas.height = 256;
    canvas.style.border = '8px solid yellowgreen';


    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x : evt.clientX - rect.left,
            y : evt.clientY - rect.top
        };
    }

    function drawColor(color) {
        currentColor = color;
    }

    function init(imageObj) {
        var mouseDown = false;

        canvas.addEventListener('mouseout', function () {
            canvas.remove();
        });

        ctx.strokeStyle = '#444';
        ctx.lineWidth = 2;

        canvas.addEventListener('mousedown', function (evt) {
            mouseDown = true;

            var mousePos = getMousePos(canvas, evt);

            // currentColor = undefined;
            color = undefined;

            if(mousePos !== null && mousePos.x > mousePos.x < imageObj.width && mousePos.y > mousePos.y < imageObj.height) {
                var x = mousePos.x;
                var y = mousePos.y;
                var imgData = ctx.getImageData(x, y, 1, 1);
                var data = imgData.data;
                var color = 'rgb(' + data[0] + ',' + data[1] + ',' + data[2] + ')';
                drawColor(color);
            }
        }, false);

        canvas.addEventListener('mouseup', function (evt) {
            mouseDown = false;
        }, false);

        canvas.addEventListener('mousemove', function (evt) {
            var mousePos = getMousePos(canvas, evt);
            // currentColor = undefined;
            color = undefined;
            if(mouseDown && mousePos !== null && mousePos.x > mousePos.x < imageObj.width && mousePos.y > mousePos.y < imageObj.height) {
                var x = mousePos.x;
                var y = mousePos.y;
                var imgData = ctx.getImageData(x, y, 1, 1);
                var data = imgData.data;
                var color = 'rgb(' + data[0] + ',' + data[1] + ',' + data[2] + ')';

                drawColor(color);
            }
        }, false);

        ctx.drawImage(imageObj, 0, 0);

        drawColor('black');
    }



    var imageObj = new Image();
    imageObj.onload = function () {
        init(this);
    };

    imageObj.crossOrigin = '';
    imageObj.src = './images/colorpicker.png'


}