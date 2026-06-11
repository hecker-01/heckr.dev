(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function io(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const fe={},Zt=[],lt=()=>{},Ur=()=>!1,cs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ao=e=>e.startsWith("onUpdate:"),_e=Object.assign,co=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pa=Object.prototype.hasOwnProperty,le=(e,t)=>Pa.call(e,t),q=Array.isArray,Xt=e=>ls(e)==="[object Map]",Gr=e=>ls(e)==="[object Set]",z=e=>typeof e=="function",ve=e=>typeof e=="string",Ot=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",qr=e=>(ge(e)||z(e))&&z(e.then)&&z(e.catch),Kr=Object.prototype.toString,ls=e=>Kr.call(e),Ra=e=>ls(e).slice(8,-1),Yr=e=>ls(e)==="[object Object]",lo=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mn=io(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),us=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Da=/-\w/g,Ke=us(e=>e.replace(Da,t=>t.slice(1).toUpperCase())),Ia=/\B([A-Z])/g,Gt=us(e=>e.replace(Ia,"-$1").toLowerCase()),ds=us(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ss=us(e=>e?`on${ds(e)}`:""),Rt=(e,t)=>!Object.is(e,t),Gn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},zr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},uo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Oa=e=>{const t=ve(e)?Number(e):NaN;return isNaN(t)?e:t};let No;const ps=()=>No||(No=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function we(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=ve(s)?Na(s):we(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(ve(e)||ge(e))return e}const $a=/;(?![^(]*\))/g,Ma=/:([^]+)/,La=/\/\*[^]*?\*\//g;function Na(e){const t={};return e.replace(La,"").split($a).forEach(n=>{if(n){const s=n.split(Ma);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function $t(e){let t="";if(ve(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const s=$t(e[n]);s&&(t+=s+" ")}else if(ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ja="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ba=io(ja);function Jr(e){return!!e||e===""}const Qr=e=>!!(e&&e.__v_isRef===!0),G=e=>ve(e)?e:e==null?"":q(e)||ge(e)&&(e.toString===Kr||!z(e.toString))?Qr(e)?G(e.value):JSON.stringify(e,Zr,2):String(e),Zr=(e,t)=>Qr(t)?Zr(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[As(s,r)+" =>"]=o,n),{})}:Gr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>As(n))}:Ot(t)?As(t):ge(t)&&!q(t)&&!Yr(t)?String(t):t,As=(e,t="")=>{var n;return Ot(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Fe;class Fa{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Fe,!t&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Fe;try{return Fe=this,t()}finally{Fe=n}}}on(){++this._on===1&&(this.prevScope=Fe,Fe=this)}off(){this._on>0&&--this._on===0&&(Fe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Ha(){return Fe}let me;const Ts=new WeakSet;class Xr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Fe&&Fe.active&&Fe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ts.has(this)&&(Ts.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ti(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jo(this),ni(this);const t=me,n=ze;me=this,ze=!0;try{return this.fn()}finally{si(this),me=t,ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ho(t);this.deps=this.depsTail=void 0,jo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ts.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vs(this)&&this.run()}get dirty(){return Vs(this)}}let ei=0,gn,bn;function ti(e,t=!1){if(e.flags|=8,t){e.next=bn,bn=e;return}e.next=gn,gn=e}function po(){ei++}function fo(){if(--ei>0)return;if(bn){let t=bn;for(bn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;gn;){let t=gn;for(gn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function ni(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function si(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),ho(s),Va(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Vs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(oi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function oi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Cn)||(e.globalVersion=Cn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Vs(e))))return;e.flags|=2;const t=e.dep,n=me,s=ze;me=e,ze=!0;try{ni(e);const o=e.fn(e._value);(t.version===0||Rt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{me=n,ze=s,si(e),e.flags&=-3}}function ho(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ho(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Va(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ze=!0;const ri=[];function bt(){ri.push(ze),ze=!1}function vt(){const e=ri.pop();ze=e===void 0?!0:e}function jo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=me;me=void 0;try{t()}finally{me=n}}}let Cn=0;class Wa{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!me||!ze||me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==me)n=this.activeLink=new Wa(me,this),me.deps?(n.prevDep=me.depsTail,me.depsTail.nextDep=n,me.depsTail=n):me.deps=me.depsTail=n,ii(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=me.depsTail,n.nextDep=void 0,me.depsTail.nextDep=n,me.depsTail=n,me.deps===n&&(me.deps=s)}return n}trigger(t){this.version++,Cn++,this.notify(t)}notify(t){po();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fo()}}}function ii(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)ii(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ws=new WeakMap,Vt=Symbol(""),Us=Symbol(""),Sn=Symbol("");function Te(e,t,n){if(ze&&me){let s=Ws.get(e);s||Ws.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new mo),o.map=s,o.key=n),o.track()}}function mt(e,t,n,s,o,r){const i=Ws.get(e);if(!i){Cn++;return}const a=c=>{c&&c.trigger()};if(po(),t==="clear")i.forEach(a);else{const c=q(e),u=c&&lo(n);if(c&&n==="length"){const l=Number(s);i.forEach((d,f)=>{(f==="length"||f===Sn||!Ot(f)&&f>=l)&&a(d)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(Sn)),t){case"add":c?u&&a(i.get("length")):(a(i.get(Vt)),Xt(e)&&a(i.get(Us)));break;case"delete":c||(a(i.get(Vt)),Xt(e)&&a(i.get(Us)));break;case"set":Xt(e)&&a(i.get(Vt));break}}fo()}function Yt(e){const t=oe(e);return t===e?t:(Te(t,"iterate",Sn),qe(e)?t:t.map(Qe))}function fs(e){return Te(e=oe(e),"iterate",Sn),e}function At(e,t){return yt(e)?nn(Wt(e)?Qe(t):t):Qe(t)}const Ua={__proto__:null,[Symbol.iterator](){return Es(this,Symbol.iterator,e=>At(this,e))},concat(...e){return Yt(this).concat(...e.map(t=>q(t)?Yt(t):t))},entries(){return Es(this,"entries",e=>(e[1]=At(this,e[1]),e))},every(e,t){return dt(this,"every",e,t,void 0,arguments)},filter(e,t){return dt(this,"filter",e,t,n=>n.map(s=>At(this,s)),arguments)},find(e,t){return dt(this,"find",e,t,n=>At(this,n),arguments)},findIndex(e,t){return dt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return dt(this,"findLast",e,t,n=>At(this,n),arguments)},findLastIndex(e,t){return dt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return dt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ps(this,"includes",e)},indexOf(...e){return Ps(this,"indexOf",e)},join(e){return Yt(this).join(e)},lastIndexOf(...e){return Ps(this,"lastIndexOf",e)},map(e,t){return dt(this,"map",e,t,void 0,arguments)},pop(){return un(this,"pop")},push(...e){return un(this,"push",e)},reduce(e,...t){return Bo(this,"reduce",e,t)},reduceRight(e,...t){return Bo(this,"reduceRight",e,t)},shift(){return un(this,"shift")},some(e,t){return dt(this,"some",e,t,void 0,arguments)},splice(...e){return un(this,"splice",e)},toReversed(){return Yt(this).toReversed()},toSorted(e){return Yt(this).toSorted(e)},toSpliced(...e){return Yt(this).toSpliced(...e)},unshift(...e){return un(this,"unshift",e)},values(){return Es(this,"values",e=>At(this,e))}};function Es(e,t,n){const s=fs(e),o=s[t]();return s!==e&&!qe(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=n(r.value)),r}),o}const Ga=Array.prototype;function dt(e,t,n,s,o,r){const i=fs(e),a=i!==e&&!qe(e),c=i[t];if(c!==Ga[t]){const d=c.apply(e,r);return a?Qe(d):d}let u=n;i!==e&&(a?u=function(d,f){return n.call(this,At(e,d),f,e)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,e)}));const l=c.call(i,u,s);return a&&o?o(l):l}function Bo(e,t,n,s){const o=fs(e);let r=n;return o!==e&&(qe(e)?n.length>3&&(r=function(i,a,c){return n.call(this,i,a,c,e)}):r=function(i,a,c){return n.call(this,i,At(e,a),c,e)}),o[t](r,...s)}function Ps(e,t,n){const s=oe(e);Te(s,"iterate",Sn);const o=s[t](...n);return(o===-1||o===!1)&&vo(n[0])?(n[0]=oe(n[0]),s[t](...n)):o}function un(e,t,n=[]){bt(),po();const s=oe(e)[t].apply(e,n);return fo(),vt(),s}const qa=io("__proto__,__v_isRef,__isVue"),ai=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ot));function Ka(e){Ot(e)||(e=String(e));const t=oe(this);return Te(t,"has",e),t.hasOwnProperty(e)}class ci{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?sc:pi:r?di:ui).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=q(t);if(!o){let c;if(i&&(c=Ua[n]))return c;if(n==="hasOwnProperty")return Ka}const a=Reflect.get(t,n,Pe(t)?t:s);if((Ot(n)?ai.has(n):qa(n))||(o||Te(t,"get",n),r))return a;if(Pe(a)){const c=i&&lo(n)?a:a.value;return o&&ge(c)?qs(c):c}return ge(a)?o?qs(a):In(a):a}}class li extends ci{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];const i=q(t)&&lo(n);if(!this._isShallow){const u=yt(r);if(!qe(s)&&!yt(s)&&(r=oe(r),s=oe(s)),!i&&Pe(r)&&!Pe(s))return u||(r.value=s),!0}const a=i?Number(n)<t.length:le(t,n),c=Reflect.set(t,n,s,Pe(t)?t:o);return t===oe(o)&&(a?Rt(s,r)&&mt(t,"set",n,s):mt(t,"add",n,s)),c}deleteProperty(t,n){const s=le(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&mt(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!Ot(n)||!ai.has(n))&&Te(t,"has",n),s}ownKeys(t){return Te(t,"iterate",q(t)?"length":Vt),Reflect.ownKeys(t)}}class Ya extends ci{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const za=new li,Ja=new Ya,Qa=new li(!0);const Gs=e=>e,jn=e=>Reflect.getPrototypeOf(e);function Za(e,t,n){return function(...s){const o=this.__v_raw,r=oe(o),i=Xt(r),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...s),l=n?Gs:t?nn:Qe;return!t&&Te(r,"iterate",c?Us:Vt),_e(Object.create(u),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[l(d[0]),l(d[1])]:l(d),done:f}}})}}function Bn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Xa(e,t){const n={get(o){const r=this.__v_raw,i=oe(r),a=oe(o);e||(Rt(o,a)&&Te(i,"get",o),Te(i,"get",a));const{has:c}=jn(i),u=t?Gs:e?nn:Qe;if(c.call(i,o))return u(r.get(o));if(c.call(i,a))return u(r.get(a));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&Te(oe(o),"iterate",Vt),o.size},has(o){const r=this.__v_raw,i=oe(r),a=oe(o);return e||(Rt(o,a)&&Te(i,"has",o),Te(i,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const i=this,a=i.__v_raw,c=oe(a),u=t?Gs:e?nn:Qe;return!e&&Te(c,"iterate",Vt),a.forEach((l,d)=>o.call(r,u(l),u(d),i))}};return _e(n,e?{add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear")}:{add(o){!t&&!qe(o)&&!yt(o)&&(o=oe(o));const r=oe(this);return jn(r).has.call(r,o)||(r.add(o),mt(r,"add",o,o)),this},set(o,r){!t&&!qe(r)&&!yt(r)&&(r=oe(r));const i=oe(this),{has:a,get:c}=jn(i);let u=a.call(i,o);u||(o=oe(o),u=a.call(i,o));const l=c.call(i,o);return i.set(o,r),u?Rt(r,l)&&mt(i,"set",o,r):mt(i,"add",o,r),this},delete(o){const r=oe(this),{has:i,get:a}=jn(r);let c=i.call(r,o);c||(o=oe(o),c=i.call(r,o)),a&&a.call(r,o);const u=r.delete(o);return c&&mt(r,"delete",o,void 0),u},clear(){const o=oe(this),r=o.size!==0,i=o.clear();return r&&mt(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Za(o,e,t)}),n}function go(e,t){const n=Xa(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(le(n,o)&&o in s?n:s,o,r)}const ec={get:go(!1,!1)},tc={get:go(!1,!0)},nc={get:go(!0,!1)};const ui=new WeakMap,di=new WeakMap,pi=new WeakMap,sc=new WeakMap;function oc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rc(e){return e.__v_skip||!Object.isExtensible(e)?0:oc(Ra(e))}function In(e){return yt(e)?e:bo(e,!1,za,ec,ui)}function fi(e){return bo(e,!1,Qa,tc,di)}function qs(e){return bo(e,!0,Ja,nc,pi)}function bo(e,t,n,s,o){if(!ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=rc(e);if(r===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,r===2?s:n);return o.set(e,a),a}function Wt(e){return yt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function yt(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function vo(e){return e?!!e.__v_raw:!1}function oe(e){const t=e&&e.__v_raw;return t?oe(t):e}function ic(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&zr(e,"__v_skip",!0),e}const Qe=e=>ge(e)?In(e):e,nn=e=>ge(e)?qs(e):e;function Pe(e){return e?e.__v_isRef===!0:!1}function pe(e){return hi(e,!1)}function ac(e){return hi(e,!0)}function hi(e,t){return Pe(e)?e:new cc(e,t)}class cc{constructor(t,n){this.dep=new mo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:oe(t),this._value=n?t:Qe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||qe(t)||yt(t);t=s?t:oe(t),Rt(t,n)&&(this._rawValue=t,this._value=s?t:Qe(t),this.dep.trigger())}}function Le(e){return Pe(e)?e.value:e}const lc={get:(e,t,n)=>t==="__v_raw"?e:Le(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Pe(o)&&!Pe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function mi(e){return Wt(e)?e:new Proxy(e,lc)}class uc{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new mo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return ti(this,!0),!0}get value(){const t=this.dep.track();return oi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function dc(e,t,n=!1){let s,o;return z(e)?s=e:(s=e.get,o=e.set),new uc(s,o,n)}const Fn={},Qn=new WeakMap;let Bt;function pc(e,t=!1,n=Bt){if(n){let s=Qn.get(n);s||Qn.set(n,s=[]),s.push(e)}}function fc(e,t,n=fe){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:a,call:c}=n,u=M=>o?M:qe(M)||o===!1||o===0?gt(M,1):gt(M);let l,d,f,m,v=!1,k=!1;if(Pe(e)?(d=()=>e.value,v=qe(e)):Wt(e)?(d=()=>u(e),v=!0):q(e)?(k=!0,v=e.some(M=>Wt(M)||qe(M)),d=()=>e.map(M=>{if(Pe(M))return M.value;if(Wt(M))return u(M);if(z(M))return c?c(M,2):M()})):z(e)?t?d=c?()=>c(e,2):e:d=()=>{if(f){bt();try{f()}finally{vt()}}const M=Bt;Bt=l;try{return c?c(e,3,[m]):e(m)}finally{Bt=M}}:d=lt,t&&o){const M=d,J=o===!0?1/0:o;d=()=>gt(M(),J)}const T=Ha(),P=()=>{l.stop(),T&&T.active&&co(T.effects,l)};if(r&&t){const M=t;t=(...J)=>{M(...J),P()}}let O=k?new Array(e.length).fill(Fn):Fn;const j=M=>{if(!(!(l.flags&1)||!l.dirty&&!M))if(t){const J=l.run();if(o||v||(k?J.some((X,ee)=>Rt(X,O[ee])):Rt(J,O))){f&&f();const X=Bt;Bt=l;try{const ee=[J,O===Fn?void 0:k&&O[0]===Fn?[]:O,m];O=J,c?c(t,3,ee):t(...ee)}finally{Bt=X}}}else l.run()};return a&&a(j),l=new Xr(d),l.scheduler=i?()=>i(j,!1):j,m=M=>pc(M,!1,l),f=l.onStop=()=>{const M=Qn.get(l);if(M){if(c)c(M,4);else for(const J of M)J();Qn.delete(l)}},t?s?j(!0):O=l.run():i?i(j.bind(null,!0),!0):l.run(),P.pause=l.pause.bind(l),P.resume=l.resume.bind(l),P.stop=P,P}function gt(e,t=1/0,n){if(t<=0||!ge(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Pe(e))gt(e.value,t,n);else if(q(e))for(let s=0;s<e.length;s++)gt(e[s],t,n);else if(Gr(e)||Xt(e))e.forEach(s=>{gt(s,t,n)});else if(Yr(e)){for(const s in e)gt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&gt(e[s],t,n)}return e}function On(e,t,n,s){try{return s?e(...s):e()}catch(o){hs(o,t,n)}}function Ze(e,t,n,s){if(z(e)){const o=On(e,t,n,s);return o&&qr(o)&&o.catch(r=>{hs(r,t,n)}),o}if(q(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Ze(e[r],t,n,s));return o}}function hs(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||fe;if(t){let a=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](e,c,u)===!1)return}a=a.parent}if(r){bt(),On(r,null,10,[e,c,u]),vt();return}}hc(e,n,o,s,i)}function hc(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Oe=[];let at=-1;const en=[];let Tt=null,zt=0;const gi=Promise.resolve();let Zn=null;function ms(e){const t=Zn||gi;return e?t.then(this?e.bind(this):e):t}function mc(e){let t=at+1,n=Oe.length;for(;t<n;){const s=t+n>>>1,o=Oe[s],r=An(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function yo(e){if(!(e.flags&1)){const t=An(e),n=Oe[Oe.length-1];!n||!(e.flags&2)&&t>=An(n)?Oe.push(e):Oe.splice(mc(t),0,e),e.flags|=1,bi()}}function bi(){Zn||(Zn=gi.then(yi))}function gc(e){q(e)?en.push(...e):Tt&&e.id===-1?Tt.splice(zt+1,0,e):e.flags&1||(en.push(e),e.flags|=1),bi()}function Fo(e,t,n=at+1){for(;n<Oe.length;n++){const s=Oe[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Oe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function vi(e){if(en.length){const t=[...new Set(en)].sort((n,s)=>An(n)-An(s));if(en.length=0,Tt){Tt.push(...t);return}for(Tt=t,zt=0;zt<Tt.length;zt++){const n=Tt[zt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tt=null,zt=0}}const An=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yi(e){try{for(at=0;at<Oe.length;at++){const t=Oe[at];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),On(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;at<Oe.length;at++){const t=Oe[at];t&&(t.flags&=-2)}at=-1,Oe.length=0,vi(),Zn=null,(Oe.length||en.length)&&yi()}}let Ve=null,xi=null;function Xn(e){const t=Ve;return Ve=e,xi=e&&e.type.__scopeId||null,t}function Xe(e,t=Ve,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&ns(-1);const r=Xn(t);let i;try{i=e(...o)}finally{Xn(r),s._d&&ns(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function wi(e,t){if(Ve===null)return e;const n=ws(Ve),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,a,c=fe]=t[o];r&&(z(r)&&(r={mounted:r,updated:r}),r.deep&&gt(i),s.push({dir:r,instance:n,value:i,oldValue:void 0,arg:a,modifiers:c}))}return e}function Lt(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let c=a.dir[s];c&&(bt(),Ze(c,n,8,[e.el,a,e,t]),vt())}}function qn(e,t){if(Ee){let n=Ee.provides;const s=Ee.parent&&Ee.parent.provides;s===n&&(n=Ee.provides=Object.create(s)),n[e]=t}}function Je(e,t,n=!1){const s=Ao();if(s||tn){let o=tn?tn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&z(t)?t.call(s&&s.proxy):t}}const bc=Symbol.for("v-scx"),vc=()=>Je(bc);function Dt(e,t,n){return _i(e,t,n)}function _i(e,t,n=fe){const{immediate:s,deep:o,flush:r,once:i}=n,a=_e({},n),c=t&&s||!t&&r!=="post";let u;if(Rn){if(r==="sync"){const m=vc();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=lt,m.resume=lt,m.pause=lt,m}}const l=Ee;a.call=(m,v,k)=>Ze(m,l,v,k);let d=!1;r==="post"?a.scheduler=m=>{De(m,l&&l.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(m,v)=>{v?m():yo(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,l&&(m.id=l.uid,m.i=l))};const f=fc(e,t,a);return Rn&&(u?u.push(f):c&&f()),f}function yc(e,t,n){const s=this.proxy,o=ve(e)?e.includes(".")?ki(s,e):()=>s[e]:e.bind(s,s);let r;z(t)?r=t:(r=t.handler,n=t);const i=Mn(this),a=_i(o,r.bind(s),n);return i(),a}function ki(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const Ci=Symbol("_vte"),Si=e=>e.__isTeleport,vn=e=>e&&(e.disabled||e.disabled===""),Ho=e=>e&&(e.defer||e.defer===""),Vo=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Wo=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ks=(e,t)=>{const n=e&&e.to;return ve(n)?t?t(n):null:n},Ai={name:"Teleport",__isTeleport:!0,process(e,t,n,s,o,r,i,a,c,u){const{mc:l,pc:d,pbc:f,o:{insert:m,querySelector:v,createText:k,createComment:T}}=u,P=vn(t.props);let{shapeFlag:O,children:j,dynamicChildren:M}=t;if(e==null){const J=t.el=k(""),X=t.anchor=k("");m(J,n,s),m(X,n,s);const ee=(B,Z)=>{O&16&&l(j,B,Z,o,r,i,a,c)},ue=()=>{const B=t.target=Ks(t.props,v),Z=Ti(B,t,k,m);B&&(i!=="svg"&&Vo(B)?i="svg":i!=="mathml"&&Wo(B)&&(i="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(B),P||(ee(B,Z),Kn(t,!1)))};P&&(ee(n,X),Kn(t,!0)),Ho(t.props)?(t.el.__isMounted=!1,De(()=>{ue(),delete t.el.__isMounted},r)):ue()}else{if(Ho(t.props)&&e.el.__isMounted===!1){De(()=>{Ai.process(e,t,n,s,o,r,i,a,c,u)},r);return}t.el=e.el,t.targetStart=e.targetStart;const J=t.anchor=e.anchor,X=t.target=e.target,ee=t.targetAnchor=e.targetAnchor,ue=vn(e.props),B=ue?n:X,Z=ue?J:ee;if(i==="svg"||Vo(X)?i="svg":(i==="mathml"||Wo(X))&&(i="mathml"),M?(f(e.dynamicChildren,M,B,o,r,i,a),Co(e,t,!0)):c||d(e,t,B,Z,o,r,i,a,!1),P)ue?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Hn(t,n,J,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ae=t.target=Ks(t.props,v);ae&&Hn(t,ae,null,u,0)}else ue&&Hn(t,X,ee,u,1);Kn(t,P)}},remove(e,t,n,{um:s,o:{remove:o}},r){const{shapeFlag:i,children:a,anchor:c,targetStart:u,targetAnchor:l,target:d,props:f}=e;if(d&&(o(u),o(l)),r&&o(c),i&16){const m=r||!vn(f);for(let v=0;v<a.length;v++){const k=a[v];s(k,t,n,m,!!k.dynamicChildren)}}},move:Hn,hydrate:xc};function Hn(e,t,n,{o:{insert:s},m:o},r=2){r===0&&s(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:c,children:u,props:l}=e,d=r===2;if(d&&s(i,t,n),(!d||vn(l))&&c&16)for(let f=0;f<u.length;f++)o(u[f],t,n,2);d&&s(a,t,n)}function xc(e,t,n,s,o,r,{o:{nextSibling:i,parentNode:a,querySelector:c,insert:u,createText:l}},d){function f(k,T,P,O){T.anchor=d(i(k),T,a(k),n,s,o,r),T.targetStart=P,T.targetAnchor=O}const m=t.target=Ks(t.props,c),v=vn(t.props);if(m){const k=m._lpa||m.firstChild;if(t.shapeFlag&16)if(v)f(e,t,k,k&&i(k));else{t.anchor=i(e);let T=k;for(;T;){if(T&&T.nodeType===8){if(T.data==="teleport start anchor")t.targetStart=T;else if(T.data==="teleport anchor"){t.targetAnchor=T,m._lpa=t.targetAnchor&&i(t.targetAnchor);break}}T=i(T)}t.targetAnchor||Ti(m,t,l,u),d(k&&i(k),t,m,n,s,o,r)}Kn(t,v)}else v&&t.shapeFlag&16&&f(e,t,e,i(e));return t.anchor&&i(t.anchor)}const wc=Ai;function Kn(e,t){const n=e.ctx;if(n&&n.ut){let s,o;for(t?(s=e.el,o=e.anchor):(s=e.targetStart,o=e.targetAnchor);s&&s!==o;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function Ti(e,t,n,s){const o=t.targetStart=n(""),r=t.targetAnchor=n("");return o[Ci]=r,e&&(s(o,e),s(r,e)),r}const ht=Symbol("_leaveCb"),Vn=Symbol("_enterCb");function Ei(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ut(()=>{e.isMounted=!0}),$n(()=>{e.isUnmounting=!0}),e}const Ge=[Function,Array],Pi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ge,onEnter:Ge,onAfterEnter:Ge,onEnterCancelled:Ge,onBeforeLeave:Ge,onLeave:Ge,onAfterLeave:Ge,onLeaveCancelled:Ge,onBeforeAppear:Ge,onAppear:Ge,onAfterAppear:Ge,onAppearCancelled:Ge},Ri=e=>{const t=e.subTree;return t.component?Ri(t.component):t},_c={name:"BaseTransition",props:Pi,setup(e,{slots:t}){const n=Ao(),s=Ei();return()=>{const o=t.default&&xo(t.default(),!0);if(!o||!o.length)return;const r=Di(o),i=oe(e),{mode:a}=i;if(s.isLeaving)return Rs(r);const c=Uo(r);if(!c)return Rs(r);let u=Tn(c,i,s,n,d=>u=d);c.type!==$e&&Ut(c,u);let l=n.subTree&&Uo(n.subTree);if(l&&l.type!==$e&&!Ft(l,c)&&Ri(n).type!==$e){let d=Tn(l,i,s,n);if(Ut(l,d),a==="out-in"&&c.type!==$e)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,l=void 0},Rs(r);a==="in-out"&&c.type!==$e?d.delayLeave=(f,m,v)=>{const k=Ii(s,l);k[String(l.key)]=l,f[ht]=()=>{m(),f[ht]=void 0,delete u.delayedLeave,l=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return r}}};function Di(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==$e){t=n;break}}return t}const kc=_c;function Ii(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Tn(e,t,n,s,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:v,onLeaveCancelled:k,onBeforeAppear:T,onAppear:P,onAfterAppear:O,onAppearCancelled:j}=t,M=String(e.key),J=Ii(n,e),X=(B,Z)=>{B&&Ze(B,s,9,Z)},ee=(B,Z)=>{const ae=Z[1];X(B,Z),q(B)?B.every(L=>L.length<=1)&&ae():B.length<=1&&ae()},ue={mode:i,persisted:a,beforeEnter(B){let Z=c;if(!n.isMounted)if(r)Z=T||c;else return;B[ht]&&B[ht](!0);const ae=J[M];ae&&Ft(e,ae)&&ae.el[ht]&&ae.el[ht](),X(Z,[B])},enter(B){let Z=u,ae=l,L=d;if(!n.isMounted)if(r)Z=P||u,ae=O||l,L=j||d;else return;let se=!1;const ye=B[Vn]=Ae=>{se||(se=!0,Ae?X(L,[B]):X(ae,[B]),ue.delayedLeave&&ue.delayedLeave(),B[Vn]=void 0)};Z?ee(Z,[B,ye]):ye()},leave(B,Z){const ae=String(e.key);if(B[Vn]&&B[Vn](!0),n.isUnmounting)return Z();X(f,[B]);let L=!1;const se=B[ht]=ye=>{L||(L=!0,Z(),ye?X(k,[B]):X(v,[B]),B[ht]=void 0,J[ae]===e&&delete J[ae])};J[ae]=e,m?ee(m,[B,se]):se()},clone(B){const Z=Tn(B,t,n,s,o);return o&&o(Z),Z}};return ue}function Rs(e){if(gs(e))return e=It(e),e.children=null,e}function Uo(e){if(!gs(e))return Si(e.type)&&e.children?Di(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&z(n.default))return n.default()}}function Ut(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ut(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xo(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===ie?(i.patchFlag&128&&o++,s=s.concat(xo(i.children,t,a))):(t||i.type!==$e)&&s.push(a!=null?It(i,{key:a}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Oi(e,t){return z(e)?_e({name:e.name},t,{setup:e}):e}function $i(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const es=new WeakMap;function yn(e,t,n,s,o=!1){if(q(e)){e.forEach((v,k)=>yn(v,t&&(q(t)?t[k]:t),n,s,o));return}if(xn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&yn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?ws(s.component):s.el,i=o?null:r,{i:a,r:c}=e,u=t&&t.r,l=a.refs===fe?a.refs={}:a.refs,d=a.setupState,f=oe(d),m=d===fe?Ur:v=>le(f,v);if(u!=null&&u!==c){if(Go(t),ve(u))l[u]=null,m(u)&&(d[u]=null);else if(Pe(u)){u.value=null;const v=t;v.k&&(l[v.k]=null)}}if(z(c))On(c,a,12,[i,l]);else{const v=ve(c),k=Pe(c);if(v||k){const T=()=>{if(e.f){const P=v?m(c)?d[c]:l[c]:c.value;if(o)q(P)&&co(P,r);else if(q(P))P.includes(r)||P.push(r);else if(v)l[c]=[r],m(c)&&(d[c]=l[c]);else{const O=[r];c.value=O,e.k&&(l[e.k]=O)}}else v?(l[c]=i,m(c)&&(d[c]=i)):k&&(c.value=i,e.k&&(l[e.k]=i))};if(i){const P=()=>{T(),es.delete(e)};P.id=-1,es.set(e,P),De(P,n)}else Go(e),T()}}}function Go(e){const t=es.get(e);t&&(t.flags|=8,es.delete(e))}ps().requestIdleCallback;ps().cancelIdleCallback;const xn=e=>!!e.type.__asyncLoader,gs=e=>e.type.__isKeepAlive;function Cc(e,t){Mi(e,"a",t)}function Sc(e,t){Mi(e,"da",t)}function Mi(e,t,n=Ee){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(bs(t,s,n),n){let o=n.parent;for(;o&&o.parent;)gs(o.parent.vnode)&&Ac(s,t,n,o),o=o.parent}}function Ac(e,t,n,s){const o=bs(t,e,s,!0);wo(()=>{co(s[t],o)},n)}function bs(e,t,n=Ee,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{bt();const a=Mn(n),c=Ze(t,n,e,i);return a(),vt(),c});return s?o.unshift(r):o.push(r),r}}const xt=e=>(t,n=Ee)=>{(!Rn||e==="sp")&&bs(e,(...s)=>t(...s),n)},Tc=xt("bm"),ut=xt("m"),Ec=xt("bu"),Li=xt("u"),$n=xt("bum"),wo=xt("um"),Pc=xt("sp"),Rc=xt("rtg"),Dc=xt("rtc");function Ic(e,t=Ee){bs("ec",e,t)}const Ni="components";function vs(e,t){return Bi(Ni,e,!0,t)||e}const ji=Symbol.for("v-ndc");function Oc(e){return ve(e)?Bi(Ni,e,!1)||e:e||ji}function Bi(e,t,n=!0,s=!1){const o=Ve||Ee;if(o){const r=o.type;{const a=bl(r,!1);if(a&&(a===t||a===Ke(t)||a===ds(Ke(t))))return r}const i=qo(o[e]||r[e],t)||qo(o.appContext[e],t);return!i&&s?r:i}}function qo(e,t){return e&&(e[t]||e[Ke(t)]||e[ds(Ke(t))])}function Se(e,t,n,s){let o;const r=n,i=q(e);if(i||ve(e)){const a=i&&Wt(e);let c=!1,u=!1;a&&(c=!qe(e),u=yt(e),e=fs(e)),o=new Array(e.length);for(let l=0,d=e.length;l<d;l++)o[l]=t(c?u?nn(Qe(e[l])):Qe(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r)}else if(ge(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,r));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const l=a[c];o[c]=t(e[l],l,c,r)}}else o=[];return o}const Ys=e=>e?sa(e)?ws(e):Ys(e.parent):null,wn=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ys(e.parent),$root:e=>Ys(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Hi(e),$forceUpdate:e=>e.f||(e.f=()=>{yo(e.update)}),$nextTick:e=>e.n||(e.n=ms.bind(e.proxy)),$watch:e=>yc.bind(e)}),Ds=(e,t)=>e!==fe&&!e.__isScriptSetup&&le(e,t),$c={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:c}=e;if(t[0]!=="$"){const f=i[t];if(f!==void 0)switch(f){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(Ds(s,t))return i[t]=1,s[t];if(o!==fe&&le(o,t))return i[t]=2,o[t];if(le(r,t))return i[t]=3,r[t];if(n!==fe&&le(n,t))return i[t]=4,n[t];zs&&(i[t]=0)}}const u=wn[t];let l,d;if(u)return t==="$attrs"&&Te(e.attrs,"get",""),u(e);if((l=a.__cssModules)&&(l=l[t]))return l;if(n!==fe&&le(n,t))return i[t]=4,n[t];if(d=c.config.globalProperties,le(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return Ds(o,t)?(o[t]=n,!0):s!==fe&&le(s,t)?(s[t]=n,!0):le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:r,type:i}},a){let c;return!!(n[a]||e!==fe&&a[0]!=="$"&&le(e,a)||Ds(t,a)||le(r,a)||le(s,a)||le(wn,a)||le(o.config.globalProperties,a)||(c=i.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:le(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ko(e){return q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let zs=!0;function Mc(e){const t=Hi(e),n=e.proxy,s=e.ctx;zs=!1,t.beforeCreate&&Yo(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:f,beforeUpdate:m,updated:v,activated:k,deactivated:T,beforeDestroy:P,beforeUnmount:O,destroyed:j,unmounted:M,render:J,renderTracked:X,renderTriggered:ee,errorCaptured:ue,serverPrefetch:B,expose:Z,inheritAttrs:ae,components:L,directives:se,filters:ye}=t;if(u&&Lc(u,s,null),i)for(const F in i){const K=i[F];z(K)&&(s[F]=K.bind(n))}if(o){const F=o.call(n,n);ge(F)&&(e.data=In(F))}if(zs=!0,r)for(const F in r){const K=r[F],Ye=z(K)?K.bind(n,n):z(K.get)?K.get.bind(n,n):lt,_t=!z(K)&&z(K.set)?K.set.bind(n):lt,tt=re({get:Ye,set:_t});Object.defineProperty(s,F,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Ne=>tt.value=Ne})}if(a)for(const F in a)Fi(a[F],s,n,F);if(c){const F=z(c)?c.call(n):c;Reflect.ownKeys(F).forEach(K=>{qn(K,F[K])})}l&&Yo(l,e,"c");function U(F,K){q(K)?K.forEach(Ye=>F(Ye.bind(n))):K&&F(K.bind(n))}if(U(Tc,d),U(ut,f),U(Ec,m),U(Li,v),U(Cc,k),U(Sc,T),U(Ic,ue),U(Dc,X),U(Rc,ee),U($n,O),U(wo,M),U(Pc,B),q(Z))if(Z.length){const F=e.exposed||(e.exposed={});Z.forEach(K=>{Object.defineProperty(F,K,{get:()=>n[K],set:Ye=>n[K]=Ye,enumerable:!0})})}else e.exposed||(e.exposed={});J&&e.render===lt&&(e.render=J),ae!=null&&(e.inheritAttrs=ae),L&&(e.components=L),se&&(e.directives=se),B&&$i(e)}function Lc(e,t,n=lt){q(e)&&(e=Js(e));for(const s in e){const o=e[s];let r;ge(o)?"default"in o?r=Je(o.from||s,o.default,!0):r=Je(o.from||s):r=Je(o),Pe(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Yo(e,t,n){Ze(q(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Fi(e,t,n,s){let o=s.includes(".")?ki(n,s):()=>n[s];if(ve(e)){const r=t[e];z(r)&&Dt(o,r)}else if(z(e))Dt(o,e.bind(n));else if(ge(e))if(q(e))e.forEach(r=>Fi(r,t,n,s));else{const r=z(e.handler)?e.handler.bind(n):t[e.handler];z(r)&&Dt(o,r,e)}}function Hi(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let c;return a?c=a:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(u=>ts(c,u,i,!0)),ts(c,t,i)),ge(t)&&r.set(t,c),c}function ts(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&ts(e,r,n,!0),o&&o.forEach(i=>ts(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=Nc[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Nc={data:zo,props:Jo,emits:Jo,methods:hn,computed:hn,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:hn,directives:hn,watch:Bc,provide:zo,inject:jc};function zo(e,t){return t?e?function(){return _e(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function jc(e,t){return hn(Js(e),Js(t))}function Js(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function hn(e,t){return e?_e(Object.create(null),e,t):t}function Jo(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:_e(Object.create(null),Ko(e),Ko(t??{})):t}function Bc(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const s in t)n[s]=Re(e[s],t[s]);return n}function Vi(){return{app:null,config:{isNativeTag:Ur,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fc=0;function Hc(e,t){return function(s,o=null){z(s)||(s=_e({},s)),o!=null&&!ge(o)&&(o=null);const r=Vi(),i=new WeakSet,a=[];let c=!1;const u=r.app={_uid:Fc++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:yl,get config(){return r.config},set config(l){},use(l,...d){return i.has(l)||(l&&z(l.install)?(i.add(l),l.install(u,...d)):z(l)&&(i.add(l),l(u,...d))),u},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),u},component(l,d){return d?(r.components[l]=d,u):r.components[l]},directive(l,d){return d?(r.directives[l]=d,u):r.directives[l]},mount(l,d,f){if(!c){const m=u._ceVNode||Q(s,o);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),e(m,l,f),c=!0,u._container=l,l.__vue_app__=u,ws(m.component)}},onUnmount(l){a.push(l)},unmount(){c&&(Ze(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(l,d){return r.provides[l]=d,u},runWithContext(l){const d=tn;tn=u;try{return l()}finally{tn=d}}};return u}}let tn=null;const Vc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${Gt(t)}Modifiers`];function Wc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||fe;let o=n;const r=t.startsWith("update:"),i=r&&Vc(s,t.slice(7));i&&(i.trim&&(o=n.map(l=>ve(l)?l.trim():l)),i.number&&(o=n.map(uo)));let a,c=s[a=Ss(t)]||s[a=Ss(Ke(t))];!c&&r&&(c=s[a=Ss(Gt(t))]),c&&Ze(c,e,6,o);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ze(u,e,6,o)}}const Uc=new WeakMap;function Wi(e,t,n=!1){const s=n?Uc:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!z(e)){const c=u=>{const l=Wi(u,t,!0);l&&(a=!0,_e(i,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(ge(e)&&s.set(e,null),null):(q(r)?r.forEach(c=>i[c]=null):_e(i,r),ge(e)&&s.set(e,i),i)}function ys(e,t){return!e||!cs(t)?!1:(t=t.slice(2).replace(/Once$/,""),le(e,t[0].toLowerCase()+t.slice(1))||le(e,Gt(t))||le(e,t))}function Qo(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:a,emit:c,render:u,renderCache:l,props:d,data:f,setupState:m,ctx:v,inheritAttrs:k}=e,T=Xn(e);let P,O;try{if(n.shapeFlag&4){const M=o||s,J=M;P=ct(u.call(J,M,l,d,m,f,v)),O=a}else{const M=t;P=ct(M.length>1?M(d,{attrs:a,slots:i,emit:c}):M(d,null)),O=t.props?a:Gc(a)}}catch(M){_n.length=0,hs(M,e,1),P=Q($e)}let j=P;if(O&&k!==!1){const M=Object.keys(O),{shapeFlag:J}=j;M.length&&J&7&&(r&&M.some(ao)&&(O=qc(O,r)),j=It(j,O,!1,!0))}return n.dirs&&(j=It(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Ut(j,n.transition),P=j,Xn(T),P}const Gc=e=>{let t;for(const n in e)(n==="class"||n==="style"||cs(n))&&((t||(t={}))[n]=e[n]);return t},qc=(e,t)=>{const n={};for(const s in e)(!ao(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Kc(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:c}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Zo(s,i,u):!!i;if(c&8){const l=t.dynamicProps;for(let d=0;d<l.length;d++){const f=l[d];if(i[f]!==s[f]&&!ys(u,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Zo(s,i,u):!0:!!i;return!1}function Zo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!ys(n,r))return!0}return!1}function Yc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ui={},Gi=()=>Object.create(Ui),qi=e=>Object.getPrototypeOf(e)===Ui;function zc(e,t,n,s=!1){const o={},r=Gi();e.propsDefaults=Object.create(null),Ki(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:fi(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Jc(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=oe(o),[c]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let d=0;d<l.length;d++){let f=l[d];if(ys(e.emitsOptions,f))continue;const m=t[f];if(c)if(le(r,f))m!==r[f]&&(r[f]=m,u=!0);else{const v=Ke(f);o[v]=Qs(c,a,v,m,e,!1)}else m!==r[f]&&(r[f]=m,u=!0)}}}else{Ki(e,t,o,r)&&(u=!0);let l;for(const d in a)(!t||!le(t,d)&&((l=Gt(d))===d||!le(t,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(o[d]=Qs(c,a,d,void 0,e,!0)):delete o[d]);if(r!==a)for(const d in r)(!t||!le(t,d))&&(delete r[d],u=!0)}u&&mt(e.attrs,"set","")}function Ki(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(mn(c))continue;const u=t[c];let l;o&&le(o,l=Ke(c))?!r||!r.includes(l)?n[l]=u:(a||(a={}))[l]=u:ys(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(r){const c=oe(n),u=a||fe;for(let l=0;l<r.length;l++){const d=r[l];n[d]=Qs(o,c,d,u[d],e,!le(u,d))}}return i}function Qs(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=le(i,"default");if(a&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&z(c)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const l=Mn(o);s=u[n]=c.call(null,t),l()}}else s=c;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===Gt(n))&&(s=!0))}return s}const Qc=new WeakMap;function Yi(e,t,n=!1){const s=n?Qc:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let c=!1;if(!z(e)){const l=d=>{c=!0;const[f,m]=Yi(d,t,!0);_e(i,f),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!r&&!c)return ge(e)&&s.set(e,Zt),Zt;if(q(r))for(let l=0;l<r.length;l++){const d=Ke(r[l]);Xo(d)&&(i[d]=fe)}else if(r)for(const l in r){const d=Ke(l);if(Xo(d)){const f=r[l],m=i[d]=q(f)||z(f)?{type:f}:_e({},f),v=m.type;let k=!1,T=!0;if(q(v))for(let P=0;P<v.length;++P){const O=v[P],j=z(O)&&O.name;if(j==="Boolean"){k=!0;break}else j==="String"&&(T=!1)}else k=z(v)&&v.name==="Boolean";m[0]=k,m[1]=T,(k||le(m,"default"))&&a.push(d)}}const u=[i,a];return ge(e)&&s.set(e,u),u}function Xo(e){return e[0]!=="$"&&!mn(e)}const _o=e=>e==="_"||e==="_ctx"||e==="$stable",ko=e=>q(e)?e.map(ct):[ct(e)],Zc=(e,t,n)=>{if(t._n)return t;const s=Xe((...o)=>ko(t(...o)),n);return s._c=!1,s},zi=(e,t,n)=>{const s=e._ctx;for(const o in e){if(_o(o))continue;const r=e[o];if(z(r))t[o]=Zc(o,r,s);else if(r!=null){const i=ko(r);t[o]=()=>i}}},Ji=(e,t)=>{const n=ko(t);e.slots.default=()=>n},Qi=(e,t,n)=>{for(const s in t)(n||!_o(s))&&(e[s]=t[s])},Xc=(e,t,n)=>{const s=e.slots=Gi();if(e.vnode.shapeFlag&32){const o=t._;o?(Qi(s,t,n),n&&zr(s,"_",o,!0)):zi(t,s)}else t&&Ji(e,t)},el=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=fe;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Qi(o,t,n):(r=!t.$stable,zi(t,o)),i=t}else t&&(Ji(e,t),i={default:1});if(r)for(const a in o)!_o(a)&&i[a]==null&&delete o[a]},De=rl;function tl(e){return nl(e)}function nl(e,t){const n=ps();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:f,setScopeId:m=lt,insertStaticContent:v}=e,k=(p,h,b,y=null,_=null,x=null,D=void 0,R=null,E=!!h.dynamicChildren)=>{if(p===h)return;p&&!Ft(p,h)&&(y=w(p),Ne(p,_,x,!0),p=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:S,ref:W,shapeFlag:$}=h;switch(S){case xs:T(p,h,b,y);break;case $e:P(p,h,b,y);break;case Yn:p==null&&O(h,b,y,D);break;case ie:L(p,h,b,y,_,x,D,R,E);break;default:$&1?J(p,h,b,y,_,x,D,R,E):$&6?se(p,h,b,y,_,x,D,R,E):($&64||$&128)&&S.process(p,h,b,y,_,x,D,R,E,H)}W!=null&&_?yn(W,p&&p.ref,x,h||p,!h):W==null&&p&&p.ref!=null&&yn(p.ref,null,x,p,!0)},T=(p,h,b,y)=>{if(p==null)s(h.el=a(h.children),b,y);else{const _=h.el=p.el;h.children!==p.children&&u(_,h.children)}},P=(p,h,b,y)=>{p==null?s(h.el=c(h.children||""),b,y):h.el=p.el},O=(p,h,b,y)=>{[p.el,p.anchor]=v(p.children,h,b,y,p.el,p.anchor)},j=({el:p,anchor:h},b,y)=>{let _;for(;p&&p!==h;)_=f(p),s(p,b,y),p=_;s(h,b,y)},M=({el:p,anchor:h})=>{let b;for(;p&&p!==h;)b=f(p),o(p),p=b;o(h)},J=(p,h,b,y,_,x,D,R,E)=>{if(h.type==="svg"?D="svg":h.type==="math"&&(D="mathml"),p==null)X(h,b,y,_,x,D,R,E);else{const S=p.el&&p.el._isVueCE?p.el:null;try{S&&S._beginPatch(),B(p,h,_,x,D,R,E)}finally{S&&S._endPatch()}}},X=(p,h,b,y,_,x,D,R)=>{let E,S;const{props:W,shapeFlag:$,transition:V,dirs:Y}=p;if(E=p.el=i(p.type,x,W&&W.is,W),$&8?l(E,p.children):$&16&&ue(p.children,E,null,y,_,Is(p,x),D,R),Y&&Lt(p,null,y,"created"),ee(E,p,p.scopeId,D,y),W){for(const he in W)he!=="value"&&!mn(he)&&r(E,he,null,W[he],x,y);"value"in W&&r(E,"value",null,W.value,x),(S=W.onVnodeBeforeMount)&&rt(S,y,p)}Y&&Lt(p,null,y,"beforeMount");const ne=sl(_,V);ne&&V.beforeEnter(E),s(E,h,b),((S=W&&W.onVnodeMounted)||ne||Y)&&De(()=>{S&&rt(S,y,p),ne&&V.enter(E),Y&&Lt(p,null,y,"mounted")},_)},ee=(p,h,b,y,_)=>{if(b&&m(p,b),y)for(let x=0;x<y.length;x++)m(p,y[x]);if(_){let x=_.subTree;if(h===x||ea(x.type)&&(x.ssContent===h||x.ssFallback===h)){const D=_.vnode;ee(p,D,D.scopeId,D.slotScopeIds,_.parent)}}},ue=(p,h,b,y,_,x,D,R,E=0)=>{for(let S=E;S<p.length;S++){const W=p[S]=R?Et(p[S]):ct(p[S]);k(null,W,h,b,y,_,x,D,R)}},B=(p,h,b,y,_,x,D)=>{const R=h.el=p.el;let{patchFlag:E,dynamicChildren:S,dirs:W}=h;E|=p.patchFlag&16;const $=p.props||fe,V=h.props||fe;let Y;if(b&&Nt(b,!1),(Y=V.onVnodeBeforeUpdate)&&rt(Y,b,h,p),W&&Lt(h,p,b,"beforeUpdate"),b&&Nt(b,!0),($.innerHTML&&V.innerHTML==null||$.textContent&&V.textContent==null)&&l(R,""),S?Z(p.dynamicChildren,S,R,b,y,Is(h,_),x):D||K(p,h,R,null,b,y,Is(h,_),x,!1),E>0){if(E&16)ae(R,$,V,b,_);else if(E&2&&$.class!==V.class&&r(R,"class",null,V.class,_),E&4&&r(R,"style",$.style,V.style,_),E&8){const ne=h.dynamicProps;for(let he=0;he<ne.length;he++){const de=ne[he],je=$[de],Be=V[de];(Be!==je||de==="value")&&r(R,de,je,Be,_,b)}}E&1&&p.children!==h.children&&l(R,h.children)}else!D&&S==null&&ae(R,$,V,b,_);((Y=V.onVnodeUpdated)||W)&&De(()=>{Y&&rt(Y,b,h,p),W&&Lt(h,p,b,"updated")},y)},Z=(p,h,b,y,_,x,D)=>{for(let R=0;R<h.length;R++){const E=p[R],S=h[R],W=E.el&&(E.type===ie||!Ft(E,S)||E.shapeFlag&198)?d(E.el):b;k(E,S,W,null,y,_,x,D,!0)}},ae=(p,h,b,y,_)=>{if(h!==b){if(h!==fe)for(const x in h)!mn(x)&&!(x in b)&&r(p,x,h[x],null,_,y);for(const x in b){if(mn(x))continue;const D=b[x],R=h[x];D!==R&&x!=="value"&&r(p,x,R,D,_,y)}"value"in b&&r(p,"value",h.value,b.value,_)}},L=(p,h,b,y,_,x,D,R,E)=>{const S=h.el=p?p.el:a(""),W=h.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:V,slotScopeIds:Y}=h;Y&&(R=R?R.concat(Y):Y),p==null?(s(S,b,y),s(W,b,y),ue(h.children||[],b,W,_,x,D,R,E)):$>0&&$&64&&V&&p.dynamicChildren&&p.dynamicChildren.length===V.length?(Z(p.dynamicChildren,V,b,_,x,D,R),(h.key!=null||_&&h===_.subTree)&&Co(p,h,!0)):K(p,h,b,W,_,x,D,R,E)},se=(p,h,b,y,_,x,D,R,E)=>{h.slotScopeIds=R,p==null?h.shapeFlag&512?_.ctx.activate(h,b,y,D,E):ye(h,b,y,_,x,D,E):Ae(p,h,E)},ye=(p,h,b,y,_,x,D)=>{const R=p.component=pl(p,y,_);if(gs(p)&&(R.ctx.renderer=H),fl(R,!1,D),R.asyncDep){if(_&&_.registerDep(R,U,D),!p.el){const E=R.subTree=Q($e);P(null,E,h,b),p.placeholder=E.el}}else U(R,p,h,b,_,x,D)},Ae=(p,h,b)=>{const y=h.component=p.component;if(Kc(p,h,b))if(y.asyncDep&&!y.asyncResolved){F(y,h,b);return}else y.next=h,y.update();else h.el=p.el,y.vnode=h},U=(p,h,b,y,_,x,D)=>{const R=()=>{if(p.isMounted){let{next:$,bu:V,u:Y,parent:ne,vnode:he}=p;{const st=Zi(p);if(st){$&&($.el=he.el,F(p,$,D)),st.asyncDep.then(()=>{p.isUnmounted||R()});return}}let de=$,je;Nt(p,!1),$?($.el=he.el,F(p,$,D)):$=he,V&&Gn(V),(je=$.props&&$.props.onVnodeBeforeUpdate)&&rt(je,ne,$,he),Nt(p,!0);const Be=Qo(p),nt=p.subTree;p.subTree=Be,k(nt,Be,d(nt.el),w(nt),p,_,x),$.el=Be.el,de===null&&Yc(p,Be.el),Y&&De(Y,_),(je=$.props&&$.props.onVnodeUpdated)&&De(()=>rt(je,ne,$,he),_)}else{let $;const{el:V,props:Y}=h,{bm:ne,m:he,parent:de,root:je,type:Be}=p,nt=xn(h);Nt(p,!1),ne&&Gn(ne),!nt&&($=Y&&Y.onVnodeBeforeMount)&&rt($,de,h),Nt(p,!0);{je.ce&&je.ce._def.shadowRoot!==!1&&je.ce._injectChildStyle(Be);const st=p.subTree=Qo(p);k(null,st,b,y,p,_,x),h.el=st.el}if(he&&De(he,_),!nt&&($=Y&&Y.onVnodeMounted)){const st=h;De(()=>rt($,de,st),_)}(h.shapeFlag&256||de&&xn(de.vnode)&&de.vnode.shapeFlag&256)&&p.a&&De(p.a,_),p.isMounted=!0,h=b=y=null}};p.scope.on();const E=p.effect=new Xr(R);p.scope.off();const S=p.update=E.run.bind(E),W=p.job=E.runIfDirty.bind(E);W.i=p,W.id=p.uid,E.scheduler=()=>yo(W),Nt(p,!0),S()},F=(p,h,b)=>{h.component=p;const y=p.vnode.props;p.vnode=h,p.next=null,Jc(p,h.props,y,b),el(p,h.children,b),bt(),Fo(p),vt()},K=(p,h,b,y,_,x,D,R,E=!1)=>{const S=p&&p.children,W=p?p.shapeFlag:0,$=h.children,{patchFlag:V,shapeFlag:Y}=h;if(V>0){if(V&128){_t(S,$,b,y,_,x,D,R,E);return}else if(V&256){Ye(S,$,b,y,_,x,D,R,E);return}}Y&8?(W&16&&Ue(S,_,x),$!==S&&l(b,$)):W&16?Y&16?_t(S,$,b,y,_,x,D,R,E):Ue(S,_,x,!0):(W&8&&l(b,""),Y&16&&ue($,b,y,_,x,D,R,E))},Ye=(p,h,b,y,_,x,D,R,E)=>{p=p||Zt,h=h||Zt;const S=p.length,W=h.length,$=Math.min(S,W);let V;for(V=0;V<$;V++){const Y=h[V]=E?Et(h[V]):ct(h[V]);k(p[V],Y,b,null,_,x,D,R,E)}S>W?Ue(p,_,x,!0,!1,$):ue(h,b,y,_,x,D,R,E,$)},_t=(p,h,b,y,_,x,D,R,E)=>{let S=0;const W=h.length;let $=p.length-1,V=W-1;for(;S<=$&&S<=V;){const Y=p[S],ne=h[S]=E?Et(h[S]):ct(h[S]);if(Ft(Y,ne))k(Y,ne,b,null,_,x,D,R,E);else break;S++}for(;S<=$&&S<=V;){const Y=p[$],ne=h[V]=E?Et(h[V]):ct(h[V]);if(Ft(Y,ne))k(Y,ne,b,null,_,x,D,R,E);else break;$--,V--}if(S>$){if(S<=V){const Y=V+1,ne=Y<W?h[Y].el:y;for(;S<=V;)k(null,h[S]=E?Et(h[S]):ct(h[S]),b,ne,_,x,D,R,E),S++}}else if(S>V)for(;S<=$;)Ne(p[S],_,x,!0),S++;else{const Y=S,ne=S,he=new Map;for(S=ne;S<=V;S++){const He=h[S]=E?Et(h[S]):ct(h[S]);He.key!=null&&he.set(He.key,S)}let de,je=0;const Be=V-ne+1;let nt=!1,st=0;const ln=new Array(Be);for(S=0;S<Be;S++)ln[S]=0;for(S=Y;S<=$;S++){const He=p[S];if(je>=Be){Ne(He,_,x,!0);continue}let ot;if(He.key!=null)ot=he.get(He.key);else for(de=ne;de<=V;de++)if(ln[de-ne]===0&&Ft(He,h[de])){ot=de;break}ot===void 0?Ne(He,_,x,!0):(ln[ot-ne]=S+1,ot>=st?st=ot:nt=!0,k(He,h[ot],b,null,_,x,D,R,E),je++)}const $o=nt?ol(ln):Zt;for(de=$o.length-1,S=Be-1;S>=0;S--){const He=ne+S,ot=h[He],Mo=h[He+1],Lo=He+1<W?Mo.el||Xi(Mo):y;ln[S]===0?k(null,ot,b,Lo,_,x,D,R,E):nt&&(de<0||S!==$o[de]?tt(ot,b,Lo,2):de--)}}},tt=(p,h,b,y,_=null)=>{const{el:x,type:D,transition:R,children:E,shapeFlag:S}=p;if(S&6){tt(p.component.subTree,h,b,y);return}if(S&128){p.suspense.move(h,b,y);return}if(S&64){D.move(p,h,b,H);return}if(D===ie){s(x,h,b);for(let $=0;$<E.length;$++)tt(E[$],h,b,y);s(p.anchor,h,b);return}if(D===Yn){j(p,h,b);return}if(y!==2&&S&1&&R)if(y===0)R.beforeEnter(x),s(x,h,b),De(()=>R.enter(x),_);else{const{leave:$,delayLeave:V,afterLeave:Y}=R,ne=()=>{p.ctx.isUnmounted?o(x):s(x,h,b)},he=()=>{x._isLeaving&&x[ht](!0),$(x,()=>{ne(),Y&&Y()})};V?V(x,ne,he):he()}else s(x,h,b)},Ne=(p,h,b,y=!1,_=!1)=>{const{type:x,props:D,ref:R,children:E,dynamicChildren:S,shapeFlag:W,patchFlag:$,dirs:V,cacheIndex:Y}=p;if($===-2&&(_=!1),R!=null&&(bt(),yn(R,null,b,p,!0),vt()),Y!=null&&(h.renderCache[Y]=void 0),W&256){h.ctx.deactivate(p);return}const ne=W&1&&V,he=!xn(p);let de;if(he&&(de=D&&D.onVnodeBeforeUnmount)&&rt(de,h,p),W&6)Mt(p.component,b,y);else{if(W&128){p.suspense.unmount(b,y);return}ne&&Lt(p,null,h,"beforeUnmount"),W&64?p.type.remove(p,h,b,H,y):S&&!S.hasOnce&&(x!==ie||$>0&&$&64)?Ue(S,h,b,!1,!0):(x===ie&&$&384||!_&&W&16)&&Ue(E,h,b),y&&qt(p)}(he&&(de=D&&D.onVnodeUnmounted)||ne)&&De(()=>{de&&rt(de,h,p),ne&&Lt(p,null,h,"unmounted")},b)},qt=p=>{const{type:h,el:b,anchor:y,transition:_}=p;if(h===ie){Kt(b,y);return}if(h===Yn){M(p);return}const x=()=>{o(b),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(p.shapeFlag&1&&_&&!_.persisted){const{leave:D,delayLeave:R}=_,E=()=>D(b,x);R?R(p.el,x,E):E()}else x()},Kt=(p,h)=>{let b;for(;p!==h;)b=f(p),o(p),p=b;o(h)},Mt=(p,h,b)=>{const{bum:y,scope:_,job:x,subTree:D,um:R,m:E,a:S}=p;er(E),er(S),y&&Gn(y),_.stop(),x&&(x.flags|=8,Ne(D,p,h,b)),R&&De(R,h),De(()=>{p.isUnmounted=!0},h)},Ue=(p,h,b,y=!1,_=!1,x=0)=>{for(let D=x;D<p.length;D++)Ne(p[D],h,b,y,_)},w=p=>{if(p.shapeFlag&6)return w(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const h=f(p.anchor||p.el),b=h&&h[Ci];return b?f(b):h};let N=!1;const I=(p,h,b)=>{let y;p==null?h._vnode&&(Ne(h._vnode,null,null,!0),y=h._vnode.component):k(h._vnode||null,p,h,null,null,null,b),h._vnode=p,N||(N=!0,Fo(y),vi(),N=!1)},H={p:k,um:Ne,m:tt,r:qt,mt:ye,mc:ue,pc:K,pbc:Z,n:w,o:e};return{render:I,hydrate:void 0,createApp:Hc(I)}}function Is({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Nt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function sl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Co(e,t,n=!1){const s=e.children,o=t.children;if(q(s)&&q(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=Et(o[r]),a.el=i.el),!n&&a.patchFlag!==-2&&Co(i,a)),a.type===xs&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=r+(e.type===ie?1:0)),a.type===$e&&!a.el&&(a.el=i.el)}}function ol(e){const t=e.slice(),n=[0];let s,o,r,i,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<u?r=a+1:i=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Zi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zi(t)}function er(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Xi(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Xi(t.subTree):null}const ea=e=>e.__isSuspense;function rl(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):gc(e)}const ie=Symbol.for("v-fgt"),xs=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),Yn=Symbol.for("v-stc"),_n=[];let We=null;function C(e=!1){_n.push(We=e?null:[])}function il(){_n.pop(),We=_n[_n.length-1]||null}let En=1;function ns(e,t=!1){En+=e,e<0&&We&&t&&(We.hasOnce=!0)}function ta(e){return e.dynamicChildren=En>0?We||Zt:null,il(),En>0&&We&&We.push(e),e}function A(e,t,n,s,o,r){return ta(g(e,t,n,s,o,r,!0))}function sn(e,t,n,s,o){return ta(Q(e,t,n,s,o,!0))}function ss(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const na=({key:e})=>e??null,zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ve(e)||Pe(e)||z(e)?{i:Ve,r:e,k:t,f:!!n}:e:null);function g(e,t=null,n=null,s=0,o=null,r=e===ie?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&na(t),ref:t&&zn(t),scopeId:xi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ve};return a?(So(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),En>0&&!i&&We&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&We.push(c),c}const Q=al;function al(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===ji)&&(e=$e),ss(e)){const a=It(e,t,!0);return n&&So(a,n),En>0&&!r&&We&&(a.shapeFlag&6?We[We.indexOf(e)]=a:We.push(a)),a.patchFlag=-2,a}if(vl(e)&&(e=e.__vccOpts),t){t=cl(t);let{class:a,style:c}=t;a&&!ve(a)&&(t.class=$t(a)),ge(c)&&(vo(c)&&!q(c)&&(c=_e({},c)),t.style=we(c))}const i=ve(e)?1:ea(e)?128:Si(e)?64:ge(e)?4:z(e)?2:0;return g(e,t,n,s,o,i,r,!0)}function cl(e){return e?vo(e)||qi(e)?_e({},e):e:null}function It(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:a,transition:c}=e,u=t?ll(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&na(u),ref:t&&t.ref?n&&r?q(r)?r.concat(zn(t)):[r,zn(t)]:zn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Ut(l,c.clone(l)),l}function Me(e=" ",t=0){return Q(xs,null,e,t)}function Pn(e,t){const n=Q(Yn,null,e);return n.staticCount=t,n}function be(e="",t=!1){return t?(C(),sn($e,null,e)):Q($e,null,e)}function ct(e){return e==null||typeof e=="boolean"?Q($e):q(e)?Q(ie,null,e.slice()):ss(e)?Et(e):Q(xs,null,String(e))}function Et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function So(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),So(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!qi(t)?t._ctx=Ve:o===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Ve},n=32):(t=String(t),s&64?(n=16,t=[Me(t)]):n=8);e.children=t,e.shapeFlag|=n}function ll(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=$t([t.class,s.class]));else if(o==="style")t.style=we([t.style,s.style]);else if(cs(o)){const r=t[o],i=s[o];i&&r!==i&&!(q(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function rt(e,t,n,s=null){Ze(e,t,7,[n,s])}const ul=Vi();let dl=0;function pl(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||ul,r={uid:dl++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yi(s,o),emitsOptions:Wi(s,o),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:s.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Wc.bind(null,r),e.ce&&e.ce(r),r}let Ee=null;const Ao=()=>Ee||Ve;let os,Zs;{const e=ps(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};os=t("__VUE_INSTANCE_SETTERS__",n=>Ee=n),Zs=t("__VUE_SSR_SETTERS__",n=>Rn=n)}const Mn=e=>{const t=Ee;return os(e),e.scope.on(),()=>{e.scope.off(),os(t)}},tr=()=>{Ee&&Ee.scope.off(),os(null)};function sa(e){return e.vnode.shapeFlag&4}let Rn=!1;function fl(e,t=!1,n=!1){t&&Zs(t);const{props:s,children:o}=e.vnode,r=sa(e);zc(e,s,r,t),Xc(e,o,n||t);const i=r?hl(e,t):void 0;return t&&Zs(!1),i}function hl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$c);const{setup:s}=n;if(s){bt();const o=e.setupContext=s.length>1?gl(e):null,r=Mn(e),i=On(s,e,0,[e.props,o]),a=qr(i);if(vt(),r(),(a||e.sp)&&!xn(e)&&$i(e),a){if(i.then(tr,tr),t)return i.then(c=>{nr(e,c)}).catch(c=>{hs(c,e,0)});e.asyncDep=i}else nr(e,i)}else oa(e)}function nr(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ge(t)&&(e.setupState=mi(t)),oa(e)}function oa(e,t,n){const s=e.type;e.render||(e.render=s.render||lt);{const o=Mn(e);bt();try{Mc(e)}finally{vt(),o()}}}const ml={get(e,t){return Te(e,"get",""),e[t]}};function gl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ml),slots:e.slots,emit:e.emit,expose:t}}function ws(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(mi(ic(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wn)return wn[n](e)},has(t,n){return n in t||n in wn}})):e.proxy}function bl(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function vl(e){return z(e)&&"__vccOpts"in e}const re=(e,t)=>dc(e,t,Rn);function To(e,t,n){try{ns(-1);const s=arguments.length;return s===2?ge(t)&&!q(t)?ss(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ss(n)&&(n=[n]),Q(e,t,n))}finally{ns(1)}}const yl="3.5.27";let Xs;const sr=typeof window<"u"&&window.trustedTypes;if(sr)try{Xs=sr.createPolicy("vue",{createHTML:e=>e})}catch{}const ra=Xs?e=>Xs.createHTML(e):e=>e,xl="http://www.w3.org/2000/svg",wl="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,or=ft&&ft.createElement("template"),_l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?ft.createElementNS(xl,e):t==="mathml"?ft.createElementNS(wl,e):n?ft.createElement(e,{is:n}):ft.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{or.innerHTML=ra(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=or.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},kt="transition",dn="animation",on=Symbol("_vtc"),ia={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},aa=_e({},Pi,ia),kl=e=>(e.displayName="Transition",e.props=aa,e),Ln=kl((e,{slots:t})=>To(kc,ca(e),t)),jt=(e,t=[])=>{q(e)?e.forEach(n=>n(...t)):e&&e(...t)},rr=e=>e?q(e)?e.some(t=>t.length>1):e.length>1:!1;function ca(e){const t={};for(const L in e)L in ia||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=i,appearToClass:l=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,v=Cl(o),k=v&&v[0],T=v&&v[1],{onBeforeEnter:P,onEnter:O,onEnterCancelled:j,onLeave:M,onLeaveCancelled:J,onBeforeAppear:X=P,onAppear:ee=O,onAppearCancelled:ue=j}=t,B=(L,se,ye,Ae)=>{L._enterCancelled=Ae,St(L,se?l:a),St(L,se?u:i),ye&&ye()},Z=(L,se)=>{L._isLeaving=!1,St(L,d),St(L,m),St(L,f),se&&se()},ae=L=>(se,ye)=>{const Ae=L?ee:O,U=()=>B(se,L,ye);jt(Ae,[se,U]),ir(()=>{St(se,L?c:r),it(se,L?l:a),rr(Ae)||ar(se,s,k,U)})};return _e(t,{onBeforeEnter(L){jt(P,[L]),it(L,r),it(L,i)},onBeforeAppear(L){jt(X,[L]),it(L,c),it(L,u)},onEnter:ae(!1),onAppear:ae(!0),onLeave(L,se){L._isLeaving=!0;const ye=()=>Z(L,se);it(L,d),L._enterCancelled?(it(L,f),eo(L)):(eo(L),it(L,f)),ir(()=>{L._isLeaving&&(St(L,d),it(L,m),rr(M)||ar(L,s,T,ye))}),jt(M,[L,ye])},onEnterCancelled(L){B(L,!1,void 0,!0),jt(j,[L])},onAppearCancelled(L){B(L,!0,void 0,!0),jt(ue,[L])},onLeaveCancelled(L){Z(L),jt(J,[L])}})}function Cl(e){if(e==null)return null;if(ge(e))return[Os(e.enter),Os(e.leave)];{const t=Os(e);return[t,t]}}function Os(e){return Oa(e)}function it(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[on]||(e[on]=new Set)).add(t)}function St(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[on];n&&(n.delete(t),n.size||(e[on]=void 0))}function ir(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sl=0;function ar(e,t,n,s){const o=e._endId=++Sl,r=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:a,propCount:c}=la(e,t);if(!i)return s();const u=i+"end";let l=0;const d=()=>{e.removeEventListener(u,f),r()},f=m=>{m.target===e&&++l>=c&&d()};setTimeout(()=>{l<c&&d()},a+1),e.addEventListener(u,f)}function la(e,t){const n=window.getComputedStyle(e),s=v=>(n[v]||"").split(", "),o=s(`${kt}Delay`),r=s(`${kt}Duration`),i=cr(o,r),a=s(`${dn}Delay`),c=s(`${dn}Duration`),u=cr(a,c);let l=null,d=0,f=0;t===kt?i>0&&(l=kt,d=i,f=r.length):t===dn?u>0&&(l=dn,d=u,f=c.length):(d=Math.max(i,u),l=d>0?i>u?kt:dn:null,f=l?l===kt?r.length:c.length:0);const m=l===kt&&/\b(?:transform|all)(?:,|$)/.test(s(`${kt}Property`).toString());return{type:l,timeout:d,propCount:f,hasTransform:m}}function cr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>lr(n)+lr(e[s])))}function lr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function eo(e){return(e?e.ownerDocument:document).body.offsetHeight}function Al(e,t,n){const s=e[on];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ur=Symbol("_vod"),Tl=Symbol("_vsh"),El=Symbol(""),Pl=/(?:^|;)\s*display\s*:/;function Rl(e,t,n){const s=e.style,o=ve(n);let r=!1;if(n&&!o){if(t)if(ve(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Jn(s,a,"")}else for(const i in t)n[i]==null&&Jn(s,i,"");for(const i in n)i==="display"&&(r=!0),Jn(s,i,n[i])}else if(o){if(t!==n){const i=s[El];i&&(n+=";"+i),s.cssText=n,r=Pl.test(n)}}else t&&e.removeAttribute("style");ur in e&&(e[ur]=r?s.display:"",e[Tl]&&(s.display="none"))}const dr=/\s*!important$/;function Jn(e,t,n){if(q(n))n.forEach(s=>Jn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Dl(e,t);dr.test(n)?e.setProperty(Gt(s),n.replace(dr,""),"important"):e[s]=n}}const pr=["Webkit","Moz","ms"],$s={};function Dl(e,t){const n=$s[t];if(n)return n;let s=Ke(t);if(s!=="filter"&&s in e)return $s[t]=s;s=ds(s);for(let o=0;o<pr.length;o++){const r=pr[o]+s;if(r in e)return $s[t]=r}return t}const fr="http://www.w3.org/1999/xlink";function hr(e,t,n,s,o,r=Ba(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(fr,t.slice(6,t.length)):e.setAttributeNS(fr,t,n):n==null||r&&!Jr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Ot(n)?String(n):n)}function mr(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ra(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Jr(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function Jt(e,t,n,s){e.addEventListener(t,n,s)}function Il(e,t,n,s){e.removeEventListener(t,n,s)}const gr=Symbol("_vei");function Ol(e,t,n,s,o=null){const r=e[gr]||(e[gr]={}),i=r[t];if(s&&i)i.value=s;else{const[a,c]=$l(t);if(s){const u=r[t]=Nl(s,o);Jt(e,a,u,c)}else i&&(Il(e,a,i,c),r[t]=void 0)}}const br=/(?:Once|Passive|Capture)$/;function $l(e){let t;if(br.test(e)){t={};let s;for(;s=e.match(br);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gt(e.slice(2)),t]}let Ms=0;const Ml=Promise.resolve(),Ll=()=>Ms||(Ml.then(()=>Ms=0),Ms=Date.now());function Nl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ze(jl(s,n.value),t,5,[s])};return n.value=e,n.attached=Ll(),n}function jl(e,t){if(q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const vr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Bl=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?Al(e,s,i):t==="style"?Rl(e,n,s):cs(t)?ao(t)||Ol(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fl(e,t,s,i))?(mr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hr(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ve(s))?mr(e,Ke(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),hr(e,t,s,i))};function Fl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&vr(t)&&z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return vr(t)&&ve(n)?!1:t in e}const ua=new WeakMap,da=new WeakMap,rs=Symbol("_moveCb"),yr=Symbol("_enterCb"),Hl=e=>(delete e.props.mode,e),Vl=Hl({name:"TransitionGroup",props:_e({},aa,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Ao(),s=Ei();let o,r;return Li(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Kl(o[0].el,n.vnode.el,i)){o=[];return}o.forEach(Ul),o.forEach(Gl);const a=o.filter(ql);eo(n.vnode.el),a.forEach(c=>{const u=c.el,l=u.style;it(u,i),l.transform=l.webkitTransform=l.transitionDuration="";const d=u[rs]=f=>{f&&f.target!==u||(!f||f.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[rs]=null,St(u,i))};u.addEventListener("transitionend",d)}),o=[]}),()=>{const i=oe(e),a=ca(i);let c=i.tag||ie;if(o=[],r)for(let u=0;u<r.length;u++){const l=r[u];l.el&&l.el instanceof Element&&(o.push(l),Ut(l,Tn(l,a,s,n)),ua.set(l,{left:l.el.offsetLeft,top:l.el.offsetTop}))}r=t.default?xo(t.default()):[];for(let u=0;u<r.length;u++){const l=r[u];l.key!=null&&Ut(l,Tn(l,a,s,n))}return Q(c,null,r)}}}),Wl=Vl;function Ul(e){const t=e.el;t[rs]&&t[rs](),t[yr]&&t[yr]()}function Gl(e){da.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function ql(e){const t=ua.get(e),n=da.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",e}}function Kl(e,t,n){const s=e.cloneNode(),o=e[on];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=la(s);return r.removeChild(s),i}const xr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?n=>Gn(t,n):t};function Yl(e){e.target.composing=!0}function wr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ls=Symbol("_assign");function _r(e,t,n){return t&&(e=e.trim()),n&&(e=uo(e)),e}const pa={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[Ls]=xr(o);const r=s||o.props&&o.props.type==="number";Jt(e,t?"change":"input",i=>{i.target.composing||e[Ls](_r(e.value,n,r))}),(n||r)&&Jt(e,"change",()=>{e.value=_r(e.value,n,r)}),t||(Jt(e,"compositionstart",Yl),Jt(e,"compositionend",wr),Jt(e,"change",wr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},i){if(e[Ls]=xr(i),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?uo(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===c)||(e.value=c))}},zl=["ctrl","shift","alt","meta"],Jl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>zl.some(n=>e[`${n}Key`]&&!t.includes(n))},Eo=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...r)=>{for(let i=0;i<t.length;i++){const a=Jl[t[i]];if(a&&a(o,t))return}return e(o,...r)}))},Ql=_e({patchProp:Bl},_l);let kr;function Zl(){return kr||(kr=tl(Ql))}const Xl=((...e)=>{const t=Zl().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=tu(s);if(!o)return;const r=t._component;!z(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,eu(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t});function eu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function tu(e){return ve(e)?document.querySelector(e):e}const Qt=typeof document<"u";function fa(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function nu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&fa(e.default)}const ce=Object.assign;function Ns(e,t){const n={};for(const s in t){const o=t[s];n[s]=et(o)?o.map(e):e(o)}return n}const kn=()=>{},et=Array.isArray;function Cr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const ha=/#/g,su=/&/g,ou=/\//g,ru=/=/g,iu=/\?/g,ma=/\+/g,au=/%5B/g,cu=/%5D/g,ga=/%5E/g,lu=/%60/g,ba=/%7B/g,uu=/%7C/g,va=/%7D/g,du=/%20/g;function Po(e){return e==null?"":encodeURI(""+e).replace(uu,"|").replace(au,"[").replace(cu,"]")}function pu(e){return Po(e).replace(ba,"{").replace(va,"}").replace(ga,"^")}function to(e){return Po(e).replace(ma,"%2B").replace(du,"+").replace(ha,"%23").replace(su,"%26").replace(lu,"`").replace(ba,"{").replace(va,"}").replace(ga,"^")}function fu(e){return to(e).replace(ru,"%3D")}function hu(e){return Po(e).replace(ha,"%23").replace(iu,"%3F")}function mu(e){return hu(e).replace(ou,"%2F")}function Dn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const gu=/\/$/,bu=e=>e.replace(gu,"");function js(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(s=t.slice(0,c),r=t.slice(c,a>0?a:t.length),o=e(r.slice(1))),a>=0&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=wu(s??t,n),{fullPath:s+r+i,path:s,query:o,hash:Dn(i)}}function vu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Sr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function yu(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&rn(t.matched[s],n.matched[o])&&ya(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function rn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ya(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!xu(e[n],t[n]))return!1;return!0}function xu(e,t){return et(e)?Ar(e,t):et(t)?Ar(t,e):e?.valueOf()===t?.valueOf()}function Ar(e,t){return et(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function wu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,a;for(i=0;i<s.length;i++)if(a=s[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let no=(function(e){return e.pop="pop",e.push="push",e})({}),Bs=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function _u(e){if(!e)if(Qt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),bu(e)}const ku=/^[^#]+#/;function Cu(e,t){return e.replace(ku,"#")+t}function Su(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const _s=()=>({left:window.scrollX,top:window.scrollY});function Au(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Su(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Tr(e,t){return(history.state?history.state.position-t:-1)+e}const so=new Map;function Tu(e,t){so.set(e,t)}function Eu(e){const t=so.get(e);return so.delete(e),t}function Pu(e){return typeof e=="string"||e&&typeof e=="object"}function xa(e){return typeof e=="string"||typeof e=="symbol"}let xe=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const wa=Symbol("");xe.MATCHER_NOT_FOUND+"",xe.NAVIGATION_GUARD_REDIRECT+"",xe.NAVIGATION_ABORTED+"",xe.NAVIGATION_CANCELLED+"",xe.NAVIGATION_DUPLICATED+"";function an(e,t){return ce(new Error,{type:e,[wa]:!0},t)}function pt(e,t){return e instanceof Error&&wa in e&&(t==null||!!(e.type&t))}const Ru=["params","query","hash"];function Du(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Ru)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Iu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(ma," "),r=o.indexOf("="),i=Dn(r<0?o:o.slice(0,r)),a=r<0?null:Dn(o.slice(r+1));if(i in t){let c=t[i];et(c)||(c=t[i]=[c]),c.push(a)}else t[i]=a}return t}function Er(e){let t="";for(let n in e){const s=e[n];if(n=fu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(et(s)?s.map(o=>o&&to(o)):[s&&to(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Ou(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=et(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const $u=Symbol(""),Pr=Symbol(""),ks=Symbol(""),Ro=Symbol(""),oo=Symbol("");function pn(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Pt(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const u=f=>{f===!1?c(an(xe.NAVIGATION_ABORTED,{from:n,to:t})):f instanceof Error?c(f):Pu(f)?c(an(xe.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(i&&s.enterCallbacks[o]===i&&typeof f=="function"&&i.push(f),a())},l=r(()=>e.call(s&&s.instances[o],t,n,u));let d=Promise.resolve(l);e.length<3&&(d=d.then(u)),d.catch(f=>c(f))})}function Fs(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const a in i.components){let c=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(fa(c)){const u=(c.__vccOpts||c)[t];u&&r.push(Pt(u,n,s,i,a,o))}else{let u=c();r.push(()=>u.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=nu(l)?l.default:l;i.mods[a]=l,i.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Pt(f,n,s,i,a,o)()}))}}return r}function Mu(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(u=>rn(u,a))?s.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>rn(u,c))||o.push(c))}return[n,s,o]}let Lu=()=>location.protocol+"//"+location.host;function _a(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(i);return a[0]!=="/"&&(a="/"+a),Sr(a,"")}return Sr(n,e)+s+o}function Nu(e,t,n,s){let o=[],r=[],i=null;const a=({state:f})=>{const m=_a(e,location),v=n.value,k=t.value;let T=0;if(f){if(n.value=m,t.value=f,i&&i===v){i=null;return}T=k?f.position-k.position:0}else s(m);o.forEach(P=>{P(n.value,v,{delta:T,type:no.pop,direction:T?T>0?Bs.forward:Bs.back:Bs.unknown})})};function c(){i=n.value}function u(f){o.push(f);const m=()=>{const v=o.indexOf(f);v>-1&&o.splice(v,1)};return r.push(m),m}function l(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(ce({},f.state,{scroll:_s()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",l),document.removeEventListener("visibilitychange",l)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",l),document.addEventListener("visibilitychange",l),{pauseListeners:c,listen:u,destroy:d}}function Rr(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?_s():null}}function ju(e){const{history:t,location:n}=window,s={value:_a(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,l){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Lu()+e+c;try{t[l?"replaceState":"pushState"](u,"",f),o.value=u}catch(m){console.error(m),n[l?"replace":"assign"](f)}}function i(c,u){r(c,ce({},t.state,Rr(o.value.back,c,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=c}function a(c,u){const l=ce({},o.value,t.state,{forward:c,scroll:_s()});r(l.current,l,!0),r(c,ce({},Rr(s.value,c,null),{position:l.position+1},u),!1),s.value=c}return{location:s,state:o,push:a,replace:i}}function Bu(e){e=_u(e);const t=ju(e),n=Nu(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=ce({location:"",base:e,go:s,createHref:Cu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let Ht=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ke=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ke||{});const Fu={type:Ht.Static,value:""},Hu=/[a-zA-Z0-9_]/;function Vu(e){if(!e)return[[]];if(e==="/")return[[Fu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=ke.Static,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,c,u="",l="";function d(){u&&(n===ke.Static?r.push({type:Ht.Static,value:u}):n===ke.Param||n===ke.ParamRegExp||n===ke.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ht.Param,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==ke.ParamRegExp){s=n,n=ke.EscapeNext;continue}switch(n){case ke.Static:c==="/"?(u&&d(),i()):c===":"?(d(),n=ke.Param):f();break;case ke.EscapeNext:f(),n=s;break;case ke.Param:c==="("?n=ke.ParamRegExp:Hu.test(c)?f():(d(),n=ke.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case ke.ParamRegExp:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=ke.ParamRegExpEnd:l+=c;break;case ke.ParamRegExpEnd:d(),n=ke.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===ke.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),o}const Dr="[^/]+?",Wu={sensitive:!1,strict:!1,start:!0,end:!0};var Ie=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ie||{});const Uu=/[.+*?^${}()[\]/\\]/g;function Gu(e,t){const n=ce({},Wu,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const l=u.length?[]:[Ie.Root];n.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const f=u[d];let m=Ie.Segment+(n.sensitive?Ie.BonusCaseSensitive:0);if(f.type===Ht.Static)d||(o+="/"),o+=f.value.replace(Uu,"\\$&"),m+=Ie.Static;else if(f.type===Ht.Param){const{value:v,repeatable:k,optional:T,regexp:P}=f;r.push({name:v,repeatable:k,optional:T});const O=P||Dr;if(O!==Dr){m+=Ie.BonusCustomRegExp;try{`${O}`}catch(M){throw new Error(`Invalid custom RegExp for param "${v}" (${O}): `+M.message)}}let j=k?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(j=T&&u.length<2?`(?:/${j})`:"/"+j),T&&(j+="?"),o+=j,m+=Ie.Dynamic,T&&(m+=Ie.BonusOptional),k&&(m+=Ie.BonusRepeatable),O===".*"&&(m+=Ie.BonusWildcard)}l.push(m)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Ie.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const l=u.match(i),d={};if(!l)return null;for(let f=1;f<l.length;f++){const m=l[f]||"",v=r[f-1];d[v.name]=m&&v.repeatable?m.split("/"):m}return d}function c(u){let l="",d=!1;for(const f of e){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const m of f)if(m.type===Ht.Static)l+=m.value;else if(m.type===Ht.Param){const{value:v,repeatable:k,optional:T}=m,P=v in u?u[v]:"";if(et(P)&&!k)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const O=et(P)?P.join("/"):P;if(!O)if(T)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);l+=O}}return l||"/"}return{re:i,score:s,keys:r,parse:a,stringify:c}}function qu(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Ie.Static+Ie.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ie.Static+Ie.Segment?1:-1:0}function ka(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=qu(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(Ir(s))return 1;if(Ir(o))return-1}return o.length-s.length}function Ir(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ku={strict:!1,end:!0,sensitive:!1};function Yu(e,t,n){const s=Gu(Vu(e.path),n),o=ce(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function zu(e,t){const n=[],s=new Map;t=Cr(Ku,t);function o(d){return s.get(d)}function r(d,f,m){const v=!m,k=$r(d);k.aliasOf=m&&m.record;const T=Cr(t,d),P=[k];if("alias"in d){const M=typeof d.alias=="string"?[d.alias]:d.alias;for(const J of M)P.push($r(ce({},k,{components:m?m.record.components:k.components,path:J,aliasOf:m?m.record:k})))}let O,j;for(const M of P){const{path:J}=M;if(f&&J[0]!=="/"){const X=f.record.path,ee=X[X.length-1]==="/"?"":"/";M.path=f.record.path+(J&&ee+J)}if(O=Yu(M,f,T),m?m.alias.push(O):(j=j||O,j!==O&&j.alias.push(O),v&&d.name&&!Mr(O)&&i(d.name)),Ca(O)&&c(O),k.children){const X=k.children;for(let ee=0;ee<X.length;ee++)r(X[ee],O,m&&m.children[ee])}m=m||O}return j?()=>{i(j)}:kn}function i(d){if(xa(d)){const f=s.get(d);f&&(s.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return n}function c(d){const f=Zu(d,n);n.splice(f,0,d),d.record.name&&!Mr(d)&&s.set(d.record.name,d)}function u(d,f){let m,v={},k,T;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw an(xe.MATCHER_NOT_FOUND,{location:d});T=m.record.name,v=ce(Or(f.params,m.keys.filter(j=>!j.optional).concat(m.parent?m.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),d.params&&Or(d.params,m.keys.map(j=>j.name))),k=m.stringify(v)}else if(d.path!=null)k=d.path,m=n.find(j=>j.re.test(k)),m&&(v=m.parse(k),T=m.record.name);else{if(m=f.name?s.get(f.name):n.find(j=>j.re.test(f.path)),!m)throw an(xe.MATCHER_NOT_FOUND,{location:d,currentLocation:f});T=m.record.name,v=ce({},f.params,d.params),k=m.stringify(v)}const P=[];let O=m;for(;O;)P.unshift(O.record),O=O.parent;return{name:T,path:k,params:v,matched:P,meta:Qu(P)}}e.forEach(d=>r(d));function l(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:i,clearRoutes:l,getRoutes:a,getRecordMatcher:o}}function Or(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function $r(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ju(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ju(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Mr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Qu(e){return e.reduce((t,n)=>ce(t,n.meta),{})}function Zu(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;ka(e,t[r])<0?s=r:n=r+1}const o=Xu(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function Xu(e){let t=e;for(;t=t.parent;)if(Ca(t)&&ka(e,t)===0)return t}function Ca({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Lr(e){const t=Je(ks),n=Je(Ro),s=re(()=>{const c=Le(e.to);return t.resolve(c)}),o=re(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const f=d.findIndex(rn.bind(null,l));if(f>-1)return f;const m=Nr(c[u-2]);return u>1&&Nr(l)===m&&d[d.length-1].path!==m?d.findIndex(rn.bind(null,c[u-2])):f}),r=re(()=>o.value>-1&&od(n.params,s.value.params)),i=re(()=>o.value>-1&&o.value===n.matched.length-1&&ya(n.params,s.value.params));function a(c={}){if(sd(c)){const u=t[Le(e.replace)?"replace":"push"](Le(e.to)).catch(kn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:re(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}function ed(e){return e.length===1?e[0]:e}const td=Oi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Lr,setup(e,{slots:t}){const n=In(Lr(e)),{options:s}=Je(ks),o=re(()=>({[jr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[jr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&ed(t.default(n));return e.custom?r:To("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),nd=td;function sd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function od(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!et(o)||o.length!==s.length||s.some((r,i)=>r.valueOf()!==o[i].valueOf()))return!1}return!0}function Nr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const jr=(e,t,n)=>e??t??n,rd=Oi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Je(oo),o=re(()=>e.route||s.value),r=Je(Pr,0),i=re(()=>{let u=Le(r);const{matched:l}=o.value;let d;for(;(d=l[u])&&!d.components;)u++;return u}),a=re(()=>o.value.matched[i.value]);qn(Pr,re(()=>i.value+1)),qn($u,a),qn(oo,o);const c=pe();return Dt(()=>[c.value,a.value,e.name],([u,l,d],[f,m,v])=>{l&&(l.instances[d]=u,m&&m!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=m.leaveGuards),l.updateGuards.size||(l.updateGuards=m.updateGuards))),u&&l&&(!m||!rn(l,m)||!f)&&(l.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=o.value,l=e.name,d=a.value,f=d&&d.components[l];if(!f)return Br(n.default,{Component:f,route:u});const m=d.props[l],v=m?m===!0?u.params:typeof m=="function"?m(u):m:null,T=To(f,ce({},v,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[l]=null)},ref:c}));return Br(n.default,{Component:T,route:u})||T}}});function Br(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const id=rd;function ad(e){const t=zu(e.routes,e),n=e.parseQuery||Iu,s=e.stringifyQuery||Er,o=e.history,r=pn(),i=pn(),a=pn(),c=ac(Ct);let u=Ct;Qt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ns.bind(null,w=>""+w),d=Ns.bind(null,mu),f=Ns.bind(null,Dn);function m(w,N){let I,H;return xa(w)?(I=t.getRecordMatcher(w),H=N):H=w,t.addRoute(H,I)}function v(w){const N=t.getRecordMatcher(w);N&&t.removeRoute(N)}function k(){return t.getRoutes().map(w=>w.record)}function T(w){return!!t.getRecordMatcher(w)}function P(w,N){if(N=ce({},N||c.value),typeof w=="string"){const b=js(n,w,N.path),y=t.resolve({path:b.path},N),_=o.createHref(b.fullPath);return ce(b,y,{params:f(y.params),hash:Dn(b.hash),redirectedFrom:void 0,href:_})}let I;if(w.path!=null)I=ce({},w,{path:js(n,w.path,N.path).path});else{const b=ce({},w.params);for(const y in b)b[y]==null&&delete b[y];I=ce({},w,{params:d(b)}),N.params=d(N.params)}const H=t.resolve(I,N),te=w.hash||"";H.params=l(f(H.params));const p=vu(s,ce({},w,{hash:pu(te),path:H.path})),h=o.createHref(p);return ce({fullPath:p,hash:te,query:s===Er?Ou(w.query):w.query||{}},H,{redirectedFrom:void 0,href:h})}function O(w){return typeof w=="string"?js(n,w,c.value.path):ce({},w)}function j(w,N){if(u!==w)return an(xe.NAVIGATION_CANCELLED,{from:N,to:w})}function M(w){return ee(w)}function J(w){return M(ce(O(w),{replace:!0}))}function X(w,N){const I=w.matched[w.matched.length-1];if(I&&I.redirect){const{redirect:H}=I;let te=typeof H=="function"?H(w,N):H;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=O(te):{path:te},te.params={}),ce({query:w.query,hash:w.hash,params:te.path!=null?{}:w.params},te)}}function ee(w,N){const I=u=P(w),H=c.value,te=w.state,p=w.force,h=w.replace===!0,b=X(I,H);if(b)return ee(ce(O(b),{state:typeof b=="object"?ce({},te,b.state):te,force:p,replace:h}),N||I);const y=I;y.redirectedFrom=N;let _;return!p&&yu(s,H,I)&&(_=an(xe.NAVIGATION_DUPLICATED,{to:y,from:H}),tt(H,H,!0,!1)),(_?Promise.resolve(_):Z(y,H)).catch(x=>pt(x)?pt(x,xe.NAVIGATION_GUARD_REDIRECT)?x:_t(x):K(x,y,H)).then(x=>{if(x){if(pt(x,xe.NAVIGATION_GUARD_REDIRECT))return ee(ce({replace:h},O(x.to),{state:typeof x.to=="object"?ce({},te,x.to.state):te,force:p}),N||y)}else x=L(y,H,!0,h,te);return ae(y,H,x),x})}function ue(w,N){const I=j(w,N);return I?Promise.reject(I):Promise.resolve()}function B(w){const N=Kt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(w):w()}function Z(w,N){let I;const[H,te,p]=Mu(w,N);I=Fs(H.reverse(),"beforeRouteLeave",w,N);for(const b of H)b.leaveGuards.forEach(y=>{I.push(Pt(y,w,N))});const h=ue.bind(null,w,N);return I.push(h),Ue(I).then(()=>{I=[];for(const b of r.list())I.push(Pt(b,w,N));return I.push(h),Ue(I)}).then(()=>{I=Fs(te,"beforeRouteUpdate",w,N);for(const b of te)b.updateGuards.forEach(y=>{I.push(Pt(y,w,N))});return I.push(h),Ue(I)}).then(()=>{I=[];for(const b of p)if(b.beforeEnter)if(et(b.beforeEnter))for(const y of b.beforeEnter)I.push(Pt(y,w,N));else I.push(Pt(b.beforeEnter,w,N));return I.push(h),Ue(I)}).then(()=>(w.matched.forEach(b=>b.enterCallbacks={}),I=Fs(p,"beforeRouteEnter",w,N,B),I.push(h),Ue(I))).then(()=>{I=[];for(const b of i.list())I.push(Pt(b,w,N));return I.push(h),Ue(I)}).catch(b=>pt(b,xe.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function ae(w,N,I){a.list().forEach(H=>B(()=>H(w,N,I)))}function L(w,N,I,H,te){const p=j(w,N);if(p)return p;const h=N===Ct,b=Qt?history.state:{};I&&(H||h?o.replace(w.fullPath,ce({scroll:h&&b&&b.scroll},te)):o.push(w.fullPath,te)),c.value=w,tt(w,N,I,h),_t()}let se;function ye(){se||(se=o.listen((w,N,I)=>{if(!Mt.listening)return;const H=P(w),te=X(H,Mt.currentRoute.value);if(te){ee(ce(te,{replace:!0,force:!0}),H).catch(kn);return}u=H;const p=c.value;Qt&&Tu(Tr(p.fullPath,I.delta),_s()),Z(H,p).catch(h=>pt(h,xe.NAVIGATION_ABORTED|xe.NAVIGATION_CANCELLED)?h:pt(h,xe.NAVIGATION_GUARD_REDIRECT)?(ee(ce(O(h.to),{force:!0}),H).then(b=>{pt(b,xe.NAVIGATION_ABORTED|xe.NAVIGATION_DUPLICATED)&&!I.delta&&I.type===no.pop&&o.go(-1,!1)}).catch(kn),Promise.reject()):(I.delta&&o.go(-I.delta,!1),K(h,H,p))).then(h=>{h=h||L(H,p,!1),h&&(I.delta&&!pt(h,xe.NAVIGATION_CANCELLED)?o.go(-I.delta,!1):I.type===no.pop&&pt(h,xe.NAVIGATION_ABORTED|xe.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),ae(H,p,h)}).catch(kn)}))}let Ae=pn(),U=pn(),F;function K(w,N,I){_t(w);const H=U.list();return H.length?H.forEach(te=>te(w,N,I)):console.error(w),Promise.reject(w)}function Ye(){return F&&c.value!==Ct?Promise.resolve():new Promise((w,N)=>{Ae.add([w,N])})}function _t(w){return F||(F=!w,ye(),Ae.list().forEach(([N,I])=>w?I(w):N()),Ae.reset()),w}function tt(w,N,I,H){const{scrollBehavior:te}=e;if(!Qt||!te)return Promise.resolve();const p=!I&&Eu(Tr(w.fullPath,0))||(H||!I)&&history.state&&history.state.scroll||null;return ms().then(()=>te(w,N,p)).then(h=>h&&Au(h)).catch(h=>K(h,w,N))}const Ne=w=>o.go(w);let qt;const Kt=new Set,Mt={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:T,getRoutes:k,resolve:P,options:e,push:M,replace:J,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:U.add,isReady:Ye,install(w){w.component("RouterLink",nd),w.component("RouterView",id),w.config.globalProperties.$router=Mt,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Le(c)}),Qt&&!qt&&c.value===Ct&&(qt=!0,M(o.location).catch(H=>{}));const N={};for(const H in Ct)Object.defineProperty(N,H,{get:()=>c.value[H],enumerable:!0});w.provide(ks,Mt),w.provide(Ro,fi(N)),w.provide(oo,c);const I=w.unmount;Kt.add(w),w.unmount=function(){Kt.delete(w),Kt.size<1&&(u=Ct,se&&se(),se=null,c.value=Ct,qt=!1,F=!1),I()}}};function Ue(w){return w.reduce((N,I)=>N.then(()=>B(I)),Promise.resolve())}return Mt}function Nn(){return Je(ks)}function Do(e){return Je(Ro)}const cd={__name:"App",setup(e){const t=Nn(),n=pe(!0);return t.isReady().then(()=>{setTimeout(()=>{n.value=!1},100)}),(s,o)=>{const r=vs("router-view");return C(),sn(r,null,{default:Xe(({Component:i,route:a})=>[Q(Ln,{name:n.value?"":"page",mode:"out-in"},{default:Xe(()=>[(C(),sn(Oc(i),{key:a.path}))]),_:2},1032,["name"])]),_:1})}}},Fr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",white:"#cdd6f4"},ld=[{id:"posts",label:"posts",href:"/posts",external:!1,accentColor:"mauve"},{id:"projects",label:"projects",href:"/projects",external:!1,accentColor:"lavender"},{id:"github",label:"github",href:"https://github.com/Hecker-01",external:!0,accentColor:"white"}];function ud(){return ld.map(e=>({...e,accentColor:Fr[e.accentColor]||Fr.mauve}))}const Ce=In({discordUser:null,spotify:null,discordStatus:"offline",discordStatusColor:"text-catppuccin-subtle",editorActivity:null,isConnected:!1,isLoading:!0});class dd{constructor(){this.ws=null,this.heartbeat=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.maxAttempts=5,this.userId="766897363050037248",this.isConnecting=!1}connect(){if(!(this.isConnecting||this.ws&&this.ws.readyState===WebSocket.OPEN)){this.isConnecting=!0,Ce.isLoading=!0;try{this.ws=new WebSocket("wss://api.lanyard.rest/socket"),this.ws.onopen=()=>{this.isConnecting=!1,this.reconnectAttempts=0,Ce.isConnected=!0,this.ws.send(JSON.stringify({op:2,d:{subscribe_to_id:this.userId}}))},this.ws.onmessage=t=>{try{this.handleMessage(JSON.parse(t.data))}catch{}},this.ws.onclose=t=>{this.isConnecting=!1,Ce.isConnected=!1,this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),t.code!==1e3&&this.reconnectAttempts<this.maxAttempts&&this.scheduleReconnect()},this.ws.onerror=()=>{this.isConnecting=!1,Ce.isConnected=!1}}catch{this.isConnecting=!1,Ce.isLoading=!1,this.scheduleReconnect()}}}handleMessage(t){t.op===1?this.startHeartbeat(t.d.heartbeat_interval):t.op===0&&(t.t==="INIT_STATE"||t.t==="PRESENCE_UPDATE")&&(this.updatePresence(t.d),Ce.isLoading=!1)}updatePresence(t){t.discord_user&&(Ce.discordUser={username:t.discord_user.username,discriminator:t.discord_user.discriminator,avatar:t.discord_user.avatar,id:t.discord_user.id}),Ce.spotify=t.spotify?{song:t.spotify.song,artist:t.spotify.artist,track_id:t.spotify.track_id}:null,t.discord_status&&(Ce.discordStatus=t.discord_status,Ce.discordStatusColor=t.discord_status==="online"?"text-catppuccin-gold":"text-catppuccin-subtle"),Ce.editorActivity=t.activities?.find(n=>n.name==="Visual Studio Code"||n.name==="Code"||n.name==="Zed")}startHeartbeat(t){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({op:3}))},t)}scheduleReconnect(){this.reconnectTimeout&&clearTimeout(this.reconnectTimeout),this.reconnectAttempts++;const t=Math.min(1e3*Math.pow(2,this.reconnectAttempts-1),3e4);this.reconnectTimeout=setTimeout(()=>this.connect(),t)}disconnect(){this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),this.ws&&(this.ws.close(1e3,"Manual disconnect"),this.ws=null),Ce.isConnected=!1}}const pd=new dd;pd.connect();const wt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},fd={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},hd={class:"flex gap-4 sm:gap-6 text-sm bg-catppuccin-surface/10 rounded-lg p-4 items-center"},md={class:"hidden sm:block flex-shrink-0 ascii-tooltip-wrapper"},gd={class:"text-catppuccin-mauve text-xs select-none ascii-art","aria-label":"Art credit: @vilthuril.rah on Instagram"},bd={class:"space-y-0.5 min-w-0 flex-1"},vd={key:0,class:"flex"},yd={class:"text-catppuccin-text truncate"},xd={key:1,class:"flex"},wd={class:"text-catppuccin-text"},_d={key:2,class:"flex"},kd={class:"text-catppuccin-text truncate"},Cd={key:3,class:"flex"},Sd={class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},Ad={class:"text-catppuccin-text truncate"},Td={key:0},Ed={key:1,class:"text-catppuccin-subtle"},Pd={key:2},Rd={__name:"NeofetchStatus",setup(e){const t=re(()=>Ce.discordStatusColor),n=re(()=>Ce.spotify),s=re(()=>Ce.discordStatus),o=re(()=>Ce.discordUser),r=re(()=>Ce.editorActivity),i=re(()=>Ce.isLoading),a=pe({name:"",version:""});ut(()=>{const d=navigator.userAgent;let f="Unknown",m="";d.includes("Firefox/")?(f="Firefox",m=d.match(/Firefox\/(\d+(\.\d+)?)/)?.[1]||""):d.includes("Edg/")?(f="Edge",m=d.match(/Edg\/(\d+(\.\d+)?)/)?.[1]||""):d.includes("Chrome/")?(f="Chrome",m=d.match(/Chrome\/(\d+(\.\d+)?)/)?.[1]||""):d.includes("Safari/")&&!d.includes("Chrome")?(f="Safari",m=d.match(/Version\/(\d+(\.\d+)?)/)?.[1]||""):(d.includes("Opera")||d.includes("OPR/"))&&(f="Opera",m=d.match(/(?:Opera|OPR)\/(\d+(\.\d+)?)/)?.[1]||""),a.value={name:f,version:m}});const c=`
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
`),u=re(()=>{if(!r.value)return null;if(r.value.details&&r.value.details.toLowerCase().includes("idling"))return"idling";const d=r.value.name,f=d==="Zed",k=d==="IntelliJ IDEA Ultimate"||d==="IntelliJ IDEA"||d==="Android Studio";let T="",P="";return k?(T=r.value.details||"",P=r.value.state||""):f?(T=r.value.state||"",P=r.value.details||""):(T=r.value.details||"",P=r.value.state||""),T=T.replace(/editing /i,"").replace(/working on /i,"").trim(),P=P.replace(/in /i,"").replace(/workspace: /i,"").trim(),{name:d,workspace:P,filename:T}}),l=re(()=>{if(!u.value||u.value==="idling")return null;const d=u.value.name;return d==="Zed"?"zed":d==="IntelliJ IDEA Ultimate"||d==="IntelliJ IDEA"?"intellij":d==="Android Studio"?"android-studio":"vscode"});return(d,f)=>(C(),A("div",fd,[f[10]||(f[10]=g("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ neofetch --live",-1)),g("div",hd,[g("div",md,[g("pre",gd,[(C(!0),A(ie,null,Se(Le(c),(m,v)=>(C(),A(ie,{key:v},[Me(G(m)+`
`,1)],64))),128))]),f[0]||(f[0]=g("span",{class:"ascii-tooltip"},[Me("Art by "),g("a",{href:"https://www.instagram.com/vilthuril.rah/",target:"_blank",rel:"noopener noreferrer",class:"ascii-tooltip-link"},"@vilthuril.rah"),Me(" on Instagram")],-1))]),g("div",bd,[f[8]||(f[8]=Pn('<div class="mb-1" data-v-d7f88577><span class="text-catppuccin-mauve font-bold" data-v-d7f88577>heck</span><span class="text-catppuccin-blue font-bold" data-v-d7f88577>OS</span><span class="text-catppuccin-subtle" data-v-d7f88577> (v0.1.0)</span></div><div class="text-catppuccin-surface mb-2" data-v-d7f88577>------------------</div>',2)),a.value.name?(C(),A("div",vd,[f[1]||(f[1]=g("span",{class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},"browser",-1)),f[2]||(f[2]=g("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),g("span",yd,G(a.value.name)+" "+G(a.value.version),1)])):be("",!0),!i.value&&o.value?(C(),A("div",xd,[f[3]||(f[3]=g("span",{class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},"discord",-1)),f[4]||(f[4]=g("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),g("span",wd,G(o.value.username),1),g("span",{class:$t([t.value,"ml-1"])},"["+G(s.value)+"]",3)])):be("",!0),!i.value&&n.value?(C(),A("div",_d,[f[5]||(f[5]=g("span",{class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},"spotify",-1)),f[6]||(f[6]=g("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),g("span",kd,G(n.value.song)+" - "+G(n.value.artist),1)])):be("",!0),!i.value&&r.value&&u.value&&u.value!=="idling"&&(u.value.workspace||u.value.filename)?(C(),A("div",Cd,[g("span",Sd,G(l.value),1),f[7]||(f[7]=g("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),g("span",Ad,[u.value.workspace?(C(),A("span",Td,G(u.value.workspace.toLowerCase()),1)):be("",!0),u.value.workspace&&u.value.filename?(C(),A("span",Ed,"/")):be("",!0),u.value.filename?(C(),A("span",Pd,G(u.value.filename.toLowerCase()),1)):be("",!0)])])):be("",!0),f[9]||(f[9]=Pn('<div class="text-catppuccin-surface mb-2" data-v-d7f88577>------------------</div><div class="flex gap-0.5 mt-3" data-v-d7f88577><span class="w-4 h-4 rounded-sm bg-catppuccin-red" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-peach" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-yellow" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-green" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-teal" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-blue" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-mauve" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-pink" data-v-d7f88577></span></div>',2))])])]))}},Dd=wt(Rd,[["__scopeId","data-v-d7f88577"]]),Id={class:"mb-6"},Od={class:"mb-6"},$d={class:"flex items-center flex-wrap gap-3 text-sm mt-4"},Md=["href"],Ld={__name:"HeroSection",setup(e){const t=ud();return(n,s)=>{const o=vs("router-link");return C(),A("div",Id,[g("div",Od,[s[3]||(s[3]=Pn('<div class="text-catppuccin-subtle text-sm mb-2" data-v-7d441cc5>~$ whoami</div><h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2" data-v-7d441cc5><span class="text-catppuccin-mauve" data-v-7d441cc5>jesse</span><span class="text-catppuccin-subtle" data-v-7d441cc5>@</span><span class="text-catppuccin-blue" data-v-7d441cc5>heckr.dev</span></h1><div class="text-sm text-catppuccin-gray 6" data-v-7d441cc5><span class="text-catppuccin-subtle" data-v-7d441cc5>aka </span><span class="text-catppuccin-green" data-v-7d441cc5>Hecker_01</span></div>',3)),g("div",$d,[(C(!0),A(ie,null,Se(Le(t),r=>(C(),A(ie,{key:r.id},[r.external?(C(),A("a",{key:1,href:r.href,target:"_blank",class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group",style:we({"--accent-color":r.accentColor})},[s[1]||(s[1]=g("span",{class:"text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1)),g("span",{class:"font-medium transition-colors",style:we({color:r.accentColor})},"~/"+G(r.label),5),s[2]||(s[2]=g("svg",{class:"w-3 h-3 text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1))],12,Md)):(C(),sn(o,{key:0,to:r.href,class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group",style:we({"--accent-color":r.accentColor})},{default:Xe(()=>[s[0]||(s[0]=g("span",{class:"text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1)),g("span",{class:"font-medium transition-colors",style:we({color:r.accentColor})},"~/"+G(r.label),5)]),_:2},1032,["to","style"]))],64))),128))])]),s[4]||(s[4]=g("div",{class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},[g("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cat about.txt"),g("p",{class:"text-catppuccin-text leading-relaxed mb-4"},[Me(" Hi! I'm Jesse, a Dutch Software Development Student at Grafisch Lyceum Rotterdam. "),g("br"),Me(" I code all sorts of tools and applications mainly for my own use, but also plugins for Minecraft and Discord bots, but my main goal is to have fun while doing so! "),g("br"),Me(" My passion is Frontend development, but I also enjoy working on backend and mobile projects. "),g("br"),Me(" I've got experience in a lot of different "),g("a",{href:"#languages",class:"text-catppuccin-mauve underline hover:no-underline"},"programming languages"),Me(" and frameworks, and I love learning new ones! ")])],-1)),Q(Dd)])}}},Nd=wt(Ld,[["__scopeId","data-v-7d441cc5"]]),jd={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},Bd={key:0,class:"text-sm text-catppuccin-subtle"},Fd={key:1,class:"text-sm text-catppuccin-text"},Hd={key:0,class:"text-catppuccin-subtle"},Vd={key:2,class:"text-sm text-catppuccin-subtle"},Wd={__name:"LanguagesList",props:{languages:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){return(t,n)=>(C(),A("div",jd,[n[0]||(n[0]=g("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls ~/tools",-1)),e.loading?(C(),A("div",Bd," loading languages... ")):e.languages.length?(C(),A("div",Fd,[(C(!0),A(ie,null,Se(e.languages,(s,o)=>(C(),A("span",{key:s.language},[Me(G(s.language)+"("+G(s.count)+")",1),o<e.languages.length-1?(C(),A("span",Hd," | ")):be("",!0)]))),128))])):(C(),A("div",Vd,"no languages found"))]))}},Ud=`---
title: Kitsudo
slug: kitsudo
description: A local task planner for Android with subtasks, deadline reminders, and a Wear OS companion.
coverImage: /screenshot-kitsudo.png
accentColor: mauve
tags: [Android, Wear OS, Kotlin]
url: https://kitsudo.app
github: https://github.com/hecker-01/Kitsudo
status: active
unlisted: false
---

## About

Kitsudo is a to-do and task planner for Android. It runs entirely on the
device. No account, no cloud, no tracking. You write tasks, break them into
subtasks, set deadlines, and the app reminds you before things are due.

There is a Wear OS companion so you can check and tick off tasks from your
watch without pulling out your phone.

The look is built around the Catppuccin Mocha palette with a fox mascot, five
palettes total, and 14 accent swatches, plus Material You dynamic theming for
people who want the app to match their system colors.

## Features

- **Subtasks with cascade completion.** Nest subtasks under a task. Tick the
  parent and the children check off too, so a whole checklist closes in one tap.
- **Deadlines and reminders.** Due dates with early reminders, snooze, and
  quiet hours so nothing buzzes at night.
- **Swipe to complete or delete.** Swipe one way to complete, the other to
  delete. Both have undo.
- **Sorting and filters.** Sort by deadline, priority, or date added, and
  filter down to what you need to see.
- **Theming.** Five palettes, 14 accent colors, and Material You support.
- **Local and private.** Everything stays on the device.

## Technical Highlights

- Local persistence with **Room** (the boot sequence loads "Room database v2").
- **Wear OS** companion that pairs with the phone app to mirror and update tasks.
- Reminder scheduling that respects per-user quiet hours and supports snooze.
- Theming engine covering Catppuccin palettes and Android Material You at once.

Build it from source:

\`\`\`bash
git clone https://github.com/hecker-01/Kitsudo.git
cd Kitsudo
./gradlew assembleGithubRelease
\`\`\`

:::details Why fully local
There is no backend and no analytics. Tasks live in the on-device Room
database, reminders are scheduled locally, and the Wear OS sync happens
directly between the paired devices. That keeps the data private and the app
usable with no network at all.
:::
`,Gd=`---
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
`,qd=`---
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
`,Kd=`---
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
`,Yd=`---
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
`,zd=`---
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
`,Jd=`---
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
`,Qd=`---
title: Yume Ramen
slug: yume-ramen
description: Full-stack ramen restaurant app with a customer frontend, admin dashboard, and shared Node.js API.
coverImage: /screenshot-yume-front.png
accentColor: red
tags: [vue, tailwind, nodejs, api, fullstack]
url: https://yume.bram-jesse.sd-lab.nl/
github: https://github.com/hecker-01/yume-front
status: archived
unlisted: false
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
`,Hr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",maroon:"#eba0ac",flamingo:"#f2cdcd"},Zd=Object.assign({"/projects/kitsudo.md":Ud,"/projects/mcbe-pack-decryptor.md":Gd,"/projects/pingr.md":qd,"/projects/portfolio.md":Kd,"/projects/recodr.md":Yd,"/projects/satissuite.md":zd,"/projects/wordr.md":Jd,"/projects/yume-ramen.md":Qd}),Xd=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const c=(u,l)=>{l=l.trim(),l.startsWith("[")&&l.endsWith("]")?o[u]=l.slice(1,-1).split(",").map(d=>d.trim()):l==="true"?o[u]=!0:l==="false"?o[u]=!1:o[u]=l};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&c(i,a);const[d,...f]=u.split(":");if(!d||d.trim()==="")return;i=d.trim(),a=f.join(":").trim()}}),i&&a&&c(i,a),{frontmatter:o,content:s}},ep=()=>{const e=[];let t=1;return Object.entries(Zd).forEach(([n,s])=>{const{frontmatter:o,content:r}=Xd(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,description:o.description||"",coverImage:o.coverImage||null,accentColor:o.accentColor||"mauve",accentColorHex:Hr[o.accentColor]||Hr.mauve,tags:o.tags||[],url:o.url||null,github:o.github||null,status:o.status||"active",unlisted:o.unlisted===!0,content:r.trim()})}),e};let Wn=null;const Cs=(e=!1)=>(Wn||(Wn=ep()),(e?[...Wn]:Wn.filter(n=>!n.unlisted)).sort((n,s)=>n.title.localeCompare(s.title))),tp=e=>Cs(!0).find(t=>t.slug===e),np=()=>{const e=new Set;return Cs().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()};function sp(){return Cs().map(e=>({id:e.id,slug:e.slug,name:e.title,description:e.description,link:e.url||e.github||"#",screenshot:e.coverImage,accentColor:e.accentColorHex}))}const op={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},rp={key:0,class:"text-sm text-catppuccin-subtle"},ip={class:"lg:flex-1 lg:relative"},ap={key:0,class:"w-full flex-1 overflow-hidden bg-catppuccin-surface/30"},cp=["src","alt"],lp={class:"px-3 py-3 flex-shrink-0"},up={class:"flex items-start gap-3"},dp={class:"flex-1 min-w-0"},pp={class:"text-xs text-catppuccin-gray leading-relaxed"},fp={key:0,class:"flex justify-center gap-1.5 mt-3 flex-shrink-0"},hp=["onClick"],mp={__name:"ShowcaseCarousel",setup(e){const t=Nn(),n=pe([]),s=pe(0),o=pe(!1);let r=null;const i=re(()=>n.value.length?n.value[s.value]:null),a=c=>{t.push({path:"/projects",query:{project:c}})};return ut(()=>{n.value=sp(),n.value.length>1&&(r=setInterval(()=>{o.value||(s.value=(s.value+1)%n.value.length)},1e4))}),$n(()=>{r&&clearInterval(r)}),(c,u)=>(C(),A("div",op,[u[5]||(u[5]=g("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ cat ~/showcase",-1)),n.value.length?(C(),A("div",{key:1,class:"relative lg:flex-1 flex flex-col",onMouseenter:u[2]||(u[2]=l=>o.value=!0),onMouseleave:u[3]||(u[3]=l=>o.value=!1)},[g("div",ip,[Q(Ln,{name:"showcase",mode:"out-in"},{default:Xe(()=>[i.value?(C(),A("div",{key:i.value.id,onClick:u[0]||(u[0]=l=>a(i.value.slug)),class:"group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col cursor-pointer",style:we({borderColor:`${i.value.accentColor}40`})},[i.value.screenshot?(C(),A("div",ap,[g("img",{src:i.value.screenshot,alt:i.value.name,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,cp)])):be("",!0),g("div",lp,[g("div",up,[g("span",{class:"transition-colors",style:we({color:i.value.accentColor})},">",4),g("div",dp,[g("h3",{class:"text-sm font-medium text-catppuccin-text transition-colors mb-1",style:we({color:i.value.accentColor})},G(i.value.name),5),g("p",pp,G(i.value.description),1)])])])],4)):be("",!0)]),_:1})]),n.value.length>1?(C(),A("div",fp,[(C(!0),A(ie,null,Se(n.value,(l,d)=>(C(),A("button",{key:`dot-${l.id}`,onClick:f=>s.value=d,class:$t(["w-2 h-2.5 rounded-full transition-all",d===s.value?"bg-catppuccin-mauve w-4":"bg-catppuccin-surface/60 hover:bg-catppuccin-surface"]),style:we(d===s.value?{backgroundColor:i.value.accentColor}:{})},null,14,hp))),128))])):be("",!0),g("button",{onClick:u[1]||(u[1]=l=>Le(t).push("/projects")),class:"mt-3 w-full py-2 px-3 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-all flex items-center justify-center gap-2"},[...u[4]||(u[4]=[g("span",null,"more projects",-1),g("span",null,"→",-1)])])],32)):(C(),A("div",rp," no items to showcase "))]))}},gp=wt(mp,[["__scopeId","data-v-5e646ea4"]]),Io="hecker-01",Sa=async()=>{try{const e=[];let t=1;const n=100;for(;;){const r=await fetch(`https://api.github.com/users/${Io}/repos?per_page=${n}&page=${t}`);if(!r.ok)break;const i=await r.json();if(!i.length||(e.push(...i),i.length<n))break;t++}const s={};e.forEach(r=>{r.language&&(s[r.language]=(s[r.language]||0)+1)});const o=Object.entries(s).sort((r,i)=>i[1]-r[1]).map(([r,i])=>({language:r,count:i}));return{repos:e,languages:o,totalRepos:e.length}}catch(e){return console.error("Error fetching GitHub data:",e),{repos:[],languages:[],totalRepos:0}}},bp=async()=>{const t=new Date;t.getFullYear();try{const n=await fetch(`https://github-contributions-api.jogruber.de/v4/${Io}?y=last`);if(!n.ok)throw new Error("Failed to fetch contribution data");const s=await n.json(),o=[];if(s.contributions&&s.contributions.forEach(r=>{o.push({date:r.date,count:r.count})}),o.length>0){const i=new Date(t);i.setDate(i.getDate()-371+1);const a=[];for(let c=0;c<371;c++){const u=new Date(i);u.setDate(u.getDate()+c);const l=u.toISOString().split("T")[0],d=o.find(f=>f.date===l);a.push({date:l,count:d?d.count:0})}return a}throw new Error("No contributions data available")}catch(n){console.error("Error fetching contribution data:",n);const s=new Map;for(let o=370;o>=0;o--){const r=new Date(t);r.setDate(r.getDate()-o);const i=r.toISOString().split("T")[0];s.set(i,0)}return Array.from(s.entries()).sort((o,r)=>o[0].localeCompare(r[0])).map(([o,r])=>({date:o,count:r}))}},Hs=e=>e===0?0:e<=2?1:e<=5?2:e<=8?3:4,vp=e=>`https://github.com/${Io}?tab=overview&from=${e}&to=${e}`,yp={class:"mt-6 border-l-2 border-catppuccin-surface pl-4"},xp={class:"flex items-center justify-between mb-3"},wp={key:0,class:"flex items-center gap-1 text-[10px] text-catppuccin-subtle"},_p={key:0},kp={key:1},Cp={class:"overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-thin"},Sp={class:"inline-flex md:flex gap-[3px] md:gap-1",style:{"min-width":"max-content"}},Ap=["href","title"],Tp=["title"],Ep={class:"text-xs text-catppuccin-gray mt-2"},Pp={__name:"ContributionGraph",setup(e){const t=pe([]),n=pe(!0),s=re(()=>{const i=[];for(let a=0;a<t.value.length;a+=7)i.push(t.value.slice(a,a+7));return i}),o=re(()=>t.value.reduce((i,a)=>i+a.count,0)),r=async()=>{try{n.value=!0,t.value=await bp()}catch{}finally{n.value=!1}};return ut(()=>{r()}),(i,a)=>(C(),A("div",yp,[g("div",xp,[a[1]||(a[1]=g("div",{class:"text-catppuccin-subtle text-sm"},' ~$ git log --oneline --since="1.year.ago" | wc -l ',-1)),n.value?be("",!0):(C(),A("div",wp,[...a[0]||(a[0]=[Pn('<span>less</span><div class="flex gap-[1px]"><div class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green"></div></div><span>more</span>',3)])]))]),n.value?(C(),A("div",_p,[...a[2]||(a[2]=[g("div",{class:"h-[60px] bg-catppuccin-surface/30 rounded cursor-blink"},null,-1)])])):(C(),A("div",kp,[g("div",Cp,[g("div",Sp,[(C(!0),A(ie,null,Se(s.value,(c,u)=>(C(),A("div",{key:u,class:"flex flex-col gap-[3px] md:gap-1 md:flex-1"},[(C(!0),A(ie,null,Se(c,(l,d)=>(C(),A(ie,{key:d},[l.count>0?(C(),A("a",{key:0,href:Le(vp)(l.date),target:"_blank",rel:"noopener noreferrer",class:$t(["w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm transition-all hover:ring-1 hover:ring-catppuccin-green hover:scale-110 cursor-pointer",[Le(Hs)(l.count)===1?"bg-catppuccin-green/30 hover:bg-catppuccin-green/40":Le(Hs)(l.count)===2?"bg-catppuccin-green/50 hover:bg-catppuccin-green/60":Le(Hs)(l.count)===3?"bg-catppuccin-green/70 hover:bg-catppuccin-green/80":"bg-catppuccin-green hover:bg-catppuccin-green"]]),title:`${l.date}: ${l.count} contributions - Click to view on GitHub`},null,10,Ap)):(C(),A("div",{key:1,class:"w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm bg-catppuccin-surface/50",title:`${l.date}: ${l.count} contributions`},null,8,Tp))],64))),128))]))),128))])]),g("div",Ep,G(o.value)+" contributions in the last year ",1)]))]))}},Rp={class:"w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400"},cn={__name:"Footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(C(),A("footer",Rp,[g("p",null,"© 2020 - "+G(Le(t))+" heckr.dev | All rights reserved.",1)]))}},Dp={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},Ip={class:"lg:flex-1 flex flex-col"},Op={key:0,class:"space-y-2"},$p={key:1,class:"text-sm text-catppuccin-subtle"},Mp=["href"],Lp={class:"flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2"},Np={class:"flex-1 min-w-0"},jp={class:"flex items-center gap-2"},Bp=["title"],Fp={key:0,class:"text-catppuccin-yellow text-xs flex-shrink-0"},Hp=["title"],Vp={key:3,class:"text-sm text-catppuccin-subtle"},Wp={__name:"ReposList",props:{repos:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){const t=e,n=re(()=>t.repos.length?[...t.repos].sort((s,o)=>o.stargazers_count-s.stargazers_count).slice(0,6):[]);return(s,o)=>(C(),A("div",Dp,[o[2]||(o[2]=g("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ ls ~/repositories",-1)),g("div",Ip,[e.loading?(C(),A("div",Op,[(C(),A(ie,null,Se(6,r=>g("div",{key:`repo-loading-${r}`,class:"rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3"},[...o[0]||(o[0]=[Pn('<div class="flex items-start gap-3" data-v-effaf9c1><span class="text-catppuccin-subtle" data-v-effaf9c1>&gt;</span><div class="flex-1 min-w-0" data-v-effaf9c1><div class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink" data-v-effaf9c1></div><div class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink" data-v-effaf9c1></div></div></div>',1)])])),64))])):e.repos.length?n.value.length?(C(),sn(Wl,{key:2,name:"list",tag:"div",class:"space-y-2"},{default:Xe(()=>[(C(!0),A(ie,null,Se(n.value,r=>(C(),A("a",{key:r.id,href:r.html_url,target:"_blank",class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors"},[g("div",Lp,[o[1]||(o[1]=g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors"},">",-1)),g("div",Np,[g("div",jp,[g("span",{class:"text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate",title:r.name},G(r.name),9,Bp),r.stargazers_count>0?(C(),A("span",Fp," ★"+G(r.stargazers_count),1)):be("",!0)]),g("p",{class:"text-xs text-catppuccin-gray truncate",title:r.description},G(r.description||"no description"),9,Hp)])])],8,Mp))),128))]),_:1})):(C(),A("div",Vp," no repositories found ")):(C(),A("div",$p," no projects found "))])]))}},Up=wt(Wp,[["__scopeId","data-v-effaf9c1"]]),Gp={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},qp={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-16 md:pb-2"},Kp={class:"grid lg:grid-cols-2 gap-6 lg:items-stretch"},Yp={__name:"Home",setup(e){const t=pe([]),n=pe(!0),s=pe([]),o=async()=>{try{n.value=!0;const{repos:r,languages:i}=await Sa("hecker-01");t.value=r,s.value=i}catch{}finally{n.value=!1}};return ut(()=>{o()}),(r,i)=>(C(),A("div",Gp,[g("div",qp,[Q(Nd),Q(Wd,{languages:s.value,loading:n.value,id:"languages"},null,8,["languages","loading"]),g("div",Kp,[Q(Up,{repos:t.value,loading:n.value},null,8,["repos","loading"]),Q(gp)]),Q(Pp),Q(cn)])]))}},zp=`---
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
`,Jp=`---
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
`,Qp=`---
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
`,Zp=`---
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
`,Xp=`---
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
`,ef=`---
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
`,tf=`---
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
`,nf=Object.assign({"/posts/docker-and-compose.md":zp,"/posts/dump-cdm-widevine.md":Jp,"/posts/jellyfin-server.md":Qp,"/posts/local-database.md":Zp,"/posts/markdown-showcase.md":Xp,"/posts/using-commandline.md":ef,"/posts/using-git.md":tf}),sf=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const c=(u,l)=>{l=l.trim(),l.startsWith("[")&&l.endsWith("]")?o[u]=l.slice(1,-1).split(",").map(d=>d.trim()):o[u]=l};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&c(i,a);const[d,...f]=u.split(":");if(!d||d.trim()==="")return;i=d.trim(),a=f.join(":").trim()}}),i&&a&&c(i,a),{frontmatter:o,content:s}},of=()=>{const e=[];let t=1;return Object.entries(nf).forEach(([n,s])=>{const{frontmatter:o,content:r}=sf(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,date:o.date||new Date().toISOString().split("T")[0],tags:o.tags||[],description:o.description||"",unlisted:o.unlisted===!0||o.unlisted==="true",content:r.trim(),readingTime:cf(r)})}),e};let Un=null;const Oo=(e=!1)=>(Un||(Un=of()),(e?[...Un]:Un.filter(n=>!n.unlisted)).sort((n,s)=>ro(s.date)-ro(n.date))),rf=e=>Oo(!0).find(t=>t.slug===e),af=()=>{const e=new Set;return Oo().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()},ro=e=>{const[t,n,s]=e.split("-");return new Date(s,n-1,t)},cf=e=>{const n=e.trim().split(/\s+/).length;return Math.ceil(n/225)},lf={class:"sm:border-l-2 sm:border-catppuccin-surface pl-2 sm:pl-4"},uf={class:"flex flex-wrap gap-1.5 sm:gap-2"},df=["onClick"],Aa={__name:"TagFilter",props:{tags:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["toggle-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("toggle-tag",o)};return(o,r)=>(C(),A("div",lf,[r[0]||(r[0]=g("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls tags/",-1)),g("div",uf,[(C(!0),A(ie,null,Se(e.tags,i=>(C(),A("button",{key:i,onClick:a=>s(i),class:$t(["px-3 py-1.5 sm:py-1 rounded text-xs transition-colors border",e.selectedTag===i?"bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve":"bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay"])}," #"+G(i),11,df))),128))])]))}},pf={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2"},ff={class:"text-catppuccin-subtle text-sm mb-3"},hf={key:0,class:"text-catppuccin-mauve"},mf={key:0,class:"text-sm text-catppuccin-subtle"},gf={key:1,class:"space-y-3"},bf=["onClick"],vf={class:"px-3 sm:px-4 py-3"},yf={class:"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2"},xf={class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors"},wf={class:"flex items-center gap-2 flex-shrink-0"},_f={class:"text-xs text-catppuccin-subtle"},kf=["title"],Cf={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed"},Sf={class:"flex items-center gap-2"},Af={class:"flex flex-wrap gap-1.5"},Tf=["onClick"],Ef={__name:"PostList",props:{posts:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-post","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-post",o)};return(o,r)=>(C(),A("div",pf,[g("div",ff,[r[0]||(r[0]=Me(" ~$ ls -la posts/ ",-1)),e.selectedTag?(C(),A("span",hf,'| grep "'+G(e.selectedTag)+'"',1)):be("",!0)]),e.posts.length?(C(),A("div",gf,[(C(!0),A(ie,null,Se(e.posts,i=>(C(),A("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer"},[g("div",vf,[g("div",yf,[g("h2",xf,G(i.title),1),g("div",wf,[g("span",_f,G(i.readingTime)+" min read ",1),r[1]||(r[1]=g("span",{class:"text-catppuccin-surface"},"•",-1)),g("span",{class:"text-xs text-catppuccin-subtle",title:Le(ro)(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},G(i.date),9,kf)])]),g("p",Cf,G(i.description),1),g("div",Sf,[g("div",Af,[(C(!0),A(ie,null,Se(i.tags,a=>(C(),A("span",{key:a,onClick:Eo(c=>n("select-tag",a),["stop"]),class:"px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:bg-catppuccin-mauve/20 hover:text-catppuccin-mauve cursor-pointer transition-colors"}," #"+G(a),9,Tf))),128))]),r[2]||(r[2]=g("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm shrink-0"}," read → ",-1))])])],8,bf))),128))])):(C(),A("div",mf," no posts found "))]))}};class Pf{extractVariables(t){const n=new RegExp("(?<!\\\\)\\$\\[([^\\]]+)\\]","g"),s=new Set;let o;for(;(o=n.exec(t))!==null;)s.add(o[1]);return Array.from(s)}substitute(t,n={}){const s=[];let o=t.replace(/\\\$\[([^\]]+)\]/g,(r,i)=>{const a=`__ESCAPED_VAR_${s.length}__`;return s.push(`$[${i}]`),a});return o=o.replace(/\$\[([^\]]+)\]/g,(r,i)=>n[i]||i),s.forEach((r,i)=>{o=o.replace(`__ESCAPED_VAR_${i}__`,r)}),o}}const is=new Pf;class Rf{process(t){let n=t;const s=[];n=n.replace(/__([A-Z_0-9]+)__/g,r=>{const i=`\0PROT${s.length}\0`;return s.push(r),i});const o=[];return n=n.replace(/`([^`]+)`/g,(r,i)=>{const a=`IC${o.length}`;return o.push(this._renderInlineCode(i)),a}),n=n.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),n=n.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),n=n.replace(/_(.*?)_/g,'<em class="text-catppuccin-text italic">$1</em>'),n=n.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),n=n.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>'),n=n.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">'),n=n.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>'),o.forEach((r,i)=>{n=n.replaceAll(`IC${i}`,r)}),s.forEach((r,i)=>{n=n.replaceAll(`\0PROT${i}\0`,r)}),n}_renderInlineCode(t){return`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code>`}}class Df{constructor(t=new Rf){this.inlineParser=t}parse(t){let n=t;const s={codeBlocks:[],hintBlocks:[],detailsBlocks:[],escapedTokens:[],inlineCodeBlocks:[],tables:[]};return n=this._extractCodeBlocks(n,s),n=this._extractHintBlocks(n,s),n=this._extractDetailsBlocks(n,s),n=this._extractEscapeSequences(n,s),n=this._extractInlineCode(n,s),n=this._extractTables(n,s),n=this._transformHorizontalRules(n),n=this._transformHeadings(n),n=this._transformBlockquotes(n),n=this._transformImages(n),n=this._transformBoldItalic(n),n=this._transformStrikethrough(n),n=this._transformLinks(n),n=this._transformLists(n),n=this._transformParagraphs(n),n=this._restoreDetailsBlocks(n,s),n=this._restoreHintBlocks(n,s),n=this._restoreCodeBlocks(n,s),n=this._restoreTables(n,s),n=this._restoreInlineCode(n,s),n=this._restoreEscapeSequences(n,s),n}_extractCodeBlocks(t,n){return t.replace(/```(\w*)(?::([^\s\n]+))?\s*\n?([\s\S]*?)```/g,(s,o,r,i)=>{const a=`__CODEBLOCK_${n.codeBlocks.length}__`;return n.codeBlocks.push(this._renderCodeBlock(o,r,i,n.codeBlocks.length)),a})}_extractHintBlocks(t,n){return t.replace(/:::hint\s+(\w+)\r?\n([\s\S]*?):::/g,(s,o,r)=>{const i=`__HINT_${n.hintBlocks.length}__`;return n.hintBlocks.push({type:o.trim().toLowerCase(),content:r.trim()}),i})}_extractDetailsBlocks(t,n){let s=!0;for(;s;){const o=t;t=t.replace(/:::details\s+([^\n\r]+)\r?\n([\s\S]*?):::/g,(r,i,a)=>{const c=`__DETAILS_${n.detailsBlocks.length}__`;return n.detailsBlocks.push({title:i.trim(),content:a.trim()}),c}),s=t!==o}return t}_extractEscapeSequences(t,n){return t.replace(/\\\\|\\`/g,s=>{const o=`__ESCAPED_TOKEN_${n.escapedTokens.length}__`;return n.escapedTokens.push(s==="\\\\"?"\\":"`"),o})}_extractInlineCode(t,n){return t.replace(/`([^`]+)`/g,(s,o)=>{const r=`__INLINECODE_${n.inlineCodeBlocks.length}__`,i=o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return n.inlineCodeBlocks.push(`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${i}</code>`),r})}_extractTables(t,n){return t.replace(/((?:\|[^\n]+\|\r?\n?)+)/g,s=>{const o=s.trim().split(/\r?\n/);if(o.length<2||!/^\|[\s\-:|]+\|$/.test(o[1]))return s;const r=`__TABLE_${n.tables.length}__`;return n.tables.push(this._renderTable(o)),r})}_transformHorizontalRules(t){return t.replace(/^(?:---|\*\*\*|___)\s*$/gim,'<hr class="border-catppuccin-surface my-6">')}_transformHeadings(t){return t=t.replace(/^###### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h6 id="${o}" class="group text-xs font-semibold text-catppuccin-mauve mt-4 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h6>`}),t=t.replace(/^##### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h5 id="${o}" class="group text-sm font-semibold text-catppuccin-mauve mt-4 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h5>`}),t=t.replace(/^#### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h4 id="${o}" class="group text-base font-semibold text-catppuccin-mauve mt-5 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h4>`}),t=t.replace(/^### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h3 id="${o}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`}),t=t.replace(/^## (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h2 id="${o}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`}),t=t.replace(/^# (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h1 id="${o}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`}),t}_transformBlockquotes(t){return t.replace(/^> (.*$)/gim,'<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>')}_transformImages(t){return t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">')}_transformBoldItalic(t){return t=t.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),t=t.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),t=t.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),t}_transformStrikethrough(t){return t.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>')}_transformLinks(t){return t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>')}_transformLists(t){return t=t.replace(/^[\-\*\+] \[x\] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>'),t=t.replace(/^[\-\*\+] \[ \] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>'),t=t.replace(/^\d+\. (.*$)/gim,'<li data-list-type="ol" class="ml-6 text-catppuccin-text mb-1">$1</li>'),t=t.replace(/^[\-\*\+] (.*$)/gim,'<li data-list-type="ul" class="ml-6 text-catppuccin-text mb-1">$1</li>'),t=t.replace(/(<li data-list-type="ol"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ol"[^>]*>.*?<\/li>))*/g,n=>`<ol class="list-decimal my-4 pl-2">${n}</ol>`),t=t.replace(/(<li data-list-type="ul"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ul"[^>]*>.*?<\/li>))*/g,n=>`<ul class="list-disc my-4">${n}</ul>`),t=t.replace(/ data-list-type="[^"]+"/g,""),t}_transformParagraphs(t){const n=/^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;return t.split(`

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
      </div>`}_renderTable(t){const n=t[0],s=t.slice(2);let o='<div class="overflow-x-auto -mx-2 sm:mx-0 my-4"><table class="w-full text-sm border-collapse min-w-[400px]">';const r=n.split("|").filter(i=>i.trim());return o+="<thead><tr>",r.forEach(i=>{o+=`<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${i.trim()}</th>`}),o+="</tr></thead>",o+="<tbody>",s.forEach(i=>{if(i.trim()&&!/^\|[\s\-:|]+\|$/.test(i)){const a=i.split("|").filter(c=>c.trim());o+="<tr>",a.forEach(c=>{o+=`<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${c.trim()}</td>`}),o+="</tr>"}}),o+="</tbody></table></div>",o}_slugify(t){return t.toLowerCase().replace(/<[^>]*>/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}}const Ta=new Df;class If{highlightAll(){window.Prism&&(Prism.highlightAll(),document.querySelectorAll('pre[class*="language-"]').forEach(t=>{t.className=t.className.replace(/language-\S+/g,"").trim()}))}highlightAfterDelay(t=100){setTimeout(()=>this.highlightAll(),t)}}const as=new If,Of={class:"mb-8"},$f={class:"text-catppuccin-subtle text-sm mb-2"},Mf={class:"text-3xl md:text-4xl font-bold text-catppuccin-mauve mb-3"},Lf={class:"flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-catppuccin-subtle mb-4"},Nf={class:"flex flex-wrap gap-2"},jf={key:0,class:"mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"},Bf={class:"space-y-3"},Ff=["for"],Hf=["id","onUpdate:modelValue","placeholder"],Vf=["innerHTML"],Wf=["src","alt"],Vr=1,Uf=4,Gf={__name:"PostComponent",props:{post:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=re(()=>n.post.readingTime||1),i=pe({}),a=re(()=>is.extractVariables(n.post.content)),c=re(()=>is.substitute(n.post.content,i.value)),u=U=>Ta.parse(U),l=pe(null),d=pe(""),f=pe(1),m=pe(0),v=pe(0),k=re(()=>({transform:`translate(${m.value}px, ${v.value}px) scale(${f.value})`,transition:T?"none":"transform 0.2s ease"}));let T=!1,P=0,O=1,j=0,M=0,J=0,X=0,ee=0;const ue=()=>{f.value=1,m.value=0,v.value=0},B=U=>{const F=U[0].clientX-U[1].clientX,K=U[0].clientY-U[1].clientY;return Math.hypot(F,K)},Z=U=>{if(U.touches.length===2)T=!0,P=B(U.touches),O=f.value;else if(U.touches.length===1){const F=Date.now();if(F-ee<300){f.value>1?ue():f.value=2,ee=0;return}ee=F,J=U.touches[0].clientX,X=U.touches[0].clientY,j=m.value,M=v.value}},ae=U=>{if(U.touches.length===2){U.preventDefault();const F=B(U.touches),K=O*F/P;f.value=Math.min(Uf,Math.max(Vr,K))}else U.touches.length===1&&f.value>1&&(U.preventDefault(),m.value=j+(U.touches[0].clientX-J),v.value=M+(U.touches[0].clientY-X))},L=U=>{U.touches.length===0&&(T=!1,f.value<=Vr&&ue())},se=U=>{const F=U.target.closest("img");F&&(ue(),l.value=F.currentSrc||F.src,d.value=F.alt||"")},ye=()=>{l.value=null,d.value="",ue()},Ae=U=>{U.key==="Escape"&&l.value&&ye()};return ut(()=>{as.highlightAfterDelay(100),window.addEventListener("keydown",Ae)}),wo(()=>{window.removeEventListener("keydown",Ae)}),Dt(i,()=>{ms(()=>{as.highlightAll()})},{deep:!0}),(U,F)=>(C(),A("div",null,[g("div",Of,[g("div",$f," ~$ cat "+G(e.post.slug)+".md ",1),g("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all mb-6 inline-flex items-center gap-1.5 group"},[...F[1]||(F[1]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/posts",-1)])]),g("h1",Mf,G(e.post.title),1),g("div",Lf,[g("span",null,G(e.post.date),1),F[2]||(F[2]=g("span",{class:"hidden sm:inline text-catppuccin-surface"},"•",-1)),g("span",null,"~"+G(r.value)+" min read",1),F[3]||(F[3]=g("span",{class:"hidden sm:inline text-catppuccin-surface"},"•",-1)),g("div",Nf,[(C(!0),A(ie,null,Se(e.post.tags,K=>(C(),A("span",{key:K,class:"text-catppuccin-gray"}," #"+G(K),1))),128))])])]),a.value.length>0?(C(),A("div",jf,[F[4]||(F[4]=g("div",{class:"text-sm text-catppuccin-subtle mb-3"}," ~$ configure variables ",-1)),g("div",Bf,[(C(!0),A(ie,null,Se(a.value,K=>(C(),A("div",{key:K,class:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"},[g("label",{for:`var-${K}`,class:"text-sm text-catppuccin-text sm:min-w-[120px]"},G(K)+": ",9,Ff),wi(g("input",{id:`var-${K}`,"onUpdate:modelValue":Ye=>i.value[K]=Ye,type:"text",placeholder:K,class:"flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"},null,8,Hf),[[pa,i.value[K]]])]))),128))])])):be("",!0),g("article",{class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2 mb-8 overflow-hidden",onClick:se},[g("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:u(c.value)},null,8,Vf)]),g("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},[...F[5]||(F[5]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/posts",-1)])]),(C(),sn(wc,{to:"body"},[Q(Ln,{name:"lightbox-fade"},{default:Xe(()=>[l.value?(C(),A("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#000000] p-0 sm:bg-[#11111b]/80 sm:backdrop-blur-sm sm:p-4 cursor-zoom-out",onClick:ye},[g("button",{type:"button",class:"absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-catppuccin-surface/60 bg-catppuccin-base/40 text-catppuccin-subtle hover:text-catppuccin-text hover:border-catppuccin-mauve/40 transition-colors","aria-label":"Close image",onClick:ye}," ✕ "),g("img",{src:l.value,alt:d.value,style:we(k.value),class:"max-w-full max-h-screen sm:max-h-[90vh] object-contain rounded-none sm:rounded-md shadow-2xl cursor-default touch-none select-none",onClick:F[0]||(F[0]=Eo(()=>{},["stop"])),onTouchstart:Z,onTouchmove:ae,onTouchend:L},null,44,Wf)])):be("",!0)]),_:1})]))]))}},qf=wt(Gf,[["__scopeId","data-v-233a66c8"]]),Kf={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},Yf={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-16 md:pb-2"},zf={key:"list"},Jf={class:"mb-12"},Qf={class:"flex items-center gap-4 text-sm mb-6"},Zf={key:"post"},Xf={__name:"Posts",setup(e){const t=pe("list"),n=pe(null),s=pe(null),o=pe([]),r=pe([]),i=Do(),a=Nn(),c=re(()=>s.value?o.value.filter(m=>m.tags.includes(s.value)):o.value),u=()=>{o.value=Oo(),r.value=af()},l=m=>{if(n.value=rf(m),n.value)t.value="post",window.scrollTo({top:0,behavior:"instant"}),i.query.post!==m&&a.replace({name:"Posts",query:{...i.query,post:m}});else if(i.query.post){const v={...i.query};delete v.post,a.replace({name:"Posts",query:v})}},d=({skipQueryUpdate:m=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!m&&"post"in i.query){const v={...i.query};delete v.post,a.replace({name:"Posts",query:v})}},f=m=>{s.value=s.value===m?null:m};return ut(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(k){const T=k.trigger,P=T.textContent;T.textContent="copied!",T.classList.add("text-catppuccin-green"),setTimeout(()=>{T.textContent=P,T.classList.remove("text-catppuccin-green")},2e3),k.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const v=i.query.post;v&&l(v)}),$n(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),Dt(()=>i.query.post,(m,v)=>{m&&m!==v?l(m):!m&&t.value==="post"&&d({skipQueryUpdate:!0})}),(m,v)=>{const k=vs("router-link");return C(),A("div",Kf,[g("div",Yf,[Q(Ln,{name:"fade",mode:"out-in"},{default:Xe(()=>[t.value==="list"?(C(),A("div",zf,[g("div",Jf,[v[1]||(v[1]=g("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cd ~/posts",-1)),g("div",Qf,[Q(k,{to:"/",class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},{default:Xe(()=>[...v[0]||(v[0]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/",-1),g("span",{class:"text-catppuccin-subtle font-medium"},"(home)",-1)])]),_:1})]),v[2]||(v[2]=g("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[g("span",{class:"text-catppuccin-mauve"},"Posts")],-1)),v[3]||(v[3]=g("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," My thoughts, tutorials, and experiences on various topics including web development, programming, and technology. ",-1)),Q(Aa,{tags:r.value,"selected-tag":s.value,onToggleTag:f},null,8,["tags","selected-tag"])]),Q(Ef,{posts:c.value,"selected-tag":s.value,onOpenPost:l,onSelectTag:f},null,8,["posts","selected-tag"]),Q(cn)])):t.value==="post"&&n.value?(C(),A("div",Zf,[Q(qf,{post:n.value,onGoBack:d},null,8,["post"]),Q(cn)])):be("",!0)]),_:1})])])}}},eh=wt(Xf,[["__scopeId","data-v-68ab2d75"]]),th={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2"},nh={class:"text-catppuccin-subtle text-sm mb-3"},sh={key:0,class:"text-catppuccin-mauve"},oh={key:0,class:"text-sm text-catppuccin-subtle"},rh={key:1,class:"grid gap-4 sm:grid-cols-2"},ih=["onClick"],ah={key:0,class:"w-full h-32 sm:h-40 overflow-hidden bg-catppuccin-surface/30"},ch=["src","alt"],lh={class:"px-3 sm:px-4 py-3"},uh={class:"flex items-start gap-2 mb-2"},dh={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed line-clamp-2"},ph={class:"flex items-center gap-2 flex-wrap"},fh=["onClick"],hh={key:0,class:"text-xs text-catppuccin-subtle"},mh={__name:"ProjectList",props:{projects:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-project","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-project",o)};return(o,r)=>(C(),A("div",th,[g("div",nh,[r[0]||(r[0]=Me(" ~$ ls -la projects/ ",-1)),e.selectedTag?(C(),A("span",sh,'| grep "'+G(e.selectedTag)+'"',1)):be("",!0)]),e.projects.length?(C(),A("div",rh,[(C(!0),A(ie,null,Se(e.projects,i=>(C(),A("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all cursor-pointer overflow-hidden",style:we({borderColor:`${i.accentColorHex}40`})},[i.coverImage?(C(),A("div",ah,[g("img",{src:i.coverImage,alt:i.title,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,ch)])):be("",!0),g("div",lh,[g("div",uh,[g("span",{class:"text-sm transition-colors",style:we({color:i.accentColorHex})},">",4),g("h2",{class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors",style:we({"--hover-color":i.accentColorHex})},G(i.title),5)]),g("p",dh,G(i.description),1),g("div",ph,[(C(!0),A(ie,null,Se(i.tags.slice(0,3),a=>(C(),A("span",{key:a,onClick:Eo(c=>n("select-tag",a),["stop"]),class:"px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:text-catppuccin-mauve cursor-pointer transition-colors",style:we({"--hover-bg":`${i.accentColorHex}20`})}," #"+G(a),13,fh))),128)),i.tags.length>3?(C(),A("span",hh," +"+G(i.tags.length-3),1)):be("",!0),g("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm",style:we({"--hover-color":i.accentColorHex})}," view → ",4)])])],12,ih))),128))])):(C(),A("div",oh," no projects found "))]))}},gh=wt(mh,[["__scopeId","data-v-b7be8c48"]]),bh={class:"mb-8"},vh={class:"text-catppuccin-subtle text-sm mb-2"},yh=["src","alt"],xh={class:"flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-catppuccin-subtle mb-4"},wh={class:"flex flex-wrap gap-2"},_h={class:"flex flex-wrap gap-3 mb-6"},kh=["href"],Ch=["href"],Sh={key:0,class:"mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"},Ah={class:"space-y-3"},Th=["for"],Eh=["id","onUpdate:modelValue","placeholder"],Ph={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2 mb-8 overflow-hidden"},Rh=["innerHTML"],Dh={__name:"ProjectComponent",props:{project:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=pe({}),i=re(()=>is.extractVariables(n.project.content)),a=re(()=>is.substitute(n.project.content,r.value)),c=u=>Ta.parse(u);return ut(()=>{as.highlightAfterDelay(100)}),Dt(r,()=>{ms(()=>{as.highlightAll()})},{deep:!0}),(u,l)=>(C(),A("div",{style:we({"--accent-color":e.project.accentColorHex})},[g("div",bh,[g("div",vh," ~$ cat "+G(e.project.slug)+".md ",1),g("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all mb-6 inline-flex items-center gap-1.5 group"},[...l[0]||(l[0]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/projects",-1)])]),e.project.coverImage?(C(),A("div",{key:0,class:"w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-6 border",style:we({borderColor:`${e.project.accentColorHex}40`})},[g("img",{src:e.project.coverImage,alt:e.project.title,class:"w-full h-full object-cover"},null,8,yh)],4)):be("",!0),g("h1",{class:"text-3xl md:text-4xl font-bold mb-3",style:we({color:e.project.accentColorHex})},G(e.project.title),5),g("div",xh,[g("span",{class:$t(["px-2 py-0.5 rounded text-xs capitalize",{"bg-catppuccin-green/20 text-catppuccin-green":e.project.status==="active","bg-catppuccin-yellow/20 text-catppuccin-yellow":e.project.status==="in-progress","bg-catppuccin-red/20 text-catppuccin-red":e.project.status==="archived","bg-catppuccin-blue/20 text-catppuccin-blue":e.project.status==="beta","bg-catppuccin-peach/20 text-catppuccin-peach":e.project.status==="stale"}])},G(e.project.status),3),g("div",wh,[(C(!0),A(ie,null,Se(e.project.tags,d=>(C(),A("span",{key:d,class:"text-catppuccin-gray"}," #"+G(d),1))),128))])]),g("div",_h,[e.project.url?(C(),A("a",{key:0,href:e.project.url,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-3 py-1.5 rounded border text-sm transition-colors hover:bg-catppuccin-surface/30",style:we({borderColor:`${e.project.accentColorHex}60`,color:e.project.accentColorHex})},[...l[1]||(l[1]=[g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1),Me(" Live Site ",-1)])],12,kh)):be("",!0),e.project.github?(C(),A("a",{key:1,href:e.project.github,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-3 py-1.5 rounded border border-catppuccin-surface/60 text-sm text-catppuccin-subtle transition-colors hover:bg-catppuccin-surface/30 hover:text-catppuccin-text"},[...l[2]||(l[2]=[g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24"},[g("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1),Me(" GitHub ",-1)])],8,Ch)):be("",!0)])]),i.value.length>0?(C(),A("div",Sh,[l[3]||(l[3]=g("div",{class:"text-sm text-catppuccin-subtle mb-3"}," ~$ configure variables ",-1)),g("div",Ah,[(C(!0),A(ie,null,Se(i.value,d=>(C(),A("div",{key:d,class:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"},[g("label",{for:`var-${d}`,class:"text-sm text-catppuccin-text sm:min-w-[120px]"},G(d)+": ",9,Th),wi(g("input",{id:`var-${d}`,"onUpdate:modelValue":f=>r.value[d]=f,type:"text",placeholder:d,class:"flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"},null,8,Eh),[[pa,r.value[d]]])]))),128))])])):be("",!0),g("article",Ph,[g("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:c(a.value)},null,8,Rh)]),g("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},[...l[4]||(l[4]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/projects",-1)])])],4))}},Ih=wt(Dh,[["__scopeId","data-v-b3acbc76"]]),Oh={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},$h={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-16 md:pb-2"},Mh={key:"list"},Lh={class:"mb-12"},Nh={class:"flex items-center gap-4 text-sm mb-6"},jh={key:"project"},Bh={__name:"Projects",setup(e){const t=pe("list"),n=pe(null),s=pe(null),o=pe([]),r=pe([]),i=Do(),a=Nn(),c=re(()=>s.value?o.value.filter(m=>m.tags.includes(s.value)):o.value),u=()=>{o.value=Cs(),r.value=np()},l=m=>{if(n.value=tp(m),n.value)t.value="project",window.scrollTo({top:0,behavior:"instant"}),i.query.project!==m&&a.replace({name:"Projects",query:{...i.query,project:m}});else if(i.query.project){const v={...i.query};delete v.project,a.replace({name:"Projects",query:v})}},d=({skipQueryUpdate:m=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!m&&"project"in i.query){const v={...i.query};delete v.project,a.replace({name:"Projects",query:v})}},f=m=>{s.value=s.value===m?null:m};return ut(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(k){const T=k.trigger,P=T.textContent;T.textContent="copied!",T.classList.add("text-catppuccin-green"),setTimeout(()=>{T.textContent=P,T.classList.remove("text-catppuccin-green")},2e3),k.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const v=i.query.project;v&&l(v)}),$n(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),Dt(()=>i.query.project,(m,v)=>{m&&m!==v?l(m):!m&&t.value==="project"&&d({skipQueryUpdate:!0})}),(m,v)=>{const k=vs("router-link");return C(),A("div",Oh,[g("div",$h,[Q(Ln,{name:"fade",mode:"out-in"},{default:Xe(()=>[t.value==="list"?(C(),A("div",Mh,[g("div",Lh,[v[1]||(v[1]=g("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ cd ~/projects ",-1)),g("div",Nh,[Q(k,{to:"/",class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},{default:Xe(()=>[...v[0]||(v[0]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/",-1),g("span",{class:"text-catppuccin-subtle font-medium"},"(home)",-1)])]),_:1})]),v[2]||(v[2]=g("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[g("span",{class:"text-catppuccin-mauve"},"Projects")],-1)),v[3]||(v[3]=g("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," A collection of projects I've worked on, ranging from web applications to plugins and tools. ",-1)),Q(Aa,{tags:r.value,"selected-tag":s.value,onToggleTag:f},null,8,["tags","selected-tag"])]),Q(gh,{projects:c.value,"selected-tag":s.value,onOpenProject:l,onSelectTag:f},null,8,["projects","selected-tag"]),Q(cn)])):t.value==="project"&&n.value?(C(),A("div",jh,[Q(Ih,{project:n.value,onGoBack:d},null,8,["project"]),Q(cn)])):be("",!0)]),_:1})])])}}},Fh=wt(Bh,[["__scopeId","data-v-b2095279"]]),Hh={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},Vh={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16"},Wh={class:"mb-8"},Uh={class:"text-catppuccin-subtle text-sm mb-4"},Gh={class:"border-l-2 border-catppuccin-surface pl-4"},qh={class:"text-catppuccin-red text-sm"},Kh={class:"text-catppuccin-mauve"},Yh={__name:"NotFound",setup(e){const t=Do(),n=Nn(),s=re(()=>(t.fullPath||t.path||"/").replace(/^\//,"")||"."),o=()=>n.push("/");return(r,i)=>(C(),A("div",Hh,[g("div",Vh,[g("div",Wh,[g("div",Uh," ~$ cd ~/"+G(s.value),1),g("div",{class:"flex items-center gap-4 text-sm mb-6"},[g("button",{onClick:o,class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},[...i[0]||(i[0]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/",-1),g("span",{class:"text-catppuccin-subtle font-medium"},"(home)",-1)])])])]),g("div",Gh,[g("div",qh,[i[1]||(i[1]=Me(" cd: no such file or directory: /",-1)),g("span",Kh,G(s.value),1)])])]),Q(cn)]))}},zh=[{path:"/",name:"Home",component:Yp,meta:{title:"Home | heckr.dev"}},{path:"/posts",name:"Posts",component:eh,meta:{title:"Posts | heckr.dev"}},{path:"/projects",name:"Projects",component:Fh,meta:{title:"Projects | heckr.dev"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Yh,meta:{title:"404 Not Found | heckr.dev"}}],Ea=ad({history:Bu(),routes:zh,scrollBehavior(e,t,n){return n||{top:0}}});Ea.beforeEach((e,t,n)=>{document.title=e.meta.title||"heckr.dev",n()});let fn=0;const Wr=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],Jh=()=>{console.log("%cWelcome to heckr.dev","font-size: 20px; font-weight: bold; color: #cba6f7;"),console.log("%cWelcome to the dev console, here are some commands to try:","font-size: 14px; color: #a6adc8;"),console.log(`%c- help() - show available commands
- about() - learn more about me
- skills() - view my tech stack
- contact() - get my contact info`,"font-size: 12px; color: #6c7086;"),window.help=()=>{console.log("%cAvailable commands:","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%c- help() - show this message
- about() - about the developer
- skills() - technical skills
- contact() - contact information
- secret() - ???
`,"font-size: 12px; color: #a6adc8;")},window.about=()=>{console.log("%cAbout me","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cA passionate developer who loves building cool things with code!
Check out my projects and posts on the site.`,"font-size: 12px; color: #a6adc8;")},window.skills=async()=>{console.log("%cTech stack","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log("%cFetching...","font-size: 12px; color: #6c7086;");try{const{languages:e,totalRepos:t}=await Sa();e.length>0?(console.log("%cTop languages from "+t+" repositories found:","font-size: 14px; font-weight: bold; color: #a6adc8;"),e.slice(0,10).forEach(({language:n,count:s},o)=>{console.log(`%c${o+1}. ${n}: ${s} repos`,"font-size: 12px; color: #a6adc8;")})):console.log("%cUnable to fetch data, please try again later.","font-size: 12px; color: #f38ba8;")}catch{console.log("%cError loading data, please try again later.","font-size: 12px; color: #f38ba8;")}},window.contact=()=>{console.log("%cContact info","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cGitHub: https://github.com/hecker-01
Feel free to reach out!`,"font-size: 12px; color: #a6adc8;")},window.secret=()=>{console.log("%cYou found the secret command","font-size: 18px; font-weight: bold; color: #f9e2af;"),console.log("%cHere's a hint: ↑ ↑ ↓ ↓ ← → ← → B A","font-size: 12px; color: #fab387;")},document.addEventListener("keydown",e=>{e.code===Wr[fn]?(fn++,fn===Wr.length&&(Qh(),fn=0)):fn=0})},Qh=()=>{if(console.log("%cKONAMI CODE ACTIVATED!","font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;"),document.body.style.animation="rainbow-border 2s linear infinite",!document.getElementById("konami-style")){const e=document.createElement("style");e.id="konami-style",e.textContent=`
      @keyframes rainbow-border {
        0% { box-shadow: inset 0 0 0 3px #f38ba8; }
        16% { box-shadow: inset 0 0 0 3px #fab387; }
        33% { box-shadow: inset 0 0 0 3px #f9e2af; }
        50% { box-shadow: inset 0 0 0 3px #a6e3a1; }
        66% { box-shadow: inset 0 0 0 3px #89dceb; }
        83% { box-shadow: inset 0 0 0 3px #89b4fa; }
        100% { box-shadow: inset 0 0 0 3px #cba6f7; }
      }
    `,document.head.appendChild(e)}setTimeout(()=>{document.body.style.animation=""},5e3)};Xl(cd).use(Ea).mount("#app");Jh();
