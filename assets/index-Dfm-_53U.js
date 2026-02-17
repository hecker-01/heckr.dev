(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function Vs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ue={},Yt=[],lt=()=>{},_r=()=>!1,Yn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Gs=e=>e.startsWith("onUpdate:"),be=Object.assign,Ks=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},sl=Object.prototype.hasOwnProperty,se=(e,t)=>sl.call(e,t),j=Array.isArray,Jt=e=>Jn(e)==="[object Map]",wr=e=>Jn(e)==="[object Set]",V=e=>typeof e=="function",me=e=>typeof e=="string",Rt=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Cr=e=>(fe(e)||V(e))&&V(e.then)&&V(e.catch),Sr=Object.prototype.toString,Jn=e=>Sr.call(e),ol=e=>Jn(e).slice(8,-1),Er=e=>Jn(e)==="[object Object]",qs=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,un=Vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qn=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},rl=/-\w/g,Ve=Qn(e=>e.replace(rl,t=>t.slice(1).toUpperCase())),il=/\B([A-Z])/g,Wt=Qn(e=>e.replace(il,"-$1").toLowerCase()),Zn=Qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cs=Qn(e=>e?`on${Zn(e)}`:""),Tt=(e,t)=>!Object.is(e,t),us=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ar=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},ll=e=>{const t=parseFloat(e);return isNaN(t)?e:t},al=e=>{const t=me(e)?Number(e):NaN;return isNaN(t)?e:t};let _o;const Xn=()=>_o||(_o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function je(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=me(s)?dl(s):je(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(me(e)||fe(e))return e}const cl=/;(?![^(]*\))/g,ul=/:([^]+)/,fl=/\/\*[^]*?\*\//g;function dl(e){const t={};return e.replace(fl,"").split(cl).forEach(n=>{if(n){const s=n.split(ul);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function jt(e){let t="";if(me(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const s=jt(e[n]);s&&(t+=s+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hl=Vs(pl);function Tr(e){return!!e||e===""}const kr=e=>!!(e&&e.__v_isRef===!0),Y=e=>me(e)?e:e==null?"":j(e)||fe(e)&&(e.toString===Sr||!V(e.toString))?kr(e)?Y(e.value):JSON.stringify(e,Pr,2):String(e),Pr=(e,t)=>kr(t)?Pr(e,t.value):Jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[fs(s,r)+" =>"]=o,n),{})}:wr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>fs(n))}:Rt(t)?fs(t):fe(t)&&!j(t)&&!Er(t)?String(t):t,fs=(e,t="")=>{var n;return Rt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Le;class ml{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){this._on>0&&--this._on===0&&(Le=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function gl(){return Le}let ce;const ds=new WeakSet;class Rr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&Le.active&&Le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ds.has(this)&&(ds.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ir(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wo(this),Lr(this);const t=ce,n=qe;ce=this,qe=!0;try{return this.fn()}finally{Mr(this),ce=t,qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Js(t);this.deps=this.depsTail=void 0,wo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ds.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ts(this)&&this.run()}get dirty(){return Ts(this)}}let Or=0,fn,dn;function Ir(e,t=!1){if(e.flags|=8,t){e.next=dn,dn=e;return}e.next=fn,fn=e}function zs(){Or++}function Ys(){if(--Or>0)return;if(dn){let t=dn;for(dn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;fn;){let t=fn;for(fn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Lr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Mr(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Js(s),bl(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Ts(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Dr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Dr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yn)||(e.globalVersion=yn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ts(e))))return;e.flags|=2;const t=e.dep,n=ce,s=qe;ce=e,qe=!0;try{Lr(e);const o=e.fn(e._value);(t.version===0||Tt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{ce=n,qe=s,Mr(e),e.flags&=-3}}function Js(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Js(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function bl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let qe=!0;const Nr=[];function ht(){Nr.push(qe),qe=!1}function mt(){const e=Nr.pop();qe=e===void 0?!0:e}function wo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ce;ce=void 0;try{t()}finally{ce=n}}}let yn=0;class vl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ce||!qe||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new vl(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,$r(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(t){this.version++,yn++,this.notify(t)}notify(t){zs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ys()}}}function $r(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)$r(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ks=new WeakMap,Ft=Symbol(""),Ps=Symbol(""),xn=Symbol("");function we(e,t,n){if(qe&&ce){let s=ks.get(e);s||ks.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new Qs),o.map=s,o.key=n),o.track()}}function pt(e,t,n,s,o,r){const i=ks.get(e);if(!i){yn++;return}const a=l=>{l&&l.trigger()};if(zs(),t==="clear")i.forEach(a);else{const l=j(e),u=l&&qs(n);if(l&&n==="length"){const c=Number(s);i.forEach((d,h)=>{(h==="length"||h===xn||!Rt(h)&&h>=c)&&a(d)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(xn)),t){case"add":l?u&&a(i.get("length")):(a(i.get(Ft)),Jt(e)&&a(i.get(Ps)));break;case"delete":l||(a(i.get(Ft)),Jt(e)&&a(i.get(Ps)));break;case"set":Jt(e)&&a(i.get(Ft));break}}Ys()}function Kt(e){const t=Q(e);return t===e?t:(we(t,"iterate",xn),Ue(e)?t:t.map(Ye))}function es(e){return we(e=Q(e),"iterate",xn),e}function wt(e,t){return gt(e)?Xt(Bt(e)?Ye(t):t):Ye(t)}const yl={__proto__:null,[Symbol.iterator](){return ps(this,Symbol.iterator,e=>wt(this,e))},concat(...e){return Kt(this).concat(...e.map(t=>j(t)?Kt(t):t))},entries(){return ps(this,"entries",e=>(e[1]=wt(this,e[1]),e))},every(e,t){return ct(this,"every",e,t,void 0,arguments)},filter(e,t){return ct(this,"filter",e,t,n=>n.map(s=>wt(this,s)),arguments)},find(e,t){return ct(this,"find",e,t,n=>wt(this,n),arguments)},findIndex(e,t){return ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ct(this,"findLast",e,t,n=>wt(this,n),arguments)},findLastIndex(e,t){return ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return hs(this,"includes",e)},indexOf(...e){return hs(this,"indexOf",e)},join(e){return Kt(this).join(e)},lastIndexOf(...e){return hs(this,"lastIndexOf",e)},map(e,t){return ct(this,"map",e,t,void 0,arguments)},pop(){return on(this,"pop")},push(...e){return on(this,"push",e)},reduce(e,...t){return Co(this,"reduce",e,t)},reduceRight(e,...t){return Co(this,"reduceRight",e,t)},shift(){return on(this,"shift")},some(e,t){return ct(this,"some",e,t,void 0,arguments)},splice(...e){return on(this,"splice",e)},toReversed(){return Kt(this).toReversed()},toSorted(e){return Kt(this).toSorted(e)},toSpliced(...e){return Kt(this).toSpliced(...e)},unshift(...e){return on(this,"unshift",e)},values(){return ps(this,"values",e=>wt(this,e))}};function ps(e,t,n){const s=es(e),o=s[t]();return s!==e&&!Ue(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=n(r.value)),r}),o}const xl=Array.prototype;function ct(e,t,n,s,o,r){const i=es(e),a=i!==e&&!Ue(e),l=i[t];if(l!==xl[t]){const d=l.apply(e,r);return a?Ye(d):d}let u=n;i!==e&&(a?u=function(d,h){return n.call(this,wt(e,d),h,e)}:n.length>2&&(u=function(d,h){return n.call(this,d,h,e)}));const c=l.call(i,u,s);return a&&o?o(c):c}function Co(e,t,n,s){const o=es(e);let r=n;return o!==e&&(Ue(e)?n.length>3&&(r=function(i,a,l){return n.call(this,i,a,l,e)}):r=function(i,a,l){return n.call(this,i,wt(e,a),l,e)}),o[t](r,...s)}function hs(e,t,n){const s=Q(e);we(s,"iterate",xn);const o=s[t](...n);return(o===-1||o===!1)&&eo(n[0])?(n[0]=Q(n[0]),s[t](...n)):o}function on(e,t,n=[]){ht(),zs();const s=Q(e)[t].apply(e,n);return Ys(),mt(),s}const _l=Vs("__proto__,__v_isRef,__isVue"),Fr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rt));function wl(e){Rt(e)||(e=String(e));const t=Q(this);return we(t,"has",e),t.hasOwnProperty(e)}class Br{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?Il:Ur:r?jr:Wr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=j(t);if(!o){let l;if(i&&(l=yl[n]))return l;if(n==="hasOwnProperty")return wl}const a=Reflect.get(t,n,Se(t)?t:s);if((Rt(n)?Fr.has(n):_l(n))||(o||we(t,"get",n),r))return a;if(Se(a)){const l=i&&qs(n)?a:a.value;return o&&fe(l)?Os(l):l}return fe(a)?o?Os(a):Tn(a):a}}class Hr extends Br{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];const i=j(t)&&qs(n);if(!this._isShallow){const u=gt(r);if(!Ue(s)&&!gt(s)&&(r=Q(r),s=Q(s)),!i&&Se(r)&&!Se(s))return u||(r.value=s),!0}const a=i?Number(n)<t.length:se(t,n),l=Reflect.set(t,n,s,Se(t)?t:o);return t===Q(o)&&(a?Tt(s,r)&&pt(t,"set",n,s):pt(t,"add",n,s)),l}deleteProperty(t,n){const s=se(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&pt(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!Rt(n)||!Fr.has(n))&&we(t,"has",n),s}ownKeys(t){return we(t,"iterate",j(t)?"length":Ft),Reflect.ownKeys(t)}}class Cl extends Br{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Sl=new Hr,El=new Cl,Al=new Hr(!0);const Rs=e=>e,On=e=>Reflect.getPrototypeOf(e);function Tl(e,t,n){return function(...s){const o=this.__v_raw,r=Q(o),i=Jt(r),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=o[e](...s),c=n?Rs:t?Xt:Ye;return!t&&we(r,"iterate",l?Ps:Ft),be(Object.create(u),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:a?[c(d[0]),c(d[1])]:c(d),done:h}}})}}function In(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function kl(e,t){const n={get(o){const r=this.__v_raw,i=Q(r),a=Q(o);e||(Tt(o,a)&&we(i,"get",o),we(i,"get",a));const{has:l}=On(i),u=t?Rs:e?Xt:Ye;if(l.call(i,o))return u(r.get(o));if(l.call(i,a))return u(r.get(a));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&we(Q(o),"iterate",Ft),o.size},has(o){const r=this.__v_raw,i=Q(r),a=Q(o);return e||(Tt(o,a)&&we(i,"has",o),we(i,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const i=this,a=i.__v_raw,l=Q(a),u=t?Rs:e?Xt:Ye;return!e&&we(l,"iterate",Ft),a.forEach((c,d)=>o.call(r,u(c),u(d),i))}};return be(n,e?{add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear")}:{add(o){!t&&!Ue(o)&&!gt(o)&&(o=Q(o));const r=Q(this);return On(r).has.call(r,o)||(r.add(o),pt(r,"add",o,o)),this},set(o,r){!t&&!Ue(r)&&!gt(r)&&(r=Q(r));const i=Q(this),{has:a,get:l}=On(i);let u=a.call(i,o);u||(o=Q(o),u=a.call(i,o));const c=l.call(i,o);return i.set(o,r),u?Tt(r,c)&&pt(i,"set",o,r):pt(i,"add",o,r),this},delete(o){const r=Q(this),{has:i,get:a}=On(r);let l=i.call(r,o);l||(o=Q(o),l=i.call(r,o)),a&&a.call(r,o);const u=r.delete(o);return l&&pt(r,"delete",o,void 0),u},clear(){const o=Q(this),r=o.size!==0,i=o.clear();return r&&pt(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Tl(o,e,t)}),n}function Zs(e,t){const n=kl(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(se(n,o)&&o in s?n:s,o,r)}const Pl={get:Zs(!1,!1)},Rl={get:Zs(!1,!0)},Ol={get:Zs(!0,!1)};const Wr=new WeakMap,jr=new WeakMap,Ur=new WeakMap,Il=new WeakMap;function Ll(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ml(e){return e.__v_skip||!Object.isExtensible(e)?0:Ll(ol(e))}function Tn(e){return gt(e)?e:Xs(e,!1,Sl,Pl,Wr)}function Vr(e){return Xs(e,!1,Al,Rl,jr)}function Os(e){return Xs(e,!0,El,Ol,Ur)}function Xs(e,t,n,s,o){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=Ml(e);if(r===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,r===2?s:n);return o.set(e,a),a}function Bt(e){return gt(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function gt(e){return!!(e&&e.__v_isReadonly)}function Ue(e){return!!(e&&e.__v_isShallow)}function eo(e){return e?!!e.__v_raw:!1}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Dl(e){return!se(e,"__v_skip")&&Object.isExtensible(e)&&Ar(e,"__v_skip",!0),e}const Ye=e=>fe(e)?Tn(e):e,Xt=e=>fe(e)?Os(e):e;function Se(e){return e?e.__v_isRef===!0:!1}function ke(e){return Gr(e,!1)}function Nl(e){return Gr(e,!0)}function Gr(e,t){return Se(e)?e:new $l(e,t)}class $l{constructor(t,n){this.dep=new Qs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Q(t),this._value=n?t:Ye(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ue(t)||gt(t);t=s?t:Q(t),Tt(t,n)&&(this._rawValue=t,this._value=s?t:Ye(t),this.dep.trigger())}}function Fe(e){return Se(e)?e.value:e}const Fl={get:(e,t,n)=>t==="__v_raw"?e:Fe(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Se(o)&&!Se(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Kr(e){return Bt(e)?e:new Proxy(e,Fl)}class Bl{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Qs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Ir(this,!0),!0}get value(){const t=this.dep.track();return Dr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Hl(e,t,n=!1){let s,o;return V(e)?s=e:(s=e.get,o=e.set),new Bl(s,o,n)}const Ln={},Bn=new WeakMap;let Dt;function Wl(e,t=!1,n=Dt){if(n){let s=Bn.get(n);s||Bn.set(n,s=[]),s.push(e)}}function jl(e,t,n=ue){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:a,call:l}=n,u=I=>o?I:Ue(I)||o===!1||o===0?At(I,1):At(I);let c,d,h,m,b=!1,C=!1;if(Se(e)?(d=()=>e.value,b=Ue(e)):Bt(e)?(d=()=>u(e),b=!0):j(e)?(C=!0,b=e.some(I=>Bt(I)||Ue(I)),d=()=>e.map(I=>{if(Se(I))return I.value;if(Bt(I))return u(I);if(V(I))return l?l(I,2):I()})):V(e)?t?d=l?()=>l(e,2):e:d=()=>{if(h){ht();try{h()}finally{mt()}}const I=Dt;Dt=c;try{return l?l(e,3,[m]):e(m)}finally{Dt=I}}:d=lt,t&&o){const I=d,G=o===!0?1/0:o;d=()=>At(I(),G)}const F=gl(),O=()=>{c.stop(),F&&F.active&&Ks(F.effects,c)};if(r&&t){const I=t;t=(...G)=>{I(...G),O()}}let P=C?new Array(e.length).fill(Ln):Ln;const T=I=>{if(!(!(c.flags&1)||!c.dirty&&!I))if(t){const G=c.run();if(o||b||(C?G.some((oe,J)=>Tt(oe,P[J])):Tt(G,P))){h&&h();const oe=Dt;Dt=c;try{const J=[G,P===Ln?void 0:C&&P[0]===Ln?[]:P,m];P=G,l?l(t,3,J):t(...J)}finally{Dt=oe}}}else c.run()};return a&&a(T),c=new Rr(d),c.scheduler=i?()=>i(T,!1):T,m=I=>Wl(I,!1,c),h=c.onStop=()=>{const I=Bn.get(c);if(I){if(l)l(I,4);else for(const G of I)G();Bn.delete(c)}},t?s?T(!0):P=c.run():i?i(T.bind(null,!0),!0):c.run(),O.pause=c.pause.bind(c),O.resume=c.resume.bind(c),O.stop=O,O}function At(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Se(e))At(e.value,t,n);else if(j(e))for(let s=0;s<e.length;s++)At(e[s],t,n);else if(wr(e)||Jt(e))e.forEach(s=>{At(s,t,n)});else if(Er(e)){for(const s in e)At(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&At(e[s],t,n)}return e}function kn(e,t,n,s){try{return s?e(...s):e()}catch(o){ts(o,t,n)}}function Je(e,t,n,s){if(V(e)){const o=kn(e,t,n,s);return o&&Cr(o)&&o.catch(r=>{ts(r,t,n)}),o}if(j(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Je(e[r],t,n,s));return o}}function ts(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ue;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}a=a.parent}if(r){ht(),kn(r,null,10,[e,l,u]),mt();return}}Ul(e,n,o,s,i)}function Ul(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Te=[];let rt=-1;const Qt=[];let Ct=null,qt=0;const qr=Promise.resolve();let Hn=null;function zr(e){const t=Hn||qr;return e?t.then(this?e.bind(this):e):t}function Vl(e){let t=rt+1,n=Te.length;for(;t<n;){const s=t+n>>>1,o=Te[s],r=_n(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function to(e){if(!(e.flags&1)){const t=_n(e),n=Te[Te.length-1];!n||!(e.flags&2)&&t>=_n(n)?Te.push(e):Te.splice(Vl(t),0,e),e.flags|=1,Yr()}}function Yr(){Hn||(Hn=qr.then(Qr))}function Gl(e){j(e)?Qt.push(...e):Ct&&e.id===-1?Ct.splice(qt+1,0,e):e.flags&1||(Qt.push(e),e.flags|=1),Yr()}function So(e,t,n=rt+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Jr(e){if(Qt.length){const t=[...new Set(Qt)].sort((n,s)=>_n(n)-_n(s));if(Qt.length=0,Ct){Ct.push(...t);return}for(Ct=t,qt=0;qt<Ct.length;qt++){const n=Ct[qt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ct=null,qt=0}}const _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Qr(e){try{for(rt=0;rt<Te.length;rt++){const t=Te[rt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),kn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;rt<Te.length;rt++){const t=Te[rt];t&&(t.flags&=-2)}rt=-1,Te.length=0,Jr(),Hn=null,(Te.length||Qt.length)&&Qr()}}let Ke=null,Zr=null;function Wn(e){const t=Ke;return Ke=e,Zr=e&&e.type.__scopeId||null,t}function kt(e,t=Ke,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Vn(-1);const r=Wn(t);let i;try{i=e(...o)}finally{Wn(r),s._d&&Vn(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function It(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let l=a.dir[s];l&&(ht(),Je(l,n,8,[e.el,a,e,t]),mt())}}function Dn(e,t){if(Ce){let n=Ce.provides;const s=Ce.parent&&Ce.parent.provides;s===n&&(n=Ce.provides=Object.create(s)),n[e]=t}}function ze(e,t,n=!1){const s=ao();if(s||Zt){let o=Zt?Zt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&V(t)?t.call(s&&s.proxy):t}}const Kl=Symbol.for("v-scx"),ql=()=>ze(Kl);function pn(e,t,n){return Xr(e,t,n)}function Xr(e,t,n=ue){const{immediate:s,deep:o,flush:r,once:i}=n,a=be({},n),l=t&&s||!t&&r!=="post";let u;if(En){if(r==="sync"){const m=ql();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=lt,m.resume=lt,m.pause=lt,m}}const c=Ce;a.call=(m,b,C)=>Je(m,c,b,C);let d=!1;r==="post"?a.scheduler=m=>{$e(m,c&&c.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(m,b)=>{b?m():to(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const h=jl(e,t,a);return En&&(u?u.push(h):l&&h()),h}function zl(e,t,n){const s=this.proxy,o=me(e)?e.includes(".")?ei(s,e):()=>s[e]:e.bind(s,s);let r;V(t)?r=t:(r=t.handler,n=t);const i=Pn(this),a=Xr(o,r.bind(s),n);return i(),a}function ei(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const Yl=Symbol("_vte"),ti=e=>e.__isTeleport,dt=Symbol("_leaveCb"),Mn=Symbol("_enterCb");function ni(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ut(()=>{e.isMounted=!0}),os(()=>{e.isUnmounting=!0}),e}const We=[Function,Array],si={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},oi=e=>{const t=e.subTree;return t.component?oi(t.component):t},Jl={name:"BaseTransition",props:si,setup(e,{slots:t}){const n=ao(),s=ni();return()=>{const o=t.default&&no(t.default(),!0);if(!o||!o.length)return;const r=ri(o),i=Q(e),{mode:a}=i;if(s.isLeaving)return ms(r);const l=Eo(r);if(!l)return ms(r);let u=wn(l,i,s,n,d=>u=d);l.type!==Pe&&Ht(l,u);let c=n.subTree&&Eo(n.subTree);if(c&&c.type!==Pe&&!Nt(c,l)&&oi(n).type!==Pe){let d=wn(c,i,s,n);if(Ht(c,d),a==="out-in"&&l.type!==Pe)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},ms(r);a==="in-out"&&l.type!==Pe?d.delayLeave=(h,m,b)=>{const C=ii(s,c);C[String(c.key)]=c,h[dt]=()=>{m(),h[dt]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{b(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function ri(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Pe){t=n;break}}return t}const Ql=Jl;function ii(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function wn(e,t,n,s,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:h,onLeave:m,onAfterLeave:b,onLeaveCancelled:C,onBeforeAppear:F,onAppear:O,onAfterAppear:P,onAppearCancelled:T}=t,I=String(e.key),G=ii(n,e),oe=(K,Z)=>{K&&Je(K,s,9,Z)},J=(K,Z)=>{const le=Z[1];oe(K,Z),j(K)?K.every(D=>D.length<=1)&&le():K.length<=1&&le()},_e={mode:i,persisted:a,beforeEnter(K){let Z=l;if(!n.isMounted)if(r)Z=F||l;else return;K[dt]&&K[dt](!0);const le=G[I];le&&Nt(e,le)&&le.el[dt]&&le.el[dt](),oe(Z,[K])},enter(K){let Z=u,le=c,D=d;if(!n.isMounted)if(r)Z=O||u,le=P||c,D=T||d;else return;let ee=!1;const ye=K[Mn]=De=>{ee||(ee=!0,De?oe(D,[K]):oe(le,[K]),_e.delayedLeave&&_e.delayedLeave(),K[Mn]=void 0)};Z?J(Z,[K,ye]):ye()},leave(K,Z){const le=String(e.key);if(K[Mn]&&K[Mn](!0),n.isUnmounting)return Z();oe(h,[K]);let D=!1;const ee=K[dt]=ye=>{D||(D=!0,Z(),ye?oe(C,[K]):oe(b,[K]),K[dt]=void 0,G[le]===e&&delete G[le])};G[le]=e,m?J(m,[K,ee]):ee()},clone(K){const Z=wn(K,t,n,s,o);return o&&o(Z),Z}};return _e}function ms(e){if(ns(e))return e=Pt(e),e.children=null,e}function Eo(e){if(!ns(e))return ti(e.type)&&e.children?ri(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&V(n.default))return n.default()}}function Ht(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ht(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function no(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===pe?(i.patchFlag&128&&o++,s=s.concat(no(i.children,t,a))):(t||i.type!==Pe)&&s.push(a!=null?Pt(i,{key:a}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function li(e,t){return V(e)?be({name:e.name},t,{setup:e}):e}function ai(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const jn=new WeakMap;function hn(e,t,n,s,o=!1){if(j(e)){e.forEach((b,C)=>hn(b,t&&(j(t)?t[C]:t),n,s,o));return}if(mn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&hn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?co(s.component):s.el,i=o?null:r,{i:a,r:l}=e,u=t&&t.r,c=a.refs===ue?a.refs={}:a.refs,d=a.setupState,h=Q(d),m=d===ue?_r:b=>se(h,b);if(u!=null&&u!==l){if(Ao(t),me(u))c[u]=null,m(u)&&(d[u]=null);else if(Se(u)){u.value=null;const b=t;b.k&&(c[b.k]=null)}}if(V(l))kn(l,a,12,[i,c]);else{const b=me(l),C=Se(l);if(b||C){const F=()=>{if(e.f){const O=b?m(l)?d[l]:c[l]:l.value;if(o)j(O)&&Ks(O,r);else if(j(O))O.includes(r)||O.push(r);else if(b)c[l]=[r],m(l)&&(d[l]=c[l]);else{const P=[r];l.value=P,e.k&&(c[e.k]=P)}}else b?(c[l]=i,m(l)&&(d[l]=i)):C&&(l.value=i,e.k&&(c[e.k]=i))};if(i){const O=()=>{F(),jn.delete(e)};O.id=-1,jn.set(e,O),$e(O,n)}else Ao(e),F()}}}function Ao(e){const t=jn.get(e);t&&(t.flags|=8,jn.delete(e))}Xn().requestIdleCallback;Xn().cancelIdleCallback;const mn=e=>!!e.type.__asyncLoader,ns=e=>e.type.__isKeepAlive;function Zl(e,t){ci(e,"a",t)}function Xl(e,t){ci(e,"da",t)}function ci(e,t,n=Ce){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ss(t,s,n),n){let o=n.parent;for(;o&&o.parent;)ns(o.parent.vnode)&&ea(s,t,n,o),o=o.parent}}function ea(e,t,n,s){const o=ss(t,e,s,!0);fi(()=>{Ks(s[t],o)},n)}function ss(e,t,n=Ce,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{ht();const a=Pn(n),l=Je(t,n,e,i);return a(),mt(),l});return s?o.unshift(r):o.push(r),r}}const bt=e=>(t,n=Ce)=>{(!En||e==="sp")&&ss(e,(...s)=>t(...s),n)},ta=bt("bm"),Ut=bt("m"),na=bt("bu"),ui=bt("u"),os=bt("bum"),fi=bt("um"),sa=bt("sp"),oa=bt("rtg"),ra=bt("rtc");function ia(e,t=Ce){ss("ec",e,t)}const di="components";function so(e,t){return hi(di,e,!0,t)||e}const pi=Symbol.for("v-ndc");function la(e){return me(e)?hi(di,e,!1)||e:e||pi}function hi(e,t,n=!0,s=!1){const o=Ke||Ce;if(o){const r=o.type;{const a=Ga(r,!1);if(a&&(a===t||a===Ve(t)||a===Zn(Ve(t))))return r}const i=To(o[e]||r[e],t)||To(o.appContext[e],t);return!i&&s?r:i}}function To(e,t){return e&&(e[t]||e[Ve(t)]||e[Zn(Ve(t))])}function Qe(e,t,n,s){let o;const r=n,i=j(e);if(i||me(e)){const a=i&&Bt(e);let l=!1,u=!1;a&&(l=!Ue(e),u=gt(e),e=es(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=t(l?u?Xt(Ye(e[c])):Ye(e[c]):e[c],c,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r)}else if(fe(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];o[l]=t(e[c],c,l,r)}}else o=[];return o}const Is=e=>e?Li(e)?co(e):Is(e.parent):null,gn=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Is(e.parent),$root:e=>Is(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>gi(e),$forceUpdate:e=>e.f||(e.f=()=>{to(e.update)}),$nextTick:e=>e.n||(e.n=zr.bind(e.proxy)),$watch:e=>zl.bind(e)}),gs=(e,t)=>e!==ue&&!e.__isScriptSetup&&se(e,t),aa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(gs(s,t))return i[t]=1,s[t];if(o!==ue&&se(o,t))return i[t]=2,o[t];if(se(r,t))return i[t]=3,r[t];if(n!==ue&&se(n,t))return i[t]=4,n[t];Ls&&(i[t]=0)}}const u=gn[t];let c,d;if(u)return t==="$attrs"&&we(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==ue&&se(n,t))return i[t]=4,n[t];if(d=l.config.globalProperties,se(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return gs(o,t)?(o[t]=n,!0):s!==ue&&se(s,t)?(s[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:r,type:i}},a){let l;return!!(n[a]||e!==ue&&a[0]!=="$"&&se(e,a)||gs(t,a)||se(r,a)||se(s,a)||se(gn,a)||se(o.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ko(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ls=!0;function ca(e){const t=gi(e),n=e.proxy,s=e.ctx;Ls=!1,t.beforeCreate&&Po(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:h,beforeUpdate:m,updated:b,activated:C,deactivated:F,beforeDestroy:O,beforeUnmount:P,destroyed:T,unmounted:I,render:G,renderTracked:oe,renderTriggered:J,errorCaptured:_e,serverPrefetch:K,expose:Z,inheritAttrs:le,components:D,directives:ee,filters:ye}=t;if(u&&ua(u,s,null),i)for(const ie in i){const te=i[ie];V(te)&&(s[ie]=te.bind(n))}if(o){const ie=o.call(n,n);fe(ie)&&(e.data=Tn(ie))}if(Ls=!0,r)for(const ie in r){const te=r[ie],at=V(te)?te.bind(n,n):V(te.get)?te.get.bind(n,n):lt,vt=!V(te)&&V(te.set)?te.set.bind(n):lt,Xe=de({get:at,set:vt});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Re=>Xe.value=Re})}if(a)for(const ie in a)mi(a[ie],s,n,ie);if(l){const ie=V(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(te=>{Dn(te,ie[te])})}c&&Po(c,e,"c");function ge(ie,te){j(te)?te.forEach(at=>ie(at.bind(n))):te&&ie(te.bind(n))}if(ge(ta,d),ge(Ut,h),ge(na,m),ge(ui,b),ge(Zl,C),ge(Xl,F),ge(ia,_e),ge(ra,oe),ge(oa,J),ge(os,P),ge(fi,I),ge(sa,K),j(Z))if(Z.length){const ie=e.exposed||(e.exposed={});Z.forEach(te=>{Object.defineProperty(ie,te,{get:()=>n[te],set:at=>n[te]=at,enumerable:!0})})}else e.exposed||(e.exposed={});G&&e.render===lt&&(e.render=G),le!=null&&(e.inheritAttrs=le),D&&(e.components=D),ee&&(e.directives=ee),K&&ai(e)}function ua(e,t,n=lt){j(e)&&(e=Ms(e));for(const s in e){const o=e[s];let r;fe(o)?"default"in o?r=ze(o.from||s,o.default,!0):r=ze(o.from||s):r=ze(o),Se(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Po(e,t,n){Je(j(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function mi(e,t,n,s){let o=s.includes(".")?ei(n,s):()=>n[s];if(me(e)){const r=t[e];V(r)&&pn(o,r)}else if(V(e))pn(o,e.bind(n));else if(fe(e))if(j(e))e.forEach(r=>mi(r,t,n,s));else{const r=V(e.handler)?e.handler.bind(n):t[e.handler];V(r)&&pn(o,r,e)}}function gi(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let l;return a?l=a:!o.length&&!n&&!s?l=t:(l={},o.length&&o.forEach(u=>Un(l,u,i,!0)),Un(l,t,i)),fe(t)&&r.set(t,l),l}function Un(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&Un(e,r,n,!0),o&&o.forEach(i=>Un(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=fa[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const fa={data:Ro,props:Oo,emits:Oo,methods:cn,computed:cn,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:cn,directives:cn,watch:pa,provide:Ro,inject:da};function Ro(e,t){return t?e?function(){return be(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function da(e,t){return cn(Ms(e),Ms(t))}function Ms(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ee(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?be(Object.create(null),e,t):t}function Oo(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:be(Object.create(null),ko(e),ko(t??{})):t}function pa(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const s in t)n[s]=Ee(e[s],t[s]);return n}function bi(){return{app:null,config:{isNativeTag:_r,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ha=0;function ma(e,t){return function(s,o=null){V(s)||(s=be({},s)),o!=null&&!fe(o)&&(o=null);const r=bi(),i=new WeakSet,a=[];let l=!1;const u=r.app={_uid:ha++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:qa,get config(){return r.config},set config(c){},use(c,...d){return i.has(c)||(c&&V(c.install)?(i.add(c),c.install(u,...d)):V(c)&&(i.add(c),c(u,...d))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,d){return d?(r.components[c]=d,u):r.components[c]},directive(c,d){return d?(r.directives[c]=d,u):r.directives[c]},mount(c,d,h){if(!l){const m=u._ceVNode||X(s,o);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),e(m,c,h),l=!0,u._container=c,c.__vue_app__=u,co(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Je(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return r.provides[c]=d,u},runWithContext(c){const d=Zt;Zt=u;try{return c()}finally{Zt=d}}};return u}}let Zt=null;const ga=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ve(t)}Modifiers`]||e[`${Wt(t)}Modifiers`];function ba(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ue;let o=n;const r=t.startsWith("update:"),i=r&&ga(s,t.slice(7));i&&(i.trim&&(o=n.map(c=>me(c)?c.trim():c)),i.number&&(o=n.map(ll)));let a,l=s[a=cs(t)]||s[a=cs(Ve(t))];!l&&r&&(l=s[a=cs(Wt(t))]),l&&Je(l,e,6,o);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Je(u,e,6,o)}}const va=new WeakMap;function vi(e,t,n=!1){const s=n?va:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!V(e)){const l=u=>{const c=vi(u,t,!0);c&&(a=!0,be(i,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(fe(e)&&s.set(e,null),null):(j(r)?r.forEach(l=>i[l]=null):be(i,r),fe(e)&&s.set(e,i),i)}function rs(e,t){return!e||!Yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,Wt(t))||se(e,t))}function Io(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:a,emit:l,render:u,renderCache:c,props:d,data:h,setupState:m,ctx:b,inheritAttrs:C}=e,F=Wn(e);let O,P;try{if(n.shapeFlag&4){const I=o||s,G=I;O=it(u.call(G,I,c,d,m,h,b)),P=a}else{const I=t;O=it(I.length>1?I(d,{attrs:a,slots:i,emit:l}):I(d,null)),P=t.props?a:ya(a)}}catch(I){bn.length=0,ts(I,e,1),O=X(Pe)}let T=O;if(P&&C!==!1){const I=Object.keys(P),{shapeFlag:G}=T;I.length&&G&7&&(r&&I.some(Gs)&&(P=xa(P,r)),T=Pt(T,P,!1,!0))}return n.dirs&&(T=Pt(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Ht(T,n.transition),O=T,Wn(F),O}const ya=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},xa=(e,t)=>{const n={};for(const s in e)(!Gs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function _a(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Lo(s,i,u):!!i;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const h=c[d];if(i[h]!==s[h]&&!rs(u,h))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Lo(s,i,u):!0:!!i;return!1}function Lo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!rs(n,r))return!0}return!1}function wa({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const yi={},xi=()=>Object.create(yi),_i=e=>Object.getPrototypeOf(e)===yi;function Ca(e,t,n,s=!1){const o={},r=xi();e.propsDefaults=Object.create(null),wi(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Vr(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Sa(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=Q(o),[l]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let h=c[d];if(rs(e.emitsOptions,h))continue;const m=t[h];if(l)if(se(r,h))m!==r[h]&&(r[h]=m,u=!0);else{const b=Ve(h);o[b]=Ds(l,a,b,m,e,!1)}else m!==r[h]&&(r[h]=m,u=!0)}}}else{wi(e,t,o,r)&&(u=!0);let c;for(const d in a)(!t||!se(t,d)&&((c=Wt(d))===d||!se(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(o[d]=Ds(l,a,d,void 0,e,!0)):delete o[d]);if(r!==a)for(const d in r)(!t||!se(t,d))&&(delete r[d],u=!0)}u&&pt(e.attrs,"set","")}function wi(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(un(l))continue;const u=t[l];let c;o&&se(o,c=Ve(l))?!r||!r.includes(c)?n[c]=u:(a||(a={}))[c]=u:rs(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,i=!0)}if(r){const l=Q(n),u=a||ue;for(let c=0;c<r.length;c++){const d=r[c];n[d]=Ds(o,l,d,u[d],e,!se(u,d))}}return i}function Ds(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=se(i,"default");if(a&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&V(l)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const c=Pn(o);s=u[n]=l.call(null,t),c()}}else s=l;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===Wt(n))&&(s=!0))}return s}const Ea=new WeakMap;function Ci(e,t,n=!1){const s=n?Ea:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let l=!1;if(!V(e)){const c=d=>{l=!0;const[h,m]=Ci(d,t,!0);be(i,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return fe(e)&&s.set(e,Yt),Yt;if(j(r))for(let c=0;c<r.length;c++){const d=Ve(r[c]);Mo(d)&&(i[d]=ue)}else if(r)for(const c in r){const d=Ve(c);if(Mo(d)){const h=r[c],m=i[d]=j(h)||V(h)?{type:h}:be({},h),b=m.type;let C=!1,F=!0;if(j(b))for(let O=0;O<b.length;++O){const P=b[O],T=V(P)&&P.name;if(T==="Boolean"){C=!0;break}else T==="String"&&(F=!1)}else C=V(b)&&b.name==="Boolean";m[0]=C,m[1]=F,(C||se(m,"default"))&&a.push(d)}}const u=[i,a];return fe(e)&&s.set(e,u),u}function Mo(e){return e[0]!=="$"&&!un(e)}const oo=e=>e==="_"||e==="_ctx"||e==="$stable",ro=e=>j(e)?e.map(it):[it(e)],Aa=(e,t,n)=>{if(t._n)return t;const s=kt((...o)=>ro(t(...o)),n);return s._c=!1,s},Si=(e,t,n)=>{const s=e._ctx;for(const o in e){if(oo(o))continue;const r=e[o];if(V(r))t[o]=Aa(o,r,s);else if(r!=null){const i=ro(r);t[o]=()=>i}}},Ei=(e,t)=>{const n=ro(t);e.slots.default=()=>n},Ai=(e,t,n)=>{for(const s in t)(n||!oo(s))&&(e[s]=t[s])},Ta=(e,t,n)=>{const s=e.slots=xi();if(e.vnode.shapeFlag&32){const o=t._;o?(Ai(s,t,n),n&&Ar(s,"_",o,!0)):Si(t,s)}else t&&Ei(e,t)},ka=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=ue;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Ai(o,t,n):(r=!t.$stable,Si(t,o)),i=t}else t&&(Ei(e,t),i={default:1});if(r)for(const a in o)!oo(a)&&i[a]==null&&delete o[a]},$e=La;function Pa(e){return Ra(e)}function Ra(e,t){const n=Xn();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:h,setScopeId:m=lt,insertStaticContent:b}=e,C=(f,p,g,v=null,_=null,y=null,k=void 0,A=null,E=!!p.dynamicChildren)=>{if(f===p)return;f&&!Nt(f,p)&&(v=x(f),Re(f,_,y,!0),f=null),p.patchFlag===-2&&(E=!1,p.dynamicChildren=null);const{type:w,ref:W,shapeFlag:L}=p;switch(w){case is:F(f,p,g,v);break;case Pe:O(f,p,g,v);break;case Nn:f==null&&P(p,g,v,k);break;case pe:D(f,p,g,v,_,y,k,A,E);break;default:L&1?G(f,p,g,v,_,y,k,A,E):L&6?ee(f,p,g,v,_,y,k,A,E):(L&64||L&128)&&w.process(f,p,g,v,_,y,k,A,E,B)}W!=null&&_?hn(W,f&&f.ref,y,p||f,!p):W==null&&f&&f.ref!=null&&hn(f.ref,null,y,f,!0)},F=(f,p,g,v)=>{if(f==null)s(p.el=a(p.children),g,v);else{const _=p.el=f.el;p.children!==f.children&&u(_,p.children)}},O=(f,p,g,v)=>{f==null?s(p.el=l(p.children||""),g,v):p.el=f.el},P=(f,p,g,v)=>{[f.el,f.anchor]=b(f.children,p,g,v,f.el,f.anchor)},T=({el:f,anchor:p},g,v)=>{let _;for(;f&&f!==p;)_=h(f),s(f,g,v),f=_;s(p,g,v)},I=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),o(f),f=g;o(p)},G=(f,p,g,v,_,y,k,A,E)=>{if(p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),f==null)oe(p,g,v,_,y,k,A,E);else{const w=f.el&&f.el._isVueCE?f.el:null;try{w&&w._beginPatch(),K(f,p,_,y,k,A,E)}finally{w&&w._endPatch()}}},oe=(f,p,g,v,_,y,k,A)=>{let E,w;const{props:W,shapeFlag:L,transition:H,dirs:U}=f;if(E=f.el=i(f.type,y,W&&W.is,W),L&8?c(E,f.children):L&16&&_e(f.children,E,null,v,_,bs(f,y),k,A),U&&It(f,null,v,"created"),J(E,f,f.scopeId,k,v),W){for(const ae in W)ae!=="value"&&!un(ae)&&r(E,ae,null,W[ae],y,v);"value"in W&&r(E,"value",null,W.value,y),(w=W.onVnodeBeforeMount)&&st(w,v,f)}U&&It(f,null,v,"beforeMount");const z=Oa(_,H);z&&H.beforeEnter(E),s(E,p,g),((w=W&&W.onVnodeMounted)||z||U)&&$e(()=>{w&&st(w,v,f),z&&H.enter(E),U&&It(f,null,v,"mounted")},_)},J=(f,p,g,v,_)=>{if(g&&m(f,g),v)for(let y=0;y<v.length;y++)m(f,v[y]);if(_){let y=_.subTree;if(p===y||Ri(y.type)&&(y.ssContent===p||y.ssFallback===p)){const k=_.vnode;J(f,k,k.scopeId,k.slotScopeIds,_.parent)}}},_e=(f,p,g,v,_,y,k,A,E=0)=>{for(let w=E;w<f.length;w++){const W=f[w]=A?St(f[w]):it(f[w]);C(null,W,p,g,v,_,y,k,A)}},K=(f,p,g,v,_,y,k)=>{const A=p.el=f.el;let{patchFlag:E,dynamicChildren:w,dirs:W}=p;E|=f.patchFlag&16;const L=f.props||ue,H=p.props||ue;let U;if(g&&Lt(g,!1),(U=H.onVnodeBeforeUpdate)&&st(U,g,p,f),W&&It(p,f,g,"beforeUpdate"),g&&Lt(g,!0),(L.innerHTML&&H.innerHTML==null||L.textContent&&H.textContent==null)&&c(A,""),w?Z(f.dynamicChildren,w,A,g,v,bs(p,_),y):k||te(f,p,A,null,g,v,bs(p,_),y,!1),E>0){if(E&16)le(A,L,H,g,_);else if(E&2&&L.class!==H.class&&r(A,"class",null,H.class,_),E&4&&r(A,"style",L.style,H.style,_),E&8){const z=p.dynamicProps;for(let ae=0;ae<z.length;ae++){const re=z[ae],Oe=L[re],Ie=H[re];(Ie!==Oe||re==="value")&&r(A,re,Oe,Ie,_,g)}}E&1&&f.children!==p.children&&c(A,p.children)}else!k&&w==null&&le(A,L,H,g,_);((U=H.onVnodeUpdated)||W)&&$e(()=>{U&&st(U,g,p,f),W&&It(p,f,g,"updated")},v)},Z=(f,p,g,v,_,y,k)=>{for(let A=0;A<p.length;A++){const E=f[A],w=p[A],W=E.el&&(E.type===pe||!Nt(E,w)||E.shapeFlag&198)?d(E.el):g;C(E,w,W,null,v,_,y,k,!0)}},le=(f,p,g,v,_)=>{if(p!==g){if(p!==ue)for(const y in p)!un(y)&&!(y in g)&&r(f,y,p[y],null,_,v);for(const y in g){if(un(y))continue;const k=g[y],A=p[y];k!==A&&y!=="value"&&r(f,y,A,k,_,v)}"value"in g&&r(f,"value",p.value,g.value,_)}},D=(f,p,g,v,_,y,k,A,E)=>{const w=p.el=f?f.el:a(""),W=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:U}=p;U&&(A=A?A.concat(U):U),f==null?(s(w,g,v),s(W,g,v),_e(p.children||[],g,W,_,y,k,A,E)):L>0&&L&64&&H&&f.dynamicChildren&&f.dynamicChildren.length===H.length?(Z(f.dynamicChildren,H,g,_,y,k,A),(p.key!=null||_&&p===_.subTree)&&Ti(f,p,!0)):te(f,p,g,W,_,y,k,A,E)},ee=(f,p,g,v,_,y,k,A,E)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?_.ctx.activate(p,g,v,k,E):ye(p,g,v,_,y,k,E):De(f,p,E)},ye=(f,p,g,v,_,y,k)=>{const A=f.component=Ha(f,v,_);if(ns(f)&&(A.ctx.renderer=B),Wa(A,!1,k),A.asyncDep){if(_&&_.registerDep(A,ge,k),!f.el){const E=A.subTree=X(Pe);O(null,E,p,g),f.placeholder=E.el}}else ge(A,f,p,g,_,y,k)},De=(f,p,g)=>{const v=p.component=f.component;if(_a(f,p,g))if(v.asyncDep&&!v.asyncResolved){ie(v,p,g);return}else v.next=p,v.update();else p.el=f.el,v.vnode=p},ge=(f,p,g,v,_,y,k)=>{const A=()=>{if(f.isMounted){let{next:L,bu:H,u:U,parent:z,vnode:ae}=f;{const tt=ki(f);if(tt){L&&(L.el=ae.el,ie(f,L,k)),tt.asyncDep.then(()=>{f.isUnmounted||A()});return}}let re=L,Oe;Lt(f,!1),L?(L.el=ae.el,ie(f,L,k)):L=ae,H&&us(H),(Oe=L.props&&L.props.onVnodeBeforeUpdate)&&st(Oe,z,L,ae),Lt(f,!0);const Ie=Io(f),et=f.subTree;f.subTree=Ie,C(et,Ie,d(et.el),x(et),f,_,y),L.el=Ie.el,re===null&&wa(f,Ie.el),U&&$e(U,_),(Oe=L.props&&L.props.onVnodeUpdated)&&$e(()=>st(Oe,z,L,ae),_)}else{let L;const{el:H,props:U}=p,{bm:z,m:ae,parent:re,root:Oe,type:Ie}=f,et=mn(p);Lt(f,!1),z&&us(z),!et&&(L=U&&U.onVnodeBeforeMount)&&st(L,re,p),Lt(f,!0);{Oe.ce&&Oe.ce._def.shadowRoot!==!1&&Oe.ce._injectChildStyle(Ie);const tt=f.subTree=Io(f);C(null,tt,g,v,f,_,y),p.el=tt.el}if(ae&&$e(ae,_),!et&&(L=U&&U.onVnodeMounted)){const tt=p;$e(()=>st(L,re,tt),_)}(p.shapeFlag&256||re&&mn(re.vnode)&&re.vnode.shapeFlag&256)&&f.a&&$e(f.a,_),f.isMounted=!0,p=g=v=null}};f.scope.on();const E=f.effect=new Rr(A);f.scope.off();const w=f.update=E.run.bind(E),W=f.job=E.runIfDirty.bind(E);W.i=f,W.id=f.uid,E.scheduler=()=>to(W),Lt(f,!0),w()},ie=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Sa(f,p.props,v,g),ka(f,p.children,g),ht(),So(f),mt()},te=(f,p,g,v,_,y,k,A,E=!1)=>{const w=f&&f.children,W=f?f.shapeFlag:0,L=p.children,{patchFlag:H,shapeFlag:U}=p;if(H>0){if(H&128){vt(w,L,g,v,_,y,k,A,E);return}else if(H&256){at(w,L,g,v,_,y,k,A,E);return}}U&8?(W&16&&He(w,_,y),L!==w&&c(g,L)):W&16?U&16?vt(w,L,g,v,_,y,k,A,E):He(w,_,y,!0):(W&8&&c(g,""),U&16&&_e(L,g,v,_,y,k,A,E))},at=(f,p,g,v,_,y,k,A,E)=>{f=f||Yt,p=p||Yt;const w=f.length,W=p.length,L=Math.min(w,W);let H;for(H=0;H<L;H++){const U=p[H]=E?St(p[H]):it(p[H]);C(f[H],U,g,null,_,y,k,A,E)}w>W?He(f,_,y,!0,!1,L):_e(p,g,v,_,y,k,A,E,L)},vt=(f,p,g,v,_,y,k,A,E)=>{let w=0;const W=p.length;let L=f.length-1,H=W-1;for(;w<=L&&w<=H;){const U=f[w],z=p[w]=E?St(p[w]):it(p[w]);if(Nt(U,z))C(U,z,g,null,_,y,k,A,E);else break;w++}for(;w<=L&&w<=H;){const U=f[L],z=p[H]=E?St(p[H]):it(p[H]);if(Nt(U,z))C(U,z,g,null,_,y,k,A,E);else break;L--,H--}if(w>L){if(w<=H){const U=H+1,z=U<W?p[U].el:v;for(;w<=H;)C(null,p[w]=E?St(p[w]):it(p[w]),g,z,_,y,k,A,E),w++}}else if(w>H)for(;w<=L;)Re(f[w],_,y,!0),w++;else{const U=w,z=w,ae=new Map;for(w=z;w<=H;w++){const Ne=p[w]=E?St(p[w]):it(p[w]);Ne.key!=null&&ae.set(Ne.key,w)}let re,Oe=0;const Ie=H-z+1;let et=!1,tt=0;const sn=new Array(Ie);for(w=0;w<Ie;w++)sn[w]=0;for(w=U;w<=L;w++){const Ne=f[w];if(Oe>=Ie){Re(Ne,_,y,!0);continue}let nt;if(Ne.key!=null)nt=ae.get(Ne.key);else for(re=z;re<=H;re++)if(sn[re-z]===0&&Nt(Ne,p[re])){nt=re;break}nt===void 0?Re(Ne,_,y,!0):(sn[nt-z]=w+1,nt>=tt?tt=nt:et=!0,C(Ne,p[nt],g,null,_,y,k,A,E),Oe++)}const vo=et?Ia(sn):Yt;for(re=vo.length-1,w=Ie-1;w>=0;w--){const Ne=z+w,nt=p[Ne],yo=p[Ne+1],xo=Ne+1<W?yo.el||Pi(yo):v;sn[w]===0?C(null,nt,g,xo,_,y,k,A,E):et&&(re<0||w!==vo[re]?Xe(nt,g,xo,2):re--)}}},Xe=(f,p,g,v,_=null)=>{const{el:y,type:k,transition:A,children:E,shapeFlag:w}=f;if(w&6){Xe(f.component.subTree,p,g,v);return}if(w&128){f.suspense.move(p,g,v);return}if(w&64){k.move(f,p,g,B);return}if(k===pe){s(y,p,g);for(let L=0;L<E.length;L++)Xe(E[L],p,g,v);s(f.anchor,p,g);return}if(k===Nn){T(f,p,g);return}if(v!==2&&w&1&&A)if(v===0)A.beforeEnter(y),s(y,p,g),$e(()=>A.enter(y),_);else{const{leave:L,delayLeave:H,afterLeave:U}=A,z=()=>{f.ctx.isUnmounted?o(y):s(y,p,g)},ae=()=>{y._isLeaving&&y[dt](!0),L(y,()=>{z(),U&&U()})};H?H(y,z,ae):ae()}else s(y,p,g)},Re=(f,p,g,v=!1,_=!1)=>{const{type:y,props:k,ref:A,children:E,dynamicChildren:w,shapeFlag:W,patchFlag:L,dirs:H,cacheIndex:U}=f;if(L===-2&&(_=!1),A!=null&&(ht(),hn(A,null,g,f,!0),mt()),U!=null&&(p.renderCache[U]=void 0),W&256){p.ctx.deactivate(f);return}const z=W&1&&H,ae=!mn(f);let re;if(ae&&(re=k&&k.onVnodeBeforeUnmount)&&st(re,p,f),W&6)Ot(f.component,g,v);else{if(W&128){f.suspense.unmount(g,v);return}z&&It(f,null,p,"beforeUnmount"),W&64?f.type.remove(f,p,g,B,v):w&&!w.hasOnce&&(y!==pe||L>0&&L&64)?He(w,p,g,!1,!0):(y===pe&&L&384||!_&&W&16)&&He(E,p,g),v&&Vt(f)}(ae&&(re=k&&k.onVnodeUnmounted)||z)&&$e(()=>{re&&st(re,p,f),z&&It(f,null,p,"unmounted")},g)},Vt=f=>{const{type:p,el:g,anchor:v,transition:_}=f;if(p===pe){Gt(g,v);return}if(p===Nn){I(f);return}const y=()=>{o(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:k,delayLeave:A}=_,E=()=>k(g,y);A?A(f.el,y,E):E()}else y()},Gt=(f,p)=>{let g;for(;f!==p;)g=h(f),o(f),f=g;o(p)},Ot=(f,p,g)=>{const{bum:v,scope:_,job:y,subTree:k,um:A,m:E,a:w}=f;Do(E),Do(w),v&&us(v),_.stop(),y&&(y.flags|=8,Re(k,f,p,g)),A&&$e(A,p),$e(()=>{f.isUnmounted=!0},p)},He=(f,p,g,v=!1,_=!1,y=0)=>{for(let k=y;k<f.length;k++)Re(f[k],p,g,v,_)},x=f=>{if(f.shapeFlag&6)return x(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=h(f.anchor||f.el),g=p&&p[Yl];return g?h(g):p};let N=!1;const R=(f,p,g)=>{let v;f==null?p._vnode&&(Re(p._vnode,null,null,!0),v=p._vnode.component):C(p._vnode||null,f,p,null,null,null,g),p._vnode=f,N||(N=!0,So(v),Jr(),N=!1)},B={p:C,um:Re,m:Xe,r:Vt,mt:ye,mc:_e,pc:te,pbc:Z,n:x,o:e};return{render:R,hydrate:void 0,createApp:ma(R)}}function bs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Lt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Oa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ti(e,t,n=!1){const s=e.children,o=t.children;if(j(s)&&j(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=St(o[r]),a.el=i.el),!n&&a.patchFlag!==-2&&Ti(i,a)),a.type===is&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=r+(e.type===pe?1:0)),a.type===Pe&&!a.el&&(a.el=i.el)}}function Ia(e){const t=e.slice(),n=[0];let s,o,r,i,a;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<u?r=a+1:i=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function ki(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ki(t)}function Do(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Pi(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Pi(t.subTree):null}const Ri=e=>e.__isSuspense;function La(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):Gl(e)}const pe=Symbol.for("v-fgt"),is=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),Nn=Symbol.for("v-stc"),bn=[];let Be=null;function M(e=!1){bn.push(Be=e?null:[])}function Ma(){bn.pop(),Be=bn[bn.length-1]||null}let Cn=1;function Vn(e,t=!1){Cn+=e,e<0&&Be&&t&&(Be.hasOnce=!0)}function Oi(e){return e.dynamicChildren=Cn>0?Be||Yt:null,Ma(),Cn>0&&Be&&Be.push(e),e}function $(e,t,n,s,o,r){return Oi(S(e,t,n,s,o,r,!0))}function Sn(e,t,n,s,o){return Oi(X(e,t,n,s,o,!0))}function Gn(e){return e?e.__v_isVNode===!0:!1}function Nt(e,t){return e.type===t.type&&e.key===t.key}const Ii=({key:e})=>e??null,$n=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||Se(e)||V(e)?{i:Ke,r:e,k:t,f:!!n}:e:null);function S(e,t=null,n=null,s=0,o=null,r=e===pe?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ii(t),ref:t&&$n(t),scopeId:Zr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ke};return a?(lo(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),Cn>0&&!i&&Be&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Be.push(l),l}const X=Da;function Da(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===pi)&&(e=Pe),Gn(e)){const a=Pt(e,t,!0);return n&&lo(a,n),Cn>0&&!r&&Be&&(a.shapeFlag&6?Be[Be.indexOf(e)]=a:Be.push(a)),a.patchFlag=-2,a}if(Ka(e)&&(e=e.__vccOpts),t){t=Na(t);let{class:a,style:l}=t;a&&!me(a)&&(t.class=jt(a)),fe(l)&&(eo(l)&&!j(l)&&(l=be({},l)),t.style=je(l))}const i=me(e)?1:Ri(e)?128:ti(e)?64:fe(e)?4:V(e)?2:0;return S(e,t,n,s,o,i,r,!0)}function Na(e){return e?eo(e)||_i(e)?be({},e):e:null}function Pt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:a,transition:l}=e,u=t?$a(o||{},t):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Ii(u),ref:t&&t.ref?n&&r?j(r)?r.concat($n(t)):[r,$n(t)]:$n(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&Ht(c,l.clone(c)),c}function Ge(e=" ",t=0){return X(is,null,e,t)}function io(e,t){const n=X(Nn,null,e);return n.staticCount=t,n}function Me(e="",t=!1){return t?(M(),Sn(Pe,null,e)):X(Pe,null,e)}function it(e){return e==null||typeof e=="boolean"?X(Pe):j(e)?X(pe,null,e.slice()):Gn(e)?St(e):X(is,null,String(e))}function St(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function lo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),lo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!_i(t)?t._ctx=Ke:o===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),s&64?(n=16,t=[Ge(t)]):n=8);e.children=t,e.shapeFlag|=n}function $a(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=jt([t.class,s.class]));else if(o==="style")t.style=je([t.style,s.style]);else if(Yn(o)){const r=t[o],i=s[o];i&&r!==i&&!(j(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function st(e,t,n,s=null){Je(e,t,7,[n,s])}const Fa=bi();let Ba=0;function Ha(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Fa,r={uid:Ba++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ml(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ci(s,o),emitsOptions:vi(s,o),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ba.bind(null,r),e.ce&&e.ce(r),r}let Ce=null;const ao=()=>Ce||Ke;let Kn,Ns;{const e=Xn(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};Kn=t("__VUE_INSTANCE_SETTERS__",n=>Ce=n),Ns=t("__VUE_SSR_SETTERS__",n=>En=n)}const Pn=e=>{const t=Ce;return Kn(e),e.scope.on(),()=>{e.scope.off(),Kn(t)}},No=()=>{Ce&&Ce.scope.off(),Kn(null)};function Li(e){return e.vnode.shapeFlag&4}let En=!1;function Wa(e,t=!1,n=!1){t&&Ns(t);const{props:s,children:o}=e.vnode,r=Li(e);Ca(e,s,r,t),Ta(e,o,n||t);const i=r?ja(e,t):void 0;return t&&Ns(!1),i}function ja(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,aa);const{setup:s}=n;if(s){ht();const o=e.setupContext=s.length>1?Va(e):null,r=Pn(e),i=kn(s,e,0,[e.props,o]),a=Cr(i);if(mt(),r(),(a||e.sp)&&!mn(e)&&ai(e),a){if(i.then(No,No),t)return i.then(l=>{$o(e,l)}).catch(l=>{ts(l,e,0)});e.asyncDep=i}else $o(e,i)}else Mi(e)}function $o(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Kr(t)),Mi(e)}function Mi(e,t,n){const s=e.type;e.render||(e.render=s.render||lt);{const o=Pn(e);ht();try{ca(e)}finally{mt(),o()}}}const Ua={get(e,t){return we(e,"get",""),e[t]}};function Va(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ua),slots:e.slots,emit:e.emit,expose:t}}function co(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Kr(Dl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gn)return gn[n](e)},has(t,n){return n in t||n in gn}})):e.proxy}function Ga(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function Ka(e){return V(e)&&"__vccOpts"in e}const de=(e,t)=>Hl(e,t,En);function uo(e,t,n){try{Vn(-1);const s=arguments.length;return s===2?fe(t)&&!j(t)?Gn(t)?X(e,null,[t]):X(e,t):X(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Gn(n)&&(n=[n]),X(e,t,n))}finally{Vn(1)}}const qa="3.5.27";let $s;const Fo=typeof window<"u"&&window.trustedTypes;if(Fo)try{$s=Fo.createPolicy("vue",{createHTML:e=>e})}catch{}const Di=$s?e=>$s.createHTML(e):e=>e,za="http://www.w3.org/2000/svg",Ya="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,Bo=ft&&ft.createElement("template"),Ja={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?ft.createElementNS(za,e):t==="mathml"?ft.createElementNS(Ya,e):n?ft.createElement(e,{is:n}):ft.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Bo.innerHTML=Di(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Bo.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},yt="transition",rn="animation",en=Symbol("_vtc"),Ni={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$i=be({},si,Ni),Qa=e=>(e.displayName="Transition",e.props=$i,e),fo=Qa((e,{slots:t})=>uo(Ql,Fi(e),t)),Mt=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ho=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function Fi(e){const t={};for(const D in e)D in Ni||(t[D]=e[D]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:u=i,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,b=Za(o),C=b&&b[0],F=b&&b[1],{onBeforeEnter:O,onEnter:P,onEnterCancelled:T,onLeave:I,onLeaveCancelled:G,onBeforeAppear:oe=O,onAppear:J=P,onAppearCancelled:_e=T}=t,K=(D,ee,ye,De)=>{D._enterCancelled=De,_t(D,ee?c:a),_t(D,ee?u:i),ye&&ye()},Z=(D,ee)=>{D._isLeaving=!1,_t(D,d),_t(D,m),_t(D,h),ee&&ee()},le=D=>(ee,ye)=>{const De=D?J:P,ge=()=>K(ee,D,ye);Mt(De,[ee,ge]),Wo(()=>{_t(ee,D?l:r),ot(ee,D?c:a),Ho(De)||jo(ee,s,C,ge)})};return be(t,{onBeforeEnter(D){Mt(O,[D]),ot(D,r),ot(D,i)},onBeforeAppear(D){Mt(oe,[D]),ot(D,l),ot(D,u)},onEnter:le(!1),onAppear:le(!0),onLeave(D,ee){D._isLeaving=!0;const ye=()=>Z(D,ee);ot(D,d),D._enterCancelled?(ot(D,h),Fs(D)):(Fs(D),ot(D,h)),Wo(()=>{D._isLeaving&&(_t(D,d),ot(D,m),Ho(I)||jo(D,s,F,ye))}),Mt(I,[D,ye])},onEnterCancelled(D){K(D,!1,void 0,!0),Mt(T,[D])},onAppearCancelled(D){K(D,!0,void 0,!0),Mt(_e,[D])},onLeaveCancelled(D){Z(D),Mt(G,[D])}})}function Za(e){if(e==null)return null;if(fe(e))return[vs(e.enter),vs(e.leave)];{const t=vs(e);return[t,t]}}function vs(e){return al(e)}function ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[en]||(e[en]=new Set)).add(t)}function _t(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[en];n&&(n.delete(t),n.size||(e[en]=void 0))}function Wo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Xa=0;function jo(e,t,n,s){const o=e._endId=++Xa,r=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:a,propCount:l}=Bi(e,t);if(!i)return s();const u=i+"end";let c=0;const d=()=>{e.removeEventListener(u,h),r()},h=m=>{m.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},a+1),e.addEventListener(u,h)}function Bi(e,t){const n=window.getComputedStyle(e),s=b=>(n[b]||"").split(", "),o=s(`${yt}Delay`),r=s(`${yt}Duration`),i=Uo(o,r),a=s(`${rn}Delay`),l=s(`${rn}Duration`),u=Uo(a,l);let c=null,d=0,h=0;t===yt?i>0&&(c=yt,d=i,h=r.length):t===rn?u>0&&(c=rn,d=u,h=l.length):(d=Math.max(i,u),c=d>0?i>u?yt:rn:null,h=c?c===yt?r.length:l.length:0);const m=c===yt&&/\b(?:transform|all)(?:,|$)/.test(s(`${yt}Property`).toString());return{type:c,timeout:d,propCount:h,hasTransform:m}}function Uo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Vo(n)+Vo(e[s])))}function Vo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Fs(e){return(e?e.ownerDocument:document).body.offsetHeight}function ec(e,t,n){const s=e[en];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Go=Symbol("_vod"),tc=Symbol("_vsh"),nc=Symbol(""),sc=/(?:^|;)\s*display\s*:/;function oc(e,t,n){const s=e.style,o=me(n);let r=!1;if(n&&!o){if(t)if(me(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Fn(s,a,"")}else for(const i in t)n[i]==null&&Fn(s,i,"");for(const i in n)i==="display"&&(r=!0),Fn(s,i,n[i])}else if(o){if(t!==n){const i=s[nc];i&&(n+=";"+i),s.cssText=n,r=sc.test(n)}}else t&&e.removeAttribute("style");Go in e&&(e[Go]=r?s.display:"",e[tc]&&(s.display="none"))}const Ko=/\s*!important$/;function Fn(e,t,n){if(j(n))n.forEach(s=>Fn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=rc(e,t);Ko.test(n)?e.setProperty(Wt(s),n.replace(Ko,""),"important"):e[s]=n}}const qo=["Webkit","Moz","ms"],ys={};function rc(e,t){const n=ys[t];if(n)return n;let s=Ve(t);if(s!=="filter"&&s in e)return ys[t]=s;s=Zn(s);for(let o=0;o<qo.length;o++){const r=qo[o]+s;if(r in e)return ys[t]=r}return t}const zo="http://www.w3.org/1999/xlink";function Yo(e,t,n,s,o,r=hl(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(zo,t.slice(6,t.length)):e.setAttributeNS(zo,t,n):n==null||r&&!Tr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Rt(n)?String(n):n)}function Jo(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Di(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Tr(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function ic(e,t,n,s){e.addEventListener(t,n,s)}function lc(e,t,n,s){e.removeEventListener(t,n,s)}const Qo=Symbol("_vei");function ac(e,t,n,s,o=null){const r=e[Qo]||(e[Qo]={}),i=r[t];if(s&&i)i.value=s;else{const[a,l]=cc(t);if(s){const u=r[t]=dc(s,o);ic(e,a,u,l)}else i&&(lc(e,a,i,l),r[t]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function cc(e){let t;if(Zo.test(e)){t={};let s;for(;s=e.match(Zo);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Wt(e.slice(2)),t]}let xs=0;const uc=Promise.resolve(),fc=()=>xs||(uc.then(()=>xs=0),xs=Date.now());function dc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Je(pc(s,n.value),t,5,[s])};return n.value=e,n.attached=fc(),n}function pc(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Xo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,hc=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?ec(e,s,i):t==="style"?oc(e,n,s):Yn(t)?Gs(t)||ac(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mc(e,t,s,i))?(Jo(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Yo(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!me(s))?Jo(e,Ve(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Yo(e,t,s,i))};function mc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Xo(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Xo(t)&&me(n)?!1:t in e}const Hi=new WeakMap,Wi=new WeakMap,qn=Symbol("_moveCb"),er=Symbol("_enterCb"),gc=e=>(delete e.props.mode,e),bc=gc({name:"TransitionGroup",props:be({},$i,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ao(),s=ni();let o,r;return ui(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!wc(o[0].el,n.vnode.el,i)){o=[];return}o.forEach(yc),o.forEach(xc);const a=o.filter(_c);Fs(n.vnode.el),a.forEach(l=>{const u=l.el,c=u.style;ot(u,i),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[qn]=h=>{h&&h.target!==u||(!h||h.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[qn]=null,_t(u,i))};u.addEventListener("transitionend",d)}),o=[]}),()=>{const i=Q(e),a=Fi(i);let l=i.tag||pe;if(o=[],r)for(let u=0;u<r.length;u++){const c=r[u];c.el&&c.el instanceof Element&&(o.push(c),Ht(c,wn(c,a,s,n)),Hi.set(c,{left:c.el.offsetLeft,top:c.el.offsetTop}))}r=t.default?no(t.default()):[];for(let u=0;u<r.length;u++){const c=r[u];c.key!=null&&Ht(c,wn(c,a,s,n))}return X(l,null,r)}}}),vc=bc;function yc(e){const t=e.el;t[qn]&&t[qn](),t[er]&&t[er]()}function xc(e){Wi.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function _c(e){const t=Hi.get(e),n=Wi.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",e}}function wc(e,t,n){const s=e.cloneNode(),o=e[en];o&&o.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=Bi(s);return r.removeChild(s),i}const Cc=["ctrl","shift","alt","meta"],Sc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Cc.some(n=>e[`${n}Key`]&&!t.includes(n))},Ec=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...r)=>{for(let i=0;i<t.length;i++){const a=Sc[t[i]];if(a&&a(o,t))return}return e(o,...r)}))},Ac=be({patchProp:hc},Ja);let tr;function Tc(){return tr||(tr=Pa(Ac))}const kc=((...e)=>{const t=Tc().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Rc(s);if(!o)return;const r=t._component;!V(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,Pc(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t});function Pc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Rc(e){return me(e)?document.querySelector(e):e}const zt=typeof document<"u";function ji(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Oc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ji(e.default)}const ne=Object.assign;function _s(e,t){const n={};for(const s in t){const o=t[s];n[s]=Ze(o)?o.map(e):e(o)}return n}const vn=()=>{},Ze=Array.isArray;function nr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const Ui=/#/g,Ic=/&/g,Lc=/\//g,Mc=/=/g,Dc=/\?/g,Vi=/\+/g,Nc=/%5B/g,$c=/%5D/g,Gi=/%5E/g,Fc=/%60/g,Ki=/%7B/g,Bc=/%7C/g,qi=/%7D/g,Hc=/%20/g;function po(e){return e==null?"":encodeURI(""+e).replace(Bc,"|").replace(Nc,"[").replace($c,"]")}function Wc(e){return po(e).replace(Ki,"{").replace(qi,"}").replace(Gi,"^")}function Bs(e){return po(e).replace(Vi,"%2B").replace(Hc,"+").replace(Ui,"%23").replace(Ic,"%26").replace(Fc,"`").replace(Ki,"{").replace(qi,"}").replace(Gi,"^")}function jc(e){return Bs(e).replace(Mc,"%3D")}function Uc(e){return po(e).replace(Ui,"%23").replace(Dc,"%3F")}function Vc(e){return Uc(e).replace(Lc,"%2F")}function An(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Gc=/\/$/,Kc=e=>e.replace(Gc,"");function ws(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(s=t.slice(0,l),r=t.slice(l,a>0?a:t.length),o=e(r.slice(1))),a>=0&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=Jc(s??t,n),{fullPath:s+r+i,path:s,query:o,hash:An(i)}}function qc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function sr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function zc(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&tn(t.matched[s],n.matched[o])&&zi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function zi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Yc(e[n],t[n]))return!1;return!0}function Yc(e,t){return Ze(e)?or(e,t):Ze(t)?or(t,e):e?.valueOf()===t?.valueOf()}function or(e,t){return Ze(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Jc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,a;for(i=0;i<s.length;i++)if(a=s[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Hs=(function(e){return e.pop="pop",e.push="push",e})({}),Cs=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Qc(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Kc(e)}const Zc=/^[^#]+#/;function Xc(e,t){return e.replace(Zc,"#")+t}function eu(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ls=()=>({left:window.scrollX,top:window.scrollY});function tu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=eu(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function rr(e,t){return(history.state?history.state.position-t:-1)+e}const Ws=new Map;function nu(e,t){Ws.set(e,t)}function su(e){const t=Ws.get(e);return Ws.delete(e),t}function ou(e){return typeof e=="string"||e&&typeof e=="object"}function Yi(e){return typeof e=="string"||typeof e=="symbol"}let he=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Ji=Symbol("");he.MATCHER_NOT_FOUND+"",he.NAVIGATION_GUARD_REDIRECT+"",he.NAVIGATION_ABORTED+"",he.NAVIGATION_CANCELLED+"",he.NAVIGATION_DUPLICATED+"";function nn(e,t){return ne(new Error,{type:e,[Ji]:!0},t)}function ut(e,t){return e instanceof Error&&Ji in e&&(t==null||!!(e.type&t))}const ru=["params","query","hash"];function iu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of ru)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function lu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(Vi," "),r=o.indexOf("="),i=An(r<0?o:o.slice(0,r)),a=r<0?null:An(o.slice(r+1));if(i in t){let l=t[i];Ze(l)||(l=t[i]=[l]),l.push(a)}else t[i]=a}return t}function ir(e){let t="";for(let n in e){const s=e[n];if(n=jc(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ze(s)?s.map(o=>o&&Bs(o)):[s&&Bs(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function au(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ze(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const cu=Symbol(""),lr=Symbol(""),as=Symbol(""),ho=Symbol(""),js=Symbol("");function ln(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Et(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const u=h=>{h===!1?l(nn(he.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?l(h):ou(h)?l(nn(he.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(i&&s.enterCallbacks[o]===i&&typeof h=="function"&&i.push(h),a())},c=r(()=>e.call(s&&s.instances[o],t,n,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(h=>l(h))})}function Ss(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(ji(l)){const u=(l.__vccOpts||l)[t];u&&r.push(Et(u,n,s,i,a,o))}else{let u=l();r.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=Oc(c)?c.default:c;i.mods[a]=c,i.components[a]=d;const h=(d.__vccOpts||d)[t];return h&&Et(h,n,s,i,a,o)()}))}}return r}function uu(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(u=>tn(u,a))?s.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(u=>tn(u,l))||o.push(l))}return[n,s,o]}let fu=()=>location.protocol+"//"+location.host;function Qi(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(i);return a[0]!=="/"&&(a="/"+a),sr(a,"")}return sr(n,e)+s+o}function du(e,t,n,s){let o=[],r=[],i=null;const a=({state:h})=>{const m=Qi(e,location),b=n.value,C=t.value;let F=0;if(h){if(n.value=m,t.value=h,i&&i===b){i=null;return}F=C?h.position-C.position:0}else s(m);o.forEach(O=>{O(n.value,b,{delta:F,type:Hs.pop,direction:F?F>0?Cs.forward:Cs.back:Cs.unknown})})};function l(){i=n.value}function u(h){o.push(h);const m=()=>{const b=o.indexOf(h);b>-1&&o.splice(b,1)};return r.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ne({},h.state,{scroll:ls()}),"")}}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function ar(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?ls():null}}function pu(e){const{history:t,location:n}=window,s={value:Qi(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,u,c){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:fu()+e+l;try{t[c?"replaceState":"pushState"](u,"",h),o.value=u}catch(m){console.error(m),n[c?"replace":"assign"](h)}}function i(l,u){r(l,ne({},t.state,ar(o.value.back,l,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=l}function a(l,u){const c=ne({},o.value,t.state,{forward:l,scroll:ls()});r(c.current,c,!0),r(l,ne({},ar(s.value,l,null),{position:c.position+1},u),!1),s.value=l}return{location:s,state:o,push:a,replace:i}}function hu(e){e=Qc(e);const t=pu(e),n=du(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=ne({location:"",base:e,go:s,createHref:Xc.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let $t=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ve=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ve||{});const mu={type:$t.Static,value:""},gu=/[a-zA-Z0-9_]/;function bu(e){if(!e)return[[]];if(e==="/")return[[mu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=ve.Static,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,l,u="",c="";function d(){u&&(n===ve.Static?r.push({type:$t.Static,value:u}):n===ve.Param||n===ve.ParamRegExp||n===ve.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:$t.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==ve.ParamRegExp){s=n,n=ve.EscapeNext;continue}switch(n){case ve.Static:l==="/"?(u&&d(),i()):l===":"?(d(),n=ve.Param):h();break;case ve.EscapeNext:h(),n=s;break;case ve.Param:l==="("?n=ve.ParamRegExp:gu.test(l)?h():(d(),n=ve.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case ve.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=ve.ParamRegExpEnd:c+=l;break;case ve.ParamRegExpEnd:d(),n=ve.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===ve.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),o}const cr="[^/]+?",vu={sensitive:!1,strict:!1,start:!0,end:!0};var Ae=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ae||{});const yu=/[.+*?^${}()[\]/\\]/g;function xu(e,t){const n=ne({},vu,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const c=u.length?[]:[Ae.Root];n.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const h=u[d];let m=Ae.Segment+(n.sensitive?Ae.BonusCaseSensitive:0);if(h.type===$t.Static)d||(o+="/"),o+=h.value.replace(yu,"\\$&"),m+=Ae.Static;else if(h.type===$t.Param){const{value:b,repeatable:C,optional:F,regexp:O}=h;r.push({name:b,repeatable:C,optional:F});const P=O||cr;if(P!==cr){m+=Ae.BonusCustomRegExp;try{`${P}`}catch(I){throw new Error(`Invalid custom RegExp for param "${b}" (${P}): `+I.message)}}let T=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(T=F&&u.length<2?`(?:/${T})`:"/"+T),F&&(T+="?"),o+=T,m+=Ae.Dynamic,F&&(m+=Ae.BonusOptional),C&&(m+=Ae.BonusRepeatable),P===".*"&&(m+=Ae.BonusWildcard)}c.push(m)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Ae.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const c=u.match(i),d={};if(!c)return null;for(let h=1;h<c.length;h++){const m=c[h]||"",b=r[h-1];d[b.name]=m&&b.repeatable?m.split("/"):m}return d}function l(u){let c="",d=!1;for(const h of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of h)if(m.type===$t.Static)c+=m.value;else if(m.type===$t.Param){const{value:b,repeatable:C,optional:F}=m,O=b in u?u[b]:"";if(Ze(O)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const P=Ze(O)?O.join("/"):O;if(!P)if(F)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${b}"`);c+=P}}return c||"/"}return{re:i,score:s,keys:r,parse:a,stringify:l}}function _u(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Ae.Static+Ae.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ae.Static+Ae.Segment?1:-1:0}function Zi(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=_u(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(ur(s))return 1;if(ur(o))return-1}return o.length-s.length}function ur(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const wu={strict:!1,end:!0,sensitive:!1};function Cu(e,t,n){const s=xu(bu(e.path),n),o=ne(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Su(e,t){const n=[],s=new Map;t=nr(wu,t);function o(d){return s.get(d)}function r(d,h,m){const b=!m,C=dr(d);C.aliasOf=m&&m.record;const F=nr(t,d),O=[C];if("alias"in d){const I=typeof d.alias=="string"?[d.alias]:d.alias;for(const G of I)O.push(dr(ne({},C,{components:m?m.record.components:C.components,path:G,aliasOf:m?m.record:C})))}let P,T;for(const I of O){const{path:G}=I;if(h&&G[0]!=="/"){const oe=h.record.path,J=oe[oe.length-1]==="/"?"":"/";I.path=h.record.path+(G&&J+G)}if(P=Cu(I,h,F),m?m.alias.push(P):(T=T||P,T!==P&&T.alias.push(P),b&&d.name&&!pr(P)&&i(d.name)),Xi(P)&&l(P),C.children){const oe=C.children;for(let J=0;J<oe.length;J++)r(oe[J],P,m&&m.children[J])}m=m||P}return T?()=>{i(T)}:vn}function i(d){if(Yi(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return n}function l(d){const h=Tu(d,n);n.splice(h,0,d),d.record.name&&!pr(d)&&s.set(d.record.name,d)}function u(d,h){let m,b={},C,F;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw nn(he.MATCHER_NOT_FOUND,{location:d});F=m.record.name,b=ne(fr(h.params,m.keys.filter(T=>!T.optional).concat(m.parent?m.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&fr(d.params,m.keys.map(T=>T.name))),C=m.stringify(b)}else if(d.path!=null)C=d.path,m=n.find(T=>T.re.test(C)),m&&(b=m.parse(C),F=m.record.name);else{if(m=h.name?s.get(h.name):n.find(T=>T.re.test(h.path)),!m)throw nn(he.MATCHER_NOT_FOUND,{location:d,currentLocation:h});F=m.record.name,b=ne({},h.params,d.params),C=m.stringify(b)}const O=[];let P=m;for(;P;)O.unshift(P.record),P=P.parent;return{name:F,path:C,params:b,matched:O,meta:Au(O)}}e.forEach(d=>r(d));function c(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:i,clearRoutes:c,getRoutes:a,getRecordMatcher:o}}function fr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function dr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Eu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Eu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function pr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Au(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function Tu(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;Zi(e,t[r])<0?s=r:n=r+1}const o=ku(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function ku(e){let t=e;for(;t=t.parent;)if(Xi(t)&&Zi(e,t)===0)return t}function Xi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function hr(e){const t=ze(as),n=ze(ho),s=de(()=>{const l=Fe(e.to);return t.resolve(l)}),o=de(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],d=n.matched;if(!c||!d.length)return-1;const h=d.findIndex(tn.bind(null,c));if(h>-1)return h;const m=mr(l[u-2]);return u>1&&mr(c)===m&&d[d.length-1].path!==m?d.findIndex(tn.bind(null,l[u-2])):h}),r=de(()=>o.value>-1&&Lu(n.params,s.value.params)),i=de(()=>o.value>-1&&o.value===n.matched.length-1&&zi(n.params,s.value.params));function a(l={}){if(Iu(l)){const u=t[Fe(e.replace)?"replace":"push"](Fe(e.to)).catch(vn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:de(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}function Pu(e){return e.length===1?e[0]:e}const Ru=li({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:hr,setup(e,{slots:t}){const n=Tn(hr(e)),{options:s}=ze(as),o=de(()=>({[gr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[gr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&Pu(t.default(n));return e.custom?r:uo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Ou=Ru;function Iu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Lu(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Ze(o)||o.length!==s.length||s.some((r,i)=>r.valueOf()!==o[i].valueOf()))return!1}return!0}function mr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const gr=(e,t,n)=>e??t??n,Mu=li({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=ze(js),o=de(()=>e.route||s.value),r=ze(lr,0),i=de(()=>{let u=Fe(r);const{matched:c}=o.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),a=de(()=>o.value.matched[i.value]);Dn(lr,de(()=>i.value+1)),Dn(cu,a),Dn(js,o);const l=ke();return pn(()=>[l.value,a.value,e.name],([u,c,d],[h,m,b])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!tn(c,m)||!h)&&(c.enterCallbacks[d]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=o.value,c=e.name,d=a.value,h=d&&d.components[c];if(!h)return br(n.default,{Component:h,route:u});const m=d.props[c],b=m?m===!0?u.params:typeof m=="function"?m(u):m:null,F=uo(h,ne({},b,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return br(n.default,{Component:F,route:u})||F}}});function br(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Du=Mu;function Nu(e){const t=Su(e.routes,e),n=e.parseQuery||lu,s=e.stringifyQuery||ir,o=e.history,r=ln(),i=ln(),a=ln(),l=Nl(xt);let u=xt;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=_s.bind(null,x=>""+x),d=_s.bind(null,Vc),h=_s.bind(null,An);function m(x,N){let R,B;return Yi(x)?(R=t.getRecordMatcher(x),B=N):B=x,t.addRoute(B,R)}function b(x){const N=t.getRecordMatcher(x);N&&t.removeRoute(N)}function C(){return t.getRoutes().map(x=>x.record)}function F(x){return!!t.getRecordMatcher(x)}function O(x,N){if(N=ne({},N||l.value),typeof x=="string"){const g=ws(n,x,N.path),v=t.resolve({path:g.path},N),_=o.createHref(g.fullPath);return ne(g,v,{params:h(v.params),hash:An(g.hash),redirectedFrom:void 0,href:_})}let R;if(x.path!=null)R=ne({},x,{path:ws(n,x.path,N.path).path});else{const g=ne({},x.params);for(const v in g)g[v]==null&&delete g[v];R=ne({},x,{params:d(g)}),N.params=d(N.params)}const B=t.resolve(R,N),q=x.hash||"";B.params=c(h(B.params));const f=qc(s,ne({},x,{hash:Wc(q),path:B.path})),p=o.createHref(f);return ne({fullPath:f,hash:q,query:s===ir?au(x.query):x.query||{}},B,{redirectedFrom:void 0,href:p})}function P(x){return typeof x=="string"?ws(n,x,l.value.path):ne({},x)}function T(x,N){if(u!==x)return nn(he.NAVIGATION_CANCELLED,{from:N,to:x})}function I(x){return J(x)}function G(x){return I(ne(P(x),{replace:!0}))}function oe(x,N){const R=x.matched[x.matched.length-1];if(R&&R.redirect){const{redirect:B}=R;let q=typeof B=="function"?B(x,N):B;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=P(q):{path:q},q.params={}),ne({query:x.query,hash:x.hash,params:q.path!=null?{}:x.params},q)}}function J(x,N){const R=u=O(x),B=l.value,q=x.state,f=x.force,p=x.replace===!0,g=oe(R,B);if(g)return J(ne(P(g),{state:typeof g=="object"?ne({},q,g.state):q,force:f,replace:p}),N||R);const v=R;v.redirectedFrom=N;let _;return!f&&zc(s,B,R)&&(_=nn(he.NAVIGATION_DUPLICATED,{to:v,from:B}),Xe(B,B,!0,!1)),(_?Promise.resolve(_):Z(v,B)).catch(y=>ut(y)?ut(y,he.NAVIGATION_GUARD_REDIRECT)?y:vt(y):te(y,v,B)).then(y=>{if(y){if(ut(y,he.NAVIGATION_GUARD_REDIRECT))return J(ne({replace:p},P(y.to),{state:typeof y.to=="object"?ne({},q,y.to.state):q,force:f}),N||v)}else y=D(v,B,!0,p,q);return le(v,B,y),y})}function _e(x,N){const R=T(x,N);return R?Promise.reject(R):Promise.resolve()}function K(x){const N=Gt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(x):x()}function Z(x,N){let R;const[B,q,f]=uu(x,N);R=Ss(B.reverse(),"beforeRouteLeave",x,N);for(const g of B)g.leaveGuards.forEach(v=>{R.push(Et(v,x,N))});const p=_e.bind(null,x,N);return R.push(p),He(R).then(()=>{R=[];for(const g of r.list())R.push(Et(g,x,N));return R.push(p),He(R)}).then(()=>{R=Ss(q,"beforeRouteUpdate",x,N);for(const g of q)g.updateGuards.forEach(v=>{R.push(Et(v,x,N))});return R.push(p),He(R)}).then(()=>{R=[];for(const g of f)if(g.beforeEnter)if(Ze(g.beforeEnter))for(const v of g.beforeEnter)R.push(Et(v,x,N));else R.push(Et(g.beforeEnter,x,N));return R.push(p),He(R)}).then(()=>(x.matched.forEach(g=>g.enterCallbacks={}),R=Ss(f,"beforeRouteEnter",x,N,K),R.push(p),He(R))).then(()=>{R=[];for(const g of i.list())R.push(Et(g,x,N));return R.push(p),He(R)}).catch(g=>ut(g,he.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function le(x,N,R){a.list().forEach(B=>K(()=>B(x,N,R)))}function D(x,N,R,B,q){const f=T(x,N);if(f)return f;const p=N===xt,g=zt?history.state:{};R&&(B||p?o.replace(x.fullPath,ne({scroll:p&&g&&g.scroll},q)):o.push(x.fullPath,q)),l.value=x,Xe(x,N,R,p),vt()}let ee;function ye(){ee||(ee=o.listen((x,N,R)=>{if(!Ot.listening)return;const B=O(x),q=oe(B,Ot.currentRoute.value);if(q){J(ne(q,{replace:!0,force:!0}),B).catch(vn);return}u=B;const f=l.value;zt&&nu(rr(f.fullPath,R.delta),ls()),Z(B,f).catch(p=>ut(p,he.NAVIGATION_ABORTED|he.NAVIGATION_CANCELLED)?p:ut(p,he.NAVIGATION_GUARD_REDIRECT)?(J(ne(P(p.to),{force:!0}),B).then(g=>{ut(g,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&!R.delta&&R.type===Hs.pop&&o.go(-1,!1)}).catch(vn),Promise.reject()):(R.delta&&o.go(-R.delta,!1),te(p,B,f))).then(p=>{p=p||D(B,f,!1),p&&(R.delta&&!ut(p,he.NAVIGATION_CANCELLED)?o.go(-R.delta,!1):R.type===Hs.pop&&ut(p,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),le(B,f,p)}).catch(vn)}))}let De=ln(),ge=ln(),ie;function te(x,N,R){vt(x);const B=ge.list();return B.length?B.forEach(q=>q(x,N,R)):console.error(x),Promise.reject(x)}function at(){return ie&&l.value!==xt?Promise.resolve():new Promise((x,N)=>{De.add([x,N])})}function vt(x){return ie||(ie=!x,ye(),De.list().forEach(([N,R])=>x?R(x):N()),De.reset()),x}function Xe(x,N,R,B){const{scrollBehavior:q}=e;if(!zt||!q)return Promise.resolve();const f=!R&&su(rr(x.fullPath,0))||(B||!R)&&history.state&&history.state.scroll||null;return zr().then(()=>q(x,N,f)).then(p=>p&&tu(p)).catch(p=>te(p,x,N))}const Re=x=>o.go(x);let Vt;const Gt=new Set,Ot={currentRoute:l,listening:!0,addRoute:m,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:C,resolve:O,options:e,push:I,replace:G,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:ge.add,isReady:at,install(x){x.component("RouterLink",Ou),x.component("RouterView",Du),x.config.globalProperties.$router=Ot,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Fe(l)}),zt&&!Vt&&l.value===xt&&(Vt=!0,I(o.location).catch(B=>{}));const N={};for(const B in xt)Object.defineProperty(N,B,{get:()=>l.value[B],enumerable:!0});x.provide(as,Ot),x.provide(ho,Vr(N)),x.provide(js,l);const R=x.unmount;Gt.add(x),x.unmount=function(){Gt.delete(x),Gt.size<1&&(u=xt,ee&&ee(),ee=null,l.value=xt,Vt=!1,ie=!1),R()}}};function He(x){return x.reduce((N,R)=>N.then(()=>K(R)),Promise.resolve())}return Ot}function mo(){return ze(as)}function el(e){return ze(ho)}const $u={__name:"App",setup(e){const t=mo(),n=ke(!0);return t.isReady().then(()=>{setTimeout(()=>{n.value=!1},100)}),(s,o)=>{const r=so("router-view");return M(),Sn(r,null,{default:kt(({Component:i,route:a})=>[X(fo,{name:n.value?"":"page",mode:"out-in"},{default:kt(()=>[(M(),Sn(la(i),{key:a.path}))]),_:2},1032,["name"])]),_:1})}}},xe=Tn({discordUser:null,spotify:null,discordStatus:"offline",discordStatusColor:"text-catppuccin-subtle",editorActivity:null,isConnected:!1,isLoading:!0});class Fu{constructor(){this.ws=null,this.heartbeat=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.maxAttempts=5,this.userId="766897363050037248",this.isConnecting=!1}connect(){if(!(this.isConnecting||this.ws&&this.ws.readyState===WebSocket.OPEN)){this.isConnecting=!0,xe.isLoading=!0;try{this.ws=new WebSocket("wss://api.lanyard.rest/socket"),this.ws.onopen=()=>{this.isConnecting=!1,this.reconnectAttempts=0,xe.isConnected=!0,this.ws.send(JSON.stringify({op:2,d:{subscribe_to_id:this.userId}}))},this.ws.onmessage=t=>{try{this.handleMessage(JSON.parse(t.data))}catch{}},this.ws.onclose=t=>{this.isConnecting=!1,xe.isConnected=!1,this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),t.code!==1e3&&this.reconnectAttempts<this.maxAttempts&&this.scheduleReconnect()},this.ws.onerror=()=>{this.isConnecting=!1,xe.isConnected=!1}}catch{this.isConnecting=!1,xe.isLoading=!1,this.scheduleReconnect()}}}handleMessage(t){t.op===1?this.startHeartbeat(t.d.heartbeat_interval):t.op===0&&(t.t==="INIT_STATE"||t.t==="PRESENCE_UPDATE")&&(this.updatePresence(t.d),xe.isLoading=!1)}updatePresence(t){t.discord_user&&(xe.discordUser={username:t.discord_user.username,discriminator:t.discord_user.discriminator,avatar:t.discord_user.avatar,id:t.discord_user.id}),xe.spotify=t.spotify?{song:t.spotify.song,artist:t.spotify.artist,track_id:t.spotify.track_id}:null,t.discord_status&&(xe.discordStatus=t.discord_status,xe.discordStatusColor=t.discord_status==="online"?"text-catppuccin-gold":"text-catppuccin-subtle"),xe.editorActivity=t.activities?.find(n=>n.name==="Visual Studio Code"||n.name==="Code"||n.name==="Zed")}startHeartbeat(t){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({op:3}))},t)}scheduleReconnect(){this.reconnectTimeout&&clearTimeout(this.reconnectTimeout),this.reconnectAttempts++;const t=Math.min(1e3*Math.pow(2,this.reconnectAttempts-1),3e4);this.reconnectTimeout=setTimeout(()=>this.connect(),t)}disconnect(){this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),this.ws&&(this.ws.close(1e3,"Manual disconnect"),this.ws=null),xe.isConnected=!1}}const Bu=new Fu;Bu.connect();const vr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",white:"#cdd6f4"},Hu=[{id:"blog",label:"blog",href:"/blog",external:!1,accentColor:"mauve"},{id:"github",label:"github",href:"https://github.com/Hecker-01",external:!0,accentColor:"white"}];function Wu(){return Hu.map(e=>({...e,accentColor:vr[e.accentColor]||vr.mauve}))}const Rn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},ju={class:"mb-6"},Uu={class:"mb-6"},Vu={class:"flex items-center flex-wrap gap-4 text-sm mt-4"},Gu=["href"],Ku={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},qu={class:"space-y-1 text-sm"},zu={key:0,class:"flex items-center gap-2"},Yu={class:"text-catppuccin-text"},Ju={key:1,class:"flex items-center gap-2"},Qu={class:"text-catppuccin-text truncate"},Zu={key:2,class:"flex items-center gap-2"},Xu={class:"text-catppuccin-blue"},ef={class:"text-catppuccin-text truncate"},tf={key:0},nf={key:1,class:"text-catppuccin-subtle"},sf={key:2},of={__name:"HeroSection",setup(e){const t=Wu(),n=de(()=>xe.discordStatusColor),s=de(()=>xe.spotify),o=de(()=>xe.discordStatus),r=de(()=>xe.discordUser),i=de(()=>xe.editorActivity),a=de(()=>xe.isLoading),l=de(()=>{if(!i.value)return null;if(i.value.details&&i.value.details.toLowerCase().includes("idling"))return"idling";const u=i.value.name,c=u==="Zed",m=u==="IntelliJ IDEA Ultimate"||u==="IntelliJ IDEA"||u==="Android Studio";let b="",C="";return m?(b=i.value.details||"",C=i.value.state||""):c?(b=i.value.state||"",C=i.value.details||""):(b=i.value.details||"",C=i.value.state||""),b=b.replace(/editing /i,"").replace(/working on /i,"").trim(),C=C.replace(/in /i,"").replace(/workspace: /i,"").trim(),{name:u,workspace:C,filename:b}});return(u,c)=>{const d=so("router-link");return M(),$("div",ju,[S("div",Uu,[c[2]||(c[2]=io('<div class="text-catppuccin-subtle text-sm mb-2" data-v-cad1da7a>~$ whoami</div><h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2" data-v-cad1da7a><span class="text-catppuccin-mauve" data-v-cad1da7a>jesse</span><span class="text-catppuccin-subtle" data-v-cad1da7a>@</span><span class="text-catppuccin-blue" data-v-cad1da7a>heckr.dev</span></h1><div class="text-sm text-catppuccin-gray 6" data-v-cad1da7a><span class="text-catppuccin-subtle" data-v-cad1da7a>aka </span><span class="text-catppuccin-green" data-v-cad1da7a>Hecker_01</span></div>',3)),S("div",Vu,[(M(!0),$(pe,null,Qe(Fe(t),h=>(M(),$(pe,{key:h.id},[h.external?(M(),$("a",{key:1,href:h.href,target:"_blank",class:"text-catppuccin-subtle transition-colors flex items-center gap-1 group",style:je({"--accent":h.accentColor})},[c[1]||(c[1]=Ge(" [",-1)),S("span",{class:"transition-colors",style:je({color:h.accentColor})},"cd ",4),Ge("~/"+Y(h.label)+"] ",1)],12,Gu)):(M(),Sn(d,{key:0,to:h.href,class:"text-catppuccin-subtle transition-colors flex items-center gap-1 group",style:je({"--accent":h.accentColor})},{default:kt(()=>[c[0]||(c[0]=Ge(" [",-1)),S("span",{class:"transition-colors",style:je({color:h.accentColor})},"cd ",4),Ge("~/"+Y(h.label)+"] ",1)]),_:2},1032,["to","style"]))],64))),128))])]),c[9]||(c[9]=S("div",{class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},[S("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cat about.txt"),S("p",{class:"text-catppuccin-text leading-relaxed mb-4"},[Ge(" Hi! I'm HeckerDev, I code things for Minecraft, Discord, random CLI tools, websites, and recently I've been very invested in Android development."),S("br"),Ge(" I have experience in a lot of different programming languages and frameworks, and I love learning new ones! ")])],-1)),S("div",Ku,[c[8]||(c[8]=S("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ ps aux | grep hecker ",-1)),S("div",qu,[!a.value&&r.value?(M(),$("div",zu,[c[3]||(c[3]=S("span",{class:"text-catppuccin-blue"},"discord",-1)),c[4]||(c[4]=S("span",{class:"text-catppuccin-subtle"},":",-1)),S("span",Yu,Y(r.value.username),1),S("span",{class:jt(n.value)},"["+Y(o.value)+"]",3)])):Me("",!0),!a.value&&s.value?(M(),$("div",Ju,[c[5]||(c[5]=S("span",{class:"text-catppuccin-green"},"spotify",-1)),c[6]||(c[6]=S("span",{class:"text-catppuccin-subtle"},":",-1)),S("span",Qu,Y(s.value.song)+" - "+Y(s.value.artist),1)])):Me("",!0),!a.value&&i.value&&l.value&&(l.value.workspace||l.value.filename)?(M(),$("div",Zu,[S("span",Xu,Y(l.value.name==="Zed"?"zed":l.value.name==="IntelliJ IDEA Ultimate"||l.value.name==="IntelliJ IDEA"?"intellij":l.value.name==="Android Studio"?"android-studio":"vscode"),1),c[7]||(c[7]=S("span",{class:"text-catppuccin-subtle"},":",-1)),S("span",ef,[l.value.workspace?(M(),$("span",tf,Y(l.value.workspace.toLowerCase()),1)):Me("",!0),l.value.workspace&&l.value.filename?(M(),$("span",nf," / ")):Me("",!0),l.value.filename?(M(),$("span",sf,Y(l.value.filename.toLowerCase()),1)):Me("",!0)])])):Me("",!0)])])])}}},rf=Rn(of,[["__scopeId","data-v-cad1da7a"]]),lf={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},af={key:0,class:"text-sm text-catppuccin-subtle"},cf={key:1,class:"text-sm text-catppuccin-text"},uf={key:0,class:"text-catppuccin-subtle"},ff={key:2,class:"text-sm text-catppuccin-subtle"},df={__name:"LanguagesList",props:{languages:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){return(t,n)=>(M(),$("div",lf,[n[0]||(n[0]=S("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls ~/tools",-1)),e.loading?(M(),$("div",af," loading languages... ")):e.languages.length?(M(),$("div",cf,[(M(!0),$(pe,null,Qe(e.languages,(s,o)=>(M(),$("span",{key:s.language},[Ge(Y(s.language)+"("+Y(s.count)+")",1),o<e.languages.length-1?(M(),$("span",uf," | ")):Me("",!0)]))),128))])):(M(),$("div",ff,"no languages found"))]))}},pf={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},hf={class:"lg:flex-1 flex flex-col"},mf={key:0,class:"space-y-2"},gf={key:1,class:"text-sm text-catppuccin-subtle"},bf=["href"],vf={class:"flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2"},yf={class:"flex-1 min-w-0"},xf={class:"flex items-center gap-2"},_f=["title"],wf={key:0,class:"text-catppuccin-yellow text-xs flex-shrink-0"},Cf=["title"],Sf={key:3,class:"text-sm text-catppuccin-subtle"},Ef={__name:"ProjectsList",props:{repos:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){const t=e,n=de(()=>t.repos.length?[...t.repos].sort((s,o)=>o.stargazers_count-s.stargazers_count).slice(0,6):[]);return(s,o)=>(M(),$("div",pf,[o[2]||(o[2]=S("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ ls ~/projects",-1)),S("div",hf,[e.loading?(M(),$("div",mf,[(M(),$(pe,null,Qe(6,r=>S("div",{key:`repo-loading-${r}`,class:"rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3"},[...o[0]||(o[0]=[io('<div class="flex items-start gap-3" data-v-2b9b643c><span class="text-catppuccin-subtle" data-v-2b9b643c>&gt;</span><div class="flex-1 min-w-0" data-v-2b9b643c><div class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink" data-v-2b9b643c></div><div class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink" data-v-2b9b643c></div></div></div>',1)])])),64))])):e.repos.length?n.value.length?(M(),Sn(vc,{key:2,name:"list",tag:"div",class:"space-y-2"},{default:kt(()=>[(M(!0),$(pe,null,Qe(n.value,(r,i)=>(M(),$("a",{key:r.id,href:r.html_url,target:"_blank",style:je({transitionDelay:`${i*50}ms`}),class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors"},[S("div",vf,[o[1]||(o[1]=S("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors"},">",-1)),S("div",yf,[S("div",xf,[S("span",{class:"text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate",title:r.name},Y(r.name),9,_f),r.stargazers_count>0?(M(),$("span",wf," ★"+Y(r.stargazers_count),1)):Me("",!0)]),S("p",{class:"text-xs text-catppuccin-gray truncate",title:r.description},Y(r.description||"no description"),9,Cf)])])],12,bf))),128))]),_:1})):(M(),$("div",Sf," no repositories found ")):(M(),$("div",gf," no projects found "))])]))}},Af=Rn(Ef,[["__scopeId","data-v-2b9b643c"]]),yr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",maroon:"#eba0ac",flamingo:"#f2cdcd"},Tf=[{id:1,name:"This Portfolio Website",description:"Built with Vue.js and Tailwind CSS, showcasing my projects and skills.",link:"https://github.com/hecker-01/website",screenshot:"/screenshot.png",accentColor:"lavender"},{id:2,name:"satisSuite",description:"A comprehensive plugin suite designed to streamline moderation, enhance player experience, and give you complete control over your server.",link:"https://satissuite.heckr.dev",screenshot:"/screenshot-satissuite.png",accentColor:"mauve"},{id:3,name:"Main Website",description:"My (old) website built with SvelteKit and Tailwind CSS, featuring project showcases.",link:"https://heckerdev.net",screenshot:"/screenshot-heckerdev.png",accentColor:"mauve"}];function kf(){return Tf.map(e=>({...e,accentColor:yr[e.accentColor]||yr.mauve}))}const Pf={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},Rf={key:0,class:"text-sm text-catppuccin-subtle"},Of={class:"lg:flex-1 lg:relative"},If=["href"],Lf={key:0,class:"w-full flex-1 overflow-hidden bg-catppuccin-surface/30"},Mf=["src","alt"],Df={class:"px-3 py-3 flex-shrink-0"},Nf={class:"flex items-start gap-3"},$f={class:"flex-1 min-w-0"},Ff={class:"text-xs text-catppuccin-gray leading-relaxed"},Bf={key:0,class:"flex justify-center gap-1.5 mt-3 flex-shrink-0"},Hf=["onClick"],Wf={__name:"ShowcaseCarousel",setup(e){const t=ke([]),n=ke(0),s=ke(!1);let o=null;const r=de(()=>t.value.length?t.value[n.value]:null);return Ut(()=>{t.value=kf(),t.value.length>1&&(o=setInterval(()=>{s.value||(n.value=(n.value+1)%t.value.length)},1e4))}),os(()=>{o&&clearInterval(o)}),(i,a)=>(M(),$("div",Pf,[a[2]||(a[2]=S("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ cat ~/showcase",-1)),t.value.length?(M(),$("div",{key:1,class:"relative lg:flex-1 flex flex-col",onMouseenter:a[0]||(a[0]=l=>s.value=!0),onMouseleave:a[1]||(a[1]=l=>s.value=!1)},[S("div",Of,[X(fo,{name:"showcase",mode:"out-in"},{default:kt(()=>[r.value?(M(),$("a",{key:r.value.id,href:r.value.link,target:"_blank",class:"group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col",style:je({borderColor:`${r.value.accentColor}40`})},[r.value.screenshot?(M(),$("div",Lf,[S("img",{src:r.value.screenshot,alt:r.value.name,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,Mf)])):Me("",!0),S("div",Df,[S("div",Nf,[S("span",{class:"transition-colors",style:je({color:r.value.accentColor})},">",4),S("div",$f,[S("h3",{class:"text-sm font-medium text-catppuccin-text transition-colors mb-1",style:je({color:r.value.accentColor})},Y(r.value.name),5),S("p",Ff,Y(r.value.description),1)])])])],12,If)):Me("",!0)]),_:1})]),t.value.length>1?(M(),$("div",Bf,[(M(!0),$(pe,null,Qe(t.value,(l,u)=>(M(),$("button",{key:`dot-${l.id}`,onClick:c=>n.value=u,class:jt(["w-2 h-2.5 rounded-full transition-all",u===n.value?"bg-catppuccin-mauve w-4":"bg-catppuccin-surface/60 hover:bg-catppuccin-surface"]),style:je(u===n.value?{backgroundColor:r.value.accentColor}:{})},null,14,Hf))),128))])):Me("",!0)],32)):(M(),$("div",Rf," no items to showcase "))]))}},jf=Rn(Wf,[["__scopeId","data-v-89780803"]]),go="hecker-01",tl=async()=>{try{const e=[];let t=1;const n=100;for(;;){const r=await fetch(`https://api.github.com/users/${go}/repos?per_page=${n}&page=${t}`);if(!r.ok)break;const i=await r.json();if(!i.length||(e.push(...i),i.length<n))break;t++}const s={};e.forEach(r=>{r.language&&(s[r.language]=(s[r.language]||0)+1)});const o=Object.entries(s).sort((r,i)=>i[1]-r[1]).map(([r,i])=>({language:r,count:i}));return{repos:e,languages:o,totalRepos:e.length}}catch(e){return console.error("Error fetching GitHub data:",e),{repos:[],languages:[],totalRepos:0}}},Uf=async()=>{const t=new Date;t.getFullYear();try{const n=await fetch(`https://github-contributions-api.jogruber.de/v4/${go}?y=last`);if(!n.ok)throw new Error("Failed to fetch contribution data");const s=await n.json(),o=[];if(s.contributions&&s.contributions.forEach(r=>{o.push({date:r.date,count:r.count})}),o.length>0){const i=new Date(t);i.setDate(i.getDate()-371+1);const a=[];for(let l=0;l<371;l++){const u=new Date(i);u.setDate(u.getDate()+l);const c=u.toISOString().split("T")[0],d=o.find(h=>h.date===c);a.push({date:c,count:d?d.count:0})}return a}throw new Error("No contributions data available")}catch(n){console.error("Error fetching contribution data:",n);const s=new Map;for(let o=370;o>=0;o--){const r=new Date(t);r.setDate(r.getDate()-o);const i=r.toISOString().split("T")[0];s.set(i,0)}return Array.from(s.entries()).sort((o,r)=>o[0].localeCompare(r[0])).map(([o,r])=>({date:o,count:r}))}},Es=e=>e===0?0:e<=2?1:e<=5?2:e<=8?3:4,Vf=e=>`https://github.com/${go}?tab=overview&from=${e}&to=${e}`,Gf={class:"mt-6 border-l-2 border-catppuccin-surface pl-4"},Kf={class:"flex items-center justify-between mb-3"},qf={key:0,class:"flex items-center gap-1 text-[10px] text-catppuccin-subtle"},zf={key:0},Yf={key:1},Jf={class:"overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-thin"},Qf={class:"inline-flex md:flex gap-[3px] md:gap-1",style:{"min-width":"max-content"}},Zf=["href","title"],Xf=["title"],ed={class:"text-xs text-catppuccin-gray mt-2"},td={__name:"ContributionGraph",setup(e){const t=ke([]),n=ke(!0),s=de(()=>{const i=[];for(let a=0;a<t.value.length;a+=7)i.push(t.value.slice(a,a+7));return i}),o=de(()=>t.value.reduce((i,a)=>i+a.count,0)),r=async()=>{try{n.value=!0,t.value=await Uf()}catch{}finally{n.value=!1}};return Ut(()=>{r()}),(i,a)=>(M(),$("div",Gf,[S("div",Kf,[a[1]||(a[1]=S("div",{class:"text-catppuccin-subtle text-sm"},' ~$ git log --oneline --since="1.year.ago" | wc -l ',-1)),n.value?Me("",!0):(M(),$("div",qf,[...a[0]||(a[0]=[io('<span>less</span><div class="flex gap-[1px]"><div class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green"></div></div><span>more</span>',3)])]))]),n.value?(M(),$("div",zf,[...a[2]||(a[2]=[S("div",{class:"h-[60px] bg-catppuccin-surface/30 rounded cursor-blink"},null,-1)])])):(M(),$("div",Yf,[S("div",Jf,[S("div",Qf,[(M(!0),$(pe,null,Qe(s.value,(l,u)=>(M(),$("div",{key:u,class:"flex flex-col gap-[3px] md:gap-1 md:flex-1"},[(M(!0),$(pe,null,Qe(l,(c,d)=>(M(),$(pe,{key:d},[c.count>0?(M(),$("a",{key:0,href:Fe(Vf)(c.date),target:"_blank",rel:"noopener noreferrer",class:jt(["w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm transition-all hover:ring-1 hover:ring-catppuccin-green hover:scale-110 cursor-pointer",[Fe(Es)(c.count)===1?"bg-catppuccin-green/30 hover:bg-catppuccin-green/40":Fe(Es)(c.count)===2?"bg-catppuccin-green/50 hover:bg-catppuccin-green/60":Fe(Es)(c.count)===3?"bg-catppuccin-green/70 hover:bg-catppuccin-green/80":"bg-catppuccin-green hover:bg-catppuccin-green"]]),title:`${c.date}: ${c.count} contributions - Click to view on GitHub`},null,10,Zf)):(M(),$("div",{key:1,class:"w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm bg-catppuccin-surface/50",title:`${c.date}: ${c.count} contributions`},null,8,Xf))],64))),128))]))),128))])]),S("div",ed,Y(o.value)+" contributions in the last year ",1)]))]))}},nd={class:"w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400"},zn={__name:"Footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(M(),$("footer",nd,[S("p",null,"© 2020 - "+Y(Fe(t))+" heckr.dev | All rights reserved.",1)]))}},sd={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},od={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},rd={class:"grid lg:grid-cols-2 gap-6 lg:items-stretch"},id={__name:"Home",setup(e){const t=ke([]),n=ke(!0),s=ke([]),o=async()=>{try{n.value=!0;const{repos:r,languages:i}=await tl("hecker-01");t.value=r,s.value=i}catch{}finally{n.value=!1}};return Ut(()=>{o()}),(r,i)=>(M(),$("div",sd,[S("div",od,[X(rf),X(df,{languages:s.value,loading:n.value},null,8,["languages","loading"]),S("div",rd,[X(Af,{repos:t.value,loading:n.value},null,8,["repos","loading"]),X(jf)]),X(td),X(zn)])]))}},ld=`---
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
`,ad=`---
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
`,cd=`---
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
`,ud=Object.assign({"/posts/setting-up-local-database.md":ld,"/posts/using-commandline-crashcourse.md":ad,"/posts/using-git-crashcourse.md":cd}),fd=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const l=(u,c)=>{c=c.trim(),c.startsWith("[")&&c.endsWith("]")?o[u]=c.slice(1,-1).split(",").map(d=>d.trim()):o[u]=c};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&l(i,a);const[d,...h]=u.split(":");if(!d||d.trim()==="")return;i=d.trim(),a=h.join(":").trim()}}),i&&a&&l(i,a),{frontmatter:o,content:s}},dd=()=>{const e=[];let t=1;return Object.entries(ud).forEach(([n,s])=>{const{frontmatter:o,content:r}=fd(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,date:o.date||new Date().toISOString().split("T")[0],tags:o.tags||[],description:o.description||"",content:r.trim(),readingTime:md(r)})}),e};let As=null;const bo=()=>(As||(As=dd()),[...As].sort((e,t)=>Us(t.date)-Us(e.date))),pd=e=>bo().find(t=>t.slug===e),hd=()=>{const e=new Set;return bo().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()},Us=e=>{const[t,n,s]=e.split("-");return new Date(s,n-1,t)},md=e=>{const n=e.trim().split(/\s+/).length;return Math.ceil(n/225)},gd={class:"border-l-2 border-catppuccin-surface pl-4"},bd={class:"flex flex-wrap gap-2"},vd=["onClick"],yd={__name:"TagFilter",props:{tags:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["toggle-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("toggle-tag",o)};return(o,r)=>(M(),$("div",gd,[r[0]||(r[0]=S("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls tags/",-1)),S("div",bd,[(M(!0),$(pe,null,Qe(e.tags,i=>(M(),$("button",{key:i,onClick:a=>s(i),class:jt(["px-3 py-1 rounded text-xs transition-colors border",e.selectedTag===i?"bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve":"bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay"])}," #"+Y(i),11,vd))),128))])]))}},xd={class:"border-l-2 border-catppuccin-surface pl-4"},_d={class:"text-catppuccin-subtle text-sm mb-3"},wd={key:0,class:"text-catppuccin-mauve"},Cd={key:0,class:"text-sm text-catppuccin-subtle"},Sd={key:1,class:"space-y-3"},Ed=["onClick"],Ad={class:"px-4 py-3"},Td={class:"flex items-start justify-between gap-4 mb-2"},kd={class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors"},Pd={class:"flex items-center gap-2 flex-shrink-0"},Rd={class:"text-xs text-catppuccin-subtle"},Od=["title"],Id={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed"},Ld={class:"flex items-center gap-2"},Md={class:"flex flex-wrap gap-1.5"},Dd=["onClick"],Nd={__name:"BlogList",props:{posts:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-post","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-post",o)};return(o,r)=>(M(),$("div",xd,[S("div",_d,[r[0]||(r[0]=Ge(" ~$ ls -la posts/ ",-1)),e.selectedTag?(M(),$("span",wd,'| grep "'+Y(e.selectedTag)+'"',1)):Me("",!0)]),e.posts.length?(M(),$("div",Sd,[(M(!0),$(pe,null,Qe(e.posts,i=>(M(),$("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer"},[S("div",Ad,[S("div",Td,[S("h2",kd,Y(i.title),1),S("div",Pd,[S("span",Rd,Y(i.readingTime)+" min read ",1),r[1]||(r[1]=S("span",{class:"text-catppuccin-surface"},"•",-1)),S("span",{class:"text-xs text-catppuccin-subtle",title:Fe(Us)(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},Y(i.date),9,Od)])]),S("p",Id,Y(i.description),1),S("div",Ld,[S("div",Md,[(M(!0),$(pe,null,Qe(i.tags,a=>(M(),$("span",{key:a,onClick:Ec(l=>n("select-tag",a),["stop"]),class:"px-2 py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:bg-catppuccin-mauve/20 hover:text-catppuccin-mauve cursor-pointer transition-colors"}," #"+Y(a),9,Dd))),128))]),r[2]||(r[2]=S("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm"}," read → ",-1))])])],8,Ed))),128))])):(M(),$("div",Cd," no posts found "))]))}},$d={class:"mb-8"},Fd={class:"text-catppuccin-subtle text-sm mb-2"},Bd={class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-3"},Hd={class:"flex items-center gap-4 text-sm text-catppuccin-subtle mb-4"},Wd={class:"flex gap-2"},jd={class:"border-l-2 border-catppuccin-surface pl-4 mb-8"},Ud=["innerHTML"],Vd={__name:"BlogPost",props:{post:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=de(()=>n.post.readingTime||1),i=a=>{let l=a;const u=[];l=l.replace(/```(\w*)\s*\n?([\s\S]*?)```/g,(m,b,C)=>{const F=`__CODEBLOCK_${u.length}__`,O=C.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),P=b?`language-${b.toLowerCase()}`:"",T=`code-block-${u.length}`;return u.push(`<div class="relative group">
                <button data-clipboard-target="#${T}" class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-catppuccin-subtle hover:text-catppuccin-mauve px-2 py-1 bg-catppuccin-crust border border-catppuccin-surface rounded hover:bg-catppuccin-mauve/10 cursor-pointer z-10">
                    copy
                </button>
                <pre class="bg-catppuccin-base/50 border border-catppuccin-base/30 rounded p-4 overflow-x-auto my-4"><code id="${T}" class="${P}">${O}</code></pre>
            </div>`),F});const c=[];l=l.replace(/((?:\|[^\n]+\|\r?\n?)+)/g,m=>{const b=m.trim().split(/\r?\n/);if(b.length<2||!/^\|[\s\-:|]+\|$/.test(b[1]))return m;const F=`__TABLE_${c.length}__`,O=b[0],P=b.slice(2);let T='<table class="w-full my-4 text-sm border-collapse">';const I=O.split("|").filter(G=>G.trim());return T+="<thead><tr>",I.forEach(G=>{T+=`<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${G.trim()}</th>`}),T+="</tr></thead>",T+="<tbody>",P.forEach(G=>{if(G.trim()&&!/^\|[\s\-:|]+\|$/.test(G)){const oe=G.split("|").filter(J=>J.trim());T+="<tr>",oe.forEach(J=>{T+=`<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${J.trim()}</td>`}),T+="</tr>"}}),T+="</tbody></table>",c.push(T),F}),l=l.replace(/^(?:---|\*\*\*|___)\s*$/gim,'<hr class="border-catppuccin-surface my-6">');const d=m=>m.toLowerCase().replace(/<[^>]*>/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();l=l.replace(/^### (.*$)/gim,(m,b)=>{const C=d(b);return`<h3 id="${C}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${b}<a href="#${C}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`}),l=l.replace(/^## (.*$)/gim,(m,b)=>{const C=d(b);return`<h2 id="${C}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${b}<a href="#${C}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`}),l=l.replace(/^# (.*$)/gim,(m,b)=>{const C=d(b);return`<h1 id="${C}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${b}<a href="#${C}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`}),l=l.replace(/^> (.*$)/gim,'<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>'),l=l.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">'),l=l.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),l=l.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),l=l.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),l=l.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>'),l=l.replace(/`([^`]+)`/g,'<code class="bg-catppuccin-surface/50 px-2 py-0.5 rounded text-catppuccin-pink text-sm">$1</code>'),l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>'),l=l.replace(/^\d+\. (.*$)/gim,'<li class="ml-6 list-decimal text-catppuccin-text mb-1">$1</li>'),l=l.replace(/^[\-\*\+] (.*$)/gim,'<li class="ml-6 list-disc text-catppuccin-text mb-1">$1</li>'),l=l.replace(/^[\-\*\+] \[ \] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>'),l=l.replace(/^[\-\*\+] \[x\] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>');const h=/^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;return l=l.split(`

`).map(m=>{const b=m.trim();if(b.length===0||b.startsWith("__CODEBLOCK_")||b.startsWith("__TABLE_"))return m;const C=m.split(`
`),F=[];let O=[];const P=()=>{if(O.length>0){const T=O.join("<br>");F.push(`<p class="text-catppuccin-text leading-relaxed mb-4">${T}</p>`),O=[]}};return C.forEach(T=>{const I=T.trim();I.length===0||h.test(I)||I.startsWith("__CODEBLOCK_")||I.startsWith("__TABLE_")?(P(),F.push(T)):O.push(T.trim())}),P(),F.join(`
`)}).join(`

`),u.forEach((m,b)=>{l=l.replace(`__CODEBLOCK_${b}__`,m)}),c.forEach((m,b)=>{l=l.replace(`__TABLE_${b}__`,m)}),l};return Ut(()=>{setTimeout(()=>{window.Prism&&(Prism.highlightAll(),document.querySelectorAll('pre[class*="language-"]').forEach(a=>{a.className=a.className.replace(/language-\S+/g,"").trim()}))},100)}),(a,l)=>(M(),$("div",null,[S("div",$d,[S("div",Fd," ~$ cat "+Y(e.post.slug)+".md ",1),S("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-text transition-colors mb-6 inline-flex items-center gap-1"}," [← back to posts] "),S("h1",Bd,Y(e.post.title),1),S("div",Hd,[S("span",null,Y(e.post.date),1),l[0]||(l[0]=S("span",{class:"text-catppuccin-surface"},"•",-1)),S("span",null,"~"+Y(r.value)+" min read",1),l[1]||(l[1]=S("span",{class:"text-catppuccin-surface"},"•",-1)),S("div",Wd,[(M(!0),$(pe,null,Qe(e.post.tags,u=>(M(),$("span",{key:u,class:"text-catppuccin-gray"}," #"+Y(u),1))),128))])])]),S("article",jd,[S("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:i(e.post.content)},null,8,Ud)]),S("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors inline-flex items-center gap-1"}," [← back to all posts] ")]))}},Gd=Rn(Vd,[["__scopeId","data-v-19c3ea37"]]),Kd={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},qd={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},zd={key:"list"},Yd={class:"mb-12"},Jd={class:"flex items-center gap-4 text-sm mb-6"},Qd={key:"post"},Zd={__name:"Blog",setup(e){const t=ke("list"),n=ke(null),s=ke(null),o=ke([]),r=ke([]),i=el(),a=mo(),l=de(()=>s.value?o.value.filter(m=>m.tags.includes(s.value)):o.value),u=()=>{o.value=bo(),r.value=hd()},c=m=>{if(n.value=pd(m),n.value)t.value="post",window.scrollTo({top:0,behavior:"smooth"}),i.query.post!==m&&a.replace({name:"Blog",query:{...i.query,post:m}});else if(i.query.post){const b={...i.query};delete b.post,a.replace({name:"Blog",query:b})}},d=({skipQueryUpdate:m=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!m&&"post"in i.query){const b={...i.query};delete b.post,a.replace({name:"Blog",query:b})}},h=m=>{s.value=s.value===m?null:m};return Ut(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(C){const F=C.trigger,O=F.textContent;F.textContent="copied!",F.classList.add("text-catppuccin-green"),setTimeout(()=>{F.textContent=O,F.classList.remove("text-catppuccin-green")},2e3),C.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const b=i.query.post;b&&c(b)}),os(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),pn(()=>i.query.post,(m,b)=>{m&&m!==b?c(m):!m&&t.value==="post"&&d({skipQueryUpdate:!0})}),(m,b)=>{const C=so("router-link");return M(),$("div",Kd,[S("div",qd,[X(fo,{name:"fade",mode:"out-in"},{default:kt(()=>[t.value==="list"?(M(),$("div",zd,[S("div",Yd,[b[1]||(b[1]=S("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cd ~/blog",-1)),b[2]||(b[2]=S("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[S("span",{class:"text-catppuccin-mauve"},"Blog")],-1)),b[3]||(b[3]=S("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," My thoughts, tutorials, and experiences on various topics including web development, programming, and technology. ",-1)),S("div",Jd,[X(C,{to:"/",class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"},{default:kt(()=>[...b[0]||(b[0]=[Ge(" [← home] ",-1)])]),_:1})]),X(yd,{tags:r.value,"selected-tag":s.value,onToggleTag:h},null,8,["tags","selected-tag"])]),X(Nd,{posts:l.value,"selected-tag":s.value,onOpenPost:c,onSelectTag:h},null,8,["posts","selected-tag"]),X(zn)])):t.value==="post"&&n.value?(M(),$("div",Qd,[X(Gd,{post:n.value,onGoBack:d},null,8,["post"]),X(zn)])):Me("",!0)]),_:1})])])}}},Xd=Rn(Zd,[["__scopeId","data-v-11ba923e"]]),ep={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},tp={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16"},np={class:"mb-8"},sp={class:"text-catppuccin-subtle text-sm mb-4"},op={class:"border-l-2 border-catppuccin-surface pl-4"},rp={class:"text-catppuccin-red text-sm"},ip={class:"text-catppuccin-mauve"},lp={__name:"NotFound",setup(e){const t=el(),n=mo(),s=de(()=>(t.fullPath||t.path||"/").replace(/^\//,"")||"."),o=()=>n.push("/");return(r,i)=>(M(),$("div",ep,[S("div",tp,[S("div",np,[S("div",sp," ~$ cd ~/"+Y(s.value),1),S("div",{class:"flex items-center gap-4 text-sm mb-6"},[S("button",{onClick:o,class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"}," [← home] ")])]),S("div",op,[S("div",rp,[i[0]||(i[0]=Ge(" cd: no such file or directory: /",-1)),S("span",ip,Y(s.value),1)])])]),X(zn)]))}},ap=[{path:"/",name:"Home",component:id,meta:{title:"Home | heckr.dev"}},{path:"/blog",name:"Blog",component:Xd,meta:{title:"Blog | heckr.dev"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:lp,meta:{title:"404 Not Found | heckr.dev"}}],nl=Nu({history:hu(),routes:ap,scrollBehavior(e,t,n){return n||{top:0}}});nl.beforeEach((e,t,n)=>{document.title=e.meta.title||"heckr.dev",n()});let an=0;const xr=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],cp=()=>{console.log("%cWelcome to heckr.dev","font-size: 20px; font-weight: bold; color: #cba6f7;"),console.log("%cWelcome to the dev console, here are some commands to try:","font-size: 14px; color: #a6adc8;"),console.log(`%c- help() - show available commands
- about() - learn more about me
- skills() - view my tech stack
- contact() - get my contact info`,"font-size: 12px; color: #6c7086;"),window.help=()=>{console.log("%cAvailable commands:","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%c- help() - show this message
- about() - about the developer
- skills() - technical skills
- contact() - contact information
- secret() - ???
`,"font-size: 12px; color: #a6adc8;")},window.about=()=>{console.log("%cAbout me","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cA passionate developer who loves building cool things with code!
Check out my projects and blog on the site.`,"font-size: 12px; color: #a6adc8;")},window.skills=async()=>{console.log("%cTech stack","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log("%cFetching...","font-size: 12px; color: #6c7086;");try{const{languages:e,totalRepos:t}=await tl();e.length>0?(console.log("%cTop languages from "+t+" repositories found:","font-size: 14px; font-weight: bold; color: #a6adc8;"),e.slice(0,10).forEach(({language:n,count:s},o)=>{console.log(`%c${o+1}. ${n}: ${s} repos`,"font-size: 12px; color: #a6adc8;")})):console.log("%cUnable to fetch data, please try again later.","font-size: 12px; color: #f38ba8;")}catch{console.log("%cError loading data, please try again later.","font-size: 12px; color: #f38ba8;")}},window.contact=()=>{console.log("%cContact info","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cGitHub: https://github.com/hecker-01
Feel free to reach out!`,"font-size: 12px; color: #a6adc8;")},window.secret=()=>{console.log("%cYou found the secret command","font-size: 18px; font-weight: bold; color: #f9e2af;"),console.log("%cHere's a hint: ↑ ↑ ↓ ↓ ← → ← → B A","font-size: 12px; color: #fab387;")},document.addEventListener("keydown",e=>{e.code===xr[an]?(an++,an===xr.length&&(up(),an=0)):an=0})},up=()=>{if(console.log("%cKONAMI CODE ACTIVATED!","font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;"),document.body.style.animation="rainbow-border 2s linear infinite",!document.getElementById("konami-style")){const e=document.createElement("style");e.id="konami-style",e.textContent=`
      @keyframes rainbow-border {
        0% { box-shadow: inset 0 0 0 3px #f38ba8; }
        16% { box-shadow: inset 0 0 0 3px #fab387; }
        33% { box-shadow: inset 0 0 0 3px #f9e2af; }
        50% { box-shadow: inset 0 0 0 3px #a6e3a1; }
        66% { box-shadow: inset 0 0 0 3px #89dceb; }
        83% { box-shadow: inset 0 0 0 3px #89b4fa; }
        100% { box-shadow: inset 0 0 0 3px #cba6f7; }
      }
    `,document.head.appendChild(e)}setTimeout(()=>{document.body.style.animation=""},5e3)};kc($u).use(nl).mount("#app");cp();
