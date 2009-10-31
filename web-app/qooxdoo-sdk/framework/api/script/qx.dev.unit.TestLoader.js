{type:"class",attributes:{"name":"TestLoader","packageName":"qx.dev.unit","superClass":"qx.application.Standalone","fullName":"qx.dev.unit.TestLoader","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The test loader is the base class of a native application, which can be used\nto run tests from a non-GUI application or from within JSUnit.</p>"}},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__getClassNameFromUrl"},children:[{type:"desc",attributes:{"text":"<p>Parses the url parameters and tries to find the classes to test.\nThe pattern is like <code>index.html?testclass=qx.test</code></p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the class/namespae to test</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"getSuite","fromProperty":"suite"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>suite</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #suite}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>suite</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getTestDescriptions"},children:[{type:"desc",attributes:{"text":"<p>Get a list of test descriptions</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>A description of all tests.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSuite","fromProperty":"suite"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>suite</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>suite</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #suite}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.application.IApplication","overriddenFrom":"qx.application.AbstractGui","name":"main"}},{type:"method",attributes:{"name":"resetSuite","fromProperty":"suite"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>suite</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #suite}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"runJsUnit"},children:[{type:"desc",attributes:{"text":"<p>Run all tests and export the results to JSUnit</p>"}}]},{type:"method",attributes:{"name":"runStandAlone"},children:[{type:"desc",attributes:{"text":"<p>Run tests as standalone application</p>"}}]},{type:"method",attributes:{"name":"runTests"},children:[{type:"params",children:[{type:"param",attributes:{"name":"testResult"},children:[{type:"desc",attributes:{"text":"<p>the result logger</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"TestResult"}}]}]},{type:"param",attributes:{"name":"className"},children:[{type:"desc",attributes:{"text":"<p>Name of the test class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"methodName"},children:[{type:"desc",attributes:{"text":"<p>Name of the test method</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Runs exactly one test from the test suite</p>"}}]},{type:"method",attributes:{"name":"runTestsFromNamespace"},children:[{type:"params",children:[{type:"param",attributes:{"name":"testResult"},children:[{type:"desc",attributes:{"text":"<p>the result logger</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"TestResult"}}]}]},{type:"param",attributes:{"name":"namespaceName"},children:[{type:"desc",attributes:{"text":"<p>Namespace of the tests to run</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Runs all tests inside of the given namespace</p>"}}]},{type:"method",attributes:{"name":"setSuite","fromProperty":"suite"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>suite</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>suite</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #suite}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTestNamespace"},children:[{type:"params",children:[{type:"param",attributes:{"name":"namespace"},children:[{type:"desc",attributes:{"text":"<p>Namespace to add</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the top level namespace of the test cases to test. All classes\nbelow this namespace extending {@link TestCase} will be tested.</p>"}}]}]},{type:"properties",children:[{type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"suite","check":"qx.dev.unit.TestSuite"},children:[{type:"desc",attributes:{"text":"<p>The test suite</p>"}}]}]}]}