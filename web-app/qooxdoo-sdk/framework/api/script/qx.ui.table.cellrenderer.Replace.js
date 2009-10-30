{type:"class",attributes:{"name":"Replace","packageName":"qx.ui.table.cellrenderer","superClass":"qx.ui.table.cellrenderer.Default","fullName":"qx.ui.table.cellrenderer.Replace","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The cell will use, if given, the\nreplaceMap property and/or the replaceFunction to look up labels for a\nspecific cell value. if the replaceMap, which does not need to be used but\ntakes precedence if given, has no entry for a specific value, you can implement\na fallback lookup in the replacementFunction, or use the replacementFunction exclusively.</p>\n\n<p>In editable cells, you need to make sure that the method returning the data\nto the data storage (for example, a database backend) translates the replaced\ncell value (the label) back into the corresponding value. Thus, both map and\nfunction <span class=\"caps\">MUST</span> also take care of the reverse translation of labels into\nvalues. Example: if you have a field that should display &#8220;Active&#8221; on a &#8220;1&#8221;\nvalue and &#8220;Inactive&#8221; on a &#8220;0&#8221; value, you must use the following map:</p>\n\n<pre class=\"javascript\">\n{\n  0 : \"Inactive\",\n  1 : \"Active\",\n  \"Inactive\" : 0,\n  \"Active\" : 1\n}\n</pre>\n\n<p>You can use the addReversedReplaceMap() method to do this for you:</p>\n\n<pre class=\"javascript\">\nvar propertyCellRenderer = new qx.ui.table.cellrenderer.Replace;\npropertyCellRenderer.setReplaceMap({\n   1 : \"Active\",\n  0 : \"Inactive\",\n  2  : \"Waiting\",\n  'admin' : \"System Administrator\",\n  'manager' : \"User Manager\",\n  'user' : \"Website User\"\n});\npropertyCellRenderer.addReversedReplaceMap();\n</pre>"}},{type:"methods",children:[{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.table.cellrenderer.Abstract","overriddenFrom":"qx.ui.table.cellrenderer.Default","name":"_getContentHtml"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]}]},{type:"method",attributes:{"name":"addReversedReplaceMap"},children:[{type:"desc",attributes:{"text":"<p>adds a reversed replaceMap to itself to translate labels back to the original values</p>"}}]},{type:"method",attributes:{"name":"getReplaceFunction","fromProperty":"replaceFunction"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>replaceFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #replaceFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>replaceFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getReplaceMap","fromProperty":"replaceMap"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>replaceMap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #replaceMap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>replaceMap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initReplaceFunction","fromProperty":"replaceFunction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>replaceFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>replaceFunction</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #replaceFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initReplaceMap","fromProperty":"replaceMap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>replaceMap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>replaceMap</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #replaceMap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetReplaceFunction","fromProperty":"replaceFunction"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>replaceFunction</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #replaceFunction}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetReplaceMap","fromProperty":"replaceMap"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>replaceMap</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #replaceMap}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setReplaceFunction","fromProperty":"replaceFunction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>replaceFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>replaceFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #replaceFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setReplaceMap","fromProperty":"replaceMap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>replaceMap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>replaceMap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #replaceMap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"allowNull":"true","defaultValue":"null","propertyType":"new","name":"replaceFunction","check":"Function"},children:[{type:"desc",attributes:{"text":"<p>function that provides the label for a specific value</p>"}}]},{type:"property",attributes:{"allowNull":"true","defaultValue":"null","propertyType":"new","name":"replaceMap","check":"Object"},children:[{type:"desc",attributes:{"text":"<p>a hashmap which is used to replace values by labels</p>"}}]}]}]}