{type:"class",attributes:{"name":"Pool","packageName":"qx.event","superClass":"qx.util.ObjectPool","isSingleton":"true","fullName":"qx.event.Pool","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Central instance pool for event objects. All event objects dispatched by the\nevent loader are pooled using this class.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.util.ObjectPool","isCtor":"true","name":"ctor"}}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[{type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.Pool"}}]}]}]}]}]}