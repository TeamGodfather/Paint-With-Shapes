function inializeButtonsPositions() {
    var uiElement = document.querySelector('#ui');
    uiElement.style.top = canvasOptions.height - 50 + 'px';
    uiElement.style.left = '30px';

    var newDrawingBtn = document.querySelector('#clear');
    newDrawingBtn.style.top = window.innerHeight - 50 + 'px';
    newDrawingBtn.style.left = window.innerWidth - 75 + 'px';
}

function updateNewDrawingBtnPosition() {
    var newDrawingBtn = document.querySelector('#clear');
    newDrawingBtn.style.top = window.innerHeight - 50 + 'px';
    newDrawingBtn.style.left = window.innerWidth - 75 + 'px';
}