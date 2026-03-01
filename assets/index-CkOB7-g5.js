(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function Ks(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ue={},Jt=[],lt=()=>{},Rr=()=>!1,Zn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ys=e=>e.startsWith("onUpdate:"),ye=Object.assign,zs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},la=Object.prototype.hasOwnProperty,ae=(e,t)=>la.call(e,t),G=Array.isArray,Qt=e=>Xn(e)==="[object Map]",Tr=e=>Xn(e)==="[object Set]",Y=e=>typeof e=="function",be=e=>typeof e=="string",Pt=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Pr=e=>(me(e)||Y(e))&&Y(e.then)&&Y(e.catch),Dr=Object.prototype.toString,Xn=e=>Dr.call(e),ua=e=>Xn(e).slice(8,-1),Ir=e=>Xn(e)==="[object Object]",Js=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=Ks(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),es=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},da=/-\w/g,Ke=es(e=>e.replace(da,t=>t.slice(1).toUpperCase())),fa=/\B([A-Z])/g,Ut=es(e=>e.replace(fa,"-$1").toLowerCase()),ts=es(e=>e.charAt(0).toUpperCase()+e.slice(1)),ps=es(e=>e?`on${ts(e)}`:""),At=(e,t)=>!Object.is(e,t),Nn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Or=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Qs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},pa=e=>{const t=be(e)?Number(e):NaN;return isNaN(t)?e:t};let Co;const ns=()=>Co||(Co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ze(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=be(s)?ba(s):ze(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(be(e)||me(e))return e}const ha=/;(?![^(]*\))/g,ma=/:([^]+)/,ga=/\/\*[^]*?\*\//g;function ba(e){const t={};return e.replace(ga,"").split(ha).forEach(n=>{if(n){const s=n.split(ma);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Wt(e){let t="";if(be(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const s=Wt(e[n]);s&&(t+=s+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const va="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ya=Ks(va);function Lr(e){return!!e||e===""}const $r=e=>!!(e&&e.__v_isRef===!0),te=e=>be(e)?e:e==null?"":G(e)||me(e)&&(e.toString===Dr||!Y(e.toString))?$r(e)?te(e.value):JSON.stringify(e,Mr,2):String(e),Mr=(e,t)=>$r(t)?Mr(e,t.value):Qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[hs(s,r)+" =>"]=o,n),{})}:Tr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>hs(n))}:Pt(t)?hs(t):me(t)&&!G(t)&&!Ir(t)?String(t):t,hs=(e,t="")=>{var n;return Pt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Ne;class wa{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){this._on>0&&--this._on===0&&(Ne=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function xa(){return Ne}let pe;const ms=new WeakSet;class Nr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ms.has(this)&&(ms.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Br(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eo(this),Hr(this);const t=pe,n=Je;pe=this,Je=!0;try{return this.fn()}finally{Ur(this),pe=t,Je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)eo(t);this.deps=this.depsTail=void 0,Eo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ms.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ps(this)&&this.run()}get dirty(){return Ps(this)}}let Fr=0,pn,hn;function Br(e,t=!1){if(e.flags|=8,t){e.next=hn,hn=e;return}e.next=pn,pn=e}function Zs(){Fr++}function Xs(){if(--Fr>0)return;if(hn){let t=hn;for(hn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;pn;){let t=pn;for(pn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Hr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ur(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),eo(s),_a(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Ps(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Wr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Wr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===wn)||(e.globalVersion=wn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ps(e))))return;e.flags|=2;const t=e.dep,n=pe,s=Je;pe=e,Je=!0;try{Hr(e);const o=e.fn(e._value);(t.version===0||At(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{pe=n,Je=s,Ur(e),e.flags&=-3}}function eo(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)eo(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function _a(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Je=!0;const Vr=[];function gt(){Vr.push(Je),Je=!1}function bt(){const e=Vr.pop();Je=e===void 0?!0:e}function Eo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=pe;pe=void 0;try{t()}finally{pe=n}}}let wn=0;class ka{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class to{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!pe||!Je||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new ka(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,jr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=s)}return n}trigger(t){this.version++,wn++,this.notify(t)}notify(t){Zs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xs()}}}function jr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)jr(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ds=new WeakMap,Ft=Symbol(""),Is=Symbol(""),xn=Symbol("");function ke(e,t,n){if(Je&&pe){let s=Ds.get(e);s||Ds.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new to),o.map=s,o.key=n),o.track()}}function ht(e,t,n,s,o,r){const i=Ds.get(e);if(!i){wn++;return}const a=c=>{c&&c.trigger()};if(Zs(),t==="clear")i.forEach(a);else{const c=G(e),u=c&&Js(n);if(c&&n==="length"){const l=Number(s);i.forEach((f,h)=>{(h==="length"||h===xn||!Pt(h)&&h>=l)&&a(f)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(xn)),t){case"add":c?u&&a(i.get("length")):(a(i.get(Ft)),Qt(e)&&a(i.get(Is)));break;case"delete":c||(a(i.get(Ft)),Qt(e)&&a(i.get(Is)));break;case"set":Qt(e)&&a(i.get(Ft));break}}Xs()}function qt(e){const t=se(e);return t===e?t:(ke(t,"iterate",xn),qe(e)?t:t.map(Ze))}function ss(e){return ke(e=se(e),"iterate",xn),e}function kt(e,t){return vt(e)?tn(Bt(e)?Ze(t):t):Ze(t)}const Sa={__proto__:null,[Symbol.iterator](){return gs(this,Symbol.iterator,e=>kt(this,e))},concat(...e){return qt(this).concat(...e.map(t=>G(t)?qt(t):t))},entries(){return gs(this,"entries",e=>(e[1]=kt(this,e[1]),e))},every(e,t){return ut(this,"every",e,t,void 0,arguments)},filter(e,t){return ut(this,"filter",e,t,n=>n.map(s=>kt(this,s)),arguments)},find(e,t){return ut(this,"find",e,t,n=>kt(this,n),arguments)},findIndex(e,t){return ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ut(this,"findLast",e,t,n=>kt(this,n),arguments)},findLastIndex(e,t){return ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return bs(this,"includes",e)},indexOf(...e){return bs(this,"indexOf",e)},join(e){return qt(this).join(e)},lastIndexOf(...e){return bs(this,"lastIndexOf",e)},map(e,t){return ut(this,"map",e,t,void 0,arguments)},pop(){return an(this,"pop")},push(...e){return an(this,"push",e)},reduce(e,...t){return Ao(this,"reduce",e,t)},reduceRight(e,...t){return Ao(this,"reduceRight",e,t)},shift(){return an(this,"shift")},some(e,t){return ut(this,"some",e,t,void 0,arguments)},splice(...e){return an(this,"splice",e)},toReversed(){return qt(this).toReversed()},toSorted(e){return qt(this).toSorted(e)},toSpliced(...e){return qt(this).toSpliced(...e)},unshift(...e){return an(this,"unshift",e)},values(){return gs(this,"values",e=>kt(this,e))}};function gs(e,t,n){const s=ss(e),o=s[t]();return s!==e&&!qe(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=n(r.value)),r}),o}const Ca=Array.prototype;function ut(e,t,n,s,o,r){const i=ss(e),a=i!==e&&!qe(e),c=i[t];if(c!==Ca[t]){const f=c.apply(e,r);return a?Ze(f):f}let u=n;i!==e&&(a?u=function(f,h){return n.call(this,kt(e,f),h,e)}:n.length>2&&(u=function(f,h){return n.call(this,f,h,e)}));const l=c.call(i,u,s);return a&&o?o(l):l}function Ao(e,t,n,s){const o=ss(e);let r=n;return o!==e&&(qe(e)?n.length>3&&(r=function(i,a,c){return n.call(this,i,a,c,e)}):r=function(i,a,c){return n.call(this,i,kt(e,a),c,e)}),o[t](r,...s)}function bs(e,t,n){const s=se(e);ke(s,"iterate",xn);const o=s[t](...n);return(o===-1||o===!1)&&oo(n[0])?(n[0]=se(n[0]),s[t](...n)):o}function an(e,t,n=[]){gt(),Zs();const s=se(e)[t].apply(e,n);return Xs(),bt(),s}const Ea=Ks("__proto__,__v_isRef,__isVue"),Gr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pt));function Aa(e){Pt(e)||(e=String(e));const t=se(this);return ke(t,"has",e),t.hasOwnProperty(e)}class qr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?Na:Jr:r?zr:Yr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=G(t);if(!o){let c;if(i&&(c=Sa[n]))return c;if(n==="hasOwnProperty")return Aa}const a=Reflect.get(t,n,Ee(t)?t:s);if((Pt(n)?Gr.has(n):Ea(n))||(o||ke(t,"get",n),r))return a;if(Ee(a)){const c=i&&Js(n)?a:a.value;return o&&me(c)?Ls(c):c}return me(a)?o?Ls(a):Rn(a):a}}class Kr extends qr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];const i=G(t)&&Js(n);if(!this._isShallow){const u=vt(r);if(!qe(s)&&!vt(s)&&(r=se(r),s=se(s)),!i&&Ee(r)&&!Ee(s))return u||(r.value=s),!0}const a=i?Number(n)<t.length:ae(t,n),c=Reflect.set(t,n,s,Ee(t)?t:o);return t===se(o)&&(a?At(s,r)&&ht(t,"set",n,s):ht(t,"add",n,s)),c}deleteProperty(t,n){const s=ae(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&ht(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!Pt(n)||!Gr.has(n))&&ke(t,"has",n),s}ownKeys(t){return ke(t,"iterate",G(t)?"length":Ft),Reflect.ownKeys(t)}}class Ra extends qr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ta=new Kr,Pa=new Ra,Da=new Kr(!0);const Os=e=>e,In=e=>Reflect.getPrototypeOf(e);function Ia(e,t,n){return function(...s){const o=this.__v_raw,r=se(o),i=Qt(r),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...s),l=n?Os:t?tn:Ze;return!t&&ke(r,"iterate",c?Is:Ft),ye(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[l(f[0]),l(f[1])]:l(f),done:h}}})}}function On(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Oa(e,t){const n={get(o){const r=this.__v_raw,i=se(r),a=se(o);e||(At(o,a)&&ke(i,"get",o),ke(i,"get",a));const{has:c}=In(i),u=t?Os:e?tn:Ze;if(c.call(i,o))return u(r.get(o));if(c.call(i,a))return u(r.get(a));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&ke(se(o),"iterate",Ft),o.size},has(o){const r=this.__v_raw,i=se(r),a=se(o);return e||(At(o,a)&&ke(i,"has",o),ke(i,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const i=this,a=i.__v_raw,c=se(a),u=t?Os:e?tn:Ze;return!e&&ke(c,"iterate",Ft),a.forEach((l,f)=>o.call(r,u(l),u(f),i))}};return ye(n,e?{add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear")}:{add(o){!t&&!qe(o)&&!vt(o)&&(o=se(o));const r=se(this);return In(r).has.call(r,o)||(r.add(o),ht(r,"add",o,o)),this},set(o,r){!t&&!qe(r)&&!vt(r)&&(r=se(r));const i=se(this),{has:a,get:c}=In(i);let u=a.call(i,o);u||(o=se(o),u=a.call(i,o));const l=c.call(i,o);return i.set(o,r),u?At(r,l)&&ht(i,"set",o,r):ht(i,"add",o,r),this},delete(o){const r=se(this),{has:i,get:a}=In(r);let c=i.call(r,o);c||(o=se(o),c=i.call(r,o)),a&&a.call(r,o);const u=r.delete(o);return c&&ht(r,"delete",o,void 0),u},clear(){const o=se(this),r=o.size!==0,i=o.clear();return r&&ht(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Ia(o,e,t)}),n}function no(e,t){const n=Oa(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(ae(n,o)&&o in s?n:s,o,r)}const La={get:no(!1,!1)},$a={get:no(!1,!0)},Ma={get:no(!0,!1)};const Yr=new WeakMap,zr=new WeakMap,Jr=new WeakMap,Na=new WeakMap;function Fa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ba(e){return e.__v_skip||!Object.isExtensible(e)?0:Fa(ua(e))}function Rn(e){return vt(e)?e:so(e,!1,Ta,La,Yr)}function Qr(e){return so(e,!1,Da,$a,zr)}function Ls(e){return so(e,!0,Pa,Ma,Jr)}function so(e,t,n,s,o){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=Ba(e);if(r===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,r===2?s:n);return o.set(e,a),a}function Bt(e){return vt(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function vt(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function oo(e){return e?!!e.__v_raw:!1}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function Ha(e){return!ae(e,"__v_skip")&&Object.isExtensible(e)&&Or(e,"__v_skip",!0),e}const Ze=e=>me(e)?Rn(e):e,tn=e=>me(e)?Ls(e):e;function Ee(e){return e?e.__v_isRef===!0:!1}function Se(e){return Zr(e,!1)}function Ua(e){return Zr(e,!0)}function Zr(e,t){return Ee(e)?e:new Wa(e,t)}class Wa{constructor(t,n){this.dep=new to,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:se(t),this._value=n?t:Ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||qe(t)||vt(t);t=s?t:se(t),At(t,n)&&(this._rawValue=t,this._value=s?t:Ze(t),this.dep.trigger())}}function He(e){return Ee(e)?e.value:e}const Va={get:(e,t,n)=>t==="__v_raw"?e:He(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Ee(o)&&!Ee(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Xr(e){return Bt(e)?e:new Proxy(e,Va)}class ja{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new to(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return Br(this,!0),!0}get value(){const t=this.dep.track();return Wr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ga(e,t,n=!1){let s,o;return Y(e)?s=e:(s=e.get,o=e.set),new ja(s,o,n)}const Ln={},Wn=new WeakMap;let $t;function qa(e,t=!1,n=$t){if(n){let s=Wn.get(n);s||Wn.set(n,s=[]),s.push(e)}}function Ka(e,t,n=ue){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:a,call:c}=n,u=F=>o?F:qe(F)||o===!1||o===0?mt(F,1):mt(F);let l,f,h,g,v=!1,m=!1;if(Ee(e)?(f=()=>e.value,v=qe(e)):Bt(e)?(f=()=>u(e),v=!0):G(e)?(m=!0,v=e.some(F=>Bt(F)||qe(F)),f=()=>e.map(F=>{if(Ee(F))return F.value;if(Bt(F))return u(F);if(Y(F))return c?c(F,2):F()})):Y(e)?t?f=c?()=>c(e,2):e:f=()=>{if(h){gt();try{h()}finally{bt()}}const F=$t;$t=l;try{return c?c(e,3,[g]):e(g)}finally{$t=F}}:f=lt,t&&o){const F=f,Z=o===!0?1/0:o;f=()=>mt(F(),Z)}const R=xa(),T=()=>{l.stop(),R&&R.active&&zs(R.effects,l)};if(r&&t){const F=t;t=(...Z)=>{F(...Z),T()}}let E=m?new Array(e.length).fill(Ln):Ln;const N=F=>{if(!(!(l.flags&1)||!l.dirty&&!F))if(t){const Z=l.run();if(o||v||(m?Z.some((oe,ne)=>At(oe,E[ne])):At(Z,E))){h&&h();const oe=$t;$t=l;try{const ne=[Z,E===Ln?void 0:m&&E[0]===Ln?[]:E,g];E=Z,c?c(t,3,ne):t(...ne)}finally{$t=oe}}}else l.run()};return a&&a(N),l=new Nr(f),l.scheduler=i?()=>i(N,!1):N,g=F=>qa(F,!1,l),h=l.onStop=()=>{const F=Wn.get(l);if(F){if(c)c(F,4);else for(const Z of F)Z();Wn.delete(l)}},t?s?N(!0):E=l.run():i?i(N.bind(null,!0),!0):l.run(),T.pause=l.pause.bind(l),T.resume=l.resume.bind(l),T.stop=T,T}function mt(e,t=1/0,n){if(t<=0||!me(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ee(e))mt(e.value,t,n);else if(G(e))for(let s=0;s<e.length;s++)mt(e[s],t,n);else if(Tr(e)||Qt(e))e.forEach(s=>{mt(s,t,n)});else if(Ir(e)){for(const s in e)mt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&mt(e[s],t,n)}return e}function Tn(e,t,n,s){try{return s?e(...s):e()}catch(o){os(o,t,n)}}function Xe(e,t,n,s){if(Y(e)){const o=Tn(e,t,n,s);return o&&Pr(o)&&o.catch(r=>{os(r,t,n)}),o}if(G(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Xe(e[r],t,n,s));return o}}function os(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ue;if(t){let a=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](e,c,u)===!1)return}a=a.parent}if(r){gt(),Tn(r,null,10,[e,c,u]),bt();return}}Ya(e,n,o,s,i)}function Ya(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Te=[];let at=-1;const Zt=[];let St=null,Kt=0;const ei=Promise.resolve();let Vn=null;function ro(e){const t=Vn||ei;return e?t.then(this?e.bind(this):e):t}function za(e){let t=at+1,n=Te.length;for(;t<n;){const s=t+n>>>1,o=Te[s],r=_n(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function io(e){if(!(e.flags&1)){const t=_n(e),n=Te[Te.length-1];!n||!(e.flags&2)&&t>=_n(n)?Te.push(e):Te.splice(za(t),0,e),e.flags|=1,ti()}}function ti(){Vn||(Vn=ei.then(si))}function Ja(e){G(e)?Zt.push(...e):St&&e.id===-1?St.splice(Kt+1,0,e):e.flags&1||(Zt.push(e),e.flags|=1),ti()}function Ro(e,t,n=at+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ni(e){if(Zt.length){const t=[...new Set(Zt)].sort((n,s)=>_n(n)-_n(s));if(Zt.length=0,St){St.push(...t);return}for(St=t,Kt=0;Kt<St.length;Kt++){const n=St[Kt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}St=null,Kt=0}}const _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function si(e){try{for(at=0;at<Te.length;at++){const t=Te[at];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Tn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;at<Te.length;at++){const t=Te[at];t&&(t.flags&=-2)}at=-1,Te.length=0,ni(),Vn=null,(Te.length||Zt.length)&&si()}}let Ue=null,oi=null;function jn(e){const t=Ue;return Ue=e,oi=e&&e.type.__scopeId||null,t}function Rt(e,t=Ue,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Kn(-1);const r=jn(t);let i;try{i=e(...o)}finally{jn(r),s._d&&Kn(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Qa(e,t){if(Ue===null)return e;const n=us(Ue),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,a,c=ue]=t[o];r&&(Y(r)&&(r={mounted:r,updated:r}),r.deep&&mt(i),s.push({dir:r,instance:n,value:i,oldValue:void 0,arg:a,modifiers:c}))}return e}function It(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let c=a.dir[s];c&&(gt(),Xe(c,n,8,[e.el,a,e,t]),bt())}}function Fn(e,t){if(Ce){let n=Ce.provides;const s=Ce.parent&&Ce.parent.provides;s===n&&(n=Ce.provides=Object.create(s)),n[e]=t}}function Qe(e,t,n=!1){const s=ho();if(s||en){let o=en?en._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Y(t)?t.call(s&&s.proxy):t}}const Za=Symbol.for("v-scx"),Xa=()=>Qe(Za);function Xt(e,t,n){return ri(e,t,n)}function ri(e,t,n=ue){const{immediate:s,deep:o,flush:r,once:i}=n,a=ye({},n),c=t&&s||!t&&r!=="post";let u;if(En){if(r==="sync"){const g=Xa();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=lt,g.resume=lt,g.pause=lt,g}}const l=Ce;a.call=(g,v,m)=>Xe(g,l,v,m);let f=!1;r==="post"?a.scheduler=g=>{Be(g,l&&l.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(g,v)=>{v?g():io(g)}),a.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,l&&(g.id=l.uid,g.i=l))};const h=Ka(e,t,a);return En&&(u?u.push(h):c&&h()),h}function ec(e,t,n){const s=this.proxy,o=be(e)?e.includes(".")?ii(s,e):()=>s[e]:e.bind(s,s);let r;Y(t)?r=t:(r=t.handler,n=t);const i=Pn(this),a=ri(o,r.bind(s),n);return i(),a}function ii(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const tc=Symbol("_vte"),ai=e=>e.__isTeleport,pt=Symbol("_leaveCb"),$n=Symbol("_enterCb");function ci(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vt(()=>{e.isMounted=!0}),as(()=>{e.isUnmounting=!0}),e}const je=[Function,Array],li={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:je,onEnter:je,onAfterEnter:je,onEnterCancelled:je,onBeforeLeave:je,onLeave:je,onAfterLeave:je,onLeaveCancelled:je,onBeforeAppear:je,onAppear:je,onAfterAppear:je,onAppearCancelled:je},ui=e=>{const t=e.subTree;return t.component?ui(t.component):t},nc={name:"BaseTransition",props:li,setup(e,{slots:t}){const n=ho(),s=ci();return()=>{const o=t.default&&ao(t.default(),!0);if(!o||!o.length)return;const r=di(o),i=se(e),{mode:a}=i;if(s.isLeaving)return vs(r);const c=To(r);if(!c)return vs(r);let u=kn(c,i,s,n,f=>u=f);c.type!==De&&Ht(c,u);let l=n.subTree&&To(n.subTree);if(l&&l.type!==De&&!Mt(l,c)&&ui(n).type!==De){let f=kn(l,i,s,n);if(Ht(l,f),a==="out-in"&&c.type!==De)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,l=void 0},vs(r);a==="in-out"&&c.type!==De?f.delayLeave=(h,g,v)=>{const m=fi(s,l);m[String(l.key)]=l,h[pt]=()=>{g(),h[pt]=void 0,delete u.delayedLeave,l=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return r}}};function di(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==De){t=n;break}}return t}const sc=nc;function fi(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function kn(e,t,n,s,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:h,onLeave:g,onAfterLeave:v,onLeaveCancelled:m,onBeforeAppear:R,onAppear:T,onAfterAppear:E,onAppearCancelled:N}=t,F=String(e.key),Z=fi(n,e),oe=(K,I)=>{K&&Xe(K,s,9,I)},ne=(K,I)=>{const $=I[1];oe(K,I),G(K)?K.every(C=>C.length<=1)&&$():K.length<=1&&$()},xe={mode:i,persisted:a,beforeEnter(K){let I=c;if(!n.isMounted)if(r)I=R||c;else return;K[pt]&&K[pt](!0);const $=Z[F];$&&Mt(e,$)&&$.el[pt]&&$.el[pt](),oe(I,[K])},enter(K){let I=u,$=l,C=f;if(!n.isMounted)if(r)I=T||u,$=E||l,C=N||f;else return;let j=!1;const ce=K[$n]=ve=>{j||(j=!0,ve?oe(C,[K]):oe($,[K]),xe.delayedLeave&&xe.delayedLeave(),K[$n]=void 0)};I?ne(I,[K,ce]):ce()},leave(K,I){const $=String(e.key);if(K[$n]&&K[$n](!0),n.isUnmounting)return I();oe(h,[K]);let C=!1;const j=K[pt]=ce=>{C||(C=!0,I(),ce?oe(m,[K]):oe(v,[K]),K[pt]=void 0,Z[$]===e&&delete Z[$])};Z[$]=e,g?ne(g,[K,j]):j()},clone(K){const I=kn(K,t,n,s,o);return o&&o(I),I}};return xe}function vs(e){if(rs(e))return e=Tt(e),e.children=null,e}function To(e){if(!rs(e))return ai(e.type)&&e.children?di(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Y(n.default))return n.default()}}function Ht(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ht(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ao(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===he?(i.patchFlag&128&&o++,s=s.concat(ao(i.children,t,a))):(t||i.type!==De)&&s.push(a!=null?Tt(i,{key:a}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function pi(e,t){return Y(e)?ye({name:e.name},t,{setup:e}):e}function hi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Gn=new WeakMap;function mn(e,t,n,s,o=!1){if(G(e)){e.forEach((v,m)=>mn(v,t&&(G(t)?t[m]:t),n,s,o));return}if(gn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&mn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?us(s.component):s.el,i=o?null:r,{i:a,r:c}=e,u=t&&t.r,l=a.refs===ue?a.refs={}:a.refs,f=a.setupState,h=se(f),g=f===ue?Rr:v=>ae(h,v);if(u!=null&&u!==c){if(Po(t),be(u))l[u]=null,g(u)&&(f[u]=null);else if(Ee(u)){u.value=null;const v=t;v.k&&(l[v.k]=null)}}if(Y(c))Tn(c,a,12,[i,l]);else{const v=be(c),m=Ee(c);if(v||m){const R=()=>{if(e.f){const T=v?g(c)?f[c]:l[c]:c.value;if(o)G(T)&&zs(T,r);else if(G(T))T.includes(r)||T.push(r);else if(v)l[c]=[r],g(c)&&(f[c]=l[c]);else{const E=[r];c.value=E,e.k&&(l[e.k]=E)}}else v?(l[c]=i,g(c)&&(f[c]=i)):m&&(c.value=i,e.k&&(l[e.k]=i))};if(i){const T=()=>{R(),Gn.delete(e)};T.id=-1,Gn.set(e,T),Be(T,n)}else Po(e),R()}}}function Po(e){const t=Gn.get(e);t&&(t.flags|=8,Gn.delete(e))}ns().requestIdleCallback;ns().cancelIdleCallback;const gn=e=>!!e.type.__asyncLoader,rs=e=>e.type.__isKeepAlive;function oc(e,t){mi(e,"a",t)}function rc(e,t){mi(e,"da",t)}function mi(e,t,n=Ce){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(is(t,s,n),n){let o=n.parent;for(;o&&o.parent;)rs(o.parent.vnode)&&ic(s,t,n,o),o=o.parent}}function ic(e,t,n,s){const o=is(t,e,s,!0);bi(()=>{zs(s[t],o)},n)}function is(e,t,n=Ce,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{gt();const a=Pn(n),c=Xe(t,n,e,i);return a(),bt(),c});return s?o.unshift(r):o.push(r),r}}const yt=e=>(t,n=Ce)=>{(!En||e==="sp")&&is(e,(...s)=>t(...s),n)},ac=yt("bm"),Vt=yt("m"),cc=yt("bu"),gi=yt("u"),as=yt("bum"),bi=yt("um"),lc=yt("sp"),uc=yt("rtg"),dc=yt("rtc");function fc(e,t=Ce){is("ec",e,t)}const vi="components";function co(e,t){return wi(vi,e,!0,t)||e}const yi=Symbol.for("v-ndc");function pc(e){return be(e)?wi(vi,e,!1)||e:e||yi}function wi(e,t,n=!0,s=!1){const o=Ue||Ce;if(o){const r=o.type;{const a=Qc(r,!1);if(a&&(a===t||a===Ke(t)||a===ts(Ke(t))))return r}const i=Do(o[e]||r[e],t)||Do(o.appContext[e],t);return!i&&s?r:i}}function Do(e,t){return e&&(e[t]||e[Ke(t)]||e[ts(Ke(t))])}function Ye(e,t,n,s){let o;const r=n,i=G(e);if(i||be(e)){const a=i&&Bt(e);let c=!1,u=!1;a&&(c=!qe(e),u=vt(e),e=ss(e)),o=new Array(e.length);for(let l=0,f=e.length;l<f;l++)o[l]=t(c?u?tn(Ze(e[l])):Ze(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r)}else if(me(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,r));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const l=a[c];o[c]=t(e[l],l,c,r)}}else o=[];return o}const $s=e=>e?Bi(e)?us(e):$s(e.parent):null,bn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$s(e.parent),$root:e=>$s(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>_i(e),$forceUpdate:e=>e.f||(e.f=()=>{io(e.update)}),$nextTick:e=>e.n||(e.n=ro.bind(e.proxy)),$watch:e=>ec.bind(e)}),ys=(e,t)=>e!==ue&&!e.__isScriptSetup&&ae(e,t),hc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:c}=e;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(ys(s,t))return i[t]=1,s[t];if(o!==ue&&ae(o,t))return i[t]=2,o[t];if(ae(r,t))return i[t]=3,r[t];if(n!==ue&&ae(n,t))return i[t]=4,n[t];Ms&&(i[t]=0)}}const u=bn[t];let l,f;if(u)return t==="$attrs"&&ke(e.attrs,"get",""),u(e);if((l=a.__cssModules)&&(l=l[t]))return l;if(n!==ue&&ae(n,t))return i[t]=4,n[t];if(f=c.config.globalProperties,ae(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return ys(o,t)?(o[t]=n,!0):s!==ue&&ae(s,t)?(s[t]=n,!0):ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:r,type:i}},a){let c;return!!(n[a]||e!==ue&&a[0]!=="$"&&ae(e,a)||ys(t,a)||ae(r,a)||ae(s,a)||ae(bn,a)||ae(o.config.globalProperties,a)||(c=i.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Io(e){return G(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ms=!0;function mc(e){const t=_i(e),n=e.proxy,s=e.ctx;Ms=!1,t.beforeCreate&&Oo(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:h,beforeUpdate:g,updated:v,activated:m,deactivated:R,beforeDestroy:T,beforeUnmount:E,destroyed:N,unmounted:F,render:Z,renderTracked:oe,renderTriggered:ne,errorCaptured:xe,serverPrefetch:K,expose:I,inheritAttrs:$,components:C,directives:j,filters:ce}=t;if(u&&gc(u,s,null),i)for(const Q in i){const z=i[Q];Y(z)&&(s[Q]=z.bind(n))}if(o){const Q=o.call(n,n);me(Q)&&(e.data=Rn(Q))}if(Ms=!0,r)for(const Q in r){const z=r[Q],Ie=Y(z)?z.bind(n,n):Y(z.get)?z.get.bind(n,n):lt,Oe=!Y(z)&&Y(z.set)?z.set.bind(n):lt,tt=de({get:Ie,set:Oe});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Le=>tt.value=Le})}if(a)for(const Q in a)xi(a[Q],s,n,Q);if(c){const Q=Y(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(z=>{Fn(z,Q[z])})}l&&Oo(l,e,"c");function J(Q,z){G(z)?z.forEach(Ie=>Q(Ie.bind(n))):z&&Q(z.bind(n))}if(J(ac,f),J(Vt,h),J(cc,g),J(gi,v),J(oc,m),J(rc,R),J(fc,xe),J(dc,oe),J(uc,ne),J(as,E),J(bi,F),J(lc,K),G(I))if(I.length){const Q=e.exposed||(e.exposed={});I.forEach(z=>{Object.defineProperty(Q,z,{get:()=>n[z],set:Ie=>n[z]=Ie,enumerable:!0})})}else e.exposed||(e.exposed={});Z&&e.render===lt&&(e.render=Z),$!=null&&(e.inheritAttrs=$),C&&(e.components=C),j&&(e.directives=j),K&&hi(e)}function gc(e,t,n=lt){G(e)&&(e=Ns(e));for(const s in e){const o=e[s];let r;me(o)?"default"in o?r=Qe(o.from||s,o.default,!0):r=Qe(o.from||s):r=Qe(o),Ee(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Oo(e,t,n){Xe(G(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function xi(e,t,n,s){let o=s.includes(".")?ii(n,s):()=>n[s];if(be(e)){const r=t[e];Y(r)&&Xt(o,r)}else if(Y(e))Xt(o,e.bind(n));else if(me(e))if(G(e))e.forEach(r=>xi(r,t,n,s));else{const r=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(r)&&Xt(o,r,e)}}function _i(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let c;return a?c=a:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(u=>qn(c,u,i,!0)),qn(c,t,i)),me(t)&&r.set(t,c),c}function qn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&qn(e,r,n,!0),o&&o.forEach(i=>qn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=bc[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const bc={data:Lo,props:$o,emits:$o,methods:dn,computed:dn,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:dn,directives:dn,watch:yc,provide:Lo,inject:vc};function Lo(e,t){return t?e?function(){return ye(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function vc(e,t){return dn(Ns(e),Ns(t))}function Ns(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function dn(e,t){return e?ye(Object.create(null),e,t):t}function $o(e,t){return e?G(e)&&G(t)?[...new Set([...e,...t])]:ye(Object.create(null),Io(e),Io(t??{})):t}function yc(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const s in t)n[s]=Ae(e[s],t[s]);return n}function ki(){return{app:null,config:{isNativeTag:Rr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wc=0;function xc(e,t){return function(s,o=null){Y(s)||(s=ye({},s)),o!=null&&!me(o)&&(o=null);const r=ki(),i=new WeakSet,a=[];let c=!1;const u=r.app={_uid:wc++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Xc,get config(){return r.config},set config(l){},use(l,...f){return i.has(l)||(l&&Y(l.install)?(i.add(l),l.install(u,...f)):Y(l)&&(i.add(l),l(u,...f))),u},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),u},component(l,f){return f?(r.components[l]=f,u):r.components[l]},directive(l,f){return f?(r.directives[l]=f,u):r.directives[l]},mount(l,f,h){if(!c){const g=u._ceVNode||re(s,o);return g.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),e(g,l,h),c=!0,u._container=l,l.__vue_app__=u,us(g.component)}},onUnmount(l){a.push(l)},unmount(){c&&(Xe(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(l,f){return r.provides[l]=f,u},runWithContext(l){const f=en;en=u;try{return l()}finally{en=f}}};return u}}let en=null;const _c=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${Ut(t)}Modifiers`];function kc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ue;let o=n;const r=t.startsWith("update:"),i=r&&_c(s,t.slice(7));i&&(i.trim&&(o=n.map(l=>be(l)?l.trim():l)),i.number&&(o=n.map(Qs)));let a,c=s[a=ps(t)]||s[a=ps(Ke(t))];!c&&r&&(c=s[a=ps(Ut(t))]),c&&Xe(c,e,6,o);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Xe(u,e,6,o)}}const Sc=new WeakMap;function Si(e,t,n=!1){const s=n?Sc:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!Y(e)){const c=u=>{const l=Si(u,t,!0);l&&(a=!0,ye(i,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(me(e)&&s.set(e,null),null):(G(r)?r.forEach(c=>i[c]=null):ye(i,r),me(e)&&s.set(e,i),i)}function cs(e,t){return!e||!Zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ae(e,t[0].toLowerCase()+t.slice(1))||ae(e,Ut(t))||ae(e,t))}function Mo(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:a,emit:c,render:u,renderCache:l,props:f,data:h,setupState:g,ctx:v,inheritAttrs:m}=e,R=jn(e);let T,E;try{if(n.shapeFlag&4){const F=o||s,Z=F;T=ct(u.call(Z,F,l,f,g,h,v)),E=a}else{const F=t;T=ct(F.length>1?F(f,{attrs:a,slots:i,emit:c}):F(f,null)),E=t.props?a:Cc(a)}}catch(F){vn.length=0,os(F,e,1),T=re(De)}let N=T;if(E&&m!==!1){const F=Object.keys(E),{shapeFlag:Z}=N;F.length&&Z&7&&(r&&F.some(Ys)&&(E=Ec(E,r)),N=Tt(N,E,!1,!0))}return n.dirs&&(N=Tt(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&Ht(N,n.transition),T=N,jn(R),T}const Cc=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zn(n))&&((t||(t={}))[n]=e[n]);return t},Ec=(e,t)=>{const n={};for(const s in e)(!Ys(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ac(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:c}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?No(s,i,u):!!i;if(c&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const h=l[f];if(i[h]!==s[h]&&!cs(u,h))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?No(s,i,u):!0:!!i;return!1}function No(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!cs(n,r))return!0}return!1}function Rc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ci={},Ei=()=>Object.create(Ci),Ai=e=>Object.getPrototypeOf(e)===Ci;function Tc(e,t,n,s=!1){const o={},r=Ei();e.propsDefaults=Object.create(null),Ri(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Qr(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Pc(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=se(o),[c]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let f=0;f<l.length;f++){let h=l[f];if(cs(e.emitsOptions,h))continue;const g=t[h];if(c)if(ae(r,h))g!==r[h]&&(r[h]=g,u=!0);else{const v=Ke(h);o[v]=Fs(c,a,v,g,e,!1)}else g!==r[h]&&(r[h]=g,u=!0)}}}else{Ri(e,t,o,r)&&(u=!0);let l;for(const f in a)(!t||!ae(t,f)&&((l=Ut(f))===f||!ae(t,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(o[f]=Fs(c,a,f,void 0,e,!0)):delete o[f]);if(r!==a)for(const f in r)(!t||!ae(t,f))&&(delete r[f],u=!0)}u&&ht(e.attrs,"set","")}function Ri(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(fn(c))continue;const u=t[c];let l;o&&ae(o,l=Ke(c))?!r||!r.includes(l)?n[l]=u:(a||(a={}))[l]=u:cs(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(r){const c=se(n),u=a||ue;for(let l=0;l<r.length;l++){const f=r[l];n[f]=Fs(o,c,f,u[f],e,!ae(u,f))}}return i}function Fs(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=ae(i,"default");if(a&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&Y(c)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const l=Pn(o);s=u[n]=c.call(null,t),l()}}else s=c;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===Ut(n))&&(s=!0))}return s}const Dc=new WeakMap;function Ti(e,t,n=!1){const s=n?Dc:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let c=!1;if(!Y(e)){const l=f=>{c=!0;const[h,g]=Ti(f,t,!0);ye(i,h),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!r&&!c)return me(e)&&s.set(e,Jt),Jt;if(G(r))for(let l=0;l<r.length;l++){const f=Ke(r[l]);Fo(f)&&(i[f]=ue)}else if(r)for(const l in r){const f=Ke(l);if(Fo(f)){const h=r[l],g=i[f]=G(h)||Y(h)?{type:h}:ye({},h),v=g.type;let m=!1,R=!0;if(G(v))for(let T=0;T<v.length;++T){const E=v[T],N=Y(E)&&E.name;if(N==="Boolean"){m=!0;break}else N==="String"&&(R=!1)}else m=Y(v)&&v.name==="Boolean";g[0]=m,g[1]=R,(m||ae(g,"default"))&&a.push(f)}}const u=[i,a];return me(e)&&s.set(e,u),u}function Fo(e){return e[0]!=="$"&&!fn(e)}const lo=e=>e==="_"||e==="_ctx"||e==="$stable",uo=e=>G(e)?e.map(ct):[ct(e)],Ic=(e,t,n)=>{if(t._n)return t;const s=Rt((...o)=>uo(t(...o)),n);return s._c=!1,s},Pi=(e,t,n)=>{const s=e._ctx;for(const o in e){if(lo(o))continue;const r=e[o];if(Y(r))t[o]=Ic(o,r,s);else if(r!=null){const i=uo(r);t[o]=()=>i}}},Di=(e,t)=>{const n=uo(t);e.slots.default=()=>n},Ii=(e,t,n)=>{for(const s in t)(n||!lo(s))&&(e[s]=t[s])},Oc=(e,t,n)=>{const s=e.slots=Ei();if(e.vnode.shapeFlag&32){const o=t._;o?(Ii(s,t,n),n&&Or(s,"_",o,!0)):Pi(t,s)}else t&&Di(e,t)},Lc=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=ue;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Ii(o,t,n):(r=!t.$stable,Pi(t,o)),i=t}else t&&(Di(e,t),i={default:1});if(r)for(const a in o)!lo(a)&&i[a]==null&&delete o[a]},Be=Bc;function $c(e){return Mc(e)}function Mc(e,t){const n=ns();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:h,setScopeId:g=lt,insertStaticContent:v}=e,m=(d,p,b,y=null,_=null,w=null,D=void 0,P=null,A=!!p.dynamicChildren)=>{if(d===p)return;d&&!Mt(d,p)&&(y=x(d),Le(d,_,w,!0),d=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:S,ref:V,shapeFlag:M}=p;switch(S){case ls:R(d,p,b,y);break;case De:T(d,p,b,y);break;case Bn:d==null&&E(p,b,y,D);break;case he:C(d,p,b,y,_,w,D,P,A);break;default:M&1?Z(d,p,b,y,_,w,D,P,A):M&6?j(d,p,b,y,_,w,D,P,A):(M&64||M&128)&&S.process(d,p,b,y,_,w,D,P,A,U)}V!=null&&_?mn(V,d&&d.ref,w,p||d,!p):V==null&&d&&d.ref!=null&&mn(d.ref,null,w,d,!0)},R=(d,p,b,y)=>{if(d==null)s(p.el=a(p.children),b,y);else{const _=p.el=d.el;p.children!==d.children&&u(_,p.children)}},T=(d,p,b,y)=>{d==null?s(p.el=c(p.children||""),b,y):p.el=d.el},E=(d,p,b,y)=>{[d.el,d.anchor]=v(d.children,p,b,y,d.el,d.anchor)},N=({el:d,anchor:p},b,y)=>{let _;for(;d&&d!==p;)_=h(d),s(d,b,y),d=_;s(p,b,y)},F=({el:d,anchor:p})=>{let b;for(;d&&d!==p;)b=h(d),o(d),d=b;o(p)},Z=(d,p,b,y,_,w,D,P,A)=>{if(p.type==="svg"?D="svg":p.type==="math"&&(D="mathml"),d==null)oe(p,b,y,_,w,D,P,A);else{const S=d.el&&d.el._isVueCE?d.el:null;try{S&&S._beginPatch(),K(d,p,_,w,D,P,A)}finally{S&&S._endPatch()}}},oe=(d,p,b,y,_,w,D,P)=>{let A,S;const{props:V,shapeFlag:M,transition:W,dirs:q}=d;if(A=d.el=i(d.type,w,V&&V.is,V),M&8?l(A,d.children):M&16&&xe(d.children,A,null,y,_,ws(d,w),D,P),q&&It(d,null,y,"created"),ne(A,d,d.scopeId,D,y),V){for(const fe in V)fe!=="value"&&!fn(fe)&&r(A,fe,null,V[fe],w,y);"value"in V&&r(A,"value",null,V.value,w),(S=V.onVnodeBeforeMount)&&rt(S,y,d)}q&&It(d,null,y,"beforeMount");const ee=Nc(_,W);ee&&W.beforeEnter(A),s(A,p,b),((S=V&&V.onVnodeMounted)||ee||q)&&Be(()=>{S&&rt(S,y,d),ee&&W.enter(A),q&&It(d,null,y,"mounted")},_)},ne=(d,p,b,y,_)=>{if(b&&g(d,b),y)for(let w=0;w<y.length;w++)g(d,y[w]);if(_){let w=_.subTree;if(p===w||Mi(w.type)&&(w.ssContent===p||w.ssFallback===p)){const D=_.vnode;ne(d,D,D.scopeId,D.slotScopeIds,_.parent)}}},xe=(d,p,b,y,_,w,D,P,A=0)=>{for(let S=A;S<d.length;S++){const V=d[S]=P?Ct(d[S]):ct(d[S]);m(null,V,p,b,y,_,w,D,P)}},K=(d,p,b,y,_,w,D)=>{const P=p.el=d.el;let{patchFlag:A,dynamicChildren:S,dirs:V}=p;A|=d.patchFlag&16;const M=d.props||ue,W=p.props||ue;let q;if(b&&Ot(b,!1),(q=W.onVnodeBeforeUpdate)&&rt(q,b,p,d),V&&It(p,d,b,"beforeUpdate"),b&&Ot(b,!0),(M.innerHTML&&W.innerHTML==null||M.textContent&&W.textContent==null)&&l(P,""),S?I(d.dynamicChildren,S,P,b,y,ws(p,_),w):D||z(d,p,P,null,b,y,ws(p,_),w,!1),A>0){if(A&16)$(P,M,W,b,_);else if(A&2&&M.class!==W.class&&r(P,"class",null,W.class,_),A&4&&r(P,"style",M.style,W.style,_),A&8){const ee=p.dynamicProps;for(let fe=0;fe<ee.length;fe++){const le=ee[fe],$e=M[le],Me=W[le];(Me!==$e||le==="value")&&r(P,le,$e,Me,_,b)}}A&1&&d.children!==p.children&&l(P,p.children)}else!D&&S==null&&$(P,M,W,b,_);((q=W.onVnodeUpdated)||V)&&Be(()=>{q&&rt(q,b,p,d),V&&It(p,d,b,"updated")},y)},I=(d,p,b,y,_,w,D)=>{for(let P=0;P<p.length;P++){const A=d[P],S=p[P],V=A.el&&(A.type===he||!Mt(A,S)||A.shapeFlag&198)?f(A.el):b;m(A,S,V,null,y,_,w,D,!0)}},$=(d,p,b,y,_)=>{if(p!==b){if(p!==ue)for(const w in p)!fn(w)&&!(w in b)&&r(d,w,p[w],null,_,y);for(const w in b){if(fn(w))continue;const D=b[w],P=p[w];D!==P&&w!=="value"&&r(d,w,P,D,_,y)}"value"in b&&r(d,"value",p.value,b.value,_)}},C=(d,p,b,y,_,w,D,P,A)=>{const S=p.el=d?d.el:a(""),V=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:W,slotScopeIds:q}=p;q&&(P=P?P.concat(q):q),d==null?(s(S,b,y),s(V,b,y),xe(p.children||[],b,V,_,w,D,P,A)):M>0&&M&64&&W&&d.dynamicChildren&&d.dynamicChildren.length===W.length?(I(d.dynamicChildren,W,b,_,w,D,P),(p.key!=null||_&&p===_.subTree)&&Oi(d,p,!0)):z(d,p,b,V,_,w,D,P,A)},j=(d,p,b,y,_,w,D,P,A)=>{p.slotScopeIds=P,d==null?p.shapeFlag&512?_.ctx.activate(p,b,y,D,A):ce(p,b,y,_,w,D,A):ve(d,p,A)},ce=(d,p,b,y,_,w,D)=>{const P=d.component=qc(d,y,_);if(rs(d)&&(P.ctx.renderer=U),Kc(P,!1,D),P.asyncDep){if(_&&_.registerDep(P,J,D),!d.el){const A=P.subTree=re(De);T(null,A,p,b),d.placeholder=A.el}}else J(P,d,p,b,_,w,D)},ve=(d,p,b)=>{const y=p.component=d.component;if(Ac(d,p,b))if(y.asyncDep&&!y.asyncResolved){Q(y,p,b);return}else y.next=p,y.update();else p.el=d.el,y.vnode=p},J=(d,p,b,y,_,w,D)=>{const P=()=>{if(d.isMounted){let{next:M,bu:W,u:q,parent:ee,vnode:fe}=d;{const st=Li(d);if(st){M&&(M.el=fe.el,Q(d,M,D)),st.asyncDep.then(()=>{d.isUnmounted||P()});return}}let le=M,$e;Ot(d,!1),M?(M.el=fe.el,Q(d,M,D)):M=fe,W&&Nn(W),($e=M.props&&M.props.onVnodeBeforeUpdate)&&rt($e,ee,M,fe),Ot(d,!0);const Me=Mo(d),nt=d.subTree;d.subTree=Me,m(nt,Me,f(nt.el),x(nt),d,_,w),M.el=Me.el,le===null&&Rc(d,Me.el),q&&Be(q,_),($e=M.props&&M.props.onVnodeUpdated)&&Be(()=>rt($e,ee,M,fe),_)}else{let M;const{el:W,props:q}=p,{bm:ee,m:fe,parent:le,root:$e,type:Me}=d,nt=gn(p);Ot(d,!1),ee&&Nn(ee),!nt&&(M=q&&q.onVnodeBeforeMount)&&rt(M,le,p),Ot(d,!0);{$e.ce&&$e.ce._def.shadowRoot!==!1&&$e.ce._injectChildStyle(Me);const st=d.subTree=Mo(d);m(null,st,b,y,d,_,w),p.el=st.el}if(fe&&Be(fe,_),!nt&&(M=q&&q.onVnodeMounted)){const st=p;Be(()=>rt(M,le,st),_)}(p.shapeFlag&256||le&&gn(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Be(d.a,_),d.isMounted=!0,p=b=y=null}};d.scope.on();const A=d.effect=new Nr(P);d.scope.off();const S=d.update=A.run.bind(A),V=d.job=A.runIfDirty.bind(A);V.i=d,V.id=d.uid,A.scheduler=()=>io(V),Ot(d,!0),S()},Q=(d,p,b)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Pc(d,p.props,y,b),Lc(d,p.children,b),gt(),Ro(d),bt()},z=(d,p,b,y,_,w,D,P,A=!1)=>{const S=d&&d.children,V=d?d.shapeFlag:0,M=p.children,{patchFlag:W,shapeFlag:q}=p;if(W>0){if(W&128){Oe(S,M,b,y,_,w,D,P,A);return}else if(W&256){Ie(S,M,b,y,_,w,D,P,A);return}}q&8?(V&16&&Ve(S,_,w),M!==S&&l(b,M)):V&16?q&16?Oe(S,M,b,y,_,w,D,P,A):Ve(S,_,w,!0):(V&8&&l(b,""),q&16&&xe(M,b,y,_,w,D,P,A))},Ie=(d,p,b,y,_,w,D,P,A)=>{d=d||Jt,p=p||Jt;const S=d.length,V=p.length,M=Math.min(S,V);let W;for(W=0;W<M;W++){const q=p[W]=A?Ct(p[W]):ct(p[W]);m(d[W],q,b,null,_,w,D,P,A)}S>V?Ve(d,_,w,!0,!1,M):xe(p,b,y,_,w,D,P,A,M)},Oe=(d,p,b,y,_,w,D,P,A)=>{let S=0;const V=p.length;let M=d.length-1,W=V-1;for(;S<=M&&S<=W;){const q=d[S],ee=p[S]=A?Ct(p[S]):ct(p[S]);if(Mt(q,ee))m(q,ee,b,null,_,w,D,P,A);else break;S++}for(;S<=M&&S<=W;){const q=d[M],ee=p[W]=A?Ct(p[W]):ct(p[W]);if(Mt(q,ee))m(q,ee,b,null,_,w,D,P,A);else break;M--,W--}if(S>M){if(S<=W){const q=W+1,ee=q<V?p[q].el:y;for(;S<=W;)m(null,p[S]=A?Ct(p[S]):ct(p[S]),b,ee,_,w,D,P,A),S++}}else if(S>W)for(;S<=M;)Le(d[S],_,w,!0),S++;else{const q=S,ee=S,fe=new Map;for(S=ee;S<=W;S++){const Fe=p[S]=A?Ct(p[S]):ct(p[S]);Fe.key!=null&&fe.set(Fe.key,S)}let le,$e=0;const Me=W-ee+1;let nt=!1,st=0;const rn=new Array(Me);for(S=0;S<Me;S++)rn[S]=0;for(S=q;S<=M;S++){const Fe=d[S];if($e>=Me){Le(Fe,_,w,!0);continue}let ot;if(Fe.key!=null)ot=fe.get(Fe.key);else for(le=ee;le<=W;le++)if(rn[le-ee]===0&&Mt(Fe,p[le])){ot=le;break}ot===void 0?Le(Fe,_,w,!0):(rn[ot-ee]=S+1,ot>=st?st=ot:nt=!0,m(Fe,p[ot],b,null,_,w,D,P,A),$e++)}const _o=nt?Fc(rn):Jt;for(le=_o.length-1,S=Me-1;S>=0;S--){const Fe=ee+S,ot=p[Fe],ko=p[Fe+1],So=Fe+1<V?ko.el||$i(ko):y;rn[S]===0?m(null,ot,b,So,_,w,D,P,A):nt&&(le<0||S!==_o[le]?tt(ot,b,So,2):le--)}}},tt=(d,p,b,y,_=null)=>{const{el:w,type:D,transition:P,children:A,shapeFlag:S}=d;if(S&6){tt(d.component.subTree,p,b,y);return}if(S&128){d.suspense.move(p,b,y);return}if(S&64){D.move(d,p,b,U);return}if(D===he){s(w,p,b);for(let M=0;M<A.length;M++)tt(A[M],p,b,y);s(d.anchor,p,b);return}if(D===Bn){N(d,p,b);return}if(y!==2&&S&1&&P)if(y===0)P.beforeEnter(w),s(w,p,b),Be(()=>P.enter(w),_);else{const{leave:M,delayLeave:W,afterLeave:q}=P,ee=()=>{d.ctx.isUnmounted?o(w):s(w,p,b)},fe=()=>{w._isLeaving&&w[pt](!0),M(w,()=>{ee(),q&&q()})};W?W(w,ee,fe):fe()}else s(w,p,b)},Le=(d,p,b,y=!1,_=!1)=>{const{type:w,props:D,ref:P,children:A,dynamicChildren:S,shapeFlag:V,patchFlag:M,dirs:W,cacheIndex:q}=d;if(M===-2&&(_=!1),P!=null&&(gt(),mn(P,null,b,d,!0),bt()),q!=null&&(p.renderCache[q]=void 0),V&256){p.ctx.deactivate(d);return}const ee=V&1&&W,fe=!gn(d);let le;if(fe&&(le=D&&D.onVnodeBeforeUnmount)&&rt(le,p,d),V&6)Dt(d.component,b,y);else{if(V&128){d.suspense.unmount(b,y);return}ee&&It(d,null,p,"beforeUnmount"),V&64?d.type.remove(d,p,b,U,y):S&&!S.hasOnce&&(w!==he||M>0&&M&64)?Ve(S,p,b,!1,!0):(w===he&&M&384||!_&&V&16)&&Ve(A,p,b),y&&jt(d)}(fe&&(le=D&&D.onVnodeUnmounted)||ee)&&Be(()=>{le&&rt(le,p,d),ee&&It(d,null,p,"unmounted")},b)},jt=d=>{const{type:p,el:b,anchor:y,transition:_}=d;if(p===he){Gt(b,y);return}if(p===Bn){F(d);return}const w=()=>{o(b),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:D,delayLeave:P}=_,A=()=>D(b,w);P?P(d.el,w,A):A()}else w()},Gt=(d,p)=>{let b;for(;d!==p;)b=h(d),o(d),d=b;o(p)},Dt=(d,p,b)=>{const{bum:y,scope:_,job:w,subTree:D,um:P,m:A,a:S}=d;Bo(A),Bo(S),y&&Nn(y),_.stop(),w&&(w.flags|=8,Le(D,d,p,b)),P&&Be(P,p),Be(()=>{d.isUnmounted=!0},p)},Ve=(d,p,b,y=!1,_=!1,w=0)=>{for(let D=w;D<d.length;D++)Le(d[D],p,b,y,_)},x=d=>{if(d.shapeFlag&6)return x(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),b=p&&p[tc];return b?h(b):p};let H=!1;const O=(d,p,b)=>{let y;d==null?p._vnode&&(Le(p._vnode,null,null,!0),y=p._vnode.component):m(p._vnode||null,d,p,null,null,null,b),p._vnode=d,H||(H=!0,Ro(y),ni(),H=!1)},U={p:m,um:Le,m:tt,r:jt,mt:ce,mc:xe,pc:z,pbc:I,n:x,o:e};return{render:O,hydrate:void 0,createApp:xc(O)}}function ws({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ot({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Nc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Oi(e,t,n=!1){const s=e.children,o=t.children;if(G(s)&&G(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=Ct(o[r]),a.el=i.el),!n&&a.patchFlag!==-2&&Oi(i,a)),a.type===ls&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=r+(e.type===he?1:0)),a.type===De&&!a.el&&(a.el=i.el)}}function Fc(e){const t=e.slice(),n=[0];let s,o,r,i,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<u?r=a+1:i=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Li(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Li(t)}function Bo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function $i(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?$i(t.subTree):null}const Mi=e=>e.__isSuspense;function Bc(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):Ja(e)}const he=Symbol.for("v-fgt"),ls=Symbol.for("v-txt"),De=Symbol.for("v-cmt"),Bn=Symbol.for("v-stc"),vn=[];let We=null;function L(e=!1){vn.push(We=e?null:[])}function Hc(){vn.pop(),We=vn[vn.length-1]||null}let Sn=1;function Kn(e,t=!1){Sn+=e,e<0&&We&&t&&(We.hasOnce=!0)}function Ni(e){return e.dynamicChildren=Sn>0?We||Jt:null,Hc(),Sn>0&&We&&We.push(e),e}function B(e,t,n,s,o,r){return Ni(k(e,t,n,s,o,r,!0))}function Cn(e,t,n,s,o){return Ni(re(e,t,n,s,o,!0))}function Yn(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const Fi=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?be(e)||Ee(e)||Y(e)?{i:Ue,r:e,k:t,f:!!n}:e:null);function k(e,t=null,n=null,s=0,o=null,r=e===he?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fi(t),ref:t&&Hn(t),scopeId:oi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ue};return a?(po(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),Sn>0&&!i&&We&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&We.push(c),c}const re=Uc;function Uc(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===yi)&&(e=De),Yn(e)){const a=Tt(e,t,!0);return n&&po(a,n),Sn>0&&!r&&We&&(a.shapeFlag&6?We[We.indexOf(e)]=a:We.push(a)),a.patchFlag=-2,a}if(Zc(e)&&(e=e.__vccOpts),t){t=Wc(t);let{class:a,style:c}=t;a&&!be(a)&&(t.class=Wt(a)),me(c)&&(oo(c)&&!G(c)&&(c=ye({},c)),t.style=ze(c))}const i=be(e)?1:Mi(e)?128:ai(e)?64:me(e)?4:Y(e)?2:0;return k(e,t,n,s,o,i,r,!0)}function Wc(e){return e?oo(e)||Ai(e)?ye({},e):e:null}function Tt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:a,transition:c}=e,u=t?Vc(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Fi(u),ref:t&&t.ref?n&&r?G(r)?r.concat(Hn(t)):[r,Hn(t)]:Hn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Ht(l,c.clone(l)),l}function Ge(e=" ",t=0){return re(ls,null,e,t)}function fo(e,t){const n=re(Bn,null,e);return n.staticCount=t,n}function Pe(e="",t=!1){return t?(L(),Cn(De,null,e)):re(De,null,e)}function ct(e){return e==null||typeof e=="boolean"?re(De):G(e)?re(he,null,e.slice()):Yn(e)?Ct(e):re(ls,null,String(e))}function Ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tt(e)}function po(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),po(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Ai(t)?t._ctx=Ue:o===3&&Ue&&(Ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Ue},n=32):(t=String(t),s&64?(n=16,t=[Ge(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Wt([t.class,s.class]));else if(o==="style")t.style=ze([t.style,s.style]);else if(Zn(o)){const r=t[o],i=s[o];i&&r!==i&&!(G(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function rt(e,t,n,s=null){Xe(e,t,7,[n,s])}const jc=ki();let Gc=0;function qc(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||jc,r={uid:Gc++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ti(s,o),emitsOptions:Si(s,o),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=kc.bind(null,r),e.ce&&e.ce(r),r}let Ce=null;const ho=()=>Ce||Ue;let zn,Bs;{const e=ns(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};zn=t("__VUE_INSTANCE_SETTERS__",n=>Ce=n),Bs=t("__VUE_SSR_SETTERS__",n=>En=n)}const Pn=e=>{const t=Ce;return zn(e),e.scope.on(),()=>{e.scope.off(),zn(t)}},Ho=()=>{Ce&&Ce.scope.off(),zn(null)};function Bi(e){return e.vnode.shapeFlag&4}let En=!1;function Kc(e,t=!1,n=!1){t&&Bs(t);const{props:s,children:o}=e.vnode,r=Bi(e);Tc(e,s,r,t),Oc(e,o,n||t);const i=r?Yc(e,t):void 0;return t&&Bs(!1),i}function Yc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,hc);const{setup:s}=n;if(s){gt();const o=e.setupContext=s.length>1?Jc(e):null,r=Pn(e),i=Tn(s,e,0,[e.props,o]),a=Pr(i);if(bt(),r(),(a||e.sp)&&!gn(e)&&hi(e),a){if(i.then(Ho,Ho),t)return i.then(c=>{Uo(e,c)}).catch(c=>{os(c,e,0)});e.asyncDep=i}else Uo(e,i)}else Hi(e)}function Uo(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=Xr(t)),Hi(e)}function Hi(e,t,n){const s=e.type;e.render||(e.render=s.render||lt);{const o=Pn(e);gt();try{mc(e)}finally{bt(),o()}}}const zc={get(e,t){return ke(e,"get",""),e[t]}};function Jc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,zc),slots:e.slots,emit:e.emit,expose:t}}function us(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xr(Ha(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in bn)return bn[n](e)},has(t,n){return n in t||n in bn}})):e.proxy}function Qc(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function Zc(e){return Y(e)&&"__vccOpts"in e}const de=(e,t)=>Ga(e,t,En);function mo(e,t,n){try{Kn(-1);const s=arguments.length;return s===2?me(t)&&!G(t)?Yn(t)?re(e,null,[t]):re(e,t):re(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Yn(n)&&(n=[n]),re(e,t,n))}finally{Kn(1)}}const Xc="3.5.27";let Hs;const Wo=typeof window<"u"&&window.trustedTypes;if(Wo)try{Hs=Wo.createPolicy("vue",{createHTML:e=>e})}catch{}const Ui=Hs?e=>Hs.createHTML(e):e=>e,el="http://www.w3.org/2000/svg",tl="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,Vo=ft&&ft.createElement("template"),nl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?ft.createElementNS(el,e):t==="mathml"?ft.createElementNS(tl,e):n?ft.createElement(e,{is:n}):ft.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Vo.innerHTML=Ui(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Vo.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},wt="transition",cn="animation",nn=Symbol("_vtc"),Wi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vi=ye({},li,Wi),sl=e=>(e.displayName="Transition",e.props=Vi,e),go=sl((e,{slots:t})=>mo(sc,ji(e),t)),Lt=(e,t=[])=>{G(e)?e.forEach(n=>n(...t)):e&&e(...t)},jo=e=>e?G(e)?e.some(t=>t.length>1):e.length>1:!1;function ji(e){const t={};for(const C in e)C in Wi||(t[C]=e[C]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=i,appearToClass:l=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,v=ol(o),m=v&&v[0],R=v&&v[1],{onBeforeEnter:T,onEnter:E,onEnterCancelled:N,onLeave:F,onLeaveCancelled:Z,onBeforeAppear:oe=T,onAppear:ne=E,onAppearCancelled:xe=N}=t,K=(C,j,ce,ve)=>{C._enterCancelled=ve,_t(C,j?l:a),_t(C,j?u:i),ce&&ce()},I=(C,j)=>{C._isLeaving=!1,_t(C,f),_t(C,g),_t(C,h),j&&j()},$=C=>(j,ce)=>{const ve=C?ne:E,J=()=>K(j,C,ce);Lt(ve,[j,J]),Go(()=>{_t(j,C?c:r),it(j,C?l:a),jo(ve)||qo(j,s,m,J)})};return ye(t,{onBeforeEnter(C){Lt(T,[C]),it(C,r),it(C,i)},onBeforeAppear(C){Lt(oe,[C]),it(C,c),it(C,u)},onEnter:$(!1),onAppear:$(!0),onLeave(C,j){C._isLeaving=!0;const ce=()=>I(C,j);it(C,f),C._enterCancelled?(it(C,h),Us(C)):(Us(C),it(C,h)),Go(()=>{C._isLeaving&&(_t(C,f),it(C,g),jo(F)||qo(C,s,R,ce))}),Lt(F,[C,ce])},onEnterCancelled(C){K(C,!1,void 0,!0),Lt(N,[C])},onAppearCancelled(C){K(C,!0,void 0,!0),Lt(xe,[C])},onLeaveCancelled(C){I(C),Lt(Z,[C])}})}function ol(e){if(e==null)return null;if(me(e))return[xs(e.enter),xs(e.leave)];{const t=xs(e);return[t,t]}}function xs(e){return pa(e)}function it(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[nn]||(e[nn]=new Set)).add(t)}function _t(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[nn];n&&(n.delete(t),n.size||(e[nn]=void 0))}function Go(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let rl=0;function qo(e,t,n,s){const o=e._endId=++rl,r=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:a,propCount:c}=Gi(e,t);if(!i)return s();const u=i+"end";let l=0;const f=()=>{e.removeEventListener(u,h),r()},h=g=>{g.target===e&&++l>=c&&f()};setTimeout(()=>{l<c&&f()},a+1),e.addEventListener(u,h)}function Gi(e,t){const n=window.getComputedStyle(e),s=v=>(n[v]||"").split(", "),o=s(`${wt}Delay`),r=s(`${wt}Duration`),i=Ko(o,r),a=s(`${cn}Delay`),c=s(`${cn}Duration`),u=Ko(a,c);let l=null,f=0,h=0;t===wt?i>0&&(l=wt,f=i,h=r.length):t===cn?u>0&&(l=cn,f=u,h=c.length):(f=Math.max(i,u),l=f>0?i>u?wt:cn:null,h=l?l===wt?r.length:c.length:0);const g=l===wt&&/\b(?:transform|all)(?:,|$)/.test(s(`${wt}Property`).toString());return{type:l,timeout:f,propCount:h,hasTransform:g}}function Ko(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Yo(n)+Yo(e[s])))}function Yo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Us(e){return(e?e.ownerDocument:document).body.offsetHeight}function il(e,t,n){const s=e[nn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const zo=Symbol("_vod"),al=Symbol("_vsh"),cl=Symbol(""),ll=/(?:^|;)\s*display\s*:/;function ul(e,t,n){const s=e.style,o=be(n);let r=!1;if(n&&!o){if(t)if(be(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Un(s,a,"")}else for(const i in t)n[i]==null&&Un(s,i,"");for(const i in n)i==="display"&&(r=!0),Un(s,i,n[i])}else if(o){if(t!==n){const i=s[cl];i&&(n+=";"+i),s.cssText=n,r=ll.test(n)}}else t&&e.removeAttribute("style");zo in e&&(e[zo]=r?s.display:"",e[al]&&(s.display="none"))}const Jo=/\s*!important$/;function Un(e,t,n){if(G(n))n.forEach(s=>Un(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=dl(e,t);Jo.test(n)?e.setProperty(Ut(s),n.replace(Jo,""),"important"):e[s]=n}}const Qo=["Webkit","Moz","ms"],_s={};function dl(e,t){const n=_s[t];if(n)return n;let s=Ke(t);if(s!=="filter"&&s in e)return _s[t]=s;s=ts(s);for(let o=0;o<Qo.length;o++){const r=Qo[o]+s;if(r in e)return _s[t]=r}return t}const Zo="http://www.w3.org/1999/xlink";function Xo(e,t,n,s,o,r=ya(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Zo,t.slice(6,t.length)):e.setAttributeNS(Zo,t,n):n==null||r&&!Lr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Pt(n)?String(n):n)}function er(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ui(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Lr(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function Yt(e,t,n,s){e.addEventListener(t,n,s)}function fl(e,t,n,s){e.removeEventListener(t,n,s)}const tr=Symbol("_vei");function pl(e,t,n,s,o=null){const r=e[tr]||(e[tr]={}),i=r[t];if(s&&i)i.value=s;else{const[a,c]=hl(t);if(s){const u=r[t]=bl(s,o);Yt(e,a,u,c)}else i&&(fl(e,a,i,c),r[t]=void 0)}}const nr=/(?:Once|Passive|Capture)$/;function hl(e){let t;if(nr.test(e)){t={};let s;for(;s=e.match(nr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ut(e.slice(2)),t]}let ks=0;const ml=Promise.resolve(),gl=()=>ks||(ml.then(()=>ks=0),ks=Date.now());function bl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xe(vl(s,n.value),t,5,[s])};return n.value=e,n.attached=gl(),n}function vl(e,t){if(G(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const sr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yl=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?il(e,s,i):t==="style"?ul(e,n,s):Zn(t)?Ys(t)||pl(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):wl(e,t,s,i))?(er(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Xo(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!be(s))?er(e,Ke(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Xo(e,t,s,i))};function wl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&sr(t)&&Y(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return sr(t)&&be(n)?!1:t in e}const qi=new WeakMap,Ki=new WeakMap,Jn=Symbol("_moveCb"),or=Symbol("_enterCb"),xl=e=>(delete e.props.mode,e),_l=xl({name:"TransitionGroup",props:ye({},Vi,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ho(),s=ci();let o,r;return gi(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Al(o[0].el,n.vnode.el,i)){o=[];return}o.forEach(Sl),o.forEach(Cl);const a=o.filter(El);Us(n.vnode.el),a.forEach(c=>{const u=c.el,l=u.style;it(u,i),l.transform=l.webkitTransform=l.transitionDuration="";const f=u[Jn]=h=>{h&&h.target!==u||(!h||h.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",f),u[Jn]=null,_t(u,i))};u.addEventListener("transitionend",f)}),o=[]}),()=>{const i=se(e),a=ji(i);let c=i.tag||he;if(o=[],r)for(let u=0;u<r.length;u++){const l=r[u];l.el&&l.el instanceof Element&&(o.push(l),Ht(l,kn(l,a,s,n)),qi.set(l,{left:l.el.offsetLeft,top:l.el.offsetTop}))}r=t.default?ao(t.default()):[];for(let u=0;u<r.length;u++){const l=r[u];l.key!=null&&Ht(l,kn(l,a,s,n))}return re(c,null,r)}}}),kl=_l;function Sl(e){const t=e.el;t[Jn]&&t[Jn](),t[or]&&t[or]()}function Cl(e){Ki.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function El(e){const t=qi.get(e),n=Ki.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",e}}function Al(e,t,n){const s=e.cloneNode(),o=e[nn];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=Gi(s);return r.removeChild(s),i}const rr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return G(t)?n=>Nn(t,n):t};function Rl(e){e.target.composing=!0}function ir(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ss=Symbol("_assign");function ar(e,t,n){return t&&(e=e.trim()),n&&(e=Qs(e)),e}const Tl={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[Ss]=rr(o);const r=s||o.props&&o.props.type==="number";Yt(e,t?"change":"input",i=>{i.target.composing||e[Ss](ar(e.value,n,r))}),(n||r)&&Yt(e,"change",()=>{e.value=ar(e.value,n,r)}),t||(Yt(e,"compositionstart",Rl),Yt(e,"compositionend",ir),Yt(e,"change",ir))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},i){if(e[Ss]=rr(i),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?Qs(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===c)||(e.value=c))}},Pl=["ctrl","shift","alt","meta"],Dl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Pl.some(n=>e[`${n}Key`]&&!t.includes(n))},Il=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...r)=>{for(let i=0;i<t.length;i++){const a=Dl[t[i]];if(a&&a(o,t))return}return e(o,...r)}))},Ol=ye({patchProp:yl},nl);let cr;function Ll(){return cr||(cr=$c(Ol))}const $l=((...e)=>{const t=Ll().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Nl(s);if(!o)return;const r=t._component;!Y(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,Ml(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t});function Ml(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Nl(e){return be(e)?document.querySelector(e):e}const zt=typeof document<"u";function Yi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Yi(e.default)}const ie=Object.assign;function Cs(e,t){const n={};for(const s in t){const o=t[s];n[s]=et(o)?o.map(e):e(o)}return n}const yn=()=>{},et=Array.isArray;function lr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const zi=/#/g,Bl=/&/g,Hl=/\//g,Ul=/=/g,Wl=/\?/g,Ji=/\+/g,Vl=/%5B/g,jl=/%5D/g,Qi=/%5E/g,Gl=/%60/g,Zi=/%7B/g,ql=/%7C/g,Xi=/%7D/g,Kl=/%20/g;function bo(e){return e==null?"":encodeURI(""+e).replace(ql,"|").replace(Vl,"[").replace(jl,"]")}function Yl(e){return bo(e).replace(Zi,"{").replace(Xi,"}").replace(Qi,"^")}function Ws(e){return bo(e).replace(Ji,"%2B").replace(Kl,"+").replace(zi,"%23").replace(Bl,"%26").replace(Gl,"`").replace(Zi,"{").replace(Xi,"}").replace(Qi,"^")}function zl(e){return Ws(e).replace(Ul,"%3D")}function Jl(e){return bo(e).replace(zi,"%23").replace(Wl,"%3F")}function Ql(e){return Jl(e).replace(Hl,"%2F")}function An(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Zl=/\/$/,Xl=e=>e.replace(Zl,"");function Es(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(s=t.slice(0,c),r=t.slice(c,a>0?a:t.length),o=e(r.slice(1))),a>=0&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=su(s??t,n),{fullPath:s+r+i,path:s,query:o,hash:An(i)}}function eu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ur(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function tu(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&sn(t.matched[s],n.matched[o])&&ea(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function sn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ea(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!nu(e[n],t[n]))return!1;return!0}function nu(e,t){return et(e)?dr(e,t):et(t)?dr(t,e):e?.valueOf()===t?.valueOf()}function dr(e,t){return et(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function su(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,a;for(i=0;i<s.length;i++)if(a=s[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Vs=(function(e){return e.pop="pop",e.push="push",e})({}),As=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function ou(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Xl(e)}const ru=/^[^#]+#/;function iu(e,t){return e.replace(ru,"#")+t}function au(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ds=()=>({left:window.scrollX,top:window.scrollY});function cu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=au(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function fr(e,t){return(history.state?history.state.position-t:-1)+e}const js=new Map;function lu(e,t){js.set(e,t)}function uu(e){const t=js.get(e);return js.delete(e),t}function du(e){return typeof e=="string"||e&&typeof e=="object"}function ta(e){return typeof e=="string"||typeof e=="symbol"}let ge=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const na=Symbol("");ge.MATCHER_NOT_FOUND+"",ge.NAVIGATION_GUARD_REDIRECT+"",ge.NAVIGATION_ABORTED+"",ge.NAVIGATION_CANCELLED+"",ge.NAVIGATION_DUPLICATED+"";function on(e,t){return ie(new Error,{type:e,[na]:!0},t)}function dt(e,t){return e instanceof Error&&na in e&&(t==null||!!(e.type&t))}const fu=["params","query","hash"];function pu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of fu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function hu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(Ji," "),r=o.indexOf("="),i=An(r<0?o:o.slice(0,r)),a=r<0?null:An(o.slice(r+1));if(i in t){let c=t[i];et(c)||(c=t[i]=[c]),c.push(a)}else t[i]=a}return t}function pr(e){let t="";for(let n in e){const s=e[n];if(n=zl(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(et(s)?s.map(o=>o&&Ws(o)):[s&&Ws(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function mu(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=et(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const gu=Symbol(""),hr=Symbol(""),fs=Symbol(""),vo=Symbol(""),Gs=Symbol("");function ln(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Et(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const u=h=>{h===!1?c(on(ge.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?c(h):du(h)?c(on(ge.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(i&&s.enterCallbacks[o]===i&&typeof h=="function"&&i.push(h),a())},l=r(()=>e.call(s&&s.instances[o],t,n,u));let f=Promise.resolve(l);e.length<3&&(f=f.then(u)),f.catch(h=>c(h))})}function Rs(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const a in i.components){let c=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(Yi(c)){const u=(c.__vccOpts||c)[t];u&&r.push(Et(u,n,s,i,a,o))}else{let u=c();r.push(()=>u.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const f=Fl(l)?l.default:l;i.mods[a]=l,i.components[a]=f;const h=(f.__vccOpts||f)[t];return h&&Et(h,n,s,i,a,o)()}))}}return r}function bu(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(u=>sn(u,a))?s.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>sn(u,c))||o.push(c))}return[n,s,o]}let vu=()=>location.protocol+"//"+location.host;function sa(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(i);return a[0]!=="/"&&(a="/"+a),ur(a,"")}return ur(n,e)+s+o}function yu(e,t,n,s){let o=[],r=[],i=null;const a=({state:h})=>{const g=sa(e,location),v=n.value,m=t.value;let R=0;if(h){if(n.value=g,t.value=h,i&&i===v){i=null;return}R=m?h.position-m.position:0}else s(g);o.forEach(T=>{T(n.value,v,{delta:R,type:Vs.pop,direction:R?R>0?As.forward:As.back:As.unknown})})};function c(){i=n.value}function u(h){o.push(h);const g=()=>{const v=o.indexOf(h);v>-1&&o.splice(v,1)};return r.push(g),g}function l(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ie({},h.state,{scroll:ds()}),"")}}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",l),document.removeEventListener("visibilitychange",l)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",l),document.addEventListener("visibilitychange",l),{pauseListeners:c,listen:u,destroy:f}}function mr(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?ds():null}}function wu(e){const{history:t,location:n}=window,s={value:sa(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,l){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:vu()+e+c;try{t[l?"replaceState":"pushState"](u,"",h),o.value=u}catch(g){console.error(g),n[l?"replace":"assign"](h)}}function i(c,u){r(c,ie({},t.state,mr(o.value.back,c,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=c}function a(c,u){const l=ie({},o.value,t.state,{forward:c,scroll:ds()});r(l.current,l,!0),r(c,ie({},mr(s.value,c,null),{position:l.position+1},u),!1),s.value=c}return{location:s,state:o,push:a,replace:i}}function xu(e){e=ou(e);const t=wu(e),n=yu(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=ie({location:"",base:e,go:s,createHref:iu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let Nt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var we=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(we||{});const _u={type:Nt.Static,value:""},ku=/[a-zA-Z0-9_]/;function Su(e){if(!e)return[[]];if(e==="/")return[[_u]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=we.Static,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,c,u="",l="";function f(){u&&(n===we.Static?r.push({type:Nt.Static,value:u}):n===we.Param||n===we.ParamRegExp||n===we.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Nt.Param,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==we.ParamRegExp){s=n,n=we.EscapeNext;continue}switch(n){case we.Static:c==="/"?(u&&f(),i()):c===":"?(f(),n=we.Param):h();break;case we.EscapeNext:h(),n=s;break;case we.Param:c==="("?n=we.ParamRegExp:ku.test(c)?h():(f(),n=we.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case we.ParamRegExp:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=we.ParamRegExpEnd:l+=c;break;case we.ParamRegExpEnd:f(),n=we.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===we.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),o}const gr="[^/]+?",Cu={sensitive:!1,strict:!1,start:!0,end:!0};var Re=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Re||{});const Eu=/[.+*?^${}()[\]/\\]/g;function Au(e,t){const n=ie({},Cu,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const l=u.length?[]:[Re.Root];n.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const h=u[f];let g=Re.Segment+(n.sensitive?Re.BonusCaseSensitive:0);if(h.type===Nt.Static)f||(o+="/"),o+=h.value.replace(Eu,"\\$&"),g+=Re.Static;else if(h.type===Nt.Param){const{value:v,repeatable:m,optional:R,regexp:T}=h;r.push({name:v,repeatable:m,optional:R});const E=T||gr;if(E!==gr){g+=Re.BonusCustomRegExp;try{`${E}`}catch(F){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+F.message)}}let N=m?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(N=R&&u.length<2?`(?:/${N})`:"/"+N),R&&(N+="?"),o+=N,g+=Re.Dynamic,R&&(g+=Re.BonusOptional),m&&(g+=Re.BonusRepeatable),E===".*"&&(g+=Re.BonusWildcard)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Re.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const l=u.match(i),f={};if(!l)return null;for(let h=1;h<l.length;h++){const g=l[h]||"",v=r[h-1];f[v.name]=g&&v.repeatable?g.split("/"):g}return f}function c(u){let l="",f=!1;for(const h of e){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const g of h)if(g.type===Nt.Static)l+=g.value;else if(g.type===Nt.Param){const{value:v,repeatable:m,optional:R}=g,T=v in u?u[v]:"";if(et(T)&&!m)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=et(T)?T.join("/"):T;if(!E)if(R)h.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);l+=E}}return l||"/"}return{re:i,score:s,keys:r,parse:a,stringify:c}}function Ru(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Re.Static+Re.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Re.Static+Re.Segment?1:-1:0}function oa(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=Ru(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(br(s))return 1;if(br(o))return-1}return o.length-s.length}function br(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Tu={strict:!1,end:!0,sensitive:!1};function Pu(e,t,n){const s=Au(Su(e.path),n),o=ie(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Du(e,t){const n=[],s=new Map;t=lr(Tu,t);function o(f){return s.get(f)}function r(f,h,g){const v=!g,m=yr(f);m.aliasOf=g&&g.record;const R=lr(t,f),T=[m];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const Z of F)T.push(yr(ie({},m,{components:g?g.record.components:m.components,path:Z,aliasOf:g?g.record:m})))}let E,N;for(const F of T){const{path:Z}=F;if(h&&Z[0]!=="/"){const oe=h.record.path,ne=oe[oe.length-1]==="/"?"":"/";F.path=h.record.path+(Z&&ne+Z)}if(E=Pu(F,h,R),g?g.alias.push(E):(N=N||E,N!==E&&N.alias.push(E),v&&f.name&&!wr(E)&&i(f.name)),ra(E)&&c(E),m.children){const oe=m.children;for(let ne=0;ne<oe.length;ne++)r(oe[ne],E,g&&g.children[ne])}g=g||E}return N?()=>{i(N)}:yn}function i(f){if(ta(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function a(){return n}function c(f){const h=Lu(f,n);n.splice(h,0,f),f.record.name&&!wr(f)&&s.set(f.record.name,f)}function u(f,h){let g,v={},m,R;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw on(ge.MATCHER_NOT_FOUND,{location:f});R=g.record.name,v=ie(vr(h.params,g.keys.filter(N=>!N.optional).concat(g.parent?g.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),f.params&&vr(f.params,g.keys.map(N=>N.name))),m=g.stringify(v)}else if(f.path!=null)m=f.path,g=n.find(N=>N.re.test(m)),g&&(v=g.parse(m),R=g.record.name);else{if(g=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!g)throw on(ge.MATCHER_NOT_FOUND,{location:f,currentLocation:h});R=g.record.name,v=ie({},h.params,f.params),m=g.stringify(v)}const T=[];let E=g;for(;E;)T.unshift(E.record),E=E.parent;return{name:R,path:m,params:v,matched:T,meta:Ou(T)}}e.forEach(f=>r(f));function l(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:i,clearRoutes:l,getRoutes:a,getRecordMatcher:o}}function vr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function yr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Iu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Iu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function wr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ou(e){return e.reduce((t,n)=>ie(t,n.meta),{})}function Lu(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;oa(e,t[r])<0?s=r:n=r+1}const o=$u(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function $u(e){let t=e;for(;t=t.parent;)if(ra(t)&&oa(e,t)===0)return t}function ra({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function xr(e){const t=Qe(fs),n=Qe(vo),s=de(()=>{const c=He(e.to);return t.resolve(c)}),o=de(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const h=f.findIndex(sn.bind(null,l));if(h>-1)return h;const g=_r(c[u-2]);return u>1&&_r(l)===g&&f[f.length-1].path!==g?f.findIndex(sn.bind(null,c[u-2])):h}),r=de(()=>o.value>-1&&Hu(n.params,s.value.params)),i=de(()=>o.value>-1&&o.value===n.matched.length-1&&ea(n.params,s.value.params));function a(c={}){if(Bu(c)){const u=t[He(e.replace)?"replace":"push"](He(e.to)).catch(yn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:de(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}function Mu(e){return e.length===1?e[0]:e}const Nu=pi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:xr,setup(e,{slots:t}){const n=Rn(xr(e)),{options:s}=Qe(fs),o=de(()=>({[kr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[kr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&Mu(t.default(n));return e.custom?r:mo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Fu=Nu;function Bu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Hu(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!et(o)||o.length!==s.length||s.some((r,i)=>r.valueOf()!==o[i].valueOf()))return!1}return!0}function _r(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const kr=(e,t,n)=>e??t??n,Uu=pi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Qe(Gs),o=de(()=>e.route||s.value),r=Qe(hr,0),i=de(()=>{let u=He(r);const{matched:l}=o.value;let f;for(;(f=l[u])&&!f.components;)u++;return u}),a=de(()=>o.value.matched[i.value]);Fn(hr,de(()=>i.value+1)),Fn(gu,a),Fn(Gs,o);const c=Se();return Xt(()=>[c.value,a.value,e.name],([u,l,f],[h,g,v])=>{l&&(l.instances[f]=u,g&&g!==l&&u&&u===h&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!sn(l,g)||!h)&&(l.enterCallbacks[f]||[]).forEach(m=>m(u))},{flush:"post"}),()=>{const u=o.value,l=e.name,f=a.value,h=f&&f.components[l];if(!h)return Sr(n.default,{Component:h,route:u});const g=f.props[l],v=g?g===!0?u.params:typeof g=="function"?g(u):g:null,R=mo(h,ie({},v,t,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(f.instances[l]=null)},ref:c}));return Sr(n.default,{Component:R,route:u})||R}}});function Sr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wu=Uu;function Vu(e){const t=Du(e.routes,e),n=e.parseQuery||hu,s=e.stringifyQuery||pr,o=e.history,r=ln(),i=ln(),a=ln(),c=Ua(xt);let u=xt;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Cs.bind(null,x=>""+x),f=Cs.bind(null,Ql),h=Cs.bind(null,An);function g(x,H){let O,U;return ta(x)?(O=t.getRecordMatcher(x),U=H):U=x,t.addRoute(U,O)}function v(x){const H=t.getRecordMatcher(x);H&&t.removeRoute(H)}function m(){return t.getRoutes().map(x=>x.record)}function R(x){return!!t.getRecordMatcher(x)}function T(x,H){if(H=ie({},H||c.value),typeof x=="string"){const b=Es(n,x,H.path),y=t.resolve({path:b.path},H),_=o.createHref(b.fullPath);return ie(b,y,{params:h(y.params),hash:An(b.hash),redirectedFrom:void 0,href:_})}let O;if(x.path!=null)O=ie({},x,{path:Es(n,x.path,H.path).path});else{const b=ie({},x.params);for(const y in b)b[y]==null&&delete b[y];O=ie({},x,{params:f(b)}),H.params=f(H.params)}const U=t.resolve(O,H),X=x.hash||"";U.params=l(h(U.params));const d=eu(s,ie({},x,{hash:Yl(X),path:U.path})),p=o.createHref(d);return ie({fullPath:d,hash:X,query:s===pr?mu(x.query):x.query||{}},U,{redirectedFrom:void 0,href:p})}function E(x){return typeof x=="string"?Es(n,x,c.value.path):ie({},x)}function N(x,H){if(u!==x)return on(ge.NAVIGATION_CANCELLED,{from:H,to:x})}function F(x){return ne(x)}function Z(x){return F(ie(E(x),{replace:!0}))}function oe(x,H){const O=x.matched[x.matched.length-1];if(O&&O.redirect){const{redirect:U}=O;let X=typeof U=="function"?U(x,H):U;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=E(X):{path:X},X.params={}),ie({query:x.query,hash:x.hash,params:X.path!=null?{}:x.params},X)}}function ne(x,H){const O=u=T(x),U=c.value,X=x.state,d=x.force,p=x.replace===!0,b=oe(O,U);if(b)return ne(ie(E(b),{state:typeof b=="object"?ie({},X,b.state):X,force:d,replace:p}),H||O);const y=O;y.redirectedFrom=H;let _;return!d&&tu(s,U,O)&&(_=on(ge.NAVIGATION_DUPLICATED,{to:y,from:U}),tt(U,U,!0,!1)),(_?Promise.resolve(_):I(y,U)).catch(w=>dt(w)?dt(w,ge.NAVIGATION_GUARD_REDIRECT)?w:Oe(w):z(w,y,U)).then(w=>{if(w){if(dt(w,ge.NAVIGATION_GUARD_REDIRECT))return ne(ie({replace:p},E(w.to),{state:typeof w.to=="object"?ie({},X,w.to.state):X,force:d}),H||y)}else w=C(y,U,!0,p,X);return $(y,U,w),w})}function xe(x,H){const O=N(x,H);return O?Promise.reject(O):Promise.resolve()}function K(x){const H=Gt.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(x):x()}function I(x,H){let O;const[U,X,d]=bu(x,H);O=Rs(U.reverse(),"beforeRouteLeave",x,H);for(const b of U)b.leaveGuards.forEach(y=>{O.push(Et(y,x,H))});const p=xe.bind(null,x,H);return O.push(p),Ve(O).then(()=>{O=[];for(const b of r.list())O.push(Et(b,x,H));return O.push(p),Ve(O)}).then(()=>{O=Rs(X,"beforeRouteUpdate",x,H);for(const b of X)b.updateGuards.forEach(y=>{O.push(Et(y,x,H))});return O.push(p),Ve(O)}).then(()=>{O=[];for(const b of d)if(b.beforeEnter)if(et(b.beforeEnter))for(const y of b.beforeEnter)O.push(Et(y,x,H));else O.push(Et(b.beforeEnter,x,H));return O.push(p),Ve(O)}).then(()=>(x.matched.forEach(b=>b.enterCallbacks={}),O=Rs(d,"beforeRouteEnter",x,H,K),O.push(p),Ve(O))).then(()=>{O=[];for(const b of i.list())O.push(Et(b,x,H));return O.push(p),Ve(O)}).catch(b=>dt(b,ge.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function $(x,H,O){a.list().forEach(U=>K(()=>U(x,H,O)))}function C(x,H,O,U,X){const d=N(x,H);if(d)return d;const p=H===xt,b=zt?history.state:{};O&&(U||p?o.replace(x.fullPath,ie({scroll:p&&b&&b.scroll},X)):o.push(x.fullPath,X)),c.value=x,tt(x,H,O,p),Oe()}let j;function ce(){j||(j=o.listen((x,H,O)=>{if(!Dt.listening)return;const U=T(x),X=oe(U,Dt.currentRoute.value);if(X){ne(ie(X,{replace:!0,force:!0}),U).catch(yn);return}u=U;const d=c.value;zt&&lu(fr(d.fullPath,O.delta),ds()),I(U,d).catch(p=>dt(p,ge.NAVIGATION_ABORTED|ge.NAVIGATION_CANCELLED)?p:dt(p,ge.NAVIGATION_GUARD_REDIRECT)?(ne(ie(E(p.to),{force:!0}),U).then(b=>{dt(b,ge.NAVIGATION_ABORTED|ge.NAVIGATION_DUPLICATED)&&!O.delta&&O.type===Vs.pop&&o.go(-1,!1)}).catch(yn),Promise.reject()):(O.delta&&o.go(-O.delta,!1),z(p,U,d))).then(p=>{p=p||C(U,d,!1),p&&(O.delta&&!dt(p,ge.NAVIGATION_CANCELLED)?o.go(-O.delta,!1):O.type===Vs.pop&&dt(p,ge.NAVIGATION_ABORTED|ge.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),$(U,d,p)}).catch(yn)}))}let ve=ln(),J=ln(),Q;function z(x,H,O){Oe(x);const U=J.list();return U.length?U.forEach(X=>X(x,H,O)):console.error(x),Promise.reject(x)}function Ie(){return Q&&c.value!==xt?Promise.resolve():new Promise((x,H)=>{ve.add([x,H])})}function Oe(x){return Q||(Q=!x,ce(),ve.list().forEach(([H,O])=>x?O(x):H()),ve.reset()),x}function tt(x,H,O,U){const{scrollBehavior:X}=e;if(!zt||!X)return Promise.resolve();const d=!O&&uu(fr(x.fullPath,0))||(U||!O)&&history.state&&history.state.scroll||null;return ro().then(()=>X(x,H,d)).then(p=>p&&cu(p)).catch(p=>z(p,x,H))}const Le=x=>o.go(x);let jt;const Gt=new Set,Dt={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:R,getRoutes:m,resolve:T,options:e,push:F,replace:Z,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:J.add,isReady:Ie,install(x){x.component("RouterLink",Fu),x.component("RouterView",Wu),x.config.globalProperties.$router=Dt,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>He(c)}),zt&&!jt&&c.value===xt&&(jt=!0,F(o.location).catch(U=>{}));const H={};for(const U in xt)Object.defineProperty(H,U,{get:()=>c.value[U],enumerable:!0});x.provide(fs,Dt),x.provide(vo,Qr(H)),x.provide(Gs,c);const O=x.unmount;Gt.add(x),x.unmount=function(){Gt.delete(x),Gt.size<1&&(u=xt,j&&j(),j=null,c.value=xt,jt=!1,Q=!1),O()}}};function Ve(x){return x.reduce((H,O)=>H.then(()=>K(O)),Promise.resolve())}return Dt}function yo(){return Qe(fs)}function ia(e){return Qe(vo)}const ju={__name:"App",setup(e){const t=yo(),n=Se(!0);return t.isReady().then(()=>{setTimeout(()=>{n.value=!1},100)}),(s,o)=>{const r=co("router-view");return L(),Cn(r,null,{default:Rt(({Component:i,route:a})=>[re(go,{name:n.value?"":"page",mode:"out-in"},{default:Rt(()=>[(L(),Cn(pc(i),{key:a.path}))]),_:2},1032,["name"])]),_:1})}}},_e=Rn({discordUser:null,spotify:null,discordStatus:"offline",discordStatusColor:"text-catppuccin-subtle",editorActivity:null,isConnected:!1,isLoading:!0});class Gu{constructor(){this.ws=null,this.heartbeat=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.maxAttempts=5,this.userId="766897363050037248",this.isConnecting=!1}connect(){if(!(this.isConnecting||this.ws&&this.ws.readyState===WebSocket.OPEN)){this.isConnecting=!0,_e.isLoading=!0;try{this.ws=new WebSocket("wss://api.lanyard.rest/socket"),this.ws.onopen=()=>{this.isConnecting=!1,this.reconnectAttempts=0,_e.isConnected=!0,this.ws.send(JSON.stringify({op:2,d:{subscribe_to_id:this.userId}}))},this.ws.onmessage=t=>{try{this.handleMessage(JSON.parse(t.data))}catch{}},this.ws.onclose=t=>{this.isConnecting=!1,_e.isConnected=!1,this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),t.code!==1e3&&this.reconnectAttempts<this.maxAttempts&&this.scheduleReconnect()},this.ws.onerror=()=>{this.isConnecting=!1,_e.isConnected=!1}}catch{this.isConnecting=!1,_e.isLoading=!1,this.scheduleReconnect()}}}handleMessage(t){t.op===1?this.startHeartbeat(t.d.heartbeat_interval):t.op===0&&(t.t==="INIT_STATE"||t.t==="PRESENCE_UPDATE")&&(this.updatePresence(t.d),_e.isLoading=!1)}updatePresence(t){t.discord_user&&(_e.discordUser={username:t.discord_user.username,discriminator:t.discord_user.discriminator,avatar:t.discord_user.avatar,id:t.discord_user.id}),_e.spotify=t.spotify?{song:t.spotify.song,artist:t.spotify.artist,track_id:t.spotify.track_id}:null,t.discord_status&&(_e.discordStatus=t.discord_status,_e.discordStatusColor=t.discord_status==="online"?"text-catppuccin-gold":"text-catppuccin-subtle"),_e.editorActivity=t.activities?.find(n=>n.name==="Visual Studio Code"||n.name==="Code"||n.name==="Zed")}startHeartbeat(t){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({op:3}))},t)}scheduleReconnect(){this.reconnectTimeout&&clearTimeout(this.reconnectTimeout),this.reconnectAttempts++;const t=Math.min(1e3*Math.pow(2,this.reconnectAttempts-1),3e4);this.reconnectTimeout=setTimeout(()=>this.connect(),t)}disconnect(){this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),this.ws&&(this.ws.close(1e3,"Manual disconnect"),this.ws=null),_e.isConnected=!1}}const qu=new Gu;qu.connect();const Cr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",white:"#cdd6f4"},Ku=[{id:"posts",label:"posts",href:"/posts",external:!1,accentColor:"mauve"},{id:"github",label:"github",href:"https://github.com/Hecker-01",external:!0,accentColor:"white"}];function Yu(){return Ku.map(e=>({...e,accentColor:Cr[e.accentColor]||Cr.mauve}))}const Dn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},zu={class:"mb-6"},Ju={class:"mb-6"},Qu={class:"flex items-center flex-wrap gap-4 text-sm mt-4"},Zu=["href"],Xu={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},ed={class:"space-y-1 text-sm"},td={key:0,class:"flex items-center gap-2"},nd={class:"text-catppuccin-text"},sd={key:1,class:"flex items-center gap-2"},od={class:"text-catppuccin-text truncate"},rd={key:2,class:"flex items-center gap-2"},id={class:"text-catppuccin-blue"},ad={class:"text-catppuccin-text truncate"},cd={key:0},ld={key:1,class:"text-catppuccin-subtle"},ud={key:2},dd={__name:"HeroSection",setup(e){const t=Yu(),n=de(()=>_e.discordStatusColor),s=de(()=>_e.spotify),o=de(()=>_e.discordStatus),r=de(()=>_e.discordUser),i=de(()=>_e.editorActivity),a=de(()=>_e.isLoading),c=de(()=>{if(!i.value)return null;if(i.value.details&&i.value.details.toLowerCase().includes("idling"))return"idling";const u=i.value.name,l=u==="Zed",g=u==="IntelliJ IDEA Ultimate"||u==="IntelliJ IDEA"||u==="Android Studio";let v="",m="";return g?(v=i.value.details||"",m=i.value.state||""):l?(v=i.value.state||"",m=i.value.details||""):(v=i.value.details||"",m=i.value.state||""),v=v.replace(/editing /i,"").replace(/working on /i,"").trim(),m=m.replace(/in /i,"").replace(/workspace: /i,"").trim(),{name:u,workspace:m,filename:v}});return(u,l)=>{const f=co("router-link");return L(),B("div",zu,[k("div",Ju,[l[2]||(l[2]=fo('<div class="text-catppuccin-subtle text-sm mb-2" data-v-41f1cfe9>~$ whoami</div><h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2" data-v-41f1cfe9><span class="text-catppuccin-mauve" data-v-41f1cfe9>jesse</span><span class="text-catppuccin-subtle" data-v-41f1cfe9>@</span><span class="text-catppuccin-blue" data-v-41f1cfe9>heckr.dev</span></h1><div class="text-sm text-catppuccin-gray 6" data-v-41f1cfe9><span class="text-catppuccin-subtle" data-v-41f1cfe9>aka </span><span class="text-catppuccin-green" data-v-41f1cfe9>Hecker_01</span></div>',3)),k("div",Qu,[(L(!0),B(he,null,Ye(He(t),h=>(L(),B(he,{key:h.id},[h.external?(L(),B("a",{key:1,href:h.href,target:"_blank",class:"text-catppuccin-subtle transition-colors flex items-center gap-1 group",style:ze({"--accent":h.accentColor})},[l[1]||(l[1]=Ge(" [",-1)),k("span",{class:"transition-colors",style:ze({color:h.accentColor})},"cd ",4),Ge("~/"+te(h.label)+"] ",1)],12,Zu)):(L(),Cn(f,{key:0,to:h.href,class:"text-catppuccin-subtle transition-colors flex items-center gap-1 group",style:ze({"--accent":h.accentColor})},{default:Rt(()=>[l[0]||(l[0]=Ge(" [",-1)),k("span",{class:"transition-colors",style:ze({color:h.accentColor})},"cd ",4),Ge("~/"+te(h.label)+"] ",1)]),_:2},1032,["to","style"]))],64))),128))])]),l[9]||(l[9]=k("div",{class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},[k("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cat about.txt"),k("p",{class:"text-catppuccin-text leading-relaxed mb-4"},[Ge(" Hi! I'm Jesse, I code things for Minecraft, Discord, random CLI tools, websites, apps and more. "),k("br"),Ge(" My passion is backend development, but I also enjoy working on frontend and mobile projects. "),k("br"),Ge(" I have experience in a lot of different programming languages and frameworks, and I love learning new ones! ")])],-1)),k("div",Xu,[l[8]||(l[8]=k("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ ps aux | grep heckr.dev ",-1)),k("div",ed,[!a.value&&r.value?(L(),B("div",td,[l[3]||(l[3]=k("span",{class:"text-catppuccin-blue"},"discord",-1)),l[4]||(l[4]=k("span",{class:"text-catppuccin-subtle"},":",-1)),k("span",nd,te(r.value.username),1),k("span",{class:Wt(n.value)},"["+te(o.value)+"]",3)])):Pe("",!0),!a.value&&s.value?(L(),B("div",sd,[l[5]||(l[5]=k("span",{class:"text-catppuccin-green"},"spotify",-1)),l[6]||(l[6]=k("span",{class:"text-catppuccin-subtle"},":",-1)),k("span",od,te(s.value.song)+" - "+te(s.value.artist),1)])):Pe("",!0),!a.value&&i.value&&c.value&&(c.value.workspace||c.value.filename)?(L(),B("div",rd,[k("span",id,te(c.value.name==="Zed"?"zed":c.value.name==="IntelliJ IDEA Ultimate"||c.value.name==="IntelliJ IDEA"?"intellij":c.value.name==="Android Studio"?"android-studio":"vscode"),1),l[7]||(l[7]=k("span",{class:"text-catppuccin-subtle"},":",-1)),k("span",ad,[c.value.workspace?(L(),B("span",cd,te(c.value.workspace.toLowerCase()),1)):Pe("",!0),c.value.workspace&&c.value.filename?(L(),B("span",ld," / ")):Pe("",!0),c.value.filename?(L(),B("span",ud,te(c.value.filename.toLowerCase()),1)):Pe("",!0)])])):Pe("",!0)])])])}}},fd=Dn(dd,[["__scopeId","data-v-41f1cfe9"]]),pd={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},hd={key:0,class:"text-sm text-catppuccin-subtle"},md={key:1,class:"text-sm text-catppuccin-text"},gd={key:0,class:"text-catppuccin-subtle"},bd={key:2,class:"text-sm text-catppuccin-subtle"},vd={__name:"LanguagesList",props:{languages:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){return(t,n)=>(L(),B("div",pd,[n[0]||(n[0]=k("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls ~/tools",-1)),e.loading?(L(),B("div",hd," loading languages... ")):e.languages.length?(L(),B("div",md,[(L(!0),B(he,null,Ye(e.languages,(s,o)=>(L(),B("span",{key:s.language},[Ge(te(s.language)+"("+te(s.count)+")",1),o<e.languages.length-1?(L(),B("span",gd," | ")):Pe("",!0)]))),128))])):(L(),B("div",bd,"no languages found"))]))}},yd={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},wd={class:"lg:flex-1 flex flex-col"},xd={key:0,class:"space-y-2"},_d={key:1,class:"text-sm text-catppuccin-subtle"},kd=["href"],Sd={class:"flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2"},Cd={class:"flex-1 min-w-0"},Ed={class:"flex items-center gap-2"},Ad=["title"],Rd={key:0,class:"text-catppuccin-yellow text-xs flex-shrink-0"},Td=["title"],Pd={key:3,class:"text-sm text-catppuccin-subtle"},Dd={__name:"ProjectsList",props:{repos:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){const t=e,n=de(()=>t.repos.length?[...t.repos].sort((s,o)=>o.stargazers_count-s.stargazers_count).slice(0,6):[]);return(s,o)=>(L(),B("div",yd,[o[2]||(o[2]=k("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ ls ~/projects",-1)),k("div",wd,[e.loading?(L(),B("div",xd,[(L(),B(he,null,Ye(6,r=>k("div",{key:`repo-loading-${r}`,class:"rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3"},[...o[0]||(o[0]=[fo('<div class="flex items-start gap-3" data-v-cc63960f><span class="text-catppuccin-subtle" data-v-cc63960f>&gt;</span><div class="flex-1 min-w-0" data-v-cc63960f><div class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink" data-v-cc63960f></div><div class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink" data-v-cc63960f></div></div></div>',1)])])),64))])):e.repos.length?n.value.length?(L(),Cn(kl,{key:2,name:"list",tag:"div",class:"space-y-2"},{default:Rt(()=>[(L(!0),B(he,null,Ye(n.value,r=>(L(),B("a",{key:r.id,href:r.html_url,target:"_blank",class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors"},[k("div",Sd,[o[1]||(o[1]=k("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors"},">",-1)),k("div",Cd,[k("div",Ed,[k("span",{class:"text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate",title:r.name},te(r.name),9,Ad),r.stargazers_count>0?(L(),B("span",Rd," ★"+te(r.stargazers_count),1)):Pe("",!0)]),k("p",{class:"text-xs text-catppuccin-gray truncate",title:r.description},te(r.description||"no description"),9,Td)])])],8,kd))),128))]),_:1})):(L(),B("div",Pd," no repositories found ")):(L(),B("div",_d," no projects found "))])]))}},Id=Dn(Dd,[["__scopeId","data-v-cc63960f"]]),Er={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",maroon:"#eba0ac",flamingo:"#f2cdcd"},Od=[{id:1,name:"Yume Ramen",description:"A full application with an app, dashboard, and API, built with Vue.js, Tailwind CSS, and Node.js. It features a sleek design and robust functionality.",link:"https://yume.bram-jesse.sd-lab.nl/",screenshot:"/screenshot-yume-front.png",accentColor:"red"},{id:2,name:"This Portfolio Website",description:"Built with Vue.js and Tailwind CSS, showcasing my projects and skills.",link:"https://github.com/hecker-01/website",screenshot:"/screenshot.png",accentColor:"lavender"},{id:3,name:"satisSuite",description:"A comprehensive plugin suite designed to streamline moderation, enhance player experience, and give you complete control over your server.",link:"https://satissuite.heckr.dev",screenshot:"/screenshot-satissuite.png",accentColor:"mauve"}];function Ld(){return Od.map(e=>({...e,accentColor:Er[e.accentColor]||Er.mauve}))}const $d={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},Md={key:0,class:"text-sm text-catppuccin-subtle"},Nd={class:"lg:flex-1 lg:relative"},Fd=["href"],Bd={key:0,class:"w-full flex-1 overflow-hidden bg-catppuccin-surface/30"},Hd=["src","alt"],Ud={class:"px-3 py-3 flex-shrink-0"},Wd={class:"flex items-start gap-3"},Vd={class:"flex-1 min-w-0"},jd={class:"text-xs text-catppuccin-gray leading-relaxed"},Gd={key:0,class:"flex justify-center gap-1.5 mt-3 flex-shrink-0"},qd=["onClick"],Kd={__name:"ShowcaseCarousel",setup(e){const t=Se([]),n=Se(0),s=Se(!1);let o=null;const r=de(()=>t.value.length?t.value[n.value]:null);return Vt(()=>{t.value=Ld(),t.value.length>1&&(o=setInterval(()=>{s.value||(n.value=(n.value+1)%t.value.length)},1e4))}),as(()=>{o&&clearInterval(o)}),(i,a)=>(L(),B("div",$d,[a[2]||(a[2]=k("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ cat ~/showcase",-1)),t.value.length?(L(),B("div",{key:1,class:"relative lg:flex-1 flex flex-col",onMouseenter:a[0]||(a[0]=c=>s.value=!0),onMouseleave:a[1]||(a[1]=c=>s.value=!1)},[k("div",Nd,[re(go,{name:"showcase",mode:"out-in"},{default:Rt(()=>[r.value?(L(),B("a",{key:r.value.id,href:r.value.link,target:"_blank",class:"group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col",style:ze({borderColor:`${r.value.accentColor}40`})},[r.value.screenshot?(L(),B("div",Bd,[k("img",{src:r.value.screenshot,alt:r.value.name,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,Hd)])):Pe("",!0),k("div",Ud,[k("div",Wd,[k("span",{class:"transition-colors",style:ze({color:r.value.accentColor})},">",4),k("div",Vd,[k("h3",{class:"text-sm font-medium text-catppuccin-text transition-colors mb-1",style:ze({color:r.value.accentColor})},te(r.value.name),5),k("p",jd,te(r.value.description),1)])])])],12,Fd)):Pe("",!0)]),_:1})]),t.value.length>1?(L(),B("div",Gd,[(L(!0),B(he,null,Ye(t.value,(c,u)=>(L(),B("button",{key:`dot-${c.id}`,onClick:l=>n.value=u,class:Wt(["w-2 h-2.5 rounded-full transition-all",u===n.value?"bg-catppuccin-mauve w-4":"bg-catppuccin-surface/60 hover:bg-catppuccin-surface"]),style:ze(u===n.value?{backgroundColor:r.value.accentColor}:{})},null,14,qd))),128))])):Pe("",!0)],32)):(L(),B("div",Md," no items to showcase "))]))}},Yd=Dn(Kd,[["__scopeId","data-v-89780803"]]),wo="hecker-01",aa=async()=>{try{const e=[];let t=1;const n=100;for(;;){const r=await fetch(`https://api.github.com/users/${wo}/repos?per_page=${n}&page=${t}`);if(!r.ok)break;const i=await r.json();if(!i.length||(e.push(...i),i.length<n))break;t++}const s={};e.forEach(r=>{r.language&&(s[r.language]=(s[r.language]||0)+1)});const o=Object.entries(s).sort((r,i)=>i[1]-r[1]).map(([r,i])=>({language:r,count:i}));return{repos:e,languages:o,totalRepos:e.length}}catch(e){return console.error("Error fetching GitHub data:",e),{repos:[],languages:[],totalRepos:0}}},zd=async()=>{const t=new Date;t.getFullYear();try{const n=await fetch(`https://github-contributions-api.jogruber.de/v4/${wo}?y=last`);if(!n.ok)throw new Error("Failed to fetch contribution data");const s=await n.json(),o=[];if(s.contributions&&s.contributions.forEach(r=>{o.push({date:r.date,count:r.count})}),o.length>0){const i=new Date(t);i.setDate(i.getDate()-371+1);const a=[];for(let c=0;c<371;c++){const u=new Date(i);u.setDate(u.getDate()+c);const l=u.toISOString().split("T")[0],f=o.find(h=>h.date===l);a.push({date:l,count:f?f.count:0})}return a}throw new Error("No contributions data available")}catch(n){console.error("Error fetching contribution data:",n);const s=new Map;for(let o=370;o>=0;o--){const r=new Date(t);r.setDate(r.getDate()-o);const i=r.toISOString().split("T")[0];s.set(i,0)}return Array.from(s.entries()).sort((o,r)=>o[0].localeCompare(r[0])).map(([o,r])=>({date:o,count:r}))}},Ts=e=>e===0?0:e<=2?1:e<=5?2:e<=8?3:4,Jd=e=>`https://github.com/${wo}?tab=overview&from=${e}&to=${e}`,Qd={class:"mt-6 border-l-2 border-catppuccin-surface pl-4"},Zd={class:"flex items-center justify-between mb-3"},Xd={key:0,class:"flex items-center gap-1 text-[10px] text-catppuccin-subtle"},ef={key:0},tf={key:1},nf={class:"overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-thin"},sf={class:"inline-flex md:flex gap-[3px] md:gap-1",style:{"min-width":"max-content"}},of=["href","title"],rf=["title"],af={class:"text-xs text-catppuccin-gray mt-2"},cf={__name:"ContributionGraph",setup(e){const t=Se([]),n=Se(!0),s=de(()=>{const i=[];for(let a=0;a<t.value.length;a+=7)i.push(t.value.slice(a,a+7));return i}),o=de(()=>t.value.reduce((i,a)=>i+a.count,0)),r=async()=>{try{n.value=!0,t.value=await zd()}catch{}finally{n.value=!1}};return Vt(()=>{r()}),(i,a)=>(L(),B("div",Qd,[k("div",Zd,[a[1]||(a[1]=k("div",{class:"text-catppuccin-subtle text-sm"},' ~$ git log --oneline --since="1.year.ago" | wc -l ',-1)),n.value?Pe("",!0):(L(),B("div",Xd,[...a[0]||(a[0]=[fo('<span>less</span><div class="flex gap-[1px]"><div class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green"></div></div><span>more</span>',3)])]))]),n.value?(L(),B("div",ef,[...a[2]||(a[2]=[k("div",{class:"h-[60px] bg-catppuccin-surface/30 rounded cursor-blink"},null,-1)])])):(L(),B("div",tf,[k("div",nf,[k("div",sf,[(L(!0),B(he,null,Ye(s.value,(c,u)=>(L(),B("div",{key:u,class:"flex flex-col gap-[3px] md:gap-1 md:flex-1"},[(L(!0),B(he,null,Ye(c,(l,f)=>(L(),B(he,{key:f},[l.count>0?(L(),B("a",{key:0,href:He(Jd)(l.date),target:"_blank",rel:"noopener noreferrer",class:Wt(["w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm transition-all hover:ring-1 hover:ring-catppuccin-green hover:scale-110 cursor-pointer",[He(Ts)(l.count)===1?"bg-catppuccin-green/30 hover:bg-catppuccin-green/40":He(Ts)(l.count)===2?"bg-catppuccin-green/50 hover:bg-catppuccin-green/60":He(Ts)(l.count)===3?"bg-catppuccin-green/70 hover:bg-catppuccin-green/80":"bg-catppuccin-green hover:bg-catppuccin-green"]]),title:`${l.date}: ${l.count} contributions - Click to view on GitHub`},null,10,of)):(L(),B("div",{key:1,class:"w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm bg-catppuccin-surface/50",title:`${l.date}: ${l.count} contributions`},null,8,rf))],64))),128))]))),128))])]),k("div",af,te(o.value)+" contributions in the last year ",1)]))]))}},lf={class:"w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400"},Qn={__name:"Footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(L(),B("footer",lf,[k("p",null,"© 2020 - "+te(He(t))+" heckr.dev | All rights reserved.",1)]))}},uf={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},df={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},ff={class:"grid lg:grid-cols-2 gap-6 lg:items-stretch"},pf={__name:"Home",setup(e){const t=Se([]),n=Se(!0),s=Se([]),o=async()=>{try{n.value=!0;const{repos:r,languages:i}=await aa("hecker-01");t.value=r,s.value=i}catch{}finally{n.value=!1}};return Vt(()=>{o()}),(r,i)=>(L(),B("div",uf,[k("div",df,[re(fd),re(vd,{languages:s.value,loading:n.value},null,8,["languages","loading"]),k("div",ff,[re(Id,{repos:t.value,loading:n.value},null,8,["repos","loading"]),re(Yd)]),re(cf),re(Qn)])]))}},hf=`---
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
`,mf=`---
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
`,gf=`---
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
`,bf=`---
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
`,vf=`---
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
`,yf=`---
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
`,wf=Object.assign({"/posts/docker-and-compose.md":hf,"/posts/jellyfin-server.md":mf,"/posts/local-database.md":gf,"/posts/markdown-showcase.md":bf,"/posts/using-commandline.md":vf,"/posts/using-git.md":yf}),xf=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const c=(u,l)=>{l=l.trim(),l.startsWith("[")&&l.endsWith("]")?o[u]=l.slice(1,-1).split(",").map(f=>f.trim()):o[u]=l};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&c(i,a);const[f,...h]=u.split(":");if(!f||f.trim()==="")return;i=f.trim(),a=h.join(":").trim()}}),i&&a&&c(i,a),{frontmatter:o,content:s}},_f=()=>{const e=[];let t=1;return Object.entries(wf).forEach(([n,s])=>{const{frontmatter:o,content:r}=xf(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,date:o.date||new Date().toISOString().split("T")[0],tags:o.tags||[],description:o.description||"",unlisted:o.unlisted===!0||o.unlisted==="true",content:r.trim(),readingTime:Cf(r)})}),e};let Mn=null;const xo=(e=!1)=>(Mn||(Mn=_f()),(e?[...Mn]:Mn.filter(n=>!n.unlisted)).sort((n,s)=>qs(s.date)-qs(n.date))),kf=e=>xo(!0).find(t=>t.slug===e),Sf=()=>{const e=new Set;return xo().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()},qs=e=>{const[t,n,s]=e.split("-");return new Date(s,n-1,t)},Cf=e=>{const n=e.trim().split(/\s+/).length;return Math.ceil(n/225)},Ef={class:"border-l-2 border-catppuccin-surface pl-4"},Af={class:"flex flex-wrap gap-2"},Rf=["onClick"],Tf={__name:"TagFilter",props:{tags:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["toggle-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("toggle-tag",o)};return(o,r)=>(L(),B("div",Ef,[r[0]||(r[0]=k("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls tags/",-1)),k("div",Af,[(L(!0),B(he,null,Ye(e.tags,i=>(L(),B("button",{key:i,onClick:a=>s(i),class:Wt(["px-3 py-1 rounded text-xs transition-colors border",e.selectedTag===i?"bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve":"bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay"])}," #"+te(i),11,Rf))),128))])]))}},Pf={class:"border-l-2 border-catppuccin-surface pl-4"},Df={class:"text-catppuccin-subtle text-sm mb-3"},If={key:0,class:"text-catppuccin-mauve"},Of={key:0,class:"text-sm text-catppuccin-subtle"},Lf={key:1,class:"space-y-3"},$f=["onClick"],Mf={class:"px-4 py-3"},Nf={class:"flex items-start justify-between gap-4 mb-2"},Ff={class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors"},Bf={class:"flex items-center gap-2 flex-shrink-0"},Hf={class:"text-xs text-catppuccin-subtle"},Uf=["title"],Wf={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed"},Vf={class:"flex items-center gap-2"},jf={class:"flex flex-wrap gap-1.5"},Gf=["onClick"],qf={__name:"PostList",props:{posts:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-post","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-post",o)};return(o,r)=>(L(),B("div",Pf,[k("div",Df,[r[0]||(r[0]=Ge(" ~$ ls -la posts/ ",-1)),e.selectedTag?(L(),B("span",If,'| grep "'+te(e.selectedTag)+'"',1)):Pe("",!0)]),e.posts.length?(L(),B("div",Lf,[(L(!0),B(he,null,Ye(e.posts,i=>(L(),B("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer"},[k("div",Mf,[k("div",Nf,[k("h2",Ff,te(i.title),1),k("div",Bf,[k("span",Hf,te(i.readingTime)+" min read ",1),r[1]||(r[1]=k("span",{class:"text-catppuccin-surface"},"•",-1)),k("span",{class:"text-xs text-catppuccin-subtle",title:He(qs)(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},te(i.date),9,Uf)])]),k("p",Wf,te(i.description),1),k("div",Vf,[k("div",jf,[(L(!0),B(he,null,Ye(i.tags,a=>(L(),B("span",{key:a,onClick:Il(c=>n("select-tag",a),["stop"]),class:"px-2 py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:bg-catppuccin-mauve/20 hover:text-catppuccin-mauve cursor-pointer transition-colors"}," #"+te(a),9,Gf))),128))]),r[2]||(r[2]=k("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm"}," read → ",-1))])])],8,$f))),128))])):(L(),B("div",Of," no posts found "))]))}},Kf={class:"mb-8"},Yf={class:"text-catppuccin-subtle text-sm mb-2"},zf={class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-3"},Jf={class:"flex items-center gap-4 text-sm text-catppuccin-subtle mb-4"},Qf={class:"flex gap-2"},Zf={key:0,class:"mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"},Xf={class:"space-y-3"},ep=["for"],tp=["id","onUpdate:modelValue","placeholder"],np={class:"border-l-2 border-catppuccin-surface pl-4 mb-8"},sp=["innerHTML"],op={__name:"PostComponent",props:{post:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=de(()=>n.post.readingTime||1),i=Se({}),a=v=>{const m=new RegExp("(?<!\\\\)\\$\\[([^\\]]+)\\]","g"),R=new Set;let T;for(;(T=m.exec(v))!==null;)R.add(T[1]);return Array.from(R)},c=de(()=>a(n.post.content)),u=v=>{const m=[];let R=v.replace(/\\\$\[([^\]]+)\]/g,(T,E)=>{const N=`__ESCAPED_VAR_${m.length}__`;return m.push(`$[${E}]`),N});return R=R.replace(/\$\[([^\]]+)\]/g,(T,E)=>i.value[E]||E),m.forEach((T,E)=>{R=R.replace(`__ESCAPED_VAR_${E}__`,T)}),R},l=de(()=>u(n.post.content)),f=v=>{let m=v;const R=[];m=m.replace(/__([A-Z_0-9]+)__/g,E=>{const N=`\0PROT${R.length}\0`;return R.push(E),N});const T=[];return m=m.replace(/`([^`]+)`/g,(E,N)=>{const F=`__IC_${T.length}__`;return T.push(`<code class="bg-catppuccin-surface/50 px-2 py-0.5 rounded text-catppuccin-pink text-sm">${N.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code>`),F}),m=m.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),m=m.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),m=m.replace(/_(.*?)_/g,'<em class="text-catppuccin-text italic">$1</em>'),m=m.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),m=m.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>'),m=m.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">'),m=m.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>'),T.forEach((E,N)=>{m=m.replaceAll(`__IC_${N}__`,E)}),R.forEach((E,N)=>{m=m.replaceAll(`\0PROT${N}\0`,E)}),m},h=v=>{let m=v;const R=[];m=m.replace(/```(\w*)(?::([^\s\n]+))?\s*\n?([\s\S]*?)```/g,(I,$,C,j)=>{const ce=`__CODEBLOCK_${R.length}__`,ve=j.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\`/g,"`"),J=$?`language-${$.toLowerCase()}`:"",Q=`code-block-${R.length}`,z=$?$.toLowerCase():"text",Ie=C||"",Oe=`<div class="flex items-center justify-between bg-catppuccin-crust border border-catppuccin-surface/50 border-b-0 rounded-t px-3 py-1.5 text-xs">
      <div class="flex items-center gap-1">
        ${Ie?`<span class="text-catppuccin-text">${Ie}</span><span class="text-catppuccin-subtle">(${z})</span>`:`<span class="text-catppuccin-mauve font-medium">${z}</span>`}
      </div>
      <button data-clipboard-target="#${Q}" class="text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors cursor-pointer">copy</button>
    </div>`;return R.push(`<div class="my-4">
        ${Oe}
        <pre class="bg-catppuccin-base/50 border border-catppuccin-surface/50 rounded-t-none rounded-b p-4 overflow-x-auto mt-0"><code id="${Q}" class="${J}">${ve}</code></pre>
      </div>`),ce});const T=[];m=m.replace(/:::hint\s+(\w+)\r?\n([\s\S]*?):::/g,(I,$,C)=>{const j=`__HINT_${T.length}__`;return T.push({type:$.trim().toLowerCase(),content:C.trim()}),j});const E=[];let N=!0;for(;N;){const I=m;m=m.replace(/:::details\s+([^\n\r]+)\r?\n([\s\S]*?):::/g,($,C,j)=>{const ce=`__DETAILS_${E.length}__`;return E.push({title:C.trim(),content:j.trim()}),ce}),N=m!==I}const F=[];m=m.replace(/\\`/g,()=>{const I=`__ESCAPED_BACKTICK_${F.length}__`;return F.push("`"),I});const Z=[];m=m.replace(/`([^`]+)`/g,(I,$)=>{const C=`__INLINECODE_${Z.length}__`,j=$.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return Z.push(`<code class="bg-catppuccin-surface/50 px-2 py-0.5 rounded text-catppuccin-pink text-sm">${j}</code>`),C});const oe=[];m=m.replace(/((?:\|[^\n]+\|\r?\n?)+)/g,I=>{const $=I.trim().split(/\r?\n/);if($.length<2||!/^\|[\s\-:|]+\|$/.test($[1]))return I;const j=`__TABLE_${oe.length}__`,ce=$[0],ve=$.slice(2);let J='<table class="w-full my-4 text-sm border-collapse">';const Q=ce.split("|").filter(z=>z.trim());return J+="<thead><tr>",Q.forEach(z=>{J+=`<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${z.trim()}</th>`}),J+="</tr></thead>",J+="<tbody>",ve.forEach(z=>{if(z.trim()&&!/^\|[\s\-:|]+\|$/.test(z)){const Ie=z.split("|").filter(Oe=>Oe.trim());J+="<tr>",Ie.forEach(Oe=>{J+=`<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${Oe.trim()}</td>`}),J+="</tr>"}}),J+="</tbody></table>",oe.push(J),j}),m=m.replace(/^(?:---|\*\*\*|___)\s*$/gim,'<hr class="border-catppuccin-surface my-6">');const ne=I=>I.toLowerCase().replace(/<[^>]*>/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();m=m.replace(/^### (.*$)/gim,(I,$)=>{const C=ne($);return`<h3 id="${C}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${$}<a href="#${C}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`}),m=m.replace(/^## (.*$)/gim,(I,$)=>{const C=ne($);return`<h2 id="${C}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${$}<a href="#${C}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`}),m=m.replace(/^# (.*$)/gim,(I,$)=>{const C=ne($);return`<h1 id="${C}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${$}<a href="#${C}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`}),m=m.replace(/^> (.*$)/gim,'<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>'),m=m.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">'),m=m.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),m=m.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),m=m.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),m=m.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>'),m=m.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>'),m=m.replace(/^[\-\*\+] \[x\] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>'),m=m.replace(/^[\-\*\+] \[ \] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>'),m=m.replace(/^\d+\. (.*$)/gim,'<li data-list-type="ol" class="ml-6 text-catppuccin-text mb-1">$1</li>'),m=m.replace(/^[\-\*\+] (.*$)/gim,'<li data-list-type="ul" class="ml-6 text-catppuccin-text mb-1">$1</li>'),m=m.replace(/(<li data-list-type="ol"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ol"[^>]*>.*?<\/li>))*/g,I=>`<ol class="list-decimal my-4 pl-2">${I}</ol>`),m=m.replace(/(<li data-list-type="ul"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ul"[^>]*>.*?<\/li>))*/g,I=>`<ul class="list-disc my-4">${I}</ul>`),m=m.replace(/ data-list-type="[^"]+"/g,"");const xe=/^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;m=m.split(`

