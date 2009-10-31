{type:"class",attributes:{"name":"Iframe","packageName":"qx.io.remote.transport","superClass":"qx.io.remote.transport.Abstract","fullName":"qx.io.remote.transport.Iframe","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Transports requests to a server using an <span class=\"caps\">IFRAME</span>.</p>\n\n<p>This class should not be used directly by client programmers.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.io.remote.transport.Abstract","isCtor":"true","name":"ctor"}}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"isSupported"},children:[{type:"desc",attributes:{"text":"<p>Returns always true, because iframe transport is supported by all browsers.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_onload"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Converting complete state to numeric value and update state property</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onreadystatechange"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Converting named readyState to numeric value and update state property</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_switchReadyState"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vReadyState"},children:[{type:"desc",attributes:{"text":"<p>readystate value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Switches the readystate by setting the internal state.</p>"}}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getFetchedLength"},children:[{type:"desc",attributes:{"text":"<p>Returns the length of the content as fetched thus far.\nThis method needs implementation (returns always 0).</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Returns 0</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getIframeBody"},children:[{type:"desc",attributes:{"text":"<p>Returns the body node of the used iframe.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>body node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"method",attributes:{"name":"getIframeDocument"},children:[{type:"desc",attributes:{"text":"<p>Returns the document node of the used iframe.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>document node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"method",attributes:{"name":"getIframeHtmlContent"},children:[{type:"desc",attributes:{"text":"<p>Returns the iframe content as <span class=\"caps\">HTML</span>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>iframe content as <span class=\"caps\">HTML</span></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"getIframeTextContent"},children:[{type:"desc",attributes:{"text":"<p>Returns the iframe content (innerHTML) as text.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>iframe content as text</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"getIframeWindow"},children:[{type:"desc",attributes:{"text":"<p>Returns the <span class=\"caps\">DOM</span> window object of the used iframe.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> window object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"method",attributes:{"name":"getResponseContent"},children:[{type:"desc",attributes:{"text":"<p>Returns the content of the response</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>null or text of the response (=iframe content).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"null"}},{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getResponseHeader"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vLabel"},children:[{type:"desc",attributes:{"text":"<p>Response header name</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the value of the given response header.</p>\n\n<p>This method is not implemented at the moment and returns always &#8220;null&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Returns null</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getResponseHeaders"},children:[{type:"desc",attributes:{"text":"<p>Provides an hash of all response headers.</p>\n\n<p>This method is not implemented at the moment and returns an empty map.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>empty map</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getStatusCode"},children:[{type:"desc",attributes:{"text":"<p>Returns the current status code of the request if available or -1 if not.\nThis method needs implementation (returns always 200).</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>status code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getStatusText"},children:[{type:"desc",attributes:{"text":"<p>Provides the status text for the current request if available and null otherwise.\nThis method needs implementation (returns always an empty string)</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>status code text</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"send"},children:[{type:"desc",attributes:{"text":"<p>Sends a request with the use of a form.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"setRequestHeader"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vLabel"},children:[{type:"desc",attributes:{"text":"<p>request header name</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"vValue"},children:[{type:"desc",attributes:{"text":"<p>request header value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets a request header with the given value.</p>\n\n<p>This method is not implemented at the moment.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}