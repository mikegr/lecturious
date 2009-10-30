{type:"class",attributes:{"name":"Double","packageName":"qx.ui.decoration","superClass":"qx.ui.decoration.Single","fullName":"qx.ui.decoration.Double","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Border implementation with two <span class=\"caps\">CSS</span> borders. Both borders can be styled\nindependent of each other. This decorator is used to create 3D effects like\n<code>inset</code>, <code>outset</code>, <code>ridge</code> or <code>groove</code>.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.decoration.Single","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"width"},children:[{type:"desc",attributes:{"text":"<p>Width of the border</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"style"},children:[{type:"desc",attributes:{"text":"<p>Any supported border style</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"color"},children:[{type:"desc",attributes:{"text":"<p>The border color</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Color"}}]}]},{type:"param",attributes:{"name":"innerWidth"},children:[{type:"desc",attributes:{"text":"<p>Width of the inner border</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"innerColor"},children:[{type:"desc",attributes:{"text":"<p>The inner border color</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Color"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.decoration.Abstract","overriddenFrom":"qx.ui.decoration.Single","name":"_getDefaultInsets"}},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.decoration.Abstract","overriddenFrom":"qx.ui.decoration.Single","name":"_isInitialized"}},{type:"method",attributes:{"name":"getInnerColorBottom","fromProperty":"innerColorBottom"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>innerColorBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorBottom}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>innerColorBottom</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getInnerColorLeft","fromProperty":"innerColorLeft"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>innerColorLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>innerColorLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getInnerColorRight","fromProperty":"innerColorRight"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>innerColorRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorRight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>innerColorRight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getInnerColorTop","fromProperty":"innerColorTop"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>innerColorTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>innerColorTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getInnerWidthBottom","fromProperty":"innerWidthBottom"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>innerWidthBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthBottom}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>innerWidthBottom</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getInnerWidthLeft","fromProperty":"innerWidthLeft"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>innerWidthLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>innerWidthLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getInnerWidthRight","fromProperty":"innerWidthRight"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>innerWidthRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthRight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>innerWidthRight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getInnerWidthTop","fromProperty":"innerWidthTop"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>innerWidthTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>innerWidthTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","overriddenFrom":"qx.ui.decoration.Single","name":"getMarkup"}},{type:"method",attributes:{"access":"protected","name":"initInnerColorBottom","fromProperty":"innerColorBottom"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>innerColorBottom</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>innerColorBottom</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorBottom}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInnerColorLeft","fromProperty":"innerColorLeft"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>innerColorLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>innerColorLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInnerColorRight","fromProperty":"innerColorRight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>innerColorRight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>innerColorRight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorRight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInnerColorTop","fromProperty":"innerColorTop"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>innerColorTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>innerColorTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInnerWidthBottom","fromProperty":"innerWidthBottom"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>innerWidthBottom</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>innerWidthBottom</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthBottom}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInnerWidthLeft","fromProperty":"innerWidthLeft"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>innerWidthLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>innerWidthLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInnerWidthRight","fromProperty":"innerWidthRight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>innerWidthRight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>innerWidthRight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthRight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInnerWidthTop","fromProperty":"innerWidthTop"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>innerWidthTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>innerWidthTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetInnerColor","fromProperty":"innerColor"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>innerColor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColor}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInnerColorBottom","fromProperty":"innerColorBottom"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>innerColorBottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorBottom}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInnerColorLeft","fromProperty":"innerColorLeft"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>innerColorLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorLeft}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInnerColorRight","fromProperty":"innerColorRight"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>innerColorRight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorRight}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInnerColorTop","fromProperty":"innerColorTop"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>innerColorTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorTop}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInnerWidth","fromProperty":"innerWidth"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>innerWidth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidth}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInnerWidthBottom","fromProperty":"innerWidthBottom"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>innerWidthBottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthBottom}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInnerWidthLeft","fromProperty":"innerWidthLeft"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>innerWidthLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthLeft}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInnerWidthRight","fromProperty":"innerWidthRight"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>innerWidthRight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthRight}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInnerWidthTop","fromProperty":"innerWidthTop"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>innerWidthTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthTop}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","overriddenFrom":"qx.ui.decoration.Single","name":"resize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"}},{type:"param",attributes:{"name":"width"}},{type:"param",attributes:{"name":"height"}}]}]},{type:"method",attributes:{"name":"setInnerColor","fromProperty":"innerColor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"innerColorTop"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #innerColorTop}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"innerColorRight"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #innerColorRight}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"innerColorBottom"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #innerColorBottom}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"innerColorLeft"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #innerColorLeft}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>innerColor</code>.</p>\n\n<p>This setter supports a shorthand mode compatible with the way margins and paddins are set in <span class=\"caps\">CSS</span>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColor}.</p>"}}]},{type:"method",attributes:{"name":"setInnerColorBottom","fromProperty":"innerColorBottom"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>innerColorBottom</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>innerColorBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorBottom}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInnerColorLeft","fromProperty":"innerColorLeft"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>innerColorLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>innerColorLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInnerColorRight","fromProperty":"innerColorRight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>innerColorRight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>innerColorRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorRight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInnerColorTop","fromProperty":"innerColorTop"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>innerColorTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>innerColorTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerColorTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInnerWidth","fromProperty":"innerWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"innerWidthTop"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #innerWidthTop}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"innerWidthRight"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #innerWidthRight}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"innerWidthBottom"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #innerWidthBottom}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"innerWidthLeft"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #innerWidthLeft}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>innerWidth</code>.</p>\n\n<p>This setter supports a shorthand mode compatible with the way margins and paddins are set in <span class=\"caps\">CSS</span>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidth}.</p>"}}]},{type:"method",attributes:{"name":"setInnerWidthBottom","fromProperty":"innerWidthBottom"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>innerWidthBottom</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>innerWidthBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthBottom}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInnerWidthLeft","fromProperty":"innerWidthLeft"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>innerWidthLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>innerWidthLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInnerWidthRight","fromProperty":"innerWidthRight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>innerWidthRight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>innerWidthRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthRight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInnerWidthTop","fromProperty":"innerWidthTop"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>innerWidthTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>innerWidthTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #innerWidthTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"propertyType":"group","group":"\"innerColorTop\",\"innerColorRight\",\"innerColorBottom\",\"innerColorLeft\"","name":"innerColor","mode":"shorthand"},children:[{type:"desc",attributes:{"text":"<p>Property group for the inner color properties.</p>"}}]},{type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"innerColorBottom","check":"Color"},children:[{type:"desc",attributes:{"text":"<p>bottom inner color of border</p>"}}]},{type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"innerColorLeft","check":"Color"},children:[{type:"desc",attributes:{"text":"<p>left inner color of border</p>"}}]},{type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"innerColorRight","check":"Color"},children:[{type:"desc",attributes:{"text":"<p>right inner color of border</p>"}}]},{type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"innerColorTop","check":"Color"},children:[{type:"desc",attributes:{"text":"<p>top inner color of border</p>"}}]},{type:"property",attributes:{"propertyType":"group","group":"\"innerWidthTop\",\"innerWidthRight\",\"innerWidthBottom\",\"innerWidthLeft\"","name":"innerWidth","mode":"shorthand"},children:[{type:"desc",attributes:{"text":"<p>Property group to set the inner border width of all sides</p>"}}]},{type:"property",attributes:{"defaultValue":"0","propertyType":"new","name":"innerWidthBottom","check":"Number"},children:[{type:"desc",attributes:{"text":"<p>bottom width of border</p>"}}]},{type:"property",attributes:{"defaultValue":"0","propertyType":"new","name":"innerWidthLeft","check":"Number"},children:[{type:"desc",attributes:{"text":"<p>left width of border</p>"}}]},{type:"property",attributes:{"defaultValue":"0","propertyType":"new","name":"innerWidthRight","check":"Number"},children:[{type:"desc",attributes:{"text":"<p>right width of border</p>"}}]},{type:"property",attributes:{"defaultValue":"0","propertyType":"new","name":"innerWidthTop","check":"Number"},children:[{type:"desc",attributes:{"text":"<p>top width of border</p>"}}]}]}]}