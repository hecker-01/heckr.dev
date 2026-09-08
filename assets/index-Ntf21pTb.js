(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>b(e)===`[object Map]`,p=e=>b(e)===`[object Set]`,m=e=>typeof e==`function`,h=e=>typeof e==`string`,g=e=>typeof e==`symbol`,_=e=>typeof e==`object`&&!!e,v=e=>(_(e)||m(e))&&m(e.then)&&m(e.catch),y=Object.prototype.toString,b=e=>y.call(e),x=e=>b(e).slice(8,-1),S=e=>b(e)===`[object Object]`,C=e=>h(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,w=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ee=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},te=/-\w/g,T=ee(e=>e.replace(te,e=>e.slice(1).toUpperCase())),ne=/\B([A-Z])/g,re=ee(e=>e.replace(ne,`-$1`).toLowerCase()),ie=ee(e=>e.charAt(0).toUpperCase()+e.slice(1)),ae=ee(e=>e?`on${ie(e)}`:``),oe=(e,t)=>!Object.is(e,t),se=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ce=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},E=e=>{let t=parseFloat(e);return isNaN(t)?e:t},le=e=>{let t=h(e)?Number(e):NaN;return isNaN(t)?e:t},ue,de=()=>ue||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function D(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=h(r)?he(r):D(r);if(i)for(let e in i)t[e]=i[e]}return t}if(h(e)||_(e))return e}var fe=/;(?![^(]*\))/g,pe=/:([^]+)/,me=/\/\*[^]*?\*\//g;function he(e){let t={};return e.replace(me,``).split(fe).forEach(e=>{if(e){let n=e.split(pe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function O(e){let t=``;if(h(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=O(e[n]);r&&(t+=r+` `)}else if(_(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ge=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,_e=e(ge);ge+``;function ve(e){return!!e||e===``}var ye=e=>!!(e&&e.__v_isRef===!0),k=e=>h(e)?e:e==null?``:d(e)||_(e)&&(e.toString===y||!m(e.toString))?ye(e)?k(e.value):JSON.stringify(e,be,2):String(e),be=(e,t)=>ye(t)?be(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[xe(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>xe(e))}:g(t)?xe(t):_(t)&&!d(t)&&!S(t)?String(t):t,xe=(e,t=``)=>g(e)?`Symbol(${e.description??t})`:e,A,Se=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=A,!e&&A&&(this.index=(A.scopes||(A.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=A;try{return A=this,e()}finally{A=t}}}on(){++this._on===1&&(this.prevScope=A,A=this)}off(){this._on>0&&--this._on===0&&(A=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Ce(){return A}var j,we=new WeakSet,Te=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,A&&A.active&&A.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,we.has(this)&&(we.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ke(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,He(this),Me(this);let e=j,t=Re;j=this,Re=!0;try{return this.fn()}finally{Ne(this),j=e,Re=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ie(e);this.deps=this.depsTail=void 0,He(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?we.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pe(this)&&this.run()}get dirty(){return Pe(this)}},Ee=0,De,Oe;function ke(e,t=!1){if(e.flags|=8,t){e.next=Oe,Oe=e;return}e.next=De,De=e}function Ae(){Ee++}function je(){if(--Ee>0)return;if(Oe){let e=Oe;for(Oe=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;De;){let t=De;for(De=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Me(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ne(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ie(r),Le(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Pe(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Fe(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Fe(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ue)||(e.globalVersion=Ue,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Pe(e))))return;e.flags|=2;let t=e.dep,n=j,r=Re;j=e,Re=!0;try{Me(e);let n=e.fn(e._value);(t.version===0||oe(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{j=n,Re=r,Ne(e),e.flags&=-3}}function Ie(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ie(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Le(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Re=!0,ze=[];function Be(){ze.push(Re),Re=!1}function Ve(){let e=ze.pop();Re=e===void 0||e}function He(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=j;j=void 0;try{t()}finally{j=e}}}var Ue=0,We=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ge=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!j||!Re||j===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==j)t=this.activeLink=new We(j,this),j.deps?(t.prevDep=j.depsTail,j.depsTail.nextDep=t,j.depsTail=t):j.deps=j.depsTail=t,Ke(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=j.depsTail,t.nextDep=void 0,j.depsTail.nextDep=t,j.depsTail=t,j.deps===t&&(j.deps=e)}return t}trigger(e){this.version++,Ue++,this.notify(e)}notify(e){Ae();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{je()}}};function Ke(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ke(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var qe=new WeakMap,Je=Symbol(``),Ye=Symbol(``),Xe=Symbol(``);function M(e,t,n){if(Re&&j){let t=qe.get(e);t||qe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ge),r.map=t,r.key=n),r.track()}}function Ze(e,t,n,r,i,a){let o=qe.get(e);if(!o){Ue++;return}let s=e=>{e&&e.trigger()};if(Ae(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&C(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Xe||!g(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Xe)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Je)),f(e)&&s(o.get(Ye)));break;case`delete`:i||(s(o.get(Je)),f(e)&&s(o.get(Ye)));break;case`set`:f(e)&&s(o.get(Je))}}je()}function Qe(e){let t=N(e);return t===e?t:(M(t,`iterate`,Xe),Rt(e)?t:t.map(Vt))}function $e(e){return M(e=N(e),`iterate`,Xe),e}function et(e,t){return Lt(e)?Ht(It(e)?Vt(t):t):Vt(t)}var tt={__proto__:null,[Symbol.iterator](){return nt(this,Symbol.iterator,e=>et(this,e))},concat(...e){return Qe(this).concat(...e.map(e=>d(e)?Qe(e):e))},entries(){return nt(this,`entries`,e=>(e[1]=et(this,e[1]),e))},every(e,t){return it(this,`every`,e,t,void 0,arguments)},filter(e,t){return it(this,`filter`,e,t,e=>e.map(e=>et(this,e)),arguments)},find(e,t){return it(this,`find`,e,t,e=>et(this,e),arguments)},findIndex(e,t){return it(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return it(this,`findLast`,e,t,e=>et(this,e),arguments)},findLastIndex(e,t){return it(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return it(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ot(this,`includes`,e)},indexOf(...e){return ot(this,`indexOf`,e)},join(e){return Qe(this).join(e)},lastIndexOf(...e){return ot(this,`lastIndexOf`,e)},map(e,t){return it(this,`map`,e,t,void 0,arguments)},pop(){return st(this,`pop`)},push(...e){return st(this,`push`,e)},reduce(e,...t){return at(this,`reduce`,e,t)},reduceRight(e,...t){return at(this,`reduceRight`,e,t)},shift(){return st(this,`shift`)},some(e,t){return it(this,`some`,e,t,void 0,arguments)},splice(...e){return st(this,`splice`,e)},toReversed(){return Qe(this).toReversed()},toSorted(e){return Qe(this).toSorted(e)},toSpliced(...e){return Qe(this).toSpliced(...e)},unshift(...e){return st(this,`unshift`,e)},values(){return nt(this,`values`,e=>et(this,e))}};function nt(e,t,n){let r=$e(e),i=r[t]();return r!==e&&!Rt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var rt=Array.prototype;function it(e,t,n,r,i,a){let o=$e(e),s=o!==e&&!Rt(e),c=o[t];if(c!==rt[t]){let t=c.apply(e,a);return s?Vt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,et(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function at(e,t,n,r){let i=$e(e),a=n;return i!==e&&(Rt(e)?n.length>3&&(a=function(t,r,i){return n.call(this,t,r,i,e)}):a=function(t,r,i){return n.call(this,t,et(e,r),i,e)}),i[t](a,...r)}function ot(e,t,n){let r=N(e);M(r,`iterate`,Xe);let i=r[t](...n);return(i===-1||i===!1)&&zt(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function st(e,t,n=[]){Be(),Ae();let r=N(e)[t].apply(e,n);return je(),Ve(),r}var ct=e(`__proto__,__v_isRef,__isVue`),lt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(g));function ut(e){g(e)||(e=String(e));let t=N(this);return M(t,`has`,e),t.hasOwnProperty(e)}var dt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?kt:Ot:i?Dt:Et).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=tt[t]))return e;if(t===`hasOwnProperty`)return ut}let o=Reflect.get(e,t,P(e)?e:n);if((g(t)?lt.has(t):ct(t))||(r||M(e,`get`,t),i))return o;if(P(o)){let e=a&&C(t)?o:o.value;return r&&_(e)?Pt(e):e}return _(o)?r?Pt(o):Mt(o):o}},ft=class extends dt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&C(t);if(!this._isShallow){let e=Lt(i);if(!Rt(n)&&!Lt(n)&&(i=N(i),n=N(n)),!a&&P(i)&&!P(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,P(e)?e:r);return e===N(r)&&(o?oe(n,i)&&Ze(e,`set`,t,n,i):Ze(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Ze(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!g(t)||!lt.has(t))&&M(e,`has`,t),n}ownKeys(e){return M(e,`iterate`,d(e)?`length`:Je),Reflect.ownKeys(e)}},pt=class extends dt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},mt=new ft,ht=new pt,gt=new ft(!0),_t=e=>e,vt=e=>Reflect.getPrototypeOf(e);function yt(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?_t:t?Ht:Vt;return!t&&M(a,`iterate`,l?Ye:Je),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function bt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function xt(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(oe(n,a)&&M(i,`get`,n),M(i,`get`,a));let{has:o}=vt(i),s=t?_t:e?Ht:Vt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&M(N(t),`iterate`,Je),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(oe(t,i)&&M(r,`has`,t),M(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?_t:e?Ht:Vt;return!e&&M(o,`iterate`,Je),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:bt(`add`),set:bt(`set`),delete:bt(`delete`),clear:bt(`clear`)}:{add(e){!t&&!Rt(e)&&!Lt(e)&&(e=N(e));let n=N(this);return vt(n).has.call(n,e)||(n.add(e),Ze(n,`add`,e,e)),this},set(e,n){!t&&!Rt(n)&&!Lt(n)&&(n=N(n));let r=N(this),{has:i,get:a}=vt(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?oe(n,s)&&Ze(r,`set`,e,n,s):Ze(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=vt(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Ze(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&Ze(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=yt(r,e,t)}),n}function St(e,t){let n=xt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Ct={get:St(!1,!1)},wt={get:St(!1,!0)},Tt={get:St(!0,!1)},Et=new WeakMap,Dt=new WeakMap,Ot=new WeakMap,kt=new WeakMap;function At(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function jt(e){return e.__v_skip||!Object.isExtensible(e)?0:At(x(e))}function Mt(e){return Lt(e)?e:Ft(e,!1,mt,Ct,Et)}function Nt(e){return Ft(e,!1,gt,wt,Dt)}function Pt(e){return Ft(e,!0,ht,Tt,Ot)}function Ft(e,t,n,r,i){if(!_(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=jt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function It(e){return Lt(e)?It(e.__v_raw):!!(e&&e.__v_isReactive)}function Lt(e){return!!(e&&e.__v_isReadonly)}function Rt(e){return!!(e&&e.__v_isShallow)}function zt(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function Bt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&ce(e,`__v_skip`,!0),e}var Vt=e=>_(e)?Mt(e):e,Ht=e=>_(e)?Pt(e):e;function P(e){return e?e.__v_isRef===!0:!1}function F(e){return Wt(e,!1)}function Ut(e){return Wt(e,!0)}function Wt(e,t){return P(e)?e:new Gt(e,t)}var Gt=class{constructor(e,t){this.dep=new Ge,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:N(e),this._value=t?e:Vt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Rt(e)||Lt(e);e=n?e:N(e),oe(e,t)&&(this._rawValue=e,this._value=n?e:Vt(e),this.dep.trigger())}};function I(e){return P(e)?e.value:e}var Kt={get:(e,t,n)=>t===`__v_raw`?e:I(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return P(i)&&!P(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qt(e){return It(e)?e:new Proxy(e,Kt)}var Jt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ge(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ue-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&j!==this)return ke(this,!0),!0}get value(){let e=this.dep.track();return Fe(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Yt(e,t,n=!1){let r,i;return m(e)?r=e:(r=e.get,i=e.set),new Jt(r,i,n)}var Xt={},Zt=new WeakMap,Qt=void 0;function $t(e,t=!1,n=Qt){if(n){let t=Zt.get(n);t||Zt.set(n,t=[]),t.push(e)}}function en(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Rt(e)||o===!1||o===0?tn(e,1):tn(e),h,g,_,v,y=!1,b=!1;if(P(e)?(g=()=>e.value,y=Rt(e)):It(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>It(e)||Rt(e)),g=()=>e.map(e=>{if(P(e))return e.value;if(It(e))return p(e);if(m(e))return f?f(e,2):e()})):g=m(e)?n?f?()=>f(e,2):e:()=>{if(_){Be();try{_()}finally{Ve()}}let t=Qt;Qt=h;try{return f?f(e,3,[v]):e(v)}finally{Qt=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>tn(e(),t)}let x=Ce(),S=()=>{h.stop(),x&&x.active&&c(x.effects,h)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(Xt):Xt,w=e=>{if(h.flags&1&&(h.dirty||e)){if(n){let e=h.run();if(o||y||(b?e.some((e,t)=>oe(e,C[t])):oe(e,C))){_&&_();let t=Qt;Qt=h;try{let t=[e,C===Xt?void 0:b&&C[0]===Xt?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{Qt=t}}}else h.run()}};return u&&u(w),h=new Te(g),h.scheduler=l?()=>l(w,!1):w,v=e=>$t(e,!1,h),_=h.onStop=()=>{let e=Zt.get(h);if(e){if(f)f(e,4);else for(let t of e)t();Zt.delete(h)}},n?a?w(!0):C=h.run():l?l(w.bind(null,!0),!0):h.run(),S.pause=h.pause.bind(h),S.resume=h.resume.bind(h),S.stop=S,S}function tn(e,t=1/0,n){if(t<=0||!_(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,P(e))tn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)tn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{tn(e,t,n)});else if(S(e)){for(let r in e)tn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&tn(e[r],t,n)}return e}function nn(e,t,n,r){try{return r?e(...r):e()}catch(e){an(e,t,n)}}function rn(e,t,n,r){if(m(e)){let i=nn(e,t,n,r);return i&&v(i)&&i.catch(e=>{an(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(rn(e[a],t,n,r));return i}}function an(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Be(),nn(o,null,10,[e,i,a]),Ve();return}}on(e,r,a,i,s)}function on(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var L=[],sn=-1,cn=[],ln=null,un=0,dn=Promise.resolve(),fn=null;function pn(e){let t=fn||dn;return e?t.then(this?e.bind(this):e):t}function mn(e){let t=sn+1,n=L.length;for(;t<n;){let r=t+n>>>1,i=L[r],a=bn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function hn(e){if(!(e.flags&1)){let t=bn(e),n=L[L.length-1];!n||!(e.flags&2)&&t>=bn(n)?L.push(e):L.splice(mn(t),0,e),e.flags|=1,gn()}}function gn(){fn||=dn.then(xn)}function _n(e){d(e)?cn.push(...e):ln&&e.id===-1?ln.splice(un+1,0,e):e.flags&1||(cn.push(e),e.flags|=1),gn()}function vn(e,t,n=sn+1){for(;n<L.length;n++){let t=L[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;L.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function yn(e){if(cn.length){let e=[...new Set(cn)].sort((e,t)=>bn(e)-bn(t));if(cn.length=0,ln){ln.push(...e);return}for(ln=e,un=0;un<ln.length;un++){let e=ln[un];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ln=null,un=0}}var bn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xn(e){try{for(sn=0;sn<L.length;sn++){let e=L[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),nn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<L.length;sn++){let e=L[sn];e&&(e.flags&=-2)}sn=-1,L.length=0,yn(e),fn=null,(L.length||cn.length)&&xn(e)}}var R=null,Sn=null;function Cn(e){let t=R;return R=e,Sn=e&&e.type.__scopeId||null,t}function wn(e,t=R,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&ia(-1);let i=Cn(t),a;try{a=e(...n)}finally{Cn(i),r._d&&ia(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Tn(e,n){if(R===null)return e;let r=Ia(R),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(m(a)&&(a={mounted:a,updated:a}),a.deep&&tn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function En(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Be(),rn(c,n,8,[e.el,s,e,t]),Ve())}}function Dn(e,t){if(J){let n=J.provides,r=J.parent&&J.parent.provides;r===n&&(n=J.provides=Object.create(r)),n[e]=t}}function On(e,t,n=!1){let r=Ca();if(r||li){let i=li?li._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&m(t)?t.call(r&&r.proxy):t}}var kn=Symbol.for(`v-scx`),An=()=>On(kn);function jn(e,t,n){return Mn(e,t,n)}function Mn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(ka){if(c===`sync`){let e=An();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=J;u.call=(e,t,n)=>rn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{zi(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():hn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=en(e,n,u);return ka&&(f?f.push(h):d&&h()),h}function Nn(e,t,n){let r=this.proxy,i=h(e)?e.includes(`.`)?Pn(r,e):()=>r[e]:e.bind(r,r),a;m(t)?a=t:(a=t.handler,n=t);let o=Ea(this),s=Mn(i,a.bind(r),n);return o(),s}function Pn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Fn=Symbol(`_vte`),In=e=>e.__isTeleport,Ln=e=>e&&(e.disabled||e.disabled===``),Rn=e=>e&&(e.defer||e.defer===``),zn=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Bn=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,Vn=(e,t)=>{let n=e&&e.to;return h(n)?t?t(n):null:n},Hn={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g}}=l,_=Ln(t.props),{shapeFlag:v,children:y,dynamicChildren:b}=t;if(e==null){let e=t.el=h(``),l=t.anchor=h(``);p(e,n,r),p(l,n,r);let d=(e,t)=>{v&16&&u(y,e,t,i,a,o,s,c)},f=()=>{let e=t.target=Vn(t.props,m),n=qn(e,t,h,p);e&&(o!==`svg`&&zn(e)?o=`svg`:o!==`mathml`&&Bn(e)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(e),_||(d(e,n),Kn(t,!1)))};_&&(d(n,l),Kn(t,!0)),Rn(t.props)?(t.el.__isMounted=!1,zi(()=>{f(),delete t.el.__isMounted},a)):f()}else{if(Rn(t.props)&&e.el.__isMounted===!1){zi(()=>{Hn.process(e,t,n,r,i,a,o,s,c,l)},a);return}t.el=e.el,t.targetStart=e.targetStart;let u=t.anchor=e.anchor,p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Ln(e.props),v=g?n:p,y=g?u:h;if(o===`svg`||zn(p)?o=`svg`:(o===`mathml`||Bn(p))&&(o=`mathml`),b?(f(e.dynamicChildren,b,v,i,a,o,s),Gi(e,t,!0)):c||d(e,t,v,y,i,a,o,s,!1),_)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Un(t,n,u,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=t.target=Vn(t.props,m);e&&Un(t,e,null,l,0)}else g&&Un(t,p,h,l,1);Kn(t,_)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e;if(d&&(i(l),i(u)),a&&i(c),o&16){let e=a||!Ln(f);for(let i=0;i<s.length;i++){let a=s[i];r(a,t,n,e,!!a.dynamicChildren)}}},move:Un,hydrate:Wn};function Un(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),(!d||Ln(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function Wn(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,t,c,l){t.anchor=d(o(e),t,s(e),n,r,i,a),t.targetStart=c,t.targetAnchor=l}let p=t.target=Vn(t.props,c),m=Ln(t.props);if(p){let s=p._lpa||p.firstChild;if(t.shapeFlag&16){if(m)f(e,t,s,s&&o(s));else{t.anchor=o(e);let c=s;for(;c;){if(c&&c.nodeType===8){if(c.data===`teleport start anchor`)t.targetStart=c;else if(c.data===`teleport anchor`){t.targetAnchor=c,p._lpa=t.targetAnchor&&o(t.targetAnchor);break}}c=o(c)}t.targetAnchor||qn(p,t,u,l),d(s&&o(s),t,p,n,r,i,a)}}Kn(t,m)}else m&&t.shapeFlag&16&&f(e,t,e,o(e));return t.anchor&&o(t.anchor)}var Gn=Hn;function Kn(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function qn(e,t,n,r){let i=t.targetStart=n(``),a=t.targetAnchor=n(``);return i[Fn]=a,e&&(r(i,e),r(a,e)),a}var Jn=Symbol(`_leaveCb`),Yn=Symbol(`_enterCb`);function Xn(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cr(()=>{e.isMounted=!0}),Er(()=>{e.isUnmounting=!0}),e}var Zn=[Function,Array],Qn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zn,onEnter:Zn,onAfterEnter:Zn,onEnterCancelled:Zn,onBeforeLeave:Zn,onLeave:Zn,onAfterLeave:Zn,onLeaveCancelled:Zn,onBeforeAppear:Zn,onAppear:Zn,onAfterAppear:Zn,onAppearCancelled:Zn},$n=e=>{let t=e.subTree;return t.component?$n(t.component):t},er={name:`BaseTransition`,props:Qn,setup(e,{slots:t}){let n=Ca(),r=Xn();return()=>{let i=t.default&&cr(t.default(),!0);if(!i||!i.length)return;let a=tr(i),o=N(e),{mode:s}=o;if(r.isLeaving)return ar(a);let c=or(a);if(!c)return ar(a);let l=ir(c,o,r,n,e=>l=e);c.type!==V&&sr(c,l);let u=n.subTree&&or(n.subTree);if(u&&u.type!==V&&!ca(u,c)&&$n(n).type!==V){let e=ir(u,o,r,n);if(sr(u,e),s===`out-in`&&c.type!==V)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},ar(a);s===`in-out`&&c.type!==V?e.delayLeave=(e,t,n)=>{let i=rr(r,u);i[String(u.key)]=u,e[Jn]=()=>{t(),e[Jn]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function tr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==V){t=n;break}}return t}var nr=er;function rr(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ir(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=rr(n,e),C=(e,t)=>{e&&rn(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),d(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},ee={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted){if(a)r=_||c;else return}t[Jn]&&t[Jn](!0);let i=S[x];i&&ca(e,i)&&i.el[Jn]&&i.el[Jn](),C(r,[t])},enter(e){let t=l,r=u,i=f;if(!n.isMounted){if(a)t=v||l,r=y||u,i=b||f;else return}let o=!1,s=e[Yn]=t=>{o||(o=!0,C(t?i:r,[e]),ee.delayedLeave&&ee.delayedLeave(),e[Yn]=void 0)};t?w(t,[e,s]):s()},leave(t,r){let i=String(e.key);if(t[Yn]&&t[Yn](!0),n.isUnmounting)return r();C(p,[t]);let a=!1,o=t[Jn]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[Jn]=void 0,S[i]===e&&delete S[i])};S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=ir(e,t,n,r,i);return i&&i(a),a}};return ee}function ar(e){if(hr(e))return e=pa(e),e.children=null,e}function or(e){if(!hr(e))return In(e.type)&&e.children?tr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&m(n.default))return n.default()}}function sr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,sr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function cr(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===B?(o.patchFlag&128&&i++,r=r.concat(cr(o.children,t,s))):(t||o.type!==V)&&r.push(s==null?o:pa(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function lr(e,t){return m(e)?s({name:e.name},t,{setup:e}):e}function ur(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}var dr=new WeakMap;function fr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>fr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(mr(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&fr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?Ia(a.component):a.el,l=o?null:s,{i:f,r:p}=e,g=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=N(v),b=v===t?i:e=>u(y,e),x=e=>!0;if(g!=null&&g!==p){if(pr(n),h(g))_[g]=null,b(g)&&(v[g]=null);else if(P(g)){x(g)&&(g.value=null);let e=n;e.k&&(_[e.k]=null)}}if(m(p))nn(p,f,12,[l,_]);else{let t=h(p),n=P(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),dr.delete(e)};t.id=-1,dr.set(e,t),zi(t,r)}else pr(e),i()}}}function pr(e){let t=dr.get(e);t&&(t.flags|=8,dr.delete(e))}de().requestIdleCallback,de().cancelIdleCallback;var mr=e=>!!e.type.__asyncLoader,hr=e=>e.type.__isKeepAlive;function gr(e,t){vr(e,`a`,t)}function _r(e,t){vr(e,`da`,t)}function vr(e,t,n=J){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(br(t,r,n),n){let e=n.parent;for(;e&&e.parent;)hr(e.parent.vnode)&&yr(r,t,n,e),e=e.parent}}function yr(e,t,n,r){let i=br(t,e,r,!0);Dr(()=>{c(r[t],i)},n)}function br(e,t,n=J,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Be();let i=Ea(n),a=rn(t,n,e,r);return i(),Ve(),a};return r?i.unshift(a):i.push(a),a}}var xr=e=>(t,n=J)=>{(!ka||e===`sp`)&&br(e,(...e)=>t(...e),n)},Sr=xr(`bm`),Cr=xr(`m`),wr=xr(`bu`),Tr=xr(`u`),Er=xr(`bum`),Dr=xr(`um`),Or=xr(`sp`),kr=xr(`rtg`),Ar=xr(`rtc`);function jr(e,t=J){br(`ec`,e,t)}var Mr=`components`;function Nr(e,t){return Ir(Mr,e,!0,t)||e}var Pr=Symbol.for(`v-ndc`);function Fr(e){return h(e)?Ir(Mr,e,!1)||e:e||Pr}function Ir(e,t,n=!0,r=!1){let i=R||J;if(i){let n=i.type;if(e===Mr){let e=La(n,!1);if(e&&(e===t||e===T(t)||e===ie(T(t))))return n}let a=Lr(i[e]||n[e],t)||Lr(i.appContext[e],t);return!a&&r?n:a}}function Lr(e,t){return e&&(e[t]||e[T(t)]||e[ie(T(t))])}function z(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||h(e)){let n=o&&It(e),r=!1,s=!1;n&&(r=!Rt(e),s=Lt(e),e=$e(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Ht(Vt(e[n])):Vt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(_(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function Rr(e,t,n={},r,i){if(R.ce||R.parent&&mr(R.parent)&&R.parent.ce){let e=Object.keys(n).length>0;return t!=="default"&&(n.name=t),H(),oa(B,null,[G(`slot`,n,r&&r())],e?-2:64)}let a=e[t];a&&a._c&&(a._d=!1),H();let o=a&&zr(a(n)),s=n.key||o&&o.key,c=oa(B,{key:(s&&!g(s)?s:`_${t}`)+(!o&&r?`_fb`:``)},o||(r?r():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),a&&a._c&&(a._d=!0),c}function zr(e){return e.some(e=>!sa(e)||!(e.type===V||e.type===B&&!zr(e.children)))?e:null}var Br=e=>e?Oa(e)?Ia(e):Br(e.parent):null,Vr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Br(e.parent),$root:e=>Br(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Xr(e),$forceUpdate:e=>e.f||=()=>{hn(e.update)},$nextTick:e=>e.n||=pn.bind(e.proxy),$watch:e=>Nn.bind(e)}),Hr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Ur={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Hr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Gr&&(s[n]=0)}let d=Vr[n],f,p;if(d)return n===`$attrs`&&M(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Hr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Hr(n,c)||u(o,c)||u(i,c)||u(Vr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Wr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Gr=!0;function Kr(e){let t=Xr(e),n=e.proxy,i=e.ctx;Gr=!1,t.beforeCreate&&Jr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:h,beforeUpdate:g,updated:v,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:T,errorCaptured:ne,serverPrefetch:re,expose:ie,inheritAttrs:ae,components:oe,directives:se,filters:ce}=t;if(u&&qr(u,i,null),s)for(let e in s){let t=s[e];m(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);_(t)&&(e.data=Mt(t))}if(Gr=!0,o)for(let e in o){let t=o[e],a=Y({get:m(t)?t.bind(n,n):m(t.get)?t.get.bind(n,n):r,set:!m(t)&&m(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Yr(c[e],i,n,e);if(l){let e=m(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Dn(t,e[t])})}f&&Jr(f,e,`c`);function E(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(E(Sr,p),E(Cr,h),E(wr,g),E(Tr,v),E(gr,y),E(_r,b),E(jr,ne),E(Ar,te),E(kr,T),E(Er,S),E(Dr,w),E(Or,re),d(ie)){if(ie.length){let t=e.exposed||={};ie.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}ee&&e.render===r&&(e.render=ee),ae!=null&&(e.inheritAttrs=ae),oe&&(e.components=oe),se&&(e.directives=se),re&&ur(e)}function qr(e,t,n=r){d(e)&&(e=ti(e));for(let n in e){let r=e[n],i;i=_(r)?`default`in r?On(r.from||n,r.default,!0):On(r.from||n):On(r),P(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Jr(e,t,n){rn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Yr(e,t,n,r){let i=r.includes(`.`)?Pn(n,r):()=>n[r];if(h(e)){let n=t[e];m(n)&&jn(i,n)}else if(m(e))jn(i,e.bind(n));else if(_(e)){if(d(e))e.forEach(e=>Yr(e,t,n,r));else{let r=m(e.handler)?e.handler.bind(n):t[e.handler];m(r)&&jn(i,r,e)}}}function Xr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Zr(c,e,o,!0)),Zr(c,t,o)),_(t)&&a.set(t,c),c}function Zr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Zr(e,a,n,!0),i&&i.forEach(t=>Zr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Qr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Qr={data:$r,props:ii,emits:ii,methods:ri,computed:ri,beforeCreate:ni,created:ni,beforeMount:ni,mounted:ni,beforeUpdate:ni,updated:ni,beforeDestroy:ni,beforeUnmount:ni,destroyed:ni,unmounted:ni,activated:ni,deactivated:ni,errorCaptured:ni,serverPrefetch:ni,components:ri,directives:ri,watch:ai,provide:$r,inject:ei};function $r(e,t){return t?e?function(){return s(m(e)?e.call(this,this):e,m(t)?t.call(this,this):t)}:t:e}function ei(e,t){return ri(ti(e),ti(t))}function ti(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ni(e,t){return e?[...new Set([].concat(e,t))]:t}function ri(e,t){return e?s(Object.create(null),e,t):t}function ii(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Wr(e),Wr(t??{})):t}function ai(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=ni(e[r],t[r]);return n}function oi(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var si=0;function ci(e,t){return function(n,r=null){m(n)||(n=s({},n)),r!=null&&!_(r)&&(r=null);let i=oi(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:si++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ba,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&m(e.install)?(a.add(e),e.install(l,...t)):m(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||G(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,Ia(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(rn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=li;li=l;try{return e()}finally{li=t}}};return l}}var li=null,ui=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${re(t)}Modifiers`];function di(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&ui(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>h(e)?e.trim():e)),s.number&&(a=r.map(E)));let c,l=i[c=ae(n)]||i[c=ae(T(n))];!l&&o&&(l=i[c=ae(re(n))]),l&&rn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,rn(u,e,6,a)}}var fi=new WeakMap;function pi(e,t,n=!1){let r=n?fi:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!m(e)){let r=e=>{let n=pi(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(_(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),_(e)&&r.set(e,o),o)}function mi(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,re(t))||u(e,t))}function hi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Cn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=ha(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=ha(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:gi(c)}}catch(t){ea.length=0,an(t,e,1),v=G(V)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=_i(y,a)),b=pa(b,y,!1,!0))}return n.dirs&&(b=pa(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&sr(b,n.transition),v=b,Cn(_),v}var gi=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},_i=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function vi(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?yi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(o[n]!==r[n]&&!mi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||yi(r,o,l):!!o;return!1}function yi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(t[a]!==e[a]&&!mi(n,a))return!0}return!1}function bi({vnode:e,parent:t},n){for(;t;){let r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}var xi={},Si=()=>Object.create(xi),Ci=e=>Object.getPrototypeOf(e)===xi;function wi(e,t,n,r=!1){let i={},a=Si();e.propsDefaults=Object.create(null),Ei(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Nt(i):e.type.props?i:a,e.attrs=a}function Ti(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(mi(e.emitsOptions,o))continue;let d=t[o];if(c){if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=Di(c,s,t,d,e,!1)}}else d!==a[o]&&(a[o]=d,l=!0)}}}else{Ei(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=re(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Di(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&Ze(e.attrs,`set`,``)}function Ei(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(w(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:mi(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=N(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=Di(a,n,s,i[s],e,!u(i,s))}}return s}function Di(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&m(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Ea(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===re(n))&&(r=!0))}return r}var Oi=new WeakMap;function ki(e,r,i=!1){let a=i?Oi:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!m(e)){let t=e=>{p=!0;let[t,n]=ki(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return _(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);Ai(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(Ai(t)){let n=c[e],r=l[t]=d(n)||m(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=m(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=m(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let h=[l,f];return _(e)&&a.set(e,h),h}function Ai(e){return e[0]!==`$`&&!w(e)}var ji=e=>e===`_`||e===`_ctx`||e===`$stable`,Mi=e=>d(e)?e.map(ha):[ha(e)],Ni=(e,t,n)=>{if(t._n)return t;let r=wn((...e)=>Mi(t(...e)),n);return r._c=!1,r},Pi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ji(n))continue;let i=e[n];if(m(i))t[n]=Ni(n,i,r);else if(i!=null){let e=Mi(i);t[n]=()=>e}}},Fi=(e,t)=>{let n=Mi(t);e.slots.default=()=>n},Ii=(e,t,n)=>{for(let r in t)(n||!ji(r))&&(e[r]=t[r])},Li=(e,t,n)=>{let r=e.slots=Si();if(e.vnode.shapeFlag&32){let e=t._;e?(Ii(r,t,n),n&&ce(r,`_`,e,!0)):Pi(t,r)}else t&&Fi(e,t)},Ri=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:Ii(a,n,r):(o=!n.$stable,Pi(n,a)),s=n}else n&&(Fi(e,n),s={default:1});if(o)for(let e in a)!ji(e)&&s[e]==null&&delete a[e]},zi=Zi;function Bi(e){return Vi(e)}function Vi(e,i){let a=de();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!ca(e,t)&&(r=k(e),O(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Qi:y(e,t,n,r);break;case V:b(e,t,n,r);break;case $i:e??x(t,n,r,o);break;case B:oe(e,t,n,r,i,a,o,s,c);break;default:d&1?ee(e,t,n,r,i,a,o,s,c):d&6?ce(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,A)}u!=null&&i?fr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&fr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},ee=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&ne(e.children,d,null,r,i,Hi(e,a),s,u),_&&En(e,null,r,`created`),T(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!w(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ya(f,r,e)}_&&En(e,null,r,`beforeMount`);let v=Wi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&zi(()=>{f&&ya(f,r,e),v&&g.enter(d),_&&En(e,null,r,`mounted`)},i)},T=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Xi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;T(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ne=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?ga(e[l]):ha(e[l]);v(null,c,t,n,r,i,a,o,s)}},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Ui(r,!1),(g=h.onVnodeBeforeUpdate)&&ya(g,r,n,e),f&&En(n,e,r,`beforeUpdate`),r&&Ui(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?ie(e.dynamicChildren,d,l,r,i,Hi(n,a),o):s||fe(e,n,l,null,r,i,Hi(n,a),o,!1),u>0){if(u&16)ae(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&ae(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&zi(()=>{g&&ya(g,r,n,e),f&&En(n,e,r,`updated`)},i)},ie=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===B||!ca(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},ae=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!w(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(w(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},oe=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),ne(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(ie(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Gi(e,t,!0)):fe(e,t,n,f,i,a,s,c,l)},ce=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):E(t,n,r,i,a,o,c):le(e,t,c)},E=(e,t,n,r,i,a,o)=>{let s=e.component=Sa(e,r,i);if(hr(e)&&(s.ctx.renderer=A),Aa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ue,o),!e.el){let r=s.subTree=G(V);b(null,r,t,n),e.placeholder=r.el}}else ue(s,e,t,n,i,a,o)},le=(e,t,n)=>{let r=t.component=e.component;if(vi(e,t,n)){if(r.asyncDep&&!r.asyncResolved){D(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},ue=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:c,vnode:l}=e;{let n=qi(e);if(n){t&&(t.el=l.el,D(e,t,o)),n.asyncDep.then(()=>{e.isUnmounted||s()});return}}let u=t,d;Ui(e,!1),t?(t.el=l.el,D(e,t,o)):t=l,n&&se(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ya(d,c,t,l),Ui(e,!0);let f=hi(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),k(p),e,i,a),t.el=f.el,u===null&&bi(e,f.el),r&&zi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&zi(()=>ya(d,c,t,l),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=mr(t);if(Ui(e,!1),l&&se(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ya(o,d,t),Ui(e,!0),s&&Ce){let t=()=>{e.subTree=hi(e),Ce(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._def.shadowRoot!==!1&&f.ce._injectChildStyle(p);let o=e.subTree=hi(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&zi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;zi(()=>ya(o,d,e),i)}(t.shapeFlag&256||d&&mr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&zi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Te(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>hn(u),Ui(e,!0),l()},D=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Ti(e,t.props,r,n),Ri(e,t.children,n),Be(),vn(e),Ve()},fe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){me(l,d,n,r,i,a,o,s,c);return}if(f&256){pe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ye(l,i,a),d!==l&&p(n,d)):u&16?m&16?me(l,d,n,r,i,a,o,s,c):ye(l,i,a,!0):(u&8&&p(n,``),m&16&&ne(d,n,r,i,a,o,s,c))},pe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let n=t[p]=l?ga(t[p]):ha(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ye(e,a,o,!0,!1,f):ne(t,r,i,a,o,s,c,l,f)},me=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?ga(t[u]):ha(t[u]);if(ca(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?ga(t[p]):ha(t[p]);if(ca(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?ga(t[u]):ha(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)O(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?ga(t[u]):ha(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){O(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&ca(n,t[_])){i=_;break}i===void 0?O(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Ki(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Yi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?he(n,r,p,2):_--)}}},he=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){he(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,A);return}if(c===B){o(a,t,n);for(let e=0;e<u.length;e++)he(u[e],t,n,r);o(e.anchor,t,n);return}if(c===$i){S(e,t,n);return}if(r!==2&&d&1&&l){if(r===0)l.beforeEnter(a),o(a,t,n),zi(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[Jn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},O=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p}=e;if(d===-2&&(i=!1),s!=null&&(Be(),fr(s,null,n,e,!0),Ve()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let m=u&1&&f,h=!mr(e),g;if(h&&(g=o&&o.onVnodeBeforeUnmount)&&ya(g,t,e),u&6)ve(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}m&&En(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,A,r):l&&!l.hasOnce&&(a!==B||d>0&&d&64)?ye(l,t,n,!1,!0):(a===B&&d&384||!i&&u&16)&&ye(c,t,n),r&&ge(e)}(h&&(g=o&&o.onVnodeUnmounted)||m)&&zi(()=>{g&&ya(g,t,e),m&&En(e,null,t,`unmounted`)},n)},ge=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===B){_e(n,r);return}if(t===$i){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},_e=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ve=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ji(c),Ji(l),r&&se(r),i.stop(),a&&(a.flags|=8,O(o,e,t,n)),s&&zi(s,t),zi(()=>{e.isUnmounted=!0},t)},ye=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)O(e[o],t,n,r,i)},k=e=>{if(e.shapeFlag&6)return k(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Fn];return n?h(n):t},be=!1,xe=(e,t,n)=>{let r;e==null?t._vnode&&(O(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,be||=(be=!0,vn(r),yn(),!1)},A={p:v,um:O,m:he,r:ge,mt:E,mc:ne,pc:fe,pbc:ie,n:k,o:e},Se,Ce;return i&&([Se,Ce]=i(A)),{render:xe,hydrate:Se,createApp:ci(xe,Se)}}function Hi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ui({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Wi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Gi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let t=0;t<r.length;t++){let a=r[t],o=i[t];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[t]=ga(i[t]),o.el=a.el),!n&&o.patchFlag!==-2&&Gi(a,o)),o.type===Qi&&(o.patchFlag===-1?o.__elIndex=t+ +(e.type===B):o.el=a.el),o.type===V&&!o.el&&(o.el=a.el)}}function Ki(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function qi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:qi(t)}function Ji(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Yi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Yi(t.subTree):null}var Xi=e=>e.__isSuspense;function Zi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):_n(e)}var B=Symbol.for(`v-fgt`),Qi=Symbol.for(`v-txt`),V=Symbol.for(`v-cmt`),$i=Symbol.for(`v-stc`),ea=[],ta=null;function H(e=!1){ea.push(ta=e?null:[])}function na(){ea.pop(),ta=ea[ea.length-1]||null}var ra=1;function ia(e,t=!1){ra+=e,e<0&&ta&&t&&(ta.hasOnce=!0)}function aa(e){return e.dynamicChildren=ra>0?ta||n:null,na(),ra>0&&ta&&ta.push(e),e}function U(e,t,n,r,i,a){return aa(W(e,t,n,r,i,a,!0))}function oa(e,t,n,r,i){return aa(G(e,t,n,r,i,!0))}function sa(e){return e?e.__v_isVNode===!0:!1}function ca(e,t){return e.type===t.type&&e.key===t.key}var la=({key:e})=>e??null,ua=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:h(e)||P(e)||m(e)?{i:R,r:e,k:t,f:!!n}:e);function W(e,t=null,n=null,r=0,i=null,a=e===B?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&la(t),ref:t&&ua(t),scopeId:Sn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:R};return s?(_a(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=h(n)?8:16),ra>0&&!o&&ta&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&ta.push(c),c}var G=da;function da(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Pr)&&(e=V),sa(e)){let r=pa(e,t,!0);return n&&_a(r,n),ra>0&&!a&&ta&&(r.shapeFlag&6?ta[ta.indexOf(e)]=r:ta.push(r)),r.patchFlag=-2,r}if(Ra(e)&&(e=e.__vccOpts),t){t=fa(t);let{class:e,style:n}=t;e&&!h(e)&&(t.class=O(e)),_(n)&&(zt(n)&&!d(n)&&(n=s({},n)),t.style=D(n))}let o=h(e)?1:Xi(e)?128:In(e)?64:_(e)?4:m(e)?2:0;return W(e,t,n,r,i,o,a,!0)}function fa(e){return e?zt(e)||Ci(e)?s({},e):e:null}function pa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?va(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&la(l),ref:t&&t.ref?n&&a?d(a)?a.concat(ua(t)):[a,ua(t)]:ua(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==B?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pa(e.ssContent),ssFallback:e.ssFallback&&pa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&sr(u,c.clone(u)),u}function K(e=` `,t=0){return G(Qi,null,e,t)}function ma(e,t){let n=G($i,null,e);return n.staticCount=t,n}function q(e=``,t=!1){return t?(H(),oa(V,null,e)):G(V,null,e)}function ha(e){return e==null||typeof e==`boolean`?G(V):d(e)?G(B,null,e.slice()):sa(e)?ga(e):G(Qi,null,String(e))}function ga(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pa(e)}function _a(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),_a(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!Ci(t)?t._ctx=R:r===3&&R&&(R.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else m(t)?(t={default:t,_ctx:R},n=32):(t=String(t),r&64?(n=16,t=[K(t)]):n=8);e.children=t,e.shapeFlag|=n}function va(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=O([t.class,r.class]));else if(e===`style`)t.style=D([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))&&(t[e]=n?[].concat(n,i):i)}else e!==``&&(t[e]=r[e])}return t}function ya(e,t,n,r=null){rn(e,t,7,[n,r])}var ba=oi(),xa=0;function Sa(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||ba,o={uid:xa++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Se(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ki(i,a),emitsOptions:pi(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=di.bind(null,o),e.ce&&e.ce(o),o}var J=null,Ca=()=>J||R,wa,Ta;{let e=de(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};wa=t(`__VUE_INSTANCE_SETTERS__`,e=>J=e),Ta=t(`__VUE_SSR_SETTERS__`,e=>ka=e)}var Ea=e=>{let t=J;return wa(e),e.scope.on(),()=>{e.scope.off(),wa(t)}},Da=()=>{J&&J.scope.off(),wa(null)};function Oa(e){return e.vnode.shapeFlag&4}var ka=!1;function Aa(e,t=!1,n=!1){t&&Ta(t);let{props:r,children:i}=e.vnode,a=Oa(e);wi(e,r,a,t),Li(e,i,n||t);let o=a?ja(e,t):void 0;return t&&Ta(!1),o}function ja(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ur);let{setup:r}=n;if(r){Be();let n=e.setupContext=r.length>1?Fa(e):null,i=Ea(e),a=nn(r,e,0,[e.props,n]),o=v(a);if(Ve(),i(),(o||e.sp)&&!mr(e)&&ur(e),o){if(a.then(Da,Da),t)return a.then(n=>{Ma(e,n,t)}).catch(t=>{an(t,e,0)});e.asyncDep=a}else Ma(e,a,t)}else Na(e,t)}function Ma(e,t,n){m(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_(t)&&(e.setupState=qt(t)),Na(e,n)}function Na(e,t,n){let i=e.type;e.render||=i.render||r;{let t=Ea(e);Be();try{Kr(e)}finally{Ve(),t()}}}var Pa={get(e,t){return M(e,`get`,``),e[t]}};function Fa(e){return{attrs:new Proxy(e.attrs,Pa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Ia(e){return e.exposed?e.exposeProxy||=new Proxy(qt(Bt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vr)return Vr[n](e)},has(e,t){return t in e||t in Vr}}):e.proxy}function La(e,t=!0){return m(e)?e.displayName||e.name:e.name||t&&e.__name}function Ra(e){return m(e)&&`__vccOpts`in e}var Y=(e,t)=>Yt(e,t,ka);function za(e,t,n){try{ia(-1);let r=arguments.length;return r===2?_(t)&&!d(t)?sa(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&sa(n)&&(n=[n]),G(e,t,n))}finally{ia(1)}}var Ba=`3.5.27`,Va=void 0,Ha=typeof window<`u`&&window.trustedTypes;if(Ha)try{Va=Ha.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ua=Va?e=>Va.createHTML(e):e=>e,Wa=`http://www.w3.org/2000/svg`,Ga=`http://www.w3.org/1998/Math/MathML`,Ka=typeof document<`u`?document:null,qa=Ka&&Ka.createElement(`template`),Ja={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ka.createElementNS(Wa,e):t===`mathml`?Ka.createElementNS(Ga,e):n?Ka.createElement(e,{is:n}):Ka.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ka.createTextNode(e),createComment:e=>Ka.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ka.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{qa.innerHTML=Ua(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=qa.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ya=`transition`,Xa=`animation`,Za=Symbol(`_vtc`),Qa={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$a=s({},Qn,Qa),eo=(e=>(e.displayName=`Transition`,e.props=$a,e))((e,{slots:t})=>za(nr,ro(e),t)),to=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},no=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function ro(e){let t={};for(let n in e)n in Qa||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=io(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:ee=b}=t,te=(e,t,n,r)=>{e._enterCancelled=r,so(e,t?d:c),so(e,t?u:o),n&&n()},T=(e,t)=>{e._isLeaving=!1,so(e,f),so(e,m),so(e,p),t&&t()},ne=e=>(t,n)=>{let i=e?w:y,o=()=>te(t,e,n);to(i,[t,o]),co(()=>{so(t,e?l:a),oo(t,e?d:c),no(i)||uo(t,r,g,o)})};return s(t,{onBeforeEnter(e){to(v,[e]),oo(e,a),oo(e,o)},onBeforeAppear(e){to(C,[e]),oo(e,l),oo(e,u)},onEnter:ne(!1),onAppear:ne(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>T(e,t);oo(e,f),e._enterCancelled?(oo(e,p),ho(e)):(ho(e),oo(e,p)),co(()=>{e._isLeaving&&(so(e,f),oo(e,m),no(x)||uo(e,r,_,n))}),to(x,[e,n])},onEnterCancelled(e){te(e,!1,void 0,!0),to(b,[e])},onAppearCancelled(e){te(e,!0,void 0,!0),to(ee,[e])},onLeaveCancelled(e){T(e),to(S,[e])}})}function io(e){if(e==null)return null;if(_(e))return[ao(e.enter),ao(e.leave)];{let t=ao(e);return[t,t]}}function ao(e){return le(e)}function oo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Za]||(e[Za]=new Set)).add(t)}function so(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Za];n&&(n.delete(t),n.size||(e[Za]=void 0))}function co(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var lo=0;function uo(e,t,n,r){let i=e._endId=++lo,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=fo(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function fo(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Ya}Delay`),a=r(`${Ya}Duration`),o=po(i,a),s=r(`${Xa}Delay`),c=r(`${Xa}Duration`),l=po(s,c),u=null,d=0,f=0;t===Ya?o>0&&(u=Ya,d=o,f=a.length):t===Xa?l>0&&(u=Xa,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Ya:Xa:null,f=u?u===Ya?a.length:c.length:0);let p=u===Ya&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ya}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function po(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>mo(t)+mo(e[n])))}function mo(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function ho(e){return(e?e.ownerDocument:document).body.offsetHeight}function go(e,t,n){let r=e[Za];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var _o=Symbol(`_vod`),vo=Symbol(`_vsh`),yo=Symbol(``),bo=/(?:^|;)\s*display\s*:/;function xo(e,t,n){let r=e.style,i=h(n),a=!1;if(n&&!i){if(t){if(h(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Co(r,t,``)}else for(let e in t)n[e]??Co(r,e,``)}for(let e in n)e===`display`&&(a=!0),Co(r,e,n[e])}else if(i){if(t!==n){let e=r[yo];e&&(n+=`;`+e),r.cssText=n,a=bo.test(n)}}else t&&e.removeAttribute(`style`);_o in e&&(e[_o]=a?r.display:``,e[vo]&&(r.display=`none`))}var So=/\s*!important$/;function Co(e,t,n){if(d(n))n.forEach(n=>Co(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Eo(e,t);So.test(n)?e.setProperty(re(r),n.replace(So,``),`important`):e[r]=n}}var wo=[`Webkit`,`Moz`,`ms`],To={};function Eo(e,t){let n=To[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return To[t]=r;r=ie(r);for(let n=0;n<wo.length;n++){let i=wo[n]+r;if(i in e)return To[t]=i}return t}var Do=`http://www.w3.org/1999/xlink`;function Oo(e,t,n,r,i,a=_e(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Do,t.slice(6,t.length)):e.setAttributeNS(Do,t,n):n==null||a&&!ve(n)?e.removeAttribute(t):e.setAttribute(t,a?``:g(n)?String(n):n)}function ko(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ua(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ve(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ao(e,t,n,r){e.addEventListener(t,n,r)}function jo(e,t,n,r){e.removeEventListener(t,n,r)}var Mo=Symbol(`_vei`);function No(e,t,n,r,i=null){let a=e[Mo]||(e[Mo]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Fo(t);r?Ao(e,n,a[t]=zo(r,i),s):o&&(jo(e,n,o,s),a[t]=void 0)}}var Po=/(?:Once|Passive|Capture)$/;function Fo(e){let t;if(Po.test(e)){t={};let n;for(;n=e.match(Po);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):re(e.slice(2)),t]}var Io=0,Lo=Promise.resolve(),Ro=()=>Io||=(Lo.then(()=>Io=0),Date.now());function zo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;rn(Bo(e,n.value),t,5,[e])};return n.value=e,n.attached=Ro(),n}function Bo(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}var Vo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ho=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?go(e,r,c):t===`style`?xo(e,n,r):a(t)?o(t)||No(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):Uo(e,t,r,c))?(ko(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Oo(e,t,r,c,s,t!==`value`)):e._isVueCE&&(/[A-Z]/.test(t)||!h(r))?ko(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Oo(e,t,r,c))};function Uo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Vo(t)&&m(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Vo(t)&&h(n)?!1:t in e}var Wo=new WeakMap,Go=new WeakMap,Ko=Symbol(`_moveCb`),qo=Symbol(`_enterCb`),Jo=(e=>(delete e.props.mode,e))({name:`TransitionGroup`,props:s({},$a,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=Ca(),r=Xn(),i,a;return Tr(()=>{if(!i.length)return;let t=e.moveClass||`${e.name||`v`}-move`;if(!Qo(i[0].el,n.vnode.el,t)){i=[];return}i.forEach(Yo),i.forEach(Xo);let r=i.filter(Zo);ho(n.vnode.el),r.forEach(e=>{let n=e.el,r=n.style;oo(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n[Ko]=e=>{e&&e.target!==n||(!e||e.propertyName.endsWith(`transform`))&&(n.removeEventListener(`transitionend`,i),n[Ko]=null,so(n,t))};n.addEventListener(`transitionend`,i)}),i=[]}),()=>{let o=N(e),s=ro(o),c=o.tag||B;if(i=[],a)for(let e=0;e<a.length;e++){let t=a[e];t.el&&t.el instanceof Element&&(i.push(t),sr(t,ir(t,s,r,n)),Wo.set(t,{left:t.el.offsetLeft,top:t.el.offsetTop}))}a=t.default?cr(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&sr(t,ir(t,s,r,n))}return G(c,null,a)}}});function Yo(e){let t=e.el;t[Ko]&&t[Ko](),t[qo]&&t[qo]()}function Xo(e){Go.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function Zo(e){let t=Wo.get(e),n=Go.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration=`0s`,e}}function Qo(e,t,n){let r=e.cloneNode(),i=e[Za];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let a=t.nodeType===1?t:t.parentNode;a.appendChild(r);let{hasTransform:o}=fo(r);return a.removeChild(r),o}var $o=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>se(t,e):t};function es(e){e.target.composing=!0}function ts(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var ns=Symbol(`_assign`);function rs(e,t,n){return t&&(e=e.trim()),n&&(e=E(e)),e}var is={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ns]=$o(i);let a=r||i.props&&i.props.type===`number`;Ao(e,t?`change`:`input`,t=>{t.target.composing||e[ns](rs(e.value,n,a))}),(n||a)&&Ao(e,`change`,()=>{e.value=rs(e.value,n,a)}),t||(Ao(e,`compositionstart`,es),Ao(e,`compositionend`,ts),Ao(e,`change`,ts))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[ns]=$o(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?E(e.value):e.value,c=t??``;s!==c&&(document.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c))}},as=[`ctrl`,`shift`,`alt`,`meta`],os={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>as.some(n=>e[`${n}Key`]&&!t.includes(n))},ss=(e,t)=>{let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=os[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},cs=s({patchProp:Ho},Ja),ls;function us(){return ls||=Bi(cs)}var ds=((...e)=>{let t=us().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=ps(e);if(!r)return;let i=t._component;!m(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,fs(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function fs(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function ps(e){return h(e)?document.querySelector(e):e}var ms=typeof document<`u`;function hs(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function gs(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&hs(e.default)}var X=Object.assign;function _s(e,t){let n={};for(let r in t){let i=t[r];n[r]=ys(i)?i.map(e):e(i)}return n}var vs=()=>{},ys=Array.isArray;function bs(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var xs=/#/g,Ss=/&/g,Cs=/\//g,ws=/=/g,Ts=/\?/g,Es=/\+/g,Ds=/%5B/g,Os=/%5D/g,ks=/%5E/g,As=/%60/g,js=/%7B/g,Ms=/%7C/g,Ns=/%7D/g,Ps=/%20/g;function Fs(e){return e==null?``:encodeURI(``+e).replace(Ms,`|`).replace(Ds,`[`).replace(Os,`]`)}function Is(e){return Fs(e).replace(js,`{`).replace(Ns,`}`).replace(ks,`^`)}function Ls(e){return Fs(e).replace(Es,`%2B`).replace(Ps,`+`).replace(xs,`%23`).replace(Ss,`%26`).replace(As,"`").replace(js,`{`).replace(Ns,`}`).replace(ks,`^`)}function Rs(e){return Ls(e).replace(ws,`%3D`)}function zs(e){return Fs(e).replace(xs,`%23`).replace(Ts,`%3F`)}function Bs(e){return zs(e).replace(Cs,`%2F`)}function Vs(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var Hs=/\/$/,Us=e=>e.replace(Hs,``);function Ws(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Qs(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:Vs(o)}}function Gs(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Ks(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function qs(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Js(t.matched[r],n.matched[i])&&Ys(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Js(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ys(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Xs(e[n],t[n]))return!1;return!0}function Xs(e,t){return ys(e)?Zs(e,t):ys(t)?Zs(t,e):e?.valueOf()===t?.valueOf()}function Zs(e,t){return ys(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Qs(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var $s={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},ec=function(e){return e.pop=`pop`,e.push=`push`,e}({}),tc=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function nc(e){if(!e){if(ms){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Us(e)}var rc=/^[^#]+#/;function ic(e,t){return e.replace(rc,`#`)+t}function ac(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var oc=()=>({left:window.scrollX,top:window.scrollY});function sc(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=ac(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function cc(e,t){return(history.state?history.state.position-t:-1)+e}var lc=new Map;function uc(e,t){lc.set(e,t)}function dc(e){let t=lc.get(e);return lc.delete(e),t}function fc(e){return typeof e==`string`||e&&typeof e==`object`}function pc(e){return typeof e==`string`||typeof e==`symbol`}var Z=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),mc=Symbol(``);Z.MATCHER_NOT_FOUND,Z.NAVIGATION_GUARD_REDIRECT,Z.NAVIGATION_ABORTED,Z.NAVIGATION_CANCELLED,Z.NAVIGATION_DUPLICATED;function hc(e,t){return X(Error(),{type:e,[mc]:!0},t)}function gc(e,t){return e instanceof Error&&mc in e&&(t==null||!!(e.type&t))}function _c(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Es,` `),i=r.indexOf(`=`),a=Vs(i<0?r:r.slice(0,i)),o=i<0?null:Vs(r.slice(i+1));if(a in t){let e=t[a];ys(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function vc(e){let t=``;for(let n in e){let r=e[n];if(n=Rs(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(ys(r)?r.map(e=>e&&Ls(e)):[r&&Ls(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function yc(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=ys(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var bc=Symbol(``),xc=Symbol(``),Sc=Symbol(``),Cc=Symbol(``),wc=Symbol(``);function Tc(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ec(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(hc(Z.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):fc(e)?c(hc(Z.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Dc(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(hs(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Ec(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=gs(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Ec(c,n,r,o,e,i)()}))}}}return a}function Oc(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Js(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Js(e,s))||i.push(s))}return[n,r,i]}var kc=()=>location.protocol+`//`+location.host;function Ac(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Ks(n,``)}return Ks(n,e)+r+i}function jc(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Ac(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:ec.pop,direction:u?u>0?tc.forward:tc.back:tc.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(X({},e.state,{scroll:oc()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function Mc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?oc():null}}function Nc(e){let{history:t,location:n}=window,r={value:Ac(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:kc()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,X({},t.state,Mc(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=X({},i.value,t.state,{forward:e,scroll:oc()});a(o.current,o,!0),a(e,X({},Mc(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Pc(e){e=nc(e);let t=Nc(e),n=jc(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=X({location:``,base:e,go:r,createHref:ic.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var Fc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Q=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Q||{}),Ic={type:Fc.Static,value:``},Lc=/[a-zA-Z0-9_]/;function Rc(e){if(!e)return[[]];if(e===`/`)return[[Ic]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Q.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Q.Static?a.push({type:Fc.Static,value:l}):n===Q.Param||n===Q.ParamRegExp||n===Q.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:Fc.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==Q.ParamRegExp){r=n,n=Q.EscapeNext;continue}switch(n){case Q.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Q.Param):f();break;case Q.EscapeNext:f(),n=r;break;case Q.Param:c===`(`?n=Q.ParamRegExp:Lc.test(c)?f():(d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Q.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Q.ParamRegExpEnd:u+=c;break;case Q.ParamRegExpEnd:d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}}return n===Q.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var zc=`[^/]+?`,Bc={sensitive:!1,strict:!1,start:!0,end:!0},Vc=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(Vc||{}),Hc=/[.+*?^${}()[\]/\\]/g;function Uc(e,t){let n=X({},Bc,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[Vc.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=Vc.Segment+(n.sensitive?Vc.BonusCaseSensitive:0);if(o.type===Fc.Static)r||(i+=`/`),i+=o.value.replace(Hc,`\\$&`),s+=Vc.Static;else if(o.type===Fc.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||zc;if(u!==zc){s+=Vc.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=Vc.Dynamic,c&&(s+=Vc.BonusOptional),n&&(s+=Vc.BonusRepeatable),u===`.*`&&(s+=Vc.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=Vc.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===Fc.Static)n+=e.value;else if(e.type===Fc.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(ys(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=ys(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Wc(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Vc.Static+Vc.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Vc.Static+Vc.Segment?1:-1:0}function Gc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Wc(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(Kc(r))return 1;if(Kc(i))return-1}return i.length-r.length}function Kc(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var qc={strict:!1,end:!0,sensitive:!1};function Jc(e,t,n){let r=X(Uc(Rc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Yc(e,t){let n=[],r=new Map;t=bs(qc,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Zc(e);s.aliasOf=r&&r.record;let l=bs(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Zc(X({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=Jc(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!$c(d)&&o(e.name)),rl(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:vs}function o(e){if(pc(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=tl(e,n);n.splice(t,0,e),e.record.name&&!$c(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw hc(Z.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=X(Xc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Xc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw hc(Z.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=X({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:el(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Xc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Zc(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Qc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Qc(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function $c(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function el(e){return e.reduce((e,t)=>X(e,t.meta),{})}function tl(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Gc(e,t[i])<0?r=i:n=i+1}let i=nl(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function nl(e){let t=e;for(;t=t.parent;)if(rl(t)&&Gc(e,t)===0)return t}function rl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function il(e){let t=On(Sc),n=On(Cc),r=Y(()=>{let n=I(e.to);return t.resolve(n)}),i=Y(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Js.bind(null,i));if(o>-1)return o;let s=ll(e[t-2]);return t>1&&ll(i)===s&&a[a.length-1].path!==s?a.findIndex(Js.bind(null,e[t-2])):o}),a=Y(()=>i.value>-1&&cl(n.params,r.value.params)),o=Y(()=>i.value>-1&&i.value===n.matched.length-1&&Ys(n.params,r.value.params));function s(n={}){if(sl(n)){let n=t[I(e.replace)?`replace`:`push`](I(e.to)).catch(vs);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:Y(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function al(e){return e.length===1?e[0]:e}var ol=lr({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:il,setup(e,{slots:t}){let n=Mt(il(e)),{options:r}=On(Sc),i=Y(()=>({[ul(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[ul(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&al(t.default(n));return e.custom?r:za(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function sl(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function cl(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!ys(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function ll(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var ul=(e,t,n)=>e??t??n,dl=lr({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=On(wc),i=Y(()=>e.route||r.value),a=On(xc,0),o=Y(()=>{let e=I(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=Y(()=>i.value.matched[o.value]);Dn(xc,Y(()=>o.value+1)),Dn(bc,s),Dn(wc,i);let c=F();return jn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!Js(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return fl(n.default,{Component:l,route:r});let u=o.props[a],d=za(l,X({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return fl(n.default,{Component:d,route:r})||d}}});function fl(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var pl=dl;function ml(e){let t=Yc(e.routes,e),n=e.parseQuery||_c,r=e.stringifyQuery||vc,i=e.history,a=Tc(),o=Tc(),s=Tc(),c=Ut($s),l=$s;ms&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=_s.bind(null,e=>``+e),d=_s.bind(null,Bs),f=_s.bind(null,Vs);function p(e,n){let r,i;return pc(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=X({},a||c.value),typeof e==`string`){let r=Ws(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return X(r,o,{params:f(o.params),hash:Vs(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=X({},e,{path:Ws(n,e.path,a.path).path});else{let t=X({},e.params);for(let e in t)t[e]??delete t[e];o=X({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Gs(r,X({},e,{hash:Is(l),path:s.path})),m=i.createHref(p);return X({fullPath:p,hash:l,query:r===vc?yc(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?Ws(n,e,c.value.path):X({},e)}function y(e,t){if(l!==e)return hc(Z.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(X(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),X({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(X(v(u),{state:typeof u==`object`?X({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&qs(r,i,n)&&(f=hc(Z.NAVIGATION_DUPLICATED,{to:d,from:i}),ue(i,i,!0,!1)),(f?Promise.resolve(f):te(d,i)).catch(e=>gc(e)?gc(e,Z.NAVIGATION_GUARD_REDIRECT)?e:le(e):ce(e,d,i)).then(e=>{if(e){if(gc(e,Z.NAVIGATION_GUARD_REDIRECT))return C(X({replace:s},v(e.to),{state:typeof e.to==`object`?X({},a,e.to.state):a,force:o}),t||d)}else e=ne(d,i,!0,s,a);return T(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function ee(e){let t=fe.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function te(e,t){let n,[r,i,s]=Oc(e,t);n=Dc(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Ec(r,e,t))});let c=w.bind(null,e,t);return n.push(c),me(n).then(()=>{n=[];for(let r of a.list())n.push(Ec(r,e,t));return n.push(c),me(n)}).then(()=>{n=Dc(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Ec(r,e,t))});return n.push(c),me(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(ys(r.beforeEnter))for(let i of r.beforeEnter)n.push(Ec(i,e,t));else n.push(Ec(r.beforeEnter,e,t))}return n.push(c),me(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Dc(s,`beforeRouteEnter`,e,t,ee),n.push(c),me(n))).then(()=>{n=[];for(let r of o.list())n.push(Ec(r,e,t));return n.push(c),me(n)}).catch(e=>gc(e,Z.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function T(e,t,n){s.list().forEach(r=>ee(()=>r(e,t,n)))}function ne(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===$s,l=ms?history.state:{};n&&(r||s?i.replace(e.fullPath,X({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,ue(e,t,n,s),le()}let re;function ie(){re||=i.listen((e,t,n)=>{if(!pe.listening)return;let r=_(e),a=S(r,pe.currentRoute.value);if(a){C(X(a,{replace:!0,force:!0}),r).catch(vs);return}l=r;let o=c.value;ms&&uc(cc(o.fullPath,n.delta),oc()),te(r,o).catch(e=>gc(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_CANCELLED)?e:gc(e,Z.NAVIGATION_GUARD_REDIRECT)?(C(X(v(e.to),{force:!0}),r).then(e=>{gc(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===ec.pop&&i.go(-1,!1)}).catch(vs),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ce(e,r,o))).then(e=>{e||=ne(r,o,!1),e&&(n.delta&&!gc(e,Z.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===ec.pop&&gc(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),T(r,o,e)}).catch(vs)})}let ae=Tc(),oe=Tc(),se;function ce(e,t,n){le(e);let r=oe.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function E(){return se&&c.value!==$s?Promise.resolve():new Promise((e,t)=>{ae.add([e,t])})}function le(e){return se||(se=!e,ie(),ae.list().forEach(([t,n])=>e?n(e):t()),ae.reset()),e}function ue(t,n,r,i){let{scrollBehavior:a}=e;if(!ms||!a)return Promise.resolve();let o=!r&&dc(cc(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return pn().then(()=>a(t,n,o)).then(e=>e&&sc(e)).catch(e=>ce(e,t,n))}let de=e=>i.go(e),D,fe=new Set,pe={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:oe.add,isReady:E,install(e){e.component(`RouterLink`,ol),e.component(`RouterView`,pl),e.config.globalProperties.$router=pe,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>I(c)}),ms&&!D&&c.value===$s&&(D=!0,b(i.location).catch(e=>{}));let t={};for(let e in $s)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Sc,pe),e.provide(Cc,Nt(t)),e.provide(wc,c);let n=e.unmount;fe.add(e),e.unmount=function(){fe.delete(e),fe.size<1&&(l=$s,re&&re(),re=null,c.value=$s,D=!1,se=!1),n()}}};function me(e){return e.reduce((e,t)=>e.then(()=>ee(t)),Promise.resolve())}return pe}function hl(){return On(Sc)}function gl(e){return On(Cc)}var _l={__name:`App`,setup(e){let t=hl(),n=F(!0);return t.isReady().then(()=>{setTimeout(()=>{n.value=!1},100)}),(e,t)=>{let r=Nr(`router-view`);return H(),oa(r,null,{default:wn(({Component:e,route:t})=>[G(eo,{name:n.value?``:`page`,mode:`out-in`},{default:wn(()=>[(H(),oa(Fr(e),{key:t.path}))]),_:2},1032,[`name`])]),_:1})}}},vl=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},yl={},bl={"aria-labelledby":`kitsudo-announcement`,class:`mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8`},xl={class:`announcement-card`},Sl={class:`flex w-full gap-2 sm:w-auto`};function Cl(e,t){let n=Nr(`router-link`);return H(),U(`aside`,bl,[W(`div`,xl,[t[2]||=W(`div`,{class:`app-icon relative h-12 w-12 shrink-0 sm:h-14 sm:w-14`,role:`img`,"aria-label":`Kitsudo app icon`},[W(`span`,{class:`absolute inset-0 rounded-[36%] bg-[#24284b]`}),W(`img`,{src:`/kitsudo/logo.svg`,alt:``,class:`absolute inset-[8%] h-auto w-auto object-contain`})],-1),t[3]||=W(`div`,{class:`min-w-[180px] flex-1`},[W(`h2`,{id:`kitsudo-announcement`,class:`mb-0.5 text-sm font-bold text-catppuccin-text sm:text-base`},` Kitsudo is now available on Google Play. `),W(`p`,{class:`hidden text-catppuccin-gray sm:block sm:text-xs`},` Free, open-source, and built without ads or tracking. `)],-1),W(`div`,Sl,[G(n,{to:`/kitsudo`,class:`announcement-button announcement-secondary flex-1 sm:flex-none`},{default:wn(()=>[...t[0]||=[K(` [ More info ] `,-1)]]),_:1}),t[1]||=W(`a`,{href:`https://play.google.com/store/apps/details?id=dev.heckr.kitsudo`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`View Kitsudo on Google Play (opens in a new tab)`,class:`announcement-button announcement-primary flex-1 sm:flex-none`},` [ Google Play ] `,-1)])])])}var wl=vl(yl,[[`render`,Cl],[`__scopeId`,`data-v-ce7b5d9e`]]),Tl={mauve:`#cba6f7`,blue:`#89b4fa`,green:`#a6e3a1`,red:`#f38ba8`,pink:`#f5c2e7`,yellow:`#f9e2af`,teal:`#94e2d5`,sapphire:`#74c7ec`,sky:`#89dceb`,lavender:`#b4befe`,peach:`#fab387`,white:`#cdd6f4`},El=[{id:`posts`,label:`posts`,href:`/posts`,external:!1,accentColor:`mauve`},{id:`projects`,label:`projects`,href:`/projects`,external:!1,accentColor:`lavender`},{id:`github`,label:`github`,href:`https://github.com/Hecker-01`,external:!0,accentColor:`white`}];function Dl(){return El.map(e=>({...e,accentColor:Tl[e.accentColor]||Tl.mauve}))}var $=Mt({discordUser:null,spotify:null,discordStatus:`offline`,discordStatusColor:`text-catppuccin-subtle`,editorActivity:null,isConnected:!1,isLoading:!0});new class{constructor(){this.ws=null,this.heartbeat=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.maxAttempts=5,this.userId=`766897363050037248`,this.isConnecting=!1}connect(){if(!(this.isConnecting||this.ws&&this.ws.readyState===WebSocket.OPEN)){this.isConnecting=!0,$.isLoading=!0;try{this.ws=new WebSocket(`wss://api.lanyard.rest/socket`),this.ws.onopen=()=>{this.isConnecting=!1,this.reconnectAttempts=0,$.isConnected=!0,this.ws.send(JSON.stringify({op:2,d:{subscribe_to_id:this.userId}}))},this.ws.onmessage=e=>{try{this.handleMessage(JSON.parse(e.data))}catch{}},this.ws.onclose=e=>{this.isConnecting=!1,$.isConnected=!1,this.heartbeat&&=(clearInterval(this.heartbeat),null),e.code!==1e3&&this.reconnectAttempts<this.maxAttempts&&this.scheduleReconnect()},this.ws.onerror=()=>{this.isConnecting=!1,$.isConnected=!1}}catch{this.isConnecting=!1,$.isLoading=!1,this.scheduleReconnect()}}}handleMessage(e){e.op===1?this.startHeartbeat(e.d.heartbeat_interval):e.op===0&&(e.t===`INIT_STATE`||e.t===`PRESENCE_UPDATE`)&&(this.updatePresence(e.d),$.isLoading=!1)}updatePresence(e){e.discord_user&&($.discordUser={username:e.discord_user.username,discriminator:e.discord_user.discriminator,avatar:e.discord_user.avatar,id:e.discord_user.id}),$.spotify=e.spotify?{song:e.spotify.song,artist:e.spotify.artist,track_id:e.spotify.track_id}:null,e.discord_status&&($.discordStatus=e.discord_status,$.discordStatusColor=e.discord_status===`online`?`text-catppuccin-gold`:`text-catppuccin-subtle`),$.editorActivity=e.activities?.find(e=>e.name===`Visual Studio Code`||e.name===`Code`||e.name===`Zed`)}startHeartbeat(e){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({op:3}))},e)}scheduleReconnect(){this.reconnectTimeout&&clearTimeout(this.reconnectTimeout),this.reconnectAttempts++;let e=Math.min(1e3*2**(this.reconnectAttempts-1),3e4);this.reconnectTimeout=setTimeout(()=>this.connect(),e)}disconnect(){this.reconnectTimeout&&=(clearTimeout(this.reconnectTimeout),null),this.heartbeat&&=(clearInterval(this.heartbeat),null),this.ws&&=(this.ws.close(1e3,`Manual disconnect`),null),$.isConnected=!1}}().connect();var Ol={class:`border-l-2 border-catppuccin-surface pl-4 mb-4`},kl={class:`flex gap-4 sm:gap-6 text-sm bg-catppuccin-surface/10 rounded-lg p-4 items-center`},Al={class:`hidden sm:block flex-shrink-0 ascii-tooltip-wrapper`},jl={class:`text-catppuccin-mauve text-xs select-none ascii-art`,"aria-label":`Art credit: @vilthuril.rah on Instagram`},Ml={class:`space-y-0.5 min-w-0 flex-1`},Nl={key:0,class:`flex`},Pl={class:`text-catppuccin-text truncate`},Fl={key:1,class:`flex`},Il={class:`text-catppuccin-text`},Ll={key:2,class:`flex`},Rl={class:`text-catppuccin-text truncate`},zl={key:3,class:`flex`},Bl={class:`text-catppuccin-mauve font-bold w-20 flex-shrink-0`},Vl={class:`text-catppuccin-text truncate`},Hl={key:0},Ul={key:1,class:`text-catppuccin-subtle`},Wl={key:2},Gl=vl({__name:`NeofetchStatus`,setup(e){let t=Y(()=>$.discordStatusColor),n=Y(()=>$.spotify),r=Y(()=>$.discordStatus),i=Y(()=>$.discordUser),a=Y(()=>$.editorActivity),o=Y(()=>$.isLoading),s=F({name:``,version:``});Cr(()=>{let e=navigator.userAgent,t=`Unknown`,n=``;e.includes(`Firefox/`)?(t=`Firefox`,n=e.match(/Firefox\/(\d+(\.\d+)?)/)?.[1]||``):e.includes(`Edg/`)?(t=`Edge`,n=e.match(/Edg\/(\d+(\.\d+)?)/)?.[1]||``):e.includes(`Chrome/`)?(t=`Chrome`,n=e.match(/Chrome\/(\d+(\.\d+)?)/)?.[1]||``):e.includes(`Safari/`)&&!e.includes(`Chrome`)?(t=`Safari`,n=e.match(/Version\/(\d+(\.\d+)?)/)?.[1]||``):(e.includes(`Opera`)||e.includes(`OPR/`))&&(t=`Opera`,n=e.match(/(?:Opera|OPR)\/(\d+(\.\d+)?)/)?.[1]||``),s.value={name:t,version:n}});let c=`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠚⠛⢻⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⢀⠴⢦⡀⠀⠀⣀⡤⠞⠋⠁⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⠉⢷⡋⠀⣀⣿⠶⠛⠁⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⠶⠶⠦⠤⣤⡞⠀⠀⠈⢻⢾⣫⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣇⣀⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⣴⠫⢊⠔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠋⢉⡏⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣄⠀⠀⠤⠤⠤⣄⠀⠀⠀⠀⣀⣀⠀⠀⠀⢼⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀⢠⡴⠚⠉⠀⠀⠀⠀⠀⠀⠁⠀⠀⠉⠀⣸⢀⡠⢦⠔⠃⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡼⠁⠀⠀⠀⠀⠀⢧⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠉⠁⢸⠀⠀⠀⠀⠀⠀
⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⢀⡞⠧⠤⣬⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠴⠿⠖⠛⡇⠀⠀⠀
⢴⣞⡁⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⠀⠀⣰⣶⣿⡿⠟⢉⣁⡤⠤⠤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀
⠀⠈⠉⠛⣻⠟⠁⠀⠀⠀⠀⡿⠀⠀⣼⣿⡿⠁⠀⠀⠀⠀⠒⠒⠒⠀⠀⠀⠀⢀⠀⠀⠀⠀⣠⣼⠗⣦⠀⠀
⠀⠀⠀⢰⡇⠀⠀⠀⠀⢀⡼⢁⡴⠀⠘⠿⠁⠘⣿⢲⡆⠈⠳⠄⠀⠀⠀⠀⢰⠃⡼⢶⣰⠞⠉⠀⠀⠘⣧⠀
⠀⠀⠀⠀⢻⡀⢀⣀⡴⢋⣴⠟⣡⠆⠀⠀⠀⢀⡇⡰⡇⠀⠀⠀⠀⠀⢀⠔⠋⢰⡇⠀⠁⠀⠀⠀⠀⠀⢸⡆
⠀⠀⠀⠀⣠⣿⣿⣿⡇⠘⠱⠋⠁⠀⣀⣠⡤⢎⠸⢀⡇⠀⠀⠀⠀⠀⣀⠀⠀⠀⠙⣦⡀⠀⠀⠀⠀⠀⠘⣷
⠀⠀⠀⠀⠹⣿⣿⡟⠀⢀⣠⡴⠺⡏⠁⢀⡀⠸⣀⡼⠁⠀⠀⠀⠀⣴⠙⢧⣠⣤⠤⠞⠋⠀⠀⠀⠀⠀⠀⣿
⠀⠀⠀⠀⠀⠈⢹⠦⢴⡋⠁⠀⠦⡨⢖⡂⢀⡴⠋⢀⣠⠶⠲⢤⣀⡟⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿
⠀⠀⠀⠀⠀⠀⡿⠀⠀⠉⣒⣦⣤⣾⣤⣟⣡⠤⠶⠉⠀⠀⠀⠀⣉⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠃
⠀⠀⠀⠀⢀⡴⠁⠀⢀⣠⣽⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀⠀⠸⠃⢉⡽⠛⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠃⠀
⠀⠀⠀⠀⠛⠛⠚⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠠⢶⣿⣅⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢻⣆
⠀⠀⠀⠀⠀⠀⢸⣧⡶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⠞⠋⠉`.split(`
`),l=Y(()=>{if(!a.value)return null;if(a.value.details&&a.value.details.toLowerCase().includes(`idling`))return`idling`;let e=a.value.name,t=e===`Zed`,n=e===`IntelliJ IDEA Ultimate`||e===`IntelliJ IDEA`||e===`Android Studio`,r=``,i=``;return n?(r=a.value.details||``,i=a.value.state||``):t?(r=a.value.state||``,i=a.value.details||``):(r=a.value.details||``,i=a.value.state||``),r=r.replace(/editing /i,``).replace(/working on /i,``).trim(),i=i.replace(/in /i,``).replace(/workspace: /i,``).trim(),{name:e,workspace:i,filename:r}}),u=Y(()=>{if(!l.value||l.value===`idling`)return null;let e=l.value.name;return e===`Zed`?`zed`:e===`IntelliJ IDEA Ultimate`||e===`IntelliJ IDEA`?`intellij`:e===`Android Studio`?`android-studio`:`vscode`});return(e,d)=>(H(),U(`div`,Ol,[d[10]||=W(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},` ~$ neofetch --live `,-1),W(`div`,kl,[W(`div`,Al,[W(`pre`,jl,[(H(!0),U(B,null,z(I(c),(e,t)=>(H(),U(B,{key:t},[K(k(e)+`
`,1)],64))),128))]),d[0]||=W(`span`,{class:`ascii-tooltip`},[K(`Art by `),W(`a`,{href:`https://www.instagram.com/vilthuril.rah/`,target:`_blank`,rel:`noopener noreferrer`,class:`ascii-tooltip-link`},`@vilthuril.rah`),K(` on Instagram`)],-1)]),W(`div`,Ml,[d[8]||=ma(`<div class="mb-1" data-v-efff6fe0><span class="text-catppuccin-mauve font-bold" data-v-efff6fe0>heck</span><span class="text-catppuccin-blue font-bold" data-v-efff6fe0>OS</span><span class="text-catppuccin-subtle" data-v-efff6fe0> (v0.1.4)</span></div><div class="text-catppuccin-surface mb-2" data-v-efff6fe0> ------------------ </div>`,2),s.value.name?(H(),U(`div`,Nl,[d[1]||=W(`span`,{class:`text-catppuccin-mauve font-bold w-20 flex-shrink-0`},`browser`,-1),d[2]||=W(`span`,{class:`text-catppuccin-subtle mr-1`},`-`,-1),W(`span`,Pl,k(s.value.name)+` `+k(s.value.version),1)])):q(``,!0),!o.value&&i.value?(H(),U(`div`,Fl,[d[3]||=W(`span`,{class:`text-catppuccin-mauve font-bold w-20 flex-shrink-0`},`discord`,-1),d[4]||=W(`span`,{class:`text-catppuccin-subtle mr-1`},`-`,-1),W(`span`,Il,k(i.value.username),1),W(`span`,{class:O([t.value,`ml-1`])},`[`+k(r.value)+`]`,3)])):q(``,!0),!o.value&&n.value?(H(),U(`div`,Ll,[d[5]||=W(`span`,{class:`text-catppuccin-mauve font-bold w-20 flex-shrink-0`},`spotify`,-1),d[6]||=W(`span`,{class:`text-catppuccin-subtle mr-1`},`-`,-1),W(`span`,Rl,k(n.value.song)+` - `+k(n.value.artist),1)])):q(``,!0),!o.value&&a.value&&l.value&&l.value!==`idling`&&(l.value.workspace||l.value.filename)?(H(),U(`div`,zl,[W(`span`,Bl,k(u.value),1),d[7]||=W(`span`,{class:`text-catppuccin-subtle mr-1`},`-`,-1),W(`span`,Vl,[l.value.workspace?(H(),U(`span`,Hl,k(l.value.workspace.toLowerCase()),1)):q(``,!0),l.value.workspace&&l.value.filename?(H(),U(`span`,Ul,`/`)):q(``,!0),l.value.filename?(H(),U(`span`,Wl,k(l.value.filename.toLowerCase()),1)):q(``,!0)])])):q(``,!0),d[9]||=ma(`<div class="text-catppuccin-surface mb-2" data-v-efff6fe0> ------------------ </div><div class="flex gap-0.5 mt-3" data-v-efff6fe0><span class="w-4 h-4 rounded-sm bg-catppuccin-red" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-peach" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-yellow" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-green" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-teal" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-blue" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-mauve" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-pink" data-v-efff6fe0></span></div>`,2)])])]))}},[[`__scopeId`,`data-v-efff6fe0`]]),Kl={class:`mb-6`},ql={class:`mb-6`},Jl={class:`flex items-center flex-wrap gap-3 text-sm mt-4`},Yl=[`href`],Xl=vl({__name:`HeroSection`,setup(e){let t=Dl();return(e,n)=>{let r=Nr(`router-link`);return H(),U(`div`,Kl,[W(`div`,ql,[n[3]||=ma(`<div class="text-catppuccin-subtle text-sm mb-2" data-v-bf6b4bb8>~$ whoami</div><h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2" data-v-bf6b4bb8><span class="text-catppuccin-mauve" data-v-bf6b4bb8>jesse</span><span class="text-catppuccin-subtle" data-v-bf6b4bb8>@</span><span class="text-catppuccin-blue" data-v-bf6b4bb8>heckr.dev</span></h1><div class="text-sm text-catppuccin-gray 6" data-v-bf6b4bb8><span class="text-catppuccin-subtle" data-v-bf6b4bb8>aka </span><span class="text-catppuccin-green" data-v-bf6b4bb8>Hecker_01</span></div>`,3),W(`div`,Jl,[(H(!0),U(B,null,z(I(t),e=>(H(),U(B,{key:e.id},[e.external?(H(),U(`a`,{key:1,href:e.href,target:`_blank`,class:`px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group`,style:D({"--accent-color":e.accentColor})},[n[1]||=W(`span`,{class:`text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),W(`span`,{class:`font-medium transition-colors`,style:D({color:e.accentColor})},`~/`+k(e.label),5),n[2]||=W(`svg`,{class:`w-3 h-3 text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`},[W(`path`,{"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`2`,d:`M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`})],-1)],12,Yl)):(H(),oa(r,{key:0,to:e.href,class:`px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group`,style:D({"--accent-color":e.accentColor})},{default:wn(()=>[n[0]||=W(`span`,{class:`text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),W(`span`,{class:`font-medium transition-colors`,style:D({color:e.accentColor})},`~/`+k(e.label),5)]),_:2},1032,[`to`,`style`]))],64))),128))])]),n[4]||=W(`div`,{class:`border-l-2 border-catppuccin-surface pl-4 mb-4`},[W(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},` ~$ cat about.txt `),W(`p`,{class:`text-catppuccin-text leading-relaxed mb-4`},[K(` Hi! I'm Jesse, a Dutch Software Development Student at Grafisch Lyceum Rotterdam. `),W(`br`),K(` I code all sorts of tools and applications mainly for my own use, I also code plugins for Minecraft and Discord bots, my main goal is to have fun while doing so! `),W(`br`),K(` My passion is Frontend development, but I also enjoy working on backend and mobile projects. `),W(`br`),K(` I've got experience in a lot of different `),W(`a`,{href:`#languages`,class:`text-catppuccin-mauve underline hover:no-underline`},`programming languages`),K(` and frameworks, and I love learning new ones! `)])],-1),G(Gl)])}}},[[`__scopeId`,`data-v-bf6b4bb8`]]),Zl={class:`border-l-2 border-catppuccin-surface pl-4 mb-4`},Ql={key:0,class:`text-sm text-catppuccin-subtle`},$l={key:1,class:`text-sm text-catppuccin-text`},eu={key:0,class:`text-catppuccin-subtle`},tu={key:2,class:`text-sm text-catppuccin-subtle`},nu={__name:`LanguagesList`,props:{languages:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){return(t,n)=>(H(),U(`div`,Zl,[n[0]||=W(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},`~$ ls ~/tools`,-1),e.loading?(H(),U(`div`,Ql,` loading languages... `)):e.languages.length?(H(),U(`div`,$l,[(H(!0),U(B,null,z(e.languages,(t,n)=>(H(),U(`span`,{key:t.language},[K(k(t.language)+`(`+k(t.count)+`)`,1),n<e.languages.length-1?(H(),U(`span`,eu,` | `)):q(``,!0)]))),128))])):(H(),U(`div`,tu,` no languages found `))]))}},ru=`---
title: Kitsudo
slug: kitsudo
description: A local-first task planner for Android with subtasks, reminders, custom themes, and a Wear OS companion.
coverImage: /screenshot-kitsudo.png
accentColor: mauve
tags: [android, wear-os, kotlin, privacy, play-store]
url: https://kitsudo.app
github: https://github.com/hecker-01/Kitsudo
status: active
unlisted: false
---

