(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function Ks(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ae={},Jt=[],at=()=>{},Pr=()=>!1,Zn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),zs=e=>e.startsWith("onUpdate:"),be=Object.assign,Ys=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},da=Object.prototype.hasOwnProperty,ne=(e,t)=>da.call(e,t),W=Array.isArray,Qt=e=>Xn(e)==="[object Map]",Dr=e=>Xn(e)==="[object Set]",j=e=>typeof e=="function",me=e=>typeof e=="string",Pt=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",Ir=e=>(pe(e)||j(e))&&j(e.then)&&j(e.catch),Or=Object.prototype.toString,Xn=e=>Or.call(e),fa=e=>Xn(e).slice(8,-1),Lr=e=>Xn(e)==="[object Object]",Js=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=Ks(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),es=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},pa=/-\w/g,Ge=es(e=>e.replace(pa,t=>t.slice(1).toUpperCase())),ha=/\B([A-Z])/g,Ut=es(e=>e.replace(ha,"-$1").toLowerCase()),ts=es(e=>e.charAt(0).toUpperCase()+e.slice(1)),ps=es(e=>e?`on${ts(e)}`:""),At=(e,t)=>!Object.is(e,t),Nn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},$r=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Qs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ma=e=>{const t=me(e)?Number(e):NaN;return isNaN(t)?e:t};let Co;const ns=()=>Co||(Co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ke(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=me(s)?ya(s):Ke(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(me(e)||pe(e))return e}const ga=/;(?![^(]*\))/g,ba=/:([^]+)/,va=/\/\*[^]*?\*\//g;function ya(e){const t={};return e.replace(va,"").split(ga).forEach(n=>{if(n){const s=n.split(ba);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Wt(e){let t="";if(me(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const s=Wt(e[n]);s&&(t+=s+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wa=Ks(xa);function Mr(e){return!!e||e===""}const Nr=e=>!!(e&&e.__v_isRef===!0),Y=e=>me(e)?e:e==null?"":W(e)||pe(e)&&(e.toString===Or||!j(e.toString))?Nr(e)?Y(e.value):JSON.stringify(e,Br,2):String(e),Br=(e,t)=>Nr(t)?Br(e,t.value):Qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[hs(s,r)+" =>"]=o,n),{})}:Dr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>hs(n))}:Pt(t)?hs(t):pe(t)&&!W(t)&&!Lr(t)?String(t):t,hs=(e,t="")=>{var n;return Pt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Le;class _a{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){this._on>0&&--this._on===0&&(Le=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function ka(){return Le}let de;const ms=new WeakSet;class Fr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&Le.active&&Le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ms.has(this)&&(ms.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ur(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eo(this),Wr(this);const t=de,n=ze;de=this,ze=!0;try{return this.fn()}finally{Vr(this),de=t,ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)eo(t);this.deps=this.depsTail=void 0,Eo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ms.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ps(this)&&this.run()}get dirty(){return Ps(this)}}let Hr=0,pn,hn;function Ur(e,t=!1){if(e.flags|=8,t){e.next=hn,hn=e;return}e.next=pn,pn=e}function Zs(){Hr++}function Xs(){if(--Hr>0)return;if(hn){let t=hn;for(hn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;pn;){let t=pn;for(pn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Wr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Vr(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),eo(s),Sa(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Ps(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(jr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function jr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===xn)||(e.globalVersion=xn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ps(e))))return;e.flags|=2;const t=e.dep,n=de,s=ze;de=e,ze=!0;try{Wr(e);const o=e.fn(e._value);(t.version===0||At(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{de=n,ze=s,Vr(e),e.flags&=-3}}function eo(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)eo(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Sa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ze=!0;const Gr=[];function mt(){Gr.push(ze),ze=!1}function gt(){const e=Gr.pop();ze=e===void 0?!0:e}function Eo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=de;de=void 0;try{t()}finally{de=n}}}let xn=0;class Ca{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class to{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!ze||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new Ca(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,qr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=s)}return n}trigger(t){this.version++,xn++,this.notify(t)}notify(t){Zs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xs()}}}function qr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)qr(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ds=new WeakMap,Bt=Symbol(""),Is=Symbol(""),wn=Symbol("");function _e(e,t,n){if(ze&&de){let s=Ds.get(e);s||Ds.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new to),o.map=s,o.key=n),o.track()}}function pt(e,t,n,s,o,r){const i=Ds.get(e);if(!i){xn++;return}const a=c=>{c&&c.trigger()};if(Zs(),t==="clear")i.forEach(a);else{const c=W(e),u=c&&Js(n);if(c&&n==="length"){const l=Number(s);i.forEach((f,h)=>{(h==="length"||h===wn||!Pt(h)&&h>=l)&&a(f)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(wn)),t){case"add":c?u&&a(i.get("length")):(a(i.get(Bt)),Qt(e)&&a(i.get(Is)));break;case"delete":c||(a(i.get(Bt)),Qt(e)&&a(i.get(Is)));break;case"set":Qt(e)&&a(i.get(Bt));break}}Xs()}function qt(e){const t=J(e);return t===e?t:(_e(t,"iterate",wn),je(e)?t:t.map(Je))}function ss(e){return _e(e=J(e),"iterate",wn),e}function kt(e,t){return bt(e)?tn(Ft(e)?Je(t):t):Je(t)}const Ea={__proto__:null,[Symbol.iterator](){return gs(this,Symbol.iterator,e=>kt(this,e))},concat(...e){return qt(this).concat(...e.map(t=>W(t)?qt(t):t))},entries(){return gs(this,"entries",e=>(e[1]=kt(this,e[1]),e))},every(e,t){return lt(this,"every",e,t,void 0,arguments)},filter(e,t){return lt(this,"filter",e,t,n=>n.map(s=>kt(this,s)),arguments)},find(e,t){return lt(this,"find",e,t,n=>kt(this,n),arguments)},findIndex(e,t){return lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return lt(this,"findLast",e,t,n=>kt(this,n),arguments)},findLastIndex(e,t){return lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return bs(this,"includes",e)},indexOf(...e){return bs(this,"indexOf",e)},join(e){return qt(this).join(e)},lastIndexOf(...e){return bs(this,"lastIndexOf",e)},map(e,t){return lt(this,"map",e,t,void 0,arguments)},pop(){return an(this,"pop")},push(...e){return an(this,"push",e)},reduce(e,...t){return Ao(this,"reduce",e,t)},reduceRight(e,...t){return Ao(this,"reduceRight",e,t)},shift(){return an(this,"shift")},some(e,t){return lt(this,"some",e,t,void 0,arguments)},splice(...e){return an(this,"splice",e)},toReversed(){return qt(this).toReversed()},toSorted(e){return qt(this).toSorted(e)},toSpliced(...e){return qt(this).toSpliced(...e)},unshift(...e){return an(this,"unshift",e)},values(){return gs(this,"values",e=>kt(this,e))}};function gs(e,t,n){const s=ss(e),o=s[t]();return s!==e&&!je(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=n(r.value)),r}),o}const Aa=Array.prototype;function lt(e,t,n,s,o,r){const i=ss(e),a=i!==e&&!je(e),c=i[t];if(c!==Aa[t]){const f=c.apply(e,r);return a?Je(f):f}let u=n;i!==e&&(a?u=function(f,h){return n.call(this,kt(e,f),h,e)}:n.length>2&&(u=function(f,h){return n.call(this,f,h,e)}));const l=c.call(i,u,s);return a&&o?o(l):l}function Ao(e,t,n,s){const o=ss(e);let r=n;return o!==e&&(je(e)?n.length>3&&(r=function(i,a,c){return n.call(this,i,a,c,e)}):r=function(i,a,c){return n.call(this,i,kt(e,a),c,e)}),o[t](r,...s)}function bs(e,t,n){const s=J(e);_e(s,"iterate",wn);const o=s[t](...n);return(o===-1||o===!1)&&oo(n[0])?(n[0]=J(n[0]),s[t](...n)):o}function an(e,t,n=[]){mt(),Zs();const s=J(e)[t].apply(e,n);return Xs(),gt(),s}const Ta=Ks("__proto__,__v_isRef,__isVue"),Kr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pt));function Ra(e){Pt(e)||(e=String(e));const t=J(this);return _e(t,"has",e),t.hasOwnProperty(e)}class zr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?Fa:Zr:r?Qr:Jr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=W(t);if(!o){let c;if(i&&(c=Ea[n]))return c;if(n==="hasOwnProperty")return Ra}const a=Reflect.get(t,n,Ce(t)?t:s);if((Pt(n)?Kr.has(n):Ta(n))||(o||_e(t,"get",n),r))return a;if(Ce(a)){const c=i&&Js(n)?a:a.value;return o&&pe(c)?Ls(c):c}return pe(a)?o?Ls(a):Tn(a):a}}class Yr extends zr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];const i=W(t)&&Js(n);if(!this._isShallow){const u=bt(r);if(!je(s)&&!bt(s)&&(r=J(r),s=J(s)),!i&&Ce(r)&&!Ce(s))return u||(r.value=s),!0}const a=i?Number(n)<t.length:ne(t,n),c=Reflect.set(t,n,s,Ce(t)?t:o);return t===J(o)&&(a?At(s,r)&&pt(t,"set",n,s):pt(t,"add",n,s)),c}deleteProperty(t,n){const s=ne(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&pt(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!Pt(n)||!Kr.has(n))&&_e(t,"has",n),s}ownKeys(t){return _e(t,"iterate",W(t)?"length":Bt),Reflect.ownKeys(t)}}class Pa extends zr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Da=new Yr,Ia=new Pa,Oa=new Yr(!0);const Os=e=>e,In=e=>Reflect.getPrototypeOf(e);function La(e,t,n){return function(...s){const o=this.__v_raw,r=J(o),i=Qt(r),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...s),l=n?Os:t?tn:Je;return!t&&_e(r,"iterate",c?Is:Bt),be(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[l(f[0]),l(f[1])]:l(f),done:h}}})}}function On(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function $a(e,t){const n={get(o){const r=this.__v_raw,i=J(r),a=J(o);e||(At(o,a)&&_e(i,"get",o),_e(i,"get",a));const{has:c}=In(i),u=t?Os:e?tn:Je;if(c.call(i,o))return u(r.get(o));if(c.call(i,a))return u(r.get(a));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&_e(J(o),"iterate",Bt),o.size},has(o){const r=this.__v_raw,i=J(r),a=J(o);return e||(At(o,a)&&_e(i,"has",o),_e(i,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const i=this,a=i.__v_raw,c=J(a),u=t?Os:e?tn:Je;return!e&&_e(c,"iterate",Bt),a.forEach((l,f)=>o.call(r,u(l),u(f),i))}};return be(n,e?{add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear")}:{add(o){!t&&!je(o)&&!bt(o)&&(o=J(o));const r=J(this);return In(r).has.call(r,o)||(r.add(o),pt(r,"add",o,o)),this},set(o,r){!t&&!je(r)&&!bt(r)&&(r=J(r));const i=J(this),{has:a,get:c}=In(i);let u=a.call(i,o);u||(o=J(o),u=a.call(i,o));const l=c.call(i,o);return i.set(o,r),u?At(r,l)&&pt(i,"set",o,r):pt(i,"add",o,r),this},delete(o){const r=J(this),{has:i,get:a}=In(r);let c=i.call(r,o);c||(o=J(o),c=i.call(r,o)),a&&a.call(r,o);const u=r.delete(o);return c&&pt(r,"delete",o,void 0),u},clear(){const o=J(this),r=o.size!==0,i=o.clear();return r&&pt(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=La(o,e,t)}),n}function no(e,t){const n=$a(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(ne(n,o)&&o in s?n:s,o,r)}const Ma={get:no(!1,!1)},Na={get:no(!1,!0)},Ba={get:no(!0,!1)};const Jr=new WeakMap,Qr=new WeakMap,Zr=new WeakMap,Fa=new WeakMap;function Ha(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ua(e){return e.__v_skip||!Object.isExtensible(e)?0:Ha(fa(e))}function Tn(e){return bt(e)?e:so(e,!1,Da,Ma,Jr)}function Xr(e){return so(e,!1,Oa,Na,Qr)}function Ls(e){return so(e,!0,Ia,Ba,Zr)}function so(e,t,n,s,o){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=Ua(e);if(r===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,r===2?s:n);return o.set(e,a),a}function Ft(e){return bt(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function bt(e){return!!(e&&e.__v_isReadonly)}function je(e){return!!(e&&e.__v_isShallow)}function oo(e){return e?!!e.__v_raw:!1}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function Wa(e){return!ne(e,"__v_skip")&&Object.isExtensible(e)&&$r(e,"__v_skip",!0),e}const Je=e=>pe(e)?Tn(e):e,tn=e=>pe(e)?Ls(e):e;function Ce(e){return e?e.__v_isRef===!0:!1}function ke(e){return ei(e,!1)}function Va(e){return ei(e,!0)}function ei(e,t){return Ce(e)?e:new ja(e,t)}class ja{constructor(t,n){this.dep=new to,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:J(t),this._value=n?t:Je(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||je(t)||bt(t);t=s?t:J(t),At(t,n)&&(this._rawValue=t,this._value=s?t:Je(t),this.dep.trigger())}}function Be(e){return Ce(e)?e.value:e}const Ga={get:(e,t,n)=>t==="__v_raw"?e:Be(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Ce(o)&&!Ce(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function ti(e){return Ft(e)?e:new Proxy(e,Ga)}class qa{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new to(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return Ur(this,!0),!0}get value(){const t=this.dep.track();return jr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ka(e,t,n=!1){let s,o;return j(e)?s=e:(s=e.get,o=e.set),new qa(s,o,n)}const Ln={},Wn=new WeakMap;let $t;function za(e,t=!1,n=$t){if(n){let s=Wn.get(n);s||Wn.set(n,s=[]),s.push(e)}}function Ya(e,t,n=ae){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:a,call:c}=n,u=$=>o?$:je($)||o===!1||o===0?ht($,1):ht($);let l,f,h,m,w=!1,C=!1;if(Ce(e)?(f=()=>e.value,w=je(e)):Ft(e)?(f=()=>u(e),w=!0):W(e)?(C=!0,w=e.some($=>Ft($)||je($)),f=()=>e.map($=>{if(Ce($))return $.value;if(Ft($))return u($);if(j($))return c?c($,2):$()})):j(e)?t?f=c?()=>c(e,2):e:f=()=>{if(h){mt();try{h()}finally{gt()}}const $=$t;$t=l;try{return c?c(e,3,[m]):e(m)}finally{$t=$}}:f=at,t&&o){const $=f,q=o===!0?1/0:o;f=()=>ht($(),q)}const U=ka(),M=()=>{l.stop(),U&&U.active&&Ys(U.effects,l)};if(r&&t){const $=t;t=(...q)=>{$(...q),M()}}let L=C?new Array(e.length).fill(Ln):Ln;const N=$=>{if(!(!(l.flags&1)||!l.dirty&&!$))if(t){const q=l.run();if(o||w||(C?q.some((ie,oe)=>At(ie,L[oe])):At(q,L))){h&&h();const ie=$t;$t=l;try{const oe=[q,L===Ln?void 0:C&&L[0]===Ln?[]:L,m];L=q,c?c(t,3,oe):t(...oe)}finally{$t=ie}}}else l.run()};return a&&a(N),l=new Fr(f),l.scheduler=i?()=>i(N,!1):N,m=$=>za($,!1,l),h=l.onStop=()=>{const $=Wn.get(l);if($){if(c)c($,4);else for(const q of $)q();Wn.delete(l)}},t?s?N(!0):L=l.run():i?i(N.bind(null,!0),!0):l.run(),M.pause=l.pause.bind(l),M.resume=l.resume.bind(l),M.stop=M,M}function ht(e,t=1/0,n){if(t<=0||!pe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ce(e))ht(e.value,t,n);else if(W(e))for(let s=0;s<e.length;s++)ht(e[s],t,n);else if(Dr(e)||Qt(e))e.forEach(s=>{ht(s,t,n)});else if(Lr(e)){for(const s in e)ht(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&ht(e[s],t,n)}return e}function Rn(e,t,n,s){try{return s?e(...s):e()}catch(o){os(o,t,n)}}function Qe(e,t,n,s){if(j(e)){const o=Rn(e,t,n,s);return o&&Ir(o)&&o.catch(r=>{os(r,t,n)}),o}if(W(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Qe(e[r],t,n,s));return o}}function os(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ae;if(t){let a=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](e,c,u)===!1)return}a=a.parent}if(r){mt(),Rn(r,null,10,[e,c,u]),gt();return}}Ja(e,n,o,s,i)}function Ja(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Te=[];let rt=-1;const Zt=[];let St=null,Kt=0;const ni=Promise.resolve();let Vn=null;function ro(e){const t=Vn||ni;return e?t.then(this?e.bind(this):e):t}function Qa(e){let t=rt+1,n=Te.length;for(;t<n;){const s=t+n>>>1,o=Te[s],r=_n(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function io(e){if(!(e.flags&1)){const t=_n(e),n=Te[Te.length-1];!n||!(e.flags&2)&&t>=_n(n)?Te.push(e):Te.splice(Qa(t),0,e),e.flags|=1,si()}}function si(){Vn||(Vn=ni.then(ri))}function Za(e){W(e)?Zt.push(...e):St&&e.id===-1?St.splice(Kt+1,0,e):e.flags&1||(Zt.push(e),e.flags|=1),si()}function To(e,t,n=rt+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function oi(e){if(Zt.length){const t=[...new Set(Zt)].sort((n,s)=>_n(n)-_n(s));if(Zt.length=0,St){St.push(...t);return}for(St=t,Kt=0;Kt<St.length;Kt++){const n=St[Kt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}St=null,Kt=0}}const _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ri(e){try{for(rt=0;rt<Te.length;rt++){const t=Te[rt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Rn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;rt<Te.length;rt++){const t=Te[rt];t&&(t.flags&=-2)}rt=-1,Te.length=0,oi(),Vn=null,(Te.length||Zt.length)&&ri()}}let Fe=null,ii=null;function jn(e){const t=Fe;return Fe=e,ii=e&&e.type.__scopeId||null,t}function Tt(e,t=Fe,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Kn(-1);const r=jn(t);let i;try{i=e(...o)}finally{jn(r),s._d&&Kn(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Xa(e,t){if(Fe===null)return e;const n=us(Fe),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,a,c=ae]=t[o];r&&(j(r)&&(r={mounted:r,updated:r}),r.deep&&ht(i),s.push({dir:r,instance:n,value:i,oldValue:void 0,arg:a,modifiers:c}))}return e}function It(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let c=a.dir[s];c&&(mt(),Qe(c,n,8,[e.el,a,e,t]),gt())}}function Bn(e,t){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[e]=t}}function Ye(e,t,n=!1){const s=ho();if(s||en){let o=en?en._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&j(t)?t.call(s&&s.proxy):t}}const ec=Symbol.for("v-scx"),tc=()=>Ye(ec);function Xt(e,t,n){return ai(e,t,n)}function ai(e,t,n=ae){const{immediate:s,deep:o,flush:r,once:i}=n,a=be({},n),c=t&&s||!t&&r!=="post";let u;if(En){if(r==="sync"){const m=tc();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=at,m.resume=at,m.pause=at,m}}const l=Se;a.call=(m,w,C)=>Qe(m,l,w,C);let f=!1;r==="post"?a.scheduler=m=>{Ne(m,l&&l.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(m,w)=>{w?m():io(m)}),a.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,l&&(m.id=l.uid,m.i=l))};const h=Ya(e,t,a);return En&&(u?u.push(h):c&&h()),h}function nc(e,t,n){const s=this.proxy,o=me(e)?e.includes(".")?ci(s,e):()=>s[e]:e.bind(s,s);let r;j(t)?r=t:(r=t.handler,n=t);const i=Pn(this),a=ai(o,r.bind(s),n);return i(),a}function ci(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const sc=Symbol("_vte"),li=e=>e.__isTeleport,ft=Symbol("_leaveCb"),$n=Symbol("_enterCb");function ui(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vt(()=>{e.isMounted=!0}),as(()=>{e.isUnmounting=!0}),e}const We=[Function,Array],di={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},fi=e=>{const t=e.subTree;return t.component?fi(t.component):t},oc={name:"BaseTransition",props:di,setup(e,{slots:t}){const n=ho(),s=ui();return()=>{const o=t.default&&ao(t.default(),!0);if(!o||!o.length)return;const r=pi(o),i=J(e),{mode:a}=i;if(s.isLeaving)return vs(r);const c=Ro(r);if(!c)return vs(r);let u=kn(c,i,s,n,f=>u=f);c.type!==Pe&&Ht(c,u);let l=n.subTree&&Ro(n.subTree);if(l&&l.type!==Pe&&!Mt(l,c)&&fi(n).type!==Pe){let f=kn(l,i,s,n);if(Ht(l,f),a==="out-in"&&c.type!==Pe)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,l=void 0},vs(r);a==="in-out"&&c.type!==Pe?f.delayLeave=(h,m,w)=>{const C=hi(s,l);C[String(l.key)]=l,h[ft]=()=>{m(),h[ft]=void 0,delete u.delayedLeave,l=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return r}}};function pi(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Pe){t=n;break}}return t}const rc=oc;function hi(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function kn(e,t,n,s,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:w,onLeaveCancelled:C,onBeforeAppear:U,onAppear:M,onAfterAppear:L,onAppearCancelled:N}=t,$=String(e.key),q=hi(n,e),ie=(G,Q)=>{G&&Qe(G,s,9,Q)},oe=(G,Q)=>{const le=Q[1];ie(G,Q),W(G)?G.every(I=>I.length<=1)&&le():G.length<=1&&le()},we={mode:i,persisted:a,beforeEnter(G){let Q=c;if(!n.isMounted)if(r)Q=U||c;else return;G[ft]&&G[ft](!0);const le=q[$];le&&Mt(e,le)&&le.el[ft]&&le.el[ft](),ie(Q,[G])},enter(G){let Q=u,le=l,I=f;if(!n.isMounted)if(r)Q=M||u,le=L||l,I=N||f;else return;let X=!1;const ye=G[$n]=$e=>{X||(X=!0,$e?ie(I,[G]):ie(le,[G]),we.delayedLeave&&we.delayedLeave(),G[$n]=void 0)};Q?oe(Q,[G,ye]):ye()},leave(G,Q){const le=String(e.key);if(G[$n]&&G[$n](!0),n.isUnmounting)return Q();ie(h,[G]);let I=!1;const X=G[ft]=ye=>{I||(I=!0,Q(),ye?ie(C,[G]):ie(w,[G]),G[ft]=void 0,q[le]===e&&delete q[le])};q[le]=e,m?oe(m,[G,X]):X()},clone(G){const Q=kn(G,t,n,s,o);return o&&o(Q),Q}};return we}function vs(e){if(rs(e))return e=Rt(e),e.children=null,e}function Ro(e){if(!rs(e))return li(e.type)&&e.children?pi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&j(n.default))return n.default()}}function Ht(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ht(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ao(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===fe?(i.patchFlag&128&&o++,s=s.concat(ao(i.children,t,a))):(t||i.type!==Pe)&&s.push(a!=null?Rt(i,{key:a}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function mi(e,t){return j(e)?be({name:e.name},t,{setup:e}):e}function gi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Gn=new WeakMap;function mn(e,t,n,s,o=!1){if(W(e)){e.forEach((w,C)=>mn(w,t&&(W(t)?t[C]:t),n,s,o));return}if(gn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&mn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?us(s.component):s.el,i=o?null:r,{i:a,r:c}=e,u=t&&t.r,l=a.refs===ae?a.refs={}:a.refs,f=a.setupState,h=J(f),m=f===ae?Pr:w=>ne(h,w);if(u!=null&&u!==c){if(Po(t),me(u))l[u]=null,m(u)&&(f[u]=null);else if(Ce(u)){u.value=null;const w=t;w.k&&(l[w.k]=null)}}if(j(c))Rn(c,a,12,[i,l]);else{const w=me(c),C=Ce(c);if(w||C){const U=()=>{if(e.f){const M=w?m(c)?f[c]:l[c]:c.value;if(o)W(M)&&Ys(M,r);else if(W(M))M.includes(r)||M.push(r);else if(w)l[c]=[r],m(c)&&(f[c]=l[c]);else{const L=[r];c.value=L,e.k&&(l[e.k]=L)}}else w?(l[c]=i,m(c)&&(f[c]=i)):C&&(c.value=i,e.k&&(l[e.k]=i))};if(i){const M=()=>{U(),Gn.delete(e)};M.id=-1,Gn.set(e,M),Ne(M,n)}else Po(e),U()}}}function Po(e){const t=Gn.get(e);t&&(t.flags|=8,Gn.delete(e))}ns().requestIdleCallback;ns().cancelIdleCallback;const gn=e=>!!e.type.__asyncLoader,rs=e=>e.type.__isKeepAlive;function ic(e,t){bi(e,"a",t)}function ac(e,t){bi(e,"da",t)}function bi(e,t,n=Se){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(is(t,s,n),n){let o=n.parent;for(;o&&o.parent;)rs(o.parent.vnode)&&cc(s,t,n,o),o=o.parent}}function cc(e,t,n,s){const o=is(t,e,s,!0);yi(()=>{Ys(s[t],o)},n)}function is(e,t,n=Se,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{mt();const a=Pn(n),c=Qe(t,n,e,i);return a(),gt(),c});return s?o.unshift(r):o.push(r),r}}const vt=e=>(t,n=Se)=>{(!En||e==="sp")&&is(e,(...s)=>t(...s),n)},lc=vt("bm"),Vt=vt("m"),uc=vt("bu"),vi=vt("u"),as=vt("bum"),yi=vt("um"),dc=vt("sp"),fc=vt("rtg"),pc=vt("rtc");function hc(e,t=Se){is("ec",e,t)}const xi="components";function co(e,t){return _i(xi,e,!0,t)||e}const wi=Symbol.for("v-ndc");function mc(e){return me(e)?_i(xi,e,!1)||e:e||wi}function _i(e,t,n=!0,s=!1){const o=Fe||Se;if(o){const r=o.type;{const a=Xc(r,!1);if(a&&(a===t||a===Ge(t)||a===ts(Ge(t))))return r}const i=Do(o[e]||r[e],t)||Do(o.appContext[e],t);return!i&&s?r:i}}function Do(e,t){return e&&(e[t]||e[Ge(t)]||e[ts(Ge(t))])}function qe(e,t,n,s){let o;const r=n,i=W(e);if(i||me(e)){const a=i&&Ft(e);let c=!1,u=!1;a&&(c=!je(e),u=bt(e),e=ss(e)),o=new Array(e.length);for(let l=0,f=e.length;l<f;l++)o[l]=t(c?u?tn(Je(e[l])):Je(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r)}else if(pe(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,r));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const l=a[c];o[c]=t(e[l],l,c,r)}}else o=[];return o}const $s=e=>e?Ui(e)?us(e):$s(e.parent):null,bn=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$s(e.parent),$root:e=>$s(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Si(e),$forceUpdate:e=>e.f||(e.f=()=>{io(e.update)}),$nextTick:e=>e.n||(e.n=ro.bind(e.proxy)),$watch:e=>nc.bind(e)}),ys=(e,t)=>e!==ae&&!e.__isScriptSetup&&ne(e,t),gc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:c}=e;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(ys(s,t))return i[t]=1,s[t];if(o!==ae&&ne(o,t))return i[t]=2,o[t];if(ne(r,t))return i[t]=3,r[t];if(n!==ae&&ne(n,t))return i[t]=4,n[t];Ms&&(i[t]=0)}}const u=bn[t];let l,f;if(u)return t==="$attrs"&&_e(e.attrs,"get",""),u(e);if((l=a.__cssModules)&&(l=l[t]))return l;if(n!==ae&&ne(n,t))return i[t]=4,n[t];if(f=c.config.globalProperties,ne(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return ys(o,t)?(o[t]=n,!0):s!==ae&&ne(s,t)?(s[t]=n,!0):ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:r,type:i}},a){let c;return!!(n[a]||e!==ae&&a[0]!=="$"&&ne(e,a)||ys(t,a)||ne(r,a)||ne(s,a)||ne(bn,a)||ne(o.config.globalProperties,a)||(c=i.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ne(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Io(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ms=!0;function bc(e){const t=Si(e),n=e.proxy,s=e.ctx;Ms=!1,t.beforeCreate&&Oo(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:h,beforeUpdate:m,updated:w,activated:C,deactivated:U,beforeDestroy:M,beforeUnmount:L,destroyed:N,unmounted:$,render:q,renderTracked:ie,renderTriggered:oe,errorCaptured:we,serverPrefetch:G,expose:Q,inheritAttrs:le,components:I,directives:X,filters:ye}=t;if(u&&vc(u,s,null),i)for(const re in i){const ee=i[re];j(ee)&&(s[re]=ee.bind(n))}if(o){const re=o.call(n,n);pe(re)&&(e.data=Tn(re))}if(Ms=!0,r)for(const re in r){const ee=r[re],ct=j(ee)?ee.bind(n,n):j(ee.get)?ee.get.bind(n,n):at,yt=!j(ee)&&j(ee.set)?ee.set.bind(n):at,Xe=ce({get:ct,set:yt});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:De=>Xe.value=De})}if(a)for(const re in a)ki(a[re],s,n,re);if(c){const re=j(c)?c.call(n):c;Reflect.ownKeys(re).forEach(ee=>{Bn(ee,re[ee])})}l&&Oo(l,e,"c");function ge(re,ee){W(ee)?ee.forEach(ct=>re(ct.bind(n))):ee&&re(ee.bind(n))}if(ge(lc,f),ge(Vt,h),ge(uc,m),ge(vi,w),ge(ic,C),ge(ac,U),ge(hc,we),ge(pc,ie),ge(fc,oe),ge(as,L),ge(yi,$),ge(dc,G),W(Q))if(Q.length){const re=e.exposed||(e.exposed={});Q.forEach(ee=>{Object.defineProperty(re,ee,{get:()=>n[ee],set:ct=>n[ee]=ct,enumerable:!0})})}else e.exposed||(e.exposed={});q&&e.render===at&&(e.render=q),le!=null&&(e.inheritAttrs=le),I&&(e.components=I),X&&(e.directives=X),G&&gi(e)}function vc(e,t,n=at){W(e)&&(e=Ns(e));for(const s in e){const o=e[s];let r;pe(o)?"default"in o?r=Ye(o.from||s,o.default,!0):r=Ye(o.from||s):r=Ye(o),Ce(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Oo(e,t,n){Qe(W(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ki(e,t,n,s){let o=s.includes(".")?ci(n,s):()=>n[s];if(me(e)){const r=t[e];j(r)&&Xt(o,r)}else if(j(e))Xt(o,e.bind(n));else if(pe(e))if(W(e))e.forEach(r=>ki(r,t,n,s));else{const r=j(e.handler)?e.handler.bind(n):t[e.handler];j(r)&&Xt(o,r,e)}}function Si(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let c;return a?c=a:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(u=>qn(c,u,i,!0)),qn(c,t,i)),pe(t)&&r.set(t,c),c}function qn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&qn(e,r,n,!0),o&&o.forEach(i=>qn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=yc[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const yc={data:Lo,props:$o,emits:$o,methods:dn,computed:dn,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:dn,directives:dn,watch:wc,provide:Lo,inject:xc};function Lo(e,t){return t?e?function(){return be(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function xc(e,t){return dn(Ns(e),Ns(t))}function Ns(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ee(e,t){return e?[...new Set([].concat(e,t))]:t}function dn(e,t){return e?be(Object.create(null),e,t):t}function $o(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:be(Object.create(null),Io(e),Io(t??{})):t}function wc(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const s in t)n[s]=Ee(e[s],t[s]);return n}function Ci(){return{app:null,config:{isNativeTag:Pr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _c=0;function kc(e,t){return function(s,o=null){j(s)||(s=be({},s)),o!=null&&!pe(o)&&(o=null);const r=Ci(),i=new WeakSet,a=[];let c=!1;const u=r.app={_uid:_c++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:tl,get config(){return r.config},set config(l){},use(l,...f){return i.has(l)||(l&&j(l.install)?(i.add(l),l.install(u,...f)):j(l)&&(i.add(l),l(u,...f))),u},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),u},component(l,f){return f?(r.components[l]=f,u):r.components[l]},directive(l,f){return f?(r.directives[l]=f,u):r.directives[l]},mount(l,f,h){if(!c){const m=u._ceVNode||Z(s,o);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),e(m,l,h),c=!0,u._container=l,l.__vue_app__=u,us(m.component)}},onUnmount(l){a.push(l)},unmount(){c&&(Qe(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(l,f){return r.provides[l]=f,u},runWithContext(l){const f=en;en=u;try{return l()}finally{en=f}}};return u}}let en=null;const Sc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ge(t)}Modifiers`]||e[`${Ut(t)}Modifiers`];function Cc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ae;let o=n;const r=t.startsWith("update:"),i=r&&Sc(s,t.slice(7));i&&(i.trim&&(o=n.map(l=>me(l)?l.trim():l)),i.number&&(o=n.map(Qs)));let a,c=s[a=ps(t)]||s[a=ps(Ge(t))];!c&&r&&(c=s[a=ps(Ut(t))]),c&&Qe(c,e,6,o);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qe(u,e,6,o)}}const Ec=new WeakMap;function Ei(e,t,n=!1){const s=n?Ec:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!j(e)){const c=u=>{const l=Ei(u,t,!0);l&&(a=!0,be(i,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(pe(e)&&s.set(e,null),null):(W(r)?r.forEach(c=>i[c]=null):be(i,r),pe(e)&&s.set(e,i),i)}function cs(e,t){return!e||!Zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(e,t[0].toLowerCase()+t.slice(1))||ne(e,Ut(t))||ne(e,t))}function Mo(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:a,emit:c,render:u,renderCache:l,props:f,data:h,setupState:m,ctx:w,inheritAttrs:C}=e,U=jn(e);let M,L;try{if(n.shapeFlag&4){const $=o||s,q=$;M=it(u.call(q,$,l,f,m,h,w)),L=a}else{const $=t;M=it($.length>1?$(f,{attrs:a,slots:i,emit:c}):$(f,null)),L=t.props?a:Ac(a)}}catch($){vn.length=0,os($,e,1),M=Z(Pe)}let N=M;if(L&&C!==!1){const $=Object.keys(L),{shapeFlag:q}=N;$.length&&q&7&&(r&&$.some(zs)&&(L=Tc(L,r)),N=Rt(N,L,!1,!0))}return n.dirs&&(N=Rt(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&Ht(N,n.transition),M=N,jn(U),M}const Ac=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zn(n))&&((t||(t={}))[n]=e[n]);return t},Tc=(e,t)=>{const n={};for(const s in e)(!zs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Rc(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:c}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?No(s,i,u):!!i;if(c&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const h=l[f];if(i[h]!==s[h]&&!cs(u,h))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?No(s,i,u):!0:!!i;return!1}function No(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!cs(n,r))return!0}return!1}function Pc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ai={},Ti=()=>Object.create(Ai),Ri=e=>Object.getPrototypeOf(e)===Ai;function Dc(e,t,n,s=!1){const o={},r=Ti();e.propsDefaults=Object.create(null),Pi(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Xr(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Ic(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=J(o),[c]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let f=0;f<l.length;f++){let h=l[f];if(cs(e.emitsOptions,h))continue;const m=t[h];if(c)if(ne(r,h))m!==r[h]&&(r[h]=m,u=!0);else{const w=Ge(h);o[w]=Bs(c,a,w,m,e,!1)}else m!==r[h]&&(r[h]=m,u=!0)}}}else{Pi(e,t,o,r)&&(u=!0);let l;for(const f in a)(!t||!ne(t,f)&&((l=Ut(f))===f||!ne(t,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(o[f]=Bs(c,a,f,void 0,e,!0)):delete o[f]);if(r!==a)for(const f in r)(!t||!ne(t,f))&&(delete r[f],u=!0)}u&&pt(e.attrs,"set","")}function Pi(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(fn(c))continue;const u=t[c];let l;o&&ne(o,l=Ge(c))?!r||!r.includes(l)?n[l]=u:(a||(a={}))[l]=u:cs(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(r){const c=J(n),u=a||ae;for(let l=0;l<r.length;l++){const f=r[l];n[f]=Bs(o,c,f,u[f],e,!ne(u,f))}}return i}function Bs(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=ne(i,"default");if(a&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&j(c)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const l=Pn(o);s=u[n]=c.call(null,t),l()}}else s=c;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===Ut(n))&&(s=!0))}return s}const Oc=new WeakMap;function Di(e,t,n=!1){const s=n?Oc:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let c=!1;if(!j(e)){const l=f=>{c=!0;const[h,m]=Di(f,t,!0);be(i,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!r&&!c)return pe(e)&&s.set(e,Jt),Jt;if(W(r))for(let l=0;l<r.length;l++){const f=Ge(r[l]);Bo(f)&&(i[f]=ae)}else if(r)for(const l in r){const f=Ge(l);if(Bo(f)){const h=r[l],m=i[f]=W(h)||j(h)?{type:h}:be({},h),w=m.type;let C=!1,U=!0;if(W(w))for(let M=0;M<w.length;++M){const L=w[M],N=j(L)&&L.name;if(N==="Boolean"){C=!0;break}else N==="String"&&(U=!1)}else C=j(w)&&w.name==="Boolean";m[0]=C,m[1]=U,(C||ne(m,"default"))&&a.push(f)}}const u=[i,a];return pe(e)&&s.set(e,u),u}function Bo(e){return e[0]!=="$"&&!fn(e)}const lo=e=>e==="_"||e==="_ctx"||e==="$stable",uo=e=>W(e)?e.map(it):[it(e)],Lc=(e,t,n)=>{if(t._n)return t;const s=Tt((...o)=>uo(t(...o)),n);return s._c=!1,s},Ii=(e,t,n)=>{const s=e._ctx;for(const o in e){if(lo(o))continue;const r=e[o];if(j(r))t[o]=Lc(o,r,s);else if(r!=null){const i=uo(r);t[o]=()=>i}}},Oi=(e,t)=>{const n=uo(t);e.slots.default=()=>n},Li=(e,t,n)=>{for(const s in t)(n||!lo(s))&&(e[s]=t[s])},$c=(e,t,n)=>{const s=e.slots=Ti();if(e.vnode.shapeFlag&32){const o=t._;o?(Li(s,t,n),n&&$r(s,"_",o,!0)):Ii(t,s)}else t&&Oi(e,t)},Mc=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=ae;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Li(o,t,n):(r=!t.$stable,Ii(t,o)),i=t}else t&&(Oi(e,t),i={default:1});if(r)for(const a in o)!lo(a)&&i[a]==null&&delete o[a]},Ne=Uc;function Nc(e){return Bc(e)}function Bc(e,t){const n=ns();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:h,setScopeId:m=at,insertStaticContent:w}=e,C=(d,p,g,b=null,x=null,v=null,A=void 0,E=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Mt(d,p)&&(b=y(d),De(d,x,v,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:k,ref:H,shapeFlag:P}=p;switch(k){case ls:U(d,p,g,b);break;case Pe:M(d,p,g,b);break;case Fn:d==null&&L(p,g,b,A);break;case fe:I(d,p,g,b,x,v,A,E,S);break;default:P&1?q(d,p,g,b,x,v,A,E,S):P&6?X(d,p,g,b,x,v,A,E,S):(P&64||P&128)&&k.process(d,p,g,b,x,v,A,E,S,B)}H!=null&&x?mn(H,d&&d.ref,v,p||d,!p):H==null&&d&&d.ref!=null&&mn(d.ref,null,v,d,!0)},U=(d,p,g,b)=>{if(d==null)s(p.el=a(p.children),g,b);else{const x=p.el=d.el;p.children!==d.children&&u(x,p.children)}},M=(d,p,g,b)=>{d==null?s(p.el=c(p.children||""),g,b):p.el=d.el},L=(d,p,g,b)=>{[d.el,d.anchor]=w(d.children,p,g,b,d.el,d.anchor)},N=({el:d,anchor:p},g,b)=>{let x;for(;d&&d!==p;)x=h(d),s(d,g,b),d=x;s(p,g,b)},$=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),o(d),d=g;o(p)},q=(d,p,g,b,x,v,A,E,S)=>{if(p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),d==null)ie(p,g,b,x,v,A,E,S);else{const k=d.el&&d.el._isVueCE?d.el:null;try{k&&k._beginPatch(),G(d,p,x,v,A,E,S)}finally{k&&k._endPatch()}}},ie=(d,p,g,b,x,v,A,E)=>{let S,k;const{props:H,shapeFlag:P,transition:F,dirs:V}=d;if(S=d.el=i(d.type,v,H&&H.is,H),P&8?l(S,d.children):P&16&&we(d.children,S,null,b,x,xs(d,v),A,E),V&&It(d,null,b,"created"),oe(S,d,d.scopeId,A,b),H){for(const ue in H)ue!=="value"&&!fn(ue)&&r(S,ue,null,H[ue],v,b);"value"in H&&r(S,"value",null,H.value,v),(k=H.onVnodeBeforeMount)&&st(k,b,d)}V&&It(d,null,b,"beforeMount");const z=Fc(x,F);z&&F.beforeEnter(S),s(S,p,g),((k=H&&H.onVnodeMounted)||z||V)&&Ne(()=>{k&&st(k,b,d),z&&F.enter(S),V&&It(d,null,b,"mounted")},x)},oe=(d,p,g,b,x)=>{if(g&&m(d,g),b)for(let v=0;v<b.length;v++)m(d,b[v]);if(x){let v=x.subTree;if(p===v||Bi(v.type)&&(v.ssContent===p||v.ssFallback===p)){const A=x.vnode;oe(d,A,A.scopeId,A.slotScopeIds,x.parent)}}},we=(d,p,g,b,x,v,A,E,S=0)=>{for(let k=S;k<d.length;k++){const H=d[k]=E?Ct(d[k]):it(d[k]);C(null,H,p,g,b,x,v,A,E)}},G=(d,p,g,b,x,v,A)=>{const E=p.el=d.el;let{patchFlag:S,dynamicChildren:k,dirs:H}=p;S|=d.patchFlag&16;const P=d.props||ae,F=p.props||ae;let V;if(g&&Ot(g,!1),(V=F.onVnodeBeforeUpdate)&&st(V,g,p,d),H&&It(p,d,g,"beforeUpdate"),g&&Ot(g,!0),(P.innerHTML&&F.innerHTML==null||P.textContent&&F.textContent==null)&&l(E,""),k?Q(d.dynamicChildren,k,E,g,b,xs(p,x),v):A||ee(d,p,E,null,g,b,xs(p,x),v,!1),S>0){if(S&16)le(E,P,F,g,x);else if(S&2&&P.class!==F.class&&r(E,"class",null,F.class,x),S&4&&r(E,"style",P.style,F.style,x),S&8){const z=p.dynamicProps;for(let ue=0;ue<z.length;ue++){const se=z[ue],Ie=P[se],Oe=F[se];(Oe!==Ie||se==="value")&&r(E,se,Ie,Oe,x,g)}}S&1&&d.children!==p.children&&l(E,p.children)}else!A&&k==null&&le(E,P,F,g,x);((V=F.onVnodeUpdated)||H)&&Ne(()=>{V&&st(V,g,p,d),H&&It(p,d,g,"updated")},b)},Q=(d,p,g,b,x,v,A)=>{for(let E=0;E<p.length;E++){const S=d[E],k=p[E],H=S.el&&(S.type===fe||!Mt(S,k)||S.shapeFlag&198)?f(S.el):g;C(S,k,H,null,b,x,v,A,!0)}},le=(d,p,g,b,x)=>{if(p!==g){if(p!==ae)for(const v in p)!fn(v)&&!(v in g)&&r(d,v,p[v],null,x,b);for(const v in g){if(fn(v))continue;const A=g[v],E=p[v];A!==E&&v!=="value"&&r(d,v,E,A,x,b)}"value"in g&&r(d,"value",p.value,g.value,x)}},I=(d,p,g,b,x,v,A,E,S)=>{const k=p.el=d?d.el:a(""),H=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:F,slotScopeIds:V}=p;V&&(E=E?E.concat(V):V),d==null?(s(k,g,b),s(H,g,b),we(p.children||[],g,H,x,v,A,E,S)):P>0&&P&64&&F&&d.dynamicChildren&&d.dynamicChildren.length===F.length?(Q(d.dynamicChildren,F,g,x,v,A,E),(p.key!=null||x&&p===x.subTree)&&$i(d,p,!0)):ee(d,p,g,H,x,v,A,E,S)},X=(d,p,g,b,x,v,A,E,S)=>{p.slotScopeIds=E,d==null?p.shapeFlag&512?x.ctx.activate(p,g,b,A,S):ye(p,g,b,x,v,A,S):$e(d,p,S)},ye=(d,p,g,b,x,v,A)=>{const E=d.component=zc(d,b,x);if(rs(d)&&(E.ctx.renderer=B),Yc(E,!1,A),E.asyncDep){if(x&&x.registerDep(E,ge,A),!d.el){const S=E.subTree=Z(Pe);M(null,S,p,g),d.placeholder=S.el}}else ge(E,d,p,g,x,v,A)},$e=(d,p,g)=>{const b=p.component=d.component;if(Rc(d,p,g))if(b.asyncDep&&!b.asyncResolved){re(b,p,g);return}else b.next=p,b.update();else p.el=d.el,b.vnode=p},ge=(d,p,g,b,x,v,A)=>{const E=()=>{if(d.isMounted){let{next:P,bu:F,u:V,parent:z,vnode:ue}=d;{const tt=Mi(d);if(tt){P&&(P.el=ue.el,re(d,P,A)),tt.asyncDep.then(()=>{d.isUnmounted||E()});return}}let se=P,Ie;Ot(d,!1),P?(P.el=ue.el,re(d,P,A)):P=ue,F&&Nn(F),(Ie=P.props&&P.props.onVnodeBeforeUpdate)&&st(Ie,z,P,ue),Ot(d,!0);const Oe=Mo(d),et=d.subTree;d.subTree=Oe,C(et,Oe,f(et.el),y(et),d,x,v),P.el=Oe.el,se===null&&Pc(d,Oe.el),V&&Ne(V,x),(Ie=P.props&&P.props.onVnodeUpdated)&&Ne(()=>st(Ie,z,P,ue),x)}else{let P;const{el:F,props:V}=p,{bm:z,m:ue,parent:se,root:Ie,type:Oe}=d,et=gn(p);Ot(d,!1),z&&Nn(z),!et&&(P=V&&V.onVnodeBeforeMount)&&st(P,se,p),Ot(d,!0);{Ie.ce&&Ie.ce._def.shadowRoot!==!1&&Ie.ce._injectChildStyle(Oe);const tt=d.subTree=Mo(d);C(null,tt,g,b,d,x,v),p.el=tt.el}if(ue&&Ne(ue,x),!et&&(P=V&&V.onVnodeMounted)){const tt=p;Ne(()=>st(P,se,tt),x)}(p.shapeFlag&256||se&&gn(se.vnode)&&se.vnode.shapeFlag&256)&&d.a&&Ne(d.a,x),d.isMounted=!0,p=g=b=null}};d.scope.on();const S=d.effect=new Fr(E);d.scope.off();const k=d.update=S.run.bind(S),H=d.job=S.runIfDirty.bind(S);H.i=d,H.id=d.uid,S.scheduler=()=>io(H),Ot(d,!0),k()},re=(d,p,g)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,Ic(d,p.props,b,g),Mc(d,p.children,g),mt(),To(d),gt()},ee=(d,p,g,b,x,v,A,E,S=!1)=>{const k=d&&d.children,H=d?d.shapeFlag:0,P=p.children,{patchFlag:F,shapeFlag:V}=p;if(F>0){if(F&128){yt(k,P,g,b,x,v,A,E,S);return}else if(F&256){ct(k,P,g,b,x,v,A,E,S);return}}V&8?(H&16&&Ue(k,x,v),P!==k&&l(g,P)):H&16?V&16?yt(k,P,g,b,x,v,A,E,S):Ue(k,x,v,!0):(H&8&&l(g,""),V&16&&we(P,g,b,x,v,A,E,S))},ct=(d,p,g,b,x,v,A,E,S)=>{d=d||Jt,p=p||Jt;const k=d.length,H=p.length,P=Math.min(k,H);let F;for(F=0;F<P;F++){const V=p[F]=S?Ct(p[F]):it(p[F]);C(d[F],V,g,null,x,v,A,E,S)}k>H?Ue(d,x,v,!0,!1,P):we(p,g,b,x,v,A,E,S,P)},yt=(d,p,g,b,x,v,A,E,S)=>{let k=0;const H=p.length;let P=d.length-1,F=H-1;for(;k<=P&&k<=F;){const V=d[k],z=p[k]=S?Ct(p[k]):it(p[k]);if(Mt(V,z))C(V,z,g,null,x,v,A,E,S);else break;k++}for(;k<=P&&k<=F;){const V=d[P],z=p[F]=S?Ct(p[F]):it(p[F]);if(Mt(V,z))C(V,z,g,null,x,v,A,E,S);else break;P--,F--}if(k>P){if(k<=F){const V=F+1,z=V<H?p[V].el:b;for(;k<=F;)C(null,p[k]=S?Ct(p[k]):it(p[k]),g,z,x,v,A,E,S),k++}}else if(k>F)for(;k<=P;)De(d[k],x,v,!0),k++;else{const V=k,z=k,ue=new Map;for(k=z;k<=F;k++){const Me=p[k]=S?Ct(p[k]):it(p[k]);Me.key!=null&&ue.set(Me.key,k)}let se,Ie=0;const Oe=F-z+1;let et=!1,tt=0;const rn=new Array(Oe);for(k=0;k<Oe;k++)rn[k]=0;for(k=V;k<=P;k++){const Me=d[k];if(Ie>=Oe){De(Me,x,v,!0);continue}let nt;if(Me.key!=null)nt=ue.get(Me.key);else for(se=z;se<=F;se++)if(rn[se-z]===0&&Mt(Me,p[se])){nt=se;break}nt===void 0?De(Me,x,v,!0):(rn[nt-z]=k+1,nt>=tt?tt=nt:et=!0,C(Me,p[nt],g,null,x,v,A,E,S),Ie++)}const _o=et?Hc(rn):Jt;for(se=_o.length-1,k=Oe-1;k>=0;k--){const Me=z+k,nt=p[Me],ko=p[Me+1],So=Me+1<H?ko.el||Ni(ko):b;rn[k]===0?C(null,nt,g,So,x,v,A,E,S):et&&(se<0||k!==_o[se]?Xe(nt,g,So,2):se--)}}},Xe=(d,p,g,b,x=null)=>{const{el:v,type:A,transition:E,children:S,shapeFlag:k}=d;if(k&6){Xe(d.component.subTree,p,g,b);return}if(k&128){d.suspense.move(p,g,b);return}if(k&64){A.move(d,p,g,B);return}if(A===fe){s(v,p,g);for(let P=0;P<S.length;P++)Xe(S[P],p,g,b);s(d.anchor,p,g);return}if(A===Fn){N(d,p,g);return}if(b!==2&&k&1&&E)if(b===0)E.beforeEnter(v),s(v,p,g),Ne(()=>E.enter(v),x);else{const{leave:P,delayLeave:F,afterLeave:V}=E,z=()=>{d.ctx.isUnmounted?o(v):s(v,p,g)},ue=()=>{v._isLeaving&&v[ft](!0),P(v,()=>{z(),V&&V()})};F?F(v,z,ue):ue()}else s(v,p,g)},De=(d,p,g,b=!1,x=!1)=>{const{type:v,props:A,ref:E,children:S,dynamicChildren:k,shapeFlag:H,patchFlag:P,dirs:F,cacheIndex:V}=d;if(P===-2&&(x=!1),E!=null&&(mt(),mn(E,null,g,d,!0),gt()),V!=null&&(p.renderCache[V]=void 0),H&256){p.ctx.deactivate(d);return}const z=H&1&&F,ue=!gn(d);let se;if(ue&&(se=A&&A.onVnodeBeforeUnmount)&&st(se,p,d),H&6)Dt(d.component,g,b);else{if(H&128){d.suspense.unmount(g,b);return}z&&It(d,null,p,"beforeUnmount"),H&64?d.type.remove(d,p,g,B,b):k&&!k.hasOnce&&(v!==fe||P>0&&P&64)?Ue(k,p,g,!1,!0):(v===fe&&P&384||!x&&H&16)&&Ue(S,p,g),b&&jt(d)}(ue&&(se=A&&A.onVnodeUnmounted)||z)&&Ne(()=>{se&&st(se,p,d),z&&It(d,null,p,"unmounted")},g)},jt=d=>{const{type:p,el:g,anchor:b,transition:x}=d;if(p===fe){Gt(g,b);return}if(p===Fn){$(d);return}const v=()=>{o(g),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:A,delayLeave:E}=x,S=()=>A(g,v);E?E(d.el,v,S):S()}else v()},Gt=(d,p)=>{let g;for(;d!==p;)g=h(d),o(d),d=g;o(p)},Dt=(d,p,g)=>{const{bum:b,scope:x,job:v,subTree:A,um:E,m:S,a:k}=d;Fo(S),Fo(k),b&&Nn(b),x.stop(),v&&(v.flags|=8,De(A,d,p,g)),E&&Ne(E,p),Ne(()=>{d.isUnmounted=!0},p)},Ue=(d,p,g,b=!1,x=!1,v=0)=>{for(let A=v;A<d.length;A++)De(d[A],p,g,b,x)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),g=p&&p[sc];return g?h(g):p};let O=!1;const T=(d,p,g)=>{let b;d==null?p._vnode&&(De(p._vnode,null,null,!0),b=p._vnode.component):C(p._vnode||null,d,p,null,null,null,g),p._vnode=d,O||(O=!0,To(b),oi(),O=!1)},B={p:C,um:De,m:Xe,r:jt,mt:ye,mc:we,pc:ee,pbc:Q,n:y,o:e};return{render:T,hydrate:void 0,createApp:kc(T)}}function xs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ot({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Fc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $i(e,t,n=!1){const s=e.children,o=t.children;if(W(s)&&W(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=Ct(o[r]),a.el=i.el),!n&&a.patchFlag!==-2&&$i(i,a)),a.type===ls&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=r+(e.type===fe?1:0)),a.type===Pe&&!a.el&&(a.el=i.el)}}function Hc(e){const t=e.slice(),n=[0];let s,o,r,i,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<u?r=a+1:i=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Mi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Mi(t)}function Fo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ni(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ni(t.subTree):null}const Bi=e=>e.__isSuspense;function Uc(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):Za(e)}const fe=Symbol.for("v-fgt"),ls=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),Fn=Symbol.for("v-stc"),vn=[];let He=null;function R(e=!1){vn.push(He=e?null:[])}function Wc(){vn.pop(),He=vn[vn.length-1]||null}let Sn=1;function Kn(e,t=!1){Sn+=e,e<0&&He&&t&&(He.hasOnce=!0)}function Fi(e){return e.dynamicChildren=Sn>0?He||Jt:null,Wc(),Sn>0&&He&&He.push(e),e}function D(e,t,n,s,o,r){return Fi(_(e,t,n,s,o,r,!0))}function Cn(e,t,n,s,o){return Fi(Z(e,t,n,s,o,!0))}function zn(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const Hi=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||Ce(e)||j(e)?{i:Fe,r:e,k:t,f:!!n}:e:null);function _(e,t=null,n=null,s=0,o=null,r=e===fe?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Hi(t),ref:t&&Hn(t),scopeId:ii,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Fe};return a?(po(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),Sn>0&&!i&&He&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&He.push(c),c}const Z=Vc;function Vc(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===wi)&&(e=Pe),zn(e)){const a=Rt(e,t,!0);return n&&po(a,n),Sn>0&&!r&&He&&(a.shapeFlag&6?He[He.indexOf(e)]=a:He.push(a)),a.patchFlag=-2,a}if(el(e)&&(e=e.__vccOpts),t){t=jc(t);let{class:a,style:c}=t;a&&!me(a)&&(t.class=Wt(a)),pe(c)&&(oo(c)&&!W(c)&&(c=be({},c)),t.style=Ke(c))}const i=me(e)?1:Bi(e)?128:li(e)?64:pe(e)?4:j(e)?2:0;return _(e,t,n,s,o,i,r,!0)}function jc(e){return e?oo(e)||Ri(e)?be({},e):e:null}function Rt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:a,transition:c}=e,u=t?Gc(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Hi(u),ref:t&&t.ref?n&&r?W(r)?r.concat(Hn(t)):[r,Hn(t)]:Hn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rt(e.ssContent),ssFallback:e.ssFallback&&Rt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Ht(l,c.clone(l)),l}function Ve(e=" ",t=0){return Z(ls,null,e,t)}function fo(e,t){const n=Z(Fn,null,e);return n.staticCount=t,n}function Re(e="",t=!1){return t?(R(),Cn(Pe,null,e)):Z(Pe,null,e)}function it(e){return e==null||typeof e=="boolean"?Z(Pe):W(e)?Z(fe,null,e.slice()):zn(e)?Ct(e):Z(ls,null,String(e))}function Ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rt(e)}function po(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),po(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Ri(t)?t._ctx=Fe:o===3&&Fe&&(Fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Fe},n=32):(t=String(t),s&64?(n=16,t=[Ve(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Wt([t.class,s.class]));else if(o==="style")t.style=Ke([t.style,s.style]);else if(Zn(o)){const r=t[o],i=s[o];i&&r!==i&&!(W(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function st(e,t,n,s=null){Qe(e,t,7,[n,s])}const qc=Ci();let Kc=0;function zc(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||qc,r={uid:Kc++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _a(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Di(s,o),emitsOptions:Ei(s,o),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Cc.bind(null,r),e.ce&&e.ce(r),r}let Se=null;const ho=()=>Se||Fe;let Yn,Fs;{const e=ns(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};Yn=t("__VUE_INSTANCE_SETTERS__",n=>Se=n),Fs=t("__VUE_SSR_SETTERS__",n=>En=n)}const Pn=e=>{const t=Se;return Yn(e),e.scope.on(),()=>{e.scope.off(),Yn(t)}},Ho=()=>{Se&&Se.scope.off(),Yn(null)};function Ui(e){return e.vnode.shapeFlag&4}let En=!1;function Yc(e,t=!1,n=!1){t&&Fs(t);const{props:s,children:o}=e.vnode,r=Ui(e);Dc(e,s,r,t),$c(e,o,n||t);const i=r?Jc(e,t):void 0;return t&&Fs(!1),i}function Jc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,gc);const{setup:s}=n;if(s){mt();const o=e.setupContext=s.length>1?Zc(e):null,r=Pn(e),i=Rn(s,e,0,[e.props,o]),a=Ir(i);if(gt(),r(),(a||e.sp)&&!gn(e)&&gi(e),a){if(i.then(Ho,Ho),t)return i.then(c=>{Uo(e,c)}).catch(c=>{os(c,e,0)});e.asyncDep=i}else Uo(e,i)}else Wi(e)}function Uo(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=ti(t)),Wi(e)}function Wi(e,t,n){const s=e.type;e.render||(e.render=s.render||at);{const o=Pn(e);mt();try{bc(e)}finally{gt(),o()}}}const Qc={get(e,t){return _e(e,"get",""),e[t]}};function Zc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Qc),slots:e.slots,emit:e.emit,expose:t}}function us(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ti(Wa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in bn)return bn[n](e)},has(t,n){return n in t||n in bn}})):e.proxy}function Xc(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function el(e){return j(e)&&"__vccOpts"in e}const ce=(e,t)=>Ka(e,t,En);function mo(e,t,n){try{Kn(-1);const s=arguments.length;return s===2?pe(t)&&!W(t)?zn(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&zn(n)&&(n=[n]),Z(e,t,n))}finally{Kn(1)}}const tl="3.5.27";let Hs;const Wo=typeof window<"u"&&window.trustedTypes;if(Wo)try{Hs=Wo.createPolicy("vue",{createHTML:e=>e})}catch{}const Vi=Hs?e=>Hs.createHTML(e):e=>e,nl="http://www.w3.org/2000/svg",sl="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,Vo=dt&&dt.createElement("template"),ol={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?dt.createElementNS(nl,e):t==="mathml"?dt.createElementNS(sl,e):n?dt.createElement(e,{is:n}):dt.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Vo.innerHTML=Vi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Vo.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},xt="transition",cn="animation",nn=Symbol("_vtc"),ji={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gi=be({},di,ji),rl=e=>(e.displayName="Transition",e.props=Gi,e),go=rl((e,{slots:t})=>mo(rc,qi(e),t)),Lt=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},jo=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function qi(e){const t={};for(const I in e)I in ji||(t[I]=e[I]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=i,appearToClass:l=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,w=il(o),C=w&&w[0],U=w&&w[1],{onBeforeEnter:M,onEnter:L,onEnterCancelled:N,onLeave:$,onLeaveCancelled:q,onBeforeAppear:ie=M,onAppear:oe=L,onAppearCancelled:we=N}=t,G=(I,X,ye,$e)=>{I._enterCancelled=$e,_t(I,X?l:a),_t(I,X?u:i),ye&&ye()},Q=(I,X)=>{I._isLeaving=!1,_t(I,f),_t(I,m),_t(I,h),X&&X()},le=I=>(X,ye)=>{const $e=I?oe:L,ge=()=>G(X,I,ye);Lt($e,[X,ge]),Go(()=>{_t(X,I?c:r),ot(X,I?l:a),jo($e)||qo(X,s,C,ge)})};return be(t,{onBeforeEnter(I){Lt(M,[I]),ot(I,r),ot(I,i)},onBeforeAppear(I){Lt(ie,[I]),ot(I,c),ot(I,u)},onEnter:le(!1),onAppear:le(!0),onLeave(I,X){I._isLeaving=!0;const ye=()=>Q(I,X);ot(I,f),I._enterCancelled?(ot(I,h),Us(I)):(Us(I),ot(I,h)),Go(()=>{I._isLeaving&&(_t(I,f),ot(I,m),jo($)||qo(I,s,U,ye))}),Lt($,[I,ye])},onEnterCancelled(I){G(I,!1,void 0,!0),Lt(N,[I])},onAppearCancelled(I){G(I,!0,void 0,!0),Lt(we,[I])},onLeaveCancelled(I){Q(I),Lt(q,[I])}})}function il(e){if(e==null)return null;if(pe(e))return[ws(e.enter),ws(e.leave)];{const t=ws(e);return[t,t]}}function ws(e){return ma(e)}function ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[nn]||(e[nn]=new Set)).add(t)}function _t(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[nn];n&&(n.delete(t),n.size||(e[nn]=void 0))}function Go(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let al=0;function qo(e,t,n,s){const o=e._endId=++al,r=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:a,propCount:c}=Ki(e,t);if(!i)return s();const u=i+"end";let l=0;const f=()=>{e.removeEventListener(u,h),r()},h=m=>{m.target===e&&++l>=c&&f()};setTimeout(()=>{l<c&&f()},a+1),e.addEventListener(u,h)}function Ki(e,t){const n=window.getComputedStyle(e),s=w=>(n[w]||"").split(", "),o=s(`${xt}Delay`),r=s(`${xt}Duration`),i=Ko(o,r),a=s(`${cn}Delay`),c=s(`${cn}Duration`),u=Ko(a,c);let l=null,f=0,h=0;t===xt?i>0&&(l=xt,f=i,h=r.length):t===cn?u>0&&(l=cn,f=u,h=c.length):(f=Math.max(i,u),l=f>0?i>u?xt:cn:null,h=l?l===xt?r.length:c.length:0);const m=l===xt&&/\b(?:transform|all)(?:,|$)/.test(s(`${xt}Property`).toString());return{type:l,timeout:f,propCount:h,hasTransform:m}}function Ko(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>zo(n)+zo(e[s])))}function zo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Us(e){return(e?e.ownerDocument:document).body.offsetHeight}function cl(e,t,n){const s=e[nn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Yo=Symbol("_vod"),ll=Symbol("_vsh"),ul=Symbol(""),dl=/(?:^|;)\s*display\s*:/;function fl(e,t,n){const s=e.style,o=me(n);let r=!1;if(n&&!o){if(t)if(me(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Un(s,a,"")}else for(const i in t)n[i]==null&&Un(s,i,"");for(const i in n)i==="display"&&(r=!0),Un(s,i,n[i])}else if(o){if(t!==n){const i=s[ul];i&&(n+=";"+i),s.cssText=n,r=dl.test(n)}}else t&&e.removeAttribute("style");Yo in e&&(e[Yo]=r?s.display:"",e[ll]&&(s.display="none"))}const Jo=/\s*!important$/;function Un(e,t,n){if(W(n))n.forEach(s=>Un(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=pl(e,t);Jo.test(n)?e.setProperty(Ut(s),n.replace(Jo,""),"important"):e[s]=n}}const Qo=["Webkit","Moz","ms"],_s={};function pl(e,t){const n=_s[t];if(n)return n;let s=Ge(t);if(s!=="filter"&&s in e)return _s[t]=s;s=ts(s);for(let o=0;o<Qo.length;o++){const r=Qo[o]+s;if(r in e)return _s[t]=r}return t}const Zo="http://www.w3.org/1999/xlink";function Xo(e,t,n,s,o,r=wa(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Zo,t.slice(6,t.length)):e.setAttributeNS(Zo,t,n):n==null||r&&!Mr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Pt(n)?String(n):n)}function er(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Vi(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Mr(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function zt(e,t,n,s){e.addEventListener(t,n,s)}function hl(e,t,n,s){e.removeEventListener(t,n,s)}const tr=Symbol("_vei");function ml(e,t,n,s,o=null){const r=e[tr]||(e[tr]={}),i=r[t];if(s&&i)i.value=s;else{const[a,c]=gl(t);if(s){const u=r[t]=yl(s,o);zt(e,a,u,c)}else i&&(hl(e,a,i,c),r[t]=void 0)}}const nr=/(?:Once|Passive|Capture)$/;function gl(e){let t;if(nr.test(e)){t={};let s;for(;s=e.match(nr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ut(e.slice(2)),t]}let ks=0;const bl=Promise.resolve(),vl=()=>ks||(bl.then(()=>ks=0),ks=Date.now());function yl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qe(xl(s,n.value),t,5,[s])};return n.value=e,n.attached=vl(),n}function xl(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const sr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,wl=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?cl(e,s,i):t==="style"?fl(e,n,s):Zn(t)?zs(t)||ml(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_l(e,t,s,i))?(er(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Xo(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!me(s))?er(e,Ge(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Xo(e,t,s,i))};function _l(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&sr(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return sr(t)&&me(n)?!1:t in e}const zi=new WeakMap,Yi=new WeakMap,Jn=Symbol("_moveCb"),or=Symbol("_enterCb"),kl=e=>(delete e.props.mode,e),Sl=kl({name:"TransitionGroup",props:be({},Gi,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ho(),s=ui();let o,r;return vi(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Rl(o[0].el,n.vnode.el,i)){o=[];return}o.forEach(El),o.forEach(Al);const a=o.filter(Tl);Us(n.vnode.el),a.forEach(c=>{const u=c.el,l=u.style;ot(u,i),l.transform=l.webkitTransform=l.transitionDuration="";const f=u[Jn]=h=>{h&&h.target!==u||(!h||h.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",f),u[Jn]=null,_t(u,i))};u.addEventListener("transitionend",f)}),o=[]}),()=>{const i=J(e),a=qi(i);let c=i.tag||fe;if(o=[],r)for(let u=0;u<r.length;u++){const l=r[u];l.el&&l.el instanceof Element&&(o.push(l),Ht(l,kn(l,a,s,n)),zi.set(l,{left:l.el.offsetLeft,top:l.el.offsetTop}))}r=t.default?ao(t.default()):[];for(let u=0;u<r.length;u++){const l=r[u];l.key!=null&&Ht(l,kn(l,a,s,n))}return Z(c,null,r)}}}),Cl=Sl;function El(e){const t=e.el;t[Jn]&&t[Jn](),t[or]&&t[or]()}function Al(e){Yi.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function Tl(e){const t=zi.get(e),n=Yi.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",e}}function Rl(e,t,n){const s=e.cloneNode(),o=e[nn];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=Ki(s);return r.removeChild(s),i}const rr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?n=>Nn(t,n):t};function Pl(e){e.target.composing=!0}function ir(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ss=Symbol("_assign");function ar(e,t,n){return t&&(e=e.trim()),n&&(e=Qs(e)),e}const Dl={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[Ss]=rr(o);const r=s||o.props&&o.props.type==="number";zt(e,t?"change":"input",i=>{i.target.composing||e[Ss](ar(e.value,n,r))}),(n||r)&&zt(e,"change",()=>{e.value=ar(e.value,n,r)}),t||(zt(e,"compositionstart",Pl),zt(e,"compositionend",ir),zt(e,"change",ir))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},i){if(e[Ss]=rr(i),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?Qs(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===c)||(e.value=c))}},Il=["ctrl","shift","alt","meta"],Ol={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Il.some(n=>e[`${n}Key`]&&!t.includes(n))},Ll=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...r)=>{for(let i=0;i<t.length;i++){const a=Ol[t[i]];if(a&&a(o,t))return}return e(o,...r)}))},$l=be({patchProp:wl},ol);let cr;function Ml(){return cr||(cr=Nc($l))}const Nl=((...e)=>{const t=Ml().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Fl(s);if(!o)return;const r=t._component;!j(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,Bl(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t});function Bl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Fl(e){return me(e)?document.querySelector(e):e}const Yt=typeof document<"u";function Ji(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Hl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ji(e.default)}const te=Object.assign;function Cs(e,t){const n={};for(const s in t){const o=t[s];n[s]=Ze(o)?o.map(e):e(o)}return n}const yn=()=>{},Ze=Array.isArray;function lr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Qi=/#/g,Ul=/&/g,Wl=/\//g,Vl=/=/g,jl=/\?/g,Zi=/\+/g,Gl=/%5B/g,ql=/%5D/g,Xi=/%5E/g,Kl=/%60/g,ea=/%7B/g,zl=/%7C/g,ta=/%7D/g,Yl=/%20/g;function bo(e){return e==null?"":encodeURI(""+e).replace(zl,"|").replace(Gl,"[").replace(ql,"]")}function Jl(e){return bo(e).replace(ea,"{").replace(ta,"}").replace(Xi,"^")}function Ws(e){return bo(e).replace(Zi,"%2B").replace(Yl,"+").replace(Qi,"%23").replace(Ul,"%26").replace(Kl,"`").replace(ea,"{").replace(ta,"}").replace(Xi,"^")}function Ql(e){return Ws(e).replace(Vl,"%3D")}function Zl(e){return bo(e).replace(Qi,"%23").replace(jl,"%3F")}function Xl(e){return Zl(e).replace(Wl,"%2F")}function An(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const eu=/\/$/,tu=e=>e.replace(eu,"");function Es(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(s=t.slice(0,c),r=t.slice(c,a>0?a:t.length),o=e(r.slice(1))),a>=0&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=ru(s??t,n),{fullPath:s+r+i,path:s,query:o,hash:An(i)}}function nu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ur(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function su(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&sn(t.matched[s],n.matched[o])&&na(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function sn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function na(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!ou(e[n],t[n]))return!1;return!0}function ou(e,t){return Ze(e)?dr(e,t):Ze(t)?dr(t,e):e?.valueOf()===t?.valueOf()}function dr(e,t){return Ze(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function ru(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,a;for(i=0;i<s.length;i++)if(a=s[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Vs=(function(e){return e.pop="pop",e.push="push",e})({}),As=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function iu(e){if(!e)if(Yt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),tu(e)}const au=/^[^#]+#/;function cu(e,t){return e.replace(au,"#")+t}function lu(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ds=()=>({left:window.scrollX,top:window.scrollY});function uu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=lu(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function fr(e,t){return(history.state?history.state.position-t:-1)+e}const js=new Map;function du(e,t){js.set(e,t)}function fu(e){const t=js.get(e);return js.delete(e),t}function pu(e){return typeof e=="string"||e&&typeof e=="object"}function sa(e){return typeof e=="string"||typeof e=="symbol"}let he=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const oa=Symbol("");he.MATCHER_NOT_FOUND+"",he.NAVIGATION_GUARD_REDIRECT+"",he.NAVIGATION_ABORTED+"",he.NAVIGATION_CANCELLED+"",he.NAVIGATION_DUPLICATED+"";function on(e,t){return te(new Error,{type:e,[oa]:!0},t)}function ut(e,t){return e instanceof Error&&oa in e&&(t==null||!!(e.type&t))}const hu=["params","query","hash"];function mu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of hu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function gu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(Zi," "),r=o.indexOf("="),i=An(r<0?o:o.slice(0,r)),a=r<0?null:An(o.slice(r+1));if(i in t){let c=t[i];Ze(c)||(c=t[i]=[c]),c.push(a)}else t[i]=a}return t}function pr(e){let t="";for(let n in e){const s=e[n];if(n=Ql(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ze(s)?s.map(o=>o&&Ws(o)):[s&&Ws(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function bu(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ze(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const vu=Symbol(""),hr=Symbol(""),fs=Symbol(""),vo=Symbol(""),Gs=Symbol("");function ln(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Et(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const u=h=>{h===!1?c(on(he.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?c(h):pu(h)?c(on(he.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(i&&s.enterCallbacks[o]===i&&typeof h=="function"&&i.push(h),a())},l=r(()=>e.call(s&&s.instances[o],t,n,u));let f=Promise.resolve(l);e.length<3&&(f=f.then(u)),f.catch(h=>c(h))})}function Ts(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const a in i.components){let c=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(Ji(c)){const u=(c.__vccOpts||c)[t];u&&r.push(Et(u,n,s,i,a,o))}else{let u=c();r.push(()=>u.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const f=Hl(l)?l.default:l;i.mods[a]=l,i.components[a]=f;const h=(f.__vccOpts||f)[t];return h&&Et(h,n,s,i,a,o)()}))}}return r}function yu(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(u=>sn(u,a))?s.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>sn(u,c))||o.push(c))}return[n,s,o]}let xu=()=>location.protocol+"//"+location.host;function ra(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(i);return a[0]!=="/"&&(a="/"+a),ur(a,"")}return ur(n,e)+s+o}function wu(e,t,n,s){let o=[],r=[],i=null;const a=({state:h})=>{const m=ra(e,location),w=n.value,C=t.value;let U=0;if(h){if(n.value=m,t.value=h,i&&i===w){i=null;return}U=C?h.position-C.position:0}else s(m);o.forEach(M=>{M(n.value,w,{delta:U,type:Vs.pop,direction:U?U>0?As.forward:As.back:As.unknown})})};function c(){i=n.value}function u(h){o.push(h);const m=()=>{const w=o.indexOf(h);w>-1&&o.splice(w,1)};return r.push(m),m}function l(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(te({},h.state,{scroll:ds()}),"")}}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",l),document.removeEventListener("visibilitychange",l)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",l),document.addEventListener("visibilitychange",l),{pauseListeners:c,listen:u,destroy:f}}function mr(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?ds():null}}function _u(e){const{history:t,location:n}=window,s={value:ra(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,l){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:xu()+e+c;try{t[l?"replaceState":"pushState"](u,"",h),o.value=u}catch(m){console.error(m),n[l?"replace":"assign"](h)}}function i(c,u){r(c,te({},t.state,mr(o.value.back,c,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=c}function a(c,u){const l=te({},o.value,t.state,{forward:c,scroll:ds()});r(l.current,l,!0),r(c,te({},mr(s.value,c,null),{position:l.position+1},u),!1),s.value=c}return{location:s,state:o,push:a,replace:i}}function ku(e){e=iu(e);const t=_u(e),n=wu(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=te({location:"",base:e,go:s,createHref:cu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let Nt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ve=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ve||{});const Su={type:Nt.Static,value:""},Cu=/[a-zA-Z0-9_]/;function Eu(e){if(!e)return[[]];if(e==="/")return[[Su]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=ve.Static,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,c,u="",l="";function f(){u&&(n===ve.Static?r.push({type:Nt.Static,value:u}):n===ve.Param||n===ve.ParamRegExp||n===ve.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Nt.Param,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==ve.ParamRegExp){s=n,n=ve.EscapeNext;continue}switch(n){case ve.Static:c==="/"?(u&&f(),i()):c===":"?(f(),n=ve.Param):h();break;case ve.EscapeNext:h(),n=s;break;case ve.Param:c==="("?n=ve.ParamRegExp:Cu.test(c)?h():(f(),n=ve.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case ve.ParamRegExp:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=ve.ParamRegExpEnd:l+=c;break;case ve.ParamRegExpEnd:f(),n=ve.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===ve.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),o}const gr="[^/]+?",Au={sensitive:!1,strict:!1,start:!0,end:!0};var Ae=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ae||{});const Tu=/[.+*?^${}()[\]/\\]/g;function Ru(e,t){const n=te({},Au,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const l=u.length?[]:[Ae.Root];n.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const h=u[f];let m=Ae.Segment+(n.sensitive?Ae.BonusCaseSensitive:0);if(h.type===Nt.Static)f||(o+="/"),o+=h.value.replace(Tu,"\\$&"),m+=Ae.Static;else if(h.type===Nt.Param){const{value:w,repeatable:C,optional:U,regexp:M}=h;r.push({name:w,repeatable:C,optional:U});const L=M||gr;if(L!==gr){m+=Ae.BonusCustomRegExp;try{`${L}`}catch($){throw new Error(`Invalid custom RegExp for param "${w}" (${L}): `+$.message)}}let N=C?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;f||(N=U&&u.length<2?`(?:/${N})`:"/"+N),U&&(N+="?"),o+=N,m+=Ae.Dynamic,U&&(m+=Ae.BonusOptional),C&&(m+=Ae.BonusRepeatable),L===".*"&&(m+=Ae.BonusWildcard)}l.push(m)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Ae.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const l=u.match(i),f={};if(!l)return null;for(let h=1;h<l.length;h++){const m=l[h]||"",w=r[h-1];f[w.name]=m&&w.repeatable?m.split("/"):m}return f}function c(u){let l="",f=!1;for(const h of e){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const m of h)if(m.type===Nt.Static)l+=m.value;else if(m.type===Nt.Param){const{value:w,repeatable:C,optional:U}=m,M=w in u?u[w]:"";if(Ze(M)&&!C)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const L=Ze(M)?M.join("/"):M;if(!L)if(U)h.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);l+=L}}return l||"/"}return{re:i,score:s,keys:r,parse:a,stringify:c}}function Pu(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Ae.Static+Ae.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ae.Static+Ae.Segment?1:-1:0}function ia(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=Pu(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(br(s))return 1;if(br(o))return-1}return o.length-s.length}function br(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Du={strict:!1,end:!0,sensitive:!1};function Iu(e,t,n){const s=Ru(Eu(e.path),n),o=te(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Ou(e,t){const n=[],s=new Map;t=lr(Du,t);function o(f){return s.get(f)}function r(f,h,m){const w=!m,C=yr(f);C.aliasOf=m&&m.record;const U=lr(t,f),M=[C];if("alias"in f){const $=typeof f.alias=="string"?[f.alias]:f.alias;for(const q of $)M.push(yr(te({},C,{components:m?m.record.components:C.components,path:q,aliasOf:m?m.record:C})))}let L,N;for(const $ of M){const{path:q}=$;if(h&&q[0]!=="/"){const ie=h.record.path,oe=ie[ie.length-1]==="/"?"":"/";$.path=h.record.path+(q&&oe+q)}if(L=Iu($,h,U),m?m.alias.push(L):(N=N||L,N!==L&&N.alias.push(L),w&&f.name&&!xr(L)&&i(f.name)),aa(L)&&c(L),C.children){const ie=C.children;for(let oe=0;oe<ie.length;oe++)r(ie[oe],L,m&&m.children[oe])}m=m||L}return N?()=>{i(N)}:yn}function i(f){if(sa(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function a(){return n}function c(f){const h=Mu(f,n);n.splice(h,0,f),f.record.name&&!xr(f)&&s.set(f.record.name,f)}function u(f,h){let m,w={},C,U;if("name"in f&&f.name){if(m=s.get(f.name),!m)throw on(he.MATCHER_NOT_FOUND,{location:f});U=m.record.name,w=te(vr(h.params,m.keys.filter(N=>!N.optional).concat(m.parent?m.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),f.params&&vr(f.params,m.keys.map(N=>N.name))),C=m.stringify(w)}else if(f.path!=null)C=f.path,m=n.find(N=>N.re.test(C)),m&&(w=m.parse(C),U=m.record.name);else{if(m=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!m)throw on(he.MATCHER_NOT_FOUND,{location:f,currentLocation:h});U=m.record.name,w=te({},h.params,f.params),C=m.stringify(w)}const M=[];let L=m;for(;L;)M.unshift(L.record),L=L.parent;return{name:U,path:C,params:w,matched:M,meta:$u(M)}}e.forEach(f=>r(f));function l(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:i,clearRoutes:l,getRoutes:a,getRecordMatcher:o}}function vr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function yr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Lu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Lu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function xr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $u(e){return e.reduce((t,n)=>te(t,n.meta),{})}function Mu(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;ia(e,t[r])<0?s=r:n=r+1}const o=Nu(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function Nu(e){let t=e;for(;t=t.parent;)if(aa(t)&&ia(e,t)===0)return t}function aa({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function wr(e){const t=Ye(fs),n=Ye(vo),s=ce(()=>{const c=Be(e.to);return t.resolve(c)}),o=ce(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const h=f.findIndex(sn.bind(null,l));if(h>-1)return h;const m=_r(c[u-2]);return u>1&&_r(l)===m&&f[f.length-1].path!==m?f.findIndex(sn.bind(null,c[u-2])):h}),r=ce(()=>o.value>-1&&Wu(n.params,s.value.params)),i=ce(()=>o.value>-1&&o.value===n.matched.length-1&&na(n.params,s.value.params));function a(c={}){if(Uu(c)){const u=t[Be(e.replace)?"replace":"push"](Be(e.to)).catch(yn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:ce(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}function Bu(e){return e.length===1?e[0]:e}const Fu=mi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:wr,setup(e,{slots:t}){const n=Tn(wr(e)),{options:s}=Ye(fs),o=ce(()=>({[kr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[kr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&Bu(t.default(n));return e.custom?r:mo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Hu=Fu;function Uu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wu(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Ze(o)||o.length!==s.length||s.some((r,i)=>r.valueOf()!==o[i].valueOf()))return!1}return!0}function _r(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const kr=(e,t,n)=>e??t??n,Vu=mi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ye(Gs),o=ce(()=>e.route||s.value),r=Ye(hr,0),i=ce(()=>{let u=Be(r);const{matched:l}=o.value;let f;for(;(f=l[u])&&!f.components;)u++;return u}),a=ce(()=>o.value.matched[i.value]);Bn(hr,ce(()=>i.value+1)),Bn(vu,a),Bn(Gs,o);const c=ke();return Xt(()=>[c.value,a.value,e.name],([u,l,f],[h,m,w])=>{l&&(l.instances[f]=u,m&&m!==l&&u&&u===h&&(l.leaveGuards.size||(l.leaveGuards=m.leaveGuards),l.updateGuards.size||(l.updateGuards=m.updateGuards))),u&&l&&(!m||!sn(l,m)||!h)&&(l.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=o.value,l=e.name,f=a.value,h=f&&f.components[l];if(!h)return Sr(n.default,{Component:h,route:u});const m=f.props[l],w=m?m===!0?u.params:typeof m=="function"?m(u):m:null,U=mo(h,te({},w,t,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(f.instances[l]=null)},ref:c}));return Sr(n.default,{Component:U,route:u})||U}}});function Sr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ju=Vu;function Gu(e){const t=Ou(e.routes,e),n=e.parseQuery||gu,s=e.stringifyQuery||pr,o=e.history,r=ln(),i=ln(),a=ln(),c=Va(wt);let u=wt;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Cs.bind(null,y=>""+y),f=Cs.bind(null,Xl),h=Cs.bind(null,An);function m(y,O){let T,B;return sa(y)?(T=t.getRecordMatcher(y),B=O):B=y,t.addRoute(B,T)}function w(y){const O=t.getRecordMatcher(y);O&&t.removeRoute(O)}function C(){return t.getRoutes().map(y=>y.record)}function U(y){return!!t.getRecordMatcher(y)}function M(y,O){if(O=te({},O||c.value),typeof y=="string"){const g=Es(n,y,O.path),b=t.resolve({path:g.path},O),x=o.createHref(g.fullPath);return te(g,b,{params:h(b.params),hash:An(g.hash),redirectedFrom:void 0,href:x})}let T;if(y.path!=null)T=te({},y,{path:Es(n,y.path,O.path).path});else{const g=te({},y.params);for(const b in g)g[b]==null&&delete g[b];T=te({},y,{params:f(g)}),O.params=f(O.params)}const B=t.resolve(T,O),K=y.hash||"";B.params=l(h(B.params));const d=nu(s,te({},y,{hash:Jl(K),path:B.path})),p=o.createHref(d);return te({fullPath:d,hash:K,query:s===pr?bu(y.query):y.query||{}},B,{redirectedFrom:void 0,href:p})}function L(y){return typeof y=="string"?Es(n,y,c.value.path):te({},y)}function N(y,O){if(u!==y)return on(he.NAVIGATION_CANCELLED,{from:O,to:y})}function $(y){return oe(y)}function q(y){return $(te(L(y),{replace:!0}))}function ie(y,O){const T=y.matched[y.matched.length-1];if(T&&T.redirect){const{redirect:B}=T;let K=typeof B=="function"?B(y,O):B;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=L(K):{path:K},K.params={}),te({query:y.query,hash:y.hash,params:K.path!=null?{}:y.params},K)}}function oe(y,O){const T=u=M(y),B=c.value,K=y.state,d=y.force,p=y.replace===!0,g=ie(T,B);if(g)return oe(te(L(g),{state:typeof g=="object"?te({},K,g.state):K,force:d,replace:p}),O||T);const b=T;b.redirectedFrom=O;let x;return!d&&su(s,B,T)&&(x=on(he.NAVIGATION_DUPLICATED,{to:b,from:B}),Xe(B,B,!0,!1)),(x?Promise.resolve(x):Q(b,B)).catch(v=>ut(v)?ut(v,he.NAVIGATION_GUARD_REDIRECT)?v:yt(v):ee(v,b,B)).then(v=>{if(v){if(ut(v,he.NAVIGATION_GUARD_REDIRECT))return oe(te({replace:p},L(v.to),{state:typeof v.to=="object"?te({},K,v.to.state):K,force:d}),O||b)}else v=I(b,B,!0,p,K);return le(b,B,v),v})}function we(y,O){const T=N(y,O);return T?Promise.reject(T):Promise.resolve()}function G(y){const O=Gt.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(y):y()}function Q(y,O){let T;const[B,K,d]=yu(y,O);T=Ts(B.reverse(),"beforeRouteLeave",y,O);for(const g of B)g.leaveGuards.forEach(b=>{T.push(Et(b,y,O))});const p=we.bind(null,y,O);return T.push(p),Ue(T).then(()=>{T=[];for(const g of r.list())T.push(Et(g,y,O));return T.push(p),Ue(T)}).then(()=>{T=Ts(K,"beforeRouteUpdate",y,O);for(const g of K)g.updateGuards.forEach(b=>{T.push(Et(b,y,O))});return T.push(p),Ue(T)}).then(()=>{T=[];for(const g of d)if(g.beforeEnter)if(Ze(g.beforeEnter))for(const b of g.beforeEnter)T.push(Et(b,y,O));else T.push(Et(g.beforeEnter,y,O));return T.push(p),Ue(T)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),T=Ts(d,"beforeRouteEnter",y,O,G),T.push(p),Ue(T))).then(()=>{T=[];for(const g of i.list())T.push(Et(g,y,O));return T.push(p),Ue(T)}).catch(g=>ut(g,he.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function le(y,O,T){a.list().forEach(B=>G(()=>B(y,O,T)))}function I(y,O,T,B,K){const d=N(y,O);if(d)return d;const p=O===wt,g=Yt?history.state:{};T&&(B||p?o.replace(y.fullPath,te({scroll:p&&g&&g.scroll},K)):o.push(y.fullPath,K)),c.value=y,Xe(y,O,T,p),yt()}let X;function ye(){X||(X=o.listen((y,O,T)=>{if(!Dt.listening)return;const B=M(y),K=ie(B,Dt.currentRoute.value);if(K){oe(te(K,{replace:!0,force:!0}),B).catch(yn);return}u=B;const d=c.value;Yt&&du(fr(d.fullPath,T.delta),ds()),Q(B,d).catch(p=>ut(p,he.NAVIGATION_ABORTED|he.NAVIGATION_CANCELLED)?p:ut(p,he.NAVIGATION_GUARD_REDIRECT)?(oe(te(L(p.to),{force:!0}),B).then(g=>{ut(g,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&!T.delta&&T.type===Vs.pop&&o.go(-1,!1)}).catch(yn),Promise.reject()):(T.delta&&o.go(-T.delta,!1),ee(p,B,d))).then(p=>{p=p||I(B,d,!1),p&&(T.delta&&!ut(p,he.NAVIGATION_CANCELLED)?o.go(-T.delta,!1):T.type===Vs.pop&&ut(p,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),le(B,d,p)}).catch(yn)}))}let $e=ln(),ge=ln(),re;function ee(y,O,T){yt(y);const B=ge.list();return B.length?B.forEach(K=>K(y,O,T)):console.error(y),Promise.reject(y)}function ct(){return re&&c.value!==wt?Promise.resolve():new Promise((y,O)=>{$e.add([y,O])})}function yt(y){return re||(re=!y,ye(),$e.list().forEach(([O,T])=>y?T(y):O()),$e.reset()),y}function Xe(y,O,T,B){const{scrollBehavior:K}=e;if(!Yt||!K)return Promise.resolve();const d=!T&&fu(fr(y.fullPath,0))||(B||!T)&&history.state&&history.state.scroll||null;return ro().then(()=>K(y,O,d)).then(p=>p&&uu(p)).catch(p=>ee(p,y,O))}const De=y=>o.go(y);let jt;const Gt=new Set,Dt={currentRoute:c,listening:!0,addRoute:m,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:U,getRoutes:C,resolve:M,options:e,push:$,replace:q,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:ge.add,isReady:ct,install(y){y.component("RouterLink",Hu),y.component("RouterView",ju),y.config.globalProperties.$router=Dt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Be(c)}),Yt&&!jt&&c.value===wt&&(jt=!0,$(o.location).catch(B=>{}));const O={};for(const B in wt)Object.defineProperty(O,B,{get:()=>c.value[B],enumerable:!0});y.provide(fs,Dt),y.provide(vo,Xr(O)),y.provide(Gs,c);const T=y.unmount;Gt.add(y),y.unmount=function(){Gt.delete(y),Gt.size<1&&(u=wt,X&&X(),X=null,c.value=wt,jt=!1,re=!1),T()}}};function Ue(y){return y.reduce((O,T)=>O.then(()=>G(T)),Promise.resolve())}return Dt}function yo(){return Ye(fs)}function ca(e){return Ye(vo)}const qu={__name:"App",setup(e){const t=yo(),n=ke(!0);return t.isReady().then(()=>{setTimeout(()=>{n.value=!1},100)}),(s,o)=>{const r=co("router-view");return R(),Cn(r,null,{default:Tt(({Component:i,route:a})=>[Z(go,{name:n.value?"":"page",mode:"out-in"},{default:Tt(()=>[(R(),Cn(mc(i),{key:a.path}))]),_:2},1032,["name"])]),_:1})}}},xe=Tn({discordUser:null,spotify:null,discordStatus:"offline",discordStatusColor:"text-catppuccin-subtle",editorActivity:null,isConnected:!1,isLoading:!0});class Ku{constructor(){this.ws=null,this.heartbeat=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.maxAttempts=5,this.userId="766897363050037248",this.isConnecting=!1}connect(){if(!(this.isConnecting||this.ws&&this.ws.readyState===WebSocket.OPEN)){this.isConnecting=!0,xe.isLoading=!0;try{this.ws=new WebSocket("wss://api.lanyard.rest/socket"),this.ws.onopen=()=>{this.isConnecting=!1,this.reconnectAttempts=0,xe.isConnected=!0,this.ws.send(JSON.stringify({op:2,d:{subscribe_to_id:this.userId}}))},this.ws.onmessage=t=>{try{this.handleMessage(JSON.parse(t.data))}catch{}},this.ws.onclose=t=>{this.isConnecting=!1,xe.isConnected=!1,this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),t.code!==1e3&&this.reconnectAttempts<this.maxAttempts&&this.scheduleReconnect()},this.ws.onerror=()=>{this.isConnecting=!1,xe.isConnected=!1}}catch{this.isConnecting=!1,xe.isLoading=!1,this.scheduleReconnect()}}}handleMessage(t){t.op===1?this.startHeartbeat(t.d.heartbeat_interval):t.op===0&&(t.t==="INIT_STATE"||t.t==="PRESENCE_UPDATE")&&(this.updatePresence(t.d),xe.isLoading=!1)}updatePresence(t){t.discord_user&&(xe.discordUser={username:t.discord_user.username,discriminator:t.discord_user.discriminator,avatar:t.discord_user.avatar,id:t.discord_user.id}),xe.spotify=t.spotify?{song:t.spotify.song,artist:t.spotify.artist,track_id:t.spotify.track_id}:null,t.discord_status&&(xe.discordStatus=t.discord_status,xe.discordStatusColor=t.discord_status==="online"?"text-catppuccin-gold":"text-catppuccin-subtle"),xe.editorActivity=t.activities?.find(n=>n.name==="Visual Studio Code"||n.name==="Code"||n.name==="Zed")}startHeartbeat(t){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({op:3}))},t)}scheduleReconnect(){this.reconnectTimeout&&clearTimeout(this.reconnectTimeout),this.reconnectAttempts++;const t=Math.min(1e3*Math.pow(2,this.reconnectAttempts-1),3e4);this.reconnectTimeout=setTimeout(()=>this.connect(),t)}disconnect(){this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),this.ws&&(this.ws.close(1e3,"Manual disconnect"),this.ws=null),xe.isConnected=!1}}const zu=new Ku;zu.connect();const Cr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",white:"#cdd6f4"},Yu=[{id:"posts",label:"posts",href:"/posts",external:!1,accentColor:"mauve"},{id:"github",label:"github",href:"https://github.com/Hecker-01",external:!0,accentColor:"white"}];function Ju(){return Yu.map(e=>({...e,accentColor:Cr[e.accentColor]||Cr.mauve}))}const Dn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Qu={class:"mb-6"},Zu={class:"mb-6"},Xu={class:"flex items-center flex-wrap gap-4 text-sm mt-4"},ed=["href"],td={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},nd={class:"space-y-1 text-sm"},sd={key:0,class:"flex items-center gap-2"},od={class:"text-catppuccin-text"},rd={key:1,class:"flex items-center gap-2"},id={class:"text-catppuccin-text truncate"},ad={key:2,class:"flex items-center gap-2"},cd={class:"text-catppuccin-blue"},ld={class:"text-catppuccin-text truncate"},ud={key:0},dd={key:1,class:"text-catppuccin-subtle"},fd={key:2},pd={__name:"HeroSection",setup(e){const t=Ju(),n=ce(()=>xe.discordStatusColor),s=ce(()=>xe.spotify),o=ce(()=>xe.discordStatus),r=ce(()=>xe.discordUser),i=ce(()=>xe.editorActivity),a=ce(()=>xe.isLoading),c=ce(()=>{if(!i.value)return null;if(i.value.details&&i.value.details.toLowerCase().includes("idling"))return"idling";const u=i.value.name,l=u==="Zed",m=u==="IntelliJ IDEA Ultimate"||u==="IntelliJ IDEA"||u==="Android Studio";let w="",C="";return m?(w=i.value.details||"",C=i.value.state||""):l?(w=i.value.state||"",C=i.value.details||""):(w=i.value.details||"",C=i.value.state||""),w=w.replace(/editing /i,"").replace(/working on /i,"").trim(),C=C.replace(/in /i,"").replace(/workspace: /i,"").trim(),{name:u,workspace:C,filename:w}});return(u,l)=>{const f=co("router-link");return R(),D("div",Qu,[_("div",Zu,[l[2]||(l[2]=fo('<div class="text-catppuccin-subtle text-sm mb-2" data-v-41f1cfe9>~$ whoami</div><h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2" data-v-41f1cfe9><span class="text-catppuccin-mauve" data-v-41f1cfe9>jesse</span><span class="text-catppuccin-subtle" data-v-41f1cfe9>@</span><span class="text-catppuccin-blue" data-v-41f1cfe9>heckr.dev</span></h1><div class="text-sm text-catppuccin-gray 6" data-v-41f1cfe9><span class="text-catppuccin-subtle" data-v-41f1cfe9>aka </span><span class="text-catppuccin-green" data-v-41f1cfe9>Hecker_01</span></div>',3)),_("div",Xu,[(R(!0),D(fe,null,qe(Be(t),h=>(R(),D(fe,{key:h.id},[h.external?(R(),D("a",{key:1,href:h.href,target:"_blank",class:"text-catppuccin-subtle transition-colors flex items-center gap-1 group",style:Ke({"--accent":h.accentColor})},[l[1]||(l[1]=Ve(" [",-1)),_("span",{class:"transition-colors",style:Ke({color:h.accentColor})},"cd ",4),Ve("~/"+Y(h.label)+"] ",1)],12,ed)):(R(),Cn(f,{key:0,to:h.href,class:"text-catppuccin-subtle transition-colors flex items-center gap-1 group",style:Ke({"--accent":h.accentColor})},{default:Tt(()=>[l[0]||(l[0]=Ve(" [",-1)),_("span",{class:"transition-colors",style:Ke({color:h.accentColor})},"cd ",4),Ve("~/"+Y(h.label)+"] ",1)]),_:2},1032,["to","style"]))],64))),128))])]),l[9]||(l[9]=_("div",{class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},[_("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cat about.txt"),_("p",{class:"text-catppuccin-text leading-relaxed mb-4"},[Ve(" Hi! I'm Jesse, I code things for Minecraft, Discord, random CLI tools, websites, apps and more. "),_("br"),Ve(" My passion is backend development, but I also enjoy working on frontend and mobile projects. "),_("br"),Ve(" I have experience in a lot of different programming languages and frameworks, and I love learning new ones! ")])],-1)),_("div",td,[l[8]||(l[8]=_("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ ps aux | grep heckr.dev ",-1)),_("div",nd,[!a.value&&r.value?(R(),D("div",sd,[l[3]||(l[3]=_("span",{class:"text-catppuccin-blue"},"discord",-1)),l[4]||(l[4]=_("span",{class:"text-catppuccin-subtle"},":",-1)),_("span",od,Y(r.value.username),1),_("span",{class:Wt(n.value)},"["+Y(o.value)+"]",3)])):Re("",!0),!a.value&&s.value?(R(),D("div",rd,[l[5]||(l[5]=_("span",{class:"text-catppuccin-green"},"spotify",-1)),l[6]||(l[6]=_("span",{class:"text-catppuccin-subtle"},":",-1)),_("span",id,Y(s.value.song)+" - "+Y(s.value.artist),1)])):Re("",!0),!a.value&&i.value&&c.value&&(c.value.workspace||c.value.filename)?(R(),D("div",ad,[_("span",cd,Y(c.value.name==="Zed"?"zed":c.value.name==="IntelliJ IDEA Ultimate"||c.value.name==="IntelliJ IDEA"?"intellij":c.value.name==="Android Studio"?"android-studio":"vscode"),1),l[7]||(l[7]=_("span",{class:"text-catppuccin-subtle"},":",-1)),_("span",ld,[c.value.workspace?(R(),D("span",ud,Y(c.value.workspace.toLowerCase()),1)):Re("",!0),c.value.workspace&&c.value.filename?(R(),D("span",dd," / ")):Re("",!0),c.value.filename?(R(),D("span",fd,Y(c.value.filename.toLowerCase()),1)):Re("",!0)])])):Re("",!0)])])])}}},hd=Dn(pd,[["__scopeId","data-v-41f1cfe9"]]),md={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},gd={key:0,class:"text-sm text-catppuccin-subtle"},bd={key:1,class:"text-sm text-catppuccin-text"},vd={key:0,class:"text-catppuccin-subtle"},yd={key:2,class:"text-sm text-catppuccin-subtle"},xd={__name:"LanguagesList",props:{languages:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){return(t,n)=>(R(),D("div",md,[n[0]||(n[0]=_("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls ~/tools",-1)),e.loading?(R(),D("div",gd," loading languages... ")):e.languages.length?(R(),D("div",bd,[(R(!0),D(fe,null,qe(e.languages,(s,o)=>(R(),D("span",{key:s.language},[Ve(Y(s.language)+"("+Y(s.count)+")",1),o<e.languages.length-1?(R(),D("span",vd," | ")):Re("",!0)]))),128))])):(R(),D("div",yd,"no languages found"))]))}},wd={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},_d={class:"lg:flex-1 flex flex-col"},kd={key:0,class:"space-y-2"},Sd={key:1,class:"text-sm text-catppuccin-subtle"},Cd=["href"],Ed={class:"flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2"},Ad={class:"flex-1 min-w-0"},Td={class:"flex items-center gap-2"},Rd=["title"],Pd={key:0,class:"text-catppuccin-yellow text-xs flex-shrink-0"},Dd=["title"],Id={key:3,class:"text-sm text-catppuccin-subtle"},Od={__name:"ProjectsList",props:{repos:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){const t=e,n=ce(()=>t.repos.length?[...t.repos].sort((s,o)=>o.stargazers_count-s.stargazers_count).slice(0,6):[]);return(s,o)=>(R(),D("div",wd,[o[2]||(o[2]=_("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ ls ~/projects",-1)),_("div",_d,[e.loading?(R(),D("div",kd,[(R(),D(fe,null,qe(6,r=>_("div",{key:`repo-loading-${r}`,class:"rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3"},[...o[0]||(o[0]=[fo('<div class="flex items-start gap-3" data-v-cc63960f><span class="text-catppuccin-subtle" data-v-cc63960f>&gt;</span><div class="flex-1 min-w-0" data-v-cc63960f><div class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink" data-v-cc63960f></div><div class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink" data-v-cc63960f></div></div></div>',1)])])),64))])):e.repos.length?n.value.length?(R(),Cn(Cl,{key:2,name:"list",tag:"div",class:"space-y-2"},{default:Tt(()=>[(R(!0),D(fe,null,qe(n.value,r=>(R(),D("a",{key:r.id,href:r.html_url,target:"_blank",class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors"},[_("div",Ed,[o[1]||(o[1]=_("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors"},">",-1)),_("div",Ad,[_("div",Td,[_("span",{class:"text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate",title:r.name},Y(r.name),9,Rd),r.stargazers_count>0?(R(),D("span",Pd," ★"+Y(r.stargazers_count),1)):Re("",!0)]),_("p",{class:"text-xs text-catppuccin-gray truncate",title:r.description},Y(r.description||"no description"),9,Dd)])])],8,Cd))),128))]),_:1})):(R(),D("div",Id," no repositories found ")):(R(),D("div",Sd," no projects found "))])]))}},Ld=Dn(Od,[["__scopeId","data-v-cc63960f"]]),Er={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",maroon:"#eba0ac",flamingo:"#f2cdcd"},$d=[{id:1,name:"Yume Ramen",description:"A full application with an app, dashboard, and API, built with Vue.js, Tailwind CSS, and Node.js. It features a sleek design and robust functionality.",link:"https://yume.bram-jesse.sd-lab.nl/",screenshot:"/screenshot-yume-front.png",accentColor:"red"},{id:2,name:"This Portfolio Website",description:"Built with Vue.js and Tailwind CSS, showcasing my projects and skills.",link:"https://github.com/hecker-01/website",screenshot:"/screenshot.png",accentColor:"lavender"},{id:3,name:"satisSuite",description:"A comprehensive plugin suite designed to streamline moderation, enhance player experience, and give you complete control over your server.",link:"https://satissuite.heckr.dev",screenshot:"/screenshot-satissuite.png",accentColor:"mauve"}];function Md(){return $d.map(e=>({...e,accentColor:Er[e.accentColor]||Er.mauve}))}const Nd={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},Bd={key:0,class:"text-sm text-catppuccin-subtle"},Fd={class:"lg:flex-1 lg:relative"},Hd=["href"],Ud={key:0,class:"w-full flex-1 overflow-hidden bg-catppuccin-surface/30"},Wd=["src","alt"],Vd={class:"px-3 py-3 flex-shrink-0"},jd={class:"flex items-start gap-3"},Gd={class:"flex-1 min-w-0"},qd={class:"text-xs text-catppuccin-gray leading-relaxed"},Kd={key:0,class:"flex justify-center gap-1.5 mt-3 flex-shrink-0"},zd=["onClick"],Yd={__name:"ShowcaseCarousel",setup(e){const t=ke([]),n=ke(0),s=ke(!1);let o=null;const r=ce(()=>t.value.length?t.value[n.value]:null);return Vt(()=>{t.value=Md(),t.value.length>1&&(o=setInterval(()=>{s.value||(n.value=(n.value+1)%t.value.length)},1e4))}),as(()=>{o&&clearInterval(o)}),(i,a)=>(R(),D("div",Nd,[a[2]||(a[2]=_("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ cat ~/showcase",-1)),t.value.length?(R(),D("div",{key:1,class:"relative lg:flex-1 flex flex-col",onMouseenter:a[0]||(a[0]=c=>s.value=!0),onMouseleave:a[1]||(a[1]=c=>s.value=!1)},[_("div",Fd,[Z(go,{name:"showcase",mode:"out-in"},{default:Tt(()=>[r.value?(R(),D("a",{key:r.value.id,href:r.value.link,target:"_blank",class:"group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col",style:Ke({borderColor:`${r.value.accentColor}40`})},[r.value.screenshot?(R(),D("div",Ud,[_("img",{src:r.value.screenshot,alt:r.value.name,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,Wd)])):Re("",!0),_("div",Vd,[_("div",jd,[_("span",{class:"transition-colors",style:Ke({color:r.value.accentColor})},">",4),_("div",Gd,[_("h3",{class:"text-sm font-medium text-catppuccin-text transition-colors mb-1",style:Ke({color:r.value.accentColor})},Y(r.value.name),5),_("p",qd,Y(r.value.description),1)])])])],12,Hd)):Re("",!0)]),_:1})]),t.value.length>1?(R(),D("div",Kd,[(R(!0),D(fe,null,qe(t.value,(c,u)=>(R(),D("button",{key:`dot-${c.id}`,onClick:l=>n.value=u,class:Wt(["w-2 h-2.5 rounded-full transition-all",u===n.value?"bg-catppuccin-mauve w-4":"bg-catppuccin-surface/60 hover:bg-catppuccin-surface"]),style:Ke(u===n.value?{backgroundColor:r.value.accentColor}:{})},null,14,zd))),128))])):Re("",!0)],32)):(R(),D("div",Bd," no items to showcase "))]))}},Jd=Dn(Yd,[["__scopeId","data-v-89780803"]]),xo="hecker-01",la=async()=>{try{const e=[];let t=1;const n=100;for(;;){const r=await fetch(`https://api.github.com/users/${xo}/repos?per_page=${n}&page=${t}`);if(!r.ok)break;const i=await r.json();if(!i.length||(e.push(...i),i.length<n))break;t++}const s={};e.forEach(r=>{r.language&&(s[r.language]=(s[r.language]||0)+1)});const o=Object.entries(s).sort((r,i)=>i[1]-r[1]).map(([r,i])=>({language:r,count:i}));return{repos:e,languages:o,totalRepos:e.length}}catch(e){return console.error("Error fetching GitHub data:",e),{repos:[],languages:[],totalRepos:0}}},Qd=async()=>{const t=new Date;t.getFullYear();try{const n=await fetch(`https://github-contributions-api.jogruber.de/v4/${xo}?y=last`);if(!n.ok)throw new Error("Failed to fetch contribution data");const s=await n.json(),o=[];if(s.contributions&&s.contributions.forEach(r=>{o.push({date:r.date,count:r.count})}),o.length>0){const i=new Date(t);i.setDate(i.getDate()-371+1);const a=[];for(let c=0;c<371;c++){const u=new Date(i);u.setDate(u.getDate()+c);const l=u.toISOString().split("T")[0],f=o.find(h=>h.date===l);a.push({date:l,count:f?f.count:0})}return a}throw new Error("No contributions data available")}catch(n){console.error("Error fetching contribution data:",n);const s=new Map;for(let o=370;o>=0;o--){const r=new Date(t);r.setDate(r.getDate()-o);const i=r.toISOString().split("T")[0];s.set(i,0)}return Array.from(s.entries()).sort((o,r)=>o[0].localeCompare(r[0])).map(([o,r])=>({date:o,count:r}))}},Rs=e=>e===0?0:e<=2?1:e<=5?2:e<=8?3:4,Zd=e=>`https://github.com/${xo}?tab=overview&from=${e}&to=${e}`,Xd={class:"mt-6 border-l-2 border-catppuccin-surface pl-4"},ef={class:"flex items-center justify-between mb-3"},tf={key:0,class:"flex items-center gap-1 text-[10px] text-catppuccin-subtle"},nf={key:0},sf={key:1},of={class:"overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-thin"},rf={class:"inline-flex md:flex gap-[3px] md:gap-1",style:{"min-width":"max-content"}},af=["href","title"],cf=["title"],lf={class:"text-xs text-catppuccin-gray mt-2"},uf={__name:"ContributionGraph",setup(e){const t=ke([]),n=ke(!0),s=ce(()=>{const i=[];for(let a=0;a<t.value.length;a+=7)i.push(t.value.slice(a,a+7));return i}),o=ce(()=>t.value.reduce((i,a)=>i+a.count,0)),r=async()=>{try{n.value=!0,t.value=await Qd()}catch{}finally{n.value=!1}};return Vt(()=>{r()}),(i,a)=>(R(),D("div",Xd,[_("div",ef,[a[1]||(a[1]=_("div",{class:"text-catppuccin-subtle text-sm"},' ~$ git log --oneline --since="1.year.ago" | wc -l ',-1)),n.value?Re("",!0):(R(),D("div",tf,[...a[0]||(a[0]=[fo('<span>less</span><div class="flex gap-[1px]"><div class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green"></div></div><span>more</span>',3)])]))]),n.value?(R(),D("div",nf,[...a[2]||(a[2]=[_("div",{class:"h-[60px] bg-catppuccin-surface/30 rounded cursor-blink"},null,-1)])])):(R(),D("div",sf,[_("div",of,[_("div",rf,[(R(!0),D(fe,null,qe(s.value,(c,u)=>(R(),D("div",{key:u,class:"flex flex-col gap-[3px] md:gap-1 md:flex-1"},[(R(!0),D(fe,null,qe(c,(l,f)=>(R(),D(fe,{key:f},[l.count>0?(R(),D("a",{key:0,href:Be(Zd)(l.date),target:"_blank",rel:"noopener noreferrer",class:Wt(["w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm transition-all hover:ring-1 hover:ring-catppuccin-green hover:scale-110 cursor-pointer",[Be(Rs)(l.count)===1?"bg-catppuccin-green/30 hover:bg-catppuccin-green/40":Be(Rs)(l.count)===2?"bg-catppuccin-green/50 hover:bg-catppuccin-green/60":Be(Rs)(l.count)===3?"bg-catppuccin-green/70 hover:bg-catppuccin-green/80":"bg-catppuccin-green hover:bg-catppuccin-green"]]),title:`${l.date}: ${l.count} contributions - Click to view on GitHub`},null,10,af)):(R(),D("div",{key:1,class:"w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm bg-catppuccin-surface/50",title:`${l.date}: ${l.count} contributions`},null,8,cf))],64))),128))]))),128))])]),_("div",lf,Y(o.value)+" contributions in the last year ",1)]))]))}},df={class:"w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400"},Qn={__name:"Footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(R(),D("footer",df,[_("p",null,"© 2020 - "+Y(Be(t))+" heckr.dev | All rights reserved.",1)]))}},ff={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},pf={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},hf={class:"grid lg:grid-cols-2 gap-6 lg:items-stretch"},mf={__name:"Home",setup(e){const t=ke([]),n=ke(!0),s=ke([]),o=async()=>{try{n.value=!0;const{repos:r,languages:i}=await la("hecker-01");t.value=r,s.value=i}catch{}finally{n.value=!1}};return Vt(()=>{o()}),(r,i)=>(R(),D("div",ff,[_("div",pf,[Z(hd),Z(xd,{languages:s.value,loading:n.value},null,8,["languages","loading"]),_("div",hf,[Z(Ld,{repos:t.value,loading:n.value},null,8,["repos","loading"]),Z(Jd)]),Z(uf),Z(Qn)])]))}},gf=`---
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
`,bf=`---
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
sudo chown -R $USER:$USER /srv/media
sudo chown -R $USER:$USER /srv/docker
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
version: "3.9"

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
5. Restart Jellyfin:

\`\`\`bash
docker restart jellyfin
\`\`\`

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
`,vf=`---
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
`,yf=`---
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
`,xf=`---
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
`,wf=`---
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
`,_f=Object.assign({"/posts/docker-and-compose.md":gf,"/posts/jellyfin-server.md":bf,"/posts/local-database.md":vf,"/posts/markdown-showcase.md":yf,"/posts/using-commandline.md":xf,"/posts/using-git.md":wf}),kf=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const c=(u,l)=>{l=l.trim(),l.startsWith("[")&&l.endsWith("]")?o[u]=l.slice(1,-1).split(",").map(f=>f.trim()):o[u]=l};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&c(i,a);const[f,...h]=u.split(":");if(!f||f.trim()==="")return;i=f.trim(),a=h.join(":").trim()}}),i&&a&&c(i,a),{frontmatter:o,content:s}},Sf=()=>{const e=[];let t=1;return Object.entries(_f).forEach(([n,s])=>{const{frontmatter:o,content:r}=kf(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,date:o.date||new Date().toISOString().split("T")[0],tags:o.tags||[],description:o.description||"",unlisted:o.unlisted===!0||o.unlisted==="true",content:r.trim(),readingTime:Af(r)})}),e};let Mn=null;const wo=(e=!1)=>(Mn||(Mn=Sf()),(e?[...Mn]:Mn.filter(n=>!n.unlisted)).sort((n,s)=>qs(s.date)-qs(n.date))),Cf=e=>wo(!0).find(t=>t.slug===e),Ef=()=>{const e=new Set;return wo().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()},qs=e=>{const[t,n,s]=e.split("-");return new Date(s,n-1,t)},Af=e=>{const n=e.trim().split(/\s+/).length;return Math.ceil(n/225)},Tf={class:"sm:border-l-2 sm:border-catppuccin-surface pl-2 sm:pl-4"},Rf={class:"flex flex-wrap gap-1.5 sm:gap-2"},Pf=["onClick"],Df={__name:"TagFilter",props:{tags:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["toggle-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("toggle-tag",o)};return(o,r)=>(R(),D("div",Tf,[r[0]||(r[0]=_("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls tags/",-1)),_("div",Rf,[(R(!0),D(fe,null,qe(e.tags,i=>(R(),D("button",{key:i,onClick:a=>s(i),class:Wt(["px-3 py-1.5 sm:py-1 rounded text-xs transition-colors border",e.selectedTag===i?"bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve":"bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay"])}," #"+Y(i),11,Pf))),128))])]))}},If={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2"},Of={class:"text-catppuccin-subtle text-sm mb-3"},Lf={key:0,class:"text-catppuccin-mauve"},$f={key:0,class:"text-sm text-catppuccin-subtle"},Mf={key:1,class:"space-y-3"},Nf=["onClick"],Bf={class:"px-3 sm:px-4 py-3"},Ff={class:"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2"},Hf={class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors"},Uf={class:"flex items-center gap-2 flex-shrink-0"},Wf={class:"text-xs text-catppuccin-subtle"},Vf=["title"],jf={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed"},Gf={class:"flex items-center gap-2"},qf={class:"flex flex-wrap gap-1.5"},Kf=["onClick"],zf={__name:"PostList",props:{posts:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-post","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-post",o)};return(o,r)=>(R(),D("div",If,[_("div",Of,[r[0]||(r[0]=Ve(" ~$ ls -la posts/ ",-1)),e.selectedTag?(R(),D("span",Lf,'| grep "'+Y(e.selectedTag)+'"',1)):Re("",!0)]),e.posts.length?(R(),D("div",Mf,[(R(!0),D(fe,null,qe(e.posts,i=>(R(),D("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer"},[_("div",Bf,[_("div",Ff,[_("h2",Hf,Y(i.title),1),_("div",Uf,[_("span",Wf,Y(i.readingTime)+" min read ",1),r[1]||(r[1]=_("span",{class:"text-catppuccin-surface"},"•",-1)),_("span",{class:"text-xs text-catppuccin-subtle",title:Be(qs)(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},Y(i.date),9,Vf)])]),_("p",jf,Y(i.description),1),_("div",Gf,[_("div",qf,[(R(!0),D(fe,null,qe(i.tags,a=>(R(),D("span",{key:a,onClick:Ll(c=>n("select-tag",a),["stop"]),class:"px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:bg-catppuccin-mauve/20 hover:text-catppuccin-mauve cursor-pointer transition-colors"}," #"+Y(a),9,Kf))),128))]),r[2]||(r[2]=_("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm shrink-0"}," read → ",-1))])])],8,Nf))),128))])):(R(),D("div",$f," no posts found "))]))}};class Yf{extractVariables(t){const n=new RegExp("(?<!\\\\)\\$\\[([^\\]]+)\\]","g"),s=new Set;let o;for(;(o=n.exec(t))!==null;)s.add(o[1]);return Array.from(s)}substitute(t,n={}){const s=[];let o=t.replace(/\\\$\[([^\]]+)\]/g,(r,i)=>{const a=`__ESCAPED_VAR_${s.length}__`;return s.push(`$[${i}]`),a});return o=o.replace(/\$\[([^\]]+)\]/g,(r,i)=>n[i]||i),s.forEach((r,i)=>{o=o.replace(`__ESCAPED_VAR_${i}__`,r)}),o}}const Ar=new Yf;class Jf{process(t){let n=t;const s=[];n=n.replace(/__([A-Z_0-9]+)__/g,r=>{const i=`\0PROT${s.length}\0`;return s.push(r),i});const o=[];return n=n.replace(/`([^`]+)`/g,(r,i)=>{const a=`IC${o.length}`;return o.push(this._renderInlineCode(i)),a}),n=n.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),n=n.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),n=n.replace(/_(.*?)_/g,'<em class="text-catppuccin-text italic">$1</em>'),n=n.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),n=n.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>'),n=n.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">'),n=n.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>'),o.forEach((r,i)=>{n=n.replaceAll(`IC${i}`,r)}),s.forEach((r,i)=>{n=n.replaceAll(`\0PROT${i}\0`,r)}),n}_renderInlineCode(t){return`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code>`}}class Qf{constructor(t=new Jf){this.inlineParser=t}parse(t){let n=t;const s={codeBlocks:[],hintBlocks:[],detailsBlocks:[],escapedTokens:[],inlineCodeBlocks:[],tables:[]};return n=this._extractCodeBlocks(n,s),n=this._extractHintBlocks(n,s),n=this._extractDetailsBlocks(n,s),n=this._extractEscapeSequences(n,s),n=this._extractInlineCode(n,s),n=this._extractTables(n,s),n=this._transformHorizontalRules(n),n=this._transformHeadings(n),n=this._transformBlockquotes(n),n=this._transformImages(n),n=this._transformBoldItalic(n),n=this._transformStrikethrough(n),n=this._transformLinks(n),n=this._transformLists(n),n=this._transformParagraphs(n),n=this._restoreDetailsBlocks(n,s),n=this._restoreHintBlocks(n,s),n=this._restoreCodeBlocks(n,s),n=this._restoreTables(n,s),n=this._restoreInlineCode(n,s),n=this._restoreEscapeSequences(n,s),n}_extractCodeBlocks(t,n){return t.replace(/```(\w*)(?::([^\s\n]+))?\s*\n?([\s\S]*?)```/g,(s,o,r,i)=>{const a=`__CODEBLOCK_${n.codeBlocks.length}__`;return n.codeBlocks.push(this._renderCodeBlock(o,r,i,n.codeBlocks.length)),a})}_extractHintBlocks(t,n){return t.replace(/:::hint\s+(\w+)\r?\n([\s\S]*?):::/g,(s,o,r)=>{const i=`__HINT_${n.hintBlocks.length}__`;return n.hintBlocks.push({type:o.trim().toLowerCase(),content:r.trim()}),i})}_extractDetailsBlocks(t,n){let s=!0;for(;s;){const o=t;t=t.replace(/:::details\s+([^\n\r]+)\r?\n([\s\S]*?):::/g,(r,i,a)=>{const c=`__DETAILS_${n.detailsBlocks.length}__`;return n.detailsBlocks.push({title:i.trim(),content:a.trim()}),c}),s=t!==o}return t}_extractEscapeSequences(t,n){return t.replace(/\\\\|\\`/g,s=>{const o=`__ESCAPED_TOKEN_${n.escapedTokens.length}__`;return n.escapedTokens.push(s==="\\\\"?"\\":"`"),o})}_extractInlineCode(t,n){return t.replace(/`([^`]+)`/g,(s,o)=>{const r=`__INLINECODE_${n.inlineCodeBlocks.length}__`,i=o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return n.inlineCodeBlocks.push(`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${i}</code>`),r})}_extractTables(t,n){return t.replace(/((?:\|[^\n]+\|\r?\n?)+)/g,s=>{const o=s.trim().split(/\r?\n/);if(o.length<2||!/^\|[\s\-:|]+\|$/.test(o[1]))return s;const r=`__TABLE_${n.tables.length}__`;return n.tables.push(this._renderTable(o)),r})}_transformHorizontalRules(t){return t.replace(/^(?:---|\*\*\*|___)\s*$/gim,'<hr class="border-catppuccin-surface my-6">')}_transformHeadings(t){return t=t.replace(/^###### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h6 id="${o}" class="group text-xs font-semibold text-catppuccin-mauve mt-4 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h6>`}),t=t.replace(/^##### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h5 id="${o}" class="group text-sm font-semibold text-catppuccin-mauve mt-4 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h5>`}),t=t.replace(/^#### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h4 id="${o}" class="group text-base font-semibold text-catppuccin-mauve mt-5 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h4>`}),t=t.replace(/^### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h3 id="${o}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`}),t=t.replace(/^## (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h2 id="${o}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`}),t=t.replace(/^# (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h1 id="${o}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`}),t}_transformBlockquotes(t){return t.replace(/^> (.*$)/gim,'<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>')}_transformImages(t){return t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">')}_transformBoldItalic(t){return t=t.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),t=t.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),t=t.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),t}_transformStrikethrough(t){return t.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>')}_transformLinks(t){return t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>')}_transformLists(t){return t=t.replace(/^[\-\*\+] \[x\] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>'),t=t.replace(/^[\-\*\+] \[ \] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>'),t=t.replace(/^\d+\. (.*$)/gim,'<li data-list-type="ol" class="ml-6 text-catppuccin-text mb-1">$1</li>'),t=t.replace(/^[\-\*\+] (.*$)/gim,'<li data-list-type="ul" class="ml-6 text-catppuccin-text mb-1">$1</li>'),t=t.replace(/(<li data-list-type="ol"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ol"[^>]*>.*?<\/li>))*/g,n=>`<ol class="list-decimal my-4 pl-2">${n}</ol>`),t=t.replace(/(<li data-list-type="ul"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ul"[^>]*>.*?<\/li>))*/g,n=>`<ul class="list-disc my-4">${n}</ul>`),t=t.replace(/ data-list-type="[^"]+"/g,""),t}_transformParagraphs(t){const n=/^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;return t.split(`

`).map(s=>{const o=s.trim();if(o.length===0||o.startsWith("__CODEBLOCK_")||o.startsWith("__TABLE_")||o.startsWith("__DETAILS_")||o.startsWith("__HINT_"))return s;const r=s.split(`
`),i=[];let a=[];const c=()=>{if(a.length>0){const u=a.join("<br>");i.push(`<p class="text-catppuccin-text leading-relaxed mb-4">${u}</p>`),a=[]}};return r.forEach(u=>{const l=u.trim();l.length===0||n.test(l)||l.startsWith("__CODEBLOCK_")||l.startsWith("__TABLE_")||l.startsWith("__DETAILS_")||l.startsWith("__HINT_")?(c(),i.push(u)):a.push(u.trim())}),c(),i.join(`
`)}).join(`

`)}_restoreDetailsBlocks(t,n){for(let s=n.detailsBlocks.length-1;s>=0;s--){const o=n.detailsBlocks[s],r=`<details class="my-4 border border-catppuccin-surface rounded overflow-hidden">
      <summary class="bg-catppuccin-crust px-3 sm:px-4 py-2 cursor-pointer text-catppuccin-text hover:bg-catppuccin-surface/30 transition-colors text-sm sm:text-base">
        ${this.inlineParser.process(o.title)}
      </summary>
      <div class="p-3 sm:p-4 bg-catppuccin-base/30 text-sm">${this.inlineParser.process(o.content)}</div>
    </details>`;t=t.replaceAll(`__DETAILS_${s}__`,r)}return t}_restoreHintBlocks(t,n){const s={info:{bg:"bg-catppuccin-blue/10",border:"border-catppuccin-blue/50",icon:"i",title:"Info"},warning:{bg:"bg-catppuccin-yellow/10",border:"border-catppuccin-yellow/50",icon:"!",title:"Warning"},tip:{bg:"bg-catppuccin-green/10",border:"border-catppuccin-green/50",icon:"*",title:"Tip"},danger:{bg:"bg-catppuccin-red/10",border:"border-catppuccin-red/50",icon:"x",title:"Danger"},note:{bg:"bg-catppuccin-mauve/10",border:"border-catppuccin-mauve/50",icon:"#",title:"Note"}};return n.hintBlocks.forEach((o,r)=>{const i=s[o.type]||s.info,a=`<div class="my-4 ${i.bg} ${i.border} border-l-4 rounded-r px-3 sm:px-4 py-3">
      <div class="flex items-center gap-2 font-medium text-catppuccin-text mb-1 text-sm sm:text-base">
        <span class="font-mono text-sm">[${i.icon}]</span>
        <span>${i.title}</span>
      </div>
      <div class="text-catppuccin-text text-xs sm:text-sm">${this.inlineParser.process(o.content)}</div>
    </div>`;t=t.replaceAll(`__HINT_${r}__`,a)}),t}_restoreCodeBlocks(t,n){return n.codeBlocks.forEach((s,o)=>{t=t.replaceAll(`__CODEBLOCK_${o}__`,s)}),t}_restoreTables(t,n){return n.tables.forEach((s,o)=>{t=t.replaceAll(`__TABLE_${o}__`,s)}),t}_restoreInlineCode(t,n){return n.inlineCodeBlocks.forEach((s,o)=>{t=t.replaceAll(`__INLINECODE_${o}__`,s)}),t}_restoreEscapeSequences(t,n){return n.escapedTokens.forEach((s,o)=>{t=t.replaceAll(`__ESCAPED_TOKEN_${o}__`,s)}),t}_renderCodeBlock(t,n,s,o){const r=s.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\`/g,"`"),i=t?`language-${t.toLowerCase()}`:"",a=`code-block-${o}`,c=t?t.toLowerCase():"text",u=n||"";return`<div class="my-4 -mx-2 sm:mx-0">
        ${`<div class="flex items-center justify-between bg-catppuccin-crust border border-catppuccin-surface/50 border-b-0 rounded-t px-2 sm:px-3 py-1.5 text-xs">
      <div class="flex items-center gap-1 min-w-0 truncate">
        ${u?`<span class="text-catppuccin-text truncate">${u}</span><span class="text-catppuccin-subtle shrink-0">(${c})</span>`:`<span class="text-catppuccin-mauve font-medium">${c}</span>`}
      </div>
      <button data-clipboard-target="#${a}" class="text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors cursor-pointer shrink-0 ml-2 p-1">copy</button>
    </div>`}
        <pre class="bg-catppuccin-base/50 border border-catppuccin-surface/50 rounded-t-none rounded-b p-2 sm:p-4 overflow-x-auto mt-0 text-xs sm:text-sm"><code id="${a}" class="${i}">${r}</code></pre>
      </div>`}_renderTable(t){const n=t[0],s=t.slice(2);let o='<div class="overflow-x-auto -mx-2 sm:mx-0 my-4"><table class="w-full text-sm border-collapse min-w-[400px]">';const r=n.split("|").filter(i=>i.trim());return o+="<thead><tr>",r.forEach(i=>{o+=`<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${i.trim()}</th>`}),o+="</tr></thead>",o+="<tbody>",s.forEach(i=>{if(i.trim()&&!/^\|[\s\-:|]+\|$/.test(i)){const a=i.split("|").filter(c=>c.trim());o+="<tr>",a.forEach(c=>{o+=`<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${c.trim()}</td>`}),o+="</tr>"}}),o+="</tbody></table></div>",o}_slugify(t){return t.toLowerCase().replace(/<[^>]*>/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}}const Zf=new Qf;class Xf{highlightAll(){window.Prism&&(Prism.highlightAll(),document.querySelectorAll('pre[class*="language-"]').forEach(t=>{t.className=t.className.replace(/language-\S+/g,"").trim()}))}highlightAfterDelay(t=100){setTimeout(()=>this.highlightAll(),t)}}const Tr=new Xf,ep={class:"mb-8"},tp={class:"text-catppuccin-subtle text-sm mb-2"},np={class:"text-3xl md:text-4xl font-bold text-catppuccin-mauve mb-3"},sp={class:"flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-catppuccin-subtle mb-4"},op={class:"flex flex-wrap gap-2"},rp={key:0,class:"mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"},ip={class:"space-y-3"},ap=["for"],cp=["id","onUpdate:modelValue","placeholder"],lp={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2 mb-8 overflow-hidden"},up=["innerHTML"],dp={__name:"PostComponent",props:{post:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=ce(()=>n.post.readingTime||1),i=ke({}),a=ce(()=>Ar.extractVariables(n.post.content)),c=ce(()=>Ar.substitute(n.post.content,i.value)),u=l=>Zf.parse(l);return Vt(()=>{Tr.highlightAfterDelay(100)}),Xt(i,()=>{ro(()=>{Tr.highlightAll()})},{deep:!0}),(l,f)=>(R(),D("div",null,[_("div",ep,[_("div",tp," ~$ cat "+Y(e.post.slug)+".md ",1),_("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-text transition-colors mb-6 inline-flex items-center gap-1"}," [← back to posts] "),_("h1",np,Y(e.post.title),1),_("div",sp,[_("span",null,Y(e.post.date),1),f[0]||(f[0]=_("span",{class:"hidden sm:inline text-catppuccin-surface"},"•",-1)),_("span",null,"~"+Y(r.value)+" min read",1),f[1]||(f[1]=_("span",{class:"hidden sm:inline text-catppuccin-surface"},"•",-1)),_("div",op,[(R(!0),D(fe,null,qe(e.post.tags,h=>(R(),D("span",{key:h,class:"text-catppuccin-gray"}," #"+Y(h),1))),128))])])]),a.value.length>0?(R(),D("div",rp,[f[2]||(f[2]=_("div",{class:"text-sm text-catppuccin-subtle mb-3"}," ~$ configure variables ",-1)),_("div",ip,[(R(!0),D(fe,null,qe(a.value,h=>(R(),D("div",{key:h,class:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"},[_("label",{for:`var-${h}`,class:"text-sm text-catppuccin-text sm:min-w-[120px]"},Y(h)+": ",9,ap),Xa(_("input",{id:`var-${h}`,"onUpdate:modelValue":m=>i.value[h]=m,type:"text",placeholder:h,class:"flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"},null,8,cp),[[Dl,i.value[h]]])]))),128))])])):Re("",!0),_("article",lp,[_("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:u(c.value)},null,8,up)]),_("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors inline-flex items-center gap-1"}," [← back to all posts] ")]))}},fp=Dn(dp,[["__scopeId","data-v-4c8558f1"]]),pp={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},hp={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},mp={key:"list"},gp={class:"mb-12"},bp={class:"flex items-center gap-4 text-sm mb-6"},vp={key:"post"},yp={__name:"Posts",setup(e){const t=ke("list"),n=ke(null),s=ke(null),o=ke([]),r=ke([]),i=ca(),a=yo(),c=ce(()=>s.value?o.value.filter(m=>m.tags.includes(s.value)):o.value),u=()=>{o.value=wo(),r.value=Ef()},l=m=>{if(n.value=Cf(m),n.value)t.value="post",window.scrollTo({top:0,behavior:"smooth"}),i.query.post!==m&&a.replace({name:"Posts",query:{...i.query,post:m}});else if(i.query.post){const w={...i.query};delete w.post,a.replace({name:"Posts",query:w})}},f=({skipQueryUpdate:m=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!m&&"post"in i.query){const w={...i.query};delete w.post,a.replace({name:"Posts",query:w})}},h=m=>{s.value=s.value===m?null:m};return Vt(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(C){const U=C.trigger,M=U.textContent;U.textContent="copied!",U.classList.add("text-catppuccin-green"),setTimeout(()=>{U.textContent=M,U.classList.remove("text-catppuccin-green")},2e3),C.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const w=i.query.post;w&&l(w)}),as(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),Xt(()=>i.query.post,(m,w)=>{m&&m!==w?l(m):!m&&t.value==="post"&&f({skipQueryUpdate:!0})}),(m,w)=>{const C=co("router-link");return R(),D("div",pp,[_("div",hp,[Z(go,{name:"fade",mode:"out-in"},{default:Tt(()=>[t.value==="list"?(R(),D("div",mp,[_("div",gp,[w[1]||(w[1]=_("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cd ~/posts",-1)),_("div",bp,[Z(C,{to:"/",class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"},{default:Tt(()=>[...w[0]||(w[0]=[Ve(" [← home] ",-1)])]),_:1})]),w[2]||(w[2]=_("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[_("span",{class:"text-catppuccin-mauve"},"Posts")],-1)),w[3]||(w[3]=_("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," My thoughts, tutorials, and experiences on various topics including web development, programming, and technology. ",-1)),Z(Df,{tags:r.value,"selected-tag":s.value,onToggleTag:h},null,8,["tags","selected-tag"])]),Z(zf,{posts:c.value,"selected-tag":s.value,onOpenPost:l,onSelectTag:h},null,8,["posts","selected-tag"]),Z(Qn)])):t.value==="post"&&n.value?(R(),D("div",vp,[Z(fp,{post:n.value,onGoBack:f},null,8,["post"]),Z(Qn)])):Re("",!0)]),_:1})])])}}},xp=Dn(yp,[["__scopeId","data-v-7a63f85b"]]),wp={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},_p={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16"},kp={class:"mb-8"},Sp={class:"text-catppuccin-subtle text-sm mb-4"},Cp={class:"border-l-2 border-catppuccin-surface pl-4"},Ep={class:"text-catppuccin-red text-sm"},Ap={class:"text-catppuccin-mauve"},Tp={__name:"NotFound",setup(e){const t=ca(),n=yo(),s=ce(()=>(t.fullPath||t.path||"/").replace(/^\//,"")||"."),o=()=>n.push("/");return(r,i)=>(R(),D("div",wp,[_("div",_p,[_("div",kp,[_("div",Sp," ~$ cd ~/"+Y(s.value),1),_("div",{class:"flex items-center gap-4 text-sm mb-6"},[_("button",{onClick:o,class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"}," [← home] ")])]),_("div",Cp,[_("div",Ep,[i[0]||(i[0]=Ve(" cd: no such file or directory: /",-1)),_("span",Ap,Y(s.value),1)])])]),Z(Qn)]))}},Rp=[{path:"/",name:"Home",component:mf,meta:{title:"Home | heckr.dev"}},{path:"/posts",name:"Posts",component:xp,meta:{title:"Posts | heckr.dev"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Tp,meta:{title:"404 Not Found | heckr.dev"}}],ua=Gu({history:ku(),routes:Rp,scrollBehavior(e,t,n){return n||{top:0}}});ua.beforeEach((e,t,n)=>{document.title=e.meta.title||"heckr.dev",n()});let un=0;const Rr=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],Pp=()=>{console.log("%cWelcome to heckr.dev","font-size: 20px; font-weight: bold; color: #cba6f7;"),console.log("%cWelcome to the dev console, here are some commands to try:","font-size: 14px; color: #a6adc8;"),console.log(`%c- help() - show available commands
- about() - learn more about me
- skills() - view my tech stack
- contact() - get my contact info`,"font-size: 12px; color: #6c7086;"),window.help=()=>{console.log("%cAvailable commands:","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%c- help() - show this message
- about() - about the developer
- skills() - technical skills
- contact() - contact information
- secret() - ???
`,"font-size: 12px; color: #a6adc8;")},window.about=()=>{console.log("%cAbout me","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cA passionate developer who loves building cool things with code!
Check out my projects and posts on the site.`,"font-size: 12px; color: #a6adc8;")},window.skills=async()=>{console.log("%cTech stack","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log("%cFetching...","font-size: 12px; color: #6c7086;");try{const{languages:e,totalRepos:t}=await la();e.length>0?(console.log("%cTop languages from "+t+" repositories found:","font-size: 14px; font-weight: bold; color: #a6adc8;"),e.slice(0,10).forEach(({language:n,count:s},o)=>{console.log(`%c${o+1}. ${n}: ${s} repos`,"font-size: 12px; color: #a6adc8;")})):console.log("%cUnable to fetch data, please try again later.","font-size: 12px; color: #f38ba8;")}catch{console.log("%cError loading data, please try again later.","font-size: 12px; color: #f38ba8;")}},window.contact=()=>{console.log("%cContact info","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cGitHub: https://github.com/hecker-01
Feel free to reach out!`,"font-size: 12px; color: #a6adc8;")},window.secret=()=>{console.log("%cYou found the secret command","font-size: 18px; font-weight: bold; color: #f9e2af;"),console.log("%cHere's a hint: ↑ ↑ ↓ ↓ ← → ← → B A","font-size: 12px; color: #fab387;")},document.addEventListener("keydown",e=>{e.code===Rr[un]?(un++,un===Rr.length&&(Dp(),un=0)):un=0})},Dp=()=>{if(console.log("%cKONAMI CODE ACTIVATED!","font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;"),document.body.style.animation="rainbow-border 2s linear infinite",!document.getElementById("konami-style")){const e=document.createElement("style");e.id="konami-style",e.textContent=`
      @keyframes rainbow-border {
        0% { box-shadow: inset 0 0 0 3px #f38ba8; }
        16% { box-shadow: inset 0 0 0 3px #fab387; }
        33% { box-shadow: inset 0 0 0 3px #f9e2af; }
        50% { box-shadow: inset 0 0 0 3px #a6e3a1; }
        66% { box-shadow: inset 0 0 0 3px #89dceb; }
        83% { box-shadow: inset 0 0 0 3px #89b4fa; }
        100% { box-shadow: inset 0 0 0 3px #cba6f7; }
      }
    `,document.head.appendChild(e)}setTimeout(()=>{document.body.style.animation=""},5e3)};Nl(qu).use(ua).mount("#app");Pp();
