!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){var r=n(1),o=n(1),i=n(5);i["default"]&&(i=i["default"]),o.render(r.createElement(i,{pages:[{title:"Donate",url:"//opencollective.com/webpack"},{title:"Concepts",url:"concepts"},{title:"Configuration",url:"configuration"},{title:"How to",url:"how-to"},{title:"API",url:"api"},{title:"Github",url:"//github.com/webpack/webpack.js.org"}]}),document.getElementById("components/navigation/navigation.jsx"))},function(e,t,n){(function(t){!function(t,r){e.exports=r(n(3),n(4))}(this,function(e,n){function r(e){var t=e.nodeName,n=e.attributes;e.attributes={},t.defaultProps&&_(e.attributes,t.defaultProps),n&&_(e.attributes,n),n=e.attributes,e.children&&!e.children.length&&(e.children=void 0),e.children&&(n.children=e.children)}function o(e,t){var n,r,o;if(t){for(o in t)if(n=L.test(o))break;if(n){r=e.attributes={};for(o in t)t.hasOwnProperty(o)&&(r[L.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o])}}}function i(e,t,r){var o=t._preactCompatRendered;o&&o.parentNode!==t&&(o=null),o||(o=t.children[0]);for(var i=t.childNodes.length;i--;)t.childNodes[i]!==o&&t.removeChild(t.childNodes[i]);var a=n.render(e,t,o);return t._preactCompatRendered=a,"function"==typeof r&&r(),a&&a._component||a.base}function a(e,t,r,o){var a=n.h(q,{context:e.context},t),u=i(a,r);return o&&o(u),u}function u(e){var t=e._preactCompatRendered;return!(!t||t.parentNode!==e)&&(n.render(n.h(z),e,t),!0)}function c(e){return d.bind(null,e)}function l(e,t){for(var n=t||0;n<e.length;n++){var r=e[n];Array.isArray(r)?l(r):r&&"object"==typeof r&&!h(r)&&(r.props&&r.type||r.attributes&&r.nodeName||r.children)&&(e[n]=d(r.type||r.nodeName,r.props||r.attributes,r.children))}}function f(e){return"function"==typeof e&&!(e.prototype&&e.prototype.render)}function s(e){return w({displayName:e.displayName||e.name,render:function(t,n,r){return e(t,r)}})}function p(e){var t=e[Q];return t?t===!0?e:t:(t=s(e),Object.defineProperty(t,Q,{configurable:!0,value:!0}),t.displayName=e.displayName,t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,Object.defineProperty(e,Q,{configurable:!0,value:t}),t)}function d(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return l(e,2),v(n.h.apply(void 0,e))}function v(e){e.preactCompatNormalized=!0,g(e),f(e.nodeName)&&(e.nodeName=p(e.nodeName));var t=e.attributes.ref,n=t&&typeof t;return!H||"string"!==n&&"number"!==n||(e.attributes.ref=y(t,H)),b(e),e}function m(e,t){for(var r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];if(!h(e))return e;var i=e.attributes||e.props,a=n.h(e.nodeName||e.type,i,e.children||i&&i.children);return v(n.cloneElement.apply(void 0,[a,t].concat(r)))}function h(e){return e&&(e instanceof V||e.$$typeof===W)}function y(e,t){return t._refProxies[e]||(t._refProxies[e]=function(n){t&&t.refs&&(t.refs[e]=n,null===n&&(delete t._refProxies[e],t=null))})}function b(e){var t=e.nodeName,n=e.attributes;if(n&&"string"==typeof t){var r={};for(var o in n)r[o.toLowerCase()]=o;if(r.onchange){t=t.toLowerCase();var i="input"===t&&"checkbox"===String(n.type).toLowerCase()?"onclick":"oninput",a=r[i]||i;n[a]||(n[a]=O([n[r[i]],n[r.onchange]]))}}}function g(e){var t=e.attributes;if(t){var n=t.className||t["class"];n&&(t.className=n)}}function _(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function x(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function N(){}function w(e){function t(t,r){_(this,e),n&&E(this,n),M.call(this,t,r,B),k(this),j.call(this,t,r)}var n=e.mixins&&C(e.mixins);return e.statics&&_(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps()),N.prototype=M.prototype,t.prototype=new N,t.prototype.constructor=t,t.displayName=e.displayName||"Component",t}function C(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(t[o]||(t[o]=[])).push(r[o])}return t}function E(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=O(t[n].concat(e[n]||n)))}function k(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||D.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}function P(e,t,n){if("string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t)return t.apply(e,n)}function O(e){return function(){for(var t,n=arguments,r=this,o=0;o<e.length;o++){var i=P(r,e[o],n);"undefined"!=typeof i&&(t=i)}return t}}function j(e,t){S.call(this,e,t),this.componentWillReceiveProps=O([S,this.componentWillReceiveProps||"componentWillReceiveProps"]),this.render=O([S,T,this.render||"render",A])}function S(e,t){var n=this;if(e){var r=e.children;if(r&&Array.isArray(r)&&1===r.length&&(e.children=r[0],e.children&&"object"==typeof e.children&&(e.children.length=1,e.children[0]=e.children)),$){var o="function"==typeof this?this:this.constructor,i=this.propTypes||o.propTypes;if(i)for(var a in i)if(i.hasOwnProperty(a)&&"function"==typeof i[a]){var u=n.displayName||o.name,c=i[a](e,a,u,"prop");c&&console.error(new Error(c.message||c))}}}}function T(e){H=this}function A(){H===this&&(H=null)}function M(e,t,r){n.Component.call(this,e,t),this.getInitialState&&(this.state=this.getInitialState()),this.refs={},this._refProxies={},r!==B&&j.call(this,e,t)}function R(e,t){M.call(this,e,t)}e="default"in e?e["default"]:e;var U="15.1.0",I="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),W="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,D={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},L=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/,B={},$="undefined"!=typeof t&&t.env&&"production"!==t.env.NODE_ENV,z=function(){return null},V=n.h("").constructor;V.prototype.$$typeof=W,V.prototype.preactCompatUpgraded=!1,V.prototype.preactCompatNormalized=!1,Object.defineProperty(V.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0}),Object.defineProperty(V.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var G=n.options.vnode;n.options.vnode=function(e){if(!e.preactCompatUpgraded){e.preactCompatUpgraded=!0;var t=e.nodeName,n=e.attributes;n||(n=e.attributes={}),"function"==typeof t?(t[Q]===!0||t.prototype&&"isReactComponent"in t.prototype)&&(e.preactCompatNormalized||v(e),r(e)):n&&o(e,n)}G&&G(e)};var q=function(){};q.prototype.getChildContext=function(){return this.props.context},q.prototype.render=function(e){return e.children[0]};for(var H,F=[],Z={map:function(e,t,n){return e=Z.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t)},forEach:function(e,t,n){e=Z.toArray(e),n&&n!==e&&(t=t.bind(n)),e.forEach(t)},count:function(e){return e=Z.toArray(e),e.length},only:function(e){if(e=Z.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return Array.isArray&&Array.isArray(e)?e:F.concat(e)}},J={},K=I.length;K--;)J[I[K]]=c(I[K]);var Q="undefined"!=typeof Symbol?Symbol["for"]("__preactCompatWrapper"):"__preactCompatWrapper",X=function(e){return e&&e.base||e};M.prototype=new n.Component,_(M.prototype,{constructor:M,isReactComponent:{},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),R.prototype=new M({},{},B),R.prototype.shouldComponentUpdate=function(e,t){return x(this.props,e)||x(this.state,t)};var Y={version:U,DOM:J,PropTypes:e,Children:Z,render:i,createClass:w,createFactory:c,createElement:d,cloneElement:m,isValidElement:h,findDOMNode:X,unmountComponentAtNode:u,Component:M,PureComponent:R,unstable_renderSubtreeIntoContainer:a};return Y})}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?v=d.concat(v):h=-1,v.length&&u())}function u(){if(!m){var e=o(a);m=!0;for(var t=v.length;t;){for(d=v,v=[];++h<t;)d&&d[h].run();h=-1,t=v.length}d=null,m=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var f,s,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var d,v=[],m=!1,h=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new c(e,t)),1!==v.length||m||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){var r,o,i;!function(n,a){o=[t,e],r=a,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i))}(this,function(e,t){"use strict";function n(e){var t=e&&(N&&e[N]||e[w]);if("function"==typeof t)return t}function r(e){function t(t,n,r,o,i,a){if(o=o||C,a=a||r,null==n[r]){var u=_[i];return t?new Error("Required "+u+" `"+a+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i,a)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o,i){var a=t[n],u=m(a);if(u!==e){var c=_[o],l=h(a);return new Error("Invalid "+c+" `"+i+"` of type "+("`"+l+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return r(t)}function i(){return r(x.thatReturns(null))}function a(e){function t(t,n,r,o,i){var a=t[n];if(!Array.isArray(a)){var u=_[o],c=m(a);return new Error("Invalid "+u+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected an array."))}for(var l=0;l<a.length;l++){var f=e(a,l,r,o,i+"["+l+"]");if(f instanceof Error)return f}return null}return r(t)}function u(){function e(e,t,n,r,o){if(!g.isValidElement(e[t])){var i=_[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a single ReactElement."))}return null}return r(e)}function c(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=_[o],u=e.name||C,c=y(t[n]);return new Error("Invalid "+a+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("instance of `"+u+"`."))}return null}return r(t)}function l(e){function t(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(a===e[u])return null;var c=_[o],l=JSON.stringify(e);return new Error("Invalid "+c+" `"+i+"` of value `"+a+"` "+("supplied to `"+r+"`, expected one of "+l+"."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.")})}function f(e){function t(t,n,r,o,i){var a=t[n],u=m(a);if("object"!==u){var c=_[o];return new Error("Invalid "+c+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an object."))}for(var l in a)if(a.hasOwnProperty(l)){var f=e(a,l,r,o,i+"."+l);if(f instanceof Error)return f}return null}return r(t)}function s(e){function t(t,n,r,o,i){for(var a=0;a<e.length;a++){var u=e[a];if(null==u(t,n,r,o,i))return null}var c=_[o];return new Error("Invalid "+c+" `"+i+"` supplied to "+("`"+r+"`."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")})}function p(){function e(e,t,n,r,o){if(!v(e[t])){var i=_[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function d(e){function t(t,n,r,o,i){var a=t[n],u=m(a);if("object"!==u){var c=_[o];return new Error("Invalid "+c+" `"+i+"` of type `"+u+"` "+("supplied to `"+r+"`, expected `object`."))}for(var l in e){var f=e[l];if(f){var s=f(a,l,r,o,i+"."+l);if(s)return s}}return null}return r(t)}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||g.isValidElement(e))return!0;var t=n(e);if(!t)return!1;var r,o=t.call(e);if(t!==e.entries){for(;!(r=o.next()).done;)if(!v(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function h(e){var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){return e.constructor&&e.constructor.name?e.constructor.name:C}var b="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,g={};g.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===b};var _={prop:"prop",context:"context",childContext:"child context"},x={thatReturns:function(e){return function(){return e}}},N="function"==typeof Symbol&&Symbol.iterator,w="@@iterator",C="<<anonymous>>",E={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:u(),instanceOf:c,node:p(),objectOf:f,oneOf:l,oneOfType:s,shape:d};t.exports=E})},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var r,o,i,a,u=[];for(a=arguments.length;a-- >2;)B.push(arguments[a]);for(n&&n.children&&(B.length||B.push(n.children),delete n.children);B.length;)if((o=B.pop())instanceof Array)for(a=o.length;a--;)B.push(o[a]);else null!=o&&o!==!1&&("number"!=typeof o&&o!==!0||(o=String(o)),i="string"==typeof o,i&&r?u[u.length-1]+=o:(u.push(o),r=i));var c=new t(e,n||void 0,u);return L.vnode&&L.vnode(c),c}function r(e,t){if(t)for(var n in t)e[n]=t[n];return e}function o(e){return r({},e)}function i(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function a(e){return"function"==typeof e}function u(e){return"string"==typeof e}function c(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function l(e,t){return n(e.nodeName,r(o(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function f(e,t,n){var r=t.split("."),o=r[0];return function(t){var a,c,l=t&&t.currentTarget||this,f=e.state,s=f,p=u(n)?i(t,n):l.nodeName?(l.nodeName+l.type).match(/^input(che|rad)/i)?l.checked:l.value:t;if(r.length>1){for(c=0;c<r.length-1;c++)s=s[r[c]]||(s[r[c]]={});s[r[c]]=p,p=f[o]}e.setState((a={},a[o]=p,a))}}function s(e){!e._dirty&&(e._dirty=!0)&&1==J.push(e)&&(L.debounceRendering||G)(p)}function p(){var e,t=J;for(J=[];e=t.pop();)e._dirty&&R(e)}function d(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function v(e,t){return e.nodeName(y(e),t||q)}function m(e,t){return u(t)?e instanceof Text:u(t.nodeName)?h(e,t.nodeName):a(t.nodeName)?e._componentConstructor===t.nodeName||d(t):void 0}function h(e,t){return e.normalizedNodeName===t||z(e.nodeName)===z(t)}function y(e){var t=o(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function g(e,t,n,r,o){if("className"===t&&(t="class"),"class"===t&&r&&"object"==typeof r&&(r=c(r)),"key"===t);else if("class"!==t||o)if("style"===t){if((!r||u(r)||u(n))&&(e.style.cssText=r||""),r&&"object"==typeof r){if(!u(n))for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"!=typeof r[i]||F[i]?r[i]:r[i]+"px"}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html);else if("o"==t[0]&&"n"==t[1]){var l=e._listeners||(e._listeners={});t=z(t.substring(2)),r?l[t]||e.addEventListener(t,x,!!Z[t]):l[t]&&e.removeEventListener(t,x,!!Z[t]),l[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)_(e,t,null==r?"":r),null!=r&&r!==!1||e.removeAttribute(t);else{var f=o&&t.match(/^xlink\:?(.+)/);null==r||r===!1?f?e.removeAttributeNS("http://www.w3.org/1999/xlink",z(f[1])):e.removeAttribute(t):"object"==typeof r||a(r)||(f?e.setAttributeNS("http://www.w3.org/1999/xlink",z(f[1]),r):e.setAttribute(t,r))}else e.className=r||""}function _(e,t,n){try{e[t]=n}catch(r){}}function x(e){return this._listeners[e.type](L.event&&L.event(e)||e)}function N(e){if(b(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||z(e.nodeName);(K[t]||(K[t]=[])).push(e)}}function w(e,t){var n=z(e),r=K[n]&&K[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return r.normalizedNodeName=n,r}function C(){for(var e;e=Q.pop();)e.componentDidMount&&e.componentDidMount()}function E(e,t,n,r,o,i){X++||(Y=o instanceof SVGElement);var a=k(e,t,n,r);return o&&a.parentNode!==o&&o.appendChild(a),--X||i||C(),a}function k(e,t,n,r){for(var o=t&&t.attributes;d(t);)t=v(t,n);if(null==t&&(t=""),u(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue=t,e;j(e)}return document.createTextNode(t)}if(a(t.nodeName))return U(e,t,n,r);var i=e,c=t.nodeName,l=Y;if(u(c)||(c=String(c)),Y="svg"===c||"foreignObject"!==c&&Y,e){if(!h(e,c)){for(i=w(c,Y);e.firstChild;)i.appendChild(e.firstChild);j(e)}}else i=w(c,Y);t.children&&1===t.children.length&&"string"==typeof t.children[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue=t.children[0]:(t.children&&t.children.length||i.firstChild)&&P(i,t.children,n,r);var f=i[H];if(!f){i[H]=f={};for(var s=i.attributes,p=s.length;p--;)f[s[p].name]=s[p].value}return S(i,t.attributes,f),o&&"function"==typeof o.ref&&(f.ref=o.ref)(i),Y=l,i}function P(e,t,n,r){var o,i,u,c,l=e.childNodes,f=[],s={},p=0,d=0,v=l.length,h=0,y=t&&t.length;if(v)for(var b=0;b<v;b++){var g=l[b],_=y?(i=g._component)?i.__key:(i=g[H])?i.key:null:null;_||0===_?(p++,s[_]=g):f[h++]=g}if(y)for(var b=0;b<y;b++){u=t[b],c=null;var _=u.key;if(null!=_)p&&_ in s&&(c=s[_],s[_]=void 0,p--);else if(!c&&d<h){for(o=d;o<h;o++)if(i=f[o],i&&m(i,u)){c=i,f[o]=void 0,o===h-1&&h--,o===d&&d++;break}!c&&d<h&&a(u.nodeName)&&r&&(c=f[d],f[d++]=void 0)}c=k(c,u,n,r),c&&c!==e&&c!==l[b]&&e.insertBefore(c,l[b]||null)}if(p)for(var b in s)s[b]&&j(s[b]);d<h&&O(f)}function O(e,t){for(var n=e.length;n--;)e[n]&&j(e[n],t)}function j(e,t){var n=e._component;n?I(n,!t):(e[H]&&e[H].ref&&e[H].ref(null),t||N(e),e.childNodes&&e.childNodes.length&&O(e.childNodes,t))}function S(e,t,n){for(var r in n)t&&r in t||null==n[r]||g(e,r,n[r],n[r]=void 0,Y);if(t)for(var o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||g(e,o,n[o],n[o]=t[o],Y)}function T(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function A(e,t,n){var r=new e(t,n),o=ee[e.name];if(W.call(r,t,n),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function M(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&L.syncComponentUpdates===!1&&e.base?s(e):R(e,1,o)),e.__ref&&e.__ref(e))}function R(e,t,n,i){if(!e._disable){var u,c,l,f,s=e.props,p=e.state,m=e.context,h=e.prevProps||s,b=e.prevState||p,g=e.prevContext||m,_=e.base,x=e.nextBase,N=_||x,w=e._component;if(_&&(e.props=h,e.state=b,e.context=g,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(s,p,m)===!1?u=!0:e.componentWillUpdate&&e.componentWillUpdate(s,p,m),e.props=s,e.state=p,e.context=m),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!u){for(e.render&&(c=e.render(s,p,m)),e.getChildContext&&(m=r(o(m),e.getChildContext()));d(c);)c=v(c,m);var k,P,O=c&&c.nodeName;if(a(O)){l=w;var S=y(c);l&&l.constructor===O?M(l,S,1,m):(k=l,l=A(O,S,m),l.nextBase=l.nextBase||x,l._parentComponent=e,e._component=l,M(l,S,0,m),R(l,1,n,!0)),P=l.base}else f=N,k=w,k&&(f=e._component=null),(N||1===t)&&(f&&(f._component=null),P=E(f,c,m,n||!_,N&&N.parentNode,!0));if(N&&P!==N&&l!==w){var T=N.parentNode;T&&P!==T&&T.replaceChild(P,N),f||k||!e._parentComponent||(N._component=null,j(N))}if(k&&I(k,P!==N),e.base=P,P&&!i){for(var U=e,W=e;W=W._parentComponent;)U=W;P._component=U,P._componentConstructor=U.constructor}}!_||n?Q.unshift(e):!u&&e.componentDidUpdate&&e.componentDidUpdate(h,b,g);var D,L=e._renderCallbacks;if(L)for(;D=L.pop();)D.call(e);X||i||C()}}function U(e,t,n,r){for(var o=e&&e._component,i=e,a=o&&e._componentConstructor===t.nodeName,u=a,c=y(t);o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;return o&&u&&(!r||o._component)?(M(o,c,3,n,r),e=o.base):(o&&!a&&(I(o,!0),e=i=null),o=A(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e),M(o,c,1,n,r),e=o.base,i&&e!==i&&(i._component=null,j(i))),e}function I(e,t){var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?I(r,t):n&&(n[H]&&n[H].ref&&n[H].ref(null),e.nextBase=n,t&&(b(n),T(e)),O(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function W(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function D(e,t,n){return E(n,e,{},!1,t)}var L={},B=[],$={},z=function(e){return $[e]||($[e]=e.toLowerCase())},V="undefined"!=typeof Promise&&Promise.resolve(),G=V?function(e){V.then(e)}:setTimeout,q={},H="undefined"!=typeof Symbol?Symbol["for"]("preactattr"):"__preactattr_",F={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},Z={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},J=[],K={},Q=[],X=0,Y=!1,ee={};r(W.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=f(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=o(n)),r(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(){R(this,2)},render:function(){}}),e.h=n,e.cloneElement=l,e.Component=W,e.render=D,e.rerender=p,e.options=L})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),f=n(6),s=r(f),p=n(22),d=r(p),v=n(24),m=r(v);n(27);var h=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("header",{className:"navigation"},l["default"].createElement(d["default"],{className:"navigation__inner"},l["default"].createElement("div",{className:"navigation__mobile",onClick:this._toggleSidebar},l["default"].createElement("i",{className:"icon-menu"})),l["default"].createElement(s["default"],{className:"navigation__logo",to:"/"},l["default"].createElement(m["default"],{light:!0})),l["default"].createElement("nav",{className:"navigation__links"},this.props.pages.map(function(e,t){var n=window.location.pathname,r=n==="/"+e.url||n.includes("/"+e.url+"/"),o=r?"navigation__link--active":"";return l["default"].createElement(s["default"],{key:"navigation__link"+t,className:"navigation__link "+o,to:"/"+e.url},e.title)}))))}},{key:"_toggleSidebar",value:function(e){var t=document.querySelector(".sidebar"),n="sidebar--visible";t.classList.toggle(n)}}]),t}(l["default"].Component);t["default"]=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),u=r(a),c=n(7),l=r(c),f=function(e){var t=e.to,n=o(e,["to"]);return(0,l["default"])(t,"http")||(0,l["default"])(t,"//")?u["default"].createElement("a",i({href:t,target:"_blank"},n)):u["default"].createElement("a",i({href:t},n))};t["default"]=f},function(e,t,n){function r(e,t,n){return e=u(e),n=o(a(n),0,e.length),t=i(t),e.slice(n,n+t.length)==t}var o=n(8),i=n(9),a=n(17),u=n(21);e.exports=r},function(e,t){function n(e,t,n){return e===e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}e.exports=n},function(e,t,n){function r(e){if("string"==typeof e)return e;if(a(e))return i(e,r)+"";if(u(e))return f?f.call(e):"";var t=e+"";return"0"==t&&1/e==-c?"-0":t}var o=n(10),i=n(13),a=n(14),u=n(15),c=1/0,l=o?o.prototype:void 0,f=l?l.toString:void 0;e.exports=r},function(e,t,n){var r=n(11),o=r.Symbol;e.exports=o},function(e,t,n){var r=n(12),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t){function n(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){function r(e){return"symbol"==typeof e||o(e)&&u.call(e)==i}var o=n(16),i="[object Symbol]",a=Object.prototype,u=a.toString;e.exports=r},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){function r(e){var t=o(e),n=t%1;return t===t?n?t-n:t:0}var o=n(18);e.exports=r},function(e,t,n){function r(e){if(!e)return 0===e?e:0;if(e=o(e),e===i||e===-i){var t=e<0?-1:1;return t*a}return e===e?e:0}var o=n(19),i=1/0,a=1.7976931348623157e308;e.exports=r},function(e,t,n){function r(e){if("number"==typeof e)return e;if(i(e))return a;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=l.test(e);return n||f.test(e)?s(e.slice(2),n?2:8):c.test(e)?a:+e}var o=n(20),i=n(15),a=NaN,u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt;e.exports=r},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){function r(e){return null==e?"":o(e)}var o=n(9);e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o);n(23),t["default"]=function(e){var t=e.className,n=void 0===t?"":t;return i["default"].createElement("div",{className:"container "+n},e.children)}},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(25),u=r(a);n(26),t["default"]=function(e){var t=e.light;return i["default"].createElement("span",{className:"logo"+(t?" logo--light":"")},i["default"].createElement("img",{className:"logo__icon",src:u["default"]}),i["default"].createElement("span",{className:"logo__text"},"webpack"))}},function(e,t,n){e.exports=n.p+"7291f7007988120cc0b20372736970c2.png"},function(e,t){},function(e,t){}]);