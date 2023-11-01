"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9112],{488:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2265);function o(){let[,e]=(0,r.useReducer)(e=>!e,!1);return e}},1271:function(e,t,n){var r=n(2265);let o=e=>e&&"function"!=typeof e?t=>{e.current=t}:e;t.Z=function(e,t){return(0,r.useMemo)(()=>(function(e,t){let n=o(e),r=o(t);return e=>{n&&n(e),r&&r(e)}})(e,t),[e,t])}},9861:function(e,t,n){function r(e){return`data-rr-ui-${e}`}function o(e){return`rrUi${e}`}n.d(t,{$F:function(){return o},PB:function(){return r}})},8192:function(e,t,n){var r=n(2265);let o=r.createContext(null);t.Z=o},7352:function(e,t,n){n.d(t,{Z:function(){return eW},d:function(){return eT}});var r,o,i,a,s,u=n(2265),c=n(2375),l=n(8192),f=Object.prototype.hasOwnProperty;function d(e,t,n){for(n of e.keys())if(p(n,t))return n}function p(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&p(e[r],t[r]););return -1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if((o=r)&&"object"==typeof o&&!(o=d(t,o))||!t.has(o))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if((o=r[0])&&"object"==typeof o&&!(o=d(t,o))||!p(r[1],t.get(o)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return -1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return -1===r}if(!n||"object"==typeof e){for(n in r=0,e)if(f.call(e,n)&&++r&&!f.call(t,n)||!(n in t)||!p(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!=e&&t!=t}var m=n(1823),v=function(e){let t=(0,m.Z)();return[e[0],(0,u.useCallback)(n=>{if(t())return e[1](n)},[t,e[1]])]};function h(e){return e.split("-")[0]}function g(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function y(e){var t=g(e).Element;return e instanceof t||e instanceof Element}function b(e){var t=g(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function w(e){if("undefined"==typeof ShadowRoot)return!1;var t=g(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var x=Math.max,O=Math.min,E=Math.round;function j(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Z(){return!/^((?!chrome|android).)*safari/i.test(j())}function C(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&b(e)&&(o=e.offsetWidth>0&&E(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&E(r.height)/e.offsetHeight||1);var a=(y(e)?g(e):window).visualViewport,s=!Z()&&n,u=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,l=r.width/o,f=r.height/i;return{width:l,height:f,top:c,right:u+l,bottom:c+f,left:u,x:u,y:c}}function D(e){var t=C(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function k(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&w(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function A(e){return e?(e.nodeName||"").toLowerCase():null}function P(e){return g(e).getComputedStyle(e)}function S(e){return((y(e)?e.ownerDocument:e.document)||window.document).documentElement}function R(e){return"html"===A(e)?e:e.assignedSlot||e.parentNode||(w(e)?e.host:null)||S(e)}function L(e){return b(e)&&"fixed"!==P(e).position?e.offsetParent:null}function M(e){for(var t=g(e),n=L(e);n&&["table","td","th"].indexOf(A(n))>=0&&"static"===P(n).position;)n=L(n);return n&&("html"===A(n)||"body"===A(n)&&"static"===P(n).position)?t:n||function(e){var t=/firefox/i.test(j());if(/Trident/i.test(j())&&b(e)&&"fixed"===P(e).position)return null;var n=R(e);for(w(n)&&(n=n.host);b(n)&&0>["html","body"].indexOf(A(n));){var r=P(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function N(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function T(e,t,n){return x(e,O(t,n))}function _(){return{top:0,right:0,bottom:0,left:0}}function W(e){return Object.assign({},_(),e)}function B(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var $="bottom",I="right",H="left",V="auto",U=["top",$,I,H],q="start",F="viewport",z="popper",K=U.reduce(function(e,t){return e.concat([t+"-"+q,t+"-end"])},[]),J=[].concat(U,[V]).reduce(function(e,t){return e.concat([t,t+"-"+q,t+"-end"])},[]),Y=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function X(e){return e.split("-")[1]}var G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,n,r,o,i,a,s,u=e.popper,c=e.popperRect,l=e.placement,f=e.variation,d=e.offsets,p=e.position,m=e.gpuAcceleration,v=e.adaptive,h=e.roundOffsets,y=e.isFixed,b=d.x,w=void 0===b?0:b,x=d.y,O=void 0===x?0:x,j="function"==typeof h?h({x:w,y:O}):{x:w,y:O};w=j.x,O=j.y;var Z=d.hasOwnProperty("x"),C=d.hasOwnProperty("y"),D=H,k="top",A=window;if(v){var R=M(u),L="clientHeight",N="clientWidth";R===g(u)&&"static"!==P(R=S(u)).position&&"absolute"===p&&(L="scrollHeight",N="scrollWidth"),("top"===l||(l===H||l===I)&&"end"===f)&&(k=$,O-=(y&&R===A&&A.visualViewport?A.visualViewport.height:R[L])-c.height,O*=m?1:-1),(l===H||("top"===l||l===$)&&"end"===f)&&(D=I,w-=(y&&R===A&&A.visualViewport?A.visualViewport.width:R[N])-c.width,w*=m?1:-1)}var T=Object.assign({position:p},v&&G),_=!0===h?(t={x:w,y:O},n=g(u),r=t.x,o=t.y,{x:E(r*(i=n.devicePixelRatio||1))/i||0,y:E(o*i)/i||0}):{x:w,y:O};return(w=_.x,O=_.y,m)?Object.assign({},T,((s={})[k]=C?"0":"",s[D]=Z?"0":"",s.transform=1>=(A.devicePixelRatio||1)?"translate("+w+"px, "+O+"px)":"translate3d("+w+"px, "+O+"px, 0)",s)):Object.assign({},T,((a={})[k]=C?O+"px":"",a[D]=Z?w+"px":"",a.transform="",a))}var ee={passive:!0},et={left:"right",right:"left",bottom:"top",top:"bottom"};function en(e){return e.replace(/left|right|bottom|top/g,function(e){return et[e]})}var er={start:"end",end:"start"};function eo(e){return e.replace(/start|end/g,function(e){return er[e]})}function ei(e){var t=g(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ea(e){return C(S(e)).left+ei(e).scrollLeft}function es(e){var t=P(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function eu(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(A(t))>=0?t.ownerDocument.body:b(t)&&es(t)?t:e(R(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=g(r),a=o?[i].concat(i.visualViewport||[],es(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(eu(R(a)))}function ec(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function el(e,t,n){var r,o,i,a,s,u,c,l,f,d;return t===F?ec(function(e,t){var n=g(e),r=S(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,u=0;if(o){i=o.width,a=o.height;var c=Z();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:s+ea(e),y:u}}(e,n)):y(t)?((r=C(t,!1,"fixed"===n)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):ec((o=S(e),a=S(o),s=ei(o),u=null==(i=o.ownerDocument)?void 0:i.body,c=x(a.scrollWidth,a.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),l=x(a.scrollHeight,a.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),f=-s.scrollLeft+ea(o),d=-s.scrollTop,"rtl"===P(u||a).direction&&(f+=x(a.clientWidth,u?u.clientWidth:0)-c),{width:c,height:l,x:f,y:d}))}function ef(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?h(o):null,a=o?X(o):null,s=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case $:t={x:s,y:n.y+n.height};break;case I:t={x:n.x+n.width,y:u};break;case H:t={x:n.x-r.width,y:u};break;default:t={x:n.x,y:n.y}}var c=i?N(i):null;if(null!=c){var l="y"===c?"height":"width";switch(a){case q:t[c]=t[c]-(n[l]/2-r[l]/2);break;case"end":t[c]=t[c]+(n[l]/2-r[l]/2)}}return t}function ed(e,t){void 0===t&&(t={});var n,r,o,i,a,s,u,c=t,l=c.placement,f=void 0===l?e.placement:l,d=c.strategy,p=void 0===d?e.strategy:d,m=c.boundary,v=c.rootBoundary,h=c.elementContext,g=void 0===h?z:h,w=c.altBoundary,E=c.padding,j=void 0===E?0:E,Z=W("number"!=typeof j?j:B(j,U)),D=e.rects.popper,L=e.elements[void 0!==w&&w?g===z?"reference":z:g],N=(n=y(L)?L:L.contextElement||S(e.elements.popper),s=(a=[].concat("clippingParents"===(r=void 0===m?"clippingParents":m)?(o=eu(R(n)),y(i=["absolute","fixed"].indexOf(P(n).position)>=0&&b(n)?M(n):n)?o.filter(function(e){return y(e)&&k(e,i)&&"body"!==A(e)}):[]):[].concat(r),[void 0===v?F:v]))[0],(u=a.reduce(function(e,t){var r=el(n,t,p);return e.top=x(r.top,e.top),e.right=O(r.right,e.right),e.bottom=O(r.bottom,e.bottom),e.left=x(r.left,e.left),e},el(n,s,p))).width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u),T=C(e.elements.reference),_=ef({reference:T,element:D,strategy:"absolute",placement:f}),H=ec(Object.assign({},D,_)),V=g===z?H:T,q={top:N.top-V.top+Z.top,bottom:V.bottom-N.bottom+Z.bottom,left:N.left-V.left+Z.left,right:V.right-N.right+Z.right},K=e.modifiersData.offset;if(g===z&&K){var J=K[f];Object.keys(q).forEach(function(e){var t=[I,$].indexOf(e)>=0?1:-1,n=["top",$].indexOf(e)>=0?"y":"x";q[e]+=J[n]*t})}return q}function ep(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function em(e){return["top",I,$,H].some(function(t){return e[t]>=0})}var ev={placement:"bottom",modifiers:[],strategy:"absolute"};function eh(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}let eg=(i=void 0===(o=(r={defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ed(t,{elementContext:"reference"}),s=ed(t,{altBoundary:!0}),u=ep(a,r),c=ep(s,o,i),l=em(u),f=em(c);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ef({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:h(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,u=g(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(e){e.addEventListener("scroll",n.update,ee)}),s&&u.addEventListener("resize",n.update,ee),function(){i&&c.forEach(function(e){e.removeEventListener("scroll",n.update,ee)}),s&&u.removeEventListener("resize",n.update,ee)}},data:{}},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=J.reduce(function(e,n){var r,o,a,s,u,c;return e[n]=(r=t.rects,a=[H,"top"].indexOf(o=h(n))>=0?-1:1,u=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],c=s[1],u=u||0,c=(c||0)*a,[H,I].indexOf(o)>=0?{x:c,y:u}:{x:u,y:c}),e},{}),s=a[t.placement],u=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,u=n.fallbackPlacements,c=n.padding,l=n.boundary,f=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=void 0===p||p,v=n.allowedAutoPlacements,g=t.options.placement,y=h(g)===g,b=u||(y||!m?[en(g)]:function(e){if(h(e)===V)return[];var t=en(e);return[eo(e),t,eo(t)]}(g)),w=[g].concat(b).reduce(function(e,n){var r,o,i,a,s,u,d,p,g,y,b,w;return e.concat(h(n)===V?(o=(r={placement:n,boundary:l,rootBoundary:f,padding:c,flipVariations:m,allowedAutoPlacements:v}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,u=r.flipVariations,p=void 0===(d=r.allowedAutoPlacements)?J:d,0===(b=(y=(g=X(o))?u?K:K.filter(function(e){return X(e)===g}):U).filter(function(e){return p.indexOf(e)>=0})).length&&(b=y),Object.keys(w=b.reduce(function(e,n){return e[n]=ed(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[h(n)],e},{})).sort(function(e,t){return w[e]-w[t]})):n)},[]),x=t.rects.reference,O=t.rects.popper,E=new Map,j=!0,Z=w[0],C=0;C<w.length;C++){var D=w[C],k=h(D),A=X(D)===q,P=["top",$].indexOf(k)>=0,S=P?"width":"height",R=ed(t,{placement:D,boundary:l,rootBoundary:f,altBoundary:d,padding:c}),L=P?A?I:H:A?$:"top";x[S]>O[S]&&(L=en(L));var M=en(L),N=[];if(i&&N.push(R[k]<=0),s&&N.push(R[L]<=0,R[M]<=0),N.every(function(e){return e})){Z=D,j=!1;break}E.set(D,N)}if(j)for(var T=m?3:1,_=function(e){var t=w.find(function(t){var n=E.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return Z=t,"break"},W=T;W>0&&"break"!==_(W);W--);t.placement!==Z&&(t.modifiersData[r]._skip=!0,t.placement=Z,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,u=n.altBoundary,c=n.padding,l=n.tether,f=void 0===l||l,d=n.tetherOffset,p=void 0===d?0:d,m=ed(t,{boundary:a,rootBoundary:s,padding:c,altBoundary:u}),v=h(t.placement),g=X(t.placement),y=!g,b=N(v),w="x"===b?"y":"x",E=t.modifiersData.popperOffsets,j=t.rects.reference,Z=t.rects.popper,C="function"==typeof p?p(Object.assign({},t.rects,{placement:t.placement})):p,k="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(E){if(void 0===o||o){var S,R="y"===b?"top":H,L="y"===b?$:I,W="y"===b?"height":"width",B=E[b],V=B+m[R],U=B-m[L],F=f?-Z[W]/2:0,z=g===q?j[W]:Z[W],K=g===q?-Z[W]:-j[W],J=t.elements.arrow,Y=f&&J?D(J):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:_(),Q=G[R],ee=G[L],et=T(0,j[W],Y[W]),en=y?j[W]/2-F-et-Q-k.mainAxis:z-et-Q-k.mainAxis,er=y?-j[W]/2+F+et+ee+k.mainAxis:K+et+ee+k.mainAxis,eo=t.elements.arrow&&M(t.elements.arrow),ei=eo?"y"===b?eo.clientTop||0:eo.clientLeft||0:0,ea=null!=(S=null==A?void 0:A[b])?S:0,es=B+en-ea-ei,eu=B+er-ea,ec=T(f?O(V,es):V,B,f?x(U,eu):U);E[b]=ec,P[b]=ec-B}if(void 0!==i&&i){var el,ef,ep="x"===b?"top":H,em="x"===b?$:I,ev=E[w],eh="y"===w?"height":"width",eg=ev+m[ep],ey=ev-m[em],eb=-1!==["top",H].indexOf(v),ew=null!=(ef=null==A?void 0:A[w])?ef:0,ex=eb?eg:ev-j[eh]-Z[eh]-ew+k.altAxis,eO=eb?ev+j[eh]+Z[eh]-ew-k.altAxis:ey,eE=f&&eb?(el=T(ex,ev,eO))>eO?eO:el:T(f?ex:eg,ev,f?eO:ey);E[w]=eE,P[w]=eE-ev}t.modifiersData[r]=P}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,u=h(r.placement),c=N(u),l=[H,I].indexOf(u)>=0?"height":"width";if(a&&s){var f=W("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:B(t,U)),d=D(a),p="y"===c?"top":H,m="y"===c?$:I,v=r.rects.reference[l]+r.rects.reference[c]-s[c]-r.rects.popper[l],g=s[c]-r.rects.reference[c],y=M(a),b=y?"y"===c?y.clientHeight||0:y.clientWidth||0:0,w=f[p],x=b-d[l]-f[m],O=b/2-d[l]/2+(v/2-g/2),E=T(w,O,x);r.modifiersData[o]=((n={})[c]=E,n.centerOffset=E-O,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&k(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}]}).defaultModifiers)?[]:o,s=void 0===(a=r.defaultOptions)?ev:a,function(e,t,n){void 0===n&&(n=s);var r,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ev,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],u=!1,c={state:o,setOptions:function(n){var r,u,f,d,p,m="function"==typeof n?n(o.options):n;l(),o.options=Object.assign({},s,o.options,m),o.scrollParents={reference:y(e)?eu(e):e.contextElement?eu(e.contextElement):[],popper:eu(t)};var v=(u=Object.keys(r=[].concat(i,o.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),f=new Map,d=new Set,p=[],u.forEach(function(e){f.set(e.name,e)}),u.forEach(function(e){d.has(e.name)||function e(t){d.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!d.has(t)){var n=f.get(t);n&&e(n)}}),p.push(t)}(e)}),Y.reduce(function(e,t){return e.concat(p.filter(function(e){return e.phase===t}))},[]));return o.orderedModifiers=v.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var i=r({state:o,name:t,instance:c,options:void 0===n?{}:n});a.push(i||function(){})}}),c.update()},forceUpdate:function(){if(!u){var e,t,n,r,i,a,s,l,f,d,p,m,v=o.elements,h=v.reference,y=v.popper;if(eh(h,y)){o.rects={reference:(t=M(y),n="fixed"===o.options.strategy,r=b(t),l=b(t)&&(a=E((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=E(i.height)/t.offsetHeight||1,1!==a||1!==s),f=S(t),d=C(h,l,n),p={scrollLeft:0,scrollTop:0},m={x:0,y:0},(r||!r&&!n)&&(("body"!==A(t)||es(f))&&(p=(e=t)!==g(e)&&b(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:ei(e)),b(t)?(m=C(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):f&&(m.x=ea(f))),{x:d.left+p.scrollLeft-m.x,y:d.top+p.scrollTop-m.y,width:d.width,height:d.height}),popper:D(y)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var w=0;w<o.orderedModifiers.length;w++){if(!0===o.reset){o.reset=!1,w=-1;continue}var x=o.orderedModifiers[w],O=x.fn,j=x.options,Z=void 0===j?{}:j,k=x.name;"function"==typeof O&&(o=O({state:o,options:Z,name:k,instance:c})||o)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){c.forceUpdate(),e(o)}))})})),r},destroy:function(){l(),u=!0}};if(!eh(e,t))return c;function l(){a.forEach(function(e){return e()}),a=[]}return c.setOptions(n).then(function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)}),c}),ey=["enabled","placement","strategy","modifiers"],eb={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>void 0},ew={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{let{reference:t,popper:n}=e.elements;if("removeAttribute"in t){let e=(t.getAttribute("aria-describedby")||"").split(",").filter(e=>e.trim()!==n.id);e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;let{popper:n,reference:r}=e.elements,o=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===o&&"setAttribute"in r){let e=r.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(n.id))return;r.setAttribute("aria-describedby",e?`${e},${n.id}`:n.id)}}},ex=[];var eO=function(e,t,n={}){let{enabled:r=!0,placement:o="bottom",strategy:i="absolute",modifiers:a=ex}=n,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,ey),c=(0,u.useRef)(a),l=(0,u.useRef)(),f=(0,u.useCallback)(()=>{var e;null==(e=l.current)||e.update()},[]),d=(0,u.useCallback)(()=>{var e;null==(e=l.current)||e.forceUpdate()},[]),[m,h]=v((0,u.useState)({placement:o,update:f,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),g=(0,u.useMemo)(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{let t={},n={};Object.keys(e.elements).forEach(r=>{t[r]=e.styles[r],n[r]=e.attributes[r]}),h({state:e,styles:t,attributes:n,update:f,forceUpdate:d,placement:e.placement})}}),[f,d,h]),y=(0,u.useMemo)(()=>(p(c.current,a)||(c.current=a),c.current),[a]);return(0,u.useEffect)(()=>{l.current&&r&&l.current.setOptions({placement:o,strategy:i,modifiers:[...y,g,eb]})},[i,o,g,r,y]),(0,u.useEffect)(()=>{if(r&&null!=e&&null!=t)return l.current=eg(e,t,Object.assign({},s,{placement:o,strategy:i,modifiers:[...y,ew,g]})),()=>{null!=l.current&&(l.current.destroy(),l.current=void 0,h(e=>Object.assign({},e,{attributes:{},styles:{popper:{}}})))}},[r,e,t]),m},eE=n(1535),ej=n(7966),eZ=n(3931),eC=n(5113),eD=n(267),ek=n.n(eD);let eA=()=>{},eP=e=>e&&("current"in e?e.current:e),eS={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};var eR=function(e,t=eA,{disabled:n,clickTrigger:r="click"}={}){let o=(0,u.useRef)(!1),i=(0,u.useRef)(!1),a=(0,u.useCallback)(t=>{let n=eP(e);ek()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!n||!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)||0!==t.button||!!(0,eE.Z)(n,t.target)||i.current,i.current=!1},[e]),s=(0,eC.Z)(t=>{let n=eP(e);n&&(0,eE.Z)(n,t.target)&&(i.current=!0)}),c=(0,eC.Z)(e=>{o.current||t(e)});(0,u.useEffect)(()=>{var t,o;if(n||null==e)return;let i=(0,eZ.Z)(eP(e)),u=i.defaultView||window,l=null!=(t=u.event)?t:null==(o=u.parent)?void 0:o.event,f=null;eS[r]&&(f=(0,ej.Z)(i,eS[r],s,!0));let d=(0,ej.Z)(i,r,a,!0),p=(0,ej.Z)(i,r,e=>{if(e===l){l=void 0;return}c(e)}),m=[];return"ontouchstart"in i.documentElement&&(m=[].slice.call(i.body.children).map(e=>(0,ej.Z)(e,"mousemove",eA))),()=>{null==f||f(),d(),p(),m.forEach(e=>e())}},[e,n,r,a,s,c])},eL=n(7437);let eM=["children"],eN=()=>{};function eT(e={}){let t=(0,u.useContext)(l.Z),[n,r]=(0,c.Z)(),o=(0,u.useRef)(!1),{flip:i,offset:a,rootCloseEvent:s,fixed:f=!1,placement:d,popperConfig:p={},enableEventListeners:m=!0,usePopper:v=!!t}=e,h=(null==t?void 0:t.show)==null?!!e.show:t.show;h&&!o.current&&(o.current=!0);let{placement:g,setMenu:y,menuElement:b,toggleElement:w}=t||{},x=eO(w,b,function({enabled:e,enableEvents:t,placement:n,flip:r,offset:o,fixed:i,containerPadding:a,arrowElement:s,popperConfig:u={}}){var c,l,f,d,p;let m=function(e){let t={};return Array.isArray(e)?(null==e||e.forEach(e=>{t[e.name]=e}),t):e||t}(u.modifiers);return Object.assign({},u,{placement:n,enabled:e,strategy:i?"fixed":u.strategy,modifiers:function(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}(Object.assign({},m,{eventListeners:{enabled:t,options:null==(c=m.eventListeners)?void 0:c.options},preventOverflow:Object.assign({},m.preventOverflow,{options:a?Object.assign({padding:a},null==(l=m.preventOverflow)?void 0:l.options):null==(f=m.preventOverflow)?void 0:f.options}),offset:{options:Object.assign({offset:o},null==(d=m.offset)?void 0:d.options)},arrow:Object.assign({},m.arrow,{enabled:!!s,options:Object.assign({},null==(p=m.arrow)?void 0:p.options,{element:s})}),flip:Object.assign({enabled:!!r},m.flip)}))})}({placement:d||g||"bottom-start",enabled:v,enableEvents:null==m?h:m,offset:a,flip:i,fixed:f,arrowElement:n,popperConfig:p})),O=Object.assign({ref:y||eN,"aria-labelledby":null==w?void 0:w.id},x.attributes.popper,{style:x.styles.popper}),E={show:h,placement:g,hasShown:o.current,toggle:null==t?void 0:t.toggle,popper:v?x:null,arrowProps:v?Object.assign({ref:r},x.attributes.arrow,{style:x.styles.arrow}):{}};return eR(b,e=>{null==t||t.toggle(!1,e)},{clickTrigger:s,disabled:!h}),[O,E]}function e_(e){let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,eM),[r,o]=eT(n);return(0,eL.jsx)(eL.Fragment,{children:t(r,o)})}e_.displayName="DropdownMenu",e_.defaultProps={usePopper:!0};var eW=e_},2168:function(e,t,n){n.d(t,{Jr:function(){return c},bt:function(){return s}});var r=n(2265),o=n(4256),i=n(8192),a=n(7437);let s=e=>{var t;return(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())==="menu"},u=()=>{};function c(){let e=(0,o.gP)(),{show:t=!1,toggle:n=u,setToggle:a,menuElement:c}=(0,r.useContext)(i.Z)||{},l=(0,r.useCallback)(e=>{n(!t,e)},[t,n]),f={id:e,ref:a||u,onClick:l,"aria-expanded":!!t};return c&&s(c)&&(f["aria-haspopup"]=!0),[f,{show:t,toggle:n}]}function l({children:e}){let[t,n]=c();return(0,a.jsx)(a.Fragment,{children:e(t,n)})}l.displayName="DropdownToggle",t.ZP=l},6123:function(e,t,n){var r=n(2265);let o=r.createContext(null);o.displayName="NavContext",t.Z=o},1066:function(e,t,n){n.d(t,{h:function(){return i}});var r=n(2265);let o=r.createContext(null),i=(e,t=null)=>null!=e?String(e):t||null;t.Z=o},4462:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2265),o=n(6857);let i=(0,r.createContext)(o.Z?window:void 0);function a(){return(0,r.useContext)(i)}i.Provider},5739:function(e,t,n){n.d(t,{$c:function(){return o}});var r=n(2265);function o(e,t,n){let o=(0,r.useRef)(void 0!==e),[i,a]=(0,r.useState)(t),s=void 0!==e,u=o.current;return o.current=s,!s&&u&&i!==t&&a(t),[s?e:i,(0,r.useCallback)((...e)=>{let[t,...r]=e,o=null==n?void 0:n(t,...r);return a(t),o},[n])]}},6537:function(e,t,n){var r=n(6857),o=!1,i=!1;try{var a={get passive(){return o=!0},get once(){return i=o=!0}};r.Z&&(window.addEventListener("test",a,a),window.removeEventListener("test",a,!0))}catch(e){}t.ZP=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!i){var a=r.once,s=r.capture,u=n;!i&&a&&(u=n.__once||function e(r){this.removeEventListener(t,e,s),n.call(this,r)},n.__once=u),e.addEventListener(t,u,o?r:s)}e.addEventListener(t,n,r)}},6857:function(e,t){t.Z=!!("undefined"!=typeof window&&window.document&&window.document.createElement)},1535:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}},7966:function(e,t,n){var r=n(6537),o=n(4937);t.Z=function(e,t,n,i){return(0,r.ZP)(e,t,n,i),function(){(0,o.Z)(e,t,n,i)}}},3931:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return e&&e.ownerDocument||document}},1829:function(e,t,n){n.d(t,{Z:function(){return o}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return r(e.querySelectorAll(t))}},4937:function(e,t){t.Z=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}},5187:function(e){e.exports=function(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],l=0;(u=Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},9112:function(e,t,n){n.d(t,{Z:function(){return B}});var r=n(4440),o=n.n(r),i=n(2265),a=n(1829),s=n(6537),u=n(5739),c=n(5856),l=n(488),f=n(3278),d=n(5113),p=n(8192),m=n(7352),v=n(2168),h=n(1066),g=n(6123),y=n(8949),b=n(9861),w=n(7437);let x=["eventKey","disabled","onClick","active","as"];function O({key:e,href:t,active:n,disabled:r,onClick:o}){let a=(0,i.useContext)(h.Z),s=(0,i.useContext)(g.Z),{activeKey:u}=s||{},c=(0,h.h)(e,t),l=null==n&&null!=e?(0,h.h)(u)===c:n,f=(0,d.Z)(e=>{r||(null==o||o(e),a&&!e.isPropagationStopped()&&a(c,e))});return[{onClick:f,"aria-disabled":r||void 0,"aria-selected":l,[(0,b.PB)("dropdown-item")]:""},{isActive:l}]}let E=i.forwardRef((e,t)=>{let{eventKey:n,disabled:r,onClick:o,active:i,as:a=y.ZP}=e,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,x),[u]=O({key:n,href:s.href,disabled:r,onClick:o,active:i});return(0,w.jsx)(a,Object.assign({},s,{ref:t},u))});E.displayName="DropdownItem";var j=n(4462);function Z(){let e=(0,l.Z)(),t=(0,i.useRef)(null),n=(0,i.useCallback)(n=>{t.current=n,e()},[e]);return[t,n]}function C({defaultShow:e,show:t,onSelect:n,onToggle:r,itemSelector:o=`* [${(0,b.PB)("dropdown-item")}]`,focusFirstItemOnShow:l,placement:m="bottom-start",children:g}){let y=(0,j.Z)(),[x,O]=(0,u.$c)(t,e,r),[E,C]=Z(),D=E.current,[k,A]=Z(),P=k.current,S=(0,c.Z)(x),R=(0,i.useRef)(null),L=(0,i.useRef)(!1),M=(0,i.useContext)(h.Z),N=(0,i.useCallback)((e,t,n=null==t?void 0:t.type)=>{O(e,{originalEvent:t,source:n})},[O]),T=(0,d.Z)((e,t)=>{null==n||n(e,t),N(!1,t,"select"),t.isPropagationStopped()||null==M||M(e,t)}),_=(0,i.useMemo)(()=>({toggle:N,placement:m,show:x,menuElement:D,toggleElement:P,setMenu:C,setToggle:A}),[N,m,x,D,P,C,A]);D&&S&&!x&&(L.current=D.contains(D.ownerDocument.activeElement));let W=(0,d.Z)(()=>{P&&P.focus&&P.focus()}),B=(0,d.Z)(()=>{let e=R.current,t=l;if(null==t&&(t=!!(E.current&&(0,v.bt)(E.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;let n=(0,a.Z)(E.current,o)[0];n&&n.focus&&n.focus()});(0,i.useEffect)(()=>{x?B():L.current&&(L.current=!1,W())},[x,L,W,B]),(0,i.useEffect)(()=>{R.current=null});let $=(e,t)=>{if(!E.current)return null;let n=(0,a.Z)(E.current,o),r=n.indexOf(e)+t;return r=Math.max(0,Math.min(r,n.length)),n[r]};return(0,f.Z)((0,i.useCallback)(()=>y.document,[y]),"keydown",e=>{var t,n;let{key:r}=e,o=e.target,i=null==(t=E.current)?void 0:t.contains(o),a=null==(n=k.current)?void 0:n.contains(o),u=/input|textarea/i.test(o.tagName);if(u&&(" "===r||"Escape"!==r&&i||"Escape"===r&&"search"===o.type)||!i&&!a||"Tab"===r&&(!E.current||!x))return;R.current=e.type;let c={originalEvent:e,source:e.type};switch(r){case"ArrowUp":{let t=$(o,-1);t&&t.focus&&t.focus(),e.preventDefault();return}case"ArrowDown":if(e.preventDefault(),x){let e=$(o,1);e&&e.focus&&e.focus()}else O(!0,c);return;case"Tab":(0,s.ZP)(o.ownerDocument,"keyup",e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=E.current)&&t.contains(e.target)||O(!1,c)},{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),O(!1,c)}}),(0,w.jsx)(h.Z.Provider,{value:T,children:(0,w.jsx)(p.Z.Provider,{value:_,children:g})})}C.displayName="Dropdown",C.Menu=m.Z,C.Toggle=v.ZP,C.Item=E;var D=n(1693),k=n(3353),A=n(7127);let P=i.forwardRef(({className:e,bsPrefix:t,as:n="hr",role:r="separator",...i},a)=>(t=(0,A.vE)(t,"dropdown-divider"),(0,w.jsx)(n,{ref:a,className:o()(e,t),role:r,...i})));P.displayName="DropdownDivider";let S=i.forwardRef(({className:e,bsPrefix:t,as:n="div",role:r="heading",...i},a)=>(t=(0,A.vE)(t,"dropdown-header"),(0,w.jsx)(n,{ref:a,className:o()(e,t),role:r,...i})));S.displayName="DropdownHeader";var R=n(5511);let L=i.forwardRef(({bsPrefix:e,className:t,eventKey:n,disabled:r=!1,onClick:i,active:a,as:s=R.Z,...u},c)=>{let l=(0,A.vE)(e,"dropdown-item"),[f,d]=O({key:n,href:u.href,disabled:r,onClick:i,active:a});return(0,w.jsx)(s,{...u,...f,ref:c,className:o()(t,l,d.isActive&&"active",r&&"disabled")})});L.displayName="DropdownItem";let M=i.forwardRef(({className:e,bsPrefix:t,as:n="span",...r},i)=>(t=(0,A.vE)(t,"dropdown-item-text"),(0,w.jsx)(n,{ref:i,className:o()(e,t),...r})));M.displayName="DropdownItemText";var N=n(9258),T=n(9085),_=n(521);let W=i.forwardRef((e,t)=>{let{bsPrefix:n,drop:r="down",show:a,className:s,align:u="start",onSelect:c,onToggle:l,focusFirstItemOnShow:f,as:p="div",navbar:m,autoClose:v=!0,...h}=(0,D.Ch)(e,{show:"onToggle"}),g=(0,i.useContext)(_.Z),y=(0,A.vE)(n,"dropdown"),b=(0,A.SC)(),x=e=>!1===v?"click"===e:"inside"===v?"rootClose"!==e:"outside"!==v||"select"!==e,O=(0,d.Z)((e,t)=>{t.originalEvent.currentTarget===document&&("keydown"!==t.source||"Escape"===t.originalEvent.key)&&(t.source="rootClose"),x(t.source)&&(null==l||l(e,t))}),E="end"===u,j=(0,N.J)(E,r,b),Z=(0,i.useMemo)(()=>({align:u,drop:r,isRTL:b}),[u,r,b]),P={down:y,"down-centered":`${y}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return(0,w.jsx)(k.Z.Provider,{value:Z,children:(0,w.jsx)(C,{placement:j,show:a,onSelect:c,onToggle:O,focusFirstItemOnShow:f,itemSelector:`.${y}-item:not(.disabled):not(:disabled)`,children:g?h.children:(0,w.jsx)(p,{...h,ref:t,className:o()(s,a&&"show",P[r])})})})});W.displayName="Dropdown";var B=Object.assign(W,{Toggle:T.Z,Menu:N.Z,Item:L,ItemText:M,Divider:P,Header:S})},3353:function(e,t,n){var r=n(2265);let o=r.createContext({});o.displayName="DropdownContext",t.Z=o},9258:function(e,t,n){n.d(t,{J:function(){return v}});var r=n(4440),o=n.n(r),i=n(2265),a=n(7352),s=n(7880),u=n(1271);n(267);var c=n(3353),l=n(521),f=n(9414),d=n(7127),p=n(4449),m=n(7437);function v(e,t,n){let r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t?r=e?n?"right-end":"left-end":n?"right-start":"left-start":"down-centered"===t?r="bottom":"up-centered"===t&&(r="top"),r}let h=i.forwardRef(({bsPrefix:e,className:t,align:n,rootCloseEvent:r,flip:h=!0,show:g,renderOnMount:y,as:b="div",popperConfig:w,variant:x,...O},E)=>{let j=!1,Z=(0,i.useContext)(f.Z),C=(0,d.vE)(e,"dropdown-menu"),{align:D,drop:k,isRTL:A}=(0,i.useContext)(c.Z);n=n||D;let P=(0,i.useContext)(l.Z),S=[];if(n){if("object"==typeof n){let e=Object.keys(n);if(e.length){let t=e[0],r=n[t];j="start"===r,S.push(`${C}-${t}-${r}`)}}else"end"===n&&(j=!0)}let R=v(j,k,A),[L,{hasShown:M,popper:N,show:T,toggle:_}]=(0,a.d)({flip:h,rootCloseEvent:r,show:g,usePopper:!Z&&0===S.length,offset:[0,2],popperConfig:w,placement:R});if(L.ref=(0,u.Z)((0,p.Z)(E,"DropdownMenu"),L.ref),(0,s.Z)(()=>{T&&(null==N||N.update())},[T]),!M&&!y&&!P)return null;"string"!=typeof b&&(L.show=T,L.close=()=>null==_?void 0:_(!1),L.align=n);let W=O.style;return null!=N&&N.placement&&(W={...O.style,...L.style},O["x-placement"]=N.placement),(0,m.jsx)(b,{...O,...L,style:W,...(S.length||Z)&&{"data-bs-popper":"static"},className:o()(t,C,T&&"show",j&&`${C}-end`,x&&`${C}-${x}`,...S)})});h.displayName="DropdownMenu",t.Z=h},9085:function(e,t,n){var r=n(1271),o=n(8192),i=n(2168),a=n(4440),s=n.n(a),u=n(2265),c=n(6716),l=n(7127),f=n(4449),d=n(7437);let p=u.forwardRef(({bsPrefix:e,split:t,className:n,childBsPrefix:a,as:p=c.Z,...m},v)=>{let h=(0,l.vE)(e,"dropdown-toggle"),g=(0,u.useContext)(o.Z);void 0!==a&&(m.bsPrefix=a);let[y]=(0,i.Jr)();return y.ref=(0,r.Z)(y.ref,(0,f.Z)(v,"DropdownToggle")),(0,d.jsx)(p,{className:s()(n,h,t&&`${h}-split`,(null==g?void 0:g.show)&&"show"),...y,...m})});p.displayName="DropdownToggle",t.Z=p},521:function(e,t,n){var r=n(2265);let o=r.createContext(null);o.displayName="InputGroupContext",t.Z=o},9414:function(e,t,n){var r=n(2265);let o=r.createContext(null);o.displayName="NavbarContext",t.Z=o},4449:function(e,t,n){function r(e,t){return e}n.d(t,{Z:function(){return r}}),n(5187),n(2265),n(1271)},1693:function(e,t,n){function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Ch:function(){return s}});var o=n(2265);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function a(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function s(e,t){return Object.keys(t).reduce(function(n,s){var u,c,l,f,d,p,m,v,h=n[i(s)],g=n[s],y=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,[i(s),s].map(a)),b=t[s],w=(u=e[b],c=(0,o.useRef)(void 0!==g),f=(l=(0,o.useState)(h))[0],d=l[1],p=void 0!==g,m=c.current,c.current=p,!p&&m&&f!==h&&d(h),[p?g:f,(0,o.useCallback)(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];u&&u.apply(void 0,[e].concat(n)),d(e)},[u])]),x=w[0],O=w[1];return r({},y,((v={})[s]=x,v[b]=O,v))},e)}n(5187)},267:function(e){e.exports=function(){}},4256:function(e,t,n){n.d(t,{gP:function(){return c}});var r=n(2265);let o={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(o),a=r.createContext(!1),s=!!("undefined"!=typeof window&&window.document&&window.document.createElement),u=new WeakMap,c="function"==typeof r.useId?function(e){let t=r.useId(),[n]=(0,r.useState)("function"==typeof r.useSyncExternalStore?r.useSyncExternalStore(d,l,f):(0,r.useContext)(a)),i=n?"react-aria":`react-aria${o.prefix}`;return e||`${i}-${t}`}:function(e){let t=(0,r.useContext)(i);t!==o||s||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=function(e=!1){let t=(0,r.useContext)(i),n=(0,r.useRef)(null);if(null===n.current&&!e){var o,a;let e=null===(o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===o?void 0:null===(a=o.ReactCurrentOwner)||void 0===a?void 0:a.current;if(e){let n=u.get(e);null==n?u.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,u.delete(e))}n.current=++t.current}return n.current}(!!e),a=`react-aria${t.prefix}`;return e||`${a}-${n}`};function l(){return!1}function f(){return!0}function d(e){return()=>{}}}}]);