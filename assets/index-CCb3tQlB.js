(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function no(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},Zt=[],at=()=>{},$r=()=>!1,os=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),so=e=>e.startsWith("onUpdate:"),xe=Object.assign,oo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},va=Object.prototype.hasOwnProperty,oe=(e,t)=>va.call(e,t),U=Array.isArray,Xt=e=>rs(e)==="[object Map]",Or=e=>rs(e)==="[object Set]",G=e=>typeof e=="function",be=e=>typeof e=="string",$t=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Mr=e=>(fe(e)||G(e))&&G(e.then)&&G(e.catch),Lr=Object.prototype.toString,rs=e=>Lr.call(e),ya=e=>rs(e).slice(8,-1),Nr=e=>rs(e)==="[object Object]",ro=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hn=no(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),is=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},xa=/-\w/g,Ke=is(e=>e.replace(xa,t=>t.slice(1).toUpperCase())),wa=/\B([A-Z])/g,Gt=is(e=>e.replace(wa,"-$1").toLowerCase()),as=is(e=>e.charAt(0).toUpperCase()+e.slice(1)),_s=is(e=>e?`on${as(e)}`:""),Rt=(e,t)=>!Object.is(e,t),Vn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},jr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},io=e=>{const t=parseFloat(e);return isNaN(t)?e:t},_a=e=>{const t=be(e)?Number(e):NaN;return isNaN(t)?e:t};let Ro;const cs=()=>Ro||(Ro=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ye(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=be(s)?Ea(s):ye(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(be(e)||fe(e))return e}const ka=/;(?![^(]*\))/g,Ca=/:([^]+)/,Sa=/\/\*[^]*?\*\//g;function Ea(e){const t={};return e.replace(Sa,"").split(ka).forEach(n=>{if(n){const s=n.split(Ca);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ot(e){let t="";if(be(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const s=Ot(e[n]);s&&(t+=s+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Aa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pa=no(Aa);function Br(e){return!!e||e===""}const Fr=e=>!!(e&&e.__v_isRef===!0),V=e=>be(e)?e:e==null?"":U(e)||fe(e)&&(e.toString===Lr||!G(e.toString))?Fr(e)?V(e.value):JSON.stringify(e,Hr,2):String(e),Hr=(e,t)=>Fr(t)?Hr(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[ks(s,r)+" =>"]=o,n),{})}:Or(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ks(n))}:$t(t)?ks(t):fe(t)&&!U(t)&&!Nr(t)?String(t):t,ks=(e,t="")=>{var n;return $t(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Ne;class Ta{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){this._on>0&&--this._on===0&&(Ne=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Ra(){return Ne}let pe;const Cs=new WeakSet;class Vr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cs.has(this)&&(Cs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Do(this),Gr(this);const t=pe,n=ze;pe=this,ze=!0;try{return this.fn()}finally{qr(this),pe=t,ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)lo(t);this.deps=this.depsTail=void 0,Do(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bs(this)&&this.run()}get dirty(){return Bs(this)}}let Ur=0,mn,gn;function Wr(e,t=!1){if(e.flags|=8,t){e.next=gn,gn=e;return}e.next=mn,mn=e}function ao(){Ur++}function co(){if(--Ur>0)return;if(gn){let t=gn;for(gn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;mn;){let t=mn;for(mn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Gr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function qr(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),lo(s),Da(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Bs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Kr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Kr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===_n)||(e.globalVersion=_n,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Bs(e))))return;e.flags|=2;const t=e.dep,n=pe,s=ze;pe=e,ze=!0;try{Gr(e);const o=e.fn(e._value);(t.version===0||Rt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{pe=n,ze=s,qr(e),e.flags&=-3}}function lo(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)lo(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Da(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ze=!0;const zr=[];function bt(){zr.push(ze),ze=!1}function vt(){const e=zr.pop();ze=e===void 0?!0:e}function Do(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=pe;pe=void 0;try{t()}finally{pe=n}}}let _n=0;class Ia{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!pe||!ze||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new Ia(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,Yr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=s)}return n}trigger(t){this.version++,_n++,this.notify(t)}notify(t){ao();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{co()}}}function Yr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Yr(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Fs=new WeakMap,Vt=Symbol(""),Hs=Symbol(""),kn=Symbol("");function Ee(e,t,n){if(ze&&pe){let s=Fs.get(e);s||Fs.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new uo),o.map=s,o.key=n),o.track()}}function mt(e,t,n,s,o,r){const i=Fs.get(e);if(!i){_n++;return}const a=c=>{c&&c.trigger()};if(ao(),t==="clear")i.forEach(a);else{const c=U(e),u=c&&ro(n);if(c&&n==="length"){const l=Number(s);i.forEach((d,f)=>{(f==="length"||f===kn||!$t(f)&&f>=l)&&a(d)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(kn)),t){case"add":c?u&&a(i.get("length")):(a(i.get(Vt)),Xt(e)&&a(i.get(Hs)));break;case"delete":c||(a(i.get(Vt)),Xt(e)&&a(i.get(Hs)));break;case"set":Xt(e)&&a(i.get(Vt));break}}co()}function zt(e){const t=Q(e);return t===e?t:(Ee(t,"iterate",kn),qe(e)?t:t.map(Je))}function ls(e){return Ee(e=Q(e),"iterate",kn),e}function Et(e,t){return yt(e)?nn(Ut(e)?Je(t):t):Je(t)}const $a={__proto__:null,[Symbol.iterator](){return Ss(this,Symbol.iterator,e=>Et(this,e))},concat(...e){return zt(this).concat(...e.map(t=>U(t)?zt(t):t))},entries(){return Ss(this,"entries",e=>(e[1]=Et(this,e[1]),e))},every(e,t){return dt(this,"every",e,t,void 0,arguments)},filter(e,t){return dt(this,"filter",e,t,n=>n.map(s=>Et(this,s)),arguments)},find(e,t){return dt(this,"find",e,t,n=>Et(this,n),arguments)},findIndex(e,t){return dt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return dt(this,"findLast",e,t,n=>Et(this,n),arguments)},findLastIndex(e,t){return dt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return dt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Es(this,"includes",e)},indexOf(...e){return Es(this,"indexOf",e)},join(e){return zt(this).join(e)},lastIndexOf(...e){return Es(this,"lastIndexOf",e)},map(e,t){return dt(this,"map",e,t,void 0,arguments)},pop(){return ln(this,"pop")},push(...e){return ln(this,"push",e)},reduce(e,...t){return Io(this,"reduce",e,t)},reduceRight(e,...t){return Io(this,"reduceRight",e,t)},shift(){return ln(this,"shift")},some(e,t){return dt(this,"some",e,t,void 0,arguments)},splice(...e){return ln(this,"splice",e)},toReversed(){return zt(this).toReversed()},toSorted(e){return zt(this).toSorted(e)},toSpliced(...e){return zt(this).toSpliced(...e)},unshift(...e){return ln(this,"unshift",e)},values(){return Ss(this,"values",e=>Et(this,e))}};function Ss(e,t,n){const s=ls(e),o=s[t]();return s!==e&&!qe(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=n(r.value)),r}),o}const Oa=Array.prototype;function dt(e,t,n,s,o,r){const i=ls(e),a=i!==e&&!qe(e),c=i[t];if(c!==Oa[t]){const d=c.apply(e,r);return a?Je(d):d}let u=n;i!==e&&(a?u=function(d,f){return n.call(this,Et(e,d),f,e)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,e)}));const l=c.call(i,u,s);return a&&o?o(l):l}function Io(e,t,n,s){const o=ls(e);let r=n;return o!==e&&(qe(e)?n.length>3&&(r=function(i,a,c){return n.call(this,i,a,c,e)}):r=function(i,a,c){return n.call(this,i,Et(e,a),c,e)}),o[t](r,...s)}function Es(e,t,n){const s=Q(e);Ee(s,"iterate",kn);const o=s[t](...n);return(o===-1||o===!1)&&ho(n[0])?(n[0]=Q(n[0]),s[t](...n)):o}function ln(e,t,n=[]){bt(),ao();const s=Q(e)[t].apply(e,n);return co(),vt(),s}const Ma=no("__proto__,__v_isRef,__isVue"),Jr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($t));function La(e){$t(e)||(e=String(e));const t=Q(this);return Ee(t,"has",e),t.hasOwnProperty(e)}class Qr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?qa:ti:r?ei:Xr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=U(t);if(!o){let c;if(i&&(c=$a[n]))return c;if(n==="hasOwnProperty")return La}const a=Reflect.get(t,n,Pe(t)?t:s);if(($t(n)?Jr.has(n):Ma(n))||(o||Ee(t,"get",n),r))return a;if(Pe(a)){const c=i&&ro(n)?a:a.value;return o&&fe(c)?Us(c):c}return fe(a)?o?Us(a):Dn(a):a}}class Zr extends Qr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];const i=U(t)&&ro(n);if(!this._isShallow){const u=yt(r);if(!qe(s)&&!yt(s)&&(r=Q(r),s=Q(s)),!i&&Pe(r)&&!Pe(s))return u||(r.value=s),!0}const a=i?Number(n)<t.length:oe(t,n),c=Reflect.set(t,n,s,Pe(t)?t:o);return t===Q(o)&&(a?Rt(s,r)&&mt(t,"set",n,s):mt(t,"add",n,s)),c}deleteProperty(t,n){const s=oe(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&mt(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!$t(n)||!Jr.has(n))&&Ee(t,"has",n),s}ownKeys(t){return Ee(t,"iterate",U(t)?"length":Vt),Reflect.ownKeys(t)}}class Na extends Qr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ja=new Zr,Ba=new Na,Fa=new Zr(!0);const Vs=e=>e,Ln=e=>Reflect.getPrototypeOf(e);function Ha(e,t,n){return function(...s){const o=this.__v_raw,r=Q(o),i=Xt(r),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...s),l=n?Vs:t?nn:Je;return!t&&Ee(r,"iterate",c?Hs:Vt),xe(Object.create(u),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[l(d[0]),l(d[1])]:l(d),done:f}}})}}function Nn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Va(e,t){const n={get(o){const r=this.__v_raw,i=Q(r),a=Q(o);e||(Rt(o,a)&&Ee(i,"get",o),Ee(i,"get",a));const{has:c}=Ln(i),u=t?Vs:e?nn:Je;if(c.call(i,o))return u(r.get(o));if(c.call(i,a))return u(r.get(a));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&Ee(Q(o),"iterate",Vt),o.size},has(o){const r=this.__v_raw,i=Q(r),a=Q(o);return e||(Rt(o,a)&&Ee(i,"has",o),Ee(i,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const i=this,a=i.__v_raw,c=Q(a),u=t?Vs:e?nn:Je;return!e&&Ee(c,"iterate",Vt),a.forEach((l,d)=>o.call(r,u(l),u(d),i))}};return xe(n,e?{add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear")}:{add(o){!t&&!qe(o)&&!yt(o)&&(o=Q(o));const r=Q(this);return Ln(r).has.call(r,o)||(r.add(o),mt(r,"add",o,o)),this},set(o,r){!t&&!qe(r)&&!yt(r)&&(r=Q(r));const i=Q(this),{has:a,get:c}=Ln(i);let u=a.call(i,o);u||(o=Q(o),u=a.call(i,o));const l=c.call(i,o);return i.set(o,r),u?Rt(r,l)&&mt(i,"set",o,r):mt(i,"add",o,r),this},delete(o){const r=Q(this),{has:i,get:a}=Ln(r);let c=i.call(r,o);c||(o=Q(o),c=i.call(r,o)),a&&a.call(r,o);const u=r.delete(o);return c&&mt(r,"delete",o,void 0),u},clear(){const o=Q(this),r=o.size!==0,i=o.clear();return r&&mt(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Ha(o,e,t)}),n}function po(e,t){const n=Va(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(oe(n,o)&&o in s?n:s,o,r)}const Ua={get:po(!1,!1)},Wa={get:po(!1,!0)},Ga={get:po(!0,!1)};const Xr=new WeakMap,ei=new WeakMap,ti=new WeakMap,qa=new WeakMap;function Ka(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function za(e){return e.__v_skip||!Object.isExtensible(e)?0:Ka(ya(e))}function Dn(e){return yt(e)?e:fo(e,!1,ja,Ua,Xr)}function ni(e){return fo(e,!1,Fa,Wa,ei)}function Us(e){return fo(e,!0,Ba,Ga,ti)}function fo(e,t,n,s,o){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=za(e);if(r===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,r===2?s:n);return o.set(e,a),a}function Ut(e){return yt(e)?Ut(e.__v_raw):!!(e&&e.__v_isReactive)}function yt(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function ho(e){return e?!!e.__v_raw:!1}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Ya(e){return!oe(e,"__v_skip")&&Object.isExtensible(e)&&jr(e,"__v_skip",!0),e}const Je=e=>fe(e)?Dn(e):e,nn=e=>fe(e)?Us(e):e;function Pe(e){return e?e.__v_isRef===!0:!1}function me(e){return si(e,!1)}function Ja(e){return si(e,!0)}function si(e,t){return Pe(e)?e:new Qa(e,t)}class Qa{constructor(t,n){this.dep=new uo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Q(t),this._value=n?t:Je(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||qe(t)||yt(t);t=s?t:Q(t),Rt(t,n)&&(this._rawValue=t,this._value=s?t:Je(t),this.dep.trigger())}}function $e(e){return Pe(e)?e.value:e}const Za={get:(e,t,n)=>t==="__v_raw"?e:$e(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Pe(o)&&!Pe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function oi(e){return Ut(e)?e:new Proxy(e,Za)}class Xa{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new uo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_n-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return Wr(this,!0),!0}get value(){const t=this.dep.track();return Kr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ec(e,t,n=!1){let s,o;return G(e)?s=e:(s=e.get,o=e.set),new Xa(s,o,n)}const jn={},Kn=new WeakMap;let Bt;function tc(e,t=!1,n=Bt){if(n){let s=Kn.get(n);s||Kn.set(n,s=[]),s.push(e)}}function nc(e,t,n=le){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:a,call:c}=n,u=N=>o?N:qe(N)||o===!1||o===0?gt(N,1):gt(N);let l,d,f,m,v=!1,A=!1;if(Pe(e)?(d=()=>e.value,v=qe(e)):Ut(e)?(d=()=>u(e),v=!0):U(e)?(A=!0,v=e.some(N=>Ut(N)||qe(N)),d=()=>e.map(N=>{if(Pe(N))return N.value;if(Ut(N))return u(N);if(G(N))return c?c(N,2):N()})):G(e)?t?d=c?()=>c(e,2):e:d=()=>{if(f){bt();try{f()}finally{vt()}}const N=Bt;Bt=l;try{return c?c(e,3,[m]):e(m)}finally{Bt=N}}:d=at,t&&o){const N=d,z=o===!0?1/0:o;d=()=>gt(N(),z)}const L=Ra(),D=()=>{l.stop(),L&&L.active&&oo(L.effects,l)};if(r&&t){const N=t;t=(...z)=>{N(...z),D()}}let M=A?new Array(e.length).fill(jn):jn;const j=N=>{if(!(!(l.flags&1)||!l.dirty&&!N))if(t){const z=l.run();if(o||v||(A?z.some((ce,ie)=>Rt(ce,M[ie])):Rt(z,M))){f&&f();const ce=Bt;Bt=l;try{const ie=[z,M===jn?void 0:A&&M[0]===jn?[]:M,m];M=z,c?c(t,3,ie):t(...ie)}finally{Bt=ce}}}else l.run()};return a&&a(j),l=new Vr(d),l.scheduler=i?()=>i(j,!1):j,m=N=>tc(N,!1,l),f=l.onStop=()=>{const N=Kn.get(l);if(N){if(c)c(N,4);else for(const z of N)z();Kn.delete(l)}},t?s?j(!0):M=l.run():i?i(j.bind(null,!0),!0):l.run(),D.pause=l.pause.bind(l),D.resume=l.resume.bind(l),D.stop=D,D}function gt(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Pe(e))gt(e.value,t,n);else if(U(e))for(let s=0;s<e.length;s++)gt(e[s],t,n);else if(Or(e)||Xt(e))e.forEach(s=>{gt(s,t,n)});else if(Nr(e)){for(const s in e)gt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&gt(e[s],t,n)}return e}function In(e,t,n,s){try{return s?e(...s):e()}catch(o){us(o,t,n)}}function Qe(e,t,n,s){if(G(e)){const o=In(e,t,n,s);return o&&Mr(o)&&o.catch(r=>{us(r,t,n)}),o}if(U(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Qe(e[r],t,n,s));return o}}function us(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||le;if(t){let a=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](e,c,u)===!1)return}a=a.parent}if(r){bt(),In(r,null,10,[e,c,u]),vt();return}}sc(e,n,o,s,i)}function sc(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const De=[];let rt=-1;const en=[];let At=null,Yt=0;const ri=Promise.resolve();let zn=null;function ds(e){const t=zn||ri;return e?t.then(this?e.bind(this):e):t}function oc(e){let t=rt+1,n=De.length;for(;t<n;){const s=t+n>>>1,o=De[s],r=Cn(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function mo(e){if(!(e.flags&1)){const t=Cn(e),n=De[De.length-1];!n||!(e.flags&2)&&t>=Cn(n)?De.push(e):De.splice(oc(t),0,e),e.flags|=1,ii()}}function ii(){zn||(zn=ri.then(ci))}function rc(e){U(e)?en.push(...e):At&&e.id===-1?At.splice(Yt+1,0,e):e.flags&1||(en.push(e),e.flags|=1),ii()}function $o(e,t,n=rt+1){for(;n<De.length;n++){const s=De[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;De.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ai(e){if(en.length){const t=[...new Set(en)].sort((n,s)=>Cn(n)-Cn(s));if(en.length=0,At){At.push(...t);return}for(At=t,Yt=0;Yt<At.length;Yt++){const n=At[Yt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}At=null,Yt=0}}const Cn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ci(e){try{for(rt=0;rt<De.length;rt++){const t=De[rt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),In(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;rt<De.length;rt++){const t=De[rt];t&&(t.flags&=-2)}rt=-1,De.length=0,ai(),zn=null,(De.length||en.length)&&ci()}}let He=null,li=null;function Yn(e){const t=He;return He=e,li=e&&e.type.__scopeId||null,t}function ct(e,t=He,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Zn(-1);const r=Yn(t);let i;try{i=e(...o)}finally{Yn(r),s._d&&Zn(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function ui(e,t){if(He===null)return e;const n=bs(He),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,a,c=le]=t[o];r&&(G(r)&&(r={mounted:r,updated:r}),r.deep&&gt(i),s.push({dir:r,instance:n,value:i,oldValue:void 0,arg:a,modifiers:c}))}return e}function Lt(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let c=a.dir[s];c&&(bt(),Qe(c,n,8,[e.el,a,e,t]),vt())}}function Un(e,t){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[e]=t}}function Ye(e,t,n=!1){const s=xo();if(s||tn){let o=tn?tn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&G(t)?t.call(s&&s.proxy):t}}const ic=Symbol.for("v-scx"),ac=()=>Ye(ic);function Dt(e,t,n){return di(e,t,n)}function di(e,t,n=le){const{immediate:s,deep:o,flush:r,once:i}=n,a=xe({},n),c=t&&s||!t&&r!=="post";let u;if(Tn){if(r==="sync"){const m=ac();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=at,m.resume=at,m.pause=at,m}}const l=Ae;a.call=(m,v,A)=>Qe(m,l,v,A);let d=!1;r==="post"?a.scheduler=m=>{Fe(m,l&&l.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(m,v)=>{v?m():mo(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,l&&(m.id=l.uid,m.i=l))};const f=nc(e,t,a);return Tn&&(u?u.push(f):c&&f()),f}function cc(e,t,n){const s=this.proxy,o=be(e)?e.includes(".")?pi(s,e):()=>s[e]:e.bind(s,s);let r;G(t)?r=t:(r=t.handler,n=t);const i=On(this),a=di(o,r.bind(s),n);return i(),a}function pi(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const lc=Symbol("_vte"),fi=e=>e.__isTeleport,ht=Symbol("_leaveCb"),Bn=Symbol("_enterCb");function hi(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lt(()=>{e.isMounted=!0}),$n(()=>{e.isUnmounting=!0}),e}const Ge=[Function,Array],mi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ge,onEnter:Ge,onAfterEnter:Ge,onEnterCancelled:Ge,onBeforeLeave:Ge,onLeave:Ge,onAfterLeave:Ge,onLeaveCancelled:Ge,onBeforeAppear:Ge,onAppear:Ge,onAfterAppear:Ge,onAppearCancelled:Ge},gi=e=>{const t=e.subTree;return t.component?gi(t.component):t},uc={name:"BaseTransition",props:mi,setup(e,{slots:t}){const n=xo(),s=hi();return()=>{const o=t.default&&go(t.default(),!0);if(!o||!o.length)return;const r=bi(o),i=Q(e),{mode:a}=i;if(s.isLeaving)return As(r);const c=Oo(r);if(!c)return As(r);let u=Sn(c,i,s,n,d=>u=d);c.type!==Ie&&Wt(c,u);let l=n.subTree&&Oo(n.subTree);if(l&&l.type!==Ie&&!Ft(l,c)&&gi(n).type!==Ie){let d=Sn(l,i,s,n);if(Wt(l,d),a==="out-in"&&c.type!==Ie)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,l=void 0},As(r);a==="in-out"&&c.type!==Ie?d.delayLeave=(f,m,v)=>{const A=vi(s,l);A[String(l.key)]=l,f[ht]=()=>{m(),f[ht]=void 0,delete u.delayedLeave,l=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return r}}};function bi(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ie){t=n;break}}return t}const dc=uc;function vi(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Sn(e,t,n,s,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:v,onLeaveCancelled:A,onBeforeAppear:L,onAppear:D,onAfterAppear:M,onAppearCancelled:j}=t,N=String(e.key),z=vi(n,e),ce=(q,X)=>{q&&Qe(q,s,9,X)},ie=(q,X)=>{const ue=X[1];ce(q,X),U(q)?q.every($=>$.length<=1)&&ue():q.length<=1&&ue()},Se={mode:i,persisted:a,beforeEnter(q){let X=c;if(!n.isMounted)if(r)X=L||c;else return;q[ht]&&q[ht](!0);const ue=z[N];ue&&Ft(e,ue)&&ue.el[ht]&&ue.el[ht](),ce(X,[q])},enter(q){let X=u,ue=l,$=d;if(!n.isMounted)if(r)X=D||u,ue=M||l,$=j||d;else return;let te=!1;const _e=q[Bn]=je=>{te||(te=!0,je?ce($,[q]):ce(ue,[q]),Se.delayedLeave&&Se.delayedLeave(),q[Bn]=void 0)};X?ie(X,[q,_e]):_e()},leave(q,X){const ue=String(e.key);if(q[Bn]&&q[Bn](!0),n.isUnmounting)return X();ce(f,[q]);let $=!1;const te=q[ht]=_e=>{$||($=!0,X(),_e?ce(A,[q]):ce(v,[q]),q[ht]=void 0,z[ue]===e&&delete z[ue])};z[ue]=e,m?ie(m,[q,te]):te()},clone(q){const X=Sn(q,t,n,s,o);return o&&o(X),X}};return Se}function As(e){if(ps(e))return e=It(e),e.children=null,e}function Oo(e){if(!ps(e))return fi(e.type)&&e.children?bi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&G(n.default))return n.default()}}function Wt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Wt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function go(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===Z?(i.patchFlag&128&&o++,s=s.concat(go(i.children,t,a))):(t||i.type!==Ie)&&s.push(a!=null?It(i,{key:a}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function yi(e,t){return G(e)?xe({name:e.name},t,{setup:e}):e}function xi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Jn=new WeakMap;function bn(e,t,n,s,o=!1){if(U(e)){e.forEach((v,A)=>bn(v,t&&(U(t)?t[A]:t),n,s,o));return}if(vn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&bn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?bs(s.component):s.el,i=o?null:r,{i:a,r:c}=e,u=t&&t.r,l=a.refs===le?a.refs={}:a.refs,d=a.setupState,f=Q(d),m=d===le?$r:v=>oe(f,v);if(u!=null&&u!==c){if(Mo(t),be(u))l[u]=null,m(u)&&(d[u]=null);else if(Pe(u)){u.value=null;const v=t;v.k&&(l[v.k]=null)}}if(G(c))In(c,a,12,[i,l]);else{const v=be(c),A=Pe(c);if(v||A){const L=()=>{if(e.f){const D=v?m(c)?d[c]:l[c]:c.value;if(o)U(D)&&oo(D,r);else if(U(D))D.includes(r)||D.push(r);else if(v)l[c]=[r],m(c)&&(d[c]=l[c]);else{const M=[r];c.value=M,e.k&&(l[e.k]=M)}}else v?(l[c]=i,m(c)&&(d[c]=i)):A&&(c.value=i,e.k&&(l[e.k]=i))};if(i){const D=()=>{L(),Jn.delete(e)};D.id=-1,Jn.set(e,D),Fe(D,n)}else Mo(e),L()}}}function Mo(e){const t=Jn.get(e);t&&(t.flags|=8,Jn.delete(e))}cs().requestIdleCallback;cs().cancelIdleCallback;const vn=e=>!!e.type.__asyncLoader,ps=e=>e.type.__isKeepAlive;function pc(e,t){wi(e,"a",t)}function fc(e,t){wi(e,"da",t)}function wi(e,t,n=Ae){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(fs(t,s,n),n){let o=n.parent;for(;o&&o.parent;)ps(o.parent.vnode)&&hc(s,t,n,o),o=o.parent}}function hc(e,t,n,s){const o=fs(t,e,s,!0);ki(()=>{oo(s[t],o)},n)}function fs(e,t,n=Ae,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{bt();const a=On(n),c=Qe(t,n,e,i);return a(),vt(),c});return s?o.unshift(r):o.push(r),r}}const xt=e=>(t,n=Ae)=>{(!Tn||e==="sp")&&fs(e,(...s)=>t(...s),n)},mc=xt("bm"),lt=xt("m"),gc=xt("bu"),_i=xt("u"),$n=xt("bum"),ki=xt("um"),bc=xt("sp"),vc=xt("rtg"),yc=xt("rtc");function xc(e,t=Ae){fs("ec",e,t)}const Ci="components";function hs(e,t){return Ei(Ci,e,!0,t)||e}const Si=Symbol.for("v-ndc");function wc(e){return be(e)?Ei(Ci,e,!1)||e:e||Si}function Ei(e,t,n=!0,s=!1){const o=He||Ae;if(o){const r=o.type;{const a=rl(r,!1);if(a&&(a===t||a===Ke(t)||a===as(Ke(t))))return r}const i=Lo(o[e]||r[e],t)||Lo(o.appContext[e],t);return!i&&s?r:i}}function Lo(e,t){return e&&(e[t]||e[Ke(t)]||e[as(Ke(t))])}function Ce(e,t,n,s){let o;const r=n,i=U(e);if(i||be(e)){const a=i&&Ut(e);let c=!1,u=!1;a&&(c=!qe(e),u=yt(e),e=ls(e)),o=new Array(e.length);for(let l=0,d=e.length;l<d;l++)o[l]=t(c?u?nn(Je(e[l])):Je(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r)}else if(fe(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,r));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const l=a[c];o[c]=t(e[l],l,c,r)}}else o=[];return o}const Ws=e=>e?Gi(e)?bs(e):Ws(e.parent):null,yn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ws(e.parent),$root:e=>Ws(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Pi(e),$forceUpdate:e=>e.f||(e.f=()=>{mo(e.update)}),$nextTick:e=>e.n||(e.n=ds.bind(e.proxy)),$watch:e=>cc.bind(e)}),Ps=(e,t)=>e!==le&&!e.__isScriptSetup&&oe(e,t),_c={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:c}=e;if(t[0]!=="$"){const f=i[t];if(f!==void 0)switch(f){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(Ps(s,t))return i[t]=1,s[t];if(o!==le&&oe(o,t))return i[t]=2,o[t];if(oe(r,t))return i[t]=3,r[t];if(n!==le&&oe(n,t))return i[t]=4,n[t];Gs&&(i[t]=0)}}const u=yn[t];let l,d;if(u)return t==="$attrs"&&Ee(e.attrs,"get",""),u(e);if((l=a.__cssModules)&&(l=l[t]))return l;if(n!==le&&oe(n,t))return i[t]=4,n[t];if(d=c.config.globalProperties,oe(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return Ps(o,t)?(o[t]=n,!0):s!==le&&oe(s,t)?(s[t]=n,!0):oe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:r,type:i}},a){let c;return!!(n[a]||e!==le&&a[0]!=="$"&&oe(e,a)||Ps(t,a)||oe(r,a)||oe(s,a)||oe(yn,a)||oe(o.config.globalProperties,a)||(c=i.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:oe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function No(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Gs=!0;function kc(e){const t=Pi(e),n=e.proxy,s=e.ctx;Gs=!1,t.beforeCreate&&jo(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:f,beforeUpdate:m,updated:v,activated:A,deactivated:L,beforeDestroy:D,beforeUnmount:M,destroyed:j,unmounted:N,render:z,renderTracked:ce,renderTriggered:ie,errorCaptured:Se,serverPrefetch:q,expose:X,inheritAttrs:ue,components:$,directives:te,filters:_e}=t;if(u&&Cc(u,s,null),i)for(const ae in i){const ne=i[ae];G(ne)&&(s[ae]=ne.bind(n))}if(o){const ae=o.call(n,n);fe(ae)&&(e.data=Dn(ae))}if(Gs=!0,r)for(const ae in r){const ne=r[ae],ut=G(ne)?ne.bind(n,n):G(ne.get)?ne.get.bind(n,n):at,_t=!G(ne)&&G(ne.set)?ne.set.bind(n):at,Xe=ee({get:ut,set:_t});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Oe=>Xe.value=Oe})}if(a)for(const ae in a)Ai(a[ae],s,n,ae);if(c){const ae=G(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(ne=>{Un(ne,ae[ne])})}l&&jo(l,e,"c");function ve(ae,ne){U(ne)?ne.forEach(ut=>ae(ut.bind(n))):ne&&ae(ne.bind(n))}if(ve(mc,d),ve(lt,f),ve(gc,m),ve(_i,v),ve(pc,A),ve(fc,L),ve(xc,Se),ve(yc,ce),ve(vc,ie),ve($n,M),ve(ki,N),ve(bc,q),U(X))if(X.length){const ae=e.exposed||(e.exposed={});X.forEach(ne=>{Object.defineProperty(ae,ne,{get:()=>n[ne],set:ut=>n[ne]=ut,enumerable:!0})})}else e.exposed||(e.exposed={});z&&e.render===at&&(e.render=z),ue!=null&&(e.inheritAttrs=ue),$&&(e.components=$),te&&(e.directives=te),q&&xi(e)}function Cc(e,t,n=at){U(e)&&(e=qs(e));for(const s in e){const o=e[s];let r;fe(o)?"default"in o?r=Ye(o.from||s,o.default,!0):r=Ye(o.from||s):r=Ye(o),Pe(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function jo(e,t,n){Qe(U(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ai(e,t,n,s){let o=s.includes(".")?pi(n,s):()=>n[s];if(be(e)){const r=t[e];G(r)&&Dt(o,r)}else if(G(e))Dt(o,e.bind(n));else if(fe(e))if(U(e))e.forEach(r=>Ai(r,t,n,s));else{const r=G(e.handler)?e.handler.bind(n):t[e.handler];G(r)&&Dt(o,r,e)}}function Pi(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let c;return a?c=a:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(u=>Qn(c,u,i,!0)),Qn(c,t,i)),fe(t)&&r.set(t,c),c}function Qn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&Qn(e,r,n,!0),o&&o.forEach(i=>Qn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=Sc[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Sc={data:Bo,props:Fo,emits:Fo,methods:fn,computed:fn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:fn,directives:fn,watch:Ac,provide:Bo,inject:Ec};function Bo(e,t){return t?e?function(){return xe(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function Ec(e,t){return fn(qs(e),qs(t))}function qs(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function fn(e,t){return e?xe(Object.create(null),e,t):t}function Fo(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:xe(Object.create(null),No(e),No(t??{})):t}function Ac(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const s in t)n[s]=Te(e[s],t[s]);return n}function Ti(){return{app:null,config:{isNativeTag:$r,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pc=0;function Tc(e,t){return function(s,o=null){G(s)||(s=xe({},s)),o!=null&&!fe(o)&&(o=null);const r=Ti(),i=new WeakSet,a=[];let c=!1;const u=r.app={_uid:Pc++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:al,get config(){return r.config},set config(l){},use(l,...d){return i.has(l)||(l&&G(l.install)?(i.add(l),l.install(u,...d)):G(l)&&(i.add(l),l(u,...d))),u},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),u},component(l,d){return d?(r.components[l]=d,u):r.components[l]},directive(l,d){return d?(r.directives[l]=d,u):r.directives[l]},mount(l,d,f){if(!c){const m=u._ceVNode||K(s,o);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),e(m,l,f),c=!0,u._container=l,l.__vue_app__=u,bs(m.component)}},onUnmount(l){a.push(l)},unmount(){c&&(Qe(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(l,d){return r.provides[l]=d,u},runWithContext(l){const d=tn;tn=u;try{return l()}finally{tn=d}}};return u}}let tn=null;const Rc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${Gt(t)}Modifiers`];function Dc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||le;let o=n;const r=t.startsWith("update:"),i=r&&Rc(s,t.slice(7));i&&(i.trim&&(o=n.map(l=>be(l)?l.trim():l)),i.number&&(o=n.map(io)));let a,c=s[a=_s(t)]||s[a=_s(Ke(t))];!c&&r&&(c=s[a=_s(Gt(t))]),c&&Qe(c,e,6,o);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qe(u,e,6,o)}}const Ic=new WeakMap;function Ri(e,t,n=!1){const s=n?Ic:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!G(e)){const c=u=>{const l=Ri(u,t,!0);l&&(a=!0,xe(i,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(fe(e)&&s.set(e,null),null):(U(r)?r.forEach(c=>i[c]=null):xe(i,r),fe(e)&&s.set(e,i),i)}function ms(e,t){return!e||!os(t)?!1:(t=t.slice(2).replace(/Once$/,""),oe(e,t[0].toLowerCase()+t.slice(1))||oe(e,Gt(t))||oe(e,t))}function Ho(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:a,emit:c,render:u,renderCache:l,props:d,data:f,setupState:m,ctx:v,inheritAttrs:A}=e,L=Yn(e);let D,M;try{if(n.shapeFlag&4){const N=o||s,z=N;D=it(u.call(z,N,l,d,m,f,v)),M=a}else{const N=t;D=it(N.length>1?N(d,{attrs:a,slots:i,emit:c}):N(d,null)),M=t.props?a:$c(a)}}catch(N){xn.length=0,us(N,e,1),D=K(Ie)}let j=D;if(M&&A!==!1){const N=Object.keys(M),{shapeFlag:z}=j;N.length&&z&7&&(r&&N.some(so)&&(M=Oc(M,r)),j=It(j,M,!1,!0))}return n.dirs&&(j=It(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Wt(j,n.transition),D=j,Yn(L),D}const $c=e=>{let t;for(const n in e)(n==="class"||n==="style"||os(n))&&((t||(t={}))[n]=e[n]);return t},Oc=(e,t)=>{const n={};for(const s in e)(!so(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Mc(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:c}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Vo(s,i,u):!!i;if(c&8){const l=t.dynamicProps;for(let d=0;d<l.length;d++){const f=l[d];if(i[f]!==s[f]&&!ms(u,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Vo(s,i,u):!0:!!i;return!1}function Vo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!ms(n,r))return!0}return!1}function Lc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Di={},Ii=()=>Object.create(Di),$i=e=>Object.getPrototypeOf(e)===Di;function Nc(e,t,n,s=!1){const o={},r=Ii();e.propsDefaults=Object.create(null),Oi(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:ni(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function jc(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=Q(o),[c]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let d=0;d<l.length;d++){let f=l[d];if(ms(e.emitsOptions,f))continue;const m=t[f];if(c)if(oe(r,f))m!==r[f]&&(r[f]=m,u=!0);else{const v=Ke(f);o[v]=Ks(c,a,v,m,e,!1)}else m!==r[f]&&(r[f]=m,u=!0)}}}else{Oi(e,t,o,r)&&(u=!0);let l;for(const d in a)(!t||!oe(t,d)&&((l=Gt(d))===d||!oe(t,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(o[d]=Ks(c,a,d,void 0,e,!0)):delete o[d]);if(r!==a)for(const d in r)(!t||!oe(t,d))&&(delete r[d],u=!0)}u&&mt(e.attrs,"set","")}function Oi(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(hn(c))continue;const u=t[c];let l;o&&oe(o,l=Ke(c))?!r||!r.includes(l)?n[l]=u:(a||(a={}))[l]=u:ms(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(r){const c=Q(n),u=a||le;for(let l=0;l<r.length;l++){const d=r[l];n[d]=Ks(o,c,d,u[d],e,!oe(u,d))}}return i}function Ks(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=oe(i,"default");if(a&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&G(c)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const l=On(o);s=u[n]=c.call(null,t),l()}}else s=c;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===Gt(n))&&(s=!0))}return s}const Bc=new WeakMap;function Mi(e,t,n=!1){const s=n?Bc:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let c=!1;if(!G(e)){const l=d=>{c=!0;const[f,m]=Mi(d,t,!0);xe(i,f),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!r&&!c)return fe(e)&&s.set(e,Zt),Zt;if(U(r))for(let l=0;l<r.length;l++){const d=Ke(r[l]);Uo(d)&&(i[d]=le)}else if(r)for(const l in r){const d=Ke(l);if(Uo(d)){const f=r[l],m=i[d]=U(f)||G(f)?{type:f}:xe({},f),v=m.type;let A=!1,L=!0;if(U(v))for(let D=0;D<v.length;++D){const M=v[D],j=G(M)&&M.name;if(j==="Boolean"){A=!0;break}else j==="String"&&(L=!1)}else A=G(v)&&v.name==="Boolean";m[0]=A,m[1]=L,(A||oe(m,"default"))&&a.push(d)}}const u=[i,a];return fe(e)&&s.set(e,u),u}function Uo(e){return e[0]!=="$"&&!hn(e)}const bo=e=>e==="_"||e==="_ctx"||e==="$stable",vo=e=>U(e)?e.map(it):[it(e)],Fc=(e,t,n)=>{if(t._n)return t;const s=ct((...o)=>vo(t(...o)),n);return s._c=!1,s},Li=(e,t,n)=>{const s=e._ctx;for(const o in e){if(bo(o))continue;const r=e[o];if(G(r))t[o]=Fc(o,r,s);else if(r!=null){const i=vo(r);t[o]=()=>i}}},Ni=(e,t)=>{const n=vo(t);e.slots.default=()=>n},ji=(e,t,n)=>{for(const s in t)(n||!bo(s))&&(e[s]=t[s])},Hc=(e,t,n)=>{const s=e.slots=Ii();if(e.vnode.shapeFlag&32){const o=t._;o?(ji(s,t,n),n&&jr(s,"_",o,!0)):Li(t,s)}else t&&Ni(e,t)},Vc=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=le;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:ji(o,t,n):(r=!t.$stable,Li(t,o)),i=t}else t&&(Ni(e,t),i={default:1});if(r)for(const a in o)!bo(a)&&i[a]==null&&delete o[a]},Fe=Kc;function Uc(e){return Wc(e)}function Wc(e,t){const n=cs();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:f,setScopeId:m=at,insertStaticContent:v}=e,A=(p,h,b,y=null,_=null,x=null,T=void 0,P=null,E=!!h.dynamicChildren)=>{if(p===h)return;p&&!Ft(p,h)&&(y=w(p),Oe(p,_,x,!0),p=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:k,ref:H,shapeFlag:I}=h;switch(k){case gs:L(p,h,b,y);break;case Ie:D(p,h,b,y);break;case Wn:p==null&&M(h,b,y,T);break;case Z:$(p,h,b,y,_,x,T,P,E);break;default:I&1?z(p,h,b,y,_,x,T,P,E):I&6?te(p,h,b,y,_,x,T,P,E):(I&64||I&128)&&k.process(p,h,b,y,_,x,T,P,E,B)}H!=null&&_?bn(H,p&&p.ref,x,h||p,!h):H==null&&p&&p.ref!=null&&bn(p.ref,null,x,p,!0)},L=(p,h,b,y)=>{if(p==null)s(h.el=a(h.children),b,y);else{const _=h.el=p.el;h.children!==p.children&&u(_,h.children)}},D=(p,h,b,y)=>{p==null?s(h.el=c(h.children||""),b,y):h.el=p.el},M=(p,h,b,y)=>{[p.el,p.anchor]=v(p.children,h,b,y,p.el,p.anchor)},j=({el:p,anchor:h},b,y)=>{let _;for(;p&&p!==h;)_=f(p),s(p,b,y),p=_;s(h,b,y)},N=({el:p,anchor:h})=>{let b;for(;p&&p!==h;)b=f(p),o(p),p=b;o(h)},z=(p,h,b,y,_,x,T,P,E)=>{if(h.type==="svg"?T="svg":h.type==="math"&&(T="mathml"),p==null)ce(h,b,y,_,x,T,P,E);else{const k=p.el&&p.el._isVueCE?p.el:null;try{k&&k._beginPatch(),q(p,h,_,x,T,P,E)}finally{k&&k._endPatch()}}},ce=(p,h,b,y,_,x,T,P)=>{let E,k;const{props:H,shapeFlag:I,transition:F,dirs:W}=p;if(E=p.el=i(p.type,x,H&&H.is,H),I&8?l(E,p.children):I&16&&Se(p.children,E,null,y,_,Ts(p,x),T,P),W&&Lt(p,null,y,"created"),ie(E,p,p.scopeId,T,y),H){for(const de in H)de!=="value"&&!hn(de)&&r(E,de,null,H[de],x,y);"value"in H&&r(E,"value",null,H.value,x),(k=H.onVnodeBeforeMount)&&st(k,y,p)}W&&Lt(p,null,y,"beforeMount");const J=Gc(_,F);J&&F.beforeEnter(E),s(E,h,b),((k=H&&H.onVnodeMounted)||J||W)&&Fe(()=>{k&&st(k,y,p),J&&F.enter(E),W&&Lt(p,null,y,"mounted")},_)},ie=(p,h,b,y,_)=>{if(b&&m(p,b),y)for(let x=0;x<y.length;x++)m(p,y[x]);if(_){let x=_.subTree;if(h===x||Vi(x.type)&&(x.ssContent===h||x.ssFallback===h)){const T=_.vnode;ie(p,T,T.scopeId,T.slotScopeIds,_.parent)}}},Se=(p,h,b,y,_,x,T,P,E=0)=>{for(let k=E;k<p.length;k++){const H=p[k]=P?Pt(p[k]):it(p[k]);A(null,H,h,b,y,_,x,T,P)}},q=(p,h,b,y,_,x,T)=>{const P=h.el=p.el;let{patchFlag:E,dynamicChildren:k,dirs:H}=h;E|=p.patchFlag&16;const I=p.props||le,F=h.props||le;let W;if(b&&Nt(b,!1),(W=F.onVnodeBeforeUpdate)&&st(W,b,h,p),H&&Lt(h,p,b,"beforeUpdate"),b&&Nt(b,!0),(I.innerHTML&&F.innerHTML==null||I.textContent&&F.textContent==null)&&l(P,""),k?X(p.dynamicChildren,k,P,b,y,Ts(h,_),x):T||ne(p,h,P,null,b,y,Ts(h,_),x,!1),E>0){if(E&16)ue(P,I,F,b,_);else if(E&2&&I.class!==F.class&&r(P,"class",null,F.class,_),E&4&&r(P,"style",I.style,F.style,_),E&8){const J=h.dynamicProps;for(let de=0;de<J.length;de++){const re=J[de],Me=I[re],Le=F[re];(Le!==Me||re==="value")&&r(P,re,Me,Le,_,b)}}E&1&&p.children!==h.children&&l(P,h.children)}else!T&&k==null&&ue(P,I,F,b,_);((W=F.onVnodeUpdated)||H)&&Fe(()=>{W&&st(W,b,h,p),H&&Lt(h,p,b,"updated")},y)},X=(p,h,b,y,_,x,T)=>{for(let P=0;P<h.length;P++){const E=p[P],k=h[P],H=E.el&&(E.type===Z||!Ft(E,k)||E.shapeFlag&198)?d(E.el):b;A(E,k,H,null,y,_,x,T,!0)}},ue=(p,h,b,y,_)=>{if(h!==b){if(h!==le)for(const x in h)!hn(x)&&!(x in b)&&r(p,x,h[x],null,_,y);for(const x in b){if(hn(x))continue;const T=b[x],P=h[x];T!==P&&x!=="value"&&r(p,x,P,T,_,y)}"value"in b&&r(p,"value",h.value,b.value,_)}},$=(p,h,b,y,_,x,T,P,E)=>{const k=h.el=p?p.el:a(""),H=h.anchor=p?p.anchor:a("");let{patchFlag:I,dynamicChildren:F,slotScopeIds:W}=h;W&&(P=P?P.concat(W):W),p==null?(s(k,b,y),s(H,b,y),Se(h.children||[],b,H,_,x,T,P,E)):I>0&&I&64&&F&&p.dynamicChildren&&p.dynamicChildren.length===F.length?(X(p.dynamicChildren,F,b,_,x,T,P),(h.key!=null||_&&h===_.subTree)&&Bi(p,h,!0)):ne(p,h,b,H,_,x,T,P,E)},te=(p,h,b,y,_,x,T,P,E)=>{h.slotScopeIds=P,p==null?h.shapeFlag&512?_.ctx.activate(h,b,y,T,E):_e(h,b,y,_,x,T,E):je(p,h,E)},_e=(p,h,b,y,_,x,T)=>{const P=p.component=el(p,y,_);if(ps(p)&&(P.ctx.renderer=B),tl(P,!1,T),P.asyncDep){if(_&&_.registerDep(P,ve,T),!p.el){const E=P.subTree=K(Ie);D(null,E,h,b),p.placeholder=E.el}}else ve(P,p,h,b,_,x,T)},je=(p,h,b)=>{const y=h.component=p.component;if(Mc(p,h,b))if(y.asyncDep&&!y.asyncResolved){ae(y,h,b);return}else y.next=h,y.update();else h.el=p.el,y.vnode=h},ve=(p,h,b,y,_,x,T)=>{const P=()=>{if(p.isMounted){let{next:I,bu:F,u:W,parent:J,vnode:de}=p;{const tt=Fi(p);if(tt){I&&(I.el=de.el,ae(p,I,T)),tt.asyncDep.then(()=>{p.isUnmounted||P()});return}}let re=I,Me;Nt(p,!1),I?(I.el=de.el,ae(p,I,T)):I=de,F&&Vn(F),(Me=I.props&&I.props.onVnodeBeforeUpdate)&&st(Me,J,I,de),Nt(p,!0);const Le=Ho(p),et=p.subTree;p.subTree=Le,A(et,Le,d(et.el),w(et),p,_,x),I.el=Le.el,re===null&&Lc(p,Le.el),W&&Fe(W,_),(Me=I.props&&I.props.onVnodeUpdated)&&Fe(()=>st(Me,J,I,de),_)}else{let I;const{el:F,props:W}=h,{bm:J,m:de,parent:re,root:Me,type:Le}=p,et=vn(h);Nt(p,!1),J&&Vn(J),!et&&(I=W&&W.onVnodeBeforeMount)&&st(I,re,h),Nt(p,!0);{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(Le);const tt=p.subTree=Ho(p);A(null,tt,b,y,p,_,x),h.el=tt.el}if(de&&Fe(de,_),!et&&(I=W&&W.onVnodeMounted)){const tt=h;Fe(()=>st(I,re,tt),_)}(h.shapeFlag&256||re&&vn(re.vnode)&&re.vnode.shapeFlag&256)&&p.a&&Fe(p.a,_),p.isMounted=!0,h=b=y=null}};p.scope.on();const E=p.effect=new Vr(P);p.scope.off();const k=p.update=E.run.bind(E),H=p.job=E.runIfDirty.bind(E);H.i=p,H.id=p.uid,E.scheduler=()=>mo(H),Nt(p,!0),k()},ae=(p,h,b)=>{h.component=p;const y=p.vnode.props;p.vnode=h,p.next=null,jc(p,h.props,y,b),Vc(p,h.children,b),bt(),$o(p),vt()},ne=(p,h,b,y,_,x,T,P,E=!1)=>{const k=p&&p.children,H=p?p.shapeFlag:0,I=h.children,{patchFlag:F,shapeFlag:W}=h;if(F>0){if(F&128){_t(k,I,b,y,_,x,T,P,E);return}else if(F&256){ut(k,I,b,y,_,x,T,P,E);return}}W&8?(H&16&&We(k,_,x),I!==k&&l(b,I)):H&16?W&16?_t(k,I,b,y,_,x,T,P,E):We(k,_,x,!0):(H&8&&l(b,""),W&16&&Se(I,b,y,_,x,T,P,E))},ut=(p,h,b,y,_,x,T,P,E)=>{p=p||Zt,h=h||Zt;const k=p.length,H=h.length,I=Math.min(k,H);let F;for(F=0;F<I;F++){const W=h[F]=E?Pt(h[F]):it(h[F]);A(p[F],W,b,null,_,x,T,P,E)}k>H?We(p,_,x,!0,!1,I):Se(h,b,y,_,x,T,P,E,I)},_t=(p,h,b,y,_,x,T,P,E)=>{let k=0;const H=h.length;let I=p.length-1,F=H-1;for(;k<=I&&k<=F;){const W=p[k],J=h[k]=E?Pt(h[k]):it(h[k]);if(Ft(W,J))A(W,J,b,null,_,x,T,P,E);else break;k++}for(;k<=I&&k<=F;){const W=p[I],J=h[F]=E?Pt(h[F]):it(h[F]);if(Ft(W,J))A(W,J,b,null,_,x,T,P,E);else break;I--,F--}if(k>I){if(k<=F){const W=F+1,J=W<H?h[W].el:y;for(;k<=F;)A(null,h[k]=E?Pt(h[k]):it(h[k]),b,J,_,x,T,P,E),k++}}else if(k>F)for(;k<=I;)Oe(p[k],_,x,!0),k++;else{const W=k,J=k,de=new Map;for(k=J;k<=F;k++){const Be=h[k]=E?Pt(h[k]):it(h[k]);Be.key!=null&&de.set(Be.key,k)}let re,Me=0;const Le=F-J+1;let et=!1,tt=0;const cn=new Array(Le);for(k=0;k<Le;k++)cn[k]=0;for(k=W;k<=I;k++){const Be=p[k];if(Me>=Le){Oe(Be,_,x,!0);continue}let nt;if(Be.key!=null)nt=de.get(Be.key);else for(re=J;re<=F;re++)if(cn[re-J]===0&&Ft(Be,h[re])){nt=re;break}nt===void 0?Oe(Be,_,x,!0):(cn[nt-J]=k+1,nt>=tt?tt=nt:et=!0,A(Be,h[nt],b,null,_,x,T,P,E),Me++)}const Ao=et?qc(cn):Zt;for(re=Ao.length-1,k=Le-1;k>=0;k--){const Be=J+k,nt=h[Be],Po=h[Be+1],To=Be+1<H?Po.el||Hi(Po):y;cn[k]===0?A(null,nt,b,To,_,x,T,P,E):et&&(re<0||k!==Ao[re]?Xe(nt,b,To,2):re--)}}},Xe=(p,h,b,y,_=null)=>{const{el:x,type:T,transition:P,children:E,shapeFlag:k}=p;if(k&6){Xe(p.component.subTree,h,b,y);return}if(k&128){p.suspense.move(h,b,y);return}if(k&64){T.move(p,h,b,B);return}if(T===Z){s(x,h,b);for(let I=0;I<E.length;I++)Xe(E[I],h,b,y);s(p.anchor,h,b);return}if(T===Wn){j(p,h,b);return}if(y!==2&&k&1&&P)if(y===0)P.beforeEnter(x),s(x,h,b),Fe(()=>P.enter(x),_);else{const{leave:I,delayLeave:F,afterLeave:W}=P,J=()=>{p.ctx.isUnmounted?o(x):s(x,h,b)},de=()=>{x._isLeaving&&x[ht](!0),I(x,()=>{J(),W&&W()})};F?F(x,J,de):de()}else s(x,h,b)},Oe=(p,h,b,y=!1,_=!1)=>{const{type:x,props:T,ref:P,children:E,dynamicChildren:k,shapeFlag:H,patchFlag:I,dirs:F,cacheIndex:W}=p;if(I===-2&&(_=!1),P!=null&&(bt(),bn(P,null,b,p,!0),vt()),W!=null&&(h.renderCache[W]=void 0),H&256){h.ctx.deactivate(p);return}const J=H&1&&F,de=!vn(p);let re;if(de&&(re=T&&T.onVnodeBeforeUnmount)&&st(re,h,p),H&6)Mt(p.component,b,y);else{if(H&128){p.suspense.unmount(b,y);return}J&&Lt(p,null,h,"beforeUnmount"),H&64?p.type.remove(p,h,b,B,y):k&&!k.hasOnce&&(x!==Z||I>0&&I&64)?We(k,h,b,!1,!0):(x===Z&&I&384||!_&&H&16)&&We(E,h,b),y&&qt(p)}(de&&(re=T&&T.onVnodeUnmounted)||J)&&Fe(()=>{re&&st(re,h,p),J&&Lt(p,null,h,"unmounted")},b)},qt=p=>{const{type:h,el:b,anchor:y,transition:_}=p;if(h===Z){Kt(b,y);return}if(h===Wn){N(p);return}const x=()=>{o(b),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(p.shapeFlag&1&&_&&!_.persisted){const{leave:T,delayLeave:P}=_,E=()=>T(b,x);P?P(p.el,x,E):E()}else x()},Kt=(p,h)=>{let b;for(;p!==h;)b=f(p),o(p),p=b;o(h)},Mt=(p,h,b)=>{const{bum:y,scope:_,job:x,subTree:T,um:P,m:E,a:k}=p;Wo(E),Wo(k),y&&Vn(y),_.stop(),x&&(x.flags|=8,Oe(T,p,h,b)),P&&Fe(P,h),Fe(()=>{p.isUnmounted=!0},h)},We=(p,h,b,y=!1,_=!1,x=0)=>{for(let T=x;T<p.length;T++)Oe(p[T],h,b,y,_)},w=p=>{if(p.shapeFlag&6)return w(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const h=f(p.anchor||p.el),b=h&&h[lc];return b?f(b):h};let O=!1;const R=(p,h,b)=>{let y;p==null?h._vnode&&(Oe(h._vnode,null,null,!0),y=h._vnode.component):A(h._vnode||null,p,h,null,null,null,b),h._vnode=p,O||(O=!0,$o(y),ai(),O=!1)},B={p:A,um:Oe,m:Xe,r:qt,mt:_e,mc:Se,pc:ne,pbc:X,n:w,o:e};return{render:R,hydrate:void 0,createApp:Tc(R)}}function Ts({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Nt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Gc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Bi(e,t,n=!1){const s=e.children,o=t.children;if(U(s)&&U(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=Pt(o[r]),a.el=i.el),!n&&a.patchFlag!==-2&&Bi(i,a)),a.type===gs&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=r+(e.type===Z?1:0)),a.type===Ie&&!a.el&&(a.el=i.el)}}function qc(e){const t=e.slice(),n=[0];let s,o,r,i,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<u?r=a+1:i=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Fi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fi(t)}function Wo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Hi(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Hi(t.subTree):null}const Vi=e=>e.__isSuspense;function Kc(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):rc(e)}const Z=Symbol.for("v-fgt"),gs=Symbol.for("v-txt"),Ie=Symbol.for("v-cmt"),Wn=Symbol.for("v-stc"),xn=[];let Ve=null;function C(e=!1){xn.push(Ve=e?null:[])}function zc(){xn.pop(),Ve=xn[xn.length-1]||null}let En=1;function Zn(e,t=!1){En+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function Ui(e){return e.dynamicChildren=En>0?Ve||Zt:null,zc(),En>0&&Ve&&Ve.push(e),e}function S(e,t,n,s,o,r){return Ui(g(e,t,n,s,o,r,!0))}function An(e,t,n,s,o){return Ui(K(e,t,n,s,o,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Wi=({key:e})=>e??null,Gn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?be(e)||Pe(e)||G(e)?{i:He,r:e,k:t,f:!!n}:e:null);function g(e,t=null,n=null,s=0,o=null,r=e===Z?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wi(t),ref:t&&Gn(t),scopeId:li,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:He};return a?(yo(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),En>0&&!i&&Ve&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ve.push(c),c}const K=Yc;function Yc(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===Si)&&(e=Ie),Xn(e)){const a=It(e,t,!0);return n&&yo(a,n),En>0&&!r&&Ve&&(a.shapeFlag&6?Ve[Ve.indexOf(e)]=a:Ve.push(a)),a.patchFlag=-2,a}if(il(e)&&(e=e.__vccOpts),t){t=Jc(t);let{class:a,style:c}=t;a&&!be(a)&&(t.class=Ot(a)),fe(c)&&(ho(c)&&!U(c)&&(c=xe({},c)),t.style=ye(c))}const i=be(e)?1:Vi(e)?128:fi(e)?64:fe(e)?4:G(e)?2:0;return g(e,t,n,s,o,i,r,!0)}function Jc(e){return e?ho(e)||$i(e)?xe({},e):e:null}function It(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:a,transition:c}=e,u=t?Qc(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Wi(u),ref:t&&t.ref?n&&r?U(r)?r.concat(Gn(t)):[r,Gn(t)]:Gn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Z?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Wt(l,c.clone(l)),l}function Ue(e=" ",t=0){return K(gs,null,e,t)}function Pn(e,t){const n=K(Wn,null,e);return n.staticCount=t,n}function he(e="",t=!1){return t?(C(),An(Ie,null,e)):K(Ie,null,e)}function it(e){return e==null||typeof e=="boolean"?K(Ie):U(e)?K(Z,null,e.slice()):Xn(e)?Pt(e):K(gs,null,String(e))}function Pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function yo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),yo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!$i(t)?t._ctx=He:o===3&&He&&(He.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:He},n=32):(t=String(t),s&64?(n=16,t=[Ue(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Ot([t.class,s.class]));else if(o==="style")t.style=ye([t.style,s.style]);else if(os(o)){const r=t[o],i=s[o];i&&r!==i&&!(U(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function st(e,t,n,s=null){Qe(e,t,7,[n,s])}const Zc=Ti();let Xc=0;function el(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Zc,r={uid:Xc++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ta(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mi(s,o),emitsOptions:Ri(s,o),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Dc.bind(null,r),e.ce&&e.ce(r),r}let Ae=null;const xo=()=>Ae||He;let es,zs;{const e=cs(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};es=t("__VUE_INSTANCE_SETTERS__",n=>Ae=n),zs=t("__VUE_SSR_SETTERS__",n=>Tn=n)}const On=e=>{const t=Ae;return es(e),e.scope.on(),()=>{e.scope.off(),es(t)}},Go=()=>{Ae&&Ae.scope.off(),es(null)};function Gi(e){return e.vnode.shapeFlag&4}let Tn=!1;function tl(e,t=!1,n=!1){t&&zs(t);const{props:s,children:o}=e.vnode,r=Gi(e);Nc(e,s,r,t),Hc(e,o,n||t);const i=r?nl(e,t):void 0;return t&&zs(!1),i}function nl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,_c);const{setup:s}=n;if(s){bt();const o=e.setupContext=s.length>1?ol(e):null,r=On(e),i=In(s,e,0,[e.props,o]),a=Mr(i);if(vt(),r(),(a||e.sp)&&!vn(e)&&xi(e),a){if(i.then(Go,Go),t)return i.then(c=>{qo(e,c)}).catch(c=>{us(c,e,0)});e.asyncDep=i}else qo(e,i)}else qi(e)}function qo(e,t,n){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=oi(t)),qi(e)}function qi(e,t,n){const s=e.type;e.render||(e.render=s.render||at);{const o=On(e);bt();try{kc(e)}finally{vt(),o()}}}const sl={get(e,t){return Ee(e,"get",""),e[t]}};function ol(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,sl),slots:e.slots,emit:e.emit,expose:t}}function bs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(oi(Ya(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yn)return yn[n](e)},has(t,n){return n in t||n in yn}})):e.proxy}function rl(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function il(e){return G(e)&&"__vccOpts"in e}const ee=(e,t)=>ec(e,t,Tn);function wo(e,t,n){try{Zn(-1);const s=arguments.length;return s===2?fe(t)&&!U(t)?Xn(t)?K(e,null,[t]):K(e,t):K(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xn(n)&&(n=[n]),K(e,t,n))}finally{Zn(1)}}const al="3.5.27";let Ys;const Ko=typeof window<"u"&&window.trustedTypes;if(Ko)try{Ys=Ko.createPolicy("vue",{createHTML:e=>e})}catch{}const Ki=Ys?e=>Ys.createHTML(e):e=>e,cl="http://www.w3.org/2000/svg",ll="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,zo=ft&&ft.createElement("template"),ul={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?ft.createElementNS(cl,e):t==="mathml"?ft.createElementNS(ll,e):n?ft.createElement(e,{is:n}):ft.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{zo.innerHTML=Ki(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=zo.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},kt="transition",un="animation",sn=Symbol("_vtc"),zi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Yi=xe({},mi,zi),dl=e=>(e.displayName="Transition",e.props=Yi,e),vs=dl((e,{slots:t})=>wo(dc,Ji(e),t)),jt=(e,t=[])=>{U(e)?e.forEach(n=>n(...t)):e&&e(...t)},Yo=e=>e?U(e)?e.some(t=>t.length>1):e.length>1:!1;function Ji(e){const t={};for(const $ in e)$ in zi||(t[$]=e[$]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=i,appearToClass:l=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,v=pl(o),A=v&&v[0],L=v&&v[1],{onBeforeEnter:D,onEnter:M,onEnterCancelled:j,onLeave:N,onLeaveCancelled:z,onBeforeAppear:ce=D,onAppear:ie=M,onAppearCancelled:Se=j}=t,q=($,te,_e,je)=>{$._enterCancelled=je,St($,te?l:a),St($,te?u:i),_e&&_e()},X=($,te)=>{$._isLeaving=!1,St($,d),St($,m),St($,f),te&&te()},ue=$=>(te,_e)=>{const je=$?ie:M,ve=()=>q(te,$,_e);jt(je,[te,ve]),Jo(()=>{St(te,$?c:r),ot(te,$?l:a),Yo(je)||Qo(te,s,A,ve)})};return xe(t,{onBeforeEnter($){jt(D,[$]),ot($,r),ot($,i)},onBeforeAppear($){jt(ce,[$]),ot($,c),ot($,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave($,te){$._isLeaving=!0;const _e=()=>X($,te);ot($,d),$._enterCancelled?(ot($,f),Js($)):(Js($),ot($,f)),Jo(()=>{$._isLeaving&&(St($,d),ot($,m),Yo(N)||Qo($,s,L,_e))}),jt(N,[$,_e])},onEnterCancelled($){q($,!1,void 0,!0),jt(j,[$])},onAppearCancelled($){q($,!0,void 0,!0),jt(Se,[$])},onLeaveCancelled($){X($),jt(z,[$])}})}function pl(e){if(e==null)return null;if(fe(e))return[Rs(e.enter),Rs(e.leave)];{const t=Rs(e);return[t,t]}}function Rs(e){return _a(e)}function ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[sn]||(e[sn]=new Set)).add(t)}function St(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[sn];n&&(n.delete(t),n.size||(e[sn]=void 0))}function Jo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let fl=0;function Qo(e,t,n,s){const o=e._endId=++fl,r=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:a,propCount:c}=Qi(e,t);if(!i)return s();const u=i+"end";let l=0;const d=()=>{e.removeEventListener(u,f),r()},f=m=>{m.target===e&&++l>=c&&d()};setTimeout(()=>{l<c&&d()},a+1),e.addEventListener(u,f)}function Qi(e,t){const n=window.getComputedStyle(e),s=v=>(n[v]||"").split(", "),o=s(`${kt}Delay`),r=s(`${kt}Duration`),i=Zo(o,r),a=s(`${un}Delay`),c=s(`${un}Duration`),u=Zo(a,c);let l=null,d=0,f=0;t===kt?i>0&&(l=kt,d=i,f=r.length):t===un?u>0&&(l=un,d=u,f=c.length):(d=Math.max(i,u),l=d>0?i>u?kt:un:null,f=l?l===kt?r.length:c.length:0);const m=l===kt&&/\b(?:transform|all)(?:,|$)/.test(s(`${kt}Property`).toString());return{type:l,timeout:d,propCount:f,hasTransform:m}}function Zo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Xo(n)+Xo(e[s])))}function Xo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Js(e){return(e?e.ownerDocument:document).body.offsetHeight}function hl(e,t,n){const s=e[sn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const er=Symbol("_vod"),ml=Symbol("_vsh"),gl=Symbol(""),bl=/(?:^|;)\s*display\s*:/;function vl(e,t,n){const s=e.style,o=be(n);let r=!1;if(n&&!o){if(t)if(be(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&qn(s,a,"")}else for(const i in t)n[i]==null&&qn(s,i,"");for(const i in n)i==="display"&&(r=!0),qn(s,i,n[i])}else if(o){if(t!==n){const i=s[gl];i&&(n+=";"+i),s.cssText=n,r=bl.test(n)}}else t&&e.removeAttribute("style");er in e&&(e[er]=r?s.display:"",e[ml]&&(s.display="none"))}const tr=/\s*!important$/;function qn(e,t,n){if(U(n))n.forEach(s=>qn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=yl(e,t);tr.test(n)?e.setProperty(Gt(s),n.replace(tr,""),"important"):e[s]=n}}const nr=["Webkit","Moz","ms"],Ds={};function yl(e,t){const n=Ds[t];if(n)return n;let s=Ke(t);if(s!=="filter"&&s in e)return Ds[t]=s;s=as(s);for(let o=0;o<nr.length;o++){const r=nr[o]+s;if(r in e)return Ds[t]=r}return t}const sr="http://www.w3.org/1999/xlink";function or(e,t,n,s,o,r=Pa(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(sr,t.slice(6,t.length)):e.setAttributeNS(sr,t,n):n==null||r&&!Br(n)?e.removeAttribute(t):e.setAttribute(t,r?"":$t(n)?String(n):n)}function rr(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ki(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Br(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function Jt(e,t,n,s){e.addEventListener(t,n,s)}function xl(e,t,n,s){e.removeEventListener(t,n,s)}const ir=Symbol("_vei");function wl(e,t,n,s,o=null){const r=e[ir]||(e[ir]={}),i=r[t];if(s&&i)i.value=s;else{const[a,c]=_l(t);if(s){const u=r[t]=Sl(s,o);Jt(e,a,u,c)}else i&&(xl(e,a,i,c),r[t]=void 0)}}const ar=/(?:Once|Passive|Capture)$/;function _l(e){let t;if(ar.test(e)){t={};let s;for(;s=e.match(ar);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gt(e.slice(2)),t]}let Is=0;const kl=Promise.resolve(),Cl=()=>Is||(kl.then(()=>Is=0),Is=Date.now());function Sl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qe(El(s,n.value),t,5,[s])};return n.value=e,n.attached=Cl(),n}function El(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const cr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Al=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?hl(e,s,i):t==="style"?vl(e,n,s):os(t)?so(t)||wl(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Pl(e,t,s,i))?(rr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&or(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!be(s))?rr(e,Ke(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),or(e,t,s,i))};function Pl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&cr(t)&&G(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return cr(t)&&be(n)?!1:t in e}const Zi=new WeakMap,Xi=new WeakMap,ts=Symbol("_moveCb"),lr=Symbol("_enterCb"),Tl=e=>(delete e.props.mode,e),Rl=Tl({name:"TransitionGroup",props:xe({},Yi,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=xo(),s=hi();let o,r;return _i(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Ml(o[0].el,n.vnode.el,i)){o=[];return}o.forEach(Il),o.forEach($l);const a=o.filter(Ol);Js(n.vnode.el),a.forEach(c=>{const u=c.el,l=u.style;ot(u,i),l.transform=l.webkitTransform=l.transitionDuration="";const d=u[ts]=f=>{f&&f.target!==u||(!f||f.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[ts]=null,St(u,i))};u.addEventListener("transitionend",d)}),o=[]}),()=>{const i=Q(e),a=Ji(i);let c=i.tag||Z;if(o=[],r)for(let u=0;u<r.length;u++){const l=r[u];l.el&&l.el instanceof Element&&(o.push(l),Wt(l,Sn(l,a,s,n)),Zi.set(l,{left:l.el.offsetLeft,top:l.el.offsetTop}))}r=t.default?go(t.default()):[];for(let u=0;u<r.length;u++){const l=r[u];l.key!=null&&Wt(l,Sn(l,a,s,n))}return K(c,null,r)}}}),Dl=Rl;function Il(e){const t=e.el;t[ts]&&t[ts](),t[lr]&&t[lr]()}function $l(e){Xi.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function Ol(e){const t=Zi.get(e),n=Xi.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",e}}function Ml(e,t,n){const s=e.cloneNode(),o=e[sn];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=Qi(s);return r.removeChild(s),i}const ur=e=>{const t=e.props["onUpdate:modelValue"]||!1;return U(t)?n=>Vn(t,n):t};function Ll(e){e.target.composing=!0}function dr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const $s=Symbol("_assign");function pr(e,t,n){return t&&(e=e.trim()),n&&(e=io(e)),e}const ea={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[$s]=ur(o);const r=s||o.props&&o.props.type==="number";Jt(e,t?"change":"input",i=>{i.target.composing||e[$s](pr(e.value,n,r))}),(n||r)&&Jt(e,"change",()=>{e.value=pr(e.value,n,r)}),t||(Jt(e,"compositionstart",Ll),Jt(e,"compositionend",dr),Jt(e,"change",dr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},i){if(e[$s]=ur(i),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?io(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===c)||(e.value=c))}},Nl=["ctrl","shift","alt","meta"],jl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Nl.some(n=>e[`${n}Key`]&&!t.includes(n))},ta=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...r)=>{for(let i=0;i<t.length;i++){const a=jl[t[i]];if(a&&a(o,t))return}return e(o,...r)}))},Bl=xe({patchProp:Al},ul);let fr;function Fl(){return fr||(fr=Uc(Bl))}const Hl=((...e)=>{const t=Fl().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Ul(s);if(!o)return;const r=t._component;!G(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,Vl(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t});function Vl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ul(e){return be(e)?document.querySelector(e):e}const Qt=typeof document<"u";function na(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Wl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&na(e.default)}const se=Object.assign;function Os(e,t){const n={};for(const s in t){const o=t[s];n[s]=Ze(o)?o.map(e):e(o)}return n}const wn=()=>{},Ze=Array.isArray;function hr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const sa=/#/g,Gl=/&/g,ql=/\//g,Kl=/=/g,zl=/\?/g,oa=/\+/g,Yl=/%5B/g,Jl=/%5D/g,ra=/%5E/g,Ql=/%60/g,ia=/%7B/g,Zl=/%7C/g,aa=/%7D/g,Xl=/%20/g;function _o(e){return e==null?"":encodeURI(""+e).replace(Zl,"|").replace(Yl,"[").replace(Jl,"]")}function eu(e){return _o(e).replace(ia,"{").replace(aa,"}").replace(ra,"^")}function Qs(e){return _o(e).replace(oa,"%2B").replace(Xl,"+").replace(sa,"%23").replace(Gl,"%26").replace(Ql,"`").replace(ia,"{").replace(aa,"}").replace(ra,"^")}function tu(e){return Qs(e).replace(Kl,"%3D")}function nu(e){return _o(e).replace(sa,"%23").replace(zl,"%3F")}function su(e){return nu(e).replace(ql,"%2F")}function Rn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const ou=/\/$/,ru=e=>e.replace(ou,"");function Ms(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(s=t.slice(0,c),r=t.slice(c,a>0?a:t.length),o=e(r.slice(1))),a>=0&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=lu(s??t,n),{fullPath:s+r+i,path:s,query:o,hash:Rn(i)}}function iu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function mr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function au(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&on(t.matched[s],n.matched[o])&&ca(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function on(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ca(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!cu(e[n],t[n]))return!1;return!0}function cu(e,t){return Ze(e)?gr(e,t):Ze(t)?gr(t,e):e?.valueOf()===t?.valueOf()}function gr(e,t){return Ze(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function lu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,a;for(i=0;i<s.length;i++)if(a=s[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Zs=(function(e){return e.pop="pop",e.push="push",e})({}),Ls=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function uu(e){if(!e)if(Qt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ru(e)}const du=/^[^#]+#/;function pu(e,t){return e.replace(du,"#")+t}function fu(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ys=()=>({left:window.scrollX,top:window.scrollY});function hu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=fu(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function br(e,t){return(history.state?history.state.position-t:-1)+e}const Xs=new Map;function mu(e,t){Xs.set(e,t)}function gu(e){const t=Xs.get(e);return Xs.delete(e),t}function bu(e){return typeof e=="string"||e&&typeof e=="object"}function la(e){return typeof e=="string"||typeof e=="symbol"}let ge=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ua=Symbol("");ge.MATCHER_NOT_FOUND+"",ge.NAVIGATION_GUARD_REDIRECT+"",ge.NAVIGATION_ABORTED+"",ge.NAVIGATION_CANCELLED+"",ge.NAVIGATION_DUPLICATED+"";function rn(e,t){return se(new Error,{type:e,[ua]:!0},t)}function pt(e,t){return e instanceof Error&&ua in e&&(t==null||!!(e.type&t))}const vu=["params","query","hash"];function yu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of vu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function xu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(oa," "),r=o.indexOf("="),i=Rn(r<0?o:o.slice(0,r)),a=r<0?null:Rn(o.slice(r+1));if(i in t){let c=t[i];Ze(c)||(c=t[i]=[c]),c.push(a)}else t[i]=a}return t}function vr(e){let t="";for(let n in e){const s=e[n];if(n=tu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ze(s)?s.map(o=>o&&Qs(o)):[s&&Qs(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function wu(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ze(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const _u=Symbol(""),yr=Symbol(""),xs=Symbol(""),ko=Symbol(""),eo=Symbol("");function dn(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Tt(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const u=f=>{f===!1?c(rn(ge.NAVIGATION_ABORTED,{from:n,to:t})):f instanceof Error?c(f):bu(f)?c(rn(ge.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(i&&s.enterCallbacks[o]===i&&typeof f=="function"&&i.push(f),a())},l=r(()=>e.call(s&&s.instances[o],t,n,u));let d=Promise.resolve(l);e.length<3&&(d=d.then(u)),d.catch(f=>c(f))})}function Ns(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const a in i.components){let c=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(na(c)){const u=(c.__vccOpts||c)[t];u&&r.push(Tt(u,n,s,i,a,o))}else{let u=c();r.push(()=>u.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=Wl(l)?l.default:l;i.mods[a]=l,i.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Tt(f,n,s,i,a,o)()}))}}return r}function ku(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(u=>on(u,a))?s.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>on(u,c))||o.push(c))}return[n,s,o]}let Cu=()=>location.protocol+"//"+location.host;function da(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(i);return a[0]!=="/"&&(a="/"+a),mr(a,"")}return mr(n,e)+s+o}function Su(e,t,n,s){let o=[],r=[],i=null;const a=({state:f})=>{const m=da(e,location),v=n.value,A=t.value;let L=0;if(f){if(n.value=m,t.value=f,i&&i===v){i=null;return}L=A?f.position-A.position:0}else s(m);o.forEach(D=>{D(n.value,v,{delta:L,type:Zs.pop,direction:L?L>0?Ls.forward:Ls.back:Ls.unknown})})};function c(){i=n.value}function u(f){o.push(f);const m=()=>{const v=o.indexOf(f);v>-1&&o.splice(v,1)};return r.push(m),m}function l(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(se({},f.state,{scroll:ys()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",l),document.removeEventListener("visibilitychange",l)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",l),document.addEventListener("visibilitychange",l),{pauseListeners:c,listen:u,destroy:d}}function xr(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?ys():null}}function Eu(e){const{history:t,location:n}=window,s={value:da(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,l){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Cu()+e+c;try{t[l?"replaceState":"pushState"](u,"",f),o.value=u}catch(m){console.error(m),n[l?"replace":"assign"](f)}}function i(c,u){r(c,se({},t.state,xr(o.value.back,c,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=c}function a(c,u){const l=se({},o.value,t.state,{forward:c,scroll:ys()});r(l.current,l,!0),r(c,se({},xr(s.value,c,null),{position:l.position+1},u),!1),s.value=c}return{location:s,state:o,push:a,replace:i}}function Au(e){e=uu(e);const t=Eu(e),n=Su(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=se({location:"",base:e,go:s,createHref:pu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let Ht=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var we=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(we||{});const Pu={type:Ht.Static,value:""},Tu=/[a-zA-Z0-9_]/;function Ru(e){if(!e)return[[]];if(e==="/")return[[Pu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=we.Static,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,c,u="",l="";function d(){u&&(n===we.Static?r.push({type:Ht.Static,value:u}):n===we.Param||n===we.ParamRegExp||n===we.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ht.Param,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==we.ParamRegExp){s=n,n=we.EscapeNext;continue}switch(n){case we.Static:c==="/"?(u&&d(),i()):c===":"?(d(),n=we.Param):f();break;case we.EscapeNext:f(),n=s;break;case we.Param:c==="("?n=we.ParamRegExp:Tu.test(c)?f():(d(),n=we.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case we.ParamRegExp:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=we.ParamRegExpEnd:l+=c;break;case we.ParamRegExpEnd:d(),n=we.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===we.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),o}const wr="[^/]+?",Du={sensitive:!1,strict:!1,start:!0,end:!0};var Re=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Re||{});const Iu=/[.+*?^${}()[\]/\\]/g;function $u(e,t){const n=se({},Du,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const l=u.length?[]:[Re.Root];n.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const f=u[d];let m=Re.Segment+(n.sensitive?Re.BonusCaseSensitive:0);if(f.type===Ht.Static)d||(o+="/"),o+=f.value.replace(Iu,"\\$&"),m+=Re.Static;else if(f.type===Ht.Param){const{value:v,repeatable:A,optional:L,regexp:D}=f;r.push({name:v,repeatable:A,optional:L});const M=D||wr;if(M!==wr){m+=Re.BonusCustomRegExp;try{`${M}`}catch(N){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+N.message)}}let j=A?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(j=L&&u.length<2?`(?:/${j})`:"/"+j),L&&(j+="?"),o+=j,m+=Re.Dynamic,L&&(m+=Re.BonusOptional),A&&(m+=Re.BonusRepeatable),M===".*"&&(m+=Re.BonusWildcard)}l.push(m)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Re.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const l=u.match(i),d={};if(!l)return null;for(let f=1;f<l.length;f++){const m=l[f]||"",v=r[f-1];d[v.name]=m&&v.repeatable?m.split("/"):m}return d}function c(u){let l="",d=!1;for(const f of e){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const m of f)if(m.type===Ht.Static)l+=m.value;else if(m.type===Ht.Param){const{value:v,repeatable:A,optional:L}=m,D=v in u?u[v]:"";if(Ze(D)&&!A)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Ze(D)?D.join("/"):D;if(!M)if(L)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);l+=M}}return l||"/"}return{re:i,score:s,keys:r,parse:a,stringify:c}}function Ou(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Re.Static+Re.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Re.Static+Re.Segment?1:-1:0}function pa(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=Ou(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(_r(s))return 1;if(_r(o))return-1}return o.length-s.length}function _r(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Mu={strict:!1,end:!0,sensitive:!1};function Lu(e,t,n){const s=$u(Ru(e.path),n),o=se(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Nu(e,t){const n=[],s=new Map;t=hr(Mu,t);function o(d){return s.get(d)}function r(d,f,m){const v=!m,A=Cr(d);A.aliasOf=m&&m.record;const L=hr(t,d),D=[A];if("alias"in d){const N=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of N)D.push(Cr(se({},A,{components:m?m.record.components:A.components,path:z,aliasOf:m?m.record:A})))}let M,j;for(const N of D){const{path:z}=N;if(f&&z[0]!=="/"){const ce=f.record.path,ie=ce[ce.length-1]==="/"?"":"/";N.path=f.record.path+(z&&ie+z)}if(M=Lu(N,f,L),m?m.alias.push(M):(j=j||M,j!==M&&j.alias.push(M),v&&d.name&&!Sr(M)&&i(d.name)),fa(M)&&c(M),A.children){const ce=A.children;for(let ie=0;ie<ce.length;ie++)r(ce[ie],M,m&&m.children[ie])}m=m||M}return j?()=>{i(j)}:wn}function i(d){if(la(d)){const f=s.get(d);f&&(s.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return n}function c(d){const f=Fu(d,n);n.splice(f,0,d),d.record.name&&!Sr(d)&&s.set(d.record.name,d)}function u(d,f){let m,v={},A,L;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw rn(ge.MATCHER_NOT_FOUND,{location:d});L=m.record.name,v=se(kr(f.params,m.keys.filter(j=>!j.optional).concat(m.parent?m.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),d.params&&kr(d.params,m.keys.map(j=>j.name))),A=m.stringify(v)}else if(d.path!=null)A=d.path,m=n.find(j=>j.re.test(A)),m&&(v=m.parse(A),L=m.record.name);else{if(m=f.name?s.get(f.name):n.find(j=>j.re.test(f.path)),!m)throw rn(ge.MATCHER_NOT_FOUND,{location:d,currentLocation:f});L=m.record.name,v=se({},f.params,d.params),A=m.stringify(v)}const D=[];let M=m;for(;M;)D.unshift(M.record),M=M.parent;return{name:L,path:A,params:v,matched:D,meta:Bu(D)}}e.forEach(d=>r(d));function l(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:i,clearRoutes:l,getRoutes:a,getRecordMatcher:o}}function kr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Cr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ju(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ju(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Sr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Bu(e){return e.reduce((t,n)=>se(t,n.meta),{})}function Fu(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;pa(e,t[r])<0?s=r:n=r+1}const o=Hu(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function Hu(e){let t=e;for(;t=t.parent;)if(fa(t)&&pa(e,t)===0)return t}function fa({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Er(e){const t=Ye(xs),n=Ye(ko),s=ee(()=>{const c=$e(e.to);return t.resolve(c)}),o=ee(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const f=d.findIndex(on.bind(null,l));if(f>-1)return f;const m=Ar(c[u-2]);return u>1&&Ar(l)===m&&d[d.length-1].path!==m?d.findIndex(on.bind(null,c[u-2])):f}),r=ee(()=>o.value>-1&&qu(n.params,s.value.params)),i=ee(()=>o.value>-1&&o.value===n.matched.length-1&&ca(n.params,s.value.params));function a(c={}){if(Gu(c)){const u=t[$e(e.replace)?"replace":"push"]($e(e.to)).catch(wn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:ee(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}function Vu(e){return e.length===1?e[0]:e}const Uu=yi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Er,setup(e,{slots:t}){const n=Dn(Er(e)),{options:s}=Ye(xs),o=ee(()=>({[Pr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Pr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&Vu(t.default(n));return e.custom?r:wo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Wu=Uu;function Gu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qu(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Ze(o)||o.length!==s.length||s.some((r,i)=>r.valueOf()!==o[i].valueOf()))return!1}return!0}function Ar(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Pr=(e,t,n)=>e??t??n,Ku=yi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ye(eo),o=ee(()=>e.route||s.value),r=Ye(yr,0),i=ee(()=>{let u=$e(r);const{matched:l}=o.value;let d;for(;(d=l[u])&&!d.components;)u++;return u}),a=ee(()=>o.value.matched[i.value]);Un(yr,ee(()=>i.value+1)),Un(_u,a),Un(eo,o);const c=me();return Dt(()=>[c.value,a.value,e.name],([u,l,d],[f,m,v])=>{l&&(l.instances[d]=u,m&&m!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=m.leaveGuards),l.updateGuards.size||(l.updateGuards=m.updateGuards))),u&&l&&(!m||!on(l,m)||!f)&&(l.enterCallbacks[d]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=o.value,l=e.name,d=a.value,f=d&&d.components[l];if(!f)return Tr(n.default,{Component:f,route:u});const m=d.props[l],v=m?m===!0?u.params:typeof m=="function"?m(u):m:null,L=wo(f,se({},v,t,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(d.instances[l]=null)},ref:c}));return Tr(n.default,{Component:L,route:u})||L}}});function Tr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const zu=Ku;function Yu(e){const t=Nu(e.routes,e),n=e.parseQuery||xu,s=e.stringifyQuery||vr,o=e.history,r=dn(),i=dn(),a=dn(),c=Ja(Ct);let u=Ct;Qt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Os.bind(null,w=>""+w),d=Os.bind(null,su),f=Os.bind(null,Rn);function m(w,O){let R,B;return la(w)?(R=t.getRecordMatcher(w),B=O):B=w,t.addRoute(B,R)}function v(w){const O=t.getRecordMatcher(w);O&&t.removeRoute(O)}function A(){return t.getRoutes().map(w=>w.record)}function L(w){return!!t.getRecordMatcher(w)}function D(w,O){if(O=se({},O||c.value),typeof w=="string"){const b=Ms(n,w,O.path),y=t.resolve({path:b.path},O),_=o.createHref(b.fullPath);return se(b,y,{params:f(y.params),hash:Rn(b.hash),redirectedFrom:void 0,href:_})}let R;if(w.path!=null)R=se({},w,{path:Ms(n,w.path,O.path).path});else{const b=se({},w.params);for(const y in b)b[y]==null&&delete b[y];R=se({},w,{params:d(b)}),O.params=d(O.params)}const B=t.resolve(R,O),Y=w.hash||"";B.params=l(f(B.params));const p=iu(s,se({},w,{hash:eu(Y),path:B.path})),h=o.createHref(p);return se({fullPath:p,hash:Y,query:s===vr?wu(w.query):w.query||{}},B,{redirectedFrom:void 0,href:h})}function M(w){return typeof w=="string"?Ms(n,w,c.value.path):se({},w)}function j(w,O){if(u!==w)return rn(ge.NAVIGATION_CANCELLED,{from:O,to:w})}function N(w){return ie(w)}function z(w){return N(se(M(w),{replace:!0}))}function ce(w,O){const R=w.matched[w.matched.length-1];if(R&&R.redirect){const{redirect:B}=R;let Y=typeof B=="function"?B(w,O):B;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=M(Y):{path:Y},Y.params={}),se({query:w.query,hash:w.hash,params:Y.path!=null?{}:w.params},Y)}}function ie(w,O){const R=u=D(w),B=c.value,Y=w.state,p=w.force,h=w.replace===!0,b=ce(R,B);if(b)return ie(se(M(b),{state:typeof b=="object"?se({},Y,b.state):Y,force:p,replace:h}),O||R);const y=R;y.redirectedFrom=O;let _;return!p&&au(s,B,R)&&(_=rn(ge.NAVIGATION_DUPLICATED,{to:y,from:B}),Xe(B,B,!0,!1)),(_?Promise.resolve(_):X(y,B)).catch(x=>pt(x)?pt(x,ge.NAVIGATION_GUARD_REDIRECT)?x:_t(x):ne(x,y,B)).then(x=>{if(x){if(pt(x,ge.NAVIGATION_GUARD_REDIRECT))return ie(se({replace:h},M(x.to),{state:typeof x.to=="object"?se({},Y,x.to.state):Y,force:p}),O||y)}else x=$(y,B,!0,h,Y);return ue(y,B,x),x})}function Se(w,O){const R=j(w,O);return R?Promise.reject(R):Promise.resolve()}function q(w){const O=Kt.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(w):w()}function X(w,O){let R;const[B,Y,p]=ku(w,O);R=Ns(B.reverse(),"beforeRouteLeave",w,O);for(const b of B)b.leaveGuards.forEach(y=>{R.push(Tt(y,w,O))});const h=Se.bind(null,w,O);return R.push(h),We(R).then(()=>{R=[];for(const b of r.list())R.push(Tt(b,w,O));return R.push(h),We(R)}).then(()=>{R=Ns(Y,"beforeRouteUpdate",w,O);for(const b of Y)b.updateGuards.forEach(y=>{R.push(Tt(y,w,O))});return R.push(h),We(R)}).then(()=>{R=[];for(const b of p)if(b.beforeEnter)if(Ze(b.beforeEnter))for(const y of b.beforeEnter)R.push(Tt(y,w,O));else R.push(Tt(b.beforeEnter,w,O));return R.push(h),We(R)}).then(()=>(w.matched.forEach(b=>b.enterCallbacks={}),R=Ns(p,"beforeRouteEnter",w,O,q),R.push(h),We(R))).then(()=>{R=[];for(const b of i.list())R.push(Tt(b,w,O));return R.push(h),We(R)}).catch(b=>pt(b,ge.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function ue(w,O,R){a.list().forEach(B=>q(()=>B(w,O,R)))}function $(w,O,R,B,Y){const p=j(w,O);if(p)return p;const h=O===Ct,b=Qt?history.state:{};R&&(B||h?o.replace(w.fullPath,se({scroll:h&&b&&b.scroll},Y)):o.push(w.fullPath,Y)),c.value=w,Xe(w,O,R,h),_t()}let te;function _e(){te||(te=o.listen((w,O,R)=>{if(!Mt.listening)return;const B=D(w),Y=ce(B,Mt.currentRoute.value);if(Y){ie(se(Y,{replace:!0,force:!0}),B).catch(wn);return}u=B;const p=c.value;Qt&&mu(br(p.fullPath,R.delta),ys()),X(B,p).catch(h=>pt(h,ge.NAVIGATION_ABORTED|ge.NAVIGATION_CANCELLED)?h:pt(h,ge.NAVIGATION_GUARD_REDIRECT)?(ie(se(M(h.to),{force:!0}),B).then(b=>{pt(b,ge.NAVIGATION_ABORTED|ge.NAVIGATION_DUPLICATED)&&!R.delta&&R.type===Zs.pop&&o.go(-1,!1)}).catch(wn),Promise.reject()):(R.delta&&o.go(-R.delta,!1),ne(h,B,p))).then(h=>{h=h||$(B,p,!1),h&&(R.delta&&!pt(h,ge.NAVIGATION_CANCELLED)?o.go(-R.delta,!1):R.type===Zs.pop&&pt(h,ge.NAVIGATION_ABORTED|ge.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),ue(B,p,h)}).catch(wn)}))}let je=dn(),ve=dn(),ae;function ne(w,O,R){_t(w);const B=ve.list();return B.length?B.forEach(Y=>Y(w,O,R)):console.error(w),Promise.reject(w)}function ut(){return ae&&c.value!==Ct?Promise.resolve():new Promise((w,O)=>{je.add([w,O])})}function _t(w){return ae||(ae=!w,_e(),je.list().forEach(([O,R])=>w?R(w):O()),je.reset()),w}function Xe(w,O,R,B){const{scrollBehavior:Y}=e;if(!Qt||!Y)return Promise.resolve();const p=!R&&gu(br(w.fullPath,0))||(B||!R)&&history.state&&history.state.scroll||null;return ds().then(()=>Y(w,O,p)).then(h=>h&&hu(h)).catch(h=>ne(h,w,O))}const Oe=w=>o.go(w);let qt;const Kt=new Set,Mt={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:L,getRoutes:A,resolve:D,options:e,push:N,replace:z,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:ve.add,isReady:ut,install(w){w.component("RouterLink",Wu),w.component("RouterView",zu),w.config.globalProperties.$router=Mt,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(c)}),Qt&&!qt&&c.value===Ct&&(qt=!0,N(o.location).catch(B=>{}));const O={};for(const B in Ct)Object.defineProperty(O,B,{get:()=>c.value[B],enumerable:!0});w.provide(xs,Mt),w.provide(ko,ni(O)),w.provide(eo,c);const R=w.unmount;Kt.add(w),w.unmount=function(){Kt.delete(w),Kt.size<1&&(u=Ct,te&&te(),te=null,c.value=Ct,qt=!1,ae=!1),R()}}};function We(w){return w.reduce((O,R)=>O.then(()=>q(R)),Promise.resolve())}return Mt}function Mn(){return Ye(xs)}function Co(e){return Ye(ko)}const Ju={__name:"App",setup(e){const t=Mn(),n=me(!0);return t.isReady().then(()=>{setTimeout(()=>{n.value=!1},100)}),(s,o)=>{const r=hs("router-view");return C(),An(r,null,{default:ct(({Component:i,route:a})=>[K(vs,{name:n.value?"":"page",mode:"out-in"},{default:ct(()=>[(C(),An(wc(i),{key:a.path}))]),_:2},1032,["name"])]),_:1})}}},Rr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",white:"#cdd6f4"},Qu=[{id:"posts",label:"posts",href:"/posts",external:!1,accentColor:"mauve"},{id:"projects",label:"projects",href:"/projects",external:!1,accentColor:"lavender"},{id:"github",label:"github",href:"https://github.com/Hecker-01",external:!0,accentColor:"white"}];function Zu(){return Qu.map(e=>({...e,accentColor:Rr[e.accentColor]||Rr.mauve}))}const ke=Dn({discordUser:null,spotify:null,discordStatus:"offline",discordStatusColor:"text-catppuccin-subtle",editorActivity:null,isConnected:!1,isLoading:!0});class Xu{constructor(){this.ws=null,this.heartbeat=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.maxAttempts=5,this.userId="766897363050037248",this.isConnecting=!1}connect(){if(!(this.isConnecting||this.ws&&this.ws.readyState===WebSocket.OPEN)){this.isConnecting=!0,ke.isLoading=!0;try{this.ws=new WebSocket("wss://api.lanyard.rest/socket"),this.ws.onopen=()=>{this.isConnecting=!1,this.reconnectAttempts=0,ke.isConnected=!0,this.ws.send(JSON.stringify({op:2,d:{subscribe_to_id:this.userId}}))},this.ws.onmessage=t=>{try{this.handleMessage(JSON.parse(t.data))}catch{}},this.ws.onclose=t=>{this.isConnecting=!1,ke.isConnected=!1,this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),t.code!==1e3&&this.reconnectAttempts<this.maxAttempts&&this.scheduleReconnect()},this.ws.onerror=()=>{this.isConnecting=!1,ke.isConnected=!1}}catch{this.isConnecting=!1,ke.isLoading=!1,this.scheduleReconnect()}}}handleMessage(t){t.op===1?this.startHeartbeat(t.d.heartbeat_interval):t.op===0&&(t.t==="INIT_STATE"||t.t==="PRESENCE_UPDATE")&&(this.updatePresence(t.d),ke.isLoading=!1)}updatePresence(t){t.discord_user&&(ke.discordUser={username:t.discord_user.username,discriminator:t.discord_user.discriminator,avatar:t.discord_user.avatar,id:t.discord_user.id}),ke.spotify=t.spotify?{song:t.spotify.song,artist:t.spotify.artist,track_id:t.spotify.track_id}:null,t.discord_status&&(ke.discordStatus=t.discord_status,ke.discordStatusColor=t.discord_status==="online"?"text-catppuccin-gold":"text-catppuccin-subtle"),ke.editorActivity=t.activities?.find(n=>n.name==="Visual Studio Code"||n.name==="Code"||n.name==="Zed")}startHeartbeat(t){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({op:3}))},t)}scheduleReconnect(){this.reconnectTimeout&&clearTimeout(this.reconnectTimeout),this.reconnectAttempts++;const t=Math.min(1e3*Math.pow(2,this.reconnectAttempts-1),3e4);this.reconnectTimeout=setTimeout(()=>this.connect(),t)}disconnect(){this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),this.ws&&(this.ws.close(1e3,"Manual disconnect"),this.ws=null),ke.isConnected=!1}}const ed=new Xu;ed.connect();const wt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},td={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},nd={class:"flex gap-4 sm:gap-6 text-sm bg-catppuccin-surface/10 rounded-lg p-4 items-center"},sd={class:"hidden sm:block flex-shrink-0 ascii-tooltip-wrapper"},od={class:"text-catppuccin-mauve text-xs select-none ascii-art","aria-label":"Art credit: @vilthuril.rah on Instagram"},rd={class:"space-y-0.5 min-w-0 flex-1"},id={key:0,class:"flex"},ad={class:"text-catppuccin-text truncate"},cd={key:1,class:"flex"},ld={class:"text-catppuccin-text"},ud={key:2,class:"flex"},dd={class:"text-catppuccin-text truncate"},pd={key:3,class:"flex"},fd={class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},hd={class:"text-catppuccin-text truncate"},md={key:0},gd={key:1,class:"text-catppuccin-subtle"},bd={key:2},vd={__name:"NeofetchStatus",setup(e){const t=ee(()=>ke.discordStatusColor),n=ee(()=>ke.spotify),s=ee(()=>ke.discordStatus),o=ee(()=>ke.discordUser),r=ee(()=>ke.editorActivity),i=ee(()=>ke.isLoading),a=me({name:"",version:""});lt(()=>{const d=navigator.userAgent;let f="Unknown",m="";d.includes("Firefox/")?(f="Firefox",m=d.match(/Firefox\/(\d+(\.\d+)?)/)?.[1]||""):d.includes("Edg/")?(f="Edge",m=d.match(/Edg\/(\d+(\.\d+)?)/)?.[1]||""):d.includes("Chrome/")?(f="Chrome",m=d.match(/Chrome\/(\d+(\.\d+)?)/)?.[1]||""):d.includes("Safari/")&&!d.includes("Chrome")?(f="Safari",m=d.match(/Version\/(\d+(\.\d+)?)/)?.[1]||""):(d.includes("Opera")||d.includes("OPR/"))&&(f="Opera",m=d.match(/(?:Opera|OPR)\/(\d+(\.\d+)?)/)?.[1]||""),a.value={name:f,version:m}});const c=`
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
`),u=ee(()=>{if(!r.value)return null;if(r.value.details&&r.value.details.toLowerCase().includes("idling"))return"idling";const d=r.value.name,f=d==="Zed",A=d==="IntelliJ IDEA Ultimate"||d==="IntelliJ IDEA"||d==="Android Studio";let L="",D="";return A?(L=r.value.details||"",D=r.value.state||""):f?(L=r.value.state||"",D=r.value.details||""):(L=r.value.details||"",D=r.value.state||""),L=L.replace(/editing /i,"").replace(/working on /i,"").trim(),D=D.replace(/in /i,"").replace(/workspace: /i,"").trim(),{name:d,workspace:D,filename:L}}),l=ee(()=>{if(!u.value||u.value==="idling")return null;const d=u.value.name;return d==="Zed"?"zed":d==="IntelliJ IDEA Ultimate"||d==="IntelliJ IDEA"?"intellij":d==="Android Studio"?"android-studio":"vscode"});return(d,f)=>(C(),S("div",td,[f[10]||(f[10]=g("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ neofetch --live",-1)),g("div",nd,[g("div",sd,[g("pre",od,[(C(!0),S(Z,null,Ce($e(c),(m,v)=>(C(),S(Z,{key:v},[Ue(V(m)+`
`,1)],64))),128))]),f[0]||(f[0]=g("span",{class:"ascii-tooltip"},[Ue("Art by "),g("a",{href:"https://www.instagram.com/vilthuril.rah/",target:"_blank",rel:"noopener noreferrer",class:"ascii-tooltip-link"},"@vilthuril.rah"),Ue(" on Instagram")],-1))]),g("div",rd,[f[8]||(f[8]=Pn('<div class="mb-1" data-v-d7f88577><span class="text-catppuccin-mauve font-bold" data-v-d7f88577>heck</span><span class="text-catppuccin-blue font-bold" data-v-d7f88577>OS</span><span class="text-catppuccin-subtle" data-v-d7f88577> (v0.1.0)</span></div><div class="text-catppuccin-surface mb-2" data-v-d7f88577>------------------</div>',2)),a.value.name?(C(),S("div",id,[f[1]||(f[1]=g("span",{class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},"browser",-1)),f[2]||(f[2]=g("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),g("span",ad,V(a.value.name)+" "+V(a.value.version),1)])):he("",!0),!i.value&&o.value?(C(),S("div",cd,[f[3]||(f[3]=g("span",{class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},"discord",-1)),f[4]||(f[4]=g("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),g("span",ld,V(o.value.username),1),g("span",{class:Ot([t.value,"ml-1"])},"["+V(s.value)+"]",3)])):he("",!0),!i.value&&n.value?(C(),S("div",ud,[f[5]||(f[5]=g("span",{class:"text-catppuccin-mauve font-bold w-20 flex-shrink-0"},"spotify",-1)),f[6]||(f[6]=g("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),g("span",dd,V(n.value.song)+" - "+V(n.value.artist),1)])):he("",!0),!i.value&&r.value&&u.value&&u.value!=="idling"&&(u.value.workspace||u.value.filename)?(C(),S("div",pd,[g("span",fd,V(l.value),1),f[7]||(f[7]=g("span",{class:"text-catppuccin-subtle mr-1"},"-",-1)),g("span",hd,[u.value.workspace?(C(),S("span",md,V(u.value.workspace.toLowerCase()),1)):he("",!0),u.value.workspace&&u.value.filename?(C(),S("span",gd,"/")):he("",!0),u.value.filename?(C(),S("span",bd,V(u.value.filename.toLowerCase()),1)):he("",!0)])])):he("",!0),f[9]||(f[9]=Pn('<div class="text-catppuccin-surface mb-2" data-v-d7f88577>------------------</div><div class="flex gap-0.5 mt-3" data-v-d7f88577><span class="w-4 h-4 rounded-sm bg-catppuccin-red" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-peach" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-yellow" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-green" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-teal" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-blue" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-mauve" data-v-d7f88577></span><span class="w-4 h-4 rounded-sm bg-catppuccin-pink" data-v-d7f88577></span></div>',2))])])]))}},yd=wt(vd,[["__scopeId","data-v-d7f88577"]]),xd={class:"mb-6"},wd={class:"mb-6"},_d={class:"flex items-center flex-wrap gap-3 text-sm mt-4"},kd=["href"],Cd={__name:"HeroSection",setup(e){const t=Zu();return(n,s)=>{const o=hs("router-link");return C(),S("div",xd,[g("div",wd,[s[3]||(s[3]=Pn('<div class="text-catppuccin-subtle text-sm mb-2" data-v-0bbc42c2>~$ whoami</div><h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2" data-v-0bbc42c2><span class="text-catppuccin-mauve" data-v-0bbc42c2>jesse</span><span class="text-catppuccin-subtle" data-v-0bbc42c2>@</span><span class="text-catppuccin-blue" data-v-0bbc42c2>heckr.dev</span></h1><div class="text-sm text-catppuccin-gray 6" data-v-0bbc42c2><span class="text-catppuccin-subtle" data-v-0bbc42c2>aka </span><span class="text-catppuccin-green" data-v-0bbc42c2>Hecker_01</span></div>',3)),g("div",_d,[(C(!0),S(Z,null,Ce($e(t),r=>(C(),S(Z,{key:r.id},[r.external?(C(),S("a",{key:1,href:r.href,target:"_blank",class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group",style:ye({"--accent-color":r.accentColor})},[s[1]||(s[1]=g("span",{class:"text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1)),g("span",{class:"font-medium transition-colors",style:ye({color:r.accentColor})},"~/"+V(r.label),5),s[2]||(s[2]=g("svg",{class:"w-3 h-3 text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1))],12,kd)):(C(),An(o,{key:0,to:r.href,class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group",style:ye({"--accent-color":r.accentColor})},{default:ct(()=>[s[0]||(s[0]=g("span",{class:"text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1)),g("span",{class:"font-medium transition-colors",style:ye({color:r.accentColor})},"~/"+V(r.label),5)]),_:2},1032,["to","style"]))],64))),128))])]),s[4]||(s[4]=g("div",{class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},[g("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cat about.txt"),g("p",{class:"text-catppuccin-text leading-relaxed mb-4"},[Ue(" Hi! I'm Jesse, I code things for Minecraft, Discord, random CLI tools, websites, apps and more. "),g("br"),Ue(" My passion is backend development, but I also enjoy working on frontend and mobile projects. "),g("br"),Ue(" I have experience in a lot of different programming languages and frameworks, and I love learning new ones! ")])],-1)),K(yd)])}}},Sd=wt(Cd,[["__scopeId","data-v-0bbc42c2"]]),Ed={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},Ad={key:0,class:"text-sm text-catppuccin-subtle"},Pd={key:1,class:"text-sm text-catppuccin-text"},Td={key:0,class:"text-catppuccin-subtle"},Rd={key:2,class:"text-sm text-catppuccin-subtle"},Dd={__name:"LanguagesList",props:{languages:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){return(t,n)=>(C(),S("div",Ed,[n[0]||(n[0]=g("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls ~/tools",-1)),e.loading?(C(),S("div",Ad," loading languages... ")):e.languages.length?(C(),S("div",Pd,[(C(!0),S(Z,null,Ce(e.languages,(s,o)=>(C(),S("span",{key:s.language},[Ue(V(s.language)+"("+V(s.count)+")",1),o<e.languages.length-1?(C(),S("span",Td," | ")):he("",!0)]))),128))])):(C(),S("div",Rd,"no languages found"))]))}},Id=`---
title: MCBE Pack Decryptor
slug: mcbe-pack-decryptor
description: Python CLI that decrypts encrypted Minecraft Bedrock Edition marketplace packs using AES-CFB.
coverImage: /screenshot-mcbe-decryptor.png
accentColor: green
tags: [Python, Minecraft, Cryptography, CLI]
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
`,$d=`---
title: Portfolio
slug: portfolio
description: Built with Vue.js and Tailwind CSS, showcasing my projects and skills.
coverImage: /screenshot.png
accentColor: lavender
tags: [Vue, Tailwind, Vite, Markdown, Frontend]
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
- **HTTP**: Axios (GitHub API, contribution API)
- **Presence**: Lanyard WebSocket API
- **Hosting**: Static deployment
`,Od=`---
title: reCodr
slug: recodr
description: Desktop video re-encoder with hardware-accelerated GPU encoding via ffmpeg.
coverImage: /screenshot-recodr.png
accentColor: mauve
tags: [Electron, ffmpeg, Video Encoding, Desktop App, Hardware Acceleration]
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
`,Md=`---
title: satisSuite
slug: satissuite
description: Modular Minecraft plugin suite for Spigot/Paper servers, covering moderation, player management, and server utilities.
coverImage: /screenshot-satissuite.png
accentColor: mauve
tags: [java, minecraft, plugin, spigot]
url: https://satissuite.heckr.dev
status: in-progress
unlisted: false
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
`,Ld=`---
title: Wordr
slug: wordr
description: Client-side Markdown to DOCX converter
coverImage: /screenshot-wordr.png
accentColor: pink
tags: [vue, markdown, docx, vite, open-source]
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
`,Nd=`---
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
`,Dr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",maroon:"#eba0ac",flamingo:"#f2cdcd"},jd=Object.assign({"/projects/mcbe-pack-decryptor.md":Id,"/projects/portfolio.md":$d,"/projects/recodr.md":Od,"/projects/satissuite.md":Md,"/projects/wordr.md":Ld,"/projects/yume-ramen.md":Nd}),Bd=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const c=(u,l)=>{l=l.trim(),l.startsWith("[")&&l.endsWith("]")?o[u]=l.slice(1,-1).split(",").map(d=>d.trim()):l==="true"?o[u]=!0:l==="false"?o[u]=!1:o[u]=l};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&c(i,a);const[d,...f]=u.split(":");if(!d||d.trim()==="")return;i=d.trim(),a=f.join(":").trim()}}),i&&a&&c(i,a),{frontmatter:o,content:s}},Fd=()=>{const e=[];let t=1;return Object.entries(jd).forEach(([n,s])=>{const{frontmatter:o,content:r}=Bd(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,description:o.description||"",coverImage:o.coverImage||null,accentColor:o.accentColor||"mauve",accentColorHex:Dr[o.accentColor]||Dr.mauve,tags:o.tags||[],url:o.url||null,github:o.github||null,status:o.status||"active",unlisted:o.unlisted===!0,content:r.trim()})}),e};let Fn=null;const ws=(e=!1)=>(Fn||(Fn=Fd()),(e?[...Fn]:Fn.filter(n=>!n.unlisted)).sort((n,s)=>n.title.localeCompare(s.title))),Hd=e=>ws(!0).find(t=>t.slug===e),Vd=()=>{const e=new Set;return ws().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()};function Ud(){return ws().map(e=>({id:e.id,slug:e.slug,name:e.title,description:e.description,link:e.url||e.github||"#",screenshot:e.coverImage,accentColor:e.accentColorHex}))}const Wd={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},Gd={key:0,class:"text-sm text-catppuccin-subtle"},qd={class:"lg:flex-1 lg:relative"},Kd={key:0,class:"w-full flex-1 overflow-hidden bg-catppuccin-surface/30"},zd=["src","alt"],Yd={class:"px-3 py-3 flex-shrink-0"},Jd={class:"flex items-start gap-3"},Qd={class:"flex-1 min-w-0"},Zd={class:"text-xs text-catppuccin-gray leading-relaxed"},Xd={key:0,class:"flex justify-center gap-1.5 mt-3 flex-shrink-0"},ep=["onClick"],tp={__name:"ShowcaseCarousel",setup(e){const t=Mn(),n=me([]),s=me(0),o=me(!1);let r=null;const i=ee(()=>n.value.length?n.value[s.value]:null),a=c=>{t.push({path:"/projects",query:{project:c}})};return lt(()=>{n.value=Ud(),n.value.length>1&&(r=setInterval(()=>{o.value||(s.value=(s.value+1)%n.value.length)},1e4))}),$n(()=>{r&&clearInterval(r)}),(c,u)=>(C(),S("div",Wd,[u[5]||(u[5]=g("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ cat ~/showcase",-1)),n.value.length?(C(),S("div",{key:1,class:"relative lg:flex-1 flex flex-col",onMouseenter:u[2]||(u[2]=l=>o.value=!0),onMouseleave:u[3]||(u[3]=l=>o.value=!1)},[g("div",qd,[K(vs,{name:"showcase",mode:"out-in"},{default:ct(()=>[i.value?(C(),S("div",{key:i.value.id,onClick:u[0]||(u[0]=l=>a(i.value.slug)),class:"group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col cursor-pointer",style:ye({borderColor:`${i.value.accentColor}40`})},[i.value.screenshot?(C(),S("div",Kd,[g("img",{src:i.value.screenshot,alt:i.value.name,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,zd)])):he("",!0),g("div",Yd,[g("div",Jd,[g("span",{class:"transition-colors",style:ye({color:i.value.accentColor})},">",4),g("div",Qd,[g("h3",{class:"text-sm font-medium text-catppuccin-text transition-colors mb-1",style:ye({color:i.value.accentColor})},V(i.value.name),5),g("p",Zd,V(i.value.description),1)])])])],4)):he("",!0)]),_:1})]),n.value.length>1?(C(),S("div",Xd,[(C(!0),S(Z,null,Ce(n.value,(l,d)=>(C(),S("button",{key:`dot-${l.id}`,onClick:f=>s.value=d,class:Ot(["w-2 h-2.5 rounded-full transition-all",d===s.value?"bg-catppuccin-mauve w-4":"bg-catppuccin-surface/60 hover:bg-catppuccin-surface"]),style:ye(d===s.value?{backgroundColor:i.value.accentColor}:{})},null,14,ep))),128))])):he("",!0),g("button",{onClick:u[1]||(u[1]=l=>$e(t).push("/projects")),class:"mt-3 w-full py-2 px-3 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-all flex items-center justify-center gap-2"},[...u[4]||(u[4]=[g("span",null,"more projects",-1),g("span",null,"→",-1)])])],32)):(C(),S("div",Gd," no items to showcase "))]))}},np=wt(tp,[["__scopeId","data-v-5e646ea4"]]),So="hecker-01",ha=async()=>{try{const e=[];let t=1;const n=100;for(;;){const r=await fetch(`https://api.github.com/users/${So}/repos?per_page=${n}&page=${t}`);if(!r.ok)break;const i=await r.json();if(!i.length||(e.push(...i),i.length<n))break;t++}const s={};e.forEach(r=>{r.language&&(s[r.language]=(s[r.language]||0)+1)});const o=Object.entries(s).sort((r,i)=>i[1]-r[1]).map(([r,i])=>({language:r,count:i}));return{repos:e,languages:o,totalRepos:e.length}}catch(e){return console.error("Error fetching GitHub data:",e),{repos:[],languages:[],totalRepos:0}}},sp=async()=>{const t=new Date;t.getFullYear();try{const n=await fetch(`https://github-contributions-api.jogruber.de/v4/${So}?y=last`);if(!n.ok)throw new Error("Failed to fetch contribution data");const s=await n.json(),o=[];if(s.contributions&&s.contributions.forEach(r=>{o.push({date:r.date,count:r.count})}),o.length>0){const i=new Date(t);i.setDate(i.getDate()-371+1);const a=[];for(let c=0;c<371;c++){const u=new Date(i);u.setDate(u.getDate()+c);const l=u.toISOString().split("T")[0],d=o.find(f=>f.date===l);a.push({date:l,count:d?d.count:0})}return a}throw new Error("No contributions data available")}catch(n){console.error("Error fetching contribution data:",n);const s=new Map;for(let o=370;o>=0;o--){const r=new Date(t);r.setDate(r.getDate()-o);const i=r.toISOString().split("T")[0];s.set(i,0)}return Array.from(s.entries()).sort((o,r)=>o[0].localeCompare(r[0])).map(([o,r])=>({date:o,count:r}))}},js=e=>e===0?0:e<=2?1:e<=5?2:e<=8?3:4,op=e=>`https://github.com/${So}?tab=overview&from=${e}&to=${e}`,rp={class:"mt-6 border-l-2 border-catppuccin-surface pl-4"},ip={class:"flex items-center justify-between mb-3"},ap={key:0,class:"flex items-center gap-1 text-[10px] text-catppuccin-subtle"},cp={key:0},lp={key:1},up={class:"overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-thin"},dp={class:"inline-flex md:flex gap-[3px] md:gap-1",style:{"min-width":"max-content"}},pp=["href","title"],fp=["title"],hp={class:"text-xs text-catppuccin-gray mt-2"},mp={__name:"ContributionGraph",setup(e){const t=me([]),n=me(!0),s=ee(()=>{const i=[];for(let a=0;a<t.value.length;a+=7)i.push(t.value.slice(a,a+7));return i}),o=ee(()=>t.value.reduce((i,a)=>i+a.count,0)),r=async()=>{try{n.value=!0,t.value=await sp()}catch{}finally{n.value=!1}};return lt(()=>{r()}),(i,a)=>(C(),S("div",rp,[g("div",ip,[a[1]||(a[1]=g("div",{class:"text-catppuccin-subtle text-sm"},' ~$ git log --oneline --since="1.year.ago" | wc -l ',-1)),n.value?he("",!0):(C(),S("div",ap,[...a[0]||(a[0]=[Pn('<span>less</span><div class="flex gap-[1px]"><div class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green"></div></div><span>more</span>',3)])]))]),n.value?(C(),S("div",cp,[...a[2]||(a[2]=[g("div",{class:"h-[60px] bg-catppuccin-surface/30 rounded cursor-blink"},null,-1)])])):(C(),S("div",lp,[g("div",up,[g("div",dp,[(C(!0),S(Z,null,Ce(s.value,(c,u)=>(C(),S("div",{key:u,class:"flex flex-col gap-[3px] md:gap-1 md:flex-1"},[(C(!0),S(Z,null,Ce(c,(l,d)=>(C(),S(Z,{key:d},[l.count>0?(C(),S("a",{key:0,href:$e(op)(l.date),target:"_blank",rel:"noopener noreferrer",class:Ot(["w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm transition-all hover:ring-1 hover:ring-catppuccin-green hover:scale-110 cursor-pointer",[$e(js)(l.count)===1?"bg-catppuccin-green/30 hover:bg-catppuccin-green/40":$e(js)(l.count)===2?"bg-catppuccin-green/50 hover:bg-catppuccin-green/60":$e(js)(l.count)===3?"bg-catppuccin-green/70 hover:bg-catppuccin-green/80":"bg-catppuccin-green hover:bg-catppuccin-green"]]),title:`${l.date}: ${l.count} contributions - Click to view on GitHub`},null,10,pp)):(C(),S("div",{key:1,class:"w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm bg-catppuccin-surface/50",title:`${l.date}: ${l.count} contributions`},null,8,fp))],64))),128))]))),128))])]),g("div",hp,V(o.value)+" contributions in the last year ",1)]))]))}},gp={class:"w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400"},an={__name:"Footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(C(),S("footer",gp,[g("p",null,"© 2020 - "+V($e(t))+" heckr.dev | All rights reserved.",1)]))}},bp={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},vp={class:"lg:flex-1 flex flex-col"},yp={key:0,class:"space-y-2"},xp={key:1,class:"text-sm text-catppuccin-subtle"},wp=["href"],_p={class:"flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2"},kp={class:"flex-1 min-w-0"},Cp={class:"flex items-center gap-2"},Sp=["title"],Ep={key:0,class:"text-catppuccin-yellow text-xs flex-shrink-0"},Ap=["title"],Pp={key:3,class:"text-sm text-catppuccin-subtle"},Tp={__name:"ReposList",props:{repos:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){const t=e,n=ee(()=>t.repos.length?[...t.repos].sort((s,o)=>o.stargazers_count-s.stargazers_count).slice(0,6):[]);return(s,o)=>(C(),S("div",bp,[o[2]||(o[2]=g("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ ls ~/repositories",-1)),g("div",vp,[e.loading?(C(),S("div",yp,[(C(),S(Z,null,Ce(6,r=>g("div",{key:`repo-loading-${r}`,class:"rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3"},[...o[0]||(o[0]=[Pn('<div class="flex items-start gap-3" data-v-effaf9c1><span class="text-catppuccin-subtle" data-v-effaf9c1>&gt;</span><div class="flex-1 min-w-0" data-v-effaf9c1><div class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink" data-v-effaf9c1></div><div class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink" data-v-effaf9c1></div></div></div>',1)])])),64))])):e.repos.length?n.value.length?(C(),An(Dl,{key:2,name:"list",tag:"div",class:"space-y-2"},{default:ct(()=>[(C(!0),S(Z,null,Ce(n.value,r=>(C(),S("a",{key:r.id,href:r.html_url,target:"_blank",class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors"},[g("div",_p,[o[1]||(o[1]=g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors"},">",-1)),g("div",kp,[g("div",Cp,[g("span",{class:"text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate",title:r.name},V(r.name),9,Sp),r.stargazers_count>0?(C(),S("span",Ep," ★"+V(r.stargazers_count),1)):he("",!0)]),g("p",{class:"text-xs text-catppuccin-gray truncate",title:r.description},V(r.description||"no description"),9,Ap)])])],8,wp))),128))]),_:1})):(C(),S("div",Pp," no repositories found ")):(C(),S("div",xp," no projects found "))])]))}},Rp=wt(Tp,[["__scopeId","data-v-effaf9c1"]]),Dp={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},Ip={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},$p={class:"grid lg:grid-cols-2 gap-6 lg:items-stretch"},Op={__name:"Home",setup(e){const t=me([]),n=me(!0),s=me([]),o=async()=>{try{n.value=!0;const{repos:r,languages:i}=await ha("hecker-01");t.value=r,s.value=i}catch{}finally{n.value=!1}};return lt(()=>{o()}),(r,i)=>(C(),S("div",Dp,[g("div",Ip,[K(Sd),K(Dd,{languages:s.value,loading:n.value},null,8,["languages","loading"]),g("div",$p,[K(Rp,{repos:t.value,loading:n.value},null,8,["repos","loading"]),K(np)]),K(mp),K(an)])]))}},Mp=`---
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
`,Lp=`---
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
`,Np=`---
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
`,jp=`---
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
`,Bp=`---
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
`,Fp=`---
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
`,Hp=Object.assign({"/posts/docker-and-compose.md":Mp,"/posts/jellyfin-server.md":Lp,"/posts/local-database.md":Np,"/posts/markdown-showcase.md":jp,"/posts/using-commandline.md":Bp,"/posts/using-git.md":Fp}),Vp=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const c=(u,l)=>{l=l.trim(),l.startsWith("[")&&l.endsWith("]")?o[u]=l.slice(1,-1).split(",").map(d=>d.trim()):o[u]=l};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&c(i,a);const[d,...f]=u.split(":");if(!d||d.trim()==="")return;i=d.trim(),a=f.join(":").trim()}}),i&&a&&c(i,a),{frontmatter:o,content:s}},Up=()=>{const e=[];let t=1;return Object.entries(Hp).forEach(([n,s])=>{const{frontmatter:o,content:r}=Vp(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,date:o.date||new Date().toISOString().split("T")[0],tags:o.tags||[],description:o.description||"",unlisted:o.unlisted===!0||o.unlisted==="true",content:r.trim(),readingTime:qp(r)})}),e};let Hn=null;const Eo=(e=!1)=>(Hn||(Hn=Up()),(e?[...Hn]:Hn.filter(n=>!n.unlisted)).sort((n,s)=>to(s.date)-to(n.date))),Wp=e=>Eo(!0).find(t=>t.slug===e),Gp=()=>{const e=new Set;return Eo().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()},to=e=>{const[t,n,s]=e.split("-");return new Date(s,n-1,t)},qp=e=>{const n=e.trim().split(/\s+/).length;return Math.ceil(n/225)},Kp={class:"sm:border-l-2 sm:border-catppuccin-surface pl-2 sm:pl-4"},zp={class:"flex flex-wrap gap-1.5 sm:gap-2"},Yp=["onClick"],ma={__name:"TagFilter",props:{tags:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["toggle-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("toggle-tag",o)};return(o,r)=>(C(),S("div",Kp,[r[0]||(r[0]=g("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls tags/",-1)),g("div",zp,[(C(!0),S(Z,null,Ce(e.tags,i=>(C(),S("button",{key:i,onClick:a=>s(i),class:Ot(["px-3 py-1.5 sm:py-1 rounded text-xs transition-colors border",e.selectedTag===i?"bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve":"bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay"])}," #"+V(i),11,Yp))),128))])]))}},Jp={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2"},Qp={class:"text-catppuccin-subtle text-sm mb-3"},Zp={key:0,class:"text-catppuccin-mauve"},Xp={key:0,class:"text-sm text-catppuccin-subtle"},ef={key:1,class:"space-y-3"},tf=["onClick"],nf={class:"px-3 sm:px-4 py-3"},sf={class:"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2"},of={class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors"},rf={class:"flex items-center gap-2 flex-shrink-0"},af={class:"text-xs text-catppuccin-subtle"},cf=["title"],lf={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed"},uf={class:"flex items-center gap-2"},df={class:"flex flex-wrap gap-1.5"},pf=["onClick"],ff={__name:"PostList",props:{posts:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-post","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-post",o)};return(o,r)=>(C(),S("div",Jp,[g("div",Qp,[r[0]||(r[0]=Ue(" ~$ ls -la posts/ ",-1)),e.selectedTag?(C(),S("span",Zp,'| grep "'+V(e.selectedTag)+'"',1)):he("",!0)]),e.posts.length?(C(),S("div",ef,[(C(!0),S(Z,null,Ce(e.posts,i=>(C(),S("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer"},[g("div",nf,[g("div",sf,[g("h2",of,V(i.title),1),g("div",rf,[g("span",af,V(i.readingTime)+" min read ",1),r[1]||(r[1]=g("span",{class:"text-catppuccin-surface"},"•",-1)),g("span",{class:"text-xs text-catppuccin-subtle",title:$e(to)(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},V(i.date),9,cf)])]),g("p",lf,V(i.description),1),g("div",uf,[g("div",df,[(C(!0),S(Z,null,Ce(i.tags,a=>(C(),S("span",{key:a,onClick:ta(c=>n("select-tag",a),["stop"]),class:"px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:bg-catppuccin-mauve/20 hover:text-catppuccin-mauve cursor-pointer transition-colors"}," #"+V(a),9,pf))),128))]),r[2]||(r[2]=g("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm shrink-0"}," read → ",-1))])])],8,tf))),128))])):(C(),S("div",Xp," no posts found "))]))}};class hf{extractVariables(t){const n=new RegExp("(?<!\\\\)\\$\\[([^\\]]+)\\]","g"),s=new Set;let o;for(;(o=n.exec(t))!==null;)s.add(o[1]);return Array.from(s)}substitute(t,n={}){const s=[];let o=t.replace(/\\\$\[([^\]]+)\]/g,(r,i)=>{const a=`__ESCAPED_VAR_${s.length}__`;return s.push(`$[${i}]`),a});return o=o.replace(/\$\[([^\]]+)\]/g,(r,i)=>n[i]||i),s.forEach((r,i)=>{o=o.replace(`__ESCAPED_VAR_${i}__`,r)}),o}}const ns=new hf;class mf{process(t){let n=t;const s=[];n=n.replace(/__([A-Z_0-9]+)__/g,r=>{const i=`\0PROT${s.length}\0`;return s.push(r),i});const o=[];return n=n.replace(/`([^`]+)`/g,(r,i)=>{const a=`IC${o.length}`;return o.push(this._renderInlineCode(i)),a}),n=n.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),n=n.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),n=n.replace(/_(.*?)_/g,'<em class="text-catppuccin-text italic">$1</em>'),n=n.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),n=n.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>'),n=n.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">'),n=n.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>'),o.forEach((r,i)=>{n=n.replaceAll(`IC${i}`,r)}),s.forEach((r,i)=>{n=n.replaceAll(`\0PROT${i}\0`,r)}),n}_renderInlineCode(t){return`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code>`}}class gf{constructor(t=new mf){this.inlineParser=t}parse(t){let n=t;const s={codeBlocks:[],hintBlocks:[],detailsBlocks:[],escapedTokens:[],inlineCodeBlocks:[],tables:[]};return n=this._extractCodeBlocks(n,s),n=this._extractHintBlocks(n,s),n=this._extractDetailsBlocks(n,s),n=this._extractEscapeSequences(n,s),n=this._extractInlineCode(n,s),n=this._extractTables(n,s),n=this._transformHorizontalRules(n),n=this._transformHeadings(n),n=this._transformBlockquotes(n),n=this._transformImages(n),n=this._transformBoldItalic(n),n=this._transformStrikethrough(n),n=this._transformLinks(n),n=this._transformLists(n),n=this._transformParagraphs(n),n=this._restoreDetailsBlocks(n,s),n=this._restoreHintBlocks(n,s),n=this._restoreCodeBlocks(n,s),n=this._restoreTables(n,s),n=this._restoreInlineCode(n,s),n=this._restoreEscapeSequences(n,s),n}_extractCodeBlocks(t,n){return t.replace(/```(\w*)(?::([^\s\n]+))?\s*\n?([\s\S]*?)```/g,(s,o,r,i)=>{const a=`__CODEBLOCK_${n.codeBlocks.length}__`;return n.codeBlocks.push(this._renderCodeBlock(o,r,i,n.codeBlocks.length)),a})}_extractHintBlocks(t,n){return t.replace(/:::hint\s+(\w+)\r?\n([\s\S]*?):::/g,(s,o,r)=>{const i=`__HINT_${n.hintBlocks.length}__`;return n.hintBlocks.push({type:o.trim().toLowerCase(),content:r.trim()}),i})}_extractDetailsBlocks(t,n){let s=!0;for(;s;){const o=t;t=t.replace(/:::details\s+([^\n\r]+)\r?\n([\s\S]*?):::/g,(r,i,a)=>{const c=`__DETAILS_${n.detailsBlocks.length}__`;return n.detailsBlocks.push({title:i.trim(),content:a.trim()}),c}),s=t!==o}return t}_extractEscapeSequences(t,n){return t.replace(/\\\\|\\`/g,s=>{const o=`__ESCAPED_TOKEN_${n.escapedTokens.length}__`;return n.escapedTokens.push(s==="\\\\"?"\\":"`"),o})}_extractInlineCode(t,n){return t.replace(/`([^`]+)`/g,(s,o)=>{const r=`__INLINECODE_${n.inlineCodeBlocks.length}__`,i=o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return n.inlineCodeBlocks.push(`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${i}</code>`),r})}_extractTables(t,n){return t.replace(/((?:\|[^\n]+\|\r?\n?)+)/g,s=>{const o=s.trim().split(/\r?\n/);if(o.length<2||!/^\|[\s\-:|]+\|$/.test(o[1]))return s;const r=`__TABLE_${n.tables.length}__`;return n.tables.push(this._renderTable(o)),r})}_transformHorizontalRules(t){return t.replace(/^(?:---|\*\*\*|___)\s*$/gim,'<hr class="border-catppuccin-surface my-6">')}_transformHeadings(t){return t=t.replace(/^###### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h6 id="${o}" class="group text-xs font-semibold text-catppuccin-mauve mt-4 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h6>`}),t=t.replace(/^##### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h5 id="${o}" class="group text-sm font-semibold text-catppuccin-mauve mt-4 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h5>`}),t=t.replace(/^#### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h4 id="${o}" class="group text-base font-semibold text-catppuccin-mauve mt-5 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h4>`}),t=t.replace(/^### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h3 id="${o}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`}),t=t.replace(/^## (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h2 id="${o}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`}),t=t.replace(/^# (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h1 id="${o}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`}),t}_transformBlockquotes(t){return t.replace(/^> (.*$)/gim,'<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>')}_transformImages(t){return t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">')}_transformBoldItalic(t){return t=t.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),t=t.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),t=t.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),t}_transformStrikethrough(t){return t.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>')}_transformLinks(t){return t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>')}_transformLists(t){return t=t.replace(/^[\-\*\+] \[x\] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>'),t=t.replace(/^[\-\*\+] \[ \] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>'),t=t.replace(/^\d+\. (.*$)/gim,'<li data-list-type="ol" class="ml-6 text-catppuccin-text mb-1">$1</li>'),t=t.replace(/^[\-\*\+] (.*$)/gim,'<li data-list-type="ul" class="ml-6 text-catppuccin-text mb-1">$1</li>'),t=t.replace(/(<li data-list-type="ol"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ol"[^>]*>.*?<\/li>))*/g,n=>`<ol class="list-decimal my-4 pl-2">${n}</ol>`),t=t.replace(/(<li data-list-type="ul"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ul"[^>]*>.*?<\/li>))*/g,n=>`<ul class="list-disc my-4">${n}</ul>`),t=t.replace(/ data-list-type="[^"]+"/g,""),t}_transformParagraphs(t){const n=/^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;return t.split(`

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
      </div>`}_renderTable(t){const n=t[0],s=t.slice(2);let o='<div class="overflow-x-auto -mx-2 sm:mx-0 my-4"><table class="w-full text-sm border-collapse min-w-[400px]">';const r=n.split("|").filter(i=>i.trim());return o+="<thead><tr>",r.forEach(i=>{o+=`<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${i.trim()}</th>`}),o+="</tr></thead>",o+="<tbody>",s.forEach(i=>{if(i.trim()&&!/^\|[\s\-:|]+\|$/.test(i)){const a=i.split("|").filter(c=>c.trim());o+="<tr>",a.forEach(c=>{o+=`<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${c.trim()}</td>`}),o+="</tr>"}}),o+="</tbody></table></div>",o}_slugify(t){return t.toLowerCase().replace(/<[^>]*>/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}}const ga=new gf;class bf{highlightAll(){window.Prism&&(Prism.highlightAll(),document.querySelectorAll('pre[class*="language-"]').forEach(t=>{t.className=t.className.replace(/language-\S+/g,"").trim()}))}highlightAfterDelay(t=100){setTimeout(()=>this.highlightAll(),t)}}const ss=new bf,vf={class:"mb-8"},yf={class:"text-catppuccin-subtle text-sm mb-2"},xf={class:"text-3xl md:text-4xl font-bold text-catppuccin-mauve mb-3"},wf={class:"flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-catppuccin-subtle mb-4"},_f={class:"flex flex-wrap gap-2"},kf={key:0,class:"mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"},Cf={class:"space-y-3"},Sf=["for"],Ef=["id","onUpdate:modelValue","placeholder"],Af={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2 mb-8 overflow-hidden"},Pf=["innerHTML"],Tf={__name:"PostComponent",props:{post:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=ee(()=>n.post.readingTime||1),i=me({}),a=ee(()=>ns.extractVariables(n.post.content)),c=ee(()=>ns.substitute(n.post.content,i.value)),u=l=>ga.parse(l);return lt(()=>{ss.highlightAfterDelay(100)}),Dt(i,()=>{ds(()=>{ss.highlightAll()})},{deep:!0}),(l,d)=>(C(),S("div",null,[g("div",vf,[g("div",yf," ~$ cat "+V(e.post.slug)+".md ",1),g("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all mb-6 inline-flex items-center gap-1.5 group"},[...d[0]||(d[0]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/posts",-1)])]),g("h1",xf,V(e.post.title),1),g("div",wf,[g("span",null,V(e.post.date),1),d[1]||(d[1]=g("span",{class:"hidden sm:inline text-catppuccin-surface"},"•",-1)),g("span",null,"~"+V(r.value)+" min read",1),d[2]||(d[2]=g("span",{class:"hidden sm:inline text-catppuccin-surface"},"•",-1)),g("div",_f,[(C(!0),S(Z,null,Ce(e.post.tags,f=>(C(),S("span",{key:f,class:"text-catppuccin-gray"}," #"+V(f),1))),128))])])]),a.value.length>0?(C(),S("div",kf,[d[3]||(d[3]=g("div",{class:"text-sm text-catppuccin-subtle mb-3"}," ~$ configure variables ",-1)),g("div",Cf,[(C(!0),S(Z,null,Ce(a.value,f=>(C(),S("div",{key:f,class:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"},[g("label",{for:`var-${f}`,class:"text-sm text-catppuccin-text sm:min-w-[120px]"},V(f)+": ",9,Sf),ui(g("input",{id:`var-${f}`,"onUpdate:modelValue":m=>i.value[f]=m,type:"text",placeholder:f,class:"flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"},null,8,Ef),[[ea,i.value[f]]])]))),128))])])):he("",!0),g("article",Af,[g("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:u(c.value)},null,8,Pf)]),g("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},[...d[4]||(d[4]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/posts",-1)])])]))}},Rf=wt(Tf,[["__scopeId","data-v-c0ce7b1a"]]),Df={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},If={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},$f={key:"list"},Of={class:"mb-12"},Mf={class:"flex items-center gap-4 text-sm mb-6"},Lf={key:"post"},Nf={__name:"Posts",setup(e){const t=me("list"),n=me(null),s=me(null),o=me([]),r=me([]),i=Co(),a=Mn(),c=ee(()=>s.value?o.value.filter(m=>m.tags.includes(s.value)):o.value),u=()=>{o.value=Eo(),r.value=Gp()},l=m=>{if(n.value=Wp(m),n.value)t.value="post",window.scrollTo({top:0,behavior:"instant"}),i.query.post!==m&&a.replace({name:"Posts",query:{...i.query,post:m}});else if(i.query.post){const v={...i.query};delete v.post,a.replace({name:"Posts",query:v})}},d=({skipQueryUpdate:m=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!m&&"post"in i.query){const v={...i.query};delete v.post,a.replace({name:"Posts",query:v})}},f=m=>{s.value=s.value===m?null:m};return lt(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(A){const L=A.trigger,D=L.textContent;L.textContent="copied!",L.classList.add("text-catppuccin-green"),setTimeout(()=>{L.textContent=D,L.classList.remove("text-catppuccin-green")},2e3),A.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const v=i.query.post;v&&l(v)}),$n(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),Dt(()=>i.query.post,(m,v)=>{m&&m!==v?l(m):!m&&t.value==="post"&&d({skipQueryUpdate:!0})}),(m,v)=>{const A=hs("router-link");return C(),S("div",Df,[g("div",If,[K(vs,{name:"fade",mode:"out-in"},{default:ct(()=>[t.value==="list"?(C(),S("div",$f,[g("div",Of,[v[1]||(v[1]=g("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cd ~/posts",-1)),g("div",Mf,[K(A,{to:"/",class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},{default:ct(()=>[...v[0]||(v[0]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/",-1),g("span",{class:"text-catppuccin-subtle font-medium"},"(home)",-1)])]),_:1})]),v[2]||(v[2]=g("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[g("span",{class:"text-catppuccin-mauve"},"Posts")],-1)),v[3]||(v[3]=g("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," My thoughts, tutorials, and experiences on various topics including web development, programming, and technology. ",-1)),K(ma,{tags:r.value,"selected-tag":s.value,onToggleTag:f},null,8,["tags","selected-tag"])]),K(ff,{posts:c.value,"selected-tag":s.value,onOpenPost:l,onSelectTag:f},null,8,["posts","selected-tag"]),K(an)])):t.value==="post"&&n.value?(C(),S("div",Lf,[K(Rf,{post:n.value,onGoBack:d},null,8,["post"]),K(an)])):he("",!0)]),_:1})])])}}},jf=wt(Nf,[["__scopeId","data-v-4f36b454"]]),Bf={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2"},Ff={class:"text-catppuccin-subtle text-sm mb-3"},Hf={key:0,class:"text-catppuccin-mauve"},Vf={key:0,class:"text-sm text-catppuccin-subtle"},Uf={key:1,class:"grid gap-4 sm:grid-cols-2"},Wf=["onClick"],Gf={key:0,class:"w-full h-32 sm:h-40 overflow-hidden bg-catppuccin-surface/30"},qf=["src","alt"],Kf={class:"px-3 sm:px-4 py-3"},zf={class:"flex items-start gap-2 mb-2"},Yf={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed line-clamp-2"},Jf={class:"flex items-center gap-2 flex-wrap"},Qf=["onClick"],Zf={key:0,class:"text-xs text-catppuccin-subtle"},Xf={__name:"ProjectList",props:{projects:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-project","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-project",o)};return(o,r)=>(C(),S("div",Bf,[g("div",Ff,[r[0]||(r[0]=Ue(" ~$ ls -la projects/ ",-1)),e.selectedTag?(C(),S("span",Hf,'| grep "'+V(e.selectedTag)+'"',1)):he("",!0)]),e.projects.length?(C(),S("div",Uf,[(C(!0),S(Z,null,Ce(e.projects,i=>(C(),S("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all cursor-pointer overflow-hidden",style:ye({borderColor:`${i.accentColorHex}40`})},[i.coverImage?(C(),S("div",Gf,[g("img",{src:i.coverImage,alt:i.title,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,qf)])):he("",!0),g("div",Kf,[g("div",zf,[g("span",{class:"text-sm transition-colors",style:ye({color:i.accentColorHex})},">",4),g("h2",{class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors",style:ye({"--hover-color":i.accentColorHex})},V(i.title),5)]),g("p",Yf,V(i.description),1),g("div",Jf,[(C(!0),S(Z,null,Ce(i.tags.slice(0,3),a=>(C(),S("span",{key:a,onClick:ta(c=>n("select-tag",a),["stop"]),class:"px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:text-catppuccin-mauve cursor-pointer transition-colors",style:ye({"--hover-bg":`${i.accentColorHex}20`})}," #"+V(a),13,Qf))),128)),i.tags.length>3?(C(),S("span",Zf," +"+V(i.tags.length-3),1)):he("",!0),g("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm",style:ye({"--hover-color":i.accentColorHex})}," view → ",4)])])],12,Wf))),128))])):(C(),S("div",Vf," no projects found "))]))}},eh=wt(Xf,[["__scopeId","data-v-b7be8c48"]]),th={class:"mb-8"},nh={class:"text-catppuccin-subtle text-sm mb-2"},sh=["src","alt"],oh={class:"flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-catppuccin-subtle mb-4"},rh={class:"flex flex-wrap gap-2"},ih={class:"flex flex-wrap gap-3 mb-6"},ah=["href"],ch=["href"],lh={key:0,class:"mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"},uh={class:"space-y-3"},dh=["for"],ph=["id","onUpdate:modelValue","placeholder"],fh={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2 mb-8 overflow-hidden"},hh=["innerHTML"],mh={__name:"ProjectComponent",props:{project:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=me({}),i=ee(()=>ns.extractVariables(n.project.content)),a=ee(()=>ns.substitute(n.project.content,r.value)),c=u=>ga.parse(u);return lt(()=>{ss.highlightAfterDelay(100)}),Dt(r,()=>{ds(()=>{ss.highlightAll()})},{deep:!0}),(u,l)=>(C(),S("div",{style:ye({"--accent-color":e.project.accentColorHex})},[g("div",th,[g("div",nh," ~$ cat "+V(e.project.slug)+".md ",1),g("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all mb-6 inline-flex items-center gap-1.5 group"},[...l[0]||(l[0]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/projects",-1)])]),e.project.coverImage?(C(),S("div",{key:0,class:"w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-6 border",style:ye({borderColor:`${e.project.accentColorHex}40`})},[g("img",{src:e.project.coverImage,alt:e.project.title,class:"w-full h-full object-cover"},null,8,sh)],4)):he("",!0),g("h1",{class:"text-3xl md:text-4xl font-bold mb-3",style:ye({color:e.project.accentColorHex})},V(e.project.title),5),g("div",oh,[g("span",{class:Ot(["px-2 py-0.5 rounded text-xs capitalize",{"bg-catppuccin-green/20 text-catppuccin-green":e.project.status==="active","bg-catppuccin-yellow/20 text-catppuccin-yellow":e.project.status==="in-progress","bg-catppuccin-red/20 text-catppuccin-red":e.project.status==="archived","bg-catppuccin-blue/20 text-catppuccin-blue":e.project.status==="beta","bg-catppuccin-peach/20 text-catppuccin-peach":e.project.status==="stale"}])},V(e.project.status),3),g("div",rh,[(C(!0),S(Z,null,Ce(e.project.tags,d=>(C(),S("span",{key:d,class:"text-catppuccin-gray"}," #"+V(d),1))),128))])]),g("div",ih,[e.project.url?(C(),S("a",{key:0,href:e.project.url,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-3 py-1.5 rounded border text-sm transition-colors hover:bg-catppuccin-surface/30",style:ye({borderColor:`${e.project.accentColorHex}60`,color:e.project.accentColorHex})},[...l[1]||(l[1]=[g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1),Ue(" Live Site ",-1)])],12,ah)):he("",!0),e.project.github?(C(),S("a",{key:1,href:e.project.github,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-3 py-1.5 rounded border border-catppuccin-surface/60 text-sm text-catppuccin-subtle transition-colors hover:bg-catppuccin-surface/30 hover:text-catppuccin-text"},[...l[2]||(l[2]=[g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24"},[g("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1),Ue(" GitHub ",-1)])],8,ch)):he("",!0)])]),i.value.length>0?(C(),S("div",lh,[l[3]||(l[3]=g("div",{class:"text-sm text-catppuccin-subtle mb-3"}," ~$ configure variables ",-1)),g("div",uh,[(C(!0),S(Z,null,Ce(i.value,d=>(C(),S("div",{key:d,class:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"},[g("label",{for:`var-${d}`,class:"text-sm text-catppuccin-text sm:min-w-[120px]"},V(d)+": ",9,dh),ui(g("input",{id:`var-${d}`,"onUpdate:modelValue":f=>r.value[d]=f,type:"text",placeholder:d,class:"flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"},null,8,ph),[[ea,r.value[d]]])]))),128))])])):he("",!0),g("article",fh,[g("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:c(a.value)},null,8,hh)]),g("button",{onClick:o,class:"text-sm px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},[...l[4]||(l[4]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/projects",-1)])])],4))}},gh=wt(mh,[["__scopeId","data-v-b3acbc76"]]),bh={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},vh={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},yh={key:"list"},xh={class:"mb-12"},wh={class:"flex items-center gap-4 text-sm mb-6"},_h={key:"project"},kh={__name:"Projects",setup(e){const t=me("list"),n=me(null),s=me(null),o=me([]),r=me([]),i=Co(),a=Mn(),c=ee(()=>s.value?o.value.filter(m=>m.tags.includes(s.value)):o.value),u=()=>{o.value=ws(),r.value=Vd()},l=m=>{if(n.value=Hd(m),n.value)t.value="project",window.scrollTo({top:0,behavior:"instant"}),i.query.project!==m&&a.replace({name:"Projects",query:{...i.query,project:m}});else if(i.query.project){const v={...i.query};delete v.project,a.replace({name:"Projects",query:v})}},d=({skipQueryUpdate:m=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!m&&"project"in i.query){const v={...i.query};delete v.project,a.replace({name:"Projects",query:v})}},f=m=>{s.value=s.value===m?null:m};return lt(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(A){const L=A.trigger,D=L.textContent;L.textContent="copied!",L.classList.add("text-catppuccin-green"),setTimeout(()=>{L.textContent=D,L.classList.remove("text-catppuccin-green")},2e3),A.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const v=i.query.project;v&&l(v)}),$n(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),Dt(()=>i.query.project,(m,v)=>{m&&m!==v?l(m):!m&&t.value==="project"&&d({skipQueryUpdate:!0})}),(m,v)=>{const A=hs("router-link");return C(),S("div",bh,[g("div",vh,[K(vs,{name:"fade",mode:"out-in"},{default:ct(()=>[t.value==="list"?(C(),S("div",yh,[g("div",xh,[v[1]||(v[1]=g("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ cd ~/projects ",-1)),g("div",wh,[K(A,{to:"/",class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},{default:ct(()=>[...v[0]||(v[0]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/",-1),g("span",{class:"text-catppuccin-subtle font-medium"},"(home)",-1)])]),_:1})]),v[2]||(v[2]=g("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[g("span",{class:"text-catppuccin-mauve"},"Projects")],-1)),v[3]||(v[3]=g("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," A collection of projects I've worked on, ranging from web applications to plugins and tools. ",-1)),K(ma,{tags:r.value,"selected-tag":s.value,onToggleTag:f},null,8,["tags","selected-tag"])]),K(eh,{projects:c.value,"selected-tag":s.value,onOpenProject:l,onSelectTag:f},null,8,["projects","selected-tag"]),K(an)])):t.value==="project"&&n.value?(C(),S("div",_h,[K(gh,{project:n.value,onGoBack:d},null,8,["project"]),K(an)])):he("",!0)]),_:1})])])}}},Ch=wt(kh,[["__scopeId","data-v-ce80c82b"]]),Sh={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},Eh={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16"},Ah={class:"mb-8"},Ph={class:"text-catppuccin-subtle text-sm mb-4"},Th={class:"border-l-2 border-catppuccin-surface pl-4"},Rh={class:"text-catppuccin-red text-sm"},Dh={class:"text-catppuccin-mauve"},Ih={__name:"NotFound",setup(e){const t=Co(),n=Mn(),s=ee(()=>(t.fullPath||t.path||"/").replace(/^\//,"")||"."),o=()=>n.push("/");return(r,i)=>(C(),S("div",Sh,[g("div",Eh,[g("div",Ah,[g("div",Ph," ~$ cd ~/"+V(s.value),1),g("div",{class:"flex items-center gap-4 text-sm mb-6"},[g("button",{onClick:o,class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all inline-flex items-center gap-1.5 group"},[...i[0]||(i[0]=[g("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1),g("span",{class:"text-catppuccin-mauve font-medium"},"~/",-1),g("span",{class:"text-catppuccin-subtle font-medium"},"(home)",-1)])])])]),g("div",Th,[g("div",Rh,[i[1]||(i[1]=Ue(" cd: no such file or directory: /",-1)),g("span",Dh,V(s.value),1)])])]),K(an)]))}},$h=[{path:"/",name:"Home",component:Op,meta:{title:"Home | heckr.dev"}},{path:"/posts",name:"Posts",component:jf,meta:{title:"Posts | heckr.dev"}},{path:"/projects",name:"Projects",component:Ch,meta:{title:"Projects | heckr.dev"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Ih,meta:{title:"404 Not Found | heckr.dev"}}],ba=Yu({history:Au(),routes:$h,scrollBehavior(e,t,n){return n||{top:0}}});ba.beforeEach((e,t,n)=>{document.title=e.meta.title||"heckr.dev",n()});let pn=0;const Ir=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],Oh=()=>{console.log("%cWelcome to heckr.dev","font-size: 20px; font-weight: bold; color: #cba6f7;"),console.log("%cWelcome to the dev console, here are some commands to try:","font-size: 14px; color: #a6adc8;"),console.log(`%c- help() - show available commands