`).map(I=>{const $=I.trim();if($.length===0||$.startsWith("__CODEBLOCK_")||$.startsWith("__TABLE_")||$.startsWith("__DETAILS_")||$.startsWith("__HINT_"))return I;const C=I.split(`
`),j=[];let ce=[];const ve=()=>{if(ce.length>0){const J=ce.join("<br>");j.push(`<p class="text-catppuccin-text leading-relaxed mb-4">${J}</p>`),ce=[]}};return C.forEach(J=>{const Q=J.trim();Q.length===0||xe.test(Q)||Q.startsWith("__CODEBLOCK_")||Q.startsWith("__TABLE_")||Q.startsWith("__DETAILS_")||Q.startsWith("__HINT_")?(ve(),j.push(J)):ce.push(J.trim())}),ve(),j.join(`
`)}).join(`

`);for(let I=E.length-1;I>=0;I--){const $=E[I],C=`<details class="my-4 border border-catppuccin-surface rounded overflow-hidden">
      <summary class="bg-catppuccin-crust px-4 py-2 cursor-pointer text-catppuccin-text hover:bg-catppuccin-surface/30 transition-colors">
        ${f($.title)}
      </summary>
      <div class="p-4 bg-catppuccin-base/30">${f($.content)}</div>
    </details>`;m=m.replaceAll(`__DETAILS_${I}__`,C)}const K={info:{bg:"bg-catppuccin-blue/10",border:"border-catppuccin-blue/50",icon:"i",title:"Info"},warning:{bg:"bg-catppuccin-yellow/10",border:"border-catppuccin-yellow/50",icon:"!",title:"Warning"},tip:{bg:"bg-catppuccin-green/10",border:"border-catppuccin-green/50",icon:"*",title:"Tip"},danger:{bg:"bg-catppuccin-red/10",border:"border-catppuccin-red/50",icon:"x",title:"Danger"},note:{bg:"bg-catppuccin-mauve/10",border:"border-catppuccin-mauve/50",icon:"#",title:"Note"}};return T.forEach((I,$)=>{const C=K[I.type]||K.info,j=`<div class="my-4 ${C.bg} ${C.border} border-l-4 rounded-r px-4 py-3">
      <div class="flex items-center gap-2 font-medium text-catppuccin-text mb-1">
        <span class="font-mono text-sm">[${C.icon}]</span>
        <span>${C.title}</span>
      </div>
      <div class="text-catppuccin-text text-sm">${f(I.content)}</div>
    </div>`;m=m.replaceAll(`__HINT_${$}__`,j)}),R.forEach((I,$)=>{m=m.replaceAll(`__CODEBLOCK_${$}__`,I)}),oe.forEach((I,$)=>{m=m.replaceAll(`__TABLE_${$}__`,I)}),Z.forEach((I,$)=>{m=m.replaceAll(`__INLINECODE_${$}__`,I)}),F.forEach((I,$)=>{m=m.replaceAll(`__ESCAPED_BACKTICK_${$}__`,I)}),m},g=()=>{window.Prism&&(Prism.highlightAll(),document.querySelectorAll('pre[class*="language-"]').forEach(v=>{v.className=v.className.replace(/language-\S+/g,"").trim()}))};return Vt(()=>{setTimeout(g,100)}),Xt(i,()=>{ro(()=>{g()})},{deep:!0}),(v,m)=>(L(),B("div",null,[k("div",Kf,[k("div",Yf," ~$ cat "+te(e.post.slug)+".md ",1),k("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-text transition-colors mb-6 inline-flex items-center gap-1"}," [← back to posts] "),k("h1",zf,te(e.post.title),1),k("div",Jf,[k("span",null,te(e.post.date),1),m[0]||(m[0]=k("span",{class:"text-catppuccin-surface"},"•",-1)),k("span",null,"~"+te(r.value)+" min read",1),m[1]||(m[1]=k("span",{class:"text-catppuccin-surface"},"•",-1)),k("div",Qf,[(L(!0),B(he,null,Ye(e.post.tags,R=>(L(),B("span",{key:R,class:"text-catppuccin-gray"}," #"+te(R),1))),128))])])]),c.value.length>0?(L(),B("div",Zf,[m[2]||(m[2]=k("div",{class:"text-sm text-catppuccin-subtle mb-3"}," ~$ configure variables ",-1)),k("div",Xf,[(L(!0),B(he,null,Ye(c.value,R=>(L(),B("div",{key:R,class:"flex items-center gap-3"},[k("label",{for:`var-${R}`,class:"text-sm text-catppuccin-text min-w-[120px]"},te(R)+": ",9,ep),Qa(k("input",{id:`var-${R}`,"onUpdate:modelValue":T=>i.value[R]=T,type:"text",placeholder:R,class:"flex-1 px-3 py-1.5 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"},null,8,tp),[[Tl,i.value[R]]])]))),128))])])):Pe("",!0),k("article",np,[k("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:h(l.value)},null,8,sp)]),k("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors inline-flex items-center gap-1"}," [← back to all posts] ")]))}},rp=Dn(op,[["__scopeId","data-v-9a5d1d91"]]),ip={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},ap={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},cp={key:"list"},lp={class:"mb-12"},up={class:"flex items-center gap-4 text-sm mb-6"},dp={key:"post"},fp={__name:"Posts",setup(e){const t=Se("list"),n=Se(null),s=Se(null),o=Se([]),r=Se([]),i=ia(),a=yo(),c=de(()=>s.value?o.value.filter(g=>g.tags.includes(s.value)):o.value),u=()=>{o.value=xo(),r.value=Sf()},l=g=>{if(n.value=kf(g),n.value)t.value="post",window.scrollTo({top:0,behavior:"smooth"}),i.query.post!==g&&a.replace({name:"Posts",query:{...i.query,post:g}});else if(i.query.post){const v={...i.query};delete v.post,a.replace({name:"Posts",query:v})}},f=({skipQueryUpdate:g=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!g&&"post"in i.query){const v={...i.query};delete v.post,a.replace({name:"Posts",query:v})}},h=g=>{s.value=s.value===g?null:g};return Vt(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(m){const R=m.trigger,T=R.textContent;R.textContent="copied!",R.classList.add("text-catppuccin-green"),setTimeout(()=>{R.textContent=T,R.classList.remove("text-catppuccin-green")},2e3),m.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const v=i.query.post;v&&l(v)}),as(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),Xt(()=>i.query.post,(g,v)=>{g&&g!==v?l(g):!g&&t.value==="post"&&f({skipQueryUpdate:!0})}),(g,v)=>{const m=co("router-link");return L(),B("div",ip,[k("div",ap,[re(go,{name:"fade",mode:"out-in"},{default:Rt(()=>[t.value==="list"?(L(),B("div",cp,[k("div",lp,[v[1]||(v[1]=k("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cd ~/posts",-1)),v[2]||(v[2]=k("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[k("span",{class:"text-catppuccin-mauve"},"Posts")],-1)),v[3]||(v[3]=k("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," My thoughts, tutorials, and experiences on various topics including web development, programming, and technology. ",-1)),k("div",up,[re(m,{to:"/",class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"},{default:Rt(()=>[...v[0]||(v[0]=[Ge(" [← home] ",-1)])]),_:1})]),re(Tf,{tags:r.value,"selected-tag":s.value,onToggleTag:h},null,8,["tags","selected-tag"])]),re(qf,{posts:c.value,"selected-tag":s.value,onOpenPost:l,onSelectTag:h},null,8,["posts","selected-tag"]),re(Qn)])):t.value==="post"&&n.value?(L(),B("div",dp,[re(rp,{post:n.value,onGoBack:f},null,8,["post"]),re(Qn)])):Pe("",!0)]),_:1})])])}}},pp=Dn(fp,[["__scopeId","data-v-7f74cefd"]]),hp={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},mp={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16"},gp={class:"mb-8"},bp={class:"text-catppuccin-subtle text-sm mb-4"},vp={class:"border-l-2 border-catppuccin-surface pl-4"},yp={class:"text-catppuccin-red text-sm"},wp={class:"text-catppuccin-mauve"},xp={__name:"NotFound",setup(e){const t=ia(),n=yo(),s=de(()=>(t.fullPath||t.path||"/").replace(/^\//,"")||"."),o=()=>n.push("/");return(r,i)=>(L(),B("div",hp,[k("div",mp,[k("div",gp,[k("div",bp," ~$ cd ~/"+te(s.value),1),k("div",{class:"flex items-center gap-4 text-sm mb-6"},[k("button",{onClick:o,class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"}," [← home] ")])]),k("div",vp,[k("div",yp,[i[0]||(i[0]=Ge(" cd: no such file or directory: /",-1)),k("span",wp,te(s.value),1)])])]),re(Qn)]))}},_p=[{path:"/",name:"Home",component:pf,meta:{title:"Home | heckr.dev"}},{path:"/posts",name:"Posts",component:pp,meta:{title:"Posts | heckr.dev"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:xp,meta:{title:"404 Not Found | heckr.dev"}}],ca=Vu({history:xu(),routes:_p,scrollBehavior(e,t,n){return n||{top:0}}});ca.beforeEach((e,t,n)=>{document.title=e.meta.title||"heckr.dev",n()});let un=0;const Ar=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],kp=()=>{console.log("%cWelcome to heckr.dev","font-size: 20px; font-weight: bold; color: #cba6f7;"),console.log("%cWelcome to the dev console, here are some commands to try:","font-size: 14px; color: #a6adc8;"),console.log(`%c- help() - show available commands
