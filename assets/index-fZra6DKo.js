(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function Ks(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ce={},Jt=[],at=()=>{},kr=()=>!1,Zn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),zs=e=>e.startsWith("onUpdate:"),ve=Object.assign,Ys=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ca=Object.prototype.hasOwnProperty,re=(e,t)=>ca.call(e,t),V=Array.isArray,Qt=e=>Xn(e)==="[object Map]",Pr=e=>Xn(e)==="[object Set]",G=e=>typeof e=="function",ge=e=>typeof e=="string",Rt=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Tr=e=>(he(e)||G(e))&&G(e.then)&&G(e.catch),Rr=Object.prototype.toString,Xn=e=>Rr.call(e),ua=e=>Xn(e).slice(8,-1),Ir=e=>Xn(e)==="[object Object]",Js=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=Ks(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),es=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},fa=/-\w/g,Ge=es(e=>e.replace(fa,t=>t.slice(1).toUpperCase())),da=/\B([A-Z])/g,Wt=es(e=>e.replace(da,"-$1").toLowerCase()),ts=es(e=>e.charAt(0).toUpperCase()+e.slice(1)),ps=es(e=>e?`on${ts(e)}`:""),kt=(e,t)=>!Object.is(e,t),Nn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Or=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Qs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},pa=e=>{const t=ge(e)?Number(e):NaN;return isNaN(t)?e:t};let So;const ns=()=>So||(So=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ke(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=ge(s)?ba(s):Ke(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(ge(e)||he(e))return e}const ha=/;(?![^(]*\))/g,ma=/:([^]+)/,ga=/\/\*[^]*?\*\//g;function ba(e){const t={};return e.replace(ga,"").split(ha).forEach(n=>{if(n){const s=n.split(ma);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ut(e){let t="";if(ge(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const s=Ut(e[n]);s&&(t+=s+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const va="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ya=Ks(va);function Dr(e){return!!e||e===""}const Lr=e=>!!(e&&e.__v_isRef===!0),X=e=>ge(e)?e:e==null?"":V(e)||he(e)&&(e.toString===Rr||!G(e.toString))?Lr(e)?X(e.value):JSON.stringify(e,Mr,2):String(e),Mr=(e,t)=>Lr(t)?Mr(e,t.value):Qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[hs(s,r)+" =>"]=o,n),{})}:Pr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>hs(n))}:Rt(t)?hs(t):he(t)&&!V(t)&&!Ir(t)?String(t):t,hs=(e,t="")=>{var n;return Rt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Le;class xa{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){this._on>0&&--this._on===0&&(Le=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function _a(){return Le}let de;const ms=new WeakSet;class $r{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&Le.active&&Le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ms.has(this)&&(ms.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eo(this),Br(this);const t=de,n=ze;de=this,ze=!0;try{return this.fn()}finally{Hr(this),de=t,ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)eo(t);this.deps=this.depsTail=void 0,Eo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ms.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rs(this)&&this.run()}get dirty(){return Rs(this)}}let Nr=0,dn,pn;function Fr(e,t=!1){if(e.flags|=8,t){e.next=pn,pn=e;return}e.next=dn,dn=e}function Zs(){Nr++}function Xs(){if(--Nr>0)return;if(pn){let t=pn;for(pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;dn;){let t=dn;for(dn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Br(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Hr(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),eo(s),wa(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Rs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Wr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Wr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===xn)||(e.globalVersion=xn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Rs(e))))return;e.flags|=2;const t=e.dep,n=de,s=ze;de=e,ze=!0;try{Br(e);const o=e.fn(e._value);(t.version===0||kt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{de=n,ze=s,Hr(e),e.flags&=-3}}function eo(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)eo(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function wa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ze=!0;const Ur=[];function mt(){Ur.push(ze),ze=!1}function gt(){const e=Ur.pop();ze=e===void 0?!0:e}function Eo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=de;de=void 0;try{t()}finally{de=n}}}let xn=0;class Ca{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class to{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!ze||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new Ca(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,Vr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=s)}return n}trigger(t){this.version++,xn++,this.notify(t)}notify(t){Zs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xs()}}}function Vr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Vr(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Is=new WeakMap,Ft=Symbol(""),Os=Symbol(""),_n=Symbol("");function we(e,t,n){if(ze&&de){let s=Is.get(e);s||Is.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new to),o.map=s,o.key=n),o.track()}}function pt(e,t,n,s,o,r){const i=Is.get(e);if(!i){xn++;return}const a=l=>{l&&l.trigger()};if(Zs(),t==="clear")i.forEach(a);else{const l=V(e),u=l&&Js(n);if(l&&n==="length"){const c=Number(s);i.forEach((d,m)=>{(m==="length"||m===_n||!Rt(m)&&m>=c)&&a(d)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(_n)),t){case"add":l?u&&a(i.get("length")):(a(i.get(Ft)),Qt(e)&&a(i.get(Os)));break;case"delete":l||(a(i.get(Ft)),Qt(e)&&a(i.get(Os)));break;case"set":Qt(e)&&a(i.get(Ft));break}}Xs()}function qt(e){const t=ee(e);return t===e?t:(we(t,"iterate",_n),je(e)?t:t.map(Je))}function ss(e){return we(e=ee(e),"iterate",_n),e}function Ct(e,t){return bt(e)?en(Bt(e)?Je(t):t):Je(t)}const Sa={__proto__:null,[Symbol.iterator](){return gs(this,Symbol.iterator,e=>Ct(this,e))},concat(...e){return qt(this).concat(...e.map(t=>V(t)?qt(t):t))},entries(){return gs(this,"entries",e=>(e[1]=Ct(this,e[1]),e))},every(e,t){return ct(this,"every",e,t,void 0,arguments)},filter(e,t){return ct(this,"filter",e,t,n=>n.map(s=>Ct(this,s)),arguments)},find(e,t){return ct(this,"find",e,t,n=>Ct(this,n),arguments)},findIndex(e,t){return ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ct(this,"findLast",e,t,n=>Ct(this,n),arguments)},findLastIndex(e,t){return ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return bs(this,"includes",e)},indexOf(...e){return bs(this,"indexOf",e)},join(e){return qt(this).join(e)},lastIndexOf(...e){return bs(this,"lastIndexOf",e)},map(e,t){return ct(this,"map",e,t,void 0,arguments)},pop(){return rn(this,"pop")},push(...e){return rn(this,"push",e)},reduce(e,...t){return Ao(this,"reduce",e,t)},reduceRight(e,...t){return Ao(this,"reduceRight",e,t)},shift(){return rn(this,"shift")},some(e,t){return ct(this,"some",e,t,void 0,arguments)},splice(...e){return rn(this,"splice",e)},toReversed(){return qt(this).toReversed()},toSorted(e){return qt(this).toSorted(e)},toSpliced(...e){return qt(this).toSpliced(...e)},unshift(...e){return rn(this,"unshift",e)},values(){return gs(this,"values",e=>Ct(this,e))}};function gs(e,t,n){const s=ss(e),o=s[t]();return s!==e&&!je(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=n(r.value)),r}),o}const Ea=Array.prototype;function ct(e,t,n,s,o,r){const i=ss(e),a=i!==e&&!je(e),l=i[t];if(l!==Ea[t]){const d=l.apply(e,r);return a?Je(d):d}let u=n;i!==e&&(a?u=function(d,m){return n.call(this,Ct(e,d),m,e)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,e)}));const c=l.call(i,u,s);return a&&o?o(c):c}function Ao(e,t,n,s){const o=ss(e);let r=n;return o!==e&&(je(e)?n.length>3&&(r=function(i,a,l){return n.call(this,i,a,l,e)}):r=function(i,a,l){return n.call(this,i,Ct(e,a),l,e)}),o[t](r,...s)}function bs(e,t,n){const s=ee(e);we(s,"iterate",_n);const o=s[t](...n);return(o===-1||o===!1)&&oo(n[0])?(n[0]=ee(n[0]),s[t](...n)):o}function rn(e,t,n=[]){mt(),Zs();const s=ee(e)[t].apply(e,n);return Xs(),gt(),s}const Aa=Ks("__proto__,__v_isRef,__isVue"),jr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rt));function ka(e){Rt(e)||(e=String(e));const t=ee(this);return we(t,"has",e),t.hasOwnProperty(e)}class Gr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?Na:Yr:r?zr:Kr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=V(t);if(!o){let l;if(i&&(l=Sa[n]))return l;if(n==="hasOwnProperty")return ka}const a=Reflect.get(t,n,Ee(t)?t:s);if((Rt(n)?jr.has(n):Aa(n))||(o||we(t,"get",n),r))return a;if(Ee(a)){const l=i&&Js(n)?a:a.value;return o&&he(l)?Ls(l):l}return he(a)?o?Ls(a):Pn(a):a}}class qr extends Gr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];const i=V(t)&&Js(n);if(!this._isShallow){const u=bt(r);if(!je(s)&&!bt(s)&&(r=ee(r),s=ee(s)),!i&&Ee(r)&&!Ee(s))return u||(r.value=s),!0}const a=i?Number(n)<t.length:re(t,n),l=Reflect.set(t,n,s,Ee(t)?t:o);return t===ee(o)&&(a?kt(s,r)&&pt(t,"set",n,s):pt(t,"add",n,s)),l}deleteProperty(t,n){const s=re(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&pt(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!Rt(n)||!jr.has(n))&&we(t,"has",n),s}ownKeys(t){return we(t,"iterate",V(t)?"length":Ft),Reflect.ownKeys(t)}}class Pa extends Gr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ta=new qr,Ra=new Pa,Ia=new qr(!0);const Ds=e=>e,On=e=>Reflect.getPrototypeOf(e);function Oa(e,t,n){return function(...s){const o=this.__v_raw,r=ee(o),i=Qt(r),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=o[e](...s),c=n?Ds:t?en:Je;return!t&&we(r,"iterate",l?Os:Ft),ve(Object.create(u),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:a?[c(d[0]),c(d[1])]:c(d),done:m}}})}}function Dn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Da(e,t){const n={get(o){const r=this.__v_raw,i=ee(r),a=ee(o);e||(kt(o,a)&&we(i,"get",o),we(i,"get",a));const{has:l}=On(i),u=t?Ds:e?en:Je;if(l.call(i,o))return u(r.get(o));if(l.call(i,a))return u(r.get(a));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&we(ee(o),"iterate",Ft),o.size},has(o){const r=this.__v_raw,i=ee(r),a=ee(o);return e||(kt(o,a)&&we(i,"has",o),we(i,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const i=this,a=i.__v_raw,l=ee(a),u=t?Ds:e?en:Je;return!e&&we(l,"iterate",Ft),a.forEach((c,d)=>o.call(r,u(c),u(d),i))}};return ve(n,e?{add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear")}:{add(o){!t&&!je(o)&&!bt(o)&&(o=ee(o));const r=ee(this);return On(r).has.call(r,o)||(r.add(o),pt(r,"add",o,o)),this},set(o,r){!t&&!je(r)&&!bt(r)&&(r=ee(r));const i=ee(this),{has:a,get:l}=On(i);let u=a.call(i,o);u||(o=ee(o),u=a.call(i,o));const c=l.call(i,o);return i.set(o,r),u?kt(r,c)&&pt(i,"set",o,r):pt(i,"add",o,r),this},delete(o){const r=ee(this),{has:i,get:a}=On(r);let l=i.call(r,o);l||(o=ee(o),l=i.call(r,o)),a&&a.call(r,o);const u=r.delete(o);return l&&pt(r,"delete",o,void 0),u},clear(){const o=ee(this),r=o.size!==0,i=o.clear();return r&&pt(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Oa(o,e,t)}),n}function no(e,t){const n=Da(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(re(n,o)&&o in s?n:s,o,r)}const La={get:no(!1,!1)},Ma={get:no(!1,!0)},$a={get:no(!0,!1)};const Kr=new WeakMap,zr=new WeakMap,Yr=new WeakMap,Na=new WeakMap;function Fa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ba(e){return e.__v_skip||!Object.isExtensible(e)?0:Fa(ua(e))}function Pn(e){return bt(e)?e:so(e,!1,Ta,La,Kr)}function Jr(e){return so(e,!1,Ia,Ma,zr)}function Ls(e){return so(e,!0,Ra,$a,Yr)}function so(e,t,n,s,o){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=Ba(e);if(r===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,r===2?s:n);return o.set(e,a),a}function Bt(e){return bt(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function bt(e){return!!(e&&e.__v_isReadonly)}function je(e){return!!(e&&e.__v_isShallow)}function oo(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function Ha(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&Or(e,"__v_skip",!0),e}const Je=e=>he(e)?Pn(e):e,en=e=>he(e)?Ls(e):e;function Ee(e){return e?e.__v_isRef===!0:!1}function Ce(e){return Qr(e,!1)}function Wa(e){return Qr(e,!0)}function Qr(e,t){return Ee(e)?e:new Ua(e,t)}class Ua{constructor(t,n){this.dep=new to,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ee(t),this._value=n?t:Je(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||je(t)||bt(t);t=s?t:ee(t),kt(t,n)&&(this._rawValue=t,this._value=s?t:Je(t),this.dep.trigger())}}function Fe(e){return Ee(e)?e.value:e}const Va={get:(e,t,n)=>t==="__v_raw"?e:Fe(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Ee(o)&&!Ee(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Zr(e){return Bt(e)?e:new Proxy(e,Va)}class ja{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new to(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return Fr(this,!0),!0}get value(){const t=this.dep.track();return Wr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ga(e,t,n=!1){let s,o;return G(e)?s=e:(s=e.get,o=e.set),new ja(s,o,n)}const Ln={},Un=new WeakMap;let Mt;function qa(e,t=!1,n=Mt){if(n){let s=Un.get(n);s||Un.set(n,s=[]),s.push(e)}}function Ka(e,t,n=ce){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:a,call:l}=n,u=T=>o?T:je(T)||o===!1||o===0?ht(T,1):ht(T);let c,d,m,p,b=!1,S=!1;if(Ee(e)?(d=()=>e.value,b=je(e)):Bt(e)?(d=()=>u(e),b=!0):V(e)?(S=!0,b=e.some(T=>Bt(T)||je(T)),d=()=>e.map(T=>{if(Ee(T))return T.value;if(Bt(T))return u(T);if(G(T))return l?l(T,2):T()})):G(e)?t?d=l?()=>l(e,2):e:d=()=>{if(m){mt();try{m()}finally{gt()}}const T=Mt;Mt=c;try{return l?l(e,3,[p]):e(p)}finally{Mt=T}}:d=at,t&&o){const T=d,q=o===!0?1/0:o;d=()=>ht(T(),q)}const F=_a(),$=()=>{c.stop(),F&&F.active&&Ys(F.effects,c)};if(r&&t){const T=t;t=(...q)=>{T(...q),$()}}let E=S?new Array(e.length).fill(Ln):Ln;const k=T=>{if(!(!(c.flags&1)||!c.dirty&&!T))if(t){const q=c.run();if(o||b||(S?q.some((z,Y)=>kt(z,E[Y])):kt(q,E))){m&&m();const z=Mt;Mt=c;try{const Y=[q,E===Ln?void 0:S&&E[0]===Ln?[]:E,p];E=q,l?l(t,3,Y):t(...Y)}finally{Mt=z}}}else c.run()};return a&&a(k),c=new $r(d),c.scheduler=i?()=>i(k,!1):k,p=T=>qa(T,!1,c),m=c.onStop=()=>{const T=Un.get(c);if(T){if(l)l(T,4);else for(const q of T)q();Un.delete(c)}},t?s?k(!0):E=c.run():i?i(k.bind(null,!0),!0):c.run(),$.pause=c.pause.bind(c),$.resume=c.resume.bind(c),$.stop=$,$}function ht(e,t=1/0,n){if(t<=0||!he(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ee(e))ht(e.value,t,n);else if(V(e))for(let s=0;s<e.length;s++)ht(e[s],t,n);else if(Pr(e)||Qt(e))e.forEach(s=>{ht(s,t,n)});else if(Ir(e)){for(const s in e)ht(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&ht(e[s],t,n)}return e}function Tn(e,t,n,s){try{return s?e(...s):e()}catch(o){os(o,t,n)}}function Qe(e,t,n,s){if(G(e)){const o=Tn(e,t,n,s);return o&&Tr(o)&&o.catch(r=>{os(r,t,n)}),o}if(V(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Qe(e[r],t,n,s));return o}}function os(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ce;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}a=a.parent}if(r){mt(),Tn(r,null,10,[e,l,u]),gt();return}}za(e,n,o,s,i)}function za(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Pe=[];let rt=-1;const Zt=[];let St=null,Kt=0;const Xr=Promise.resolve();let Vn=null;function ei(e){const t=Vn||Xr;return e?t.then(this?e.bind(this):e):t}function Ya(e){let t=rt+1,n=Pe.length;for(;t<n;){const s=t+n>>>1,o=Pe[s],r=wn(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function ro(e){if(!(e.flags&1)){const t=wn(e),n=Pe[Pe.length-1];!n||!(e.flags&2)&&t>=wn(n)?Pe.push(e):Pe.splice(Ya(t),0,e),e.flags|=1,ti()}}function ti(){Vn||(Vn=Xr.then(si))}function Ja(e){V(e)?Zt.push(...e):St&&e.id===-1?St.splice(Kt+1,0,e):e.flags&1||(Zt.push(e),e.flags|=1),ti()}function ko(e,t,n=rt+1){for(;n<Pe.length;n++){const s=Pe[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Pe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ni(e){if(Zt.length){const t=[...new Set(Zt)].sort((n,s)=>wn(n)-wn(s));if(Zt.length=0,St){St.push(...t);return}for(St=t,Kt=0;Kt<St.length;Kt++){const n=St[Kt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}St=null,Kt=0}}const wn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function si(e){try{for(rt=0;rt<Pe.length;rt++){const t=Pe[rt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Tn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;rt<Pe.length;rt++){const t=Pe[rt];t&&(t.flags&=-2)}rt=-1,Pe.length=0,ni(),Vn=null,(Pe.length||Zt.length)&&si()}}let Be=null,oi=null;function jn(e){const t=Be;return Be=e,oi=e&&e.type.__scopeId||null,t}function Pt(e,t=Be,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Kn(-1);const r=jn(t);let i;try{i=e(...o)}finally{jn(r),s._d&&Kn(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Qa(e,t){if(Be===null)return e;const n=us(Be),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,a,l=ce]=t[o];r&&(G(r)&&(r={mounted:r,updated:r}),r.deep&&ht(i),s.push({dir:r,instance:n,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function Ot(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let l=a.dir[s];l&&(mt(),Qe(l,n,8,[e.el,a,e,t]),gt())}}function Fn(e,t){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[e]=t}}function Ye(e,t,n=!1){const s=po();if(s||Xt){let o=Xt?Xt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&G(t)?t.call(s&&s.proxy):t}}const Za=Symbol.for("v-scx"),Xa=()=>Ye(Za);function hn(e,t,n){return ri(e,t,n)}function ri(e,t,n=ce){const{immediate:s,deep:o,flush:r,once:i}=n,a=ve({},n),l=t&&s||!t&&r!=="post";let u;if(An){if(r==="sync"){const p=Xa();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=at,p.resume=at,p.pause=at,p}}const c=Se;a.call=(p,b,S)=>Qe(p,c,b,S);let d=!1;r==="post"?a.scheduler=p=>{Ne(p,c&&c.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(p,b)=>{b?p():ro(p)}),a.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const m=Ka(e,t,a);return An&&(u?u.push(m):l&&m()),m}function el(e,t,n){const s=this.proxy,o=ge(e)?e.includes(".")?ii(s,e):()=>s[e]:e.bind(s,s);let r;G(t)?r=t:(r=t.handler,n=t);const i=Rn(this),a=ri(o,r.bind(s),n);return i(),a}function ii(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const tl=Symbol("_vte"),ai=e=>e.__isTeleport,dt=Symbol("_leaveCb"),Mn=Symbol("_enterCb");function li(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vt(()=>{e.isMounted=!0}),as(()=>{e.isUnmounting=!0}),e}const Ue=[Function,Array],ci={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},ui=e=>{const t=e.subTree;return t.component?ui(t.component):t},nl={name:"BaseTransition",props:ci,setup(e,{slots:t}){const n=po(),s=li();return()=>{const o=t.default&&io(t.default(),!0);if(!o||!o.length)return;const r=fi(o),i=ee(e),{mode:a}=i;if(s.isLeaving)return vs(r);const l=Po(r);if(!l)return vs(r);let u=Cn(l,i,s,n,d=>u=d);l.type!==Re&&Ht(l,u);let c=n.subTree&&Po(n.subTree);if(c&&c.type!==Re&&!$t(c,l)&&ui(n).type!==Re){let d=Cn(c,i,s,n);if(Ht(c,d),a==="out-in"&&l.type!==Re)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},vs(r);a==="in-out"&&l.type!==Re?d.delayLeave=(m,p,b)=>{const S=di(s,c);S[String(c.key)]=c,m[dt]=()=>{p(),m[dt]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{b(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function fi(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Re){t=n;break}}return t}const sl=nl;function di(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Cn(e,t,n,s,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:m,onLeave:p,onAfterLeave:b,onLeaveCancelled:S,onBeforeAppear:F,onAppear:$,onAfterAppear:E,onAppearCancelled:k}=t,T=String(e.key),q=di(n,e),z=(U,K)=>{U&&Qe(U,s,9,K)},Y=(U,K)=>{const ae=K[1];z(U,K),V(U)?U.every(L=>L.length<=1)&&ae():U.length<=1&&ae()},J={mode:i,persisted:a,beforeEnter(U){let K=l;if(!n.isMounted)if(r)K=F||l;else return;U[dt]&&U[dt](!0);const ae=q[T];ae&&$t(e,ae)&&ae.el[dt]&&ae.el[dt](),z(K,[U])},enter(U){let K=u,ae=c,L=d;if(!n.isMounted)if(r)K=$||u,ae=E||c,L=k||d;else return;let ne=!1;const xe=U[Mn]=Me=>{ne||(ne=!0,Me?z(L,[U]):z(ae,[U]),J.delayedLeave&&J.delayedLeave(),U[Mn]=void 0)};K?Y(K,[U,xe]):xe()},leave(U,K){const ae=String(e.key);if(U[Mn]&&U[Mn](!0),n.isUnmounting)return K();z(m,[U]);let L=!1;const ne=U[dt]=xe=>{L||(L=!0,K(),xe?z(S,[U]):z(b,[U]),U[dt]=void 0,q[ae]===e&&delete q[ae])};q[ae]=e,p?Y(p,[U,ne]):ne()},clone(U){const K=Cn(U,t,n,s,o);return o&&o(K),K}};return J}function vs(e){if(rs(e))return e=Tt(e),e.children=null,e}function Po(e){if(!rs(e))return ai(e.type)&&e.children?fi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&G(n.default))return n.default()}}function Ht(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ht(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function io(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===pe?(i.patchFlag&128&&o++,s=s.concat(io(i.children,t,a))):(t||i.type!==Re)&&s.push(a!=null?Tt(i,{key:a}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function pi(e,t){return G(e)?ve({name:e.name},t,{setup:e}):e}function hi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Gn=new WeakMap;function mn(e,t,n,s,o=!1){if(V(e)){e.forEach((b,S)=>mn(b,t&&(V(t)?t[S]:t),n,s,o));return}if(gn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&mn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?us(s.component):s.el,i=o?null:r,{i:a,r:l}=e,u=t&&t.r,c=a.refs===ce?a.refs={}:a.refs,d=a.setupState,m=ee(d),p=d===ce?kr:b=>re(m,b);if(u!=null&&u!==l){if(To(t),ge(u))c[u]=null,p(u)&&(d[u]=null);else if(Ee(u)){u.value=null;const b=t;b.k&&(c[b.k]=null)}}if(G(l))Tn(l,a,12,[i,c]);else{const b=ge(l),S=Ee(l);if(b||S){const F=()=>{if(e.f){const $=b?p(l)?d[l]:c[l]:l.value;if(o)V($)&&Ys($,r);else if(V($))$.includes(r)||$.push(r);else if(b)c[l]=[r],p(l)&&(d[l]=c[l]);else{const E=[r];l.value=E,e.k&&(c[e.k]=E)}}else b?(c[l]=i,p(l)&&(d[l]=i)):S&&(l.value=i,e.k&&(c[e.k]=i))};if(i){const $=()=>{F(),Gn.delete(e)};$.id=-1,Gn.set(e,$),Ne($,n)}else To(e),F()}}}function To(e){const t=Gn.get(e);t&&(t.flags|=8,Gn.delete(e))}ns().requestIdleCallback;ns().cancelIdleCallback;const gn=e=>!!e.type.__asyncLoader,rs=e=>e.type.__isKeepAlive;function ol(e,t){mi(e,"a",t)}function rl(e,t){mi(e,"da",t)}function mi(e,t,n=Se){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(is(t,s,n),n){let o=n.parent;for(;o&&o.parent;)rs(o.parent.vnode)&&il(s,t,n,o),o=o.parent}}function il(e,t,n,s){const o=is(t,e,s,!0);bi(()=>{Ys(s[t],o)},n)}function is(e,t,n=Se,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{mt();const a=Rn(n),l=Qe(t,n,e,i);return a(),gt(),l});return s?o.unshift(r):o.push(r),r}}const vt=e=>(t,n=Se)=>{(!An||e==="sp")&&is(e,(...s)=>t(...s),n)},al=vt("bm"),Vt=vt("m"),ll=vt("bu"),gi=vt("u"),as=vt("bum"),bi=vt("um"),cl=vt("sp"),ul=vt("rtg"),fl=vt("rtc");function dl(e,t=Se){is("ec",e,t)}const vi="components";function ao(e,t){return xi(vi,e,!0,t)||e}const yi=Symbol.for("v-ndc");function pl(e){return ge(e)?xi(vi,e,!1)||e:e||yi}function xi(e,t,n=!0,s=!1){const o=Be||Se;if(o){const r=o.type;{const a=Ql(r,!1);if(a&&(a===t||a===Ge(t)||a===ts(Ge(t))))return r}const i=Ro(o[e]||r[e],t)||Ro(o.appContext[e],t);return!i&&s?r:i}}function Ro(e,t){return e&&(e[t]||e[Ge(t)]||e[ts(Ge(t))])}function qe(e,t,n,s){let o;const r=n,i=V(e);if(i||ge(e)){const a=i&&Bt(e);let l=!1,u=!1;a&&(l=!je(e),u=bt(e),e=ss(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=t(l?u?en(Je(e[c])):Je(e[c]):e[c],c,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r)}else if(he(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];o[l]=t(e[c],c,l,r)}}else o=[];return o}const Ms=e=>e?Bi(e)?us(e):Ms(e.parent):null,bn=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ms(e.parent),$root:e=>Ms(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wi(e),$forceUpdate:e=>e.f||(e.f=()=>{ro(e.update)}),$nextTick:e=>e.n||(e.n=ei.bind(e.proxy)),$watch:e=>el.bind(e)}),ys=(e,t)=>e!==ce&&!e.__isScriptSetup&&re(e,t),hl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(ys(s,t))return i[t]=1,s[t];if(o!==ce&&re(o,t))return i[t]=2,o[t];if(re(r,t))return i[t]=3,r[t];if(n!==ce&&re(n,t))return i[t]=4,n[t];$s&&(i[t]=0)}}const u=bn[t];let c,d;if(u)return t==="$attrs"&&we(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==ce&&re(n,t))return i[t]=4,n[t];if(d=l.config.globalProperties,re(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return ys(o,t)?(o[t]=n,!0):s!==ce&&re(s,t)?(s[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:r,type:i}},a){let l;return!!(n[a]||e!==ce&&a[0]!=="$"&&re(e,a)||ys(t,a)||re(r,a)||re(s,a)||re(bn,a)||re(o.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Io(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let $s=!0;function ml(e){const t=wi(e),n=e.proxy,s=e.ctx;$s=!1,t.beforeCreate&&Oo(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:m,beforeUpdate:p,updated:b,activated:S,deactivated:F,beforeDestroy:$,beforeUnmount:E,destroyed:k,unmounted:T,render:q,renderTracked:z,renderTriggered:Y,errorCaptured:J,serverPrefetch:U,expose:K,inheritAttrs:ae,components:L,directives:ne,filters:xe}=t;if(u&&gl(u,s,null),i)for(const le in i){const se=i[le];G(se)&&(s[le]=se.bind(n))}if(o){const le=o.call(n,n);he(le)&&(e.data=Pn(le))}if($s=!0,r)for(const le in r){const se=r[le],lt=G(se)?se.bind(n,n):G(se.get)?se.get.bind(n,n):at,yt=!G(se)&&G(se.set)?se.set.bind(n):at,Xe=ue({get:lt,set:yt});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Ie=>Xe.value=Ie})}if(a)for(const le in a)_i(a[le],s,n,le);if(l){const le=G(l)?l.call(n):l;Reflect.ownKeys(le).forEach(se=>{Fn(se,le[se])})}c&&Oo(c,e,"c");function be(le,se){V(se)?se.forEach(lt=>le(lt.bind(n))):se&&le(se.bind(n))}if(be(al,d),be(Vt,m),be(ll,p),be(gi,b),be(ol,S),be(rl,F),be(dl,J),be(fl,z),be(ul,Y),be(as,E),be(bi,T),be(cl,U),V(K))if(K.length){const le=e.exposed||(e.exposed={});K.forEach(se=>{Object.defineProperty(le,se,{get:()=>n[se],set:lt=>n[se]=lt,enumerable:!0})})}else e.exposed||(e.exposed={});q&&e.render===at&&(e.render=q),ae!=null&&(e.inheritAttrs=ae),L&&(e.components=L),ne&&(e.directives=ne),U&&hi(e)}function gl(e,t,n=at){V(e)&&(e=Ns(e));for(const s in e){const o=e[s];let r;he(o)?"default"in o?r=Ye(o.from||s,o.default,!0):r=Ye(o.from||s):r=Ye(o),Ee(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Oo(e,t,n){Qe(V(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function _i(e,t,n,s){let o=s.includes(".")?ii(n,s):()=>n[s];if(ge(e)){const r=t[e];G(r)&&hn(o,r)}else if(G(e))hn(o,e.bind(n));else if(he(e))if(V(e))e.forEach(r=>_i(r,t,n,s));else{const r=G(e.handler)?e.handler.bind(n):t[e.handler];G(r)&&hn(o,r,e)}}function wi(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let l;return a?l=a:!o.length&&!n&&!s?l=t:(l={},o.length&&o.forEach(u=>qn(l,u,i,!0)),qn(l,t,i)),he(t)&&r.set(t,l),l}function qn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&qn(e,r,n,!0),o&&o.forEach(i=>qn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=bl[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const bl={data:Do,props:Lo,emits:Lo,methods:un,computed:un,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:un,directives:un,watch:yl,provide:Do,inject:vl};function Do(e,t){return t?e?function(){return ve(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function vl(e,t){return un(Ns(e),Ns(t))}function Ns(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?ve(Object.create(null),e,t):t}function Lo(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:ve(Object.create(null),Io(e),Io(t??{})):t}function yl(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const s in t)n[s]=Ae(e[s],t[s]);return n}function Ci(){return{app:null,config:{isNativeTag:kr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xl=0;function _l(e,t){return function(s,o=null){G(s)||(s=ve({},s)),o!=null&&!he(o)&&(o=null);const r=Ci(),i=new WeakSet,a=[];let l=!1;const u=r.app={_uid:xl++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Xl,get config(){return r.config},set config(c){},use(c,...d){return i.has(c)||(c&&G(c.install)?(i.add(c),c.install(u,...d)):G(c)&&(i.add(c),c(u,...d))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,d){return d?(r.components[c]=d,u):r.components[c]},directive(c,d){return d?(r.directives[c]=d,u):r.directives[c]},mount(c,d,m){if(!l){const p=u._ceVNode||te(s,o);return p.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),e(p,c,m),l=!0,u._container=c,c.__vue_app__=u,us(p.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Qe(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return r.provides[c]=d,u},runWithContext(c){const d=Xt;Xt=u;try{return c()}finally{Xt=d}}};return u}}let Xt=null;const wl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ge(t)}Modifiers`]||e[`${Wt(t)}Modifiers`];function Cl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ce;let o=n;const r=t.startsWith("update:"),i=r&&wl(s,t.slice(7));i&&(i.trim&&(o=n.map(c=>ge(c)?c.trim():c)),i.number&&(o=n.map(Qs)));let a,l=s[a=ps(t)]||s[a=ps(Ge(t))];!l&&r&&(l=s[a=ps(Wt(t))]),l&&Qe(l,e,6,o);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qe(u,e,6,o)}}const Sl=new WeakMap;function Si(e,t,n=!1){const s=n?Sl:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!G(e)){const l=u=>{const c=Si(u,t,!0);c&&(a=!0,ve(i,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(he(e)&&s.set(e,null),null):(V(r)?r.forEach(l=>i[l]=null):ve(i,r),he(e)&&s.set(e,i),i)}function ls(e,t){return!e||!Zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,Wt(t))||re(e,t))}function Mo(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:a,emit:l,render:u,renderCache:c,props:d,data:m,setupState:p,ctx:b,inheritAttrs:S}=e,F=jn(e);let $,E;try{if(n.shapeFlag&4){const T=o||s,q=T;$=it(u.call(q,T,c,d,p,m,b)),E=a}else{const T=t;$=it(T.length>1?T(d,{attrs:a,slots:i,emit:l}):T(d,null)),E=t.props?a:El(a)}}catch(T){vn.length=0,os(T,e,1),$=te(Re)}let k=$;if(E&&S!==!1){const T=Object.keys(E),{shapeFlag:q}=k;T.length&&q&7&&(r&&T.some(zs)&&(E=Al(E,r)),k=Tt(k,E,!1,!0))}return n.dirs&&(k=Tt(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&Ht(k,n.transition),$=k,jn(F),$}const El=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zn(n))&&((t||(t={}))[n]=e[n]);return t},Al=(e,t)=>{const n={};for(const s in e)(!zs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function kl(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?$o(s,i,u):!!i;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const m=c[d];if(i[m]!==s[m]&&!ls(u,m))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?$o(s,i,u):!0:!!i;return!1}function $o(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!ls(n,r))return!0}return!1}function Pl({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ei={},Ai=()=>Object.create(Ei),ki=e=>Object.getPrototypeOf(e)===Ei;function Tl(e,t,n,s=!1){const o={},r=Ai();e.propsDefaults=Object.create(null),Pi(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Jr(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Rl(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=ee(o),[l]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let m=c[d];if(ls(e.emitsOptions,m))continue;const p=t[m];if(l)if(re(r,m))p!==r[m]&&(r[m]=p,u=!0);else{const b=Ge(m);o[b]=Fs(l,a,b,p,e,!1)}else p!==r[m]&&(r[m]=p,u=!0)}}}else{Pi(e,t,o,r)&&(u=!0);let c;for(const d in a)(!t||!re(t,d)&&((c=Wt(d))===d||!re(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(o[d]=Fs(l,a,d,void 0,e,!0)):delete o[d]);if(r!==a)for(const d in r)(!t||!re(t,d))&&(delete r[d],u=!0)}u&&pt(e.attrs,"set","")}function Pi(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(fn(l))continue;const u=t[l];let c;o&&re(o,c=Ge(l))?!r||!r.includes(c)?n[c]=u:(a||(a={}))[c]=u:ls(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,i=!0)}if(r){const l=ee(n),u=a||ce;for(let c=0;c<r.length;c++){const d=r[c];n[d]=Fs(o,l,d,u[d],e,!re(u,d))}}return i}function Fs(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=re(i,"default");if(a&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&G(l)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const c=Rn(o);s=u[n]=l.call(null,t),c()}}else s=l;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===Wt(n))&&(s=!0))}return s}const Il=new WeakMap;function Ti(e,t,n=!1){const s=n?Il:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let l=!1;if(!G(e)){const c=d=>{l=!0;const[m,p]=Ti(d,t,!0);ve(i,m),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return he(e)&&s.set(e,Jt),Jt;if(V(r))for(let c=0;c<r.length;c++){const d=Ge(r[c]);No(d)&&(i[d]=ce)}else if(r)for(const c in r){const d=Ge(c);if(No(d)){const m=r[c],p=i[d]=V(m)||G(m)?{type:m}:ve({},m),b=p.type;let S=!1,F=!0;if(V(b))for(let $=0;$<b.length;++$){const E=b[$],k=G(E)&&E.name;if(k==="Boolean"){S=!0;break}else k==="String"&&(F=!1)}else S=G(b)&&b.name==="Boolean";p[0]=S,p[1]=F,(S||re(p,"default"))&&a.push(d)}}const u=[i,a];return he(e)&&s.set(e,u),u}function No(e){return e[0]!=="$"&&!fn(e)}const lo=e=>e==="_"||e==="_ctx"||e==="$stable",co=e=>V(e)?e.map(it):[it(e)],Ol=(e,t,n)=>{if(t._n)return t;const s=Pt((...o)=>co(t(...o)),n);return s._c=!1,s},Ri=(e,t,n)=>{const s=e._ctx;for(const o in e){if(lo(o))continue;const r=e[o];if(G(r))t[o]=Ol(o,r,s);else if(r!=null){const i=co(r);t[o]=()=>i}}},Ii=(e,t)=>{const n=co(t);e.slots.default=()=>n},Oi=(e,t,n)=>{for(const s in t)(n||!lo(s))&&(e[s]=t[s])},Dl=(e,t,n)=>{const s=e.slots=Ai();if(e.vnode.shapeFlag&32){const o=t._;o?(Oi(s,t,n),n&&Or(s,"_",o,!0)):Ri(t,s)}else t&&Ii(e,t)},Ll=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=ce;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Oi(o,t,n):(r=!t.$stable,Ri(t,o)),i=t}else t&&(Ii(e,t),i={default:1});if(r)for(const a in o)!lo(a)&&i[a]==null&&delete o[a]},Ne=Bl;function Ml(e){return $l(e)}function $l(e,t){const n=ns();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:m,setScopeId:p=at,insertStaticContent:b}=e,S=(f,h,g,v=null,_=null,y=null,R=void 0,P=null,A=!!h.dynamicChildren)=>{if(f===h)return;f&&!$t(f,h)&&(v=x(f),Ie(f,_,y,!0),f=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:C,ref:W,shapeFlag:D}=h;switch(C){case cs:F(f,h,g,v);break;case Re:$(f,h,g,v);break;case Bn:f==null&&E(h,g,v,R);break;case pe:L(f,h,g,v,_,y,R,P,A);break;default:D&1?q(f,h,g,v,_,y,R,P,A):D&6?ne(f,h,g,v,_,y,R,P,A):(D&64||D&128)&&C.process(f,h,g,v,_,y,R,P,A,B)}W!=null&&_?mn(W,f&&f.ref,y,h||f,!h):W==null&&f&&f.ref!=null&&mn(f.ref,null,y,f,!0)},F=(f,h,g,v)=>{if(f==null)s(h.el=a(h.children),g,v);else{const _=h.el=f.el;h.children!==f.children&&u(_,h.children)}},$=(f,h,g,v)=>{f==null?s(h.el=l(h.children||""),g,v):h.el=f.el},E=(f,h,g,v)=>{[f.el,f.anchor]=b(f.children,h,g,v,f.el,f.anchor)},k=({el:f,anchor:h},g,v)=>{let _;for(;f&&f!==h;)_=m(f),s(f,g,v),f=_;s(h,g,v)},T=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=m(f),o(f),f=g;o(h)},q=(f,h,g,v,_,y,R,P,A)=>{if(h.type==="svg"?R="svg":h.type==="math"&&(R="mathml"),f==null)z(h,g,v,_,y,R,P,A);else{const C=f.el&&f.el._isVueCE?f.el:null;try{C&&C._beginPatch(),U(f,h,_,y,R,P,A)}finally{C&&C._endPatch()}}},z=(f,h,g,v,_,y,R,P)=>{let A,C;const{props:W,shapeFlag:D,transition:H,dirs:j}=f;if(A=f.el=i(f.type,y,W&&W.is,W),D&8?c(A,f.children):D&16&&J(f.children,A,null,v,_,xs(f,y),R,P),j&&Ot(f,null,v,"created"),Y(A,f,f.scopeId,R,v),W){for(const fe in W)fe!=="value"&&!fn(fe)&&r(A,fe,null,W[fe],y,v);"value"in W&&r(A,"value",null,W.value,y),(C=W.onVnodeBeforeMount)&&st(C,v,f)}j&&Ot(f,null,v,"beforeMount");const Z=Nl(_,H);Z&&H.beforeEnter(A),s(A,h,g),((C=W&&W.onVnodeMounted)||Z||j)&&Ne(()=>{C&&st(C,v,f),Z&&H.enter(A),j&&Ot(f,null,v,"mounted")},_)},Y=(f,h,g,v,_)=>{if(g&&p(f,g),v)for(let y=0;y<v.length;y++)p(f,v[y]);if(_){let y=_.subTree;if(h===y||$i(y.type)&&(y.ssContent===h||y.ssFallback===h)){const R=_.vnode;Y(f,R,R.scopeId,R.slotScopeIds,_.parent)}}},J=(f,h,g,v,_,y,R,P,A=0)=>{for(let C=A;C<f.length;C++){const W=f[C]=P?Et(f[C]):it(f[C]);S(null,W,h,g,v,_,y,R,P)}},U=(f,h,g,v,_,y,R)=>{const P=h.el=f.el;let{patchFlag:A,dynamicChildren:C,dirs:W}=h;A|=f.patchFlag&16;const D=f.props||ce,H=h.props||ce;let j;if(g&&Dt(g,!1),(j=H.onVnodeBeforeUpdate)&&st(j,g,h,f),W&&Ot(h,f,g,"beforeUpdate"),g&&Dt(g,!0),(D.innerHTML&&H.innerHTML==null||D.textContent&&H.textContent==null)&&c(P,""),C?K(f.dynamicChildren,C,P,g,v,xs(h,_),y):R||se(f,h,P,null,g,v,xs(h,_),y,!1),A>0){if(A&16)ae(P,D,H,g,_);else if(A&2&&D.class!==H.class&&r(P,"class",null,H.class,_),A&4&&r(P,"style",D.style,H.style,_),A&8){const Z=h.dynamicProps;for(let fe=0;fe<Z.length;fe++){const ie=Z[fe],Oe=D[ie],De=H[ie];(De!==Oe||ie==="value")&&r(P,ie,Oe,De,_,g)}}A&1&&f.children!==h.children&&c(P,h.children)}else!R&&C==null&&ae(P,D,H,g,_);((j=H.onVnodeUpdated)||W)&&Ne(()=>{j&&st(j,g,h,f),W&&Ot(h,f,g,"updated")},v)},K=(f,h,g,v,_,y,R)=>{for(let P=0;P<h.length;P++){const A=f[P],C=h[P],W=A.el&&(A.type===pe||!$t(A,C)||A.shapeFlag&198)?d(A.el):g;S(A,C,W,null,v,_,y,R,!0)}},ae=(f,h,g,v,_)=>{if(h!==g){if(h!==ce)for(const y in h)!fn(y)&&!(y in g)&&r(f,y,h[y],null,_,v);for(const y in g){if(fn(y))continue;const R=g[y],P=h[y];R!==P&&y!=="value"&&r(f,y,P,R,_,v)}"value"in g&&r(f,"value",h.value,g.value,_)}},L=(f,h,g,v,_,y,R,P,A)=>{const C=h.el=f?f.el:a(""),W=h.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:H,slotScopeIds:j}=h;j&&(P=P?P.concat(j):j),f==null?(s(C,g,v),s(W,g,v),J(h.children||[],g,W,_,y,R,P,A)):D>0&&D&64&&H&&f.dynamicChildren&&f.dynamicChildren.length===H.length?(K(f.dynamicChildren,H,g,_,y,R,P),(h.key!=null||_&&h===_.subTree)&&Di(f,h,!0)):se(f,h,g,W,_,y,R,P,A)},ne=(f,h,g,v,_,y,R,P,A)=>{h.slotScopeIds=P,f==null?h.shapeFlag&512?_.ctx.activate(h,g,v,R,A):xe(h,g,v,_,y,R,A):Me(f,h,A)},xe=(f,h,g,v,_,y,R)=>{const P=f.component=ql(f,v,_);if(rs(f)&&(P.ctx.renderer=B),Kl(P,!1,R),P.asyncDep){if(_&&_.registerDep(P,be,R),!f.el){const A=P.subTree=te(Re);$(null,A,h,g),f.placeholder=A.el}}else be(P,f,h,g,_,y,R)},Me=(f,h,g)=>{const v=h.component=f.component;if(kl(f,h,g))if(v.asyncDep&&!v.asyncResolved){le(v,h,g);return}else v.next=h,v.update();else h.el=f.el,v.vnode=h},be=(f,h,g,v,_,y,R)=>{const P=()=>{if(f.isMounted){let{next:D,bu:H,u:j,parent:Z,vnode:fe}=f;{const tt=Li(f);if(tt){D&&(D.el=fe.el,le(f,D,R)),tt.asyncDep.then(()=>{f.isUnmounted||P()});return}}let ie=D,Oe;Dt(f,!1),D?(D.el=fe.el,le(f,D,R)):D=fe,H&&Nn(H),(Oe=D.props&&D.props.onVnodeBeforeUpdate)&&st(Oe,Z,D,fe),Dt(f,!0);const De=Mo(f),et=f.subTree;f.subTree=De,S(et,De,d(et.el),x(et),f,_,y),D.el=De.el,ie===null&&Pl(f,De.el),j&&Ne(j,_),(Oe=D.props&&D.props.onVnodeUpdated)&&Ne(()=>st(Oe,Z,D,fe),_)}else{let D;const{el:H,props:j}=h,{bm:Z,m:fe,parent:ie,root:Oe,type:De}=f,et=gn(h);Dt(f,!1),Z&&Nn(Z),!et&&(D=j&&j.onVnodeBeforeMount)&&st(D,ie,h),Dt(f,!0);{Oe.ce&&Oe.ce._def.shadowRoot!==!1&&Oe.ce._injectChildStyle(De);const tt=f.subTree=Mo(f);S(null,tt,g,v,f,_,y),h.el=tt.el}if(fe&&Ne(fe,_),!et&&(D=j&&j.onVnodeMounted)){const tt=h;Ne(()=>st(D,ie,tt),_)}(h.shapeFlag&256||ie&&gn(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&Ne(f.a,_),f.isMounted=!0,h=g=v=null}};f.scope.on();const A=f.effect=new $r(P);f.scope.off();const C=f.update=A.run.bind(A),W=f.job=A.runIfDirty.bind(A);W.i=f,W.id=f.uid,A.scheduler=()=>ro(W),Dt(f,!0),C()},le=(f,h,g)=>{h.component=f;const v=f.vnode.props;f.vnode=h,f.next=null,Rl(f,h.props,v,g),Ll(f,h.children,g),mt(),ko(f),gt()},se=(f,h,g,v,_,y,R,P,A=!1)=>{const C=f&&f.children,W=f?f.shapeFlag:0,D=h.children,{patchFlag:H,shapeFlag:j}=h;if(H>0){if(H&128){yt(C,D,g,v,_,y,R,P,A);return}else if(H&256){lt(C,D,g,v,_,y,R,P,A);return}}j&8?(W&16&&We(C,_,y),D!==C&&c(g,D)):W&16?j&16?yt(C,D,g,v,_,y,R,P,A):We(C,_,y,!0):(W&8&&c(g,""),j&16&&J(D,g,v,_,y,R,P,A))},lt=(f,h,g,v,_,y,R,P,A)=>{f=f||Jt,h=h||Jt;const C=f.length,W=h.length,D=Math.min(C,W);let H;for(H=0;H<D;H++){const j=h[H]=A?Et(h[H]):it(h[H]);S(f[H],j,g,null,_,y,R,P,A)}C>W?We(f,_,y,!0,!1,D):J(h,g,v,_,y,R,P,A,D)},yt=(f,h,g,v,_,y,R,P,A)=>{let C=0;const W=h.length;let D=f.length-1,H=W-1;for(;C<=D&&C<=H;){const j=f[C],Z=h[C]=A?Et(h[C]):it(h[C]);if($t(j,Z))S(j,Z,g,null,_,y,R,P,A);else break;C++}for(;C<=D&&C<=H;){const j=f[D],Z=h[H]=A?Et(h[H]):it(h[H]);if($t(j,Z))S(j,Z,g,null,_,y,R,P,A);else break;D--,H--}if(C>D){if(C<=H){const j=H+1,Z=j<W?h[j].el:v;for(;C<=H;)S(null,h[C]=A?Et(h[C]):it(h[C]),g,Z,_,y,R,P,A),C++}}else if(C>H)for(;C<=D;)Ie(f[C],_,y,!0),C++;else{const j=C,Z=C,fe=new Map;for(C=Z;C<=H;C++){const $e=h[C]=A?Et(h[C]):it(h[C]);$e.key!=null&&fe.set($e.key,C)}let ie,Oe=0;const De=H-Z+1;let et=!1,tt=0;const on=new Array(De);for(C=0;C<De;C++)on[C]=0;for(C=j;C<=D;C++){const $e=f[C];if(Oe>=De){Ie($e,_,y,!0);continue}let nt;if($e.key!=null)nt=fe.get($e.key);else for(ie=Z;ie<=H;ie++)if(on[ie-Z]===0&&$t($e,h[ie])){nt=ie;break}nt===void 0?Ie($e,_,y,!0):(on[nt-Z]=C+1,nt>=tt?tt=nt:et=!0,S($e,h[nt],g,null,_,y,R,P,A),Oe++)}const _o=et?Fl(on):Jt;for(ie=_o.length-1,C=De-1;C>=0;C--){const $e=Z+C,nt=h[$e],wo=h[$e+1],Co=$e+1<W?wo.el||Mi(wo):v;on[C]===0?S(null,nt,g,Co,_,y,R,P,A):et&&(ie<0||C!==_o[ie]?Xe(nt,g,Co,2):ie--)}}},Xe=(f,h,g,v,_=null)=>{const{el:y,type:R,transition:P,children:A,shapeFlag:C}=f;if(C&6){Xe(f.component.subTree,h,g,v);return}if(C&128){f.suspense.move(h,g,v);return}if(C&64){R.move(f,h,g,B);return}if(R===pe){s(y,h,g);for(let D=0;D<A.length;D++)Xe(A[D],h,g,v);s(f.anchor,h,g);return}if(R===Bn){k(f,h,g);return}if(v!==2&&C&1&&P)if(v===0)P.beforeEnter(y),s(y,h,g),Ne(()=>P.enter(y),_);else{const{leave:D,delayLeave:H,afterLeave:j}=P,Z=()=>{f.ctx.isUnmounted?o(y):s(y,h,g)},fe=()=>{y._isLeaving&&y[dt](!0),D(y,()=>{Z(),j&&j()})};H?H(y,Z,fe):fe()}else s(y,h,g)},Ie=(f,h,g,v=!1,_=!1)=>{const{type:y,props:R,ref:P,children:A,dynamicChildren:C,shapeFlag:W,patchFlag:D,dirs:H,cacheIndex:j}=f;if(D===-2&&(_=!1),P!=null&&(mt(),mn(P,null,g,f,!0),gt()),j!=null&&(h.renderCache[j]=void 0),W&256){h.ctx.deactivate(f);return}const Z=W&1&&H,fe=!gn(f);let ie;if(fe&&(ie=R&&R.onVnodeBeforeUnmount)&&st(ie,h,f),W&6)It(f.component,g,v);else{if(W&128){f.suspense.unmount(g,v);return}Z&&Ot(f,null,h,"beforeUnmount"),W&64?f.type.remove(f,h,g,B,v):C&&!C.hasOnce&&(y!==pe||D>0&&D&64)?We(C,h,g,!1,!0):(y===pe&&D&384||!_&&W&16)&&We(A,h,g),v&&jt(f)}(fe&&(ie=R&&R.onVnodeUnmounted)||Z)&&Ne(()=>{ie&&st(ie,h,f),Z&&Ot(f,null,h,"unmounted")},g)},jt=f=>{const{type:h,el:g,anchor:v,transition:_}=f;if(h===pe){Gt(g,v);return}if(h===Bn){T(f);return}const y=()=>{o(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:P}=_,A=()=>R(g,y);P?P(f.el,y,A):A()}else y()},Gt=(f,h)=>{let g;for(;f!==h;)g=m(f),o(f),f=g;o(h)},It=(f,h,g)=>{const{bum:v,scope:_,job:y,subTree:R,um:P,m:A,a:C}=f;Fo(A),Fo(C),v&&Nn(v),_.stop(),y&&(y.flags|=8,Ie(R,f,h,g)),P&&Ne(P,h),Ne(()=>{f.isUnmounted=!0},h)},We=(f,h,g,v=!1,_=!1,y=0)=>{for(let R=y;R<f.length;R++)Ie(f[R],h,g,v,_)},x=f=>{if(f.shapeFlag&6)return x(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=m(f.anchor||f.el),g=h&&h[tl];return g?m(g):h};let N=!1;const I=(f,h,g)=>{let v;f==null?h._vnode&&(Ie(h._vnode,null,null,!0),v=h._vnode.component):S(h._vnode||null,f,h,null,null,null,g),h._vnode=f,N||(N=!0,ko(v),ni(),N=!1)},B={p:S,um:Ie,m:Xe,r:jt,mt:xe,mc:J,pc:se,pbc:K,n:x,o:e};return{render:I,hydrate:void 0,createApp:_l(I)}}function xs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Dt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Nl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Di(e,t,n=!1){const s=e.children,o=t.children;if(V(s)&&V(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=Et(o[r]),a.el=i.el),!n&&a.patchFlag!==-2&&Di(i,a)),a.type===cs&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=r+(e.type===pe?1:0)),a.type===Re&&!a.el&&(a.el=i.el)}}function Fl(e){const t=e.slice(),n=[0];let s,o,r,i,a;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<u?r=a+1:i=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Li(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Li(t)}function Fo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Mi(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Mi(t.subTree):null}const $i=e=>e.__isSuspense;function Bl(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):Ja(e)}const pe=Symbol.for("v-fgt"),cs=Symbol.for("v-txt"),Re=Symbol.for("v-cmt"),Bn=Symbol.for("v-stc"),vn=[];let He=null;function O(e=!1){vn.push(He=e?null:[])}function Hl(){vn.pop(),He=vn[vn.length-1]||null}let Sn=1;function Kn(e,t=!1){Sn+=e,e<0&&He&&t&&(He.hasOnce=!0)}function Ni(e){return e.dynamicChildren=Sn>0?He||Jt:null,Hl(),Sn>0&&He&&He.push(e),e}function M(e,t,n,s,o,r){return Ni(w(e,t,n,s,o,r,!0))}function En(e,t,n,s,o){return Ni(te(e,t,n,s,o,!0))}function zn(e){return e?e.__v_isVNode===!0:!1}function $t(e,t){return e.type===t.type&&e.key===t.key}const Fi=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||Ee(e)||G(e)?{i:Be,r:e,k:t,f:!!n}:e:null);function w(e,t=null,n=null,s=0,o=null,r=e===pe?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fi(t),ref:t&&Hn(t),scopeId:oi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Be};return a?(fo(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),Sn>0&&!i&&He&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&He.push(l),l}const te=Wl;function Wl(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===yi)&&(e=Re),zn(e)){const a=Tt(e,t,!0);return n&&fo(a,n),Sn>0&&!r&&He&&(a.shapeFlag&6?He[He.indexOf(e)]=a:He.push(a)),a.patchFlag=-2,a}if(Zl(e)&&(e=e.__vccOpts),t){t=Ul(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=Ut(a)),he(l)&&(oo(l)&&!V(l)&&(l=ve({},l)),t.style=Ke(l))}const i=ge(e)?1:$i(e)?128:ai(e)?64:he(e)?4:G(e)?2:0;return w(e,t,n,s,o,i,r,!0)}function Ul(e){return e?oo(e)||ki(e)?ve({},e):e:null}function Tt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:a,transition:l}=e,u=t?Vl(o||{},t):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Fi(u),ref:t&&t.ref?n&&r?V(r)?r.concat(Hn(t)):[r,Hn(t)]:Hn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&Ht(c,l.clone(c)),c}function Ve(e=" ",t=0){return te(cs,null,e,t)}function uo(e,t){const n=te(Bn,null,e);return n.staticCount=t,n}function Te(e="",t=!1){return t?(O(),En(Re,null,e)):te(Re,null,e)}function it(e){return e==null||typeof e=="boolean"?te(Re):V(e)?te(pe,null,e.slice()):zn(e)?Et(e):te(cs,null,String(e))}function Et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tt(e)}function fo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),fo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!ki(t)?t._ctx=Be:o===3&&Be&&(Be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:Be},n=32):(t=String(t),s&64?(n=16,t=[Ve(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Ut([t.class,s.class]));else if(o==="style")t.style=Ke([t.style,s.style]);else if(Zn(o)){const r=t[o],i=s[o];i&&r!==i&&!(V(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function st(e,t,n,s=null){Qe(e,t,7,[n,s])}const jl=Ci();let Gl=0;function ql(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||jl,r={uid:Gl++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ti(s,o),emitsOptions:Si(s,o),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Cl.bind(null,r),e.ce&&e.ce(r),r}let Se=null;const po=()=>Se||Be;let Yn,Bs;{const e=ns(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};Yn=t("__VUE_INSTANCE_SETTERS__",n=>Se=n),Bs=t("__VUE_SSR_SETTERS__",n=>An=n)}const Rn=e=>{const t=Se;return Yn(e),e.scope.on(),()=>{e.scope.off(),Yn(t)}},Bo=()=>{Se&&Se.scope.off(),Yn(null)};function Bi(e){return e.vnode.shapeFlag&4}let An=!1;function Kl(e,t=!1,n=!1){t&&Bs(t);const{props:s,children:o}=e.vnode,r=Bi(e);Tl(e,s,r,t),Dl(e,o,n||t);const i=r?zl(e,t):void 0;return t&&Bs(!1),i}function zl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,hl);const{setup:s}=n;if(s){mt();const o=e.setupContext=s.length>1?Jl(e):null,r=Rn(e),i=Tn(s,e,0,[e.props,o]),a=Tr(i);if(gt(),r(),(a||e.sp)&&!gn(e)&&hi(e),a){if(i.then(Bo,Bo),t)return i.then(l=>{Ho(e,l)}).catch(l=>{os(l,e,0)});e.asyncDep=i}else Ho(e,i)}else Hi(e)}function Ho(e,t,n){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=Zr(t)),Hi(e)}function Hi(e,t,n){const s=e.type;e.render||(e.render=s.render||at);{const o=Rn(e);mt();try{ml(e)}finally{gt(),o()}}}const Yl={get(e,t){return we(e,"get",""),e[t]}};function Jl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Yl),slots:e.slots,emit:e.emit,expose:t}}function us(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Zr(Ha(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in bn)return bn[n](e)},has(t,n){return n in t||n in bn}})):e.proxy}function Ql(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function Zl(e){return G(e)&&"__vccOpts"in e}const ue=(e,t)=>Ga(e,t,An);function ho(e,t,n){try{Kn(-1);const s=arguments.length;return s===2?he(t)&&!V(t)?zn(t)?te(e,null,[t]):te(e,t):te(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&zn(n)&&(n=[n]),te(e,t,n))}finally{Kn(1)}}const Xl="3.5.27";let Hs;const Wo=typeof window<"u"&&window.trustedTypes;if(Wo)try{Hs=Wo.createPolicy("vue",{createHTML:e=>e})}catch{}const Wi=Hs?e=>Hs.createHTML(e):e=>e,ec="http://www.w3.org/2000/svg",tc="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,Uo=ft&&ft.createElement("template"),nc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?ft.createElementNS(ec,e):t==="mathml"?ft.createElementNS(tc,e):n?ft.createElement(e,{is:n}):ft.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Uo.innerHTML=Wi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Uo.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},xt="transition",an="animation",tn=Symbol("_vtc"),Ui={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vi=ve({},ci,Ui),sc=e=>(e.displayName="Transition",e.props=Vi,e),mo=sc((e,{slots:t})=>ho(sl,ji(e),t)),Lt=(e,t=[])=>{V(e)?e.forEach(n=>n(...t)):e&&e(...t)},Vo=e=>e?V(e)?e.some(t=>t.length>1):e.length>1:!1;function ji(e){const t={};for(const L in e)L in Ui||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:u=i,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,b=oc(o),S=b&&b[0],F=b&&b[1],{onBeforeEnter:$,onEnter:E,onEnterCancelled:k,onLeave:T,onLeaveCancelled:q,onBeforeAppear:z=$,onAppear:Y=E,onAppearCancelled:J=k}=t,U=(L,ne,xe,Me)=>{L._enterCancelled=Me,wt(L,ne?c:a),wt(L,ne?u:i),xe&&xe()},K=(L,ne)=>{L._isLeaving=!1,wt(L,d),wt(L,p),wt(L,m),ne&&ne()},ae=L=>(ne,xe)=>{const Me=L?Y:E,be=()=>U(ne,L,xe);Lt(Me,[ne,be]),jo(()=>{wt(ne,L?l:r),ot(ne,L?c:a),Vo(Me)||Go(ne,s,S,be)})};return ve(t,{onBeforeEnter(L){Lt($,[L]),ot(L,r),ot(L,i)},onBeforeAppear(L){Lt(z,[L]),ot(L,l),ot(L,u)},onEnter:ae(!1),onAppear:ae(!0),onLeave(L,ne){L._isLeaving=!0;const xe=()=>K(L,ne);ot(L,d),L._enterCancelled?(ot(L,m),Ws(L)):(Ws(L),ot(L,m)),jo(()=>{L._isLeaving&&(wt(L,d),ot(L,p),Vo(T)||Go(L,s,F,xe))}),Lt(T,[L,xe])},onEnterCancelled(L){U(L,!1,void 0,!0),Lt(k,[L])},onAppearCancelled(L){U(L,!0,void 0,!0),Lt(J,[L])},onLeaveCancelled(L){K(L),Lt(q,[L])}})}function oc(e){if(e==null)return null;if(he(e))return[_s(e.enter),_s(e.leave)];{const t=_s(e);return[t,t]}}function _s(e){return pa(e)}function ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[tn]||(e[tn]=new Set)).add(t)}function wt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[tn];n&&(n.delete(t),n.size||(e[tn]=void 0))}function jo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let rc=0;function Go(e,t,n,s){const o=e._endId=++rc,r=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:a,propCount:l}=Gi(e,t);if(!i)return s();const u=i+"end";let c=0;const d=()=>{e.removeEventListener(u,m),r()},m=p=>{p.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},a+1),e.addEventListener(u,m)}function Gi(e,t){const n=window.getComputedStyle(e),s=b=>(n[b]||"").split(", "),o=s(`${xt}Delay`),r=s(`${xt}Duration`),i=qo(o,r),a=s(`${an}Delay`),l=s(`${an}Duration`),u=qo(a,l);let c=null,d=0,m=0;t===xt?i>0&&(c=xt,d=i,m=r.length):t===an?u>0&&(c=an,d=u,m=l.length):(d=Math.max(i,u),c=d>0?i>u?xt:an:null,m=c?c===xt?r.length:l.length:0);const p=c===xt&&/\b(?:transform|all)(?:,|$)/.test(s(`${xt}Property`).toString());return{type:c,timeout:d,propCount:m,hasTransform:p}}function qo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ko(n)+Ko(e[s])))}function Ko(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ws(e){return(e?e.ownerDocument:document).body.offsetHeight}function ic(e,t,n){const s=e[tn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const zo=Symbol("_vod"),ac=Symbol("_vsh"),lc=Symbol(""),cc=/(?:^|;)\s*display\s*:/;function uc(e,t,n){const s=e.style,o=ge(n);let r=!1;if(n&&!o){if(t)if(ge(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Wn(s,a,"")}else for(const i in t)n[i]==null&&Wn(s,i,"");for(const i in n)i==="display"&&(r=!0),Wn(s,i,n[i])}else if(o){if(t!==n){const i=s[lc];i&&(n+=";"+i),s.cssText=n,r=cc.test(n)}}else t&&e.removeAttribute("style");zo in e&&(e[zo]=r?s.display:"",e[ac]&&(s.display="none"))}const Yo=/\s*!important$/;function Wn(e,t,n){if(V(n))n.forEach(s=>Wn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=fc(e,t);Yo.test(n)?e.setProperty(Wt(s),n.replace(Yo,""),"important"):e[s]=n}}const Jo=["Webkit","Moz","ms"],ws={};function fc(e,t){const n=ws[t];if(n)return n;let s=Ge(t);if(s!=="filter"&&s in e)return ws[t]=s;s=ts(s);for(let o=0;o<Jo.length;o++){const r=Jo[o]+s;if(r in e)return ws[t]=r}return t}const Qo="http://www.w3.org/1999/xlink";function Zo(e,t,n,s,o,r=ya(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Qo,t.slice(6,t.length)):e.setAttributeNS(Qo,t,n):n==null||r&&!Dr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Rt(n)?String(n):n)}function Xo(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Wi(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Dr(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function zt(e,t,n,s){e.addEventListener(t,n,s)}function dc(e,t,n,s){e.removeEventListener(t,n,s)}const er=Symbol("_vei");function pc(e,t,n,s,o=null){const r=e[er]||(e[er]={}),i=r[t];if(s&&i)i.value=s;else{const[a,l]=hc(t);if(s){const u=r[t]=bc(s,o);zt(e,a,u,l)}else i&&(dc(e,a,i,l),r[t]=void 0)}}const tr=/(?:Once|Passive|Capture)$/;function hc(e){let t;if(tr.test(e)){t={};let s;for(;s=e.match(tr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Wt(e.slice(2)),t]}let Cs=0;const mc=Promise.resolve(),gc=()=>Cs||(mc.then(()=>Cs=0),Cs=Date.now());function bc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qe(vc(s,n.value),t,5,[s])};return n.value=e,n.attached=gc(),n}function vc(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const nr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yc=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?ic(e,s,i):t==="style"?uc(e,n,s):Zn(t)?zs(t)||pc(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xc(e,t,s,i))?(Xo(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zo(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ge(s))?Xo(e,Ge(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Zo(e,t,s,i))};function xc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&nr(t)&&G(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return nr(t)&&ge(n)?!1:t in e}const qi=new WeakMap,Ki=new WeakMap,Jn=Symbol("_moveCb"),sr=Symbol("_enterCb"),_c=e=>(delete e.props.mode,e),wc=_c({name:"TransitionGroup",props:ve({},Vi,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=po(),s=li();let o,r;return gi(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!kc(o[0].el,n.vnode.el,i)){o=[];return}o.forEach(Sc),o.forEach(Ec);const a=o.filter(Ac);Ws(n.vnode.el),a.forEach(l=>{const u=l.el,c=u.style;ot(u,i),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[Jn]=m=>{m&&m.target!==u||(!m||m.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[Jn]=null,wt(u,i))};u.addEventListener("transitionend",d)}),o=[]}),()=>{const i=ee(e),a=ji(i);let l=i.tag||pe;if(o=[],r)for(let u=0;u<r.length;u++){const c=r[u];c.el&&c.el instanceof Element&&(o.push(c),Ht(c,Cn(c,a,s,n)),qi.set(c,{left:c.el.offsetLeft,top:c.el.offsetTop}))}r=t.default?io(t.default()):[];for(let u=0;u<r.length;u++){const c=r[u];c.key!=null&&Ht(c,Cn(c,a,s,n))}return te(l,null,r)}}}),Cc=wc;function Sc(e){const t=e.el;t[Jn]&&t[Jn](),t[sr]&&t[sr]()}function Ec(e){Ki.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function Ac(e){const t=qi.get(e),n=Ki.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",e}}function kc(e,t,n){const s=e.cloneNode(),o=e[tn];o&&o.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=Gi(s);return r.removeChild(s),i}const or=e=>{const t=e.props["onUpdate:modelValue"]||!1;return V(t)?n=>Nn(t,n):t};function Pc(e){e.target.composing=!0}function rr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ss=Symbol("_assign");function ir(e,t,n){return t&&(e=e.trim()),n&&(e=Qs(e)),e}const Tc={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[Ss]=or(o);const r=s||o.props&&o.props.type==="number";zt(e,t?"change":"input",i=>{i.target.composing||e[Ss](ir(e.value,n,r))}),(n||r)&&zt(e,"change",()=>{e.value=ir(e.value,n,r)}),t||(zt(e,"compositionstart",Pc),zt(e,"compositionend",rr),zt(e,"change",rr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},i){if(e[Ss]=or(i),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?Qs(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===l)||(e.value=l))}},Rc=["ctrl","shift","alt","meta"],Ic={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Rc.some(n=>e[`${n}Key`]&&!t.includes(n))},Oc=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...r)=>{for(let i=0;i<t.length;i++){const a=Ic[t[i]];if(a&&a(o,t))return}return e(o,...r)}))},Dc=ve({patchProp:yc},nc);let ar;function Lc(){return ar||(ar=Ml(Dc))}const Mc=((...e)=>{const t=Lc().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Nc(s);if(!o)return;const r=t._component;!G(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,$c(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t});function $c(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Nc(e){return ge(e)?document.querySelector(e):e}const Yt=typeof document<"u";function zi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&zi(e.default)}const oe=Object.assign;function Es(e,t){const n={};for(const s in t){const o=t[s];n[s]=Ze(o)?o.map(e):e(o)}return n}const yn=()=>{},Ze=Array.isArray;function lr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Yi=/#/g,Bc=/&/g,Hc=/\//g,Wc=/=/g,Uc=/\?/g,Ji=/\+/g,Vc=/%5B/g,jc=/%5D/g,Qi=/%5E/g,Gc=/%60/g,Zi=/%7B/g,qc=/%7C/g,Xi=/%7D/g,Kc=/%20/g;function go(e){return e==null?"":encodeURI(""+e).replace(qc,"|").replace(Vc,"[").replace(jc,"]")}function zc(e){return go(e).replace(Zi,"{").replace(Xi,"}").replace(Qi,"^")}function Us(e){return go(e).replace(Ji,"%2B").replace(Kc,"+").replace(Yi,"%23").replace(Bc,"%26").replace(Gc,"`").replace(Zi,"{").replace(Xi,"}").replace(Qi,"^")}function Yc(e){return Us(e).replace(Wc,"%3D")}function Jc(e){return go(e).replace(Yi,"%23").replace(Uc,"%3F")}function Qc(e){return Jc(e).replace(Hc,"%2F")}function kn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Zc=/\/$/,Xc=e=>e.replace(Zc,"");function As(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(s=t.slice(0,l),r=t.slice(l,a>0?a:t.length),o=e(r.slice(1))),a>=0&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=su(s??t,n),{fullPath:s+r+i,path:s,query:o,hash:kn(i)}}function eu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function cr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function tu(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&nn(t.matched[s],n.matched[o])&&ea(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function nn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ea(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!nu(e[n],t[n]))return!1;return!0}function nu(e,t){return Ze(e)?ur(e,t):Ze(t)?ur(t,e):e?.valueOf()===t?.valueOf()}function ur(e,t){return Ze(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function su(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,a;for(i=0;i<s.length;i++)if(a=s[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Vs=(function(e){return e.pop="pop",e.push="push",e})({}),ks=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function ou(e){if(!e)if(Yt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Xc(e)}const ru=/^[^#]+#/;function iu(e,t){return e.replace(ru,"#")+t}function au(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const fs=()=>({left:window.scrollX,top:window.scrollY});function lu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=au(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function fr(e,t){return(history.state?history.state.position-t:-1)+e}const js=new Map;function cu(e,t){js.set(e,t)}function uu(e){const t=js.get(e);return js.delete(e),t}function fu(e){return typeof e=="string"||e&&typeof e=="object"}function ta(e){return typeof e=="string"||typeof e=="symbol"}let me=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const na=Symbol("");me.MATCHER_NOT_FOUND+"",me.NAVIGATION_GUARD_REDIRECT+"",me.NAVIGATION_ABORTED+"",me.NAVIGATION_CANCELLED+"",me.NAVIGATION_DUPLICATED+"";function sn(e,t){return oe(new Error,{type:e,[na]:!0},t)}function ut(e,t){return e instanceof Error&&na in e&&(t==null||!!(e.type&t))}const du=["params","query","hash"];function pu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of du)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function hu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(Ji," "),r=o.indexOf("="),i=kn(r<0?o:o.slice(0,r)),a=r<0?null:kn(o.slice(r+1));if(i in t){let l=t[i];Ze(l)||(l=t[i]=[l]),l.push(a)}else t[i]=a}return t}function dr(e){let t="";for(let n in e){const s=e[n];if(n=Yc(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ze(s)?s.map(o=>o&&Us(o)):[s&&Us(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function mu(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ze(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const gu=Symbol(""),pr=Symbol(""),ds=Symbol(""),bo=Symbol(""),Gs=Symbol("");function ln(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function At(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const u=m=>{m===!1?l(sn(me.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?l(m):fu(m)?l(sn(me.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(i&&s.enterCallbacks[o]===i&&typeof m=="function"&&i.push(m),a())},c=r(()=>e.call(s&&s.instances[o],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(m=>l(m))})}function Ps(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(zi(l)){const u=(l.__vccOpts||l)[t];u&&r.push(At(u,n,s,i,a,o))}else{let u=l();r.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=Fc(c)?c.default:c;i.mods[a]=c,i.components[a]=d;const m=(d.__vccOpts||d)[t];return m&&At(m,n,s,i,a,o)()}))}}return r}function bu(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(u=>nn(u,a))?s.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(u=>nn(u,l))||o.push(l))}return[n,s,o]}let vu=()=>location.protocol+"//"+location.host;function sa(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(i);return a[0]!=="/"&&(a="/"+a),cr(a,"")}return cr(n,e)+s+o}function yu(e,t,n,s){let o=[],r=[],i=null;const a=({state:m})=>{const p=sa(e,location),b=n.value,S=t.value;let F=0;if(m){if(n.value=p,t.value=m,i&&i===b){i=null;return}F=S?m.position-S.position:0}else s(p);o.forEach($=>{$(n.value,b,{delta:F,type:Vs.pop,direction:F?F>0?ks.forward:ks.back:ks.unknown})})};function l(){i=n.value}function u(m){o.push(m);const p=()=>{const b=o.indexOf(m);b>-1&&o.splice(b,1)};return r.push(p),p}function c(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(oe({},m.state,{scroll:fs()}),"")}}function d(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function hr(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?fs():null}}function xu(e){const{history:t,location:n}=window,s={value:sa(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,u,c){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:vu()+e+l;try{t[c?"replaceState":"pushState"](u,"",m),o.value=u}catch(p){console.error(p),n[c?"replace":"assign"](m)}}function i(l,u){r(l,oe({},t.state,hr(o.value.back,l,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=l}function a(l,u){const c=oe({},o.value,t.state,{forward:l,scroll:fs()});r(c.current,c,!0),r(l,oe({},hr(s.value,l,null),{position:c.position+1},u),!1),s.value=l}return{location:s,state:o,push:a,replace:i}}function _u(e){e=ou(e);const t=xu(e),n=yu(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=oe({location:"",base:e,go:s,createHref:iu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let Nt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ye=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ye||{});const wu={type:Nt.Static,value:""},Cu=/[a-zA-Z0-9_]/;function Su(e){if(!e)return[[]];if(e==="/")return[[wu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=ye.Static,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,l,u="",c="";function d(){u&&(n===ye.Static?r.push({type:Nt.Static,value:u}):n===ye.Param||n===ye.ParamRegExp||n===ye.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Nt.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==ye.ParamRegExp){s=n,n=ye.EscapeNext;continue}switch(n){case ye.Static:l==="/"?(u&&d(),i()):l===":"?(d(),n=ye.Param):m();break;case ye.EscapeNext:m(),n=s;break;case ye.Param:l==="("?n=ye.ParamRegExp:Cu.test(l)?m():(d(),n=ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case ye.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=ye.ParamRegExpEnd:c+=l;break;case ye.ParamRegExpEnd:d(),n=ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===ye.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),o}const mr="[^/]+?",Eu={sensitive:!1,strict:!1,start:!0,end:!0};var ke=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(ke||{});const Au=/[.+*?^${}()[\]/\\]/g;function ku(e,t){const n=oe({},Eu,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const c=u.length?[]:[ke.Root];n.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const m=u[d];let p=ke.Segment+(n.sensitive?ke.BonusCaseSensitive:0);if(m.type===Nt.Static)d||(o+="/"),o+=m.value.replace(Au,"\\$&"),p+=ke.Static;else if(m.type===Nt.Param){const{value:b,repeatable:S,optional:F,regexp:$}=m;r.push({name:b,repeatable:S,optional:F});const E=$||mr;if(E!==mr){p+=ke.BonusCustomRegExp;try{`${E}`}catch(T){throw new Error(`Invalid custom RegExp for param "${b}" (${E}): `+T.message)}}let k=S?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(k=F&&u.length<2?`(?:/${k})`:"/"+k),F&&(k+="?"),o+=k,p+=ke.Dynamic,F&&(p+=ke.BonusOptional),S&&(p+=ke.BonusRepeatable),E===".*"&&(p+=ke.BonusWildcard)}c.push(p)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=ke.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const c=u.match(i),d={};if(!c)return null;for(let m=1;m<c.length;m++){const p=c[m]||"",b=r[m-1];d[b.name]=p&&b.repeatable?p.split("/"):p}return d}function l(u){let c="",d=!1;for(const m of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const p of m)if(p.type===Nt.Static)c+=p.value;else if(p.type===Nt.Param){const{value:b,repeatable:S,optional:F}=p,$=b in u?u[b]:"";if(Ze($)&&!S)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const E=Ze($)?$.join("/"):$;if(!E)if(F)m.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${b}"`);c+=E}}return c||"/"}return{re:i,score:s,keys:r,parse:a,stringify:l}}function Pu(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===ke.Static+ke.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===ke.Static+ke.Segment?1:-1:0}function oa(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=Pu(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(gr(s))return 1;if(gr(o))return-1}return o.length-s.length}function gr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Tu={strict:!1,end:!0,sensitive:!1};function Ru(e,t,n){const s=ku(Su(e.path),n),o=oe(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Iu(e,t){const n=[],s=new Map;t=lr(Tu,t);function o(d){return s.get(d)}function r(d,m,p){const b=!p,S=vr(d);S.aliasOf=p&&p.record;const F=lr(t,d),$=[S];if("alias"in d){const T=typeof d.alias=="string"?[d.alias]:d.alias;for(const q of T)$.push(vr(oe({},S,{components:p?p.record.components:S.components,path:q,aliasOf:p?p.record:S})))}let E,k;for(const T of $){const{path:q}=T;if(m&&q[0]!=="/"){const z=m.record.path,Y=z[z.length-1]==="/"?"":"/";T.path=m.record.path+(q&&Y+q)}if(E=Ru(T,m,F),p?p.alias.push(E):(k=k||E,k!==E&&k.alias.push(E),b&&d.name&&!yr(E)&&i(d.name)),ra(E)&&l(E),S.children){const z=S.children;for(let Y=0;Y<z.length;Y++)r(z[Y],E,p&&p.children[Y])}p=p||E}return k?()=>{i(k)}:yn}function i(d){if(ta(d)){const m=s.get(d);m&&(s.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return n}function l(d){const m=Lu(d,n);n.splice(m,0,d),d.record.name&&!yr(d)&&s.set(d.record.name,d)}function u(d,m){let p,b={},S,F;if("name"in d&&d.name){if(p=s.get(d.name),!p)throw sn(me.MATCHER_NOT_FOUND,{location:d});F=p.record.name,b=oe(br(m.params,p.keys.filter(k=>!k.optional).concat(p.parent?p.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),d.params&&br(d.params,p.keys.map(k=>k.name))),S=p.stringify(b)}else if(d.path!=null)S=d.path,p=n.find(k=>k.re.test(S)),p&&(b=p.parse(S),F=p.record.name);else{if(p=m.name?s.get(m.name):n.find(k=>k.re.test(m.path)),!p)throw sn(me.MATCHER_NOT_FOUND,{location:d,currentLocation:m});F=p.record.name,b=oe({},m.params,d.params),S=p.stringify(b)}const $=[];let E=p;for(;E;)$.unshift(E.record),E=E.parent;return{name:F,path:S,params:b,matched:$,meta:Du($)}}e.forEach(d=>r(d));function c(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:i,clearRoutes:c,getRoutes:a,getRecordMatcher:o}}function br(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function vr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ou(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ou(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function yr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Du(e){return e.reduce((t,n)=>oe(t,n.meta),{})}function Lu(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;oa(e,t[r])<0?s=r:n=r+1}const o=Mu(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function Mu(e){let t=e;for(;t=t.parent;)if(ra(t)&&oa(e,t)===0)return t}function ra({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function xr(e){const t=Ye(ds),n=Ye(bo),s=ue(()=>{const l=Fe(e.to);return t.resolve(l)}),o=ue(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const m=d.findIndex(nn.bind(null,c));if(m>-1)return m;const p=_r(l[u-2]);return u>1&&_r(c)===p&&d[d.length-1].path!==p?d.findIndex(nn.bind(null,l[u-2])):m}),r=ue(()=>o.value>-1&&Hu(n.params,s.value.params)),i=ue(()=>o.value>-1&&o.value===n.matched.length-1&&ea(n.params,s.value.params));function a(l={}){if(Bu(l)){const u=t[Fe(e.replace)?"replace":"push"](Fe(e.to)).catch(yn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:ue(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}function $u(e){return e.length===1?e[0]:e}const Nu=pi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:xr,setup(e,{slots:t}){const n=Pn(xr(e)),{options:s}=Ye(ds),o=ue(()=>({[wr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&$u(t.default(n));return e.custom?r:ho("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Fu=Nu;function Bu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Hu(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Ze(o)||o.length!==s.length||s.some((r,i)=>r.valueOf()!==o[i].valueOf()))return!1}return!0}function _r(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wr=(e,t,n)=>e??t??n,Wu=pi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ye(Gs),o=ue(()=>e.route||s.value),r=Ye(pr,0),i=ue(()=>{let u=Fe(r);const{matched:c}=o.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),a=ue(()=>o.value.matched[i.value]);Fn(pr,ue(()=>i.value+1)),Fn(gu,a),Fn(Gs,o);const l=Ce();return hn(()=>[l.value,a.value,e.name],([u,c,d],[m,p,b])=>{c&&(c.instances[d]=u,p&&p!==c&&u&&u===m&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!nn(c,p)||!m)&&(c.enterCallbacks[d]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=o.value,c=e.name,d=a.value,m=d&&d.components[c];if(!m)return Cr(n.default,{Component:m,route:u});const p=d.props[c],b=p?p===!0?u.params:typeof p=="function"?p(u):p:null,F=ho(m,oe({},b,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Cr(n.default,{Component:F,route:u})||F}}});function Cr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Uu=Wu;function Vu(e){const t=Iu(e.routes,e),n=e.parseQuery||hu,s=e.stringifyQuery||dr,o=e.history,r=ln(),i=ln(),a=ln(),l=Wa(_t);let u=_t;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Es.bind(null,x=>""+x),d=Es.bind(null,Qc),m=Es.bind(null,kn);function p(x,N){let I,B;return ta(x)?(I=t.getRecordMatcher(x),B=N):B=x,t.addRoute(B,I)}function b(x){const N=t.getRecordMatcher(x);N&&t.removeRoute(N)}function S(){return t.getRoutes().map(x=>x.record)}function F(x){return!!t.getRecordMatcher(x)}function $(x,N){if(N=oe({},N||l.value),typeof x=="string"){const g=As(n,x,N.path),v=t.resolve({path:g.path},N),_=o.createHref(g.fullPath);return oe(g,v,{params:m(v.params),hash:kn(g.hash),redirectedFrom:void 0,href:_})}let I;if(x.path!=null)I=oe({},x,{path:As(n,x.path,N.path).path});else{const g=oe({},x.params);for(const v in g)g[v]==null&&delete g[v];I=oe({},x,{params:d(g)}),N.params=d(N.params)}const B=t.resolve(I,N),Q=x.hash||"";B.params=c(m(B.params));const f=eu(s,oe({},x,{hash:zc(Q),path:B.path})),h=o.createHref(f);return oe({fullPath:f,hash:Q,query:s===dr?mu(x.query):x.query||{}},B,{redirectedFrom:void 0,href:h})}function E(x){return typeof x=="string"?As(n,x,l.value.path):oe({},x)}function k(x,N){if(u!==x)return sn(me.NAVIGATION_CANCELLED,{from:N,to:x})}function T(x){return Y(x)}function q(x){return T(oe(E(x),{replace:!0}))}function z(x,N){const I=x.matched[x.matched.length-1];if(I&&I.redirect){const{redirect:B}=I;let Q=typeof B=="function"?B(x,N):B;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=E(Q):{path:Q},Q.params={}),oe({query:x.query,hash:x.hash,params:Q.path!=null?{}:x.params},Q)}}function Y(x,N){const I=u=$(x),B=l.value,Q=x.state,f=x.force,h=x.replace===!0,g=z(I,B);if(g)return Y(oe(E(g),{state:typeof g=="object"?oe({},Q,g.state):Q,force:f,replace:h}),N||I);const v=I;v.redirectedFrom=N;let _;return!f&&tu(s,B,I)&&(_=sn(me.NAVIGATION_DUPLICATED,{to:v,from:B}),Xe(B,B,!0,!1)),(_?Promise.resolve(_):K(v,B)).catch(y=>ut(y)?ut(y,me.NAVIGATION_GUARD_REDIRECT)?y:yt(y):se(y,v,B)).then(y=>{if(y){if(ut(y,me.NAVIGATION_GUARD_REDIRECT))return Y(oe({replace:h},E(y.to),{state:typeof y.to=="object"?oe({},Q,y.to.state):Q,force:f}),N||v)}else y=L(v,B,!0,h,Q);return ae(v,B,y),y})}function J(x,N){const I=k(x,N);return I?Promise.reject(I):Promise.resolve()}function U(x){const N=Gt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(x):x()}function K(x,N){let I;const[B,Q,f]=bu(x,N);I=Ps(B.reverse(),"beforeRouteLeave",x,N);for(const g of B)g.leaveGuards.forEach(v=>{I.push(At(v,x,N))});const h=J.bind(null,x,N);return I.push(h),We(I).then(()=>{I=[];for(const g of r.list())I.push(At(g,x,N));return I.push(h),We(I)}).then(()=>{I=Ps(Q,"beforeRouteUpdate",x,N);for(const g of Q)g.updateGuards.forEach(v=>{I.push(At(v,x,N))});return I.push(h),We(I)}).then(()=>{I=[];for(const g of f)if(g.beforeEnter)if(Ze(g.beforeEnter))for(const v of g.beforeEnter)I.push(At(v,x,N));else I.push(At(g.beforeEnter,x,N));return I.push(h),We(I)}).then(()=>(x.matched.forEach(g=>g.enterCallbacks={}),I=Ps(f,"beforeRouteEnter",x,N,U),I.push(h),We(I))).then(()=>{I=[];for(const g of i.list())I.push(At(g,x,N));return I.push(h),We(I)}).catch(g=>ut(g,me.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function ae(x,N,I){a.list().forEach(B=>U(()=>B(x,N,I)))}function L(x,N,I,B,Q){const f=k(x,N);if(f)return f;const h=N===_t,g=Yt?history.state:{};I&&(B||h?o.replace(x.fullPath,oe({scroll:h&&g&&g.scroll},Q)):o.push(x.fullPath,Q)),l.value=x,Xe(x,N,I,h),yt()}let ne;function xe(){ne||(ne=o.listen((x,N,I)=>{if(!It.listening)return;const B=$(x),Q=z(B,It.currentRoute.value);if(Q){Y(oe(Q,{replace:!0,force:!0}),B).catch(yn);return}u=B;const f=l.value;Yt&&cu(fr(f.fullPath,I.delta),fs()),K(B,f).catch(h=>ut(h,me.NAVIGATION_ABORTED|me.NAVIGATION_CANCELLED)?h:ut(h,me.NAVIGATION_GUARD_REDIRECT)?(Y(oe(E(h.to),{force:!0}),B).then(g=>{ut(g,me.NAVIGATION_ABORTED|me.NAVIGATION_DUPLICATED)&&!I.delta&&I.type===Vs.pop&&o.go(-1,!1)}).catch(yn),Promise.reject()):(I.delta&&o.go(-I.delta,!1),se(h,B,f))).then(h=>{h=h||L(B,f,!1),h&&(I.delta&&!ut(h,me.NAVIGATION_CANCELLED)?o.go(-I.delta,!1):I.type===Vs.pop&&ut(h,me.NAVIGATION_ABORTED|me.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),ae(B,f,h)}).catch(yn)}))}let Me=ln(),be=ln(),le;function se(x,N,I){yt(x);const B=be.list();return B.length?B.forEach(Q=>Q(x,N,I)):console.error(x),Promise.reject(x)}function lt(){return le&&l.value!==_t?Promise.resolve():new Promise((x,N)=>{Me.add([x,N])})}function yt(x){return le||(le=!x,xe(),Me.list().forEach(([N,I])=>x?I(x):N()),Me.reset()),x}function Xe(x,N,I,B){const{scrollBehavior:Q}=e;if(!Yt||!Q)return Promise.resolve();const f=!I&&uu(fr(x.fullPath,0))||(B||!I)&&history.state&&history.state.scroll||null;return ei().then(()=>Q(x,N,f)).then(h=>h&&lu(h)).catch(h=>se(h,x,N))}const Ie=x=>o.go(x);let jt;const Gt=new Set,It={currentRoute:l,listening:!0,addRoute:p,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:S,resolve:$,options:e,push:T,replace:q,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:be.add,isReady:lt,install(x){x.component("RouterLink",Fu),x.component("RouterView",Uu),x.config.globalProperties.$router=It,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Fe(l)}),Yt&&!jt&&l.value===_t&&(jt=!0,T(o.location).catch(B=>{}));const N={};for(const B in _t)Object.defineProperty(N,B,{get:()=>l.value[B],enumerable:!0});x.provide(ds,It),x.provide(bo,Jr(N)),x.provide(Gs,l);const I=x.unmount;Gt.add(x),x.unmount=function(){Gt.delete(x),Gt.size<1&&(u=_t,ne&&ne(),ne=null,l.value=_t,jt=!1,le=!1),I()}}};function We(x){return x.reduce((N,I)=>N.then(()=>U(I)),Promise.resolve())}return It}function vo(){return Ye(ds)}function ia(e){return Ye(bo)}const ju={__name:"App",setup(e){const t=vo(),n=Ce(!0);return t.isReady().then(()=>{setTimeout(()=>{n.value=!1},100)}),(s,o)=>{const r=ao("router-view");return O(),En(r,null,{default:Pt(({Component:i,route:a})=>[te(mo,{name:n.value?"":"page",mode:"out-in"},{default:Pt(()=>[(O(),En(pl(i),{key:a.path}))]),_:2},1032,["name"])]),_:1})}}},_e=Pn({discordUser:null,spotify:null,discordStatus:"offline",discordStatusColor:"text-catppuccin-subtle",editorActivity:null,isConnected:!1,isLoading:!0});class Gu{constructor(){this.ws=null,this.heartbeat=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.maxAttempts=5,this.userId="766897363050037248",this.isConnecting=!1}connect(){if(!(this.isConnecting||this.ws&&this.ws.readyState===WebSocket.OPEN)){this.isConnecting=!0,_e.isLoading=!0;try{this.ws=new WebSocket("wss://api.lanyard.rest/socket"),this.ws.onopen=()=>{this.isConnecting=!1,this.reconnectAttempts=0,_e.isConnected=!0,this.ws.send(JSON.stringify({op:2,d:{subscribe_to_id:this.userId}}))},this.ws.onmessage=t=>{try{this.handleMessage(JSON.parse(t.data))}catch{}},this.ws.onclose=t=>{this.isConnecting=!1,_e.isConnected=!1,this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),t.code!==1e3&&this.reconnectAttempts<this.maxAttempts&&this.scheduleReconnect()},this.ws.onerror=()=>{this.isConnecting=!1,_e.isConnected=!1}}catch{this.isConnecting=!1,_e.isLoading=!1,this.scheduleReconnect()}}}handleMessage(t){t.op===1?this.startHeartbeat(t.d.heartbeat_interval):t.op===0&&(t.t==="INIT_STATE"||t.t==="PRESENCE_UPDATE")&&(this.updatePresence(t.d),_e.isLoading=!1)}updatePresence(t){t.discord_user&&(_e.discordUser={username:t.discord_user.username,discriminator:t.discord_user.discriminator,avatar:t.discord_user.avatar,id:t.discord_user.id}),_e.spotify=t.spotify?{song:t.spotify.song,artist:t.spotify.artist,track_id:t.spotify.track_id}:null,t.discord_status&&(_e.discordStatus=t.discord_status,_e.discordStatusColor=t.discord_status==="online"?"text-catppuccin-gold":"text-catppuccin-subtle"),_e.editorActivity=t.activities?.find(n=>n.name==="Visual Studio Code"||n.name==="Code"||n.name==="Zed")}startHeartbeat(t){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({op:3}))},t)}scheduleReconnect(){this.reconnectTimeout&&clearTimeout(this.reconnectTimeout),this.reconnectAttempts++;const t=Math.min(1e3*Math.pow(2,this.reconnectAttempts-1),3e4);this.reconnectTimeout=setTimeout(()=>this.connect(),t)}disconnect(){this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),this.ws&&(this.ws.close(1e3,"Manual disconnect"),this.ws=null),_e.isConnected=!1}}const qu=new Gu;qu.connect();const Sr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",white:"#cdd6f4"},Ku=[{id:"posts",label:"posts",href:"/posts",external:!1,accentColor:"mauve"},{id:"github",label:"github",href:"https://github.com/Hecker-01",external:!0,accentColor:"white"}];function zu(){return Ku.map(e=>({...e,accentColor:Sr[e.accentColor]||Sr.mauve}))}const In=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Yu={class:"mb-6"},Ju={class:"mb-6"},Qu={class:"flex items-center flex-wrap gap-4 text-sm mt-4"},Zu=["href"],Xu={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},ef={class:"space-y-1 text-sm"},tf={key:0,class:"flex items-center gap-2"},nf={class:"text-catppuccin-text"},sf={key:1,class:"flex items-center gap-2"},of={class:"text-catppuccin-text truncate"},rf={key:2,class:"flex items-center gap-2"},af={class:"text-catppuccin-blue"},lf={class:"text-catppuccin-text truncate"},cf={key:0},uf={key:1,class:"text-catppuccin-subtle"},ff={key:2},df={__name:"HeroSection",setup(e){const t=zu(),n=ue(()=>_e.discordStatusColor),s=ue(()=>_e.spotify),o=ue(()=>_e.discordStatus),r=ue(()=>_e.discordUser),i=ue(()=>_e.editorActivity),a=ue(()=>_e.isLoading),l=ue(()=>{if(!i.value)return null;if(i.value.details&&i.value.details.toLowerCase().includes("idling"))return"idling";const u=i.value.name,c=u==="Zed",p=u==="IntelliJ IDEA Ultimate"||u==="IntelliJ IDEA"||u==="Android Studio";let b="",S="";return p?(b=i.value.details||"",S=i.value.state||""):c?(b=i.value.state||"",S=i.value.details||""):(b=i.value.details||"",S=i.value.state||""),b=b.replace(/editing /i,"").replace(/working on /i,"").trim(),S=S.replace(/in /i,"").replace(/workspace: /i,"").trim(),{name:u,workspace:S,filename:b}});return(u,c)=>{const d=ao("router-link");return O(),M("div",Yu,[w("div",Ju,[c[2]||(c[2]=uo('<div class="text-catppuccin-subtle text-sm mb-2" data-v-41f1cfe9>~$ whoami</div><h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2" data-v-41f1cfe9><span class="text-catppuccin-mauve" data-v-41f1cfe9>jesse</span><span class="text-catppuccin-subtle" data-v-41f1cfe9>@</span><span class="text-catppuccin-blue" data-v-41f1cfe9>heckr.dev</span></h1><div class="text-sm text-catppuccin-gray 6" data-v-41f1cfe9><span class="text-catppuccin-subtle" data-v-41f1cfe9>aka </span><span class="text-catppuccin-green" data-v-41f1cfe9>Hecker_01</span></div>',3)),w("div",Qu,[(O(!0),M(pe,null,qe(Fe(t),m=>(O(),M(pe,{key:m.id},[m.external?(O(),M("a",{key:1,href:m.href,target:"_blank",class:"text-catppuccin-subtle transition-colors flex items-center gap-1 group",style:Ke({"--accent":m.accentColor})},[c[1]||(c[1]=Ve(" [",-1)),w("span",{class:"transition-colors",style:Ke({color:m.accentColor})},"cd ",4),Ve("~/"+X(m.label)+"] ",1)],12,Zu)):(O(),En(d,{key:0,to:m.href,class:"text-catppuccin-subtle transition-colors flex items-center gap-1 group",style:Ke({"--accent":m.accentColor})},{default:Pt(()=>[c[0]||(c[0]=Ve(" [",-1)),w("span",{class:"transition-colors",style:Ke({color:m.accentColor})},"cd ",4),Ve("~/"+X(m.label)+"] ",1)]),_:2},1032,["to","style"]))],64))),128))])]),c[9]||(c[9]=w("div",{class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},[w("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cat about.txt"),w("p",{class:"text-catppuccin-text leading-relaxed mb-4"},[Ve(" Hi! I'm Jesse, I code things for Minecraft, Discord, random CLI tools, websites, apps and more. "),w("br"),Ve(" My passion is backend development, but I also enjoy working on frontend and mobile projects. "),w("br"),Ve(" I have experience in a lot of different programming languages and frameworks, and I love learning new ones! ")])],-1)),w("div",Xu,[c[8]||(c[8]=w("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ ps aux | grep heckr.dev ",-1)),w("div",ef,[!a.value&&r.value?(O(),M("div",tf,[c[3]||(c[3]=w("span",{class:"text-catppuccin-blue"},"discord",-1)),c[4]||(c[4]=w("span",{class:"text-catppuccin-subtle"},":",-1)),w("span",nf,X(r.value.username),1),w("span",{class:Ut(n.value)},"["+X(o.value)+"]",3)])):Te("",!0),!a.value&&s.value?(O(),M("div",sf,[c[5]||(c[5]=w("span",{class:"text-catppuccin-green"},"spotify",-1)),c[6]||(c[6]=w("span",{class:"text-catppuccin-subtle"},":",-1)),w("span",of,X(s.value.song)+" - "+X(s.value.artist),1)])):Te("",!0),!a.value&&i.value&&l.value&&(l.value.workspace||l.value.filename)?(O(),M("div",rf,[w("span",af,X(l.value.name==="Zed"?"zed":l.value.name==="IntelliJ IDEA Ultimate"||l.value.name==="IntelliJ IDEA"?"intellij":l.value.name==="Android Studio"?"android-studio":"vscode"),1),c[7]||(c[7]=w("span",{class:"text-catppuccin-subtle"},":",-1)),w("span",lf,[l.value.workspace?(O(),M("span",cf,X(l.value.workspace.toLowerCase()),1)):Te("",!0),l.value.workspace&&l.value.filename?(O(),M("span",uf," / ")):Te("",!0),l.value.filename?(O(),M("span",ff,X(l.value.filename.toLowerCase()),1)):Te("",!0)])])):Te("",!0)])])])}}},pf=In(df,[["__scopeId","data-v-41f1cfe9"]]),hf={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},mf={key:0,class:"text-sm text-catppuccin-subtle"},gf={key:1,class:"text-sm text-catppuccin-text"},bf={key:0,class:"text-catppuccin-subtle"},vf={key:2,class:"text-sm text-catppuccin-subtle"},yf={__name:"LanguagesList",props:{languages:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){return(t,n)=>(O(),M("div",hf,[n[0]||(n[0]=w("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls ~/tools",-1)),e.loading?(O(),M("div",mf," loading languages... ")):e.languages.length?(O(),M("div",gf,[(O(!0),M(pe,null,qe(e.languages,(s,o)=>(O(),M("span",{key:s.language},[Ve(X(s.language)+"("+X(s.count)+")",1),o<e.languages.length-1?(O(),M("span",bf," | ")):Te("",!0)]))),128))])):(O(),M("div",vf,"no languages found"))]))}},xf={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},_f={class:"lg:flex-1 flex flex-col"},wf={key:0,class:"space-y-2"},Cf={key:1,class:"text-sm text-catppuccin-subtle"},Sf=["href"],Ef={class:"flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2"},Af={class:"flex-1 min-w-0"},kf={class:"flex items-center gap-2"},Pf=["title"],Tf={key:0,class:"text-catppuccin-yellow text-xs flex-shrink-0"},Rf=["title"],If={key:3,class:"text-sm text-catppuccin-subtle"},Of={__name:"ProjectsList",props:{repos:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){const t=e,n=ue(()=>t.repos.length?[...t.repos].sort((s,o)=>o.stargazers_count-s.stargazers_count).slice(0,6):[]);return(s,o)=>(O(),M("div",xf,[o[2]||(o[2]=w("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ ls ~/projects",-1)),w("div",_f,[e.loading?(O(),M("div",wf,[(O(),M(pe,null,qe(6,r=>w("div",{key:`repo-loading-${r}`,class:"rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3"},[...o[0]||(o[0]=[uo('<div class="flex items-start gap-3" data-v-cc63960f><span class="text-catppuccin-subtle" data-v-cc63960f>&gt;</span><div class="flex-1 min-w-0" data-v-cc63960f><div class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink" data-v-cc63960f></div><div class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink" data-v-cc63960f></div></div></div>',1)])])),64))])):e.repos.length?n.value.length?(O(),En(Cc,{key:2,name:"list",tag:"div",class:"space-y-2"},{default:Pt(()=>[(O(!0),M(pe,null,qe(n.value,r=>(O(),M("a",{key:r.id,href:r.html_url,target:"_blank",class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors"},[w("div",Ef,[o[1]||(o[1]=w("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors"},">",-1)),w("div",Af,[w("div",kf,[w("span",{class:"text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate",title:r.name},X(r.name),9,Pf),r.stargazers_count>0?(O(),M("span",Tf," ★"+X(r.stargazers_count),1)):Te("",!0)]),w("p",{class:"text-xs text-catppuccin-gray truncate",title:r.description},X(r.description||"no description"),9,Rf)])])],8,Sf))),128))]),_:1})):(O(),M("div",If," no repositories found ")):(O(),M("div",Cf," no projects found "))])]))}},Df=In(Of,[["__scopeId","data-v-cc63960f"]]),Er={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",maroon:"#eba0ac",flamingo:"#f2cdcd"},Lf=[{id:1,name:"Yume Ramen",description:"A full application with an app, dashboard, and API, built with Vue.js, Tailwind CSS, and Node.js. It features a sleek design and robust functionality.",link:"https://yume.bram-jesse.sd-lab.nl/",screenshot:"/screenshot-yume-front.png",accentColor:"red"},{id:2,name:"This Portfolio Website",description:"Built with Vue.js and Tailwind CSS, showcasing my projects and skills.",link:"https://github.com/hecker-01/website",screenshot:"/screenshot.png",accentColor:"lavender"},{id:3,name:"satisSuite",description:"A comprehensive plugin suite designed to streamline moderation, enhance player experience, and give you complete control over your server.",link:"https://satissuite.heckr.dev",screenshot:"/screenshot-satissuite.png",accentColor:"mauve"}];function Mf(){return Lf.map(e=>({...e,accentColor:Er[e.accentColor]||Er.mauve}))}const $f={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},Nf={key:0,class:"text-sm text-catppuccin-subtle"},Ff={class:"lg:flex-1 lg:relative"},Bf=["href"],Hf={key:0,class:"w-full flex-1 overflow-hidden bg-catppuccin-surface/30"},Wf=["src","alt"],Uf={class:"px-3 py-3 flex-shrink-0"},Vf={class:"flex items-start gap-3"},jf={class:"flex-1 min-w-0"},Gf={class:"text-xs text-catppuccin-gray leading-relaxed"},qf={key:0,class:"flex justify-center gap-1.5 mt-3 flex-shrink-0"},Kf=["onClick"],zf={__name:"ShowcaseCarousel",setup(e){const t=Ce([]),n=Ce(0),s=Ce(!1);let o=null;const r=ue(()=>t.value.length?t.value[n.value]:null);return Vt(()=>{t.value=Mf(),t.value.length>1&&(o=setInterval(()=>{s.value||(n.value=(n.value+1)%t.value.length)},1e4))}),as(()=>{o&&clearInterval(o)}),(i,a)=>(O(),M("div",$f,[a[2]||(a[2]=w("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ cat ~/showcase",-1)),t.value.length?(O(),M("div",{key:1,class:"relative lg:flex-1 flex flex-col",onMouseenter:a[0]||(a[0]=l=>s.value=!0),onMouseleave:a[1]||(a[1]=l=>s.value=!1)},[w("div",Ff,[te(mo,{name:"showcase",mode:"out-in"},{default:Pt(()=>[r.value?(O(),M("a",{key:r.value.id,href:r.value.link,target:"_blank",class:"group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col",style:Ke({borderColor:`${r.value.accentColor}40`})},[r.value.screenshot?(O(),M("div",Hf,[w("img",{src:r.value.screenshot,alt:r.value.name,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,Wf)])):Te("",!0),w("div",Uf,[w("div",Vf,[w("span",{class:"transition-colors",style:Ke({color:r.value.accentColor})},">",4),w("div",jf,[w("h3",{class:"text-sm font-medium text-catppuccin-text transition-colors mb-1",style:Ke({color:r.value.accentColor})},X(r.value.name),5),w("p",Gf,X(r.value.description),1)])])])],12,Bf)):Te("",!0)]),_:1})]),t.value.length>1?(O(),M("div",qf,[(O(!0),M(pe,null,qe(t.value,(l,u)=>(O(),M("button",{key:`dot-${l.id}`,onClick:c=>n.value=u,class:Ut(["w-2 h-2.5 rounded-full transition-all",u===n.value?"bg-catppuccin-mauve w-4":"bg-catppuccin-surface/60 hover:bg-catppuccin-surface"]),style:Ke(u===n.value?{backgroundColor:r.value.accentColor}:{})},null,14,Kf))),128))])):Te("",!0)],32)):(O(),M("div",Nf," no items to showcase "))]))}},Yf=In(zf,[["__scopeId","data-v-89780803"]]),yo="hecker-01",aa=async()=>{try{const e=[];let t=1;const n=100;for(;;){const r=await fetch(`https://api.github.com/users/${yo}/repos?per_page=${n}&page=${t}`);if(!r.ok)break;const i=await r.json();if(!i.length||(e.push(...i),i.length<n))break;t++}const s={};e.forEach(r=>{r.language&&(s[r.language]=(s[r.language]||0)+1)});const o=Object.entries(s).sort((r,i)=>i[1]-r[1]).map(([r,i])=>({language:r,count:i}));return{repos:e,languages:o,totalRepos:e.length}}catch(e){return console.error("Error fetching GitHub data:",e),{repos:[],languages:[],totalRepos:0}}},Jf=async()=>{const t=new Date;t.getFullYear();try{const n=await fetch(`https://github-contributions-api.jogruber.de/v4/${yo}?y=last`);if(!n.ok)throw new Error("Failed to fetch contribution data");const s=await n.json(),o=[];if(s.contributions&&s.contributions.forEach(r=>{o.push({date:r.date,count:r.count})}),o.length>0){const i=new Date(t);i.setDate(i.getDate()-371+1);const a=[];for(let l=0;l<371;l++){const u=new Date(i);u.setDate(u.getDate()+l);const c=u.toISOString().split("T")[0],d=o.find(m=>m.date===c);a.push({date:c,count:d?d.count:0})}return a}throw new Error("No contributions data available")}catch(n){console.error("Error fetching contribution data:",n);const s=new Map;for(let o=370;o>=0;o--){const r=new Date(t);r.setDate(r.getDate()-o);const i=r.toISOString().split("T")[0];s.set(i,0)}return Array.from(s.entries()).sort((o,r)=>o[0].localeCompare(r[0])).map(([o,r])=>({date:o,count:r}))}},Ts=e=>e===0?0:e<=2?1:e<=5?2:e<=8?3:4,Qf=e=>`https://github.com/${yo}?tab=overview&from=${e}&to=${e}`,Zf={class:"mt-6 border-l-2 border-catppuccin-surface pl-4"},Xf={class:"flex items-center justify-between mb-3"},ed={key:0,class:"flex items-center gap-1 text-[10px] text-catppuccin-subtle"},td={key:0},nd={key:1},sd={class:"overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-thin"},od={class:"inline-flex md:flex gap-[3px] md:gap-1",style:{"min-width":"max-content"}},rd=["href","title"],id=["title"],ad={class:"text-xs text-catppuccin-gray mt-2"},ld={__name:"ContributionGraph",setup(e){const t=Ce([]),n=Ce(!0),s=ue(()=>{const i=[];for(let a=0;a<t.value.length;a+=7)i.push(t.value.slice(a,a+7));return i}),o=ue(()=>t.value.reduce((i,a)=>i+a.count,0)),r=async()=>{try{n.value=!0,t.value=await Jf()}catch{}finally{n.value=!1}};return Vt(()=>{r()}),(i,a)=>(O(),M("div",Zf,[w("div",Xf,[a[1]||(a[1]=w("div",{class:"text-catppuccin-subtle text-sm"},' ~$ git log --oneline --since="1.year.ago" | wc -l ',-1)),n.value?Te("",!0):(O(),M("div",ed,[...a[0]||(a[0]=[uo('<span>less</span><div class="flex gap-[1px]"><div class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green"></div></div><span>more</span>',3)])]))]),n.value?(O(),M("div",td,[...a[2]||(a[2]=[w("div",{class:"h-[60px] bg-catppuccin-surface/30 rounded cursor-blink"},null,-1)])])):(O(),M("div",nd,[w("div",sd,[w("div",od,[(O(!0),M(pe,null,qe(s.value,(l,u)=>(O(),M("div",{key:u,class:"flex flex-col gap-[3px] md:gap-1 md:flex-1"},[(O(!0),M(pe,null,qe(l,(c,d)=>(O(),M(pe,{key:d},[c.count>0?(O(),M("a",{key:0,href:Fe(Qf)(c.date),target:"_blank",rel:"noopener noreferrer",class:Ut(["w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm transition-all hover:ring-1 hover:ring-catppuccin-green hover:scale-110 cursor-pointer",[Fe(Ts)(c.count)===1?"bg-catppuccin-green/30 hover:bg-catppuccin-green/40":Fe(Ts)(c.count)===2?"bg-catppuccin-green/50 hover:bg-catppuccin-green/60":Fe(Ts)(c.count)===3?"bg-catppuccin-green/70 hover:bg-catppuccin-green/80":"bg-catppuccin-green hover:bg-catppuccin-green"]]),title:`${c.date}: ${c.count} contributions - Click to view on GitHub`},null,10,rd)):(O(),M("div",{key:1,class:"w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm bg-catppuccin-surface/50",title:`${c.date}: ${c.count} contributions`},null,8,id))],64))),128))]))),128))])]),w("div",ad,X(o.value)+" contributions in the last year ",1)]))]))}},cd={class:"w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400"},Qn={__name:"Footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(O(),M("footer",cd,[w("p",null,"© 2020 - "+X(Fe(t))+" heckr.dev | All rights reserved.",1)]))}},ud={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},fd={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},dd={class:"grid lg:grid-cols-2 gap-6 lg:items-stretch"},pd={__name:"Home",setup(e){const t=Ce([]),n=Ce(!0),s=Ce([]),o=async()=>{try{n.value=!0;const{repos:r,languages:i}=await aa("hecker-01");t.value=r,s.value=i}catch{}finally{n.value=!1}};return Vt(()=>{o()}),(r,i)=>(O(),M("div",ud,[w("div",fd,[te(pf),te(yf,{languages:s.value,loading:n.value},null,8,["languages","loading"]),w("div",dd,[te(Df,{repos:t.value,loading:n.value},null,8,["repos","loading"]),te(Yf)]),te(ld),te(Qn)])]))}},hd=`---
title: Jellyfin Server with Docker Compose
slug: jellyfin-server
date: 25-02-2026
tags: [jellyfin, media server, docker, docker-compose, tutorial, guide]
description: Setting up a Jellyfin media server with Docker Compose, for an automated anime media management system.
unlisted: true
---

Requirements:
Ubuntu Server 24.04 Clean Install Docker CE + Compose V2

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

Log out and back in.

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

\`\`\`yaml
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

Get generated admin password:

\`\`\`bash
docker logs qbittorrent | grep password
\`\`\`

Open:

[http://$[server-ip]:8080](http://$[server-ip]:8080)

Username: admin\\
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

Host: qbittorrent\\
Port: 8080\\
Username: admin\\
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

Host: qbittorrent\\
Port: 8080\\
Username: admin\\
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

Connect to Jellyfin.\\
Connect to Sonarr.\\
Connect to Radarr.

Add Discord webhook under **Settings** → **Notifications** → **Discord**:\\
Paste your Discord webhook URL and configure notification types.

Root folder:

\`\`\`txt
/tv
\`\`\`

---

## Result

Request anime in Seerr.\\
Sonarr/Radarr searches via Prowlarr.\\
qBittorrent downloads.\\
Sonarr/Radarr imports and renames.\\
Jellyfin displays episodes and movies.
`,md=`---
title: Setting up a local database with PHPMyAdmin
slug: local-database
date: 30-01-2026
tags:
  [tutorial, guide, database, docker, mariadb, phpmyadmin, cli, user-interface]
description: Setting up a local mariaDB database with PHPMyAdmin in docker
unlisted: false
---

## Prerequisites

Before starting, make sure you have Docker Desktop installed on your machine. Download it from [Docker's official website](https://www.docker.com/products/docker-desktop/) and ensure it's running (you should see the Docker icon in your system tray).

## Installation Steps

### 1. Create a Docker Network

First, we'll create a network so our containers can communicate with each other. Open your terminal (PowerShell on Windows, Terminal on Mac/Linux) and run:

\`\`\`bash
docker network create db-network
\`\`\`

This creates a bridge network that allows the database and PHPMyAdmin containers to connect.
(If you have docker containers that need to connect to the database, you can add them to this network as well.)

### 2. Set up MariaDB

Now let's pull and run the MariaDB container:

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

Next, set up the PHPMyAdmin web interface:

\`\`\`bash
docker pull phpmyadmin
docker run --name phpmyadmin -e PMA_HOST=db -p 8080:80 --network db-network -d phpmyadmin
\`\`\`

**What these flags mean:**

- \`--name phpmyadmin\` - Names the container "phpmyadmin"
- \`-e PMA_HOST=db\` - Tells PHPMyAdmin to connect to our "db" container
- \`-p 8080:80\` - Maps port 8080 on your machine to port 80 in the container (PHPMyAdmin's web interface)
- \`--network db-network\` - Connects to the same network as the database

## Verification

Open Docker Desktop and you should see both containers running in the Containers tab. They should have green status indicators.

Alternatively, you can verify in the terminal with:

\`\`\`bash
docker ps
\`\`\`

You should see both \`db\` and \`phpmyadmin\` containers listed.

## Accessing PHPMyAdmin

Navigate to \`http://localhost:8080\` in your web browser.

**Login credentials:**

- Username: \`root\`
- Password: \`mypass\` (or whatever password you set earlier)

## Daily Usage

### Using Docker Desktop (Recommended)

Open Docker Desktop, go to the Containers tab, and use the play/pause buttons to start or stop your containers.

### Using Command Line

You can also manage containers from the terminal:

**Stop containers:**

\`\`\`bash
docker stop db phpmyadmin
\`\`\`

**Start containers:**

\`\`\`bash
docker start db phpmyadmin
\`\`\`

## Cleanup

If you want to remove the containers completely:

### Using Docker Desktop

Go to Containers tab, click the trash icon next to each container.

### Using Command Line

\`\`\`bash
docker rm -f db phpmyadmin
docker network rm db-network
\`\`\`

The \`-f\` flag forces removal even if containers are running.

## Troubleshooting

**Port already in use:** If you get an error about ports 3306 or 8080 being in use, either:

- Stop the conflicting application
- Use different ports: \`-p 3307:3306\` or \`-p 8081:80\`

**Can't connect to database:** Make sure both containers are on the same network and the database container is fully started (wait 10-15 seconds after starting).

**Containers not showing in Docker Desktop:** Refresh the application or restart Docker Desktop.

## Conclusion

That's it! You now have a local MariaDB database with PHPMyAdmin set up using Docker Desktop.
`,gd=`---
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
- **Windows:** Backslash \`\\\` → \`C:\\Users\\User\\Documents\`

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

\`\`\`bash
# Delete a file
rm unwanted.txt

# Delete multiple files
rm file1.txt file2.txt

# Delete a folder (recursive)
rm -r foldername       # Linux/Mac
rm -Recurse foldername # Windows PowerShell

# Force delete without confirmation
rm -rf foldername      # Linux/Mac - BE CAREFUL!
rm -Recurse -Force foldername # Windows PowerShell
\`\`\`

**Warning:** Deleted files via command line don't go to the Recycle Bin/Trash!

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

### Linux/Mac

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

**Use Tab completion:** Press Tab to auto-complete file names and commands - saves time and prevents typos.

**Be careful with rm/delete:** Always double-check before deleting, especially with recursive operations.

**Use relative paths when possible:** It's shorter and more portable.

**Learn one thing at a time:** Don't try to memorize everything - learn commands as you need them.

**Use man pages:** Type \`man command\` (Linux/Mac) or \`Get-Help command\` (PowerShell) for documentation.

**Back up before experimenting:** If you're trying something new, make sure you have backups.

## Troubleshooting

**"Command not found":** The program isn't installed or isn't in your PATH. Try installing it or using the full path.

**"Permission denied":** You don't have rights to access that file/folder. Try using \`sudo\` (Linux/Mac) or running as Administrator (Windows).

**"No such file or directory":** Check your spelling and make sure you're in the right location with \`pwd\`.

**Wrong directory:** Use \`cd\` to navigate to the correct location. Use \`cd -\` (Linux/Mac) to go back to your previous location.

## Conclusion

The command line is a fundamental skill for any developer or power user. Start with the basics - navigation, file operations, and viewing files - then gradually add more commands to your toolkit as you need them.

Practice regularly, and soon these commands will become second nature. Don't be afraid to experiment (safely!) and use \`man\` pages or \`--help\` to learn more about any command.

Happy commanding!
`,bd=`---
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

\`\`\`gitignore
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

\`\`\`bash
git reset --hard HEAD
\`\`\`

**Warning:** This permanently deletes your changes!

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

**Don't commit sensitive data:** Use \`.gitignore\` for secrets, API keys, and credentials.

## Troubleshooting

**Merge conflicts:** If Git can't automatically merge changes, it will mark the conflicts in your files. Open them, resolve the conflicts manually, then stage and commit the resolved files.

**Wrong branch:** If you started working on the wrong branch, use \`git stash\`, switch branches with \`git checkout\`, then \`git stash pop\`.

**Forgot to pull:** If your push is rejected, run \`git pull\` first to get remote changes, resolve any conflicts, then push again.

**Committed to wrong branch:** If you haven't pushed yet, you can undo with \`git reset --soft HEAD~1\`, switch branches, and recommit.

## Conclusion

That's it! You now know the essential Git commands for daily development. The key is to practice these workflows regularly - they'll become second nature quickly. Remember to commit often, use descriptive messages, and don't be afraid to experiment with branches.

I'll make a follow-up guide on using Git visually (no commandline) in VSCode soon.
`,vd=Object.assign({"/posts/jellyfin-server.md":hd,"/posts/local-database.md":md,"/posts/using-commandline.md":gd,"/posts/using-git.md":bd}),yd=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const l=(u,c)=>{c=c.trim(),c.startsWith("[")&&c.endsWith("]")?o[u]=c.slice(1,-1).split(",").map(d=>d.trim()):o[u]=c};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&l(i,a);const[d,...m]=u.split(":");if(!d||d.trim()==="")return;i=d.trim(),a=m.join(":").trim()}}),i&&a&&l(i,a),{frontmatter:o,content:s}},xd=()=>{const e=[];let t=1;return Object.entries(vd).forEach(([n,s])=>{const{frontmatter:o,content:r}=yd(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,date:o.date||new Date().toISOString().split("T")[0],tags:o.tags||[],description:o.description||"",unlisted:o.unlisted===!0||o.unlisted==="true",content:r.trim(),readingTime:Cd(r)})}),e};let $n=null;const xo=(e=!1)=>($n||($n=xd()),(e?[...$n]:$n.filter(n=>!n.unlisted)).sort((n,s)=>qs(s.date)-qs(n.date))),_d=e=>xo(!0).find(t=>t.slug===e),wd=()=>{const e=new Set;return xo().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()},qs=e=>{const[t,n,s]=e.split("-");return new Date(s,n-1,t)},Cd=e=>{const n=e.trim().split(/\s+/).length;return Math.ceil(n/225)},Sd={class:"border-l-2 border-catppuccin-surface pl-4"},Ed={class:"flex flex-wrap gap-2"},Ad=["onClick"],kd={__name:"TagFilter",props:{tags:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["toggle-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("toggle-tag",o)};return(o,r)=>(O(),M("div",Sd,[r[0]||(r[0]=w("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls tags/",-1)),w("div",Ed,[(O(!0),M(pe,null,qe(e.tags,i=>(O(),M("button",{key:i,onClick:a=>s(i),class:Ut(["px-3 py-1 rounded text-xs transition-colors border",e.selectedTag===i?"bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve":"bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay"])}," #"+X(i),11,Ad))),128))])]))}},Pd={class:"border-l-2 border-catppuccin-surface pl-4"},Td={class:"text-catppuccin-subtle text-sm mb-3"},Rd={key:0,class:"text-catppuccin-mauve"},Id={key:0,class:"text-sm text-catppuccin-subtle"},Od={key:1,class:"space-y-3"},Dd=["onClick"],Ld={class:"px-4 py-3"},Md={class:"flex items-start justify-between gap-4 mb-2"},$d={class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors"},Nd={class:"flex items-center gap-2 flex-shrink-0"},Fd={class:"text-xs text-catppuccin-subtle"},Bd=["title"],Hd={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed"},Wd={class:"flex items-center gap-2"},Ud={class:"flex flex-wrap gap-1.5"},Vd=["onClick"],jd={__name:"PostList",props:{posts:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-post","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-post",o)};return(o,r)=>(O(),M("div",Pd,[w("div",Td,[r[0]||(r[0]=Ve(" ~$ ls -la posts/ ",-1)),e.selectedTag?(O(),M("span",Rd,'| grep "'+X(e.selectedTag)+'"',1)):Te("",!0)]),e.posts.length?(O(),M("div",Od,[(O(!0),M(pe,null,qe(e.posts,i=>(O(),M("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer"},[w("div",Ld,[w("div",Md,[w("h2",$d,X(i.title),1),w("div",Nd,[w("span",Fd,X(i.readingTime)+" min read ",1),r[1]||(r[1]=w("span",{class:"text-catppuccin-surface"},"•",-1)),w("span",{class:"text-xs text-catppuccin-subtle",title:Fe(qs)(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},X(i.date),9,Bd)])]),w("p",Hd,X(i.description),1),w("div",Wd,[w("div",Ud,[(O(!0),M(pe,null,qe(i.tags,a=>(O(),M("span",{key:a,onClick:Oc(l=>n("select-tag",a),["stop"]),class:"px-2 py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:bg-catppuccin-mauve/20 hover:text-catppuccin-mauve cursor-pointer transition-colors"}," #"+X(a),9,Vd))),128))]),r[2]||(r[2]=w("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm"}," read → ",-1))])])],8,Dd))),128))])):(O(),M("div",Id," no posts found "))]))}},Gd={class:"mb-8"},qd={class:"text-catppuccin-subtle text-sm mb-2"},Kd={class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-3"},zd={class:"flex items-center gap-4 text-sm text-catppuccin-subtle mb-4"},Yd={class:"flex gap-2"},Jd={key:0,class:"mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"},Qd={class:"space-y-3"},Zd=["for"],Xd=["id","onUpdate:modelValue","placeholder"],ep={class:"border-l-2 border-catppuccin-surface pl-4 mb-8"},tp=["innerHTML"],np={__name:"PostComponent",props:{post:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=ue(()=>n.post.readingTime||1),i=Ce({}),a=m=>{const p=new RegExp("(?<!\\\\)\\$\\[([^\\]]+)\\]","g"),b=new Set;let S;for(;(S=p.exec(m))!==null;)b.add(S[1]);return Array.from(b)},l=ue(()=>a(n.post.content)),u=m=>{const p=[];let b=m.replace(/\\\$\[([^\]]+)\]/g,(S,F)=>{const $=`__ESCAPED_VAR_${p.length}__`;return p.push(`$[${F}]`),$});return b=b.replace(/\$\[([^\]]+)\]/g,(S,F)=>i.value[F]||F),p.forEach((S,F)=>{b=b.replace(`__ESCAPED_VAR_${F}__`,S)}),b},c=ue(()=>u(n.post.content)),d=m=>{let p=m;const b=[];p=p.replace(/```(\w*)\s*\n?([\s\S]*?)```/g,(E,k,T)=>{const q=`__CODEBLOCK_${b.length}__`,z=T.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=k?`language-${k.toLowerCase()}`:"",J=`code-block-${b.length}`;return b.push(`<div class="relative group">
                <button data-clipboard-target="#${J}" class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-catppuccin-subtle hover:text-catppuccin-mauve px-2 py-1 bg-catppuccin-crust border border-catppuccin-surface rounded hover:bg-catppuccin-mauve/10 cursor-pointer z-10">
                    copy
                </button>
                <pre class="bg-catppuccin-base/50 border border-catppuccin-base/30 rounded p-4 overflow-x-auto my-4"><code id="${J}" class="${Y}">${z}</code></pre>
            </div>`),q});const S=[];p=p.replace(/((?:\|[^\n]+\|\r?\n?)+)/g,E=>{const k=E.trim().split(/\r?\n/);if(k.length<2||!/^\|[\s\-:|]+\|$/.test(k[1]))return E;const q=`__TABLE_${S.length}__`,z=k[0],Y=k.slice(2);let J='<table class="w-full my-4 text-sm border-collapse">';const U=z.split("|").filter(K=>K.trim());return J+="<thead><tr>",U.forEach(K=>{J+=`<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${K.trim()}</th>`}),J+="</tr></thead>",J+="<tbody>",Y.forEach(K=>{if(K.trim()&&!/^\|[\s\-:|]+\|$/.test(K)){const ae=K.split("|").filter(L=>L.trim());J+="<tr>",ae.forEach(L=>{J+=`<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${L.trim()}</td>`}),J+="</tr>"}}),J+="</tbody></table>",S.push(J),q}),p=p.replace(/^(?:---|\*\*\*|___)\s*$/gim,'<hr class="border-catppuccin-surface my-6">');const F=E=>E.toLowerCase().replace(/<[^>]*>/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();p=p.replace(/^### (.*$)/gim,(E,k)=>{const T=F(k);return`<h3 id="${T}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${k}<a href="#${T}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`}),p=p.replace(/^## (.*$)/gim,(E,k)=>{const T=F(k);return`<h2 id="${T}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${k}<a href="#${T}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`}),p=p.replace(/^# (.*$)/gim,(E,k)=>{const T=F(k);return`<h1 id="${T}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${k}<a href="#${T}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`}),p=p.replace(/^> (.*$)/gim,'<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>'),p=p.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">'),p=p.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),p=p.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),p=p.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),p=p.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>'),p=p.replace(/`([^`]+)`/g,'<code class="bg-catppuccin-surface/50 px-2 py-0.5 rounded text-catppuccin-pink text-sm">$1</code>'),p=p.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>'),p=p.replace(/^\d+\. (.*$)/gim,'<li class="ml-6 list-decimal text-catppuccin-text mb-1">$1</li>'),p=p.replace(/^[\-\*\+] (.*$)/gim,'<li class="ml-6 list-disc text-catppuccin-text mb-1">$1</li>'),p=p.replace(/^[\-\*\+] \[ \] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>'),p=p.replace(/^[\-\*\+] \[x\] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>');const $=/^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;return p=p.split(`

`).map(E=>{const k=E.trim();if(k.length===0||k.startsWith("__CODEBLOCK_")||k.startsWith("__TABLE_"))return E;const T=E.split(`
`),q=[];let z=[];const Y=()=>{if(z.length>0){const J=z.join("<br>");q.push(`<p class="text-catppuccin-text leading-relaxed mb-4">${J}</p>`),z=[]}};return T.forEach(J=>{const U=J.trim();U.length===0||$.test(U)||U.startsWith("__CODEBLOCK_")||U.startsWith("__TABLE_")?(Y(),q.push(J)):z.push(J.trim())}),Y(),q.join(`
`)}).join(`

`),b.forEach((E,k)=>{p=p.replace(`__CODEBLOCK_${k}__`,E)}),S.forEach((E,k)=>{p=p.replace(`__TABLE_${k}__`,E)}),p};return Vt(()=>{setTimeout(()=>{window.Prism&&(Prism.highlightAll(),document.querySelectorAll('pre[class*="language-"]').forEach(m=>{m.className=m.className.replace(/language-\S+/g,"").trim()}))},100)}),(m,p)=>(O(),M("div",null,[w("div",Gd,[w("div",qd," ~$ cat "+X(e.post.slug)+".md ",1),w("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-text transition-colors mb-6 inline-flex items-center gap-1"}," [← back to posts] "),w("h1",Kd,X(e.post.title),1),w("div",zd,[w("span",null,X(e.post.date),1),p[0]||(p[0]=w("span",{class:"text-catppuccin-surface"},"•",-1)),w("span",null,"~"+X(r.value)+" min read",1),p[1]||(p[1]=w("span",{class:"text-catppuccin-surface"},"•",-1)),w("div",Yd,[(O(!0),M(pe,null,qe(e.post.tags,b=>(O(),M("span",{key:b,class:"text-catppuccin-gray"}," #"+X(b),1))),128))])])]),l.value.length>0?(O(),M("div",Jd,[p[2]||(p[2]=w("div",{class:"text-sm text-catppuccin-subtle mb-3"}," ~$ configure variables ",-1)),w("div",Qd,[(O(!0),M(pe,null,qe(l.value,b=>(O(),M("div",{key:b,class:"flex items-center gap-3"},[w("label",{for:`var-${b}`,class:"text-sm text-catppuccin-text min-w-[120px]"},X(b)+": ",9,Zd),Qa(w("input",{id:`var-${b}`,"onUpdate:modelValue":S=>i.value[b]=S,type:"text",placeholder:b,class:"flex-1 px-3 py-1.5 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"},null,8,Xd),[[Tc,i.value[b]]])]))),128))])])):Te("",!0),w("article",ep,[w("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:d(c.value)},null,8,tp)]),w("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors inline-flex items-center gap-1"}," [← back to all posts] ")]))}},sp=In(np,[["__scopeId","data-v-f96a9311"]]),op={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},rp={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},ip={key:"list"},ap={class:"mb-12"},lp={class:"flex items-center gap-4 text-sm mb-6"},cp={key:"post"},up={__name:"Posts",setup(e){const t=Ce("list"),n=Ce(null),s=Ce(null),o=Ce([]),r=Ce([]),i=ia(),a=vo(),l=ue(()=>s.value?o.value.filter(p=>p.tags.includes(s.value)):o.value),u=()=>{o.value=xo(),r.value=wd()},c=p=>{if(n.value=_d(p),n.value)t.value="post",window.scrollTo({top:0,behavior:"smooth"}),i.query.post!==p&&a.replace({name:"Posts",query:{...i.query,post:p}});else if(i.query.post){const b={...i.query};delete b.post,a.replace({name:"Posts",query:b})}},d=({skipQueryUpdate:p=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!p&&"post"in i.query){const b={...i.query};delete b.post,a.replace({name:"Posts",query:b})}},m=p=>{s.value=s.value===p?null:p};return Vt(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(S){const F=S.trigger,$=F.textContent;F.textContent="copied!",F.classList.add("text-catppuccin-green"),setTimeout(()=>{F.textContent=$,F.classList.remove("text-catppuccin-green")},2e3),S.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const b=i.query.post;b&&c(b)}),as(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),hn(()=>i.query.post,(p,b)=>{p&&p!==b?c(p):!p&&t.value==="post"&&d({skipQueryUpdate:!0})}),(p,b)=>{const S=ao("router-link");return O(),M("div",op,[w("div",rp,[te(mo,{name:"fade",mode:"out-in"},{default:Pt(()=>[t.value==="list"?(O(),M("div",ip,[w("div",ap,[b[1]||(b[1]=w("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cd ~/posts",-1)),b[2]||(b[2]=w("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[w("span",{class:"text-catppuccin-mauve"},"Posts")],-1)),b[3]||(b[3]=w("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," My thoughts, tutorials, and experiences on various topics including web development, programming, and technology. ",-1)),w("div",lp,[te(S,{to:"/",class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"},{default:Pt(()=>[...b[0]||(b[0]=[Ve(" [← home] ",-1)])]),_:1})]),te(kd,{tags:r.value,"selected-tag":s.value,onToggleTag:m},null,8,["tags","selected-tag"])]),te(jd,{posts:l.value,"selected-tag":s.value,onOpenPost:c,onSelectTag:m},null,8,["posts","selected-tag"]),te(Qn)])):t.value==="post"&&n.value?(O(),M("div",cp,[te(sp,{post:n.value,onGoBack:d},null,8,["post"]),te(Qn)])):Te("",!0)]),_:1})])])}}},fp=In(up,[["__scopeId","data-v-7f74cefd"]]),dp={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},pp={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16"},hp={class:"mb-8"},mp={class:"text-catppuccin-subtle text-sm mb-4"},gp={class:"border-l-2 border-catppuccin-surface pl-4"},bp={class:"text-catppuccin-red text-sm"},vp={class:"text-catppuccin-mauve"},yp={__name:"NotFound",setup(e){const t=ia(),n=vo(),s=ue(()=>(t.fullPath||t.path||"/").replace(/^\//,"")||"."),o=()=>n.push("/");return(r,i)=>(O(),M("div",dp,[w("div",pp,[w("div",hp,[w("div",mp," ~$ cd ~/"+X(s.value),1),w("div",{class:"flex items-center gap-4 text-sm mb-6"},[w("button",{onClick:o,class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"}," [← home] ")])]),w("div",gp,[w("div",bp,[i[0]||(i[0]=Ve(" cd: no such file or directory: /",-1)),w("span",vp,X(s.value),1)])])]),te(Qn)]))}},xp=[{path:"/",name:"Home",component:pd,meta:{title:"Home | heckr.dev"}},{path:"/posts",name:"Posts",component:fp,meta:{title:"Posts | heckr.dev"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:yp,meta:{title:"404 Not Found | heckr.dev"}}],la=Vu({history:_u(),routes:xp,scrollBehavior(e,t,n){return n||{top:0}}});la.beforeEach((e,t,n)=>{document.title=e.meta.title||"heckr.dev",n()});let cn=0;const Ar=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],_p=()=>{console.log("%cWelcome to heckr.dev","font-size: 20px; font-weight: bold; color: #cba6f7;"),console.log("%cWelcome to the dev console, here are some commands to try:","font-size: 14px; color: #a6adc8;"),console.log(`%c- help() - show available commands
- about() - learn more about me
- skills() - view my tech stack
- contact() - get my contact info`,"font-size: 12px; color: #6c7086;"),window.help=()=>{console.log("%cAvailable commands:","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%c- help() - show this message
- about() - about the developer
- skills() - technical skills
- contact() - contact information
- secret() - ???
`,"font-size: 12px; color: #a6adc8;")},window.about=()=>{console.log("%cAbout me","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cA passionate developer who loves building cool things with code!
Check out my projects and posts on the site.`,"font-size: 12px; color: #a6adc8;")},window.skills=async()=>{console.log("%cTech stack","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log("%cFetching...","font-size: 12px; color: #6c7086;");try{const{languages:e,totalRepos:t}=await aa();e.length>0?(console.log("%cTop languages from "+t+" repositories found:","font-size: 14px; font-weight: bold; color: #a6adc8;"),e.slice(0,10).forEach(({language:n,count:s},o)=>{console.log(`%c${o+1}. ${n}: ${s} repos`,"font-size: 12px; color: #a6adc8;")})):console.log("%cUnable to fetch data, please try again later.","font-size: 12px; color: #f38ba8;")}catch{console.log("%cError loading data, please try again later.","font-size: 12px; color: #f38ba8;")}},window.contact=()=>{console.log("%cContact info","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cGitHub: https://github.com/hecker-01
Feel free to reach out!`,"font-size: 12px; color: #a6adc8;")},window.secret=()=>{console.log("%cYou found the secret command","font-size: 18px; font-weight: bold; color: #f9e2af;"),console.log("%cHere's a hint: ↑ ↑ ↓ ↓ ← → ← → B A","font-size: 12px; color: #fab387;")},document.addEventListener("keydown",e=>{e.code===Ar[cn]?(cn++,cn===Ar.length&&(wp(),cn=0)):cn=0})},wp=()=>{if(console.log("%cKONAMI CODE ACTIVATED!","font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;"),document.body.style.animation="rainbow-border 2s linear infinite",!document.getElementById("konami-style")){const e=document.createElement("style");e.id="konami-style",e.textContent=`
      @keyframes rainbow-border {
        0% { box-shadow: inset 0 0 0 3px #f38ba8; }
        16% { box-shadow: inset 0 0 0 3px #fab387; }
        33% { box-shadow: inset 0 0 0 3px #f9e2af; }
        50% { box-shadow: inset 0 0 0 3px #a6e3a1; }
        66% { box-shadow: inset 0 0 0 3px #89dceb; }
        83% { box-shadow: inset 0 0 0 3px #89b4fa; }
        100% { box-shadow: inset 0 0 0 3px #cba6f7; }
      }
    `,document.head.appendChild(e)}setTimeout(()=>{document.body.style.animation=""},5e3)};Mc(ju).use(la).mount("#app");_p();
