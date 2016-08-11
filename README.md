<!-- section start -->
<!-- attr: { class:'slide-title', showInPresentation:true, hasScriptWrapper:true } -->
# [Team GodFather's Paint With Shapes](https://teamgodfather.github.io/Paint-With-Shapes/)

## [Slides](https://rawgit.com/TeamGodfather/Paint-With-Shapes/master/presentation/index.html)

## [Demo]()

![paint with shapes logo](https://github.com/TeamGodfather/Paint-With-Shapes/blob/master/presentation/imgs/withblackbg.png "Paint With Shapes")

<!-- <img showInPresentation="true" class="slide-image" src="imgs/the_godfather.jpg" style="top:30%; left:49%; width:30.36%; z-index:-1" /> -->

<div class="signature">
	<p class="signature-course">JS UI&DOM TeamWork</p>
	<p class="signature-initiative">Telerik Academy by Progress</p>
	<a href="https://github.com/TeamGodfather" class="signature-link">Link to the GitHub repository </a>
</div>

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Team Godfather Members

| Name | TALS | GitHub |
| :------------- | :------------------- | :------------------------------------------|
| Антонио Димитров  | Antonio.Dimitrov       | [AntonioDimitrov7 ](https://github.com/AntonioDimitrov7)                   |
| Ивайло Андонов   | ivail0 | [ivailoAndonov](https://github.com/ivailoAndonov)       |
| Мартин Йотов    | martinyotov  | [MartinYotov](https://github.com/MartinYotov)         |
| Миглена Петрова | Miglena_Petrova  | [MiglenaPetrova](https://github.com/MiglenaPetrova)         |
| Силвия Ботева | sboteva1    | [silweto7](https://github.com/silweto7)                 |
| Тодор Георгиев | Toshe7o    | [georgievtodor](https://github.com/georgievtodor)               |
| Христо Тодоров | todorovh      | [shakuu](https://github.com/shakuu) |

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# GitHub graphics

<!-- ![](./imgs/githubgraphics.png) -->

<!-- <img showInPresentation="true" class="slide-image" src="imgs/githubgraphics.png" style="top:25%; left:10%; width:80%; z-index:-1" /> -->

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

<!-- ![](./imgs/withblackbg.png) -->

<!-- <img showInPresentation="true" class="slide-image" src="imgs/withblackbg.png" style="top:25%; left:10%; width:80%; z-index:-1" /> -->

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# General Project Info

## Paint With Shapes

- What's it all about ? 

- Project is split into a lot of different files to avoid commit conflicts

- Documentation .mds
  - Features
  - Shapes list todo
  - List of implemented functions by files 
  - Utilizing GitHub's Issues

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Used JS libraries

- **Kinetic.js** 
  - layer management
  - shapes management 

- **JQuery** 
  - DOM manipulations 
  - .animate()

- **JQuery UI**
  - .draggable()
  - .resizeable() 

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Layer Manager Screenshot

![Layer Manager Screenshot](https://github.com/TeamGodfather/Paint-With-Shapes/blob/master/presentation/imgs/layer-manager.png "Layer Manager")


<!-- ![](./imgs/layer-manager.png) -->

<!-- <img showInPresentation="true" class="slide-image" src="imgs/layer-manager.png" style="top:15%; width:100%; z-index:-1" /> -->

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Layer Manager Features

- **LayersManager** 
  - Each Kinetic.Layer() ( canvas ) is wrapped in an object with ID and Layer
  - Stored in an Array for ease of management

- **Add** new layer on top
  - Creates a new generic Layer
  - ID genererator function assigns unique ID
  - Updates List

- **Remove** any layer
  - Remove from Kinetic.Stage()
  - Remove from LayersManager

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# More Layer Manager Features

- **Select** current layer
  - Shapes are added to the currently active layer
  - Layers above the selected layer are invisible

- **Flatten** all layers - save as a single image
  - Move all existing shapes to bottom layer
  - Remove all existing layers ( except for the bottom one )

- **Insert** background layer from url
  - Loads an image from input url
  - Inserts it on a new layer
  - Inserts the new layer as a bottom layer

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Shapes Screenshot

![Shapes Screenshot](https://github.com/TeamGodfather/Paint-With-Shapes/blob/master/presentation/imgs/shapes.png "Shapes Demo")

<!-- ![](./imgs/shapes.png) -->

<!-- <img showInPresentation="true" class="slide-image" src="imgs/shapes.png" style="top:15%; width:100%; z-index:-1" /> -->

<!-- section start -->
<!-- attr: {  showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Shapes Features

- **Create**
  - Factory returns the correct shape
  - Each shape has a separate creation function
  - Assigns the currently selected fill color
  - Assigns a stroke color to differentiate the active shape from the already existing shapes
  - New shape exist in a temporary layer until it is committed to an existing layer
  
- **Move**
  - Arrow keys - 4 directions/ 5px step
  - Arrow UI buttons - 8 directions/ 5px step  
  - Drag with mouse - free form

<!-- section start -->
<!-- attr: {  showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# More Shapes Features

- **Rotate**
  - A/ D keys
  - Rotate UI buttons

- **Scale**
  - W/ S keys
  - -/ + UI buttons

- **Alpha**
  - Q/ E keys
  - -/ + UI buttons

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Emoticons Screenshot

![Emoticons Screenshot](https://github.com/TeamGodfather/Paint-With-Shapes/blob/master/presentation/imgs/emoticons.png "Emoticons Demo")

<!-- ![](./imgs/emoticons.png) -->

<!-- <img showInPresentation="true" class="slide-image" src="imgs/emoticons.png" style="top:15%; width:100%; z-index:-1" /> -->


<!-- section start -->
<!-- attr: {  showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Emoticons

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Color Picker Screenshot

![Colorpicker Screenshot](https://github.com/TeamGodfather/Paint-With-Shapes/blob/master/presentation/imgs/colorpicker.png "Colorpicker Demo")

<!-- ![](./imgs/colorpicker.png) -->

<!-- <img showInPresentation="true" class="slide-image" src="imgs/colorpicker.png" style="top:15%; width:100%; z-index:-1" /> -->


<!-- section start -->
<!-- attr: {  showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Color Picker

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Controls UI Screenshot

![Controls UI Screenshot](https://github.com/TeamGodfather/Paint-With-Shapes/blob/master/presentation/imgs/controls.png "Controls UI Demo")

<!-- ![](./imgs/controls.png) -->

<!-- <img showInPresentation="true" class="slide-image" src="imgs/controls.png" style="top:15%; width:100%; z-index:-1" /> -->
