{type:"class",attributes:{"isAbstract":"true","name":"Abstract","packageName":"qx.ui.progressive.renderer","superClass":"qx.core.Object","childClasses":"qx.ui.progressive.renderer.FunctionCaller,qx.ui.progressive.renderer.table.Row","fullName":"qx.ui.progressive.renderer.Abstract","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Abstract renderer for Progressive.  <span class=\"caps\">EXPERIMENTAL</span>!  <span class=\"caps\">INTERFACE</span> <span class=\"caps\">MAY</span> <span class=\"caps\">CHANGE</span>.</p>"}},{type:"methods",children:[{type:"method",attributes:{"name":"join"},children:[{type:"params",children:[{type:"param",attributes:{"name":"progressive"},children:[{type:"desc",attributes:{"text":"<p>The Progressive object to which we are being joined.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.progressive.Progressive"}}]}]},{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>The name by which the data model will reference this renderer.  This\n  is important to know in order to access the appropriate member of the\n  {@link qx.ui.progressive.State}&#8216;s renderer array.  That array is\n  accessed from the renderer by\n  state.getRendererData()[element.renderer] where element.renderer will\n  be the name provided here.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Join this renderer to its {@link qx.ui.progressive.Progressive}.</p>"}}]},{type:"method",attributes:{"name":"render"},children:[{type:"params",children:[{type:"param",attributes:{"name":"state"},children:[{type:"desc",attributes:{"text":"<p>Data relevant to the current rendering session.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"@link qx.ui.progressive.State"}}]}]},{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>An object containing at least the following members:\n  <dl>\n    <dt>\n      renderer</dt>\n    <dd>\n      The name of a renderer.  That name is used by {@link\n      qx.ui.progressive.Progressive} to select the renderer to be used\n      to render this element.  The name should match one provided to\n      {@link qx.ui.progressive.Progressive#addRenderer}.\n    </dd></p>\n\n<dt>\n      data\n    </dt>\n    <dd>\n      The data to be passed to the renderer.  The data may be of any\n      type that the renderer knows how to render.\n    </dd>\n  </dl>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Render the provided element in the renderer&#8217;s unique way.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Void"}}]}]}]}]}]}