(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>b(e)===`[object Map]`,p=e=>b(e)===`[object Set]`,m=e=>typeof e==`function`,h=e=>typeof e==`string`,g=e=>typeof e==`symbol`,_=e=>typeof e==`object`&&!!e,v=e=>(_(e)||m(e))&&m(e.then)&&m(e.catch),y=Object.prototype.toString,b=e=>y.call(e),x=e=>b(e).slice(8,-1),S=e=>b(e)===`[object Object]`,C=e=>h(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,w=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),T=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ee=/-\w/g,E=T(e=>e.replace(ee,e=>e.slice(1).toUpperCase())),te=/\B([A-Z])/g,D=T(e=>e.replace(te,`-$1`).toLowerCase()),ne=T(e=>e.charAt(0).toUpperCase()+e.slice(1)),re=T(e=>e?`on${ne(e)}`:``),ie=(e,t)=>!Object.is(e,t),ae=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},oe=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},O=e=>{let t=parseFloat(e);return isNaN(t)?e:t},se=e=>{let t=h(e)?Number(e):NaN;return isNaN(t)?e:t},ce,le=()=>ce||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function k(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=h(r)?fe(r):k(r);if(i)for(let e in i)t[e]=i[e]}return t}if(h(e)||_(e))return e}var A=/;(?![^(]*\))/g,ue=/:([^]+)/,de=/\/\*[^]*?\*\//g;function fe(e){let t={};return e.replace(de,``).split(A).forEach(e=>{if(e){let n=e.split(ue);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function j(e){let t=``;if(h(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=j(e[n]);r&&(t+=r+` `)}else if(_(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var pe=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,me=e(pe);pe+``;function he(e){return!!e||e===``}var ge=e=>!!(e&&e.__v_isRef===!0),M=e=>h(e)?e:e==null?``:d(e)||_(e)&&(e.toString===y||!m(e.toString))?ge(e)?M(e.value):JSON.stringify(e,N,2):String(e),N=(e,t)=>ge(t)?N(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[_e(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>_e(e))}:g(t)?_e(t):_(t)&&!d(t)&&!S(t)?String(t):t,_e=(e,t=``)=>g(e)?`Symbol(${e.description??t})`:e,P,ve=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=P,!e&&P&&(this.index=(P.scopes||(P.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=P;try{return P=this,e()}finally{P=t}}}on(){++this._on===1&&(this.prevScope=P,P=this)}off(){this._on>0&&--this._on===0&&(P=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function ye(){return P}var F,be=new WeakSet,xe=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,P&&P.active&&P.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,be.has(this)&&(be.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Te(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Re(this),Oe(this);let e=F,t=Pe;F=this,Pe=!0;try{return this.fn()}finally{ke(this),F=e,Pe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Me(e);this.deps=this.depsTail=void 0,Re(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?be.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ae(this)&&this.run()}get dirty(){return Ae(this)}},Se=0,Ce,we;function Te(e,t=!1){if(e.flags|=8,t){e.next=we,we=e;return}e.next=Ce,Ce=e}function Ee(){Se++}function De(){if(--Se>0)return;if(we){let e=we;for(we=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ce;){let t=Ce;for(Ce=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Oe(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ke(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Me(r),Ne(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ae(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(je(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function je(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ze)||(e.globalVersion=ze,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ae(e))))return;e.flags|=2;let t=e.dep,n=F,r=Pe;F=e,Pe=!0;try{Oe(e);let n=e.fn(e._value);(t.version===0||ie(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{F=n,Pe=r,ke(e),e.flags&=-3}}function Me(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Me(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ne(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Pe=!0,Fe=[];function Ie(){Fe.push(Pe),Pe=!1}function Le(){let e=Fe.pop();Pe=e===void 0||e}function Re(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=F;F=void 0;try{t()}finally{F=e}}}var ze=0,Be=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ve=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!F||!Pe||F===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==F)t=this.activeLink=new Be(F,this),F.deps?(t.prevDep=F.depsTail,F.depsTail.nextDep=t,F.depsTail=t):F.deps=F.depsTail=t,He(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=F.depsTail,t.nextDep=void 0,F.depsTail.nextDep=t,F.depsTail=t,F.deps===t&&(F.deps=e)}return t}trigger(e){this.version++,ze++,this.notify(e)}notify(e){Ee();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{De()}}};function He(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)He(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ue=new WeakMap,We=Symbol(``),Ge=Symbol(``),Ke=Symbol(``);function qe(e,t,n){if(Pe&&F){let t=Ue.get(e);t||Ue.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ve),r.map=t,r.key=n),r.track()}}function Je(e,t,n,r,i,a){let o=Ue.get(e);if(!o){ze++;return}let s=e=>{e&&e.trigger()};if(Ee(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&C(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Ke||!g(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Ke)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(We)),f(e)&&s(o.get(Ge)));break;case`delete`:i||(s(o.get(We)),f(e)&&s(o.get(Ge)));break;case`set`:f(e)&&s(o.get(We))}}De()}function Ye(e){let t=R(e);return t===e?t:(qe(t,`iterate`,Ke),Nt(e)?t:t.map(It))}function Xe(e){return qe(e=R(e),`iterate`,Ke),e}function Ze(e,t){return L(e)?Lt(Mt(e)?It(t):t):It(t)}var Qe={__proto__:null,[Symbol.iterator](){return $e(this,Symbol.iterator,e=>Ze(this,e))},concat(...e){return Ye(this).concat(...e.map(e=>d(e)?Ye(e):e))},entries(){return $e(this,`entries`,e=>(e[1]=Ze(this,e[1]),e))},every(e,t){return tt(this,`every`,e,t,void 0,arguments)},filter(e,t){return tt(this,`filter`,e,t,e=>e.map(e=>Ze(this,e)),arguments)},find(e,t){return tt(this,`find`,e,t,e=>Ze(this,e),arguments)},findIndex(e,t){return tt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return tt(this,`findLast`,e,t,e=>Ze(this,e),arguments)},findLastIndex(e,t){return tt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return tt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return rt(this,`includes`,e)},indexOf(...e){return rt(this,`indexOf`,e)},join(e){return Ye(this).join(e)},lastIndexOf(...e){return rt(this,`lastIndexOf`,e)},map(e,t){return tt(this,`map`,e,t,void 0,arguments)},pop(){return it(this,`pop`)},push(...e){return it(this,`push`,e)},reduce(e,...t){return nt(this,`reduce`,e,t)},reduceRight(e,...t){return nt(this,`reduceRight`,e,t)},shift(){return it(this,`shift`)},some(e,t){return tt(this,`some`,e,t,void 0,arguments)},splice(...e){return it(this,`splice`,e)},toReversed(){return Ye(this).toReversed()},toSorted(e){return Ye(this).toSorted(e)},toSpliced(...e){return Ye(this).toSpliced(...e)},unshift(...e){return it(this,`unshift`,e)},values(){return $e(this,`values`,e=>Ze(this,e))}};function $e(e,t,n){let r=Xe(e),i=r[t]();return r!==e&&!Nt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var et=Array.prototype;function tt(e,t,n,r,i,a){let o=Xe(e),s=o!==e&&!Nt(e),c=o[t];if(c!==et[t]){let t=c.apply(e,a);return s?It(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Ze(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function nt(e,t,n,r){let i=Xe(e),a=n;return i!==e&&(Nt(e)?n.length>3&&(a=function(t,r,i){return n.call(this,t,r,i,e)}):a=function(t,r,i){return n.call(this,t,Ze(e,r),i,e)}),i[t](a,...r)}function rt(e,t,n){let r=R(e);qe(r,`iterate`,Ke);let i=r[t](...n);return(i===-1||i===!1)&&Pt(n[0])?(n[0]=R(n[0]),r[t](...n)):i}function it(e,t,n=[]){Ie(),Ee();let r=R(e)[t].apply(e,n);return De(),Le(),r}var at=e(`__proto__,__v_isRef,__isVue`),ot=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(g));function st(e){g(e)||(e=String(e));let t=R(this);return qe(t,`has`,e),t.hasOwnProperty(e)}var I=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Tt:wt:i?Ct:St).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=Qe[t]))return e;if(t===`hasOwnProperty`)return st}let o=Reflect.get(e,t,z(e)?e:n);if((g(t)?ot.has(t):at(t))||(r||qe(e,`get`,t),i))return o;if(z(o)){let e=a&&C(t)?o:o.value;return r&&_(e)?At(e):e}return _(o)?r?At(o):Ot(o):o}},ct=class extends I{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&C(t);if(!this._isShallow){let e=L(i);if(!Nt(n)&&!L(n)&&(i=R(i),n=R(n)),!a&&z(i)&&!z(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,z(e)?e:r);return e===R(r)&&(o?ie(n,i)&&Je(e,`set`,t,n,i):Je(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Je(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!g(t)||!ot.has(t))&&qe(e,`has`,t),n}ownKeys(e){return qe(e,`iterate`,d(e)?`length`:We),Reflect.ownKeys(e)}},lt=class extends I{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},ut=new ct,dt=new lt,ft=new ct(!0),pt=e=>e,mt=e=>Reflect.getPrototypeOf(e);function ht(e,t,n){return function(...r){let i=this.__v_raw,a=R(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?pt:t?Lt:It;return!t&&qe(a,`iterate`,l?Ge:We),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function gt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function _t(e,t){let n={get(n){let r=this.__v_raw,i=R(r),a=R(n);e||(ie(n,a)&&qe(i,`get`,n),qe(i,`get`,a));let{has:o}=mt(i),s=t?pt:e?Lt:It;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&qe(R(t),`iterate`,We),t.size},has(t){let n=this.__v_raw,r=R(n),i=R(t);return e||(ie(t,i)&&qe(r,`has`,t),qe(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=R(a),s=t?pt:e?Lt:It;return!e&&qe(o,`iterate`,We),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:gt(`add`),set:gt(`set`),delete:gt(`delete`),clear:gt(`clear`)}:{add(e){!t&&!Nt(e)&&!L(e)&&(e=R(e));let n=R(this);return mt(n).has.call(n,e)||(n.add(e),Je(n,`add`,e,e)),this},set(e,n){!t&&!Nt(n)&&!L(n)&&(n=R(n));let r=R(this),{has:i,get:a}=mt(r),o=i.call(r,e);o||=(e=R(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?ie(n,s)&&Je(r,`set`,e,n,s):Je(r,`add`,e,n),this},delete(e){let t=R(this),{has:n,get:r}=mt(t),i=n.call(t,e);i||=(e=R(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Je(t,`delete`,e,void 0,a),o},clear(){let e=R(this),t=e.size!==0,n=e.clear();return t&&Je(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=ht(r,e,t)}),n}function vt(e,t){let n=_t(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var yt={get:vt(!1,!1)},bt={get:vt(!1,!0)},xt={get:vt(!0,!1)},St=new WeakMap,Ct=new WeakMap,wt=new WeakMap,Tt=new WeakMap;function Et(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Dt(e){return e.__v_skip||!Object.isExtensible(e)?0:Et(x(e))}function Ot(e){return L(e)?e:jt(e,!1,ut,yt,St)}function kt(e){return jt(e,!1,ft,bt,Ct)}function At(e){return jt(e,!0,dt,xt,wt)}function jt(e,t,n,r,i){if(!_(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Dt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Mt(e){return L(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function L(e){return!!(e&&e.__v_isReadonly)}function Nt(e){return!!(e&&e.__v_isShallow)}function Pt(e){return e?!!e.__v_raw:!1}function R(e){let t=e&&e.__v_raw;return t?R(t):e}function Ft(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&oe(e,`__v_skip`,!0),e}var It=e=>_(e)?Ot(e):e,Lt=e=>_(e)?At(e):e;function z(e){return e?e.__v_isRef===!0:!1}function B(e){return zt(e,!1)}function Rt(e){return zt(e,!0)}function zt(e,t){return z(e)?e:new Bt(e,t)}var Bt=class{constructor(e,t){this.dep=new Ve,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:R(e),this._value=t?e:It(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Nt(e)||L(e);e=n?e:R(e),ie(e,t)&&(this._rawValue=e,this._value=n?e:It(e),this.dep.trigger())}};function Vt(e){return z(e)?e.value:e}var Ht={get:(e,t,n)=>t===`__v_raw`?e:Vt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return z(i)&&!z(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ut(e){return Mt(e)?e:new Proxy(e,Ht)}var Wt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ve(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ze-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&F!==this)return Te(this,!0),!0}get value(){let e=this.dep.track();return je(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Gt(e,t,n=!1){let r,i;return m(e)?r=e:(r=e.get,i=e.set),new Wt(r,i,n)}var Kt={},qt=new WeakMap,Jt=void 0;function Yt(e,t=!1,n=Jt){if(n){let t=qt.get(n);t||qt.set(n,t=[]),t.push(e)}}function Xt(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Nt(e)||o===!1||o===0?Zt(e,1):Zt(e),h,g,_,v,y=!1,b=!1;if(z(e)?(g=()=>e.value,y=Nt(e)):Mt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Mt(e)||Nt(e)),g=()=>e.map(e=>{if(z(e))return e.value;if(Mt(e))return p(e);if(m(e))return f?f(e,2):e()})):g=m(e)?n?f?()=>f(e,2):e:()=>{if(_){Ie();try{_()}finally{Le()}}let t=Jt;Jt=h;try{return f?f(e,3,[v]):e(v)}finally{Jt=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>Zt(e(),t)}let x=ye(),S=()=>{h.stop(),x&&x.active&&c(x.effects,h)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(Kt):Kt,w=e=>{if(h.flags&1&&(h.dirty||e)){if(n){let e=h.run();if(o||y||(b?e.some((e,t)=>ie(e,C[t])):ie(e,C))){_&&_();let t=Jt;Jt=h;try{let t=[e,C===Kt?void 0:b&&C[0]===Kt?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{Jt=t}}}else h.run()}};return u&&u(w),h=new xe(g),h.scheduler=l?()=>l(w,!1):w,v=e=>Yt(e,!1,h),_=h.onStop=()=>{let e=qt.get(h);if(e){if(f)f(e,4);else for(let t of e)t();qt.delete(h)}},n?a?w(!0):C=h.run():l?l(w.bind(null,!0),!0):h.run(),S.pause=h.pause.bind(h),S.resume=h.resume.bind(h),S.stop=S,S}function Zt(e,t=1/0,n){if(t<=0||!_(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,z(e))Zt(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)Zt(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{Zt(e,t,n)});else if(S(e)){for(let r in e)Zt(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Zt(e[r],t,n)}return e}function Qt(e,t,n,r){try{return r?e(...r):e()}catch(e){en(e,t,n)}}function $t(e,t,n,r){if(m(e)){let i=Qt(e,t,n,r);return i&&v(i)&&i.catch(e=>{en(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push($t(e[a],t,n,r));return i}}function en(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ie(),Qt(o,null,10,[e,i,a]),Le();return}}tn(e,r,a,i,s)}function tn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var nn=[],rn=-1,an=[],on=null,sn=0,cn=Promise.resolve(),ln=null;function un(e){let t=ln||cn;return e?t.then(this?e.bind(this):e):t}function dn(e){let t=rn+1,n=nn.length;for(;t<n;){let r=t+n>>>1,i=nn[r],a=_n(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function fn(e){if(!(e.flags&1)){let t=_n(e),n=nn[nn.length-1];!n||!(e.flags&2)&&t>=_n(n)?nn.push(e):nn.splice(dn(t),0,e),e.flags|=1,pn()}}function pn(){ln||=cn.then(vn)}function mn(e){d(e)?an.push(...e):on&&e.id===-1?on.splice(sn+1,0,e):e.flags&1||(an.push(e),e.flags|=1),pn()}function hn(e,t,n=rn+1){for(;n<nn.length;n++){let t=nn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;nn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function gn(e){if(an.length){let e=[...new Set(an)].sort((e,t)=>_n(e)-_n(t));if(an.length=0,on){on.push(...e);return}for(on=e,sn=0;sn<on.length;sn++){let e=on[sn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}on=null,sn=0}}var _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function vn(e){try{for(rn=0;rn<nn.length;rn++){let e=nn[rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qt(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rn<nn.length;rn++){let e=nn[rn];e&&(e.flags&=-2)}rn=-1,nn.length=0,gn(e),ln=null,(nn.length||an.length)&&vn(e)}}var yn=null,bn=null;function xn(e){let t=yn;return yn=e,bn=e&&e.type.__scopeId||null,t}function Sn(e,t=yn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&ra(-1);let i=xn(t),a;try{a=e(...n)}finally{xn(i),r._d&&ra(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Cn(e,n){if(yn===null)return e;let r=La(yn),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(m(a)&&(a={mounted:a,updated:a}),a.deep&&Zt(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function wn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ie(),$t(c,n,8,[e.el,s,e,t]),Le())}}function Tn(e,t){if(Ca){let n=Ca.provides,r=Ca.parent&&Ca.parent.provides;r===n&&(n=Ca.provides=Object.create(r)),n[e]=t}}function En(e,t,n=!1){let r=wa();if(r||si){let i=si?si._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&m(t)?t.call(r&&r.proxy):t}}var Dn=Symbol.for(`v-scx`),On=()=>En(Dn);function kn(e,t,n){return An(e,t,n)}function An(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(Aa){if(c===`sync`){let e=On();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=Ca;u.call=(e,t,n)=>$t(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{Li(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():fn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=Xt(e,n,u);return Aa&&(f?f.push(h):d&&h()),h}function jn(e,t,n){let r=this.proxy,i=h(e)?e.includes(`.`)?Mn(r,e):()=>r[e]:e.bind(r,r),a;m(t)?a=t:(a=t.handler,n=t);let o=Da(this),s=An(i,a.bind(r),n);return o(),s}function Mn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Nn=Symbol(`_vte`),Pn=e=>e.__isTeleport,Fn=e=>e&&(e.disabled||e.disabled===``),In=e=>e&&(e.defer||e.defer===``),Ln=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Rn=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,zn=(e,t)=>{let n=e&&e.to;return h(n)?t?t(n):null:n},Bn={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g}}=l,_=Fn(t.props),{shapeFlag:v,children:y,dynamicChildren:b}=t;if(e==null){let e=t.el=h(``),l=t.anchor=h(``);p(e,n,r),p(l,n,r);let d=(e,t)=>{v&16&&u(y,e,t,i,a,o,s,c)},f=()=>{let e=t.target=zn(t.props,m),n=Gn(e,t,h,p);e&&(o!==`svg`&&Ln(e)?o=`svg`:o!==`mathml`&&Rn(e)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(e),_||(d(e,n),Wn(t,!1)))};_&&(d(n,l),Wn(t,!0)),In(t.props)?(t.el.__isMounted=!1,Li(()=>{f(),delete t.el.__isMounted},a)):f()}else{if(In(t.props)&&e.el.__isMounted===!1){Li(()=>{Bn.process(e,t,n,r,i,a,o,s,c,l)},a);return}t.el=e.el,t.targetStart=e.targetStart;let u=t.anchor=e.anchor,p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Fn(e.props),v=g?n:p,y=g?u:h;if(o===`svg`||Ln(p)?o=`svg`:(o===`mathml`||Rn(p))&&(o=`mathml`),b?(f(e.dynamicChildren,b,v,i,a,o,s),Ui(e,t,!0)):c||d(e,t,v,y,i,a,o,s,!1),_)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Vn(t,n,u,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=t.target=zn(t.props,m);e&&Vn(t,e,null,l,0)}else g&&Vn(t,p,h,l,1);Wn(t,_)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e;if(d&&(i(l),i(u)),a&&i(c),o&16){let e=a||!Fn(f);for(let i=0;i<s.length;i++){let a=s[i];r(a,t,n,e,!!a.dynamicChildren)}}},move:Vn,hydrate:Hn};function Vn(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),(!d||Fn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function Hn(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,t,c,l){t.anchor=d(o(e),t,s(e),n,r,i,a),t.targetStart=c,t.targetAnchor=l}let p=t.target=zn(t.props,c),m=Fn(t.props);if(p){let s=p._lpa||p.firstChild;if(t.shapeFlag&16){if(m)f(e,t,s,s&&o(s));else{t.anchor=o(e);let c=s;for(;c;){if(c&&c.nodeType===8){if(c.data===`teleport start anchor`)t.targetStart=c;else if(c.data===`teleport anchor`){t.targetAnchor=c,p._lpa=t.targetAnchor&&o(t.targetAnchor);break}}c=o(c)}t.targetAnchor||Gn(p,t,u,l),d(s&&o(s),t,p,n,r,i,a)}}Wn(t,m)}else m&&t.shapeFlag&16&&f(e,t,e,o(e));return t.anchor&&o(t.anchor)}var Un=Bn;function Wn(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function Gn(e,t,n,r){let i=t.targetStart=n(``),a=t.targetAnchor=n(``);return i[Nn]=a,e&&(r(i,e),r(a,e)),a}var Kn=Symbol(`_leaveCb`),qn=Symbol(`_enterCb`);function Jn(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xr(()=>{e.isMounted=!0}),wr(()=>{e.isUnmounting=!0}),e}var Yn=[Function,Array],Xn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yn,onEnter:Yn,onAfterEnter:Yn,onEnterCancelled:Yn,onBeforeLeave:Yn,onLeave:Yn,onAfterLeave:Yn,onLeaveCancelled:Yn,onBeforeAppear:Yn,onAppear:Yn,onAfterAppear:Yn,onAppearCancelled:Yn},Zn=e=>{let t=e.subTree;return t.component?Zn(t.component):t},Qn={name:`BaseTransition`,props:Xn,setup(e,{slots:t}){let n=wa(),r=Jn();return()=>{let i=t.default&&or(t.default(),!0);if(!i||!i.length)return;let a=$n(i),o=R(e),{mode:s}=o;if(r.isLeaving)return rr(a);let c=ir(a);if(!c)return rr(a);let l=nr(c,o,r,n,e=>l=e);c.type!==Zi&&ar(c,l);let u=n.subTree&&ir(n.subTree);if(u&&u.type!==Zi&&!sa(u,c)&&Zn(n).type!==Zi){let e=nr(u,o,r,n);if(ar(u,e),s===`out-in`&&c.type!==Zi)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},rr(a);s===`in-out`&&c.type!==Zi?e.delayLeave=(e,t,n)=>{let i=tr(r,u);i[String(u.key)]=u,e[Kn]=()=>{t(),e[Kn]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function $n(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==Zi){t=n;break}}return t}var er=Qn;function tr(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function nr(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=tr(n,e),C=(e,t)=>{e&&$t(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),d(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},T={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted){if(a)r=_||c;else return}t[Kn]&&t[Kn](!0);let i=S[x];i&&sa(e,i)&&i.el[Kn]&&i.el[Kn](),C(r,[t])},enter(e){let t=l,r=u,i=f;if(!n.isMounted){if(a)t=v||l,r=y||u,i=b||f;else return}let o=!1,s=e[qn]=t=>{o||(o=!0,C(t?i:r,[e]),T.delayedLeave&&T.delayedLeave(),e[qn]=void 0)};t?w(t,[e,s]):s()},leave(t,r){let i=String(e.key);if(t[qn]&&t[qn](!0),n.isUnmounting)return r();C(p,[t]);let a=!1,o=t[Kn]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[Kn]=void 0,S[i]===e&&delete S[i])};S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=nr(e,t,n,r,i);return i&&i(a),a}};return T}function rr(e){if(pr(e))return e=fa(e),e.children=null,e}function ir(e){if(!pr(e))return Pn(e.type)&&e.children?$n(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&m(n.default))return n.default()}}function ar(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ar(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function or(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===H?(o.patchFlag&128&&i++,r=r.concat(or(o.children,t,s))):(t||o.type!==Zi)&&r.push(s==null?o:fa(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function sr(e,t){return m(e)?s({name:e.name},t,{setup:e}):e}function cr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}var lr=new WeakMap;function ur(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>ur(e,n&&(d(n)?n[t]:n),r,a,o));return}if(fr(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&ur(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?La(a.component):a.el,l=o?null:s,{i:f,r:p}=e,g=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=R(v),b=v===t?i:e=>u(y,e),x=e=>!0;if(g!=null&&g!==p){if(dr(n),h(g))_[g]=null,b(g)&&(v[g]=null);else if(z(g)){x(g)&&(g.value=null);let e=n;e.k&&(_[e.k]=null)}}if(m(p))Qt(p,f,12,[l,_]);else{let t=h(p),n=z(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),lr.delete(e)};t.id=-1,lr.set(e,t),Li(t,r)}else dr(e),i()}}}function dr(e){let t=lr.get(e);t&&(t.flags|=8,lr.delete(e))}le().requestIdleCallback,le().cancelIdleCallback;var fr=e=>!!e.type.__asyncLoader,pr=e=>e.type.__isKeepAlive;function mr(e,t){gr(e,`a`,t)}function hr(e,t){gr(e,`da`,t)}function gr(e,t,n=Ca){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(vr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)pr(e.parent.vnode)&&_r(r,t,n,e),e=e.parent}}function _r(e,t,n,r){let i=vr(t,e,r,!0);Tr(()=>{c(r[t],i)},n)}function vr(e,t,n=Ca,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ie();let i=Da(n),a=$t(t,n,e,r);return i(),Le(),a};return r?i.unshift(a):i.push(a),a}}var yr=e=>(t,n=Ca)=>{(!Aa||e===`sp`)&&vr(e,(...e)=>t(...e),n)},br=yr(`bm`),xr=yr(`m`),Sr=yr(`bu`),Cr=yr(`u`),wr=yr(`bum`),Tr=yr(`um`),Er=yr(`sp`),Dr=yr(`rtg`),Or=yr(`rtc`);function kr(e,t=Ca){vr(`ec`,e,t)}var Ar=`components`;function jr(e,t){return Pr(Ar,e,!0,t)||e}var Mr=Symbol.for(`v-ndc`);function Nr(e){return h(e)?Pr(Ar,e,!1)||e:e||Mr}function Pr(e,t,n=!0,r=!1){let i=yn||Ca;if(i){let n=i.type;if(e===Ar){let e=Ra(n,!1);if(e&&(e===t||e===E(t)||e===ne(E(t))))return n}let a=Fr(i[e]||n[e],t)||Fr(i.appContext[e],t);return!a&&r?n:a}}function Fr(e,t){return e&&(e[t]||e[E(t)]||e[ne(E(t))])}function V(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||h(e)){let n=o&&Mt(e),r=!1,s=!1;n&&(r=!Nt(e),s=L(e),e=Xe(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Lt(It(e[n])):It(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(_(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function Ir(e,t,n={},r,i){if(yn.ce||yn.parent&&fr(yn.parent)&&yn.parent.ce){let e=Object.keys(n).length>0;return t!=="default"&&(n.name=t),U(),aa(H,null,[K(`slot`,n,r&&r())],e?-2:64)}let a=e[t];a&&a._c&&(a._d=!1),U();let o=a&&Lr(a(n)),s=n.key||o&&o.key,c=aa(H,{key:(s&&!g(s)?s:`_${t}`)+(!o&&r?`_fb`:``)},o||(r?r():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),a&&a._c&&(a._d=!0),c}function Lr(e){return e.some(e=>!oa(e)||!(e.type===Zi||e.type===H&&!Lr(e.children)))?e:null}var Rr=e=>e?ka(e)?La(e):Rr(e.parent):null,zr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Rr(e.parent),$root:e=>Rr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Jr(e),$forceUpdate:e=>e.f||=()=>{fn(e.update)},$nextTick:e=>e.n||=un.bind(e.proxy),$watch:e=>jn.bind(e)}),Br=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Vr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Br(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Ur&&(s[n]=0)}let d=zr[n],f,p;if(d)return n===`$attrs`&&qe(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Br(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Br(n,c)||u(o,c)||u(i,c)||u(zr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Hr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Ur=!0;function Wr(e){let t=Jr(e),n=e.proxy,i=e.ctx;Ur=!1,t.beforeCreate&&Kr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:h,beforeUpdate:g,updated:v,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:ee,renderTriggered:E,errorCaptured:te,serverPrefetch:D,expose:ne,inheritAttrs:re,components:ie,directives:ae,filters:oe}=t;if(u&&Gr(u,i,null),s)for(let e in s){let t=s[e];m(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);_(t)&&(e.data=Ot(t))}if(Ur=!0,o)for(let e in o){let t=o[e],a=J({get:m(t)?t.bind(n,n):m(t.get)?t.get.bind(n,n):r,set:!m(t)&&m(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)qr(c[e],i,n,e);if(l){let e=m(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Tn(t,e[t])})}f&&Kr(f,e,`c`);function O(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(O(br,p),O(xr,h),O(Sr,g),O(Cr,v),O(mr,y),O(hr,b),O(kr,te),O(Or,ee),O(Dr,E),O(wr,S),O(Tr,w),O(Er,D),d(ne)){if(ne.length){let t=e.exposed||={};ne.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}T&&e.render===r&&(e.render=T),re!=null&&(e.inheritAttrs=re),ie&&(e.components=ie),ae&&(e.directives=ae),D&&cr(e)}function Gr(e,t,n=r){d(e)&&(e=$r(e));for(let n in e){let r=e[n],i;i=_(r)?`default`in r?En(r.from||n,r.default,!0):En(r.from||n):En(r),z(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Kr(e,t,n){$t(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function qr(e,t,n,r){let i=r.includes(`.`)?Mn(n,r):()=>n[r];if(h(e)){let n=t[e];m(n)&&kn(i,n)}else if(m(e))kn(i,e.bind(n));else if(_(e)){if(d(e))e.forEach(e=>qr(e,t,n,r));else{let r=m(e.handler)?e.handler.bind(n):t[e.handler];m(r)&&kn(i,r,e)}}}function Jr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Yr(c,e,o,!0)),Yr(c,t,o)),_(t)&&a.set(t,c),c}function Yr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Yr(e,a,n,!0),i&&i.forEach(t=>Yr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Xr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Xr={data:Zr,props:ni,emits:ni,methods:ti,computed:ti,beforeCreate:ei,created:ei,beforeMount:ei,mounted:ei,beforeUpdate:ei,updated:ei,beforeDestroy:ei,beforeUnmount:ei,destroyed:ei,unmounted:ei,activated:ei,deactivated:ei,errorCaptured:ei,serverPrefetch:ei,components:ti,directives:ti,watch:ri,provide:Zr,inject:Qr};function Zr(e,t){return t?e?function(){return s(m(e)?e.call(this,this):e,m(t)?t.call(this,this):t)}:t:e}function Qr(e,t){return ti($r(e),$r(t))}function $r(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ei(e,t){return e?[...new Set([].concat(e,t))]:t}function ti(e,t){return e?s(Object.create(null),e,t):t}function ni(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Hr(e),Hr(t??{})):t}function ri(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=ei(e[r],t[r]);return n}function ii(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var ai=0;function oi(e,t){return function(n,r=null){m(n)||(n=s({},n)),r!=null&&!_(r)&&(r=null);let i=ii(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:ai++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Va,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&m(e.install)?(a.add(e),e.install(l,...t)):m(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||K(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,La(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&($t(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=si;si=l;try{return e()}finally{si=t}}};return l}}var si=null,ci=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${E(t)}Modifiers`]||e[`${D(t)}Modifiers`];function li(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&ci(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>h(e)?e.trim():e)),s.number&&(a=r.map(O)));let c,l=i[c=re(n)]||i[c=re(E(n))];!l&&o&&(l=i[c=re(D(n))]),l&&$t(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,$t(u,e,6,a)}}var ui=new WeakMap;function di(e,t,n=!1){let r=n?ui:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!m(e)){let r=e=>{let n=di(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(_(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),_(e)&&r.set(e,o),o)}function fi(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,D(t))||u(e,t))}function pi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=xn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=ha(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=ha(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:mi(c)}}catch(t){$i.length=0,en(t,e,1),v=K(Zi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=hi(y,a)),b=fa(b,y,!1,!0))}return n.dirs&&(b=fa(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&ar(b,n.transition),v=b,xn(_),v}var mi=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},hi=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gi(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_i(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(o[n]!==r[n]&&!fi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||_i(r,o,l):!!o;return!1}function _i(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(t[a]!==e[a]&&!fi(n,a))return!0}return!1}function vi({vnode:e,parent:t},n){for(;t;){let r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}var yi={},bi=()=>Object.create(yi),xi=e=>Object.getPrototypeOf(e)===yi;function Si(e,t,n,r=!1){let i={},a=bi();e.propsDefaults=Object.create(null),wi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:kt(i):e.type.props?i:a,e.attrs=a}function Ci(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=R(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(fi(e.emitsOptions,o))continue;let d=t[o];if(c){if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=E(o);i[t]=Ti(c,s,t,d,e,!1)}}else d!==a[o]&&(a[o]=d,l=!0)}}}else{wi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=D(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Ti(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&Je(e.attrs,`set`,``)}function wi(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(w(t))continue;let l=n[t],d;a&&u(a,d=E(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:fi(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=R(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=Ti(a,n,s,i[s],e,!u(i,s))}}return s}function Ti(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&m(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Da(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===D(n))&&(r=!0))}return r}var Ei=new WeakMap;function Di(e,r,i=!1){let a=i?Ei:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!m(e)){let t=e=>{p=!0;let[t,n]=Di(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return _(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=E(c[e]);Oi(n)&&(l[n]=t)}else if(c)for(let e in c){let t=E(e);if(Oi(t)){let n=c[e],r=l[t]=d(n)||m(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=m(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=m(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let h=[l,f];return _(e)&&a.set(e,h),h}function Oi(e){return e[0]!==`$`&&!w(e)}var ki=e=>e===`_`||e===`_ctx`||e===`$stable`,Ai=e=>d(e)?e.map(ha):[ha(e)],ji=(e,t,n)=>{if(t._n)return t;let r=Sn((...e)=>Ai(t(...e)),n);return r._c=!1,r},Mi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ki(n))continue;let i=e[n];if(m(i))t[n]=ji(n,i,r);else if(i!=null){let e=Ai(i);t[n]=()=>e}}},Ni=(e,t)=>{let n=Ai(t);e.slots.default=()=>n},Pi=(e,t,n)=>{for(let r in t)(n||!ki(r))&&(e[r]=t[r])},Fi=(e,t,n)=>{let r=e.slots=bi();if(e.vnode.shapeFlag&32){let e=t._;e?(Pi(r,t,n),n&&oe(r,`_`,e,!0)):Mi(t,r)}else t&&Ni(e,t)},Ii=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:Pi(a,n,r):(o=!n.$stable,Mi(n,a)),s=n}else n&&(Ni(e,n),s={default:1});if(o)for(let e in a)!ki(e)&&s[e]==null&&delete a[e]},Li=Yi;function Ri(e){return zi(e)}function zi(e,i){let a=le();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!sa(e,t)&&(r=M(e),j(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Xi:y(e,t,n,r);break;case Zi:b(e,t,n,r);break;case Qi:e??x(t,n,r,o);break;case H:ie(e,t,n,r,i,a,o,s,c);break;default:d&1?T(e,t,n,r,i,a,o,s,c):d&6?oe(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,P)}u!=null&&i?ur(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&ur(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},T=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ee(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),D(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ee=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&te(e.children,d,null,r,i,Bi(e,a),s,u),_&&wn(e,null,r,`created`),E(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!w(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ya(f,r,e)}_&&wn(e,null,r,`beforeMount`);let v=Hi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&Li(()=>{f&&ya(f,r,e),v&&g.enter(d),_&&wn(e,null,r,`mounted`)},i)},E=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ji(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;E(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},te=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?ga(e[l]):ha(e[l]);v(null,c,t,n,r,i,a,o,s)}},D=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Vi(r,!1),(g=h.onVnodeBeforeUpdate)&&ya(g,r,n,e),f&&wn(n,e,r,`beforeUpdate`),r&&Vi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?ne(e.dynamicChildren,d,l,r,i,Bi(n,a),o):s||A(e,n,l,null,r,i,Bi(n,a),o,!1),u>0){if(u&16)re(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&re(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&Li(()=>{g&&ya(g,r,n,e),f&&wn(n,e,r,`updated`)},i)},ne=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===H||!sa(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},re=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!w(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(w(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ie=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),te(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(ne(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Ui(e,t,!0)):A(e,t,n,f,i,a,s,c,l)},oe=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):O(t,n,r,i,a,o,c):se(e,t,c)},O=(e,t,n,r,i,a,o)=>{let s=e.component=Sa(e,r,i);if(pr(e)&&(s.ctx.renderer=P),ja(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ce,o),!e.el){let r=s.subTree=K(Zi);b(null,r,t,n),e.placeholder=r.el}}else ce(s,e,t,n,i,a,o)},se=(e,t,n)=>{let r=t.component=e.component;if(gi(e,t,n)){if(r.asyncDep&&!r.asyncResolved){k(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},ce=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:c,vnode:l}=e;{let n=Gi(e);if(n){t&&(t.el=l.el,k(e,t,o)),n.asyncDep.then(()=>{e.isUnmounted||s()});return}}let u=t,d;Vi(e,!1),t?(t.el=l.el,k(e,t,o)):t=l,n&&ae(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ya(d,c,t,l),Vi(e,!0);let f=pi(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),M(p),e,i,a),t.el=f.el,u===null&&vi(e,f.el),r&&Li(r,i),(d=t.props&&t.props.onVnodeUpdated)&&Li(()=>ya(d,c,t,l),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=fr(t);if(Vi(e,!1),l&&ae(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ya(o,d,t),Vi(e,!0),s&&ye){let t=()=>{e.subTree=pi(e),ye(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._def.shadowRoot!==!1&&f.ce._injectChildStyle(p);let o=e.subTree=pi(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Li(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Li(()=>ya(o,d,e),i)}(t.shapeFlag&256||d&&fr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Li(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new xe(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>fn(u),Vi(e,!0),l()},k=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Ci(e,t.props,r,n),Ii(e,t.children,n),Ie(),hn(e),Le()},A=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){de(l,d,n,r,i,a,o,s,c);return}if(f&256){ue(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ge(l,i,a),d!==l&&p(n,d)):u&16?m&16?de(l,d,n,r,i,a,o,s,c):ge(l,i,a,!0):(u&8&&p(n,``),m&16&&te(d,n,r,i,a,o,s,c))},ue=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let n=t[p]=l?ga(t[p]):ha(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ge(e,a,o,!0,!1,f):te(t,r,i,a,o,s,c,l,f)},de=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?ga(t[u]):ha(t[u]);if(sa(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?ga(t[p]):ha(t[p]);if(sa(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?ga(t[u]):ha(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)j(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?ga(t[u]):ha(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){j(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&sa(n,t[_])){i=_;break}i===void 0?j(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Wi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||qi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?fe(n,r,p,2):_--)}}},fe=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){fe(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,P);return}if(c===H){o(a,t,n);for(let e=0;e<u.length;e++)fe(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Qi){S(e,t,n);return}if(r!==2&&d&1&&l){if(r===0)l.beforeEnter(a),o(a,t,n),Li(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[Kn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},j=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p}=e;if(d===-2&&(i=!1),s!=null&&(Ie(),ur(s,null,n,e,!0),Le()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let m=u&1&&f,h=!fr(e),g;if(h&&(g=o&&o.onVnodeBeforeUnmount)&&ya(g,t,e),u&6)he(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}m&&wn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,P,r):l&&!l.hasOnce&&(a!==H||d>0&&d&64)?ge(l,t,n,!1,!0):(a===H&&d&384||!i&&u&16)&&ge(c,t,n),r&&pe(e)}(h&&(g=o&&o.onVnodeUnmounted)||m)&&Li(()=>{g&&ya(g,t,e),m&&wn(e,null,t,`unmounted`)},n)},pe=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===H){me(n,r);return}if(t===Qi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},me=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},he=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ki(c),Ki(l),r&&ae(r),i.stop(),a&&(a.flags|=8,j(o,e,t,n)),s&&Li(s,t),Li(()=>{e.isUnmounted=!0},t)},ge=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)j(e[o],t,n,r,i)},M=e=>{if(e.shapeFlag&6)return M(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Nn];return n?h(n):t},N=!1,_e=(e,t,n)=>{let r;e==null?t._vnode&&(j(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,N||=(N=!0,hn(r),gn(),!1)},P={p:v,um:j,m:fe,r:pe,mt:O,mc:te,pc:A,pbc:ne,n:M,o:e},ve,ye;return i&&([ve,ye]=i(P)),{render:_e,hydrate:ve,createApp:oi(_e,ve)}}function Bi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Vi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Hi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ui(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let t=0;t<r.length;t++){let a=r[t],o=i[t];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[t]=ga(i[t]),o.el=a.el),!n&&o.patchFlag!==-2&&Ui(a,o)),o.type===Xi&&(o.patchFlag===-1?o.__elIndex=t+ +(e.type===H):o.el=a.el),o.type===Zi&&!o.el&&(o.el=a.el)}}function Wi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Gi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Gi(t)}function Ki(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function qi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?qi(t.subTree):null}var Ji=e=>e.__isSuspense;function Yi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):mn(e)}var H=Symbol.for(`v-fgt`),Xi=Symbol.for(`v-txt`),Zi=Symbol.for(`v-cmt`),Qi=Symbol.for(`v-stc`),$i=[],ea=null;function U(e=!1){$i.push(ea=e?null:[])}function ta(){$i.pop(),ea=$i[$i.length-1]||null}var na=1;function ra(e,t=!1){na+=e,e<0&&ea&&t&&(ea.hasOnce=!0)}function ia(e){return e.dynamicChildren=na>0?ea||n:null,ta(),na>0&&ea&&ea.push(e),e}function W(e,t,n,r,i,a){return ia(G(e,t,n,r,i,a,!0))}function aa(e,t,n,r,i){return ia(K(e,t,n,r,i,!0))}function oa(e){return e?e.__v_isVNode===!0:!1}function sa(e,t){return e.type===t.type&&e.key===t.key}var ca=({key:e})=>e??null,la=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:h(e)||z(e)||m(e)?{i:yn,r:e,k:t,f:!!n}:e);function G(e,t=null,n=null,r=0,i=null,a=e===H?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ca(t),ref:t&&la(t),scopeId:bn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:yn};return s?(_a(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=h(n)?8:16),na>0&&!o&&ea&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&ea.push(c),c}var K=ua;function ua(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Mr)&&(e=Zi),oa(e)){let r=fa(e,t,!0);return n&&_a(r,n),na>0&&!a&&ea&&(r.shapeFlag&6?ea[ea.indexOf(e)]=r:ea.push(r)),r.patchFlag=-2,r}if(za(e)&&(e=e.__vccOpts),t){t=da(t);let{class:e,style:n}=t;e&&!h(e)&&(t.class=j(e)),_(n)&&(Pt(n)&&!d(n)&&(n=s({},n)),t.style=k(n))}let o=h(e)?1:Ji(e)?128:Pn(e)?64:_(e)?4:m(e)?2:0;return G(e,t,n,r,i,o,a,!0)}function da(e){return e?Pt(e)||xi(e)?s({},e):e:null}function fa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?va(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ca(l),ref:t&&t.ref?n&&a?d(a)?a.concat(la(t)):[a,la(t)]:la(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==H?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fa(e.ssContent),ssFallback:e.ssFallback&&fa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&ar(u,c.clone(u)),u}function pa(e=` `,t=0){return K(Xi,null,e,t)}function ma(e,t){let n=K(Qi,null,e);return n.staticCount=t,n}function q(e=``,t=!1){return t?(U(),aa(Zi,null,e)):K(Zi,null,e)}function ha(e){return e==null||typeof e==`boolean`?K(Zi):d(e)?K(H,null,e.slice()):oa(e)?ga(e):K(Xi,null,String(e))}function ga(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:fa(e)}function _a(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),_a(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!xi(t)?t._ctx=yn:r===3&&yn&&(yn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else m(t)?(t={default:t,_ctx:yn},n=32):(t=String(t),r&64?(n=16,t=[pa(t)]):n=8);e.children=t,e.shapeFlag|=n}function va(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=j([t.class,r.class]));else if(e===`style`)t.style=k([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))&&(t[e]=n?[].concat(n,i):i)}else e!==``&&(t[e]=r[e])}return t}function ya(e,t,n,r=null){$t(e,t,7,[n,r])}var ba=ii(),xa=0;function Sa(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||ba,o={uid:xa++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ve(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Di(i,a),emitsOptions:di(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=li.bind(null,o),e.ce&&e.ce(o),o}var Ca=null,wa=()=>Ca||yn,Ta,Ea;{let e=le(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Ta=t(`__VUE_INSTANCE_SETTERS__`,e=>Ca=e),Ea=t(`__VUE_SSR_SETTERS__`,e=>Aa=e)}var Da=e=>{let t=Ca;return Ta(e),e.scope.on(),()=>{e.scope.off(),Ta(t)}},Oa=()=>{Ca&&Ca.scope.off(),Ta(null)};function ka(e){return e.vnode.shapeFlag&4}var Aa=!1;function ja(e,t=!1,n=!1){t&&Ea(t);let{props:r,children:i}=e.vnode,a=ka(e);Si(e,r,a,t),Fi(e,i,n||t);let o=a?Ma(e,t):void 0;return t&&Ea(!1),o}function Ma(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Vr);let{setup:r}=n;if(r){Ie();let n=e.setupContext=r.length>1?Ia(e):null,i=Da(e),a=Qt(r,e,0,[e.props,n]),o=v(a);if(Le(),i(),(o||e.sp)&&!fr(e)&&cr(e),o){if(a.then(Oa,Oa),t)return a.then(n=>{Na(e,n,t)}).catch(t=>{en(t,e,0)});e.asyncDep=a}else Na(e,a,t)}else Pa(e,t)}function Na(e,t,n){m(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_(t)&&(e.setupState=Ut(t)),Pa(e,n)}function Pa(e,t,n){let i=e.type;e.render||=i.render||r;{let t=Da(e);Ie();try{Wr(e)}finally{Le(),t()}}}var Fa={get(e,t){return qe(e,`get`,``),e[t]}};function Ia(e){return{attrs:new Proxy(e.attrs,Fa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function La(e){return e.exposed?e.exposeProxy||=new Proxy(Ut(Ft(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zr)return zr[n](e)},has(e,t){return t in e||t in zr}}):e.proxy}function Ra(e,t=!0){return m(e)?e.displayName||e.name:e.name||t&&e.__name}function za(e){return m(e)&&`__vccOpts`in e}var J=(e,t)=>Gt(e,t,Aa);function Ba(e,t,n){try{ra(-1);let r=arguments.length;return r===2?_(t)&&!d(t)?oa(t)?K(e,null,[t]):K(e,t):K(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oa(n)&&(n=[n]),K(e,t,n))}finally{ra(1)}}var Va=`3.5.27`,Ha=void 0,Ua=typeof window<`u`&&window.trustedTypes;if(Ua)try{Ha=Ua.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Wa=Ha?e=>Ha.createHTML(e):e=>e,Ga=`http://www.w3.org/2000/svg`,Ka=`http://www.w3.org/1998/Math/MathML`,qa=typeof document<`u`?document:null,Ja=qa&&qa.createElement(`template`),Ya={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?qa.createElementNS(Ga,e):t===`mathml`?qa.createElementNS(Ka,e):n?qa.createElement(e,{is:n}):qa.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>qa.createTextNode(e),createComment:e=>qa.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qa.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Ja.innerHTML=Wa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ja.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Xa=`transition`,Za=`animation`,Qa=Symbol(`_vtc`),$a={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},eo=s({},Xn,$a),to=(e=>(e.displayName=`Transition`,e.props=eo,e))((e,{slots:t})=>Ba(er,io(e),t)),no=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},ro=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function io(e){let t={};for(let n in e)n in $a||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=ao(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:T=b}=t,ee=(e,t,n,r)=>{e._enterCancelled=r,co(e,t?d:c),co(e,t?u:o),n&&n()},E=(e,t)=>{e._isLeaving=!1,co(e,f),co(e,m),co(e,p),t&&t()},te=e=>(t,n)=>{let i=e?w:y,o=()=>ee(t,e,n);no(i,[t,o]),lo(()=>{co(t,e?l:a),so(t,e?d:c),ro(i)||fo(t,r,g,o)})};return s(t,{onBeforeEnter(e){no(v,[e]),so(e,a),so(e,o)},onBeforeAppear(e){no(C,[e]),so(e,l),so(e,u)},onEnter:te(!1),onAppear:te(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>E(e,t);so(e,f),e._enterCancelled?(so(e,p),go(e)):(go(e),so(e,p)),lo(()=>{e._isLeaving&&(co(e,f),so(e,m),ro(x)||fo(e,r,_,n))}),no(x,[e,n])},onEnterCancelled(e){ee(e,!1,void 0,!0),no(b,[e])},onAppearCancelled(e){ee(e,!0,void 0,!0),no(T,[e])},onLeaveCancelled(e){E(e),no(S,[e])}})}function ao(e){if(e==null)return null;if(_(e))return[oo(e.enter),oo(e.leave)];{let t=oo(e);return[t,t]}}function oo(e){return se(e)}function so(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Qa]||(e[Qa]=new Set)).add(t)}function co(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Qa];n&&(n.delete(t),n.size||(e[Qa]=void 0))}function lo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var uo=0;function fo(e,t,n,r){let i=e._endId=++uo,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=po(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function po(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Xa}Delay`),a=r(`${Xa}Duration`),o=mo(i,a),s=r(`${Za}Delay`),c=r(`${Za}Duration`),l=mo(s,c),u=null,d=0,f=0;t===Xa?o>0&&(u=Xa,d=o,f=a.length):t===Za?l>0&&(u=Za,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Xa:Za:null,f=u?u===Xa?a.length:c.length:0);let p=u===Xa&&/\b(?:transform|all)(?:,|$)/.test(r(`${Xa}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function mo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>ho(t)+ho(e[n])))}function ho(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function go(e){return(e?e.ownerDocument:document).body.offsetHeight}function _o(e,t,n){let r=e[Qa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var vo=Symbol(`_vod`),yo=Symbol(`_vsh`),bo={name:`show`,beforeMount(e,{value:t},{transition:n}){e[vo]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):xo(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),xo(e,!0),r.enter(e)):r.leave(e,()=>{xo(e,!1)}):xo(e,t))},beforeUnmount(e,{value:t}){xo(e,t)}};function xo(e,t){e.style.display=t?e[vo]:`none`,e[yo]=!t}var So=Symbol(``),Co=/(?:^|;)\s*display\s*:/;function wo(e,t,n){let r=e.style,i=h(n),a=!1;if(n&&!i){if(t){if(h(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Eo(r,t,``)}else for(let e in t)n[e]??Eo(r,e,``)}for(let e in n)e===`display`&&(a=!0),Eo(r,e,n[e])}else if(i){if(t!==n){let e=r[So];e&&(n+=`;`+e),r.cssText=n,a=Co.test(n)}}else t&&e.removeAttribute(`style`);vo in e&&(e[vo]=a?r.display:``,e[yo]&&(r.display=`none`))}var To=/\s*!important$/;function Eo(e,t,n){if(d(n))n.forEach(n=>Eo(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=ko(e,t);To.test(n)?e.setProperty(D(r),n.replace(To,``),`important`):e[r]=n}}var Do=[`Webkit`,`Moz`,`ms`],Oo={};function ko(e,t){let n=Oo[t];if(n)return n;let r=E(t);if(r!==`filter`&&r in e)return Oo[t]=r;r=ne(r);for(let n=0;n<Do.length;n++){let i=Do[n]+r;if(i in e)return Oo[t]=i}return t}var Ao=`http://www.w3.org/1999/xlink`;function jo(e,t,n,r,i,a=me(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ao,t.slice(6,t.length)):e.setAttributeNS(Ao,t,n):n==null||a&&!he(n)?e.removeAttribute(t):e.setAttribute(t,a?``:g(n)?String(n):n)}function Mo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Wa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=he(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function No(e,t,n,r){e.addEventListener(t,n,r)}function Po(e,t,n,r){e.removeEventListener(t,n,r)}var Fo=Symbol(`_vei`);function Io(e,t,n,r,i=null){let a=e[Fo]||(e[Fo]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ro(t);r?No(e,n,a[t]=Ho(r,i),s):o&&(Po(e,n,o,s),a[t]=void 0)}}var Lo=/(?:Once|Passive|Capture)$/;function Ro(e){let t;if(Lo.test(e)){t={};let n;for(;n=e.match(Lo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):D(e.slice(2)),t]}var zo=0,Bo=Promise.resolve(),Vo=()=>zo||=(Bo.then(()=>zo=0),Date.now());function Ho(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;$t(Uo(e,n.value),t,5,[e])};return n.value=e,n.attached=Vo(),n}function Uo(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}var Wo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Go=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?_o(e,r,c):t===`style`?wo(e,n,r):a(t)?o(t)||Io(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):Ko(e,t,r,c))?(Mo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&jo(e,t,r,c,s,t!==`value`)):e._isVueCE&&(/[A-Z]/.test(t)||!h(r))?Mo(e,E(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),jo(e,t,r,c))};function Ko(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Wo(t)&&m(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Wo(t)&&h(n)?!1:t in e}var qo=new WeakMap,Jo=new WeakMap,Yo=Symbol(`_moveCb`),Xo=Symbol(`_enterCb`),Zo=(e=>(delete e.props.mode,e))({name:`TransitionGroup`,props:s({},eo,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=wa(),r=Jn(),i,a;return Cr(()=>{if(!i.length)return;let t=e.moveClass||`${e.name||`v`}-move`;if(!ts(i[0].el,n.vnode.el,t)){i=[];return}i.forEach(Qo),i.forEach($o);let r=i.filter(es);go(n.vnode.el),r.forEach(e=>{let n=e.el,r=n.style;so(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n[Yo]=e=>{e&&e.target!==n||(!e||e.propertyName.endsWith(`transform`))&&(n.removeEventListener(`transitionend`,i),n[Yo]=null,co(n,t))};n.addEventListener(`transitionend`,i)}),i=[]}),()=>{let o=R(e),s=io(o),c=o.tag||H;if(i=[],a)for(let e=0;e<a.length;e++){let t=a[e];t.el&&t.el instanceof Element&&(i.push(t),ar(t,nr(t,s,r,n)),qo.set(t,{left:t.el.offsetLeft,top:t.el.offsetTop}))}a=t.default?or(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&ar(t,nr(t,s,r,n))}return K(c,null,a)}}});function Qo(e){let t=e.el;t[Yo]&&t[Yo](),t[Xo]&&t[Xo]()}function $o(e){Jo.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function es(e){let t=qo.get(e),n=Jo.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration=`0s`,e}}function ts(e,t,n){let r=e.cloneNode(),i=e[Qa];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let a=t.nodeType===1?t:t.parentNode;a.appendChild(r);let{hasTransform:o}=po(r);return a.removeChild(r),o}var ns=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>ae(t,e):t};function rs(e){e.target.composing=!0}function is(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var as=Symbol(`_assign`);function os(e,t,n){return t&&(e=e.trim()),n&&(e=O(e)),e}var ss={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[as]=ns(i);let a=r||i.props&&i.props.type===`number`;No(e,t?`change`:`input`,t=>{t.target.composing||e[as](os(e.value,n,a))}),(n||a)&&No(e,`change`,()=>{e.value=os(e.value,n,a)}),t||(No(e,`compositionstart`,rs),No(e,`compositionend`,is),No(e,`change`,is))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[as]=ns(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?O(e.value):e.value,c=t??``;s!==c&&(document.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c))}},cs=[`ctrl`,`shift`,`alt`,`meta`],ls={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>cs.some(n=>e[`${n}Key`]&&!t.includes(n))},us=(e,t)=>{let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=ls[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},ds=s({patchProp:Go},Ya),fs;function ps(){return fs||=Ri(ds)}var ms=((...e)=>{let t=ps().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=gs(e);if(!r)return;let i=t._component;!m(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,hs(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function hs(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function gs(e){return h(e)?document.querySelector(e):e}var _s=typeof document<`u`;function vs(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function ys(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&vs(e.default)}var Y=Object.assign;function bs(e,t){let n={};for(let r in t){let i=t[r];n[r]=Ss(i)?i.map(e):e(i)}return n}var xs=()=>{},Ss=Array.isArray;function Cs(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var ws=/#/g,Ts=/&/g,Es=/\//g,Ds=/=/g,Os=/\?/g,ks=/\+/g,As=/%5B/g,js=/%5D/g,Ms=/%5E/g,Ns=/%60/g,Ps=/%7B/g,Fs=/%7C/g,Is=/%7D/g,Ls=/%20/g;function Rs(e){return e==null?``:encodeURI(``+e).replace(Fs,`|`).replace(As,`[`).replace(js,`]`)}function zs(e){return Rs(e).replace(Ps,`{`).replace(Is,`}`).replace(Ms,`^`)}function Bs(e){return Rs(e).replace(ks,`%2B`).replace(Ls,`+`).replace(ws,`%23`).replace(Ts,`%26`).replace(Ns,"`").replace(Ps,`{`).replace(Is,`}`).replace(Ms,`^`)}function Vs(e){return Bs(e).replace(Ds,`%3D`)}function Hs(e){return Rs(e).replace(ws,`%23`).replace(Os,`%3F`)}function Us(e){return Hs(e).replace(Es,`%2F`)}function Ws(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var Gs=/\/$/,Ks=e=>e.replace(Gs,``);function qs(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=tc(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:Ws(o)}}function Js(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Ys(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Xs(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Zs(t.matched[r],n.matched[i])&&Qs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Zs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!$s(e[n],t[n]))return!1;return!0}function $s(e,t){return Ss(e)?ec(e,t):Ss(t)?ec(t,e):e?.valueOf()===t?.valueOf()}function ec(e,t){return Ss(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function tc(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var nc={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},rc=function(e){return e.pop=`pop`,e.push=`push`,e}({}),ic=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function ac(e){if(!e){if(_s){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Ks(e)}var oc=/^[^#]+#/;function sc(e,t){return e.replace(oc,`#`)+t}function cc(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var lc=()=>({left:window.scrollX,top:window.scrollY});function uc(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=cc(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function dc(e,t){return(history.state?history.state.position-t:-1)+e}var fc=new Map;function pc(e,t){fc.set(e,t)}function mc(e){let t=fc.get(e);return fc.delete(e),t}function hc(e){return typeof e==`string`||e&&typeof e==`object`}function gc(e){return typeof e==`string`||typeof e==`symbol`}var X=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),_c=Symbol(``);X.MATCHER_NOT_FOUND,X.NAVIGATION_GUARD_REDIRECT,X.NAVIGATION_ABORTED,X.NAVIGATION_CANCELLED,X.NAVIGATION_DUPLICATED;function vc(e,t){return Y(Error(),{type:e,[_c]:!0},t)}function yc(e,t){return e instanceof Error&&_c in e&&(t==null||!!(e.type&t))}function bc(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(ks,` `),i=r.indexOf(`=`),a=Ws(i<0?r:r.slice(0,i)),o=i<0?null:Ws(r.slice(i+1));if(a in t){let e=t[a];Ss(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function xc(e){let t=``;for(let n in e){let r=e[n];if(n=Vs(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Ss(r)?r.map(e=>e&&Bs(e)):[r&&Bs(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Sc(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Ss(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var Cc=Symbol(``),wc=Symbol(``),Tc=Symbol(``),Ec=Symbol(``),Dc=Symbol(``);function Oc(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function kc(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(vc(X.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):hc(e)?c(vc(X.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Ac(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(vs(s)){let c=(s.__vccOpts||s)[t];c&&a.push(kc(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=ys(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&kc(c,n,r,o,e,i)()}))}}}return a}function jc(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Zs(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Zs(e,s))||i.push(s))}return[n,r,i]}var Mc=()=>location.protocol+`//`+location.host;function Nc(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Ys(n,``)}return Ys(n,e)+r+i}function Pc(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Nc(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:rc.pop,direction:u?u>0?ic.forward:ic.back:ic.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(Y({},e.state,{scroll:lc()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function Fc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?lc():null}}function Ic(e){let{history:t,location:n}=window,r={value:Nc(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Mc()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,Y({},t.state,Fc(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=Y({},i.value,t.state,{forward:e,scroll:lc()});a(o.current,o,!0),a(e,Y({},Fc(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Lc(e){e=ac(e);let t=Ic(e),n=Pc(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=Y({location:``,base:e,go:r,createHref:sc.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var Rc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Z=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Z||{}),zc={type:Rc.Static,value:``},Bc=/[a-zA-Z0-9_]/;function Vc(e){if(!e)return[[]];if(e===`/`)return[[zc]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Z.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Z.Static?a.push({type:Rc.Static,value:l}):n===Z.Param||n===Z.ParamRegExp||n===Z.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:Rc.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==Z.ParamRegExp){r=n,n=Z.EscapeNext;continue}switch(n){case Z.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Z.Param):f();break;case Z.EscapeNext:f(),n=r;break;case Z.Param:c===`(`?n=Z.ParamRegExp:Bc.test(c)?f():(d(),n=Z.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Z.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Z.ParamRegExpEnd:u+=c;break;case Z.ParamRegExpEnd:d(),n=Z.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}}return n===Z.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Hc=`[^/]+?`,Uc={sensitive:!1,strict:!1,start:!0,end:!0},Wc=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(Wc||{}),Gc=/[.+*?^${}()[\]/\\]/g;function Kc(e,t){let n=Y({},Uc,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[Wc.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=Wc.Segment+(n.sensitive?Wc.BonusCaseSensitive:0);if(o.type===Rc.Static)r||(i+=`/`),i+=o.value.replace(Gc,`\\$&`),s+=Wc.Static;else if(o.type===Rc.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Hc;if(u!==Hc){s+=Wc.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=Wc.Dynamic,c&&(s+=Wc.BonusOptional),n&&(s+=Wc.BonusRepeatable),u===`.*`&&(s+=Wc.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=Wc.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===Rc.Static)n+=e.value;else if(e.type===Rc.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Ss(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Ss(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function qc(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Wc.Static+Wc.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Wc.Static+Wc.Segment?1:-1:0}function Jc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=qc(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(Yc(r))return 1;if(Yc(i))return-1}return i.length-r.length}function Yc(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Xc={strict:!1,end:!0,sensitive:!1};function Zc(e,t,n){let r=Y(Kc(Vc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Qc(e,t){let n=[],r=new Map;t=Cs(Xc,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=el(e);s.aliasOf=r&&r.record;let l=Cs(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(el(Y({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=Zc(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!nl(d)&&o(e.name)),ol(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:xs}function o(e){if(gc(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=il(e,n);n.splice(t,0,e),e.record.name&&!nl(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw vc(X.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=Y($c(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&$c(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw vc(X.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=Y({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:rl(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function $c(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function el(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:tl(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function tl(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function nl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function rl(e){return e.reduce((e,t)=>Y(e,t.meta),{})}function il(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Jc(e,t[i])<0?r=i:n=i+1}let i=al(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function al(e){let t=e;for(;t=t.parent;)if(ol(t)&&Jc(e,t)===0)return t}function ol({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function sl(e){let t=En(Tc),n=En(Ec),r=J(()=>{let n=Vt(e.to);return t.resolve(n)}),i=J(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Zs.bind(null,i));if(o>-1)return o;let s=fl(e[t-2]);return t>1&&fl(i)===s&&a[a.length-1].path!==s?a.findIndex(Zs.bind(null,e[t-2])):o}),a=J(()=>i.value>-1&&dl(n.params,r.value.params)),o=J(()=>i.value>-1&&i.value===n.matched.length-1&&Qs(n.params,r.value.params));function s(n={}){if(ul(n)){let n=t[Vt(e.replace)?`replace`:`push`](Vt(e.to)).catch(xs);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:J(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function cl(e){return e.length===1?e[0]:e}var ll=sr({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:sl,setup(e,{slots:t}){let n=Ot(sl(e)),{options:r}=En(Tc),i=J(()=>({[pl(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[pl(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&cl(t.default(n));return e.custom?r:Ba(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function ul(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function dl(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Ss(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function fl(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var pl=(e,t,n)=>e??t??n,ml=sr({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=En(Dc),i=J(()=>e.route||r.value),a=En(wc,0),o=J(()=>{let e=Vt(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=J(()=>i.value.matched[o.value]);Tn(wc,J(()=>o.value+1)),Tn(Cc,s),Tn(Dc,i);let c=B();return kn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!Zs(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return hl(n.default,{Component:l,route:r});let u=o.props[a],d=Ba(l,Y({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return hl(n.default,{Component:d,route:r})||d}}});function hl(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var gl=ml;function _l(e){let t=Qc(e.routes,e),n=e.parseQuery||bc,r=e.stringifyQuery||xc,i=e.history,a=Oc(),o=Oc(),s=Oc(),c=Rt(nc),l=nc;_s&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=bs.bind(null,e=>``+e),d=bs.bind(null,Us),f=bs.bind(null,Ws);function p(e,n){let r,i;return gc(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=Y({},a||c.value),typeof e==`string`){let r=qs(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return Y(r,o,{params:f(o.params),hash:Ws(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=Y({},e,{path:qs(n,e.path,a.path).path});else{let t=Y({},e.params);for(let e in t)t[e]??delete t[e];o=Y({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Js(r,Y({},e,{hash:zs(l),path:s.path})),m=i.createHref(p);return Y({fullPath:p,hash:l,query:r===xc?Sc(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?qs(n,e,c.value.path):Y({},e)}function y(e,t){if(l!==e)return vc(X.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(Y(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),Y({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(Y(v(u),{state:typeof u==`object`?Y({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Xs(r,i,n)&&(f=vc(X.NAVIGATION_DUPLICATED,{to:d,from:i}),ce(i,i,!0,!1)),(f?Promise.resolve(f):ee(d,i)).catch(e=>yc(e)?yc(e,X.NAVIGATION_GUARD_REDIRECT)?e:se(e):oe(e,d,i)).then(e=>{if(e){if(yc(e,X.NAVIGATION_GUARD_REDIRECT))return C(Y({replace:s},v(e.to),{state:typeof e.to==`object`?Y({},a,e.to.state):a,force:o}),t||d)}else e=te(d,i,!0,s,a);return E(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=A.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ee(e,t){let n,[r,i,s]=jc(e,t);n=Ac(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(kc(r,e,t))});let c=w.bind(null,e,t);return n.push(c),de(n).then(()=>{n=[];for(let r of a.list())n.push(kc(r,e,t));return n.push(c),de(n)}).then(()=>{n=Ac(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(kc(r,e,t))});return n.push(c),de(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(Ss(r.beforeEnter))for(let i of r.beforeEnter)n.push(kc(i,e,t));else n.push(kc(r.beforeEnter,e,t))}return n.push(c),de(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Ac(s,`beforeRouteEnter`,e,t,T),n.push(c),de(n))).then(()=>{n=[];for(let r of o.list())n.push(kc(r,e,t));return n.push(c),de(n)}).catch(e=>yc(e,X.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function E(e,t,n){s.list().forEach(r=>T(()=>r(e,t,n)))}function te(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===nc,l=_s?history.state:{};n&&(r||s?i.replace(e.fullPath,Y({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,ce(e,t,n,s),se()}let D;function ne(){D||=i.listen((e,t,n)=>{if(!ue.listening)return;let r=_(e),a=S(r,ue.currentRoute.value);if(a){C(Y(a,{replace:!0,force:!0}),r).catch(xs);return}l=r;let o=c.value;_s&&pc(dc(o.fullPath,n.delta),lc()),ee(r,o).catch(e=>yc(e,X.NAVIGATION_ABORTED|X.NAVIGATION_CANCELLED)?e:yc(e,X.NAVIGATION_GUARD_REDIRECT)?(C(Y(v(e.to),{force:!0}),r).then(e=>{yc(e,X.NAVIGATION_ABORTED|X.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===rc.pop&&i.go(-1,!1)}).catch(xs),Promise.reject()):(n.delta&&i.go(-n.delta,!1),oe(e,r,o))).then(e=>{e||=te(r,o,!1),e&&(n.delta&&!yc(e,X.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===rc.pop&&yc(e,X.NAVIGATION_ABORTED|X.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),E(r,o,e)}).catch(xs)})}let re=Oc(),ie=Oc(),ae;function oe(e,t,n){se(e);let r=ie.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function O(){return ae&&c.value!==nc?Promise.resolve():new Promise((e,t)=>{re.add([e,t])})}function se(e){return ae||(ae=!e,ne(),re.list().forEach(([t,n])=>e?n(e):t()),re.reset()),e}function ce(t,n,r,i){let{scrollBehavior:a}=e;if(!_s||!a)return Promise.resolve();let o=!r&&mc(dc(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return un().then(()=>a(t,n,o)).then(e=>e&&uc(e)).catch(e=>oe(e,t,n))}let le=e=>i.go(e),k,A=new Set,ue={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ie.add,isReady:O,install(e){e.component(`RouterLink`,ll),e.component(`RouterView`,gl),e.config.globalProperties.$router=ue,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Vt(c)}),_s&&!k&&c.value===nc&&(k=!0,b(i.location).catch(e=>{}));let t={};for(let e in nc)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Tc,ue),e.provide(Ec,kt(t)),e.provide(Dc,c);let n=e.unmount;A.add(e),e.unmount=function(){A.delete(e),A.size<1&&(l=nc,D&&D(),D=null,c.value=nc,k=!1,ae=!1),n()}}};function de(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return ue}function vl(){return En(Tc)}function yl(e){return En(Ec)}var bl={__name:`App`,setup(e){let t=vl(),n=B(!0);return t.isReady().then(()=>{setTimeout(()=>{n.value=!1},100)}),(e,t)=>{let r=jr(`router-view`);return U(),aa(r,null,{default:Sn(({Component:e,route:t})=>[K(to,{name:n.value?``:`page`,mode:`out-in`},{default:Sn(()=>[(U(),aa(Nr(e),{key:t.meta.pageKey??t.path}))]),_:2},1032,[`name`])]),_:1})}}},xl=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Sl={},Cl={"aria-labelledby":`kitsudo-announcement`,class:`mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8`};function wl(e,t){return U(),W(`aside`,Cl,[...t[0]||=[G(`div`,{class:`announcement-card`},[G(`div`,{class:`app-icon relative h-12 w-12 shrink-0 sm:h-14 sm:w-14`,role:`img`,"aria-label":`Kitsudo app icon`},[G(`div`,{class:`relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 drop-shadow-[0_4px_2px_rgba(0,0,0,0.35)]`,role:`img`,"aria-label":`Kitsudo app icon`},[G(`svg`,{viewBox:`0 0 100 100`,class:`absolute inset-0 w-full h-full`,"aria-hidden":`true`},[G(`defs`,null,[G(`filter`,{id:`kitsudoIconBevel`,x:`-20%`,y:`-20%`,width:`140%`,height:`140%`},[G(`feOffset`,{in:`SourceAlpha`,dx:`0`,dy:`1.5`,result:`downA`}),G(`feGaussianBlur`,{in:`downA`,stdDeviation:`0.8`,result:`downB`}),G(`feComposite`,{in:`SourceAlpha`,in2:`downB`,operator:`out`,result:`topEdge`}),G(`feFlood`,{"flood-color":`#ffffff`,"flood-opacity":`0.2`}),G(`feComposite`,{in2:`topEdge`,operator:`in`,result:`topShine`}),G(`feOffset`,{in:`SourceAlpha`,dx:`0`,dy:`-1.5`,result:`upA`}),G(`feGaussianBlur`,{in:`upA`,stdDeviation:`1.2`,result:`upB`}),G(`feComposite`,{in:`SourceAlpha`,in2:`upB`,operator:`out`,result:`bottomEdge`}),G(`feFlood`,{"flood-color":`#000000`,"flood-opacity":`0.35`}),G(`feComposite`,{in2:`bottomEdge`,operator:`in`,result:`bottomShade`}),G(`feMerge`,null,[G(`feMergeNode`,{in:`SourceGraphic`}),G(`feMergeNode`,{in:`topShine`}),G(`feMergeNode`,{in:`bottomShade`})])])]),G(`path`,{d:`M50,0 C13,0 0,13 0,50 C0,87 13,100 50,100 C87,100 100,87 100,50 C100,13 87,0 50,0 Z`,fill:`#24284b`,filter:`url(#kitsudoIconBevel)`})]),G(`img`,{src:`/kitsudo/logo.svg`,alt:``,class:`absolute inset-[8%] w-auto h-auto object-contain`})])]),G(`div`,{class:`min-w-[180px] flex-1`},[G(`h2`,{id:`kitsudo-announcement`,class:`mb-0.5 text-sm font-bold text-catppuccin-text sm:text-base`},` Kitsudo is now available on Google Play. `),G(`p`,{class:`hidden text-catppuccin-gray sm:block sm:text-xs`},` Free, open-source, and built without ads or tracking. `)]),G(`div`,{class:`flex w-full gap-2 sm:w-auto`},[G(`a`,{href:`https://kitsudo.app`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`View Kitsudo on the web (opens in a new tab)`,class:`announcement-button announcement-secondary flex-1 sm:flex-none`},` [ More info ] `),G(`a`,{href:`https://play.google.com/store/apps/details?id=dev.heckr.kitsudo`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`View Kitsudo on Google Play (opens in a new tab)`,class:`announcement-button announcement-primary flex-1 sm:flex-none`},` [ Google Play ] `)])],-1)]])}var Tl=xl(Sl,[[`render`,wl],[`__scopeId`,`data-v-9869513c`]]),El={mauve:`#cba6f7`,blue:`#89b4fa`,green:`#a6e3a1`,red:`#f38ba8`,pink:`#f5c2e7`,yellow:`#f9e2af`,teal:`#94e2d5`,sapphire:`#74c7ec`,sky:`#89dceb`,lavender:`#b4befe`,peach:`#fab387`,white:`#cdd6f4`},Dl=[{id:`posts`,label:`posts`,href:`/posts`,external:!1,accentColor:`mauve`},{id:`projects`,label:`projects`,href:`/projects`,external:!1,accentColor:`lavender`},{id:`github`,label:`github`,href:`https://github.com/Hecker-01`,external:!0,accentColor:`white`},{id:`discord`,label:`discord`,href:`https://discord.gg/bitzen`,external:!0,accentColor:`blue`}];function Ol(){return Dl.map(e=>({...e,accentColor:El[e.accentColor]||El.mauve}))}var kl=Ot({discordUser:null,spotify:null,discordStatus:`offline`,discordStatusColor:`text-catppuccin-subtle`,editorActivity:null,isConnected:!1,isLoading:!0});new class{constructor(){this.ws=null,this.heartbeat=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.maxAttempts=5,this.userId=`766897363050037248`,this.isConnecting=!1}connect(){if(!(this.isConnecting||this.ws&&this.ws.readyState===WebSocket.OPEN)){this.isConnecting=!0,kl.isLoading=!0;try{this.ws=new WebSocket(`wss://api.lanyard.rest/socket`),this.ws.onopen=()=>{this.isConnecting=!1,this.reconnectAttempts=0,kl.isConnected=!0,this.ws.send(JSON.stringify({op:2,d:{subscribe_to_id:this.userId}}))},this.ws.onmessage=e=>{try{this.handleMessage(JSON.parse(e.data))}catch{}},this.ws.onclose=e=>{this.isConnecting=!1,kl.isConnected=!1,this.heartbeat&&=(clearInterval(this.heartbeat),null),e.code!==1e3&&this.reconnectAttempts<this.maxAttempts&&this.scheduleReconnect()},this.ws.onerror=()=>{this.isConnecting=!1,kl.isConnected=!1}}catch{this.isConnecting=!1,kl.isLoading=!1,this.scheduleReconnect()}}}handleMessage(e){e.op===1?this.startHeartbeat(e.d.heartbeat_interval):e.op===0&&(e.t===`INIT_STATE`||e.t===`PRESENCE_UPDATE`)&&(this.updatePresence(e.d),kl.isLoading=!1)}updatePresence(e){e.discord_user&&(kl.discordUser={username:e.discord_user.username,discriminator:e.discord_user.discriminator,avatar:e.discord_user.avatar,id:e.discord_user.id}),kl.spotify=e.spotify?{song:e.spotify.song,artist:e.spotify.artist,track_id:e.spotify.track_id}:null,e.discord_status&&(kl.discordStatus=e.discord_status,kl.discordStatusColor=e.discord_status===`online`?`text-catppuccin-gold`:`text-catppuccin-subtle`),kl.editorActivity=e.activities?.find(e=>e.name===`Visual Studio Code`||e.name===`Code`||e.name===`Zed`)}startHeartbeat(e){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({op:3}))},e)}scheduleReconnect(){this.reconnectTimeout&&clearTimeout(this.reconnectTimeout),this.reconnectAttempts++;let e=Math.min(1e3*2**(this.reconnectAttempts-1),3e4);this.reconnectTimeout=setTimeout(()=>this.connect(),e)}disconnect(){this.reconnectTimeout&&=(clearTimeout(this.reconnectTimeout),null),this.heartbeat&&=(clearInterval(this.heartbeat),null),this.ws&&=(this.ws.close(1e3,`Manual disconnect`),null),kl.isConnected=!1}}().connect();var Al=`hecker-01`,jl=`${Al}/heckr.dev`,Ml=12,Nl=9e5,Pl=1e4,Fl=null,Il=0,Ll=null,Rl=null,zl=0,Bl=null,Vl=null,Hl=0,Ul=null,Wl=async(e,{rateLimitMessage:t}={})=>{let n=new AbortController,r=setTimeout(()=>n.abort(),Pl);try{let r=await fetch(e,{signal:n.signal});if(!r.ok)throw r.status===403&&t?Error(t):Error(`Request failed (${r.status}).`);return await r.json()}catch(e){throw e.name===`AbortError`?Error(`The request timed out.`):e}finally{clearTimeout(r)}},Gl=e=>e instanceof Error?e.message:`The data service is unavailable.`,Kl=()=>Fl&&Date.now()-Il<Nl?Promise.resolve(Fl):Ll||(Ll=(async()=>{try{let e=[],t=1;for(;;){let n=await Wl(`https://api.github.com/users/${Al}/repos?per_page=100&page=${t}`,{rateLimitMessage:`GitHub API rate limit reached.`});if(!Array.isArray(n))throw Error(`GitHub returned an unexpected response.`);if(!n.length||(e.push(...n),n.length<100))break;t++}let n={};e.forEach(e=>{e.language&&(n[e.language]=(n[e.language]||0)+1)});let r={repos:e,languages:Object.entries(n).sort((e,t)=>t[1]-e[1]).map(([e,t])=>({language:e,count:t})),totalRepos:e.length};return Fl=r,Il=Date.now(),r}catch(e){let t=`Could not refresh GitHub data: ${Gl(e)}`;return Fl?{...Fl,error:`Showing cached GitHub data. ${t}`}:{repos:[],languages:[],totalRepos:0,error:t}}finally{Ll=null}})(),Ll),ql=async()=>{let e=new Date,t=await Wl(`https://github-contributions-api.jogruber.de/v4/${Al}?y=last`);if(!Array.isArray(t.contributions))throw Error(`The contribution service returned unexpected data.`);let n=new Map(t.contributions.map(({date:e,count:t})=>[e,t])),r=new Date(e.getFullYear(),e.getMonth(),e.getDate());return r.setDate(r.getDate()-r.getDay()-364),Array.from({length:371},(e,t)=>{let i=new Date(r);i.setDate(i.getDate()+t);let a=[i.getFullYear(),String(i.getMonth()+1).padStart(2,`0`),String(i.getDate()).padStart(2,`0`)].join(`-`);return{date:a,count:n.get(a)||0}})},Jl=()=>Rl&&Date.now()-zl<Nl?Promise.resolve({contributions:Rl,error:null}):Bl||(Bl=(async()=>{try{let e=await ql();return Rl=e,zl=Date.now(),{contributions:e,error:null}}catch(e){let t=`Could not refresh contribution data: ${Gl(e)}`;return{contributions:Rl||[],error:t}}finally{Bl=null}})(),Bl),Yl=()=>Vl&&Date.now()-Hl<Nl?Promise.resolve({commits:Vl,error:null}):Ul||(Ul=(async()=>{try{let e=await Wl(`https://api.github.com/repos/${jl}/commits?per_page=${Ml}`,{rateLimitMessage:`GitHub API rate limit reached.`});if(!Array.isArray(e))throw Error(`GitHub returned an unexpected commit response.`);let t=e.map(({sha:e,html_url:t,commit:n,parents:r})=>({sha:e,message:n?.message?.split(`
`,1)[0]||`(no commit message)`,url:t,parents:Array.isArray(r)?r.map(({sha:e})=>e).filter(Boolean):[]}));return Vl=t,Hl=Date.now(),{commits:t,error:null}}catch(e){let t=`Could not refresh Git history: ${Gl(e)}`;return{commits:Vl||[],error:t}}finally{Ul=null}})(),Ul),Xl=e=>e===0?0:e<=2?1:e<=5?2:e<=8?3:4,Zl=e=>`https://github.com/${Al}?tab=overview&from=${e}&to=${e}`,Ql,$l=!0,eu=!1,tu=({x:e,y:t})=>{document.dispatchEvent(new MouseEvent(`mousemove`,{bubbles:!0,clientX:e,clientY:t}))},nu=()=>{let e=document.getElementById(`oneko`);return!!(e&&e.style.display!==`none`)},ru=(e={})=>{let t={x:Number.isFinite(e.x)?e.x:window.innerWidth/2,y:Number.isFinite(e.y)?e.y:window.innerHeight/2},n=document.getElementById(`oneko`);return n?n.style.display===`none`?window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches?Promise.resolve(!1):(window.heckrOneko?.show(),n.style.display=``,tu(t),Promise.resolve(!0)):(window.heckrOneko?.hide(),n.style.display=`none`,Promise.resolve(!1)):window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches?Promise.resolve(!1):Ql?($l=!$l,Ql):(eu||=(document.addEventListener(`pointermove`,e=>{e.pointerType!==`mouse`&&tu({x:e.clientX,y:e.clientY})}),!0),$l=!0,Ql=new Promise(e=>{let n=document.createElement(`script`);n.src=`/oneko/oneko.js`,n.dataset.cat=`/oneko/oneko.gif`,n.dataset.persistPosition=`false`,n.async=!0,n.onload=()=>{let r=document.getElementById(`oneko`),i=!!r;i&&$l?tu(t):r?(window.heckrOneko?.hide(),r.style.display=`none`):(n.remove(),Ql=void 0),e(i&&$l)},n.onerror=()=>{n.remove(),Ql=void 0,e(!1)},document.body.appendChild(n)}),Ql)},iu=()=>{console.log(`%cWelcome to heckr.dev`,`font-size: 20px; font-weight: bold; color: #cba6f7;`),console.log(`%cWelcome to the dev console, here are some commands to try:`,`font-size: 14px; color: #a6adc8;`),console.log(`%c- help() - show available commands
- about() - learn more about me
- skills() - view my tech stack
- contact() - get my contact info`,`font-size: 12px; color: #6c7086;`),window.help=()=>{console.log(`%cAvailable commands:`,`font-size: 16px; font-weight: bold; color: #cba6f7;`),console.log(`%c- help() - show this message
- about() - about the developer
- skills() - technical skills
- contact() - contact information
- secret() - get a hint about the hidden interactions
`,`font-size: 12px; color: #a6adc8;`)},window.about=()=>{console.log(`%cAbout me`,`font-size: 16px; font-weight: bold; color: #cba6f7;`),console.log(`%cA passionate developer who loves building cool things with code!
Check out my projects and posts on the site.`,`font-size: 12px; color: #a6adc8;`)},window.skills=async()=>{console.log(`%cTech stack`,`font-size: 16px; font-weight: bold; color: #cba6f7;`),console.log(`%cFetching...`,`font-size: 12px; color: #6c7086;`);try{let{languages:e,totalRepos:t}=await Kl();e.length>0?(console.log(`%cTop languages from `+t+` repositories found:`,`font-size: 14px; font-weight: bold; color: #a6adc8;`),e.slice(0,10).forEach(({language:e,count:t},n)=>{console.log(`%c${n+1}. ${e}: ${t} repos`,`font-size: 12px; color: #a6adc8;`)})):console.log(`%cUnable to fetch data, please try again later.`,`font-size: 12px; color: #f38ba8;`)}catch{console.log(`%cError loading data, please try again later.`,`font-size: 12px; color: #f38ba8;`)}},window.contact=()=>{console.log(`%cContact info`,`font-size: 16px; font-weight: bold; color: #cba6f7;`),console.log(`%cGitHub: https://github.com/hecker-01
Feel free to reach out!`,`font-size: 12px; color: #a6adc8;`)},window.secret=()=>{console.log(`%cYou found the secret command`,`font-size: 18px; font-weight: bold; color: #f9e2af;`),console.log(`%cClick the ASCII art for Oneko, or the git log heading for the commit tree.`,`font-size: 12px; color: #fab387;`)}},au={class:`border-l-2 border-catppuccin-surface pl-4 mb-4`},ou={class:`flex gap-4 sm:gap-6 text-sm bg-catppuccin-surface/10 rounded-lg p-4 items-center`},su={class:`hidden sm:block flex-shrink-0 ascii-tooltip-wrapper`},cu=[`aria-label`,`aria-pressed`],lu={class:`space-y-0.5 min-w-0 flex-1`},uu={key:0,class:`flex`},du={class:`text-catppuccin-text truncate`},fu={key:1,class:`flex`},pu={class:`text-catppuccin-text`},mu={key:2,class:`flex`},hu={class:`text-catppuccin-text truncate`},gu={key:3,class:`flex`},_u={class:`text-catppuccin-mauve font-bold w-20 flex-shrink-0`},vu={class:`text-catppuccin-text truncate`},yu={key:0},bu={key:1,class:`text-catppuccin-subtle`},xu={key:2},Su=xl({__name:`NeofetchStatus`,setup(e){let t=J(()=>kl.discordStatusColor),n=J(()=>kl.spotify),r=J(()=>kl.discordStatus),i=J(()=>kl.discordUser),a=J(()=>kl.editorActivity),o=J(()=>kl.isLoading),s=B({name:``,version:``}),c=B(!1);async function l(e){c.value=await ru(e)}function u(e){l({x:e.clientX,y:e.clientY})}function d(e){if(![`Enter`,` `,`Spacebar`].includes(e.key))return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();l({x:t.left+t.width/2,y:t.top+t.height/2})}xr(()=>{c.value=nu();let e=navigator.userAgent,t=`Unknown`,n=``;e.includes(`Firefox/`)?(t=`Firefox`,n=e.match(/Firefox\/(\d+(\.\d+)?)/)?.[1]||``):e.includes(`Edg/`)?(t=`Edge`,n=e.match(/Edg\/(\d+(\.\d+)?)/)?.[1]||``):e.includes(`Chrome/`)?(t=`Chrome`,n=e.match(/Chrome\/(\d+(\.\d+)?)/)?.[1]||``):e.includes(`Safari/`)&&!e.includes(`Chrome`)?(t=`Safari`,n=e.match(/Version\/(\d+(\.\d+)?)/)?.[1]||``):(e.includes(`Opera`)||e.includes(`OPR/`))&&(t=`Opera`,n=e.match(/(?:Opera|OPR)\/(\d+(\.\d+)?)/)?.[1]||``),s.value={name:t,version:n}});let f=`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠚⠛⢻⠀⠀⠀⠀⠀⠀⠀
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
`),p=J(()=>{if(!a.value)return null;if(a.value.details&&a.value.details.toLowerCase().includes(`idling`))return`idling`;let e=a.value.name,t=e===`Zed`,n=e===`IntelliJ IDEA Ultimate`||e===`IntelliJ IDEA`||e===`Android Studio`,r=``,i=``;return n?(r=a.value.details||``,i=a.value.state||``):t?(r=a.value.state||``,i=a.value.details||``):(r=a.value.details||``,i=a.value.state||``),r=r.replace(/editing /i,``).replace(/working on /i,``).trim(),i=i.replace(/in /i,``).replace(/workspace: /i,``).trim(),{name:e,workspace:i,filename:r}}),m=J(()=>{if(!p.value||p.value===`idling`)return null;let e=p.value.name;return e===`Zed`?`zed`:e===`IntelliJ IDEA Ultimate`||e===`IntelliJ IDEA`?`intellij`:e===`Android Studio`?`android-studio`:`vscode`});return(e,l)=>(U(),W(`div`,au,[l[10]||=G(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},` ~$ neofetch --live `,-1),G(`div`,ou,[G(`div`,su,[G(`pre`,{class:`text-catppuccin-mauve text-xs select-none ascii-art cursor-pointer`,role:`button`,tabindex:`0`,"aria-label":c.value?`Hide Oneko`:`Start Oneko`,"aria-pressed":c.value,onClick:u,onKeydown:d},[(U(!0),W(H,null,V(Vt(f),(e,t)=>(U(),W(H,{key:t},[pa(M(e)+`
`,1)],64))),128))],40,cu),l[0]||=G(`span`,{class:`ascii-tooltip`},[pa(`Art by `),G(`a`,{href:`https://www.instagram.com/vilthuril.rah/`,target:`_blank`,rel:`noopener noreferrer`,class:`ascii-tooltip-link`},`@vilthuril.rah`),pa(` on Instagram`)],-1)]),G(`div`,lu,[l[8]||=ma(`<div class="mb-1" data-v-c11a7bd4><span class="text-catppuccin-mauve font-bold" data-v-c11a7bd4>bitz</span><span class="text-catppuccin-blue font-bold" data-v-c11a7bd4>OS</span><span class="text-catppuccin-subtle" data-v-c11a7bd4> (v0.1.4)</span></div><div class="text-catppuccin-surface mb-2" data-v-c11a7bd4> ------------------ </div>`,2),s.value.name?(U(),W(`div`,uu,[l[1]||=G(`span`,{class:`text-catppuccin-mauve font-bold w-20 flex-shrink-0`},`browser`,-1),l[2]||=G(`span`,{class:`text-catppuccin-subtle mr-1`},`-`,-1),G(`span`,du,M(s.value.name)+` `+M(s.value.version),1)])):q(``,!0),!o.value&&i.value?(U(),W(`div`,fu,[l[3]||=G(`span`,{class:`text-catppuccin-mauve font-bold w-20 flex-shrink-0`},`discord`,-1),l[4]||=G(`span`,{class:`text-catppuccin-subtle mr-1`},`-`,-1),G(`span`,pu,M(i.value.username),1),G(`span`,{class:j([t.value,`ml-1`])},`[`+M(r.value)+`]`,3)])):q(``,!0),!o.value&&n.value?(U(),W(`div`,mu,[l[5]||=G(`span`,{class:`text-catppuccin-mauve font-bold w-20 flex-shrink-0`},`spotify`,-1),l[6]||=G(`span`,{class:`text-catppuccin-subtle mr-1`},`-`,-1),G(`span`,hu,M(n.value.song)+` - `+M(n.value.artist),1)])):q(``,!0),!o.value&&a.value&&p.value&&p.value!==`idling`&&(p.value.workspace||p.value.filename)?(U(),W(`div`,gu,[G(`span`,_u,M(m.value),1),l[7]||=G(`span`,{class:`text-catppuccin-subtle mr-1`},`-`,-1),G(`span`,vu,[p.value.workspace?(U(),W(`span`,yu,M(p.value.workspace.toLowerCase()),1)):q(``,!0),p.value.workspace&&p.value.filename?(U(),W(`span`,bu,`/`)):q(``,!0),p.value.filename?(U(),W(`span`,xu,M(p.value.filename.toLowerCase()),1)):q(``,!0)])])):q(``,!0),l[9]||=ma(`<div class="text-catppuccin-surface mb-2" data-v-c11a7bd4> ------------------ </div><div class="flex gap-0.5 mt-3" data-v-c11a7bd4><span class="w-4 h-4 rounded-sm bg-catppuccin-red" data-v-c11a7bd4></span><span class="w-4 h-4 rounded-sm bg-catppuccin-peach" data-v-c11a7bd4></span><span class="w-4 h-4 rounded-sm bg-catppuccin-yellow" data-v-c11a7bd4></span><span class="w-4 h-4 rounded-sm bg-catppuccin-green" data-v-c11a7bd4></span><span class="w-4 h-4 rounded-sm bg-catppuccin-teal" data-v-c11a7bd4></span><span class="w-4 h-4 rounded-sm bg-catppuccin-blue" data-v-c11a7bd4></span><span class="w-4 h-4 rounded-sm bg-catppuccin-mauve" data-v-c11a7bd4></span><span class="w-4 h-4 rounded-sm bg-catppuccin-pink" data-v-c11a7bd4></span></div>`,2)])])]))}},[[`__scopeId`,`data-v-c11a7bd4`]]),Cu={class:`mb-6`},wu={class:`mb-6`},Tu={class:`text-sm text-catppuccin-gray 6`},Eu=[`aria-expanded`],Du=[`aria-label`],Ou=[`href`],ku={class:`flex items-center flex-wrap gap-3 text-sm mt-4`},Au=[`href`],ju=xl({__name:`HeroSection`,setup(e){let t=Ol(),n=[{name:`hecker-01`,descriptionBefore:`My GitHub username is `,descriptionAfter:`.`,href:`https://github.com/hecker-01`,linkLabel:`@hecker-01`},{name:`BitzenTheFox`,descriptionBefore:`My fursona name is `,descriptionAfter:`.`,href:`https://goober.zip`,linkLabel:`BitzenTheFox`}],r=B(0),i=B(!1),a=B(!1),o;function s(){o!==void 0||i.value||a.value||(o=window.setInterval(()=>{r.value=(r.value+1)%n.length},2800))}function c(){window.clearInterval(o),o=void 0}function l(){!i.value&&!a.value&&s()}function u(){r.value=(r.value+1)%n.length}function d(){i.value=!0,c()}function f(){i.value=!1,l()}function p(){a.value=!0,c()}function m(e){e.currentTarget.contains(e.relatedTarget)||(a.value=!1,l())}return xr(s),Tr(()=>{window.clearInterval(o)}),(e,o)=>{let s=jr(`router-link`);return U(),W(`div`,Cu,[G(`div`,wu,[o[5]||=ma(`<div class="text-catppuccin-subtle text-sm mb-2" data-v-b07d5777>~$ whoami</div><h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2" data-v-b07d5777><span class="text-catppuccin-mauve" data-v-b07d5777>jesse</span><span class="text-catppuccin-subtle" data-v-b07d5777>@</span><span class="text-catppuccin-blue" data-v-b07d5777>heckr.dev</span></h1>`,2),G(`div`,Tu,[o[1]||=G(`span`,{class:`text-catppuccin-subtle`},`aka `,-1),G(`span`,{class:`relative inline-flex`,onMouseenter:d,onMouseleave:f,onFocusin:p,onFocusout:m},[G(`button`,{type:`button`,class:`cursor-pointer appearance-none border-0 bg-transparent p-0 rounded-sm text-catppuccin-green focus-visible:outline focus-visible:outline-1 focus-visible:outline-catppuccin-green focus-visible:outline-offset-2`,onClick:u,"aria-expanded":i.value||a.value,"aria-controls":`alias-source-popover`},[K(to,{name:`alias-fade`,mode:`out-in`},{default:Sn(()=>[(U(),W(`span`,{key:r.value},M(n[r.value].name),1))]),_:1})],8,Eu),K(to,{name:`alias-tooltip-fade`},{default:Sn(()=>[i.value||a.value?(U(),W(`span`,{key:0,id:`alias-source-popover`,role:`group`,"aria-label":`Source information for ${n[r.value].name}`,class:`alias-tooltip absolute top-full z-20 -mt-0.5`},[G(`span`,null,M(n[r.value].descriptionBefore),1),G(`a`,{href:n[r.value].href,target:`_blank`,rel:`noopener noreferrer`,class:`alias-tooltip-link`},[pa(M(n[r.value].linkLabel),1),o[0]||=G(`span`,{class:`sr-only`},` (opens in a new tab) `,-1)],8,Ou),G(`span`,null,M(n[r.value].descriptionAfter),1)],8,Du)):q(``,!0)]),_:1})],32)]),G(`div`,ku,[(U(!0),W(H,null,V(Vt(t),e=>(U(),W(H,{key:e.id},[e.external?(U(),W(`a`,{key:1,href:e.href,target:`_blank`,class:`px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group`,style:k({"--accent-color":e.accentColor})},[o[3]||=G(`span`,{class:`text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),G(`span`,{class:`font-medium transition-colors`,style:k({color:e.accentColor})},`~/`+M(e.label),5),o[4]||=G(`svg`,{class:`w-3 h-3 text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`},[G(`path`,{"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`2`,d:`M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`})],-1)],12,Au)):(U(),aa(s,{key:0,to:e.href,class:`px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group`,style:k({"--accent-color":e.accentColor})},{default:Sn(()=>[o[2]||=G(`span`,{class:`text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),G(`span`,{class:`font-medium transition-colors`,style:k({color:e.accentColor})},`~/`+M(e.label),5)]),_:2},1032,[`to`,`style`]))],64))),128))])]),o[6]||=G(`div`,{class:`border-l-2 border-catppuccin-surface pl-4 mb-4`},[G(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},` ~$ cat about.txt `),G(`p`,{class:`text-catppuccin-text leading-relaxed mb-4`},[pa(` Hi! I'm Jesse, a Dutch Software Development Student at Grafisch Lyceum Rotterdam. `),G(`br`),pa(` I code all sorts of tools and applications mainly for my own use, I also code plugins for Minecraft and Discord bots, my main goal is to have fun while doing so! `),G(`br`),pa(` My passion is Frontend development, but I also enjoy working on backend and mobile projects. `),G(`br`),pa(` I've got experience in a lot of different `),G(`a`,{href:`#languages`,class:`text-catppuccin-mauve underline hover:no-underline`},`programming languages`),pa(` and frameworks, and I love learning new ones! `)])],-1),K(Su)])}}},[[`__scopeId`,`data-v-b07d5777`]]),Mu={class:`border-l-2 border-catppuccin-surface pl-4 mb-4`},Nu={key:0,class:`text-sm text-catppuccin-subtle`,role:`status`},Pu={key:1,class:`grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-3 lg:grid-cols-4`,"aria-label":`Repositories by programming language`},Fu=[`href`,`aria-label`],Iu={class:`truncate`},Lu={class:`flex-shrink-0 text-catppuccin-subtle tabular-nums`},Ru={key:2,class:`text-sm text-catppuccin-subtle`,role:`status`},zu={__name:`LanguagesList`,props:{languages:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){let t=e=>`https://github.com/hecker-01?${new URLSearchParams({tab:`repositories`,q:``,type:``,language:e.toLowerCase(),sort:`stargazers`}).toString()}`;return(n,r)=>(U(),W(`div`,Mu,[r[0]||=G(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},`~$ ls ~/tools`,-1),e.loading?(U(),W(`div`,Nu,` loading languages... `)):e.languages.length?(U(),W(`ul`,Pu,[(U(!0),W(H,null,V(e.languages,e=>(U(),W(`li`,{key:e.language,class:`min-w-0`},[G(`a`,{href:t(e.language),target:`_blank`,rel:`noopener noreferrer`,"aria-label":`View ${e.count} ${e.language} ${e.count===1?`repository`:`repositories`} on GitHub`,class:`flex min-w-0 items-baseline gap-2 text-catppuccin-text transition-colors hover:text-catppuccin-mauve`},[G(`span`,Iu,M(e.language),1),G(`span`,Lu,` (`+M(e.count)+`) `,1)],8,Fu)]))),128))])):(U(),W(`div`,Ru,` no languages found `))]))}},Bu=`---
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
`,Vu=`---
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
`,Hu=`---
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
`,Uu=`---
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
`,Wu=`---
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
`,Gu=`---
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
`,Ku=`---
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
`,qu=e=>{let t=e.trim(),n=t[0];return n===`"`||n===`'`?t.at(-1)===n?t.slice(1,-1):null:t},Ju=(e,t,n)=>{if(!e.endsWith(`]`))throw Error(`${t}: invalid front matter on line ${n}: expected ']' to close the list`);let r=e.slice(1,-1).trim();if(!r)return[];let i=[],a=``,o=null;for(let e of r)o?(a+=e,e===o&&(o=null)):e===`"`||e===`'`?(o=e,a+=e):e===`,`?(i.push(qu(a)),a=``):a+=e;if(o)throw Error(`${t}: invalid front matter on line ${n}: unmatched quote in list`);return i.push(qu(a)),i},Yu=(e,t,n)=>{let r=e.trim();if(r.startsWith(`[`))return Ju(r,t,n);let i=r[0];if(i===`"`||i===`'`){let e=qu(r);if(e===null)throw Error(`${t}: invalid front matter on line ${n}: unmatched quote`);return e}if(r.endsWith(`"`)||r.endsWith(`'`))throw Error(`${t}: invalid front matter on line ${n}: unmatched quote`);return r===`true`||r!==`false`&&r},Xu=(e,t=`content`)=>{let n=e.match(/^---[ \t]*\r?\n/);if(!n)return{frontmatter:{},content:e};let r=n[0].length,i=/^(?:---)[ \t]*\r?$/m.exec(e.slice(r));if(!i)throw Error(`${t}: front matter opened on line 1 is missing its closing --- delimiter`);let a=e.slice(r,r+i.index),o=e.slice(r+i.index+i[0].length).replace(/^\r?\n/,``),s={},c=new Set,l=a.split(/\r?\n/),u=null,d=``,f=0,p=()=>{u!==null&&(s[u]=Yu(d,t,f))};for(let[e,n]of l.entries()){let r=e+2;if(!n.trim()||/^\s*#/.test(n))continue;let i=n.match(/^\s*([\w-]+):(?:[ \t]*(.*))?$/);if(i){p();let e=i[1];if(c.has(e))throw Error(`${t}: duplicate front matter key '${e}' on line ${r}`);u=e,d=i[2]??``,f=r,c.add(e);continue}if(/^\s+/.test(n)&&u){d+=`${d?` `:``}${n.trim()}`;continue}throw Error(`${t}: invalid front matter on line ${r}: expected a 'key: value' pair`)}return p(),{frontmatter:s,content:o}},Zu=(e,t,n=t)=>{let r=String(t).replace(/\\/g,`/`).split(`/`).at(-1).replace(/\.md$/i,``),i=e.slug===void 0||e.slug===``?r:e.slug;if(typeof i!=`string`||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(i))throw Error(`${n}: invalid slug '${i}': use lowercase letters, numbers, and single hyphens`);return i},Qu={mauve:`#cba6f7`,blue:`#89b4fa`,green:`#a6e3a1`,red:`#f38ba8`,pink:`#f5c2e7`,yellow:`#f9e2af`,teal:`#94e2d5`,sapphire:`#74c7ec`,sky:`#89dceb`,lavender:`#b4befe`,peach:`#fab387`,maroon:`#eba0ac`,flamingo:`#f2cdcd`},$u=Object.assign({"/projects/kitsudo.md":Bu,"/projects/mcbe-pack-decryptor.md":Vu,"/projects/pingr.md":Hu,"/projects/portfolio.md":Uu,"/projects/recodr.md":Wu,"/projects/satissuite.md":Gu,"/projects/wordr.md":Ku}),ed=()=>{let e=[],t=1;return Object.entries($u).forEach(([n,r])=>{let{frontmatter:i,content:a}=Xu(r,n),o=Zu(i,n,n);e.push({id:t++,slug:o,title:i.title||o,description:i.description||``,coverImage:i.coverImage||null,accentColor:i.accentColor||`mauve`,accentColorHex:Qu[i.accentColor]||Qu.mauve,tags:i.tags||[],url:i.url||null,github:i.github||null,status:i.status||`active`,unlisted:i.unlisted===!0,content:a.trim()})}),e},td=null,nd=(e=!1)=>(td||=ed(),(e?[...td]:td.filter(e=>!e.unlisted)).sort((e,t)=>e.title.localeCompare(t.title))),rd=e=>nd(!0).find(t=>t.slug===e),id=()=>{let e=new Set;return nd().forEach(t=>{t.tags.forEach(t=>e.add(t))}),Array.from(e).sort()};function ad(){return nd().map(e=>({id:e.id,slug:e.slug,name:e.title,description:e.description,link:e.url||e.github||`#`,screenshot:e.coverImage,accentColor:e.accentColorHex}))}var od={class:`border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full`},sd={key:0,class:`text-sm text-catppuccin-subtle`},cd={class:`lg:flex-1 lg:relative`},ld={key:0,class:`w-full flex-1 overflow-hidden bg-catppuccin-surface/30`},ud=[`src`,`alt`],dd={class:`px-3 py-3 flex-shrink-0`},fd={class:`flex items-start gap-3`},pd={class:`flex-1 min-w-0`},md={class:`text-xs text-catppuccin-gray leading-relaxed`},hd={key:0,class:`flex justify-center gap-1.5 mt-3 flex-shrink-0`},gd=[`onClick`],_d=xl({__name:`ShowcaseCarousel`,setup(e){let t=vl(),n=B([]),r=B(0),i=B(!1),a=null,o=J(()=>n.value.length?n.value[r.value]:null),s=e=>{if(e===`kitsudo`){t.push(`/kitsudo`);return}t.push({path:`/projects`,query:{project:e}})};return xr(()=>{n.value=ad(),n.value.length>1&&(a=setInterval(()=>{i.value||(r.value=(r.value+1)%n.value.length)},1e4))}),wr(()=>{a&&clearInterval(a)}),(e,a)=>(U(),W(`div`,od,[a[5]||=G(`div`,{class:`text-catppuccin-subtle text-sm mb-3`},`~$ cat ~/showcase`,-1),n.value.length?(U(),W(`div`,{key:1,class:`relative lg:flex-1 flex flex-col`,onMouseenter:a[2]||=e=>i.value=!0,onMouseleave:a[3]||=e=>i.value=!1},[G(`div`,cd,[K(to,{name:`showcase`,mode:`out-in`},{default:Sn(()=>[o.value?(U(),W(`div`,{key:o.value.id,onClick:a[0]||=e=>s(o.value.slug),class:`group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col cursor-pointer`,style:k({borderColor:`${o.value.accentColor}40`})},[o.value.screenshot?(U(),W(`div`,ld,[G(`img`,{src:o.value.screenshot,alt:o.value.name,class:`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`},null,8,ud)])):q(``,!0),G(`div`,dd,[G(`div`,fd,[G(`span`,{class:`transition-colors`,style:k({color:o.value.accentColor})},`>`,4),G(`div`,pd,[G(`h3`,{class:`text-sm font-medium text-catppuccin-text transition-colors mb-1`,style:k({color:o.value.accentColor})},M(o.value.name),5),G(`p`,md,M(o.value.description),1)])])])],4)):q(``,!0)]),_:1})]),n.value.length>1?(U(),W(`div`,hd,[(U(!0),W(H,null,V(n.value,(e,t)=>(U(),W(`button`,{key:`dot-${e.id}`,onClick:e=>r.value=t,class:j([`w-2 h-2.5 rounded-full transition-all`,t===r.value?`bg-catppuccin-mauve w-4`:`bg-catppuccin-surface/60 hover:bg-catppuccin-surface`]),style:k(t===r.value?{backgroundColor:o.value.accentColor}:{})},null,14,gd))),128))])):q(``,!0),G(`button`,{onClick:a[1]||=e=>Vt(t).push(`/projects`),class:`mt-3 w-full py-2 px-3 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-all flex items-center justify-center gap-2`},[...a[4]||=[G(`span`,null,`more projects`,-1),G(`span`,null,`→`,-1)]])],32)):(U(),W(`div`,sd,` no items to showcase `))]))}},[[`__scopeId`,`data-v-174afb7a`]]),vd={class:`mt-6 border-l-2 border-catppuccin-surface pl-4`},yd={class:`mb-3`},bd=[`aria-expanded`],xd=[`aria-busy`],Sd={key:0,class:`text-sm text-catppuccin-subtle`,role:`status`},Cd={key:1,class:`mb-2 text-sm text-catppuccin-yellow`,role:`status`},wd=[`disabled`],Td={key:2,class:`max-w-full overflow-hidden rounded-lg border border-catppuccin-surface/70 bg-catppuccin-crust/50`},Ed={class:`flex items-center justify-between gap-3 border-b border-catppuccin-surface/60 px-3 py-2 text-[11px]`},Dd={class:`flex-shrink-0 text-catppuccin-subtle`},Od={class:`py-1 font-mono text-xs`},kd={class:`relative mr-3 flex h-8 w-3 flex-shrink-0 items-center justify-center`,"aria-hidden":`true`},Ad={key:0,class:`absolute left-1/2 top-0 h-1/2 w-0.5 -translate-x-1/2 bg-catppuccin-subtle/60`},jd={key:1,class:`absolute bottom-0 left-1/2 h-1/2 w-0.5 -translate-x-1/2 bg-catppuccin-subtle/60`},Md=[`href`,`title`],Nd={class:`flex-shrink-0 text-catppuccin-mauve`},Pd={class:`min-w-0 truncate text-catppuccin-text transition-colors group-hover:text-catppuccin-mauve`},Fd=[`href`],Id={key:3,class:`text-sm text-catppuccin-subtle`,role:`status`},Ld={key:0},Rd={key:1,role:`status`,class:`text-sm text-catppuccin-yellow`},zd={key:0,class:`block mt-1 text-catppuccin-subtle`},Bd={key:2},Vd={class:`max-w-full overflow-x-auto pb-2 scrollbar-thin`},Hd=[`href`,`title`],Ud=[`title`],Wd={class:`mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-catppuccin-subtle`},Gd={class:`text-catppuccin-gray`},Kd={__name:`ContributionGraph`,setup(e){let t=B([]),n=B(!0),r=B(null),i=B(!1),a=B([]),o=B(!1),s=B(null),c=B(!1),l=[``,`Mon`,``,`Wed`,``,`Fri`,``],u=J(()=>a.value.map((e,t)=>{let n=a.value[t+1],r=a.value[t-1],i=!!(n&&e.parents.includes(n.sha));return{commit:e,connectsFromPrevious:!!(r&&r.parents.includes(e.sha)),connectsToNext:i,otherParents:e.parents.filter(e=>!i||e!==n.sha)}})),d=e=>`https://github.com/hecker-01/heckr.dev/commit/${e}`,f=async()=>{if(!o.value){o.value=!0,s.value=null;try{let e=await Yl();a.value=e.commits,s.value=e.error,c.value=!e.error}catch{s.value=`Git history is temporarily unavailable.`}finally{o.value=!1}}},p=()=>{i.value=!i.value,i.value&&!c.value&&f()},m=(()=>{let e=new Date;return[e.getFullYear(),String(e.getMonth()+1).padStart(2,`0`),String(e.getDate()).padStart(2,`0`)].join(`-`)})(),h=J(()=>{let e=[];for(let n=0;n<t.value.length;n+=7)e.push(t.value.slice(n,n+7).filter(e=>e.date<=m));return e}),g=J(()=>t.value.reduce((e,t)=>e+t.count,0)),_=J(()=>{if(!t.value.length)return[];let e={},n=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],r=-1;return h.value.forEach((t,i)=>{let a=t[0];if(a){let t=Number(a.date.slice(5,7))-1;t!==r&&((i>0||a.date.slice(8,10)===`01`)&&(e[i]=n[t]),r=t)}}),e}),v=async()=>{n.value=!0,r.value=null;try{let e=await Jl();t.value=e.contributions,r.value=e.error}catch{r.value=`Contribution data is temporarily unavailable.`}finally{n.value=!1}};return xr(()=>{v()}),(e,c)=>(U(),W(`div`,vd,[G(`div`,yd,[G(`button`,{type:`button`,class:`text-left text-catppuccin-subtle text-sm hover:text-catppuccin-text transition-colors`,"aria-expanded":i.value,"aria-controls":`recent-commit-tree`,onClick:p},` ~$ git log --oneline --since="1.year.ago" | wc -l `,8,bd)]),Cn(G(`section`,{id:`recent-commit-tree`,class:`mb-4`,"aria-label":`Recent Git commits`,"aria-busy":o.value},[o.value&&!a.value.length?(U(),W(`div`,Sd,` ~$ fetching commit history... `)):q(``,!0),s.value?(U(),W(`div`,Cd,[G(`span`,null,M(s.value),1),G(`button`,{type:`button`,class:`ml-3 underline hover:text-catppuccin-text`,disabled:o.value,onClick:f},` retry `,8,wd)])):q(``,!0),u.value.length?(U(),W(`div`,Td,[G(`div`,Ed,[c[0]||=G(`span`,{class:`min-w-0 truncate`},[G(`span`,{class:`rounded border border-catppuccin-green/30 bg-catppuccin-green/10 px-1.5 py-0.5 text-catppuccin-green`},`HEAD`),G(`span`,{class:`ml-2 text-catppuccin-text`},`recent history`)],-1),G(`span`,Dd,M(a.value.length)+` commits `,1)]),G(`ol`,Od,[(U(!0),W(H,null,V(u.value,(e,t)=>(U(),W(`li`,{key:e.commit.sha,class:`group relative flex min-h-8 items-center px-3 transition-colors hover:bg-catppuccin-surface/30`},[G(`span`,kd,[e.connectsFromPrevious?(U(),W(`span`,Ad)):q(``,!0),e.connectsToNext?(U(),W(`span`,jd)):q(``,!0),G(`span`,{class:j([`relative z-10 h-2.5 w-2.5 rounded-full border-2 border-catppuccin-green transition-colors`,t===0?`bg-catppuccin-green`:`bg-catppuccin-crust group-hover:bg-catppuccin-green`])},null,2)]),G(`a`,{href:e.commit.url,target:`_blank`,rel:`noopener noreferrer`,title:`${e.commit.sha.slice(0,7)} ${e.commit.message}`,class:`flex min-w-0 flex-1 items-center gap-3 leading-5`},[G(`span`,Nd,M(e.commit.sha.slice(0,7)),1),G(`span`,Pd,M(e.commit.message),1)],8,Md)]))),128)),(U(!0),W(H,null,V(u.value.filter(({otherParents:e})=>e.length),e=>(U(),W(`li`,{key:`${e.commit.sha}-parents`,class:`flex min-h-7 items-center gap-3 px-3 pl-6 font-mono text-[11px]`},[c[1]||=G(`span`,{class:`text-catppuccin-overlay`,"aria-hidden":`true`},`└─`,-1),(U(!0),W(H,null,V(e.otherParents,t=>(U(),W(`a`,{key:t,href:d(t),target:`_blank`,rel:`noopener noreferrer`,class:`text-catppuccin-subtle transition-colors hover:text-catppuccin-mauve`},M(t.slice(0,7))+` parent of `+M(e.commit.sha.slice(0,7)),9,Fd))),128))]))),128))])])):!o.value&&!s.value?(U(),W(`div`,Id,` No recent commits found. `)):q(``,!0)],8,xd),[[bo,i.value]]),n.value?(U(),W(`div`,Ld,[...c[2]||=[G(`div`,{class:`h-[60px] bg-catppuccin-surface/30 rounded cursor-blink`},null,-1)]])):r.value?(U(),W(`div`,Rd,[G(`span`,null,M(r.value),1),G(`button`,{type:`button`,class:`ml-3 underline hover:text-catppuccin-text`,onClick:v},` retry `),t.value.length?(U(),W(`span`,zd,` showing the last saved data `)):q(``,!0)])):(U(),W(`div`,Bd,[G(`div`,Vd,[G(`div`,{class:`grid w-full gap-[3px]`,style:k({minWidth:`${32+h.value.length*13}px`,gridTemplateColumns:`32px repeat(${h.value.length}, minmax(10px, 1fr))`})},[(U(!0),W(H,null,V(h.value,(e,t)=>Cn((U(),W(`span`,{key:`month-${t}`,class:`whitespace-nowrap text-[12px] leading-4 text-catppuccin-subtle`,style:k({gridColumn:t+2,gridRow:1})},M(_.value[t]),5)),[[bo,_.value[t]]])),128)),(U(),W(H,null,V(l,(e,t)=>G(`span`,{key:`weekday-${t}`,class:`self-center text-[12px] leading-[10px] text-catppuccin-subtle`,style:k({gridColumn:1,gridRow:t+2})},M(e),5)),64)),(U(!0),W(H,null,V(h.value,(e,t)=>(U(),W(H,{key:t},[(U(!0),W(H,null,V(e,(e,n)=>(U(),W(H,{key:e.date},[e.count>0?(U(),W(`a`,{key:0,href:Vt(Zl)(e.date),target:`_blank`,rel:`noopener noreferrer`,class:j([`aspect-square min-w-[10px] w-full rounded-[20%] transition-shadow duration-150 ease-out hover:ring-1 hover:ring-catppuccin-green cursor-pointer`,[Vt(Xl)(e.count)===1?`bg-catppuccin-green/30`:Vt(Xl)(e.count)===2?`bg-catppuccin-green/50`:Vt(Xl)(e.count)===3?`bg-catppuccin-green/70`:`bg-catppuccin-green`]]),style:k({gridColumn:t+2,gridRow:n+2}),title:`${e.date}: ${e.count} contributions - Click to view on GitHub`},null,14,Hd)):(U(),W(`div`,{key:1,class:`aspect-square min-w-[10px] w-full rounded-[20%] bg-catppuccin-surface/50`,style:k({gridColumn:t+2,gridRow:n+2}),title:`${e.date}: ${e.count} contributions`},null,12,Ud))],64))),128))],64))),128))],4)]),G(`div`,Wd,[G(`span`,Gd,M(g.value)+` contributions in the last year `,1),c[3]||=ma(`<div class="flex items-center gap-1 whitespace-nowrap"><span>Less</span><div class="flex gap-[1px]"><div class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green"></div></div><span>More</span></div>`,1)])]))]))}},qd={class:`w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400`},Jd={__name:`Footer`,setup(e){let t=new Date().getFullYear();return(e,n)=>(U(),W(`footer`,qd,[G(`p`,null,`© 2020 - `+M(Vt(t))+` heckr.dev | All rights reserved.`,1)]))}},Yd={class:`border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full`},Xd={class:`lg:flex-1 flex flex-col`},Zd={key:0,class:`space-y-2`},Qd={key:1,class:`text-sm text-catppuccin-subtle`},$d=[`href`],ef={class:`flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2`},tf={class:`flex-1 min-w-0`},nf={class:`flex items-center gap-2`},rf=[`title`],af={key:0,class:`text-catppuccin-yellow text-xs flex-shrink-0`},of=[`title`],sf={key:3,class:`text-sm text-catppuccin-subtle`},cf=xl({__name:`ReposList`,props:{repos:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){let t=e,n=J(()=>t.repos.length?[...t.repos].sort((e,t)=>t.stargazers_count-e.stargazers_count).slice(0,6):[]);return(t,r)=>(U(),W(`div`,Yd,[r[2]||=G(`div`,{class:`text-catppuccin-subtle text-sm mb-3`},` ~$ ls ~/repositories `,-1),G(`div`,Xd,[e.loading?(U(),W(`div`,Zd,[(U(),W(H,null,V(6,e=>G(`div`,{key:`repo-loading-${e}`,class:`rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3`},[...r[0]||=[ma(`<div class="flex items-start gap-3" data-v-5dddb934><span class="text-catppuccin-subtle" data-v-5dddb934>&gt;</span><div class="flex-1 min-w-0" data-v-5dddb934><div class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink" data-v-5dddb934></div><div class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink" data-v-5dddb934></div></div></div>`,1)]])),64))])):e.repos.length?n.value.length?(U(),aa(Zo,{key:2,name:`list`,tag:`div`,class:`space-y-2`},{default:Sn(()=>[(U(!0),W(H,null,V(n.value,e=>(U(),W(`a`,{key:e.id,href:e.html_url,target:`_blank`,class:`block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors`},[G(`div`,ef,[r[1]||=G(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors`},`>`,-1),G(`div`,tf,[G(`div`,nf,[G(`span`,{class:`text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate`,title:e.name},M(e.name),9,rf),e.stargazers_count>0?(U(),W(`span`,af,` ★`+M(e.stargazers_count),1)):q(``,!0)]),G(`p`,{class:`text-xs text-catppuccin-gray truncate`,title:e.description},M(e.description||`no description`),9,of)])])],8,$d))),128))]),_:1})):(U(),W(`div`,sf,` no repositories found `)):(U(),W(`div`,Qd,` no projects found `))])]))}},[[`__scopeId`,`data-v-5dddb934`]]),lf={class:`w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono`},uf={class:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-10 md:pb-2`},df={key:0,role:`status`,class:`mb-4 flex flex-wrap items-center gap-3 text-sm text-catppuccin-yellow`},ff={class:`grid lg:grid-cols-2 gap-6 lg:items-stretch`},pf={__name:`Home`,setup(e){let t=B([]),n=B(!0),r=B(null),i=B([]),a=async()=>{try{n.value=!0,r.value=null;let{repos:e,languages:a,error:o}=await Kl();t.value=e,i.value=a,r.value=o}catch(e){r.value=e instanceof Error?e.message:`GitHub data is temporarily unavailable.`}finally{n.value=!1}};return xr(()=>{a()}),(e,o)=>(U(),W(`div`,lf,[G(`div`,uf,[K(ju),K(zu,{languages:i.value,loading:n.value,id:`languages`},null,8,[`languages`,`loading`]),r.value?(U(),W(`div`,df,[G(`span`,null,M(r.value),1),G(`button`,{type:`button`,class:`underline hover:text-catppuccin-text`,onClick:a},` retry `)])):q(``,!0),G(`div`,ff,[K(cf,{repos:t.value,loading:n.value},null,8,[`repos`,`loading`]),K(_d)]),K(Kd),K(Jd)])]))}},mf=Object.assign({"/posts/docker-and-compose.md":`---
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
Use the following command to reload the group change or log out and back in:
\`\`\`bash
newgrp docker
\`\`\`
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
`}),hf=()=>{let e=[],t=1;return Object.entries(mf).forEach(([n,r])=>{let{frontmatter:i,content:a}=Xu(r,n),o=Zu(i,n,n);e.push({id:t++,slug:o,title:i.title||o,date:i.date||new Date().toISOString().split(`T`)[0],tags:i.tags||[],description:i.description||``,unlisted:i.unlisted===!0||i.unlisted===`true`,content:a.trim(),readingTime:xf(a)})}),e},gf=null,_f=(e=!1)=>(gf||=hf(),(e?[...gf]:gf.filter(e=>!e.unlisted)).sort((e,t)=>bf(t.date)-bf(e.date))),vf=e=>_f(!0).find(t=>t.slug===e),yf=()=>{let e=new Set;return _f().forEach(t=>{t.tags.forEach(t=>e.add(t))}),Array.from(e).sort()},bf=e=>{let[t,n,r]=e.split(`-`);return new Date(r,n-1,t)},xf=e=>{let t=e.trim().split(/\s+/).length;return Math.ceil(t/225)},Sf={class:`sm:border-l-2 sm:border-catppuccin-surface pl-2 sm:pl-4`},Cf={class:`flex flex-wrap gap-1.5 sm:gap-2`},wf=[`onClick`],Tf={__name:`TagFilter`,props:{tags:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:[`toggle-tag`],setup(e,{emit:t}){let n=t,r=e=>{n(`toggle-tag`,e)};return(t,n)=>(U(),W(`div`,Sf,[n[0]||=G(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},`~$ ls tags/`,-1),G(`div`,Cf,[(U(!0),W(H,null,V(e.tags,t=>(U(),W(`button`,{key:t,onClick:e=>r(t),class:j([`px-3 py-1.5 sm:py-1 rounded text-xs transition-colors border`,e.selectedTag===t?`bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve`:`bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay`])},` #`+M(t),11,wf))),128))])]))}},Ef={class:`sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2`},Df={class:`text-catppuccin-subtle text-sm mb-3`},Of={key:0,class:`text-catppuccin-mauve`},kf={key:0,class:`text-sm text-catppuccin-subtle`},Af={key:1,class:`space-y-3`},jf=[`onClick`],Mf={class:`px-3 sm:px-4 py-3`},Nf={class:`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2`},Pf={class:`text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors`},Ff={class:`flex items-center gap-2 flex-shrink-0`},If={class:`text-xs text-catppuccin-subtle`},Lf=[`title`],Rf={class:`text-sm text-catppuccin-gray mb-3 leading-relaxed`},zf={class:`flex items-center gap-2`},Bf={class:`flex flex-wrap gap-1.5`},Vf=[`onClick`],Hf={__name:`PostList`,props:{posts:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:[`open-post`,`select-tag`],setup(e,{emit:t}){let n=t,r=e=>{n(`open-post`,e)};return(t,i)=>(U(),W(`div`,Ef,[G(`div`,Df,[i[0]||=pa(` ~$ ls -la posts/ `,-1),e.selectedTag?(U(),W(`span`,Of,`| grep "`+M(e.selectedTag)+`"`,1)):q(``,!0)]),e.posts.length?(U(),W(`div`,Af,[(U(!0),W(H,null,V(e.posts,e=>(U(),W(`div`,{key:e.id,onClick:t=>r(e.slug),class:`block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer`},[G(`div`,Mf,[G(`div`,Nf,[G(`h2`,Pf,M(e.title),1),G(`div`,Ff,[G(`span`,If,M(e.readingTime)+` min read `,1),i[1]||=G(`span`,{class:`text-catppuccin-surface`},`•`,-1),G(`span`,{class:`text-xs text-catppuccin-subtle`,title:Vt(bf)(e.date).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`})},M(e.date),9,Lf)])]),G(`p`,Rf,M(e.description),1),G(`div`,zf,[G(`div`,Bf,[(U(!0),W(H,null,V(e.tags,e=>(U(),W(`span`,{key:e,onClick:us(t=>n(`select-tag`,e),[`stop`]),class:`px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:bg-catppuccin-mauve/20 hover:text-catppuccin-mauve cursor-pointer transition-colors`},` #`+M(e),9,Vf))),128))]),i[2]||=G(`span`,{class:`ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm shrink-0`},` read → `,-1)])])],8,jf))),128))])):(U(),W(`div`,kf,` no posts found `))]))}},Uf=new class{escapeHtml(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#39;`)}extractVariables(e){let t=/(?<!\\)\$\[([^\]]+)\]/g,n=new Set,r;for(;(r=t.exec(e))!==null;)n.add(r[1]);return Array.from(n)}substitute(e,t={}){let n=[],r=e.replace(/\\\$\[([^\]]+)\]/g,(e,t)=>{let r=`__ESCAPED_VAR_${n.length}__`;return n.push(`$[${t}]`),r});return r=r.replace(/\$\[([^\]]+)\]/g,(e,n)=>this.escapeHtml(t[n]||n)),n.forEach((e,t)=>{r=r.replace(`__ESCAPED_VAR_${t}__`,e)}),r}},Wf=class{process(e){let t=e,n=[];t=t.replace(/__([A-Z_0-9]+)__/g,e=>{let t=`\x00PROT${n.length}\x00`;return n.push(e),t});let r=[];return t=t.replace(/`([^`]+)`/g,(e,t)=>{let n=`\x01IC${r.length}\x01`;return r.push(this._renderInlineCode(t)),n}),t=t.replace(/\*\*\*(.*?)\*\*\*/g,`<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>`),t=t.replace(/\*\*(.*?)\*\*/g,`<strong class="text-catppuccin-mauve font-semibold">$1</strong>`),t=t.replace(/_(.*?)_/g,`<em class="text-catppuccin-text italic">$1</em>`),t=t.replace(/\*(.*?)\*/g,`<em class="text-catppuccin-text italic">$1</em>`),t=t.replace(/~~(.*?)~~/g,`<del class="text-catppuccin-subtle line-through">$1</del>`),t=t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,`<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">`),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,`<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>`),r.forEach((e,n)=>{t=t.replaceAll(`\x01IC${n}\x01`,e)}),n.forEach((e,n)=>{t=t.replaceAll(`\x00PROT${n}\x00`,e)}),t}_renderInlineCode(e){return`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}</code>`}};new Wf;function Gf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Kf(e){if(Array.isArray(e))return e}function qf(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Jf(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yf(e,t){return Kf(e)||qf(e,t)||Xf(e,t)||Jf()}function Xf(e,t){if(e){if(typeof e==`string`)return Gf(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gf(e,t):void 0}}var Zf=Object.entries,Qf=Object.setPrototypeOf,$f=Object.isFrozen,ep=Object.getPrototypeOf,tp=Object.getOwnPropertyDescriptor,np=Object.freeze,rp=Object.seal,ip=Object.create,ap=typeof Reflect<`u`&&Reflect,op=ap.apply,sp=ap.construct;np||=function(e){return e},rp||=function(e){return e},op||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},sp||=function(e){return new e(...[...arguments].slice(1))};var cp=Q(Array.prototype.forEach),lp=Q(Array.prototype.lastIndexOf),up=Q(Array.prototype.pop),dp=Q(Array.prototype.push),fp=Q(Array.prototype.splice),pp=Array.isArray,mp=Q(String.prototype.toLowerCase),hp=Q(String.prototype.toString),gp=Q(String.prototype.match),_p=Q(String.prototype.replace),vp=Q(String.prototype.indexOf),yp=Q(String.prototype.trim),bp=Q(Number.prototype.toString),xp=Q(Boolean.prototype.toString),Sp=typeof BigInt>`u`?null:Q(BigInt.prototype.toString),Cp=typeof Symbol>`u`?null:Q(Symbol.prototype.toString),wp=Q(Object.prototype.hasOwnProperty),Tp=Q(Object.prototype.toString),Ep=Q(RegExp.prototype.test),Dp=Op(TypeError);function Q(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return op(e,t,n)}}function Op(e){return function(){return sp(e,[...arguments])}}function $(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:mp;if(Qf&&Qf(e,null),!pp(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&($f(t)||(t[r]=e),i=e)}e[i]=!0}return e}function kp(e){for(let t=0;t<e.length;t++)wp(e,t)||(e[t]=null);return e}function Ap(e){let t=ip(null);for(let r of Zf(e)){var n=Yf(r,2);let i=n[0],a=n[1];wp(e,i)&&(t[i]=pp(a)?kp(a):a&&typeof a==`object`&&a.constructor===Object?Ap(a):a)}return t}function jp(e){switch(typeof e){case`string`:return e;case`number`:return bp(e);case`boolean`:return xp(e);case`bigint`:return Sp?Sp(e):`0`;case`symbol`:return Cp?Cp(e):`Symbol()`;case`undefined`:return Tp(e);case`function`:case`object`:{if(e===null)return Tp(e);let t=e,n=Mp(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:Tp(e)}return Tp(e)}default:return Tp(e)}}function Mp(e,t){for(;e!==null;){let n=tp(e,t);if(n){if(n.get)return Q(n.get);if(typeof n.value==`function`)return Q(n.value)}e=ep(e)}function n(){return null}return n}function Np(e){try{return Ep(e,``),!0}catch{return!1}}var Pp=np(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),Fp=np(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),Ip=np([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),Lp=np([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),Rp=np(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),zp=np([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),Bp=np([`#text`]),Vp=np(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),Hp=np(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),Up=np(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),Wp=np([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),Gp=rp(/{{[\w\W]*|^[\w\W]*}}/g),Kp=rp(/<%[\w\W]*|^[\w\W]*%>/g),qp=rp(/\${[\w\W]*/g),Jp=rp(/^data-[\-\w.\u00B7-\uFFFF]+$/),Yp=rp(/^aria-[\-\w]+$/),Xp=rp(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Zp=rp(/^(?:\w+script|data):/i),Qp=rp(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$p=rp(/^html$/i),em=rp(/^[a-z][.\w]*(-[.\w]+)+$/i),tm=rp(/<[/\w!]/g),nm=rp(/<[/\w]/g),rm=rp(/<\/no(script|embed|frames)/i),im=rp(/\/>/i),am={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},om=[`style`,`script`,`xmp`,`iframe`,`noembed`,`noframes`,`plaintext`,`noscript`],sm=np($({},om)),cm=function(){let e={};return cp(om,t=>{e[t]=rp(RegExp(`</`+t+`(?=[\\t\\n\\f\\r />])`,`i`))}),np(e)}(),lm=function(){return typeof window>`u`?null:window},um=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},dm=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},fm=function(e,t,n,r){return wp(e,t)&&pp(e[t])?$(r.base?Ap(r.base):{},e[t],r.transform):n},pm=function(e,t,n){let r=wp(e,t)?e[t]:void 0;return r&&typeof r==`object`?Ap(r):n()};function mm(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:lm(),t=e=>mm(e);if(t.version=`3.4.15`,t.removed=[],!e||!e.document||e.document.nodeType!==am.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,c=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let l=e.DOMParser,u=e.trustedTypes,d=s.prototype,f=Mp(d,`cloneNode`),p=Mp(d,`remove`),m=Mp(d,`removeAttributeNode`),h=Mp(d,`nextSibling`),g=Mp(d,`childNodes`),_=Mp(d,`parentNode`),v=Mp(d,`shadowRoot`),y=Mp(d,`attributes`),b=o&&o.prototype?Mp(o.prototype,`nodeType`):null,x=o&&o.prototype?Mp(o.prototype,`nodeName`):null,S=o&&o.prototype?Mp(o.prototype,`ownerDocument`):null,C=function(e){return b?b(e):e.nodeType},w=function(e){return x?x(e):e.nodeName};if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let T,ee=``,E,te=!1,D=0,ne=function(){if(D>0)throw Dp(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},re=function(e){ne(),D++;try{return T.createHTML(e)}finally{D--}},ie=function(e){ne(),D++;try{return T.createScriptURL(e)}finally{D--}},ae=function(){return te||=(E=um(u,i),!0),E},oe=n,O=oe.implementation,se=oe.createNodeIterator,ce=oe.createDocumentFragment,le=oe.getElementsByTagName,k=r.importNode,A=dm();t.isSupported=typeof Zf==`function`&&typeof _==`function`&&O&&O.createHTMLDocument!==void 0;let ue=Gp,de=Kp,fe=qp,j=Jp,pe=Yp,me=Zp,he=Qp,ge=em,M=Xp,N=null,_e=$({},[...Pp,...Fp,...Ip,...Rp,...Bp]),P=null,ve=$({},[...Vp,...Hp,...Up,...Wp]),ye=Object.seal(ip(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),F=null,be=null,xe=Object.seal(ip(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Se=!0,Ce=!0,we=!1,Te=!0,Ee=!1,De=!0,Oe=!1,ke=!1,Ae=null,je=null,Me=!1,Ne=!1,Pe=!1,Fe=!1,Ie=!0,Le=!1,Re=`user-content-`,ze=!0,Be=!1,Ve={},He=null,Ue=$({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),We=null,Ge=$({},[`audio`,`video`,`img`,`source`,`image`,`track`]),Ke=null,qe=$({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),Je=`http://www.w3.org/1998/Math/MathML`,Ye=`http://www.w3.org/2000/svg`,Xe=`http://www.w3.org/1999/xhtml`,Ze=Xe,Qe=!1,$e=null,et=$({},[Je,Ye,Xe],hp),tt=np([`mi`,`mo`,`mn`,`ms`,`mtext`]),nt=$({},tt),rt=np([`annotation-xml`]),it=$({},rt),at=$({},[`title`,`style`,`font`,`a`,`script`]),ot=null,st=[`application/xhtml+xml`,`text/html`],I=null,ct=null,lt=n.createElement(`form`),ut=function(e){return e instanceof RegExp||e instanceof Function},dt=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(ct&&ct===e)return;(!e||typeof e!=`object`)&&(e={}),e=Ap(e),ot=st.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,I=ot===`application/xhtml+xml`?hp:mp,N=fm(e,`ALLOWED_TAGS`,_e,{transform:I}),P=fm(e,`ALLOWED_ATTR`,ve,{transform:I}),$e=fm(e,`ALLOWED_NAMESPACES`,et,{transform:hp}),Ke=fm(e,`ADD_URI_SAFE_ATTR`,qe,{transform:I,base:qe}),We=fm(e,`ADD_DATA_URI_TAGS`,Ge,{transform:I,base:Ge}),He=fm(e,`FORBID_CONTENTS`,Ue,{transform:I}),F=fm(e,`FORBID_TAGS`,Ap({}),{transform:I}),be=fm(e,`FORBID_ATTR`,Ap({}),{transform:I}),Ve=wp(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?Ap(e.USE_PROFILES):e.USE_PROFILES:!1,Se=e.ALLOW_ARIA_ATTR!==!1,Ce=e.ALLOW_DATA_ATTR!==!1,we=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Te=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ee=e.SAFE_FOR_TEMPLATES||!1,De=e.SAFE_FOR_XML!==!1,Oe=e.WHOLE_DOCUMENT||!1,Ne=e.RETURN_DOM||!1,Pe=e.RETURN_DOM_FRAGMENT||!1,Fe=e.RETURN_TRUSTED_TYPE||!1,Me=e.FORCE_BODY||!1,Ie=e.SANITIZE_DOM!==!1,Le=e.SANITIZE_NAMED_PROPS||!1,ze=e.KEEP_CONTENT!==!1,Be=e.IN_PLACE||!1,M=Np(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:Xp,Ze=typeof e.NAMESPACE==`string`?e.NAMESPACE:Xe,nt=pm(e,`MATHML_TEXT_INTEGRATION_POINTS`,()=>$({},tt)),it=pm(e,`HTML_INTEGRATION_POINTS`,()=>$({},rt));let t=pm(e,`CUSTOM_ELEMENT_HANDLING`,()=>ip(null));if(ye=ip(null),wp(t,`tagNameCheck`)&&ut(t.tagNameCheck)&&(ye.tagNameCheck=t.tagNameCheck),wp(t,`attributeNameCheck`)&&ut(t.attributeNameCheck)&&(ye.attributeNameCheck=t.attributeNameCheck),wp(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(ye.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),rp(ye),Ee&&(Ce=!1),Pe&&(Ne=!0),Ve&&(N=$({},Bp),P=ip(null),Ve.html===!0&&($(N,Pp),$(P,Vp)),Ve.svg===!0&&($(N,Fp),$(P,Hp),$(P,Wp)),Ve.svgFilters===!0&&($(N,Ip),$(P,Hp),$(P,Wp)),Ve.mathMl===!0&&($(N,Rp),$(P,Up),$(P,Wp))),xe.tagCheck=null,xe.attributeCheck=null,wp(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?xe.tagCheck=e.ADD_TAGS:pp(e.ADD_TAGS)&&(N===_e&&(N=Ap(N)),$(N,e.ADD_TAGS,I))),wp(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?xe.attributeCheck=e.ADD_ATTR:pp(e.ADD_ATTR)&&(P===ve&&(P=Ap(P)),$(P,e.ADD_ATTR,I))),wp(e,`ADD_FORBID_CONTENTS`)&&pp(e.ADD_FORBID_CONTENTS)&&(He===Ue&&(He=Ap(He)),$(He,e.ADD_FORBID_CONTENTS,I)),ze&&(N[`#text`]=!0),Oe&&$(N,[`html`,`head`,`body`]),N.table&&($(N,[`tbody`]),delete F.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw Dp(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw Dp(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=T;T=e.TRUSTED_TYPES_POLICY;try{ee=re(``)}catch(e){throw T=t,e}}else e.TRUSTED_TYPES_POLICY===null?(T=void 0,ee=``):(T===void 0&&(T=ae()),T&&typeof ee==`string`&&(ee=re(``)));np&&np(e),ct=e},ft=$({},[...Fp,...Ip,...Lp]),pt=$({},[...Rp,...zp]),mt=function(e,t,n){return t.namespaceURI===Xe?e===`svg`:t.namespaceURI===Je?e===`svg`&&(n===`annotation-xml`||nt[n]):!!ft[e]},ht=function(e,t,n){return t.namespaceURI===Xe?e===`math`:t.namespaceURI===Ye?e===`math`&&it[n]:!!pt[e]},gt=function(e,t,n){return t.namespaceURI===Ye&&!it[n]||t.namespaceURI===Je&&!nt[n]?!1:!pt[e]&&(at[e]||!ft[e])},_t=function(e){let t=_(e);(!t||!t.tagName)&&(t={namespaceURI:Ze,tagName:`template`});let n=mp(e.tagName),r=mp(t.tagName);return $e[e.namespaceURI]?e.namespaceURI===Ye?mt(n,t,r):e.namespaceURI===Je?ht(n,t,r):e.namespaceURI===Xe?gt(n,t,r):!!(ot===`application/xhtml+xml`&&$e[e.namespaceURI]):!1},vt=function(e){dp(t.removed,{element:e});try{_(e).removeChild(e)}catch{if(p(e),!_(e))throw Dp(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},yt=function(e,t,n){try{m(e,t)}catch{try{e.removeAttribute(n)}catch{}}},bt=function(e){Ct(e);let t=g(e);if(t){let e=[];cp(t,t=>{dp(e,t)}),cp(e,e=>{try{p(e)}catch{}})}let n=y(e);if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;typeof i==`string`&&yt(e,r,i)}},xt=function(e,n,r){if(!r)try{r=n.getAttributeNode(e)}catch{r=null}dp(t.removed,{attribute:r||null,from:n});try{r?m(n,r):n.removeAttribute(e)}catch{try{n.removeAttribute(e)}catch{}}if(e===`is`){if(Ne||Pe)try{vt(n)}catch{}else try{n.setAttribute(e,``)}catch{}}},St=function(e){let t=y(e);if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;typeof i!=`string`||P[I(i)]||yt(e,r,i)}},Ct=function(e){let t=[e];for(;t.length>0;){let e=t.pop();C(e)===am.element&&St(e);let n=g(e);if(n)for(let e=n.length-1;e>=0;--e)t.push(n[e])}},wt=function(e,t){return De?e===`patchsrc`||e===`for`&&t!==`label`&&t!==`output`:!1},Tt=function(e){if(!De)return;let t=[e];for(;t.length>0;){let e=t.pop(),n=C(e);if(n===am.processingInstruction||n===am.comment&&Ep(nm,e.data)){try{p(e)}catch{}continue}if(n===am.element){let t=e,n=I(w(e));try{t.hasAttribute&&t.hasAttribute(`patchsrc`)&&t.removeAttribute(`patchsrc`),t.hasAttribute&&t.hasAttribute(`for`)&&wt(`for`,n)&&t.removeAttribute(`for`)}catch{}}let r=g(e);if(r)for(let e=r.length-1;e>=0;--e)t.push(r[e])}},Et=function(e){let t=null,r=null;if(Me)e=`<remove></remove>`+e;else{let t=gp(e,/^[\r\n\t ]+/);r=t&&t[0]}ot===`application/xhtml+xml`&&Ze===Xe&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=T?re(e):e;if(Ze===Xe)try{t=new l().parseFromString(i,ot)}catch{}if(!t||!t.documentElement){t=O.createDocument(Ze,`template`,null);try{t.documentElement.innerHTML=Qe?ee:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),Ze===Xe?le.call(t,Oe?`html`:`body`)[0]:Oe?t.documentElement:a},Dt=function(e){let t=S?S(e):e.ownerDocument;return se.call(t||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Ot=function(e){return e=_p(e,ue,` `),e=_p(e,de,` `),e=_p(e,fe,` `),e},kt=function(e){e.normalize();let t=S?S(e):e.ownerDocument,n=se.call(t||e,e,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),r=n.nextNode();for(;r;)r.data=Ot(r.data),r=n.nextNode();let i=e.querySelectorAll?.call(e,`template`);i&&cp(i,e=>{jt(e.content)&&kt(e.content)})},At=function(e){let t=x?x(e):null;return typeof t!=`string`||I(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==y(e)||typeof e.removeAttribute!=`function`||typeof e.removeAttributeNode!=`function`||typeof e.getAttributeNode!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==b(e)||e.childNodes!==g(e)},jt=function(e){if(!b||typeof e!=`object`||!e)return!1;try{return b(e)===am.documentFragment}catch{return!1}},Mt=function(e){if(!b||typeof e!=`object`||!e)return!1;try{return typeof b(e)==`number`}catch{return!1}};function L(e,n,r){e.length!==0&&cp(e,e=>{e.call(t,n,r,ct)})}let Nt=function(e,t){return!!(De&&e.hasChildNodes()&&!Mt(e.firstElementChild)&&Ep(tm,e.textContent)&&Ep(tm,e.innerHTML)||De&&e.namespaceURI===Xe&&sm[t]&&(Mt(e.firstElementChild)||typeof e.textContent==`string`&&Ep(cm[t],e.textContent))||e.nodeType===am.processingInstruction||De&&e.nodeType===am.comment&&Ep(nm,e.data))},Pt=function(e,t){return e instanceof RegExp?Ep(e,t):e instanceof Function&&!!e(t,...[...arguments].slice(2))},R=function(e,t,n){if(!F[t]&&Rt(t)&&Pt(ye.tagNameCheck,t))return!1;if(ze&&!He[t]){let t=_(e),r=g(e);if(r&&t){let i=r.length;for(let a=i-1;a>=0;--a){let i=e===n?f(r[a],!0):r[a];t.insertBefore(i,h(e))}}}return vt(e),!0},Ft=function(e,t,n,r){return e.length===0?t:t===n||t===r?Ap(t):t},It=function(e,t){return e===t||_(e)!==null?!1:(Be&&Ct(e),!0)},Lt=function(e,n){if(L(A.beforeSanitizeElements,e,null),It(e,n))return!0;if(At(e))return vt(e),!0;let r=I(w(e));if(N=Ft(A.uponSanitizeElement,N,_e,Ae),L(A.uponSanitizeElement,e,{tagName:r,allowedTags:N}),It(e,n))return!0;if(Nt(e,r))return vt(e),!0;if(F[r]||!(xe.tagCheck instanceof Function&&xe.tagCheck(r))&&!N[r]){let t=R(e,r,n);return t===!1&&L(A.afterSanitizeElements,e,null),t}if(C(e)===am.element&&!_t(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&Ep(rm,e.innerHTML))return vt(e),!0;if(Ee&&e.nodeType===am.text){let n=Ot(e.textContent);e.textContent!==n&&(dp(t.removed,{element:e.cloneNode()}),e.textContent=n)}return L(A.afterSanitizeElements,e,null),!1},z=function(e,t,r){if(be[t]||wt(t,e)||Ie&&(t===`id`||t===`name`)&&(r in n||r in lt))return!1;let i=P[t]||xe.attributeCheck instanceof Function&&xe.attributeCheck(t,e);return Ce&&Ep(j,t)||Se&&Ep(pe,t)?!0:i?Ke[t]||Ep(M,_p(r,he,``))||(t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&vp(r,`data:`)===0&&We[e]||we&&!Ep(me,_p(r,he,``))?!0:!r:Rt(e)&&Pt(ye.tagNameCheck,e)&&Pt(ye.attributeNameCheck,t,e)||t===`is`&&ye.allowCustomizedBuiltInElements&&Pt(ye.tagNameCheck,r)},B=$({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),Rt=function(e){return!B[mp(e)]&&Ep(ge,e)},zt=function(e,t,n,r){if(T&&typeof u==`object`&&typeof u.getAttributeType==`function`&&!n)switch(u.getAttributeType(e,t)){case`TrustedHTML`:return re(r);case`TrustedScriptURL`:return ie(r)}return r},Bt=function(e,t,n,r){try{return n?e.setAttributeNS(n,t,r):e.setAttribute(t,r),!At(e)||(vt(e),!1)}catch{return xt(t,e),!1}},Vt=function(e){L(A.beforeSanitizeAttributes,e,null);let n=e.attributes;if(!n||At(e))return;P=Ft(A.uponSanitizeAttribute,P,ve,je);let r={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:P,forceKeepAttr:void 0},i=n.length,a=I(e.nodeName);for(;i--;){let o=n[i],s=o.name,c=o.namespaceURI,l=o.value,u=I(s),d=l,f=s===`value`?d:yp(d),p=!1;if(r.attrName=u,r.attrValue=f,r.keepAttr=!0,r.forceKeepAttr=void 0,L(A.uponSanitizeAttribute,e,r),f=r.attrValue,Le&&(u===`id`||u===`name`)&&vp(f,Re)!==0&&(xt(s,e,o),f=Re+f,p=!0),De&&Ep(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,f)){xt(s,e,o);continue}if(u===`attributename`&&gp(f,`href`)){xt(s,e,o);continue}if(!r.forceKeepAttr){if(!r.keepAttr){xt(s,e,o);continue}if(!Te&&Ep(im,f)){xt(s,e,o);continue}if(Ee&&(f=Ot(f)),!z(a,u,f)){xt(s,e,o);continue}f=zt(a,u,c,f),f!==d&&Bt(e,s,c,f)&&p&&up(t.removed)}}L(A.afterSanitizeAttributes,e,null)},Ht=function(e){let t=null,n=Dt(e);for(L(A.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if(L(A.uponSanitizeShadowNode,t,null),Lt(t,e),Vt(t),jt(t.content)&&Ht(t.content),C(t)===am.element){let e=v(t);jt(e)&&(Ut(e),Ht(e))}L(A.afterSanitizeShadowDOM,e,null)},Ut=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){Ht(e.shadow);continue}let n=e.node,r=C(n)===am.element,i=g(n);if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=x?x(n):null;if(typeof e==`string`&&I(e)===`template`){let e=n.content;jt(e)&&t.push({node:e,shadow:null})}}if(r){let e=v(n);jt(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(Qe=!e,Qe&&(e=`<!-->`),typeof e!=`string`&&!Mt(e)&&(e=jp(e),typeof e!=`string`))throw Dp(`dirty is not a string, aborting`);if(!t.isSupported)return e;ke?(N=Ae,P=je):dt(n),(A.uponSanitizeElement.length>0||A.uponSanitizeAttribute.length>0)&&(N=Ap(N)),A.uponSanitizeAttribute.length>0&&(P=Ap(P)),t.removed=[];let c=Be&&typeof e!=`string`&&Mt(e);if(c){Tt(e);let t=w(e);if(typeof t==`string`){let n=I(t);if(!N[n]||F[n])throw bt(e),Dp(`root node is forbidden and cannot be sanitized in-place`)}if(At(e))throw bt(e),Dp(`root node is clobbered and cannot be sanitized in-place`);try{Ut(e)}catch(t){throw bt(e),t}}else if(Mt(e))i=Et(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===am.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),Ut(i);else{if(!Ne&&!Ee&&!Oe&&e.indexOf(`<`)===-1)return T&&Fe?re(e):e;if(i=Et(e),!i)return Ne?null:Fe?ee:``}i&&Me&&vt(i.firstChild);let l=c?e:i;try{let e=Dt(l);for(;o=e.nextNode();)Lt(o,l),Vt(o),jt(o.content)&&Ht(o.content)}catch(n){throw c&&(bt(e),cp(t.removed,e=>{e.element&&Ct(e.element)})),n}if(c)return cp(t.removed,e=>{e.element&&Ct(e.element)}),Ee&&kt(e),e;if(Ne){if(Ee&&kt(i),Pe)for(s=ce.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(P.shadowroot||P.shadowrootmode)&&(s=k.call(r,s,!0)),s}let u=Oe?i.outerHTML:i.innerHTML;return Oe&&N[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&Ep($p,i.ownerDocument.doctype.name)&&(u=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+u),Ee&&(u=Ot(u)),T&&Fe?re(u):u},t.setConfig=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};dt(e),ke=!0,Ae=N,je=P},t.clearConfig=function(){ct=null,ke=!1,Ae=null,je=null,T=E,ee=``},t.isValidAttribute=function(e,t,n){ct||dt({});let r=I(e),i=I(t);return z(r,i,n)},t.addHook=function(e,t){typeof t==`function`&&wp(A,e)&&dp(A[e],t)},t.removeHook=function(e,t){if(wp(A,e)){if(t!==void 0){let n=lp(A[e],t);return n===-1?void 0:fp(A[e],n,1)[0]}return up(A[e])}},t.removeHooks=function(e){wp(A,e)&&(A[e]=[])},t.removeAllHooks=function(){A=dm()},t}var hm=mm(),gm=new class{constructor(e=new Wf){this.inlineParser=e}parse(e){let t=e,n={codeBlocks:[],hintBlocks:[],detailsBlocks:[],escapedTokens:[],inlineCodeBlocks:[],tables:[]};return t=this._extractCodeBlocks(t,n),t=this._extractHintBlocks(t,n),t=this._extractDetailsBlocks(t,n),t=this._extractEscapeSequences(t,n),t=this._extractInlineCode(t,n),t=this._extractTables(t,n),t=this._transformHorizontalRules(t),t=this._transformHeadings(t),t=this._transformBlockquotes(t),t=this._transformImages(t),t=this._transformBoldItalic(t),t=this._transformStrikethrough(t),t=this._transformLinks(t),t=this._transformLists(t),t=this._transformParagraphs(t),t=this._restoreDetailsBlocks(t,n),t=this._restoreHintBlocks(t,n),t=this._restoreCodeBlocks(t,n),t=this._restoreTables(t,n),t=this._restoreInlineCode(t,n),t=this._restoreEscapeSequences(t,n),hm.sanitize(t)}_extractCodeBlocks(e,t){return e.replace(/```(\w*)(?::([^\s\n]+))?\s*\n?([\s\S]*?)```/g,(e,n,r,i)=>{let a=`__CODEBLOCK_${t.codeBlocks.length}__`;return t.codeBlocks.push(this._renderCodeBlock(n,r,i,t.codeBlocks.length)),a})}_extractHintBlocks(e,t){return e.replace(/:::hint\s+(\w+)\r?\n([\s\S]*?):::/g,(e,n,r)=>{let i=`__HINT_${t.hintBlocks.length}__`;return t.hintBlocks.push({type:n.trim().toLowerCase(),content:r.trim()}),i})}_extractDetailsBlocks(e,t){let n=!0;for(;n;){let r=e;e=e.replace(/:::details\s+([^\n\r]+)\r?\n([\s\S]*?):::/g,(e,n,r)=>{let i=`__DETAILS_${t.detailsBlocks.length}__`;return t.detailsBlocks.push({title:n.trim(),content:r.trim()}),i}),n=e!==r}return e}_extractEscapeSequences(e,t){return e.replace(/\\\\|\\`/g,e=>{let n=`__ESCAPED_TOKEN_${t.escapedTokens.length}__`;return t.escapedTokens.push(e===`\\\\`?`\\`:"`"),n})}_extractInlineCode(e,t){return e.replace(/`([^`]+)`/g,(e,n)=>{let r=`__INLINECODE_${t.inlineCodeBlocks.length}__`,i=n.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);return t.inlineCodeBlocks.push(`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${i}</code>`),r})}_extractTables(e,t){return e.replace(/((?:\|[^\n]+\|\r?\n?)+)/g,e=>{let n=e.trim().split(/\r?\n/);if(n.length<2||!/^\|[\s\-:|]+\|$/.test(n[1]))return e;let r=`__TABLE_${t.tables.length}__`;return t.tables.push(this._renderTable(n)),r})}_transformHorizontalRules(e){return e.replace(/^(?:---|\*\*\*|___)\s*$/gim,`<hr class="border-catppuccin-surface my-6">`)}_transformHeadings(e){return e=e.replace(/^###### (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h6 id="${n}" class="group text-xs font-semibold text-catppuccin-mauve mt-4 mb-2">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h6>`}),e=e.replace(/^##### (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h5 id="${n}" class="group text-sm font-semibold text-catppuccin-mauve mt-4 mb-2">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h5>`}),e=e.replace(/^#### (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h4 id="${n}" class="group text-base font-semibold text-catppuccin-mauve mt-5 mb-2">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h4>`}),e=e.replace(/^### (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h3 id="${n}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`}),e=e.replace(/^## (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h2 id="${n}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`}),e=e.replace(/^# (.*$)/gim,(e,t)=>{let n=this._slugify(t);return`<h1 id="${n}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${t}<a href="#${n}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`}),e}_transformBlockquotes(e){return e.replace(/^> (.*$)/gim,`<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>`)}_transformImages(e){return e.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,`<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">`)}_transformBoldItalic(e){return e=e.replace(/\*\*\*(.*?)\*\*\*/g,`<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>`),e=e.replace(/\*\*(.*?)\*\*/g,`<strong class="text-catppuccin-mauve font-semibold">$1</strong>`),e=e.replace(/\*(.*?)\*/g,`<em class="text-catppuccin-text italic">$1</em>`),e}_transformStrikethrough(e){return e.replace(/~~(.*?)~~/g,`<del class="text-catppuccin-subtle line-through">$1</del>`)}_transformLinks(e){return e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,`<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>`)}_transformLists(e){return e=e.replace(/^[\-\*\+] \[x\] (.*$)/gim,`<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>`),e=e.replace(/^[\-\*\+] \[ \] (.*$)/gim,`<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>`),e=e.replace(/^\d+\. (.*$)/gim,`<li data-list-type="ol" class="ml-6 text-catppuccin-text mb-1">$1</li>`),e=e.replace(/^[\-\*\+] (.*$)/gim,`<li data-list-type="ul" class="ml-6 text-catppuccin-text mb-1">$1</li>`),e=e.replace(/(<li data-list-type="ol"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ol"[^>]*>.*?<\/li>))*/g,e=>`<ol class="list-decimal my-4 pl-2">${e}</ol>`),e=e.replace(/(<li data-list-type="ul"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ul"[^>]*>.*?<\/li>))*/g,e=>`<ul class="list-disc my-4">${e}</ul>`),e=e.replace(/ data-list-type="[^"]+"/g,``),e}_transformParagraphs(e){let t=/^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;return e.split(`

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
      </div>`}_renderTable(e){let t=e[0],n=e.slice(2),r=`<div class="overflow-x-auto -mx-2 sm:mx-0 my-4"><table class="w-full text-sm border-collapse min-w-[400px]">`,i=t.split(`|`).filter(e=>e.trim());return r+=`<thead><tr>`,i.forEach(e=>{r+=`<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${e.trim()}</th>`}),r+=`</tr></thead>`,r+=`<tbody>`,n.forEach(e=>{if(e.trim()&&!/^\|[\s\-:|]+\|$/.test(e)){let t=e.split(`|`).filter(e=>e.trim());r+=`<tr>`,t.forEach(e=>{r+=`<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${e.trim()}</td>`}),r+=`</tr>`}}),r+=`</tbody></table></div>`,r}_slugify(e){return e.toLowerCase().replace(/<[^>]*>/g,``).replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`).replace(/-+/g,`-`).trim()}},_m=new class{highlightAll(){window.Prism&&(Prism.highlightAll(),document.querySelectorAll(`pre[class*="language-"]`).forEach(e=>{e.className=e.className.replace(/language-\S+/g,``).trim()}))}highlightAfterDelay(e=100){setTimeout(()=>this.highlightAll(),e)}},vm=[`src`,`alt`],ym=1,bm=4,xm=xl({__name:`ImageLightbox`,props:{src:{type:String,default:null},alt:{type:String,default:``}},emits:[`close`],setup(e,{emit:t}){let n=e,r=t,i=B(1),a=B(0),o=B(0),s=!1,c=0,l=1,u=0,d=0,f=0,p=0,m=0,h=J(()=>({transform:`translate(${a.value}px, ${o.value}px) scale(${i.value})`,transition:s?`none`:`transform 0.2s ease`})),g=()=>{i.value=1,a.value=0,o.value=0},_=()=>{g(),r(`close`)},v=e=>{let t=e[0].clientX-e[1].clientX,n=e[0].clientY-e[1].clientY;return Math.hypot(t,n)},y=e=>{if(e.touches.length===2)s=!0,c=v(e.touches),l=i.value;else if(e.touches.length===1){let t=Date.now();if(t-m<300){i.value>1?g():i.value=2,m=0;return}m=t,f=e.touches[0].clientX,p=e.touches[0].clientY,u=a.value,d=o.value}},b=e=>{if(e.touches.length===2){e.preventDefault();let t=v(e.touches),n=l*t/c;i.value=Math.min(bm,Math.max(ym,n))}else e.touches.length===1&&i.value>1&&(e.preventDefault(),a.value=u+(e.touches[0].clientX-f),o.value=d+(e.touches[0].clientY-p))},x=e=>{e.touches.length===0&&(s=!1,i.value<=ym&&g())},S=e=>{e.key===`Escape`&&n.src&&_()};return kn(()=>n.src,g),xr(()=>window.addEventListener(`keydown`,S)),Tr(()=>window.removeEventListener(`keydown`,S)),(t,n)=>(U(),aa(Un,{to:`body`},[K(to,{name:`lightbox-fade`},{default:Sn(()=>[e.src?(U(),W(`div`,{key:0,class:`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#000000] p-0 sm:bg-[#11111b]/80 sm:backdrop-blur-sm sm:p-4 cursor-zoom-out`,onClick:_},[G(`button`,{type:`button`,class:`absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-catppuccin-surface/60 bg-catppuccin-base/40 text-2xl leading-none font-light text-catppuccin-subtle hover:text-catppuccin-text hover:border-catppuccin-mauve/40 transition-colors`,"aria-label":`Close image`,onClick:_},` × `),G(`img`,{src:e.src,alt:e.alt,style:k(h.value),class:`max-w-full max-h-screen sm:max-h-[90vh] object-contain rounded-none sm:rounded-md shadow-2xl cursor-default touch-none select-none`,onClick:n[0]||=us(()=>{},[`stop`]),onTouchstart:y,onTouchmove:b,onTouchend:x},null,44,vm)])):q(``,!0)]),_:1})]))}},[[`__scopeId`,`data-v-cfdbb40c`]]),Sm={class:`mb-8`},Cm={class:`text-catppuccin-subtle text-sm mb-2`},wm={class:`text-3xl md:text-4xl font-bold text-catppuccin-mauve mb-3`},Tm={class:`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-catppuccin-subtle mb-4`},Em={class:`flex flex-wrap gap-2`},Dm={key:0,class:`mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10`},Om={class:`space-y-3`},km=[`for`],Am=[`id`,`onUpdate:modelValue`,`placeholder`],jm=[`innerHTML`],Mm=xl({__name:`PostComponent`,props:{post:{type:Object,required:!0}},emits:[`go-back`],setup(e,{emit:t}){let n=e,r=t,i=()=>{r(`go-back`)},a=J(()=>n.post.readingTime||1),o=B({}),s=J(()=>Uf.extractVariables(n.post.content)),c=J(()=>Uf.substitute(n.post.content,o.value)),l=e=>gm.parse(e),u=B(null),d=B(``),f=e=>{let t=e.target.closest(`img`);t&&(u.value=t.currentSrc||t.src,d.value=t.alt||``)},p=()=>{u.value=null,d.value=``};return xr(()=>{_m.highlightAfterDelay(100)}),kn(o,()=>{un(()=>{_m.highlightAll()})},{deep:!0}),(t,n)=>(U(),W(`div`,null,[G(`div`,Sm,[G(`div`,Cm,` ~$ cat `+M(e.post.slug)+`.md `,1),G(`button`,{onClick:i,class:`text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all mb-6 inline-flex items-center gap-1.5 group`},[...n[0]||=[G(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),G(`span`,{class:`text-catppuccin-mauve font-medium`},`~/posts`,-1)]]),G(`h1`,wm,M(e.post.title),1),G(`div`,Tm,[G(`span`,null,M(e.post.date),1),n[1]||=G(`span`,{class:`hidden sm:inline text-catppuccin-surface`},`•`,-1),G(`span`,null,`~`+M(a.value)+` min read`,1),n[2]||=G(`span`,{class:`hidden sm:inline text-catppuccin-surface`},`•`,-1),G(`div`,Em,[(U(!0),W(H,null,V(e.post.tags,e=>(U(),W(`span`,{key:e,class:`text-catppuccin-gray`},` #`+M(e),1))),128))])])]),s.value.length>0?(U(),W(`div`,Dm,[n[3]||=G(`div`,{class:`text-sm text-catppuccin-subtle mb-3`},` ~$ configure variables `,-1),G(`div`,Om,[(U(!0),W(H,null,V(s.value,e=>(U(),W(`div`,{key:e,class:`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3`},[G(`label`,{for:`var-${e}`,class:`text-sm text-catppuccin-text sm:min-w-[120px]`},M(e)+`: `,9,km),Cn(G(`input`,{id:`var-${e}`,"onUpdate:modelValue":t=>o.value[e]=t,type:`text`,placeholder:e,class:`flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors`},null,8,Am),[[ss,o.value[e]]])]))),128))])])):q(``,!0),G(`article`,{class:`sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2 mb-8 overflow-hidden`,onClick:f},[G(`div`,{class:`prose prose-invert max-w-none text-catppuccin-text`,innerHTML:l(c.value)},null,8,jm)]),G(`button`,{onClick:i,class:`text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group`},[...n[4]||=[G(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),G(`span`,{class:`text-catppuccin-mauve font-medium`},`~/posts`,-1)]]),K(xm,{src:u.value,alt:d.value,onClose:p},null,8,[`src`,`alt`])]))}},[[`__scopeId`,`data-v-077ea2ea`]]),Nm={class:`w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono`},Pm={class:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16`},Fm={class:`mb-8`},Im={class:`text-catppuccin-subtle text-sm mb-4`},Lm={class:`flex items-center gap-4 text-sm mb-6`},Rm={class:`text-catppuccin-mauve font-medium`},zm={key:0,class:`text-catppuccin-subtle font-medium`},Bm={class:`border-l-2 border-catppuccin-surface pl-4`},Vm={class:`text-catppuccin-red text-sm`},Hm={class:`text-catppuccin-mauve`},Um={class:`mt-3 text-xs text-catppuccin-subtle`},Wm={class:`ml-2`},Gm={__name:`NotFound`,props:{message:{type:String,default:`The fox searched its den but couldnt find anything`},returnTo:{type:String,default:`/`}},setup(e){let t=e,n=yl(),r=vl(),i=J(()=>(n.fullPath||n.path||`/`).replace(/^\//,``)||`.`),a=()=>r.push(t.returnTo);return(t,n)=>(U(),W(`div`,Nm,[G(`div`,Pm,[G(`div`,Fm,[G(`div`,Im,` ~$ cd ~/`+M(i.value),1),G(`div`,Lm,[G(`button`,{onClick:a,class:`px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group`},[n[0]||=G(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),G(`span`,Rm,M(e.returnTo===`/`?`~/`:`~${e.returnTo}`),1),e.returnTo===`/`?(U(),W(`span`,zm,`(home)`)):q(``,!0)])])]),G(`div`,Bm,[G(`div`,Vm,[n[1]||=pa(` cd: no such file or directory: /`,-1),G(`span`,Hm,M(i.value),1)]),G(`div`,Um,[n[2]||=G(`span`,{class:`text-catppuccin-mauve`,"aria-hidden":`true`},`V*꓃*V`,-1),G(`span`,Wm,M(e.message),1)])])]),K(Jd)]))}},Km=(e,t,n)=>{let r=document.querySelector(`meta[${e}="${t}"]`);r||(r=document.createElement(`meta`),r.setAttribute(e,t),document.head.append(r)),r.setAttribute(`content`,n)},qm=({title:e,description:t,path:n,image:r})=>{let i=`${e} | heckr.dev`,a=new URL(n,window.location.origin).href,o=t||`Personal portfolio and blog by Jesse.`;document.title=i,Km(`name`,`title`,i),Km(`name`,`description`,o),Km(`property`,`og:title`,i),Km(`property`,`og:description`,o),Km(`property`,`og:url`,a);let s=new URL(r||`/screenshot.png`,window.location.origin).href;Km(`property`,`og:image`,s),Km(`name`,`twitter:title`,i),Km(`name`,`twitter:description`,o),Km(`name`,`twitter:url`,a),Km(`name`,`twitter:image`,s);let c=document.querySelector(`link[rel="canonical"]`);c||(c=document.createElement(`link`),c.rel=`canonical`,document.head.append(c)),c.href=a},Jm={class:`w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono`},Ym={class:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-14 md:pb-2`},Xm={key:`list`},Zm={class:`mb-12`},Qm={class:`flex items-center gap-4 text-sm mb-6`},$m={key:`post`},eh=xl({__name:`Posts`,setup(e){let t=B(`list`),n=B(null),r=B(null),i=B([]),a=B([]),o=yl(),s=vl(),c=J(()=>r.value?i.value.filter(e=>e.tags.includes(r.value)):i.value),l=()=>{i.value=_f(),a.value=yf()},u=e=>{if(n.value=vf(e),n.value){if(t.value=`post`,window.scrollTo({top:0,behavior:`instant`}),qm({title:n.value.title,description:n.value.description,path:`/posts/${n.value.slug}`}),o.params.slug!==e){let{post:t,...n}=o.query;s.replace({name:`PostDetail`,params:{slug:e},query:n})}}else(o.params.slug||o.query.post)&&(t.value=`not-found`,qm({title:`404 Not Found`,description:`This post doesn't exist.`,path:o.path}))},d=({skipQueryUpdate:e=!1}={})=>{if(t.value=`list`,n.value=null,window.scrollTo({top:0,behavior:`smooth`}),qm({title:`Posts`,description:`Thoughts, tutorials, and experiences on web development, programming, and technology.`,path:`/posts`}),!e&&(o.params.slug||`post`in o.query)){let e={...o.query};delete e.post,s.replace({name:`Posts`,query:e})}},f=e=>{r.value=r.value===e?null:e};return xr(()=>{l(),qm({title:`Posts`,description:`Thoughts, tutorials, and experiences on web development, programming, and technology.`,path:`/posts`}),document.documentElement.style.overflowY=`auto`,document.body.style.overflowY=`auto`,new ClipboardJS(`[data-clipboard-target]`).on(`success`,function(e){let t=e.trigger,n=t.textContent;t.textContent=`copied!`,t.classList.add(`text-catppuccin-green`),setTimeout(()=>{t.textContent=n,t.classList.remove(`text-catppuccin-green`)},2e3),e.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);let e=o.params.slug||o.query.post;e&&u(e)}),wr(()=>{document.documentElement.style.overflowY=``,document.body.style.overflowY=``}),kn(()=>o.params.slug||o.query.post,(e,n)=>{e&&e!==n?u(e):!e&&t.value!==`list`&&d({skipQueryUpdate:!0})}),(e,i)=>{let o=jr(`router-link`);return U(),W(`div`,Jm,[G(`div`,Ym,[K(to,{name:`fade`,mode:`out-in`},{default:Sn(()=>[t.value===`list`?(U(),W(`div`,Xm,[G(`div`,Zm,[i[1]||=G(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},` ~$ cd ~/posts `,-1),G(`div`,Qm,[K(o,{to:`/`,class:`px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group`},{default:Sn(()=>[...i[0]||=[G(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),G(`span`,{class:`text-catppuccin-mauve font-medium`},`~/`,-1),G(`span`,{class:`text-catppuccin-subtle font-medium`},`(home)`,-1)]]),_:1})]),i[2]||=G(`h1`,{class:`text-3xl md:text-4xl font-bold text-catppuccin-text mb-4`},[G(`span`,{class:`text-catppuccin-mauve`},`Posts`)],-1),i[3]||=G(`p`,{class:`text-sm text-catppuccin-gray leading-relaxed mb-6`},` My thoughts, tutorials, and experiences on various topics including web development, programming, and technology. `,-1),K(Tf,{tags:a.value,"selected-tag":r.value,onToggleTag:f},null,8,[`tags`,`selected-tag`])]),K(Hf,{posts:c.value,"selected-tag":r.value,onOpenPost:u,onSelectTag:f},null,8,[`posts`,`selected-tag`]),K(Jd)])):t.value===`post`&&n.value?(U(),W(`div`,$m,[K(Mm,{post:n.value,onGoBack:d},null,8,[`post`]),K(Jd)])):t.value===`not-found`?(U(),aa(Gm,{key:`not-found`,message:`This post doesn't exist.`,"return-to":`/posts`})):q(``,!0)]),_:1})])])}}},[[`__scopeId`,`data-v-76894170`]]),th={class:`sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2`},nh={class:`text-catppuccin-subtle text-sm mb-3`},rh={key:0,class:`text-catppuccin-mauve`},ih={key:0,class:`text-sm text-catppuccin-subtle`},ah={key:1,class:`grid gap-4 sm:grid-cols-2`},oh=[`onClick`],sh={key:0,class:`w-full h-32 sm:h-40 overflow-hidden bg-catppuccin-surface/30`},ch=[`src`,`alt`],lh={class:`px-3 sm:px-4 py-3`},uh={class:`flex items-start gap-2 mb-2`},dh={class:`text-sm text-catppuccin-gray mb-3 leading-relaxed line-clamp-2`},fh={class:`flex items-center gap-2 flex-wrap`},ph=[`onClick`],mh={key:0,class:`text-xs text-catppuccin-subtle`},hh=xl({__name:`ProjectList`,props:{projects:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:[`open-project`,`select-tag`],setup(e,{emit:t}){let n=t,r=e=>{n(`open-project`,e)};return(t,i)=>(U(),W(`div`,th,[G(`div`,nh,[i[0]||=pa(` ~$ ls -la projects/ `,-1),e.selectedTag?(U(),W(`span`,rh,`| grep "`+M(e.selectedTag)+`"`,1)):q(``,!0)]),e.projects.length?(U(),W(`div`,ah,[(U(!0),W(H,null,V(e.projects,e=>(U(),W(`div`,{key:e.id,onClick:t=>r(e.slug),class:`block group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all cursor-pointer overflow-hidden`,style:k({borderColor:`${e.accentColorHex}40`})},[e.coverImage?(U(),W(`div`,sh,[G(`img`,{src:e.coverImage,alt:e.title,class:`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`},null,8,ch)])):q(``,!0),G(`div`,lh,[G(`div`,uh,[G(`span`,{class:`text-sm transition-colors`,style:k({color:e.accentColorHex})},`>`,4),G(`h2`,{class:`text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors`,style:k({"--hover-color":e.accentColorHex})},M(e.title),5)]),G(`p`,dh,M(e.description),1),G(`div`,fh,[(U(!0),W(H,null,V(e.tags.slice(0,3),t=>(U(),W(`span`,{key:t,onClick:us(e=>n(`select-tag`,t),[`stop`]),class:`px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:text-catppuccin-mauve cursor-pointer transition-colors`,style:k({"--hover-bg":`${e.accentColorHex}20`})},` #`+M(t),13,ph))),128)),e.tags.length>3?(U(),W(`span`,mh,` +`+M(e.tags.length-3),1)):q(``,!0),G(`span`,{class:`ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm`,style:k({"--hover-color":e.accentColorHex})},` view → `,4)])])],12,oh))),128))])):(U(),W(`div`,ih,` no projects found `))]))}},[[`__scopeId`,`data-v-907e807e`]]),gh={class:`mb-8`},_h={class:`text-catppuccin-subtle text-sm mb-2`},vh=[`src`,`alt`],yh={class:`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-catppuccin-subtle mb-4`},bh={class:`flex flex-wrap gap-2`},xh={class:`flex flex-wrap gap-3 mb-6`},Sh=[`href`],Ch=[`href`],wh={key:0,class:`mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10`},Th={class:`space-y-3`},Eh=[`for`],Dh=[`id`,`onUpdate:modelValue`,`placeholder`],Oh=[`innerHTML`],kh=xl({__name:`ProjectComponent`,props:{project:{type:Object,required:!0},sectioned:{type:Boolean,default:!1}},emits:[`go-back`],setup(e,{emit:t}){let n=e,r=t,i=()=>{r(`go-back`)},a=B({}),o=J(()=>Uf.extractVariables(n.project.content)),s=J(()=>Uf.substitute(n.project.content,a.value)),c=e=>{let t=gm.parse(e);return n.sectioned?t.split(/(?=<h2\b)/i).filter(e=>e.trim()).map(e=>`<section class="project-markdown-section">${e}</section>`).join(``):t};return xr(()=>{_m.highlightAfterDelay(100)}),kn(a,()=>{un(()=>{_m.highlightAll()})},{deep:!0}),(t,r)=>(U(),W(`div`,{style:k({"--accent-color":e.project.accentColorHex})},[G(`div`,gh,[G(`div`,_h,` ~$ cat `+M(e.project.slug)+`.md `,1),G(`button`,{onClick:i,class:`text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all mb-6 inline-flex items-center gap-1.5 group`},[...r[0]||=[G(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),G(`span`,{class:`text-catppuccin-mauve font-medium`},`~/projects`,-1)]]),e.project.coverImage?(U(),W(`div`,{key:0,class:`w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-6 border`,style:k({borderColor:`${e.project.accentColorHex}40`})},[G(`img`,{src:e.project.coverImage,alt:e.project.title,class:`w-full h-full object-cover`},null,8,vh)],4)):q(``,!0),G(`h1`,{class:`text-3xl md:text-4xl font-bold mb-3`,style:k({color:e.project.accentColorHex})},M(e.project.title),5),G(`div`,yh,[G(`span`,{class:j([`px-2 py-0.5 rounded text-xs capitalize`,{"bg-catppuccin-green/20 text-catppuccin-green":e.project.status===`active`,"bg-catppuccin-yellow/20 text-catppuccin-yellow":e.project.status===`in-progress`,"bg-catppuccin-red/20 text-catppuccin-red":e.project.status===`archived`,"bg-catppuccin-blue/20 text-catppuccin-blue":e.project.status===`beta`,"bg-catppuccin-peach/20 text-catppuccin-peach":e.project.status===`stale`}])},M(e.project.status),3),G(`div`,bh,[(U(!0),W(H,null,V(e.project.tags,e=>(U(),W(`span`,{key:e,class:`text-catppuccin-gray`},` #`+M(e),1))),128))])]),G(`div`,xh,[e.project.url?(U(),W(`a`,{key:0,href:e.project.url,target:`_blank`,rel:`noopener noreferrer`,class:`inline-flex items-center gap-2 px-3 py-1.5 rounded border text-sm transition-colors hover:bg-catppuccin-surface/30`,style:k({borderColor:`${e.project.accentColorHex}60`,color:e.project.accentColorHex})},[...r[1]||=[G(`svg`,{xmlns:`http://www.w3.org/2000/svg`,class:`w-4 h-4`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`},[G(`path`,{"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`2`,d:`M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`})],-1),pa(` Live Site `,-1)]],12,Sh)):q(``,!0),e.project.github?(U(),W(`a`,{key:1,href:e.project.github,target:`_blank`,rel:`noopener noreferrer`,class:`inline-flex items-center gap-2 px-3 py-1.5 rounded border border-catppuccin-surface/60 text-sm text-catppuccin-subtle transition-colors hover:bg-catppuccin-surface/30 hover:text-catppuccin-text`},[...r[2]||=[G(`svg`,{xmlns:`http://www.w3.org/2000/svg`,class:`w-4 h-4`,fill:`currentColor`,viewBox:`0 0 24 24`},[G(`path`,{d:`M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z`})],-1),pa(` GitHub `,-1)]],8,Ch)):q(``,!0)])]),o.value.length>0?(U(),W(`div`,wh,[r[3]||=G(`div`,{class:`text-sm text-catppuccin-subtle mb-3`},` ~$ configure variables `,-1),G(`div`,Th,[(U(!0),W(H,null,V(o.value,e=>(U(),W(`div`,{key:e,class:`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3`},[G(`label`,{for:`var-${e}`,class:`text-sm text-catppuccin-text sm:min-w-[120px]`},M(e)+`: `,9,Eh),Cn(G(`input`,{id:`var-${e}`,"onUpdate:modelValue":t=>a.value[e]=t,type:`text`,placeholder:e,class:`flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors`},null,8,Dh),[[ss,a.value[e]]])]))),128))])])):q(``,!0),G(`article`,{class:j([`mb-8 overflow-hidden`,n.sectioned?`sectioned-article`:`sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2`])},[G(`div`,{class:`prose prose-invert max-w-none text-catppuccin-text`,innerHTML:c(s.value)},null,8,Oh)],2),Ir(t.$slots,`default`,{},void 0,!0),G(`button`,{onClick:i,class:`text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group`},[...r[4]||=[G(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),G(`span`,{class:`text-catppuccin-mauve font-medium`},`~/projects`,-1)]])],4))}},[[`__scopeId`,`data-v-d327634b`]]),Ah={class:`w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono`},jh={class:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-14 md:pb-2`},Mh={key:`list`},Nh={class:`mb-12`},Ph={class:`flex items-center gap-4 text-sm mb-6`},Fh={key:`project`},Ih=xl({__name:`Projects`,setup(e){let t=B(`list`),n=B(null),r=B(null),i=B([]),a=B([]),o=yl(),s=vl(),c=J(()=>r.value?i.value.filter(e=>e.tags.includes(r.value)):i.value),l=()=>{i.value=nd(),a.value=id()},u=e=>{if(e===`kitsudo`){s.push({name:`Kitsudo`});return}if(n.value=rd(e),n.value){if(t.value=`project`,window.scrollTo({top:0,behavior:`instant`}),qm({title:n.value.title,description:n.value.description,path:`/projects/${n.value.slug}`,image:n.value.coverImage}),o.params.slug!==e){let{project:t,...n}=o.query;s.replace({name:`ProjectDetail`,params:{slug:e},query:n})}}else(o.params.slug||o.query.project)&&(t.value=`not-found`,qm({title:`404 Not Found`,description:`This project doesn't exist.`,path:o.path}))},d=({skipQueryUpdate:e=!1}={})=>{if(t.value=`list`,n.value=null,window.scrollTo({top:0,behavior:`smooth`}),qm({title:`Projects`,description:`A collection of projects, tools, and applications by Jesse.`,path:`/projects`}),!e&&(o.params.slug||`project`in o.query)){let e={...o.query};delete e.project,s.replace({name:`Projects`,query:e})}},f=e=>{r.value=r.value===e?null:e};return xr(()=>{l(),qm({title:`Projects`,description:`A collection of projects, tools, and applications by Jesse.`,path:`/projects`}),document.documentElement.style.overflowY=`auto`,document.body.style.overflowY=`auto`,new ClipboardJS(`[data-clipboard-target]`).on(`success`,function(e){let t=e.trigger,n=t.textContent;t.textContent=`copied!`,t.classList.add(`text-catppuccin-green`),setTimeout(()=>{t.textContent=n,t.classList.remove(`text-catppuccin-green`)},2e3),e.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);let e=o.params.slug||o.query.project;e&&u(e)}),wr(()=>{document.documentElement.style.overflowY=``,document.body.style.overflowY=``}),kn(()=>o.params.slug||o.query.project,(e,n)=>{e&&e!==n?u(e):!e&&t.value!==`list`&&d({skipQueryUpdate:!0})}),(e,i)=>{let o=jr(`router-link`);return U(),W(`div`,Ah,[G(`div`,jh,[K(to,{name:`fade`,mode:`out-in`},{default:Sn(()=>[t.value===`list`?(U(),W(`div`,Mh,[G(`div`,Nh,[i[1]||=G(`div`,{class:`text-catppuccin-subtle text-sm mb-2`},` ~$ cd ~/projects `,-1),G(`div`,Ph,[K(o,{to:`/`,class:`px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group`},{default:Sn(()=>[...i[0]||=[G(`span`,{class:`text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors`},`cd`,-1),G(`span`,{class:`text-catppuccin-mauve font-medium`},`~/`,-1),G(`span`,{class:`text-catppuccin-subtle font-medium`},`(home)`,-1)]]),_:1})]),i[2]||=G(`h1`,{class:`text-3xl md:text-4xl font-bold text-catppuccin-text mb-4`},[G(`span`,{class:`text-catppuccin-mauve`},`Projects`)],-1),i[3]||=G(`p`,{class:`text-sm text-catppuccin-gray leading-relaxed mb-6`},` A collection of projects I've worked on, ranging from web applications to plugins and tools. `,-1),K(Tf,{tags:a.value,"selected-tag":r.value,onToggleTag:f},null,8,[`tags`,`selected-tag`])]),K(hh,{projects:c.value,"selected-tag":r.value,onOpenProject:u,onSelectTag:f},null,8,[`projects`,`selected-tag`]),K(Jd)])):t.value===`project`&&n.value?(U(),W(`div`,Fh,[K(kh,{project:n.value,sectioned:!0,onGoBack:d},null,8,[`project`]),K(Jd)])):t.value===`not-found`?(U(),aa(Gm,{key:`not-found`,message:`This project doesn't exist.`,"return-to":`/projects`})):q(``,!0)]),_:1})])])}}},[[`__scopeId`,`data-v-d985cc8b`]]),Lh={class:`w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono`},Rh={class:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-6 md:pb-2`},zh={class:`mb-8`},Bh={class:`section-sidebar mb-10`,"aria-labelledby":`screenshots`},Vh={class:`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4`},Hh=[`aria-label`,`onClick`],Uh=[`src`,`alt`],Wh={class:`mt-2 text-xs text-catppuccin-subtle`},Gh={class:`section-sidebar mb-10`,"aria-labelledby":`wear-os-companion`},Kh={class:`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4`},qh=[`aria-label`,`onClick`],Jh=[`src`,`alt`],Yh={class:`mt-2 text-xs text-catppuccin-subtle`},Xh=[{path:`/`,name:`Home`,component:pf,meta:{title:`Home | heckr.dev`}},{path:`/posts`,name:`Posts`,component:eh,meta:{title:`Posts | heckr.dev`}},{path:`/posts/:slug`,name:`PostDetail`,component:eh,meta:{title:`Post | heckr.dev`,pageKey:`/posts`}},{path:`/projects`,name:`Projects`,component:Ih,meta:{title:`Projects | heckr.dev`}},{path:`/projects/:slug`,name:`ProjectDetail`,component:Ih,meta:{title:`Project | heckr.dev`,pageKey:`/projects`}},{path:`/kitsudo`,name:`Kitsudo`,component:xl({__name:`Kitsudo`,setup(e){let t=vl(),n=rd(`kitsudo`);xr(()=>{n&&qm({title:n.title,description:n.description,path:`/kitsudo/`,image:n.coverImage})});let r=[{src:`/kitsudo/screenshots/home.jpg`,label:`Today`},{src:`/kitsudo/screenshots/details.jpg`,label:`Task details`},{src:`/kitsudo/screenshots/subtask.jpg`,label:`Subtasks`},{src:`/kitsudo/screenshots/themes.jpg`,label:`Themes`}],i=[{src:`/kitsudo/screenshots/wear-home.png`,label:`Task list`},{src:`/kitsudo/screenshots/wear-details.png`,label:`Task details`},{src:`/kitsudo/screenshots/wear-widget.png`,label:`Watch tile`}],a=()=>t.push(`/projects`),o=B(null),s=B(``),c=(e,t)=>{o.value=e,s.value=t},l=()=>{o.value=null,s.value=``};return(e,t)=>(U(),W(`div`,Lh,[K(Tl),G(`div`,Rh,[K(kh,{project:Vt(n),sectioned:!0,onGoBack:a},{default:Sn(()=>[G(`div`,zh,[G(`section`,Bh,[t[0]||=G(`h2`,{id:`screenshots`,class:`group text-xl font-semibold text-catppuccin-mauve mb-4`},[pa(` Screenshots`),G(`a`,{href:`#screenshots`,class:`ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve`,"aria-label":`Link to Screenshots section`},`#`)],-1),t[1]||=G(`p`,{class:`text-catppuccin-text leading-relaxed mb-5`},` The Android app keeps the task list compact while leaving the details, subtasks, and appearance settings close at hand. `,-1),G(`div`,Vh,[(U(),W(H,null,V(r,e=>G(`figure`,{key:e.src},[G(`button`,{type:`button`,class:`block w-full rounded-md overflow-hidden border border-catppuccin-surface/60 bg-catppuccin-base/30 p-1.5 cursor-zoom-in`,"aria-label":`Open ${e.label} screenshot`,onClick:t=>c(e.src,`Kitsudo ${e.label} screen`)},[G(`img`,{src:e.src,alt:`Kitsudo ${e.label} screen`,class:`block w-full rounded`,loading:`lazy`},null,8,Uh)],8,Hh),G(`figcaption`,Wh,` ./`+M(e.label.toLowerCase().replace(` `,`-`)),1)])),64))])]),G(`section`,Gh,[t[2]||=G(`h2`,{id:`wear-os-companion`,class:`group text-xl font-semibold text-catppuccin-mauve mb-4`},[pa(` Wear OS companion`),G(`a`,{href:`#wear-os-companion`,class:`ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve`,"aria-label":`Link to Wear OS companion section`},`#`)],-1),t[3]||=G(`p`,{class:`text-catppuccin-text leading-relaxed mb-5`},` Check today's tasks, complete them, and open task details from your wrist. Phone and watch sync directly without an account. `,-1),G(`div`,Kh,[(U(),W(H,null,V(i,e=>G(`figure`,{key:e.src},[G(`button`,{type:`button`,class:`block w-full rounded-md overflow-hidden border border-catppuccin-surface/60 bg-catppuccin-base/30 p-1.5 cursor-zoom-in`,"aria-label":`Open Wear OS ${e.label} screenshot`,onClick:t=>c(e.src,`Kitsudo Wear OS ${e.label}`)},[G(`img`,{src:e.src,alt:`Kitsudo Wear OS ${e.label}`,class:`block w-full rounded-[28%]`,loading:`lazy`},null,8,Jh)],8,qh),G(`figcaption`,Yh,` ./`+M(e.label.toLowerCase().replace(` `,`-`)),1)])),64))])]),t[4]||=G(`section`,{class:`download-card`,"aria-labelledby":`download-heading`},[G(`div`,{class:`relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 drop-shadow-[0_8px_6px_rgba(0,0,0,0.35)]`,role:`img`,"aria-label":`Kitsudo app icon`},[G(`svg`,{viewBox:`0 0 100 100`,class:`absolute inset-0 w-full h-full`,"aria-hidden":`true`},[G(`defs`,null,[G(`filter`,{id:`kitsudoIconBevel`,x:`-20%`,y:`-20%`,width:`140%`,height:`140%`},[G(`feOffset`,{in:`SourceAlpha`,dx:`0`,dy:`1.5`,result:`downA`}),G(`feGaussianBlur`,{in:`downA`,stdDeviation:`0.8`,result:`downB`}),G(`feComposite`,{in:`SourceAlpha`,in2:`downB`,operator:`out`,result:`topEdge`}),G(`feFlood`,{"flood-color":`#ffffff`,"flood-opacity":`0.2`}),G(`feComposite`,{in2:`topEdge`,operator:`in`,result:`topShine`}),G(`feOffset`,{in:`SourceAlpha`,dx:`0`,dy:`-1.5`,result:`upA`}),G(`feGaussianBlur`,{in:`upA`,stdDeviation:`1.2`,result:`upB`}),G(`feComposite`,{in:`SourceAlpha`,in2:`upB`,operator:`out`,result:`bottomEdge`}),G(`feFlood`,{"flood-color":`#000000`,"flood-opacity":`0.35`}),G(`feComposite`,{in2:`bottomEdge`,operator:`in`,result:`bottomShade`}),G(`feMerge`,null,[G(`feMergeNode`,{in:`SourceGraphic`}),G(`feMergeNode`,{in:`topShine`}),G(`feMergeNode`,{in:`bottomShade`})])])]),G(`path`,{d:`M50,0 C13,0 0,13 0,50 C0,87 13,100 50,100 C87,100 100,87 100,50 C100,13 87,0 50,0 Z`,fill:`#24284b`,filter:`url(#kitsudoIconBevel)`})]),G(`img`,{src:`/kitsudo/logo.svg`,alt:``,class:`absolute inset-[8%] w-auto h-auto object-contain`})]),G(`div`,{class:`flex-1 min-w-[180px]`},[G(`div`,{class:`text-xs text-catppuccin-subtle mb-1`},` ~$ wget kitsudo.apk `),G(`h2`,{id:`download-heading`,class:`text-lg sm:text-xl font-bold text-catppuccin-text mb-1`},` Ready when you are. `),G(`p`,{class:`text-xs sm:text-sm text-catppuccin-gray`},` Free, open-source, and built without ads or tracking. `)]),G(`div`,{class:`flex flex-wrap gap-3`},[G(`a`,{href:`https://play.google.com/store/apps/details?id=dev.heckr.kitsudo`,target:`_blank`,rel:`noopener noreferrer`,class:`download-primary`},` [ Google Play ] `),G(`a`,{href:`https://github.com/hecker-01/Kitsudo/releases/latest`,target:`_blank`,rel:`noopener noreferrer`,class:`download-secondary`},` [ Latest APK ] `)])],-1)])]),_:1},8,[`project`]),K(xm,{src:o.value,alt:s.value,onClose:l},null,8,[`src`,`alt`]),K(Jd)])]))}},[[`__scopeId`,`data-v-a5a40791`]]),meta:{title:`Kitsudo | heckr.dev`}},{path:`/:pathMatch(.*)*`,name:`NotFound`,component:Gm,meta:{title:`404 Not Found | heckr.dev`}}],Zh=_l({history:Lc(),routes:Xh,scrollBehavior(e,t,n){return n||{top:0}}});Zh.beforeEach((e,t,n)=>{document.title=e.meta.title||`heckr.dev`,n()}),ms(bl).use(Zh).mount(`#app`),document.addEventListener(`dragstart`,e=>{e.target instanceof HTMLImageElement&&e.preventDefault()}),iu();