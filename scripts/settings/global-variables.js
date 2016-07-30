var kineticStage,

    canvasOptions = {
        width: 960,
        height: 540,
        container: 'canvas-container'
    },

    layersManager = {
        'allLayers': [],
        'current': null
    },

    currentActiveShape = {
        'shape': null,
        'tempLayer': null
    },

    currentColor = '#cc00cc';


