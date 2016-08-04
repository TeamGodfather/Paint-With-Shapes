# List Of Existing Functins 

1. /scripts/
   - app.js 
     - window.onload() : initalization functions
     - initializeCanvas() : create Kinetic.Stage
     - initializeOnResize() : initialize onResize event
2. /scripts/colorpicker
   - get-color.js
      - getColor() : temporary implamentation ( toggles color purple / black )
3. /scripts/controls
   - keyboard-controls.js
      - initializeKeyboardControls() : keydown event, all keyboard controls
      - changeCurrentShapeOpacity() : ( keys '[' ']' ) 
      - releaseCurrentShape() : ( keys 'Enter' )
      - rotateCurrentShape() : ( keys 'ArrowLeft' ' ArrowRight)
      - scaleCurrentShape() : (keys 'ArrowUp' 'ArrowDown' )
   - mouse-controls.js
4. /scripts/layers
   - layer-manager.js
      - createNewLayer() : create Kinetic.Layer 
      - addLayerListItem() : create corresponding li element 
      - removeLayer() : removes Kinetic.Layer and li element
      - fallterLayersToBottomLayer() : flatten layers 
      - updateLayerListSelectedItem() : adds class .selected to the currently active layer
      - setActiveLayer()
   - layer-ui.js
      - initializeLayerUI() : initialize the layer manager, buttons and events 
      - updateLayerUiContainerPosition() : update position on window.onresize
5. /scripts/publish
6. /scripts/settings
   - global-variables.js : list of global variables
7. /scripts/shapes
   - get-shape.js
      - getShape() : currently returns a basic rectangle
      - getActiveOutlineStrokeColor() : active shape outline ( currently black )
   - shapes-menu.js
      - initializeShapesUI() : currently create shape button , to be replaced with shapes menu
8. /scripts/shapes/shape-factory
   - rectangle.js : create a basic rectangle
9. /scripts/ui
   - clear-canvas.js
      - initializeClearCanvasButton() : NEW button
   - draggable-menus.js
      - initializeDraggableMenus() : draggable menu containers
   - ui-position.js
      - inializeButtonsPositions() : initial button positions
      - updateNewDrawingBtnPosition() : update NEW button position on window.onResize
   - undo-button.js
10. /scripts/utils
   - id-provider.js
      - getNextLayerId() : generates unique ids for layers