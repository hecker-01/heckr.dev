(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function Vs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ue={},Yt=[],ot=()=>{},xr=()=>!1,zn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Gs=e=>e.startsWith("onUpdate:"),be=Object.assign,Ks=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},nl=Object.prototype.hasOwnProperty,se=(e,t)=>nl.call(e,t),j=Array.isArray,Jt=e=>Yn(e)==="[object Map]",_r=e=>Yn(e)==="[object Set]",V=e=>typeof e=="function",me=e=>typeof e=="string",Rt=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",wr=e=>(fe(e)||V(e))&&V(e.then)&&V(e.catch),Cr=Object.prototype.toString,Yn=e=>Cr.call(e),sl=e=>Yn(e).slice(8,-1),Sr=e=>Yn(e)==="[object Object]",qs=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,un=Vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jn=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ol=/-\w/g,Ue=Jn(e=>e.replace(ol,t=>t.slice(1).toUpperCase())),rl=/\B([A-Z])/g,Wt=Jn(e=>e.replace(rl,"-$1").toLowerCase()),Qn=Jn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cs=Jn(e=>e?`on${Qn(e)}`:""),At=(e,t)=>!Object.is(e,t),us=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Er=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},il=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ll=e=>{const t=me(e)?Number(e):NaN;return isNaN(t)?e:t};let _o;const Zn=()=>_o||(_o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Et(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=me(s)?fl(s):Et(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(me(e)||fe(e))return e}const al=/;(?![^(]*\))/g,cl=/:([^]+)/,ul=/\/\*[^]*?\*\//g;function fl(e){const t={};return e.replace(ul,"").split(al).forEach(n=>{if(n){const s=n.split(cl);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function jt(e){let t="";if(me(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const s=jt(e[n]);s&&(t+=s+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const dl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pl=Vs(dl);function Ar(e){return!!e||e===""}const Tr=e=>!!(e&&e.__v_isRef===!0),X=e=>me(e)?e:e==null?"":j(e)||fe(e)&&(e.toString===Cr||!V(e.toString))?Tr(e)?X(e.value):JSON.stringify(e,kr,2):String(e),kr=(e,t)=>Tr(t)?kr(e,t.value):Jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[fs(s,r)+" =>"]=o,n),{})}:_r(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>fs(n))}:Rt(t)?fs(t):fe(t)&&!j(t)&&!Sr(t)?String(t):t,fs=(e,t="")=>{var n;return Rt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Le;class hl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){this._on>0&&--this._on===0&&(Le=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function ml(){return Le}let ce;const ds=new WeakSet;class Pr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&Le.active&&Le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ds.has(this)&&(ds.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Or(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wo(this),Ir(this);const t=ce,n=Ge;ce=this,Ge=!0;try{return this.fn()}finally{Lr(this),ce=t,Ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Js(t);this.deps=this.depsTail=void 0,wo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ds.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ts(this)&&this.run()}get dirty(){return Ts(this)}}let Rr=0,fn,dn;function Or(e,t=!1){if(e.flags|=8,t){e.next=dn,dn=e;return}e.next=fn,fn=e}function zs(){Rr++}function Ys(){if(--Rr>0)return;if(dn){let t=dn;for(dn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;fn;){let t=fn;for(fn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Ir(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Lr(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Js(s),gl(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Ts(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Mr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Mr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yn)||(e.globalVersion=yn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ts(e))))return;e.flags|=2;const t=e.dep,n=ce,s=Ge;ce=e,Ge=!0;try{Ir(e);const o=e.fn(e._value);(t.version===0||At(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{ce=n,Ge=s,Lr(e),e.flags&=-3}}function Js(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Js(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function gl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ge=!0;const Dr=[];function dt(){Dr.push(Ge),Ge=!1}function pt(){const e=Dr.pop();Ge=e===void 0?!0:e}function wo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ce;ce=void 0;try{t()}finally{ce=n}}}let yn=0;class bl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ce||!Ge||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new bl(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,Nr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(t){this.version++,yn++,this.notify(t)}notify(t){zs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ys()}}}function Nr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Nr(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ks=new WeakMap,Ft=Symbol(""),Ps=Symbol(""),xn=Symbol("");function we(e,t,n){if(Ge&&ce){let s=ks.get(e);s||ks.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new Qs),o.map=s,o.key=n),o.track()}}function ft(e,t,n,s,o,r){const i=ks.get(e);if(!i){yn++;return}const a=l=>{l&&l.trigger()};if(zs(),t==="clear")i.forEach(a);else{const l=j(e),u=l&&qs(n);if(l&&n==="length"){const c=Number(s);i.forEach((d,m)=>{(m==="length"||m===xn||!Rt(m)&&m>=c)&&a(d)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(xn)),t){case"add":l?u&&a(i.get("length")):(a(i.get(Ft)),Jt(e)&&a(i.get(Ps)));break;case"delete":l||(a(i.get(Ft)),Jt(e)&&a(i.get(Ps)));break;case"set":Jt(e)&&a(i.get(Ft));break}}Ys()}function Kt(e){const t=J(e);return t===e?t:(we(t,"iterate",xn),je(e)?t:t.map(qe))}function Xn(e){return we(e=J(e),"iterate",xn),e}function xt(e,t){return ht(e)?Xt(Bt(e)?qe(t):t):qe(t)}const vl={__proto__:null,[Symbol.iterator](){return ps(this,Symbol.iterator,e=>xt(this,e))},concat(...e){return Kt(this).concat(...e.map(t=>j(t)?Kt(t):t))},entries(){return ps(this,"entries",e=>(e[1]=xt(this,e[1]),e))},every(e,t){return lt(this,"every",e,t,void 0,arguments)},filter(e,t){return lt(this,"filter",e,t,n=>n.map(s=>xt(this,s)),arguments)},find(e,t){return lt(this,"find",e,t,n=>xt(this,n),arguments)},findIndex(e,t){return lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return lt(this,"findLast",e,t,n=>xt(this,n),arguments)},findLastIndex(e,t){return lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return hs(this,"includes",e)},indexOf(...e){return hs(this,"indexOf",e)},join(e){return Kt(this).join(e)},lastIndexOf(...e){return hs(this,"lastIndexOf",e)},map(e,t){return lt(this,"map",e,t,void 0,arguments)},pop(){return on(this,"pop")},push(...e){return on(this,"push",e)},reduce(e,...t){return Co(this,"reduce",e,t)},reduceRight(e,...t){return Co(this,"reduceRight",e,t)},shift(){return on(this,"shift")},some(e,t){return lt(this,"some",e,t,void 0,arguments)},splice(...e){return on(this,"splice",e)},toReversed(){return Kt(this).toReversed()},toSorted(e){return Kt(this).toSorted(e)},toSpliced(...e){return Kt(this).toSpliced(...e)},unshift(...e){return on(this,"unshift",e)},values(){return ps(this,"values",e=>xt(this,e))}};function ps(e,t,n){const s=Xn(e),o=s[t]();return s!==e&&!je(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=n(r.value)),r}),o}const yl=Array.prototype;function lt(e,t,n,s,o,r){const i=Xn(e),a=i!==e&&!je(e),l=i[t];if(l!==yl[t]){const d=l.apply(e,r);return a?qe(d):d}let u=n;i!==e&&(a?u=function(d,m){return n.call(this,xt(e,d),m,e)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,e)}));const c=l.call(i,u,s);return a&&o?o(c):c}function Co(e,t,n,s){const o=Xn(e);let r=n;return o!==e&&(je(e)?n.length>3&&(r=function(i,a,l){return n.call(this,i,a,l,e)}):r=function(i,a,l){return n.call(this,i,xt(e,a),l,e)}),o[t](r,...s)}function hs(e,t,n){const s=J(e);we(s,"iterate",xn);const o=s[t](...n);return(o===-1||o===!1)&&eo(n[0])?(n[0]=J(n[0]),s[t](...n)):o}function on(e,t,n=[]){dt(),zs();const s=J(e)[t].apply(e,n);return Ys(),pt(),s}const xl=Vs("__proto__,__v_isRef,__isVue"),$r=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rt));function _l(e){Rt(e)||(e=String(e));const t=J(this);return we(t,"has",e),t.hasOwnProperty(e)}class Fr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?Ol:jr:r?Wr:Hr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=j(t);if(!o){let l;if(i&&(l=vl[n]))return l;if(n==="hasOwnProperty")return _l}const a=Reflect.get(t,n,Se(t)?t:s);if((Rt(n)?$r.has(n):xl(n))||(o||we(t,"get",n),r))return a;if(Se(a)){const l=i&&qs(n)?a:a.value;return o&&fe(l)?Os(l):l}return fe(a)?o?Os(a):An(a):a}}class Br extends Fr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];const i=j(t)&&qs(n);if(!this._isShallow){const u=ht(r);if(!je(s)&&!ht(s)&&(r=J(r),s=J(s)),!i&&Se(r)&&!Se(s))return u||(r.value=s),!0}const a=i?Number(n)<t.length:se(t,n),l=Reflect.set(t,n,s,Se(t)?t:o);return t===J(o)&&(a?At(s,r)&&ft(t,"set",n,s):ft(t,"add",n,s)),l}deleteProperty(t,n){const s=se(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&ft(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!Rt(n)||!$r.has(n))&&we(t,"has",n),s}ownKeys(t){return we(t,"iterate",j(t)?"length":Ft),Reflect.ownKeys(t)}}class wl extends Fr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Cl=new Br,Sl=new wl,El=new Br(!0);const Rs=e=>e,Pn=e=>Reflect.getPrototypeOf(e);function Al(e,t,n){return function(...s){const o=this.__v_raw,r=J(o),i=Jt(r),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=o[e](...s),c=n?Rs:t?Xt:qe;return!t&&we(r,"iterate",l?Ps:Ft),be(Object.create(u),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:a?[c(d[0]),c(d[1])]:c(d),done:m}}})}}function Rn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Tl(e,t){const n={get(o){const r=this.__v_raw,i=J(r),a=J(o);e||(At(o,a)&&we(i,"get",o),we(i,"get",a));const{has:l}=Pn(i),u=t?Rs:e?Xt:qe;if(l.call(i,o))return u(r.get(o));if(l.call(i,a))return u(r.get(a));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&we(J(o),"iterate",Ft),o.size},has(o){const r=this.__v_raw,i=J(r),a=J(o);return e||(At(o,a)&&we(i,"has",o),we(i,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const i=this,a=i.__v_raw,l=J(a),u=t?Rs:e?Xt:qe;return!e&&we(l,"iterate",Ft),a.forEach((c,d)=>o.call(r,u(c),u(d),i))}};return be(n,e?{add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear")}:{add(o){!t&&!je(o)&&!ht(o)&&(o=J(o));const r=J(this);return Pn(r).has.call(r,o)||(r.add(o),ft(r,"add",o,o)),this},set(o,r){!t&&!je(r)&&!ht(r)&&(r=J(r));const i=J(this),{has:a,get:l}=Pn(i);let u=a.call(i,o);u||(o=J(o),u=a.call(i,o));const c=l.call(i,o);return i.set(o,r),u?At(r,c)&&ft(i,"set",o,r):ft(i,"add",o,r),this},delete(o){const r=J(this),{has:i,get:a}=Pn(r);let l=i.call(r,o);l||(o=J(o),l=i.call(r,o)),a&&a.call(r,o);const u=r.delete(o);return l&&ft(r,"delete",o,void 0),u},clear(){const o=J(this),r=o.size!==0,i=o.clear();return r&&ft(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Al(o,e,t)}),n}function Zs(e,t){const n=Tl(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(se(n,o)&&o in s?n:s,o,r)}const kl={get:Zs(!1,!1)},Pl={get:Zs(!1,!0)},Rl={get:Zs(!0,!1)};const Hr=new WeakMap,Wr=new WeakMap,jr=new WeakMap,Ol=new WeakMap;function Il(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ll(e){return e.__v_skip||!Object.isExtensible(e)?0:Il(sl(e))}function An(e){return ht(e)?e:Xs(e,!1,Cl,kl,Hr)}function Ur(e){return Xs(e,!1,El,Pl,Wr)}function Os(e){return Xs(e,!0,Sl,Rl,jr)}function Xs(e,t,n,s,o){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=Ll(e);if(r===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,r===2?s:n);return o.set(e,a),a}function Bt(e){return ht(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function ht(e){return!!(e&&e.__v_isReadonly)}function je(e){return!!(e&&e.__v_isShallow)}function eo(e){return e?!!e.__v_raw:!1}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function Ml(e){return!se(e,"__v_skip")&&Object.isExtensible(e)&&Er(e,"__v_skip",!0),e}const qe=e=>fe(e)?An(e):e,Xt=e=>fe(e)?Os(e):e;function Se(e){return e?e.__v_isRef===!0:!1}function ke(e){return Vr(e,!1)}function Dl(e){return Vr(e,!0)}function Vr(e,t){return Se(e)?e:new Nl(e,t)}class Nl{constructor(t,n){this.dep=new Qs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:J(t),this._value=n?t:qe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||je(t)||ht(t);t=s?t:J(t),At(t,n)&&(this._rawValue=t,this._value=s?t:qe(t),this.dep.trigger())}}function We(e){return Se(e)?e.value:e}const $l={get:(e,t,n)=>t==="__v_raw"?e:We(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Se(o)&&!Se(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Gr(e){return Bt(e)?e:new Proxy(e,$l)}class Fl{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Qs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Or(this,!0),!0}get value(){const t=this.dep.track();return Mr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bl(e,t,n=!1){let s,o;return V(e)?s=e:(s=e.get,o=e.set),new Fl(s,o,n)}const On={},$n=new WeakMap;let Dt;function Hl(e,t=!1,n=Dt){if(n){let s=$n.get(n);s||$n.set(n,s=[]),s.push(e)}}function Wl(e,t,n=ue){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:a,call:l}=n,u=I=>o?I:je(I)||o===!1||o===0?St(I,1):St(I);let c,d,m,h,b=!1,S=!1;if(Se(e)?(d=()=>e.value,b=je(e)):Bt(e)?(d=()=>u(e),b=!0):j(e)?(S=!0,b=e.some(I=>Bt(I)||je(I)),d=()=>e.map(I=>{if(Se(I))return I.value;if(Bt(I))return u(I);if(V(I))return l?l(I,2):I()})):V(e)?t?d=l?()=>l(e,2):e:d=()=>{if(m){dt();try{m()}finally{pt()}}const I=Dt;Dt=c;try{return l?l(e,3,[h]):e(h)}finally{Dt=I}}:d=ot,t&&o){const I=d,G=o===!0?1/0:o;d=()=>St(I(),G)}const F=ml(),O=()=>{c.stop(),F&&F.active&&Ks(F.effects,c)};if(r&&t){const I=t;t=(...G)=>{I(...G),O()}}let P=S?new Array(e.length).fill(On):On;const T=I=>{if(!(!(c.flags&1)||!c.dirty&&!I))if(t){const G=c.run();if(o||b||(S?G.some((oe,Y)=>At(oe,P[Y])):At(G,P))){m&&m();const oe=Dt;Dt=c;try{const Y=[G,P===On?void 0:S&&P[0]===On?[]:P,h];P=G,l?l(t,3,Y):t(...Y)}finally{Dt=oe}}}else c.run()};return a&&a(T),c=new Pr(d),c.scheduler=i?()=>i(T,!1):T,h=I=>Hl(I,!1,c),m=c.onStop=()=>{const I=$n.get(c);if(I){if(l)l(I,4);else for(const G of I)G();$n.delete(c)}},t?s?T(!0):P=c.run():i?i(T.bind(null,!0),!0):c.run(),O.pause=c.pause.bind(c),O.resume=c.resume.bind(c),O.stop=O,O}function St(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Se(e))St(e.value,t,n);else if(j(e))for(let s=0;s<e.length;s++)St(e[s],t,n);else if(_r(e)||Jt(e))e.forEach(s=>{St(s,t,n)});else if(Sr(e)){for(const s in e)St(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&St(e[s],t,n)}return e}function Tn(e,t,n,s){try{return s?e(...s):e()}catch(o){es(o,t,n)}}function ze(e,t,n,s){if(V(e)){const o=Tn(e,t,n,s);return o&&wr(o)&&o.catch(r=>{es(r,t,n)}),o}if(j(e)){const o=[];for(let r=0;r<e.length;r++)o.push(ze(e[r],t,n,s));return o}}function es(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ue;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}a=a.parent}if(r){dt(),Tn(r,null,10,[e,l,u]),pt();return}}jl(e,n,o,s,i)}function jl(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Te=[];let nt=-1;const Qt=[];let _t=null,qt=0;const Kr=Promise.resolve();let Fn=null;function qr(e){const t=Fn||Kr;return e?t.then(this?e.bind(this):e):t}function Ul(e){let t=nt+1,n=Te.length;for(;t<n;){const s=t+n>>>1,o=Te[s],r=_n(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function to(e){if(!(e.flags&1)){const t=_n(e),n=Te[Te.length-1];!n||!(e.flags&2)&&t>=_n(n)?Te.push(e):Te.splice(Ul(t),0,e),e.flags|=1,zr()}}function zr(){Fn||(Fn=Kr.then(Jr))}function Vl(e){j(e)?Qt.push(...e):_t&&e.id===-1?_t.splice(qt+1,0,e):e.flags&1||(Qt.push(e),e.flags|=1),zr()}function So(e,t,n=nt+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Yr(e){if(Qt.length){const t=[...new Set(Qt)].sort((n,s)=>_n(n)-_n(s));if(Qt.length=0,_t){_t.push(...t);return}for(_t=t,qt=0;qt<_t.length;qt++){const n=_t[qt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}_t=null,qt=0}}const _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Jr(e){try{for(nt=0;nt<Te.length;nt++){const t=Te[nt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Tn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;nt<Te.length;nt++){const t=Te[nt];t&&(t.flags&=-2)}nt=-1,Te.length=0,Yr(),Fn=null,(Te.length||Qt.length)&&Jr()}}let Ve=null,Qr=null;function Bn(e){const t=Ve;return Ve=e,Qr=e&&e.type.__scopeId||null,t}function kt(e,t=Ve,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&jn(-1);const r=Bn(t);let i;try{i=e(...o)}finally{Bn(r),s._d&&jn(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function It(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let l=a.dir[s];l&&(dt(),ze(l,n,8,[e.el,a,e,t]),pt())}}function Ln(e,t){if(Ce){let n=Ce.provides;const s=Ce.parent&&Ce.parent.provides;s===n&&(n=Ce.provides=Object.create(s)),n[e]=t}}function Ke(e,t,n=!1){const s=ao();if(s||Zt){let o=Zt?Zt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&V(t)?t.call(s&&s.proxy):t}}const Gl=Symbol.for("v-scx"),Kl=()=>Ke(Gl);function pn(e,t,n){return Zr(e,t,n)}function Zr(e,t,n=ue){const{immediate:s,deep:o,flush:r,once:i}=n,a=be({},n),l=t&&s||!t&&r!=="post";let u;if(Sn){if(r==="sync"){const h=Kl();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=ot,h.resume=ot,h.pause=ot,h}}const c=Ce;a.call=(h,b,S)=>ze(h,c,b,S);let d=!1;r==="post"?a.scheduler=h=>{$e(h,c&&c.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,b)=>{b?h():to(h)}),a.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const m=Wl(e,t,a);return Sn&&(u?u.push(m):l&&m()),m}function ql(e,t,n){const s=this.proxy,o=me(e)?e.includes(".")?Xr(s,e):()=>s[e]:e.bind(s,s);let r;V(t)?r=t:(r=t.handler,n=t);const i=kn(this),a=Zr(o,r.bind(s),n);return i(),a}function Xr(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const zl=Symbol("_vte"),ei=e=>e.__isTeleport,ut=Symbol("_leaveCb"),In=Symbol("_enterCb");function ti(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ut(()=>{e.isMounted=!0}),ss(()=>{e.isUnmounting=!0}),e}const He=[Function,Array],ni={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},si=e=>{const t=e.subTree;return t.component?si(t.component):t},Yl={name:"BaseTransition",props:ni,setup(e,{slots:t}){const n=ao(),s=ti();return()=>{const o=t.default&&no(t.default(),!0);if(!o||!o.length)return;const r=oi(o),i=J(e),{mode:a}=i;if(s.isLeaving)return ms(r);const l=Eo(r);if(!l)return ms(r);let u=wn(l,i,s,n,d=>u=d);l.type!==Pe&&Ht(l,u);let c=n.subTree&&Eo(n.subTree);if(c&&c.type!==Pe&&!Nt(c,l)&&si(n).type!==Pe){let d=wn(c,i,s,n);if(Ht(c,d),a==="out-in"&&l.type!==Pe)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},ms(r);a==="in-out"&&l.type!==Pe?d.delayLeave=(m,h,b)=>{const S=ri(s,c);S[String(c.key)]=c,m[ut]=()=>{h(),m[ut]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{b(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function oi(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Pe){t=n;break}}return t}const Jl=Yl;function ri(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function wn(e,t,n,s,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:m,onLeave:h,onAfterLeave:b,onLeaveCancelled:S,onBeforeAppear:F,onAppear:O,onAfterAppear:P,onAppearCancelled:T}=t,I=String(e.key),G=ri(n,e),oe=(K,Z)=>{K&&ze(K,s,9,Z)},Y=(K,Z)=>{const le=Z[1];oe(K,Z),j(K)?K.every(M=>M.length<=1)&&le():K.length<=1&&le()},_e={mode:i,persisted:a,beforeEnter(K){let Z=l;if(!n.isMounted)if(r)Z=F||l;else return;K[ut]&&K[ut](!0);const le=G[I];le&&Nt(e,le)&&le.el[ut]&&le.el[ut](),oe(Z,[K])},enter(K){let Z=u,le=c,M=d;if(!n.isMounted)if(r)Z=O||u,le=P||c,M=T||d;else return;let ee=!1;const ye=K[In]=De=>{ee||(ee=!0,De?oe(M,[K]):oe(le,[K]),_e.delayedLeave&&_e.delayedLeave(),K[In]=void 0)};Z?Y(Z,[K,ye]):ye()},leave(K,Z){const le=String(e.key);if(K[In]&&K[In](!0),n.isUnmounting)return Z();oe(m,[K]);let M=!1;const ee=K[ut]=ye=>{M||(M=!0,Z(),ye?oe(S,[K]):oe(b,[K]),K[ut]=void 0,G[le]===e&&delete G[le])};G[le]=e,h?Y(h,[K,ee]):ee()},clone(K){const Z=wn(K,t,n,s,o);return o&&o(Z),Z}};return _e}function ms(e){if(ts(e))return e=Pt(e),e.children=null,e}function Eo(e){if(!ts(e))return ei(e.type)&&e.children?oi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&V(n.default))return n.default()}}function Ht(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ht(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function no(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===pe?(i.patchFlag&128&&o++,s=s.concat(no(i.children,t,a))):(t||i.type!==Pe)&&s.push(a!=null?Pt(i,{key:a}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ii(e,t){return V(e)?be({name:e.name},t,{setup:e}):e}function li(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Hn=new WeakMap;function hn(e,t,n,s,o=!1){if(j(e)){e.forEach((b,S)=>hn(b,t&&(j(t)?t[S]:t),n,s,o));return}if(mn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&hn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?co(s.component):s.el,i=o?null:r,{i:a,r:l}=e,u=t&&t.r,c=a.refs===ue?a.refs={}:a.refs,d=a.setupState,m=J(d),h=d===ue?xr:b=>se(m,b);if(u!=null&&u!==l){if(Ao(t),me(u))c[u]=null,h(u)&&(d[u]=null);else if(Se(u)){u.value=null;const b=t;b.k&&(c[b.k]=null)}}if(V(l))Tn(l,a,12,[i,c]);else{const b=me(l),S=Se(l);if(b||S){const F=()=>{if(e.f){const O=b?h(l)?d[l]:c[l]:l.value;if(o)j(O)&&Ks(O,r);else if(j(O))O.includes(r)||O.push(r);else if(b)c[l]=[r],h(l)&&(d[l]=c[l]);else{const P=[r];l.value=P,e.k&&(c[e.k]=P)}}else b?(c[l]=i,h(l)&&(d[l]=i)):S&&(l.value=i,e.k&&(c[e.k]=i))};if(i){const O=()=>{F(),Hn.delete(e)};O.id=-1,Hn.set(e,O),$e(O,n)}else Ao(e),F()}}}function Ao(e){const t=Hn.get(e);t&&(t.flags|=8,Hn.delete(e))}Zn().requestIdleCallback;Zn().cancelIdleCallback;const mn=e=>!!e.type.__asyncLoader,ts=e=>e.type.__isKeepAlive;function Ql(e,t){ai(e,"a",t)}function Zl(e,t){ai(e,"da",t)}function ai(e,t,n=Ce){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ns(t,s,n),n){let o=n.parent;for(;o&&o.parent;)ts(o.parent.vnode)&&Xl(s,t,n,o),o=o.parent}}function Xl(e,t,n,s){const o=ns(t,e,s,!0);ui(()=>{Ks(s[t],o)},n)}function ns(e,t,n=Ce,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{dt();const a=kn(n),l=ze(t,n,e,i);return a(),pt(),l});return s?o.unshift(r):o.push(r),r}}const mt=e=>(t,n=Ce)=>{(!Sn||e==="sp")&&ns(e,(...s)=>t(...s),n)},ea=mt("bm"),Ut=mt("m"),ta=mt("bu"),ci=mt("u"),ss=mt("bum"),ui=mt("um"),na=mt("sp"),sa=mt("rtg"),oa=mt("rtc");function ra(e,t=Ce){ns("ec",e,t)}const fi="components";function so(e,t){return pi(fi,e,!0,t)||e}const di=Symbol.for("v-ndc");function ia(e){return me(e)?pi(fi,e,!1)||e:e||di}function pi(e,t,n=!0,s=!1){const o=Ve||Ce;if(o){const r=o.type;{const a=Va(r,!1);if(a&&(a===t||a===Ue(t)||a===Qn(Ue(t))))return r}const i=To(o[e]||r[e],t)||To(o.appContext[e],t);return!i&&s?r:i}}function To(e,t){return e&&(e[t]||e[Ue(t)]||e[Qn(Ue(t))])}function rt(e,t,n,s){let o;const r=n,i=j(e);if(i||me(e)){const a=i&&Bt(e);let l=!1,u=!1;a&&(l=!je(e),u=ht(e),e=Xn(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=t(l?u?Xt(qe(e[c])):qe(e[c]):e[c],c,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r)}else if(fe(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];o[l]=t(e[c],c,l,r)}}else o=[];return o}const Is=e=>e?Ii(e)?co(e):Is(e.parent):null,gn=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Is(e.parent),$root:e=>Is(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>mi(e),$forceUpdate:e=>e.f||(e.f=()=>{to(e.update)}),$nextTick:e=>e.n||(e.n=qr.bind(e.proxy)),$watch:e=>ql.bind(e)}),gs=(e,t)=>e!==ue&&!e.__isScriptSetup&&se(e,t),la={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(gs(s,t))return i[t]=1,s[t];if(o!==ue&&se(o,t))return i[t]=2,o[t];if(se(r,t))return i[t]=3,r[t];if(n!==ue&&se(n,t))return i[t]=4,n[t];Ls&&(i[t]=0)}}const u=gn[t];let c,d;if(u)return t==="$attrs"&&we(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==ue&&se(n,t))return i[t]=4,n[t];if(d=l.config.globalProperties,se(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return gs(o,t)?(o[t]=n,!0):s!==ue&&se(s,t)?(s[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:r,type:i}},a){let l;return!!(n[a]||e!==ue&&a[0]!=="$"&&se(e,a)||gs(t,a)||se(r,a)||se(s,a)||se(gn,a)||se(o.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ko(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ls=!0;function aa(e){const t=mi(e),n=e.proxy,s=e.ctx;Ls=!1,t.beforeCreate&&Po(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:m,beforeUpdate:h,updated:b,activated:S,deactivated:F,beforeDestroy:O,beforeUnmount:P,destroyed:T,unmounted:I,render:G,renderTracked:oe,renderTriggered:Y,errorCaptured:_e,serverPrefetch:K,expose:Z,inheritAttrs:le,components:M,directives:ee,filters:ye}=t;if(u&&ca(u,s,null),i)for(const ie in i){const te=i[ie];V(te)&&(s[ie]=te.bind(n))}if(o){const ie=o.call(n,n);fe(ie)&&(e.data=An(ie))}if(Ls=!0,r)for(const ie in r){const te=r[ie],it=V(te)?te.bind(n,n):V(te.get)?te.get.bind(n,n):ot,gt=!V(te)&&V(te.set)?te.set.bind(n):ot,Je=de({get:it,set:gt});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Re=>Je.value=Re})}if(a)for(const ie in a)hi(a[ie],s,n,ie);if(l){const ie=V(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(te=>{Ln(te,ie[te])})}c&&Po(c,e,"c");function ge(ie,te){j(te)?te.forEach(it=>ie(it.bind(n))):te&&ie(te.bind(n))}if(ge(ea,d),ge(Ut,m),ge(ta,h),ge(ci,b),ge(Ql,S),ge(Zl,F),ge(ra,_e),ge(oa,oe),ge(sa,Y),ge(ss,P),ge(ui,I),ge(na,K),j(Z))if(Z.length){const ie=e.exposed||(e.exposed={});Z.forEach(te=>{Object.defineProperty(ie,te,{get:()=>n[te],set:it=>n[te]=it,enumerable:!0})})}else e.exposed||(e.exposed={});G&&e.render===ot&&(e.render=G),le!=null&&(e.inheritAttrs=le),M&&(e.components=M),ee&&(e.directives=ee),K&&li(e)}function ca(e,t,n=ot){j(e)&&(e=Ms(e));for(const s in e){const o=e[s];let r;fe(o)?"default"in o?r=Ke(o.from||s,o.default,!0):r=Ke(o.from||s):r=Ke(o),Se(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Po(e,t,n){ze(j(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function hi(e,t,n,s){let o=s.includes(".")?Xr(n,s):()=>n[s];if(me(e)){const r=t[e];V(r)&&pn(o,r)}else if(V(e))pn(o,e.bind(n));else if(fe(e))if(j(e))e.forEach(r=>hi(r,t,n,s));else{const r=V(e.handler)?e.handler.bind(n):t[e.handler];V(r)&&pn(o,r,e)}}function mi(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let l;return a?l=a:!o.length&&!n&&!s?l=t:(l={},o.length&&o.forEach(u=>Wn(l,u,i,!0)),Wn(l,t,i)),fe(t)&&r.set(t,l),l}function Wn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&Wn(e,r,n,!0),o&&o.forEach(i=>Wn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=ua[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const ua={data:Ro,props:Oo,emits:Oo,methods:cn,computed:cn,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:cn,directives:cn,watch:da,provide:Ro,inject:fa};function Ro(e,t){return t?e?function(){return be(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function fa(e,t){return cn(Ms(e),Ms(t))}function Ms(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ee(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?be(Object.create(null),e,t):t}function Oo(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:be(Object.create(null),ko(e),ko(t??{})):t}function da(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const s in t)n[s]=Ee(e[s],t[s]);return n}function gi(){return{app:null,config:{isNativeTag:xr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pa=0;function ha(e,t){return function(s,o=null){V(s)||(s=be({},s)),o!=null&&!fe(o)&&(o=null);const r=gi(),i=new WeakSet,a=[];let l=!1;const u=r.app={_uid:pa++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Ka,get config(){return r.config},set config(c){},use(c,...d){return i.has(c)||(c&&V(c.install)?(i.add(c),c.install(u,...d)):V(c)&&(i.add(c),c(u,...d))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,d){return d?(r.components[c]=d,u):r.components[c]},directive(c,d){return d?(r.directives[c]=d,u):r.directives[c]},mount(c,d,m){if(!l){const h=u._ceVNode||Q(s,o);return h.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),e(h,c,m),l=!0,u._container=c,c.__vue_app__=u,co(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(ze(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return r.provides[c]=d,u},runWithContext(c){const d=Zt;Zt=u;try{return c()}finally{Zt=d}}};return u}}let Zt=null;const ma=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ue(t)}Modifiers`]||e[`${Wt(t)}Modifiers`];function ga(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ue;let o=n;const r=t.startsWith("update:"),i=r&&ma(s,t.slice(7));i&&(i.trim&&(o=n.map(c=>me(c)?c.trim():c)),i.number&&(o=n.map(il)));let a,l=s[a=cs(t)]||s[a=cs(Ue(t))];!l&&r&&(l=s[a=cs(Wt(t))]),l&&ze(l,e,6,o);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ze(u,e,6,o)}}const ba=new WeakMap;function bi(e,t,n=!1){const s=n?ba:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!V(e)){const l=u=>{const c=bi(u,t,!0);c&&(a=!0,be(i,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(fe(e)&&s.set(e,null),null):(j(r)?r.forEach(l=>i[l]=null):be(i,r),fe(e)&&s.set(e,i),i)}function os(e,t){return!e||!zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,Wt(t))||se(e,t))}function Io(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:a,emit:l,render:u,renderCache:c,props:d,data:m,setupState:h,ctx:b,inheritAttrs:S}=e,F=Bn(e);let O,P;try{if(n.shapeFlag&4){const I=o||s,G=I;O=st(u.call(G,I,c,d,h,m,b)),P=a}else{const I=t;O=st(I.length>1?I(d,{attrs:a,slots:i,emit:l}):I(d,null)),P=t.props?a:va(a)}}catch(I){bn.length=0,es(I,e,1),O=Q(Pe)}let T=O;if(P&&S!==!1){const I=Object.keys(P),{shapeFlag:G}=T;I.length&&G&7&&(r&&I.some(Gs)&&(P=ya(P,r)),T=Pt(T,P,!1,!0))}return n.dirs&&(T=Pt(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Ht(T,n.transition),O=T,Bn(F),O}const va=e=>{let t;for(const n in e)(n==="class"||n==="style"||zn(n))&&((t||(t={}))[n]=e[n]);return t},ya=(e,t)=>{const n={};for(const s in e)(!Gs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function xa(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Lo(s,i,u):!!i;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const m=c[d];if(i[m]!==s[m]&&!os(u,m))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Lo(s,i,u):!0:!!i;return!1}function Lo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!os(n,r))return!0}return!1}function _a({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const vi={},yi=()=>Object.create(vi),xi=e=>Object.getPrototypeOf(e)===vi;function wa(e,t,n,s=!1){const o={},r=yi();e.propsDefaults=Object.create(null),_i(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Ur(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Ca(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=J(o),[l]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let m=c[d];if(os(e.emitsOptions,m))continue;const h=t[m];if(l)if(se(r,m))h!==r[m]&&(r[m]=h,u=!0);else{const b=Ue(m);o[b]=Ds(l,a,b,h,e,!1)}else h!==r[m]&&(r[m]=h,u=!0)}}}else{_i(e,t,o,r)&&(u=!0);let c;for(const d in a)(!t||!se(t,d)&&((c=Wt(d))===d||!se(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(o[d]=Ds(l,a,d,void 0,e,!0)):delete o[d]);if(r!==a)for(const d in r)(!t||!se(t,d))&&(delete r[d],u=!0)}u&&ft(e.attrs,"set","")}function _i(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(un(l))continue;const u=t[l];let c;o&&se(o,c=Ue(l))?!r||!r.includes(c)?n[c]=u:(a||(a={}))[c]=u:os(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,i=!0)}if(r){const l=J(n),u=a||ue;for(let c=0;c<r.length;c++){const d=r[c];n[d]=Ds(o,l,d,u[d],e,!se(u,d))}}return i}function Ds(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=se(i,"default");if(a&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&V(l)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const c=kn(o);s=u[n]=l.call(null,t),c()}}else s=l;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===Wt(n))&&(s=!0))}return s}const Sa=new WeakMap;function wi(e,t,n=!1){const s=n?Sa:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let l=!1;if(!V(e)){const c=d=>{l=!0;const[m,h]=wi(d,t,!0);be(i,m),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return fe(e)&&s.set(e,Yt),Yt;if(j(r))for(let c=0;c<r.length;c++){const d=Ue(r[c]);Mo(d)&&(i[d]=ue)}else if(r)for(const c in r){const d=Ue(c);if(Mo(d)){const m=r[c],h=i[d]=j(m)||V(m)?{type:m}:be({},m),b=h.type;let S=!1,F=!0;if(j(b))for(let O=0;O<b.length;++O){const P=b[O],T=V(P)&&P.name;if(T==="Boolean"){S=!0;break}else T==="String"&&(F=!1)}else S=V(b)&&b.name==="Boolean";h[0]=S,h[1]=F,(S||se(h,"default"))&&a.push(d)}}const u=[i,a];return fe(e)&&s.set(e,u),u}function Mo(e){return e[0]!=="$"&&!un(e)}const oo=e=>e==="_"||e==="_ctx"||e==="$stable",ro=e=>j(e)?e.map(st):[st(e)],Ea=(e,t,n)=>{if(t._n)return t;const s=kt((...o)=>ro(t(...o)),n);return s._c=!1,s},Ci=(e,t,n)=>{const s=e._ctx;for(const o in e){if(oo(o))continue;const r=e[o];if(V(r))t[o]=Ea(o,r,s);else if(r!=null){const i=ro(r);t[o]=()=>i}}},Si=(e,t)=>{const n=ro(t);e.slots.default=()=>n},Ei=(e,t,n)=>{for(const s in t)(n||!oo(s))&&(e[s]=t[s])},Aa=(e,t,n)=>{const s=e.slots=yi();if(e.vnode.shapeFlag&32){const o=t._;o?(Ei(s,t,n),n&&Er(s,"_",o,!0)):Ci(t,s)}else t&&Si(e,t)},Ta=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=ue;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Ei(o,t,n):(r=!t.$stable,Ci(t,o)),i=t}else t&&(Si(e,t),i={default:1});if(r)for(const a in o)!oo(a)&&i[a]==null&&delete o[a]},$e=Ia;function ka(e){return Pa(e)}function Pa(e,t){const n=Zn();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:m,setScopeId:h=ot,insertStaticContent:b}=e,S=(f,p,g,v=null,_=null,y=null,k=void 0,A=null,E=!!p.dynamicChildren)=>{if(f===p)return;f&&!Nt(f,p)&&(v=x(f),Re(f,_,y,!0),f=null),p.patchFlag===-2&&(E=!1,p.dynamicChildren=null);const{type:w,ref:W,shapeFlag:L}=p;switch(w){case rs:F(f,p,g,v);break;case Pe:O(f,p,g,v);break;case Mn:f==null&&P(p,g,v,k);break;case pe:M(f,p,g,v,_,y,k,A,E);break;default:L&1?G(f,p,g,v,_,y,k,A,E):L&6?ee(f,p,g,v,_,y,k,A,E):(L&64||L&128)&&w.process(f,p,g,v,_,y,k,A,E,B)}W!=null&&_?hn(W,f&&f.ref,y,p||f,!p):W==null&&f&&f.ref!=null&&hn(f.ref,null,y,f,!0)},F=(f,p,g,v)=>{if(f==null)s(p.el=a(p.children),g,v);else{const _=p.el=f.el;p.children!==f.children&&u(_,p.children)}},O=(f,p,g,v)=>{f==null?s(p.el=l(p.children||""),g,v):p.el=f.el},P=(f,p,g,v)=>{[f.el,f.anchor]=b(f.children,p,g,v,f.el,f.anchor)},T=({el:f,anchor:p},g,v)=>{let _;for(;f&&f!==p;)_=m(f),s(f,g,v),f=_;s(p,g,v)},I=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=m(f),o(f),f=g;o(p)},G=(f,p,g,v,_,y,k,A,E)=>{if(p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),f==null)oe(p,g,v,_,y,k,A,E);else{const w=f.el&&f.el._isVueCE?f.el:null;try{w&&w._beginPatch(),K(f,p,_,y,k,A,E)}finally{w&&w._endPatch()}}},oe=(f,p,g,v,_,y,k,A)=>{let E,w;const{props:W,shapeFlag:L,transition:H,dirs:U}=f;if(E=f.el=i(f.type,y,W&&W.is,W),L&8?c(E,f.children):L&16&&_e(f.children,E,null,v,_,bs(f,y),k,A),U&&It(f,null,v,"created"),Y(E,f,f.scopeId,k,v),W){for(const ae in W)ae!=="value"&&!un(ae)&&r(E,ae,null,W[ae],y,v);"value"in W&&r(E,"value",null,W.value,y),(w=W.onVnodeBeforeMount)&&et(w,v,f)}U&&It(f,null,v,"beforeMount");const z=Ra(_,H);z&&H.beforeEnter(E),s(E,p,g),((w=W&&W.onVnodeMounted)||z||U)&&$e(()=>{w&&et(w,v,f),z&&H.enter(E),U&&It(f,null,v,"mounted")},_)},Y=(f,p,g,v,_)=>{if(g&&h(f,g),v)for(let y=0;y<v.length;y++)h(f,v[y]);if(_){let y=_.subTree;if(p===y||Pi(y.type)&&(y.ssContent===p||y.ssFallback===p)){const k=_.vnode;Y(f,k,k.scopeId,k.slotScopeIds,_.parent)}}},_e=(f,p,g,v,_,y,k,A,E=0)=>{for(let w=E;w<f.length;w++){const W=f[w]=A?wt(f[w]):st(f[w]);S(null,W,p,g,v,_,y,k,A)}},K=(f,p,g,v,_,y,k)=>{const A=p.el=f.el;let{patchFlag:E,dynamicChildren:w,dirs:W}=p;E|=f.patchFlag&16;const L=f.props||ue,H=p.props||ue;let U;if(g&&Lt(g,!1),(U=H.onVnodeBeforeUpdate)&&et(U,g,p,f),W&&It(p,f,g,"beforeUpdate"),g&&Lt(g,!0),(L.innerHTML&&H.innerHTML==null||L.textContent&&H.textContent==null)&&c(A,""),w?Z(f.dynamicChildren,w,A,g,v,bs(p,_),y):k||te(f,p,A,null,g,v,bs(p,_),y,!1),E>0){if(E&16)le(A,L,H,g,_);else if(E&2&&L.class!==H.class&&r(A,"class",null,H.class,_),E&4&&r(A,"style",L.style,H.style,_),E&8){const z=p.dynamicProps;for(let ae=0;ae<z.length;ae++){const re=z[ae],Oe=L[re],Ie=H[re];(Ie!==Oe||re==="value")&&r(A,re,Oe,Ie,_,g)}}E&1&&f.children!==p.children&&c(A,p.children)}else!k&&w==null&&le(A,L,H,g,_);((U=H.onVnodeUpdated)||W)&&$e(()=>{U&&et(U,g,p,f),W&&It(p,f,g,"updated")},v)},Z=(f,p,g,v,_,y,k)=>{for(let A=0;A<p.length;A++){const E=f[A],w=p[A],W=E.el&&(E.type===pe||!Nt(E,w)||E.shapeFlag&198)?d(E.el):g;S(E,w,W,null,v,_,y,k,!0)}},le=(f,p,g,v,_)=>{if(p!==g){if(p!==ue)for(const y in p)!un(y)&&!(y in g)&&r(f,y,p[y],null,_,v);for(const y in g){if(un(y))continue;const k=g[y],A=p[y];k!==A&&y!=="value"&&r(f,y,A,k,_,v)}"value"in g&&r(f,"value",p.value,g.value,_)}},M=(f,p,g,v,_,y,k,A,E)=>{const w=p.el=f?f.el:a(""),W=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:U}=p;U&&(A=A?A.concat(U):U),f==null?(s(w,g,v),s(W,g,v),_e(p.children||[],g,W,_,y,k,A,E)):L>0&&L&64&&H&&f.dynamicChildren&&f.dynamicChildren.length===H.length?(Z(f.dynamicChildren,H,g,_,y,k,A),(p.key!=null||_&&p===_.subTree)&&Ai(f,p,!0)):te(f,p,g,W,_,y,k,A,E)},ee=(f,p,g,v,_,y,k,A,E)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?_.ctx.activate(p,g,v,k,E):ye(p,g,v,_,y,k,E):De(f,p,E)},ye=(f,p,g,v,_,y,k)=>{const A=f.component=Ba(f,v,_);if(ts(f)&&(A.ctx.renderer=B),Ha(A,!1,k),A.asyncDep){if(_&&_.registerDep(A,ge,k),!f.el){const E=A.subTree=Q(Pe);O(null,E,p,g),f.placeholder=E.el}}else ge(A,f,p,g,_,y,k)},De=(f,p,g)=>{const v=p.component=f.component;if(xa(f,p,g))if(v.asyncDep&&!v.asyncResolved){ie(v,p,g);return}else v.next=p,v.update();else p.el=f.el,v.vnode=p},ge=(f,p,g,v,_,y,k)=>{const A=()=>{if(f.isMounted){let{next:L,bu:H,u:U,parent:z,vnode:ae}=f;{const Ze=Ti(f);if(Ze){L&&(L.el=ae.el,ie(f,L,k)),Ze.asyncDep.then(()=>{f.isUnmounted||A()});return}}let re=L,Oe;Lt(f,!1),L?(L.el=ae.el,ie(f,L,k)):L=ae,H&&us(H),(Oe=L.props&&L.props.onVnodeBeforeUpdate)&&et(Oe,z,L,ae),Lt(f,!0);const Ie=Io(f),Qe=f.subTree;f.subTree=Ie,S(Qe,Ie,d(Qe.el),x(Qe),f,_,y),L.el=Ie.el,re===null&&_a(f,Ie.el),U&&$e(U,_),(Oe=L.props&&L.props.onVnodeUpdated)&&$e(()=>et(Oe,z,L,ae),_)}else{let L;const{el:H,props:U}=p,{bm:z,m:ae,parent:re,root:Oe,type:Ie}=f,Qe=mn(p);Lt(f,!1),z&&us(z),!Qe&&(L=U&&U.onVnodeBeforeMount)&&et(L,re,p),Lt(f,!0);{Oe.ce&&Oe.ce._def.shadowRoot!==!1&&Oe.ce._injectChildStyle(Ie);const Ze=f.subTree=Io(f);S(null,Ze,g,v,f,_,y),p.el=Ze.el}if(ae&&$e(ae,_),!Qe&&(L=U&&U.onVnodeMounted)){const Ze=p;$e(()=>et(L,re,Ze),_)}(p.shapeFlag&256||re&&mn(re.vnode)&&re.vnode.shapeFlag&256)&&f.a&&$e(f.a,_),f.isMounted=!0,p=g=v=null}};f.scope.on();const E=f.effect=new Pr(A);f.scope.off();const w=f.update=E.run.bind(E),W=f.job=E.runIfDirty.bind(E);W.i=f,W.id=f.uid,E.scheduler=()=>to(W),Lt(f,!0),w()},ie=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Ca(f,p.props,v,g),Ta(f,p.children,g),dt(),So(f),pt()},te=(f,p,g,v,_,y,k,A,E=!1)=>{const w=f&&f.children,W=f?f.shapeFlag:0,L=p.children,{patchFlag:H,shapeFlag:U}=p;if(H>0){if(H&128){gt(w,L,g,v,_,y,k,A,E);return}else if(H&256){it(w,L,g,v,_,y,k,A,E);return}}U&8?(W&16&&Be(w,_,y),L!==w&&c(g,L)):W&16?U&16?gt(w,L,g,v,_,y,k,A,E):Be(w,_,y,!0):(W&8&&c(g,""),U&16&&_e(L,g,v,_,y,k,A,E))},it=(f,p,g,v,_,y,k,A,E)=>{f=f||Yt,p=p||Yt;const w=f.length,W=p.length,L=Math.min(w,W);let H;for(H=0;H<L;H++){const U=p[H]=E?wt(p[H]):st(p[H]);S(f[H],U,g,null,_,y,k,A,E)}w>W?Be(f,_,y,!0,!1,L):_e(p,g,v,_,y,k,A,E,L)},gt=(f,p,g,v,_,y,k,A,E)=>{let w=0;const W=p.length;let L=f.length-1,H=W-1;for(;w<=L&&w<=H;){const U=f[w],z=p[w]=E?wt(p[w]):st(p[w]);if(Nt(U,z))S(U,z,g,null,_,y,k,A,E);else break;w++}for(;w<=L&&w<=H;){const U=f[L],z=p[H]=E?wt(p[H]):st(p[H]);if(Nt(U,z))S(U,z,g,null,_,y,k,A,E);else break;L--,H--}if(w>L){if(w<=H){const U=H+1,z=U<W?p[U].el:v;for(;w<=H;)S(null,p[w]=E?wt(p[w]):st(p[w]),g,z,_,y,k,A,E),w++}}else if(w>H)for(;w<=L;)Re(f[w],_,y,!0),w++;else{const U=w,z=w,ae=new Map;for(w=z;w<=H;w++){const Ne=p[w]=E?wt(p[w]):st(p[w]);Ne.key!=null&&ae.set(Ne.key,w)}let re,Oe=0;const Ie=H-z+1;let Qe=!1,Ze=0;const sn=new Array(Ie);for(w=0;w<Ie;w++)sn[w]=0;for(w=U;w<=L;w++){const Ne=f[w];if(Oe>=Ie){Re(Ne,_,y,!0);continue}let Xe;if(Ne.key!=null)Xe=ae.get(Ne.key);else for(re=z;re<=H;re++)if(sn[re-z]===0&&Nt(Ne,p[re])){Xe=re;break}Xe===void 0?Re(Ne,_,y,!0):(sn[Xe-z]=w+1,Xe>=Ze?Ze=Xe:Qe=!0,S(Ne,p[Xe],g,null,_,y,k,A,E),Oe++)}const vo=Qe?Oa(sn):Yt;for(re=vo.length-1,w=Ie-1;w>=0;w--){const Ne=z+w,Xe=p[Ne],yo=p[Ne+1],xo=Ne+1<W?yo.el||ki(yo):v;sn[w]===0?S(null,Xe,g,xo,_,y,k,A,E):Qe&&(re<0||w!==vo[re]?Je(Xe,g,xo,2):re--)}}},Je=(f,p,g,v,_=null)=>{const{el:y,type:k,transition:A,children:E,shapeFlag:w}=f;if(w&6){Je(f.component.subTree,p,g,v);return}if(w&128){f.suspense.move(p,g,v);return}if(w&64){k.move(f,p,g,B);return}if(k===pe){s(y,p,g);for(let L=0;L<E.length;L++)Je(E[L],p,g,v);s(f.anchor,p,g);return}if(k===Mn){T(f,p,g);return}if(v!==2&&w&1&&A)if(v===0)A.beforeEnter(y),s(y,p,g),$e(()=>A.enter(y),_);else{const{leave:L,delayLeave:H,afterLeave:U}=A,z=()=>{f.ctx.isUnmounted?o(y):s(y,p,g)},ae=()=>{y._isLeaving&&y[ut](!0),L(y,()=>{z(),U&&U()})};H?H(y,z,ae):ae()}else s(y,p,g)},Re=(f,p,g,v=!1,_=!1)=>{const{type:y,props:k,ref:A,children:E,dynamicChildren:w,shapeFlag:W,patchFlag:L,dirs:H,cacheIndex:U}=f;if(L===-2&&(_=!1),A!=null&&(dt(),hn(A,null,g,f,!0),pt()),U!=null&&(p.renderCache[U]=void 0),W&256){p.ctx.deactivate(f);return}const z=W&1&&H,ae=!mn(f);let re;if(ae&&(re=k&&k.onVnodeBeforeUnmount)&&et(re,p,f),W&6)Ot(f.component,g,v);else{if(W&128){f.suspense.unmount(g,v);return}z&&It(f,null,p,"beforeUnmount"),W&64?f.type.remove(f,p,g,B,v):w&&!w.hasOnce&&(y!==pe||L>0&&L&64)?Be(w,p,g,!1,!0):(y===pe&&L&384||!_&&W&16)&&Be(E,p,g),v&&Vt(f)}(ae&&(re=k&&k.onVnodeUnmounted)||z)&&$e(()=>{re&&et(re,p,f),z&&It(f,null,p,"unmounted")},g)},Vt=f=>{const{type:p,el:g,anchor:v,transition:_}=f;if(p===pe){Gt(g,v);return}if(p===Mn){I(f);return}const y=()=>{o(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:k,delayLeave:A}=_,E=()=>k(g,y);A?A(f.el,y,E):E()}else y()},Gt=(f,p)=>{let g;for(;f!==p;)g=m(f),o(f),f=g;o(p)},Ot=(f,p,g)=>{const{bum:v,scope:_,job:y,subTree:k,um:A,m:E,a:w}=f;Do(E),Do(w),v&&us(v),_.stop(),y&&(y.flags|=8,Re(k,f,p,g)),A&&$e(A,p),$e(()=>{f.isUnmounted=!0},p)},Be=(f,p,g,v=!1,_=!1,y=0)=>{for(let k=y;k<f.length;k++)Re(f[k],p,g,v,_)},x=f=>{if(f.shapeFlag&6)return x(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=m(f.anchor||f.el),g=p&&p[zl];return g?m(g):p};let D=!1;const R=(f,p,g)=>{let v;f==null?p._vnode&&(Re(p._vnode,null,null,!0),v=p._vnode.component):S(p._vnode||null,f,p,null,null,null,g),p._vnode=f,D||(D=!0,So(v),Yr(),D=!1)},B={p:S,um:Re,m:Je,r:Vt,mt:ye,mc:_e,pc:te,pbc:Z,n:x,o:e};return{render:R,hydrate:void 0,createApp:ha(R)}}function bs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Lt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ra(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ai(e,t,n=!1){const s=e.children,o=t.children;if(j(s)&&j(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=wt(o[r]),a.el=i.el),!n&&a.patchFlag!==-2&&Ai(i,a)),a.type===rs&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=r+(e.type===pe?1:0)),a.type===Pe&&!a.el&&(a.el=i.el)}}function Oa(e){const t=e.slice(),n=[0];let s,o,r,i,a;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<u?r=a+1:i=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Ti(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ti(t)}function Do(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ki(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ki(t.subTree):null}const Pi=e=>e.__isSuspense;function Ia(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):Vl(e)}const pe=Symbol.for("v-fgt"),rs=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),Mn=Symbol.for("v-stc"),bn=[];let Fe=null;function N(e=!1){bn.push(Fe=e?null:[])}function La(){bn.pop(),Fe=bn[bn.length-1]||null}let Cn=1;function jn(e,t=!1){Cn+=e,e<0&&Fe&&t&&(Fe.hasOnce=!0)}function Ri(e){return e.dynamicChildren=Cn>0?Fe||Yt:null,La(),Cn>0&&Fe&&Fe.push(e),e}function $(e,t,n,s,o,r){return Ri(C(e,t,n,s,o,r,!0))}function Un(e,t,n,s,o){return Ri(Q(e,t,n,s,o,!0))}function Vn(e){return e?e.__v_isVNode===!0:!1}function Nt(e,t){return e.type===t.type&&e.key===t.key}const Oi=({key:e})=>e??null,Dn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||Se(e)||V(e)?{i:Ve,r:e,k:t,f:!!n}:e:null);function C(e,t=null,n=null,s=0,o=null,r=e===pe?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Oi(t),ref:t&&Dn(t),scopeId:Qr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ve};return a?(lo(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),Cn>0&&!i&&Fe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fe.push(l),l}const Q=Ma;function Ma(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===di)&&(e=Pe),Vn(e)){const a=Pt(e,t,!0);return n&&lo(a,n),Cn>0&&!r&&Fe&&(a.shapeFlag&6?Fe[Fe.indexOf(e)]=a:Fe.push(a)),a.patchFlag=-2,a}if(Ga(e)&&(e=e.__vccOpts),t){t=Da(t);let{class:a,style:l}=t;a&&!me(a)&&(t.class=jt(a)),fe(l)&&(eo(l)&&!j(l)&&(l=be({},l)),t.style=Et(l))}const i=me(e)?1:Pi(e)?128:ei(e)?64:fe(e)?4:V(e)?2:0;return C(e,t,n,s,o,i,r,!0)}function Da(e){return e?eo(e)||xi(e)?be({},e):e:null}function Pt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:a,transition:l}=e,u=t?Na(o||{},t):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Oi(u),ref:t&&t.ref?n&&r?j(r)?r.concat(Dn(t)):[r,Dn(t)]:Dn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&Ht(c,l.clone(c)),c}function Tt(e=" ",t=0){return Q(rs,null,e,t)}function io(e,t){const n=Q(Mn,null,e);return n.staticCount=t,n}function Me(e="",t=!1){return t?(N(),Un(Pe,null,e)):Q(Pe,null,e)}function st(e){return e==null||typeof e=="boolean"?Q(Pe):j(e)?Q(pe,null,e.slice()):Vn(e)?wt(e):Q(rs,null,String(e))}function wt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function lo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),lo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!xi(t)?t._ctx=Ve:o===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Ve},n=32):(t=String(t),s&64?(n=16,t=[Tt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Na(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=jt([t.class,s.class]));else if(o==="style")t.style=Et([t.style,s.style]);else if(zn(o)){const r=t[o],i=s[o];i&&r!==i&&!(j(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function et(e,t,n,s=null){ze(e,t,7,[n,s])}const $a=gi();let Fa=0;function Ba(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||$a,r={uid:Fa++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wi(s,o),emitsOptions:bi(s,o),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ga.bind(null,r),e.ce&&e.ce(r),r}let Ce=null;const ao=()=>Ce||Ve;let Gn,Ns;{const e=Zn(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};Gn=t("__VUE_INSTANCE_SETTERS__",n=>Ce=n),Ns=t("__VUE_SSR_SETTERS__",n=>Sn=n)}const kn=e=>{const t=Ce;return Gn(e),e.scope.on(),()=>{e.scope.off(),Gn(t)}},No=()=>{Ce&&Ce.scope.off(),Gn(null)};function Ii(e){return e.vnode.shapeFlag&4}let Sn=!1;function Ha(e,t=!1,n=!1){t&&Ns(t);const{props:s,children:o}=e.vnode,r=Ii(e);wa(e,s,r,t),Aa(e,o,n||t);const i=r?Wa(e,t):void 0;return t&&Ns(!1),i}function Wa(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,la);const{setup:s}=n;if(s){dt();const o=e.setupContext=s.length>1?Ua(e):null,r=kn(e),i=Tn(s,e,0,[e.props,o]),a=wr(i);if(pt(),r(),(a||e.sp)&&!mn(e)&&li(e),a){if(i.then(No,No),t)return i.then(l=>{$o(e,l)}).catch(l=>{es(l,e,0)});e.asyncDep=i}else $o(e,i)}else Li(e)}function $o(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Gr(t)),Li(e)}function Li(e,t,n){const s=e.type;e.render||(e.render=s.render||ot);{const o=kn(e);dt();try{aa(e)}finally{pt(),o()}}}const ja={get(e,t){return we(e,"get",""),e[t]}};function Ua(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ja),slots:e.slots,emit:e.emit,expose:t}}function co(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Gr(Ml(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gn)return gn[n](e)},has(t,n){return n in t||n in gn}})):e.proxy}function Va(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function Ga(e){return V(e)&&"__vccOpts"in e}const de=(e,t)=>Bl(e,t,Sn);function uo(e,t,n){try{jn(-1);const s=arguments.length;return s===2?fe(t)&&!j(t)?Vn(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Vn(n)&&(n=[n]),Q(e,t,n))}finally{jn(1)}}const Ka="3.5.27";let $s;const Fo=typeof window<"u"&&window.trustedTypes;if(Fo)try{$s=Fo.createPolicy("vue",{createHTML:e=>e})}catch{}const Mi=$s?e=>$s.createHTML(e):e=>e,qa="http://www.w3.org/2000/svg",za="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,Bo=ct&&ct.createElement("template"),Ya={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?ct.createElementNS(qa,e):t==="mathml"?ct.createElementNS(za,e):n?ct.createElement(e,{is:n}):ct.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Bo.innerHTML=Mi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Bo.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},bt="transition",rn="animation",en=Symbol("_vtc"),Di={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ni=be({},ni,Di),Ja=e=>(e.displayName="Transition",e.props=Ni,e),fo=Ja((e,{slots:t})=>uo(Jl,$i(e),t)),Mt=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ho=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function $i(e){const t={};for(const M in e)M in Di||(t[M]=e[M]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:u=i,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,b=Qa(o),S=b&&b[0],F=b&&b[1],{onBeforeEnter:O,onEnter:P,onEnterCancelled:T,onLeave:I,onLeaveCancelled:G,onBeforeAppear:oe=O,onAppear:Y=P,onAppearCancelled:_e=T}=t,K=(M,ee,ye,De)=>{M._enterCancelled=De,yt(M,ee?c:a),yt(M,ee?u:i),ye&&ye()},Z=(M,ee)=>{M._isLeaving=!1,yt(M,d),yt(M,h),yt(M,m),ee&&ee()},le=M=>(ee,ye)=>{const De=M?Y:P,ge=()=>K(ee,M,ye);Mt(De,[ee,ge]),Wo(()=>{yt(ee,M?l:r),tt(ee,M?c:a),Ho(De)||jo(ee,s,S,ge)})};return be(t,{onBeforeEnter(M){Mt(O,[M]),tt(M,r),tt(M,i)},onBeforeAppear(M){Mt(oe,[M]),tt(M,l),tt(M,u)},onEnter:le(!1),onAppear:le(!0),onLeave(M,ee){M._isLeaving=!0;const ye=()=>Z(M,ee);tt(M,d),M._enterCancelled?(tt(M,m),Fs(M)):(Fs(M),tt(M,m)),Wo(()=>{M._isLeaving&&(yt(M,d),tt(M,h),Ho(I)||jo(M,s,F,ye))}),Mt(I,[M,ye])},onEnterCancelled(M){K(M,!1,void 0,!0),Mt(T,[M])},onAppearCancelled(M){K(M,!0,void 0,!0),Mt(_e,[M])},onLeaveCancelled(M){Z(M),Mt(G,[M])}})}function Qa(e){if(e==null)return null;if(fe(e))return[vs(e.enter),vs(e.leave)];{const t=vs(e);return[t,t]}}function vs(e){return ll(e)}function tt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[en]||(e[en]=new Set)).add(t)}function yt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[en];n&&(n.delete(t),n.size||(e[en]=void 0))}function Wo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Za=0;function jo(e,t,n,s){const o=e._endId=++Za,r=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:a,propCount:l}=Fi(e,t);if(!i)return s();const u=i+"end";let c=0;const d=()=>{e.removeEventListener(u,m),r()},m=h=>{h.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},a+1),e.addEventListener(u,m)}function Fi(e,t){const n=window.getComputedStyle(e),s=b=>(n[b]||"").split(", "),o=s(`${bt}Delay`),r=s(`${bt}Duration`),i=Uo(o,r),a=s(`${rn}Delay`),l=s(`${rn}Duration`),u=Uo(a,l);let c=null,d=0,m=0;t===bt?i>0&&(c=bt,d=i,m=r.length):t===rn?u>0&&(c=rn,d=u,m=l.length):(d=Math.max(i,u),c=d>0?i>u?bt:rn:null,m=c?c===bt?r.length:l.length:0);const h=c===bt&&/\b(?:transform|all)(?:,|$)/.test(s(`${bt}Property`).toString());return{type:c,timeout:d,propCount:m,hasTransform:h}}function Uo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Vo(n)+Vo(e[s])))}function Vo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Fs(e){return(e?e.ownerDocument:document).body.offsetHeight}function Xa(e,t,n){const s=e[en];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Go=Symbol("_vod"),ec=Symbol("_vsh"),tc=Symbol(""),nc=/(?:^|;)\s*display\s*:/;function sc(e,t,n){const s=e.style,o=me(n);let r=!1;if(n&&!o){if(t)if(me(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Nn(s,a,"")}else for(const i in t)n[i]==null&&Nn(s,i,"");for(const i in n)i==="display"&&(r=!0),Nn(s,i,n[i])}else if(o){if(t!==n){const i=s[tc];i&&(n+=";"+i),s.cssText=n,r=nc.test(n)}}else t&&e.removeAttribute("style");Go in e&&(e[Go]=r?s.display:"",e[ec]&&(s.display="none"))}const Ko=/\s*!important$/;function Nn(e,t,n){if(j(n))n.forEach(s=>Nn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=oc(e,t);Ko.test(n)?e.setProperty(Wt(s),n.replace(Ko,""),"important"):e[s]=n}}const qo=["Webkit","Moz","ms"],ys={};function oc(e,t){const n=ys[t];if(n)return n;let s=Ue(t);if(s!=="filter"&&s in e)return ys[t]=s;s=Qn(s);for(let o=0;o<qo.length;o++){const r=qo[o]+s;if(r in e)return ys[t]=r}return t}const zo="http://www.w3.org/1999/xlink";function Yo(e,t,n,s,o,r=pl(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(zo,t.slice(6,t.length)):e.setAttributeNS(zo,t,n):n==null||r&&!Ar(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Rt(n)?String(n):n)}function Jo(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Mi(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ar(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function rc(e,t,n,s){e.addEventListener(t,n,s)}function ic(e,t,n,s){e.removeEventListener(t,n,s)}const Qo=Symbol("_vei");function lc(e,t,n,s,o=null){const r=e[Qo]||(e[Qo]={}),i=r[t];if(s&&i)i.value=s;else{const[a,l]=ac(t);if(s){const u=r[t]=fc(s,o);rc(e,a,u,l)}else i&&(ic(e,a,i,l),r[t]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function ac(e){let t;if(Zo.test(e)){t={};let s;for(;s=e.match(Zo);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Wt(e.slice(2)),t]}let xs=0;const cc=Promise.resolve(),uc=()=>xs||(cc.then(()=>xs=0),xs=Date.now());function fc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ze(dc(s,n.value),t,5,[s])};return n.value=e,n.attached=uc(),n}function dc(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Xo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,pc=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?Xa(e,s,i):t==="style"?sc(e,n,s):zn(t)?Gs(t)||lc(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hc(e,t,s,i))?(Jo(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Yo(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!me(s))?Jo(e,Ue(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Yo(e,t,s,i))};function hc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Xo(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Xo(t)&&me(n)?!1:t in e}const Bi=new WeakMap,Hi=new WeakMap,Kn=Symbol("_moveCb"),er=Symbol("_enterCb"),mc=e=>(delete e.props.mode,e),gc=mc({name:"TransitionGroup",props:be({},Ni,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ao(),s=ti();let o,r;return ci(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!_c(o[0].el,n.vnode.el,i)){o=[];return}o.forEach(vc),o.forEach(yc);const a=o.filter(xc);Fs(n.vnode.el),a.forEach(l=>{const u=l.el,c=u.style;tt(u,i),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[Kn]=m=>{m&&m.target!==u||(!m||m.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[Kn]=null,yt(u,i))};u.addEventListener("transitionend",d)}),o=[]}),()=>{const i=J(e),a=$i(i);let l=i.tag||pe;if(o=[],r)for(let u=0;u<r.length;u++){const c=r[u];c.el&&c.el instanceof Element&&(o.push(c),Ht(c,wn(c,a,s,n)),Bi.set(c,{left:c.el.offsetLeft,top:c.el.offsetTop}))}r=t.default?no(t.default()):[];for(let u=0;u<r.length;u++){const c=r[u];c.key!=null&&Ht(c,wn(c,a,s,n))}return Q(l,null,r)}}}),bc=gc;function vc(e){const t=e.el;t[Kn]&&t[Kn](),t[er]&&t[er]()}function yc(e){Hi.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function xc(e){const t=Bi.get(e),n=Hi.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",e}}function _c(e,t,n){const s=e.cloneNode(),o=e[en];o&&o.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=Fi(s);return r.removeChild(s),i}const wc=be({patchProp:pc},Ya);let tr;function Cc(){return tr||(tr=ka(wc))}const Sc=((...e)=>{const t=Cc().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Ac(s);if(!o)return;const r=t._component;!V(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,Ec(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t});function Ec(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ac(e){return me(e)?document.querySelector(e):e}const zt=typeof document<"u";function Wi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Tc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Wi(e.default)}const ne=Object.assign;function _s(e,t){const n={};for(const s in t){const o=t[s];n[s]=Ye(o)?o.map(e):e(o)}return n}const vn=()=>{},Ye=Array.isArray;function nr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const ji=/#/g,kc=/&/g,Pc=/\//g,Rc=/=/g,Oc=/\?/g,Ui=/\+/g,Ic=/%5B/g,Lc=/%5D/g,Vi=/%5E/g,Mc=/%60/g,Gi=/%7B/g,Dc=/%7C/g,Ki=/%7D/g,Nc=/%20/g;function po(e){return e==null?"":encodeURI(""+e).replace(Dc,"|").replace(Ic,"[").replace(Lc,"]")}function $c(e){return po(e).replace(Gi,"{").replace(Ki,"}").replace(Vi,"^")}function Bs(e){return po(e).replace(Ui,"%2B").replace(Nc,"+").replace(ji,"%23").replace(kc,"%26").replace(Mc,"`").replace(Gi,"{").replace(Ki,"}").replace(Vi,"^")}function Fc(e){return Bs(e).replace(Rc,"%3D")}function Bc(e){return po(e).replace(ji,"%23").replace(Oc,"%3F")}function Hc(e){return Bc(e).replace(Pc,"%2F")}function En(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Wc=/\/$/,jc=e=>e.replace(Wc,"");function ws(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(s=t.slice(0,l),r=t.slice(l,a>0?a:t.length),o=e(r.slice(1))),a>=0&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=Kc(s??t,n),{fullPath:s+r+i,path:s,query:o,hash:En(i)}}function Uc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function sr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Vc(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&tn(t.matched[s],n.matched[o])&&qi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Gc(e[n],t[n]))return!1;return!0}function Gc(e,t){return Ye(e)?or(e,t):Ye(t)?or(t,e):e?.valueOf()===t?.valueOf()}function or(e,t){return Ye(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Kc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,a;for(i=0;i<s.length;i++)if(a=s[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Hs=(function(e){return e.pop="pop",e.push="push",e})({}),Cs=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function qc(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),jc(e)}const zc=/^[^#]+#/;function Yc(e,t){return e.replace(zc,"#")+t}function Jc(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const is=()=>({left:window.scrollX,top:window.scrollY});function Qc(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Jc(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function rr(e,t){return(history.state?history.state.position-t:-1)+e}const Ws=new Map;function Zc(e,t){Ws.set(e,t)}function Xc(e){const t=Ws.get(e);return Ws.delete(e),t}function eu(e){return typeof e=="string"||e&&typeof e=="object"}function zi(e){return typeof e=="string"||typeof e=="symbol"}let he=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Yi=Symbol("");he.MATCHER_NOT_FOUND+"",he.NAVIGATION_GUARD_REDIRECT+"",he.NAVIGATION_ABORTED+"",he.NAVIGATION_CANCELLED+"",he.NAVIGATION_DUPLICATED+"";function nn(e,t){return ne(new Error,{type:e,[Yi]:!0},t)}function at(e,t){return e instanceof Error&&Yi in e&&(t==null||!!(e.type&t))}const tu=["params","query","hash"];function nu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of tu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function su(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(Ui," "),r=o.indexOf("="),i=En(r<0?o:o.slice(0,r)),a=r<0?null:En(o.slice(r+1));if(i in t){let l=t[i];Ye(l)||(l=t[i]=[l]),l.push(a)}else t[i]=a}return t}function ir(e){let t="";for(let n in e){const s=e[n];if(n=Fc(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ye(s)?s.map(o=>o&&Bs(o)):[s&&Bs(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function ou(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ye(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const ru=Symbol(""),lr=Symbol(""),ls=Symbol(""),ho=Symbol(""),js=Symbol("");function ln(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ct(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const u=m=>{m===!1?l(nn(he.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?l(m):eu(m)?l(nn(he.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(i&&s.enterCallbacks[o]===i&&typeof m=="function"&&i.push(m),a())},c=r(()=>e.call(s&&s.instances[o],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(m=>l(m))})}function Ss(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(Wi(l)){const u=(l.__vccOpts||l)[t];u&&r.push(Ct(u,n,s,i,a,o))}else{let u=l();r.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=Tc(c)?c.default:c;i.mods[a]=c,i.components[a]=d;const m=(d.__vccOpts||d)[t];return m&&Ct(m,n,s,i,a,o)()}))}}return r}function iu(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(u=>tn(u,a))?s.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(u=>tn(u,l))||o.push(l))}return[n,s,o]}let lu=()=>location.protocol+"//"+location.host;function Ji(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(i);return a[0]!=="/"&&(a="/"+a),sr(a,"")}return sr(n,e)+s+o}function au(e,t,n,s){let o=[],r=[],i=null;const a=({state:m})=>{const h=Ji(e,location),b=n.value,S=t.value;let F=0;if(m){if(n.value=h,t.value=m,i&&i===b){i=null;return}F=S?m.position-S.position:0}else s(h);o.forEach(O=>{O(n.value,b,{delta:F,type:Hs.pop,direction:F?F>0?Cs.forward:Cs.back:Cs.unknown})})};function l(){i=n.value}function u(m){o.push(m);const h=()=>{const b=o.indexOf(m);b>-1&&o.splice(b,1)};return r.push(h),h}function c(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(ne({},m.state,{scroll:is()}),"")}}function d(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function ar(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?is():null}}function cu(e){const{history:t,location:n}=window,s={value:Ji(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,u,c){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:lu()+e+l;try{t[c?"replaceState":"pushState"](u,"",m),o.value=u}catch(h){console.error(h),n[c?"replace":"assign"](m)}}function i(l,u){r(l,ne({},t.state,ar(o.value.back,l,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=l}function a(l,u){const c=ne({},o.value,t.state,{forward:l,scroll:is()});r(c.current,c,!0),r(l,ne({},ar(s.value,l,null),{position:c.position+1},u),!1),s.value=l}return{location:s,state:o,push:a,replace:i}}function uu(e){e=qc(e);const t=cu(e),n=au(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=ne({location:"",base:e,go:s,createHref:Yc.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let $t=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ve=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ve||{});const fu={type:$t.Static,value:""},du=/[a-zA-Z0-9_]/;function pu(e){if(!e)return[[]];if(e==="/")return[[fu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=ve.Static,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,l,u="",c="";function d(){u&&(n===ve.Static?r.push({type:$t.Static,value:u}):n===ve.Param||n===ve.ParamRegExp||n===ve.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:$t.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==ve.ParamRegExp){s=n,n=ve.EscapeNext;continue}switch(n){case ve.Static:l==="/"?(u&&d(),i()):l===":"?(d(),n=ve.Param):m();break;case ve.EscapeNext:m(),n=s;break;case ve.Param:l==="("?n=ve.ParamRegExp:du.test(l)?m():(d(),n=ve.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case ve.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=ve.ParamRegExpEnd:c+=l;break;case ve.ParamRegExpEnd:d(),n=ve.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===ve.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),o}const cr="[^/]+?",hu={sensitive:!1,strict:!1,start:!0,end:!0};var Ae=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ae||{});const mu=/[.+*?^${}()[\]/\\]/g;function gu(e,t){const n=ne({},hu,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const c=u.length?[]:[Ae.Root];n.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const m=u[d];let h=Ae.Segment+(n.sensitive?Ae.BonusCaseSensitive:0);if(m.type===$t.Static)d||(o+="/"),o+=m.value.replace(mu,"\\$&"),h+=Ae.Static;else if(m.type===$t.Param){const{value:b,repeatable:S,optional:F,regexp:O}=m;r.push({name:b,repeatable:S,optional:F});const P=O||cr;if(P!==cr){h+=Ae.BonusCustomRegExp;try{`${P}`}catch(I){throw new Error(`Invalid custom RegExp for param "${b}" (${P}): `+I.message)}}let T=S?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(T=F&&u.length<2?`(?:/${T})`:"/"+T),F&&(T+="?"),o+=T,h+=Ae.Dynamic,F&&(h+=Ae.BonusOptional),S&&(h+=Ae.BonusRepeatable),P===".*"&&(h+=Ae.BonusWildcard)}c.push(h)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Ae.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const c=u.match(i),d={};if(!c)return null;for(let m=1;m<c.length;m++){const h=c[m]||"",b=r[m-1];d[b.name]=h&&b.repeatable?h.split("/"):h}return d}function l(u){let c="",d=!1;for(const m of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const h of m)if(h.type===$t.Static)c+=h.value;else if(h.type===$t.Param){const{value:b,repeatable:S,optional:F}=h,O=b in u?u[b]:"";if(Ye(O)&&!S)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const P=Ye(O)?O.join("/"):O;if(!P)if(F)m.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${b}"`);c+=P}}return c||"/"}return{re:i,score:s,keys:r,parse:a,stringify:l}}function bu(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Ae.Static+Ae.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ae.Static+Ae.Segment?1:-1:0}function Qi(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=bu(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(ur(s))return 1;if(ur(o))return-1}return o.length-s.length}function ur(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const vu={strict:!1,end:!0,sensitive:!1};function yu(e,t,n){const s=gu(pu(e.path),n),o=ne(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function xu(e,t){const n=[],s=new Map;t=nr(vu,t);function o(d){return s.get(d)}function r(d,m,h){const b=!h,S=dr(d);S.aliasOf=h&&h.record;const F=nr(t,d),O=[S];if("alias"in d){const I=typeof d.alias=="string"?[d.alias]:d.alias;for(const G of I)O.push(dr(ne({},S,{components:h?h.record.components:S.components,path:G,aliasOf:h?h.record:S})))}let P,T;for(const I of O){const{path:G}=I;if(m&&G[0]!=="/"){const oe=m.record.path,Y=oe[oe.length-1]==="/"?"":"/";I.path=m.record.path+(G&&Y+G)}if(P=yu(I,m,F),h?h.alias.push(P):(T=T||P,T!==P&&T.alias.push(P),b&&d.name&&!pr(P)&&i(d.name)),Zi(P)&&l(P),S.children){const oe=S.children;for(let Y=0;Y<oe.length;Y++)r(oe[Y],P,h&&h.children[Y])}h=h||P}return T?()=>{i(T)}:vn}function i(d){if(zi(d)){const m=s.get(d);m&&(s.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return n}function l(d){const m=Cu(d,n);n.splice(m,0,d),d.record.name&&!pr(d)&&s.set(d.record.name,d)}function u(d,m){let h,b={},S,F;if("name"in d&&d.name){if(h=s.get(d.name),!h)throw nn(he.MATCHER_NOT_FOUND,{location:d});F=h.record.name,b=ne(fr(m.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&fr(d.params,h.keys.map(T=>T.name))),S=h.stringify(b)}else if(d.path!=null)S=d.path,h=n.find(T=>T.re.test(S)),h&&(b=h.parse(S),F=h.record.name);else{if(h=m.name?s.get(m.name):n.find(T=>T.re.test(m.path)),!h)throw nn(he.MATCHER_NOT_FOUND,{location:d,currentLocation:m});F=h.record.name,b=ne({},m.params,d.params),S=h.stringify(b)}const O=[];let P=h;for(;P;)O.unshift(P.record),P=P.parent;return{name:F,path:S,params:b,matched:O,meta:wu(O)}}e.forEach(d=>r(d));function c(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:i,clearRoutes:c,getRoutes:a,getRecordMatcher:o}}function fr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function dr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:_u(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function _u(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function pr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function wu(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function Cu(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;Qi(e,t[r])<0?s=r:n=r+1}const o=Su(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function Su(e){let t=e;for(;t=t.parent;)if(Zi(t)&&Qi(e,t)===0)return t}function Zi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function hr(e){const t=Ke(ls),n=Ke(ho),s=de(()=>{const l=We(e.to);return t.resolve(l)}),o=de(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const m=d.findIndex(tn.bind(null,c));if(m>-1)return m;const h=mr(l[u-2]);return u>1&&mr(c)===h&&d[d.length-1].path!==h?d.findIndex(tn.bind(null,l[u-2])):m}),r=de(()=>o.value>-1&&Pu(n.params,s.value.params)),i=de(()=>o.value>-1&&o.value===n.matched.length-1&&qi(n.params,s.value.params));function a(l={}){if(ku(l)){const u=t[We(e.replace)?"replace":"push"](We(e.to)).catch(vn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:de(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}function Eu(e){return e.length===1?e[0]:e}const Au=ii({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:hr,setup(e,{slots:t}){const n=An(hr(e)),{options:s}=Ke(ls),o=de(()=>({[gr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[gr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&Eu(t.default(n));return e.custom?r:uo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Tu=Au;function ku(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Pu(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Ye(o)||o.length!==s.length||s.some((r,i)=>r.valueOf()!==o[i].valueOf()))return!1}return!0}function mr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const gr=(e,t,n)=>e??t??n,Ru=ii({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ke(js),o=de(()=>e.route||s.value),r=Ke(lr,0),i=de(()=>{let u=We(r);const{matched:c}=o.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),a=de(()=>o.value.matched[i.value]);Ln(lr,de(()=>i.value+1)),Ln(ru,a),Ln(js,o);const l=ke();return pn(()=>[l.value,a.value,e.name],([u,c,d],[m,h,b])=>{c&&(c.instances[d]=u,h&&h!==c&&u&&u===m&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),u&&c&&(!h||!tn(c,h)||!m)&&(c.enterCallbacks[d]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=o.value,c=e.name,d=a.value,m=d&&d.components[c];if(!m)return br(n.default,{Component:m,route:u});const h=d.props[c],b=h?h===!0?u.params:typeof h=="function"?h(u):h:null,F=uo(m,ne({},b,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return br(n.default,{Component:F,route:u})||F}}});function br(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ou=Ru;function Iu(e){const t=xu(e.routes,e),n=e.parseQuery||su,s=e.stringifyQuery||ir,o=e.history,r=ln(),i=ln(),a=ln(),l=Dl(vt);let u=vt;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=_s.bind(null,x=>""+x),d=_s.bind(null,Hc),m=_s.bind(null,En);function h(x,D){let R,B;return zi(x)?(R=t.getRecordMatcher(x),B=D):B=x,t.addRoute(B,R)}function b(x){const D=t.getRecordMatcher(x);D&&t.removeRoute(D)}function S(){return t.getRoutes().map(x=>x.record)}function F(x){return!!t.getRecordMatcher(x)}function O(x,D){if(D=ne({},D||l.value),typeof x=="string"){const g=ws(n,x,D.path),v=t.resolve({path:g.path},D),_=o.createHref(g.fullPath);return ne(g,v,{params:m(v.params),hash:En(g.hash),redirectedFrom:void 0,href:_})}let R;if(x.path!=null)R=ne({},x,{path:ws(n,x.path,D.path).path});else{const g=ne({},x.params);for(const v in g)g[v]==null&&delete g[v];R=ne({},x,{params:d(g)}),D.params=d(D.params)}const B=t.resolve(R,D),q=x.hash||"";B.params=c(m(B.params));const f=Uc(s,ne({},x,{hash:$c(q),path:B.path})),p=o.createHref(f);return ne({fullPath:f,hash:q,query:s===ir?ou(x.query):x.query||{}},B,{redirectedFrom:void 0,href:p})}function P(x){return typeof x=="string"?ws(n,x,l.value.path):ne({},x)}function T(x,D){if(u!==x)return nn(he.NAVIGATION_CANCELLED,{from:D,to:x})}function I(x){return Y(x)}function G(x){return I(ne(P(x),{replace:!0}))}function oe(x,D){const R=x.matched[x.matched.length-1];if(R&&R.redirect){const{redirect:B}=R;let q=typeof B=="function"?B(x,D):B;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=P(q):{path:q},q.params={}),ne({query:x.query,hash:x.hash,params:q.path!=null?{}:x.params},q)}}function Y(x,D){const R=u=O(x),B=l.value,q=x.state,f=x.force,p=x.replace===!0,g=oe(R,B);if(g)return Y(ne(P(g),{state:typeof g=="object"?ne({},q,g.state):q,force:f,replace:p}),D||R);const v=R;v.redirectedFrom=D;let _;return!f&&Vc(s,B,R)&&(_=nn(he.NAVIGATION_DUPLICATED,{to:v,from:B}),Je(B,B,!0,!1)),(_?Promise.resolve(_):Z(v,B)).catch(y=>at(y)?at(y,he.NAVIGATION_GUARD_REDIRECT)?y:gt(y):te(y,v,B)).then(y=>{if(y){if(at(y,he.NAVIGATION_GUARD_REDIRECT))return Y(ne({replace:p},P(y.to),{state:typeof y.to=="object"?ne({},q,y.to.state):q,force:f}),D||v)}else y=M(v,B,!0,p,q);return le(v,B,y),y})}function _e(x,D){const R=T(x,D);return R?Promise.reject(R):Promise.resolve()}function K(x){const D=Gt.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(x):x()}function Z(x,D){let R;const[B,q,f]=iu(x,D);R=Ss(B.reverse(),"beforeRouteLeave",x,D);for(const g of B)g.leaveGuards.forEach(v=>{R.push(Ct(v,x,D))});const p=_e.bind(null,x,D);return R.push(p),Be(R).then(()=>{R=[];for(const g of r.list())R.push(Ct(g,x,D));return R.push(p),Be(R)}).then(()=>{R=Ss(q,"beforeRouteUpdate",x,D);for(const g of q)g.updateGuards.forEach(v=>{R.push(Ct(v,x,D))});return R.push(p),Be(R)}).then(()=>{R=[];for(const g of f)if(g.beforeEnter)if(Ye(g.beforeEnter))for(const v of g.beforeEnter)R.push(Ct(v,x,D));else R.push(Ct(g.beforeEnter,x,D));return R.push(p),Be(R)}).then(()=>(x.matched.forEach(g=>g.enterCallbacks={}),R=Ss(f,"beforeRouteEnter",x,D,K),R.push(p),Be(R))).then(()=>{R=[];for(const g of i.list())R.push(Ct(g,x,D));return R.push(p),Be(R)}).catch(g=>at(g,he.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function le(x,D,R){a.list().forEach(B=>K(()=>B(x,D,R)))}function M(x,D,R,B,q){const f=T(x,D);if(f)return f;const p=D===vt,g=zt?history.state:{};R&&(B||p?o.replace(x.fullPath,ne({scroll:p&&g&&g.scroll},q)):o.push(x.fullPath,q)),l.value=x,Je(x,D,R,p),gt()}let ee;function ye(){ee||(ee=o.listen((x,D,R)=>{if(!Ot.listening)return;const B=O(x),q=oe(B,Ot.currentRoute.value);if(q){Y(ne(q,{replace:!0,force:!0}),B).catch(vn);return}u=B;const f=l.value;zt&&Zc(rr(f.fullPath,R.delta),is()),Z(B,f).catch(p=>at(p,he.NAVIGATION_ABORTED|he.NAVIGATION_CANCELLED)?p:at(p,he.NAVIGATION_GUARD_REDIRECT)?(Y(ne(P(p.to),{force:!0}),B).then(g=>{at(g,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&!R.delta&&R.type===Hs.pop&&o.go(-1,!1)}).catch(vn),Promise.reject()):(R.delta&&o.go(-R.delta,!1),te(p,B,f))).then(p=>{p=p||M(B,f,!1),p&&(R.delta&&!at(p,he.NAVIGATION_CANCELLED)?o.go(-R.delta,!1):R.type===Hs.pop&&at(p,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),le(B,f,p)}).catch(vn)}))}let De=ln(),ge=ln(),ie;function te(x,D,R){gt(x);const B=ge.list();return B.length?B.forEach(q=>q(x,D,R)):console.error(x),Promise.reject(x)}function it(){return ie&&l.value!==vt?Promise.resolve():new Promise((x,D)=>{De.add([x,D])})}function gt(x){return ie||(ie=!x,ye(),De.list().forEach(([D,R])=>x?R(x):D()),De.reset()),x}function Je(x,D,R,B){const{scrollBehavior:q}=e;if(!zt||!q)return Promise.resolve();const f=!R&&Xc(rr(x.fullPath,0))||(B||!R)&&history.state&&history.state.scroll||null;return qr().then(()=>q(x,D,f)).then(p=>p&&Qc(p)).catch(p=>te(p,x,D))}const Re=x=>o.go(x);let Vt;const Gt=new Set,Ot={currentRoute:l,listening:!0,addRoute:h,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:S,resolve:O,options:e,push:I,replace:G,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:ge.add,isReady:it,install(x){x.component("RouterLink",Tu),x.component("RouterView",Ou),x.config.globalProperties.$router=Ot,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>We(l)}),zt&&!Vt&&l.value===vt&&(Vt=!0,I(o.location).catch(B=>{}));const D={};for(const B in vt)Object.defineProperty(D,B,{get:()=>l.value[B],enumerable:!0});x.provide(ls,Ot),x.provide(ho,Ur(D)),x.provide(js,l);const R=x.unmount;Gt.add(x),x.unmount=function(){Gt.delete(x),Gt.size<1&&(u=vt,ee&&ee(),ee=null,l.value=vt,Vt=!1,ie=!1),R()}}};function Be(x){return x.reduce((D,R)=>D.then(()=>K(R)),Promise.resolve())}return Ot}function mo(){return Ke(ls)}function Xi(e){return Ke(ho)}const Lu={__name:"App",setup(e){const t=mo(),n=ke(!0);return t.isReady().then(()=>{setTimeout(()=>{n.value=!1},100)}),(s,o)=>{const r=so("router-view");return N(),Un(r,null,{default:kt(({Component:i,route:a})=>[Q(fo,{name:n.value?"":"page",mode:"out-in"},{default:kt(()=>[(N(),Un(ia(i),{key:a.path}))]),_:2},1032,["name"])]),_:1})}}},xe=An({discordUser:null,spotify:null,discordStatus:"offline",discordStatusColor:"text-catppuccin-subtle",editorActivity:null,isConnected:!1,isLoading:!0});class Mu{constructor(){this.ws=null,this.heartbeat=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.maxAttempts=5,this.userId="766897363050037248",this.isConnecting=!1}connect(){if(!(this.isConnecting||this.ws&&this.ws.readyState===WebSocket.OPEN)){this.isConnecting=!0,xe.isLoading=!0;try{this.ws=new WebSocket("wss://api.lanyard.rest/socket"),this.ws.onopen=()=>{this.isConnecting=!1,this.reconnectAttempts=0,xe.isConnected=!0,this.ws.send(JSON.stringify({op:2,d:{subscribe_to_id:this.userId}}))},this.ws.onmessage=t=>{try{this.handleMessage(JSON.parse(t.data))}catch{}},this.ws.onclose=t=>{this.isConnecting=!1,xe.isConnected=!1,this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),t.code!==1e3&&this.reconnectAttempts<this.maxAttempts&&this.scheduleReconnect()},this.ws.onerror=()=>{this.isConnecting=!1,xe.isConnected=!1}}catch{this.isConnecting=!1,xe.isLoading=!1,this.scheduleReconnect()}}}handleMessage(t){t.op===1?this.startHeartbeat(t.d.heartbeat_interval):t.op===0&&(t.t==="INIT_STATE"||t.t==="PRESENCE_UPDATE")&&(this.updatePresence(t.d),xe.isLoading=!1)}updatePresence(t){t.discord_user&&(xe.discordUser={username:t.discord_user.username,discriminator:t.discord_user.discriminator,avatar:t.discord_user.avatar,id:t.discord_user.id}),xe.spotify=t.spotify?{song:t.spotify.song,artist:t.spotify.artist,track_id:t.spotify.track_id}:null,t.discord_status&&(xe.discordStatus=t.discord_status,xe.discordStatusColor=t.discord_status==="online"?"text-catppuccin-gold":"text-catppuccin-subtle"),xe.editorActivity=t.activities?.find(n=>n.name==="Visual Studio Code"||n.name==="Code"||n.name==="Zed")}startHeartbeat(t){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({op:3}))},t)}scheduleReconnect(){this.reconnectTimeout&&clearTimeout(this.reconnectTimeout),this.reconnectAttempts++;const t=Math.min(1e3*Math.pow(2,this.reconnectAttempts-1),3e4);this.reconnectTimeout=setTimeout(()=>this.connect(),t)}disconnect(){this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),this.ws&&(this.ws.close(1e3,"Manual disconnect"),this.ws=null),xe.isConnected=!1}}const Du=new Mu;Du.connect();const Nu={class:"mb-6"},$u={class:"mb-6"},Fu={class:"flex items-center flex-wrap gap-4 text-sm"},Bu={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},Hu={class:"space-y-1 text-sm"},Wu={key:0,class:"flex items-center gap-2"},ju={class:"text-catppuccin-text"},Uu={key:1,class:"flex items-center gap-2"},Vu={class:"text-catppuccin-text truncate"},Gu={key:2,class:"flex items-center gap-2"},Ku={class:"text-catppuccin-blue"},qu={class:"text-catppuccin-text truncate"},zu={key:0},Yu={key:1,class:"text-catppuccin-subtle"},Ju={key:2},Qu={__name:"HeroSection",setup(e){const t=de(()=>xe.discordStatusColor),n=de(()=>xe.spotify),s=de(()=>xe.discordStatus),o=de(()=>xe.discordUser),r=de(()=>xe.editorActivity),i=de(()=>xe.isLoading),a=de(()=>{if(!r.value)return null;if(r.value.details&&r.value.details.toLowerCase().includes("idling"))return"idling";const l=r.value.name,u=l==="Zed",m=l==="IntelliJ IDEA Ultimate"||l==="IntelliJ IDEA"||l==="Android Studio";let h="",b="";return m?(h=r.value.details||"",b=r.value.state||""):u?(h=r.value.state||"",b=r.value.details||""):(h=r.value.details||"",b=r.value.state||""),h=h.replace(/editing /i,"").replace(/working on /i,"").trim(),b=b.replace(/in /i,"").replace(/workspace: /i,"").trim(),{name:l,workspace:b,filename:h}});return(l,u)=>{const c=so("router-link");return N(),$("div",Nu,[C("div",$u,[u[2]||(u[2]=io('<div class="text-catppuccin-subtle text-sm mb-2">~$ whoami</div><h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2"><span class="text-catppuccin-mauve">jesse</span><span class="text-catppuccin-subtle">@</span><span class="text-catppuccin-blue">heckr.dev</span></h1><div class="text-sm text-catppuccin-gray 6"><span class="text-catppuccin-subtle">aka </span><span class="text-catppuccin-green">Hecker_01</span></div>',3)),C("div",Fu,[Q(c,{to:"/blog",class:"text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors"},{default:kt(()=>[...u[0]||(u[0]=[Tt(" [blog] ",-1)])]),_:1}),u[1]||(u[1]=C("a",{href:"https://github.com/Hecker-01",target:"_blank",class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"}," [github] ",-1))])]),u[9]||(u[9]=C("div",{class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},[C("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cat about.txt"),C("p",{class:"text-catppuccin-text leading-relaxed mb-4"},[Tt(" Hi! I'm HeckerDev, I code things for Minecraft, Discord, random CLI tools, websites, and recently I've been very invested in Android development."),C("br"),Tt(" I have experience in a lot of different programming languages and frameworks, and I love learning new ones! ")])],-1)),C("div",Bu,[u[8]||(u[8]=C("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ ps aux | grep hecker ",-1)),C("div",Hu,[!i.value&&o.value?(N(),$("div",Wu,[u[3]||(u[3]=C("span",{class:"text-catppuccin-blue"},"discord",-1)),u[4]||(u[4]=C("span",{class:"text-catppuccin-subtle"},":",-1)),C("span",ju,X(o.value.username),1),C("span",{class:jt(t.value)},"["+X(s.value)+"]",3)])):Me("",!0),!i.value&&n.value?(N(),$("div",Uu,[u[5]||(u[5]=C("span",{class:"text-catppuccin-green"},"spotify",-1)),u[6]||(u[6]=C("span",{class:"text-catppuccin-subtle"},":",-1)),C("span",Vu,X(n.value.song)+" - "+X(n.value.artist),1)])):Me("",!0),!i.value&&r.value&&a.value&&(a.value.workspace||a.value.filename)?(N(),$("div",Gu,[C("span",Ku,X(a.value.name==="Zed"?"zed":a.value.name==="IntelliJ IDEA Ultimate"||a.value.name==="IntelliJ IDEA"?"intellij":a.value.name==="Android Studio"?"android-studio":"vscode"),1),u[7]||(u[7]=C("span",{class:"text-catppuccin-subtle"},":",-1)),C("span",qu,[a.value.workspace?(N(),$("span",zu,X(a.value.workspace.toLowerCase()),1)):Me("",!0),a.value.workspace&&a.value.filename?(N(),$("span",Yu," / ")):Me("",!0),a.value.filename?(N(),$("span",Ju,X(a.value.filename.toLowerCase()),1)):Me("",!0)])])):Me("",!0)])])])}}},Zu={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},Xu={key:0,class:"text-sm text-catppuccin-subtle"},ef={key:1,class:"text-sm text-catppuccin-text"},tf={key:0,class:"text-catppuccin-subtle"},nf={key:2,class:"text-sm text-catppuccin-subtle"},sf={__name:"LanguagesList",props:{languages:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){return(t,n)=>(N(),$("div",Zu,[n[0]||(n[0]=C("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls ~/tools",-1)),e.loading?(N(),$("div",Xu," loading languages... ")):e.languages.length?(N(),$("div",ef,[(N(!0),$(pe,null,rt(e.languages,(s,o)=>(N(),$("span",{key:s.language},[Tt(X(s.language)+"("+X(s.count)+")",1),o<e.languages.length-1?(N(),$("span",tf," | ")):Me("",!0)]))),128))])):(N(),$("div",nf,"no languages found"))]))}},as=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},of={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},rf={class:"lg:flex-1 flex flex-col"},lf={key:0,class:"space-y-2"},af={key:1,class:"text-sm text-catppuccin-subtle"},cf=["href"],uf={class:"flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2"},ff={class:"flex-1 min-w-0"},df={class:"flex items-center gap-2"},pf=["title"],hf={key:0,class:"text-catppuccin-yellow text-xs flex-shrink-0"},mf=["title"],gf={key:3,class:"text-sm text-catppuccin-subtle"},bf={__name:"ProjectsList",props:{repos:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){const t=e,n=de(()=>t.repos.length?[...t.repos].sort((s,o)=>o.stargazers_count-s.stargazers_count).slice(0,6):[]);return(s,o)=>(N(),$("div",of,[o[2]||(o[2]=C("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ ls ~/projects",-1)),C("div",rf,[e.loading?(N(),$("div",lf,[(N(),$(pe,null,rt(6,r=>C("div",{key:`repo-loading-${r}`,class:"rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3"},[...o[0]||(o[0]=[io('<div class="flex items-start gap-3" data-v-2b9b643c><span class="text-catppuccin-subtle" data-v-2b9b643c>&gt;</span><div class="flex-1 min-w-0" data-v-2b9b643c><div class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink" data-v-2b9b643c></div><div class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink" data-v-2b9b643c></div></div></div>',1)])])),64))])):e.repos.length?n.value.length?(N(),Un(bc,{key:2,name:"list",tag:"div",class:"space-y-2"},{default:kt(()=>[(N(!0),$(pe,null,rt(n.value,(r,i)=>(N(),$("a",{key:r.id,href:r.html_url,target:"_blank",style:Et({transitionDelay:`${i*50}ms`}),class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors"},[C("div",uf,[o[1]||(o[1]=C("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors"},">",-1)),C("div",ff,[C("div",df,[C("span",{class:"text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate",title:r.name},X(r.name),9,pf),r.stargazers_count>0?(N(),$("span",hf," ★"+X(r.stargazers_count),1)):Me("",!0)]),C("p",{class:"text-xs text-catppuccin-gray truncate",title:r.description},X(r.description||"no description"),9,mf)])])],12,cf))),128))]),_:1})):(N(),$("div",gf," no repositories found ")):(N(),$("div",af," no projects found "))])]))}},vf=as(bf,[["__scopeId","data-v-2b9b643c"]]),vr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",maroon:"#eba0ac",flamingo:"#f2cdcd"},yf=[{id:1,name:"This Portfolio Website",description:"Built with Vue.js and Tailwind CSS, showcasing my projects and skills.",link:"https://github.com/hecker-01/website",screenshot:"/screenshot.png",accentColor:"lavender"},{id:2,name:"satisSuite",description:"A comprehensive plugin suite designed to streamline moderation, enhance player experience, and give you complete control over your server.",link:"https://satissuite.heckr.dev",screenshot:"/screenshot-satissuite.png",accentColor:"mauve"},{id:3,name:"Main Website",description:"My (old) website built with SvelteKit and Tailwind CSS, featuring project showcases.",link:"https://heckerdev.net",screenshot:"/screenshot-heckerdev.png",accentColor:"mauve"}];function xf(){return yf.map(e=>({...e,accentColor:vr[e.accentColor]||vr.mauve}))}const _f={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},wf={key:0,class:"text-sm text-catppuccin-subtle"},Cf={class:"lg:flex-1 lg:relative"},Sf=["href"],Ef={key:0,class:"w-full flex-1 overflow-hidden bg-catppuccin-surface/30"},Af=["src","alt"],Tf={class:"px-3 py-3 flex-shrink-0"},kf={class:"flex items-start gap-3"},Pf={class:"flex-1 min-w-0"},Rf={class:"text-xs text-catppuccin-gray leading-relaxed"},Of={key:0,class:"flex justify-center gap-1.5 mt-3 flex-shrink-0"},If=["onClick"],Lf={__name:"ShowcaseCarousel",setup(e){const t=ke([]),n=ke(0),s=ke(!1);let o=null;const r=de(()=>t.value.length?t.value[n.value]:null);return Ut(()=>{t.value=xf(),t.value.length>1&&(o=setInterval(()=>{s.value||(n.value=(n.value+1)%t.value.length)},1e4))}),ss(()=>{o&&clearInterval(o)}),(i,a)=>(N(),$("div",_f,[a[2]||(a[2]=C("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ cat ~/showcase",-1)),t.value.length?(N(),$("div",{key:1,class:"relative lg:flex-1 flex flex-col",onMouseenter:a[0]||(a[0]=l=>s.value=!0),onMouseleave:a[1]||(a[1]=l=>s.value=!1)},[C("div",Cf,[Q(fo,{name:"showcase",mode:"out-in"},{default:kt(()=>[r.value?(N(),$("a",{key:r.value.id,href:r.value.link,target:"_blank",class:"group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col",style:Et({borderColor:`${r.value.accentColor}40`})},[r.value.screenshot?(N(),$("div",Ef,[C("img",{src:r.value.screenshot,alt:r.value.name,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,Af)])):Me("",!0),C("div",Tf,[C("div",kf,[C("span",{class:"transition-colors",style:Et({color:r.value.accentColor})},">",4),C("div",Pf,[C("h3",{class:"text-sm font-medium text-catppuccin-text transition-colors mb-1",style:Et({color:r.value.accentColor})},X(r.value.name),5),C("p",Rf,X(r.value.description),1)])])])],12,Sf)):Me("",!0)]),_:1})]),t.value.length>1?(N(),$("div",Of,[(N(!0),$(pe,null,rt(t.value,(l,u)=>(N(),$("button",{key:`dot-${l.id}`,onClick:c=>n.value=u,class:jt(["w-2 h-2.5 rounded-full transition-all",u===n.value?"bg-catppuccin-mauve w-4":"bg-catppuccin-surface/60 hover:bg-catppuccin-surface"]),style:Et(u===n.value?{backgroundColor:r.value.accentColor}:{})},null,14,If))),128))])):Me("",!0)],32)):(N(),$("div",wf," no items to showcase "))]))}},Mf=as(Lf,[["__scopeId","data-v-89780803"]]),go="hecker-01",el=async()=>{try{const e=[];let t=1;const n=100;for(;;){const r=await fetch(`https://api.github.com/users/${go}/repos?per_page=${n}&page=${t}`);if(!r.ok)break;const i=await r.json();if(!i.length||(e.push(...i),i.length<n))break;t++}const s={};e.forEach(r=>{r.language&&(s[r.language]=(s[r.language]||0)+1)});const o=Object.entries(s).sort((r,i)=>i[1]-r[1]).map(([r,i])=>({language:r,count:i}));return{repos:e,languages:o,totalRepos:e.length}}catch(e){return console.error("Error fetching GitHub data:",e),{repos:[],languages:[],totalRepos:0}}},Df=async()=>{const t=new Date;t.getFullYear();try{const n=await fetch(`https://github-contributions-api.jogruber.de/v4/${go}?y=last`);if(!n.ok)throw new Error("Failed to fetch contribution data");const s=await n.json(),o=[];if(s.contributions&&s.contributions.forEach(r=>{o.push({date:r.date,count:r.count})}),o.length>0){const i=new Date(t);i.setDate(i.getDate()-371+1);const a=[];for(let l=0;l<371;l++){const u=new Date(i);u.setDate(u.getDate()+l);const c=u.toISOString().split("T")[0],d=o.find(m=>m.date===c);a.push({date:c,count:d?d.count:0})}return a}throw new Error("No contributions data available")}catch(n){console.error("Error fetching contribution data:",n);const s=new Map;for(let o=370;o>=0;o--){const r=new Date(t);r.setDate(r.getDate()-o);const i=r.toISOString().split("T")[0];s.set(i,0)}return Array.from(s.entries()).sort((o,r)=>o[0].localeCompare(r[0])).map(([o,r])=>({date:o,count:r}))}},Es=e=>e===0?0:e<=2?1:e<=5?2:e<=8?3:4,Nf=e=>`https://github.com/${go}?tab=overview&from=${e}&to=${e}`,$f={class:"mt-6 border-l-2 border-catppuccin-surface pl-4"},Ff={class:"flex items-center justify-between mb-3"},Bf={key:0,class:"flex items-center gap-1 text-[10px] text-catppuccin-subtle"},Hf={key:0},Wf={key:1},jf={class:"overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-thin"},Uf={class:"inline-flex md:flex gap-[3px] md:gap-1",style:{"min-width":"max-content"}},Vf=["href","title"],Gf=["title"],Kf={class:"text-xs text-catppuccin-gray mt-2"},qf={__name:"ContributionGraph",setup(e){const t=ke([]),n=ke(!0),s=de(()=>{const i=[];for(let a=0;a<t.value.length;a+=7)i.push(t.value.slice(a,a+7));return i}),o=de(()=>t.value.reduce((i,a)=>i+a.count,0)),r=async()=>{try{n.value=!0,t.value=await Df()}catch{}finally{n.value=!1}};return Ut(()=>{r()}),(i,a)=>(N(),$("div",$f,[C("div",Ff,[a[1]||(a[1]=C("div",{class:"text-catppuccin-subtle text-sm"},' ~$ git log --oneline --since="1.year.ago" | wc -l ',-1)),n.value?Me("",!0):(N(),$("div",Bf,[...a[0]||(a[0]=[io('<span>less</span><div class="flex gap-[1px]"><div class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green"></div></div><span>more</span>',3)])]))]),n.value?(N(),$("div",Hf,[...a[2]||(a[2]=[C("div",{class:"h-[60px] bg-catppuccin-surface/30 rounded cursor-blink"},null,-1)])])):(N(),$("div",Wf,[C("div",jf,[C("div",Uf,[(N(!0),$(pe,null,rt(s.value,(l,u)=>(N(),$("div",{key:u,class:"flex flex-col gap-[3px] md:gap-1 md:flex-1"},[(N(!0),$(pe,null,rt(l,(c,d)=>(N(),$(pe,{key:d},[c.count>0?(N(),$("a",{key:0,href:We(Nf)(c.date),target:"_blank",rel:"noopener noreferrer",class:jt(["w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm transition-all hover:ring-1 hover:ring-catppuccin-green hover:scale-110 cursor-pointer",[We(Es)(c.count)===1?"bg-catppuccin-green/30 hover:bg-catppuccin-green/40":We(Es)(c.count)===2?"bg-catppuccin-green/50 hover:bg-catppuccin-green/60":We(Es)(c.count)===3?"bg-catppuccin-green/70 hover:bg-catppuccin-green/80":"bg-catppuccin-green hover:bg-catppuccin-green"]]),title:`${c.date}: ${c.count} contributions - Click to view on GitHub`},null,10,Vf)):(N(),$("div",{key:1,class:"w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm bg-catppuccin-surface/50",title:`${c.date}: ${c.count} contributions`},null,8,Gf))],64))),128))]))),128))])]),C("div",Kf,X(o.value)+" contributions in the last year ",1)]))]))}},zf={class:"w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400"},qn={__name:"Footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(N(),$("footer",zf,[C("p",null,"© 2020 - "+X(We(t))+" heckr.dev | All rights reserved.",1)]))}},Yf={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},Jf={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},Qf={class:"grid lg:grid-cols-2 gap-6 lg:items-stretch"},Zf={__name:"Home",setup(e){const t=ke([]),n=ke(!0),s=ke([]),o=async()=>{try{n.value=!0;const{repos:r,languages:i}=await el("hecker-01");t.value=r,s.value=i}catch{}finally{n.value=!1}};return Ut(()=>{o()}),(r,i)=>(N(),$("div",Yf,[C("div",Jf,[Q(Qu),Q(sf,{languages:s.value,loading:n.value},null,8,["languages","loading"]),C("div",Qf,[Q(vf,{repos:t.value,loading:n.value},null,8,["repos","loading"]),Q(Mf)]),Q(qf),Q(qn)])]))}},Xf=`---
title: Setting up a local database
slug: setting-up-local-database
date: 30-01-2026
tags:
  [tutorial, guide, database, docker, mariadb, phpmyadmin, cli, user-interface]
description: Setting up a local mariaDB database with PHPMyAdmin in docker
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
`,ed=`---
title: Using the Command Line (crashcourse)
slug: using-commandline-crashcourse
date: 16-12-2025
tags: [tutorial, guide, cli, terminal, bash, powershell, windows, linux]
description: A beginner-friendly guide to mastering the command line on Windows and Linux
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

| Linux/Mac | Windows |
|-----------|---------|
| \`pwd\` | \`pwd\` or \`cd\` (without arguments) |

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

| Linux/Mac | Windows |
|-----------|---------|
| \`ls\` | \`ls\` or \`dir\` |

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

| Linux/Mac | Windows |
|-----------|---------|
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

| Linux/Mac | Windows |
|-----------|---------|
| \`mkdir name\` | \`mkdir name\` |

\`\`\`bash
# Create a single folder
mkdir projects

# Create nested folders at once
mkdir -p projects/website/css    # Linux/Mac
mkdir -Path projects/website/css # Windows PowerShell
\`\`\`

### Create a File

| Linux/Mac | Windows |
|-----------|---------|
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

| Linux/Mac | Windows |
|-----------|---------|
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

| Linux/Mac | Windows |
|-----------|---------|
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

| Linux/Mac | Windows |
|-----------|---------|
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

| Linux/Mac | Windows |
|-----------|---------|
| \`cat filename\` | \`cat filename\` or \`type filename\` |

\`\`\`bash
# Display entire file
cat readme.md

# Display with line numbers
cat -n readme.md  # Linux/Mac
\`\`\`

### View Large Files

| Linux/Mac | Windows |
|-----------|---------|
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

| Linux/Mac | Windows |
|-----------|---------|
| \`find\` | \`Get-ChildItem -Recurse\` |

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

| Linux/Mac | Windows |
|-----------|---------|
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

| Linux/Mac | Windows |
|-----------|---------|
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

| Linux/Mac | Windows |
|-----------|---------|
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

| Linux/Mac | Windows |
|-----------|---------|
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

| Shortcut | Action |
|----------|--------|
| \`Tab\` | Auto-complete commands and paths |
| \`↑\` / \`↓\` | Navigate command history |
| \`Ctrl + C\` | Cancel current command |
| \`Ctrl + L\` | Clear the screen |
| \`Ctrl + A\` | Go to beginning of line |
| \`Ctrl + E\` | Go to end of line |
| \`Ctrl + U\` | Clear line before cursor |
| \`Ctrl + R\` | Search command history |

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

| Task | Linux/Mac | Windows PowerShell |
|------|-----------|-------------------|
| Current directory | \`pwd\` | \`pwd\` or \`gl\` |
| List files | \`ls\` | \`ls\` or \`dir\` |
| Change directory | \`cd path\` | \`cd path\` |
| Create folder | \`mkdir name\` | \`mkdir name\` |
| Create file | \`touch file\` | \`ni file\` |
| Copy | \`cp src dest\` | \`cp src dest\` |
| Move/Rename | \`mv src dest\` | \`mv src dest\` |
| Delete file | \`rm file\` | \`rm file\` |
| Delete folder | \`rm -r folder\` | \`rm -r folder\` |
| View file | \`cat file\` | \`cat file\` |
| Search in file | \`grep pattern file\` | \`sls pattern file\` |
| Find files | \`find . -name "*.txt"\` | \`gci -r -fi "*.txt"\` |
| Clear screen | \`clear\` | \`cls\` |

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
`,td=`---
title: Using git (crashcourse)
slug: using-git-crashcourse
date: 29-01-2026
tags: [tutorial, guide, git, version-control, cli]
description: A simple guide on how to use the git bash properly
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
`,nd=Object.assign({"/posts/setting-up-local-database.md":Xf,"/posts/using-commandline-crashcourse.md":ed,"/posts/using-git-crashcourse.md":td}),sd=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const l=(u,c)=>{c=c.trim(),c.startsWith("[")&&c.endsWith("]")?o[u]=c.slice(1,-1).split(",").map(d=>d.trim()):o[u]=c};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&l(i,a);const[d,...m]=u.split(":");if(!d||d.trim()==="")return;i=d.trim(),a=m.join(":").trim()}}),i&&a&&l(i,a),{frontmatter:o,content:s}},od=()=>{const e=[];let t=1;return Object.entries(nd).forEach(([n,s])=>{const{frontmatter:o,content:r}=sd(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,date:o.date||new Date().toISOString().split("T")[0],tags:o.tags||[],description:o.description||"",content:r.trim(),readingTime:ld(r)})}),e};let As=null;const bo=()=>(As||(As=od()),[...As].sort((e,t)=>Us(t.date)-Us(e.date))),rd=e=>bo().find(t=>t.slug===e),id=()=>{const e=new Set;return bo().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()},Us=e=>{const[t,n,s]=e.split("-");return new Date(s,n-1,t)},ld=e=>{const n=e.trim().split(/\s+/).length;return Math.ceil(n/225)},ad={class:"border-l-2 border-catppuccin-surface pl-4"},cd={class:"flex flex-wrap gap-2"},ud=["onClick"],fd={__name:"TagFilter",props:{tags:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["toggle-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("toggle-tag",o)};return(o,r)=>(N(),$("div",ad,[r[0]||(r[0]=C("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls tags/",-1)),C("div",cd,[(N(!0),$(pe,null,rt(e.tags,i=>(N(),$("button",{key:i,onClick:a=>s(i),class:jt(["px-3 py-1 rounded text-xs transition-colors border",e.selectedTag===i?"bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve":"bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay"])}," #"+X(i),11,ud))),128))])]))}},dd={class:"border-l-2 border-catppuccin-surface pl-4"},pd={class:"text-catppuccin-subtle text-sm mb-3"},hd={key:0,class:"text-catppuccin-mauve"},md={key:0,class:"text-sm text-catppuccin-subtle"},gd={key:1,class:"space-y-3"},bd=["onClick"],vd={class:"px-4 py-3"},yd={class:"flex items-start justify-between gap-4 mb-2"},xd={class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors"},_d={class:"flex items-center gap-2 flex-shrink-0"},wd={class:"text-xs text-catppuccin-subtle"},Cd=["title"],Sd={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed"},Ed={class:"flex items-center gap-2"},Ad={class:"flex flex-wrap gap-1.5"},Td={__name:"BlogList",props:{posts:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-post"],setup(e,{emit:t}){const n=t,s=o=>{n("open-post",o)};return(o,r)=>(N(),$("div",dd,[C("div",pd,[r[0]||(r[0]=Tt(" ~$ ls -la posts/ ",-1)),e.selectedTag?(N(),$("span",hd,'| grep "'+X(e.selectedTag)+'"',1)):Me("",!0)]),e.posts.length?(N(),$("div",gd,[(N(!0),$(pe,null,rt(e.posts,i=>(N(),$("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer"},[C("div",vd,[C("div",yd,[C("h2",xd,X(i.title),1),C("div",_d,[C("span",wd,X(i.readingTime)+" min read ",1),r[1]||(r[1]=C("span",{class:"text-catppuccin-surface"},"•",-1)),C("span",{class:"text-xs text-catppuccin-subtle",title:We(Us)(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},X(i.date),9,Cd)])]),C("p",Sd,X(i.description),1),C("div",Ed,[C("div",Ad,[(N(!0),$(pe,null,rt(i.tags,a=>(N(),$("span",{key:a,class:"px-2 py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle"}," #"+X(a),1))),128))]),r[2]||(r[2]=C("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm"}," read → ",-1))])])],8,bd))),128))])):(N(),$("div",md," no posts found "))]))}},kd={class:"mb-8"},Pd={class:"text-catppuccin-subtle text-sm mb-2"},Rd={class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-3"},Od={class:"flex items-center gap-4 text-sm text-catppuccin-subtle mb-4"},Id={class:"flex gap-2"},Ld={class:"border-l-2 border-catppuccin-surface pl-4 mb-8"},Md=["innerHTML"],Dd={__name:"BlogPost",props:{post:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=de(()=>n.post.readingTime||1),i=a=>{let l=a;const u=[];l=l.replace(/```(\w*)\s*\n?([\s\S]*?)```/g,(h,b,S)=>{const F=`__CODEBLOCK_${u.length}__`,O=S.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),P=b?`language-${b.toLowerCase()}`:"",T=`code-block-${u.length}`;return u.push(`<div class="relative group">
                <button data-clipboard-target="#${T}" class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-catppuccin-subtle hover:text-catppuccin-mauve px-2 py-1 bg-catppuccin-crust border border-catppuccin-surface rounded hover:bg-catppuccin-mauve/10 cursor-pointer z-10">
                    copy
                </button>
                <pre class="bg-catppuccin-base/50 border border-catppuccin-base/30 rounded p-4 overflow-x-auto my-4"><code id="${T}" class="${P}">${O}</code></pre>
            </div>`),F});const c=[];l=l.replace(/((?:\|[^\n]+\|\r?\n?)+)/g,h=>{const b=h.trim().split(/\r?\n/);if(b.length<2||!/^\|[\s\-:|]+\|$/.test(b[1]))return h;const F=`__TABLE_${c.length}__`,O=b[0],P=b.slice(2);let T='<table class="w-full my-4 text-sm border-collapse">';const I=O.split("|").filter(G=>G.trim());return T+="<thead><tr>",I.forEach(G=>{T+=`<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${G.trim()}</th>`}),T+="</tr></thead>",T+="<tbody>",P.forEach(G=>{if(G.trim()&&!/^\|[\s\-:|]+\|$/.test(G)){const oe=G.split("|").filter(Y=>Y.trim());T+="<tr>",oe.forEach(Y=>{T+=`<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${Y.trim()}</td>`}),T+="</tr>"}}),T+="</tbody></table>",c.push(T),F}),l=l.replace(/^(?:---|\*\*\*|___)\s*$/gim,'<hr class="border-catppuccin-surface my-6">');const d=h=>h.toLowerCase().replace(/<[^>]*>/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();l=l.replace(/^### (.*$)/gim,(h,b)=>{const S=d(b);return`<h3 id="${S}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${b}<a href="#${S}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`}),l=l.replace(/^## (.*$)/gim,(h,b)=>{const S=d(b);return`<h2 id="${S}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${b}<a href="#${S}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`}),l=l.replace(/^# (.*$)/gim,(h,b)=>{const S=d(b);return`<h1 id="${S}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${b}<a href="#${S}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`}),l=l.replace(/^> (.*$)/gim,'<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>'),l=l.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">'),l=l.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),l=l.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),l=l.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),l=l.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>'),l=l.replace(/`([^`]+)`/g,'<code class="bg-catppuccin-surface/50 px-2 py-0.5 rounded text-catppuccin-pink text-sm">$1</code>'),l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>'),l=l.replace(/^\d+\. (.*$)/gim,'<li class="ml-6 list-decimal text-catppuccin-text mb-1">$1</li>'),l=l.replace(/^[\-\*\+] (.*$)/gim,'<li class="ml-6 list-disc text-catppuccin-text mb-1">$1</li>'),l=l.replace(/^[\-\*\+] \[ \] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>'),l=l.replace(/^[\-\*\+] \[x\] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>');const m=/^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;return l=l.split(`

`).map(h=>{const b=h.trim();if(b.length===0||b.startsWith("__CODEBLOCK_")||b.startsWith("__TABLE_"))return h;const S=h.split(`
`),F=[];let O=[];const P=()=>{if(O.length>0){const T=O.join("<br>");F.push(`<p class="text-catppuccin-text leading-relaxed mb-4">${T}</p>`),O=[]}};return S.forEach(T=>{const I=T.trim();I.length===0||m.test(I)||I.startsWith("__CODEBLOCK_")||I.startsWith("__TABLE_")?(P(),F.push(T)):O.push(T.trim())}),P(),F.join(`
`)}).join(`

`),u.forEach((h,b)=>{l=l.replace(`__CODEBLOCK_${b}__`,h)}),c.forEach((h,b)=>{l=l.replace(`__TABLE_${b}__`,h)}),l};return Ut(()=>{setTimeout(()=>{window.Prism&&(Prism.highlightAll(),document.querySelectorAll('pre[class*="language-"]').forEach(a=>{a.className=a.className.replace(/language-\S+/g,"").trim()}))},100)}),(a,l)=>(N(),$("div",null,[C("div",kd,[C("div",Pd," ~$ cat "+X(e.post.slug)+".md ",1),C("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-text transition-colors mb-6 inline-flex items-center gap-1"}," [← back to posts] "),C("h1",Rd,X(e.post.title),1),C("div",Od,[C("span",null,X(e.post.date),1),l[0]||(l[0]=C("span",{class:"text-catppuccin-surface"},"•",-1)),C("span",null,"~"+X(r.value)+" min read",1),l[1]||(l[1]=C("span",{class:"text-catppuccin-surface"},"•",-1)),C("div",Id,[(N(!0),$(pe,null,rt(e.post.tags,u=>(N(),$("span",{key:u,class:"text-catppuccin-gray"}," #"+X(u),1))),128))])])]),C("article",Ld,[C("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:i(e.post.content)},null,8,Md)]),C("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors inline-flex items-center gap-1"}," [← back to all posts] ")]))}},Nd=as(Dd,[["__scopeId","data-v-19c3ea37"]]),$d={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},Fd={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},Bd={key:"list"},Hd={class:"mb-12"},Wd={class:"flex items-center gap-4 text-sm mb-6"},jd={key:"post"},Ud={__name:"Blog",setup(e){const t=ke("list"),n=ke(null),s=ke(null),o=ke([]),r=ke([]),i=Xi(),a=mo(),l=de(()=>s.value?o.value.filter(h=>h.tags.includes(s.value)):o.value),u=()=>{o.value=bo(),r.value=id()},c=h=>{if(n.value=rd(h),n.value)t.value="post",window.scrollTo({top:0,behavior:"smooth"}),i.query.post!==h&&a.replace({name:"Blog",query:{...i.query,post:h}});else if(i.query.post){const b={...i.query};delete b.post,a.replace({name:"Blog",query:b})}},d=({skipQueryUpdate:h=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!h&&"post"in i.query){const b={...i.query};delete b.post,a.replace({name:"Blog",query:b})}},m=h=>{s.value=s.value===h?null:h};return Ut(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(S){const F=S.trigger,O=F.textContent;F.textContent="copied!",F.classList.add("text-catppuccin-green"),setTimeout(()=>{F.textContent=O,F.classList.remove("text-catppuccin-green")},2e3),S.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const b=i.query.post;b&&c(b)}),ss(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),pn(()=>i.query.post,(h,b)=>{h&&h!==b?c(h):!h&&t.value==="post"&&d({skipQueryUpdate:!0})}),(h,b)=>{const S=so("router-link");return N(),$("div",$d,[C("div",Fd,[Q(fo,{name:"fade",mode:"out-in"},{default:kt(()=>[t.value==="list"?(N(),$("div",Bd,[C("div",Hd,[b[1]||(b[1]=C("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cd ~/blog",-1)),b[2]||(b[2]=C("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[C("span",{class:"text-catppuccin-mauve"},"Blog")],-1)),b[3]||(b[3]=C("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," My thoughts, tutorials, and experiences on various topics including web development, programming, and technology. ",-1)),C("div",Wd,[Q(S,{to:"/",class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"},{default:kt(()=>[...b[0]||(b[0]=[Tt(" [← home] ",-1)])]),_:1})]),Q(fd,{tags:r.value,"selected-tag":s.value,onToggleTag:m},null,8,["tags","selected-tag"])]),Q(Td,{posts:l.value,"selected-tag":s.value,onOpenPost:c},null,8,["posts","selected-tag"]),Q(qn)])):t.value==="post"&&n.value?(N(),$("div",jd,[Q(Nd,{post:n.value,onGoBack:d},null,8,["post"]),Q(qn)])):Me("",!0)]),_:1})])])}}},Vd=as(Ud,[["__scopeId","data-v-e55e7e1e"]]),Gd={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},Kd={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16"},qd={class:"mb-8"},zd={class:"text-catppuccin-subtle text-sm mb-4"},Yd={class:"border-l-2 border-catppuccin-surface pl-4"},Jd={class:"text-catppuccin-red text-sm"},Qd={class:"text-catppuccin-mauve"},Zd={__name:"NotFound",setup(e){const t=Xi(),n=mo(),s=de(()=>(t.fullPath||t.path||"/").replace(/^\//,"")||"."),o=()=>n.push("/");return(r,i)=>(N(),$("div",Gd,[C("div",Kd,[C("div",qd,[C("div",zd," ~$ cd ~/"+X(s.value),1),C("div",{class:"flex items-center gap-4 text-sm mb-6"},[C("button",{onClick:o,class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"}," [← home] ")])]),C("div",Yd,[C("div",Jd,[i[0]||(i[0]=Tt(" cd: no such file or directory: /",-1)),C("span",Qd,X(s.value),1)])])]),Q(qn)]))}},Xd=[{path:"/",name:"Home",component:Zf,meta:{title:"Home | heckr.dev"}},{path:"/blog",name:"Blog",component:Vd,meta:{title:"Blog | heckr.dev"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Zd,meta:{title:"404 Not Found | heckr.dev"}}],tl=Iu({history:uu(),routes:Xd,scrollBehavior(e,t,n){return n||{top:0}}});tl.beforeEach((e,t,n)=>{document.title=e.meta.title||"heckr.dev",n()});let an=0;const yr=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],ep=()=>{console.log("%cWelcome to heckr.dev","font-size: 20px; font-weight: bold; color: #cba6f7;"),console.log("%cWelcome to the dev console, here are some commands to try:","font-size: 14px; color: #a6adc8;"),console.log(`%c- help() - show available commands
- about() - learn more about me
- skills() - view my tech stack
- contact() - get my contact info`,"font-size: 12px; color: #6c7086;"),window.help=()=>{console.log("%cAvailable commands:","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%c- help() - show this message
- about() - about the developer
- skills() - technical skills
- contact() - contact information
- secret() - ???
`,"font-size: 12px; color: #a6adc8;")},window.about=()=>{console.log("%cAbout me","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cA passionate developer who loves building cool things with code!
Check out my projects and blog on the site.`,"font-size: 12px; color: #a6adc8;")},window.skills=async()=>{console.log("%cTech stack","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log("%cFetching...","font-size: 12px; color: #6c7086;");try{const{languages:e,totalRepos:t}=await el();e.length>0?(console.log("%cTop languages from "+t+" repositories found:","font-size: 14px; font-weight: bold; color: #a6adc8;"),e.slice(0,10).forEach(({language:n,count:s},o)=>{console.log(`%c${o+1}. ${n}: ${s} repos`,"font-size: 12px; color: #a6adc8;")})):console.log("%cUnable to fetch data, please try again later.","font-size: 12px; color: #f38ba8;")}catch{console.log("%cError loading data, please try again later.","font-size: 12px; color: #f38ba8;")}},window.contact=()=>{console.log("%cContact info","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cGitHub: https://github.com/hecker-01
Feel free to reach out!`,"font-size: 12px; color: #a6adc8;")},window.secret=()=>{console.log("%cYou found the secret command","font-size: 18px; font-weight: bold; color: #f9e2af;"),console.log("%cHere's a hint: ↑ ↑ ↓ ↓ ← → ← → B A","font-size: 12px; color: #fab387;")},document.addEventListener("keydown",e=>{e.code===yr[an]?(an++,an===yr.length&&(tp(),an=0)):an=0})},tp=()=>{if(console.log("%cKONAMI CODE ACTIVATED!","font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;"),document.body.style.animation="rainbow-border 2s linear infinite",!document.getElementById("konami-style")){const e=document.createElement("style");e.id="konami-style",e.textContent=`
      @keyframes rainbow-border {
        0% { box-shadow: inset 0 0 0 3px #f38ba8; }
        16% { box-shadow: inset 0 0 0 3px #fab387; }
        33% { box-shadow: inset 0 0 0 3px #f9e2af; }
        50% { box-shadow: inset 0 0 0 3px #a6e3a1; }
        66% { box-shadow: inset 0 0 0 3px #89dceb; }
        83% { box-shadow: inset 0 0 0 3px #89b4fa; }
        100% { box-shadow: inset 0 0 0 3px #cba6f7; }
      }
    `,document.head.appendChild(e)}setTimeout(()=>{document.body.style.animation=""},5e3)};Sc(Lu).use(tl).mount("#app");ep();
