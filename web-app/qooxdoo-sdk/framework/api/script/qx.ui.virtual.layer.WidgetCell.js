{type:"class",attributes:{"name":"WidgetCell","packageName":"qx.ui.virtual.layer","mixins":"qx.ui.core.MChildrenHandling","superClass":"qx.ui.virtual.layer.Abstract","fullName":"qx.ui.virtual.layer.WidgetCell","type":"class"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>\n\n<p>The WidgetCell layer renders each cell with a qooxdoo widget. The concrete\nwidget instance for each cell is provided by a cell provider.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.virtual.layer.Abstract","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widgetCellProvider"},children:[{type:"desc",attributes:{"text":"<p>This\n   class manages the life cycle of the cell widgets.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.virtual.core.IWidgetCellProvider"}}]}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"anonymous","docFrom":"qx.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.virtual.layer.Abstract"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.virtual.layer.Abstract","overriddenFrom":"qx.ui.virtual.layer.Abstract","name":"_fullUpdate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"firstRow"}},{type:"param",attributes:{"name":"firstColumn"}},{type:"param",attributes:{"name":"rowSizes"}},{type:"param",attributes:{"name":"columnSizes"}}]}]},{type:"method",attributes:{"access":"protected","name":"_getSpacer"},children:[{type:"desc",attributes:{"text":"<p>Get the spacer widget, for empty cells</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The spacer widget.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Spacer"}}]}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.virtual.layer.Abstract","overriddenFrom":"qx.ui.virtual.layer.Abstract","name":"_updateLayerWindow"},children:[{type:"params",children:[{type:"param",attributes:{"name":"firstRow"}},{type:"param",attributes:{"name":"firstColumn"}},{type:"param",attributes:{"name":"rowSizes"}},{type:"param",attributes:{"name":"columnSizes"}}]}]},{type:"method",attributes:{"name":"getRenderedCellWidget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The cell&#8217;s row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The cell&#8217;s column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the widget used to render the given cell. May return null if the\ncell isn&#8217;t rendered currently rendered.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the widget used to render the given\n   cell or <code>null</code></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.LayoutItem"}},{type:"entry",attributes:{"type":"null"}}]}]}]}]}]}