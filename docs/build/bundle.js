var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function a(){return Object.create(null)}function c(e){e.forEach(n)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e){return null==e?"":e}const m="undefined"!=typeof window;let l=m?()=>window.performance.now():()=>Date.now(),s=m?e=>requestAnimationFrame(e):e;const u=new Set;function d(e){u.forEach((t=>{t.c(e)||(u.delete(t),t.f())})),0!==u.size&&s(d)}function f(e){let t;return 0===u.size&&s(d),{promise:new Promise((n=>{u.add(t={c:e,f:n})})),abort(){u.delete(t)}}}function p(e,t){e.appendChild(t)}function R(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function v(){return b(" ")}function x(){return b("")}function y(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t,n,a){e.style.setProperty(t,n,a?"important":"")}function _(e,t,n){e.classList[n?"add":"remove"](t)}function C(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}const E=new Set;let S,T=0;function D(e,t,n,a,c,i,o,r=0){const m=16.666/a;let l="{\n";for(let e=0;e<=1;e+=m){const a=t+(n-t)*i(e);l+=100*e+`%{${o(a,1-a)}}\n`}const s=l+`100% {${o(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(s)}_${r}`,d=e.ownerDocument;E.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild($("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[u]||(p[u]=!0,f.insertRule(`@keyframes ${u} ${s}`,f.cssRules.length));const R=e.style.animation||"";return e.style.animation=`${R?`${R}, `:""}${u} ${a}ms linear ${c}ms 1 both`,T+=1,u}function L(e,t){const n=(e.style.animation||"").split(", "),a=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),c=n.length-a.length;c&&(e.style.animation=a.join(", "),T-=c,T||s((()=>{T||(E.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),E.clear())})))}function P(e){S=e}function z(){if(!S)throw new Error("Function called outside component initialization");return S}function O(e){z().$$.on_mount.push(e)}function A(){const e=z();return(t,n)=>{const a=e.$$.callbacks[t];if(a){const c=C(t,n);a.slice().forEach((t=>{t.call(e,c)}))}}}const F=[],M=[],Y=[],B=[],G=Promise.resolve();let I=!1;function X(e){Y.push(e)}function H(e){B.push(e)}let K=!1;const W=new Set;function j(){if(!K){K=!0;do{for(let e=0;e<F.length;e+=1){const t=F[e];P(t),U(t.$$)}for(P(null),F.length=0;M.length;)M.pop()();for(let e=0;e<Y.length;e+=1){const t=Y[e];W.has(t)||(W.add(t),t())}Y.length=0}while(F.length);for(;B.length;)B.pop()();I=!1,K=!1,W.clear()}}function U(e){if(null!==e.fragment){e.update(),c(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}let V;function Z(){return V||(V=Promise.resolve(),V.then((()=>{V=null}))),V}function q(e,t,n){e.dispatchEvent(C(`${t?"intro":"outro"}${n}`))}const J=new Set;let Q;function ee(){Q={r:0,c:[],p:Q}}function te(){Q.r||c(Q.c),Q=Q.p}function ne(e,t){e&&e.i&&(J.delete(e),e.i(t))}function ae(e,t,n,a){if(e&&e.o){if(J.has(e))return;J.add(e),Q.c.push((()=>{J.delete(e),a&&(n&&e.d(1),a())})),e.o(t)}}const ce={duration:0};function ie(n,a,c){let o,r,m=a(n,c),s=!1,u=0;function d(){o&&L(n,o)}function p(){const{delay:a=0,duration:c=300,easing:i=t,tick:p=e,css:R}=m||ce;R&&(o=D(n,0,1,c,a,i,R,u++)),p(0,1);const h=l()+a,g=h+c;r&&r.abort(),s=!0,X((()=>q(n,!0,"start"))),r=f((e=>{if(s){if(e>=g)return p(1,0),q(n,!0,"end"),d(),s=!1;if(e>=h){const t=i((e-h)/c);p(t,1-t)}}return s}))}let R=!1;return{start(){R||(L(n),i(m)?(m=m(),Z().then(p)):p())},invalidate(){R=!1},end(){s&&(d(),s=!1)}}}function oe(n,a,o){let r,m=a(n,o),s=!0;const u=Q;function d(){const{delay:a=0,duration:i=300,easing:o=t,tick:d=e,css:p}=m||ce;p&&(r=D(n,1,0,i,a,o,p));const R=l()+a,h=R+i;X((()=>q(n,!1,"start"))),f((e=>{if(s){if(e>=h)return d(0,1),q(n,!1,"end"),--u.r||c(u.c),!1;if(e>=R){const t=o((e-R)/i);d(1-t,t)}}return s}))}return u.r+=1,i(m)?Z().then((()=>{m=m(),d()})):d(),{end(e){e&&m.tick&&m.tick(1,0),s&&(r&&L(n,r),s=!1)}}}function re(n,a,o,r){let m=a(n,o),s=r?0:1,u=null,d=null,p=null;function R(){p&&L(n,p)}function h(e,t){const n=e.b-s;return t*=Math.abs(n),{a:s,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function g(a){const{delay:i=0,duration:o=300,easing:r=t,tick:g=e,css:$}=m||ce,b={start:l()+i,b:a};a||(b.group=Q,Q.r+=1),u||d?d=b:($&&(R(),p=D(n,s,a,o,i,r,$)),a&&g(0,1),u=h(b,o),X((()=>q(n,a,"start"))),f((e=>{if(d&&e>d.start&&(u=h(d,o),d=null,q(n,u.b,"start"),$&&(R(),p=D(n,s,u.b,u.duration,0,r,m.css))),u)if(e>=u.end)g(s=u.b,1-s),q(n,u.b,"end"),d||(u.b?R():--u.group.r||c(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;s=u.a+u.d*r(t/u.duration),g(s,1-s)}return!(!u&&!d)})))}return{run(e){i(m)?Z().then((()=>{m=m(),g(e)})):g(e)},end(){R(),u=d=null}}}function me(e,t,n){const a=e.$$.props[t];void 0!==a&&(e.$$.bound[a]=n,n(e.$$.ctx[a]))}function le(e){e&&e.c()}function se(e,t,a){const{fragment:o,on_mount:r,on_destroy:m,after_update:l}=e.$$;o&&o.m(t,a),X((()=>{const t=r.map(n).filter(i);m?m.push(...t):c(t),e.$$.on_mount=[]})),l.forEach(X)}function ue(e,t){const n=e.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){-1===e.$$.dirty[0]&&(F.push(e),I||(I=!0,G.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(t,n,i,o,r,m,l=[-1]){const s=S;P(t);const u=n.props||{},d=t.$$={fragment:null,ctx:null,props:m,update:e,not_equal:r,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:a(),dirty:l,skip_bound:!1};let f=!1;if(d.ctx=i?i(t,u,((e,n,...a)=>{const c=a.length?a[0]:n;return d.ctx&&r(d.ctx[e],d.ctx[e]=c)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](c),f&&de(t,e)),n})):[],d.update(),f=!0,c(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&ne(t.$$.fragment),se(t,n.target,n.anchor),j()}P(s)}class pe{$destroy(){ue(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Re(e){const t=e-1;return t*t*t+1}function he(e,{delay:n=0,duration:a=400,easing:c=t}){const i=+getComputedStyle(e).opacity;return{delay:n,duration:a,easing:c,css:e=>"opacity: "+e*i}}function ge(e,{delay:t=0,duration:n=400,easing:a=Re,x:c=0,y:i=0,opacity:o=0}){const r=getComputedStyle(e),m=+r.opacity,l="none"===r.transform?"":r.transform,s=m*(1-o);return{delay:t,duration:n,easing:a,css:(e,t)=>`\n\t\t\ttransform: ${l} translate(${(1-e)*c}px, ${(1-e)*i}px);\n\t\t\topacity: ${m-s*t}`}}function $e(e,{delay:t=0,duration:n=400,easing:a=Re}){const c=getComputedStyle(e),i=+c.opacity,o=parseFloat(c.height),r=parseFloat(c.paddingTop),m=parseFloat(c.paddingBottom),l=parseFloat(c.marginTop),s=parseFloat(c.marginBottom),u=parseFloat(c.borderTopWidth),d=parseFloat(c.borderBottomWidth);return{delay:t,duration:n,easing:a,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*i};height: ${e*o}px;padding-top: ${e*r}px;padding-bottom: ${e*m}px;margin-top: ${e*l}px;margin-bottom: ${e*s}px;border-top-width: ${e*u}px;border-bottom-width: ${e*d}px;`}}function be(e,t,n){const a=e.slice();return a[10]=t[n],a[12]=n,a}function ve(e,t,n){const a=e.slice();return a[13]=t[n],a}function xe(e,t,n){const a=e.slice();return a[13]=t[n],a}function ye(e){let t,n,a,c=e[13].columnTitle+"";return{c(){t=$("div"),n=b(c),a=v(),w(t,"class","column svelte-197dfk1"),k(t,"flex-grow",e[13].sizeProportion),_(t,"auto-hide",e[13].autoHide)},m(e,c){R(e,t,c),p(t,n),p(t,a)},p(e,a){2&a&&c!==(c=e[13].columnTitle+"")&&N(n,c),2&a&&k(t,"flex-grow",e[13].sizeProportion),2&a&&_(t,"auto-hide",e[13].autoHide)},d(e){e&&h(t)}}}function we(e){let t,n=e[10][e[13].propertyName]+"";return{c(){t=b(n)},m(e,n){R(e,t,n)},p(e,a){3&a&&n!==(n=e[10][e[13].propertyName]+"")&&N(t,n)},d(e){e&&h(t)}}}function Ne(e){let t;function n(e,t){return""!==e[13].propertyName&&e[13].propertyName?e[10][e[13].propertyName]<=2?Ce:_e:Ee}let a=n(e),c=a(e);return{c(){c.c(),t=x()},m(e,n){c.m(e,n),R(e,t,n)},p(e,i){a===(a=n(e))&&c?c.p(e,i):(c.d(1),c=a(e),c&&(c.c(),c.m(t.parentNode,t)))},d(e){c.d(e),e&&h(t)}}}function ke(e){let t,n,a,c;return{c(){t=$("div"),n=$("img"),w(n,"border","0"),w(n,"alt",a=e[13].alt),n.src!==(c=e[10][e[13].propertyName])&&w(n,"src",c),w(n,"width","100%"),w(n,"class","svelte-197dfk1"),w(t,"class","image svelte-197dfk1")},m(e,a){R(e,t,a),p(t,n)},p(e,t){2&t&&a!==(a=e[13].alt)&&w(n,"alt",a),3&t&&n.src!==(c=e[10][e[13].propertyName])&&w(n,"src",c)},d(e){e&&h(t)}}}function _e(e){let t,n=e[10][e[13].propertyName]+1+"";return{c(){t=b(n)},m(e,n){R(e,t,n)},p(e,a){3&a&&n!==(n=e[10][e[13].propertyName]+1+"")&&N(t,n)},d(e){e&&h(t)}}}function Ce(e){let t,n,a=e[2][e[10][e[13].propertyName]]+"";return{c(){t=$("div"),n=b(a),w(t,"class","icon svelte-197dfk1")},m(e,a){R(e,t,a),p(t,n)},p(e,t){3&t&&a!==(a=e[2][e[10][e[13].propertyName]]+"")&&N(n,a)},d(e){e&&h(t)}}}function Ee(e){let t;let n=function(e,t){return e[12]<=2?Te:Se}(e)(e);return{c(){n.c(),t=x()},m(e,a){n.m(e,a),R(e,t,a)},p(e,t){n.p(e,t)},d(e){n.d(e),e&&h(t)}}}function Se(t){let n,a=t[12]+1+"";return{c(){n=b(a)},m(e,t){R(e,n,t)},p:e,d(e){e&&h(n)}}}function Te(t){let n,a,c=t[2][t[12]]+"";return{c(){n=$("div"),a=b(c),w(n,"class","icon svelte-197dfk1")},m(e,t){R(e,n,t),p(n,a)},p:e,d(e){e&&h(n)}}}function De(e){let t;function n(e,t){return"image"===e[13].format?ke:"rank"===e[13].format?Ne:we}let a=n(e),c=a(e);return{c(){t=$("div"),c.c(),w(t,"class","column svelte-197dfk1"),k(t,"flex-grow",e[13].sizeProportion),_(t,"auto-hide",e[13].autoHide)},m(e,n){R(e,t,n),c.m(t,null)},p(e,i){a===(a=n(e))&&c?c.p(e,i):(c.d(1),c=a(e),c&&(c.c(),c.m(t,null))),2&i&&k(t,"flex-grow",e[13].sizeProportion),2&i&&_(t,"auto-hide",e[13].autoHide)},d(e){e&&h(t),c.d()}}}function Le(e){let t,n,a,c,o,m,l,s,u=e[1],d=[];for(let t=0;t<u.length;t+=1)d[t]=De(ve(e,u,t));return{c(){t=$("div");for(let e=0;e<d.length;e+=1)d[e].c();n=v(),w(t,"class",a=r(e[3](e[12],e[0].length))+" svelte-197dfk1")},m(a,c){R(a,t,c);for(let e=0;e<d.length;e+=1)d[e].m(t,null);p(t,n),m=!0,l||(s=y(t,"click",(function(){i(e[4](e[10]))&&e[4](e[10]).apply(this,arguments)})),l=!0)},p(c,i){if(e=c,7&i){let a;for(u=e[1],a=0;a<u.length;a+=1){const c=ve(e,u,a);d[a]?d[a].p(c,i):(d[a]=De(c),d[a].c(),d[a].m(t,n))}for(;a<d.length;a+=1)d[a].d(1);d.length=u.length}(!m||1&i&&a!==(a=r(e[3](e[12],e[0].length))+" svelte-197dfk1"))&&w(t,"class",a)},i(n){m||(X((()=>{o&&o.end(1),c||(c=ie(t,ge,{delay:50*(e[12]+1),x:100,duration:100})),c.start()})),m=!0)},o(e){c&&c.invalidate(),o=oe(t,he,{duration:500}),m=!1},d(e){e&&h(t),g(d,e),e&&o&&o.end(),l=!1,s()}}}function Pe(e){let t,n,a,c,i,o,r=e[1],m=[];for(let t=0;t<r.length;t+=1)m[t]=ye(xe(e,r,t));let l=e[0],s=[];for(let t=0;t<l.length;t+=1)s[t]=Le(be(e,l,t));const u=e=>ae(s[e],1,1,(()=>{s[e]=null}));return{c(){t=$("div");for(let e=0;e<m.length;e+=1)m[e].c();c=v();for(let e=0;e<s.length;e+=1)s[e].c();i=x(),w(t,"class","row header svelte-197dfk1")},m(e,n){R(e,t,n);for(let e=0;e<m.length;e+=1)m[e].m(t,null);R(e,c,n);for(let t=0;t<s.length;t+=1)s[t].m(e,n);R(e,i,n),o=!0},p(e,[n]){if(2&n){let a;for(r=e[1],a=0;a<r.length;a+=1){const c=xe(e,r,a);m[a]?m[a].p(c,n):(m[a]=ye(c),m[a].c(),m[a].m(t,null))}for(;a<m.length;a+=1)m[a].d(1);m.length=r.length}if(31&n){let t;for(l=e[0],t=0;t<l.length;t+=1){const a=be(e,l,t);s[t]?(s[t].p(a,n),ne(s[t],1)):(s[t]=Le(a),s[t].c(),ne(s[t],1),s[t].m(i.parentNode,i))}for(ee(),t=l.length;t<s.length;t+=1)u(t);te()}},i(e){if(!o){X((()=>{a&&a.end(1),n||(n=ie(t,ge,{x:-200,duration:1e3})),n.start()}));for(let e=0;e<l.length;e+=1)ne(s[e]);o=!0}},o(e){n&&n.invalidate(),a=oe(t,he,{duration:500}),s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)ae(s[e]);o=!1},d(e){e&&h(t),g(m,e),e&&a&&a.end(),e&&h(c),g(s,e),e&&h(i)}}}function ze(e,t,n){let{rowData:a}=t,{columnData:c}=t,{roundedCornerStyle:i=!0}=t,{zebraRowStyle:o=!0}=t,{invertZebraOrder:r=!1}=t,{onRowClickCallback:m=null}=t;return e.$$set=e=>{"rowData"in e&&n(0,a=e.rowData),"columnData"in e&&n(1,c=e.columnData),"roundedCornerStyle"in e&&n(5,i=e.roundedCornerStyle),"zebraRowStyle"in e&&n(6,o=e.zebraRowStyle),"invertZebraOrder"in e&&n(7,r=e.invertZebraOrder),"onRowClickCallback"in e&&n(8,m=e.onRowClickCallback)},[a,c,["🥇","🥈","🥉"],function(e,t){let n="row";return m&&(n+=" clickable"),i&&0==e?n+=" first-row":i&&e==t-1&&(n+=" last-row"),o&&(n+=e%2==(r?1:0)?" zebra-primary-color":" zebra-secondary-color"),n},function(e){m&&m(e)},i,o,r,m]}class Oe extends pe{constructor(e){super(),fe(this,e,ze,Pe,o,{rowData:0,columnData:1,roundedCornerStyle:5,zebraRowStyle:6,invertZebraOrder:7,onRowClickCallback:8})}}function Ae(t){let n,a=t[2]()+"";return{c(){n=b(a)},m(e,t){R(e,n,t)},p:e,i:e,o:e,d(e){e&&h(n)}}}function Fe(t){let n,a,c;return{c(){n=$("h3"),a=b(t[0]),w(n,"class","svelte-13tkedg")},m(e,t){R(e,n,t),p(n,a)},p(e,t){1&t&&N(a,e[0])},i(e){c||X((()=>{c=ie(n,Ye,{}),c.start()}))},o:e,d(e){e&&h(n)}}}function Me(t){let n;function a(e,t){return e[0]===e[1]?Fe:Ae}let c=a(t),i=c(t);return{c(){i.c(),n=x()},m(e,t){i.m(e,t),R(e,n,t)},p(e,[t]){c===(c=a(e))&&i?i.p(e,t):(i.d(1),i=c(e),i&&(i.c(),ne(i,1),i.m(n.parentNode,n)))},i(e){ne(i)},o:e,d(e){i.d(e),e&&h(n)}}}function Ye(e,{speed:t=50}){if(0==(1===e.childNodes.length&&e.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node child");const n=e.textContent;return{duration:n.length*t,tick:t=>{const a=~~(n.length*t);e.textContent=n.slice(0,a)}}}function Be(e,t,n){let{text:a}=t,c=a;return e.$$set=e=>{"text"in e&&n(0,a=e.text)},[a,c,function(){n(1,c=a)}]}class Ge extends pe{constructor(e){super(),fe(this,e,Be,Me,o,{text:0})}}function Ie(t){let n,a,c,o;return{c(){n=$("button"),a=b(t[2]),w(n,"class","svelte-1mh2srn")},m(e,r){R(e,n,r),p(n,a),t[3](n),c||(o=y(n,"click",(function(){i(t[1])&&t[1].apply(this,arguments)})),c=!0)},p(e,[n]){t=e,4&n&&N(a,t[2])},i:e,o:e,d(e){e&&h(n),t[3](null),c=!1,o()}}}function Xe(e,t,n){let{onClickCallback:a}=t,{textLabel:c}=t,{domRef:i=null}=t;return e.$$set=e=>{"onClickCallback"in e&&n(1,a=e.onClickCallback),"textLabel"in e&&n(2,c=e.textLabel),"domRef"in e&&n(0,i=e.domRef)},[i,a,c,function(e){M[e?"unshift":"push"]((()=>{i=e,n(0,i)}))}]}class He extends pe{constructor(e){super(),fe(this,e,Xe,Ie,o,{onClickCallback:1,textLabel:2,domRef:0})}}function Ke(e,t,n){const a=e.slice();return a[9]=t[n],a[11]=n,a}function We(e){let t,n,a,c,i=e[9]+"";function o(){return e[8](e[11])}return{c(){t=$("a"),n=b(i),w(t,"href","#"),w(t,"class","svelte-1adfmk1")},m(e,i){R(e,t,i),p(t,n),a||(c=y(t,"click",o),a=!0)},p(t,a){e=t,2&a&&i!==(i=e[9]+"")&&N(n,i)},d(e){e&&h(t),a=!1,c()}}}function je(e){let t,n,a,c,i,o,r,m;function l(t){e[7].call(null,t)}let s={onClickCallback:e[5],textLabel:e[0]};void 0!==e[4]&&(s.domRef=e[4]),n=new He({props:s}),M.push((()=>me(n,"domRef",l)));let u=e[1],d=[];for(let t=0;t<u.length;t+=1)d[t]=We(Ke(e,u,t));return{c(){t=$("div"),le(n.$$.fragment),c=v(),i=$("div");for(let e=0;e<d.length;e+=1)d[e].c();w(i,"class","dropdown-content svelte-1adfmk1"),_(i,"show",!0===e[3]),w(t,"class","dropdown svelte-1adfmk1")},m(a,l){R(a,t,l),se(n,t,null),p(t,c),p(t,i);for(let e=0;e<d.length;e+=1)d[e].m(i,null);o=!0,r||(m=y(window,"click",e[6]),r=!0)},p(e,[t]){const c={};if(1&t&&(c.textLabel=e[0]),!a&&16&t&&(a=!0,c.domRef=e[4],H((()=>a=!1))),n.$set(c),6&t){let n;for(u=e[1],n=0;n<u.length;n+=1){const a=Ke(e,u,n);d[n]?d[n].p(a,t):(d[n]=We(a),d[n].c(),d[n].m(i,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=u.length}8&t&&_(i,"show",!0===e[3])},i(e){o||(ne(n.$$.fragment,e),o=!0)},o(e){ae(n.$$.fragment,e),o=!1},d(e){e&&h(t),ue(n),g(d,e),r=!1,m()}}}function Ue(e,t,n){let{textLabel:a}=t,{items:c}=t,{onSelectCallback:i}=t,o=!1,r=null;return e.$$set=e=>{"textLabel"in e&&n(0,a=e.textLabel),"items"in e&&n(1,c=e.items),"onSelectCallback"in e&&n(2,i=e.onSelectCallback)},[a,c,i,o,r,function(){n(3,o=!0)},function(e){e.target!==r&&n(3,o=!o&&o)},function(e){r=e,n(4,r)},e=>{i(e)}]}class Ve extends pe{constructor(e){super(),fe(this,e,Ue,je,o,{textLabel:0,items:1,onSelectCallback:2})}}function Ze(t){let n,a=t[7]()+"";return{c(){n=b(a)},m(e,t){R(e,n,t)},p:e,i:e,o:e,d(e){e&&h(n)}}}function qe(e){let t,n;return t=new Oe({props:{rowData:e[0],columnData:[{columnTitle:"",propertyName:"picture",format:"image",sizeProportion:1,alt:"Driver's picture"},{columnTitle:"Rank",propertyName:void 0,format:"rank",sizeProportion:1},{columnTitle:"Name",propertyName:"name",format:"text",sizeProportion:3},{columnTitle:"Team",propertyName:"team",format:"text",sizeProportion:2,autoHide:!0}],onRowClickCallback:e[5],roundedCornerStyle:!0,zebraRowStyle:!0}}),{c(){le(t.$$.fragment)},m(e,a){se(t,e,a),n=!0},p(e,n){const a={};1&n&&(a.rowData=e[0]),t.$set(a)},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function Je(e){let t,n,a,c,i,o,r,m,l;n=new Ge({props:{text:e[3]}}),c=new Ve({props:{textLabel:"Select Race",items:e[4],onSelectCallback:e[6]}});const s=[qe,Ze],u=[];function d(e,t){return e[1]===e[2]?0:1}return o=d(e),r=u[o]=s[o](e),{c(){t=$("div"),le(n.$$.fragment),a=v(),le(c.$$.fragment),i=v(),r.c(),m=x(),w(t,"class","flex-container v-align-baseline svelte-sidx20")},m(e,r){R(e,t,r),se(n,t,null),p(t,a),se(c,t,null),R(e,i,r),u[o].m(e,r),R(e,m,r),l=!0},p(e,[t]){const a={};8&t&&(a.text=e[3]),n.$set(a);let c=o;o=d(e),o===c?u[o].p(e,t):(ee(),ae(u[c],1,1,(()=>{u[c]=null})),te(),r=u[o],r?r.p(e,t):(r=u[o]=s[o](e),r.c()),ne(r,1),r.m(m.parentNode,m))},i(e){l||(ne(n.$$.fragment,e),ne(c.$$.fragment,e),ne(r),l=!0)},o(e){ae(n.$$.fragment,e),ae(c.$$.fragment,e),ae(r),l=!1},d(e){e&&h(t),ue(n),ue(c),e&&h(i),u[o].d(e),e&&h(m)}}}const Qe="Ranking / ";function et(e,t,n){let{data:a}=t,{raceId:c=-1}=t;const i=a[0].races.map((e=>e.name));i.unshift("Global");let o=c,r=Qe+i[c+1];const m=A();function l(){n(0,a=c<0?a.sort(((e,t)=>e.globalPosition-t.globalPosition)):a.sort(((e,t)=>e.races[c].position-t.races[c].position)))}return O((()=>{l()})),e.$$set=e=>{"data"in e&&n(0,a=e.data),"raceId"in e&&n(1,c=e.raceId)},[a,c,o,r,i,function(e){m("message",{...e})},function(e){n(2,o=e-1)},function(){n(1,c=o),n(3,r=Qe+i[c+1]),l()}]}class tt extends pe{constructor(e){super(),fe(this,e,et,Je,o,{data:0,raceId:1})}}function nt(t){let n,a,c,i,o,m,l,s,u,d,f,g,x,y,k,_,C,E,S,T,D,L,P,z,O,A,F,M,Y=t[0].name+"",B=t[0].age+"",G=t[0].team+"",I=t[1](t[0].globalPosition)+"";return{c(){n=$("div"),n.textContent="Driver Card",a=v(),c=$("div"),i=$("div"),o=$("img"),s=v(),u=$("div"),u.textContent="Name",d=v(),f=$("div"),g=b(Y),x=v(),y=$("div"),y.textContent="Age",k=v(),_=$("div"),C=b(B),E=v(),S=$("div"),S.textContent="Team",T=v(),D=$("div"),L=b(G),P=v(),z=$("div"),z.textContent="Global Ranking",O=v(),A=$("div"),F=b(I),w(n,"class","card-header svelte-6mowod"),w(o,"border","0"),w(o,"alt",m=t[0].name),o.src!==(l=t[0].picture)&&w(o,"src",l),w(o,"width","100%"),w(o,"class","svelte-6mowod"),w(i,"class","avatar svelte-6mowod"),w(u,"class","title svelte-6mowod"),w(f,"class","desc svelte-6mowod"),w(y,"class","title svelte-6mowod"),w(_,"class","desc svelte-6mowod"),w(S,"class","title svelte-6mowod"),w(D,"class","desc svelte-6mowod"),w(z,"class","title svelte-6mowod"),w(A,"class",M=r(t[0].globalPosition<=2?"icon":"desc")+" svelte-6mowod"),w(c,"class","card-body svelte-6mowod")},m(e,t){R(e,n,t),R(e,a,t),R(e,c,t),p(c,i),p(i,o),p(c,s),p(c,u),p(c,d),p(c,f),p(f,g),p(c,x),p(c,y),p(c,k),p(c,_),p(_,C),p(c,E),p(c,S),p(c,T),p(c,D),p(D,L),p(c,P),p(c,z),p(c,O),p(c,A),p(A,F)},p(e,[t]){1&t&&m!==(m=e[0].name)&&w(o,"alt",m),1&t&&o.src!==(l=e[0].picture)&&w(o,"src",l),1&t&&Y!==(Y=e[0].name+"")&&N(g,Y),1&t&&B!==(B=e[0].age+"")&&N(C,B),1&t&&G!==(G=e[0].team+"")&&N(L,G),1&t&&I!==(I=e[1](e[0].globalPosition)+"")&&N(F,I),1&t&&M!==(M=r(e[0].globalPosition<=2?"icon":"desc")+" svelte-6mowod")&&w(A,"class",M)},i:e,o:e,d(e){e&&h(n),e&&h(a),e&&h(c)}}}function at(e,t,n){let{data:a}=t;const c=["🥇","🥈","🥉"];return e.$$set=e=>{"data"in e&&n(0,a=e.data)},[a,function(e){return e<=2?c[e]:e+1}]}class ct extends pe{constructor(e){super(),fe(this,e,at,nt,o,{data:0})}}function it(e){let t,n,a,c,i,o,r,m,l,s,u,d,f,g,b,x;return n=new Ge({props:{text:"Driver Season Results"}}),c=new He({props:{onClickCallback:e[1],textLabel:"Back"}}),m=new ct({props:{data:e[0]}}),f=new Oe({props:{rowData:e[0].races,columnData:[{columnTitle:"Race",propertyName:"name",format:"text",sizeProportion:1},{columnTitle:"Position",propertyName:"position",format:"rank",sizeProportion:1},{columnTitle:"Time",propertyName:"time",format:"text",sizeProportion:2}],roundedCornerStyle:!0,zebraRowStyle:!0}}),{c(){t=$("div"),le(n.$$.fragment),a=v(),le(c.$$.fragment),i=v(),o=$("div"),r=$("div"),le(m.$$.fragment),u=v(),d=$("div"),le(f.$$.fragment),w(t,"class","flex-container v-align-baseline svelte-ctu2el"),w(r,"class","card-container svelte-ctu2el"),w(d,"class","table-container svelte-ctu2el"),w(o,"class","flex-container flex-wrap svelte-ctu2el")},m(e,l){R(e,t,l),se(n,t,null),p(t,a),se(c,t,null),R(e,i,l),R(e,o,l),p(o,r),se(m,r,null),p(o,u),p(o,d),se(f,d,null),x=!0},p(e,[t]){const n={};1&t&&(n.data=e[0]),m.$set(n);const a={};1&t&&(a.rowData=e[0].races),f.$set(a)},i(e){x||(ne(n.$$.fragment,e),ne(c.$$.fragment,e),ne(m.$$.fragment,e),X((()=>{s&&s.end(1),l||(l=ie(r,ge,{x:-100,duration:1500})),l.start()})),ne(f.$$.fragment,e),X((()=>{b&&b.end(1),g||(g=ie(d,ge,{x:100,duration:1500})),g.start()})),x=!0)},o(e){ae(n.$$.fragment,e),ae(c.$$.fragment,e),ae(m.$$.fragment,e),l&&l.invalidate(),s=oe(r,$e,{duration:500}),ae(f.$$.fragment,e),g&&g.invalidate(),b=oe(d,$e,{duration:500}),x=!1},d(e){e&&h(t),ue(n),ue(c),e&&h(i),e&&h(o),ue(m),e&&s&&s.end(),ue(f),e&&b&&b.end()}}}function ot(e,t,n){let{data:a}=t;const c=A();return e.$$set=e=>{"data"in e&&n(0,a=e.data)},[a,function(){c("message",{action:"back"})}]}class rt extends pe{constructor(e){super(),fe(this,e,ot,it,o,{data:0})}}function mt(e){let t,n;return t=new rt({props:{data:e[3]}}),t.$on("message",e[5]),{c(){le(t.$$.fragment)},m(e,a){se(t,e,a),n=!0},p(e,n){const a={};8&n&&(a.data=e[3]),t.$set(a)},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function lt(e){let t,n,a;function c(t){e[6].call(null,t)}let i={data:e[0]};return void 0!==e[1]&&(i.raceId=e[1]),t=new tt({props:i}),M.push((()=>me(t,"raceId",c))),t.$on("message",e[4]),{c(){le(t.$$.fragment)},m(e,n){se(t,e,n),a=!0},p(e,a){const c={};1&a&&(c.data=e[0]),!n&&2&a&&(n=!0,c.raceId=e[1],H((()=>n=!1))),t.$set(c)},i(e){a||(ne(t.$$.fragment,e),a=!0)},o(e){ae(t.$$.fragment,e),a=!1},d(e){ue(t,e)}}}function st(e){let t,n,a,c;const i=[lt,mt],o=[];function r(e,t){return e[2]?1:0}return t=r(e),n=o[t]=i[t](e),{c(){n.c(),a=x()},m(e,n){o[t].m(e,n),R(e,a,n),c=!0},p(e,[c]){let m=t;t=r(e),t===m?o[t].p(e,c):(ee(),ae(o[m],1,1,(()=>{o[m]=null})),te(),n=o[t],n?n.p(e,c):(n=o[t]=i[t](e),n.c()),ne(n,1),n.m(a.parentNode,a))},i(e){c||(ne(n),c=!0)},o(e){ae(n),c=!1},d(e){o[t].d(e),e&&h(a)}}}function ut(e,t,n){let a,{data:c}=t,i=-1,o=!1;return e.$$set=e=>{"data"in e&&n(0,c=e.data)},[c,i,o,a,function(e){n(2,o=!0),n(3,a={...e.detail})},function(e){n(2,o=!1)},function(e){i=e,n(1,i)}]}class dt extends pe{constructor(e){super(),fe(this,e,ut,st,o,{data:0})}}function ft(e,t,n){const a=e.slice();return a[6]=t[n],a}function pt(e,t,n){const a=e.slice();return a[9]=t[n],a}function Rt(e){let t,n,a,c,i,o,r,m,l,s=e[9].c.charAt(0)+"",u=e[9].c.substring(1)+"",d=(e[9].x>=-200?$t:"")+"";return{c(){t=$("h1"),n=b(s),c=v(),i=$("span"),o=b(u),r=b(d),w(t,"class","svelte-1i9fp1t"),w(i,"class","non-capital svelte-1i9fp1t")},m(e,a){R(e,t,a),p(t,n),R(e,c,a),R(e,i,a),p(i,o),p(i,r),l=!0},p(t,n){e=t},i(n){l||(X((()=>{a||(a=re(t,ge,{x:e[9].x,duration:2e3},!0)),a.run(1)})),X((()=>{m||(m=re(i,he,{duration:1500},!0)),m.run(1)})),l=!0)},o(n){a||(a=re(t,ge,{x:e[9].x,duration:2e3},!1)),a.run(0),m||(m=re(i,he,{duration:1500},!1)),m.run(0),l=!1},d(e){e&&h(t),e&&a&&a.end(),e&&h(c),e&&h(i),e&&m&&m.end()}}}function ht(e){let t,n,a,c,i,o=e[6].c+"",r=(e[6].x>=-200?$t:"")+"";return{c(){t=$("h1"),n=b(o),a=b(r),w(t,"class","svelte-1i9fp1t")},m(e,c){R(e,t,c),p(t,n),p(t,a),i=!0},p(t,n){e=t},i(n){i||(X((()=>{c||(c=re(t,ge,{x:e[6].x,duration:2e3},!0)),c.run(1)})),i=!0)},o(n){c||(c=re(t,ge,{x:e[6].x,duration:2e3},!1)),c.run(0),i=!1},d(e){e&&h(t),e&&c&&c.end()}}}function gt(e){let t,n,a,c,i=e[0],o=[];for(let t=0;t<i.length;t+=1)o[t]=Rt(pt(e,i,t));const r=e=>ae(o[e],1,1,(()=>{o[e]=null}));let m=e[1],l=[];for(let t=0;t<m.length;t+=1)l[t]=ht(ft(e,m,t));const s=e=>ae(l[e],1,1,(()=>{l[e]=null}));return{c(){t=$("div");for(let e=0;e<o.length;e+=1)o[e].c();n=v(),a=$("div");for(let e=0;e<l.length;e+=1)l[e].c();w(t,"class","full-text svelte-1i9fp1t"),w(a,"class","brief-text svelte-1i9fp1t")},m(e,i){R(e,t,i);for(let e=0;e<o.length;e+=1)o[e].m(t,null);R(e,n,i),R(e,a,i);for(let e=0;e<l.length;e+=1)l[e].m(a,null);c=!0},p(e,[n]){if(1&n){let a;for(i=e[0],a=0;a<i.length;a+=1){const c=pt(e,i,a);o[a]?(o[a].p(c,n),ne(o[a],1)):(o[a]=Rt(c),o[a].c(),ne(o[a],1),o[a].m(t,null))}for(ee(),a=i.length;a<o.length;a+=1)r(a);te()}if(2&n){let t;for(m=e[1],t=0;t<m.length;t+=1){const c=ft(e,m,t);l[t]?(l[t].p(c,n),ne(l[t],1)):(l[t]=ht(c),l[t].c(),ne(l[t],1),l[t].m(a,null))}for(ee(),t=m.length;t<l.length;t+=1)s(t);te()}},i(e){if(!c){for(let e=0;e<i.length;e+=1)ne(o[e]);for(let e=0;e<m.length;e+=1)ne(l[e]);c=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)ae(o[e]);l=l.filter(Boolean);for(let e=0;e<l.length;e+=1)ae(l[e]);c=!1},d(e){e&&h(t),g(o,e),e&&h(n),e&&h(a),g(l,e)}}}const $t="   ";function bt(e,t,n){let{longTitle:a}=t,{shortTitle:c}=t;const i=a.split(" "),o=c.split(""),r=[],m=[];return i.forEach(((e,t)=>{r.push({c:e,x:-100*(t+1)})})),o.forEach(((e,t)=>{m.push({c:e,x:-100*(t+1)})})),e.$$set=e=>{"longTitle"in e&&n(2,a=e.longTitle),"shortTitle"in e&&n(3,c=e.shortTitle)},[r,m,a,c]}class vt extends pe{constructor(e){super(),fe(this,e,bt,gt,o,{longTitle:2,shortTitle:3})}}function xt(t){let n,a,c,i,o,r,m,l,s,u,d,f,g;return{c(){n=$("hr"),a=v(),c=$("p"),i=b("© "),o=$("i"),r=b(t[0]),m=v(),l=b(t[1]),s=b(", prepared for "),u=$("span"),d=b(t[2]),f=b(" using "),g=$("a"),g.textContent="Svelte",w(n,"class","svelte-aevb4j"),w(u,"class","svelte-aevb4j"),w(g,"href","https://svelte.dev/tutorial"),w(c,"class","svelte-aevb4j")},m(e,t){R(e,n,t),R(e,a,t),R(e,c,t),p(c,i),p(c,o),p(o,r),p(o,m),p(o,l),p(c,s),p(c,u),p(u,d),p(c,f),p(c,g)},p(e,[t]){1&t&&N(r,e[0]),2&t&&N(l,e[1]),4&t&&N(d,e[2])},i:e,o:e,d(e){e&&h(n),e&&h(a),e&&h(c)}}}function yt(e,t,n){let{year:a="2021"}=t,{author:c}=t,{owner:i}=t;return e.$$set=e=>{"year"in e&&n(0,a=e.year),"author"in e&&n(1,c=e.author),"owner"in e&&n(2,i=e.owner)},[a,c,i]}class wt extends pe{constructor(e){super(),fe(this,e,yt,xt,o,{year:0,author:1,owner:2})}}function Nt(e){let t=e.split(":");return 60*parseInt(t[0])*60*1e3+60*parseInt(t[1])*1e3+1e3*parseInt(t[2].split("."[0]))+parseInt(t[2].split("."[1]))}function kt(e,t){e.sort(((e,n)=>Nt(e.races[t].time)-Nt(n.races[t].time))),e.forEach(((e,n)=>{e.races[t].position=n}))}var _t=[{_id:"5f3a3c5faa55d5c4ea549ac1",picture:"http://placehold.it/64x64",age:38,name:"Padilla Adkins",team:"EURON",races:[{name:"Race 0",time:"1:11:39.515"},{name:"Race 1",time:"1:17:24.312"},{name:"Race 2",time:"1:22:29.376"},{name:"Race 3",time:"1:10:34.491"},{name:"Race 4",time:"1:51:45.103"},{name:"Race 5",time:"1:44:16.158"},{name:"Race 6",time:"1:30:14.658"},{name:"Race 7",time:"1:29:41.505"},{name:"Race 8",time:"1:47:52.109"},{name:"Race 9",time:"1:23:38.271"}]},{_id:"5f3a3c5f4984bd9be6a6f655",picture:"http://placehold.it/64x64",age:39,name:"Richards Floyd",team:"VENDBLEND",races:[{name:"Race 0",time:"1:16:53.224"},{name:"Race 1",time:"1:31:32.533"},{name:"Race 2",time:"1:26:56.186"},{name:"Race 3",time:"1:0:15.169"},{name:"Race 4",time:"1:21:5.428"},{name:"Race 5",time:"1:26:18.202"},{name:"Race 6",time:"1:22:24.379"},{name:"Race 7",time:"1:22:9.316"},{name:"Race 8",time:"1:28:6.268"},{name:"Race 9",time:"1:57:56.461"}]},{_id:"5f3a3c5fc4c1a2c2dd9df702",picture:"http://placehold.it/64x64",age:39,name:"Jewel Mcdaniel",team:"GENESYNK",races:[{name:"Race 0",time:"1:4:42.549"},{name:"Race 1",time:"1:53:19.849"},{name:"Race 2",time:"1:51:25.667"},{name:"Race 3",time:"1:58:26.847"},{name:"Race 4",time:"1:47:42.841"},{name:"Race 5",time:"1:51:24.73"},{name:"Race 6",time:"1:4:0.075"},{name:"Race 7",time:"1:52:40.457"},{name:"Race 8",time:"1:18:17.738"},{name:"Race 9",time:"1:37:35.128"}]},{_id:"5f3a3c5f8a23c3e2c85cab74",picture:"http://placehold.it/64x64",age:21,name:"Welch Mays",team:"UXMOX",races:[{name:"Race 0",time:"1:21:48.956"},{name:"Race 1",time:"1:0:56.521"},{name:"Race 2",time:"1:53:9.793"},{name:"Race 3",time:"1:51:15.265"},{name:"Race 4",time:"1:59:43.968"},{name:"Race 5",time:"1:31:27.167"},{name:"Race 6",time:"1:59:49.156"},{name:"Race 7",time:"1:18:49.836"},{name:"Race 8",time:"1:47:46.692"},{name:"Race 9",time:"1:10:57.173"}]},{_id:"5f3a3c5f355a5be1fb74076a",picture:"http://placehold.it/64x64",age:28,name:"Lilian Levine",team:"UXMOX",races:[{name:"Race 0",time:"1:48:32.99"},{name:"Race 1",time:"1:1:41.043"},{name:"Race 2",time:"1:22:57.229"},{name:"Race 3",time:"1:4:40.618"},{name:"Race 4",time:"1:43:28.734"},{name:"Race 5",time:"1:59:19.861"},{name:"Race 6",time:"1:16:19.976"},{name:"Race 7",time:"1:28:39.612"},{name:"Race 8",time:"1:23:2.596"},{name:"Race 9",time:"1:38:32.305"}]},{_id:"5f3a3c5fc42b87fc0d6e31a9",picture:"http://placehold.it/64x64",age:27,name:"Harmon Mills",team:"GENESYNK",races:[{name:"Race 0",time:"1:38:45.622"},{name:"Race 1",time:"1:11:14.969"},{name:"Race 2",time:"1:46:46.861"},{name:"Race 3",time:"1:44:18.84"},{name:"Race 4",time:"1:42:3.761"},{name:"Race 5",time:"1:25:17.811"},{name:"Race 6",time:"1:12:57.672"},{name:"Race 7",time:"1:55:48.879"},{name:"Race 8",time:"1:34:55.445"},{name:"Race 9",time:"1:58:25.125"}]},{_id:"5f3a3c5f86cbcda872a8f1ed",picture:"http://placehold.it/64x64",age:24,name:"Olsen Donaldson",team:"DEVAWAY",races:[{name:"Race 0",time:"1:26:39.47"},{name:"Race 1",time:"1:8:11.491"},{name:"Race 2",time:"1:50:5.416"},{name:"Race 3",time:"1:48:56.726"},{name:"Race 4",time:"1:17:8.218"},{name:"Race 5",time:"1:26:42.32"},{name:"Race 6",time:"1:55:43.729"},{name:"Race 7",time:"1:6:13.931"},{name:"Race 8",time:"1:48:25.087"},{name:"Race 9",time:"1:52:38.604"}]},{_id:"5f3a3c5f65e328c1a1263781",picture:"http://placehold.it/64x64",age:29,name:"Anne Johnston",team:"DEVAWAY",races:[{name:"Race 0",time:"1:46:20.667"},{name:"Race 1",time:"1:25:48.31"},{name:"Race 2",time:"1:0:26.598"},{name:"Race 3",time:"1:40:54.377"},{name:"Race 4",time:"1:53:38.533"},{name:"Race 5",time:"1:27:11.601"},{name:"Race 6",time:"1:20:27.344"},{name:"Race 7",time:"1:48:58.123"},{name:"Race 8",time:"1:56:35.634"},{name:"Race 9",time:"1:47:46.822"}]},{_id:"5f3a3c5fde8d2bb91cab3352",picture:"http://placehold.it/64x64",age:31,name:"Cherie Fitzgerald",team:"EURON",races:[{name:"Race 0",time:"1:46:21.421"},{name:"Race 1",time:"1:43:5.956"},{name:"Race 2",time:"1:27:27.411"},{name:"Race 3",time:"1:32:43.108"},{name:"Race 4",time:"1:51:21.313"},{name:"Race 5",time:"1:23:48.083"},{name:"Race 6",time:"1:6:0.916"},{name:"Race 7",time:"1:57:54.609"},{name:"Race 8",time:"1:54:32.003"},{name:"Race 9",time:"1:31:15.369"}]},{_id:"5f3a3c5f5a4ce67633e028ad",picture:"http://placehold.it/64x64",age:29,name:"Debora Sears",team:"GENESYNK",races:[{name:"Race 0",time:"1:16:52.691"},{name:"Race 1",time:"1:20:32.393"},{name:"Race 2",time:"1:35:38.871"},{name:"Race 3",time:"1:35:16.146"},{name:"Race 4",time:"1:41:49.539"},{name:"Race 5",time:"1:57:46.918"},{name:"Race 6",time:"1:12:47.641"},{name:"Race 7",time:"1:55:52.599"},{name:"Race 8",time:"1:26:36.246"},{name:"Race 9",time:"1:22:26.748"}]},{_id:"5f3a3c5f0e202f4a527bf502",picture:"http://placehold.it/64x64",age:27,name:"Morris Combs",team:"EURON",races:[{name:"Race 0",time:"1:47:3.23"},{name:"Race 1",time:"1:28:54.578"},{name:"Race 2",time:"1:40:5.387"},{name:"Race 3",time:"1:28:49.392"},{name:"Race 4",time:"1:47:18.89"},{name:"Race 5",time:"1:11:2.444"},{name:"Race 6",time:"1:22:29.818"},{name:"Race 7",time:"1:4:24.429"},{name:"Race 8",time:"1:14:15.846"},{name:"Race 9",time:"1:39:5.08"}]},{_id:"5f3a3c5ff1c5e552442b292d",picture:"http://placehold.it/64x64",age:29,name:"Naomi Rutledge",team:"VENDBLEND",races:[{name:"Race 0",time:"1:44:36.643"},{name:"Race 1",time:"1:15:9.451"},{name:"Race 2",time:"1:50:37.69"},{name:"Race 3",time:"1:8:31.728"},{name:"Race 4",time:"1:32:50.154"},{name:"Race 5",time:"1:51:22.663"},{name:"Race 6",time:"1:30:35.122"},{name:"Race 7",time:"1:17:25.795"},{name:"Race 8",time:"1:36:56.224"},{name:"Race 9",time:"1:32:52.749"}]},{_id:"5f3a3c5f086b43d06ac5a984",picture:"http://placehold.it/64x64",age:35,name:"Guerra Rosario",team:"DEVAWAY",races:[{name:"Race 0",time:"1:22:53.242"},{name:"Race 1",time:"1:54:8.187"},{name:"Race 2",time:"1:1:5.747"},{name:"Race 3",time:"1:44:13.98"},{name:"Race 4",time:"1:30:28.754"},{name:"Race 5",time:"1:13:14.073"},{name:"Race 6",time:"1:41:58.781"},{name:"Race 7",time:"1:8:10.042"},{name:"Race 8",time:"1:54:42.966"},{name:"Race 9",time:"1:58:35.652"}]},{_id:"5f3a3c5f2744fa89349fe0f3",picture:"http://placehold.it/64x64",age:34,name:"Nguyen Fletcher",team:"GENESYNK",races:[{name:"Race 0",time:"1:8:15.559"},{name:"Race 1",time:"1:50:21.71"},{name:"Race 2",time:"1:4:55.952"},{name:"Race 3",time:"1:34:18.34"},{name:"Race 4",time:"1:59:9.568"},{name:"Race 5",time:"1:59:42.241"},{name:"Race 6",time:"1:46:33.387"},{name:"Race 7",time:"1:55:49.791"},{name:"Race 8",time:"1:29:4.4"},{name:"Race 9",time:"1:45:37.349"}]},{_id:"5f3a3c5f970bc40e21b8ee63",picture:"http://placehold.it/64x64",age:27,name:"Lisa Montoya",team:"GENESYNK",races:[{name:"Race 0",time:"1:19:38.374"},{name:"Race 1",time:"1:52:42.372"},{name:"Race 2",time:"1:59:9.399"},{name:"Race 3",time:"1:33:33.531"},{name:"Race 4",time:"1:15:15.002"},{name:"Race 5",time:"1:12:1.19"},{name:"Race 6",time:"1:56:48.602"},{name:"Race 7",time:"1:49:20.073"},{name:"Race 8",time:"1:53:21.555"},{name:"Race 9",time:"1:40:52.086"}]},{_id:"5f3a3c5f0a5f78c603fc1d14",picture:"http://placehold.it/64x64",age:30,name:"Misty Marsh",team:"UXMOX",races:[{name:"Race 0",time:"1:39:54.655"},{name:"Race 1",time:"1:26:8.059"},{name:"Race 2",time:"1:23:11.046"},{name:"Race 3",time:"1:41:4.32"},{name:"Race 4",time:"1:9:53.404"},{name:"Race 5",time:"1:13:42.517"},{name:"Race 6",time:"1:48:18.026"},{name:"Race 7",time:"1:55:3.198"},{name:"Race 8",time:"1:19:46.733"},{name:"Race 9",time:"1:40:17.202"}]},{_id:"5f3a3c5f876488cda4de309a",picture:"http://placehold.it/64x64",age:32,name:"Stanton Ayala",team:"CONFRENZY",races:[{name:"Race 0",time:"1:10:20.58"},{name:"Race 1",time:"1:53:44.181"},{name:"Race 2",time:"1:5:18.992"},{name:"Race 3",time:"1:47:55.459"},{name:"Race 4",time:"1:49:31.585"},{name:"Race 5",time:"1:38:20.841"},{name:"Race 6",time:"1:48:19.814"},{name:"Race 7",time:"1:36:18.023"},{name:"Race 8",time:"1:31:21.812"},{name:"Race 9",time:"1:48:26.514"}]},{_id:"5f3a3c5f8bd0087dc1b70b77",picture:"http://placehold.it/64x64",age:39,name:"Gilda Lindsay",team:"UXMOX",races:[{name:"Race 0",time:"1:53:0.702"},{name:"Race 1",time:"1:28:42.037"},{name:"Race 2",time:"1:53:24.687"},{name:"Race 3",time:"1:38:10.498"},{name:"Race 4",time:"1:46:58.467"},{name:"Race 5",time:"1:21:51.764"},{name:"Race 6",time:"1:2:8.072"},{name:"Race 7",time:"1:26:54.026"},{name:"Race 8",time:"1:56:31.087"},{name:"Race 9",time:"1:56:5.192"}]},{_id:"5f3a3c5f8df3fe2e8c6ae477",picture:"http://placehold.it/64x64",age:29,name:"Daniels Manning",team:"CONFRENZY",races:[{name:"Race 0",time:"1:0:57.037"},{name:"Race 1",time:"1:19:21.263"},{name:"Race 2",time:"1:16:58.378"},{name:"Race 3",time:"1:21:1.485"},{name:"Race 4",time:"1:16:2.04"},{name:"Race 5",time:"1:50:30.417"},{name:"Race 6",time:"1:54:33.324"},{name:"Race 7",time:"1:15:45.267"},{name:"Race 8",time:"1:2:42.528"},{name:"Race 9",time:"1:24:7.128"}]},{_id:"5f3a3c5f0c713e786503e798",picture:"http://placehold.it/64x64",age:39,name:"Howe Gaines",team:"VENDBLEND",races:[{name:"Race 0",time:"1:47:32.432"},{name:"Race 1",time:"1:40:12.872"},{name:"Race 2",time:"1:44:7.808"},{name:"Race 3",time:"1:47:10.399"},{name:"Race 4",time:"1:16:48.487"},{name:"Race 5",time:"1:35:58.714"},{name:"Race 6",time:"1:9:2.596"},{name:"Race 7",time:"1:58:10.066"},{name:"Race 8",time:"1:10:34.986"},{name:"Race 9",time:"1:11:36.368"}]},{_id:"5f3a3c5f37ce779261434517",picture:"http://placehold.it/64x64",age:24,name:"Hillary Leonard",team:"CONFRENZY",races:[{name:"Race 0",time:"1:48:28.477"},{name:"Race 1",time:"1:37:16.852"},{name:"Race 2",time:"1:7:36.766"},{name:"Race 3",time:"1:54:50.18"},{name:"Race 4",time:"1:11:35.705"},{name:"Race 5",time:"1:1:52.361"},{name:"Race 6",time:"1:15:58.031"},{name:"Race 7",time:"1:49:1.957"},{name:"Race 8",time:"1:50:46.778"},{name:"Race 9",time:"1:2:21.754"}]},{_id:"5f3a3c5fdc6f6738e4f35dd7",picture:"http://placehold.it/64x64",age:32,name:"Reva French",team:"GENESYNK",races:[{name:"Race 0",time:"1:53:36.228"},{name:"Race 1",time:"1:59:58.061"},{name:"Race 2",time:"1:27:19.038"},{name:"Race 3",time:"1:0:6.003"},{name:"Race 4",time:"1:6:38.885"},{name:"Race 5",time:"1:50:42.074"},{name:"Race 6",time:"1:42:55.71"},{name:"Race 7",time:"1:38:16.095"},{name:"Race 8",time:"1:56:0.979"},{name:"Race 9",time:"1:29:18.093"}]}];function Ct(e){let t,n,a,c,i,o,r;return n=new vt({props:{longTitle:e[0],shortTitle:e[1]}}),c=new dt({props:{data:e[2]}}),o=new wt({props:{author:"Miguel Villar",owner:"devaway_"}}),{c(){t=$("main"),le(n.$$.fragment),a=v(),le(c.$$.fragment),i=v(),le(o.$$.fragment),w(t,"class","svelte-19eib3m")},m(e,m){R(e,t,m),se(n,t,null),p(t,a),se(c,t,null),p(t,i),se(o,t,null),r=!0},p(e,[t]){const a={};1&t&&(a.longTitle=e[0]),2&t&&(a.shortTitle=e[1]),n.$set(a)},i(e){r||(ne(n.$$.fragment,e),ne(c.$$.fragment,e),ne(o.$$.fragment,e),r=!0)},o(e){ae(n.$$.fragment,e),ae(c.$$.fragment,e),ae(o.$$.fragment,e),r=!1},d(e){e&&h(t),ue(n),ue(c),ue(o)}}}function Et(e,t,n){let{appLongName:a}=t,{appShortName:c}=t,i=_t;return O((()=>{for(let e=0;e<i[0].races.length;e++)kt(i,e);!function(e){e.sort(((e,t)=>e.races.reduce(((e,t)=>(e="Number"==typeof e?e:0)+t.position))-t.races.reduce(((e,t)=>(e="Number"==typeof e?e:0)+t.position)))),e.forEach(((e,t)=>{e.globalPosition=t}))}(i)})),e.$$set=e=>{"appLongName"in e&&n(0,a=e.appLongName),"appShortName"in e&&n(1,c=e.appShortName)},[a,c,i]}return new class extends pe{constructor(e){super(),fe(this,e,Et,Ct,o,{appLongName:0,appShortName:1})}}({target:document.body,intro:!0,props:{appLongName:"World Kart Championship",appShortName:"WKC"}})}();
//# sourceMappingURL=bundle.js.map
