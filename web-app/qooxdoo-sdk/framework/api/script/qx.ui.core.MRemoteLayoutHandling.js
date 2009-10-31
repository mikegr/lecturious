{type:"class",attributes:{"name":"MRemoteLayoutHandling","packageName":"qx.ui.core","includer":"qx.ui.groupbox.GroupBox,qx.ui.container.SlideBar,qx.ui.window.Window","fullName":"qx.ui.core.MRemoteLayoutHandling","type":"mixin"},children:[{type:"desc",attributes:{"text":"<p>This mixin redirects the layout manager to a child widget of the\nincluding class. This is e.g. used in {@link qx.ui.window.Window} to configure\nthe layout manager of the window pane instead of the window directly.</p>\n\n<p>The including class must implement the method <code>getChildrenContainer</code>,\nwhich has to return the widget, to which the layout should be set.</p>"}},{type:"methods",children:[{type:"method",attributes:{"isMixin":"true","name":"getLayout"},children:[{type:"desc",attributes:{"text":"<p>Get the widget&#8217;s layout manager.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The widget&#8217;s layout manager</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Abstract"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"setLayout"},children:[{type:"params",children:[{type:"param",attributes:{"name":"layout"},children:[{type:"desc",attributes:{"text":"<p>The new layout or\n    <code>null</code> to reset the layout.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Abstract"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set a layout manager for the widget. A a layout manager can only be connected\nwith one widget. Reset the connection with a previous widget first, if you\nlike to use it in another widget instead.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}