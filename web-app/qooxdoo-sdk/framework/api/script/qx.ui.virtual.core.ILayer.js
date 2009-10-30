{type:"class",attributes:{"name":"ILayer","packageName":"qx.ui.virtual.core","implementations":"qx.ui.virtual.layer.Abstract","fullName":"qx.ui.virtual.core.ILayer","type":"interface"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>\n\n<p>A layer is responsible to render one aspect of a virtual pane. The pane tells\neach layer to render/update a specific window of the virtual grid.</p>"}},{type:"methods",children:[{type:"method",attributes:{"name":"fullUpdate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"firstRow"},children:[{type:"desc",attributes:{"text":"<p>Index of the first row to display</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"firstColumn"},children:[{type:"desc",attributes:{"text":"<p>Index of the first column to display</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"rowSizes"},children:[{type:"desc",attributes:{"text":"<p>Array of heights for each row to display</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer","dimensions":"1"}}]}]},{type:"param",attributes:{"name":"columnSizes"},children:[{type:"desc",attributes:{"text":"<p>Array of widths for each column to display</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer","dimensions":"1"}}]}]}]},{type:"desc",attributes:{"text":"<p>Do a complete update of the layer. All cached data should be discarded.\nThis method is called e.g. after changes to the grid geometry\n(row/column sizes, row/column count, ...).</p>\n\n<p>Note: This method can only be called after the widgets initial appear\nevent has been fired because it may work with the widget&#8217;s <span class=\"caps\">DOM</span> elements.</p>"}}]},{type:"method",attributes:{"name":"updateLayerData"},children:[{type:"desc",attributes:{"text":"<p>Update the layer to reflect changes in the data the layer displays.</p>"}}]},{type:"method",attributes:{"name":"updateLayerWindow"},children:[{type:"params",children:[{type:"param",attributes:{"name":"firstRow"},children:[{type:"desc",attributes:{"text":"<p>Index of the first row to display</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"firstColumn"},children:[{type:"desc",attributes:{"text":"<p>Index of the first column to display</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"rowSizes"},children:[{type:"desc",attributes:{"text":"<p>Array of heights for each row to display</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer","dimensions":"1"}}]}]},{type:"param",attributes:{"name":"columnSizes"},children:[{type:"desc",attributes:{"text":"<p>Array of widths for each column to display</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer","dimensions":"1"}}]}]}]},{type:"desc",attributes:{"text":"<p>Update the layer to display a different window of the virtual grid.\nThis method is called if the pane is scrolled, resized or cells\nare prefetched. The implementation can assume that no other grid\ndata has been changed since the last &#8220;fullUpdate&#8221; of &#8220;updateLayerWindow&#8221;\ncall.</p>\n\n<p>Note: This method can only be called after the widgets initial appear\nevent has been fired because it may work with the widget&#8217;s <span class=\"caps\">DOM</span> elements.</p>"}}]}]}]}