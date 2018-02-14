# JS_Libraries
Libraries written for the JavaScript
Achiev more by typing less.

### Lib for DOM Manupulation and Extendig Functionality
It contains all the required useful methods to maupulate the dom
- getting Elements [Via CssSelector, XPaths]
- action on Elements [Via CssSelector, XPaths]
like: clicking, highlighting, counting, etc.

### Usage API
Import this lib (Either by just copying all the code into your web-console or via JavaScriptExecutor Class in Selenium or to your web application), and use the namespace <code>nngjs</code>

>Examples:
- nngjs.reloadPage(); // It will reload the page
- nngjs.interceptXHRCalls(); // It will print the status for any ongoing Ajax calls
- nngjs.getElementByClass("class1"); // It will return all the elements belongs to the provided class on the DOM at that moment
