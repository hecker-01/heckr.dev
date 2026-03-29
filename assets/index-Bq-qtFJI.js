(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function to(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},Zt=[],at=()=>{},$r=()=>!1,ss=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),no=e=>e.startsWith("onUpdate:"),xe=Object.assign,so=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},va=Object.prototype.hasOwnProperty,ne=(e,t)=>va.call(e,t),U=Array.isArray,Xt=e=>os(e)==="[object Map]",Or=e=>os(e)==="[object Set]",G=e=>typeof e=="function",be=e=>typeof e=="string",It=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Lr=e=>(fe(e)||G(e))&&G(e.then)&&G(e.catch),Mr=Object.prototype.toString,os=e=>Mr.call(e),ya=e=>os(e).slice(8,-1),Nr=e=>os(e)==="[object Object]",oo=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hn=to(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rs=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},xa=/-\w/g,Ke=rs(e=>e.replace(xa,t=>t.slice(1).toUpperCase())),wa=/\B([A-Z])/g,Gt=rs(e=>e.replace(wa,"-$1").toLowerCase()),is=rs(e=>e.charAt(0).toUpperCase()+e.slice(1)),ws=rs(e=>e?`on${is(e)}`:""),Pt=(e,t)=>!Object.is(e,t),Hn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Br=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},ro=e=>{const t=parseFloat(e);return isNaN(t)?e:t},_a=e=>{const t=be(e)?Number(e):NaN;return isNaN(t)?e:t};let Ro;const as=()=>Ro||(Ro=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ye(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=be(s)?Ea(s):ye(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(be(e)||fe(e))return e}const ka=/;(?![^(]*\))/g,Ca=/:([^]+)/,Sa=/\/\*[^]*?\*\//g;function Ea(e){const t={};return e.replace(Sa,"").split(ka).forEach(n=>{if(n){const s=n.split(Ca);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function $t(e){let t="";if(be(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const s=$t(e[n]);s&&(t+=s+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Aa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ta=to(Aa);function jr(e){return!!e||e===""}const Fr=e=>!!(e&&e.__v_isRef===!0),V=e=>be(e)?e:e==null?"":U(e)||fe(e)&&(e.toString===Mr||!G(e.toString))?Fr(e)?V(e.value):JSON.stringify(e,Hr,2):String(e),Hr=(e,t)=>Fr(t)?Hr(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[_s(s,r)+" =>"]=o,n),{})}:Or(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>_s(n))}:It(t)?_s(t):fe(t)&&!U(t)&&!Nr(t)?String(t):t,_s=(e,t="")=>{var n;return It(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Me;class Pa{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){++this._on===1&&(this.prevScope=Me,Me=this)}off(){this._on>0&&--this._on===0&&(Me=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Ra(){return Me}let pe;const ks=new WeakSet;class Ur{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Me&&Me.active&&Me.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ks.has(this)&&(ks.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Do(this),Gr(this);const t=pe,n=ze;pe=this,ze=!0;try{return this.fn()}finally{qr(this),pe=t,ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)co(t);this.deps=this.depsTail=void 0,Do(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ks.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bs(this)&&this.run()}get dirty(){return Bs(this)}}let Wr=0,mn,gn;function Vr(e,t=!1){if(e.flags|=8,t){e.next=gn,gn=e;return}e.next=mn,mn=e}function io(){Wr++}function ao(){if(--Wr>0)return;if(gn){let t=gn;for(gn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;mn;){let t=mn;for(mn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Gr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function qr(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),co(s),Da(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Bs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Kr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Kr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===_n)||(e.globalVersion=_n,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Bs(e))))return;e.flags|=2;const t=e.dep,n=pe,s=ze;pe=e,ze=!0;try{Gr(e);const o=e.fn(e._value);(t.version===0||Pt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{pe=n,ze=s,qr(e),e.flags&=-3}}function co(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)co(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Da(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ze=!0;const zr=[];function gt(){zr.push(ze),ze=!1}function bt(){const e=zr.pop();ze=e===void 0?!0:e}function Do(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=pe;pe=void 0;try{t()}finally{pe=n}}}let _n=0;class Ia{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!pe||!ze||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new Ia(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,Yr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=s)}return n}trigger(t){this.version++,_n++,this.notify(t)}notify(t){io();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ao()}}}function Yr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Yr(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const js=new WeakMap,Ut=Symbol(""),Fs=Symbol(""),kn=Symbol("");function Se(e,t,n){if(ze&&pe){let s=js.get(e);s||js.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new lo),o.map=s,o.key=n),o.track()}}function ht(e,t,n,s,o,r){const i=js.get(e);if(!i){_n++;return}const a=c=>{c&&c.trigger()};if(io(),t==="clear")i.forEach(a);else{const c=U(e),u=c&&oo(n);if(c&&n==="length"){const l=Number(s);i.forEach((d,h)=>{(h==="length"||h===kn||!It(h)&&h>=l)&&a(d)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),u&&a(i.get(kn)),t){case"add":c?u&&a(i.get("length")):(a(i.get(Ut)),Xt(e)&&a(i.get(Fs)));break;case"delete":c||(a(i.get(Ut)),Xt(e)&&a(i.get(Fs)));break;case"set":Xt(e)&&a(i.get(Ut));break}}ao()}function zt(e){const t=Q(e);return t===e?t:(Se(t,"iterate",kn),Ge(e)?t:t.map(Je))}function cs(e){return Se(e=Q(e),"iterate",kn),e}function St(e,t){return vt(e)?nn(Wt(e)?Je(t):t):Je(t)}const $a={__proto__:null,[Symbol.iterator](){return Cs(this,Symbol.iterator,e=>St(this,e))},concat(...e){return zt(this).concat(...e.map(t=>U(t)?zt(t):t))},entries(){return Cs(this,"entries",e=>(e[1]=St(this,e[1]),e))},every(e,t){return ut(this,"every",e,t,void 0,arguments)},filter(e,t){return ut(this,"filter",e,t,n=>n.map(s=>St(this,s)),arguments)},find(e,t){return ut(this,"find",e,t,n=>St(this,n),arguments)},findIndex(e,t){return ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ut(this,"findLast",e,t,n=>St(this,n),arguments)},findLastIndex(e,t){return ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ss(this,"includes",e)},indexOf(...e){return Ss(this,"indexOf",e)},join(e){return zt(this).join(e)},lastIndexOf(...e){return Ss(this,"lastIndexOf",e)},map(e,t){return ut(this,"map",e,t,void 0,arguments)},pop(){return ln(this,"pop")},push(...e){return ln(this,"push",e)},reduce(e,...t){return Io(this,"reduce",e,t)},reduceRight(e,...t){return Io(this,"reduceRight",e,t)},shift(){return ln(this,"shift")},some(e,t){return ut(this,"some",e,t,void 0,arguments)},splice(...e){return ln(this,"splice",e)},toReversed(){return zt(this).toReversed()},toSorted(e){return zt(this).toSorted(e)},toSpliced(...e){return zt(this).toSpliced(...e)},unshift(...e){return ln(this,"unshift",e)},values(){return Cs(this,"values",e=>St(this,e))}};function Cs(e,t,n){const s=cs(e),o=s[t]();return s!==e&&!Ge(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=n(r.value)),r}),o}const Oa=Array.prototype;function ut(e,t,n,s,o,r){const i=cs(e),a=i!==e&&!Ge(e),c=i[t];if(c!==Oa[t]){const d=c.apply(e,r);return a?Je(d):d}let u=n;i!==e&&(a?u=function(d,h){return n.call(this,St(e,d),h,e)}:n.length>2&&(u=function(d,h){return n.call(this,d,h,e)}));const l=c.call(i,u,s);return a&&o?o(l):l}function Io(e,t,n,s){const o=cs(e);let r=n;return o!==e&&(Ge(e)?n.length>3&&(r=function(i,a,c){return n.call(this,i,a,c,e)}):r=function(i,a,c){return n.call(this,i,St(e,a),c,e)}),o[t](r,...s)}function Ss(e,t,n){const s=Q(e);Se(s,"iterate",kn);const o=s[t](...n);return(o===-1||o===!1)&&fo(n[0])?(n[0]=Q(n[0]),s[t](...n)):o}function ln(e,t,n=[]){gt(),io();const s=Q(e)[t].apply(e,n);return ao(),bt(),s}const La=to("__proto__,__v_isRef,__isVue"),Jr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(It));function Ma(e){It(e)||(e=String(e));const t=Q(this);return Se(t,"has",e),t.hasOwnProperty(e)}class Qr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?qa:ti:r?ei:Xr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=U(t);if(!o){let c;if(i&&(c=$a[n]))return c;if(n==="hasOwnProperty")return Ma}const a=Reflect.get(t,n,Ae(t)?t:s);if((It(n)?Jr.has(n):La(n))||(o||Se(t,"get",n),r))return a;if(Ae(a)){const c=i&&oo(n)?a:a.value;return o&&fe(c)?Us(c):c}return fe(a)?o?Us(a):Rn(a):a}}class Zr extends Qr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];const i=U(t)&&oo(n);if(!this._isShallow){const u=vt(r);if(!Ge(s)&&!vt(s)&&(r=Q(r),s=Q(s)),!i&&Ae(r)&&!Ae(s))return u||(r.value=s),!0}const a=i?Number(n)<t.length:ne(t,n),c=Reflect.set(t,n,s,Ae(t)?t:o);return t===Q(o)&&(a?Pt(s,r)&&ht(t,"set",n,s):ht(t,"add",n,s)),c}deleteProperty(t,n){const s=ne(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&ht(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!It(n)||!Jr.has(n))&&Se(t,"has",n),s}ownKeys(t){return Se(t,"iterate",U(t)?"length":Ut),Reflect.ownKeys(t)}}class Na extends Qr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ba=new Zr,ja=new Na,Fa=new Zr(!0);const Hs=e=>e,Ln=e=>Reflect.getPrototypeOf(e);function Ha(e,t,n){return function(...s){const o=this.__v_raw,r=Q(o),i=Xt(r),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...s),l=n?Hs:t?nn:Je;return!t&&Se(r,"iterate",c?Fs:Ut),xe(Object.create(u),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:a?[l(d[0]),l(d[1])]:l(d),done:h}}})}}function Mn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ua(e,t){const n={get(o){const r=this.__v_raw,i=Q(r),a=Q(o);e||(Pt(o,a)&&Se(i,"get",o),Se(i,"get",a));const{has:c}=Ln(i),u=t?Hs:e?nn:Je;if(c.call(i,o))return u(r.get(o));if(c.call(i,a))return u(r.get(a));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&Se(Q(o),"iterate",Ut),o.size},has(o){const r=this.__v_raw,i=Q(r),a=Q(o);return e||(Pt(o,a)&&Se(i,"has",o),Se(i,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const i=this,a=i.__v_raw,c=Q(a),u=t?Hs:e?nn:Je;return!e&&Se(c,"iterate",Ut),a.forEach((l,d)=>o.call(r,u(l),u(d),i))}};return xe(n,e?{add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear")}:{add(o){!t&&!Ge(o)&&!vt(o)&&(o=Q(o));const r=Q(this);return Ln(r).has.call(r,o)||(r.add(o),ht(r,"add",o,o)),this},set(o,r){!t&&!Ge(r)&&!vt(r)&&(r=Q(r));const i=Q(this),{has:a,get:c}=Ln(i);let u=a.call(i,o);u||(o=Q(o),u=a.call(i,o));const l=c.call(i,o);return i.set(o,r),u?Pt(r,l)&&ht(i,"set",o,r):ht(i,"add",o,r),this},delete(o){const r=Q(this),{has:i,get:a}=Ln(r);let c=i.call(r,o);c||(o=Q(o),c=i.call(r,o)),a&&a.call(r,o);const u=r.delete(o);return c&&ht(r,"delete",o,void 0),u},clear(){const o=Q(this),r=o.size!==0,i=o.clear();return r&&ht(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Ha(o,e,t)}),n}function uo(e,t){const n=Ua(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(ne(n,o)&&o in s?n:s,o,r)}const Wa={get:uo(!1,!1)},Va={get:uo(!1,!0)},Ga={get:uo(!0,!1)};const Xr=new WeakMap,ei=new WeakMap,ti=new WeakMap,qa=new WeakMap;function Ka(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function za(e){return e.__v_skip||!Object.isExtensible(e)?0:Ka(ya(e))}function Rn(e){return vt(e)?e:po(e,!1,Ba,Wa,Xr)}function ni(e){return po(e,!1,Fa,Va,ei)}function Us(e){return po(e,!0,ja,Ga,ti)}function po(e,t,n,s,o){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=za(e);if(r===0)return e;const i=o.get(e);if(i)return i;const a=new Proxy(e,r===2?s:n);return o.set(e,a),a}function Wt(e){return vt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function vt(e){return!!(e&&e.__v_isReadonly)}function Ge(e){return!!(e&&e.__v_isShallow)}function fo(e){return e?!!e.__v_raw:!1}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Ya(e){return!ne(e,"__v_skip")&&Object.isExtensible(e)&&Br(e,"__v_skip",!0),e}const Je=e=>fe(e)?Rn(e):e,nn=e=>fe(e)?Us(e):e;function Ae(e){return e?e.__v_isRef===!0:!1}function ge(e){return si(e,!1)}function Ja(e){return si(e,!0)}function si(e,t){return Ae(e)?e:new Qa(e,t)}class Qa{constructor(t,n){this.dep=new lo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Q(t),this._value=n?t:Je(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ge(t)||vt(t);t=s?t:Q(t),Pt(t,n)&&(this._rawValue=t,this._value=s?t:Je(t),this.dep.trigger())}}function Ne(e){return Ae(e)?e.value:e}const Za={get:(e,t,n)=>t==="__v_raw"?e:Ne(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Ae(o)&&!Ae(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function oi(e){return Wt(e)?e:new Proxy(e,Za)}class Xa{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new lo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_n-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return Vr(this,!0),!0}get value(){const t=this.dep.track();return Kr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ec(e,t,n=!1){let s,o;return G(e)?s=e:(s=e.get,o=e.set),new Xa(s,o,n)}const Nn={},qn=new WeakMap;let jt;function tc(e,t=!1,n=jt){if(n){let s=qn.get(n);s||qn.set(n,s=[]),s.push(e)}}function nc(e,t,n=le){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:a,call:c}=n,u=M=>o?M:Ge(M)||o===!1||o===0?mt(M,1):mt(M);let l,d,h,m,v=!1,E=!1;if(Ae(e)?(d=()=>e.value,v=Ge(e)):Wt(e)?(d=()=>u(e),v=!0):U(e)?(E=!0,v=e.some(M=>Wt(M)||Ge(M)),d=()=>e.map(M=>{if(Ae(M))return M.value;if(Wt(M))return u(M);if(G(M))return c?c(M,2):M()})):G(e)?t?d=c?()=>c(e,2):e:d=()=>{if(h){gt();try{h()}finally{bt()}}const M=jt;jt=l;try{return c?c(e,3,[m]):e(m)}finally{jt=M}}:d=at,t&&o){const M=d,z=o===!0?1/0:o;d=()=>mt(M(),z)}const N=Ra(),O=()=>{l.stop(),N&&N.active&&so(N.effects,l)};if(r&&t){const M=t;t=(...z)=>{M(...z),O()}}let L=E?new Array(e.length).fill(Nn):Nn;const B=M=>{if(!(!(l.flags&1)||!l.dirty&&!M))if(t){const z=l.run();if(o||v||(E?z.some((ce,ie)=>Pt(ce,L[ie])):Pt(z,L))){h&&h();const ce=jt;jt=l;try{const ie=[z,L===Nn?void 0:E&&L[0]===Nn?[]:L,m];L=z,c?c(t,3,ie):t(...ie)}finally{jt=ce}}}else l.run()};return a&&a(B),l=new Ur(d),l.scheduler=i?()=>i(B,!1):B,m=M=>tc(M,!1,l),h=l.onStop=()=>{const M=qn.get(l);if(M){if(c)c(M,4);else for(const z of M)z();qn.delete(l)}},t?s?B(!0):L=l.run():i?i(B.bind(null,!0),!0):l.run(),O.pause=l.pause.bind(l),O.resume=l.resume.bind(l),O.stop=O,O}function mt(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ae(e))mt(e.value,t,n);else if(U(e))for(let s=0;s<e.length;s++)mt(e[s],t,n);else if(Or(e)||Xt(e))e.forEach(s=>{mt(s,t,n)});else if(Nr(e)){for(const s in e)mt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&mt(e[s],t,n)}return e}function Dn(e,t,n,s){try{return s?e(...s):e()}catch(o){ls(o,t,n)}}function Qe(e,t,n,s){if(G(e)){const o=Dn(e,t,n,s);return o&&Lr(o)&&o.catch(r=>{ls(r,t,n)}),o}if(U(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Qe(e[r],t,n,s));return o}}function ls(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||le;if(t){let a=t.parent;const c=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](e,c,u)===!1)return}a=a.parent}if(r){gt(),Dn(r,null,10,[e,c,u]),bt();return}}sc(e,n,o,s,i)}function sc(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const De=[];let rt=-1;const en=[];let Et=null,Yt=0;const ri=Promise.resolve();let Kn=null;function us(e){const t=Kn||ri;return e?t.then(this?e.bind(this):e):t}function oc(e){let t=rt+1,n=De.length;for(;t<n;){const s=t+n>>>1,o=De[s],r=Cn(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function ho(e){if(!(e.flags&1)){const t=Cn(e),n=De[De.length-1];!n||!(e.flags&2)&&t>=Cn(n)?De.push(e):De.splice(oc(t),0,e),e.flags|=1,ii()}}function ii(){Kn||(Kn=ri.then(ci))}function rc(e){U(e)?en.push(...e):Et&&e.id===-1?Et.splice(Yt+1,0,e):e.flags&1||(en.push(e),e.flags|=1),ii()}function $o(e,t,n=rt+1){for(;n<De.length;n++){const s=De[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;De.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ai(e){if(en.length){const t=[...new Set(en)].sort((n,s)=>Cn(n)-Cn(s));if(en.length=0,Et){Et.push(...t);return}for(Et=t,Yt=0;Yt<Et.length;Yt++){const n=Et[Yt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Et=null,Yt=0}}const Cn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ci(e){try{for(rt=0;rt<De.length;rt++){const t=De[rt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Dn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;rt<De.length;rt++){const t=De[rt];t&&(t.flags&=-2)}rt=-1,De.length=0,ai(),Kn=null,(De.length||en.length)&&ci()}}let He=null,li=null;function zn(e){const t=He;return He=e,li=e&&e.type.__scopeId||null,t}function ct(e,t=He,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Qn(-1);const r=zn(t);let i;try{i=e(...o)}finally{zn(r),s._d&&Qn(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function ui(e,t){if(He===null)return e;const n=gs(He),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,a,c=le]=t[o];r&&(G(r)&&(r={mounted:r,updated:r}),r.deep&&mt(i),s.push({dir:r,instance:n,value:i,oldValue:void 0,arg:a,modifiers:c}))}return e}function Mt(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let c=a.dir[s];c&&(gt(),Qe(c,n,8,[e.el,a,e,t]),bt())}}function Un(e,t){if(Ee){let n=Ee.provides;const s=Ee.parent&&Ee.parent.provides;s===n&&(n=Ee.provides=Object.create(s)),n[e]=t}}function Ye(e,t,n=!1){const s=xo();if(s||tn){let o=tn?tn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&G(t)?t.call(s&&s.proxy):t}}const ic=Symbol.for("v-scx"),ac=()=>Ye(ic);function Rt(e,t,n){return di(e,t,n)}function di(e,t,n=le){const{immediate:s,deep:o,flush:r,once:i}=n,a=xe({},n),c=t&&s||!t&&r!=="post";let u;if(Tn){if(r==="sync"){const m=ac();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=at,m.resume=at,m.pause=at,m}}const l=Ee;a.call=(m,v,E)=>Qe(m,l,v,E);let d=!1;r==="post"?a.scheduler=m=>{Fe(m,l&&l.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(m,v)=>{v?m():ho(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,l&&(m.id=l.uid,m.i=l))};const h=nc(e,t,a);return Tn&&(u?u.push(h):c&&h()),h}function cc(e,t,n){const s=this.proxy,o=be(e)?e.includes(".")?pi(s,e):()=>s[e]:e.bind(s,s);let r;G(t)?r=t:(r=t.handler,n=t);const i=$n(this),a=di(o,r.bind(s),n);return i(),a}function pi(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const lc=Symbol("_vte"),fi=e=>e.__isTeleport,ft=Symbol("_leaveCb"),Bn=Symbol("_enterCb");function hi(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xt(()=>{e.isMounted=!0}),In(()=>{e.isUnmounting=!0}),e}const Ve=[Function,Array],mi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ve,onEnter:Ve,onAfterEnter:Ve,onEnterCancelled:Ve,onBeforeLeave:Ve,onLeave:Ve,onAfterLeave:Ve,onLeaveCancelled:Ve,onBeforeAppear:Ve,onAppear:Ve,onAfterAppear:Ve,onAppearCancelled:Ve},gi=e=>{const t=e.subTree;return t.component?gi(t.component):t},uc={name:"BaseTransition",props:mi,setup(e,{slots:t}){const n=xo(),s=hi();return()=>{const o=t.default&&mo(t.default(),!0);if(!o||!o.length)return;const r=bi(o),i=Q(e),{mode:a}=i;if(s.isLeaving)return Es(r);const c=Oo(r);if(!c)return Es(r);let u=Sn(c,i,s,n,d=>u=d);c.type!==Ie&&Vt(c,u);let l=n.subTree&&Oo(n.subTree);if(l&&l.type!==Ie&&!Ft(l,c)&&gi(n).type!==Ie){let d=Sn(l,i,s,n);if(Vt(l,d),a==="out-in"&&c.type!==Ie)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,l=void 0},Es(r);a==="in-out"&&c.type!==Ie?d.delayLeave=(h,m,v)=>{const E=vi(s,l);E[String(l.key)]=l,h[ft]=()=>{m(),h[ft]=void 0,delete u.delayedLeave,l=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return r}}};function bi(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ie){t=n;break}}return t}const dc=uc;function vi(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Sn(e,t,n,s,o){const{appear:r,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:d,onBeforeLeave:h,onLeave:m,onAfterLeave:v,onLeaveCancelled:E,onBeforeAppear:N,onAppear:O,onAfterAppear:L,onAppearCancelled:B}=t,M=String(e.key),z=vi(n,e),ce=(q,Z)=>{q&&Qe(q,s,9,Z)},ie=(q,Z)=>{const ue=Z[1];ce(q,Z),U(q)?q.every(I=>I.length<=1)&&ue():q.length<=1&&ue()},Ce={mode:i,persisted:a,beforeEnter(q){let Z=c;if(!n.isMounted)if(r)Z=N||c;else return;q[ft]&&q[ft](!0);const ue=z[M];ue&&Ft(e,ue)&&ue.el[ft]&&ue.el[ft](),ce(Z,[q])},enter(q){let Z=u,ue=l,I=d;if(!n.isMounted)if(r)Z=O||u,ue=L||l,I=B||d;else return;let X=!1;const _e=q[Bn]=Be=>{X||(X=!0,Be?ce(I,[q]):ce(ue,[q]),Ce.delayedLeave&&Ce.delayedLeave(),q[Bn]=void 0)};Z?ie(Z,[q,_e]):_e()},leave(q,Z){const ue=String(e.key);if(q[Bn]&&q[Bn](!0),n.isUnmounting)return Z();ce(h,[q]);let I=!1;const X=q[ft]=_e=>{I||(I=!0,Z(),_e?ce(E,[q]):ce(v,[q]),q[ft]=void 0,z[ue]===e&&delete z[ue])};z[ue]=e,m?ie(m,[q,X]):X()},clone(q){const Z=Sn(q,t,n,s,o);return o&&o(Z),Z}};return Ce}function Es(e){if(ds(e))return e=Dt(e),e.children=null,e}function Oo(e){if(!ds(e))return fi(e.type)&&e.children?bi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&G(n.default))return n.default()}}function Vt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Vt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function mo(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===oe?(i.patchFlag&128&&o++,s=s.concat(mo(i.children,t,a))):(t||i.type!==Ie)&&s.push(a!=null?Dt(i,{key:a}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function yi(e,t){return G(e)?xe({name:e.name},t,{setup:e}):e}function xi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Yn=new WeakMap;function bn(e,t,n,s,o=!1){if(U(e)){e.forEach((v,E)=>bn(v,t&&(U(t)?t[E]:t),n,s,o));return}if(vn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&bn(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?gs(s.component):s.el,i=o?null:r,{i:a,r:c}=e,u=t&&t.r,l=a.refs===le?a.refs={}:a.refs,d=a.setupState,h=Q(d),m=d===le?$r:v=>ne(h,v);if(u!=null&&u!==c){if(Lo(t),be(u))l[u]=null,m(u)&&(d[u]=null);else if(Ae(u)){u.value=null;const v=t;v.k&&(l[v.k]=null)}}if(G(c))Dn(c,a,12,[i,l]);else{const v=be(c),E=Ae(c);if(v||E){const N=()=>{if(e.f){const O=v?m(c)?d[c]:l[c]:c.value;if(o)U(O)&&so(O,r);else if(U(O))O.includes(r)||O.push(r);else if(v)l[c]=[r],m(c)&&(d[c]=l[c]);else{const L=[r];c.value=L,e.k&&(l[e.k]=L)}}else v?(l[c]=i,m(c)&&(d[c]=i)):E&&(c.value=i,e.k&&(l[e.k]=i))};if(i){const O=()=>{N(),Yn.delete(e)};O.id=-1,Yn.set(e,O),Fe(O,n)}else Lo(e),N()}}}function Lo(e){const t=Yn.get(e);t&&(t.flags|=8,Yn.delete(e))}as().requestIdleCallback;as().cancelIdleCallback;const vn=e=>!!e.type.__asyncLoader,ds=e=>e.type.__isKeepAlive;function pc(e,t){wi(e,"a",t)}function fc(e,t){wi(e,"da",t)}function wi(e,t,n=Ee){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ps(t,s,n),n){let o=n.parent;for(;o&&o.parent;)ds(o.parent.vnode)&&hc(s,t,n,o),o=o.parent}}function hc(e,t,n,s){const o=ps(t,e,s,!0);ki(()=>{so(s[t],o)},n)}function ps(e,t,n=Ee,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{gt();const a=$n(n),c=Qe(t,n,e,i);return a(),bt(),c});return s?o.unshift(r):o.push(r),r}}const yt=e=>(t,n=Ee)=>{(!Tn||e==="sp")&&ps(e,(...s)=>t(...s),n)},mc=yt("bm"),xt=yt("m"),gc=yt("bu"),_i=yt("u"),In=yt("bum"),ki=yt("um"),bc=yt("sp"),vc=yt("rtg"),yc=yt("rtc");function xc(e,t=Ee){ps("ec",e,t)}const Ci="components";function fs(e,t){return Ei(Ci,e,!0,t)||e}const Si=Symbol.for("v-ndc");function wc(e){return be(e)?Ei(Ci,e,!1)||e:e||Si}function Ei(e,t,n=!0,s=!1){const o=He||Ee;if(o){const r=o.type;{const a=rl(r,!1);if(a&&(a===t||a===Ke(t)||a===is(Ke(t))))return r}const i=Mo(o[e]||r[e],t)||Mo(o.appContext[e],t);return!i&&s?r:i}}function Mo(e,t){return e&&(e[t]||e[Ke(t)]||e[is(Ke(t))])}function Te(e,t,n,s){let o;const r=n,i=U(e);if(i||be(e)){const a=i&&Wt(e);let c=!1,u=!1;a&&(c=!Ge(e),u=vt(e),e=cs(e)),o=new Array(e.length);for(let l=0,d=e.length;l<d;l++)o[l]=t(c?u?nn(Je(e[l])):Je(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r)}else if(fe(e))if(e[Symbol.iterator])o=Array.from(e,(a,c)=>t(a,c,void 0,r));else{const a=Object.keys(e);o=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const l=a[c];o[c]=t(e[l],l,c,r)}}else o=[];return o}const Ws=e=>e?Gi(e)?gs(e):Ws(e.parent):null,yn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ws(e.parent),$root:e=>Ws(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ti(e),$forceUpdate:e=>e.f||(e.f=()=>{ho(e.update)}),$nextTick:e=>e.n||(e.n=us.bind(e.proxy)),$watch:e=>cc.bind(e)}),As=(e,t)=>e!==le&&!e.__isScriptSetup&&ne(e,t),_c={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:c}=e;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(As(s,t))return i[t]=1,s[t];if(o!==le&&ne(o,t))return i[t]=2,o[t];if(ne(r,t))return i[t]=3,r[t];if(n!==le&&ne(n,t))return i[t]=4,n[t];Vs&&(i[t]=0)}}const u=yn[t];let l,d;if(u)return t==="$attrs"&&Se(e.attrs,"get",""),u(e);if((l=a.__cssModules)&&(l=l[t]))return l;if(n!==le&&ne(n,t))return i[t]=4,n[t];if(d=c.config.globalProperties,ne(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return As(o,t)?(o[t]=n,!0):s!==le&&ne(s,t)?(s[t]=n,!0):ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:r,type:i}},a){let c;return!!(n[a]||e!==le&&a[0]!=="$"&&ne(e,a)||As(t,a)||ne(r,a)||ne(s,a)||ne(yn,a)||ne(o.config.globalProperties,a)||(c=i.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ne(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function No(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Vs=!0;function kc(e){const t=Ti(e),n=e.proxy,s=e.ctx;Vs=!1,t.beforeCreate&&Bo(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:h,beforeUpdate:m,updated:v,activated:E,deactivated:N,beforeDestroy:O,beforeUnmount:L,destroyed:B,unmounted:M,render:z,renderTracked:ce,renderTriggered:ie,errorCaptured:Ce,serverPrefetch:q,expose:Z,inheritAttrs:ue,components:I,directives:X,filters:_e}=t;if(u&&Cc(u,s,null),i)for(const ae in i){const ee=i[ae];G(ee)&&(s[ae]=ee.bind(n))}if(o){const ae=o.call(n,n);fe(ae)&&(e.data=Rn(ae))}if(Vs=!0,r)for(const ae in r){const ee=r[ae],lt=G(ee)?ee.bind(n,n):G(ee.get)?ee.get.bind(n,n):at,wt=!G(ee)&&G(ee.set)?ee.set.bind(n):at,Xe=se({get:lt,set:wt});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:$e=>Xe.value=$e})}if(a)for(const ae in a)Ai(a[ae],s,n,ae);if(c){const ae=G(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(ee=>{Un(ee,ae[ee])})}l&&Bo(l,e,"c");function ve(ae,ee){U(ee)?ee.forEach(lt=>ae(lt.bind(n))):ee&&ae(ee.bind(n))}if(ve(mc,d),ve(xt,h),ve(gc,m),ve(_i,v),ve(pc,E),ve(fc,N),ve(xc,Ce),ve(yc,ce),ve(vc,ie),ve(In,L),ve(ki,M),ve(bc,q),U(Z))if(Z.length){const ae=e.exposed||(e.exposed={});Z.forEach(ee=>{Object.defineProperty(ae,ee,{get:()=>n[ee],set:lt=>n[ee]=lt,enumerable:!0})})}else e.exposed||(e.exposed={});z&&e.render===at&&(e.render=z),ue!=null&&(e.inheritAttrs=ue),I&&(e.components=I),X&&(e.directives=X),q&&xi(e)}function Cc(e,t,n=at){U(e)&&(e=Gs(e));for(const s in e){const o=e[s];let r;fe(o)?"default"in o?r=Ye(o.from||s,o.default,!0):r=Ye(o.from||s):r=Ye(o),Ae(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Bo(e,t,n){Qe(U(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ai(e,t,n,s){let o=s.includes(".")?pi(n,s):()=>n[s];if(be(e)){const r=t[e];G(r)&&Rt(o,r)}else if(G(e))Rt(o,e.bind(n));else if(fe(e))if(U(e))e.forEach(r=>Ai(r,t,n,s));else{const r=G(e.handler)?e.handler.bind(n):t[e.handler];G(r)&&Rt(o,r,e)}}function Ti(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let c;return a?c=a:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(u=>Jn(c,u,i,!0)),Jn(c,t,i)),fe(t)&&r.set(t,c),c}function Jn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&Jn(e,r,n,!0),o&&o.forEach(i=>Jn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=Sc[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Sc={data:jo,props:Fo,emits:Fo,methods:fn,computed:fn,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:fn,directives:fn,watch:Ac,provide:jo,inject:Ec};function jo(e,t){return t?e?function(){return xe(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function Ec(e,t){return fn(Gs(e),Gs(t))}function Gs(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Pe(e,t){return e?[...new Set([].concat(e,t))]:t}function fn(e,t){return e?xe(Object.create(null),e,t):t}function Fo(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:xe(Object.create(null),No(e),No(t??{})):t}function Ac(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const s in t)n[s]=Pe(e[s],t[s]);return n}function Pi(){return{app:null,config:{isNativeTag:$r,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tc=0;function Pc(e,t){return function(s,o=null){G(s)||(s=xe({},s)),o!=null&&!fe(o)&&(o=null);const r=Pi(),i=new WeakSet,a=[];let c=!1;const u=r.app={_uid:Tc++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:al,get config(){return r.config},set config(l){},use(l,...d){return i.has(l)||(l&&G(l.install)?(i.add(l),l.install(u,...d)):G(l)&&(i.add(l),l(u,...d))),u},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),u},component(l,d){return d?(r.components[l]=d,u):r.components[l]},directive(l,d){return d?(r.directives[l]=d,u):r.directives[l]},mount(l,d,h){if(!c){const m=u._ceVNode||K(s,o);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),e(m,l,h),c=!0,u._container=l,l.__vue_app__=u,gs(m.component)}},onUnmount(l){a.push(l)},unmount(){c&&(Qe(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(l,d){return r.provides[l]=d,u},runWithContext(l){const d=tn;tn=u;try{return l()}finally{tn=d}}};return u}}let tn=null;const Rc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${Gt(t)}Modifiers`];function Dc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||le;let o=n;const r=t.startsWith("update:"),i=r&&Rc(s,t.slice(7));i&&(i.trim&&(o=n.map(l=>be(l)?l.trim():l)),i.number&&(o=n.map(ro)));let a,c=s[a=ws(t)]||s[a=ws(Ke(t))];!c&&r&&(c=s[a=ws(Gt(t))]),c&&Qe(c,e,6,o);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qe(u,e,6,o)}}const Ic=new WeakMap;function Ri(e,t,n=!1){const s=n?Ic:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!G(e)){const c=u=>{const l=Ri(u,t,!0);l&&(a=!0,xe(i,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(fe(e)&&s.set(e,null),null):(U(r)?r.forEach(c=>i[c]=null):xe(i,r),fe(e)&&s.set(e,i),i)}function hs(e,t){return!e||!ss(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(e,t[0].toLowerCase()+t.slice(1))||ne(e,Gt(t))||ne(e,t))}function Ho(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:a,emit:c,render:u,renderCache:l,props:d,data:h,setupState:m,ctx:v,inheritAttrs:E}=e,N=zn(e);let O,L;try{if(n.shapeFlag&4){const M=o||s,z=M;O=it(u.call(z,M,l,d,m,h,v)),L=a}else{const M=t;O=it(M.length>1?M(d,{attrs:a,slots:i,emit:c}):M(d,null)),L=t.props?a:$c(a)}}catch(M){xn.length=0,ls(M,e,1),O=K(Ie)}let B=O;if(L&&E!==!1){const M=Object.keys(L),{shapeFlag:z}=B;M.length&&z&7&&(r&&M.some(no)&&(L=Oc(L,r)),B=Dt(B,L,!1,!0))}return n.dirs&&(B=Dt(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Vt(B,n.transition),O=B,zn(N),O}const $c=e=>{let t;for(const n in e)(n==="class"||n==="style"||ss(n))&&((t||(t={}))[n]=e[n]);return t},Oc=(e,t)=>{const n={};for(const s in e)(!no(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Lc(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:c}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Uo(s,i,u):!!i;if(c&8){const l=t.dynamicProps;for(let d=0;d<l.length;d++){const h=l[d];if(i[h]!==s[h]&&!hs(u,h))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Uo(s,i,u):!0:!!i;return!1}function Uo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!hs(n,r))return!0}return!1}function Mc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Di={},Ii=()=>Object.create(Di),$i=e=>Object.getPrototypeOf(e)===Di;function Nc(e,t,n,s=!1){const o={},r=Ii();e.propsDefaults=Object.create(null),Oi(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:ni(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Bc(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=Q(o),[c]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let d=0;d<l.length;d++){let h=l[d];if(hs(e.emitsOptions,h))continue;const m=t[h];if(c)if(ne(r,h))m!==r[h]&&(r[h]=m,u=!0);else{const v=Ke(h);o[v]=qs(c,a,v,m,e,!1)}else m!==r[h]&&(r[h]=m,u=!0)}}}else{Oi(e,t,o,r)&&(u=!0);let l;for(const d in a)(!t||!ne(t,d)&&((l=Gt(d))===d||!ne(t,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(o[d]=qs(c,a,d,void 0,e,!0)):delete o[d]);if(r!==a)for(const d in r)(!t||!ne(t,d))&&(delete r[d],u=!0)}u&&ht(e.attrs,"set","")}function Oi(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(hn(c))continue;const u=t[c];let l;o&&ne(o,l=Ke(c))?!r||!r.includes(l)?n[l]=u:(a||(a={}))[l]=u:hs(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(r){const c=Q(n),u=a||le;for(let l=0;l<r.length;l++){const d=r[l];n[d]=qs(o,c,d,u[d],e,!ne(u,d))}}return i}function qs(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=ne(i,"default");if(a&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&G(c)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const l=$n(o);s=u[n]=c.call(null,t),l()}}else s=c;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===Gt(n))&&(s=!0))}return s}const jc=new WeakMap;function Li(e,t,n=!1){const s=n?jc:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let c=!1;if(!G(e)){const l=d=>{c=!0;const[h,m]=Li(d,t,!0);xe(i,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!r&&!c)return fe(e)&&s.set(e,Zt),Zt;if(U(r))for(let l=0;l<r.length;l++){const d=Ke(r[l]);Wo(d)&&(i[d]=le)}else if(r)for(const l in r){const d=Ke(l);if(Wo(d)){const h=r[l],m=i[d]=U(h)||G(h)?{type:h}:xe({},h),v=m.type;let E=!1,N=!0;if(U(v))for(let O=0;O<v.length;++O){const L=v[O],B=G(L)&&L.name;if(B==="Boolean"){E=!0;break}else B==="String"&&(N=!1)}else E=G(v)&&v.name==="Boolean";m[0]=E,m[1]=N,(E||ne(m,"default"))&&a.push(d)}}const u=[i,a];return fe(e)&&s.set(e,u),u}function Wo(e){return e[0]!=="$"&&!hn(e)}const go=e=>e==="_"||e==="_ctx"||e==="$stable",bo=e=>U(e)?e.map(it):[it(e)],Fc=(e,t,n)=>{if(t._n)return t;const s=ct((...o)=>bo(t(...o)),n);return s._c=!1,s},Mi=(e,t,n)=>{const s=e._ctx;for(const o in e){if(go(o))continue;const r=e[o];if(G(r))t[o]=Fc(o,r,s);else if(r!=null){const i=bo(r);t[o]=()=>i}}},Ni=(e,t)=>{const n=bo(t);e.slots.default=()=>n},Bi=(e,t,n)=>{for(const s in t)(n||!go(s))&&(e[s]=t[s])},Hc=(e,t,n)=>{const s=e.slots=Ii();if(e.vnode.shapeFlag&32){const o=t._;o?(Bi(s,t,n),n&&Br(s,"_",o,!0)):Mi(t,s)}else t&&Ni(e,t)},Uc=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=le;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Bi(o,t,n):(r=!t.$stable,Mi(t,o)),i=t}else t&&(Ni(e,t),i={default:1});if(r)for(const a in o)!go(a)&&i[a]==null&&delete o[a]},Fe=Kc;function Wc(e){return Vc(e)}function Vc(e,t){const n=as();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:h,setScopeId:m=at,insertStaticContent:v}=e,E=(p,f,g,y=null,_=null,x=null,P=void 0,T=null,A=!!f.dynamicChildren)=>{if(p===f)return;p&&!Ft(p,f)&&(y=w(p),$e(p,_,x,!0),p=null),f.patchFlag===-2&&(A=!1,f.dynamicChildren=null);const{type:k,ref:H,shapeFlag:D}=f;switch(k){case ms:N(p,f,g,y);break;case Ie:O(p,f,g,y);break;case Wn:p==null&&L(f,g,y,P);break;case oe:I(p,f,g,y,_,x,P,T,A);break;default:D&1?z(p,f,g,y,_,x,P,T,A):D&6?X(p,f,g,y,_,x,P,T,A):(D&64||D&128)&&k.process(p,f,g,y,_,x,P,T,A,j)}H!=null&&_?bn(H,p&&p.ref,x,f||p,!f):H==null&&p&&p.ref!=null&&bn(p.ref,null,x,p,!0)},N=(p,f,g,y)=>{if(p==null)s(f.el=a(f.children),g,y);else{const _=f.el=p.el;f.children!==p.children&&u(_,f.children)}},O=(p,f,g,y)=>{p==null?s(f.el=c(f.children||""),g,y):f.el=p.el},L=(p,f,g,y)=>{[p.el,p.anchor]=v(p.children,f,g,y,p.el,p.anchor)},B=({el:p,anchor:f},g,y)=>{let _;for(;p&&p!==f;)_=h(p),s(p,g,y),p=_;s(f,g,y)},M=({el:p,anchor:f})=>{let g;for(;p&&p!==f;)g=h(p),o(p),p=g;o(f)},z=(p,f,g,y,_,x,P,T,A)=>{if(f.type==="svg"?P="svg":f.type==="math"&&(P="mathml"),p==null)ce(f,g,y,_,x,P,T,A);else{const k=p.el&&p.el._isVueCE?p.el:null;try{k&&k._beginPatch(),q(p,f,_,x,P,T,A)}finally{k&&k._endPatch()}}},ce=(p,f,g,y,_,x,P,T)=>{let A,k;const{props:H,shapeFlag:D,transition:F,dirs:W}=p;if(A=p.el=i(p.type,x,H&&H.is,H),D&8?l(A,p.children):D&16&&Ce(p.children,A,null,y,_,Ts(p,x),P,T),W&&Mt(p,null,y,"created"),ie(A,p,p.scopeId,P,y),H){for(const de in H)de!=="value"&&!hn(de)&&r(A,de,null,H[de],x,y);"value"in H&&r(A,"value",null,H.value,x),(k=H.onVnodeBeforeMount)&&st(k,y,p)}W&&Mt(p,null,y,"beforeMount");const J=Gc(_,F);J&&F.beforeEnter(A),s(A,f,g),((k=H&&H.onVnodeMounted)||J||W)&&Fe(()=>{k&&st(k,y,p),J&&F.enter(A),W&&Mt(p,null,y,"mounted")},_)},ie=(p,f,g,y,_)=>{if(g&&m(p,g),y)for(let x=0;x<y.length;x++)m(p,y[x]);if(_){let x=_.subTree;if(f===x||Ui(x.type)&&(x.ssContent===f||x.ssFallback===f)){const P=_.vnode;ie(p,P,P.scopeId,P.slotScopeIds,_.parent)}}},Ce=(p,f,g,y,_,x,P,T,A=0)=>{for(let k=A;k<p.length;k++){const H=p[k]=T?At(p[k]):it(p[k]);E(null,H,f,g,y,_,x,P,T)}},q=(p,f,g,y,_,x,P)=>{const T=f.el=p.el;let{patchFlag:A,dynamicChildren:k,dirs:H}=f;A|=p.patchFlag&16;const D=p.props||le,F=f.props||le;let W;if(g&&Nt(g,!1),(W=F.onVnodeBeforeUpdate)&&st(W,g,f,p),H&&Mt(f,p,g,"beforeUpdate"),g&&Nt(g,!0),(D.innerHTML&&F.innerHTML==null||D.textContent&&F.textContent==null)&&l(T,""),k?Z(p.dynamicChildren,k,T,g,y,Ts(f,_),x):P||ee(p,f,T,null,g,y,Ts(f,_),x,!1),A>0){if(A&16)ue(T,D,F,g,_);else if(A&2&&D.class!==F.class&&r(T,"class",null,F.class,_),A&4&&r(T,"style",D.style,F.style,_),A&8){const J=f.dynamicProps;for(let de=0;de<J.length;de++){const re=J[de],Oe=D[re],Le=F[re];(Le!==Oe||re==="value")&&r(T,re,Oe,Le,_,g)}}A&1&&p.children!==f.children&&l(T,f.children)}else!P&&k==null&&ue(T,D,F,g,_);((W=F.onVnodeUpdated)||H)&&Fe(()=>{W&&st(W,g,f,p),H&&Mt(f,p,g,"updated")},y)},Z=(p,f,g,y,_,x,P)=>{for(let T=0;T<f.length;T++){const A=p[T],k=f[T],H=A.el&&(A.type===oe||!Ft(A,k)||A.shapeFlag&198)?d(A.el):g;E(A,k,H,null,y,_,x,P,!0)}},ue=(p,f,g,y,_)=>{if(f!==g){if(f!==le)for(const x in f)!hn(x)&&!(x in g)&&r(p,x,f[x],null,_,y);for(const x in g){if(hn(x))continue;const P=g[x],T=f[x];P!==T&&x!=="value"&&r(p,x,T,P,_,y)}"value"in g&&r(p,"value",f.value,g.value,_)}},I=(p,f,g,y,_,x,P,T,A)=>{const k=f.el=p?p.el:a(""),H=f.anchor=p?p.anchor:a("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:W}=f;W&&(T=T?T.concat(W):W),p==null?(s(k,g,y),s(H,g,y),Ce(f.children||[],g,H,_,x,P,T,A)):D>0&&D&64&&F&&p.dynamicChildren&&p.dynamicChildren.length===F.length?(Z(p.dynamicChildren,F,g,_,x,P,T),(f.key!=null||_&&f===_.subTree)&&ji(p,f,!0)):ee(p,f,g,H,_,x,P,T,A)},X=(p,f,g,y,_,x,P,T,A)=>{f.slotScopeIds=T,p==null?f.shapeFlag&512?_.ctx.activate(f,g,y,P,A):_e(f,g,y,_,x,P,A):Be(p,f,A)},_e=(p,f,g,y,_,x,P)=>{const T=p.component=el(p,y,_);if(ds(p)&&(T.ctx.renderer=j),tl(T,!1,P),T.asyncDep){if(_&&_.registerDep(T,ve,P),!p.el){const A=T.subTree=K(Ie);O(null,A,f,g),p.placeholder=A.el}}else ve(T,p,f,g,_,x,P)},Be=(p,f,g)=>{const y=f.component=p.component;if(Lc(p,f,g))if(y.asyncDep&&!y.asyncResolved){ae(y,f,g);return}else y.next=f,y.update();else f.el=p.el,y.vnode=f},ve=(p,f,g,y,_,x,P)=>{const T=()=>{if(p.isMounted){let{next:D,bu:F,u:W,parent:J,vnode:de}=p;{const tt=Fi(p);if(tt){D&&(D.el=de.el,ae(p,D,P)),tt.asyncDep.then(()=>{p.isUnmounted||T()});return}}let re=D,Oe;Nt(p,!1),D?(D.el=de.el,ae(p,D,P)):D=de,F&&Hn(F),(Oe=D.props&&D.props.onVnodeBeforeUpdate)&&st(Oe,J,D,de),Nt(p,!0);const Le=Ho(p),et=p.subTree;p.subTree=Le,E(et,Le,d(et.el),w(et),p,_,x),D.el=Le.el,re===null&&Mc(p,Le.el),W&&Fe(W,_),(Oe=D.props&&D.props.onVnodeUpdated)&&Fe(()=>st(Oe,J,D,de),_)}else{let D;const{el:F,props:W}=f,{bm:J,m:de,parent:re,root:Oe,type:Le}=p,et=vn(f);Nt(p,!1),J&&Hn(J),!et&&(D=W&&W.onVnodeBeforeMount)&&st(D,re,f),Nt(p,!0);{Oe.ce&&Oe.ce._def.shadowRoot!==!1&&Oe.ce._injectChildStyle(Le);const tt=p.subTree=Ho(p);E(null,tt,g,y,p,_,x),f.el=tt.el}if(de&&Fe(de,_),!et&&(D=W&&W.onVnodeMounted)){const tt=f;Fe(()=>st(D,re,tt),_)}(f.shapeFlag&256||re&&vn(re.vnode)&&re.vnode.shapeFlag&256)&&p.a&&Fe(p.a,_),p.isMounted=!0,f=g=y=null}};p.scope.on();const A=p.effect=new Ur(T);p.scope.off();const k=p.update=A.run.bind(A),H=p.job=A.runIfDirty.bind(A);H.i=p,H.id=p.uid,A.scheduler=()=>ho(H),Nt(p,!0),k()},ae=(p,f,g)=>{f.component=p;const y=p.vnode.props;p.vnode=f,p.next=null,Bc(p,f.props,y,g),Uc(p,f.children,g),gt(),$o(p),bt()},ee=(p,f,g,y,_,x,P,T,A=!1)=>{const k=p&&p.children,H=p?p.shapeFlag:0,D=f.children,{patchFlag:F,shapeFlag:W}=f;if(F>0){if(F&128){wt(k,D,g,y,_,x,P,T,A);return}else if(F&256){lt(k,D,g,y,_,x,P,T,A);return}}W&8?(H&16&&We(k,_,x),D!==k&&l(g,D)):H&16?W&16?wt(k,D,g,y,_,x,P,T,A):We(k,_,x,!0):(H&8&&l(g,""),W&16&&Ce(D,g,y,_,x,P,T,A))},lt=(p,f,g,y,_,x,P,T,A)=>{p=p||Zt,f=f||Zt;const k=p.length,H=f.length,D=Math.min(k,H);let F;for(F=0;F<D;F++){const W=f[F]=A?At(f[F]):it(f[F]);E(p[F],W,g,null,_,x,P,T,A)}k>H?We(p,_,x,!0,!1,D):Ce(f,g,y,_,x,P,T,A,D)},wt=(p,f,g,y,_,x,P,T,A)=>{let k=0;const H=f.length;let D=p.length-1,F=H-1;for(;k<=D&&k<=F;){const W=p[k],J=f[k]=A?At(f[k]):it(f[k]);if(Ft(W,J))E(W,J,g,null,_,x,P,T,A);else break;k++}for(;k<=D&&k<=F;){const W=p[D],J=f[F]=A?At(f[F]):it(f[F]);if(Ft(W,J))E(W,J,g,null,_,x,P,T,A);else break;D--,F--}if(k>D){if(k<=F){const W=F+1,J=W<H?f[W].el:y;for(;k<=F;)E(null,f[k]=A?At(f[k]):it(f[k]),g,J,_,x,P,T,A),k++}}else if(k>F)for(;k<=D;)$e(p[k],_,x,!0),k++;else{const W=k,J=k,de=new Map;for(k=J;k<=F;k++){const je=f[k]=A?At(f[k]):it(f[k]);je.key!=null&&de.set(je.key,k)}let re,Oe=0;const Le=F-J+1;let et=!1,tt=0;const cn=new Array(Le);for(k=0;k<Le;k++)cn[k]=0;for(k=W;k<=D;k++){const je=p[k];if(Oe>=Le){$e(je,_,x,!0);continue}let nt;if(je.key!=null)nt=de.get(je.key);else for(re=J;re<=F;re++)if(cn[re-J]===0&&Ft(je,f[re])){nt=re;break}nt===void 0?$e(je,_,x,!0):(cn[nt-J]=k+1,nt>=tt?tt=nt:et=!0,E(je,f[nt],g,null,_,x,P,T,A),Oe++)}const Ao=et?qc(cn):Zt;for(re=Ao.length-1,k=Le-1;k>=0;k--){const je=J+k,nt=f[je],To=f[je+1],Po=je+1<H?To.el||Hi(To):y;cn[k]===0?E(null,nt,g,Po,_,x,P,T,A):et&&(re<0||k!==Ao[re]?Xe(nt,g,Po,2):re--)}}},Xe=(p,f,g,y,_=null)=>{const{el:x,type:P,transition:T,children:A,shapeFlag:k}=p;if(k&6){Xe(p.component.subTree,f,g,y);return}if(k&128){p.suspense.move(f,g,y);return}if(k&64){P.move(p,f,g,j);return}if(P===oe){s(x,f,g);for(let D=0;D<A.length;D++)Xe(A[D],f,g,y);s(p.anchor,f,g);return}if(P===Wn){B(p,f,g);return}if(y!==2&&k&1&&T)if(y===0)T.beforeEnter(x),s(x,f,g),Fe(()=>T.enter(x),_);else{const{leave:D,delayLeave:F,afterLeave:W}=T,J=()=>{p.ctx.isUnmounted?o(x):s(x,f,g)},de=()=>{x._isLeaving&&x[ft](!0),D(x,()=>{J(),W&&W()})};F?F(x,J,de):de()}else s(x,f,g)},$e=(p,f,g,y=!1,_=!1)=>{const{type:x,props:P,ref:T,children:A,dynamicChildren:k,shapeFlag:H,patchFlag:D,dirs:F,cacheIndex:W}=p;if(D===-2&&(_=!1),T!=null&&(gt(),bn(T,null,g,p,!0),bt()),W!=null&&(f.renderCache[W]=void 0),H&256){f.ctx.deactivate(p);return}const J=H&1&&F,de=!vn(p);let re;if(de&&(re=P&&P.onVnodeBeforeUnmount)&&st(re,f,p),H&6)Lt(p.component,g,y);else{if(H&128){p.suspense.unmount(g,y);return}J&&Mt(p,null,f,"beforeUnmount"),H&64?p.type.remove(p,f,g,j,y):k&&!k.hasOnce&&(x!==oe||D>0&&D&64)?We(k,f,g,!1,!0):(x===oe&&D&384||!_&&H&16)&&We(A,f,g),y&&qt(p)}(de&&(re=P&&P.onVnodeUnmounted)||J)&&Fe(()=>{re&&st(re,f,p),J&&Mt(p,null,f,"unmounted")},g)},qt=p=>{const{type:f,el:g,anchor:y,transition:_}=p;if(f===oe){Kt(g,y);return}if(f===Wn){M(p);return}const x=()=>{o(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(p.shapeFlag&1&&_&&!_.persisted){const{leave:P,delayLeave:T}=_,A=()=>P(g,x);T?T(p.el,x,A):A()}else x()},Kt=(p,f)=>{let g;for(;p!==f;)g=h(p),o(p),p=g;o(f)},Lt=(p,f,g)=>{const{bum:y,scope:_,job:x,subTree:P,um:T,m:A,a:k}=p;Vo(A),Vo(k),y&&Hn(y),_.stop(),x&&(x.flags|=8,$e(P,p,f,g)),T&&Fe(T,f),Fe(()=>{p.isUnmounted=!0},f)},We=(p,f,g,y=!1,_=!1,x=0)=>{for(let P=x;P<p.length;P++)$e(p[P],f,g,y,_)},w=p=>{if(p.shapeFlag&6)return w(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const f=h(p.anchor||p.el),g=f&&f[lc];return g?h(g):f};let $=!1;const R=(p,f,g)=>{let y;p==null?f._vnode&&($e(f._vnode,null,null,!0),y=f._vnode.component):E(f._vnode||null,p,f,null,null,null,g),f._vnode=p,$||($=!0,$o(y),ai(),$=!1)},j={p:E,um:$e,m:Xe,r:qt,mt:_e,mc:Ce,pc:ee,pbc:Z,n:w,o:e};return{render:R,hydrate:void 0,createApp:Pc(R)}}function Ts({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Nt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Gc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ji(e,t,n=!1){const s=e.children,o=t.children;if(U(s)&&U(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=At(o[r]),a.el=i.el),!n&&a.patchFlag!==-2&&ji(i,a)),a.type===ms&&(a.patchFlag!==-1?a.el=i.el:a.__elIndex=r+(e.type===oe?1:0)),a.type===Ie&&!a.el&&(a.el=i.el)}}function qc(e){const t=e.slice(),n=[0];let s,o,r,i,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<u?r=a+1:i=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Fi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fi(t)}function Vo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Hi(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Hi(t.subTree):null}const Ui=e=>e.__isSuspense;function Kc(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):rc(e)}const oe=Symbol.for("v-fgt"),ms=Symbol.for("v-txt"),Ie=Symbol.for("v-cmt"),Wn=Symbol.for("v-stc"),xn=[];let Ue=null;function C(e=!1){xn.push(Ue=e?null:[])}function zc(){xn.pop(),Ue=xn[xn.length-1]||null}let En=1;function Qn(e,t=!1){En+=e,e<0&&Ue&&t&&(Ue.hasOnce=!0)}function Wi(e){return e.dynamicChildren=En>0?Ue||Zt:null,zc(),En>0&&Ue&&Ue.push(e),e}function S(e,t,n,s,o,r){return Wi(b(e,t,n,s,o,r,!0))}function An(e,t,n,s,o){return Wi(K(e,t,n,s,o,!0))}function Zn(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Vi=({key:e})=>e??null,Vn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?be(e)||Ae(e)||G(e)?{i:He,r:e,k:t,f:!!n}:e:null);function b(e,t=null,n=null,s=0,o=null,r=e===oe?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vi(t),ref:t&&Vn(t),scopeId:li,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:He};return a?(yo(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),En>0&&!i&&Ue&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ue.push(c),c}const K=Yc;function Yc(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===Si)&&(e=Ie),Zn(e)){const a=Dt(e,t,!0);return n&&yo(a,n),En>0&&!r&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(e)]=a:Ue.push(a)),a.patchFlag=-2,a}if(il(e)&&(e=e.__vccOpts),t){t=Jc(t);let{class:a,style:c}=t;a&&!be(a)&&(t.class=$t(a)),fe(c)&&(fo(c)&&!U(c)&&(c=xe({},c)),t.style=ye(c))}const i=be(e)?1:Ui(e)?128:fi(e)?64:fe(e)?4:G(e)?2:0;return b(e,t,n,s,o,i,r,!0)}function Jc(e){return e?fo(e)||$i(e)?xe({},e):e:null}function Dt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:a,transition:c}=e,u=t?Qc(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Vi(u),ref:t&&t.ref?n&&r?U(r)?r.concat(Vn(t)):[r,Vn(t)]:Vn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==oe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Vt(l,c.clone(l)),l}function qe(e=" ",t=0){return K(ms,null,e,t)}function vo(e,t){const n=K(Wn,null,e);return n.staticCount=t,n}function he(e="",t=!1){return t?(C(),An(Ie,null,e)):K(Ie,null,e)}function it(e){return e==null||typeof e=="boolean"?K(Ie):U(e)?K(oe,null,e.slice()):Zn(e)?At(e):K(ms,null,String(e))}function At(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function yo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),yo(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!$i(t)?t._ctx=He:o===3&&He&&(He.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:He},n=32):(t=String(t),s&64?(n=16,t=[qe(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=$t([t.class,s.class]));else if(o==="style")t.style=ye([t.style,s.style]);else if(ss(o)){const r=t[o],i=s[o];i&&r!==i&&!(U(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function st(e,t,n,s=null){Qe(e,t,7,[n,s])}const Zc=Pi();let Xc=0;function el(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Zc,r={uid:Xc++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Li(s,o),emitsOptions:Ri(s,o),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Dc.bind(null,r),e.ce&&e.ce(r),r}let Ee=null;const xo=()=>Ee||He;let Xn,Ks;{const e=as(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};Xn=t("__VUE_INSTANCE_SETTERS__",n=>Ee=n),Ks=t("__VUE_SSR_SETTERS__",n=>Tn=n)}const $n=e=>{const t=Ee;return Xn(e),e.scope.on(),()=>{e.scope.off(),Xn(t)}},Go=()=>{Ee&&Ee.scope.off(),Xn(null)};function Gi(e){return e.vnode.shapeFlag&4}let Tn=!1;function tl(e,t=!1,n=!1){t&&Ks(t);const{props:s,children:o}=e.vnode,r=Gi(e);Nc(e,s,r,t),Hc(e,o,n||t);const i=r?nl(e,t):void 0;return t&&Ks(!1),i}function nl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,_c);const{setup:s}=n;if(s){gt();const o=e.setupContext=s.length>1?ol(e):null,r=$n(e),i=Dn(s,e,0,[e.props,o]),a=Lr(i);if(bt(),r(),(a||e.sp)&&!vn(e)&&xi(e),a){if(i.then(Go,Go),t)return i.then(c=>{qo(e,c)}).catch(c=>{ls(c,e,0)});e.asyncDep=i}else qo(e,i)}else qi(e)}function qo(e,t,n){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=oi(t)),qi(e)}function qi(e,t,n){const s=e.type;e.render||(e.render=s.render||at);{const o=$n(e);gt();try{kc(e)}finally{bt(),o()}}}const sl={get(e,t){return Se(e,"get",""),e[t]}};function ol(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,sl),slots:e.slots,emit:e.emit,expose:t}}function gs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(oi(Ya(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yn)return yn[n](e)},has(t,n){return n in t||n in yn}})):e.proxy}function rl(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function il(e){return G(e)&&"__vccOpts"in e}const se=(e,t)=>ec(e,t,Tn);function wo(e,t,n){try{Qn(-1);const s=arguments.length;return s===2?fe(t)&&!U(t)?Zn(t)?K(e,null,[t]):K(e,t):K(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Zn(n)&&(n=[n]),K(e,t,n))}finally{Qn(1)}}const al="3.5.27";let zs;const Ko=typeof window<"u"&&window.trustedTypes;if(Ko)try{zs=Ko.createPolicy("vue",{createHTML:e=>e})}catch{}const Ki=zs?e=>zs.createHTML(e):e=>e,cl="http://www.w3.org/2000/svg",ll="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,zo=pt&&pt.createElement("template"),ul={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?pt.createElementNS(cl,e):t==="mathml"?pt.createElementNS(ll,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{zo.innerHTML=Ki(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=zo.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},_t="transition",un="animation",sn=Symbol("_vtc"),zi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Yi=xe({},mi,zi),dl=e=>(e.displayName="Transition",e.props=Yi,e),bs=dl((e,{slots:t})=>wo(dc,Ji(e),t)),Bt=(e,t=[])=>{U(e)?e.forEach(n=>n(...t)):e&&e(...t)},Yo=e=>e?U(e)?e.some(t=>t.length>1):e.length>1:!1;function Ji(e){const t={};for(const I in e)I in zi||(t[I]=e[I]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=i,appearToClass:l=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,v=pl(o),E=v&&v[0],N=v&&v[1],{onBeforeEnter:O,onEnter:L,onEnterCancelled:B,onLeave:M,onLeaveCancelled:z,onBeforeAppear:ce=O,onAppear:ie=L,onAppearCancelled:Ce=B}=t,q=(I,X,_e,Be)=>{I._enterCancelled=Be,Ct(I,X?l:a),Ct(I,X?u:i),_e&&_e()},Z=(I,X)=>{I._isLeaving=!1,Ct(I,d),Ct(I,m),Ct(I,h),X&&X()},ue=I=>(X,_e)=>{const Be=I?ie:L,ve=()=>q(X,I,_e);Bt(Be,[X,ve]),Jo(()=>{Ct(X,I?c:r),ot(X,I?l:a),Yo(Be)||Qo(X,s,E,ve)})};return xe(t,{onBeforeEnter(I){Bt(O,[I]),ot(I,r),ot(I,i)},onBeforeAppear(I){Bt(ce,[I]),ot(I,c),ot(I,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave(I,X){I._isLeaving=!0;const _e=()=>Z(I,X);ot(I,d),I._enterCancelled?(ot(I,h),Ys(I)):(Ys(I),ot(I,h)),Jo(()=>{I._isLeaving&&(Ct(I,d),ot(I,m),Yo(M)||Qo(I,s,N,_e))}),Bt(M,[I,_e])},onEnterCancelled(I){q(I,!1,void 0,!0),Bt(B,[I])},onAppearCancelled(I){q(I,!0,void 0,!0),Bt(Ce,[I])},onLeaveCancelled(I){Z(I),Bt(z,[I])}})}function pl(e){if(e==null)return null;if(fe(e))return[Ps(e.enter),Ps(e.leave)];{const t=Ps(e);return[t,t]}}function Ps(e){return _a(e)}function ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[sn]||(e[sn]=new Set)).add(t)}function Ct(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[sn];n&&(n.delete(t),n.size||(e[sn]=void 0))}function Jo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let fl=0;function Qo(e,t,n,s){const o=e._endId=++fl,r=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:i,timeout:a,propCount:c}=Qi(e,t);if(!i)return s();const u=i+"end";let l=0;const d=()=>{e.removeEventListener(u,h),r()},h=m=>{m.target===e&&++l>=c&&d()};setTimeout(()=>{l<c&&d()},a+1),e.addEventListener(u,h)}function Qi(e,t){const n=window.getComputedStyle(e),s=v=>(n[v]||"").split(", "),o=s(`${_t}Delay`),r=s(`${_t}Duration`),i=Zo(o,r),a=s(`${un}Delay`),c=s(`${un}Duration`),u=Zo(a,c);let l=null,d=0,h=0;t===_t?i>0&&(l=_t,d=i,h=r.length):t===un?u>0&&(l=un,d=u,h=c.length):(d=Math.max(i,u),l=d>0?i>u?_t:un:null,h=l?l===_t?r.length:c.length:0);const m=l===_t&&/\b(?:transform|all)(?:,|$)/.test(s(`${_t}Property`).toString());return{type:l,timeout:d,propCount:h,hasTransform:m}}function Zo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Xo(n)+Xo(e[s])))}function Xo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ys(e){return(e?e.ownerDocument:document).body.offsetHeight}function hl(e,t,n){const s=e[sn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const er=Symbol("_vod"),ml=Symbol("_vsh"),gl=Symbol(""),bl=/(?:^|;)\s*display\s*:/;function vl(e,t,n){const s=e.style,o=be(n);let r=!1;if(n&&!o){if(t)if(be(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Gn(s,a,"")}else for(const i in t)n[i]==null&&Gn(s,i,"");for(const i in n)i==="display"&&(r=!0),Gn(s,i,n[i])}else if(o){if(t!==n){const i=s[gl];i&&(n+=";"+i),s.cssText=n,r=bl.test(n)}}else t&&e.removeAttribute("style");er in e&&(e[er]=r?s.display:"",e[ml]&&(s.display="none"))}const tr=/\s*!important$/;function Gn(e,t,n){if(U(n))n.forEach(s=>Gn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=yl(e,t);tr.test(n)?e.setProperty(Gt(s),n.replace(tr,""),"important"):e[s]=n}}const nr=["Webkit","Moz","ms"],Rs={};function yl(e,t){const n=Rs[t];if(n)return n;let s=Ke(t);if(s!=="filter"&&s in e)return Rs[t]=s;s=is(s);for(let o=0;o<nr.length;o++){const r=nr[o]+s;if(r in e)return Rs[t]=r}return t}const sr="http://www.w3.org/1999/xlink";function or(e,t,n,s,o,r=Ta(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(sr,t.slice(6,t.length)):e.setAttributeNS(sr,t,n):n==null||r&&!jr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":It(n)?String(n):n)}function rr(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ki(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=jr(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function Jt(e,t,n,s){e.addEventListener(t,n,s)}function xl(e,t,n,s){e.removeEventListener(t,n,s)}const ir=Symbol("_vei");function wl(e,t,n,s,o=null){const r=e[ir]||(e[ir]={}),i=r[t];if(s&&i)i.value=s;else{const[a,c]=_l(t);if(s){const u=r[t]=Sl(s,o);Jt(e,a,u,c)}else i&&(xl(e,a,i,c),r[t]=void 0)}}const ar=/(?:Once|Passive|Capture)$/;function _l(e){let t;if(ar.test(e)){t={};let s;for(;s=e.match(ar);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gt(e.slice(2)),t]}let Ds=0;const kl=Promise.resolve(),Cl=()=>Ds||(kl.then(()=>Ds=0),Ds=Date.now());function Sl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qe(El(s,n.value),t,5,[s])};return n.value=e,n.attached=Cl(),n}function El(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const cr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Al=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?hl(e,s,i):t==="style"?vl(e,n,s):ss(t)?no(t)||wl(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tl(e,t,s,i))?(rr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&or(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!be(s))?rr(e,Ke(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),or(e,t,s,i))};function Tl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&cr(t)&&G(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return cr(t)&&be(n)?!1:t in e}const Zi=new WeakMap,Xi=new WeakMap,es=Symbol("_moveCb"),lr=Symbol("_enterCb"),Pl=e=>(delete e.props.mode,e),Rl=Pl({name:"TransitionGroup",props:xe({},Yi,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=xo(),s=hi();let o,r;return _i(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Ll(o[0].el,n.vnode.el,i)){o=[];return}o.forEach(Il),o.forEach($l);const a=o.filter(Ol);Ys(n.vnode.el),a.forEach(c=>{const u=c.el,l=u.style;ot(u,i),l.transform=l.webkitTransform=l.transitionDuration="";const d=u[es]=h=>{h&&h.target!==u||(!h||h.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[es]=null,Ct(u,i))};u.addEventListener("transitionend",d)}),o=[]}),()=>{const i=Q(e),a=Ji(i);let c=i.tag||oe;if(o=[],r)for(let u=0;u<r.length;u++){const l=r[u];l.el&&l.el instanceof Element&&(o.push(l),Vt(l,Sn(l,a,s,n)),Zi.set(l,{left:l.el.offsetLeft,top:l.el.offsetTop}))}r=t.default?mo(t.default()):[];for(let u=0;u<r.length;u++){const l=r[u];l.key!=null&&Vt(l,Sn(l,a,s,n))}return K(c,null,r)}}}),Dl=Rl;function Il(e){const t=e.el;t[es]&&t[es](),t[lr]&&t[lr]()}function $l(e){Xi.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop})}function Ol(e){const t=Zi.get(e),n=Xi.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${o}px)`,r.transitionDuration="0s",e}}function Ll(e,t,n){const s=e.cloneNode(),o=e[sn];o&&o.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:i}=Qi(s);return r.removeChild(s),i}const ur=e=>{const t=e.props["onUpdate:modelValue"]||!1;return U(t)?n=>Hn(t,n):t};function Ml(e){e.target.composing=!0}function dr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Is=Symbol("_assign");function pr(e,t,n){return t&&(e=e.trim()),n&&(e=ro(e)),e}const ea={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[Is]=ur(o);const r=s||o.props&&o.props.type==="number";Jt(e,t?"change":"input",i=>{i.target.composing||e[Is](pr(e.value,n,r))}),(n||r)&&Jt(e,"change",()=>{e.value=pr(e.value,n,r)}),t||(Jt(e,"compositionstart",Ml),Jt(e,"compositionend",dr),Jt(e,"change",dr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},i){if(e[Is]=ur(i),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?ro(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===c)||(e.value=c))}},Nl=["ctrl","shift","alt","meta"],Bl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Nl.some(n=>e[`${n}Key`]&&!t.includes(n))},ta=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...r)=>{for(let i=0;i<t.length;i++){const a=Bl[t[i]];if(a&&a(o,t))return}return e(o,...r)}))},jl=xe({patchProp:Al},ul);let fr;function Fl(){return fr||(fr=Wc(jl))}const Hl=((...e)=>{const t=Fl().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Wl(s);if(!o)return;const r=t._component;!G(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,Ul(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t});function Ul(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Wl(e){return be(e)?document.querySelector(e):e}const Qt=typeof document<"u";function na(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Vl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&na(e.default)}const te=Object.assign;function $s(e,t){const n={};for(const s in t){const o=t[s];n[s]=Ze(o)?o.map(e):e(o)}return n}const wn=()=>{},Ze=Array.isArray;function hr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const sa=/#/g,Gl=/&/g,ql=/\//g,Kl=/=/g,zl=/\?/g,oa=/\+/g,Yl=/%5B/g,Jl=/%5D/g,ra=/%5E/g,Ql=/%60/g,ia=/%7B/g,Zl=/%7C/g,aa=/%7D/g,Xl=/%20/g;function _o(e){return e==null?"":encodeURI(""+e).replace(Zl,"|").replace(Yl,"[").replace(Jl,"]")}function eu(e){return _o(e).replace(ia,"{").replace(aa,"}").replace(ra,"^")}function Js(e){return _o(e).replace(oa,"%2B").replace(Xl,"+").replace(sa,"%23").replace(Gl,"%26").replace(Ql,"`").replace(ia,"{").replace(aa,"}").replace(ra,"^")}function tu(e){return Js(e).replace(Kl,"%3D")}function nu(e){return _o(e).replace(sa,"%23").replace(zl,"%3F")}function su(e){return nu(e).replace(ql,"%2F")}function Pn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const ou=/\/$/,ru=e=>e.replace(ou,"");function Os(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(s=t.slice(0,c),r=t.slice(c,a>0?a:t.length),o=e(r.slice(1))),a>=0&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=lu(s??t,n),{fullPath:s+r+i,path:s,query:o,hash:Pn(i)}}function iu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function mr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function au(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&on(t.matched[s],n.matched[o])&&ca(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function on(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ca(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!cu(e[n],t[n]))return!1;return!0}function cu(e,t){return Ze(e)?gr(e,t):Ze(t)?gr(t,e):e?.valueOf()===t?.valueOf()}function gr(e,t){return Ze(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function lu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,a;for(i=0;i<s.length;i++)if(a=s[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Qs=(function(e){return e.pop="pop",e.push="push",e})({}),Ls=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function uu(e){if(!e)if(Qt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ru(e)}const du=/^[^#]+#/;function pu(e,t){return e.replace(du,"#")+t}function fu(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const vs=()=>({left:window.scrollX,top:window.scrollY});function hu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=fu(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function br(e,t){return(history.state?history.state.position-t:-1)+e}const Zs=new Map;function mu(e,t){Zs.set(e,t)}function gu(e){const t=Zs.get(e);return Zs.delete(e),t}function bu(e){return typeof e=="string"||e&&typeof e=="object"}function la(e){return typeof e=="string"||typeof e=="symbol"}let me=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ua=Symbol("");me.MATCHER_NOT_FOUND+"",me.NAVIGATION_GUARD_REDIRECT+"",me.NAVIGATION_ABORTED+"",me.NAVIGATION_CANCELLED+"",me.NAVIGATION_DUPLICATED+"";function rn(e,t){return te(new Error,{type:e,[ua]:!0},t)}function dt(e,t){return e instanceof Error&&ua in e&&(t==null||!!(e.type&t))}const vu=["params","query","hash"];function yu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of vu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function xu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const o=n[s].replace(oa," "),r=o.indexOf("="),i=Pn(r<0?o:o.slice(0,r)),a=r<0?null:Pn(o.slice(r+1));if(i in t){let c=t[i];Ze(c)||(c=t[i]=[c]),c.push(a)}else t[i]=a}return t}function vr(e){let t="";for(let n in e){const s=e[n];if(n=tu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ze(s)?s.map(o=>o&&Js(o)):[s&&Js(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function wu(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ze(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const _u=Symbol(""),yr=Symbol(""),ys=Symbol(""),ko=Symbol(""),Xs=Symbol("");function dn(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Tt(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const u=h=>{h===!1?c(rn(me.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?c(h):bu(h)?c(rn(me.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(i&&s.enterCallbacks[o]===i&&typeof h=="function"&&i.push(h),a())},l=r(()=>e.call(s&&s.instances[o],t,n,u));let d=Promise.resolve(l);e.length<3&&(d=d.then(u)),d.catch(h=>c(h))})}function Ms(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const a in i.components){let c=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(na(c)){const u=(c.__vccOpts||c)[t];u&&r.push(Tt(u,n,s,i,a,o))}else{let u=c();r.push(()=>u.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=Vl(l)?l.default:l;i.mods[a]=l,i.components[a]=d;const h=(d.__vccOpts||d)[t];return h&&Tt(h,n,s,i,a,o)()}))}}return r}function ku(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(u=>on(u,a))?s.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>on(u,c))||o.push(c))}return[n,s,o]}let Cu=()=>location.protocol+"//"+location.host;function da(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(i);return a[0]!=="/"&&(a="/"+a),mr(a,"")}return mr(n,e)+s+o}function Su(e,t,n,s){let o=[],r=[],i=null;const a=({state:h})=>{const m=da(e,location),v=n.value,E=t.value;let N=0;if(h){if(n.value=m,t.value=h,i&&i===v){i=null;return}N=E?h.position-E.position:0}else s(m);o.forEach(O=>{O(n.value,v,{delta:N,type:Qs.pop,direction:N?N>0?Ls.forward:Ls.back:Ls.unknown})})};function c(){i=n.value}function u(h){o.push(h);const m=()=>{const v=o.indexOf(h);v>-1&&o.splice(v,1)};return r.push(m),m}function l(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(te({},h.state,{scroll:vs()}),"")}}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",l),document.removeEventListener("visibilitychange",l)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",l),document.addEventListener("visibilitychange",l),{pauseListeners:c,listen:u,destroy:d}}function xr(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?vs():null}}function Eu(e){const{history:t,location:n}=window,s={value:da(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,l){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Cu()+e+c;try{t[l?"replaceState":"pushState"](u,"",h),o.value=u}catch(m){console.error(m),n[l?"replace":"assign"](h)}}function i(c,u){r(c,te({},t.state,xr(o.value.back,c,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=c}function a(c,u){const l=te({},o.value,t.state,{forward:c,scroll:vs()});r(l.current,l,!0),r(c,te({},xr(s.value,c,null),{position:l.position+1},u),!1),s.value=c}return{location:s,state:o,push:a,replace:i}}function Au(e){e=uu(e);const t=Eu(e),n=Su(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=te({location:"",base:e,go:s,createHref:pu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let Ht=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var we=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(we||{});const Tu={type:Ht.Static,value:""},Pu=/[a-zA-Z0-9_]/;function Ru(e){if(!e)return[[]];if(e==="/")return[[Tu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=we.Static,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,c,u="",l="";function d(){u&&(n===we.Static?r.push({type:Ht.Static,value:u}):n===we.Param||n===we.ParamRegExp||n===we.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ht.Param,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==we.ParamRegExp){s=n,n=we.EscapeNext;continue}switch(n){case we.Static:c==="/"?(u&&d(),i()):c===":"?(d(),n=we.Param):h();break;case we.EscapeNext:h(),n=s;break;case we.Param:c==="("?n=we.ParamRegExp:Pu.test(c)?h():(d(),n=we.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case we.ParamRegExp:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=we.ParamRegExpEnd:l+=c;break;case we.ParamRegExpEnd:d(),n=we.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===we.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),o}const wr="[^/]+?",Du={sensitive:!1,strict:!1,start:!0,end:!0};var Re=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Re||{});const Iu=/[.+*?^${}()[\]/\\]/g;function $u(e,t){const n=te({},Du,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const l=u.length?[]:[Re.Root];n.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const h=u[d];let m=Re.Segment+(n.sensitive?Re.BonusCaseSensitive:0);if(h.type===Ht.Static)d||(o+="/"),o+=h.value.replace(Iu,"\\$&"),m+=Re.Static;else if(h.type===Ht.Param){const{value:v,repeatable:E,optional:N,regexp:O}=h;r.push({name:v,repeatable:E,optional:N});const L=O||wr;if(L!==wr){m+=Re.BonusCustomRegExp;try{`${L}`}catch(M){throw new Error(`Invalid custom RegExp for param "${v}" (${L}): `+M.message)}}let B=E?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;d||(B=N&&u.length<2?`(?:/${B})`:"/"+B),N&&(B+="?"),o+=B,m+=Re.Dynamic,N&&(m+=Re.BonusOptional),E&&(m+=Re.BonusRepeatable),L===".*"&&(m+=Re.BonusWildcard)}l.push(m)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Re.BonusStrict}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const l=u.match(i),d={};if(!l)return null;for(let h=1;h<l.length;h++){const m=l[h]||"",v=r[h-1];d[v.name]=m&&v.repeatable?m.split("/"):m}return d}function c(u){let l="",d=!1;for(const h of e){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const m of h)if(m.type===Ht.Static)l+=m.value;else if(m.type===Ht.Param){const{value:v,repeatable:E,optional:N}=m,O=v in u?u[v]:"";if(Ze(O)&&!E)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const L=Ze(O)?O.join("/"):O;if(!L)if(N)h.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);l+=L}}return l||"/"}return{re:i,score:s,keys:r,parse:a,stringify:c}}function Ou(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Re.Static+Re.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Re.Static+Re.Segment?1:-1:0}function pa(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=Ou(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(_r(s))return 1;if(_r(o))return-1}return o.length-s.length}function _r(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Lu={strict:!1,end:!0,sensitive:!1};function Mu(e,t,n){const s=$u(Ru(e.path),n),o=te(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Nu(e,t){const n=[],s=new Map;t=hr(Lu,t);function o(d){return s.get(d)}function r(d,h,m){const v=!m,E=Cr(d);E.aliasOf=m&&m.record;const N=hr(t,d),O=[E];if("alias"in d){const M=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of M)O.push(Cr(te({},E,{components:m?m.record.components:E.components,path:z,aliasOf:m?m.record:E})))}let L,B;for(const M of O){const{path:z}=M;if(h&&z[0]!=="/"){const ce=h.record.path,ie=ce[ce.length-1]==="/"?"":"/";M.path=h.record.path+(z&&ie+z)}if(L=Mu(M,h,N),m?m.alias.push(L):(B=B||L,B!==L&&B.alias.push(L),v&&d.name&&!Sr(L)&&i(d.name)),fa(L)&&c(L),E.children){const ce=E.children;for(let ie=0;ie<ce.length;ie++)r(ce[ie],L,m&&m.children[ie])}m=m||L}return B?()=>{i(B)}:wn}function i(d){if(la(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return n}function c(d){const h=Fu(d,n);n.splice(h,0,d),d.record.name&&!Sr(d)&&s.set(d.record.name,d)}function u(d,h){let m,v={},E,N;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw rn(me.MATCHER_NOT_FOUND,{location:d});N=m.record.name,v=te(kr(h.params,m.keys.filter(B=>!B.optional).concat(m.parent?m.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),d.params&&kr(d.params,m.keys.map(B=>B.name))),E=m.stringify(v)}else if(d.path!=null)E=d.path,m=n.find(B=>B.re.test(E)),m&&(v=m.parse(E),N=m.record.name);else{if(m=h.name?s.get(h.name):n.find(B=>B.re.test(h.path)),!m)throw rn(me.MATCHER_NOT_FOUND,{location:d,currentLocation:h});N=m.record.name,v=te({},h.params,d.params),E=m.stringify(v)}const O=[];let L=m;for(;L;)O.unshift(L.record),L=L.parent;return{name:N,path:E,params:v,matched:O,meta:ju(O)}}e.forEach(d=>r(d));function l(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:i,clearRoutes:l,getRoutes:a,getRecordMatcher:o}}function kr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Cr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Bu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Bu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Sr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ju(e){return e.reduce((t,n)=>te(t,n.meta),{})}function Fu(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;pa(e,t[r])<0?s=r:n=r+1}const o=Hu(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function Hu(e){let t=e;for(;t=t.parent;)if(fa(t)&&pa(e,t)===0)return t}function fa({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Er(e){const t=Ye(ys),n=Ye(ko),s=se(()=>{const c=Ne(e.to);return t.resolve(c)}),o=se(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const h=d.findIndex(on.bind(null,l));if(h>-1)return h;const m=Ar(c[u-2]);return u>1&&Ar(l)===m&&d[d.length-1].path!==m?d.findIndex(on.bind(null,c[u-2])):h}),r=se(()=>o.value>-1&&qu(n.params,s.value.params)),i=se(()=>o.value>-1&&o.value===n.matched.length-1&&ca(n.params,s.value.params));function a(c={}){if(Gu(c)){const u=t[Ne(e.replace)?"replace":"push"](Ne(e.to)).catch(wn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:se(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}function Uu(e){return e.length===1?e[0]:e}const Wu=yi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Er,setup(e,{slots:t}){const n=Rn(Er(e)),{options:s}=Ye(ys),o=se(()=>({[Tr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Tr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&Uu(t.default(n));return e.custom?r:wo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Vu=Wu;function Gu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qu(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Ze(o)||o.length!==s.length||s.some((r,i)=>r.valueOf()!==o[i].valueOf()))return!1}return!0}function Ar(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Tr=(e,t,n)=>e??t??n,Ku=yi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ye(Xs),o=se(()=>e.route||s.value),r=Ye(yr,0),i=se(()=>{let u=Ne(r);const{matched:l}=o.value;let d;for(;(d=l[u])&&!d.components;)u++;return u}),a=se(()=>o.value.matched[i.value]);Un(yr,se(()=>i.value+1)),Un(_u,a),Un(Xs,o);const c=ge();return Rt(()=>[c.value,a.value,e.name],([u,l,d],[h,m,v])=>{l&&(l.instances[d]=u,m&&m!==l&&u&&u===h&&(l.leaveGuards.size||(l.leaveGuards=m.leaveGuards),l.updateGuards.size||(l.updateGuards=m.updateGuards))),u&&l&&(!m||!on(l,m)||!h)&&(l.enterCallbacks[d]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=o.value,l=e.name,d=a.value,h=d&&d.components[l];if(!h)return Pr(n.default,{Component:h,route:u});const m=d.props[l],v=m?m===!0?u.params:typeof m=="function"?m(u):m:null,N=wo(h,te({},v,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[l]=null)},ref:c}));return Pr(n.default,{Component:N,route:u})||N}}});function Pr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const zu=Ku;function Yu(e){const t=Nu(e.routes,e),n=e.parseQuery||xu,s=e.stringifyQuery||vr,o=e.history,r=dn(),i=dn(),a=dn(),c=Ja(kt);let u=kt;Qt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=$s.bind(null,w=>""+w),d=$s.bind(null,su),h=$s.bind(null,Pn);function m(w,$){let R,j;return la(w)?(R=t.getRecordMatcher(w),j=$):j=w,t.addRoute(j,R)}function v(w){const $=t.getRecordMatcher(w);$&&t.removeRoute($)}function E(){return t.getRoutes().map(w=>w.record)}function N(w){return!!t.getRecordMatcher(w)}function O(w,$){if($=te({},$||c.value),typeof w=="string"){const g=Os(n,w,$.path),y=t.resolve({path:g.path},$),_=o.createHref(g.fullPath);return te(g,y,{params:h(y.params),hash:Pn(g.hash),redirectedFrom:void 0,href:_})}let R;if(w.path!=null)R=te({},w,{path:Os(n,w.path,$.path).path});else{const g=te({},w.params);for(const y in g)g[y]==null&&delete g[y];R=te({},w,{params:d(g)}),$.params=d($.params)}const j=t.resolve(R,$),Y=w.hash||"";j.params=l(h(j.params));const p=iu(s,te({},w,{hash:eu(Y),path:j.path})),f=o.createHref(p);return te({fullPath:p,hash:Y,query:s===vr?wu(w.query):w.query||{}},j,{redirectedFrom:void 0,href:f})}function L(w){return typeof w=="string"?Os(n,w,c.value.path):te({},w)}function B(w,$){if(u!==w)return rn(me.NAVIGATION_CANCELLED,{from:$,to:w})}function M(w){return ie(w)}function z(w){return M(te(L(w),{replace:!0}))}function ce(w,$){const R=w.matched[w.matched.length-1];if(R&&R.redirect){const{redirect:j}=R;let Y=typeof j=="function"?j(w,$):j;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=L(Y):{path:Y},Y.params={}),te({query:w.query,hash:w.hash,params:Y.path!=null?{}:w.params},Y)}}function ie(w,$){const R=u=O(w),j=c.value,Y=w.state,p=w.force,f=w.replace===!0,g=ce(R,j);if(g)return ie(te(L(g),{state:typeof g=="object"?te({},Y,g.state):Y,force:p,replace:f}),$||R);const y=R;y.redirectedFrom=$;let _;return!p&&au(s,j,R)&&(_=rn(me.NAVIGATION_DUPLICATED,{to:y,from:j}),Xe(j,j,!0,!1)),(_?Promise.resolve(_):Z(y,j)).catch(x=>dt(x)?dt(x,me.NAVIGATION_GUARD_REDIRECT)?x:wt(x):ee(x,y,j)).then(x=>{if(x){if(dt(x,me.NAVIGATION_GUARD_REDIRECT))return ie(te({replace:f},L(x.to),{state:typeof x.to=="object"?te({},Y,x.to.state):Y,force:p}),$||y)}else x=I(y,j,!0,f,Y);return ue(y,j,x),x})}function Ce(w,$){const R=B(w,$);return R?Promise.reject(R):Promise.resolve()}function q(w){const $=Kt.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(w):w()}function Z(w,$){let R;const[j,Y,p]=ku(w,$);R=Ms(j.reverse(),"beforeRouteLeave",w,$);for(const g of j)g.leaveGuards.forEach(y=>{R.push(Tt(y,w,$))});const f=Ce.bind(null,w,$);return R.push(f),We(R).then(()=>{R=[];for(const g of r.list())R.push(Tt(g,w,$));return R.push(f),We(R)}).then(()=>{R=Ms(Y,"beforeRouteUpdate",w,$);for(const g of Y)g.updateGuards.forEach(y=>{R.push(Tt(y,w,$))});return R.push(f),We(R)}).then(()=>{R=[];for(const g of p)if(g.beforeEnter)if(Ze(g.beforeEnter))for(const y of g.beforeEnter)R.push(Tt(y,w,$));else R.push(Tt(g.beforeEnter,w,$));return R.push(f),We(R)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),R=Ms(p,"beforeRouteEnter",w,$,q),R.push(f),We(R))).then(()=>{R=[];for(const g of i.list())R.push(Tt(g,w,$));return R.push(f),We(R)}).catch(g=>dt(g,me.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function ue(w,$,R){a.list().forEach(j=>q(()=>j(w,$,R)))}function I(w,$,R,j,Y){const p=B(w,$);if(p)return p;const f=$===kt,g=Qt?history.state:{};R&&(j||f?o.replace(w.fullPath,te({scroll:f&&g&&g.scroll},Y)):o.push(w.fullPath,Y)),c.value=w,Xe(w,$,R,f),wt()}let X;function _e(){X||(X=o.listen((w,$,R)=>{if(!Lt.listening)return;const j=O(w),Y=ce(j,Lt.currentRoute.value);if(Y){ie(te(Y,{replace:!0,force:!0}),j).catch(wn);return}u=j;const p=c.value;Qt&&mu(br(p.fullPath,R.delta),vs()),Z(j,p).catch(f=>dt(f,me.NAVIGATION_ABORTED|me.NAVIGATION_CANCELLED)?f:dt(f,me.NAVIGATION_GUARD_REDIRECT)?(ie(te(L(f.to),{force:!0}),j).then(g=>{dt(g,me.NAVIGATION_ABORTED|me.NAVIGATION_DUPLICATED)&&!R.delta&&R.type===Qs.pop&&o.go(-1,!1)}).catch(wn),Promise.reject()):(R.delta&&o.go(-R.delta,!1),ee(f,j,p))).then(f=>{f=f||I(j,p,!1),f&&(R.delta&&!dt(f,me.NAVIGATION_CANCELLED)?o.go(-R.delta,!1):R.type===Qs.pop&&dt(f,me.NAVIGATION_ABORTED|me.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),ue(j,p,f)}).catch(wn)}))}let Be=dn(),ve=dn(),ae;function ee(w,$,R){wt(w);const j=ve.list();return j.length?j.forEach(Y=>Y(w,$,R)):console.error(w),Promise.reject(w)}function lt(){return ae&&c.value!==kt?Promise.resolve():new Promise((w,$)=>{Be.add([w,$])})}function wt(w){return ae||(ae=!w,_e(),Be.list().forEach(([$,R])=>w?R(w):$()),Be.reset()),w}function Xe(w,$,R,j){const{scrollBehavior:Y}=e;if(!Qt||!Y)return Promise.resolve();const p=!R&&gu(br(w.fullPath,0))||(j||!R)&&history.state&&history.state.scroll||null;return us().then(()=>Y(w,$,p)).then(f=>f&&hu(f)).catch(f=>ee(f,w,$))}const $e=w=>o.go(w);let qt;const Kt=new Set,Lt={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:N,getRoutes:E,resolve:O,options:e,push:M,replace:z,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:ve.add,isReady:lt,install(w){w.component("RouterLink",Vu),w.component("RouterView",zu),w.config.globalProperties.$router=Lt,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Ne(c)}),Qt&&!qt&&c.value===kt&&(qt=!0,M(o.location).catch(j=>{}));const $={};for(const j in kt)Object.defineProperty($,j,{get:()=>c.value[j],enumerable:!0});w.provide(ys,Lt),w.provide(ko,ni($)),w.provide(Xs,c);const R=w.unmount;Kt.add(w),w.unmount=function(){Kt.delete(w),Kt.size<1&&(u=kt,X&&X(),X=null,c.value=kt,qt=!1,ae=!1),R()}}};function We(w){return w.reduce(($,R)=>$.then(()=>q(R)),Promise.resolve())}return Lt}function On(){return Ye(ys)}function Co(e){return Ye(ko)}const Ju={__name:"App",setup(e){const t=On(),n=ge(!0);return t.isReady().then(()=>{setTimeout(()=>{n.value=!1},100)}),(s,o)=>{const r=fs("router-view");return C(),An(r,null,{default:ct(({Component:i,route:a})=>[K(bs,{name:n.value?"":"page",mode:"out-in"},{default:ct(()=>[(C(),An(wc(i),{key:a.path}))]),_:2},1032,["name"])]),_:1})}}},ke=Rn({discordUser:null,spotify:null,discordStatus:"offline",discordStatusColor:"text-catppuccin-subtle",editorActivity:null,isConnected:!1,isLoading:!0});class Qu{constructor(){this.ws=null,this.heartbeat=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.maxAttempts=5,this.userId="766897363050037248",this.isConnecting=!1}connect(){if(!(this.isConnecting||this.ws&&this.ws.readyState===WebSocket.OPEN)){this.isConnecting=!0,ke.isLoading=!0;try{this.ws=new WebSocket("wss://api.lanyard.rest/socket"),this.ws.onopen=()=>{this.isConnecting=!1,this.reconnectAttempts=0,ke.isConnected=!0,this.ws.send(JSON.stringify({op:2,d:{subscribe_to_id:this.userId}}))},this.ws.onmessage=t=>{try{this.handleMessage(JSON.parse(t.data))}catch{}},this.ws.onclose=t=>{this.isConnecting=!1,ke.isConnected=!1,this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),t.code!==1e3&&this.reconnectAttempts<this.maxAttempts&&this.scheduleReconnect()},this.ws.onerror=()=>{this.isConnecting=!1,ke.isConnected=!1}}catch{this.isConnecting=!1,ke.isLoading=!1,this.scheduleReconnect()}}}handleMessage(t){t.op===1?this.startHeartbeat(t.d.heartbeat_interval):t.op===0&&(t.t==="INIT_STATE"||t.t==="PRESENCE_UPDATE")&&(this.updatePresence(t.d),ke.isLoading=!1)}updatePresence(t){t.discord_user&&(ke.discordUser={username:t.discord_user.username,discriminator:t.discord_user.discriminator,avatar:t.discord_user.avatar,id:t.discord_user.id}),ke.spotify=t.spotify?{song:t.spotify.song,artist:t.spotify.artist,track_id:t.spotify.track_id}:null,t.discord_status&&(ke.discordStatus=t.discord_status,ke.discordStatusColor=t.discord_status==="online"?"text-catppuccin-gold":"text-catppuccin-subtle"),ke.editorActivity=t.activities?.find(n=>n.name==="Visual Studio Code"||n.name==="Code"||n.name==="Zed")}startHeartbeat(t){this.heartbeat&&clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({op:3}))},t)}scheduleReconnect(){this.reconnectTimeout&&clearTimeout(this.reconnectTimeout),this.reconnectAttempts++;const t=Math.min(1e3*Math.pow(2,this.reconnectAttempts-1),3e4);this.reconnectTimeout=setTimeout(()=>this.connect(),t)}disconnect(){this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.heartbeat&&(clearInterval(this.heartbeat),this.heartbeat=null),this.ws&&(this.ws.close(1e3,"Manual disconnect"),this.ws=null),ke.isConnected=!1}}const Zu=new Qu;Zu.connect();const Rr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",white:"#cdd6f4"},Xu=[{id:"posts",label:"posts",href:"/posts",external:!1,accentColor:"mauve"},{id:"projects",label:"projects",href:"/projects",external:!1,accentColor:"lavender"},{id:"github",label:"github",href:"https://github.com/Hecker-01",external:!0,accentColor:"white"}];function ed(){return Xu.map(e=>({...e,accentColor:Rr[e.accentColor]||Rr.mauve}))}const Ot=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},td={class:"mb-6"},nd={class:"mb-6"},sd={class:"flex items-center flex-wrap gap-3 text-sm mt-4"},od=["href"],rd={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},id={class:"space-y-1 text-sm"},ad={key:0,class:"flex items-center gap-2"},cd={class:"text-catppuccin-text"},ld={key:1,class:"flex items-center gap-2"},ud={class:"text-catppuccin-text truncate"},dd={key:2,class:"flex items-center gap-2"},pd={class:"text-catppuccin-blue"},fd={class:"text-catppuccin-text truncate"},hd={key:0},md={key:1,class:"text-catppuccin-subtle"},gd={key:2},bd={__name:"HeroSection",setup(e){const t=ed(),n=se(()=>ke.discordStatusColor),s=se(()=>ke.spotify),o=se(()=>ke.discordStatus),r=se(()=>ke.discordUser),i=se(()=>ke.editorActivity),a=se(()=>ke.isLoading),c=se(()=>{if(!i.value)return null;if(i.value.details&&i.value.details.toLowerCase().includes("idling"))return"idling";const u=i.value.name,l=u==="Zed",m=u==="IntelliJ IDEA Ultimate"||u==="IntelliJ IDEA"||u==="Android Studio";let v="",E="";return m?(v=i.value.details||"",E=i.value.state||""):l?(v=i.value.state||"",E=i.value.details||""):(v=i.value.details||"",E=i.value.state||""),v=v.replace(/editing /i,"").replace(/working on /i,"").trim(),E=E.replace(/in /i,"").replace(/workspace: /i,"").trim(),{name:u,workspace:E,filename:v}});return(u,l)=>{const d=fs("router-link");return C(),S("div",td,[b("div",nd,[l[3]||(l[3]=vo('<div class="text-catppuccin-subtle text-sm mb-2" data-v-81fbccef>~$ whoami</div><h1 class="text-3xl md:text-4xl font-bold text-catppuccin-text mb-2" data-v-81fbccef><span class="text-catppuccin-mauve" data-v-81fbccef>jesse</span><span class="text-catppuccin-subtle" data-v-81fbccef>@</span><span class="text-catppuccin-blue" data-v-81fbccef>heckr.dev</span></h1><div class="text-sm text-catppuccin-gray 6" data-v-81fbccef><span class="text-catppuccin-subtle" data-v-81fbccef>aka </span><span class="text-catppuccin-green" data-v-81fbccef>Hecker_01</span></div>',3)),b("div",sd,[(C(!0),S(oe,null,Te(Ne(t),h=>(C(),S(oe,{key:h.id},[h.external?(C(),S("a",{key:1,href:h.href,target:"_blank",class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group",style:ye({"--accent-color":h.accentColor})},[l[1]||(l[1]=b("span",{class:"text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1)),b("span",{class:"font-medium transition-colors",style:ye({color:h.accentColor})},"~/"+V(h.label),5),l[2]||(l[2]=b("svg",{class:"w-3 h-3 text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1))],12,od)):(C(),An(d,{key:0,to:h.href,class:"px-3 py-1.5 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all flex items-center gap-1.5 group",style:ye({"--accent-color":h.accentColor})},{default:ct(()=>[l[0]||(l[0]=b("span",{class:"text-xs text-catppuccin-subtle group-hover:text-catppuccin-text transition-colors"},"cd",-1)),b("span",{class:"font-medium transition-colors",style:ye({color:h.accentColor})},"~/"+V(h.label),5)]),_:2},1032,["to","style"]))],64))),128))])]),l[10]||(l[10]=b("div",{class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},[b("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cat about.txt"),b("p",{class:"text-catppuccin-text leading-relaxed mb-4"},[qe(" Hi! I'm Jesse, I code things for Minecraft, Discord, random CLI tools, websites, apps and more. "),b("br"),qe(" My passion is backend development, but I also enjoy working on frontend and mobile projects. "),b("br"),qe(" I have experience in a lot of different programming languages and frameworks, and I love learning new ones! ")])],-1)),b("div",rd,[l[9]||(l[9]=b("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ ps aux | grep heckr.dev ",-1)),b("div",id,[!a.value&&r.value?(C(),S("div",ad,[l[4]||(l[4]=b("span",{class:"text-catppuccin-blue"},"discord",-1)),l[5]||(l[5]=b("span",{class:"text-catppuccin-subtle"},":",-1)),b("span",cd,V(r.value.username),1),b("span",{class:$t(n.value)},"["+V(o.value)+"]",3)])):he("",!0),!a.value&&s.value?(C(),S("div",ld,[l[6]||(l[6]=b("span",{class:"text-catppuccin-green"},"spotify",-1)),l[7]||(l[7]=b("span",{class:"text-catppuccin-subtle"},":",-1)),b("span",ud,V(s.value.song)+" - "+V(s.value.artist),1)])):he("",!0),!a.value&&i.value&&c.value&&(c.value.workspace||c.value.filename)?(C(),S("div",dd,[b("span",pd,V(c.value.name==="Zed"?"zed":c.value.name==="IntelliJ IDEA Ultimate"||c.value.name==="IntelliJ IDEA"?"intellij":c.value.name==="Android Studio"?"android-studio":"vscode"),1),l[8]||(l[8]=b("span",{class:"text-catppuccin-subtle"},":",-1)),b("span",fd,[c.value.workspace?(C(),S("span",hd,V(c.value.workspace.toLowerCase()),1)):he("",!0),c.value.workspace&&c.value.filename?(C(),S("span",md," / ")):he("",!0),c.value.filename?(C(),S("span",gd,V(c.value.filename.toLowerCase()),1)):he("",!0)])])):he("",!0)])])])}}},vd=Ot(bd,[["__scopeId","data-v-81fbccef"]]),yd={class:"border-l-2 border-catppuccin-surface pl-4 mb-4"},xd={key:0,class:"text-sm text-catppuccin-subtle"},wd={key:1,class:"text-sm text-catppuccin-text"},_d={key:0,class:"text-catppuccin-subtle"},kd={key:2,class:"text-sm text-catppuccin-subtle"},Cd={__name:"LanguagesList",props:{languages:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){return(t,n)=>(C(),S("div",yd,[n[0]||(n[0]=b("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls ~/tools",-1)),e.loading?(C(),S("div",xd," loading languages... ")):e.languages.length?(C(),S("div",wd,[(C(!0),S(oe,null,Te(e.languages,(s,o)=>(C(),S("span",{key:s.language},[qe(V(s.language)+"("+V(s.count)+")",1),o<e.languages.length-1?(C(),S("span",_d," | ")):he("",!0)]))),128))])):(C(),S("div",kd,"no languages found"))]))}},Sd=`---
title: Portfolio
slug: portfolio
description: Built with Vue.js and Tailwind CSS, showcasing my projects and skills.
coverImage: /screenshot.png
accentColor: lavender
tags: [vue, tailwind, portfolio, frontend]
url: https://heckr.dev
github: https://github.com/hecker-01/website
status: active
unlisted: false
---

## About This Portfolio

This is my personal portfolio website, designed to showcase my projects, skills, and experience as a developer. Built from the ground up with performance and aesthetics in mind.

## Features

- **Dark Theme**: Utilizing the Catppuccin Mocha color palette for a comfortable viewing experience
- **Blog/Posts System**: Full markdown support with syntax highlighting, code blocks, and custom components
- **Projects Showcase**: Dynamic project cards with accent colors and cover images
- **GitHub Integration**: Real-time fetching of repositories and contribution data
- **Responsive Design**: Looks great on all devices from mobile to desktop

## Technical Highlights

- Built with Vue.js 3 and Vite for fast development and optimal performance
- Styled with Tailwind CSS for rapid UI development
- Custom markdown parser with support for code highlighting, hints, and collapsible sections
- Animated page transitions and interactive elements
`,Ed=`---
title: satisSuite
slug: satissuite
description: A comprehensive plugin suite designed to streamline moderation, enhance player experience, and give you complete control over your server.
coverImage: /screenshot-satissuite.png
accentColor: mauve
tags: [java, minecraft, plugin, spigot]
url: https://satissuite.heckr.dev
status: in-progress
unlisted: true
---

## About satisSuite

satisSuite is a comprehensive Minecraft plugin suite that provides server administrators with powerful tools to manage their servers effectively. It's designed to be modular, efficient, and easy to configure.

## Core Modules

- **Moderation Tools**: Complete set of moderation commands including bans, mutes, kicks, and warnings
- **Player Management**: Track player statistics, manage permissions, and handle player data
- **Server Utilities**: Various quality-of-life improvements for both players and administrators
- **Custom Features**: Extensible system for adding server-specific functionality

## Key Features

- Modular architecture - enable only what you need
- Comprehensive permission system
- Clean and intuitive command structure
- Active development and support
- Performance-optimized for large servers

## Technical Details

Built with Java for the Spigot/Paper Minecraft server platform. Focuses on clean code architecture and maintainability while delivering excellent performance even on high-traffic servers.
`,Ad=`---
title: Yume Ramen
slug: yume-ramen
description: A full application with an app, dashboard, and API, built with Vue.js, Tailwind CSS, and Node.js. It features a sleek design and robust functionality.
coverImage: /screenshot-yume-front.png
accentColor: red
tags: [vue, tailwind, nodejs, api, fullstack]
url: https://yume.bram-jesse.sd-lab.nl/
github: https://github.com/hecker-01/yume-front
status: active
unlisted: false
---

## About Yume Ramen

Yume Ramen is a comprehensive full-stack application that demonstrates modern web development practices. The project consists of three main components:

- **Frontend App**: A Vue.js customer-facing application with an elegant UI
- **Admin Dashboard**: A separate Vue.js application for managing the restaurant operations
- **Backend API**: A Node.js/Express API that powers both frontend applications

## Key Features

- Modern, responsive design using Tailwind CSS
- Real-time order management system
- User authentication and authorization
- RESTful API architecture
- Clean and maintainable codebase

## Tech Stack

The application leverages modern technologies to deliver a seamless experience:

- **Vue.js 3** with Composition API for reactive UI
- **Tailwind CSS** for utility-first styling
- **Node.js & Express** for the backend server
- **MongoDB** for data persistence
`,Dr={mauve:"#cba6f7",blue:"#89b4fa",green:"#a6e3a1",red:"#f38ba8",pink:"#f5c2e7",yellow:"#f9e2af",teal:"#94e2d5",sapphire:"#74c7ec",sky:"#89dceb",lavender:"#b4befe",peach:"#fab387",maroon:"#eba0ac",flamingo:"#f2cdcd"},Td=Object.assign({"/projects/portfolio.md":Sd,"/projects/satissuite.md":Ed,"/projects/yume-ramen.md":Ad}),Pd=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const c=(u,l)=>{l=l.trim(),l.startsWith("[")&&l.endsWith("]")?o[u]=l.slice(1,-1).split(",").map(d=>d.trim()):l==="true"?o[u]=!0:l==="false"?o[u]=!1:o[u]=l};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&c(i,a);const[d,...h]=u.split(":");if(!d||d.trim()==="")return;i=d.trim(),a=h.join(":").trim()}}),i&&a&&c(i,a),{frontmatter:o,content:s}},Rd=()=>{const e=[];let t=1;return Object.entries(Td).forEach(([n,s])=>{const{frontmatter:o,content:r}=Pd(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,description:o.description||"",coverImage:o.coverImage||null,accentColor:o.accentColor||"mauve",accentColorHex:Dr[o.accentColor]||Dr.mauve,tags:o.tags||[],url:o.url||null,github:o.github||null,status:o.status||"active",unlisted:o.unlisted===!0,content:r.trim()})}),e};let jn=null;const xs=(e=!1)=>(jn||(jn=Rd()),(e?[...jn]:jn.filter(n=>!n.unlisted)).sort((n,s)=>n.title.localeCompare(s.title))),Dd=e=>xs(!0).find(t=>t.slug===e),Id=()=>{const e=new Set;return xs().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()};function $d(){return xs().map(e=>({id:e.id,slug:e.slug,name:e.title,description:e.description,link:e.url||e.github||"#",screenshot:e.coverImage,accentColor:e.accentColorHex}))}const Od={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},Ld={key:0,class:"text-sm text-catppuccin-subtle"},Md={class:"lg:flex-1 lg:relative"},Nd={key:0,class:"w-full flex-1 overflow-hidden bg-catppuccin-surface/30"},Bd=["src","alt"],jd={class:"px-3 py-3 flex-shrink-0"},Fd={class:"flex items-start gap-3"},Hd={class:"flex-1 min-w-0"},Ud={class:"text-xs text-catppuccin-gray leading-relaxed"},Wd={key:0,class:"flex justify-center gap-1.5 mt-3 flex-shrink-0"},Vd=["onClick"],Gd={__name:"ShowcaseCarousel",setup(e){const t=On(),n=ge([]),s=ge(0),o=ge(!1);let r=null;const i=se(()=>n.value.length?n.value[s.value]:null),a=c=>{t.push({path:"/projects",query:{project:c}})};return xt(()=>{n.value=$d(),n.value.length>1&&(r=setInterval(()=>{o.value||(s.value=(s.value+1)%n.value.length)},1e4))}),In(()=>{r&&clearInterval(r)}),(c,u)=>(C(),S("div",Od,[u[5]||(u[5]=b("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ cat ~/showcase",-1)),n.value.length?(C(),S("div",{key:1,class:"relative lg:flex-1 flex flex-col",onMouseenter:u[2]||(u[2]=l=>o.value=!0),onMouseleave:u[3]||(u[3]=l=>o.value=!1)},[b("div",Md,[K(bs,{name:"showcase",mode:"out-in"},{default:ct(()=>[i.value?(C(),S("div",{key:i.value.id,onClick:u[0]||(u[0]=l=>a(i.value.slug)),class:"group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all overflow-hidden border-catppuccin-surface/60 lg:absolute lg:inset-0 flex flex-col cursor-pointer",style:ye({borderColor:`${i.value.accentColor}40`})},[i.value.screenshot?(C(),S("div",Nd,[b("img",{src:i.value.screenshot,alt:i.value.name,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,Bd)])):he("",!0),b("div",jd,[b("div",Fd,[b("span",{class:"transition-colors",style:ye({color:i.value.accentColor})},">",4),b("div",Hd,[b("h3",{class:"text-sm font-medium text-catppuccin-text transition-colors mb-1",style:ye({color:i.value.accentColor})},V(i.value.name),5),b("p",Ud,V(i.value.description),1)])])])],4)):he("",!0)]),_:1})]),n.value.length>1?(C(),S("div",Wd,[(C(!0),S(oe,null,Te(n.value,(l,d)=>(C(),S("button",{key:`dot-${l.id}`,onClick:h=>s.value=d,class:$t(["w-2 h-2.5 rounded-full transition-all",d===s.value?"bg-catppuccin-mauve w-4":"bg-catppuccin-surface/60 hover:bg-catppuccin-surface"]),style:ye(d===s.value?{backgroundColor:i.value.accentColor}:{})},null,14,Vd))),128))])):he("",!0),b("button",{onClick:u[1]||(u[1]=l=>Ne(t).push("/projects")),class:"mt-3 w-full py-2 px-3 rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-all flex items-center justify-center gap-2"},[...u[4]||(u[4]=[b("span",null,"more projects",-1),b("span",null,"→",-1)])])],32)):(C(),S("div",Ld," no items to showcase "))]))}},qd=Ot(Gd,[["__scopeId","data-v-5e646ea4"]]),So="hecker-01",ha=async()=>{try{const e=[];let t=1;const n=100;for(;;){const r=await fetch(`https://api.github.com/users/${So}/repos?per_page=${n}&page=${t}`);if(!r.ok)break;const i=await r.json();if(!i.length||(e.push(...i),i.length<n))break;t++}const s={};e.forEach(r=>{r.language&&(s[r.language]=(s[r.language]||0)+1)});const o=Object.entries(s).sort((r,i)=>i[1]-r[1]).map(([r,i])=>({language:r,count:i}));return{repos:e,languages:o,totalRepos:e.length}}catch(e){return console.error("Error fetching GitHub data:",e),{repos:[],languages:[],totalRepos:0}}},Kd=async()=>{const t=new Date;t.getFullYear();try{const n=await fetch(`https://github-contributions-api.jogruber.de/v4/${So}?y=last`);if(!n.ok)throw new Error("Failed to fetch contribution data");const s=await n.json(),o=[];if(s.contributions&&s.contributions.forEach(r=>{o.push({date:r.date,count:r.count})}),o.length>0){const i=new Date(t);i.setDate(i.getDate()-371+1);const a=[];for(let c=0;c<371;c++){const u=new Date(i);u.setDate(u.getDate()+c);const l=u.toISOString().split("T")[0],d=o.find(h=>h.date===l);a.push({date:l,count:d?d.count:0})}return a}throw new Error("No contributions data available")}catch(n){console.error("Error fetching contribution data:",n);const s=new Map;for(let o=370;o>=0;o--){const r=new Date(t);r.setDate(r.getDate()-o);const i=r.toISOString().split("T")[0];s.set(i,0)}return Array.from(s.entries()).sort((o,r)=>o[0].localeCompare(r[0])).map(([o,r])=>({date:o,count:r}))}},Ns=e=>e===0?0:e<=2?1:e<=5?2:e<=8?3:4,zd=e=>`https://github.com/${So}?tab=overview&from=${e}&to=${e}`,Yd={class:"mt-6 border-l-2 border-catppuccin-surface pl-4"},Jd={class:"flex items-center justify-between mb-3"},Qd={key:0,class:"flex items-center gap-1 text-[10px] text-catppuccin-subtle"},Zd={key:0},Xd={key:1},ep={class:"overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-thin"},tp={class:"inline-flex md:flex gap-[3px] md:gap-1",style:{"min-width":"max-content"}},np=["href","title"],sp=["title"],op={class:"text-xs text-catppuccin-gray mt-2"},rp={__name:"ContributionGraph",setup(e){const t=ge([]),n=ge(!0),s=se(()=>{const i=[];for(let a=0;a<t.value.length;a+=7)i.push(t.value.slice(a,a+7));return i}),o=se(()=>t.value.reduce((i,a)=>i+a.count,0)),r=async()=>{try{n.value=!0,t.value=await Kd()}catch{}finally{n.value=!1}};return xt(()=>{r()}),(i,a)=>(C(),S("div",Yd,[b("div",Jd,[a[1]||(a[1]=b("div",{class:"text-catppuccin-subtle text-sm"},' ~$ git log --oneline --since="1.year.ago" | wc -l ',-1)),n.value?he("",!0):(C(),S("div",Qd,[...a[0]||(a[0]=[vo('<span>less</span><div class="flex gap-[1px]"><div class="w-2 h-2 rounded-[2px] bg-catppuccin-surface/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/30"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/50"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green/70"></div><div class="w-2 h-2 rounded-[2px] bg-catppuccin-green"></div></div><span>more</span>',3)])]))]),n.value?(C(),S("div",Zd,[...a[2]||(a[2]=[b("div",{class:"h-[60px] bg-catppuccin-surface/30 rounded cursor-blink"},null,-1)])])):(C(),S("div",Xd,[b("div",ep,[b("div",tp,[(C(!0),S(oe,null,Te(s.value,(c,u)=>(C(),S("div",{key:u,class:"flex flex-col gap-[3px] md:gap-1 md:flex-1"},[(C(!0),S(oe,null,Te(c,(l,d)=>(C(),S(oe,{key:d},[l.count>0?(C(),S("a",{key:0,href:Ne(zd)(l.date),target:"_blank",rel:"noopener noreferrer",class:$t(["w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm transition-all hover:ring-1 hover:ring-catppuccin-green hover:scale-110 cursor-pointer",[Ne(Ns)(l.count)===1?"bg-catppuccin-green/30 hover:bg-catppuccin-green/40":Ne(Ns)(l.count)===2?"bg-catppuccin-green/50 hover:bg-catppuccin-green/60":Ne(Ns)(l.count)===3?"bg-catppuccin-green/70 hover:bg-catppuccin-green/80":"bg-catppuccin-green hover:bg-catppuccin-green"]]),title:`${l.date}: ${l.count} contributions - Click to view on GitHub`},null,10,np)):(C(),S("div",{key:1,class:"w-[10px] h-[10px] md:w-auto md:h-auto md:aspect-square rounded-sm bg-catppuccin-surface/50",title:`${l.date}: ${l.count} contributions`},null,8,sp))],64))),128))]))),128))])]),b("div",op,V(o.value)+" contributions in the last year ",1)]))]))}},ip={class:"w-full py-8 text-center text-sm text-catppuccin-subtle dark:text-gray-400"},an={__name:"Footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(C(),S("footer",ip,[b("p",null,"© 2020 - "+V(Ne(t))+" heckr.dev | All rights reserved.",1)]))}},ap={class:"border-l-2 border-catppuccin-surface pl-4 min-w-0 flex flex-col lg:h-full"},cp={class:"lg:flex-1 flex flex-col"},lp={key:0,class:"space-y-2"},up={key:1,class:"text-sm text-catppuccin-subtle"},dp=["href"],pp={class:"flex items-start gap-3 text-sm hover:text-catppuccin-mauve transition-colors px-3 py-2"},fp={class:"flex-1 min-w-0"},hp={class:"flex items-center gap-2"},mp=["title"],gp={key:0,class:"text-catppuccin-yellow text-xs flex-shrink-0"},bp=["title"],vp={key:3,class:"text-sm text-catppuccin-subtle"},yp={__name:"ReposList",props:{repos:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},setup(e){const t=e,n=se(()=>t.repos.length?[...t.repos].sort((s,o)=>o.stargazers_count-s.stargazers_count).slice(0,6):[]);return(s,o)=>(C(),S("div",ap,[o[2]||(o[2]=b("div",{class:"text-catppuccin-subtle text-sm mb-3"},"~$ ls ~/repositories",-1)),b("div",cp,[e.loading?(C(),S("div",lp,[(C(),S(oe,null,Te(6,r=>b("div",{key:`repo-loading-${r}`,class:"rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 p-3"},[...o[0]||(o[0]=[vo('<div class="flex items-start gap-3" data-v-effaf9c1><span class="text-catppuccin-subtle" data-v-effaf9c1>&gt;</span><div class="flex-1 min-w-0" data-v-effaf9c1><div class="h-3 bg-catppuccin-surface/70 rounded w-2/3 mb-2 cursor-blink" data-v-effaf9c1></div><div class="h-2 bg-catppuccin-surface/50 rounded w-1/3 cursor-blink" data-v-effaf9c1></div></div></div>',1)])])),64))])):e.repos.length?n.value.length?(C(),An(Dl,{key:2,name:"list",tag:"div",class:"space-y-2"},{default:ct(()=>[(C(!0),S(oe,null,Te(n.value,r=>(C(),S("a",{key:r.id,href:r.html_url,target:"_blank",class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-colors"},[b("div",pp,[o[1]||(o[1]=b("span",{class:"text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors"},">",-1)),b("div",fp,[b("div",hp,[b("span",{class:"text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors font-medium truncate",title:r.name},V(r.name),9,mp),r.stargazers_count>0?(C(),S("span",gp," ★"+V(r.stargazers_count),1)):he("",!0)]),b("p",{class:"text-xs text-catppuccin-gray truncate",title:r.description},V(r.description||"no description"),9,bp)])])],8,dp))),128))]),_:1})):(C(),S("div",vp," no repositories found ")):(C(),S("div",up," no projects found "))])]))}},xp=Ot(yp,[["__scopeId","data-v-effaf9c1"]]),wp={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},_p={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},kp={class:"grid lg:grid-cols-2 gap-6 lg:items-stretch"},Cp={__name:"Home",setup(e){const t=ge([]),n=ge(!0),s=ge([]),o=async()=>{try{n.value=!0;const{repos:r,languages:i}=await ha("hecker-01");t.value=r,s.value=i}catch{}finally{n.value=!1}};return xt(()=>{o()}),(r,i)=>(C(),S("div",wp,[b("div",_p,[K(vd),K(Cd,{languages:s.value,loading:n.value},null,8,["languages","loading"]),b("div",kp,[K(xp,{repos:t.value,loading:n.value},null,8,["repos","loading"]),K(qd)]),K(rp),K(an)])]))}},Sp=`---
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
`,Ep=`---
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
`,Ap=`---
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
`,Tp=`---
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
`,Pp=`---
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
`,Rp=`---
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
`,Dp=Object.assign({"/posts/docker-and-compose.md":Sp,"/posts/jellyfin-server.md":Ep,"/posts/local-database.md":Ap,"/posts/markdown-showcase.md":Tp,"/posts/using-commandline.md":Pp,"/posts/using-git.md":Rp}),Ip=e=>{const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{frontmatter:{},content:e};const[,n,s]=t,o={},r=n.split(`
`);let i=null,a="";const c=(u,l)=>{l=l.trim(),l.startsWith("[")&&l.endsWith("]")?o[u]=l.slice(1,-1).split(",").map(d=>d.trim()):o[u]=l};return r.forEach(u=>{if(/^\s+/.test(u)&&!/^\s*\w+:/.test(u)&&i)a+=" "+u.trim();else{i&&a&&c(i,a);const[d,...h]=u.split(":");if(!d||d.trim()==="")return;i=d.trim(),a=h.join(":").trim()}}),i&&a&&c(i,a),{frontmatter:o,content:s}},$p=()=>{const e=[];let t=1;return Object.entries(Dp).forEach(([n,s])=>{const{frontmatter:o,content:r}=Ip(s),i=n.split("/").pop().replace(".md","");e.push({id:t++,slug:i,title:o.title||i,date:o.date||new Date().toISOString().split("T")[0],tags:o.tags||[],description:o.description||"",unlisted:o.unlisted===!0||o.unlisted==="true",content:r.trim(),readingTime:Mp(r)})}),e};let Fn=null;const Eo=(e=!1)=>(Fn||(Fn=$p()),(e?[...Fn]:Fn.filter(n=>!n.unlisted)).sort((n,s)=>eo(s.date)-eo(n.date))),Op=e=>Eo(!0).find(t=>t.slug===e),Lp=()=>{const e=new Set;return Eo().forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()},eo=e=>{const[t,n,s]=e.split("-");return new Date(s,n-1,t)},Mp=e=>{const n=e.trim().split(/\s+/).length;return Math.ceil(n/225)},Np={class:"sm:border-l-2 sm:border-catppuccin-surface pl-2 sm:pl-4"},Bp={class:"flex flex-wrap gap-1.5 sm:gap-2"},jp=["onClick"],ma={__name:"TagFilter",props:{tags:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["toggle-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("toggle-tag",o)};return(o,r)=>(C(),S("div",Np,[r[0]||(r[0]=b("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ ls tags/",-1)),b("div",Bp,[(C(!0),S(oe,null,Te(e.tags,i=>(C(),S("button",{key:i,onClick:a=>s(i),class:$t(["px-3 py-1.5 sm:py-1 rounded text-xs transition-colors border",e.selectedTag===i?"bg-catppuccin-mauve/20 text-catppuccin-mauve border-catppuccin-mauve":"bg-catppuccin-base/40 text-catppuccin-subtle border-catppuccin-surface hover:text-catppuccin-text hover:border-catppuccin-overlay"])}," #"+V(i),11,jp))),128))])]))}},Fp={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2"},Hp={class:"text-catppuccin-subtle text-sm mb-3"},Up={key:0,class:"text-catppuccin-mauve"},Wp={key:0,class:"text-sm text-catppuccin-subtle"},Vp={key:1,class:"space-y-3"},Gp=["onClick"],qp={class:"px-3 sm:px-4 py-3"},Kp={class:"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2"},zp={class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors"},Yp={class:"flex items-center gap-2 flex-shrink-0"},Jp={class:"text-xs text-catppuccin-subtle"},Qp=["title"],Zp={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed"},Xp={class:"flex items-center gap-2"},ef={class:"flex flex-wrap gap-1.5"},tf=["onClick"],nf={__name:"PostList",props:{posts:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-post","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-post",o)};return(o,r)=>(C(),S("div",Fp,[b("div",Hp,[r[0]||(r[0]=qe(" ~$ ls -la posts/ ",-1)),e.selectedTag?(C(),S("span",Up,'| grep "'+V(e.selectedTag)+'"',1)):he("",!0)]),e.posts.length?(C(),S("div",Vp,[(C(!0),S(oe,null,Te(e.posts,i=>(C(),S("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border border-catppuccin-surface/60 bg-catppuccin-base/20 hover:bg-catppuccin-base/30 hover:border-catppuccin-mauve/40 transition-all cursor-pointer"},[b("div",qp,[b("div",Kp,[b("h2",zp,V(i.title),1),b("div",Yp,[b("span",Jp,V(i.readingTime)+" min read ",1),r[1]||(r[1]=b("span",{class:"text-catppuccin-surface"},"•",-1)),b("span",{class:"text-xs text-catppuccin-subtle",title:Ne(eo)(i.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},V(i.date),9,Qp)])]),b("p",Zp,V(i.description),1),b("div",Xp,[b("div",ef,[(C(!0),S(oe,null,Te(i.tags,a=>(C(),S("span",{key:a,onClick:ta(c=>n("select-tag",a),["stop"]),class:"px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:bg-catppuccin-mauve/20 hover:text-catppuccin-mauve cursor-pointer transition-colors"}," #"+V(a),9,tf))),128))]),r[2]||(r[2]=b("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm shrink-0"}," read → ",-1))])])],8,Gp))),128))])):(C(),S("div",Wp," no posts found "))]))}};class sf{extractVariables(t){const n=new RegExp("(?<!\\\\)\\$\\[([^\\]]+)\\]","g"),s=new Set;let o;for(;(o=n.exec(t))!==null;)s.add(o[1]);return Array.from(s)}substitute(t,n={}){const s=[];let o=t.replace(/\\\$\[([^\]]+)\]/g,(r,i)=>{const a=`__ESCAPED_VAR_${s.length}__`;return s.push(`$[${i}]`),a});return o=o.replace(/\$\[([^\]]+)\]/g,(r,i)=>n[i]||i),s.forEach((r,i)=>{o=o.replace(`__ESCAPED_VAR_${i}__`,r)}),o}}const ts=new sf;class of{process(t){let n=t;const s=[];n=n.replace(/__([A-Z_0-9]+)__/g,r=>{const i=`\0PROT${s.length}\0`;return s.push(r),i});const o=[];return n=n.replace(/`([^`]+)`/g,(r,i)=>{const a=`IC${o.length}`;return o.push(this._renderInlineCode(i)),a}),n=n.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),n=n.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),n=n.replace(/_(.*?)_/g,'<em class="text-catppuccin-text italic">$1</em>'),n=n.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),n=n.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>'),n=n.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">'),n=n.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>'),o.forEach((r,i)=>{n=n.replaceAll(`IC${i}`,r)}),s.forEach((r,i)=>{n=n.replaceAll(`\0PROT${i}\0`,r)}),n}_renderInlineCode(t){return`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code>`}}class rf{constructor(t=new of){this.inlineParser=t}parse(t){let n=t;const s={codeBlocks:[],hintBlocks:[],detailsBlocks:[],escapedTokens:[],inlineCodeBlocks:[],tables:[]};return n=this._extractCodeBlocks(n,s),n=this._extractHintBlocks(n,s),n=this._extractDetailsBlocks(n,s),n=this._extractEscapeSequences(n,s),n=this._extractInlineCode(n,s),n=this._extractTables(n,s),n=this._transformHorizontalRules(n),n=this._transformHeadings(n),n=this._transformBlockquotes(n),n=this._transformImages(n),n=this._transformBoldItalic(n),n=this._transformStrikethrough(n),n=this._transformLinks(n),n=this._transformLists(n),n=this._transformParagraphs(n),n=this._restoreDetailsBlocks(n,s),n=this._restoreHintBlocks(n,s),n=this._restoreCodeBlocks(n,s),n=this._restoreTables(n,s),n=this._restoreInlineCode(n,s),n=this._restoreEscapeSequences(n,s),n}_extractCodeBlocks(t,n){return t.replace(/```(\w*)(?::([^\s\n]+))?\s*\n?([\s\S]*?)```/g,(s,o,r,i)=>{const a=`__CODEBLOCK_${n.codeBlocks.length}__`;return n.codeBlocks.push(this._renderCodeBlock(o,r,i,n.codeBlocks.length)),a})}_extractHintBlocks(t,n){return t.replace(/:::hint\s+(\w+)\r?\n([\s\S]*?):::/g,(s,o,r)=>{const i=`__HINT_${n.hintBlocks.length}__`;return n.hintBlocks.push({type:o.trim().toLowerCase(),content:r.trim()}),i})}_extractDetailsBlocks(t,n){let s=!0;for(;s;){const o=t;t=t.replace(/:::details\s+([^\n\r]+)\r?\n([\s\S]*?):::/g,(r,i,a)=>{const c=`__DETAILS_${n.detailsBlocks.length}__`;return n.detailsBlocks.push({title:i.trim(),content:a.trim()}),c}),s=t!==o}return t}_extractEscapeSequences(t,n){return t.replace(/\\\\|\\`/g,s=>{const o=`__ESCAPED_TOKEN_${n.escapedTokens.length}__`;return n.escapedTokens.push(s==="\\\\"?"\\":"`"),o})}_extractInlineCode(t,n){return t.replace(/`([^`]+)`/g,(s,o)=>{const r=`__INLINECODE_${n.inlineCodeBlocks.length}__`,i=o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return n.inlineCodeBlocks.push(`<code class="bg-catppuccin-surface/50 px-1.5 sm:px-2 py-0.5 rounded text-catppuccin-pink text-xs sm:text-sm break-words">${i}</code>`),r})}_extractTables(t,n){return t.replace(/((?:\|[^\n]+\|\r?\n?)+)/g,s=>{const o=s.trim().split(/\r?\n/);if(o.length<2||!/^\|[\s\-:|]+\|$/.test(o[1]))return s;const r=`__TABLE_${n.tables.length}__`;return n.tables.push(this._renderTable(o)),r})}_transformHorizontalRules(t){return t.replace(/^(?:---|\*\*\*|___)\s*$/gim,'<hr class="border-catppuccin-surface my-6">')}_transformHeadings(t){return t=t.replace(/^###### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h6 id="${o}" class="group text-xs font-semibold text-catppuccin-mauve mt-4 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h6>`}),t=t.replace(/^##### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h5 id="${o}" class="group text-sm font-semibold text-catppuccin-mauve mt-4 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h5>`}),t=t.replace(/^#### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h4 id="${o}" class="group text-base font-semibold text-catppuccin-mauve mt-5 mb-2">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h4>`}),t=t.replace(/^### (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h3 id="${o}" class="group text-lg font-semibold text-catppuccin-mauve mt-6 mb-3">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h3>`}),t=t.replace(/^## (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h2 id="${o}" class="group text-xl font-semibold text-catppuccin-mauve mt-8 mb-4">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h2>`}),t=t.replace(/^# (.*$)/gim,(n,s)=>{const o=this._slugify(s);return`<h1 id="${o}" class="group text-2xl font-bold text-catppuccin-mauve mt-8 mb-4">${s}<a href="#${o}" class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-catppuccin-subtle hover:text-catppuccin-mauve" aria-label="Link to this section">#</a></h1>`}),t}_transformBlockquotes(t){return t.replace(/^> (.*$)/gim,'<blockquote class="border-l-4 border-catppuccin-mauve pl-4 py-2 my-4 text-catppuccin-text italic bg-catppuccin-surface/20">$1</blockquote>')}_transformImages(t){return t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1" class="max-w-full h-auto rounded my-4">')}_transformBoldItalic(t){return t=t.replace(/\*\*\*(.*?)\*\*\*/g,'<strong class="text-catppuccin-mauve font-semibold"><em>$1</em></strong>'),t=t.replace(/\*\*(.*?)\*\*/g,'<strong class="text-catppuccin-mauve font-semibold">$1</strong>'),t=t.replace(/\*(.*?)\*/g,'<em class="text-catppuccin-text italic">$1</em>'),t}_transformStrikethrough(t){return t.replace(/~~(.*?)~~/g,'<del class="text-catppuccin-subtle line-through">$1</del>')}_transformLinks(t){return t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" class="text-catppuccin-mauve hover:text-catppuccin-mauve underline transition-colors">$1</a>')}_transformLists(t){return t=t.replace(/^[\-\*\+] \[x\] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" checked disabled class="mr-2">$1</li>'),t=t.replace(/^[\-\*\+] \[ \] (.*$)/gim,'<li class="ml-6 list-none text-catppuccin-text mb-1"><input type="checkbox" disabled class="mr-2">$1</li>'),t=t.replace(/^\d+\. (.*$)/gim,'<li data-list-type="ol" class="ml-6 text-catppuccin-text mb-1">$1</li>'),t=t.replace(/^[\-\*\+] (.*$)/gim,'<li data-list-type="ul" class="ml-6 text-catppuccin-text mb-1">$1</li>'),t=t.replace(/(<li data-list-type="ol"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ol"[^>]*>.*?<\/li>))*/g,n=>`<ol class="list-decimal my-4 pl-2">${n}</ol>`),t=t.replace(/(<li data-list-type="ul"[^>]*>.*?<\/li>)(\s*(<li data-list-type="ul"[^>]*>.*?<\/li>))*/g,n=>`<ul class="list-disc my-4">${n}</ul>`),t=t.replace(/ data-list-type="[^"]+"/g,""),t}_transformParagraphs(t){const n=/^<(h[1-6]|ul|ol|li|blockquote|pre|div|hr|table|thead|tbody|tr|th|td)/i;return t.split(`

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
      </div>`}_renderTable(t){const n=t[0],s=t.slice(2);let o='<div class="overflow-x-auto -mx-2 sm:mx-0 my-4"><table class="w-full text-sm border-collapse min-w-[400px]">';const r=n.split("|").filter(i=>i.trim());return o+="<thead><tr>",r.forEach(i=>{o+=`<th class="border border-catppuccin-surface px-3 py-2 text-left text-catppuccin-mauve bg-catppuccin-surface/30">${i.trim()}</th>`}),o+="</tr></thead>",o+="<tbody>",s.forEach(i=>{if(i.trim()&&!/^\|[\s\-:|]+\|$/.test(i)){const a=i.split("|").filter(c=>c.trim());o+="<tr>",a.forEach(c=>{o+=`<td class="border border-catppuccin-surface px-3 py-2 text-catppuccin-text">${c.trim()}</td>`}),o+="</tr>"}}),o+="</tbody></table></div>",o}_slugify(t){return t.toLowerCase().replace(/<[^>]*>/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim()}}const ga=new rf;class af{highlightAll(){window.Prism&&(Prism.highlightAll(),document.querySelectorAll('pre[class*="language-"]').forEach(t=>{t.className=t.className.replace(/language-\S+/g,"").trim()}))}highlightAfterDelay(t=100){setTimeout(()=>this.highlightAll(),t)}}const ns=new af,cf={class:"mb-8"},lf={class:"text-catppuccin-subtle text-sm mb-2"},uf={class:"text-3xl md:text-4xl font-bold text-catppuccin-mauve mb-3"},df={class:"flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-catppuccin-subtle mb-4"},pf={class:"flex flex-wrap gap-2"},ff={key:0,class:"mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"},hf={class:"space-y-3"},mf=["for"],gf=["id","onUpdate:modelValue","placeholder"],bf={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2 mb-8 overflow-hidden"},vf=["innerHTML"],yf={__name:"PostComponent",props:{post:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=se(()=>n.post.readingTime||1),i=ge({}),a=se(()=>ts.extractVariables(n.post.content)),c=se(()=>ts.substitute(n.post.content,i.value)),u=l=>ga.parse(l);return xt(()=>{ns.highlightAfterDelay(100)}),Rt(i,()=>{us(()=>{ns.highlightAll()})},{deep:!0}),(l,d)=>(C(),S("div",null,[b("div",cf,[b("div",lf," ~$ cat "+V(e.post.slug)+".md ",1),b("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-text transition-colors mb-6 inline-flex items-center gap-1"}," [← back to posts] "),b("h1",uf,V(e.post.title),1),b("div",df,[b("span",null,V(e.post.date),1),d[0]||(d[0]=b("span",{class:"hidden sm:inline text-catppuccin-surface"},"•",-1)),b("span",null,"~"+V(r.value)+" min read",1),d[1]||(d[1]=b("span",{class:"hidden sm:inline text-catppuccin-surface"},"•",-1)),b("div",pf,[(C(!0),S(oe,null,Te(e.post.tags,h=>(C(),S("span",{key:h,class:"text-catppuccin-gray"}," #"+V(h),1))),128))])])]),a.value.length>0?(C(),S("div",ff,[d[2]||(d[2]=b("div",{class:"text-sm text-catppuccin-subtle mb-3"}," ~$ configure variables ",-1)),b("div",hf,[(C(!0),S(oe,null,Te(a.value,h=>(C(),S("div",{key:h,class:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"},[b("label",{for:`var-${h}`,class:"text-sm text-catppuccin-text sm:min-w-[120px]"},V(h)+": ",9,mf),ui(b("input",{id:`var-${h}`,"onUpdate:modelValue":m=>i.value[h]=m,type:"text",placeholder:h,class:"flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"},null,8,gf),[[ea,i.value[h]]])]))),128))])])):he("",!0),b("article",bf,[b("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:u(c.value)},null,8,vf)]),b("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors inline-flex items-center gap-1"}," [← back to all posts] ")]))}},xf=Ot(yf,[["__scopeId","data-v-4c8558f1"]]),wf={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},_f={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},kf={key:"list"},Cf={class:"mb-12"},Sf={class:"flex items-center gap-4 text-sm mb-6"},Ef={key:"post"},Af={__name:"Posts",setup(e){const t=ge("list"),n=ge(null),s=ge(null),o=ge([]),r=ge([]),i=Co(),a=On(),c=se(()=>s.value?o.value.filter(m=>m.tags.includes(s.value)):o.value),u=()=>{o.value=Eo(),r.value=Lp()},l=m=>{if(n.value=Op(m),n.value)t.value="post",window.scrollTo({top:0,behavior:"smooth"}),i.query.post!==m&&a.replace({name:"Posts",query:{...i.query,post:m}});else if(i.query.post){const v={...i.query};delete v.post,a.replace({name:"Posts",query:v})}},d=({skipQueryUpdate:m=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!m&&"post"in i.query){const v={...i.query};delete v.post,a.replace({name:"Posts",query:v})}},h=m=>{s.value=s.value===m?null:m};return xt(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(E){const N=E.trigger,O=N.textContent;N.textContent="copied!",N.classList.add("text-catppuccin-green"),setTimeout(()=>{N.textContent=O,N.classList.remove("text-catppuccin-green")},2e3),E.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const v=i.query.post;v&&l(v)}),In(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),Rt(()=>i.query.post,(m,v)=>{m&&m!==v?l(m):!m&&t.value==="post"&&d({skipQueryUpdate:!0})}),(m,v)=>{const E=fs("router-link");return C(),S("div",wf,[b("div",_f,[K(bs,{name:"fade",mode:"out-in"},{default:ct(()=>[t.value==="list"?(C(),S("div",kf,[b("div",Cf,[v[1]||(v[1]=b("div",{class:"text-catppuccin-subtle text-sm mb-2"},"~$ cd ~/posts",-1)),b("div",Sf,[K(E,{to:"/",class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"},{default:ct(()=>[...v[0]||(v[0]=[qe(" [← home] ",-1)])]),_:1})]),v[2]||(v[2]=b("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[b("span",{class:"text-catppuccin-mauve"},"Posts")],-1)),v[3]||(v[3]=b("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," My thoughts, tutorials, and experiences on various topics including web development, programming, and technology. ",-1)),K(ma,{tags:r.value,"selected-tag":s.value,onToggleTag:h},null,8,["tags","selected-tag"])]),K(nf,{posts:c.value,"selected-tag":s.value,onOpenPost:l,onSelectTag:h},null,8,["posts","selected-tag"]),K(an)])):t.value==="post"&&n.value?(C(),S("div",Ef,[K(xf,{post:n.value,onGoBack:d},null,8,["post"]),K(an)])):he("",!0)]),_:1})])])}}},Tf=Ot(Af,[["__scopeId","data-v-7a63f85b"]]),Pf={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2"},Rf={class:"text-catppuccin-subtle text-sm mb-3"},Df={key:0,class:"text-catppuccin-mauve"},If={key:0,class:"text-sm text-catppuccin-subtle"},$f={key:1,class:"grid gap-4 sm:grid-cols-2"},Of=["onClick"],Lf={key:0,class:"w-full h-32 sm:h-40 overflow-hidden bg-catppuccin-surface/30"},Mf=["src","alt"],Nf={class:"px-3 sm:px-4 py-3"},Bf={class:"flex items-start gap-2 mb-2"},jf={class:"text-sm text-catppuccin-gray mb-3 leading-relaxed line-clamp-2"},Ff={class:"flex items-center gap-2 flex-wrap"},Hf=["onClick"],Uf={key:0,class:"text-xs text-catppuccin-subtle"},Wf={__name:"ProjectList",props:{projects:{type:Array,default:()=>[]},selectedTag:{type:String,default:null}},emits:["open-project","select-tag"],setup(e,{emit:t}){const n=t,s=o=>{n("open-project",o)};return(o,r)=>(C(),S("div",Pf,[b("div",Rf,[r[0]||(r[0]=qe(" ~$ ls -la projects/ ",-1)),e.selectedTag?(C(),S("span",Df,'| grep "'+V(e.selectedTag)+'"',1)):he("",!0)]),e.projects.length?(C(),S("div",$f,[(C(!0),S(oe,null,Te(e.projects,i=>(C(),S("div",{key:i.id,onClick:a=>s(i.slug),class:"block group rounded-md border bg-catppuccin-base/20 hover:bg-catppuccin-base/30 transition-all cursor-pointer overflow-hidden",style:ye({borderColor:`${i.accentColorHex}40`})},[i.coverImage?(C(),S("div",Lf,[b("img",{src:i.coverImage,alt:i.title,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"},null,8,Mf)])):he("",!0),b("div",Nf,[b("div",Bf,[b("span",{class:"text-sm transition-colors",style:ye({color:i.accentColorHex})},">",4),b("h2",{class:"text-base font-semibold text-catppuccin-text group-hover:text-catppuccin-mauve transition-colors",style:ye({"--hover-color":i.accentColorHex})},V(i.title),5)]),b("p",jf,V(i.description),1),b("div",Ff,[(C(!0),S(oe,null,Te(i.tags.slice(0,3),a=>(C(),S("span",{key:a,onClick:ta(c=>n("select-tag",a),["stop"]),class:"px-2 py-1 sm:py-0.5 rounded text-xs bg-catppuccin-surface/60 text-catppuccin-subtle hover:text-catppuccin-mauve cursor-pointer transition-colors",style:ye({"--hover-bg":`${i.accentColorHex}20`})}," #"+V(a),13,Hf))),128)),i.tags.length>3?(C(),S("span",Uf," +"+V(i.tags.length-3),1)):he("",!0),b("span",{class:"ml-auto text-catppuccin-subtle group-hover:text-catppuccin-mauve transition-colors text-sm",style:ye({"--hover-color":i.accentColorHex})}," view → ",4)])])],12,Of))),128))])):(C(),S("div",If," no projects found "))]))}},Vf=Ot(Wf,[["__scopeId","data-v-b7be8c48"]]),Gf={class:"mb-8"},qf={class:"text-catppuccin-subtle text-sm mb-2"},Kf=["src","alt"],zf={class:"flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-catppuccin-subtle mb-4"},Yf={class:"flex flex-wrap gap-2"},Jf={class:"flex flex-wrap gap-3 mb-6"},Qf=["href"],Zf=["href"],Xf={key:0,class:"mb-6 border border-catppuccin-surface rounded-md p-4 bg-catppuccin-surface/10"},eh={class:"space-y-3"},th=["for"],nh=["id","onUpdate:modelValue","placeholder"],sh={class:"sm:border-l-2 sm:border-catppuccin-surface sm:pl-4 pl-2 mb-8 overflow-hidden"},oh=["innerHTML"],rh={__name:"ProjectComponent",props:{project:{type:Object,required:!0}},emits:["go-back"],setup(e,{emit:t}){const n=e,s=t,o=()=>{s("go-back")},r=ge({}),i=se(()=>ts.extractVariables(n.project.content)),a=se(()=>ts.substitute(n.project.content,r.value)),c=u=>ga.parse(u);return xt(()=>{ns.highlightAfterDelay(100)}),Rt(r,()=>{us(()=>{ns.highlightAll()})},{deep:!0}),(u,l)=>(C(),S("div",{style:ye({"--accent-color":e.project.accentColorHex})},[b("div",Gf,[b("div",qf," ~$ cat "+V(e.project.slug)+".md ",1),b("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-text transition-colors mb-6 inline-flex items-center gap-1"}," [← back to projects] "),e.project.coverImage?(C(),S("div",{key:0,class:"w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-6 border",style:ye({borderColor:`${e.project.accentColorHex}40`})},[b("img",{src:e.project.coverImage,alt:e.project.title,class:"w-full h-full object-cover"},null,8,Kf)],4)):he("",!0),b("h1",{class:"text-3xl md:text-4xl font-bold mb-3",style:ye({color:e.project.accentColorHex})},V(e.project.title),5),b("div",zf,[b("span",{class:$t(["px-2 py-0.5 rounded text-xs capitalize",{"bg-catppuccin-green/20 text-catppuccin-green":e.project.status==="active","bg-catppuccin-yellow/20 text-catppuccin-yellow":e.project.status==="in-progress","bg-catppuccin-red/20 text-catppuccin-red":e.project.status==="archived","bg-catppuccin-blue/20 text-catppuccin-blue":e.project.status==="beta"}])},V(e.project.status),3),b("div",Yf,[(C(!0),S(oe,null,Te(e.project.tags,d=>(C(),S("span",{key:d,class:"text-catppuccin-gray"}," #"+V(d),1))),128))])]),b("div",Jf,[e.project.url?(C(),S("a",{key:0,href:e.project.url,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-3 py-1.5 rounded border text-sm transition-colors hover:bg-catppuccin-surface/30",style:ye({borderColor:`${e.project.accentColorHex}60`,color:e.project.accentColorHex})},[...l[0]||(l[0]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1),qe(" Live Site ",-1)])],12,Qf)):he("",!0),e.project.github?(C(),S("a",{key:1,href:e.project.github,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-3 py-1.5 rounded border border-catppuccin-surface/60 text-sm text-catppuccin-subtle transition-colors hover:bg-catppuccin-surface/30 hover:text-catppuccin-text"},[...l[1]||(l[1]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24"},[b("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1),qe(" GitHub ",-1)])],8,Zf)):he("",!0)])]),i.value.length>0?(C(),S("div",Xf,[l[2]||(l[2]=b("div",{class:"text-sm text-catppuccin-subtle mb-3"}," ~$ configure variables ",-1)),b("div",eh,[(C(!0),S(oe,null,Te(i.value,d=>(C(),S("div",{key:d,class:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"},[b("label",{for:`var-${d}`,class:"text-sm text-catppuccin-text sm:min-w-[120px]"},V(d)+": ",9,th),ui(b("input",{id:`var-${d}`,"onUpdate:modelValue":h=>r.value[d]=h,type:"text",placeholder:d,class:"flex-1 px-3 py-2 text-sm bg-catppuccin-base border border-catppuccin-surface/60 rounded text-catppuccin-text placeholder-catppuccin-subtle focus:outline-none focus:border-catppuccin-mauve transition-colors"},null,8,nh),[[ea,r.value[d]]])]))),128))])])):he("",!0),b("article",sh,[b("div",{class:"prose prose-invert max-w-none text-catppuccin-text",innerHTML:c(a.value)},null,8,oh)]),b("button",{onClick:o,class:"text-sm text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors inline-flex items-center gap-1"}," [← back to all projects] ")],4))}},ih=Ot(rh,[["__scopeId","data-v-c3d8dc14"]]),ah={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},ch={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16"},lh={key:"list"},uh={class:"mb-12"},dh={class:"flex items-center gap-4 text-sm mb-6"},ph={key:"project"},fh={__name:"Projects",setup(e){const t=ge("list"),n=ge(null),s=ge(null),o=ge([]),r=ge([]),i=Co(),a=On(),c=se(()=>s.value?o.value.filter(m=>m.tags.includes(s.value)):o.value),u=()=>{o.value=xs(),r.value=Id()},l=m=>{if(n.value=Dd(m),n.value)t.value="project",window.scrollTo({top:0,behavior:"smooth"}),i.query.project!==m&&a.replace({name:"Projects",query:{...i.query,project:m}});else if(i.query.project){const v={...i.query};delete v.project,a.replace({name:"Projects",query:v})}},d=({skipQueryUpdate:m=!1}={})=>{if(t.value="list",n.value=null,window.scrollTo({top:0,behavior:"smooth"}),!m&&"project"in i.query){const v={...i.query};delete v.project,a.replace({name:"Projects",query:v})}},h=m=>{s.value=s.value===m?null:m};return xt(()=>{u(),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto",new ClipboardJS("[data-clipboard-target]").on("success",function(E){const N=E.trigger,O=N.textContent;N.textContent="copied!",N.classList.add("text-catppuccin-green"),setTimeout(()=>{N.textContent=O,N.classList.remove("text-catppuccin-green")},2e3),E.clearSelection()}),setTimeout(()=>{window.Prism&&Prism.highlightAll()},100);const v=i.query.project;v&&l(v)}),In(()=>{document.documentElement.style.overflowY="",document.body.style.overflowY=""}),Rt(()=>i.query.project,(m,v)=>{m&&m!==v?l(m):!m&&t.value==="project"&&d({skipQueryUpdate:!0})}),(m,v)=>{const E=fs("router-link");return C(),S("div",ah,[b("div",ch,[K(bs,{name:"fade",mode:"out-in"},{default:ct(()=>[t.value==="list"?(C(),S("div",lh,[b("div",uh,[v[1]||(v[1]=b("div",{class:"text-catppuccin-subtle text-sm mb-2"}," ~$ cd ~/projects ",-1)),b("div",dh,[K(E,{to:"/",class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"},{default:ct(()=>[...v[0]||(v[0]=[qe(" [← home] ",-1)])]),_:1})]),v[2]||(v[2]=b("h1",{class:"text-3xl md:text-4xl font-bold text-catppuccin-text mb-4"},[b("span",{class:"text-catppuccin-mauve"},"Projects")],-1)),v[3]||(v[3]=b("p",{class:"text-sm text-catppuccin-gray leading-relaxed mb-6"}," A collection of projects I've worked on, ranging from web applications to plugins and tools. ",-1)),K(ma,{tags:r.value,"selected-tag":s.value,onToggleTag:h},null,8,["tags","selected-tag"])]),K(Vf,{projects:c.value,"selected-tag":s.value,onOpenProject:l,onSelectTag:h},null,8,["projects","selected-tag"]),K(an)])):t.value==="project"&&n.value?(C(),S("div",ph,[K(ih,{project:n.value,onGoBack:d},null,8,["project"]),K(an)])):he("",!0)]),_:1})])])}}},hh=Ot(fh,[["__scopeId","data-v-87eb9fe5"]]),mh={class:"w-full min-h-screen h-screen overflow-x-hidden overflow-y-auto font-mono"},gh={class:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16"},bh={class:"mb-8"},vh={class:"text-catppuccin-subtle text-sm mb-4"},yh={class:"border-l-2 border-catppuccin-surface pl-4"},xh={class:"text-catppuccin-red text-sm"},wh={class:"text-catppuccin-mauve"},_h={__name:"NotFound",setup(e){const t=Co(),n=On(),s=se(()=>(t.fullPath||t.path||"/").replace(/^\//,"")||"."),o=()=>n.push("/");return(r,i)=>(C(),S("div",mh,[b("div",gh,[b("div",bh,[b("div",vh," ~$ cd ~/"+V(s.value),1),b("div",{class:"flex items-center gap-4 text-sm mb-6"},[b("button",{onClick:o,class:"text-catppuccin-subtle hover:text-catppuccin-text transition-colors"}," [← home] ")])]),b("div",yh,[b("div",xh,[i[0]||(i[0]=qe(" cd: no such file or directory: /",-1)),b("span",wh,V(s.value),1)])])]),K(an)]))}},kh=[{path:"/",name:"Home",component:Cp,meta:{title:"Home | heckr.dev"}},{path:"/posts",name:"Posts",component:Tf,meta:{title:"Posts | heckr.dev"}},{path:"/projects",name:"Projects",component:hh,meta:{title:"Projects | heckr.dev"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:_h,meta:{title:"404 Not Found | heckr.dev"}}],ba=Yu({history:Au(),routes:kh,scrollBehavior(e,t,n){return n||{top:0}}});ba.beforeEach((e,t,n)=>{document.title=e.meta.title||"heckr.dev",n()});let pn=0;const Ir=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"],Ch=()=>{console.log("%cWelcome to heckr.dev","font-size: 20px; font-weight: bold; color: #cba6f7;"),console.log("%cWelcome to the dev console, here are some commands to try:","font-size: 14px; color: #a6adc8;"),console.log(`%c- help() - show available commands
- about() - learn more about me
- skills() - view my tech stack
- contact() - get my contact info`,"font-size: 12px; color: #6c7086;"),window.help=()=>{console.log("%cAvailable commands:","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%c- help() - show this message
- about() - about the developer
- skills() - technical skills
- contact() - contact information
- secret() - ???
`,"font-size: 12px; color: #a6adc8;")},window.about=()=>{console.log("%cAbout me","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cA passionate developer who loves building cool things with code!
Check out my projects and posts on the site.`,"font-size: 12px; color: #a6adc8;")},window.skills=async()=>{console.log("%cTech stack","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log("%cFetching...","font-size: 12px; color: #6c7086;");try{const{languages:e,totalRepos:t}=await ha();e.length>0?(console.log("%cTop languages from "+t+" repositories found:","font-size: 14px; font-weight: bold; color: #a6adc8;"),e.slice(0,10).forEach(({language:n,count:s},o)=>{console.log(`%c${o+1}. ${n}: ${s} repos`,"font-size: 12px; color: #a6adc8;")})):console.log("%cUnable to fetch data, please try again later.","font-size: 12px; color: #f38ba8;")}catch{console.log("%cError loading data, please try again later.","font-size: 12px; color: #f38ba8;")}},window.contact=()=>{console.log("%cContact info","font-size: 16px; font-weight: bold; color: #cba6f7;"),console.log(`%cGitHub: https://github.com/hecker-01
Feel free to reach out!`,"font-size: 12px; color: #a6adc8;")},window.secret=()=>{console.log("%cYou found the secret command","font-size: 18px; font-weight: bold; color: #f9e2af;"),console.log("%cHere's a hint: ↑ ↑ ↓ ↓ ← → ← → B A","font-size: 12px; color: #fab387;")},document.addEventListener("keydown",e=>{e.code===Ir[pn]?(pn++,pn===Ir.length&&(Sh(),pn=0)):pn=0})},Sh=()=>{if(console.log("%cKONAMI CODE ACTIVATED!","font-size: 24px; font-weight: bold; color: #f9e2af; text-shadow: 2px 2px 4px #000;"),document.body.style.animation="rainbow-border 2s linear infinite",!document.getElementById("konami-style")){const e=document.createElement("style");e.id="konami-style",e.textContent=`
      @keyframes rainbow-border {
        0% { box-shadow: inset 0 0 0 3px #f38ba8; }
        16% { box-shadow: inset 0 0 0 3px #fab387; }
        33% { box-shadow: inset 0 0 0 3px #f9e2af; }
        50% { box-shadow: inset 0 0 0 3px #a6e3a1; }
        66% { box-shadow: inset 0 0 0 3px #89dceb; }
        83% { box-shadow: inset 0 0 0 3px #89b4fa; }
        100% { box-shadow: inset 0 0 0 3px #cba6f7; }
      }
    `,document.head.appendChild(e)}setTimeout(()=>{document.body.style.animation=""},5e3)};Hl(Ju).use(ba).mount("#app");Ch();
