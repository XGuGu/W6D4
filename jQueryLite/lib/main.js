const DOMNodeCollection = require("./dom_node_collection");

var docReady = false;
var docFnArr = [];

window.$l = (arg) => {
  if (typeof arg === 'string') {
    // css selector
    const nodelist = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(nodelist));
  } else if (typeof arg === "function") {
    if (docReady === false) {
      docFnArr.push(arg);
    } else {
      arg();
    }
  } else if(typeof arg === 'object') {
    if (arg instanceof HTMLElement) {
      return new DOMNodeCollection([arg]);
    }
}
};
