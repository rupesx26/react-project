webpackHotUpdate(0,{239:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(3),c=r(u),f=n(15),s=n(120),p=r(s),d=n(123),m=r(d),b=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props.params.id,t=m.default.filter(function(t){return t.id===e})[0];return t?c.default.createElement("div",{className:"portfolio-full"},c.default.createElement("div",{className:"portfolio"},c.default.createElement("div",{className:"picture-container"},c.default.createElement("img",{src:""+t.image}),c.default.createElement("h2",{className:"name"},t.name),c.default.createElement("p",{className:"description"},t.description))),c.default.createElement("div",{className:"navigateBack"},c.default.createElement(f.Link,{to:"/"},"« Back to the index"))):c.default.createElement(p.default,null)}}]),t}(c.default.Component);t.default=b}});