- about() - learn more about me
- skills() - view my tech stack
- contact() - get my contact info`,"font-size: 12px; color: #6c7086;"),window.help=()=>{console.log("%cAvailable commands:","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%c- help() - show this message
- about() - about the developer
- skills() - technical skills
- contact() - contact information
- secret() - ???
`,"font-size: 12px; color: #a6adc8;")},window.about=()=>{console.log("%cAbout me","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cA passionate developer who loves building cool things with code!
Check out my projects and posts on the site.`,"font-size: 12px; color: #a6adc8;")},window.skills=async()=>{console.log("%cTech stack","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log("%cFetching...","font-size: 12px; color: #6c7086;");try{const{languages:e,totalRepos:t}=await aa();e.length>0?(console.log("%cTop languages from "+t+" repositories found:","font-size: 14px; font-weight: bold; color: #a6adc8;"),e.slice(0,10).forEach(({language:n,count:s},o)=>{console.log(`%c${o+1}. ${n}: ${s} repos`,"font-size: 12px; color: #a6adc8;")})):console.log("%cUnable to fetch data, please try again later.","font-size: 12px; color: #f38ba8;")}catch{console.log("%cError loading data, please try again later.","font-size: 12px; color: #f38ba8;")}},window.contact=()=>{console.log("%cContact info","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cGitHub: https://github.com/hecker-01
Feel free to reach out!`,"font-size: 12px; color: #a6adc8;")},window.secret=()=>{console.log("%cYou found the secret command","font-size: 18px; font-weight: bold; color: #f9e2af;"),console.log("%cHere's a hint: ↑ ↑ ↓ ↓ ← → ← → B A","font-size: 12px; color: #fab387;")},document.addEventListener("keydown",e=>{e.code===Ar[un]?(un++,un===Ar.length&&(Sp(),un=0)):un=0})},Sp=()=>{if(console.log("%cKONAMI CODE ACTIVATED!","font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;"),document.body.style.animation="rainbow-border 2s linear infinite",!document.getElementById("konami-style")){const e=document.createElement("style");e.id="konami-style",e.textContent=`
      @keyframes rainbow-border {
        0% { box-shadow: inset 0 0 0 3px #f38ba8; }
        16% { box-shadow: inset 0 0 0 3px #fab387; }
        33% { box-shadow: inset 0 0 0 3px #f9e2af; }
        50% { box-shadow: inset 0 0 0 3px #a6e3a1; }
        66% { box-shadow: inset 0 0 0 3px #89dceb; }
        83% { box-shadow: inset 0 0 0 3px #89b4fa; }
        100% { box-shadow: inset 0 0 0 3px #cba6f7; }
      }
    `,document.head.appendChild(e)}setTimeout(()=>{document.body.style.animation=""},5e3)};$l(ju).use(ca).mount("#app");kp();
