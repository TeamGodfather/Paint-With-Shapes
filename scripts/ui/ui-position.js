function inializeButtonsPositions() {
    var uiElement = document.querySelector('#ui');
    uiElement.style.top = canvasOptions.height - 50 + 'px';
    uiElement.style.left = '30px';

    var newDrawingBtn = document.querySelector('#clear');
    newDrawingBtn.style.top = canvasOptions.height - 50 + 'px';
    newDrawingBtn.style.left = canvasOptions.width - 75 + 'px';
    
}