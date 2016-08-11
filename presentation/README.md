<!-- section start -->
<!-- attr: { class:'slide-title', showInPresentation:true, hasScriptWrapper:true } -->
# Team GodFather

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

# Layer Manager Screenshot

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

- **Select** current layer
  - Shapes are added to the currently active layer
  - Layers above the selected layer are invisible

- **Flatten** all layers - save as a single image

- **Insert** background layer from url

<!-- section start -->
<!-- attr: { showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Shapes Screenshot

<!-- ![](./imgs/shapes.png) -->

<!-- <img showInPresentation="true" class="slide-image" src="imgs/shapes.png" style="top:15%; width:100%; z-index:-1" /> -->

<!-- section start -->
<!-- attr: {  showInPresentation:true, style:'font-size: 0.7em', hasScriptWrapper:true } -->

# Shapes Features

- **Create**
  - Factory returns the correct shape
  - Assigns current color
  - Shape exist in a temporary layer until it is committed to an existing layer
  
- **Move**
  - Arrow keys
  - Drag with mouse
  - Arrow UI buttons

- **Rotate**
  - A/ D keys
  - Rotate UI buttons

- **Scale**
  - W/ S keys
  - -/ + UI buttons

- **Alpha**
  - Q/ E keys
  - -/ + UI buttons
