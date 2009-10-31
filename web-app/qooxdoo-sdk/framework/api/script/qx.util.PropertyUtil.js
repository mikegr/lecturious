{type:"class",attributes:{"isStatic":"true","name":"PropertyUtil","packageName":"qx.util","fullName":"qx.util.PropertyUtil","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A helper class for accessing the property system directly.</p>\n\n<p>This class is rather to be used internally. For all regular usage of the\nproperty system the default <span class=\"caps\">API</span> should be sufficient.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"deleteInitValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>The object to access</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"propertyName"},children:[{type:"desc",attributes:{"text":"<p>The name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Deletes the init value of the given property</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"deleteThemeValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>The object to access</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"propertyName"},children:[{type:"desc",attributes:{"text":"<p>The name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Deletes the theme value of the given property</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"deleteUserValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>The object to access</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"propertyName"},children:[{type:"desc",attributes:{"text":"<p>The name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Deletes the user value of the given property</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getInitValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>The object to access</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"propertyName"},children:[{type:"desc",attributes:{"text":"<p>The name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the init value of the given property</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The init value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getProperties"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>a qooxdoo class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the property map of the given class</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The properties map as defined in {@link qx.Class.define}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getThemeValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>The object to access</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"propertyName"},children:[{type:"desc",attributes:{"text":"<p>The name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the theme value of the given property</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The theme value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getUserValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>The object to access</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"propertyName"},children:[{type:"desc",attributes:{"text":"<p>The name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the user value of the given property</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The user value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"resetThemed"},children:[{type:"params",children:[{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>The object to access</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"propertyName"},children:[{type:"desc",attributes:{"text":"<p>The name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Resets a themed property</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"setInitValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>The object to access</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"propertyName"},children:[{type:"desc",attributes:{"text":"<p>The name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The value to set</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the init value of the given property</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"setThemed"},children:[{type:"params",children:[{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>The object to access</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"propertyName"},children:[{type:"desc",attributes:{"text":"<p>The name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The value to set</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets a themed property</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"setThemeValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>The object to access</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"propertyName"},children:[{type:"desc",attributes:{"text":"<p>The name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The value to set</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the theme value of the given property</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"setUserValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>The object to access</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"propertyName"},children:[{type:"desc",attributes:{"text":"<p>The name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The value to set</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the given property</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}