## About

Kitsudo is a local-first task planner I built for Android. It keeps the everyday flow simple: write something down, split it into smaller steps, set a deadline, and check it off when it is done.

The app works without an account or internet connection. Tasks and preferences stay on the device, reminders are scheduled locally, and the paired Wear OS app puts the same essentials on your wrist.

## Features

- **Plan in smaller steps.** Add subtasks and complete a whole checklist by finishing its parent task.
- **Stay ahead of deadlines.** Schedule early reminders, snooze them when needed, and set quiet hours for the night.
- **Keep the task list quick.** Swipe to complete or delete with undo, then sort and filter by deadline, priority, or date added.
- **Make it feel personal.** Use Material You or choose from five Catppuccin palettes and 14 accent colors.
- **Take it to your wrist.** View and complete tasks from the Wear OS companion without reaching for your phone.

## Local by design

Kitsudo has no account system, backend, analytics, or advertising. The Room database lives on the phone, reminders are handled by Android, and phone-to-watch sync happens directly between paired devices.

That keeps the app useful offline and keeps a personal task list personal.

## Technical Highlights

- Native Android app written in **Kotlin**.
- Local persistence backed by **Room**.
- A paired **Wear OS** app that can read and update tasks.
- Local reminder scheduling with early alerts, snooze, and quiet hours.
- A theme system covering Catppuccin palettes and Material You dynamic colors.

