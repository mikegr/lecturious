{type:"class",attributes:{"name":"Bus","packageName":"qx.event.message","superClass":"qx.core.Object","isSingleton":"true","fullName":"qx.event.message.Bus","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A simple message bus singleton.\nThe message bus registers subscriptions and notifies subscribers when\na matching message is dispatched</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"checkSubscription"},children:[{type:"params",children:[{type:"param",attributes:{"name":"message"},children:[{type:"desc",attributes:{"text":"<p>Name of message, can be truncated by *</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"subscriber"},children:[{type:"desc",attributes:{"text":"<p>Callback Function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"context"},children:[{type:"desc",attributes:{"text":"<p>execution context</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>checks if subsciption is already present\nif you supply the callback function, match only the exact message monitor\notherwise match all monitors that have the given message</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether monitor is present or not</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"dispatch"},children:[{type:"params",children:[{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>message which is being dispatched</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.message.Message"}},{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>dispatch message and call subscribed functions</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[{type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.message.Bus"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getSubscriptions"},children:[{type:"desc",attributes:{"text":"<p>gets the hash map of message subscriptions</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"subscribe"},children:[{type:"params",children:[{type:"param",attributes:{"name":"message"},children:[{type:"desc",attributes:{"text":"<p>name of message, can be truncated by *</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"subscriber"},children:[{type:"desc",attributes:{"text":"<p>subscribing callback function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"context"},children:[{type:"desc",attributes:{"text":"<p>The execution context of the callback (i.e. &#8220;this&#8221;)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>subscribes to a message</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Success</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"unsubscribe"},children:[{type:"params",children:[{type:"param",attributes:{"name":"message"},children:[{type:"desc",attributes:{"text":"<p>Name of message, can be truncated by *</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"subscriber"},children:[{type:"desc",attributes:{"text":"<p>Callback Function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"context"},children:[{type:"desc",attributes:{"text":"<p>execution context</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>unsubscribe a listening method\nif you supply the callback function and execution context,\nremove only this exact subscription\notherwise remove all subscriptions</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether monitor was removed or not</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"desc",attributes:{"text":"<p>constructor</p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"name":"checkSubscription"},children:[{type:"params",children:[{type:"param",attributes:{"name":"message"},children:[{type:"desc",attributes:{"text":"<p>Name of message, can be truncated by *</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"subscriber"},children:[{type:"desc",attributes:{"text":"<p>Callback Function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"context"},children:[{type:"desc",attributes:{"text":"<p>execution context</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>checks if subsciption is already present\nif you supply the callback function, match only the exact message monitor\notherwise match all monitors that have the given message</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether monitor is present or not</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"dispatch"},children:[{type:"params",children:[{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>message which is being dispatched</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.message.Message"}},{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>dispatch message and call subscribed functions</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"boolean"}}]}]}]},{type:"method",attributes:{"name":"getSubscriptions"},children:[{type:"desc",attributes:{"text":"<p>gets the hash map of message subscriptions</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"method",attributes:{"name":"subscribe"},children:[{type:"params",children:[{type:"param",attributes:{"name":"message"},children:[{type:"desc",attributes:{"text":"<p>name of message, can be truncated by *</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"subscriber"},children:[{type:"desc",attributes:{"text":"<p>subscribing callback function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"context"},children:[{type:"desc",attributes:{"text":"<p>The execution context of the callback (i.e. &#8220;this&#8221;)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>subscribes to a message</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Success</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"unsubscribe"},children:[{type:"params",children:[{type:"param",attributes:{"name":"message"},children:[{type:"desc",attributes:{"text":"<p>Name of message, can be truncated by *</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"subscriber"},children:[{type:"desc",attributes:{"text":"<p>Callback Function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"context"},children:[{type:"desc",attributes:{"text":"<p>execution context</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>unsubscribe a listening method\nif you supply the callback function and execution context,\nremove only this exact subscription\notherwise remove all subscriptions</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether monitor was removed or not</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}]}