- about() - learn more about me
- skills() - view my tech stack
- contact() - get my contact info`,"font-size: 12px; color: #6c7086;"),window.help=()=>{console.log("%cAvailable commands:","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%c- help() - show this message
- about() - about the developer
- skills() - technical skills
- contact() - contact information
- secret() - ???
`,"font-size: 12px; color: #a6adc8;")},window.about=()=>{console.log("%cAbout me","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cA passionate developer who loves building cool things with code!
Check out my projects and posts on the site.`,"font-size: 12px; color: #a6adc8;")},window.skills=async()=>{console.log("%cTech stack","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log("%cFetching...","font-size: 12px; color: #6c7086;");try{const{languages:e,totalRepos:t}=await ha();e.length>0?(console.log("%cTop languages from "+t+" repositories found:","font-size: 14px; font-weight: bold; color: #a6adc8;"),e.slice(0,10).forEach(({language:n,count:s},o)=>{console.log(`%c${o+1}. ${n}: ${s} repos`,"font-size: 12px; color: #a6adc8;")})):console.log("%cUnable to fetch data, please try again later.","font-size: 12px; color: #f38ba8;")}catch{console.log("%cError loading data, please try again later.","font-size: 12px; color: #f38ba8;")}},window.contact=()=>{console.log("%cContact info","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cGitHub: https://github.com/hecker-01
Feel free to reach out!`,"font-size: 12px; color: #a6adc8;")},window.secret=()=>{console.log("%cYou found the secret command","font-size: 18px; font-weight: bold; color: #f9e2af;"),console.log("%cHere's a hint: ↑ ↑ ↓ ↓ ← → ← → B A","font-size: 12px; color: #fab387;")},document.addEventListener("keydown",e=>{e.code===Ir[pn]?(pn++,pn===Ir.length&&(Mh(),pn=0)):pn=0})},Mh=()=>{if(console.log("%cKONAMI CODE ACTIVATED!","font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;"),document.body.style.animation="rainbow-border 2s linear infinite",!document.getElementById("konami-style")){const e=document.createElement("style");e.id="konami-style",e.textContent=`
      @keyframes rainbow-border {
        0% { box-shadow: inset 0 0 0 3px #f38ba8; }
        16% { box-shadow: inset 0 0 0 3px #fab387; }
        33% { box-shadow: inset 0 0 0 3px #f9e2af; }
        50% { box-shadow: inset 0 0 0 3px #a6e3a1; }
        66% { box-shadow: inset 0 0 0 3px #89dceb; }
        83% { box-shadow: inset 0 0 0 3px #89b4fa; }
        100% { box-shadow: inset 0 0 0 3px #cba6f7; }
      }
    `,document.head.appendChild(e)}setTimeout(()=>{document.body.style.animation=""},5e3)};Hl(Ju).use(ba).mount("#app");Oh();