The project is open source and can be built with Gradle:

\`\`\`bash
git clone https://github.com/hecker-01/Kitsudo.git
cd Kitsudo
./gradlew assembleGithubRelease
\`\`\`
`,iu=`---
title: MCBE Pack Decryptor
slug: mcbe-pack-decryptor
description: Python CLI that decrypts encrypted Minecraft Bedrock Edition marketplace packs using AES-CFB.
coverImage: /screenshot-mcbe-decryptor.png
accentColor: green
tags: [python, minecraft, cryptography, cli]
github: https://github.com/hecker-01/MCBE_Pack_Decryptor
status: stale
unlisted: false
---

## About

MCBE Pack Decryptor is a single-file Python CLI tool that decrypts encrypted Minecraft Bedrock Edition marketplace resource packs. Marketplace content ships with AES-CFB-encrypted assets and a \`contents.json\` manifest that maps each file to its individual decryption key. This tool reads that manifest, decrypts every listed asset, and writes the plaintext output to a new folder - all you need is the 32-byte pack key.

It handles nested subpacks automatically and provides optional verbose logging so you can watch each file get processed in real time.

## Features

- **AES-CFB decryption** of marketplace resource packs using PyCryptodome
- **Automatic key loading** from \`.key\` files placed alongside the pack folder
- **Per-file key resolution** via the encrypted \`contents.json\` manifest
- **Subpack support** - recursively decrypts all subpack directories
- **Verbose mode** - toggle detailed per-file logging at runtime
- **Graceful fallback** - files without a listed key are copied as-is instead of being skipped
- **Clear error reporting** with colored terminal output for failures

## Technical Highlights

The core decryption pipeline reads the \`contents.json\` manifest (skipping the first \`0x100\` bytes of header), decrypts it with the master pack key, then builds a lookup map of relative paths to per-file keys:

\`\`\`python
with open(contents_json_path, 'rb') as f:
    encrypted_data = f.read()

decrypted_data = aes_cfb_decrypt(encrypted_data[0x100:], decryption_key, decryption_key[:16])
contents = json.loads(decrypted_data.decode('utf-8'))

content_map = {
    info["path"]: info.get("key", "").encode()
    for info in contents.get("content", [])
}
\`\`\`

Each file is then decrypted individually using its own key from the map, with the first 16 bytes of that key used as the AES initialization vector.

:::hint info
A valid 32-byte pack key is required. The tool can load it automatically from a \`.key\` file named after the pack folder, or you can enter it manually at the prompt.
:::

### Usage

Place the encrypted pack folder and its \`.key\` file next to the script:

\`\`\`text
folder/
├── encrypted-resource-pack/
│   ├── contents.json
│   └── ...other encrypted files
├── encrypted-resource-pack.key
└── mcbe_pack_decryptor.py
\`\`\`

Then run:

\`\`\`bash
python3 mcbe_pack_decryptor.py
\`\`\`

Decrypted output lands in a new \`<pack-name>-decrypted/\` directory.

:::details Full CLI session example

\`\`\`text
┏┻┓┳┳┓┏┓ ┏┓┳┓  MCBE_Pack_Decryptor
┗━┓┃┃┃┃  ┃┃┃┃  Version 1.0
┗┳┛┛ ┗┗┛━┣┛┻┛  Made by @hecker-01

Enable verbose logging? (y/N): y
Input folder (should be in the same directory as this script): my-pack
Key loaded from my-pack.key
Processing my-pack...
Decrypted: my-pack/textures/blocks/stone.png
Decrypted: my-pack/textures/items/diamond.png
✓ Successfully processed my-pack.
No subpacks found.
Decryption complete! Output folder: /home/user/my-pack-decrypted
\`\`\`

:::
`,au=`---
title: Pingr
slug: pingr
description: Overlay a Discord ping badge onto any server icon to make your entire server think they got pinged.
coverImage: /screenshot-pingr.png
accentColor: red
tags: [vue, discord, april-fools]
url: https://pingr.heckr.dev
github: https://github.com/hecker-01/pingr
status: stale
unlisted: false
---

## About

Pingr is a small browser tool built for April Fools. You upload your Discord server's icon, it composites a ping badge onto it, and you get back a PNG. Swap it into your server settings and every member will see an unread ping that doesn't exist. No server, no install, no dependencies beyond Vue and the Canvas API.

:::hint tip
Works best on servers where you're an admin obviously. Also works on people who leave their DMs open.
:::

## Features

- Drag and drop or click-to-upload any server icon (PNG, JPG, WEBP)
- Composites the ping overlay at 512x512 using the browser Canvas API
- Preview before downloading, with a Discord-style squircle border radius
- One-click PNG download
- "why?" button that explains the bit
- Fully client-side, nothing leaves your browser

## Technical Highlights

- Image compositing is done entirely with \`<canvas>\` - no image processing library needed
- The overlay (\`ping-overlay.png\`) is a pre-made 512x512 PNG with the badge already positioned in the bottom-right corner, so placement is just \`drawImage\` stacked twice
- Components: \`AppHeader\`, \`WhyModal\`, \`DropZone\`, \`ResultPreview\` - \`App.vue\` only holds state and the compositing logic
- Object URLs are revoked on reset and re-process to avoid memory leaks

\`\`\`js
ctx.drawImage(icon, 0, 0, SIZE, SIZE);
ctx.drawImage(overlay, 0, 0, SIZE, SIZE);

canvas.toBlob((blob) => {
  resultUrl.value = URL.createObjectURL(blob);
}, "image/png");
\`\`\`

:::details Why a pre-positioned overlay instead of drawing the badge programmatically?

Keeps things dead simple. The overlay is just a transparent PNG with the badge sitting where Discord puts it. No math, no coordinate logic, no font rendering. Drop it on top and you're done. If the badge position ever needs to change, swap the PNG.

:::

---

Built in an afternoon on April 1st. It does exactly one thing.
`,ou=`---
title: Portfolio
slug: portfolio
description: Built with Vue.js and Tailwind CSS, showcasing my projects and skills.
coverImage: /screenshot.png
accentColor: lavender
tags: [vue, tailwind, markdown, portfolio]
url: https://heckr.dev
github: https://github.com/hecker-01/website
status: active
unlisted: false
---

## About

This is the site you're looking at right now. A Vue 3 single-page application themed around a terminal aesthetic using the Catppuccin Mocha color palette. It serves as a hub for my projects and technical write-ups, with a custom markdown rendering pipeline, live Discord presence via Lanyard, and GitHub integration that pulls repository and contribution data directly from the API.

Everything is statically served - no backend, no CMS. Posts and projects are plain \`.md\` files loaded at build time through Vite's \`import.meta.glob()\`, parsed with a from-scratch markdown service, and syntax-highlighted with Prism.js.

## Features

- **Custom markdown engine** - supports fenced code blocks with filenames, collapsible \`:::details\` sections, \`:::hint\` callout blocks, variable placeholders (\`\\$[name]\`), tables, task lists, and auto-anchored headings
- **GitHub integration** - fetches all repos with language breakdowns, renders a 53-week contribution heatmap, and lists top repositories by star count
- **Discord presence** - WebSocket connection to Lanyard streams live status, Spotify activity, and VS Code rich presence into a neofetch-style status panel
- **Project showcase carousel** - auto-rotates every 10 seconds, pauses on hover, with per-project accent colors pulled from frontmatter
- **Tag filtering** - posts and projects support clickable tag filters synced to the URL query string
- **Reading time estimates** - calculated at 225 words per minute from raw markdown content
- **Page transitions** - fade + slide animations between routes with scroll position restoration
- **Console easter eggs** - type \`help()\` in the browser console, or try the Konami code

## Technical Highlights

The markdown parser works in three phases: extraction, inline transformation, and restoration. Block-level elements (code blocks, hints, details, tables) are replaced with \`__PLACEHOLDER__\` tokens first to protect them from inline regex passes, then restored after bold/italic/link/strikethrough processing is complete.

Hint blocks and details sections are parsed with their own renderers:

\`\`\`javascript:markdownService.js
const hintStyles = {
  info:    { bg: "bg-catppuccin-blue/10",   icon: "i", title: "Info" },
  warning: { bg: "bg-catppuccin-yellow/10", icon: "!", title: "Warning" },
  tip:     { bg: "bg-catppuccin-green/10",  icon: "✓", title: "Tip" },
  danger:  { bg: "bg-catppuccin-red/10",    icon: "✕", title: "Danger" },
  note:    { bg: "bg-catppuccin-mauve/10",  icon: "●", title: "Note" },
};
\`\`\`

The Lanyard service maintains a persistent WebSocket with automatic reconnect (up to 5 retries with backoff) and heartbeat responses to keep the connection alive:

\`\`\`javascript:lanyardService.js
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.op === 1) {
    // Server sent heartbeat interval - start responding
    setInterval(() => {
      socket.send(JSON.stringify({ op: 3 }));
    }, data.d.heartbeat_interval);
    // Subscribe to user presence
    socket.send(JSON.stringify({
      op: 2,
      d: { subscribe_to_id: DISCORD_USER_ID },
    }));
  }
};
\`\`\`

Projects and posts share the same loading pattern - \`import.meta.glob\` pulls all \`.md\` files from their respective folders, frontmatter is extracted via regex, and the raw body is cached after first parse.

:::hint info
The entire Catppuccin Mocha palette (20 colors from \`crust\` to \`flamingo\`) is mapped in \`tailwind.config.js\` as custom colors, so any component can use classes like \`text-catppuccin-mauve\` or \`bg-catppuccin-surface0\` directly.
:::

:::details Router and page structure

The site has four routes managed by Vue Router 4:

| Route       | Page     | Description                                                                     |
| ----------- | -------- | ------------------------------------------------------------------------------- |
| \`/\`         | Home     | Hero section, language counts, top repos, showcase carousel, contribution graph |
| \`/posts\`    | Posts    | Tag-filtered post list, opens detail via \`?post=slug\`                           |
| \`/projects\` | Projects | Tag-filtered project grid, opens detail via \`?project=slug\`                     |
| \`*\`         | NotFound | 404 fallback                                                                    |

Post and project detail views are not separate routes - they render inline when the query string contains a slug, which keeps navigation snappy and preserves filter state when closing a detail view.

:::

## Stack

- **Framework**: Vue 3 (Composition API) + Vue Router 4
- **Build**: Vite
- **Styling**: Tailwind CSS + Catppuccin Mocha
- **Syntax highlighting**: Prism.js (loaded externally)
- **HTTP**: Fetch (GitHub API, contribution API)
- **Presence**: Lanyard WebSocket API
- **Hosting**: Static deployment
`,su=`---
title: reCodr
slug: recodr
description: Desktop video re-encoder with hardware-accelerated GPU encoding via ffmpeg.
coverImage: /screenshot-recodr.png
accentColor: mauve
tags: [electron, ffmpeg, video-encoding, desktop-app, hardware-acceleration]
github: https://github.com/hecker-01/reCodr
status: active
unlisted: false
---

## About

reCodr is an Electron desktop application that wraps ffmpeg in a clean drag-and-drop GUI for re-encoding video files. It automatically detects available hardware encoders on startup - NVIDIA NVENC, AMD AMF, Intel QSV, and Apple VideoToolbox - and falls back to software encoding when no GPU acceleration is present. Output is always MKV to preserve all video, audio, and subtitle streams without container limitations.

The app runs ffmpeg and ffprobe as child processes from the Electron main process, keeping the renderer free for UI updates like real-time progress, ETA, and encoding speed.

## Features

- **Drag & drop or file picker** - supports MKV, MP4, AVI, MOV, WebM, FLV, WMV, and more
- **Automatic hardware encoder detection** - scans \`ffmpeg -encoders\` output at startup to find available GPU encoders
- **Multi-encoder support** - NVIDIA NVENC, AMD AMF, Intel QSV, Apple VideoToolbox, and libx264/libx265 software fallback
- **Codec selection** - choose between H.264 and HEVC (H.265) per encoder family
- **Configurable quality and preset** - encoder-aware defaults (CQ for NVENC, QP for AMF, CRF for software, bitrate for HEVC VideoToolbox)
- **Multi-track audio** - select individual tracks, copy or re-encode to AAC (192k), Opus (128k), or AC3 (384k)
- **Multi-track subtitles** - select tracks, copy or convert to SRT, ASS, or MOV Text
- **Font attachment passthrough** - preserves embedded fonts for styled subtitles
- **Live progress tracking** - frame-based percentage, FPS, speed multiplier, and ETA
- **File size comparison** - shows original vs. encoded size after completion
- **Custom binary paths** - point to specific ffmpeg/ffprobe builds if they're not on PATH
- **Command preview & editing** - inspect and modify the generated ffmpeg command before encoding
- **Cross-platform builds** - Windows (portable + NSIS), macOS (DMG + ZIP), Linux (AppImage + DEB)

## Technical Highlights

The encoder family system maps each hardware API to its codec-specific flags, since every encoder has different parameter semantics:

\`\`\`javascript
const encoderFamilies = {
  nvenc: { hevc: "hevc_nvenc", h264: "h264_nvenc" },
  amf: { hevc: "hevc_amf", h264: "h264_amf" },
  qsv: { hevc: "hevc_qsv", h264: "h264_qsv" },
  videotoolbox: { hevc: "hevc_videotoolbox", h264: "h264_videotoolbox" },
  software: { hevc: "libx265", h264: "libx264" },
};
\`\`\`

\`applyVideoEncodingArgs()\` branches on the encoder family to set the right quality and preset flags - NVENC uses \`-cq\` with \`-preset p1\`–\`p7\`, AMF uses \`-qp_i\`/\`-qp_p\` with \`speed\`/\`balanced\`/\`quality\`, QSV uses \`-global_quality\`, VideoToolbox H.264 uses \`-q:v\` (1–100) while HEVC requires \`-b:v\` bitrate mode, and software uses \`-crf\` with standard x264/x265 presets.

All main↔renderer IPC uses \`ipcMain.handle()\` / \`ipcRenderer.invoke()\` for request-response, with progress updates pushed via \`event.sender.send('encode-progress', ...)\` during active encodes. Power management blocks system sleep while jobs are running using \`powerSaveBlocker\`.

:::hint info
An encoder family is included if **at least one** of its codecs (H.264 or HEVC) is detected. This matters for hardware like Intel Macs that have \`h264_videotoolbox\` but not \`hevc_videotoolbox\`, or older Intel GPUs with H.264-only QSV support.
:::

:::details Supported audio and subtitle options

### Audio re-encoding

| Option | Codec   | Bitrate  | Use case                       |
| ------ | ------- | -------- | ------------------------------ |
| Copy   | -       | Original | No quality loss, fastest       |
| AAC    | aac     | 192 kbps | Best device compatibility      |
| Opus   | libopus | 128 kbps | Best quality-to-size ratio     |
| AC3    | ac3     | 384 kbps | Dolby Digital, surround setups |

### Subtitle conversion

| Option   | Format              | Notes                           |
| -------- | ------------------- | ------------------------------- |
| Copy     | Original            | Preserves styling and format    |
| SRT      | SubRip              | Text-based subtitles only       |
| ASS      | Advanced SubStation | Retains positioning/styling     |
| MOV Text | tx3g                | MP4/MOV container compatibility |

:::

## Stack

- **Runtime:** Electron 28 (Chromium + Node.js)
- **Build:** electron-builder (multi-platform output)
- **Backend:** ffmpeg / ffprobe via \`child_process.spawn()\`
- **Language:** Vanilla JavaScript - no frameworks, no bundler
- **License:** GPL-2.0
`,cu=`---
title: satisSuite
slug: satissuite
description: Modular Minecraft plugin suite for Spigot/Paper servers, covering moderation, player management, and server utilities.
coverImage: /screenshot-satissuite.png
accentColor: mauve
tags: [java, minecraft, plugin, spigot]
url: https://satissuite.heckr.dev
status: in-progress
unlisted: true
---

## About satisSuite

satisSuite is a Minecraft plugin suite for Spigot/Paper servers. It's built around a modular architecture so server admins can enable only the parts they actually need.

## Core Modules

- **Moderation Tools**: Bans, mutes, kicks, and warnings
- **Player Management**: Player statistics, permissions, and player data
- **Server Utilities**: Quality-of-life additions for players and admins
- **Custom Features**: Extensible system for server-specific functionality

## Features

- Modular architecture, enable only what you need
- Permission-based command system
- In active development

## Technical Details

Built in Java for the Spigot/Paper API. The plugin targets clean command structure and a straightforward configuration format.
`,lu=`---
title: Wordr
slug: wordr
description: Client-side Markdown to DOCX converter
coverImage: /screenshot-wordr.png
accentColor: pink
tags: [vue, markdown, docx]
url: https://wordr.heckr.dev/
github: https://github.com/hecker-01/wordr
status: active
unlisted: false
---

## About

Wordr converts Markdown into properly styled Word documents (\`.docx\`) entirely in the browser. There's no backend - the full pipeline from parsing to file generation runs client-side using Vue 3 and Vite.

It parses Markdown into an [mdast](https://github.com/syntax-tree/mdast) AST via \`unified\` and \`remark\`, walks the tree to build \`docx\` objects (paragraphs, text runs, tables, images, footnotes), and packs them into a downloadable \`.docx\` blob. The output uses Word's built-in styles (\`Heading1\`–\`Heading6\`, \`Normal\`) with Aptos and Aptos Display fonts, so documents look native in any Word-compatible editor.

## Features

- **Live editor** - paste, type, or drag-and-drop \`.md\` files directly into the browser
- **Real-time preview** - rendered HTML preview with GitHub Flavored Markdown support
- **One-click export** - download the converted \`.docx\` instantly
- **Rich formatting** - headings, bold, italic, strikethrough, ordered/unordered lists, task lists, code blocks, tables, blockquotes, links, and thematic breaks
- **Image handling** - detects image references in your Markdown and prompts you to upload them, with bulk drag-and-drop support
- **Math support** - inline and display math via KaTeX (\`$...$\` and \`$$...$$\`)
- **Footnotes** - automatically collected and mapped to Word's native footnote system
- **Zero server dependency** - everything runs in the browser, nothing is uploaded anywhere

## Technical Highlights

The conversion pipeline is split into three focused modules:

1. **\`parseMarkdown.js\`** - uses \`unified\` + \`remark-parse\` + \`remark-gfm\` + \`remark-math\` to produce a standards-compliant mdast tree
2. **\`mdastToDocx.js\`** - recursively walks the AST and maps each node type to its \`docx\` equivalent (paragraphs, text runs, tables, image runs, footnotes, etc.)
3. **\`generateDocx.js\`** - assembles the final \`Document\` with page margins, default fonts, and footnote configuration, then calls \`Packer\` to produce the blob

Images are resolved at conversion time rather than baked into the AST. The app collects every \`image\` node's \`src\`, diffs it against a user-provided \`imageMap\`, and fires an \`onMissingImages\` callback for anything unresolved - giving the user a modal to drag-and-drop the missing files before the final export.

:::hint info
Wordr never sends your content to a server. Markdown parsing, AST transformation, and DOCX generation all happen in the browser via Web APIs.
:::

:::details Tech Stack

- **Framework:** Vue 3 + Vite
- **Markdown parsing:** unified, remark-parse, remark-gfm, remark-math
- **DOCX generation:** docx (built-in Word styles, Aptos fonts)
- **HTML preview:** remark-rehype + rehype-stringify
- **Math rendering:** KaTeX via rehype-katex
- **Icons:** Font Awesome 6
- **License:** GPL-2.0
  :::
`,uu=`---
title: Yume Ramen
slug: yume-ramen
description: Full-stack ramen restaurant app with a customer frontend, admin dashboard, and shared Node.js API.
coverImage: /screenshot-yume-front.png
accentColor: red
tags: [vue, tailwind, nodejs, api, fullstack]
url: https://yume.bram-jesse.sd-lab.nl/
github: https://github.com/hecker-01/yume-front
status: archived
unlisted: true
---

## About

Yume Ramen is a full-stack restaurant application split into three projects: a customer-facing Vue.js frontend, a separate Vue.js admin dashboard, and a Node.js/Express API that both frontends use.

## Features

- Customer-facing menu and ordering interface
- Admin dashboard for managing restaurant operations
- User authentication and authorization
- RESTful API shared between both Vue frontends
- Responsive UI built with Tailwind CSS

## Tech Stack

- **Vue.js 3** with Composition API
- **Tailwind CSS** for styling
- **Node.js & Express** for the backend server
- **MongoDB** for data storage
`,du={mauve:`#cba6f7`,blue:`#89b4fa`,green:`#a6e3a1`,red:`#f38ba8`,pink:`#f5c2e7`,yellow:`#f9e2af`,teal:`#94e2d5`,sapphire:`#74c7ec`,sky:`#89dceb`,lavender:`#b4befe`,peach:`#fab387`,maroon:`#eba0ac`,flamingo:`#f2cdcd`},fu=Object.assign({"/projects/kitsudo.md":ru,"/projects/mcbe-pack-decryptor.md":iu,"/projects/pingr.md":au,"/projects/portfolio.md":ou,"/projects/recodr.md":su,"/projects/satissuite.md":cu,"/projects/wordr.md":lu,"/projects/yume-ramen.md":uu}),pu=e=>{let t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};let[,n,r]=t,i={},a=n.split(`
`),o=null,s=``,c=(e,t)=>{t=t.trim(),t.startsWith(`[`)&&t.endsWith(`]`)?i[e]=t.slice(1,-1).split(`,`).map(e=>e.trim()):t===`true`?i[e]=!0:t===`false`?i[e]=!1:i[e]=t};return a.forEach(e=>{if(/^\s+/.test(e)&&!/^\s*\w+:/.test(e)&&o)s+=` `+e.trim();else{o&&s&&c(o,s);let[t,...n]=e.split(`:`);if(!t||t.trim()===``)return;o=t.trim(),s=n.join(`:`).trim()}}),o&&s&&c(o,s),{frontmatter:i,content:r}},mu=()=>{let e=[],t=1;return Object.entries(fu).forEach(([n,r])=>{let{frontmatter:i,content:a}=pu(r),o=n.split(`/`).pop().replace(`.md`,``);e.push({id:t++,slug:o,title:i.title||o,description:i.description||``,coverImage:i.coverImage||null,accentColor:i.accentColor||`mauve`,accentColorHex:du[i.accentColor]||du.mauve,tags:i.tags||[],url:i.url||null,github:i.github||null,status:i.status||`active`,unlisted:i.unlisted===!0,content:a.trim()})}),e},hu=null,gu=(e=!1)=>(hu||=mu(),(e?[...hu]:hu.filter(e=>!e.unlisted)).sort((e,t)=>e.title.localeCompare(t.title))),_u=e=>gu(!0).find(t=>t.slug===e),vu=()=>{let e=new Set;return gu().forEach(t=>{t.tags.forEach(t=>e.add(t))}),Array.from(e).sort()};function yu(){return gu().map(e=>({id:e.id,slug:e.slug,name:e.title,description:e.description,link:e.url||e.github||`#`,screenshot:e.coverImage,accentColor:e.accentColorHex}))}var bu={class:`border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full`},xu={key:0,class:`text-sm text-catppuccin-subtle`},Su={class:`lg:flex-1 lg:relative`},Cu={key:0,class:`w-full flex-1 overflow-hidden bg-catppuccin-surface/30`},wu=[`src`,`alt`],Tu={class:`px-3 py-3 flex-shrink-0`},Eu={class:`flex items-start gap-3`},Du={class:`flex-1 min-w-0`},Ou={class:`text-xs text-catppuccin-gray leading-relaxed`},ku={key:0,class:`flex justify-center gap-1.5 mt-3 flex-shrink-0`},Au=[`onClick`],ju=vl({__name:`ShowcaseCarousel`,setup(e){let t=hl(),n=F([]),r=F(0),i=F(!1),a=null,o=Y(()=>n.value.length?n.value[r.value]:null),s=e=>{if(e===`kitsudo`){t.push(`/kitsudo`);return}t.push({path:`/projects`,query:{project:e}})};return Cr(()=>{n.value=yu(),n.value.length>1&&(a=setInterval(()=>{i.value||(r.value=(r.value+1)%n.value.length)},1e4))}),Er(()=>{a&&clearInterval(a)}),(e,a)=>(H(),U(`div`,bu,[a[5]||=W(`div`,{class:`text-catppuccin-subtle text-sm mb-3`},`~$ cat ~/showcase`,-1),n.value.length?(H(),U(`div`,{key:1,class:`relative lg:flex-1 flex flex-col`,onMouseenter:a[2]||=e=>i.value=!0,onMouseleave:a[3]||=e=>i.value=!1},[W(`div`,Su,[G(eo,{name:`showcase`,mode:`out-in`},{default:wn(()=>[o.value?(H(),U(`div`,{key:o.value.id,onClick:a[0]||=e=>s(o.value.slug),class:`group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col cursor-pointer`,style:D({borderColor:`${o.value.accentColor}40`})},[o.value.screenshot?(H(),U(`div`,Cu,[W(`img`,{src:o.value.screenshot,alt:o.value.name,class:`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`},null,8,wu)])):q(``,!0),W(`div`,Tu,[W(`div`,Eu,[W(`span`,{class:`transition-colors`,style:D({color:o.value.accentColor})},`>`,4),W(`div`,Du,[W(`h3`,{class:`text-sm font-medium text-catppuccin-text transition-colors mb-1`,style:D({color:o.value.accentColor})},k(o.value.name),5),W(`p`,Ou,k(o.value.description),1)])])])],4)):q(``,!0)]),_:1})]),n.value.length>1?(H(),U(`div`,ku,[(H(!0),U(B,null,z(n.value,(e,t)=>(H(),U(`button`,{key:`dot-${e.id}`,onClick:e=>r.value=t,class:O([`w-2 h-2.5 rounded-full transition-all`,t===r.value?`bg-catppuccin-mauve w-4`:`bg-catppuccin-surface/60 hover:bg-catppuccin-surface`]),style:D(t===r.value?{backgroundColor:o.value.accentColor}:{})},null,14,Au))),128))])):q(``,!0),W(`button`,{onClick:a[1]||=e=>I(t).push(`/projects`),class:`mt-3 w-full py-2 px-3 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-all flex items-center justify-center gap-2`},[...a[4]||=[W(`span`,null,`more projects`,-1),W(`span`,null,`→`,-1)]])],32)):(H(),U(`div`,xu,` no items to showcase `))]))}},[[`__scopeId`,`data-v-174afb7a`]]),Mu=`hecker-01`,Nu=async()=>{try{let e=[],t=1;for(;;){let n=await fetch(`https://api.github.com/users/${Mu}/repos?per_page=100&page=${t}`);if(!n.ok)break;let r=await n.json();if(!r.length||(e.push(...r),r.length<100))break;t++}let n={};return e.forEach(e=>{e.language&&(n[e.language]=(n[e.language]||0)+1)}),{repos:e,languages:Object.entries(n).sort((e,t)=>t[1]-e[1]).map(([e,t])=>({language:e,count:t})),totalRepos:e.length}}catch(e){return console.error(`Error fetching GitHub data:`,e),{repos:[],languages:[],totalRepos:0}}},Pu=async()=>{let e=new Date;e.getFullYear();try{let t=await fetch(`https://github-contributions-api.jogruber.de/v4/${Mu}?y=last`);if(!t.ok)throw Error(`Failed to fetch contribution data`);let n=await t.json(),r=[];if(n.contributions&&n.contributions.forEach(e=>{r.push({date:e.date,count:e.count})}),r.length>0){let t=new Date(e);t.setDate(t.getDate()-371+1);let n=[];for(let e=0;e<371;e++){let i=new Date(t);i.setDate(i.getDate()+e);let a=i.toISOString().split(`T`)[0],o=r.find(e=>e.date===a);n.push({date:a,count:o?o.count:0})}return n}throw Error(`No contributions data available`)}catch(t){console.error(`Error fetching contribution data:`,t);let n=new Map;for(let t=370;t>=0;t--){let r=new Date(e);r.setDate(r.getDate()-t);let i=r.toISOString().split(`T`)[0];n.set(i,0)}return Array.from(n.entries()).sort((e,t)=>e[0].localeCompare(t[0])).map(([e,t])=>({date:e,count:t}))}},Fu=e=>e===0?0:e<=2?1:e<=5?2:e<=8?3:4,Iu=e=>`https://github.com/${Mu}?tab=overview&from=${e}&to=${e}`,Lu={class:`mt-6 border-l-2 border-catppuccin-surface pl-4`},Ru={class:`flex items-center justify-between mb-3`},zu={key:0,class:`flex items-center gap-1 text-[10px] text-catppuccin-subtle`},Bu={key:0},Vu={key:1},Hu={class:`overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-thin`},Uu={class:`inline-flex md:flex gap-[3px] md:gap-1`,style:{"min-width":`max-content`}},Wu=[`href`,`title`],Gu=[`title`],Ku={class:`text-xs text-catppuccin-gray mt-2`},qu={__name:`ContributionGraph`,setup(e){let t=F([]),n=F(!0),r=Y(()=>{let e=[];for(let n=0;n<t.value.length;n+=7)e.push(t.value.slice(n,n+7));return e}),i=Y(()=>t.value.reduce((e,t)=>e+t.count,0)),a=async()=>{try{n.value=!0,t.value=await Pu()}catch{}finally{n.value=!1}};return Cr(()=>{a()}),(e,t)=>(H(),U(`div`,Lu,[W(`div`,Ru,[t[1]||=W(`div`,{class:`text-catppuccin-subtle text-sm`},` ~$ git log --oneline --since="1.year.ago" | wc -l `,-1),n.value?q(``,!0):(H(),U(`div`,zu,[...t[0]||=[ma(`<span>less</span><div class="flex gap-[1px]"><div class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green"></div></div><span>more</span>`,3)]]))]),n.value?(H(),U(`div`,Bu,[...t[2]||=[W(`div`,{class:`h-[60px] bg-catppuccin-surface/30 rounded cursor-blink`},null,-1)]])):(H(),U(`div`,Vu,[W(`div`,Hu,[W(`div`,Uu,[(H(!0),U(B,null,z(r.value,(e,t)=>(H(),U(`div`,{key:t,class:`flex flex-col gap-[3px] md:gap-1 md:flex-1`},[(H(!0),U(B,null,z(e,(e,t)=>(H(),U(B,{key:t},[e.count>0?(H(),U(`a`,{key:0,href:I(Iu)(e.date),target:`_blank`,rel:`noopener noreferrer`,class:O([`w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm transition-all hover:ring-1 hover:ring-catppuccin-green hover:scale-110 cursor-pointer`,[I(Fu)(e.count)===1?`bg-catppuccin-green/30 hover:bg-catppuccin-green/40`:I(Fu)(e.count)===2?`bg-catppuccin-green/50 hover:bg-catppuccin-green/60`:I(Fu)(e.count)===3?`bg-catppuccin-green/70 hover:bg-catppuccin-green/80`:`bg-catppuccin-green hover:bg-catppuccin-green`]]),title:`${e.date}: ${e.count} contributions - Click to view on GitHub`},null,10,Wu)):(H(),U(`div`,{key:1,class:`w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm bg-catppuccin-surface/50`,title:`${e.date}: ${e.count} contributions`},null,8,Gu))],64))),128))]))),128))])]),W(`div`,Ku,k(i.value)+` contributions in the last year `,1)]))]))}},Ju={class:`w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400`},Yu={__name:`Footer`,setup(e){let t=new Date().getFullYear();return(e,n)=>(H(),U(`footer`,Ju,[W(`p`,null,`© 2020 - `+k(I(t))+` heckr.dev | All rights reserved.`,1)]))}},Xu={class:`border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full`},Zu={class:`lg:flex-1 flex flex-col`},Qu={key:0,class:`space-y-2`},$u={key:1,class:`text-sm text-catppuccin-subtle`},ed=[`href`],td={class:`flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2`},nd={class:`flex-1 min-w-0`},rd={class:`flex items-center gap-2`},id=[`title`],ad={key:0,class:`text-catppuccin-yellow text-xs flex-shrink-0`},od=[`title`],sd={key:3,class:`text-sm text-catppuccin-subtle`},cd=vl({__name:`ReposList`,props:{repos:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){let t=e,n=Y(()=>t.repos.length?[...t.repos].sort((e,t)=>t.stargazers_count-e.stargazers_count).slice(0,6):[]);return(t,r)=>(H(),U(`div`,Xu,[r[2]||=W(`div`,{class:`text-catppuccin-subtle text-sm mb-3`},` ~$ ls ~/repositories `,-1),W(`div`,Zu,[e.loading?(H(),U(`div`,Qu,[(H(),U(B,null,z(6,e=>W(`div`,{key:`repo-loading-${e}`,class:`rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3`},[...r[0]||=[ma(`<div class="flex items-start gap-3" data-v-5dddb934><span class="text-catppuccin-subtle" data-v-5dddb934>&gt;</span><div class="flex-1 min-w-0" data-v-5dddb934><div class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink" data-v-5dddb934></div><div class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink" data-v-5dddb934></div></div></div>`,1)]])),64))])):e.repos.length?n.value.length?(H(),oa(Jo,{key:2,name:`list`,tag:`div`,class:`space-y-2`},{default:wn(()=>[(H(!0),U(B,null,z(n.value,e=>(H(),U(`a`,{key:e.id,href:e.html_url,target:`_blank`,class:`block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors`},[W(`div`,td,[r[1]||=W(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors`},`>`,-1),W(`div`,nd,[W(`div`,rd,[W(`span`,{class:`text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate`,title:e.name},k(e.name),9,id),e.stargazers_count>0?(H(),U(`span`,ad,` ★`+k(e.stargazers_count),1)):q(``,!0)]),W(`p`,{class:`text-xs text-catppuccin-gray truncate`,title:e.description},k(e.description||`no description`),9,od)])])],8,ed))),128))]),_:1})):(H(),U(`div`,sd,` no repositories found `)):(H(),U(`div`,$u,` no projects found `))])]))}},[[`__scopeId`,`data-v-5dddb934`]]),ld={class:`w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono`},ud={class:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-10 md:pb-2`},dd={class:`grid lg:grid-cols-2 gap-6 lg:items-stretch`},fd={__name:`Home`,setup(e){let t=F([]),n=F(!0),r=F([]),i=async()=>{try{n.value=!0;let{repos:e,languages:i}=await Nu(`hecker-01`);t.value=e,r.value=i}catch{}finally{n.value=!1}};return Cr(()=>{i()}),(e,i)=>(H(),U(`div`,ld,[G(wl),W(`div`,ud,[G(Xl),G(nu,{languages:r.value,loading:n.value,id:`languages`},null,8,[`languages`,`loading`]),W(`div`,dd,[G(cd,{repos:t.value,loading:n.value},null,8,[`repos`,`loading`]),G(ju)]),G(qu),G(Yu)])]))}},pd=Object.assign({"/posts/docker-and-compose.md":`---
title: Using Docker and Docker Compose for Application Deployment
slug: docker-and-compose
date: 01-03-2026
tags: [docker, docker-compose, containerization, cli, tutorial, guide]
description: A comprehensive guide to using Docker and Docker Compose for deploying applications in a containerized environment.
unlisted: false
---

## What is Docker?

Docker is a platform that lets you package applications into **containers** - lightweight, standalone units that include everything needed to run your software: code, runtime, libraries, and system tools.

Think of a container like a shipping container: no matter what's inside, it fits on any ship (server) the same way. This solves the classic "it works on my machine" problem.

### Why Use Docker?

- **Consistency** - your app runs the same everywhere (dev, staging, production)
- **Isolation** - containers don't interfere with each other or the host system
- **Portability** - move containers between machines, clouds, or CI/CD pipelines effortlessly
- **Efficiency** - containers share the host OS kernel, making them much lighter than virtual machines
- **Reproducibility** - define your environment in code and rebuild it identically every time

### Docker vs Virtual Machines

| Feature        | Docker Container   | Virtual Machine          |
| -------------- | ------------------ | ------------------------ |
| Startup time   | Seconds            | Minutes                  |
| Size           | Megabytes          | Gigabytes                |
| OS             | Shares host kernel | Full guest OS            |
| Performance    | Near-native        | Overhead from hypervisor |
| Isolation      | Process-level      | Full hardware-level      |
| Resource usage | Lightweight        | Heavy                    |

---

## Installing Docker

:::details Linux (Ubuntu/Debian)

Remove any old Docker packages:

\`\`\`bash
sudo apt remove docker.io docker-compose docker-compose-plugin -y
sudo apt autoremove -y
\`\`\`

Install dependencies:

\`\`\`bash
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release -y
\`\`\`

Add Docker's GPG key:

\`\`\`bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
\`\`\`

Add the Docker repository:

\`\`\`bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
\`\`\`

Install Docker CE + Compose plugin:

\`\`\`bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
\`\`\`

Enable Docker and add your user to the docker group:

\`\`\`bash
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
\`\`\`

:::hint warning
Log out and back in for the group change to take effect.
:::

:::

:::details Windows / Mac

Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/) - it includes Docker Engine, Docker CLI, and Docker Compose out of the box.

:::

### Verify Installation

\`\`\`bash
docker --version
docker compose version
\`\`\`

Test with a hello-world container:

\`\`\`bash
docker run hello-world
\`\`\`

:::hint tip
If you see a success message, Docker is installed and working correctly.
:::

---

## Core Concepts

Before diving into commands, understand these key building blocks:

### Images

An **image** is a read-only template used to create containers. Think of it as a snapshot of an application and its environment. Images are built from a \`Dockerfile\` or pulled from a registry like [Docker Hub](https://hub.docker.com/).

### Containers

A **container** is a running instance of an image. You can start, stop, restart, and delete containers. Multiple containers can be created from the same image.

### Volumes

**Volumes** are used to persist data outside of a container's lifecycle. Without volumes, data inside a container is lost when the container is removed.

### Networks

**Networks** allow containers to communicate with each other. Docker creates a default network, but you can define custom ones to isolate or connect services.

### Registries

A **registry** is a storage and distribution system for Docker images. [Docker Hub](https://hub.docker.com/) is the default public registry, but you can use private registries too.

---

## Essential Docker Commands

### Working with Images

Pull an image from Docker Hub:

\`\`\`bash
docker pull nginx
\`\`\`

List all downloaded images:

\`\`\`bash
docker images
\`\`\`

Remove an image:

\`\`\`bash
docker rmi nginx
\`\`\`

### Running Containers

Run a container from an image:

\`\`\`bash
docker run nginx
\`\`\`

This runs in the foreground. To run in the background (detached mode):

\`\`\`bash
docker run -d nginx
\`\`\`

Give your container a name:

\`\`\`bash
docker run -d --name my-webserver nginx
\`\`\`

Map a port from the container to your host:

\`\`\`bash
docker run -d -p 8080:80 --name my-webserver nginx
\`\`\`

Now you can access the Nginx web server at \`http://localhost:8080\`.

### Managing Containers

List running containers:

\`\`\`bash
docker ps
\`\`\`

List all containers (including stopped):

\`\`\`bash
docker ps -a
\`\`\`

Stop a running container:

\`\`\`bash
docker stop my-webserver
\`\`\`

Start a stopped container:

\`\`\`bash
docker start my-webserver
\`\`\`

Restart a container:

\`\`\`bash
docker restart my-webserver
\`\`\`

Remove a container (must be stopped first):

\`\`\`bash
docker rm my-webserver
\`\`\`

Force remove a running container:

\`\`\`bash
docker rm -f my-webserver
\`\`\`

### Inspecting Containers

View container logs:

\`\`\`bash
docker logs my-webserver
\`\`\`

Follow logs in real-time:

\`\`\`bash
docker logs -f my-webserver
\`\`\`

Open a shell inside a running container:

\`\`\`bash
docker exec -it my-webserver bash
\`\`\`

Inspect container details (network, mounts, config):

\`\`\`bash
docker inspect my-webserver
\`\`\`

### Working with Volumes

Create a named volume:

\`\`\`bash
docker volume create my-data
\`\`\`

Run a container with a volume:

\`\`\`bash
docker run -d -v my-data:/usr/share/nginx/html --name my-webserver nginx
\`\`\`

Or bind-mount a host directory:

\`\`\`bash
docker run -d -v ./my-site:/usr/share/nginx/html --name my-webserver nginx
\`\`\`

List volumes:

\`\`\`bash
docker volume ls
\`\`\`

Remove a volume:

\`\`\`bash
docker volume rm my-data
\`\`\`

### Cleanup

Remove all stopped containers:

\`\`\`bash
docker container prune
\`\`\`

Remove all unused images:

\`\`\`bash
docker image prune
\`\`\`

:::hint danger
The following command removes **all** unused containers, networks, images, and volumes. This is irreversible.
:::

\`\`\`bash
docker system prune -a --volumes
\`\`\`

---

## Writing a Dockerfile

A \`Dockerfile\` is a text file with instructions to build a custom Docker image. Each instruction creates a layer in the image.

### Basic Dockerfile Example

Here's a Dockerfile for a simple Node.js application:

\`\`\`dockerfile
# Start from the official Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run when the container starts
CMD ["node", "server.js"]
\`\`\`

### Common Dockerfile Instructions

| Instruction  | Purpose                                         |
| ------------ | ----------------------------------------------- |
| \`FROM\`       | Base image to build on                          |
| \`WORKDIR\`    | Set the working directory                       |
| \`COPY\`       | Copy files from host to image                   |
| \`RUN\`        | Execute a command during build                  |
| \`EXPOSE\`     | Document which port the container listens on    |
| \`CMD\`        | Default command when container starts           |
| \`ENV\`        | Set environment variables                       |
| \`ARG\`        | Build-time variables                            |
| \`ENTRYPOINT\` | Configure the container to run as an executable |
| \`VOLUME\`     | Create a mount point for external volumes       |

### Building an Image

Build an image from a Dockerfile in the current directory:

\`\`\`bash
docker build -t my-app .
\`\`\`

The \`-t\` flag tags the image with a name. The \`.\` tells Docker to look for the Dockerfile in the current directory.

Build with a specific tag/version:

\`\`\`bash
docker build -t my-app:1.0 .
\`\`\`

Run your custom image:

\`\`\`bash
docker run -d -p 3000:3000 --name my-app my-app:1.0
\`\`\`

### .dockerignore

Create a \`.dockerignore\` file to exclude files from the build context (similar to \`.gitignore\`):

\`\`\`txt:.dockerignore
node_modules
.git
.env
*.log
README.md
\`\`\`

:::hint tip
This keeps your image smaller and speeds up builds.
:::

---

## Docker Compose

Docker Compose is a tool for defining and running **multi-container** applications. Instead of running multiple \`docker run\` commands with long options, you define everything in a single \`docker-compose.yml\` file.

### Why Docker Compose?

Imagine you have a web app that needs:

- A **web server** (Node.js/Python/etc.)
- A **database** (PostgreSQL/MySQL)
- A **cache** (Redis)

Without Compose, you'd need to:

1. Create a network
2. Run each container separately with the right ports, volumes, networks, and environment variables
3. Remember the exact commands to recreate everything

With Compose, you define it all in one file and run \`docker compose up\`. Done.

### docker-compose.yml Structure

\`\`\`yaml:docker-compose.yml
services:
  service-name:
    image: image-name # Use a pre-built image
    # OR
    build: ./path # Build from a Dockerfile
    ports:
      - "host:container" # Port mapping
    volumes:
      - host-path:container-path # Bind mount
      - volume-name:container-path # Named volume
    environment:
      - KEY=value # Environment variables
    depends_on:
      - other-service # Start order dependency
    restart: unless-stopped # Restart policy
    networks:
      - my-network # Custom network

volumes:
  volume-name: # Declare named volumes

networks:
  my-network: # Declare custom networks
\`\`\`

### Practical Example: Web App with Database

Let's deploy a Node.js app with a PostgreSQL database and Redis cache:

\`\`\`yaml:docker-compose.yml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://myuser:mypassword@db:5432/mydb
      - REDIS_URL=redis://cache:6379
    depends_on:
      - db
      - cache
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
      - POSTGRES_DB=mydb
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

  cache:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    restart: unless-stopped

volumes:
  pgdata:
\`\`\`

A few things to notice:

- The \`app\` service uses \`build: .\` to build from a Dockerfile in the current directory
- The \`db\` service uses a named volume \`pgdata\` to persist database data
- Services can refer to each other by name (\`db\`, \`cache\`) - Docker Compose sets up DNS automatically
- \`depends_on\` ensures the database and cache start before the app

### Docker Compose Commands

Start all services (in the background):

\`\`\`bash
docker compose up -d
\`\`\`

Start and force rebuild images:

\`\`\`bash
docker compose up -d --build
\`\`\`

Stop all services:

\`\`\`bash
docker compose down
\`\`\`

Stop and remove all data (volumes too):

\`\`\`bash
docker compose down -v
\`\`\`

View logs for all services:

\`\`\`bash
docker compose logs
\`\`\`

Follow logs for a specific service:

\`\`\`bash
docker compose logs -f app
\`\`\`

List running services:

\`\`\`bash
docker compose ps
\`\`\`

Execute a command in a running service:

\`\`\`bash
docker compose exec app sh
\`\`\`

Restart a specific service:

\`\`\`bash
docker compose restart app
\`\`\`

Pull latest images:

\`\`\`bash
docker compose pull
\`\`\`

### Environment Variables

Instead of hardcoding secrets in your compose file, use a \`.env\` file:

\`\`\`env:.env
POSTGRES_USER=myuser
POSTGRES_PASSWORD=supersecretpassword
POSTGRES_DB=mydb
\`\`\`

Reference them in your \`docker-compose.yml\`:

\`\`\`yaml:docker-compose.yml
services:
  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=\${POSTGRES_USER}
      - POSTGRES_PASSWORD=\${POSTGRES_PASSWORD}
      - POSTGRES_DB=\${POSTGRES_DB}
\`\`\`

Docker Compose automatically reads \`.env\` files in the same directory.

---

## Useful Tips

### Restart Policies

Control what happens when a container crashes:

| Policy           | Behavior                                       |
| ---------------- | ---------------------------------------------- |
| \`no\`             | Never restart (default)                        |
| \`always\`         | Always restart, even if manually stopped       |
| \`on-failure\`     | Restart only if the container exits with error |
| \`unless-stopped\` | Restart unless explicitly stopped              |

:::hint tip
\`unless-stopped\` is the best restart policy for most services - containers will auto-start on reboot but won't restart if you manually stop them.
:::

### Viewing Resource Usage

Check CPU and memory usage of running containers:

\`\`\`bash
docker stats
\`\`\`

### Networking Between Containers

Containers in the same Docker Compose file can communicate using the **service name** as the hostname:

\`\`\`bash
# From the "app" container, connect to the database:
postgresql://myuser:mypassword@db:5432/mydb
#                               ^^ service name, not localhost
\`\`\`

### Multi-Stage Builds

Keep your production images small by using multi-stage builds:

\`\`\`dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]
\`\`\`

The final image only contains the built output, not the source code or build tools.

### Quick Reference

| Task                    | Command                            |
| ----------------------- | ---------------------------------- |
| Pull an image           | \`docker pull image\`                |
| Run a container         | \`docker run -d -p 80:80 image\`     |
| List running containers | \`docker ps\`                        |
| Stop a container        | \`docker stop name\`                 |
| View logs               | \`docker logs name\`                 |
| Shell into container    | \`docker exec -it name sh\`          |
| Start compose stack     | \`docker compose up -d\`             |
| Stop compose stack      | \`docker compose down\`              |
| View compose logs       | \`docker compose logs -f\`           |
| Rebuild and start       | \`docker compose up -d --build\`     |
| Clean up everything     | \`docker system prune -a --volumes\` |
`,"/posts/dump-cdm-widevine.md":`---
title: Dumping Your Own L3 CDM with Android Studio
slug: dump-cdm-widevine
date: 31-05-2026
tags: [drm, android, frida, widevine]
description: How to dump a Widevine L3 CDM using Android Studio and a virtual device, without a physical Android phone.
unlisted: true
---

This guide will show you how to dump your own Widevine L3 CDM using Android Studio and a virtual device, without needing a physical Android phone.

Download Android Studio here: [https://developer.android.com/studio](https://developer.android.com/studio)

:::hint info
You need a decent processor and at least 12GB of RAM. It runs on lower-end hardware, but expect it to be slow.
:::

---

## 1. Create a Virtual Device

Because Android Studio has deprecated suppport for API levels below 30, you will need to use the command line to create a virtual device with API level 28.

First navigate to the Android SDK directory. By default, it is located at by navigating to:

\`\`\`txt
%localappdata%\\Android\\Sdk\\cmdline-tools\\latest\\bin
\`\`\`

Then open a terminal in this directory:

![android-sdk-location](widevine/01-android-sdk-location.png)

Then to download the required system image, run:

\`\`\`bash
.\\sdkmanager "system-images;android-28;google_apis;x86_64"
\`\`\`

wait for this to load and it should say something along the lines of this:

![sdkmanager](widevine/02-sdkmanager.png)

Next, to create a new virtual device, run:

\`\`\`bash
.\\avdmanager create avd -n widevine28 -k "system-images;android-28;google_apis;x86_64" -d pixel_6
\`\`\`

![avdmanager](widevine/03-avdmanager.png)

Now your virtual device is created, so you can start it via the Device Manager in Android Studio:

![device-manager](widevine/04-device-manager.png)

Click Start and wait for the device to boot. It can take a while.

![device-booting](widevine/05-booting.png)

Your virtual device is ready, and you can now proceed as if this were a real device.

![device-ready](widevine/06-device-ready.png)

You can now close the old terminal if you want.

---

## 2. Install Frida

Open a new terminal and run(assuming you have Python installed correctly, which I wont cover here):

\`\`\`bash
pip install frida==16.0.2 frida-tools==12.0.4
\`\`\`

![frida-install](widevine/07-frida-install.png)

Go to [https://github.com/frida/frida/releases/tag/16.0.2](https://github.com/frida/frida/releases/tag/16.0.2) and download Frida server version **16.0.2** for **Android x86_64** (that's the same as the android image we downloaded).

Or you can click the link below to download it directly:

[https://github.com/frida/frida/releases/download/16.0.2/frida-server-16.0.2-android-x86_64.xz](https://github.com/frida/frida/releases/download/16.0.2/frida-server-16.0.2-android-x86_64.xz)

![frida-server-download](widevine/08-frida-server-download.png)

Place the unzipped file in:

\`\`\`txt
%localappdata%\\Android\\Sdk\\platform-tools
\`\`\`

:::hint warning
The frida-server version must match the version you installed via pip.
:::

![frida-server-file](widevine/09-frida-server-file.png)

---

## 3. Connect to the Virtual Device

Assuming you are in the platform-tools directory, open a terminal and verify the device is recognized:

\`\`\`bash
.\\adb.exe devices
\`\`\`

![adb-devices](widevine/10-adb-devices.png)

Push the Frida server to the virtual device:

\`\`\`bash
.\\adb.exe push frida-server-16.0.2-android-x86_64 /sdcard
\`\`\`

![adb-push](widevine/11-adb-push.png)

Open a shell, move the file, set permissions, and start the server:

\`\`\`bash
.\\adb.exe shell
\`\`\`

\`\`\`sh
su
mv /sdcard/frida-server-16.0.2-android-x86_64 /data/local/tmp
chmod +x /data/local/tmp/frida-server-16.0.2-android-x86_64
/data/local/tmp/frida-server-16.0.2-android-x86_64
\`\`\`

![frida-server-running](widevine/12-frida-server-running.png)

:::hint danger
Keep this terminal open. Closing it stops the Frida server.
:::

---

## 4. Run the Dumper

Download dumper from: [https://github.com/wvdumper/dumper](https://github.com/wvdumper/dumper)

:::details If that repo is unavailable, you can also download it from one of these mirrors:
GitHub mirror: [https://github.com/hecker-01/dumper](https://github.com/hecker-01/dumper)
Self-Hosted mirror (slow): [https://bittr.dev/hecker-01/dumper](https://bittr.dev/hecker-01/dumper)
:::

Open a second terminal, navigate to the \`dumper\` directory, and run:

\`\`\`bash
pip3 install -r requirements.txt
python dump_keys.py
\`\`\`

![dump-keys-running](widevine/13-dump-keys-running.png)

:::hint danger
Keep this terminal open too. You now have two terminals running.
:::

---

## 5. Trigger the CDM

On the virtual device, open Google Chrome and go to:

[https://bitmovin.com/demos/drm](https://bitmovin.com/demos/drm)

Chrome will ask for permission to allow the website to access the DRM system. Click "Allow".

![allow-drm-access](widevine/14-allow-drm-access.png)

Play the video. The dumper intercepts the keys automatically.

![dump-success](widevine/15-dump-success.png)

---

## 6. Retrieve the Files

In the dumper directory, open the \`./key_dumps/Android Emulator xxxx/pricate_keys/xxxx/xxxxxxxxxx\` folder. You will find two files.

![private-keys](widevine/16-private-keys.png)

You now have the two CDM files:

| Filename        |
| --------------- |
| client_id.bin   |
| private_key.pem |

:::hint info
You can now delete the virtual device and all the files you downloaded if you want. You have what you need, and the virtual device is just taking up space on your hard drive.
:::

:::hint tip
To get a fresh CDM pair, create a new virtual device and repeat the process from step 1.
:::

> Disclaimer: This guide is for educational purposes only. Dumping CDMs may violate the terms of service of certain applications and could be illegal in some jurisdictions. Always ensure you have the right to access and use the content you are working with.
`,"/posts/jellyfin-server.md":`---
title: Jellyfin Server with Docker Compose
slug: jellyfin-server
date: 25-02-2026
tags: [jellyfin, media server, docker, docker-compose, tutorial, guide]
description: Setting up a Jellyfin media server with Docker Compose, for an automated anime media management system.
unlisted: true
---

:::hint info
Requirements: Ubuntu Server 24.04 clean install + Docker CE + Compose V2
:::

---

## Overview

This stack installs:

- Docker CE
- qBittorrent
- Prowlarr
- Sonarr (Anime mode)
- Radarr (Anime movies)
- Jellyfin
- Seerr

Workflow:

1. Request anime in Seerr
2. Sonarr/Radarr searches indexers via Prowlarr
3. qBittorrent downloads
4. Sonarr/Radarr renames and moves files
5. Jellyfin displays episodes and movies

---

## Step 1. Install Docker CE

Remove any old Docker packages:

\`\`\`bash
sudo apt remove docker.io docker-compose docker-compose-plugin -y
sudo apt autoremove -y
\`\`\`

Install dependencies:

\`\`\`bash
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release -y
\`\`\`

Add Docker GPG key:

\`\`\`bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
\`\`\`

Add Docker repository:

\`\`\`bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu noble stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
\`\`\`

Install Docker CE + Compose plugin:

\`\`\`bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
\`\`\`

Enable Docker:

\`\`\`bash
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
\`\`\`

:::hint warning
Log out and back in for the group change to take effect.
:::

Verify:

\`\`\`bash
docker compose version
docker run hello-world
\`\`\`

---

## Step 2. Create Folder Structure

\`\`\`bash
sudo mkdir -p /srv/media/downloads
sudo mkdir -p /srv/media/anime
sudo mkdir -p /srv/media/anime-movies
sudo mkdir -p /srv/docker
sudo mkdir -p /srv/docker/seerr
sudo chown -R $USER:$USER /srv/media
sudo chown -R $USER:$USER /srv/docker
sudo chown -R $USER:$USER /srv/docker/seerr
\`\`\`

Structure:

\`\`\`txt
/srv/media/downloads     -> torrents download here
/srv/media/anime         -> finished anime series
/srv/media/anime-movies  -> finished anime movies
\`\`\`

---

## Step 3: Create docker-compose.yml

\`\`\`bash
cd /srv/docker
nano docker-compose.yml
\`\`\`

Paste:

\`\`\`yaml:docker-compose.yml
services:
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
      - WEBUI_PORT=8080
    volumes:
      - /srv/media/downloads:/downloads
      - /srv/docker/qbittorrent:/config
    ports:
      - 8080:8080
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped

  prowlarr:
    image: lscr.io/linuxserver/prowlarr:latest
    container_name: prowlarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /srv/docker/prowlarr:/config
    ports:
      - 9696:9696
    restart: unless-stopped

  sonarr:
    image: lscr.io/linuxserver/sonarr:latest
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /srv/media/anime:/tv
      - /srv/media/downloads:/downloads
      - /srv/docker/sonarr:/config
    ports:
      - 8989:8989
    restart: unless-stopped

  radarr:
    image: lscr.io/linuxserver/radarr:latest
    container_name: radarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /srv/media/anime-movies:/movies
      - /srv/media/downloads:/downloads
      - /srv/docker/radarr:/config
    ports:
      - 7878:7878
    restart: unless-stopped

  jellyfin:
    image: lscr.io/linuxserver/jellyfin:latest
    container_name: jellyfin
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /srv/media/anime:/data/tvshows
      - /srv/media/anime-movies:/data/movies
      - /srv/docker/jellyfin:/config
    ports:
      - 8096:8096
    restart: unless-stopped

  seerr:
    image: ghcr.io/seerr-team/seerr:latest
    init: true
    container_name: seerr
    environment:
      - LOG_LEVEL=debug
      - TZ=Europe/Amsterdam
      - PORT=5055
    ports:
      - 5055:5055
    volumes:
      - /srv/docker/seerr:/app/config
    healthcheck:
      test: wget --no-verbose --tries=1 --spider http://localhost:5055/api/v1/status || exit 1
      start_period: 20s
      timeout: 3s
      interval: 15s
      retries: 3
    restart: unless-stopped
\`\`\`

Start stack:

\`\`\`bash
docker compose up -d
\`\`\`

---

## qBittorrent First Login

Get the generated admin password:

\`\`\`bash
docker logs qbittorrent | grep password
\`\`\`

:::hint tip
The generated password is only shown once in the logs. Copy it and change it in the qBittorrent settings immediately.
:::

Open:

[http://$[server-ip]:8080](http://$[server-ip]:8080)

Username: admin
Password: shown in logs

Set download path to:

\`\`\`txt
/downloads
\`\`\`

---

## Prowlarr Setup

Open:

[http://$[server-ip]:9696](http://$[server-ip]:9696)

Add indexers:

- Nyaa.si (Torznab / \`nyaa.si\`)

Add Sonarr and Radarr under Settings -> Apps.

---

## Sonarr Setup

Open:

[http://$[server-ip]:8989](http://$[server-ip]:8989)

Root folder:

\`\`\`txt
/tv
\`\`\`

Add qBittorrent:

Host: qbittorrent
Port: 8080
Username: admin
Password: generated password

Choose Anime as Series Type.

---

## Radarr Setup

Open:

[http://$[server-ip]:7878](http://$[server-ip]:7878)

Root folder:

\`\`\`txt
/movies
\`\`\`

Add qBittorrent:

Host: qbittorrent
Port: 8080
Username: admin
Password: generated password

---

## Jellyfin Setup

Open:

[http://$[server-ip]:8096](http://$[server-ip]:8096)

Create TV library using:

\`\`\`txt
/data/tvshows
\`\`\`

Create Movies library using:

\`\`\`txt
/data/movies
\`\`\`

### Install AniDB Plugin

1. Go to **Administration** → **Dashboard** → **Plugins**
2. Click the **Available** tab at the top
3. Find **AniDB** and click it
4. Click **Install**
5. Restart Jellyfin

After restart, AniDB will be available as a metadata provider for your anime library.

---

## Seerr Setup

Open:

[http://$[server-ip]:5055](http://$[server-ip]:5055)

Connect to Jellyfin.
Connect to Sonarr.
Connect to Radarr.

Add Discord webhook under **Settings** → **Notifications** → **Discord**:
Paste your Discord webhook URL and configure notification types.

Root folder:

\`\`\`txt
/tv
\`\`\`

---

## Result

Request anime in Seerr.
Sonarr/Radarr searches via Prowlarr.
qBittorrent downloads.
Sonarr/Radarr imports and renames.
Jellyfin displays episodes and movies.
`,"/posts/local-database.md":`---
title: Setting up a local database with PHPMyAdmin
slug: local-database
date: 30-01-2026
tags: [database, mariadb, phpmyadmin, tutorial, guide, docker, docker-compose]
description: Setting up a local mariaDB database with PHPMyAdmin in docker
unlisted: false
---

## Prerequisites

Before starting, make sure you have Docker Desktop installed on your machine. Download it from [Docker's official website](https://www.docker.com/products/docker-desktop/) and ensure it's running (you should see the Docker icon in your system tray).

New to Docker? Check out the [Using Docker and Docker Compose](/posts?post=docker-and-compose) guide first for an introduction to containers, images, and essential commands.

## Installation with Docker Compose

The easiest way to set up the stack is with Docker Compose - define everything in a single file and manage it with one command. See the [Docker Compose guide](/posts?post=docker-and-compose#docker-compose) for a full overview.

Create a \`docker-compose.yml\` file:

\`\`\`yaml:docker-compose.yml
services:
  db:
    image: mariadb:10.5
    container_name: db
    environment:
      - MYSQL_ROOT_PASSWORD=mypass
    volumes:
      - db-data:/var/lib/mysql
    ports:
      - "3306:3306"
    restart: unless-stopped

  phpmyadmin:
    image: phpmyadmin
    container_name: phpmyadmin
    environment:
      - PMA_HOST=db
    ports:
      - "8080:80"
    depends_on:
      - db
    restart: unless-stopped

volumes:
  db-data:
\`\`\`

Start the stack:

\`\`\`bash
docker compose up -d
\`\`\`

Stop the stack:

\`\`\`bash
docker compose down
\`\`\`

:::hint danger
\`docker compose down -v\` permanently deletes the database volume and all its data.
:::

Stop and remove all data (including the database volume):

\`\`\`bash
docker compose down -v
\`\`\`

Why Compose over manual commands:

- **No manual network creation** - Compose creates a shared network automatically
- **Persistent data** - the named volume \`db-data\` keeps your database data between restarts
- **One command** - start or stop everything with a single \`docker compose up -d\` or \`docker compose down\`
- **Reproducible** - share the file with teammates and they get an identical setup

## Accessing PHPMyAdmin

Navigate to \`http://localhost:8080\` in your web browser.

**Login credentials:**

- Username: \`root\`
- Password: \`mypass\` (or whatever password you set earlier)

---

## Alternative: Using Standalone Docker Commands {#standalone}

If you prefer running containers individually without a Compose file, you can use \`docker run\` directly.

### 1. Create a Docker Network

First, create a network so the containers can communicate. Open your terminal (PowerShell on Windows, Terminal on Mac/Linux) and run:

\`\`\`bash
docker network create db-network
\`\`\`

This creates a bridge network that allows the database and PHPMyAdmin containers to connect.
(If you have docker containers that need to connect to the database, you can add them to this network as well.)

### 2. Set up MariaDB

Pull and run the MariaDB container:

\`\`\`bash
docker pull mariadb:10.5
docker run --name db -e MYSQL_ROOT_PASSWORD=mypass -p 3306:3306 --network db-network -d mariadb:10.5
\`\`\`

**What these flags mean:**

- \`--name db\` - Names the container "db" for easy reference
- \`-e MYSQL_ROOT_PASSWORD=mypass\` - Sets the root password (change "mypass" to your preferred password)
- \`-p 3306:3306\` - Maps port 3306 from the container to your machine (MariaDB's default port)
- \`--network db-network\` - Connects the container to our network
- \`-d\` - Runs the container in detached mode (background)

### 3. Set up PHPMyAdmin

Set up the PHPMyAdmin web interface:

\`\`\`bash
docker pull phpmyadmin
docker run --name phpmyadmin -e PMA_HOST=db -p 8080:80 --network db-network -d phpmyadmin
\`\`\`

**What these flags mean:**

- \`--name phpmyadmin\` - Names the container "phpmyadmin"
- \`-e PMA_HOST=db\` - Tells PHPMyAdmin to connect to our "db" container
- \`-p 8080:80\` - Maps port 8080 on your machine to port 80 in the container (PHPMyAdmin's web interface)
- \`--network db-network\` - Connects to the same network as the database

### Verification

Open Docker Desktop and you should see both containers running in the Containers tab. They should have green status indicators.

Alternatively, verify in the terminal with:

\`\`\`bash
docker ps
\`\`\`

You should see both \`db\` and \`phpmyadmin\` containers listed.

### Daily Usage

#### Using Docker Desktop

Open Docker Desktop, go to the Containers tab, and use the play/pause buttons to start or stop your containers.

#### Using Command Line

**Stop containers:**

\`\`\`bash
docker stop db phpmyadmin
\`\`\`

**Start containers:**

\`\`\`bash
docker start db phpmyadmin
\`\`\`

### Cleanup

#### Using Docker Desktop

Go to Containers tab, click the trash icon next to each container.

#### Using Command Line

\`\`\`bash
docker rm -f db phpmyadmin
docker network rm db-network
\`\`\`

The \`-f\` flag forces removal even if containers are running.

---

## Troubleshooting

:::hint warning
**Port already in use:** If you get an error about ports 3306 or 8080 being in use, stop the conflicting application or change the host port: \`-p 3307:3306\` or \`-p 8081:80\`.
:::

:::hint warning
**Can't connect to database:** Make sure both containers are on the same network and the database container has fully started - wait 10-15 seconds after starting.
:::

:::hint tip
**Containers not showing in Docker Desktop:** Refresh the application or restart Docker Desktop.
:::

## Conclusion

That's it! You now have a local MariaDB database with PHPMyAdmin set up using Docker Desktop.
`,"/posts/markdown-showcase.md":`---
title: Markdown Features Showcase
slug: markdown-showcase
date: 01-03-2026
tags: [documentation, markdown, reference]
description: A comprehensive showcase of all custom markdown features available in posts.
unlisted: true
---

This post demonstrates all the custom markdown features available for writing posts. Use this as a reference when creating new content.

---

## Code Blocks

Code blocks support syntax highlighting and an optional filename in the header bar.

### Basic Code Block

Just specify the language:

\`\`\`bash
docker compose up -d
\`\`\`

**Syntax:**

\`\`\`txt
\\\`\\\`\\\`bash
docker compose up -d
\\\`\\\`\\\`
\`\`\`

### Code Block with Filename

Add a filename after the language using a colon:

\`\`\`yaml:docker-compose.yml
services:
  app:
    image: nginx:latest
    ports:
      - "8080:80"
\`\`\`

**Syntax:**

\`\`\`txt
\\\`\\\`\\\`yaml:docker-compose.yml
services:
  app:
    image: nginx:latest
    ports:
      - "8080:80"
\\\`\\\`\\\`
\`\`\`

### Supported Languages

\`bash\`, \`yaml\`, \`javascript\`, \`python\`, \`css\`, \`dockerfile\`, \`txt\`, and more via Prism.js.

---

## Dropdown/Collapsible Sections

Use dropdowns to hide content until clicked. Great for platform-specific instructions or optional details.

:::details Linux/Ubuntu Installation
Remove old packages:

\`\`\`bash
sudo apt remove docker.io docker-compose -y
\`\`\`

Install Docker:

\`\`\`bash
sudo apt install docker-ce docker-ce-cli containerd.io -y
\`\`\`

:::

:::details Windows Installation
Download and install Docker Desktop from the official website.
:::

:::details macOS Installation
Download Docker Desktop for Mac or use Homebrew:

\`\`\`bash
brew install --cask docker
\`\`\`

:::

**Syntax:**

\`\`\`txt
:::details Title Goes Here
Your content here. Can include code blocks, lists, etc.
:::
\`\`\`

---

## Hints / Callouts

Use hints to highlight important information with different severity levels.

### Info

:::hint info
This is general information that might be useful to know.
:::

**Syntax:**

\`\`\`txt
:::hint info
This is general information that might be useful to know.
:::
\`\`\`

### Tip

:::hint tip
Pro tip: Use keyboard shortcuts to work faster!
:::

**Syntax:**

\`\`\`txt
:::hint tip
Pro tip: Use keyboard shortcuts to work faster!
:::
\`\`\`

### Warning

:::hint warning
Make sure to backup your data before proceeding.
:::

**Syntax:**

\`\`\`txt
:::hint warning
Make sure to backup your data before proceeding.
:::
\`\`\`

### Danger

:::hint danger
This action is irreversible and will delete all data!
:::

**Syntax:**

\`\`\`txt
:::hint danger
This action is irreversible and will delete all data!
:::
\`\`\`

### Note

:::hint note
This feature is only available in version 2.0 and above.
:::

**Syntax:**

\`\`\`txt
:::hint note
This feature is only available in version 2.0 and above.
:::
\`\`\`

---

## Tables

Tables support inline code inside cells.

| Command            | Description             |
| ------------------ | ----------------------- |
| \`docker ps\`        | List running containers |
| \`docker images\`    | List downloaded images  |
| \`docker stop name\` | Stop a container        |
| \`docker rm name\`   | Remove a container      |

**Syntax:**

\`\`\`txt
| Command | Description |
| ------- | ----------- |
| \`docker ps\` | List running containers |
| \`docker images\` | List downloaded images |
\`\`\`

---

## Lists

### Unordered Lists

- First item
- Second item
- Third item

**Syntax:**

\`\`\`txt
- First item
- Second item
- Third item
\`\`\`

### Ordered Lists

1. First step
2. Second step
3. Third step

**Syntax:**

\`\`\`txt
1. First step
2. Second step
3. Third step
\`\`\`

---

## Text Formatting

### Inline Code

Use \`backticks\` for inline code.

**Syntax:** \`\\\`backticks\\\`\`

### Bold

Use **double asterisks** for bold text.

**Syntax:** \`**double asterisks**\`

### Italic

Use _single asterisks_ for italic text.

**Syntax:** \`*single asterisks*\`

### Bold Italic

Use **_double asterisks with underscores_** for bold italic.

**Syntax:** \`**_double asterisks with underscores_**\`

### Strikethrough

Use ~~double tildes~~ for strikethrough.

**Syntax:** \`~~double tildes~~\`

---

## Links and Images

### Links

Check out the [Docker documentation](https://docs.docker.com/).

**Syntax:** \`[link text](https://url.com/)\`

### Images

![site-screenshot](screenshot.png)

**Syntax:** \`![alt text](image-url.jpg)\`

---

## Blockquotes

> This is a blockquote. Use it for quotes or important callouts.

**Syntax:**

\`\`\`txt
> This is a blockquote.
\`\`\`

---

## Horizontal Rules

Use \`---\` on its own line for a horizontal rule.

---

## Variable Substitution

You can use variables that readers can fill in:

Server IP: $[server-ip]

**Syntax:** \`\\$[variable-name]\`

To escape a variable (show it literally), use a backslash: \`\\\\$[variable-name]\`

---

## Headings

Headings automatically get anchor links (hover to see the \`#\` link).

\`\`\`txt
# H1 Heading
## H2 Heading
### H3 Heading
\`\`\`

---

## Complete Example

Here's a real-world example combining multiple features:

:::hint tip
This guide assumes you have Docker installed. See the installation section below if needed.
:::

:::details Installation Instructions

\`\`\`bash
# Install Docker on Ubuntu
sudo apt update
sudo apt install docker-ce -y
\`\`\`

:::

### Quick Start

1. Create a compose file
2. Start the stack
3. Verify it's running

\`\`\`yaml:docker-compose.yml
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
\`\`\`

\`\`\`bash
docker compose up -d
docker ps
\`\`\`

| Service | Port | Status  |
| ------- | ---- | ------- |
| \`web\`   | \`80\` | Running |

:::hint warning
Remember to open port 80 in your firewall!
:::
`,"/posts/using-commandline.md":`---
title: Using the Command Line (crashcourse)
slug: using-commandline
date: 16-12-2025
tags: [tutorial, guide, cli, terminal, bash, powershell, windows, linux]
description: A beginner-friendly guide to mastering the command line on Windows and Linux
unlisted: true
---

## Why Learn the Command Line?

The command line (also called terminal, shell, or console) is a powerful tool that lets you interact with your computer using text commands. While it might seem intimidating at first, learning it will:

- Make you faster and more efficient
- Give you more control over your system
- Enable automation of repetitive tasks
- Be essential for development, servers, and IT work

## Opening Your Terminal

### Windows

**PowerShell (Recommended):**

- Press \`Win + X\` and select "Windows Terminal" or "PowerShell"
- Or press \`Win + R\`, type \`powershell\`, and press Enter

**Command Prompt (Legacy):**

- Press \`Win + R\`, type \`cmd\`, and press Enter

### Linux/Mac

- Press \`Ctrl + Alt + T\` (Linux)
- Open Spotlight (\`Cmd + Space\`) and type "Terminal" (Mac)
- Or find Terminal in your applications menu

## Understanding the Prompt

When you open your terminal, you'll see a prompt waiting for input:

**Linux/Mac (Bash):**

\`\`\`bash
username@hostname:~$
\`\`\`

**Windows (PowerShell):**

\`\`\`powershell
PS C:\\Users\\Username>
\`\`\`

The prompt shows your current location. The \`~\` symbol represents your home directory.

## Navigating the File System

### Print Current Directory

See where you are right now:

| Linux/Mac | Windows                           |
| --------- | --------------------------------- |
| \`pwd\`     | \`pwd\` or \`cd\` (without arguments) |

\`\`\`bash
# Linux/Mac
pwd
# Output: /home/username

# Windows PowerShell
pwd
# Output: C:\\Users\\Username
\`\`\`

### List Files and Folders

See what's in the current directory:

| Linux/Mac | Windows       |
| --------- | ------------- |
| \`ls\`      | \`ls\` or \`dir\` |

\`\`\`bash
# Linux/Mac
ls

# Show hidden files too
ls -a

# Show detailed information
ls -l

# Combine options
ls -la
\`\`\`

\`\`\`powershell
# Windows PowerShell
ls

# Or the classic command
dir

# Show hidden files
ls -Force
\`\`\`

### Change Directory

Move between folders:

| Linux/Mac | Windows   |
| --------- | --------- |
| \`cd path\` | \`cd path\` |

\`\`\`bash
# Go to a folder
cd Documents

# Go up one level
cd ..

# Go up two levels
cd ../..

# Go to home directory
cd ~       # Linux/Mac
cd $HOME   # Also works on Linux/Mac

# Go to previous directory
cd -       # Linux/Mac only

# Go to root directory
cd /       # Linux/Mac
cd \\       # Windows
\`\`\`

**Windows-specific:**

\`\`\`powershell
# Change drive
D:

# Go to a folder on another drive
cd D:\\Projects
\`\`\`

### Path Separators

- **Linux/Mac:** Forward slash \`/\` → \`/home/user/Documents\`
- **Windows:** Backslash \`\\\\\` → \`C:\\Users\\User\\Documents\`

PowerShell accepts both, but CMD requires backslashes.

## Working with Files and Folders

### Create a Directory

| Linux/Mac.   | Windows      |
| ------------ | ------------ |
| \`mkdir name\` | \`mkdir name\` |

\`\`\`bash
# Create a single folder
mkdir projects

# Create nested folders at once
mkdir -p projects/website/css    # Linux/Mac
mkdir -Path projects/website/css # Windows PowerShell
\`\`\`

### Create a File

| Linux/Mac        | Windows                              |
| ---------------- | ------------------------------------ |
| \`touch filename\` | \`New-Item filename\` or \`ni filename\` |

\`\`\`bash
# Linux/Mac
touch notes.txt
touch index.html style.css script.js

# Windows PowerShell
New-Item notes.txt
ni index.html, style.css, script.js
\`\`\`

### Copy Files and Folders

| Linux/Mac        | Windows                    |
| ---------------- | -------------------------- |
| \`cp source dest\` | \`cp source dest\` or \`copy\` |

\`\`\`bash
# Copy a file
cp file.txt backup.txt

# Copy to another directory
cp file.txt Documents/

# Copy a folder (recursive)
cp -r folder/ folder-backup/    # Linux/Mac
cp -Recurse folder/ folder-backup/ # Windows PowerShell
\`\`\`

### Move/Rename Files and Folders

| Linux/Mac        | Windows                    |
| ---------------- | -------------------------- |
| \`mv source dest\` | \`mv source dest\` or \`move\` |

\`\`\`bash
# Rename a file
mv oldname.txt newname.txt

# Move to another directory
mv file.txt Documents/

# Move and rename
mv file.txt Documents/newname.txt
\`\`\`

### Delete Files and Folders

| Linux/Mac     | Windows                |
| ------------- | ---------------------- |
| \`rm filename\` | \`rm filename\` or \`del\` |

:::hint danger
Files deleted via terminal bypass the Recycle Bin/Trash. They are gone immediately and cannot be recovered.
:::

\`\`\`bash
# Delete a file
rm unwanted.txt

# Delete multiple files
rm file1.txt file2.txt

# Delete a folder (recursive)
rm -r foldername       # Linux/Mac
rm -Recurse foldername # Windows PowerShell

# Force delete without confirmation
rm -rf foldername      # Linux/Mac
rm -Recurse -Force foldername # Windows PowerShell
\`\`\`

## Viewing and Editing Files

### View File Contents

| Linux/Mac      | Windows                           |
| -------------- | --------------------------------- |
| \`cat filename\` | \`cat filename\` or \`type filename\` |

\`\`\`bash
# Display entire file
cat readme.md

# Display with line numbers
cat -n readme.md  # Linux/Mac
\`\`\`

### View Large Files

| Linux/Mac       | Windows         |
| --------------- | --------------- |
| \`less filename\` | \`more filename\` |

\`\`\`bash
# Linux/Mac - scrollable viewer
less largefile.log
# Press q to quit, arrows to scroll, / to search

# Windows
more largefile.log
# Press Space for next page, q to quit
\`\`\`

### View Beginning/End of Files

\`\`\`bash
# First 10 lines
head filename.txt       # Linux/Mac
Get-Content filename.txt -Head 10  # Windows PowerShell

# Last 10 lines
tail filename.txt       # Linux/Mac
Get-Content filename.txt -Tail 10  # Windows PowerShell

# Specify number of lines
head -n 20 filename.txt
tail -n 50 filename.txt
\`\`\`

### Edit Files (Terminal Editors)

**Linux/Mac:**

\`\`\`bash
# Nano (beginner-friendly)
nano filename.txt
# Ctrl+O to save, Ctrl+X to exit

# Vim (powerful but steep learning curve)
vim filename.txt
# Press i to insert, Esc then :wq to save and quit
\`\`\`

**Windows:**

\`\`\`powershell
# Open in Notepad
notepad filename.txt

# Or use VS Code if installed
code filename.txt
\`\`\`

## Searching and Finding

### Find Files

| Linux/Mac | Windows                  |
| --------- | ------------------------ |
| \`find\`    | \`Get-ChildItem -Recurse\` |

\`\`\`bash
# Linux/Mac
# Find by name
find . -name "*.txt"

# Find files modified in last 7 days
find . -mtime -7

# Find by size (larger than 100MB)
find . -size +100M
\`\`\`

\`\`\`powershell
# Windows PowerShell
# Find by name
Get-ChildItem -Recurse -Filter "*.txt"

# Short form
gci -r -fi "*.txt"
\`\`\`

### Search Inside Files

| Linux/Mac           | Windows                      |
| ------------------- | ---------------------------- |
| \`grep pattern file\` | \`Select-String pattern file\` |

\`\`\`bash
# Linux/Mac
# Search for text in a file
grep "error" logfile.txt

# Case-insensitive search
grep -i "error" logfile.txt

# Search recursively in all files
grep -r "TODO" .

# Show line numbers
grep -n "function" script.js
\`\`\`

\`\`\`powershell
# Windows PowerShell
Select-String "error" logfile.txt

# Recursive search
Get-ChildItem -Recurse | Select-String "TODO"
\`\`\`

## Working with Text

### Redirect Output to File

\`\`\`bash
# Create/overwrite file with output
ls > filelist.txt

# Append to file
echo "new line" >> notes.txt
\`\`\`

### Pipe Commands Together

Send the output of one command as input to another:

\`\`\`bash
# Count files in a directory
ls | wc -l           # Linux/Mac
(ls).Count           # Windows PowerShell

# Find specific files and count them
ls | grep ".txt" | wc -l     # Linux/Mac
(ls *.txt).Count             # Windows PowerShell

# Search and paginate results
cat largefile.log | grep "error" | less  # Linux/Mac
\`\`\`

### Print Text

\`\`\`bash
# Linux/Mac
echo "Hello, World!"

# Windows PowerShell
echo "Hello, World!"
Write-Host "Hello, World!"
\`\`\`

## System Information

### View System Info

\`\`\`bash
# Linux
uname -a         # System information
lsb_release -a   # Distribution info
df -h            # Disk space
free -h          # Memory usage

# Windows PowerShell
systeminfo
Get-ComputerInfo
\`\`\`

### View Running Processes

| Linux/Mac     | Windows                     |
| ------------- | --------------------------- |
| \`ps\` or \`top\` | \`Get-Process\` or \`tasklist\` |

\`\`\`bash
# Linux/Mac
ps aux           # All processes
top              # Live process viewer
htop             # Better process viewer (if installed)

# Windows PowerShell
Get-Process
tasklist
\`\`\`

### Kill a Process

| Linux/Mac  | Windows                |
| ---------- | ---------------------- |
| \`kill PID\` | \`Stop-Process -Id PID\` |

\`\`\`bash
# Linux/Mac
kill 1234        # Graceful termination
kill -9 1234     # Force kill

# Windows PowerShell
Stop-Process -Id 1234
Stop-Process -Name "notepad"
\`\`\`

## Network Commands

### Test Connectivity

\`\`\`bash
# Ping a server
ping google.com

# Limit number of pings (Linux/Mac)
ping -c 4 google.com
\`\`\`

### View Network Configuration

\`\`\`bash
# Linux
ip addr
ifconfig    # older systems

# Windows
ipconfig
ipconfig /all
\`\`\`

### Download Files

| Linux/Mac        | Windows                       |
| ---------------- | ----------------------------- |
| \`curl\` or \`wget\` | \`Invoke-WebRequest\` or \`curl\` |

\`\`\`bash
# Linux/Mac
curl -O https://example.com/file.zip
wget https://example.com/file.zip

# Windows PowerShell
Invoke-WebRequest -Uri https://example.com/file.zip -OutFile file.zip
# Or shorter
iwr https://example.com/file.zip -OutFile file.zip
\`\`\`

## Permissions (Linux/Mac)

### View Permissions

\`\`\`bash
ls -l
# Output: -rw-r--r-- 1 user group 1234 Jan 1 12:00 file.txt
\`\`\`

Permission breakdown: \`rwx\` = read, write, execute for owner, group, others.

### Change Permissions

\`\`\`bash
# Make a script executable
chmod +x script.sh

# Set specific permissions (owner: rwx, group: rx, others: rx)
chmod 755 script.sh

# Change owner
chown username filename
\`\`\`

## Environment Variables

### View Environment Variables

\`\`\`bash
# Linux/Mac
echo $PATH
printenv

# Windows PowerShell
echo $env:PATH
Get-ChildItem Env:
\`\`\`

### Set Environment Variables

\`\`\`bash
# Linux/Mac (temporary, current session)
export MY_VAR="value"

# Windows PowerShell (temporary)
$env:MY_VAR = "value"
\`\`\`

## Useful Shortcuts

### Keyboard Shortcuts (Works in most terminals)

| Shortcut   | Action                           |
| ---------- | -------------------------------- |
| \`Tab\`      | Auto-complete commands and paths |
| \`↑\` / \`↓\`. | Navigate command history         |
| \`Ctrl + C\` | Cancel current command           |
| \`Ctrl + L\` | Clear the screen                 |
| \`Ctrl + A\` | Go to beginning of line          |
| \`Ctrl + E\` | Go to end of line                |
| \`Ctrl + U\` | Clear line before cursor         |
| \`Ctrl + R\` | Search command history           |

### Command History

\`\`\`bash
# View command history
history

# Run previous command
!!              # Linux/Mac

# Run specific command from history
!123            # Run command number 123
\`\`\`

## Chaining Commands

\`\`\`bash
# Run commands sequentially
command1 ; command2 ; command3

# Run next command only if previous succeeds
command1 && command2

# Run next command only if previous fails
command1 || command2

# Example: Create folder and enter it
mkdir newproject && cd newproject
\`\`\`

## Aliases (Shortcuts for Commands)

### Linux/ Mac

\`\`\`bash
# Create temporary alias
alias ll="ls -la"
alias ..="cd .."

# Make permanent (add to ~/.bashrc or ~/.zshrc)
echo 'alias ll="ls -la"' >> ~/.bashrc
source ~/.bashrc
\`\`\`

### Windows PowerShell

\`\`\`powershell
# Create temporary alias
Set-Alias -Name ll -Value Get-ChildItem

# View all aliases
Get-Alias
\`\`\`

## Quick Reference Cheat Sheet

| Task              | Linux/Mac              | Windows PowerShell   |
| ----------------- | ---------------------- | -------------------- |
| Current directory | \`pwd\`                  | \`pwd\` or \`gl\`        |
| List files        | \`ls\`                   | \`ls\` or \`dir\`        |
| Change directory  | \`cd path\`              | \`cd path\`            |
| Create folder     | \`mkdir name\`           | \`mkdir name\`         |
| Create file       | \`touch file\`           | \`ni file\`            |
| Copy              | \`cp src dest\`          | \`cp src dest\`        |
| Move/Rename       | \`mv src dest\`          | \`mv src dest\`        |
| Delete file       | \`rm file\`              | \`rm file\`            |
| Delete folder     | \`rm -r folder\`         | \`rm -r folder\`       |
| View file         | \`cat file\`             | \`cat file\`           |
| Search in file    | \`grep pattern file\`    | \`sls pattern file\`   |
| Find files        | \`find . -name "*.txt"\` | \`gci -r -fi "*.txt"\` |
| Clear screen      | \`clear\`                | \`clear\`              |

## Best Practices

:::hint tip
**Use Tab completion:** Press Tab to auto-complete file names and commands - saves time and prevents typos.
:::

:::hint warning
**Be careful with rm/delete:** Always double-check before deleting, especially with recursive operations.
:::

:::hint tip
**Use man pages:** Type \`man command\` (Linux/Mac) or \`Get-Help command\` (PowerShell) for built-in documentation.
:::

:::hint tip
**Learn one thing at a time:** Don't try to memorize everything - learn commands as you need them.
:::

## Troubleshooting

**"Command not found":** The program isn't installed or isn't in your PATH. Try installing it or using the full path.

**"Permission denied":** You don't have rights to access that file/folder. Try using \`sudo\` (Linux/Mac) or running as Administrator (Windows).

**"No such file or directory":** Check your spelling and make sure you're in the right location with \`pwd\`.

**Wrong directory:** Use \`cd\` to navigate to the correct location. Use \`cd -\` (Linux/Mac) to go back to your previous location.

## Conclusion

The command line is a fundamental skill for any developer or power user. Start with the basics - navigation, file operations, and viewing files - then gradually add more commands to your toolkit as you need them.

Practice regularly, and soon these commands will become second nature. Don't be afraid to experiment (safely!) and use \`man\` pages or \`--help\` to learn more about any command.

Happy commanding!
`,"/posts/using-git.md":`---
title: Using git (crashcourse)
slug: using-git
date: 29-01-2026
tags: [tutorial, guide, git, version-control, cli]
description: A simple guide on how to use the git bash properly
unlisted: false
---

## Prerequisites

Before starting, make sure you have Git installed on your machine. Download it from [Git's official website](https://git-scm.com/downloads). You can verify the installation by opening your terminal (PowerShell on Windows, Terminal on Mac/Linux) and running:

\`\`\`bash
git --version
\`\`\`

If you see a version number, you're ready to go!

## Initial Setup

### Configure Your Identity

Before making your first commit, tell Git who you are. This information will be attached to all your commits:

\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
\`\`\`

**Optional but recommended:** Enable colored output for better readability:

\`\`\`bash
git config --global color.ui auto
\`\`\`

### Verify Your Configuration

Check that your settings are correct:

\`\`\`bash
git config --list
\`\`\`

## Getting Started with a Repository

You have two options to start working with Git: create a new repository or clone an existing one.

### Option 1: Create a New Repository

Navigate to your project folder and initialize Git:

\`\`\`bash
cd your-project-folder
git init
\`\`\`

This creates a \`.git\` folder that tracks all your changes.

### Option 2: Clone an Existing Repository

Download an existing project from GitHub, GitLab, or another hosting service:

\`\`\`bash
git clone https://github.com/username/repository-name.git
\`\`\`

This downloads the entire project including all its history.

## Basic Workflow

This is the workflow you'll use daily when working with Git.

### 1. Check Your Status

See which files have been modified:

\`\`\`bash
git status
\`\`\`

This shows you:

- Files you've changed but not staged
- Files staged and ready to commit
- Untracked files Git isn't watching yet

### 2. Stage Your Changes

Add files to the staging area (preparing them for commit):

**Stage a specific file:**

\`\`\`bash
git add filename.txt
\`\`\`

**Stage all changes:**

\`\`\`bash
git add .
\`\`\`

**Stage multiple specific files:**

\`\`\`bash
git add file1.txt file2.js file3.css
\`\`\`

If you accidentally staged a file, you can unstage it:

\`\`\`bash
git reset filename.txt
\`\`\`

### 3. Review Your Changes

Before committing, it's good practice to review what you've changed:

**See unstaged changes:**

\`\`\`bash
git diff
\`\`\`

**See staged changes:**

\`\`\`bash
git diff --staged
\`\`\`

### 4. Commit Your Changes

Save your staged changes with a descriptive message:

\`\`\`bash
git commit -m "Add user authentication feature"
\`\`\`

**What makes a good commit message:**

- Start with a verb (Add, Fix, Update, Remove)
- Be specific but concise
- Explain _what_ changed and _why_ if not obvious

### 5. View Your History

See a list of all commits:

\`\`\`bash
git log
\`\`\`

**For a condensed view:**

\`\`\`bash
git log --oneline
\`\`\`

## Working with Branches

Branches let you work on features without affecting the main codebase.

### View Branches

List all branches (the asterisk shows your current branch):

\`\`\`bash
git branch
\`\`\`

### Create a New Branch

\`\`\`bash
git branch feature-name
\`\`\`

### Switch to a Branch

\`\`\`bash
git checkout feature-name
\`\`\`

**Shortcut:** Create and switch to a new branch in one command:

\`\`\`bash
git checkout -b feature-name
\`\`\`

### Merge Branches

Once your feature is complete, merge it back into the main branch:

\`\`\`bash
git checkout main
git merge feature-name
\`\`\`

### Delete a Branch

After merging, you can delete the feature branch:

\`\`\`bash
git branch -d feature-name
\`\`\`

## Collaborating with Remote Repositories

Working with GitHub, GitLab, or other remote repositories.

### View Your Remote

See which remote repositories are connected:

\`\`\`bash
git remote -v
\`\`\`

### Add a Remote

If you initialized a local repo and want to connect it to a remote:

\`\`\`bash
git remote add origin https://github.com/username/repository-name.git
\`\`\`

### Push Your Changes

Upload your local commits to the remote repository:

**First push (set upstream):**

\`\`\`bash
git push -u origin main
\`\`\`

**Subsequent pushes:**

\`\`\`bash
git push
\`\`\`

### Pull Changes

Download and merge changes from the remote repository:

\`\`\`bash
git pull
\`\`\`

This is essential before starting work to ensure you have the latest code.

### Fetch Changes

Download changes without merging (lets you review first):

\`\`\`bash
git fetch
\`\`\`

## Useful Commands for Daily Work

### Temporarily Save Changes

If you need to switch branches but aren't ready to commit:

**Save your work:**

\`\`\`bash
git stash
\`\`\`

**List stashed changes:**

\`\`\`bash
git stash list
\`\`\`

**Restore your work:**

\`\`\`bash
git stash pop
\`\`\`

**Discard stashed changes:**

\`\`\`bash
git stash drop
\`\`\`

### Move or Rename Files

Let Git track file movements:

\`\`\`bash
git mv old-filename.txt new-filename.txt
\`\`\`

### Remove Files

Delete files and stage the removal:

\`\`\`bash
git rm filename.txt
\`\`\`

## Using .gitignore

Prevent Git from tracking certain files (like build outputs, secrets, or dependencies).

Create a \`.gitignore\` file in your project root:

\`\`\`gitignore:.gitignore
# Dependencies
node_modules/
vendor/

# Build outputs
dist/
build/
*.log

# Environment variables
.env
.env.local

# OS files
.DS_Store
Thumbs.db

# IDE settings
.vscode/
.idea/
\`\`\`

## Common Scenarios & Solutions

### Scenario 1: Undo Last Commit (Keep Changes)

Made a commit too early?

\`\`\`bash
git reset --soft HEAD~1
\`\`\`

Your changes stay staged and ready to recommit.

### Scenario 2: Discard Local Changes

Want to throw away all your uncommitted changes?

:::hint danger
This permanently discards all uncommitted changes with no way to recover them.
:::

\`\`\`bash
git reset --hard HEAD
\`\`\`

### Scenario 3: View a Specific File's History

See all changes to one file:

\`\`\`bash
git log --follow filename.txt
\`\`\`

### Scenario 4: Compare Branches

See what's different between two branches:

\`\`\`bash
git diff main..feature-branch
\`\`\`

## Best Practices

**Commit frequently:** Small, focused commits are easier to understand and revert if needed.

**Write clear messages:** Your future self (and teammates) will thank you.

**Pull before you push:** Always get the latest changes before uploading yours to avoid conflicts.

**Use branches:** Keep your main branch stable by developing features in separate branches.

**Review before committing:** Use \`git diff\` to check what you're about to commit.

:::hint warning
**Don't commit sensitive data.** Use \`.gitignore\` for secrets, API keys, and credentials.
:::

## Troubleshooting

:::hint warning
**Merge conflicts:** Git will mark conflicts inside affected files. Open them, resolve the conflicts manually, then stage and commit the resolved files.
:::

:::hint tip
**Wrong branch:** Use \`git stash\`, switch branches with \`git checkout\`, then \`git stash pop\` to move your uncommitted work.
:::

:::hint warning
**Forgot to pull:** If your push is rejected, run \`git pull\` first to get remote changes, resolve any conflicts, then push again.
:::

:::hint tip
**Committed to wrong branch:** If you haven't pushed yet, undo with \`git reset --soft HEAD~1\`, switch branches, and recommit.
:::

## Conclusion

That's it! You now know the essential Git commands for daily development. The key is to practice these workflows regularly - they'll become second nature quickly. Remember to commit often, use descriptive messages, and don't be afraid to experiment with branches.

I'll make a follow-up guide on using Git visually (no commandline) in VSCode soon.
`}),md=e=>{let t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};let[,n,r]=t,i={},a=n.split(`
`),o=null,s=``,c=(e,t)=>{t=t.trim(),t.startsWith(`[`)&&t.endsWith(`]`)?i[e]=t.slice(1,-1).split(`,`).map(e=>e.trim()):i[e]=t};return a.forEach(e=>{if(/^\s+/.test(e)&&!/^\s*\w+:/.test(e)&&o)s+=` `+e.trim();else{o&&s&&c(o,s);let[t,...n]=e.split(`:`);if(!t||t.trim()===``)return;o=t.trim(),s=n.join(`:`).trim()}}),o&&s&&c(o,s),{frontmatter:i,content:r}},hd=()=>{let e=[],t=1;return Object.entries(pd).forEach(([n,r])=>{let{frontmatter:i,content:a}=md(r),o=n.split(`/`).pop().replace(`.md`,``);e.push({id:t++,slug:o,title:i.title||o,date:i.date||new Date().toISOString().split(`T`)[0],tags:i.tags||[],description:i.description||``,unlisted:i.unlisted===!0||i.unlisted===`true`,content:a.trim(),readingTime:xd(a)})}),e},gd=null,_d=(e=!1)=>(gd||=hd(),(e?[...gd]:gd.filter(e=>!e.unlisted)).sort((e,t)=>bd(t.date)-bd(e.date))),vd=e=>_d(!0).find(t=>t.slug===e),yd=()=>{let e=new Set;return _d().forEach(t=>{t.tags.forEach(t=>e.add(t))}),Array.from(e).sort()},bd=e=>{let[t,n,r]=e.split(`-`);return new Date(r,n-1,t)},xd=e=>{let t=e.trim().split(/\s+/).length;return Math.ceil(t/225)},Sd={class:`sm:border-l-2 sm:border-catppuccin-surface pl-2 sm:pl-4`},Cd={class:`flex flex-wrap gap-1.5 sm:gap-2`},wd=[`onClick`],Td={__name:`TagFilter`,props:{tags:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:[`toggle-tag`],setup(e,{emit:t}){let n=t,r=e=>{n(`toggle-tag`,e)};return(t,n)=>(H(),U(`div`,Sd,[n[0]||=W(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},`~$ ls tags/`,-1),W(`div`,Cd,[(H(!0),U(B,null,z(e.tags,t=>(H(),U(`button`,{key:t,onClick:e=>r(t),class:O([`px-3 py-1.5 sm:py-1 rounded text-xs transition-colors border`,e.selectedTag===t?`bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve`:`bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay`])},` #`+k(t),11,wd))),128))])]))}},Ed={class:`sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2`},Dd={class:`text-catppuccin-subtle text-sm mb-3`},Od={key:0,class:`text-catppuccin-mauve`},kd={key:0,class:`text-sm text-catppuccin-subtle`},Ad={key:1,class:`space-y-3`},jd=[`onClick`],Md={class:`px-3 sm:px-4 py-3`},Nd={class:`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2`},Pd={class:`text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors`},Fd={class:`flex items-center gap-2 flex-shrink-0`},Id={class:`text-xs text-catppuccin-subtle`},Ld=[`title`],Rd={class:`text-sm text-catppuccin-gray mb-3 leading-relaxed`},zd={class:`flex items-center gap-2`},Bd={class:`flex flex-wrap gap-1.5`},Vd=[`onClick`],Hd={__name:`PostList`,props:{posts:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:[`open-post`,`select-tag`],setup(e,{emit:t}){let n=t,r=e=>{n(`open-post`,e)};return(t,i)=>(H(),U(`div`,Ed,[W(`div`,Dd,[i[0]||=K(` ~$ ls -la posts/ `,-1),e.selectedTag?(H(),U(`span`,Od,`| grep "`+k(e.selectedTag)+`"`,1)):q(``,!0)]),e.posts.length?(H(),U(`div`,Ad,[(H(!0),U(B,null,z(e.posts,e=>(H(),U(`div`,{key:e.id,onClick:t=>r(e.slug),class:`block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer`},[W(`div`,Md,[W(`div`,Nd,[W(`h2`,Pd,k(e.title),1),W(`div`,Fd,[W(`span`,Id,k(e.readingTime)+` min read `,1),i[1]||=W(`span`,{class:`text-catppuccin-surface`},`•`,-1),W(`span`,{class:`text-xs text-catppuccin-subtle`,title:I(bd)(e.date).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`})},k(e.date),9,Ld)])]),W(`p`,Rd,k(e.description),1),W(`div`,zd,[W(`div`,Bd,[(H(!0),U(B,null,z(e.tags,e=>(H(),U(`span`,{key:e,onClick:ss(t=>n(`select-tag`,e),[`stop`]),class:`px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:bg-catppuccin-mauve/20 hover:text-catppuccin-mauve cursor-pointer transition-colors`},` #`+k(e),9,Vd))),128))]),i[2]||=W(`span`,{class:`ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm shrink-0`},` read → `,-1)])])],8,jd))),128))])):(H(),U(`div`,kd,` no posts found `))]))}},Ud=new class{extractVariables(e){let t=/(?<!\\)\$\[([^\]]+)\]/g,n=new Set,r;for(;(r=t.exec(e))!==null;)n.add(r[1]);return Array.from(n)}substitute(e,t={}){let n=[],r=e.replace(/\\\$\[([^\]]+)\]/g,(e,t)=>{let r=`__ESCAPED_VAR_${n.length}__`;return n.push(`$[${t}]`),r});return r=r.replace(/\$\[([^\]]+)\]/g,(e,n)=>t[n]||n),n.forEach((e,t)=>{r=r.replace(`__ESCAPED_VAR_${t}__`,e)}),r}},Wd=class{process(e){let t=e,n=[];t=t.replace(/__([A-Z_0-9]+)__/g,e=>{let t=`\x00PROT${n.length}\x00`;return n.push(e),t});let r=[];return t=t.replace(/`([^`]+)`/g,(e,t)=>{let n=`\x01IC${r.length}\x01`;return r.push(this._renderInlineCode(t)),n}),t=t.replace(/\*\*\*(.*?)\*\*\*/g,`<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>`),t=t.replace(/\*\*(.*?)\*\*/g,`<strong class="text-catppuccin-mauve font-semibold">$1</strong>`),t=t.replace(/_(.*?)_/g,`<em class="text-catppuccin-text italic">$1</em>`),t=t.replace(/\*(.*?)\*/g,`<em class="text-catppuccin-text italic">$1</em>`),t=t.replace(/~~(.*?)~~/g,`<del class="text-catppuccin-subtle line-through">$1</del>`),t=t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,`<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">`),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,`<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>`),r.forEach((e,n)=>{t=t.replaceAll(`\x01IC${n}\x01`,e)}),n.forEach((e,n)=>{t=t.replaceAll(`\x00PROT${n}\x00`,e)}),t}_renderInlineCode(e){return`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}</code>`}};new Wd;var Gd=new class{constructor(e=new Wd){this.inlineParser=e}parse(e){let t=e,n={codeBlocks:[],hintBlocks:[],detailsBlocks:[],escapedTokens:[],inlineCodeBlocks:[],tables:[]};return t=this._extractCodeBlocks(t,n),t=this._extractHintBlocks(t,n),t=this._extractDetailsBlocks(t,n),t=this._extractEscapeSequences(t,n),t=this._extractInlineCode(t,n),t=this._extractTables(t,n),t=this._transformHorizontalRules(t),t=this._transformHeadings(t),t=this._transformBlockquotes(t),t=this._transformImages(t),t=this._transformBoldItalic(t),t=this._transformStrikethrough(t),t=this._transformLinks(t),t=this._transformLists(t),t=this._transformParagraphs(t),t=this._restoreDetailsBlocks(t,n),t=this._restoreHintBlocks(t,n),t=this._restoreCodeBlocks(t,n),t=this._restoreTables(t,n),t=this._restoreInlineCode(t,n),t=this._restoreEscapeSequences(t,n),t}_extractCodeBlocks(e,t){return e.replace(/```(\w*)(?::([^\s\n]+))?\s*\n?([\s\S]*?)```/g,(e,n,r,i)=>{let a=`__CODEBLOCK_${t.codeBlocks.length}__`;return t.codeBlocks.push(this._renderCodeBlock(n,r,i,t.codeBlocks.length)),a})}_extractHintBlocks(e,t){return e.replace(/:::hint\s+(\w+)\r?\n([\s\S]*?):::/g,(e,n,r)=>{let i=`__HINT_${t.hintBlocks.length}__`;return t.hintBlocks.push({type:n.trim().toLowerCase(),content:r.trim()}),i})}_extractDetailsBlocks(e,t){let n=!0;for(;n;){let r=e;e=e.replace(/:::details\s+([^\n\r]+)\r?\n([\s\S]*?):::/g,(e,n,r)=>{let i=`__DETAILS_${t.detailsBlocks.length}__`;return t.detailsBlocks.push({title:n.trim(),content:r.trim()}),i}),n=e!==r}return e}_extractEscapeSequences(e,t){return e.replace(/\\\\|\\`/g,e=>{let n=`__ESCAPED_TOKEN_${t.escapedTokens.length}__`;return t.escapedTokens.push(e===`\\\\`?`\\`:"`"),n})}_extractInlineCode(e,t){return e.replace(/`([^`]+)`/g,(e,n)=>{let r=`__INLINECODE_${t.inlineCodeBlocks.length}__`,i=n.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);return t.inlineCodeBlocks.push(`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${i}</code>`),r})}_extractTables(e,t){return e.replace(/((?:\|[^\n]+\|\r?\n?)+)/g,e=>{let n=e.trim().split(/\r?\n/);if(n.length<2||!/^\|[\s\-:|]+\|$/.test(n[1]))return e;let r=`__TABLE_${t.tables.length}__`;return t.tables.push(this._renderTable(n)),r})}_transformHorizontalRules(e){return e.replace(/^(?:---|\*\*\*|___)\s*$/gim,`<hr class="border-catppuccin-surface my-6">`)}_transformHeadings(e){return e=e.replace(/^###### (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h6 id="${n}" class="group text-xs font-semibold text-catppuccin-mauve mt-4 mb-2">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h6>`}),e=e.replace(/^##### (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h5 id="${n}" class="group text-sm font-semibold text-catppuccin-mauve mt-4 mb-2">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h5>`}),e=e.replace(/^#### (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h4 id="${n}" class="group text-base font-semibold text-catppuccin-mauve mt-5 mb-2">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h4>`}),e=e.replace(/^### (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h3 id="${n}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`}),e=e.replace(/^## (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h2 id="${n}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`}),e=e.replace(/^# (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h1 id="${n}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`}),e}_transformBlockquotes(e){return e.replace(/^> (.*$)/gim,`<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>`)}_transformImages(e){return e.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,`<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">`)}_transformBoldItalic(e){return e=e.replace(/\*\*\*(.*?)\*\*\*/g,`<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>`),e=e.replace(/\*\*(.*?)\*\*/g,`<strong class="text-catppuccin-mauve font-semibold">$1</strong>`),e=e.replace(/\*(.*?)\*/g,`<em class="text-catppuccin-text italic">$1</em>`),e}_transformStrikethrough(e){return e.replace(/~~(.*?)~~/g,`<del class="text-catppuccin-subtle line-through">$1</del>`)}_transformLinks(e){return e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,`<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>`)}_transformLists(e){return e=e.replace(/^[\-\*\+] \[x\] (.*$)/gim,`<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>`),e=e.replace(/^[\-\*\+] \[ \] (.*$)/gim,`<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>`),e=e.replace(/^\d+\. (.*$)/gim,`<li data-list-type="ol" class="ml-6 text-catppuccin-text mb-1">$1</li>`),e=e.replace(/^[\-\*\+] (.*$)/gim,`<li data-list-type="ul" class="ml-6 text-catppuccin-text mb-1">$1</li>`),e=e.replace(/(<li data-list-type="ol"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ol"[^>]*>.*?<\/li>))*/g,e=>`<ol class="list-decimal my-4 pl-2">${e}</ol>`),e=e.replace(/(<li data-list-type="ul"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ul"[^>]*>.*?<\/li>))*/g,e=>`<ul class="list-disc my-4">${e}</ul>`),e=e.replace(/ data-list-type="[^"]+"/g,``),e}_transformParagraphs(e){let t=/^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;return e.split(`

`).map(e=>{let n=e.trim();if(n.length===0||n.startsWith(`__CODEBLOCK_`)||n.startsWith(`__TABLE_`)||n.startsWith(`__DETAILS_`)||n.startsWith(`__HINT_`))return e;let r=e.split(`
`),i=[],a=[],o=()=>{if(a.length>0){let e=a.join(`<br>`);i.push(`<p class="text-catppuccin-text leading-relaxed mb-4">${e}</p>`),a=[]}};return r.forEach(e=>{let n=e.trim();n.length===0||t.test(n)||n.startsWith(`__CODEBLOCK_`)||n.startsWith(`__TABLE_`)||n.startsWith(`__DETAILS_`)||n.startsWith(`__HINT_`)?(o(),i.push(e)):a.push(e.trim())}),o(),i.join(`
`)}).join(`

`)}_restoreDetailsBlocks(e,t){for(let n=t.detailsBlocks.length-1;n>=0;n--){let r=t.detailsBlocks[n],i=this.parse(r.content),a=`<details class="my-4 border border-catppuccin-surface rounded overflow-hidden">
      <summary class="bg-catppuccin-crust px-3 sm:px-4 py-2 cursor-pointer text-catppuccin-text hover:bg-catppuccin-surface/30 transition-colors text-sm sm:text-base">
        ${this.inlineParser.process(r.title)}
      </summary>
      <div class="p-3 sm:p-4 bg-catppuccin-base/30 text-sm">${i}</div>
    </details>`;e=e.replaceAll(`__DETAILS_${n}__`,a)}return e}_restoreHintBlocks(e,t){let n={info:{bg:`bg-catppuccin-blue/10`,border:`border-catppuccin-blue/50`,icon:`i`,title:`Info`},warning:{bg:`bg-catppuccin-yellow/10`,border:`border-catppuccin-yellow/50`,icon:`!`,title:`Warning`},tip:{bg:`bg-catppuccin-green/10`,border:`border-catppuccin-green/50`,icon:`*`,title:`Tip`},danger:{bg:`bg-catppuccin-red/10`,border:`border-catppuccin-red/50`,icon:`x`,title:`Danger`},note:{bg:`bg-catppuccin-mauve/10`,border:`border-catppuccin-mauve/50`,icon:`#`,title:`Note`}};return t.hintBlocks.forEach((t,r)=>{let i=n[t.type]||n.info,a=`<div class="my-4 ${i.bg} ${i.border} border-l-4 rounded-r px-3 sm:px-4 py-3">
      <div class="flex items-center gap-2 font-medium text-catppuccin-text mb-1 text-sm sm:text-base">
        <span class="font-mono text-sm">[${i.icon}]</span>
        <span>${i.title}</span>
      </div>
      <div class="text-catppuccin-text text-xs sm:text-sm">${this.inlineParser.process(t.content)}</div>
    </div>`;e=e.replaceAll(`__HINT_${r}__`,a)}),e}_restoreCodeBlocks(e,t){return t.codeBlocks.forEach((t,n)=>{e=e.replaceAll(`__CODEBLOCK_${n}__`,t)}),e}_restoreTables(e,t){return t.tables.forEach((t,n)=>{e=e.replaceAll(`__TABLE_${n}__`,t)}),e}_restoreInlineCode(e,t){return t.inlineCodeBlocks.forEach((t,n)=>{e=e.replaceAll(`__INLINECODE_${n}__`,t)}),e}_restoreEscapeSequences(e,t){return t.escapedTokens.forEach((t,n)=>{e=e.replaceAll(`__ESCAPED_TOKEN_${n}__`,t)}),e}_renderCodeBlock(e,t,n,r){let i=n.trim().replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\\`/g,"`"),a=e?`language-${e.toLowerCase()}`:``,o=`code-block-${r}`,s=e?e.toLowerCase():`text`,c=t||``;return`<div class="my-4 -mx-2 sm:mx-0">
        ${`<div class="flex items-center justify-between bg-catppuccin-crust border border-catppuccin-surface/50 border-b-0 rounded-t px-2 sm:px-3 py-1.5 text-xs">
      <div class="flex items-center gap-1 min-w-0 truncate">
        ${c?`<span class="text-catppuccin-text truncate">${c}</span><span class="text-catppuccin-subtle shrink-0">(${s})</span>`:`<span class="text-catppuccin-mauve font-medium">${s}</span>`}
      </div>
      <button data-clipboard-target="#${o}" class="text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors cursor-pointer shrink-0 ml-2 p-1">copy</button>
    </div>`}
        <pre class="bg-catppuccin-base/50 border border-catppuccin-surface/50 rounded-t-none rounded-b p-2 sm:p-4 overflow-x-auto mt-0 text-xs sm:text-sm"><code id="${o}" class="${a}">${i}</code></pre>
      </div>`}_renderTable(e){let t=e[0],n=e.slice(2),r=`<div class="overflow-x-auto -mx-2 sm:mx-0 my-4"><table class="w-full text-sm border-collapse min-w-[400px]">`,i=t.split(`|`).filter(e=>e.trim());return r+=`<thead><tr>`,i.forEach(e=>{r+=`<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${e.trim()}</th>`}),r+=`</tr></thead>`,r+=`<tbody>`,n.forEach(e=>{if(e.trim()&&!/^\|[\s\-:|]+\|$/.test(e)){let t=e.split(`|`).filter(e=>e.trim());r+=`<tr>`,t.forEach(e=>{r+=`<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${e.trim()}</td>`}),r+=`</tr>`}}),r+=`</tbody></table></div>`,r}_slugify(e){return e.toLowerCase().replace(/<[^>]*>/g,``).replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`).replace(/-+/g,`-`).trim()}},Kd=new class{highlightAll(){window.Prism&&(Prism.highlightAll(),document.querySelectorAll(`pre[class*="language-"]`).forEach(e=>{e.className=e.className.replace(/language-\S+/g,``).trim()}))}highlightAfterDelay(e=100){setTimeout(()=>this.highlightAll(),e)}},qd=[`src`,`alt`],Jd=1,Yd=4,Xd=vl({__name:`ImageLightbox`,props:{src:{type:String,default:null},alt:{type:String,default:``}},emits:[`close`],setup(e,{emit:t}){let n=e,r=t,i=F(1),a=F(0),o=F(0),s=!1,c=0,l=1,u=0,d=0,f=0,p=0,m=0,h=Y(()=>({transform:`translate(${a.value}px, ${o.value}px) scale(${i.value})`,transition:s?`none`:`transform 0.2s ease`})),g=()=>{i.value=1,a.value=0,o.value=0},_=()=>{g(),r(`close`)},v=e=>{let t=e[0].clientX-e[1].clientX,n=e[0].clientY-e[1].clientY;return Math.hypot(t,n)},y=e=>{if(e.touches.length===2)s=!0,c=v(e.touches),l=i.value;else if(e.touches.length===1){let t=Date.now();if(t-m<300){i.value>1?g():i.value=2,m=0;return}m=t,f=e.touches[0].clientX,p=e.touches[0].clientY,u=a.value,d=o.value}},b=e=>{if(e.touches.length===2){e.preventDefault();let t=v(e.touches),n=l*t/c;i.value=Math.min(Yd,Math.max(Jd,n))}else e.touches.length===1&&i.value>1&&(e.preventDefault(),a.value=u+(e.touches[0].clientX-f),o.value=d+(e.touches[0].clientY-p))},x=e=>{e.touches.length===0&&(s=!1,i.value<=Jd&&g())},S=e=>{e.key===`Escape`&&n.src&&_()};return jn(()=>n.src,g),Cr(()=>window.addEventListener(`keydown`,S)),Dr(()=>window.removeEventListener(`keydown`,S)),(t,n)=>(H(),oa(Gn,{to:`body`},[G(eo,{name:`lightbox-fade`},{default:wn(()=>[e.src?(H(),U(`div`,{key:0,class:`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#000000] p-0 sm:bg-[#11111b]/80 sm:backdrop-blur-sm sm:p-4 cursor-zoom-out`,onClick:_},[W(`button`,{type:`button`,class:`absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-catppuccin-surface/60 bg-catppuccin-base/40 text-2xl leading-none font-light text-catppuccin-subtle hover:text-catppuccin-text hover:border-catppuccin-mauve/40 transition-colors`,"aria-label":`Close image`,onClick:_},` × `),W(`img`,{src:e.src,alt:e.alt,style:D(h.value),class:`max-w-full max-h-screen sm:max-h-[90vh] object-contain rounded-none sm:rounded-md shadow-2xl cursor-default touch-none select-none`,onClick:n[0]||=ss(()=>{},[`stop`]),onTouchstart:y,onTouchmove:b,onTouchend:x},null,44,qd)])):q(``,!0)]),_:1})]))}},[[`__scopeId`,`data-v-cfdbb40c`]]),Zd={class:`mb-8`},Qd={class:`text-catppuccin-subtle text-sm mb-2`},$d={class:`text-3xl md:text-4xl font-bold text-catppuccin-mauve mb-3`},ef={class:`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-catppuccin-subtle mb-4`},tf={class:`flex flex-wrap gap-2`},nf={key:0,class:`mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10`},rf={class:`space-y-3`},af=[`for`],of=[`id`,`onUpdate:modelValue`,`placeholder`],sf=[`innerHTML`],cf=vl({__name:`PostComponent`,props:{post:{type:Object,required:!0}},emits:[`go-back`],setup(e,{emit:t}){let n=e,r=t,i=()=>{r(`go-back`)},a=Y(()=>n.post.readingTime||1),o=F({}),s=Y(()=>Ud.extractVariables(n.post.content)),c=Y(()=>Ud.substitute(n.post.content,o.value)),l=e=>Gd.parse(e),u=F(null),d=F(``),f=e=>{let t=e.target.closest(`img`);t&&(u.value=t.currentSrc||t.src,d.value=t.alt||``)},p=()=>{u.value=null,d.value=``};return Cr(()=>{Kd.highlightAfterDelay(100)}),jn(o,()=>{pn(()=>{Kd.highlightAll()})},{deep:!0}),(t,n)=>(H(),U(`div`,null,[W(`div`,Zd,[W(`div`,Qd,` ~$ cat `+k(e.post.slug)+`.md `,1),W(`button`,{onClick:i,class:`text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all mb-6 inline-flex items-center gap-1.5 group`},[...n[0]||=[W(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),W(`span`,{class:`text-catppuccin-mauve font-medium`},`~/posts`,-1)]]),W(`h1`,$d,k(e.post.title),1),W(`div`,ef,[W(`span`,null,k(e.post.date),1),n[1]||=W(`span`,{class:`hidden sm:inline text-catppuccin-surface`},`•`,-1),W(`span`,null,`~`+k(a.value)+` min read`,1),n[2]||=W(`span`,{class:`hidden sm:inline text-catppuccin-surface`},`•`,-1),W(`div`,tf,[(H(!0),U(B,null,z(e.post.tags,e=>(H(),U(`span`,{key:e,class:`text-catppuccin-gray`},` #`+k(e),1))),128))])])]),s.value.length>0?(H(),U(`div`,nf,[n[3]||=W(`div`,{class:`text-sm text-catppuccin-subtle mb-3`},` ~$ configure variables `,-1),W(`div`,rf,[(H(!0),U(B,null,z(s.value,e=>(H(),U(`div`,{key:e,class:`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3`},[W(`label`,{for:`var-${e}`,class:`text-sm text-catppuccin-text sm:min-w-[120px]`},k(e)+`: `,9,af),Tn(W(`input`,{id:`var-${e}`,"onUpdate:modelValue":t=>o.value[e]=t,type:`text`,placeholder:e,class:`flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors`},null,8,of),[[is,o.value[e]]])]))),128))])])):q(``,!0),W(`article`,{class:`sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2 mb-8 overflow-hidden`,onClick:f},[W(`div`,{class:`prose prose-invert max-w-none text-catppuccin-text`,innerHTML:l(c.value)},null,8,sf)]),W(`button`,{onClick:i,class:`text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group`},[...n[4]||=[W(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),W(`span`,{class:`text-catppuccin-mauve font-medium`},`~/posts`,-1)]]),G(Xd,{src:u.value,alt:d.value,onClose:p},null,8,[`src`,`alt`])]))}},[[`__scopeId`,`data-v-077ea2ea`]]),lf={class:`w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono`},uf={class:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-14 md:pb-2`},df={key:`list`},ff={class:`mb-12`},pf={class:`flex items-center gap-4 text-sm mb-6`},mf={key:`post`},hf=vl({__name:`Posts`,setup(e){let t=F(`list`),n=F(null),r=F(null),i=F([]),a=F([]),o=gl(),s=hl(),c=Y(()=>r.value?i.value.filter(e=>e.tags.includes(r.value)):i.value),l=()=>{i.value=_d(),a.value=yd()},u=e=>{if(n.value=vd(e),n.value)t.value=`post`,window.scrollTo({top:0,behavior:`instant`}),o.query.post!==e&&s.replace({name:`Posts`,query:{...o.query,post:e}});else if(o.query.post){let e={...o.query};delete e.post,s.replace({name:`Posts`,query:e})}},d=({skipQueryUpdate:e=!1}={})=>{if(t.value=`list`,n.value=null,window.scrollTo({top:0,behavior:`smooth`}),!e&&`post`in o.query){let e={...o.query};delete e.post,s.replace({name:`Posts`,query:e})}},f=e=>{r.value=r.value===e?null:e};return Cr(()=>{l(),document.documentElement.style.overflowY=`auto`,document.body.style.overflowY=`auto`,new ClipboardJS(`[data-clipboard-target]`).on(`success`,function(e){let t=e.trigger,n=t.textContent;t.textContent=`copied!`,t.classList.add(`text-catppuccin-green`),setTimeout(()=>{t.textContent=n,t.classList.remove(`text-catppuccin-green`)},2e3),e.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);let e=o.query.post;e&&u(e)}),Er(()=>{document.documentElement.style.overflowY=``,document.body.style.overflowY=``}),jn(()=>o.query.post,(e,n)=>{e&&e!==n?u(e):!e&&t.value===`post`&&d({skipQueryUpdate:!0})}),(e,i)=>{let o=Nr(`router-link`);return H(),U(`div`,lf,[W(`div`,uf,[G(eo,{name:`fade`,mode:`out-in`},{default:wn(()=>[t.value===`list`?(H(),U(`div`,df,[W(`div`,ff,[i[1]||=W(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},` ~$ cd ~/posts `,-1),W(`div`,pf,[G(o,{to:`/`,class:`px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group`},{default:wn(()=>[...i[0]||=[W(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),W(`span`,{class:`text-catppuccin-mauve font-medium`},`~/`,-1),W(`span`,{class:`text-catppuccin-subtle font-medium`},`(home)`,-1)]]),_:1})]),i[2]||=W(`h1`,{class:`text-3xl md:text-4xl font-bold text-catppuccin-text mb-4`},[W(`span`,{class:`text-catppuccin-mauve`},`Posts`)],-1),i[3]||=W(`p`,{class:`text-sm text-catppuccin-gray leading-relaxed mb-6`},` My thoughts, tutorials, and experiences on various topics including web development, programming, and technology. `,-1),G(Td,{tags:a.value,"selected-tag":r.value,onToggleTag:f},null,8,[`tags`,`selected-tag`])]),G(Hd,{posts:c.value,"selected-tag":r.value,onOpenPost:u,onSelectTag:f},null,8,[`posts`,`selected-tag`]),G(Yu)])):t.value===`post`&&n.value?(H(),U(`div`,mf,[G(cf,{post:n.value,onGoBack:d},null,8,[`post`]),G(Yu)])):q(``,!0)]),_:1})])])}}},[[`__scopeId`,`data-v-43b1650d`]]),gf={class:`sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2`},_f={class:`text-catppuccin-subtle text-sm mb-3`},vf={key:0,class:`text-catppuccin-mauve`},yf={key:0,class:`text-sm text-catppuccin-subtle`},bf={key:1,class:`grid gap-4 sm:grid-cols-2`},xf=[`onClick`],Sf={key:0,class:`w-full h-32 sm:h-40 overflow-hidden bg-catppuccin-surface/30`},Cf=[`src`,`alt`],wf={class:`px-3 sm:px-4 py-3`},Tf={class:`flex items-start gap-2 mb-2`},Ef={class:`text-sm text-catppuccin-gray mb-3 leading-relaxed line-clamp-2`},Df={class:`flex items-center gap-2 flex-wrap`},Of=[`onClick`],kf={key:0,class:`text-xs text-catppuccin-subtle`},Af=vl({__name:`ProjectList`,props:{projects:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:[`open-project`,`select-tag`],setup(e,{emit:t}){let n=t,r=e=>{n(`open-project`,e)};return(t,i)=>(H(),U(`div`,gf,[W(`div`,_f,[i[0]||=K(` ~$ ls -la projects/ `,-1),e.selectedTag?(H(),U(`span`,vf,`| grep "`+k(e.selectedTag)+`"`,1)):q(``,!0)]),e.projects.length?(H(),U(`div`,bf,[(H(!0),U(B,null,z(e.projects,e=>(H(),U(`div`,{key:e.id,onClick:t=>r(e.slug),class:`block group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all cursor-pointer overflow-hidden`,style:D({borderColor:`${e.accentColorHex}40`})},[e.coverImage?(H(),U(`div`,Sf,[W(`img`,{src:e.coverImage,alt:e.title,class:`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`},null,8,Cf)])):q(``,!0),W(`div`,wf,[W(`div`,Tf,[W(`span`,{class:`text-sm transition-colors`,style:D({color:e.accentColorHex})},`>`,4),W(`h2`,{class:`text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors`,style:D({"--hover-color":e.accentColorHex})},k(e.title),5)]),W(`p`,Ef,k(e.description),1),W(`div`,Df,[(H(!0),U(B,null,z(e.tags.slice(0,3),t=>(H(),U(`span`,{key:t,onClick:ss(e=>n(`select-tag`,t),[`stop`]),class:`px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:text-catppuccin-mauve cursor-pointer transition-colors`,style:D({"--hover-bg":`${e.accentColorHex}20`})},` #`+k(t),13,Of))),128)),e.tags.length>3?(H(),U(`span`,kf,` +`+k(e.tags.length-3),1)):q(``,!0),W(`span`,{class:`ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm`,style:D({"--hover-color":e.accentColorHex})},` view → `,4)])])],12,xf))),128))])):(H(),U(`div`,yf,` no projects found `))]))}},[[`__scopeId`,`data-v-907e807e`]]),jf={class:`mb-8`},Mf={class:`text-catppuccin-subtle text-sm mb-2`},Nf=[`src`,`alt`],Pf={class:`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-catppuccin-subtle mb-4`},Ff={class:`flex flex-wrap gap-2`},If={class:`flex flex-wrap gap-3 mb-6`},Lf=[`href`],Rf=[`href`],zf={key:0,class:`mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10`},Bf={class:`space-y-3`},Vf=[`for`],Hf=[`id`,`onUpdate:modelValue`,`placeholder`],Uf=[`innerHTML`],Wf=vl({__name:`ProjectComponent`,props:{project:{type:Object,required:!0},sectioned:{type:Boolean,default:!1}},emits:[`go-back`],setup(e,{emit:t}){let n=e,r=t,i=()=>{r(`go-back`)},a=F({}),o=Y(()=>Ud.extractVariables(n.project.content)),s=Y(()=>Ud.substitute(n.project.content,a.value)),c=e=>{let t=Gd.parse(e);return n.sectioned?t.split(/(?=<h2\b)/i).filter(e=>e.trim()).map(e=>`<section class="project-markdown-section">${e}</section>`).join(``):t};return Cr(()=>{Kd.highlightAfterDelay(100)}),jn(a,()=>{pn(()=>{Kd.highlightAll()})},{deep:!0}),(t,r)=>(H(),U(`div`,{style:D({"--accent-color":e.project.accentColorHex})},[W(`div`,jf,[W(`div`,Mf,` ~$ cat `+k(e.project.slug)+`.md `,1),W(`button`,{onClick:i,class:`text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all mb-6 inline-flex items-center gap-1.5 group`},[...r[0]||=[W(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),W(`span`,{class:`text-catppuccin-mauve font-medium`},`~/projects`,-1)]]),e.project.coverImage?(H(),U(`div`,{key:0,class:`w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-6 border`,style:D({borderColor:`${e.project.accentColorHex}40`})},[W(`img`,{src:e.project.coverImage,alt:e.project.title,class:`w-full h-full object-cover`},null,8,Nf)],4)):q(``,!0),W(`h1`,{class:`text-3xl md:text-4xl font-bold mb-3`,style:D({color:e.project.accentColorHex})},k(e.project.title),5),W(`div`,Pf,[W(`span`,{class:O([`px-2 py-0.5 rounded text-xs capitalize`,{"bg-catppuccin-green/20 text-catppuccin-green":e.project.status===`active`,"bg-catppuccin-yellow/20 text-catppuccin-yellow":e.project.status===`in-progress`,"bg-catppuccin-red/20 text-catppuccin-red":e.project.status===`archived`,"bg-catppuccin-blue/20 text-catppuccin-blue":e.project.status===`beta`,"bg-catppuccin-peach/20 text-catppuccin-peach":e.project.status===`stale`}])},k(e.project.status),3),W(`div`,Ff,[(H(!0),U(B,null,z(e.project.tags,e=>(H(),U(`span`,{key:e,class:`text-catppuccin-gray`},` #`+k(e),1))),128))])]),W(`div`,If,[e.project.url?(H(),U(`a`,{key:0,href:e.project.url,target:`_blank`,rel:`noopener noreferrer`,class:`inline-flex items-center gap-2 px-3 py-1.5 rounded border text-sm transition-colors hover:bg-catppuccin-surface/30`,style:D({borderColor:`${e.project.accentColorHex}60`,color:e.project.accentColorHex})},[...r[1]||=[W(`svg`,{xmlns:`http://www.w3.org/2000/svg`,class:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`},[W(`path`,{"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`2`,d:`M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`})],-1),K(` Live Site `,-1)]],12,Lf)):q(``,!0),e.project.github?(H(),U(`a`,{key:1,href:e.project.github,target:`_blank`,rel:`noopener noreferrer`,class:`inline-flex items-center gap-2 px-3 py-1.5 rounded border border-catppuccin-surface/60 text-sm text-catppuccin-subtle transition-colors hover:bg-catppuccin-surface/30 hover:text-catppuccin-text`},[...r[2]||=[W(`svg`,{xmlns:`http://www.w3.org/2000/svg`,class:`w-4 h-4`,fill:`currentColor`,viewBox:`0 0 24 24`},[W(`path`,{d:`M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z`})],-1),K(` GitHub `,-1)]],8,Rf)):q(``,!0)])]),o.value.length>0?(H(),U(`div`,zf,[r[3]||=W(`div`,{class:`text-sm text-catppuccin-subtle mb-3`},` ~$ configure variables `,-1),W(`div`,Bf,[(H(!0),U(B,null,z(o.value,e=>(H(),U(`div`,{key:e,class:`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3`},[W(`label`,{for:`var-${e}`,class:`text-sm text-catppuccin-text sm:min-w-[120px]`},k(e)+`: `,9,Vf),Tn(W(`input`,{id:`var-${e}`,"onUpdate:modelValue":t=>a.value[e]=t,type:`text`,placeholder:e,class:`flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors`},null,8,Hf),[[is,a.value[e]]])]))),128))])])):q(``,!0),W(`article`,{class:O([`mb-8 overflow-hidden`,n.sectioned?`sectioned-article`:`sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2`])},[W(`div`,{class:`prose prose-invert max-w-none text-catppuccin-text`,innerHTML:c(s.value)},null,8,Uf)],2),Rr(t.$slots,`default`,{},void 0,!0),W(`button`,{onClick:i,class:`text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group`},[...r[4]||=[W(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),W(`span`,{class:`text-catppuccin-mauve font-medium`},`~/projects`,-1)]])],4))}},[[`__scopeId`,`data-v-d327634b`]]),Gf={class:`w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono`},Kf={class:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-14 md:pb-2`},qf={key:`list`},Jf={class:`mb-12`},Yf={class:`flex items-center gap-4 text-sm mb-6`},Xf={key:`project`},Zf=vl({__name:`Projects`,setup(e){let t=F(`list`),n=F(null),r=F(null),i=F([]),a=F([]),o=gl(),s=hl(),c=Y(()=>r.value?i.value.filter(e=>e.tags.includes(r.value)):i.value),l=()=>{i.value=gu(),a.value=vu()},u=e=>{if(e===`kitsudo`){s.push({name:`Kitsudo`});return}if(n.value=_u(e),n.value)t.value=`project`,window.scrollTo({top:0,behavior:`instant`}),o.query.project!==e&&s.replace({name:`Projects`,query:{...o.query,project:e}});else if(o.query.project){let e={...o.query};delete e.project,s.replace({name:`Projects`,query:e})}},d=({skipQueryUpdate:e=!1}={})=>{if(t.value=`list`,n.value=null,window.scrollTo({top:0,behavior:`smooth`}),!e&&`project`in o.query){let e={...o.query};delete e.project,s.replace({name:`Projects`,query:e})}},f=e=>{r.value=r.value===e?null:e};return Cr(()=>{l(),document.documentElement.style.overflowY=`auto`,document.body.style.overflowY=`auto`,new ClipboardJS(`[data-clipboard-target]`).on(`success`,function(e){let t=e.trigger,n=t.textContent;t.textContent=`copied!`,t.classList.add(`text-catppuccin-green`),setTimeout(()=>{t.textContent=n,t.classList.remove(`text-catppuccin-green`)},2e3),e.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);let e=o.query.project;e&&u(e)}),Er(()=>{document.documentElement.style.overflowY=``,document.body.style.overflowY=``}),jn(()=>o.query.project,(e,n)=>{e&&e!==n?u(e):!e&&t.value===`project`&&d({skipQueryUpdate:!0})}),(e,i)=>{let o=Nr(`router-link`);return H(),U(`div`,Gf,[W(`div`,Kf,[G(eo,{name:`fade`,mode:`out-in`},{default:wn(()=>[t.value===`list`?(H(),U(`div`,qf,[W(`div`,Jf,[i[1]||=W(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},` ~$ cd ~/projects `,-1),W(`div`,Yf,[G(o,{to:`/`,class:`px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group`},{default:wn(()=>[...i[0]||=[W(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),W(`span`,{class:`text-catppuccin-mauve font-medium`},`~/`,-1),W(`span`,{class:`text-catppuccin-subtle font-medium`},`(home)`,-1)]]),_:1})]),i[2]||=W(`h1`,{class:`text-3xl md:text-4xl font-bold text-catppuccin-text mb-4`},[W(`span`,{class:`text-catppuccin-mauve`},`Projects`)],-1),i[3]||=W(`p`,{class:`text-sm text-catppuccin-gray leading-relaxed mb-6`},` A collection of projects I've worked on, ranging from web applications to plugins and tools. `,-1),G(Td,{tags:a.value,"selected-tag":r.value,onToggleTag:f},null,8,[`tags`,`selected-tag`])]),G(Af,{projects:c.value,"selected-tag":r.value,onOpenProject:u,onSelectTag:f},null,8,[`projects`,`selected-tag`]),G(Yu)])):t.value===`project`&&n.value?(H(),U(`div`,Xf,[G(Wf,{project:n.value,sectioned:!0,onGoBack:d},null,8,[`project`]),G(Yu)])):q(``,!0)]),_:1})])])}}},[[`__scopeId`,`data-v-d81c3061`]]),Qf={class:`w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono`},$f={class:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-14 md:pb-2`},ep={class:`mb-8`},tp={class:`section-sidebar mb-10`,"aria-labelledby":`screenshots`},np={class:`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4`},rp=[`aria-label`,`onClick`],ip=[`src`,`alt`],ap={class:`mt-2 text-xs text-catppuccin-subtle`},op={class:`section-sidebar mb-10`,"aria-labelledby":`wear-os-companion`},sp={class:`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4`},cp=[`aria-label`,`onClick`],lp=[`src`,`alt`],up={class:`mt-2 text-xs text-catppuccin-subtle`},dp=vl({__name:`Kitsudo`,setup(e){let t=hl(),n=_u(`kitsudo`),r=[{src:`/kitsudo/screenshots/home.jpg`,label:`Today`},{src:`/kitsudo/screenshots/details.jpg`,label:`Task details`},{src:`/kitsudo/screenshots/subtask.jpg`,label:`Subtasks`},{src:`/kitsudo/screenshots/themes.jpg`,label:`Themes`}],i=[{src:`/kitsudo/screenshots/wear-home.png`,label:`Task list`},{src:`/kitsudo/screenshots/wear-details.png`,label:`Task details`},{src:`/kitsudo/screenshots/wear-widget.png`,label:`Watch tile`}],a=()=>t.push(`/projects`),o=F(null),s=F(``),c=(e,t)=>{o.value=e,s.value=t},l=()=>{o.value=null,s.value=``};return(e,t)=>(H(),U(`div`,Qf,[W(`div`,$f,[G(Wf,{project:I(n),sectioned:!0,onGoBack:a},{default:wn(()=>[W(`div`,ep,[W(`section`,tp,[t[0]||=W(`h2`,{id:`screenshots`,class:`group text-xl font-semibold text-catppuccin-mauve mb-4`},[K(` Screenshots`),W(`a`,{href:`#screenshots`,class:`ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve`,"aria-label":`Link to Screenshots section`},`#`)],-1),t[1]||=W(`p`,{class:`text-catppuccin-text leading-relaxed mb-5`},` The Android app keeps the task list compact while leaving the details, subtasks, and appearance settings close at hand. `,-1),W(`div`,np,[(H(),U(B,null,z(r,e=>W(`figure`,{key:e.src},[W(`button`,{type:`button`,class:`block w-full rounded-md overflow-hidden border border-catppuccin-surface/60 bg-catppuccin-base/30 p-1.5 cursor-zoom-in`,"aria-label":`Open ${e.label} screenshot`,onClick:t=>c(e.src,`Kitsudo ${e.label} screen`)},[W(`img`,{src:e.src,alt:`Kitsudo ${e.label} screen`,class:`block w-full rounded`,loading:`lazy`},null,8,ip)],8,rp),W(`figcaption`,ap,` ./`+k(e.label.toLowerCase().replace(` `,`-`)),1)])),64))])]),W(`section`,op,[t[2]||=W(`h2`,{id:`wear-os-companion`,class:`group text-xl font-semibold text-catppuccin-mauve mb-4`},[K(` Wear OS companion`),W(`a`,{href:`#wear-os-companion`,class:`ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve`,"aria-label":`Link to Wear OS companion section`},`#`)],-1),t[3]||=W(`p`,{class:`text-catppuccin-text leading-relaxed mb-5`},` Check today's tasks, complete them, and open task details from your wrist. Phone and watch sync directly without an account. `,-1),W(`div`,sp,[(H(),U(B,null,z(i,e=>W(`figure`,{key:e.src},[W(`button`,{type:`button`,class:`block w-full rounded-md overflow-hidden border border-catppuccin-surface/60 bg-catppuccin-base/30 p-1.5 cursor-zoom-in`,"aria-label":`Open Wear OS ${e.label} screenshot`,onClick:t=>c(e.src,`Kitsudo Wear OS ${e.label}`)},[W(`img`,{src:e.src,alt:`Kitsudo Wear OS ${e.label}`,class:`block w-full rounded-[28%]`,loading:`lazy`},null,8,lp)],8,cp),W(`figcaption`,up,` ./`+k(e.label.toLowerCase().replace(` `,`-`)),1)])),64))])]),t[4]||=W(`section`,{class:`download-card`,"aria-labelledby":`download-heading`},[W(`div`,{class:`relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 drop-shadow-[0_8px_6px_rgba(0,0,0,0.35)]`,role:`img`,"aria-label":`Kitsudo app icon`},[W(`svg`,{viewBox:`0 0 100 100`,class:`absolute inset-0 w-full h-full`,"aria-hidden":`true`},[W(`defs`,null,[W(`filter`,{id:`kitsudoIconBevel`,x:`-20%`,y:`-20%`,width:`140%`,height:`140%`},[W(`feOffset`,{in:`SourceAlpha`,dx:`0`,dy:`1.5`,result:`downA`}),W(`feGaussianBlur`,{in:`downA`,stdDeviation:`0.8`,result:`downB`}),W(`feComposite`,{in:`SourceAlpha`,in2:`downB`,operator:`out`,result:`topEdge`}),W(`feFlood`,{"flood-color":`#ffffff`,"flood-opacity":`0.2`}),W(`feComposite`,{in2:`topEdge`,operator:`in`,result:`topShine`}),W(`feOffset`,{in:`SourceAlpha`,dx:`0`,dy:`-1.5`,result:`upA`}),W(`feGaussianBlur`,{in:`upA`,stdDeviation:`1.2`,result:`upB`}),W(`feComposite`,{in:`SourceAlpha`,in2:`upB`,operator:`out`,result:`bottomEdge`}),W(`feFlood`,{"flood-color":`#000000`,"flood-opacity":`0.35`}),W(`feComposite`,{in2:`bottomEdge`,operator:`in`,result:`bottomShade`}),W(`feMerge`,null,[W(`feMergeNode`,{in:`SourceGraphic`}),W(`feMergeNode`,{in:`topShine`}),W(`feMergeNode`,{in:`bottomShade`})])])]),W(`path`,{d:`M50,0 C13,0 0,13 0,50 C0,87 13,100 50,100 C87,100 100,87 100,50 C100,13 87,0 50,0 Z`,fill:`#24284b`,filter:`url(#kitsudoIconBevel)`})]),W(`img`,{src:`/kitsudo/logo.svg`,alt:``,class:`absolute inset-[8%] w-auto h-auto object-contain`})]),W(`div`,{class:`flex-1 min-w-[180px]`},[W(`div`,{class:`text-xs text-catppuccin-subtle mb-1`},` ~$ wget kitsudo.apk `),W(`h2`,{id:`download-heading`,class:`text-lg sm:text-xl font-bold text-catppuccin-text mb-1`},` Ready when you are. `),W(`p`,{class:`text-xs sm:text-sm text-catppuccin-gray`},` Free, open-source, and built without ads or tracking. `)]),W(`div`,{class:`flex flex-wrap gap-3`},[W(`a`,{href:`https://play.google.com/store/apps/details?id=dev.heckr.kitsudo`,target:`_blank`,rel:`noopener noreferrer`,class:`download-primary`},` [ Google Play ] `),W(`a`,{href:`https://github.com/hecker-01/Kitsudo/releases/latest`,target:`_blank`,rel:`noopener noreferrer`,class:`download-secondary`},` [ Latest APK ] `)])],-1)])]),_:1},8,[`project`]),G(Xd,{src:o.value,alt:s.value,onClose:l},null,8,[`src`,`alt`]),G(Yu)])]))}},[[`__scopeId`,`data-v-5927a8e6`]]),fp={class:`w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono`},pp={class:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16`},mp={class:`mb-8`},hp={class:`text-catppuccin-subtle text-sm mb-4`},gp={class:`border-l-2 border-catppuccin-surface pl-4`},_p={class:`text-catppuccin-red text-sm`},vp={class:`text-catppuccin-mauve`},yp=[{path:`/`,name:`Home`,component:fd,meta:{title:`Home | heckr.dev`}},{path:`/posts`,name:`Posts`,component:hf,meta:{title:`Posts | heckr.dev`}},{path:`/projects`,name:`Projects`,component:Zf,meta:{title:`Projects | heckr.dev`}},{path:`/kitsudo`,name:`Kitsudo`,component:dp,meta:{title:`Kitsudo | heckr.dev`}},{path:`/:pathMatch(.*)*`,name:`NotFound`,component:{__name:`NotFound`,setup(e){let t=gl(),n=hl(),r=Y(()=>(t.fullPath||t.path||`/`).replace(/^\//,``)||`.`),i=()=>n.push(`/`);return(e,t)=>(H(),U(`div`,fp,[W(`div`,pp,[W(`div`,mp,[W(`div`,hp,` ~$ cd ~/`+k(r.value),1),W(`div`,{class:`flex items-center gap-4 text-sm mb-6`},[W(`button`,{onClick:i,class:`px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group`},[...t[0]||=[W(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),W(`span`,{class:`text-catppuccin-mauve font-medium`},`~/`,-1),W(`span`,{class:`text-catppuccin-subtle font-medium`},`(home)`,-1)]])])]),W(`div`,gp,[W(`div`,_p,[t[1]||=K(` cd: no such file or directory: /`,-1),W(`span`,vp,k(r.value),1)])])]),G(Yu)]))}},meta:{title:`404 Not Found | heckr.dev`}}],bp=ml({history:Pc(),routes:yp,scrollBehavior(e,t,n){return n||{top:0}}});bp.beforeEach((e,t,n)=>{document.title=e.meta.title||`heckr.dev`,n()});var xp=0,Sp=[`ArrowUp`,`ArrowUp`,`ArrowDown`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowLeft`,`ArrowRight`,`KeyB`,`KeyA`],Cp=()=>{console.log(`%cWelcome to heckr.dev`,`font-size: 20px; font-weight: bold; color: #cba6f7;`),console.log(`%cWelcome to the dev console, here are some commands to try:`,`font-size: 14px; color: #a6adc8;`),console.log(`%c- help() - show available commands
- about() - learn more about me
- skills() - view my tech stack
- contact() - get my contact info`,`font-size: 12px; color: #6c7086;`),window.help=()=>{console.log(`%cAvailable commands:`,`font-size: 16px; font-weight: bold; color: #cba6f7;`),console.log(`%c- help() - show this message
- about() - about the developer
- skills() - technical skills
- contact() - contact information
- secret() - ???
`,`font-size: 12px; color: #a6adc8;`)},window.about=()=>{console.log(`%cAbout me`,`font-size: 16px; font-weight: bold; color: #cba6f7;`),console.log(`%cA passionate developer who loves building cool things with code!
Check out my projects and posts on the site.`,`font-size: 12px; color: #a6adc8;`)},window.skills=async()=>{console.log(`%cTech stack`,`font-size: 16px; font-weight: bold; color: #cba6f7;`),console.log(`%cFetching...`,`font-size: 12px; color: #6c7086;`);try{let{languages:e,totalRepos:t}=await Nu();e.length>0?(console.log(`%cTop languages from `+t+` repositories found:`,`font-size: 14px; font-weight: bold; color: #a6adc8;`),e.slice(0,10).forEach(({language:e,count:t},n)=>{console.log(`%c${n+1}. ${e}: ${t} repos`,`font-size: 12px; color: #a6adc8;`)})):console.log(`%cUnable to fetch data, please try again later.`,`font-size: 12px; color: #f38ba8;`)}catch{console.log(`%cError loading data, please try again later.`,`font-size: 12px; color: #f38ba8;`)}},window.contact=()=>{console.log(`%cContact info`,`font-size: 16px; font-weight: bold; color: #cba6f7;`),console.log(`%cGitHub: https://github.com/hecker-01
Feel free to reach out!`,`font-size: 12px; color: #a6adc8;`)},window.secret=()=>{console.log(`%cYou found the secret command`,`font-size: 18px; font-weight: bold; color: #f9e2af;`),console.log(`%cHere's a hint: ↑ ↑ ↓ ↓ ← → ← → B A`,`font-size: 12px; color: #fab387;`)},document.addEventListener(`keydown`,e=>{e.code===Sp[xp]?(xp++,xp===Sp.length&&(wp(),xp=0)):xp=0})},wp=()=>{if(console.log(`%cKONAMI CODE ACTIVATED!`,`font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;`),document.body.style.animation=`rainbow-border 2s linear infinite`,!document.getElementById(`konami-style`)){let e=document.createElement(`style`);e.id=`konami-style`,e.textContent=`
      @keyframes rainbow-border {
        0% { box-shadow: inset 0 0 0 3px #f38ba8; }
        16% { box-shadow: inset 0 0 0 3px #fab387; }
        33% { box-shadow: inset 0 0 0 3px #f9e2af; }
        50% { box-shadow: inset 0 0 0 3px #a6e3a1; }
        66% { box-shadow: inset 0 0 0 3px #89dceb; }
        83% { box-shadow: inset 0 0 0 3px #89b4fa; }
        100% { box-shadow: inset 0 0 0 3px #cba6f7; }
      }
    `,document.head.appendChild(e)}setTimeout(()=>{document.body.style.animation=``},5e3)};ds(_l).use(bp).mount(`#app`),document.addEventListener(`dragstart`,e=>{e.target instanceof HTMLImageElement&&e.preventDefault()}),Cp();