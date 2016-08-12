//TODO: implement save-button
var saveButton = document.getElementById('save');

saveButton.onclick = function () {
    var saveCanvasPic = document.querySelector('.kineticjs-content canvas');
    var data = saveCanvasPic.toDataURL();

    var a = document.createElement('a');
    a.href = data;

    var name = prompt("Please set a name", "Default Name");
    a.download = name;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();

};