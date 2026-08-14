(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function io(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const pe={},en=[],ut=()=>{},Ur=()=>!1,ls=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ao=e=>e.startsWith("onUpdate:"),we=Object.assign,co=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Oa=Object.prototype.hasOwnProperty,ae=(e,t)=>Oa.call(e,t),q=Array.isArray,tn=e=>us(e)==="[object Map]",Gr=e=>us(e)==="[object Set]",Y=e=>typeof e=="function",be=e=>typeof e=="string",kt=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",qr=e=>(me(e)||Y(e))&&Y(e.then)&&Y(e.catch),Kr=Object.prototype.toString,us=e=>Kr.call(e),Ma=e=>us(e).slice(8,-1),Yr=e=>us(e)==="[object Object]",lo=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bn=io(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ds=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},La=/-\w/g,Ye=ds(e=>e.replace(La,t=>t.slice(1).toUpperCase())),Na=/\B([A-Z])/g,Kt=ds(e=>e.replace(Na,"-$1").toLowerCase()),ps=ds(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ss=ds(e=>e?`on${ps(e)}`:""),$t=(e,t)=>!Object.is(e,t),Kn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},zr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},uo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ja=e=>{const t=be(e)?Number(e):NaN;return isNaN(t)?e:t};let No;const fs=()=>No||(No=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xe(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=be(s)?Va(s):xe(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(be(e)||me(e))return e}const Ba=/;(?![^(]*\))/g,Fa=/:([^]+)/,Ha=/\/\*[^]*?\*\//g;function Va(e){const t={};return e.replace(Ha,"").split(Ba).forEach(n=>{if(n){const s=n.split(Fa);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function yt(e){let t="";if(be(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const s=yt(e[n]);s&&(t+=s+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Wa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ua=io(Wa);function Jr(e){return!!e||e===""}const Qr=e=>!!(e&&e.__v_isRef===!0),U=e=>be(e)?e:e==null?"":q(e)||me(e)&&(e.toString===Kr||!Y(e.toString))?Qr(e)?U(e.value):JSON.stringify(e,Zr,2):String(e),Zr=(e,t)=>Qr(t)?Zr(e,t.value):tn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[As(s,r)+" =>"]=o,n),{})}:Gr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>As(n))}:kt(t)?As(t):me(t)&&!q(t)&&!Yr(t)?String(t):t,As=(e,t="")=>{var n;return kt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Fe;class Ga{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Fe,!t&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Fe;try{return Fe=this,t()}finally{Fe=n}}}on(){++this._on===1&&(this.prevScope=Fe,Fe=this)}off(){this._on>0&&--this._on===0&&(Fe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function qa(){return Fe}let he;const Ts=new WeakSet;class Xr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Fe&&Fe.active&&Fe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ts.has(this)&&(Ts.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ti(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jo(this),ni(this);const t=he,n=Je;he=this,Je=!0;try{return this.fn()}finally{si(this),he=t,Je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ho(t);this.deps=this.depsTail=void 0,jo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ts.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vs(this)&&this.run()}get dirty(){return Vs(this)}}let ei=0,vn,yn;function ti(e,t=!1){if(e.flags|=8,t){e.next=yn,yn=e;return}e.next=vn,vn=e}function po(){ei++}function fo(){if(--ei>0)return;if(yn){let t=yn;for(yn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;vn;){let t=vn;for(vn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function ni(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function si(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),ho(s),Ka(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Vs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(oi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function oi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Sn)||(e.globalVersion=Sn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Vs(e))))return;e.flags|=2;const t=e.dep,n=he,s=Je;he=e,Je=!0;try{ni(e);const o=e.fn(e._value);(t.version===0||$t(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{he=n,Je=s,si(e),e.flags&=-3}}function ho(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ho(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ka(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Je=!0;const ri=[];function xt(){ri.push(Je),Je=!1}function wt(){const e=ri.pop();Je=e===void 0?!0:e}function jo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=he;he=void 0;try{t()}finally{he=n}}}let Sn=0;class Ya{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!he||!Je||he===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==he)n=this.activeLink=new Ya(he,this),he.deps?(n.prevDep=he.depsTail,he.depsTail.nextDep=n,he.depsTail=n):he.deps=he.depsTail=n,ii(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=he.depsTail,n.nextDep=void 0,he.depsTail.nextDep=n,he.depsTail=n,he.deps===n&&(he.deps=s)}return n}trigger(t){this.version++,Sn++,this.notify(t)}notify(t){po();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fo()}}}function ii(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)ii(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ws=new WeakMap,Wt=Symbol(""),Us=Symbol(""),An=Symbol("");function Ee(e,t,n){if(Je&&he){let s=Ws.get(e);s||Ws.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new mo),o.map=s,o.key=n),o.track()}}function gt(e,t,n,s,o,r){const i=Ws.get(e);if(!i){Sn++;return}const a=c=>{c&&c.trigger()};if(po(),t==="clear")i.forEach(a);else{const c=q(e),u=c&&lo(n);if(c&&n==="length"){const l=Number(s);i.forEach((d,p)=>{(p==="length"||p===An||!kt(p)&&p>=l)&&a(d)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(An)),t){case"add":c?u&&a(i.get("length")):(a(i.get(Wt)),tn(e)&&a(i.get(Us)));break;case"delete":c||(a(i.get(Wt)),tn(e)&&a(i.get(Us)));break;case"set":tn(e)&&a(i.get(Wt));break}}fo()}function Jt(e){const t=ne(e);return t===e?t:(Ee(t,"iterate",An),Ke(e)?t:t.map(Ze))}function hs(e){return Ee(e=ne(e),"iterate",An),e}function Pt(e,t){return _t(e)?rn(Ut(e)?Ze(t):t):Ze(t)}const za={__proto__:null,[Symbol.iterator](){return Es(this,Symbol.iterator,e=>Pt(this,e))},concat(...e){return Jt(this).concat(...e.map(t=>q(t)?Jt(t):t))},entries(){return Es(this,"entries",e=>(e[1]=Pt(this,e[1]),e))},every(e,t){return pt(this,"every",e,t,void 0,arguments)},filter(e,t){return pt(this,"filter",e,t,n=>n.map(s=>Pt(this,s)),arguments)},find(e,t){return pt(this,"find",e,t,n=>Pt(this,n),arguments)},findIndex(e,t){return pt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return pt(this,"findLast",e,t,n=>Pt(this,n),arguments)},findLastIndex(e,t){return pt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return pt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ps(this,"includes",e)},indexOf(...e){return Ps(this,"indexOf",e)},join(e){return Jt(this).join(e)},lastIndexOf(...e){return Ps(this,"lastIndexOf",e)},map(e,t){return pt(this,"map",e,t,void 0,arguments)},pop(){return pn(this,"pop")},push(...e){return pn(this,"push",e)},reduce(e,...t){return Bo(this,"reduce",e,t)},reduceRight(e,...t){return Bo(this,"reduceRight",e,t)},shift(){return pn(this,"shift")},some(e,t){return pt(this,"some",e,t,void 0,arguments)},splice(...e){return pn(this,"splice",e)},toReversed(){return Jt(this).toReversed()},toSorted(e){return Jt(this).toSorted(e)},toSpliced(...e){return Jt(this).toSpliced(...e)},unshift(...e){return pn(this,"unshift",e)},values(){return Es(this,"values",e=>Pt(this,e))}};function Es(e,t,n){const s=hs(e),o=s[t]();return s!==e&&!Ke(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=n(r.value)),r}),o}const Ja=Array.prototype;function pt(e,t,n,s,o,r){const i=hs(e),a=i!==e&&!Ke(e),c=i[t];if(c!==Ja[t]){const d=c.apply(e,r);return a?Ze(d):d}let u=n;i!==e&&(a?u=function(d,p){return n.call(this,Pt(e,d),p,e)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,e)}));const l=c.call(i,u,s);return a&&o?o(l):l}function Bo(e,t,n,s){const o=hs(e);let r=n;return o!==e&&(Ke(e)?n.length>3&&(r=function(i,a,c){return n.call(this,i,a,c,e)}):r=function(i,a,c){return n.call(this,i,Pt(e,a),c,e)}),o[t](r,...s)}function Ps(e,t,n){const s=ne(e);Ee(s,"iterate",An);const o=s[t](...n);return(o===-1||o===!1)&&vo(n[0])?(n[0]=ne(n[0]),s[t](...n)):o}function pn(e,t,n=[]){xt(),po();const s=ne(e)[t].apply(e,n);return fo(),wt(),s}const Qa=io("__proto__,__v_isRef,__isVue"),ai=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(kt));function Za(e){kt(e)||(e=String(e));const t=ne(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class ci{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?cc:pi:r?di:ui).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=q(t);if(!o){let c;if(i&&(c=za[n]))return c;if(n==="hasOwnProperty")return Za}const a=Reflect.get(t,n,Ie(t)?t:s);if((kt(n)?ai.has(n):Qa(n))||(o||Ee(t,"get",n),r))return a;if(Ie(a)){const c=i&&lo(n)?a:a.value;return o&&me(c)?qs(c):c}return me(a)?o?qs(a):On(a):a}}class li extends ci{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];const i=q(t)&&lo(n);if(!this._isShallow){const u=_t(r);if(!Ke(s)&&!_t(s)&&(r=ne(r),s=ne(s)),!i&&Ie(r)&&!Ie(s))return u||(r.value=s),!0}const a=i?Number(n)<t.length:ae(t,n),c=Reflect.set(t,n,s,Ie(t)?t:o);return t===ne(o)&&(a?$t(s,r)&&gt(t,"set",n,s):gt(t,"add",n,s)),c}deleteProperty(t,n){const s=ae(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&gt(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!kt(n)||!ai.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",q(t)?"length":Wt),Reflect.ownKeys(t)}}class Xa extends ci{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ec=new li,tc=new Xa,nc=new li(!0);const Gs=e=>e,Fn=e=>Reflect.getPrototypeOf(e);function sc(e,t,n){return function(...s){const o=this.__v_raw,r=ne(o),i=tn(r),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...s),l=n?Gs:t?rn:Ze;return!t&&Ee(r,"iterate",c?Us:Wt),we(Object.create(u),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[l(d[0]),l(d[1])]:l(d),done:p}}})}}function Hn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function oc(e,t){const n={get(o){const r=this.__v_raw,i=ne(r),a=ne(o);e||($t(o,a)&&Ee(i,"get",o),Ee(i,"get",a));const{has:c}=Fn(i),u=t?Gs:e?rn:Ze;if(c.call(i,o))return u(r.get(o));if(c.call(i,a))return u(r.get(a));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&Ee(ne(o),"iterate",Wt),o.size},has(o){const r=this.__v_raw,i=ne(r),a=ne(o);return e||($t(o,a)&&Ee(i,"has",o),Ee(i,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const i=this,a=i.__v_raw,c=ne(a),u=t?Gs:e?rn:Ze;return!e&&Ee(c,"iterate",Wt),a.forEach((l,d)=>o.call(r,u(l),u(d),i))}};return we(n,e?{add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear")}:{add(o){!t&&!Ke(o)&&!_t(o)&&(o=ne(o));const r=ne(this);return Fn(r).has.call(r,o)||(r.add(o),gt(r,"add",o,o)),this},set(o,r){!t&&!Ke(r)&&!_t(r)&&(r=ne(r));const i=ne(this),{has:a,get:c}=Fn(i);let u=a.call(i,o);u||(o=ne(o),u=a.call(i,o));const l=c.call(i,o);return i.set(o,r),u?$t(r,l)&&gt(i,"set",o,r):gt(i,"add",o,r),this},delete(o){const r=ne(this),{has:i,get:a}=Fn(r);let c=i.call(r,o);c||(o=ne(o),c=i.call(r,o)),a&&a.call(r,o);const u=r.delete(o);return c&&gt(r,"delete",o,void 0),u},clear(){const o=ne(this),r=o.size!==0,i=o.clear();return r&&gt(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=sc(o,e,t)}),n}function go(e,t){const n=oc(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(ae(n,o)&&o in s?n:s,o,r)}const rc={get:go(!1,!1)},ic={get:go(!1,!0)},ac={get:go(!0,!1)};const ui=new WeakMap,di=new WeakMap,pi=new WeakMap,cc=new WeakMap;function lc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uc(e){return e.__v_skip||!Object.isExtensible(e)?0:lc(Ma(e))}function On(e){return _t(e)?e:bo(e,!1,ec,rc,ui)}function fi(e){return bo(e,!1,nc,ic,di)}function qs(e){return bo(e,!0,tc,ac,pi)}function bo(e,t,n,s,o){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=uc(e);if(r===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,r===2?s:n);return o.set(e,a),a}function Ut(e){return _t(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function _t(e){return!!(e&&e.__v_isReadonly)}function Ke(e){return!!(e&&e.__v_isShallow)}function vo(e){return e?!!e.__v_raw:!1}function ne(e){const t=e&&e.__v_raw;return t?ne(t):e}function dc(e){return!ae(e,"__v_skip")&&Object.isExtensible(e)&&zr(e,"__v_skip",!0),e}const Ze=e=>me(e)?On(e):e,rn=e=>me(e)?qs(e):e;function Ie(e){return e?e.__v_isRef===!0:!1}function ce(e){return hi(e,!1)}function pc(e){return hi(e,!0)}function hi(e,t){return Ie(e)?e:new fc(e,t)}class fc{constructor(t,n){this.dep=new mo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ne(t),this._value=n?t:Ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ke(t)||_t(t);t=s?t:ne(t),$t(t,n)&&(this._rawValue=t,this._value=s?t:Ze(t),this.dep.trigger())}}function De(e){return Ie(e)?e.value:e}const hc={get:(e,t,n)=>t==="__v_raw"?e:De(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Ie(o)&&!Ie(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function mi(e){return Ut(e)?e:new Proxy(e,hc)}class mc{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new mo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return ti(this,!0),!0}get value(){const t=this.dep.track();return oi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function gc(e,t,n=!1){let s,o;return Y(e)?s=e:(s=e.get,o=e.set),new mc(s,o,n)}const Vn={},Xn=new WeakMap;let Ft;function bc(e,t=!1,n=Ft){if(n){let s=Xn.get(n);s||Xn.set(n,s=[]),s.push(e)}}function vc(e,t,n=pe){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:a,call:c}=n,u=M=>o?M:Ke(M)||o===!1||o===0?bt(M,1):bt(M);let l,d,p,g,v=!1,y=!1;if(Ie(e)?(d=()=>e.value,v=Ke(e)):Ut(e)?(d=()=>u(e),v=!0):q(e)?(y=!0,v=e.some(M=>Ut(M)||Ke(M)),d=()=>e.map(M=>{if(Ie(M))return M.value;if(Ut(M))return u(M);if(Y(M))return c?c(M,2):M()})):Y(e)?t?d=c?()=>c(e,2):e:d=()=>{if(p){xt();try{p()}finally{wt()}}const M=Ft;Ft=l;try{return c?c(e,3,[g]):e(g)}finally{Ft=M}}:d=ut,t&&o){const M=d,z=o===!0?1/0:o;d=()=>bt(M(),z)}const T=qa(),E=()=>{l.stop(),T&&T.active&&co(T.effects,l)};if(r&&t){const M=t;t=(...z)=>{M(...z),E()}}let $=y?new Array(e.length).fill(Vn):Vn;const j=M=>{if(!(!(l.flags&1)||!l.dirty&&!M))if(t){const z=l.run();if(o||v||(y?z.some((J,B)=>$t(J,$[B])):$t(z,$))){p&&p();const J=Ft;Ft=l;try{const B=[z,$===Vn?void 0:y&&$[0]===Vn?[]:$,g];$=z,c?c(t,3,B):t(...B)}finally{Ft=J}}}else l.run()};return a&&a(j),l=new Xr(d),l.scheduler=i?()=>i(j,!1):j,g=M=>bc(M,!1,l),p=l.onStop=()=>{const M=Xn.get(l);if(M){if(c)c(M,4);else for(const z of M)z();Xn.delete(l)}},t?s?j(!0):$=l.run():i?i(j.bind(null,!0),!0):l.run(),E.pause=l.pause.bind(l),E.resume=l.resume.bind(l),E.stop=E,E}function bt(e,t=1/0,n){if(t<=0||!me(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ie(e))bt(e.value,t,n);else if(q(e))for(let s=0;s<e.length;s++)bt(e[s],t,n);else if(Gr(e)||tn(e))e.forEach(s=>{bt(s,t,n)});else if(Yr(e)){for(const s in e)bt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&bt(e[s],t,n)}return e}function Mn(e,t,n,s){try{return s?e(...s):e()}catch(o){ms(o,t,n)}}function Xe(e,t,n,s){if(Y(e)){const o=Mn(e,t,n,s);return o&&qr(o)&&o.catch(r=>{ms(r,t,n)}),o}if(q(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Xe(e[r],t,n,s));return o}}function ms(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||pe;if(t){let a=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](e,c,u)===!1)return}a=a.parent}if(r){xt(),Mn(r,null,10,[e,c,u]),wt();return}}yc(e,n,o,s,i)}function yc(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Le=[];let ct=-1;const nn=[];let Rt=null,Qt=0;const gi=Promise.resolve();let es=null;function gs(e){const t=es||gi;return e?t.then(this?e.bind(this):e):t}function xc(e){let t=ct+1,n=Le.length;for(;t<n;){const s=t+n>>>1,o=Le[s],r=Tn(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function yo(e){if(!(e.flags&1)){const t=Tn(e),n=Le[Le.length-1];!n||!(e.flags&2)&&t>=Tn(n)?Le.push(e):Le.splice(xc(t),0,e),e.flags|=1,bi()}}function bi(){es||(es=gi.then(yi))}function wc(e){q(e)?nn.push(...e):Rt&&e.id===-1?Rt.splice(Qt+1,0,e):e.flags&1||(nn.push(e),e.flags|=1),bi()}function Fo(e,t,n=ct+1){for(;n<Le.length;n++){const s=Le[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function vi(e){if(nn.length){const t=[...new Set(nn)].sort((n,s)=>Tn(n)-Tn(s));if(nn.length=0,Rt){Rt.push(...t);return}for(Rt=t,Qt=0;Qt<Rt.length;Qt++){const n=Rt[Qt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,Qt=0}}const Tn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yi(e){try{for(ct=0;ct<Le.length;ct++){const t=Le[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<Le.length;ct++){const t=Le[ct];t&&(t.flags&=-2)}ct=-1,Le.length=0,vi(),es=null,(Le.length||nn.length)&&yi()}}let Te=null,xi=null;function ts(e){const t=Te;return Te=e,xi=e&&e.type.__scopeId||null,t}function Ue(e,t=Te,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&os(-1);const r=ts(t);let i;try{i=e(...o)}finally{ts(r),s._d&&os(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function wi(e,t){if(Te===null)return e;const n=ws(Te),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,a,c=pe]=t[o];r&&(Y(r)&&(r={mounted:r,updated:r}),r.deep&&bt(i),s.push({dir:r,instance:n,value:i,oldValue:void 0,arg:a,modifiers:c}))}return e}function Nt(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let c=a.dir[s];c&&(xt(),Xe(c,n,8,[e.el,a,e,t]),wt())}}function Yn(e,t){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[e]=t}}function Qe(e,t,n=!1){const s=Ao();if(s||on){let o=on?on._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Y(t)?t.call(s&&s.proxy):t}}const _c=Symbol.for("v-scx"),kc=()=>Qe(_c);function vt(e,t,n){return _i(e,t,n)}function _i(e,t,n=pe){const{immediate:s,deep:o,flush:r,once:i}=n,a=we({},n),c=t&&s||!t&&r!=="post";let u;if(In){if(r==="sync"){const g=kc();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=ut,g.resume=ut,g.pause=ut,g}}const l=Re;a.call=(g,v,y)=>Xe(g,l,v,y);let d=!1;r==="post"?a.scheduler=g=>{Oe(g,l&&l.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(g,v)=>{v?g():yo(g)}),a.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,l&&(g.id=l.uid,g.i=l))};const p=vc(e,t,a);return In&&(u?u.push(p):c&&p()),p}function Cc(e,t,n){const s=this.proxy,o=be(e)?e.includes(".")?ki(s,e):()=>s[e]:e.bind(s,s);let r;Y(t)?r=t:(r=t.handler,n=t);const i=jn(this),a=_i(o,r.bind(s),n);return i(),a}function ki(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const Ci=Symbol("_vte"),Si=e=>e.__isTeleport,xn=e=>e&&(e.disabled||e.disabled===""),Ho=e=>e&&(e.defer||e.defer===""),Vo=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Wo=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ks=(e,t)=>{const n=e&&e.to;return be(n)?t?t(n):null:n},Ai={name:"Teleport",__isTeleport:!0,process(e,t,n,s,o,r,i,a,c,u){const{mc:l,pc:d,pbc:p,o:{insert:g,querySelector:v,createText:y,createComment:T}}=u,E=xn(t.props);let{shapeFlag:$,children:j,dynamicChildren:M}=t;if(e==null){const z=t.el=y(""),J=t.anchor=y("");g(z,n,s),g(J,n,s);const B=(F,Q)=>{$&16&&l(j,F,Q,o,r,i,a,c)},X=()=>{const F=t.target=Ks(t.props,v),Q=Ti(F,t,y,g);F&&(i!=="svg"&&Vo(F)?i="svg":i!=="mathml"&&Wo(F)&&(i="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(F),E||(B(F,Q),zn(t,!1)))};E&&(B(n,J),zn(t,!0)),Ho(t.props)?(t.el.__isMounted=!1,Oe(()=>{X(),delete t.el.__isMounted},r)):X()}else{if(Ho(t.props)&&e.el.__isMounted===!1){Oe(()=>{Ai.process(e,t,n,s,o,r,i,a,c,u)},r);return}t.el=e.el,t.targetStart=e.targetStart;const z=t.anchor=e.anchor,J=t.target=e.target,B=t.targetAnchor=e.targetAnchor,X=xn(e.props),F=X?n:J,Q=X?z:B;if(i==="svg"||Vo(J)?i="svg":(i==="mathml"||Wo(J))&&(i="mathml"),M?(p(e.dynamicChildren,M,F,o,r,i,a),Co(e,t,!0)):c||d(e,t,F,Q,o,r,i,a,!1),E)X?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Wn(t,n,z,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const le=t.target=Ks(t.props,v);le&&Wn(t,le,null,u,0)}else X&&Wn(t,J,B,u,1);zn(t,E)}},remove(e,t,n,{um:s,o:{remove:o}},r){const{shapeFlag:i,children:a,anchor:c,targetStart:u,targetAnchor:l,target:d,props:p}=e;if(d&&(o(u),o(l)),r&&o(c),i&16){const g=r||!xn(p);for(let v=0;v<a.length;v++){const y=a[v];s(y,t,n,g,!!y.dynamicChildren)}}},move:Wn,hydrate:Sc};function Wn(e,t,n,{o:{insert:s},m:o},r=2){r===0&&s(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:c,children:u,props:l}=e,d=r===2;if(d&&s(i,t,n),(!d||xn(l))&&c&16)for(let p=0;p<u.length;p++)o(u[p],t,n,2);d&&s(a,t,n)}function Sc(e,t,n,s,o,r,{o:{nextSibling:i,parentNode:a,querySelector:c,insert:u,createText:l}},d){function p(y,T,E,$){T.anchor=d(i(y),T,a(y),n,s,o,r),T.targetStart=E,T.targetAnchor=$}const g=t.target=Ks(t.props,c),v=xn(t.props);if(g){const y=g._lpa||g.firstChild;if(t.shapeFlag&16)if(v)p(e,t,y,y&&i(y));else{t.anchor=i(e);let T=y;for(;T;){if(T&&T.nodeType===8){if(T.data==="teleport start anchor")t.targetStart=T;else if(T.data==="teleport anchor"){t.targetAnchor=T,g._lpa=t.targetAnchor&&i(t.targetAnchor);break}}T=i(T)}t.targetAnchor||Ti(g,t,l,u),d(y&&i(y),t,g,n,s,o,r)}zn(t,v)}else v&&t.shapeFlag&16&&p(e,t,e,i(e));return t.anchor&&i(t.anchor)}const Ac=Ai;function zn(e,t){const n=e.ctx;if(n&&n.ut){let s,o;for(t?(s=e.el,o=e.anchor):(s=e.targetStart,o=e.targetAnchor);s&&s!==o;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function Ti(e,t,n,s){const o=t.targetStart=n(""),r=t.targetAnchor=n("");return o[Ci]=r,e&&(s(o,e),s(r,e)),r}const mt=Symbol("_leaveCb"),Un=Symbol("_enterCb");function Ei(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tt(()=>{e.isMounted=!0}),Ln(()=>{e.isUnmounting=!0}),e}const qe=[Function,Array],Pi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qe,onEnter:qe,onAfterEnter:qe,onEnterCancelled:qe,onBeforeLeave:qe,onLeave:qe,onAfterLeave:qe,onLeaveCancelled:qe,onBeforeAppear:qe,onAppear:qe,onAfterAppear:qe,onAppearCancelled:qe},Ri=e=>{const t=e.subTree;return t.component?Ri(t.component):t},Tc={name:"BaseTransition",props:Pi,setup(e,{slots:t}){const n=Ao(),s=Ei();return()=>{const o=t.default&&xo(t.default(),!0);if(!o||!o.length)return;const r=Di(o),i=ne(e),{mode:a}=i;if(s.isLeaving)return Rs(r);const c=Uo(r);if(!c)return Rs(r);let u=En(c,i,s,n,d=>u=d);c.type!==Pe&&Gt(c,u);let l=n.subTree&&Uo(n.subTree);if(l&&l.type!==Pe&&!Ht(l,c)&&Ri(n).type!==Pe){let d=En(l,i,s,n);if(Gt(l,d),a==="out-in"&&c.type!==Pe)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,l=void 0},Rs(r);a==="in-out"&&c.type!==Pe?d.delayLeave=(p,g,v)=>{const y=Ii(s,l);y[String(l.key)]=l,p[mt]=()=>{g(),p[mt]=void 0,delete u.delayedLeave,l=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return r}}};function Di(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Pe){t=n;break}}return t}const Ec=Tc;function Ii(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function En(e,t,n,s,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:v,onLeaveCancelled:y,onBeforeAppear:T,onAppear:E,onAfterAppear:$,onAppearCancelled:j}=t,M=String(e.key),z=Ii(n,e),J=(F,Q)=>{F&&Xe(F,s,9,Q)},B=(F,Q)=>{const le=Q[1];J(F,Q),q(F)?F.every(L=>L.length<=1)&&le():F.length<=1&&le()},X={mode:i,persisted:a,beforeEnter(F){let Q=c;if(!n.isMounted)if(r)Q=T||c;else return;F[mt]&&F[mt](!0);const le=z[M];le&&Ht(e,le)&&le.el[mt]&&le.el[mt](),J(Q,[F])},enter(F){let Q=u,le=l,L=d;if(!n.isMounted)if(r)Q=E||u,le=$||l,L=j||d;else return;let oe=!1;const Ce=F[Un]=He=>{oe||(oe=!0,He?J(L,[F]):J(le,[F]),X.delayedLeave&&X.delayedLeave(),F[Un]=void 0)};Q?B(Q,[F,Ce]):Ce()},leave(F,Q){const le=String(e.key);if(F[Un]&&F[Un](!0),n.isUnmounting)return Q();J(p,[F]);let L=!1;const oe=F[mt]=Ce=>{L||(L=!0,Q(),Ce?J(y,[F]):J(v,[F]),F[mt]=void 0,z[le]===e&&delete z[le])};z[le]=e,g?B(g,[F,oe]):oe()},clone(F){const Q=En(F,t,n,s,o);return o&&o(Q),Q}};return X}function Rs(e){if(bs(e))return e=Mt(e),e.children=null,e}function Uo(e){if(!bs(e))return Si(e.type)&&e.children?Di(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Y(n.default))return n.default()}}function Gt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Gt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xo(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===Z?(i.patchFlag&128&&o++,s=s.concat(xo(i.children,t,a))):(t||i.type!==Pe)&&s.push(a!=null?Mt(i,{key:a}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function $i(e,t){return Y(e)?we({name:e.name},t,{setup:e}):e}function Oi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ns=new WeakMap;function wn(e,t,n,s,o=!1){if(q(e)){e.forEach((v,y)=>wn(v,t&&(q(t)?t[y]:t),n,s,o));return}if(sn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&wn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?ws(s.component):s.el,i=o?null:r,{i:a,r:c}=e,u=t&&t.r,l=a.refs===pe?a.refs={}:a.refs,d=a.setupState,p=ne(d),g=d===pe?Ur:v=>ae(p,v);if(u!=null&&u!==c){if(Go(t),be(u))l[u]=null,g(u)&&(d[u]=null);else if(Ie(u)){u.value=null;const v=t;v.k&&(l[v.k]=null)}}if(Y(c))Mn(c,a,12,[i,l]);else{const v=be(c),y=Ie(c);if(v||y){const T=()=>{if(e.f){const E=v?g(c)?d[c]:l[c]:c.value;if(o)q(E)&&co(E,r);else if(q(E))E.includes(r)||E.push(r);else if(v)l[c]=[r],g(c)&&(d[c]=l[c]);else{const $=[r];c.value=$,e.k&&(l[e.k]=$)}}else v?(l[c]=i,g(c)&&(d[c]=i)):y&&(c.value=i,e.k&&(l[e.k]=i))};if(i){const E=()=>{T(),ns.delete(e)};E.id=-1,ns.set(e,E),Oe(E,n)}else Go(e),T()}}}function Go(e){const t=ns.get(e);t&&(t.flags|=8,ns.delete(e))}fs().requestIdleCallback;fs().cancelIdleCallback;const sn=e=>!!e.type.__asyncLoader,bs=e=>e.type.__isKeepAlive;function Pc(e,t){Mi(e,"a",t)}function Rc(e,t){Mi(e,"da",t)}function Mi(e,t,n=Re){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(vs(t,s,n),n){let o=n.parent;for(;o&&o.parent;)bs(o.parent.vnode)&&Dc(s,t,n,o),o=o.parent}}function Dc(e,t,n,s){const o=vs(t,e,s,!0);wo(()=>{co(s[t],o)},n)}function vs(e,t,n=Re,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{xt();const a=jn(n),c=Xe(t,n,e,i);return a(),wt(),c});return s?o.unshift(r):o.push(r),r}}const Ct=e=>(t,n=Re)=>{(!In||e==="sp")&&vs(e,(...s)=>t(...s),n)},Ic=Ct("bm"),tt=Ct("m"),$c=Ct("bu"),Li=Ct("u"),Ln=Ct("bum"),wo=Ct("um"),Oc=Ct("sp"),Mc=Ct("rtg"),Lc=Ct("rtc");function Nc(e,t=Re){vs("ec",e,t)}const Ni="components";function Nn(e,t){return Bi(Ni,e,!0,t)||e}const ji=Symbol.for("v-ndc");function jc(e){return be(e)?Bi(Ni,e,!1)||e:e||ji}function Bi(e,t,n=!0,s=!1){const o=Te||Re;if(o){const r=o.type;{const a=kl(r,!1);if(a&&(a===t||a===Ye(t)||a===ps(Ye(t))))return r}const i=qo(o[e]||r[e],t)||qo(o.appContext[e],t);return!i&&s?r:i}}function qo(e,t){return e&&(e[t]||e[Ye(t)]||e[ps(Ye(t))])}function ke(e,t,n,s){let o;const r=n,i=q(e);if(i||be(e)){const a=i&&Ut(e);let c=!1,u=!1;a&&(c=!Ke(e),u=_t(e),e=hs(e)),o=new Array(e.length);for(let l=0,d=e.length;l<d;l++)o[l]=t(c?u?rn(Ze(e[l])):Ze(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r)}else if(me(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,r));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const l=a[c];o[c]=t(e[l],l,c,r)}}else o=[];return o}function Bc(e,t,n={},s,o){if(Te.ce||Te.parent&&sn(Te.parent)&&Te.parent.ce){const u=Object.keys(n).length>0;return C(),Ot(Z,null,[G("slot",n,s)],u?-2:64)}let r=e[t];r&&r._c&&(r._d=!1),C();const i=r&&Fi(r(n)),a=n.key||i&&i.key,c=Ot(Z,{key:(a&&!kt(a)?a:`_${t}`)+(!i&&s?"_fb":"")},i||[],i&&e._===1?64:-2);return r&&r._c&&(r._d=!0),c}function Fi(e){return e.some(t=>Rn(t)?!(t.type===Pe||t.type===Z&&!Fi(t.children)):!0)?e:null}const Ys=e=>e?oa(e)?ws(e):Ys(e.parent):null,_n=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ys(e.parent),$root:e=>Ys(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Vi(e),$forceUpdate:e=>e.f||(e.f=()=>{yo(e.update)}),$nextTick:e=>e.n||(e.n=gs.bind(e.proxy)),$watch:e=>Cc.bind(e)}),Ds=(e,t)=>e!==pe&&!e.__isScriptSetup&&ae(e,t),Fc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:c}=e;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(Ds(s,t))return i[t]=1,s[t];if(o!==pe&&ae(o,t))return i[t]=2,o[t];if(ae(r,t))return i[t]=3,r[t];if(n!==pe&&ae(n,t))return i[t]=4,n[t];zs&&(i[t]=0)}}const u=_n[t];let l,d;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((l=a.__cssModules)&&(l=l[t]))return l;if(n!==pe&&ae(n,t))return i[t]=4,n[t];if(d=c.config.globalProperties,ae(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return Ds(o,t)?(o[t]=n,!0):s!==pe&&ae(s,t)?(s[t]=n,!0):ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:r,type:i}},a){let c;return!!(n[a]||e!==pe&&a[0]!=="$"&&ae(e,a)||Ds(t,a)||ae(r,a)||ae(s,a)||ae(_n,a)||ae(o.config.globalProperties,a)||(c=i.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ko(e){return q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let zs=!0;function Hc(e){const t=Vi(e),n=e.proxy,s=e.ctx;zs=!1,t.beforeCreate&&Yo(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:p,beforeUpdate:g,updated:v,activated:y,deactivated:T,beforeDestroy:E,beforeUnmount:$,destroyed:j,unmounted:M,render:z,renderTracked:J,renderTriggered:B,errorCaptured:X,serverPrefetch:F,expose:Q,inheritAttrs:le,components:L,directives:oe,filters:Ce}=t;if(u&&Vc(u,s,null),i)for(const de in i){const re=i[de];Y(re)&&(s[de]=re.bind(n))}if(o){const de=o.call(n,n);me(de)&&(e.data=On(de))}if(zs=!0,r)for(const de in r){const re=r[de],dt=Y(re)?re.bind(n,n):Y(re.get)?re.get.bind(n,n):ut,St=!Y(re)&&Y(re.set)?re.set.bind(n):ut,nt=se({get:dt,set:St});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ne=>nt.value=Ne})}if(a)for(const de in a)Hi(a[de],s,n,de);if(c){const de=Y(c)?c.call(n):c;Reflect.ownKeys(de).forEach(re=>{Yn(re,de[re])})}l&&Yo(l,e,"c");function ye(de,re){q(re)?re.forEach(dt=>de(dt.bind(n))):re&&de(re.bind(n))}if(ye(Ic,d),ye(tt,p),ye($c,g),ye(Li,v),ye(Pc,y),ye(Rc,T),ye(Nc,X),ye(Lc,J),ye(Mc,B),ye(Ln,$),ye(wo,M),ye(Oc,F),q(Q))if(Q.length){const de=e.exposed||(e.exposed={});Q.forEach(re=>{Object.defineProperty(de,re,{get:()=>n[re],set:dt=>n[re]=dt,enumerable:!0})})}else e.exposed||(e.exposed={});z&&e.render===ut&&(e.render=z),le!=null&&(e.inheritAttrs=le),L&&(e.components=L),oe&&(e.directives=oe),F&&Oi(e)}function Vc(e,t,n=ut){q(e)&&(e=Js(e));for(const s in e){const o=e[s];let r;me(o)?"default"in o?r=Qe(o.from||s,o.default,!0):r=Qe(o.from||s):r=Qe(o),Ie(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Yo(e,t,n){Xe(q(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Hi(e,t,n,s){let o=s.includes(".")?ki(n,s):()=>n[s];if(be(e)){const r=t[e];Y(r)&&vt(o,r)}else if(Y(e))vt(o,e.bind(n));else if(me(e))if(q(e))e.forEach(r=>Hi(r,t,n,s));else{const r=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(r)&&vt(o,r,e)}}function Vi(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let c;return a?c=a:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(u=>ss(c,u,i,!0)),ss(c,t,i)),me(t)&&r.set(t,c),c}function ss(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&ss(e,r,n,!0),o&&o.forEach(i=>ss(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=Wc[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Wc={data:zo,props:Jo,emits:Jo,methods:gn,computed:gn,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:gn,directives:gn,watch:Gc,provide:zo,inject:Uc};function zo(e,t){return t?e?function(){return we(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function Uc(e,t){return gn(Js(e),Js(t))}function Js(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function $e(e,t){return e?[...new Set([].concat(e,t))]:t}function gn(e,t){return e?we(Object.create(null),e,t):t}function Jo(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:we(Object.create(null),Ko(e),Ko(t??{})):t}function Gc(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const s in t)n[s]=$e(e[s],t[s]);return n}function Wi(){return{app:null,config:{isNativeTag:Ur,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qc=0;function Kc(e,t){return function(s,o=null){Y(s)||(s=we({},s)),o!=null&&!me(o)&&(o=null);const r=Wi(),i=new WeakSet,a=[];let c=!1;const u=r.app={_uid:qc++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Sl,get config(){return r.config},set config(l){},use(l,...d){return i.has(l)||(l&&Y(l.install)?(i.add(l),l.install(u,...d)):Y(l)&&(i.add(l),l(u,...d))),u},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),u},component(l,d){return d?(r.components[l]=d,u):r.components[l]},directive(l,d){return d?(r.directives[l]=d,u):r.directives[l]},mount(l,d,p){if(!c){const g=u._ceVNode||G(s,o);return g.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(g,l,p),c=!0,u._container=l,l.__vue_app__=u,ws(g.component)}},onUnmount(l){a.push(l)},unmount(){c&&(Xe(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(l,d){return r.provides[l]=d,u},runWithContext(l){const d=on;on=u;try{return l()}finally{on=d}}};return u}}let on=null;const Yc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ye(t)}Modifiers`]||e[`${Kt(t)}Modifiers`];function zc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||pe;let o=n;const r=t.startsWith("update:"),i=r&&Yc(s,t.slice(7));i&&(i.trim&&(o=n.map(l=>be(l)?l.trim():l)),i.number&&(o=n.map(uo)));let a,c=s[a=Ss(t)]||s[a=Ss(Ye(t))];!c&&r&&(c=s[a=Ss(Kt(t))]),c&&Xe(c,e,6,o);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Xe(u,e,6,o)}}const Jc=new WeakMap;function Ui(e,t,n=!1){const s=n?Jc:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!Y(e)){const c=u=>{const l=Ui(u,t,!0);l&&(a=!0,we(i,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(me(e)&&s.set(e,null),null):(q(r)?r.forEach(c=>i[c]=null):we(i,r),me(e)&&s.set(e,i),i)}function ys(e,t){return!e||!ls(t)?!1:(t=t.slice(2).replace(/Once$/,""),ae(e,t[0].toLowerCase()+t.slice(1))||ae(e,Kt(t))||ae(e,t))}function Qo(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:a,emit:c,render:u,renderCache:l,props:d,data:p,setupState:g,ctx:v,inheritAttrs:y}=e,T=ts(e);let E,$;try{if(n.shapeFlag&4){const M=o||s,z=M;E=lt(u.call(z,M,l,d,g,p,v)),$=a}else{const M=t;E=lt(M.length>1?M(d,{attrs:a,slots:i,emit:c}):M(d,null)),$=t.props?a:Qc(a)}}catch(M){kn.length=0,ms(M,e,1),E=G(Pe)}let j=E;if($&&y!==!1){const M=Object.keys($),{shapeFlag:z}=j;M.length&&z&7&&(r&&M.some(ao)&&($=Zc($,r)),j=Mt(j,$,!1,!0))}return n.dirs&&(j=Mt(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Gt(j,n.transition),E=j,ts(T),E}const Qc=e=>{let t;for(const n in e)(n==="class"||n==="style"||ls(n))&&((t||(t={}))[n]=e[n]);return t},Zc=(e,t)=>{const n={};for(const s in e)(!ao(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Xc(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:c}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Zo(s,i,u):!!i;if(c&8){const l=t.dynamicProps;for(let d=0;d<l.length;d++){const p=l[d];if(i[p]!==s[p]&&!ys(u,p))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Zo(s,i,u):!0:!!i;return!1}function Zo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!ys(n,r))return!0}return!1}function el({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Gi={},qi=()=>Object.create(Gi),Ki=e=>Object.getPrototypeOf(e)===Gi;function tl(e,t,n,s=!1){const o={},r=qi();e.propsDefaults=Object.create(null),Yi(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:fi(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function nl(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=ne(o),[c]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let d=0;d<l.length;d++){let p=l[d];if(ys(e.emitsOptions,p))continue;const g=t[p];if(c)if(ae(r,p))g!==r[p]&&(r[p]=g,u=!0);else{const v=Ye(p);o[v]=Qs(c,a,v,g,e,!1)}else g!==r[p]&&(r[p]=g,u=!0)}}}else{Yi(e,t,o,r)&&(u=!0);let l;for(const d in a)(!t||!ae(t,d)&&((l=Kt(d))===d||!ae(t,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(o[d]=Qs(c,a,d,void 0,e,!0)):delete o[d]);if(r!==a)for(const d in r)(!t||!ae(t,d))&&(delete r[d],u=!0)}u&&gt(e.attrs,"set","")}function Yi(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(bn(c))continue;const u=t[c];let l;o&&ae(o,l=Ye(c))?!r||!r.includes(l)?n[l]=u:(a||(a={}))[l]=u:ys(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(r){const c=ne(n),u=a||pe;for(let l=0;l<r.length;l++){const d=r[l];n[d]=Qs(o,c,d,u[d],e,!ae(u,d))}}return i}function Qs(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=ae(i,"default");if(a&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&Y(c)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const l=jn(o);s=u[n]=c.call(null,t),l()}}else s=c;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===Kt(n))&&(s=!0))}return s}const sl=new WeakMap;function zi(e,t,n=!1){const s=n?sl:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let c=!1;if(!Y(e)){const l=d=>{c=!0;const[p,g]=zi(d,t,!0);we(i,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!r&&!c)return me(e)&&s.set(e,en),en;if(q(r))for(let l=0;l<r.length;l++){const d=Ye(r[l]);Xo(d)&&(i[d]=pe)}else if(r)for(const l in r){const d=Ye(l);if(Xo(d)){const p=r[l],g=i[d]=q(p)||Y(p)?{type:p}:we({},p),v=g.type;let y=!1,T=!0;if(q(v))for(let E=0;E<v.length;++E){const $=v[E],j=Y($)&&$.name;if(j==="Boolean"){y=!0;break}else j==="String"&&(T=!1)}else y=Y(v)&&v.name==="Boolean";g[0]=y,g[1]=T,(y||ae(g,"default"))&&a.push(d)}}const u=[i,a];return me(e)&&s.set(e,u),u}function Xo(e){return e[0]!=="$"&&!bn(e)}const _o=e=>e==="_"||e==="_ctx"||e==="$stable",ko=e=>q(e)?e.map(lt):[lt(e)],ol=(e,t,n)=>{if(t._n)return t;const s=Ue((...o)=>ko(t(...o)),n);return s._c=!1,s},Ji=(e,t,n)=>{const s=e._ctx;for(const o in e){if(_o(o))continue;const r=e[o];if(Y(r))t[o]=ol(o,r,s);else if(r!=null){const i=ko(r);t[o]=()=>i}}},Qi=(e,t)=>{const n=ko(t);e.slots.default=()=>n},Zi=(e,t,n)=>{for(const s in t)(n||!_o(s))&&(e[s]=t[s])},rl=(e,t,n)=>{const s=e.slots=qi();if(e.vnode.shapeFlag&32){const o=t._;o?(Zi(s,t,n),n&&zr(s,"_",o,!0)):Ji(t,s)}else t&&Qi(e,t)},il=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=pe;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Zi(o,t,n):(r=!t.$stable,Ji(t,o)),i=t}else t&&(Qi(e,t),i={default:1});if(r)for(const a in o)!_o(a)&&i[a]==null&&delete o[a]},Oe=dl;function al(e){return cl(e)}function cl(e,t){const n=fs();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:p,setScopeId:g=ut,insertStaticContent:v}=e,y=(f,m,b,x=null,k=null,w=null,D=void 0,R=null,P=!!m.dynamicChildren)=>{if(f===m)return;f&&!Ht(f,m)&&(x=_(f),Ne(f,k,w,!0),f=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:S,ref:W,shapeFlag:O}=m;switch(S){case xs:T(f,m,b,x);break;case Pe:E(f,m,b,x);break;case Jn:f==null&&$(m,b,x,D);break;case Z:L(f,m,b,x,k,w,D,R,P);break;default:O&1?z(f,m,b,x,k,w,D,R,P):O&6?oe(f,m,b,x,k,w,D,R,P):(O&64||O&128)&&S.process(f,m,b,x,k,w,D,R,P,H)}W!=null&&k?wn(W,f&&f.ref,w,m||f,!m):W==null&&f&&f.ref!=null&&wn(f.ref,null,w,f,!0)},T=(f,m,b,x)=>{if(f==null)s(m.el=a(m.children),b,x);else{const k=m.el=f.el;m.children!==f.children&&u(k,m.children)}},E=(f,m,b,x)=>{f==null?s(m.el=c(m.children||""),b,x):m.el=f.el},$=(f,m,b,x)=>{[f.el,f.anchor]=v(f.children,m,b,x,f.el,f.anchor)},j=({el:f,anchor:m},b,x)=>{let k;for(;f&&f!==m;)k=p(f),s(f,b,x),f=k;s(m,b,x)},M=({el:f,anchor:m})=>{let b;for(;f&&f!==m;)b=p(f),o(f),f=b;o(m)},z=(f,m,b,x,k,w,D,R,P)=>{if(m.type==="svg"?D="svg":m.type==="math"&&(D="mathml"),f==null)J(m,b,x,k,w,D,R,P);else{const S=f.el&&f.el._isVueCE?f.el:null;try{S&&S._beginPatch(),F(f,m,k,w,D,R,P)}finally{S&&S._endPatch()}}},J=(f,m,b,x,k,w,D,R)=>{let P,S;const{props:W,shapeFlag:O,transition:V,dirs:K}=f;if(P=f.el=i(f.type,w,W&&W.is,W),O&8?l(P,f.children):O&16&&X(f.children,P,null,x,k,Is(f,w),D,R),K&&Nt(f,null,x,"created"),B(P,f,f.scopeId,D,x),W){for(const fe in W)fe!=="value"&&!bn(fe)&&r(P,fe,null,W[fe],w,x);"value"in W&&r(P,"value",null,W.value,w),(S=W.onVnodeBeforeMount)&&it(S,x,f)}K&&Nt(f,null,x,"beforeMount");const te=ll(k,V);te&&V.beforeEnter(P),s(P,m,b),((S=W&&W.onVnodeMounted)||te||K)&&Oe(()=>{S&&it(S,x,f),te&&V.enter(P),K&&Nt(f,null,x,"mounted")},k)},B=(f,m,b,x,k)=>{if(b&&g(f,b),x)for(let w=0;w<x.length;w++)g(f,x[w]);if(k){let w=k.subTree;if(m===w||ta(w.type)&&(w.ssContent===m||w.ssFallback===m)){const D=k.vnode;B(f,D,D.scopeId,D.slotScopeIds,k.parent)}}},X=(f,m,b,x,k,w,D,R,P=0)=>{for(let S=P;S<f.length;S++){const W=f[S]=R?Dt(f[S]):lt(f[S]);y(null,W,m,b,x,k,w,D,R)}},F=(f,m,b,x,k,w,D)=>{const R=m.el=f.el;let{patchFlag:P,dynamicChildren:S,dirs:W}=m;P|=f.patchFlag&16;const O=f.props||pe,V=m.props||pe;let K;if(b&&jt(b,!1),(K=V.onVnodeBeforeUpdate)&&it(K,b,m,f),W&&Nt(m,f,b,"beforeUpdate"),b&&jt(b,!0),(O.innerHTML&&V.innerHTML==null||O.textContent&&V.textContent==null)&&l(R,""),S?Q(f.dynamicChildren,S,R,b,x,Is(m,k),w):D||re(f,m,R,null,b,x,Is(m,k),w,!1),P>0){if(P&16)le(R,O,V,b,k);else if(P&2&&O.class!==V.class&&r(R,"class",null,V.class,k),P&4&&r(R,"style",O.style,V.style,k),P&8){const te=m.dynamicProps;for(let fe=0;fe<te.length;fe++){const ue=te[fe],je=O[ue],Be=V[ue];(Be!==je||ue==="value")&&r(R,ue,je,Be,k,b)}}P&1&&f.children!==m.children&&l(R,m.children)}else!D&&S==null&&le(R,O,V,b,k);((K=V.onVnodeUpdated)||W)&&Oe(()=>{K&&it(K,b,m,f),W&&Nt(m,f,b,"updated")},x)},Q=(f,m,b,x,k,w,D)=>{for(let R=0;R<m.length;R++){const P=f[R],S=m[R],W=P.el&&(P.type===Z||!Ht(P,S)||P.shapeFlag&198)?d(P.el):b;y(P,S,W,null,x,k,w,D,!0)}},le=(f,m,b,x,k)=>{if(m!==b){if(m!==pe)for(const w in m)!bn(w)&&!(w in b)&&r(f,w,m[w],null,k,x);for(const w in b){if(bn(w))continue;const D=b[w],R=m[w];D!==R&&w!=="value"&&r(f,w,R,D,k,x)}"value"in b&&r(f,"value",m.value,b.value,k)}},L=(f,m,b,x,k,w,D,R,P)=>{const S=m.el=f?f.el:a(""),W=m.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:V,slotScopeIds:K}=m;K&&(R=R?R.concat(K):K),f==null?(s(S,b,x),s(W,b,x),X(m.children||[],b,W,k,w,D,R,P)):O>0&&O&64&&V&&f.dynamicChildren&&f.dynamicChildren.length===V.length?(Q(f.dynamicChildren,V,b,k,w,D,R),(m.key!=null||k&&m===k.subTree)&&Co(f,m,!0)):re(f,m,b,W,k,w,D,R,P)},oe=(f,m,b,x,k,w,D,R,P)=>{m.slotScopeIds=R,f==null?m.shapeFlag&512?k.ctx.activate(m,b,x,D,P):Ce(m,b,x,k,w,D,P):He(f,m,P)},Ce=(f,m,b,x,k,w,D)=>{const R=f.component=vl(f,x,k);if(bs(f)&&(R.ctx.renderer=H),yl(R,!1,D),R.asyncDep){if(k&&k.registerDep(R,ye,D),!f.el){const P=R.subTree=G(Pe);E(null,P,m,b),f.placeholder=P.el}}else ye(R,f,m,b,k,w,D)},He=(f,m,b)=>{const x=m.component=f.component;if(Xc(f,m,b))if(x.asyncDep&&!x.asyncResolved){de(x,m,b);return}else x.next=m,x.update();else m.el=f.el,x.vnode=m},ye=(f,m,b,x,k,w,D)=>{const R=()=>{if(f.isMounted){let{next:O,bu:V,u:K,parent:te,vnode:fe}=f;{const ot=Xi(f);if(ot){O&&(O.el=fe.el,de(f,O,D)),ot.asyncDep.then(()=>{f.isUnmounted||R()});return}}let ue=O,je;jt(f,!1),O?(O.el=fe.el,de(f,O,D)):O=fe,V&&Kn(V),(je=O.props&&O.props.onVnodeBeforeUpdate)&&it(je,te,O,fe),jt(f,!0);const Be=Qo(f),st=f.subTree;f.subTree=Be,y(st,Be,d(st.el),_(st),f,k,w),O.el=Be.el,ue===null&&el(f,Be.el),K&&Oe(K,k),(je=O.props&&O.props.onVnodeUpdated)&&Oe(()=>it(je,te,O,fe),k)}else{let O;const{el:V,props:K}=m,{bm:te,m:fe,parent:ue,root:je,type:Be}=f,st=sn(m);jt(f,!1),te&&Kn(te),!st&&(O=K&&K.onVnodeBeforeMount)&&it(O,ue,m),jt(f,!0);{je.ce&&je.ce._def.shadowRoot!==!1&&je.ce._injectChildStyle(Be);const ot=f.subTree=Qo(f);y(null,ot,b,x,f,k,w),m.el=ot.el}if(fe&&Oe(fe,k),!st&&(O=K&&K.onVnodeMounted)){const ot=m;Oe(()=>it(O,ue,ot),k)}(m.shapeFlag&256||ue&&sn(ue.vnode)&&ue.vnode.shapeFlag&256)&&f.a&&Oe(f.a,k),f.isMounted=!0,m=b=x=null}};f.scope.on();const P=f.effect=new Xr(R);f.scope.off();const S=f.update=P.run.bind(P),W=f.job=P.runIfDirty.bind(P);W.i=f,W.id=f.uid,P.scheduler=()=>yo(W),jt(f,!0),S()},de=(f,m,b)=>{m.component=f;const x=f.vnode.props;f.vnode=m,f.next=null,nl(f,m.props,x,b),il(f,m.children,b),xt(),Fo(f),wt()},re=(f,m,b,x,k,w,D,R,P=!1)=>{const S=f&&f.children,W=f?f.shapeFlag:0,O=m.children,{patchFlag:V,shapeFlag:K}=m;if(V>0){if(V&128){St(S,O,b,x,k,w,D,R,P);return}else if(V&256){dt(S,O,b,x,k,w,D,R,P);return}}K&8?(W&16&&Ge(S,k,w),O!==S&&l(b,O)):W&16?K&16?St(S,O,b,x,k,w,D,R,P):Ge(S,k,w,!0):(W&8&&l(b,""),K&16&&X(O,b,x,k,w,D,R,P))},dt=(f,m,b,x,k,w,D,R,P)=>{f=f||en,m=m||en;const S=f.length,W=m.length,O=Math.min(S,W);let V;for(V=0;V<O;V++){const K=m[V]=P?Dt(m[V]):lt(m[V]);y(f[V],K,b,null,k,w,D,R,P)}S>W?Ge(f,k,w,!0,!1,O):X(m,b,x,k,w,D,R,P,O)},St=(f,m,b,x,k,w,D,R,P)=>{let S=0;const W=m.length;let O=f.length-1,V=W-1;for(;S<=O&&S<=V;){const K=f[S],te=m[S]=P?Dt(m[S]):lt(m[S]);if(Ht(K,te))y(K,te,b,null,k,w,D,R,P);else break;S++}for(;S<=O&&S<=V;){const K=f[O],te=m[V]=P?Dt(m[V]):lt(m[V]);if(Ht(K,te))y(K,te,b,null,k,w,D,R,P);else break;O--,V--}if(S>O){if(S<=V){const K=V+1,te=K<W?m[K].el:x;for(;S<=V;)y(null,m[S]=P?Dt(m[S]):lt(m[S]),b,te,k,w,D,R,P),S++}}else if(S>V)for(;S<=O;)Ne(f[S],k,w,!0),S++;else{const K=S,te=S,fe=new Map;for(S=te;S<=V;S++){const Ve=m[S]=P?Dt(m[S]):lt(m[S]);Ve.key!=null&&fe.set(Ve.key,S)}let ue,je=0;const Be=V-te+1;let st=!1,ot=0;const dn=new Array(Be);for(S=0;S<Be;S++)dn[S]=0;for(S=K;S<=O;S++){const Ve=f[S];if(je>=Be){Ne(Ve,k,w,!0);continue}let rt;if(Ve.key!=null)rt=fe.get(Ve.key);else for(ue=te;ue<=V;ue++)if(dn[ue-te]===0&&Ht(Ve,m[ue])){rt=ue;break}rt===void 0?Ne(Ve,k,w,!0):(dn[rt-te]=S+1,rt>=ot?ot=rt:st=!0,y(Ve,m[rt],b,null,k,w,D,R,P),je++)}const Oo=st?ul(dn):en;for(ue=Oo.length-1,S=Be-1;S>=0;S--){const Ve=te+S,rt=m[Ve],Mo=m[Ve+1],Lo=Ve+1<W?Mo.el||ea(Mo):x;dn[S]===0?y(null,rt,b,Lo,k,w,D,R,P):st&&(ue<0||S!==Oo[ue]?nt(rt,b,Lo,2):ue--)}}},nt=(f,m,b,x,k=null)=>{const{el:w,type:D,transition:R,children:P,shapeFlag:S}=f;if(S&6){nt(f.component.subTree,m,b,x);return}if(S&128){f.suspense.move(m,b,x);return}if(S&64){D.move(f,m,b,H);return}if(D===Z){s(w,m,b);for(let O=0;O<P.length;O++)nt(P[O],m,b,x);s(f.anchor,m,b);return}if(D===Jn){j(f,m,b);return}if(x!==2&&S&1&&R)if(x===0)R.beforeEnter(w),s(w,m,b),Oe(()=>R.enter(w),k);else{const{leave:O,delayLeave:V,afterLeave:K}=R,te=()=>{f.ctx.isUnmounted?o(w):s(w,m,b)},fe=()=>{w._isLeaving&&w[mt](!0),O(w,()=>{te(),K&&K()})};V?V(w,te,fe):fe()}else s(w,m,b)},Ne=(f,m,b,x=!1,k=!1)=>{const{type:w,props:D,ref:R,children:P,dynamicChildren:S,shapeFlag:W,patchFlag:O,dirs:V,cacheIndex:K}=f;if(O===-2&&(k=!1),R!=null&&(xt(),wn(R,null,b,f,!0),wt()),K!=null&&(m.renderCache[K]=void 0),W&256){m.ctx.deactivate(f);return}const te=W&1&&V,fe=!sn(f);let ue;if(fe&&(ue=D&&D.onVnodeBeforeUnmount)&&it(ue,m,f),W&6)Lt(f.component,b,x);else{if(W&128){f.suspense.unmount(b,x);return}te&&Nt(f,null,m,"beforeUnmount"),W&64?f.type.remove(f,m,b,H,x):S&&!S.hasOnce&&(w!==Z||O>0&&O&64)?Ge(S,m,b,!1,!0):(w===Z&&O&384||!k&&W&16)&&Ge(P,m,b),x&&Yt(f)}(fe&&(ue=D&&D.onVnodeUnmounted)||te)&&Oe(()=>{ue&&it(ue,m,f),te&&Nt(f,null,m,"unmounted")},b)},Yt=f=>{const{type:m,el:b,anchor:x,transition:k}=f;if(m===Z){zt(b,x);return}if(m===Jn){M(f);return}const w=()=>{o(b),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(f.shapeFlag&1&&k&&!k.persisted){const{leave:D,delayLeave:R}=k,P=()=>D(b,w);R?R(f.el,w,P):P()}else w()},zt=(f,m)=>{let b;for(;f!==m;)b=p(f),o(f),f=b;o(m)},Lt=(f,m,b)=>{const{bum:x,scope:k,job:w,subTree:D,um:R,m:P,a:S}=f;er(P),er(S),x&&Kn(x),k.stop(),w&&(w.flags|=8,Ne(D,f,m,b)),R&&Oe(R,m),Oe(()=>{f.isUnmounted=!0},m)},Ge=(f,m,b,x=!1,k=!1,w=0)=>{for(let D=w;D<f.length;D++)Ne(f[D],m,b,x,k)},_=f=>{if(f.shapeFlag&6)return _(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const m=p(f.anchor||f.el),b=m&&m[Ci];return b?p(b):m};let N=!1;const I=(f,m,b)=>{let x;f==null?m._vnode&&(Ne(m._vnode,null,null,!0),x=m._vnode.component):y(m._vnode||null,f,m,null,null,null,b),m._vnode=f,N||(N=!0,Fo(x),vi(),N=!1)},H={p:y,um:Ne,m:nt,r:Yt,mt:Ce,mc:X,pc:re,pbc:Q,n:_,o:e};return{render:I,hydrate:void 0,createApp:Kc(I)}}function Is({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ll(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Co(e,t,n=!1){const s=e.children,o=t.children;if(q(s)&&q(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=Dt(o[r]),a.el=i.el),!n&&a.patchFlag!==-2&&Co(i,a)),a.type===xs&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=r+(e.type===Z?1:0)),a.type===Pe&&!a.el&&(a.el=i.el)}}function ul(e){const t=e.slice(),n=[0];let s,o,r,i,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<u?r=a+1:i=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Xi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Xi(t)}function er(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ea(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ea(t.subTree):null}const ta=e=>e.__isSuspense;function dl(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):wc(e)}const Z=Symbol.for("v-fgt"),xs=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),Jn=Symbol.for("v-stc"),kn=[];let We=null;function C(e=!1){kn.push(We=e?null:[])}function pl(){kn.pop(),We=kn[kn.length-1]||null}let Pn=1;function os(e,t=!1){Pn+=e,e<0&&We&&t&&(We.hasOnce=!0)}function na(e){return e.dynamicChildren=Pn>0?We||en:null,pl(),Pn>0&&We&&We.push(e),e}function A(e,t,n,s,o,r){return na(h(e,t,n,s,o,r,!0))}function Ot(e,t,n,s,o){return na(G(e,t,n,s,o,!0))}function Rn(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const sa=({key:e})=>e??null,Qn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?be(e)||Ie(e)||Y(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function h(e,t=null,n=null,s=0,o=null,r=e===Z?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sa(t),ref:t&&Qn(t),scopeId:xi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Te};return a?(So(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),Pn>0&&!i&&We&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&We.push(c),c}const G=fl;function fl(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===ji)&&(e=Pe),Rn(e)){const a=Mt(e,t,!0);return n&&So(a,n),Pn>0&&!r&&We&&(a.shapeFlag&6?We[We.indexOf(e)]=a:We.push(a)),a.patchFlag=-2,a}if(Cl(e)&&(e=e.__vccOpts),t){t=hl(t);let{class:a,style:c}=t;a&&!be(a)&&(t.class=yt(a)),me(c)&&(vo(c)&&!q(c)&&(c=we({},c)),t.style=xe(c))}const i=be(e)?1:ta(e)?128:Si(e)?64:me(e)?4:Y(e)?2:0;return h(e,t,n,s,o,i,r,!0)}function hl(e){return e?vo(e)||Ki(e)?we({},e):e:null}function Mt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:a,transition:c}=e,u=t?ml(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&sa(u),ref:t&&t.ref?n&&r?q(r)?r.concat(Qn(t)):[r,Qn(t)]:Qn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Z?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Gt(l,c.clone(l)),l}function Ae(e=" ",t=0){return G(xs,null,e,t)}function Dn(e,t){const n=G(Jn,null,e);return n.staticCount=t,n}function ge(e="",t=!1){return t?(C(),Ot(Pe,null,e)):G(Pe,null,e)}function lt(e){return e==null||typeof e=="boolean"?G(Pe):q(e)?G(Z,null,e.slice()):Rn(e)?Dt(e):G(xs,null,String(e))}function Dt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function So(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),So(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Ki(t)?t._ctx=Te:o===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),s&64?(n=16,t=[Ae(t)]):n=8);e.children=t,e.shapeFlag|=n}function ml(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=yt([t.class,s.class]));else if(o==="style")t.style=xe([t.style,s.style]);else if(ls(o)){const r=t[o],i=s[o];i&&r!==i&&!(q(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function it(e,t,n,s=null){Xe(e,t,7,[n,s])}const gl=Wi();let bl=0;function vl(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||gl,r={uid:bl++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ga(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zi(s,o),emitsOptions:Ui(s,o),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=zc.bind(null,r),e.ce&&e.ce(r),r}let Re=null;const Ao=()=>Re||Te;let rs,Zs;{const e=fs(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};rs=t("__VUE_INSTANCE_SETTERS__",n=>Re=n),Zs=t("__VUE_SSR_SETTERS__",n=>In=n)}const jn=e=>{const t=Re;return rs(e),e.scope.on(),()=>{e.scope.off(),rs(t)}},tr=()=>{Re&&Re.scope.off(),rs(null)};function oa(e){return e.vnode.shapeFlag&4}let In=!1;function yl(e,t=!1,n=!1){t&&Zs(t);const{props:s,children:o}=e.vnode,r=oa(e);tl(e,s,r,t),rl(e,o,n||t);const i=r?xl(e,t):void 0;return t&&Zs(!1),i}function xl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Fc);const{setup:s}=n;if(s){xt();const o=e.setupContext=s.length>1?_l(e):null,r=jn(e),i=Mn(s,e,0,[e.props,o]),a=qr(i);if(wt(),r(),(a||e.sp)&&!sn(e)&&Oi(e),a){if(i.then(tr,tr),t)return i.then(c=>{nr(e,c)}).catch(c=>{ms(c,e,0)});e.asyncDep=i}else nr(e,i)}else ra(e)}function nr(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=mi(t)),ra(e)}function ra(e,t,n){const s=e.type;e.render||(e.render=s.render||ut);{const o=jn(e);xt();try{Hc(e)}finally{wt(),o()}}}const wl={get(e,t){return Ee(e,"get",""),e[t]}};function _l(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,wl),slots:e.slots,emit:e.emit,expose:t}}function ws(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(mi(dc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _n)return _n[n](e)},has(t,n){return n in t||n in _n}})):e.proxy}function kl(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function Cl(e){return Y(e)&&"__vccOpts"in e}const se=(e,t)=>gc(e,t,In);function To(e,t,n){try{os(-1);const s=arguments.length;return s===2?me(t)&&!q(t)?Rn(t)?G(e,null,[t]):G(e,t):G(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Rn(n)&&(n=[n]),G(e,t,n))}finally{os(1)}}const Sl="3.5.27";let Xs;const sr=typeof window<"u"&&window.trustedTypes;if(sr)try{Xs=sr.createPolicy("vue",{createHTML:e=>e})}catch{}const ia=Xs?e=>Xs.createHTML(e):e=>e,Al="http://www.w3.org/2000/svg",Tl="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,or=ht&&ht.createElement("template"),El={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?ht.createElementNS(Al,e):t==="mathml"?ht.createElementNS(Tl,e):n?ht.createElement(e,{is:n}):ht.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{or.innerHTML=ia(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=or.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},At="transition",fn="animation",an=Symbol("_vtc"),aa={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ca=we({},Pi,aa),Pl=e=>(e.displayName="Transition",e.props=ca,e),Bn=Pl((e,{slots:t})=>To(Ec,la(e),t)),Bt=(e,t=[])=>{q(e)?e.forEach(n=>n(...t)):e&&e(...t)},rr=e=>e?q(e)?e.some(t=>t.length>1):e.length>1:!1;function la(e){const t={};for(const L in e)L in aa||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=i,appearToClass:l=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,v=Rl(o),y=v&&v[0],T=v&&v[1],{onBeforeEnter:E,onEnter:$,onEnterCancelled:j,onLeave:M,onLeaveCancelled:z,onBeforeAppear:J=E,onAppear:B=$,onAppearCancelled:X=j}=t,F=(L,oe,Ce,He)=>{L._enterCancelled=He,Et(L,oe?l:a),Et(L,oe?u:i),Ce&&Ce()},Q=(L,oe)=>{L._isLeaving=!1,Et(L,d),Et(L,g),Et(L,p),oe&&oe()},le=L=>(oe,Ce)=>{const He=L?B:$,ye=()=>F(oe,L,Ce);Bt(He,[oe,ye]),ir(()=>{Et(oe,L?c:r),at(oe,L?l:a),rr(He)||ar(oe,s,y,ye)})};return we(t,{onBeforeEnter(L){Bt(E,[L]),at(L,r),at(L,i)},onBeforeAppear(L){Bt(J,[L]),at(L,c),at(L,u)},onEnter:le(!1),onAppear:le(!0),onLeave(L,oe){L._isLeaving=!0;const Ce=()=>Q(L,oe);at(L,d),L._enterCancelled?(at(L,p),eo(L)):(eo(L),at(L,p)),ir(()=>{L._isLeaving&&(Et(L,d),at(L,g),rr(M)||ar(L,s,T,Ce))}),Bt(M,[L,Ce])},onEnterCancelled(L){F(L,!1,void 0,!0),Bt(j,[L])},onAppearCancelled(L){F(L,!0,void 0,!0),Bt(X,[L])},onLeaveCancelled(L){Q(L),Bt(z,[L])}})}function Rl(e){if(e==null)return null;if(me(e))return[$s(e.enter),$s(e.leave)];{const t=$s(e);return[t,t]}}function $s(e){return ja(e)}function at(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[an]||(e[an]=new Set)).add(t)}function Et(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[an];n&&(n.delete(t),n.size||(e[an]=void 0))}function ir(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Dl=0;function ar(e,t,n,s){const o=e._endId=++Dl,r=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:a,propCount:c}=ua(e,t);if(!i)return s();const u=i+"end";let l=0;const d=()=>{e.removeEventListener(u,p),r()},p=g=>{g.target===e&&++l>=c&&d()};setTimeout(()=>{l<c&&d()},a+1),e.addEventListener(u,p)}function ua(e,t){const n=window.getComputedStyle(e),s=v=>(n[v]||"").split(", "),o=s(`${At}Delay`),r=s(`${At}Duration`),i=cr(o,r),a=s(`${fn}Delay`),c=s(`${fn}Duration`),u=cr(a,c);let l=null,d=0,p=0;t===At?i>0&&(l=At,d=i,p=r.length):t===fn?u>0&&(l=fn,d=u,p=c.length):(d=Math.max(i,u),l=d>0?i>u?At:fn:null,p=l?l===At?r.length:c.length:0);const g=l===At&&/\b(?:transform|all)(?:,|$)/.test(s(`${At}Property`).toString());return{type:l,timeout:d,propCount:p,hasTransform:g}}function cr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>lr(n)+lr(e[s])))}function lr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function eo(e){return(e?e.ownerDocument:document).body.offsetHeight}function Il(e,t,n){const s=e[an];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ur=Symbol("_vod"),$l=Symbol("_vsh"),Ol=Symbol(""),Ml=/(?:^|;)\s*display\s*:/;function Ll(e,t,n){const s=e.style,o=be(n);let r=!1;if(n&&!o){if(t)if(be(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Zn(s,a,"")}else for(const i in t)n[i]==null&&Zn(s,i,"");for(const i in n)i==="display"&&(r=!0),Zn(s,i,n[i])}else if(o){if(t!==n){const i=s[Ol];i&&(n+=";"+i),s.cssText=n,r=Ml.test(n)}}else t&&e.removeAttribute("style");ur in e&&(e[ur]=r?s.display:"",e[$l]&&(s.display="none"))}const dr=/\s*!important$/;function Zn(e,t,n){if(q(n))n.forEach(s=>Zn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Nl(e,t);dr.test(n)?e.setProperty(Kt(s),n.replace(dr,""),"important"):e[s]=n}}const pr=["Webkit","Moz","ms"],Os={};function Nl(e,t){const n=Os[t];if(n)return n;let s=Ye(t);if(s!=="filter"&&s in e)return Os[t]=s;s=ps(s);for(let o=0;o<pr.length;o++){const r=pr[o]+s;if(r in e)return Os[t]=r}return t}const fr="http://www.w3.org/1999/xlink";function hr(e,t,n,s,o,r=Ua(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(fr,t.slice(6,t.length)):e.setAttributeNS(fr,t,n):n==null||r&&!Jr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":kt(n)?String(n):n)}function mr(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ia(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Jr(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function Zt(e,t,n,s){e.addEventListener(t,n,s)}function jl(e,t,n,s){e.removeEventListener(t,n,s)}const gr=Symbol("_vei");function Bl(e,t,n,s,o=null){const r=e[gr]||(e[gr]={}),i=r[t];if(s&&i)i.value=s;else{const[a,c]=Fl(t);if(s){const u=r[t]=Wl(s,o);Zt(e,a,u,c)}else i&&(jl(e,a,i,c),r[t]=void 0)}}const br=/(?:Once|Passive|Capture)$/;function Fl(e){let t;if(br.test(e)){t={};let s;for(;s=e.match(br);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Kt(e.slice(2)),t]}let Ms=0;const Hl=Promise.resolve(),Vl=()=>Ms||(Hl.then(()=>Ms=0),Ms=Date.now());function Wl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xe(Ul(s,n.value),t,5,[s])};return n.value=e,n.attached=Vl(),n}function Ul(e,t){if(q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const vr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Gl=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?Il(e,s,i):t==="style"?Ll(e,n,s):ls(t)?ao(t)||Bl(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ql(e,t,s,i))?(mr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hr(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!be(s))?mr(e,Ye(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),hr(e,t,s,i))};function ql(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&vr(t)&&Y(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return vr(t)&&be(n)?!1:t in e}const da=new WeakMap,pa=new WeakMap,is=Symbol("_moveCb"),yr=Symbol("_enterCb"),Kl=e=>(delete e.props.mode,e),Yl=Kl({name:"TransitionGroup",props:we({},ca,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Ao(),s=Ei();let o,r;return Li(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Xl(o[0].el,n.vnode.el,i)){o=[];return}o.forEach(Jl),o.forEach(Ql);const a=o.filter(Zl);eo(n.vnode.el),a.forEach(c=>{const u=c.el,l=u.style;at(u,i),l.transform=l.webkitTransform=l.transitionDuration="";const d=u[is]=p=>{p&&p.target!==u||(!p||p.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[is]=null,Et(u,i))};u.addEventListener("transitionend",d)}),o=[]}),()=>{const i=ne(e),a=la(i);let c=i.tag||Z;if(o=[],r)for(let u=0;u<r.length;u++){const l=r[u];l.el&&l.el instanceof Element&&(o.push(l),Gt(l,En(l,a,s,n)),da.set(l,{left:l.el.offsetLeft,top:l.el.offsetTop}))}r=t.default?xo(t.default()):[];for(let u=0;u<r.length;u++){const l=r[u];l.key!=null&&Gt(l,En(l,a,s,n))}return G(c,null,r)}}}),zl=Yl;function Jl(e){const t=e.el;t[is]&&t[is](),t[yr]&&t[yr]()}function Ql(e){pa.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function Zl(e){const t=da.get(e),n=pa.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",e}}function Xl(e,t,n){const s=e.cloneNode(),o=e[an];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=ua(s);return r.removeChild(s),i}const xr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?n=>Kn(t,n):t};function eu(e){e.target.composing=!0}function wr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ls=Symbol("_assign");function _r(e,t,n){return t&&(e=e.trim()),n&&(e=uo(e)),e}const fa={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[Ls]=xr(o);const r=s||o.props&&o.props.type==="number";Zt(e,t?"change":"input",i=>{i.target.composing||e[Ls](_r(e.value,n,r))}),(n||r)&&Zt(e,"change",()=>{e.value=_r(e.value,n,r)}),t||(Zt(e,"compositionstart",eu),Zt(e,"compositionend",wr),Zt(e,"change",wr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},i){if(e[Ls]=xr(i),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?uo(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===c)||(e.value=c))}},tu=["ctrl","shift","alt","meta"],nu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>tu.some(n=>e[`${n}Key`]&&!t.includes(n))},Eo=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...r)=>{for(let i=0;i<t.length;i++){const a=nu[t[i]];if(a&&a(o,t))return}return e(o,...r)}))},su=we({patchProp:Gl},El);let kr;function ou(){return kr||(kr=al(su))}const ru=((...e)=>{const t=ou().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=au(s);if(!o)return;const r=t._component;!Y(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,iu(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t});function iu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function au(e){return be(e)?document.querySelector(e):e}const Xt=typeof document<"u";function ha(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function cu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ha(e.default)}const ie=Object.assign;function Ns(e,t){const n={};for(const s in t){const o=t[s];n[s]=et(o)?o.map(e):e(o)}return n}const Cn=()=>{},et=Array.isArray;function Cr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const ma=/#/g,lu=/&/g,uu=/\//g,du=/=/g,pu=/\?/g,ga=/\+/g,fu=/%5B/g,hu=/%5D/g,ba=/%5E/g,mu=/%60/g,va=/%7B/g,gu=/%7C/g,ya=/%7D/g,bu=/%20/g;function Po(e){return e==null?"":encodeURI(""+e).replace(gu,"|").replace(fu,"[").replace(hu,"]")}function vu(e){return Po(e).replace(va,"{").replace(ya,"}").replace(ba,"^")}function to(e){return Po(e).replace(ga,"%2B").replace(bu,"+").replace(ma,"%23").replace(lu,"%26").replace(mu,"`").replace(va,"{").replace(ya,"}").replace(ba,"^")}function yu(e){return to(e).replace(du,"%3D")}function xu(e){return Po(e).replace(ma,"%23").replace(pu,"%3F")}function wu(e){return xu(e).replace(uu,"%2F")}function $n(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const _u=/\/$/,ku=e=>e.replace(_u,"");function js(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(s=t.slice(0,c),r=t.slice(c,a>0?a:t.length),o=e(r.slice(1))),a>=0&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=Tu(s??t,n),{fullPath:s+r+i,path:s,query:o,hash:$n(i)}}function Cu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Sr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Su(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&cn(t.matched[s],n.matched[o])&&xa(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function cn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function xa(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Au(e[n],t[n]))return!1;return!0}function Au(e,t){return et(e)?Ar(e,t):et(t)?Ar(t,e):e?.valueOf()===t?.valueOf()}function Ar(e,t){return et(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Tu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,a;for(i=0;i<s.length;i++)if(a=s[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let no=(function(e){return e.pop="pop",e.push="push",e})({}),Bs=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Eu(e){if(!e)if(Xt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ku(e)}const Pu=/^[^#]+#/;function Ru(e,t){return e.replace(Pu,"#")+t}function Du(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const _s=()=>({left:window.scrollX,top:window.scrollY});function Iu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Du(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Tr(e,t){return(history.state?history.state.position-t:-1)+e}const so=new Map;function $u(e,t){so.set(e,t)}function Ou(e){const t=so.get(e);return so.delete(e),t}function Mu(e){return typeof e=="string"||e&&typeof e=="object"}function wa(e){return typeof e=="string"||typeof e=="symbol"}let ve=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const _a=Symbol("");ve.MATCHER_NOT_FOUND+"",ve.NAVIGATION_GUARD_REDIRECT+"",ve.NAVIGATION_ABORTED+"",ve.NAVIGATION_CANCELLED+"",ve.NAVIGATION_DUPLICATED+"";function ln(e,t){return ie(new Error,{type:e,[_a]:!0},t)}function ft(e,t){return e instanceof Error&&_a in e&&(t==null||!!(e.type&t))}const Lu=["params","query","hash"];function Nu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Lu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function ju(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(ga," "),r=o.indexOf("="),i=$n(r<0?o:o.slice(0,r)),a=r<0?null:$n(o.slice(r+1));if(i in t){let c=t[i];et(c)||(c=t[i]=[c]),c.push(a)}else t[i]=a}return t}function Er(e){let t="";for(let n in e){const s=e[n];if(n=yu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(et(s)?s.map(o=>o&&to(o)):[s&&to(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Bu(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=et(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const Fu=Symbol(""),Pr=Symbol(""),ks=Symbol(""),Ro=Symbol(""),oo=Symbol("");function hn(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function It(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(ln(ve.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?c(p):Mu(p)?c(ln(ve.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(i&&s.enterCallbacks[o]===i&&typeof p=="function"&&i.push(p),a())},l=r(()=>e.call(s&&s.instances[o],t,n,u));let d=Promise.resolve(l);e.length<3&&(d=d.then(u)),d.catch(p=>c(p))})}function Fs(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const a in i.components){let c=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(ha(c)){const u=(c.__vccOpts||c)[t];u&&r.push(It(u,n,s,i,a,o))}else{let u=c();r.push(()=>u.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=cu(l)?l.default:l;i.mods[a]=l,i.components[a]=d;const p=(d.__vccOpts||d)[t];return p&&It(p,n,s,i,a,o)()}))}}return r}function Hu(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(u=>cn(u,a))?s.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>cn(u,c))||o.push(c))}return[n,s,o]}let Vu=()=>location.protocol+"//"+location.host;function ka(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(i);return a[0]!=="/"&&(a="/"+a),Sr(a,"")}return Sr(n,e)+s+o}function Wu(e,t,n,s){let o=[],r=[],i=null;const a=({state:p})=>{const g=ka(e,location),v=n.value,y=t.value;let T=0;if(p){if(n.value=g,t.value=p,i&&i===v){i=null;return}T=y?p.position-y.position:0}else s(g);o.forEach(E=>{E(n.value,v,{delta:T,type:no.pop,direction:T?T>0?Bs.forward:Bs.back:Bs.unknown})})};function c(){i=n.value}function u(p){o.push(p);const g=()=>{const v=o.indexOf(p);v>-1&&o.splice(v,1)};return r.push(g),g}function l(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ie({},p.state,{scroll:_s()}),"")}}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",l),document.removeEventListener("visibilitychange",l)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",l),document.addEventListener("visibilitychange",l),{pauseListeners:c,listen:u,destroy:d}}function Rr(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?_s():null}}function Uu(e){const{history:t,location:n}=window,s={value:ka(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,l){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Vu()+e+c;try{t[l?"replaceState":"pushState"](u,"",p),o.value=u}catch(g){console.error(g),n[l?"replace":"assign"](p)}}function i(c,u){r(c,ie({},t.state,Rr(o.value.back,c,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=c}function a(c,u){const l=ie({},o.value,t.state,{forward:c,scroll:_s()});r(l.current,l,!0),r(c,ie({},Rr(s.value,c,null),{position:l.position+1},u),!1),s.value=c}return{location:s,state:o,push:a,replace:i}}function Gu(e){e=Eu(e);const t=Uu(e),n=Wu(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=ie({location:"",base:e,go:s,createHref:Ru.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let Vt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var _e=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(_e||{});const qu={type:Vt.Static,value:""},Ku=/[a-zA-Z0-9_]/;function Yu(e){if(!e)return[[]];if(e==="/")return[[qu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=_e.Static,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,c,u="",l="";function d(){u&&(n===_e.Static?r.push({type:Vt.Static,value:u}):n===_e.Param||n===_e.ParamRegExp||n===_e.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Vt.Param,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==_e.ParamRegExp){s=n,n=_e.EscapeNext;continue}switch(n){case _e.Static:c==="/"?(u&&d(),i()):c===":"?(d(),n=_e.Param):p();break;case _e.EscapeNext:p(),n=s;break;case _e.Param:c==="("?n=_e.ParamRegExp:Ku.test(c)?p():(d(),n=_e.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case _e.ParamRegExp:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=_e.ParamRegExpEnd:l+=c;break;case _e.ParamRegExpEnd:d(),n=_e.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===_e.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),o}const Dr="[^/]+?",zu={sensitive:!1,strict:!1,start:!0,end:!0};var Me=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Me||{});const Ju=/[.+*?^${}()[\]/\\]/g;function Qu(e,t){const n=ie({},zu,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const l=u.length?[]:[Me.Root];n.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=Me.Segment+(n.sensitive?Me.BonusCaseSensitive:0);if(p.type===Vt.Static)d||(o+="/"),o+=p.value.replace(Ju,"\\$&"),g+=Me.Static;else if(p.type===Vt.Param){const{value:v,repeatable:y,optional:T,regexp:E}=p;r.push({name:v,repeatable:y,optional:T});const $=E||Dr;if($!==Dr){g+=Me.BonusCustomRegExp;try{`${$}`}catch(M){throw new Error(`Invalid custom RegExp for param "${v}" (${$}): `+M.message)}}let j=y?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;d||(j=T&&u.length<2?`(?:/${j})`:"/"+j),T&&(j+="?"),o+=j,g+=Me.Dynamic,T&&(g+=Me.BonusOptional),y&&(g+=Me.BonusRepeatable),$===".*"&&(g+=Me.BonusWildcard)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Me.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const l=u.match(i),d={};if(!l)return null;for(let p=1;p<l.length;p++){const g=l[p]||"",v=r[p-1];d[v.name]=g&&v.repeatable?g.split("/"):g}return d}function c(u){let l="",d=!1;for(const p of e){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const g of p)if(g.type===Vt.Static)l+=g.value;else if(g.type===Vt.Param){const{value:v,repeatable:y,optional:T}=g,E=v in u?u[v]:"";if(et(E)&&!y)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const $=et(E)?E.join("/"):E;if(!$)if(T)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);l+=$}}return l||"/"}return{re:i,score:s,keys:r,parse:a,stringify:c}}function Zu(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Me.Static+Me.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Me.Static+Me.Segment?1:-1:0}function Ca(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=Zu(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(Ir(s))return 1;if(Ir(o))return-1}return o.length-s.length}function Ir(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Xu={strict:!1,end:!0,sensitive:!1};function ed(e,t,n){const s=Qu(Yu(e.path),n),o=ie(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function td(e,t){const n=[],s=new Map;t=Cr(Xu,t);function o(d){return s.get(d)}function r(d,p,g){const v=!g,y=Or(d);y.aliasOf=g&&g.record;const T=Cr(t,d),E=[y];if("alias"in d){const M=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of M)E.push(Or(ie({},y,{components:g?g.record.components:y.components,path:z,aliasOf:g?g.record:y})))}let $,j;for(const M of E){const{path:z}=M;if(p&&z[0]!=="/"){const J=p.record.path,B=J[J.length-1]==="/"?"":"/";M.path=p.record.path+(z&&B+z)}if($=ed(M,p,T),g?g.alias.push($):(j=j||$,j!==$&&j.alias.push($),v&&d.name&&!Mr($)&&i(d.name)),Sa($)&&c($),y.children){const J=y.children;for(let B=0;B<J.length;B++)r(J[B],$,g&&g.children[B])}g=g||$}return j?()=>{i(j)}:Cn}function i(d){if(wa(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return n}function c(d){const p=od(d,n);n.splice(p,0,d),d.record.name&&!Mr(d)&&s.set(d.record.name,d)}function u(d,p){let g,v={},y,T;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw ln(ve.MATCHER_NOT_FOUND,{location:d});T=g.record.name,v=ie($r(p.params,g.keys.filter(j=>!j.optional).concat(g.parent?g.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),d.params&&$r(d.params,g.keys.map(j=>j.name))),y=g.stringify(v)}else if(d.path!=null)y=d.path,g=n.find(j=>j.re.test(y)),g&&(v=g.parse(y),T=g.record.name);else{if(g=p.name?s.get(p.name):n.find(j=>j.re.test(p.path)),!g)throw ln(ve.MATCHER_NOT_FOUND,{location:d,currentLocation:p});T=g.record.name,v=ie({},p.params,d.params),y=g.stringify(v)}const E=[];let $=g;for(;$;)E.unshift($.record),$=$.parent;return{name:T,path:y,params:v,matched:E,meta:sd(E)}}e.forEach(d=>r(d));function l(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:i,clearRoutes:l,getRoutes:a,getRecordMatcher:o}}function $r(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Or(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:nd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function nd(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Mr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sd(e){return e.reduce((t,n)=>ie(t,n.meta),{})}function od(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;Ca(e,t[r])<0?s=r:n=r+1}const o=rd(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function rd(e){let t=e;for(;t=t.parent;)if(Sa(t)&&Ca(e,t)===0)return t}function Sa({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Lr(e){const t=Qe(ks),n=Qe(Ro),s=se(()=>{const c=De(e.to);return t.resolve(c)}),o=se(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const p=d.findIndex(cn.bind(null,l));if(p>-1)return p;const g=Nr(c[u-2]);return u>1&&Nr(l)===g&&d[d.length-1].path!==g?d.findIndex(cn.bind(null,c[u-2])):p}),r=se(()=>o.value>-1&&ud(n.params,s.value.params)),i=se(()=>o.value>-1&&o.value===n.matched.length-1&&xa(n.params,s.value.params));function a(c={}){if(ld(c)){const u=t[De(e.replace)?"replace":"push"](De(e.to)).catch(Cn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:se(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}function id(e){return e.length===1?e[0]:e}const ad=$i({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Lr,setup(e,{slots:t}){const n=On(Lr(e)),{options:s}=Qe(ks),o=se(()=>({[jr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[jr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&id(t.default(n));return e.custom?r:To("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),cd=ad;function ld(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ud(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!et(o)||o.length!==s.length||s.some((r,i)=>r.valueOf()!==o[i].valueOf()))return!1}return!0}function Nr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const jr=(e,t,n)=>e??t??n,dd=$i({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Qe(oo),o=se(()=>e.route||s.value),r=Qe(Pr,0),i=se(()=>{let u=De(r);const{matched:l}=o.value;let d;for(;(d=l[u])&&!d.components;)u++;return u}),a=se(()=>o.value.matched[i.value]);Yn(Pr,se(()=>i.value+1)),Yn(Fu,a),Yn(oo,o);const c=ce();return vt(()=>[c.value,a.value,e.name],([u,l,d],[p,g,v])=>{l&&(l.instances[d]=u,g&&g!==l&&u&&u===p&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!cn(l,g)||!p)&&(l.enterCallbacks[d]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=o.value,l=e.name,d=a.value,p=d&&d.components[l];if(!p)return Br(n.default,{Component:p,route:u});const g=d.props[l],v=g?g===!0?u.params:typeof g=="function"?g(u):g:null,T=To(p,ie({},v,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(d.instances[l]=null)},ref:c}));return Br(n.default,{Component:T,route:u})||T}}});function Br(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const pd=dd;function fd(e){const t=td(e.routes,e),n=e.parseQuery||ju,s=e.stringifyQuery||Er,o=e.history,r=hn(),i=hn(),a=hn(),c=pc(Tt);let u=Tt;Xt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ns.bind(null,_=>""+_),d=Ns.bind(null,wu),p=Ns.bind(null,$n);function g(_,N){let I,H;return wa(_)?(I=t.getRecordMatcher(_),H=N):H=_,t.addRoute(H,I)}function v(_){const N=t.getRecordMatcher(_);N&&t.removeRoute(N)}function y(){return t.getRoutes().map(_=>_.record)}function T(_){return!!t.getRecordMatcher(_)}function E(_,N){if(N=ie({},N||c.value),typeof _=="string"){const b=js(n,_,N.path),x=t.resolve({path:b.path},N),k=o.createHref(b.fullPath);return ie(b,x,{params:p(x.params),hash:$n(b.hash),redirectedFrom:void 0,href:k})}let I;if(_.path!=null)I=ie({},_,{path:js(n,_.path,N.path).path});else{const b=ie({},_.params);for(const x in b)b[x]==null&&delete b[x];I=ie({},_,{params:d(b)}),N.params=d(N.params)}const H=t.resolve(I,N),ee=_.hash||"";H.params=l(p(H.params));const f=Cu(s,ie({},_,{hash:vu(ee),path:H.path})),m=o.createHref(f);return ie({fullPath:f,hash:ee,query:s===Er?Bu(_.query):_.query||{}},H,{redirectedFrom:void 0,href:m})}function $(_){return typeof _=="string"?js(n,_,c.value.path):ie({},_)}function j(_,N){if(u!==_)return ln(ve.NAVIGATION_CANCELLED,{from:N,to:_})}function M(_){return B(_)}function z(_){return M(ie($(_),{replace:!0}))}function J(_,N){const I=_.matched[_.matched.length-1];if(I&&I.redirect){const{redirect:H}=I;let ee=typeof H=="function"?H(_,N):H;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=$(ee):{path:ee},ee.params={}),ie({query:_.query,hash:_.hash,params:ee.path!=null?{}:_.params},ee)}}function B(_,N){const I=u=E(_),H=c.value,ee=_.state,f=_.force,m=_.replace===!0,b=J(I,H);if(b)return B(ie($(b),{state:typeof b=="object"?ie({},ee,b.state):ee,force:f,replace:m}),N||I);const x=I;x.redirectedFrom=N;let k;return!f&&Su(s,H,I)&&(k=ln(ve.NAVIGATION_DUPLICATED,{to:x,from:H}),nt(H,H,!0,!1)),(k?Promise.resolve(k):Q(x,H)).catch(w=>ft(w)?ft(w,ve.NAVIGATION_GUARD_REDIRECT)?w:St(w):re(w,x,H)).then(w=>{if(w){if(ft(w,ve.NAVIGATION_GUARD_REDIRECT))return B(ie({replace:m},$(w.to),{state:typeof w.to=="object"?ie({},ee,w.to.state):ee,force:f}),N||x)}else w=L(x,H,!0,m,ee);return le(x,H,w),w})}function X(_,N){const I=j(_,N);return I?Promise.reject(I):Promise.resolve()}function F(_){const N=zt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(_):_()}function Q(_,N){let I;const[H,ee,f]=Hu(_,N);I=Fs(H.reverse(),"beforeRouteLeave",_,N);for(const b of H)b.leaveGuards.forEach(x=>{I.push(It(x,_,N))});const m=X.bind(null,_,N);return I.push(m),Ge(I).then(()=>{I=[];for(const b of r.list())I.push(It(b,_,N));return I.push(m),Ge(I)}).then(()=>{I=Fs(ee,"beforeRouteUpdate",_,N);for(const b of ee)b.updateGuards.forEach(x=>{I.push(It(x,_,N))});return I.push(m),Ge(I)}).then(()=>{I=[];for(const b of f)if(b.beforeEnter)if(et(b.beforeEnter))for(const x of b.beforeEnter)I.push(It(x,_,N));else I.push(It(b.beforeEnter,_,N));return I.push(m),Ge(I)}).then(()=>(_.matched.forEach(b=>b.enterCallbacks={}),I=Fs(f,"beforeRouteEnter",_,N,F),I.push(m),Ge(I))).then(()=>{I=[];for(const b of i.list())I.push(It(b,_,N));return I.push(m),Ge(I)}).catch(b=>ft(b,ve.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function le(_,N,I){a.list().forEach(H=>F(()=>H(_,N,I)))}function L(_,N,I,H,ee){const f=j(_,N);if(f)return f;const m=N===Tt,b=Xt?history.state:{};I&&(H||m?o.replace(_.fullPath,ie({scroll:m&&b&&b.scroll},ee)):o.push(_.fullPath,ee)),c.value=_,nt(_,N,I,m),St()}let oe;function Ce(){oe||(oe=o.listen((_,N,I)=>{if(!Lt.listening)return;const H=E(_),ee=J(H,Lt.currentRoute.value);if(ee){B(ie(ee,{replace:!0,force:!0}),H).catch(Cn);return}u=H;const f=c.value;Xt&&$u(Tr(f.fullPath,I.delta),_s()),Q(H,f).catch(m=>ft(m,ve.NAVIGATION_ABORTED|ve.NAVIGATION_CANCELLED)?m:ft(m,ve.NAVIGATION_GUARD_REDIRECT)?(B(ie($(m.to),{force:!0}),H).then(b=>{ft(b,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&!I.delta&&I.type===no.pop&&o.go(-1,!1)}).catch(Cn),Promise.reject()):(I.delta&&o.go(-I.delta,!1),re(m,H,f))).then(m=>{m=m||L(H,f,!1),m&&(I.delta&&!ft(m,ve.NAVIGATION_CANCELLED)?o.go(-I.delta,!1):I.type===no.pop&&ft(m,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),le(H,f,m)}).catch(Cn)}))}let He=hn(),ye=hn(),de;function re(_,N,I){St(_);const H=ye.list();return H.length?H.forEach(ee=>ee(_,N,I)):console.error(_),Promise.reject(_)}function dt(){return de&&c.value!==Tt?Promise.resolve():new Promise((_,N)=>{He.add([_,N])})}function St(_){return de||(de=!_,Ce(),He.list().forEach(([N,I])=>_?I(_):N()),He.reset()),_}function nt(_,N,I,H){const{scrollBehavior:ee}=e;if(!Xt||!ee)return Promise.resolve();const f=!I&&Ou(Tr(_.fullPath,0))||(H||!I)&&history.state&&history.state.scroll||null;return gs().then(()=>ee(_,N,f)).then(m=>m&&Iu(m)).catch(m=>re(m,_,N))}const Ne=_=>o.go(_);let Yt;const zt=new Set,Lt={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:T,getRoutes:y,resolve:E,options:e,push:M,replace:z,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:ye.add,isReady:dt,install(_){_.component("RouterLink",cd),_.component("RouterView",pd),_.config.globalProperties.$router=Lt,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>De(c)}),Xt&&!Yt&&c.value===Tt&&(Yt=!0,M(o.location).catch(H=>{}));const N={};for(const H in Tt)Object.defineProperty(N,H,{get:()=>c.value[H],enumerable:!0});_.provide(ks,Lt),_.provide(Ro,fi(N)),_.provide(oo,c);const I=_.unmount;zt.add(_),_.unmount=function(){zt.delete(_),zt.size<1&&(u=Tt,oe&&oe(),oe=null,c.value=Tt,Yt=!1,de=!1),I()}}};function Ge(_){return _.reduce((N,I)=>N.then(()=>F(I)),Promise.resolve())}return Lt}function un(){return Qe(ks)}function Do(e){return Qe(Ro)}const hd={__name:"App",setup(e){const t=un(),n=ce(!0);return t.isReady().then(()=>{setTimeout(()=>{n.value=!1},100)}),(s,o)=>{const r=Nn("router-view");return C(),Ot(r,null,{default:Ue(({Component:i,route:a})=>[G(Bn,{name:n.value?"":"page",mode:"out-in"},{default:Ue(()=>[(C(),Ot(jc(i),{key:a.path}))]),_:2},1032,["name"])]),_:1})}}},Aa="/kitsudo/logo.svg",ze=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},md={},gd={"aria-labelledby":"kitsudo-announcement",class:"mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"},bd={class:"announcement-card"},vd={class:"flex w-full gap-2 sm:w-auto"};function yd(e,t){const n=Nn("router-link");return C(),A("aside",gd,[h("div",bd,[t[2]||(t[2]=h("div",{class:"app-icon relative h-12 w-12 shrink-0 sm:h-14 sm:w-14",role:"img","aria-label":"Kitsudo app icon"},[h("span",{class:"absolute inset-0 rounded-[36%] bg-[#24284b]"}),h("img",{src:Aa,alt:"",class:"absolute inset-[8%] h-auto w-auto object-contain"})],-1)),t[3]||(t[3]=h("div",{class:"min-w-[180px] flex-1"},[h("h2",{id:"kitsudo-announcement",class:"mb-0.5 text-sm font-bold text-catppuccin-text sm:text-base"}," Kitsudo is now available on Google Play. "),h("p",{class:"hidden text-catppuccin-gray sm:block sm:text-xs"}," Free, open-source, and built without ads or tracking. ")],-1)),h("div",vd,[G(n,{to:"/kitsudo",class:"announcement-button announcement-secondary flex-1 sm:flex-none"},{default:Ue(()=>[...t[0]||(t[0]=[Ae(" [ More info ] ",-1)])]),_:1}),t[1]||(t[1]=h("a",{href:"https://play.google.com/store/apps/details?id=dev.heckr.kitsudo",target:"_blank",rel:"noopener noreferrer","aria-label":"View Kitsudo on Google Play (opens in a new tab)",class:"announcement-button announcement-primary flex-1 sm:flex-none"}," [ Google Play ] ",-1))])])])}const xd=ze(md,[["render",yd],["__scopeId","data-v-ce7b5d9e"]]),Fr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",white:"#cdd6f4"},wd=[{id:"posts",label:"posts",href:"/posts",external:!1,accentColor:"mauve"},{id:"projects",label:"projects",href:"/projects",external:!1,accentColor:"lavender"},{id:"github",label:"github",href:"https://github.com/Hecker-01",external:!0,accentColor:"white"}];function _d(){return wd.map(e=>({...e,accentColor:Fr[e.accentColor]||Fr.mauve}))}const Se=On({discordUser:null,spotify:null,discordStatus:"offline",discordStatusColor:"text-catppuccin-subtle",editorActivity:null,isConnected:!1,isLoading:!0});class kd{constructor(){this.ws=null,this.heartbeat=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.maxAttempts=5,this.userId="766897363050037248",this.isConnecting=!1}connect(){if(!(this.isConnecting||this.ws&&this.ws.readyState===WebSocket.OPEN)){this.isConnecting=!0,Se.isLoading=!0;try{this.ws=new WebSocket("wss://api.lanyard.rest/socket"),this.ws.onopen=()=>{this.isConnecting=!1,this.reconnectAttempts=0,Se.isConnected=!0,this.ws.send(JSON.stringify({op:2,d:{subscribe_to_id:this.userId}}))},this.ws.onmessage=t=>{try{this.handleMessage(JSON.parse(t.data))}catch{}},this.ws.onclose=t=>{this.isConnecting=!1,Se.isConnected=!1,this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),t.code!==1e3&&this.reconnectAttempts<this.maxAttempts&&this.scheduleReconnect()},this.ws.onerror=()=>{this.isConnecting=!1,Se.isConnected=!1}}catch{this.isConnecting=!1,Se.isLoading=!1,this.scheduleReconnect()}}}handleMessage(t){t.op===1?this.startHeartbeat(t.d.heartbeat_interval):t.op===0&&(t.t==="INIT_STATE"||t.t==="PRESENCE_UPDATE")&&(this.updatePresence(t.d),Se.isLoading=!1)}updatePresence(t){t.discord_user&&(Se.discordUser={username:t.discord_user.username,discriminator:t.discord_user.discriminator,avatar:t.discord_user.avatar,id:t.discord_user.id}),Se.spotify=t.spotify?{song:t.spotify.song,artist:t.spotify.artist,track_id:t.spotify.track_id}:null,t.discord_status&&(Se.discordStatus=t.discord_status,Se.discordStatusColor=t.discord_status==="online"?"text-catppuccin-gold":"text-catppuccin-subtle"),Se.editorActivity=t.activities?.find(n=>n.name==="Visual Studio Code"||n.name==="Code"||n.name==="Zed")}startHeartbeat(t){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({op:3}))},t)}scheduleReconnect(){this.reconnectTimeout&&clearTimeout(this.reconnectTimeout),this.reconnectAttempts++;const t=Math.min(1e3*Math.pow(2,this.reconnectAttempts-1),3e4);this.reconnectTimeout=setTimeout(()=>this.connect(),t)}disconnect(){this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),this.ws&&(this.ws.close(1e3,"Manual disconnect"),this.ws=null),Se.isConnected=!1}}const Cd=new kd;Cd.connect();const Sd={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},Ad={class:"flex gap-4 sm:gap-6 text-sm bg-catppuccin-surface/10 rounded-lg p-4 items-center"},Td={class:"hidden sm:block flex-shrink-0 ascii-tooltip-wrapper"},Ed={class:"text-catppuccin-mauve text-xs select-none ascii-art","aria-label":"Art credit: @vilthuril.rah on Instagram"},Pd={class:"space-y-0.5 min-w-0 flex-1"},Rd={key:0,class:"flex"},Dd={class:"text-catppuccin-text truncate"},Id={key:1,class:"flex"},$d={class:"text-catppuccin-text"},Od={key:2,class:"flex"},Md={class:"text-catppuccin-text truncate"},Ld={key:3,class:"flex"},Nd={class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},jd={class:"text-catppuccin-text truncate"},Bd={key:0},Fd={key:1,class:"text-catppuccin-subtle"},Hd={key:2},Vd={__name:"NeofetchStatus",setup(e){const t=se(()=>Se.discordStatusColor),n=se(()=>Se.spotify),s=se(()=>Se.discordStatus),o=se(()=>Se.discordUser),r=se(()=>Se.editorActivity),i=se(()=>Se.isLoading),a=ce({name:"",version:""});tt(()=>{const d=navigator.userAgent;let p="Unknown",g="";d.includes("Firefox/")?(p="Firefox",g=d.match(/Firefox\/(\d+(\.\d+)?)/)?.[1]||""):d.includes("Edg/")?(p="Edge",g=d.match(/Edg\/(\d+(\.\d+)?)/)?.[1]||""):d.includes("Chrome/")?(p="Chrome",g=d.match(/Chrome\/(\d+(\.\d+)?)/)?.[1]||""):d.includes("Safari/")&&!d.includes("Chrome")?(p="Safari",g=d.match(/Version\/(\d+(\.\d+)?)/)?.[1]||""):(d.includes("Opera")||d.includes("OPR/"))&&(p="Opera",g=d.match(/(?:Opera|OPR)\/(\d+(\.\d+)?)/)?.[1]||""),a.value={name:p,version:g}});const c=`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠚⠛⢻⠀⠀⠀⠀⠀⠀⠀
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
⠀⠀⠀⠀⠀⠀⢸⣧⡶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⠞⠋⠉
`.trim().split(`
`),u=se(()=>{if(!r.value)return null;if(r.value.details&&r.value.details.toLowerCase().includes("idling"))return"idling";const d=r.value.name,p=d==="Zed",y=d==="IntelliJ IDEA Ultimate"||d==="IntelliJ IDEA"||d==="Android Studio";let T="",E="";return y?(T=r.value.details||"",E=r.value.state||""):p?(T=r.value.state||"",E=r.value.details||""):(T=r.value.details||"",E=r.value.state||""),T=T.replace(/editing /i,"").replace(/working on /i,"").trim(),E=E.replace(/in /i,"").replace(/workspace: /i,"").trim(),{name:d,workspace:E,filename:T}}),l=se(()=>{if(!u.value||u.value==="idling")return null;const d=u.value.name;return d==="Zed"?"zed":d==="IntelliJ IDEA Ultimate"||d==="IntelliJ IDEA"?"intellij":d==="Android Studio"?"android-studio":"vscode"});return(d,p)=>(C(),A("div",Sd,[p[10]||(p[10]=h("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ neofetch --live ",-1)),h("div",Ad,[h("div",Td,[h("pre",Ed,[(C(!0),A(Z,null,ke(De(c),(g,v)=>(C(),A(Z,{key:v},[Ae(U(g)+`
`,1)],64))),128))]),p[0]||(p[0]=h("span",{class:"ascii-tooltip"},[Ae("Art by "),h("a",{href:"https://www.instagram.com/vilthuril.rah/",target:"_blank",rel:"noopener noreferrer",class:"ascii-tooltip-link"},"@vilthuril.rah"),Ae(" on Instagram")],-1))]),h("div",Pd,[p[8]||(p[8]=Dn('<div class="mb-1" data-v-efff6fe0><span class="text-catppuccin-mauve font-bold" data-v-efff6fe0>heck</span><span class="text-catppuccin-blue font-bold" data-v-efff6fe0>OS</span><span class="text-catppuccin-subtle" data-v-efff6fe0> (v0.1.4)</span></div><div class="text-catppuccin-surface mb-2" data-v-efff6fe0> ------------------ </div>',2)),a.value.name?(C(),A("div",Rd,[p[1]||(p[1]=h("span",{class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},"browser",-1)),p[2]||(p[2]=h("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),h("span",Dd,U(a.value.name)+" "+U(a.value.version),1)])):ge("",!0),!i.value&&o.value?(C(),A("div",Id,[p[3]||(p[3]=h("span",{class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},"discord",-1)),p[4]||(p[4]=h("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),h("span",$d,U(o.value.username),1),h("span",{class:yt([t.value,"ml-1"])},"["+U(s.value)+"]",3)])):ge("",!0),!i.value&&n.value?(C(),A("div",Od,[p[5]||(p[5]=h("span",{class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},"spotify",-1)),p[6]||(p[6]=h("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),h("span",Md,U(n.value.song)+" - "+U(n.value.artist),1)])):ge("",!0),!i.value&&r.value&&u.value&&u.value!=="idling"&&(u.value.workspace||u.value.filename)?(C(),A("div",Ld,[h("span",Nd,U(l.value),1),p[7]||(p[7]=h("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),h("span",jd,[u.value.workspace?(C(),A("span",Bd,U(u.value.workspace.toLowerCase()),1)):ge("",!0),u.value.workspace&&u.value.filename?(C(),A("span",Fd,"/")):ge("",!0),u.value.filename?(C(),A("span",Hd,U(u.value.filename.toLowerCase()),1)):ge("",!0)])])):ge("",!0),p[9]||(p[9]=Dn('<div class="text-catppuccin-surface mb-2" data-v-efff6fe0> ------------------ </div><div class="flex gap-0.5 mt-3" data-v-efff6fe0><span class="w-4 h-4 rounded-sm bg-catppuccin-red" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-peach" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-yellow" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-green" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-teal" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-blue" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-mauve" data-v-efff6fe0></span><span class="w-4 h-4 rounded-sm bg-catppuccin-pink" data-v-efff6fe0></span></div>',2))])])]))}},Wd=ze(Vd,[["__scopeId","data-v-efff6fe0"]]),Ud={class:"mb-6"},Gd={class:"mb-6"},qd={class:"flex items-center flex-wrap gap-3 text-sm mt-4"},Kd=["href"],Yd={__name:"HeroSection",setup(e){const t=_d();return(n,s)=>{const o=Nn("router-link");return C(),A("div",Ud,[h("div",Gd,[s[3]||(s[3]=Dn('<div class="text-catppuccin-subtle text-sm mb-2" data-v-bf6b4bb8>~$ whoami</div><h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2" data-v-bf6b4bb8><span class="text-catppuccin-mauve" data-v-bf6b4bb8>jesse</span><span class="text-catppuccin-subtle" data-v-bf6b4bb8>@</span><span class="text-catppuccin-blue" data-v-bf6b4bb8>heckr.dev</span></h1><div class="text-sm text-catppuccin-gray 6" data-v-bf6b4bb8><span class="text-catppuccin-subtle" data-v-bf6b4bb8>aka </span><span class="text-catppuccin-green" data-v-bf6b4bb8>Hecker_01</span></div>',3)),h("div",qd,[(C(!0),A(Z,null,ke(De(t),r=>(C(),A(Z,{key:r.id},[r.external?(C(),A("a",{key:1,href:r.href,target:"_blank",class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group",style:xe({"--accent-color":r.accentColor})},[s[1]||(s[1]=h("span",{class:"text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1)),h("span",{class:"font-medium transition-colors",style:xe({color:r.accentColor})},"~/"+U(r.label),5),s[2]||(s[2]=h("svg",{class:"w-3 h-3 text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[h("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1))],12,Kd)):(C(),Ot(o,{key:0,to:r.href,class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group",style:xe({"--accent-color":r.accentColor})},{default:Ue(()=>[s[0]||(s[0]=h("span",{class:"text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1)),h("span",{class:"font-medium transition-colors",style:xe({color:r.accentColor})},"~/"+U(r.label),5)]),_:2},1032,["to","style"]))],64))),128))])]),s[4]||(s[4]=h("div",{class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},[h("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ cat about.txt "),h("p",{class:"text-catppuccin-text leading-relaxed mb-4"},[Ae(" Hi! I'm Jesse, a Dutch Software Development Student at Grafisch Lyceum Rotterdam. "),h("br"),Ae(" I code all sorts of tools and applications mainly for my own use, I also code plugins for Minecraft and Discord bots, my main goal is to have fun while doing so! "),h("br"),Ae(" My passion is Frontend development, but I also enjoy working on backend and mobile projects. "),h("br"),Ae(" I've got experience in a lot of different "),h("a",{href:"#languages",class:"text-catppuccin-mauve underline hover:no-underline"},"programming languages"),Ae(" and frameworks, and I love learning new ones! ")])],-1)),G(Wd)])}}},zd=ze(Yd,[["__scopeId","data-v-bf6b4bb8"]]),Jd={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},Qd={key:0,class:"text-sm text-catppuccin-subtle"},Zd={key:1,class:"text-sm text-catppuccin-text"},Xd={key:0,class:"text-catppuccin-subtle"},ep={key:2,class:"text-sm text-catppuccin-subtle"},tp={__name:"LanguagesList",props:{languages:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){return(t,n)=>(C(),A("div",Jd,[n[0]||(n[0]=h("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls ~/tools",-1)),e.loading?(C(),A("div",Qd," loading languages... ")):e.languages.length?(C(),A("div",Zd,[(C(!0),A(Z,null,ke(e.languages,(s,o)=>(C(),A("span",{key:s.language},[Ae(U(s.language)+"("+U(s.count)+")",1),o<e.languages.length-1?(C(),A("span",Xd," | ")):ge("",!0)]))),128))])):(C(),A("div",ep," no languages found "))]))}},np=`---
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
`,sp=`---
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
`,op=`---
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
`,rp=`---
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
`,ip=`---
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
`,ap=`---
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
`,cp=`---
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
`,lp=`---
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
`,Hr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",maroon:"#eba0ac",flamingo:"#f2cdcd"},up=Object.assign({"/projects/kitsudo.md":np,"/projects/mcbe-pack-decryptor.md":sp,"/projects/pingr.md":op,"/projects/portfolio.md":rp,"/projects/recodr.md":ip,"/projects/satissuite.md":ap,"/projects/wordr.md":cp,"/projects/yume-ramen.md":lp}),dp=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const c=(u,l)=>{l=l.trim(),l.startsWith("[")&&l.endsWith("]")?o[u]=l.slice(1,-1).split(",").map(d=>d.trim()):l==="true"?o[u]=!0:l==="false"?o[u]=!1:o[u]=l};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&c(i,a);const[d,...p]=u.split(":");if(!d||d.trim()==="")return;i=d.trim(),a=p.join(":").trim()}}),i&&a&&c(i,a),{frontmatter:o,content:s}},pp=()=>{const e=[];let t=1;return Object.entries(up).forEach(([n,s])=>{const{frontmatter:o,content:r}=dp(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,description:o.description||"",coverImage:o.coverImage||null,accentColor:o.accentColor||"mauve",accentColorHex:Hr[o.accentColor]||Hr.mauve,tags:o.tags||[],url:o.url||null,github:o.github||null,status:o.status||"active",unlisted:o.unlisted===!0,content:r.trim()})}),e};let Gn=null;const Cs=(e=!1)=>(Gn||(Gn=pp()),(e?[...Gn]:Gn.filter(n=>!n.unlisted)).sort((n,s)=>n.title.localeCompare(s.title))),Ta=e=>Cs(!0).find(t=>t.slug===e),fp=()=>{const e=new Set;return Cs().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()};function hp(){return Cs().map(e=>({id:e.id,slug:e.slug,name:e.title,description:e.description,link:e.url||e.github||"#",screenshot:e.coverImage,accentColor:e.accentColorHex}))}const mp={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},gp={key:0,class:"text-sm text-catppuccin-subtle"},bp={class:"lg:flex-1 lg:relative"},vp={key:0,class:"w-full flex-1 overflow-hidden bg-catppuccin-surface/30"},yp=["src","alt"],xp={class:"px-3 py-3 flex-shrink-0"},wp={class:"flex items-start gap-3"},_p={class:"flex-1 min-w-0"},kp={class:"text-xs text-catppuccin-gray leading-relaxed"},Cp={key:0,class:"flex justify-center gap-1.5 mt-3 flex-shrink-0"},Sp=["onClick"],Ap={__name:"ShowcaseCarousel",setup(e){const t=un(),n=ce([]),s=ce(0),o=ce(!1);let r=null;const i=se(()=>n.value.length?n.value[s.value]:null),a=c=>{if(c==="kitsudo"){t.push("/kitsudo");return}t.push({path:"/projects",query:{project:c}})};return tt(()=>{n.value=hp(),n.value.length>1&&(r=setInterval(()=>{o.value||(s.value=(s.value+1)%n.value.length)},1e4))}),Ln(()=>{r&&clearInterval(r)}),(c,u)=>(C(),A("div",mp,[u[5]||(u[5]=h("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ cat ~/showcase",-1)),n.value.length?(C(),A("div",{key:1,class:"relative lg:flex-1 flex flex-col",onMouseenter:u[2]||(u[2]=l=>o.value=!0),onMouseleave:u[3]||(u[3]=l=>o.value=!1)},[h("div",bp,[G(Bn,{name:"showcase",mode:"out-in"},{default:Ue(()=>[i.value?(C(),A("div",{key:i.value.id,onClick:u[0]||(u[0]=l=>a(i.value.slug)),class:"group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col cursor-pointer",style:xe({borderColor:`${i.value.accentColor}40`})},[i.value.screenshot?(C(),A("div",vp,[h("img",{src:i.value.screenshot,alt:i.value.name,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,yp)])):ge("",!0),h("div",xp,[h("div",wp,[h("span",{class:"transition-colors",style:xe({color:i.value.accentColor})},">",4),h("div",_p,[h("h3",{class:"text-sm font-medium text-catppuccin-text transition-colors mb-1",style:xe({color:i.value.accentColor})},U(i.value.name),5),h("p",kp,U(i.value.description),1)])])])],4)):ge("",!0)]),_:1})]),n.value.length>1?(C(),A("div",Cp,[(C(!0),A(Z,null,ke(n.value,(l,d)=>(C(),A("button",{key:`dot-${l.id}`,onClick:p=>s.value=d,class:yt(["w-2 h-2.5 rounded-full transition-all",d===s.value?"bg-catppuccin-mauve w-4":"bg-catppuccin-surface/60 hover:bg-catppuccin-surface"]),style:xe(d===s.value?{backgroundColor:i.value.accentColor}:{})},null,14,Sp))),128))])):ge("",!0),h("button",{onClick:u[1]||(u[1]=l=>De(t).push("/projects")),class:"mt-3 w-full py-2 px-3 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-all flex items-center justify-center gap-2"},[...u[4]||(u[4]=[h("span",null,"more projects",-1),h("span",null,"→",-1)])])],32)):(C(),A("div",gp," no items to showcase "))]))}},Tp=ze(Ap,[["__scopeId","data-v-174afb7a"]]),Io="hecker-01",Ea=async()=>{try{const e=[];let t=1;const n=100;for(;;){const r=await fetch(`https://api.github.com/users/${Io}/repos?per_page=${n}&page=${t}`);if(!r.ok)break;const i=await r.json();if(!i.length||(e.push(...i),i.length<n))break;t++}const s={};e.forEach(r=>{r.language&&(s[r.language]=(s[r.language]||0)+1)});const o=Object.entries(s).sort((r,i)=>i[1]-r[1]).map(([r,i])=>({language:r,count:i}));return{repos:e,languages:o,totalRepos:e.length}}catch(e){return console.error("Error fetching GitHub data:",e),{repos:[],languages:[],totalRepos:0}}},Ep=async()=>{const t=new Date;t.getFullYear();try{const n=await fetch(`https://github-contributions-api.jogruber.de/v4/${Io}?y=last`);if(!n.ok)throw new Error("Failed to fetch contribution data");const s=await n.json(),o=[];if(s.contributions&&s.contributions.forEach(r=>{o.push({date:r.date,count:r.count})}),o.length>0){const i=new Date(t);i.setDate(i.getDate()-371+1);const a=[];for(let c=0;c<371;c++){const u=new Date(i);u.setDate(u.getDate()+c);const l=u.toISOString().split("T")[0],d=o.find(p=>p.date===l);a.push({date:l,count:d?d.count:0})}return a}throw new Error("No contributions data available")}catch(n){console.error("Error fetching contribution data:",n);const s=new Map;for(let o=370;o>=0;o--){const r=new Date(t);r.setDate(r.getDate()-o);const i=r.toISOString().split("T")[0];s.set(i,0)}return Array.from(s.entries()).sort((o,r)=>o[0].localeCompare(r[0])).map(([o,r])=>({date:o,count:r}))}},Hs=e=>e===0?0:e<=2?1:e<=5?2:e<=8?3:4,Pp=e=>`https://github.com/${Io}?tab=overview&from=${e}&to=${e}`,Rp={class:"mt-6 border-l-2 border-catppuccin-surface pl-4"},Dp={class:"flex items-center justify-between mb-3"},Ip={key:0,class:"flex items-center gap-1 text-[10px] text-catppuccin-subtle"},$p={key:0},Op={key:1},Mp={class:"overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-thin"},Lp={class:"inline-flex md:flex gap-[3px] md:gap-1",style:{"min-width":"max-content"}},Np=["href","title"],jp=["title"],Bp={class:"text-xs text-catppuccin-gray mt-2"},Fp={__name:"ContributionGraph",setup(e){const t=ce([]),n=ce(!0),s=se(()=>{const i=[];for(let a=0;a<t.value.length;a+=7)i.push(t.value.slice(a,a+7));return i}),o=se(()=>t.value.reduce((i,a)=>i+a.count,0)),r=async()=>{try{n.value=!0,t.value=await Ep()}catch{}finally{n.value=!1}};return tt(()=>{r()}),(i,a)=>(C(),A("div",Rp,[h("div",Dp,[a[1]||(a[1]=h("div",{class:"text-catppuccin-subtle text-sm"},' ~$ git log --oneline --since="1.year.ago" | wc -l ',-1)),n.value?ge("",!0):(C(),A("div",Ip,[...a[0]||(a[0]=[Dn('<span>less</span><div class="flex gap-[1px]"><div class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green"></div></div><span>more</span>',3)])]))]),n.value?(C(),A("div",$p,[...a[2]||(a[2]=[h("div",{class:"h-[60px] bg-catppuccin-surface/30 rounded cursor-blink"},null,-1)])])):(C(),A("div",Op,[h("div",Mp,[h("div",Lp,[(C(!0),A(Z,null,ke(s.value,(c,u)=>(C(),A("div",{key:u,class:"flex flex-col gap-[3px] md:gap-1 md:flex-1"},[(C(!0),A(Z,null,ke(c,(l,d)=>(C(),A(Z,{key:d},[l.count>0?(C(),A("a",{key:0,href:De(Pp)(l.date),target:"_blank",rel:"noopener noreferrer",class:yt(["w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm transition-all hover:ring-1 hover:ring-catppuccin-green hover:scale-110 cursor-pointer",[De(Hs)(l.count)===1?"bg-catppuccin-green/30 hover:bg-catppuccin-green/40":De(Hs)(l.count)===2?"bg-catppuccin-green/50 hover:bg-catppuccin-green/60":De(Hs)(l.count)===3?"bg-catppuccin-green/70 hover:bg-catppuccin-green/80":"bg-catppuccin-green hover:bg-catppuccin-green"]]),title:`${l.date}: ${l.count} contributions - Click to view on GitHub`},null,10,Np)):(C(),A("div",{key:1,class:"w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm bg-catppuccin-surface/50",title:`${l.date}: ${l.count} contributions`},null,8,jp))],64))),128))]))),128))])]),h("div",Bp,U(o.value)+" contributions in the last year ",1)]))]))}},Hp={class:"w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400"},qt={__name:"Footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(C(),A("footer",Hp,[h("p",null,"© 2020 - "+U(De(t))+" heckr.dev | All rights reserved.",1)]))}},Vp={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},Wp={class:"lg:flex-1 flex flex-col"},Up={key:0,class:"space-y-2"},Gp={key:1,class:"text-sm text-catppuccin-subtle"},qp=["href"],Kp={class:"flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2"},Yp={class:"flex-1 min-w-0"},zp={class:"flex items-center gap-2"},Jp=["title"],Qp={key:0,class:"text-catppuccin-yellow text-xs flex-shrink-0"},Zp=["title"],Xp={key:3,class:"text-sm text-catppuccin-subtle"},ef={__name:"ReposList",props:{repos:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){const t=e,n=se(()=>t.repos.length?[...t.repos].sort((s,o)=>o.stargazers_count-s.stargazers_count).slice(0,6):[]);return(s,o)=>(C(),A("div",Vp,[o[2]||(o[2]=h("div",{class:"text-catppuccin-subtle text-sm mb-3"}," ~$ ls ~/repositories ",-1)),h("div",Wp,[e.loading?(C(),A("div",Up,[(C(),A(Z,null,ke(6,r=>h("div",{key:`repo-loading-${r}`,class:"rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3"},[...o[0]||(o[0]=[Dn('<div class="flex items-start gap-3" data-v-5dddb934><span class="text-catppuccin-subtle" data-v-5dddb934>&gt;</span><div class="flex-1 min-w-0" data-v-5dddb934><div class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink" data-v-5dddb934></div><div class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink" data-v-5dddb934></div></div></div>',1)])])),64))])):e.repos.length?n.value.length?(C(),Ot(zl,{key:2,name:"list",tag:"div",class:"space-y-2"},{default:Ue(()=>[(C(!0),A(Z,null,ke(n.value,r=>(C(),A("a",{key:r.id,href:r.html_url,target:"_blank",class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors"},[h("div",Kp,[o[1]||(o[1]=h("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors"},">",-1)),h("div",Yp,[h("div",zp,[h("span",{class:"text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate",title:r.name},U(r.name),9,Jp),r.stargazers_count>0?(C(),A("span",Qp," ★"+U(r.stargazers_count),1)):ge("",!0)]),h("p",{class:"text-xs text-catppuccin-gray truncate",title:r.description},U(r.description||"no description"),9,Zp)])])],8,qp))),128))]),_:1})):(C(),A("div",Xp," no repositories found ")):(C(),A("div",Gp," no projects found "))])]))}},tf=ze(ef,[["__scopeId","data-v-5dddb934"]]),nf={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},sf={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-10 md:pb-2"},of={class:"grid lg:grid-cols-2 gap-6 lg:items-stretch"},rf={__name:"Home",setup(e){const t=ce([]),n=ce(!0),s=ce([]),o=async()=>{try{n.value=!0;const{repos:r,languages:i}=await Ea("hecker-01");t.value=r,s.value=i}catch{}finally{n.value=!1}};return tt(()=>{o()}),(r,i)=>(C(),A("div",nf,[G(xd),h("div",sf,[G(zd),G(tp,{languages:s.value,loading:n.value,id:"languages"},null,8,["languages","loading"]),h("div",of,[G(tf,{repos:t.value,loading:n.value},null,8,["repos","loading"]),G(Tp)]),G(Fp),G(qt)])]))}},af=`---
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
`,cf=`---
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
`,lf=`---
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
`,uf=`---
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
`,df=`---
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
`,pf=`---
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
`,ff=`---
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
`,hf=Object.assign({"/posts/docker-and-compose.md":af,"/posts/dump-cdm-widevine.md":cf,"/posts/jellyfin-server.md":lf,"/posts/local-database.md":uf,"/posts/markdown-showcase.md":df,"/posts/using-commandline.md":pf,"/posts/using-git.md":ff}),mf=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const c=(u,l)=>{l=l.trim(),l.startsWith("[")&&l.endsWith("]")?o[u]=l.slice(1,-1).split(",").map(d=>d.trim()):o[u]=l};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&c(i,a);const[d,...p]=u.split(":");if(!d||d.trim()==="")return;i=d.trim(),a=p.join(":").trim()}}),i&&a&&c(i,a),{frontmatter:o,content:s}},gf=()=>{const e=[];let t=1;return Object.entries(hf).forEach(([n,s])=>{const{frontmatter:o,content:r}=mf(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,date:o.date||new Date().toISOString().split("T")[0],tags:o.tags||[],description:o.description||"",unlisted:o.unlisted===!0||o.unlisted==="true",content:r.trim(),readingTime:yf(r)})}),e};let qn=null;const $o=(e=!1)=>(qn||(qn=gf()),(e?[...qn]:qn.filter(n=>!n.unlisted)).sort((n,s)=>ro(s.date)-ro(n.date))),bf=e=>$o(!0).find(t=>t.slug===e),vf=()=>{const e=new Set;return $o().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()},ro=e=>{const[t,n,s]=e.split("-");return new Date(s,n-1,t)},yf=e=>{const n=e.trim().split(/\s+/).length;return Math.ceil(n/225)},xf={class:"sm:border-l-2 sm:border-catppuccin-surface pl-2 sm:pl-4"},wf={class:"flex flex-wrap gap-1.5 sm:gap-2"},_f=["onClick"],Pa={__name:"TagFilter",props:{tags:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["toggle-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("toggle-tag",o)};return(o,r)=>(C(),A("div",xf,[r[0]||(r[0]=h("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls tags/",-1)),h("div",wf,[(C(!0),A(Z,null,ke(e.tags,i=>(C(),A("button",{key:i,onClick:a=>s(i),class:yt(["px-3 py-1.5 sm:py-1 rounded text-xs transition-colors border",e.selectedTag===i?"bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve":"bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay"])}," #"+U(i),11,_f))),128))])]))}},kf={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2"},Cf={class:"text-catppuccin-subtle text-sm mb-3"},Sf={key:0,class:"text-catppuccin-mauve"},Af={key:0,class:"text-sm text-catppuccin-subtle"},Tf={key:1,class:"space-y-3"},Ef=["onClick"],Pf={class:"px-3 sm:px-4 py-3"},Rf={class:"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2"},Df={class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors"},If={class:"flex items-center gap-2 flex-shrink-0"},$f={class:"text-xs text-catppuccin-subtle"},Of=["title"],Mf={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed"},Lf={class:"flex items-center gap-2"},Nf={class:"flex flex-wrap gap-1.5"},jf=["onClick"],Bf={__name:"PostList",props:{posts:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-post","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-post",o)};return(o,r)=>(C(),A("div",kf,[h("div",Cf,[r[0]||(r[0]=Ae(" ~$ ls -la posts/ ",-1)),e.selectedTag?(C(),A("span",Sf,'| grep "'+U(e.selectedTag)+'"',1)):ge("",!0)]),e.posts.length?(C(),A("div",Tf,[(C(!0),A(Z,null,ke(e.posts,i=>(C(),A("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer"},[h("div",Pf,[h("div",Rf,[h("h2",Df,U(i.title),1),h("div",If,[h("span",$f,U(i.readingTime)+" min read ",1),r[1]||(r[1]=h("span",{class:"text-catppuccin-surface"},"•",-1)),h("span",{class:"text-xs text-catppuccin-subtle",title:De(ro)(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},U(i.date),9,Of)])]),h("p",Mf,U(i.description),1),h("div",Lf,[h("div",Nf,[(C(!0),A(Z,null,ke(i.tags,a=>(C(),A("span",{key:a,onClick:Eo(c=>n("select-tag",a),["stop"]),class:"px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:bg-catppuccin-mauve/20 hover:text-catppuccin-mauve cursor-pointer transition-colors"}," #"+U(a),9,jf))),128))]),r[2]||(r[2]=h("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm shrink-0"}," read → ",-1))])])],8,Ef))),128))])):(C(),A("div",Af," no posts found "))]))}};class Ff{extractVariables(t){const n=new RegExp("(?<!\\\\)\\$\\[([^\\]]+)\\]","g"),s=new Set;let o;for(;(o=n.exec(t))!==null;)s.add(o[1]);return Array.from(s)}substitute(t,n={}){const s=[];let o=t.replace(/\\\$\[([^\]]+)\]/g,(r,i)=>{const a=`__ESCAPED_VAR_${s.length}__`;return s.push(`$[${i}]`),a});return o=o.replace(/\$\[([^\]]+)\]/g,(r,i)=>n[i]||i),s.forEach((r,i)=>{o=o.replace(`__ESCAPED_VAR_${i}__`,r)}),o}}const as=new Ff;class Hf{process(t){let n=t;const s=[];n=n.replace(/__([A-Z_0-9]+)__/g,r=>{const i=`\0PROT${s.length}\0`;return s.push(r),i});const o=[];return n=n.replace(/`([^`]+)`/g,(r,i)=>{const a=`IC${o.length}`;return o.push(this._renderInlineCode(i)),a}),n=n.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),n=n.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),n=n.replace(/_(.*?)_/g,'<em class="text-catppuccin-text italic">$1</em>'),n=n.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),n=n.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>'),n=n.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">'),n=n.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>'),o.forEach((r,i)=>{n=n.replaceAll(`IC${i}`,r)}),s.forEach((r,i)=>{n=n.replaceAll(`\0PROT${i}\0`,r)}),n}_renderInlineCode(t){return`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code>`}}class Vf{constructor(t=new Hf){this.inlineParser=t}parse(t){let n=t;const s={codeBlocks:[],hintBlocks:[],detailsBlocks:[],escapedTokens:[],inlineCodeBlocks:[],tables:[]};return n=this._extractCodeBlocks(n,s),n=this._extractHintBlocks(n,s),n=this._extractDetailsBlocks(n,s),n=this._extractEscapeSequences(n,s),n=this._extractInlineCode(n,s),n=this._extractTables(n,s),n=this._transformHorizontalRules(n),n=this._transformHeadings(n),n=this._transformBlockquotes(n),n=this._transformImages(n),n=this._transformBoldItalic(n),n=this._transformStrikethrough(n),n=this._transformLinks(n),n=this._transformLists(n),n=this._transformParagraphs(n),n=this._restoreDetailsBlocks(n,s),n=this._restoreHintBlocks(n,s),n=this._restoreCodeBlocks(n,s),n=this._restoreTables(n,s),n=this._restoreInlineCode(n,s),n=this._restoreEscapeSequences(n,s),n}_extractCodeBlocks(t,n){return t.replace(/```(\w*)(?::([^\s\n]+))?\s*\n?([\s\S]*?)```/g,(s,o,r,i)=>{const a=`__CODEBLOCK_${n.codeBlocks.length}__`;return n.codeBlocks.push(this._renderCodeBlock(o,r,i,n.codeBlocks.length)),a})}_extractHintBlocks(t,n){return t.replace(/:::hint\s+(\w+)\r?\n([\s\S]*?):::/g,(s,o,r)=>{const i=`__HINT_${n.hintBlocks.length}__`;return n.hintBlocks.push({type:o.trim().toLowerCase(),content:r.trim()}),i})}_extractDetailsBlocks(t,n){let s=!0;for(;s;){const o=t;t=t.replace(/:::details\s+([^\n\r]+)\r?\n([\s\S]*?):::/g,(r,i,a)=>{const c=`__DETAILS_${n.detailsBlocks.length}__`;return n.detailsBlocks.push({title:i.trim(),content:a.trim()}),c}),s=t!==o}return t}_extractEscapeSequences(t,n){return t.replace(/\\\\|\\`/g,s=>{const o=`__ESCAPED_TOKEN_${n.escapedTokens.length}__`;return n.escapedTokens.push(s==="\\\\"?"\\":"`"),o})}_extractInlineCode(t,n){return t.replace(/`([^`]+)`/g,(s,o)=>{const r=`__INLINECODE_${n.inlineCodeBlocks.length}__`,i=o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return n.inlineCodeBlocks.push(`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${i}</code>`),r})}_extractTables(t,n){return t.replace(/((?:\|[^\n]+\|\r?\n?)+)/g,s=>{const o=s.trim().split(/\r?\n/);if(o.length<2||!/^\|[\s\-:|]+\|$/.test(o[1]))return s;const r=`__TABLE_${n.tables.length}__`;return n.tables.push(this._renderTable(o)),r})}_transformHorizontalRules(t){return t.replace(/^(?:---|\*\*\*|___)\s*$/gim,'<hr class="border-catppuccin-surface my-6">')}_transformHeadings(t){return t=t.replace(/^###### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h6 id="${o}" class="group text-xs font-semibold text-catppuccin-mauve mt-4 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h6>`}),t=t.replace(/^##### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h5 id="${o}" class="group text-sm font-semibold text-catppuccin-mauve mt-4 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h5>`}),t=t.replace(/^#### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h4 id="${o}" class="group text-base font-semibold text-catppuccin-mauve mt-5 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h4>`}),t=t.replace(/^### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h3 id="${o}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`}),t=t.replace(/^## (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h2 id="${o}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`}),t=t.replace(/^# (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h1 id="${o}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`}),t}_transformBlockquotes(t){return t.replace(/^> (.*$)/gim,'<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>')}_transformImages(t){return t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">')}_transformBoldItalic(t){return t=t.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),t=t.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),t=t.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),t}_transformStrikethrough(t){return t.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>')}_transformLinks(t){return t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>')}_transformLists(t){return t=t.replace(/^[\-\*\+] \[x\] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>'),t=t.replace(/^[\-\*\+] \[ \] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>'),t=t.replace(/^\d+\. (.*$)/gim,'<li data-list-type="ol" class="ml-6 text-catppuccin-text mb-1">$1</li>'),t=t.replace(/^[\-\*\+] (.*$)/gim,'<li data-list-type="ul" class="ml-6 text-catppuccin-text mb-1">$1</li>'),t=t.replace(/(<li data-list-type="ol"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ol"[^>]*>.*?<\/li>))*/g,n=>`<ol class="list-decimal my-4 pl-2">${n}</ol>`),t=t.replace(/(<li data-list-type="ul"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ul"[^>]*>.*?<\/li>))*/g,n=>`<ul class="list-disc my-4">${n}</ul>`),t=t.replace(/ data-list-type="[^"]+"/g,""),t}_transformParagraphs(t){const n=/^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;return t.split(`

`).map(s=>{const o=s.trim();if(o.length===0||o.startsWith("__CODEBLOCK_")||o.startsWith("__TABLE_")||o.startsWith("__DETAILS_")||o.startsWith("__HINT_"))return s;const r=s.split(`
`),i=[];let a=[];const c=()=>{if(a.length>0){const u=a.join("<br>");i.push(`<p class="text-catppuccin-text leading-relaxed mb-4">${u}</p>`),a=[]}};return r.forEach(u=>{const l=u.trim();l.length===0||n.test(l)||l.startsWith("__CODEBLOCK_")||l.startsWith("__TABLE_")||l.startsWith("__DETAILS_")||l.startsWith("__HINT_")?(c(),i.push(u)):a.push(u.trim())}),c(),i.join(`
`)}).join(`

`)}_restoreDetailsBlocks(t,n){for(let s=n.detailsBlocks.length-1;s>=0;s--){const o=n.detailsBlocks[s],r=this.parse(o.content),i=`<details class="my-4 border border-catppuccin-surface rounded overflow-hidden">
      <summary class="bg-catppuccin-crust px-3 sm:px-4 py-2 cursor-pointer text-catppuccin-text hover:bg-catppuccin-surface/30 transition-colors text-sm sm:text-base">
        ${this.inlineParser.process(o.title)}
      </summary>
      <div class="p-3 sm:p-4 bg-catppuccin-base/30 text-sm">${r}</div>
    </details>`;t=t.replaceAll(`__DETAILS_${s}__`,i)}return t}_restoreHintBlocks(t,n){const s={info:{bg:"bg-catppuccin-blue/10",border:"border-catppuccin-blue/50",icon:"i",title:"Info"},warning:{bg:"bg-catppuccin-yellow/10",border:"border-catppuccin-yellow/50",icon:"!",title:"Warning"},tip:{bg:"bg-catppuccin-green/10",border:"border-catppuccin-green/50",icon:"*",title:"Tip"},danger:{bg:"bg-catppuccin-red/10",border:"border-catppuccin-red/50",icon:"x",title:"Danger"},note:{bg:"bg-catppuccin-mauve/10",border:"border-catppuccin-mauve/50",icon:"#",title:"Note"}};return n.hintBlocks.forEach((o,r)=>{const i=s[o.type]||s.info,a=`<div class="my-4 ${i.bg} ${i.border} border-l-4 rounded-r px-3 sm:px-4 py-3">
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
      </div>`}_renderTable(t){const n=t[0],s=t.slice(2);let o='<div class="overflow-x-auto -mx-2 sm:mx-0 my-4"><table class="w-full text-sm border-collapse min-w-[400px]">';const r=n.split("|").filter(i=>i.trim());return o+="<thead><tr>",r.forEach(i=>{o+=`<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${i.trim()}</th>`}),o+="</tr></thead>",o+="<tbody>",s.forEach(i=>{if(i.trim()&&!/^\|[\s\-:|]+\|$/.test(i)){const a=i.split("|").filter(c=>c.trim());o+="<tr>",a.forEach(c=>{o+=`<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${c.trim()}</td>`}),o+="</tr>"}}),o+="</tbody></table></div>",o}_slugify(t){return t.toLowerCase().replace(/<[^>]*>/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}}const Ra=new Vf;class Wf{highlightAll(){window.Prism&&(Prism.highlightAll(),document.querySelectorAll('pre[class*="language-"]').forEach(t=>{t.className=t.className.replace(/language-\S+/g,"").trim()}))}highlightAfterDelay(t=100){setTimeout(()=>this.highlightAll(),t)}}const cs=new Wf,Uf=["src","alt"],Vr=1,Gf=4,qf={__name:"ImageLightbox",props:{src:{type:String,default:null},alt:{type:String,default:""}},emits:["close"],setup(e,{emit:t}){const n=e,s=t,o=ce(1),r=ce(0),i=ce(0);let a=!1,c=0,u=1,l=0,d=0,p=0,g=0,v=0;const y=se(()=>({transform:`translate(${r.value}px, ${i.value}px) scale(${o.value})`,transition:a?"none":"transform 0.2s ease"})),T=()=>{o.value=1,r.value=0,i.value=0},E=()=>{T(),s("close")},$=B=>{const X=B[0].clientX-B[1].clientX,F=B[0].clientY-B[1].clientY;return Math.hypot(X,F)},j=B=>{if(B.touches.length===2)a=!0,c=$(B.touches),u=o.value;else if(B.touches.length===1){const X=Date.now();if(X-v<300){o.value>1?T():o.value=2,v=0;return}v=X,p=B.touches[0].clientX,g=B.touches[0].clientY,l=r.value,d=i.value}},M=B=>{if(B.touches.length===2){B.preventDefault();const X=$(B.touches),F=u*X/c;o.value=Math.min(Gf,Math.max(Vr,F))}else B.touches.length===1&&o.value>1&&(B.preventDefault(),r.value=l+(B.touches[0].clientX-p),i.value=d+(B.touches[0].clientY-g))},z=B=>{B.touches.length===0&&(a=!1,o.value<=Vr&&T())},J=B=>{B.key==="Escape"&&n.src&&E()};return vt(()=>n.src,T),tt(()=>window.addEventListener("keydown",J)),wo(()=>window.removeEventListener("keydown",J)),(B,X)=>(C(),Ot(Ac,{to:"body"},[G(Bn,{name:"lightbox-fade"},{default:Ue(()=>[e.src?(C(),A("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#000000] p-0 sm:bg-[#11111b]/80 sm:backdrop-blur-sm sm:p-4 cursor-zoom-out",onClick:E},[h("button",{type:"button",class:"absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-catppuccin-surface/60 bg-catppuccin-base/40 text-2xl leading-none font-light text-catppuccin-subtle hover:text-catppuccin-text hover:border-catppuccin-mauve/40 transition-colors","aria-label":"Close image",onClick:E}," × "),h("img",{src:e.src,alt:e.alt,style:xe(y.value),class:"max-w-full max-h-screen sm:max-h-[90vh] object-contain rounded-none sm:rounded-md shadow-2xl cursor-default touch-none select-none",onClick:X[0]||(X[0]=Eo(()=>{},["stop"])),onTouchstart:j,onTouchmove:M,onTouchend:z},null,44,Uf)])):ge("",!0)]),_:1})]))}},Da=ze(qf,[["__scopeId","data-v-cfdbb40c"]]),Kf={class:"mb-8"},Yf={class:"text-catppuccin-subtle text-sm mb-2"},zf={class:"text-3xl md:text-4xl font-bold text-catppuccin-mauve mb-3"},Jf={class:"flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-catppuccin-subtle mb-4"},Qf={class:"flex flex-wrap gap-2"},Zf={key:0,class:"mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"},Xf={class:"space-y-3"},eh=["for"],th=["id","onUpdate:modelValue","placeholder"],nh=["innerHTML"],sh={__name:"PostComponent",props:{post:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=se(()=>n.post.readingTime||1),i=ce({}),a=se(()=>as.extractVariables(n.post.content)),c=se(()=>as.substitute(n.post.content,i.value)),u=v=>Ra.parse(v),l=ce(null),d=ce(""),p=v=>{const y=v.target.closest("img");y&&(l.value=y.currentSrc||y.src,d.value=y.alt||"")},g=()=>{l.value=null,d.value=""};return tt(()=>{cs.highlightAfterDelay(100)}),vt(i,()=>{gs(()=>{cs.highlightAll()})},{deep:!0}),(v,y)=>(C(),A("div",null,[h("div",Kf,[h("div",Yf," ~$ cat "+U(e.post.slug)+".md ",1),h("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all mb-6 inline-flex items-center gap-1.5 group"},[...y[0]||(y[0]=[h("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),h("span",{class:"text-catppuccin-mauve font-medium"},"~/posts",-1)])]),h("h1",zf,U(e.post.title),1),h("div",Jf,[h("span",null,U(e.post.date),1),y[1]||(y[1]=h("span",{class:"hidden sm:inline text-catppuccin-surface"},"•",-1)),h("span",null,"~"+U(r.value)+" min read",1),y[2]||(y[2]=h("span",{class:"hidden sm:inline text-catppuccin-surface"},"•",-1)),h("div",Qf,[(C(!0),A(Z,null,ke(e.post.tags,T=>(C(),A("span",{key:T,class:"text-catppuccin-gray"}," #"+U(T),1))),128))])])]),a.value.length>0?(C(),A("div",Zf,[y[3]||(y[3]=h("div",{class:"text-sm text-catppuccin-subtle mb-3"}," ~$ configure variables ",-1)),h("div",Xf,[(C(!0),A(Z,null,ke(a.value,T=>(C(),A("div",{key:T,class:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"},[h("label",{for:`var-${T}`,class:"text-sm text-catppuccin-text sm:min-w-[120px]"},U(T)+": ",9,eh),wi(h("input",{id:`var-${T}`,"onUpdate:modelValue":E=>i.value[T]=E,type:"text",placeholder:T,class:"flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"},null,8,th),[[fa,i.value[T]]])]))),128))])])):ge("",!0),h("article",{class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2 mb-8 overflow-hidden",onClick:p},[h("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:u(c.value)},null,8,nh)]),h("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},[...y[4]||(y[4]=[h("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),h("span",{class:"text-catppuccin-mauve font-medium"},"~/posts",-1)])]),G(Da,{src:l.value,alt:d.value,onClose:g},null,8,["src","alt"])]))}},oh=ze(sh,[["__scopeId","data-v-077ea2ea"]]),rh={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},ih={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-14 md:pb-2"},ah={key:"list"},ch={class:"mb-12"},lh={class:"flex items-center gap-4 text-sm mb-6"},uh={key:"post"},dh={__name:"Posts",setup(e){const t=ce("list"),n=ce(null),s=ce(null),o=ce([]),r=ce([]),i=Do(),a=un(),c=se(()=>s.value?o.value.filter(g=>g.tags.includes(s.value)):o.value),u=()=>{o.value=$o(),r.value=vf()},l=g=>{if(n.value=bf(g),n.value)t.value="post",window.scrollTo({top:0,behavior:"instant"}),i.query.post!==g&&a.replace({name:"Posts",query:{...i.query,post:g}});else if(i.query.post){const v={...i.query};delete v.post,a.replace({name:"Posts",query:v})}},d=({skipQueryUpdate:g=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!g&&"post"in i.query){const v={...i.query};delete v.post,a.replace({name:"Posts",query:v})}},p=g=>{s.value=s.value===g?null:g};return tt(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(y){const T=y.trigger,E=T.textContent;T.textContent="copied!",T.classList.add("text-catppuccin-green"),setTimeout(()=>{T.textContent=E,T.classList.remove("text-catppuccin-green")},2e3),y.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const v=i.query.post;v&&l(v)}),Ln(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),vt(()=>i.query.post,(g,v)=>{g&&g!==v?l(g):!g&&t.value==="post"&&d({skipQueryUpdate:!0})}),(g,v)=>{const y=Nn("router-link");return C(),A("div",rh,[h("div",ih,[G(Bn,{name:"fade",mode:"out-in"},{default:Ue(()=>[t.value==="list"?(C(),A("div",ah,[h("div",ch,[v[1]||(v[1]=h("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ cd ~/posts ",-1)),h("div",lh,[G(y,{to:"/",class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},{default:Ue(()=>[...v[0]||(v[0]=[h("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),h("span",{class:"text-catppuccin-mauve font-medium"},"~/",-1),h("span",{class:"text-catppuccin-subtle font-medium"},"(home)",-1)])]),_:1})]),v[2]||(v[2]=h("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[h("span",{class:"text-catppuccin-mauve"},"Posts")],-1)),v[3]||(v[3]=h("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," My thoughts, tutorials, and experiences on various topics including web development, programming, and technology. ",-1)),G(Pa,{tags:r.value,"selected-tag":s.value,onToggleTag:p},null,8,["tags","selected-tag"])]),G(Bf,{posts:c.value,"selected-tag":s.value,onOpenPost:l,onSelectTag:p},null,8,["posts","selected-tag"]),G(qt)])):t.value==="post"&&n.value?(C(),A("div",uh,[G(oh,{post:n.value,onGoBack:d},null,8,["post"]),G(qt)])):ge("",!0)]),_:1})])])}}},ph=ze(dh,[["__scopeId","data-v-43b1650d"]]),fh={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2"},hh={class:"text-catppuccin-subtle text-sm mb-3"},mh={key:0,class:"text-catppuccin-mauve"},gh={key:0,class:"text-sm text-catppuccin-subtle"},bh={key:1,class:"grid gap-4 sm:grid-cols-2"},vh=["onClick"],yh={key:0,class:"w-full h-32 sm:h-40 overflow-hidden bg-catppuccin-surface/30"},xh=["src","alt"],wh={class:"px-3 sm:px-4 py-3"},_h={class:"flex items-start gap-2 mb-2"},kh={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed line-clamp-2"},Ch={class:"flex items-center gap-2 flex-wrap"},Sh=["onClick"],Ah={key:0,class:"text-xs text-catppuccin-subtle"},Th={__name:"ProjectList",props:{projects:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-project","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-project",o)};return(o,r)=>(C(),A("div",fh,[h("div",hh,[r[0]||(r[0]=Ae(" ~$ ls -la projects/ ",-1)),e.selectedTag?(C(),A("span",mh,'| grep "'+U(e.selectedTag)+'"',1)):ge("",!0)]),e.projects.length?(C(),A("div",bh,[(C(!0),A(Z,null,ke(e.projects,i=>(C(),A("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all cursor-pointer overflow-hidden",style:xe({borderColor:`${i.accentColorHex}40`})},[i.coverImage?(C(),A("div",yh,[h("img",{src:i.coverImage,alt:i.title,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,xh)])):ge("",!0),h("div",wh,[h("div",_h,[h("span",{class:"text-sm transition-colors",style:xe({color:i.accentColorHex})},">",4),h("h2",{class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors",style:xe({"--hover-color":i.accentColorHex})},U(i.title),5)]),h("p",kh,U(i.description),1),h("div",Ch,[(C(!0),A(Z,null,ke(i.tags.slice(0,3),a=>(C(),A("span",{key:a,onClick:Eo(c=>n("select-tag",a),["stop"]),class:"px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:text-catppuccin-mauve cursor-pointer transition-colors",style:xe({"--hover-bg":`${i.accentColorHex}20`})}," #"+U(a),13,Sh))),128)),i.tags.length>3?(C(),A("span",Ah," +"+U(i.tags.length-3),1)):ge("",!0),h("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm",style:xe({"--hover-color":i.accentColorHex})}," view → ",4)])])],12,vh))),128))])):(C(),A("div",gh," no projects found "))]))}},Eh=ze(Th,[["__scopeId","data-v-907e807e"]]),Ph={class:"mb-8"},Rh={class:"text-catppuccin-subtle text-sm mb-2"},Dh=["src","alt"],Ih={class:"flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-catppuccin-subtle mb-4"},$h={class:"flex flex-wrap gap-2"},Oh={class:"flex flex-wrap gap-3 mb-6"},Mh=["href"],Lh=["href"],Nh={key:0,class:"mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"},jh={class:"space-y-3"},Bh=["for"],Fh=["id","onUpdate:modelValue","placeholder"],Hh=["innerHTML"],Vh={__name:"ProjectComponent",props:{project:{type:Object,required:!0},sectioned:{type:Boolean,default:!1}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=ce({}),i=se(()=>as.extractVariables(n.project.content)),a=se(()=>as.substitute(n.project.content,r.value)),c=u=>{const l=Ra.parse(u);return n.sectioned?l.split(/(?=<h2\b)/i).filter(d=>d.trim()).map(d=>`<section class="project-markdown-section">${d}</section>`).join(""):l};return tt(()=>{cs.highlightAfterDelay(100)}),vt(r,()=>{gs(()=>{cs.highlightAll()})},{deep:!0}),(u,l)=>(C(),A("div",{style:xe({"--accent-color":e.project.accentColorHex})},[h("div",Ph,[h("div",Rh," ~$ cat "+U(e.project.slug)+".md ",1),h("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all mb-6 inline-flex items-center gap-1.5 group"},[...l[0]||(l[0]=[h("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),h("span",{class:"text-catppuccin-mauve font-medium"},"~/projects",-1)])]),e.project.coverImage?(C(),A("div",{key:0,class:"w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-6 border",style:xe({borderColor:`${e.project.accentColorHex}40`})},[h("img",{src:e.project.coverImage,alt:e.project.title,class:"w-full h-full object-cover"},null,8,Dh)],4)):ge("",!0),h("h1",{class:"text-3xl md:text-4xl font-bold mb-3",style:xe({color:e.project.accentColorHex})},U(e.project.title),5),h("div",Ih,[h("span",{class:yt(["px-2 py-0.5 rounded text-xs capitalize",{"bg-catppuccin-green/20 text-catppuccin-green":e.project.status==="active","bg-catppuccin-yellow/20 text-catppuccin-yellow":e.project.status==="in-progress","bg-catppuccin-red/20 text-catppuccin-red":e.project.status==="archived","bg-catppuccin-blue/20 text-catppuccin-blue":e.project.status==="beta","bg-catppuccin-peach/20 text-catppuccin-peach":e.project.status==="stale"}])},U(e.project.status),3),h("div",$h,[(C(!0),A(Z,null,ke(e.project.tags,d=>(C(),A("span",{key:d,class:"text-catppuccin-gray"}," #"+U(d),1))),128))])]),h("div",Oh,[e.project.url?(C(),A("a",{key:0,href:e.project.url,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-3 py-1.5 rounded border text-sm transition-colors hover:bg-catppuccin-surface/30",style:xe({borderColor:`${e.project.accentColorHex}60`,color:e.project.accentColorHex})},[...l[1]||(l[1]=[h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[h("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1),Ae(" Live Site ",-1)])],12,Mh)):ge("",!0),e.project.github?(C(),A("a",{key:1,href:e.project.github,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-3 py-1.5 rounded border border-catppuccin-surface/60 text-sm text-catppuccin-subtle transition-colors hover:bg-catppuccin-surface/30 hover:text-catppuccin-text"},[...l[2]||(l[2]=[h("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24"},[h("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1),Ae(" GitHub ",-1)])],8,Lh)):ge("",!0)])]),i.value.length>0?(C(),A("div",Nh,[l[3]||(l[3]=h("div",{class:"text-sm text-catppuccin-subtle mb-3"}," ~$ configure variables ",-1)),h("div",jh,[(C(!0),A(Z,null,ke(i.value,d=>(C(),A("div",{key:d,class:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"},[h("label",{for:`var-${d}`,class:"text-sm text-catppuccin-text sm:min-w-[120px]"},U(d)+": ",9,Bh),wi(h("input",{id:`var-${d}`,"onUpdate:modelValue":p=>r.value[d]=p,type:"text",placeholder:d,class:"flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"},null,8,Fh),[[fa,r.value[d]]])]))),128))])])):ge("",!0),h("article",{class:yt(["mb-8 overflow-hidden",n.sectioned?"sectioned-article":"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2"])},[h("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:c(a.value)},null,8,Hh)],2),Bc(u.$slots,"default",{},void 0),h("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},[...l[4]||(l[4]=[h("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),h("span",{class:"text-catppuccin-mauve font-medium"},"~/projects",-1)])])],4))}},Ia=ze(Vh,[["__scopeId","data-v-d327634b"]]),Wh={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},Uh={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-14 md:pb-2"},Gh={key:"list"},qh={class:"mb-12"},Kh={class:"flex items-center gap-4 text-sm mb-6"},Yh={key:"project"},zh={__name:"Projects",setup(e){const t=ce("list"),n=ce(null),s=ce(null),o=ce([]),r=ce([]),i=Do(),a=un(),c=se(()=>s.value?o.value.filter(g=>g.tags.includes(s.value)):o.value),u=()=>{o.value=Cs(),r.value=fp()},l=g=>{if(g==="kitsudo"){a.push({name:"Kitsudo"});return}if(n.value=Ta(g),n.value)t.value="project",window.scrollTo({top:0,behavior:"instant"}),i.query.project!==g&&a.replace({name:"Projects",query:{...i.query,project:g}});else if(i.query.project){const v={...i.query};delete v.project,a.replace({name:"Projects",query:v})}},d=({skipQueryUpdate:g=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!g&&"project"in i.query){const v={...i.query};delete v.project,a.replace({name:"Projects",query:v})}},p=g=>{s.value=s.value===g?null:g};return tt(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(y){const T=y.trigger,E=T.textContent;T.textContent="copied!",T.classList.add("text-catppuccin-green"),setTimeout(()=>{T.textContent=E,T.classList.remove("text-catppuccin-green")},2e3),y.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const v=i.query.project;v&&l(v)}),Ln(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),vt(()=>i.query.project,(g,v)=>{g&&g!==v?l(g):!g&&t.value==="project"&&d({skipQueryUpdate:!0})}),(g,v)=>{const y=Nn("router-link");return C(),A("div",Wh,[h("div",Uh,[G(Bn,{name:"fade",mode:"out-in"},{default:Ue(()=>[t.value==="list"?(C(),A("div",Gh,[h("div",qh,[v[1]||(v[1]=h("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ cd ~/projects ",-1)),h("div",Kh,[G(y,{to:"/",class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},{default:Ue(()=>[...v[0]||(v[0]=[h("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),h("span",{class:"text-catppuccin-mauve font-medium"},"~/",-1),h("span",{class:"text-catppuccin-subtle font-medium"},"(home)",-1)])]),_:1})]),v[2]||(v[2]=h("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[h("span",{class:"text-catppuccin-mauve"},"Projects")],-1)),v[3]||(v[3]=h("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," A collection of projects I've worked on, ranging from web applications to plugins and tools. ",-1)),G(Pa,{tags:r.value,"selected-tag":s.value,onToggleTag:p},null,8,["tags","selected-tag"])]),G(Eh,{projects:c.value,"selected-tag":s.value,onOpenProject:l,onSelectTag:p},null,8,["projects","selected-tag"]),G(qt)])):t.value==="project"&&n.value?(C(),A("div",Yh,[G(Ia,{project:n.value,sectioned:!0,onGoBack:d},null,8,["project"]),G(qt)])):ge("",!0)]),_:1})])])}}},Jh=ze(zh,[["__scopeId","data-v-d81c3061"]]),Qh={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},Zh={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-14 md:pb-2"},Xh={class:"mb-8"},em={class:"section-sidebar mb-10","aria-labelledby":"screenshots"},tm={class:"grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"},nm=["aria-label","onClick"],sm=["src","alt"],om={class:"mt-2 text-xs text-catppuccin-subtle"},rm={class:"section-sidebar mb-10","aria-labelledby":"wear-os-companion"},im={class:"grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"},am=["aria-label","onClick"],cm=["src","alt"],lm={class:"mt-2 text-xs text-catppuccin-subtle"},um={__name:"Kitsudo",setup(e){const t=un(),n=Ta("kitsudo"),s=[{src:"/kitsudo/screenshots/home.jpg",label:"Today"},{src:"/kitsudo/screenshots/details.jpg",label:"Task details"},{src:"/kitsudo/screenshots/subtask.jpg",label:"Subtasks"},{src:"/kitsudo/screenshots/themes.jpg",label:"Themes"}],o=[{src:"/kitsudo/screenshots/wear-home.png",label:"Task list"},{src:"/kitsudo/screenshots/wear-details.png",label:"Task details"},{src:"/kitsudo/screenshots/wear-widget.png",label:"Watch tile"}],r=()=>t.push("/projects"),i=ce(null),a=ce(""),c=(l,d)=>{i.value=l,a.value=d},u=()=>{i.value=null,a.value=""};return(l,d)=>(C(),A("div",Qh,[h("div",Zh,[G(Ia,{project:De(n),sectioned:!0,onGoBack:r},{default:Ue(()=>[h("div",Xh,[h("section",em,[d[0]||(d[0]=h("h2",{id:"screenshots",class:"group text-xl font-semibold text-catppuccin-mauve mb-4"},[Ae(" Screenshots"),h("a",{href:"#screenshots",class:"ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve","aria-label":"Link to Screenshots section"},"#")],-1)),d[1]||(d[1]=h("p",{class:"text-catppuccin-text leading-relaxed mb-5"}," The Android app keeps the task list compact while leaving the details, subtasks, and appearance settings close at hand. ",-1)),h("div",tm,[(C(),A(Z,null,ke(s,p=>h("figure",{key:p.src},[h("button",{type:"button",class:"block w-full rounded-md overflow-hidden border border-catppuccin-surface/60 bg-catppuccin-base/30 p-1.5 cursor-zoom-in","aria-label":`Open ${p.label} screenshot`,onClick:g=>c(p.src,`Kitsudo ${p.label} screen`)},[h("img",{src:p.src,alt:`Kitsudo ${p.label} screen`,class:"block w-full rounded",loading:"lazy"},null,8,sm)],8,nm),h("figcaption",om," ./"+U(p.label.toLowerCase().replace(" ","-")),1)])),64))])]),h("section",rm,[d[2]||(d[2]=h("h2",{id:"wear-os-companion",class:"group text-xl font-semibold text-catppuccin-mauve mb-4"},[Ae(" Wear OS companion"),h("a",{href:"#wear-os-companion",class:"ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve","aria-label":"Link to Wear OS companion section"},"#")],-1)),d[3]||(d[3]=h("p",{class:"text-catppuccin-text leading-relaxed mb-5"}," Check today's tasks, complete them, and open task details from your wrist. Phone and watch sync directly without an account. ",-1)),h("div",im,[(C(),A(Z,null,ke(o,p=>h("figure",{key:p.src},[h("button",{type:"button",class:"block w-full rounded-md overflow-hidden border border-catppuccin-surface/60 bg-catppuccin-base/30 p-1.5 cursor-zoom-in","aria-label":`Open Wear OS ${p.label} screenshot`,onClick:g=>c(p.src,`Kitsudo Wear OS ${p.label}`)},[h("img",{src:p.src,alt:`Kitsudo Wear OS ${p.label}`,class:"block w-full rounded-[28%]",loading:"lazy"},null,8,cm)],8,am),h("figcaption",lm," ./"+U(p.label.toLowerCase().replace(" ","-")),1)])),64))])]),d[4]||(d[4]=h("section",{class:"download-card","aria-labelledby":"download-heading"},[h("div",{class:"relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 drop-shadow-[0_8px_6px_rgba(0,0,0,0.35)]",role:"img","aria-label":"Kitsudo app icon"},[h("svg",{viewBox:"0 0 100 100",class:"absolute inset-0 w-full h-full","aria-hidden":"true"},[h("defs",null,[h("filter",{id:"kitsudoIconBevel",x:"-20%",y:"-20%",width:"140%",height:"140%"},[h("feOffset",{in:"SourceAlpha",dx:"0",dy:"1.5",result:"downA"}),h("feGaussianBlur",{in:"downA",stdDeviation:"0.8",result:"downB"}),h("feComposite",{in:"SourceAlpha",in2:"downB",operator:"out",result:"topEdge"}),h("feFlood",{"flood-color":"#ffffff","flood-opacity":"0.2"}),h("feComposite",{in2:"topEdge",operator:"in",result:"topShine"}),h("feOffset",{in:"SourceAlpha",dx:"0",dy:"-1.5",result:"upA"}),h("feGaussianBlur",{in:"upA",stdDeviation:"1.2",result:"upB"}),h("feComposite",{in:"SourceAlpha",in2:"upB",operator:"out",result:"bottomEdge"}),h("feFlood",{"flood-color":"#000000","flood-opacity":"0.35"}),h("feComposite",{in2:"bottomEdge",operator:"in",result:"bottomShade"}),h("feMerge",null,[h("feMergeNode",{in:"SourceGraphic"}),h("feMergeNode",{in:"topShine"}),h("feMergeNode",{in:"bottomShade"})])])]),h("path",{d:"M50,0 C13,0 0,13 0,50 C0,87 13,100 50,100 C87,100 100,87 100,50 C100,13 87,0 50,0 Z",fill:"#24284b",filter:"url(#kitsudoIconBevel)"})]),h("img",{src:Aa,alt:"",class:"absolute inset-[8%] w-auto h-auto object-contain"})]),h("div",{class:"flex-1 min-w-[180px]"},[h("div",{class:"text-xs text-catppuccin-subtle mb-1"}," ~$ wget kitsudo.apk "),h("h2",{id:"download-heading",class:"text-lg sm:text-xl font-bold text-catppuccin-text mb-1"}," Ready when you are. "),h("p",{class:"text-xs sm:text-sm text-catppuccin-gray"}," Free, open-source, and built without ads or tracking. ")]),h("div",{class:"flex flex-wrap gap-3"},[h("a",{href:"https://play.google.com/store/apps/details?id=dev.heckr.kitsudo",target:"_blank",rel:"noopener noreferrer",class:"download-primary"}," [ Google Play ] "),h("a",{href:"https://github.com/hecker-01/Kitsudo/releases/latest",target:"_blank",rel:"noopener noreferrer",class:"download-secondary"}," [ Latest APK ] ")])],-1))])]),_:1},8,["project"]),G(Da,{src:i.value,alt:a.value,onClose:u},null,8,["src","alt"]),G(qt)])]))}},dm=ze(um,[["__scopeId","data-v-5927a8e6"]]),pm={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},fm={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16"},hm={class:"mb-8"},mm={class:"text-catppuccin-subtle text-sm mb-4"},gm={class:"border-l-2 border-catppuccin-surface pl-4"},bm={class:"text-catppuccin-red text-sm"},vm={class:"text-catppuccin-mauve"},ym={__name:"NotFound",setup(e){const t=Do(),n=un(),s=se(()=>(t.fullPath||t.path||"/").replace(/^\//,"")||"."),o=()=>n.push("/");return console.log("❤️ ffuffix, my #1 bunny"),(r,i)=>(C(),A("div",pm,[h("div",fm,[h("div",hm,[h("div",mm," ~$ cd ~/"+U(s.value),1),h("div",{class:"flex items-center gap-4 text-sm mb-6"},[h("button",{onClick:o,class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},[...i[0]||(i[0]=[h("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),h("span",{class:"text-catppuccin-mauve font-medium"},"~/",-1),h("span",{class:"text-catppuccin-subtle font-medium"},"(home)",-1)])])])]),h("div",gm,[h("div",bm,[i[1]||(i[1]=Ae(" cd: no such file or directory: /",-1)),h("span",vm,U(s.value),1)]),i[2]||(i[2]=h("div",{class:"mt-3 text-xs text-catppuccin-subtle"},[h("span",{class:"text-catppuccin-mauve","aria-hidden":"true"},"U*꓃*U"),h("span",{class:"ml-2"},"the bunny scoured its burrow but couldnt find anything")],-1))])]),G(qt)]))}},xm=[{path:"/",name:"Home",component:rf,meta:{title:"Home | heckr.dev"}},{path:"/posts",name:"Posts",component:ph,meta:{title:"Posts | heckr.dev"}},{path:"/projects",name:"Projects",component:Jh,meta:{title:"Projects | heckr.dev"}},{path:"/kitsudo",name:"Kitsudo",component:dm,meta:{title:"Kitsudo | heckr.dev"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:ym,meta:{title:"404 Not Found | heckr.dev"}}],$a=fd({history:Gu(),routes:xm,scrollBehavior(e,t,n){return n||{top:0}}});$a.beforeEach((e,t,n)=>{document.title=e.meta.title||"heckr.dev",n()});let mn=0;const Wr=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],wm=()=>{console.log("%cWelcome to heckr.dev","font-size: 20px; font-weight: bold; color: #cba6f7;"),console.log("%cWelcome to the dev console, here are some commands to try:","font-size: 14px; color: #a6adc8;"),console.log(`%c- help() - show available commands
- about() - learn more about me
- skills() - view my tech stack
- contact() - get my contact info`,"font-size: 12px; color: #6c7086;"),window.help=()=>{console.log("%cAvailable commands:","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%c- help() - show this message
- about() - about the developer
- skills() - technical skills
- contact() - contact information
- secret() - ???
`,"font-size: 12px; color: #a6adc8;")},window.about=()=>{console.log("%cAbout me","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cA passionate developer who loves building cool things with code!
Check out my projects and posts on the site.`,"font-size: 12px; color: #a6adc8;")},window.skills=async()=>{console.log("%cTech stack","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log("%cFetching...","font-size: 12px; color: #6c7086;");try{const{languages:e,totalRepos:t}=await Ea();e.length>0?(console.log("%cTop languages from "+t+" repositories found:","font-size: 14px; font-weight: bold; color: #a6adc8;"),e.slice(0,10).forEach(({language:n,count:s},o)=>{console.log(`%c${o+1}. ${n}: ${s} repos`,"font-size: 12px; color: #a6adc8;")})):console.log("%cUnable to fetch data, please try again later.","font-size: 12px; color: #f38ba8;")}catch{console.log("%cError loading data, please try again later.","font-size: 12px; color: #f38ba8;")}},window.contact=()=>{console.log("%cContact info","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cGitHub: https://github.com/hecker-01
Feel free to reach out!`,"font-size: 12px; color: #a6adc8;")},window.secret=()=>{console.log("%cYou found the secret command","font-size: 18px; font-weight: bold; color: #f9e2af;"),console.log("%cHere's a hint: ↑ ↑ ↓ ↓ ← → ← → B A","font-size: 12px; color: #fab387;")},document.addEventListener("keydown",e=>{e.code===Wr[mn]?(mn++,mn===Wr.length&&(_m(),mn=0)):mn=0})},_m=()=>{if(console.log("%cKONAMI CODE ACTIVATED!","font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;"),document.body.style.animation="rainbow-border 2s linear infinite",!document.getElementById("konami-style")){const e=document.createElement("style");e.id="konami-style",e.textContent=`
      @keyframes rainbow-border {
        0% { box-shadow: inset 0 0 0 3px #f38ba8; }
        16% { box-shadow: inset 0 0 0 3px #fab387; }
        33% { box-shadow: inset 0 0 0 3px #f9e2af; }
        50% { box-shadow: inset 0 0 0 3px #a6e3a1; }
        66% { box-shadow: inset 0 0 0 3px #89dceb; }
        83% { box-shadow: inset 0 0 0 3px #89b4fa; }
        100% { box-shadow: inset 0 0 0 3px #cba6f7; }
      }
    `,document.head.appendChild(e)}setTimeout(()=>{document.body.style.animation=""},5e3)};ru(hd).use($a).mount("#app");document.addEventListener("dragstart",e=>{e.target instanceof HTMLImageElement&&e.preventDefault()});wm();
