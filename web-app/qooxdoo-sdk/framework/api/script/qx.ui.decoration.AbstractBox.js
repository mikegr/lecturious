{type:"class",attributes:{"isAbstract":"true","name":"AbstractBox","packageName":"qx.ui.decoration","superClass":"qx.ui.decoration.Abstract","childClasses":"qx.ui.decoration.HBox,qx.ui.decoration.VBox","fullName":"qx.ui.decoration.AbstractBox","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Abstract base class for the HBox and VBox decorators.</p>\n\n<p>This decorator uses three images, which are positioned in a vertical/horizontal\nline. The first and last image always keep their original size. The center\nimage is stretched.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"baseImage"},children:[{type:"desc",attributes:{"text":"<p>Base image to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"insets"},children:[{type:"desc",attributes:{"text":"<p>Insets for the grid</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}},{type:"entry",attributes:{"type":"Array"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.decoration.AbstractBox#baseImage","name":"_applyBaseImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>baseImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyBaseImage}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.decoration.Abstract","overriddenFrom":"qx.ui.decoration.Abstract","name":"_getDefaultInsets"}},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.decoration.Abstract","overriddenFrom":"qx.ui.decoration.Abstract","name":"_isInitialized"}},{type:"method",attributes:{"access":"protected","name":"_setOrientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"orientation"},children:[{type:"desc",attributes:{"text":"<p>horizontal or vertical</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Helper to set the orientation.</p>"}}]},{type:"method",attributes:{"name":"getBaseImage","fromProperty":"baseImage"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>baseImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #baseImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>baseImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"getMarkup"}},{type:"method",attributes:{"access":"protected","name":"initBaseImage","fromProperty":"baseImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>baseImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>baseImage</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #baseImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetBaseImage","fromProperty":"baseImage"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>baseImage</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #baseImage}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"resize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"}},{type:"param",attributes:{"name":"width"}},{type:"param",attributes:{"name":"height"}}]}]},{type:"method",attributes:{"name":"setBaseImage","fromProperty":"baseImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>baseImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>baseImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #baseImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"tint"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"}},{type:"param",attributes:{"name":"bgcolor"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"String","allowNull":"true","propertyType":"new","name":"baseImage","apply":"_applyBaseImage"},children:[{type:"desc",attributes:{"text":"<p>Base image <span class=\"caps\">URL</span>. All the different images needed are named by the default\nnaming scheme:</p>\n\n<p>${baseImageWithoutExtension}-${imageName}.${baseImageExtension}</p>\n\n<p>These image names are used:</p>\n\n<ul>\n<li>t: top side (vertical orientation)</li>\n<li>b: bottom side (vertical orientation)</li>\n</ul>\n\n<ul>\n<li>l: left side (horizontal orientation)</li>\n<li>r: right side (horizontal orientation)</li>\n</ul>\n\n<ul>\n<li>c: center image</li>\n</ul>"}}]}]}]}