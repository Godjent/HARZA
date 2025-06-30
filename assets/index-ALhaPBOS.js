(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="178",Is={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sp=0,Uh=1,Tp=2,gd=1,vd=2,ci=3,vi=0,nn=1,bn=2,_i=0,Ls=1,$o=2,Fh=3,Oh=4,Ep=5,Qi=100,bp=101,Ap=102,wp=103,Rp=104,Cp=200,Pp=201,Dp=202,Ip=203,wl=204,Rl=205,Lp=206,Np=207,Up=208,Fp=209,Op=210,Bp=211,kp=212,zp=213,Vp=214,Cl=0,Pl=1,Dl=2,Vs=3,Il=4,Ll=5,Nl=6,Ul=7,xd=0,Hp=1,Gp=2,Fi=0,yd=1,Md=2,Oc=3,Sd=4,Td=5,Ed=6,bd=7,Bh="attached",Wp="detached",Ad=300,Hs=301,Gs=302,Zo=303,Fl=304,fa=306,ki=1e3,Ni=1001,Jo=1002,Ot=1003,wd=1004,Mr=1005,pn=1006,Bo=1007,di=1008,Dn=1009,Rd=1010,Cd=1011,Ur=1012,Bc=1013,os=1014,kn=1015,xi=1016,kc=1017,zc=1018,Fr=1020,Pd=35902,Dd=1021,Id=1022,wn=1023,Or=1026,Br=1027,Vc=1028,Hc=1029,Ld=1030,Gc=1031,Wc=1033,ko=33776,zo=33777,Vo=33778,Ho=33779,Ol=35840,Bl=35841,kl=35842,zl=35843,Vl=36196,Hl=37492,Gl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,jl=37812,Kl=37813,$l=37814,Zl=37815,Jl=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,Go=36492,sc=36494,rc=36495,Nd=36283,oc=36284,ac=36285,lc=36286,Ud=2200,Xp=2201,qp=2202,kr=2300,zr=2301,Ca=2302,Rs=2400,Cs=2401,Qo=2402,Xc=2500,Yp=2501,jp=0,Fd=1,cc=2,Kp=3200,$p=3201,Od=0,Zp=1,Li="",_t="srgb",Ht="srgb-linear",ea="linear",nt="srgb",hs=7680,kh=519,Jp=512,Qp=513,em=514,Bd=515,tm=516,nm=517,im=518,sm=519,hc=35044,zh="300 es",fi=2e3,ta=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vh=1234567;const br=Math.PI/180,Ws=180/Math.PI;function zn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function ke(r,e,t){return Math.max(e,Math.min(t,r))}function qc(r,e){return(r%e+e)%e}function rm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function om(r,e,t){return r!==e?(t-r)/(e-r):0}function Ar(r,e,t){return(1-t)*r+t*e}function am(r,e,t,n){return Ar(r,e,1-Math.exp(-t*n))}function lm(r,e=1){return e-Math.abs(qc(r,e*2)-e)}function cm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function hm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function um(r,e){return r+Math.floor(Math.random()*(e-r+1))}function dm(r,e){return r+Math.random()*(e-r)}function fm(r){return r*(.5-Math.random())}function pm(r){r!==void 0&&(Vh=r);let e=Vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mm(r){return r*br}function _m(r){return r*Ws}function gm(r){return(r&r-1)===0&&r!==0}function vm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ym(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*_,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*_,a*c);break;case"ZYZ":r.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function it(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const kd={DEG2RAD:br,RAD2DEG:Ws,generateUUID:zn,clamp:ke,euclideanModulo:qc,mapLinear:rm,inverseLerp:om,lerp:Ar,damp:am,pingpong:lm,smoothstep:cm,smootherstep:hm,randInt:um,randFloat:dm,randFloatSpread:fm,seededRandom:pm,degToRad:mm,radToDeg:_m,isPowerOfTwo:gm,ceilPowerOfTwo:vm,floorPowerOfTwo:xm,setQuaternionFromProperEuler:ym,normalize:it,denormalize:Fn};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==p||h!==_){let m=1-a;const f=l*d+c*p+h*_+u*g,v=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const A=Math.sqrt(M),b=Math.atan2(A,f*v);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}const x=a*v;if(l=l*m+d*x,c=c*m+p*x,h=h*m+_*x,u=u*m+g*x,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+h*u+l*p-c*d,e[t+1]=l*_+h*d+c*u-a*p,e[t+2]=c*_+h*p+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),p=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new C,Hh=new _n;class Fe{constructor(e,t,n,i,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],v=i[1],M=i[4],x=i[7],A=i[2],b=i[5],w=i[8];return s[0]=o*g+a*v+l*A,s[3]=o*m+a*M+l*b,s[6]=o*f+a*x+l*w,s[1]=c*g+h*v+u*A,s[4]=c*m+h*M+u*b,s[7]=c*f+h*x+u*w,s[2]=d*g+p*v+_*A,s[5]=d*m+p*M+_*b,s[8]=d*f+p*x+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,_=t*u+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Da.makeScale(e,t)),this}rotate(e){return this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new Fe;function zd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mm(){const r=Vr("canvas");return r.style.display="block",r}const Gh={};function Ns(r){r in Gh||(Gh[r]=!0,console.warn(r))}function Sm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Tm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Em(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wh=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bm(){const r={enabled:!0,workingColorSpace:Ht,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Li?ea:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ht]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),r}const Xe=bm();function gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let us;class Am{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{us===void 0&&(us=Vr("canvas")),us.width=e.width,us.height=e.height;const i=us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wm=0;class Yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ia(i[o].image)):s.push(Ia(i[o]))}else s=Ia(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ia(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Am.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;const La=new C;class Lt extends Si{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Ni,i=Ni,s=pn,o=di,a=wn,l=Dn,c=Lt.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=zn(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ad;Lt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(p+1)/2,A=(f+1)/2,b=(h+d)/4,w=(u+g)/4,P=(_+m)/4;return M>x&&M>A?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=b/n,s=w/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=P/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=P/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cm extends Si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Lt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Yc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Cm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vd extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),oo.subVectors(this.max,ur),ds.subVectors(e.a,ur),fs.subVectors(e.b,ur),ps.subVectors(e.c,ur),bi.subVectors(fs,ds),Ai.subVectors(ps,fs),Xi.subVectors(ds,ps);let t=[0,-bi.z,bi.y,0,-Ai.z,Ai.y,0,-Xi.z,Xi.y,bi.z,0,-bi.x,Ai.z,0,-Ai.x,Xi.z,0,-Xi.x,-bi.y,bi.x,0,-Ai.y,Ai.x,0,-Xi.y,Xi.x,0];return!Na(t,ds,fs,ps,oo)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,ds,fs,ps,oo))?!1:(ao.crossVectors(bi,Ai),t=[ao.x,ao.y,ao.z],Na(t,ds,fs,ps,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ii=[new C,new C,new C,new C,new C,new C,new C,new C],Ln=new C,ro=new Ti,ds=new C,fs=new C,ps=new C,bi=new C,Ai=new C,Xi=new C,ur=new C,oo=new C,ao=new C,qi=new C;function Na(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){qi.fromArray(r,s);const a=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Dm=new Ti,dr=new C,Ua=new C;class Jn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(Ua)),this.expandByPoint(dr.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const si=new C,Fa=new C,lo=new C,wi=new C,Oa=new C,co=new C,Ba=new C;class tr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fa.copy(e).add(t).multiplyScalar(.5),lo.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Fa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(lo),a=wi.dot(this.direction),l=-wi.dot(lo),c=wi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,_;if(h>0)if(u=o*l-a,d=o*a-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fa).addScaledVector(lo,d),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);const n=si.dot(this.direction),i=si.dot(si)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,i,s){Oa.subVectors(t,e),co.subVectors(n,e),Ba.crossVectors(Oa,co);let o=this.direction.dot(Ba),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(co.crossVectors(wi,co));if(l<0)return null;const c=a*this.direction.dot(Oa.cross(wi));if(c<0||l+c>o)return null;const h=-a*wi.dot(Ba);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,s,o,a,l,c,h,u,d,p,_,g,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,p,_,g,m)}set(e,t,n,i,s,o,a,l,c,h,u,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ms.setFromMatrixColumn(e,0).length(),s=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,_=c*h,g=c*u;t[0]=d+g*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,_=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Im,e,Lm)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ri.crossVectors(n,dn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ri.crossVectors(n,dn)),Ri.normalize(),ho.crossVectors(dn,Ri),i[0]=Ri.x,i[4]=ho.x,i[8]=dn.x,i[1]=Ri.y,i[5]=ho.y,i[9]=dn.y,i[2]=Ri.z,i[6]=ho.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],v=n[3],M=n[7],x=n[11],A=n[15],b=i[0],w=i[4],P=i[8],T=i[12],S=i[1],D=i[5],z=i[9],O=i[13],W=i[2],q=i[6],H=i[10],K=i[14],V=i[3],ae=i[7],ue=i[11],Te=i[15];return s[0]=o*b+a*S+l*W+c*V,s[4]=o*w+a*D+l*q+c*ae,s[8]=o*P+a*z+l*H+c*ue,s[12]=o*T+a*O+l*K+c*Te,s[1]=h*b+u*S+d*W+p*V,s[5]=h*w+u*D+d*q+p*ae,s[9]=h*P+u*z+d*H+p*ue,s[13]=h*T+u*O+d*K+p*Te,s[2]=_*b+g*S+m*W+f*V,s[6]=_*w+g*D+m*q+f*ae,s[10]=_*P+g*z+m*H+f*ue,s[14]=_*T+g*O+m*K+f*Te,s[3]=v*b+M*S+x*W+A*V,s[7]=v*w+M*D+x*q+A*ae,s[11]=v*P+M*z+x*H+A*ue,s[15]=v*T+M*O+x*K+A*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*p-n*l*p)+g*(+t*l*p-t*c*d+s*o*d-i*o*p+i*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+f*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],v=u*m*c-g*d*c+g*l*p-a*m*p-u*l*f+a*d*f,M=_*d*c-h*m*c-_*l*p+o*m*p+h*l*f-o*d*f,x=h*g*c-_*u*c+_*a*p-o*g*p-h*a*f+o*u*f,A=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,b=t*v+n*M+i*x+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(g*d*s-u*m*s-g*i*p+n*m*p+u*i*f-n*d*f)*w,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*f+n*l*f)*w,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*p-n*l*p)*w,e[4]=M*w,e[5]=(h*m*s-_*d*s+_*i*p-t*m*p-h*i*f+t*d*f)*w,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*f-t*l*f)*w,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*p+t*l*p)*w,e[8]=x*w,e[9]=(_*u*s-h*g*s-_*n*p+t*g*p+h*n*f-t*u*f)*w,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*f+t*a*f)*w,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*w,e[12]=A*w,e[13]=(h*g*i-_*u*i+_*n*d-t*g*d-h*n*m+t*u*m)*w,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,_=s*u,g=o*h,m=o*u,f=a*u,v=l*c,M=l*h,x=l*u,A=n.x,b=n.y,w=n.z;return i[0]=(1-(g+f))*A,i[1]=(p+x)*A,i[2]=(_-M)*A,i[3]=0,i[4]=(p-x)*b,i[5]=(1-(d+f))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(_+M)*w,i[9]=(m-v)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ms.set(i[0],i[1],i[2]).length();const o=ms.set(i[4],i[5],i[6]).length(),a=ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Nn.copy(this);const c=1/s,h=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=fi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(a===fi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ta)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=fi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*c,p=(n+i)*h;let _,g;if(a===fi)_=(o+s)*u,g=-2*u;else if(a===ta)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ms=new C,Nn=new Ue,Im=new C(0,0,0),Lm=new C(1,1,1),Ri=new C,ho=new C,dn=new C,qh=new Ue,Yh=new _n;class Kn{constructor(e=0,t=0,n=0,i=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nm=0;const jh=new C,_s=new _n,ri=new Ue,uo=new C,fr=new C,Um=new C,Fm=new _n,Kh=new C(1,0,0),$h=new C(0,1,0),Zh=new C(0,0,1),Jh={type:"added"},Om={type:"removed"},gs={type:"childadded",child:null},ka={type:"childremoved",child:null};class vt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new C,t=new Kn,n=new _n,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Fe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return jh.copy(e).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(fr,uo,this.up):ri.lookAt(uo,fr,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(ri),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new C(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new C,oi=new C,za=new C,ai=new C,vs=new C,xs=new C,Qh=new C,Va=new C,Ha=new C,Ga=new C,Wa=new $e,Xa=new $e,qa=new $e;class On{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Un.subVectors(i,t),oi.subVectors(n,t),za.subVectors(e,t);const o=Un.dot(Un),a=Un.dot(oi),l=Un.dot(za),c=oi.dot(oi),h=oi.dot(za),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,n),qa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Wa,s.x),o.addScaledVector(Xa,s.y),o.addScaledVector(qa,s.z),o}static isFrontFacing(e,t,n,i){return Un.subVectors(n,t),oi.subVectors(e,t),Un.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Un.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return On.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;vs.subVectors(i,n),xs.subVectors(s,n),Va.subVectors(e,n);const l=vs.dot(Va),c=xs.dot(Va);if(l<=0&&c<=0)return t.copy(n);Ha.subVectors(e,i);const h=vs.dot(Ha),u=xs.dot(Ha);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(vs,o);Ga.subVectors(e,s);const p=vs.dot(Ga),_=xs.dot(Ga);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(xs,a);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Qh.subVectors(s,i),a=(u-h)/(u-h+(p-_)),t.copy(i).addScaledVector(Qh,a);const f=1/(m+g+d);return o=g*f,a=d*f,t.copy(n).addScaledVector(vs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Ya(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=qc(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ya(o,s,e+1/3),this.g=Ya(o,s,e),this.b=Ya(o,s,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=_t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=Hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Xe.workingToColorSpace(Xt.copy(this),e),Math.round(ke(Xt.r*255,0,255))*65536+Math.round(ke(Xt.g*255,0,255))*256+Math.round(ke(Xt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,s=Xt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=_t){Xe.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(fo);const n=Ar(Ci.h,fo.h,t),i=Ar(Ci.s,fo.s,t),s=Ar(Ci.l,fo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new ve;ve.NAMES=Hd;let Bm=0;class Yn extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Ls,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Rl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Rl&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pi extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new C,po=new me;let km=0;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hc&&(e.usage=this.usage),e}}class Gd extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wd extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zm=0;const Mn=new Ue,ja=new vt,ys=new C,fn=new Ti,pr=new Ti,Ft=new C;class sn extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?Wd:Gd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(fn.min,pr.min),fn.expandByPoint(Ft),Ft.addVectors(fn.max,pr.max),fn.expandByPoint(Ft)):(fn.expandByPoint(pr.min),fn.expandByPoint(pr.max))}fn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Ft.add(ys)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new C,l[P]=new C;const c=new C,h=new C,u=new C,d=new me,p=new me,_=new me,g=new C,m=new C;function f(P,T,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,S),h.sub(c),u.sub(c),p.sub(d),_.sub(d);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(D),a[P].add(g),a[T].add(g),a[S].add(g),l[P].add(m),l[T].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,T=v.length;P<T;++P){const S=v[P],D=S.start,z=S.count;for(let O=D,W=D+z;O<W;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new C,x=new C,A=new C,b=new C;function w(P){A.fromBufferAttribute(i,P),b.copy(A);const T=a[P];M.copy(T),M.sub(A.multiplyScalar(A.dot(T))).normalize(),x.crossVectors(b,T);const D=x.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,D)}for(let P=0,T=v.length;P<T;++P){const S=v[P],D=S.start,z=S.count;for(let O=D,W=D+z;O<W;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new Bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eu=new Ue,Yi=new tr,mo=new Jn,tu=new C,_o=new C,go=new C,vo=new C,Ka=new C,xo=new C,nu=new C,yo=new C;class At extends vt{constructor(e=new sn,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){xo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Ka.fromBufferAttribute(u,e),o?xo.addScaledVector(Ka,h):xo.addScaledVector(Ka.sub(t),h))}t.add(xo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(mo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(mo,tu)===null||Yi.origin.distanceToSquared(tu)>(e.far-e.near)**2))&&(eu.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(eu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,A=M;x<A;x+=3){const b=a.getX(x),w=a.getX(x+1),P=a.getX(x+2);i=Mo(this,f,e,n,c,h,u,b,w,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=Mo(this,o,e,n,c,h,u,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,A=M;x<A;x+=3){const b=x,w=x+1,P=x+2;i=Mo(this,f,e,n,c,h,u,b,w,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=m,M=m+1,x=m+2;i=Mo(this,o,e,n,c,h,u,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Vm(r,e,t,n,i,s,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===vi,a),l===null)return null;yo.copy(a),yo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(yo);return c<t.near||c>t.far?null:{distance:c,point:yo.clone(),object:r}}function Mo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,_o),r.getVertexPosition(l,go),r.getVertexPosition(c,vo);const h=Vm(r,e,t,n,_o,go,vo,nu);if(h){const u=new C;On.getBarycoord(nu,_o,go,vo,u),i&&(h.uv=On.getInterpolatedAttribute(i,a,l,c,u,new me)),s&&(h.uv1=On.getInterpolatedAttribute(s,a,l,c,u,new me)),o&&(h.normal=On.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new C,materialIndex:0};On.getNormal(_o,go,vo,d.normal),h.face=d,h.barycoord=u}return h}class Jr extends sn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function _(g,m,f,v,M,x,A,b,w,P,T){const S=x/w,D=A/P,z=x/2,O=A/2,W=b/2,q=w+1,H=P+1;let K=0,V=0;const ae=new C;for(let ue=0;ue<H;ue++){const Te=ue*D-O;for(let ze=0;ze<q;ze++){const ot=ze*S-z;ae[g]=ot*v,ae[m]=Te*M,ae[f]=W,c.push(ae.x,ae.y,ae.z),ae[g]=0,ae[m]=0,ae[f]=b>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(ze/w),u.push(1-ue/P),K+=1}}for(let ue=0;ue<P;ue++)for(let Te=0;Te<w;Te++){const ze=d+Te+q*ue,ot=d+Te+q*(ue+1),Y=d+(Te+1)+q*(ue+1),te=d+(Te+1)+q*ue;l.push(ze,ot,te),l.push(ot,Y,te),V+=6}a.addGroup(p,V,T),p+=V,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(r){const e={};for(let t=0;t<r.length;t++){const n=Xs(r[t]);for(const i in n)e[i]=n[i]}return e}function Hm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const pa={clone:Xs,merge:Qt};var Gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gm,this.fragmentShader=Wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let qd=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Pi=new C,iu=new me,su=new me;class en extends qd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,iu,su),t.subVectors(su,iu)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,Ss=1;class Xm extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(Ms,Ss,e,t);i.layers=this.layers,this.add(i);const s=new en(Ms,Ss,e,t);s.layers=this.layers,this.add(s);const o=new en(Ms,Ss,e,t);o.layers=this.layers,this.add(o);const a=new en(Ms,Ss,e,t);a.layers=this.layers,this.add(a);const l=new en(Ms,Ss,e,t);l.layers=this.layers,this.add(l);const c=new en(Ms,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Yd extends Lt{constructor(e=[],t=Hs,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qm extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Jr(5,5,5),s=new Gt({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:_i});s.uniforms.tEquirect.value=t;const o=new At(i,s),a=t.minFilter;return t.minFilter===di&&(t.minFilter=pn),new Xm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class ts extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ym={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ts;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jm extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new C;class Hr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ru=new C,ou=new $e,au=new $e,Km=new C,lu=new Ue,So=new C,Za=new Jn,cu=new Ue,Ja=new tr;class $m extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bh,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingBox.expandByPoint(So)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingSphere.expandByPoint(So)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Za.copy(this.boundingSphere),Za.applyMatrix4(i),e.ray.intersectsSphere(Za)!==!1&&(cu.copy(i).invert(),Ja.copy(e.ray).applyMatrix4(cu),!(this.boundingBox!==null&&Ja.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ja)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ou.fromBufferAttribute(i.attributes.skinIndex,e),au.fromBufferAttribute(i.attributes.skinWeight,e),ru.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=au.getComponent(s);if(o!==0){const a=ou.getComponent(s);lu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Km.copy(ru).applyMatrix4(lu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Kd extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $d extends Lt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Ot,h=Ot,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=new Ue,Zm=new Ue;class Kc{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Zm;hu.multiplyMatrices(a,t[s]),hu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Kc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $d(t,e,e,wn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Kd),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class uc extends Bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new Ue,uu=new Ue,To=[],du=new Ti,Jm=new Ue,mr=new At,_r=new Jn;class Qm extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),du.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(du)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),_r.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),e.ray.intersectsSphere(_r)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ts),uu.multiplyMatrices(n,Ts),mr.matrixWorld=uu,mr.raycast(e,To);for(let o=0,a=To.length;o<a;o++){const l=To[o];l.instanceId=s,l.object=this,t.push(l)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $d(new Float32Array(i*this.count),i,this.count,Vc,kn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qa=new C,e_=new C,t_=new Fe;class Ii{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qa.subVectors(n,t).cross(e_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||t_.getNormalMatrix(e),i=this.coplanarPoint(Qa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Jn,n_=new me(.5,.5),Eo=new C;class $c{constructor(e=new Ii,t=new Ii,n=new Ii,i=new Ii,s=new Ii,o=new Ii){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],_=i[9],g=i[10],m=i[11],f=i[12],v=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-p,x-f).normalize(),n[1].setComponents(l+s,d+c,m+p,x+f).normalize(),n[2].setComponents(l+o,d+h,m+_,x+v).normalize(),n[3].setComponents(l-o,d-h,m-_,x-v).normalize(),n[4].setComponents(l-a,d-u,m-g,x-M).normalize(),t===fi)n[5].setComponents(l+a,d+u,m+g,x+M).normalize();else if(t===ta)n[5].setComponents(a,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=n_.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Eo.x=i.normal.x>0?e.max.x:e.min.x,Eo.y=i.normal.y>0?e.max.y:e.min.y,Eo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zd extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const na=new C,ia=new C,fu=new Ue,gr=new tr,bo=new Jn,el=new C,pu=new C;class Zc extends vt{constructor(e=new sn,t=new Zd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)na.fromBufferAttribute(t,i-1),ia.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=na.distanceTo(ia);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(i),bo.radius+=s,e.ray.intersectsSphere(bo)===!1)return;fu.copy(i).invert(),gr.copy(e.ray).applyMatrix4(fu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const f=h.getX(g),v=h.getX(g+1),M=Ao(this,e,gr,l,f,v,g);M&&t.push(M)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(p),f=Ao(this,e,gr,l,g,m,_-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const f=Ao(this,e,gr,l,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){const g=Ao(this,e,gr,l,_-1,p,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ao(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(na.fromBufferAttribute(a,i),ia.fromBufferAttribute(a,s),t.distanceSqToSegment(na,ia,el,pu)>n)return;el.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(el);if(!(c<e.near||c>e.far))return{distance:c,point:pu.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const mu=new C,_u=new C;class i_ extends Zc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)mu.fromBufferAttribute(t,i),_u.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mu.distanceTo(_u);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class s_ extends Zc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jd extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gu=new Ue,dc=new tr,wo=new Jn,Ro=new C;class r_ extends vt{constructor(e=new sn,t=new Jd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(i),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;gu.copy(i).invert(),dc.copy(e.ray).applyMatrix4(gu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);Ro.fromBufferAttribute(u,m),vu(Ro,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,g=p;_<g;_++)Ro.fromBufferAttribute(u,_),vu(Ro,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vu(r,e,t,n,i,s,o){const a=dc.distanceSqToPoint(r);if(a<t){const l=new C;dc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xu extends Lt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ot,this.minFilter=Ot,this.generateMipmaps=!1,this.needsUpdate=!0}}class Qd extends Lt{constructor(e,t,n=os,i,s,o,a=Ot,l=Ot,c,h=Or,u=1){if(h!==Or&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jc extends sn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(s.slice(),3)),this.setAttribute("uv",new kt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new C,x=new C,A=new C;for(let b=0;b<t.length;b+=3)p(t[b+0],M),p(t[b+1],x),p(t[b+2],A),l(M,x,A,v)}function l(v,M,x,A){const b=A+1,w=[];for(let P=0;P<=b;P++){w[P]=[];const T=v.clone().lerp(x,P/b),S=M.clone().lerp(x,P/b),D=b-P;for(let z=0;z<=D;z++)z===0&&P===b?w[P][z]=T:w[P][z]=T.clone().lerp(S,z/D)}for(let P=0;P<b;P++)for(let T=0;T<2*(b-P)-1;T++){const S=Math.floor(T/2);T%2===0?(d(w[P][S+1]),d(w[P+1][S]),d(w[P][S])):(d(w[P][S+1]),d(w[P+1][S+1]),d(w[P+1][S]))}}function c(v){const M=new C;for(let x=0;x<s.length;x+=3)M.x=s[x+0],M.y=s[x+1],M.z=s[x+2],M.normalize().multiplyScalar(v),s[x+0]=M.x,s[x+1]=M.y,s[x+2]=M.z}function h(){const v=new C;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];const x=m(v)/2/Math.PI+.5,A=f(v)/Math.PI+.5;o.push(x,1-A)}_(),u()}function u(){for(let v=0;v<o.length;v+=6){const M=o[v+0],x=o[v+2],A=o[v+4],b=Math.max(M,x,A),w=Math.min(M,x,A);b>.9&&w<.1&&(M<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function p(v,M){const x=v*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function _(){const v=new C,M=new C,x=new C,A=new C,b=new me,w=new me,P=new me;for(let T=0,S=0;T<s.length;T+=9,S+=6){v.set(s[T+0],s[T+1],s[T+2]),M.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),b.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),A.copy(v).add(M).add(x).divideScalar(3);const D=m(A);g(b,S+0,v,D),g(w,S+2,M,D),g(P,S+4,x,D)}}function g(v,M,x,A){A<0&&v.x===1&&(o[M]=v.x-1),x.x===0&&x.z===0&&(o[M]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.vertices,e.indices,e.radius,e.details)}}class Qc extends Jc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qc(e.radius,e.detail)}}class nr extends sn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const v=f*d-o;for(let M=0;M<c;M++){const x=M*u-s;_.push(x,-v,0),g.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const M=v+c*f,x=v+c*(f+1),A=v+1+c*(f+1),b=v+1+c*f;p.push(M,x,b),p.push(x,A,b)}this.setIndex(p),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(g,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}}class eh extends sn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,d=new C,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const v=[],M=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const b=A/t;u.x=-e*Math.cos(i+b*s)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+b*s)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(b+x,1-M),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const M=h[f][v+1],x=h[f][v],A=h[f+1][v],b=h[f+1][v+1];(f!==0||o>0)&&p.push(M,x,b),(f!==n-1||l<Math.PI)&&p.push(x,A,b)}this.setIndex(p),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(g,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wo extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class th extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends th{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class o_ extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a_ extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Co(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function l_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function c_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function yu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function ef(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Qr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class h_ extends Qr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rs,endingEnd:Rs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cs:s=e,a=2*t-n;break;case Qo:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cs:o=e,l=2*n-t;break;case Qo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,M=(-1-p)*m+(1.5+p)*g+.5*_,x=p*m-p*g;for(let A=0;A!==a;++A)s[A]=f*o[h+A]+v*o[c+A]+M*o[l+A]+x*o[u+A];return s}}class tf extends Qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class u_ extends Qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Co(t,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Co(e.times,Array),values:Co(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new u_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new h_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&l_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ca,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){const g=t[u+_];if(g!==t[d+_]||g!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=zr;class ir extends Hn{constructor(e,t,n){super(e,t,n)}}ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=kr;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class nf extends Hn{constructor(e,t,n,i){super(e,t,n,i)}}nf.prototype.ValueTypeName="color";class qs extends Hn{constructor(e,t,n,i){super(e,t,n,i)}}qs.prototype.ValueTypeName="number";class d_ extends Qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ys extends Hn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new d_(this.times,this.values,this.getValueSize(),e)}}Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends Hn{constructor(e,t,n){super(e,t,n)}}sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=kr;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends Hn{constructor(e,t,n,i){super(e,t,n,i)}}js.prototype.ValueTypeName="vector";class fc{constructor(e="",t=-1,n=[],i=Xc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(p_(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=c_(l);l=yu(l,1,h),c=yu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new qs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,_,g){if(p.length!==0){const m=[],f=[];ef(p,m,f,_),m.length!==0&&g.push(new u(d,m,f))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)p[d[_].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let v=0;v!==d[_].morphTargets.length;++v){const M=d[_];m.push(M.time),f.push(M.morphTarget===g?1:0)}i.push(new qs(".morphTargetInfluence["+g+"]",m,f))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(js,p+".position",d,"pos",i),n(Ys,p+".quaternion",d,"rot",i),n(js,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function f_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qs;case"vector":case"vector2":case"vector3":case"vector4":return js;case"color":return nf;case"quaternion":return Ys;case"bool":case"boolean":return ir;case"string":return sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function p_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=f_(r.type);if(r.times===void 0){const t=[],n=[];ef(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const mi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class m_{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const __=new m_;class as{constructor(e){this.manager=e!==void 0?e:__,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}as.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class g_ extends Error{constructor(e,t){super(e),this.response=t}}class sa extends as{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=mi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:i});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=li[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){v();function v(){u.read().then(({done:M,value:x})=>{if(M)f.close();else{g+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let b=0,w=h.length;b<w;b++){const P=h[b];P.onProgress&&P.onProgress(A)}f.enqueue(x),v()}},M=>{f.error(M)})}}});return new Response(m)}else throw new g_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{mi.add(`file:${e}`,c);const h=li[e];delete li[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=li[e];if(h===void 0)throw this.manager.itemError(e),c;delete li[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const Es=new WeakMap;class v_ extends as{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=mi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=Es.get(o);u===void 0&&(u=[],Es.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Vr("img");function l(){h(),t&&t(this);const u=Es.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}Es.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),mi.remove(`image:${e}`);const d=Es.get(this)||[];for(let p=0;p<d.length;p++){const _=d[p];_.onError&&_.onError(u)}Es.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),mi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class sf extends as{constructor(e){super(e)}load(e,t,n,i){const s=new Lt,o=new v_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class eo extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class x_ extends eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const tl=new Ue,Mu=new C,Su=new C;class nh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $c,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mu),Su.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Su),t.updateMatrixWorld(),tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y_ extends nh{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class M_ extends eo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new y_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Tu=new Ue,vr=new C,nl=new C;class S_ extends nh{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(vr),nl.copy(n.position),nl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nl),n.updateMatrixWorld(),i.makeTranslation(-vr.x,-vr.y,-vr.z),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu)}}class T_ extends eo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new S_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ma extends qd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class E_ extends nh{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rf extends eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new E_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class b_ extends eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const il=new WeakMap;class A_ extends as{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=mi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(il.has(o)===!0)i&&i(il.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),il.set(l,c),mi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});mi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}}class w_ extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class of{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class R_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){_n.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;_n.multiplyQuaternionsFlat(e,o,e,t,e,n),_n.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const ih="\\[\\]\\.:\\/",C_=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",P_="[^"+ih.replace("\\.","")+"]",D_=/((?:WC+[\/:])*)/.source.replace("WC",sh),I_=/(WCOD+)?/.source.replace("WCOD",P_),L_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),N_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),U_=new RegExp("^"+D_+I_+L_+N_+"$"),F_=["material","materials","bones","map"];class O_{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C_,"")}static parseTrackName(e){const t=U_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);F_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=O_;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class B_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Rs,endingEnd:Rs};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Xp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Yp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Xc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===qp;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Ud){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Cs,i.endingEnd=Cs):(e?i.endingStart=this.zeroSlopeAtStart?Cs:Rs:i.endingStart=Qo,t?i.endingEnd=this.zeroSlopeAtEnd?Cs:Rs:i.endingEnd=Qo)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const k_=new Float32Array(1);class z_ extends Si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],p=d.name;let _=h[p];if(_!==void 0)++_.referenceCount,o[u]=_;else{if(_=o[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,p));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;_=new R_(et.create(n,p,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,p),o[u]=_}a[u].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new tf(new Float32Array(2),new Float32Array(2),1,k_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?fc.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Xc),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new B_(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?fc.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class qt{constructor(e){this.value=e}clone(){return new qt(this.value.clone===void 0?this.value:this.value.clone())}}const Eu=new Ue;let V_=class{constructor(e,t,n=0,i=1/0){this.ray=new tr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eu),this}intersectObject(e,t=!0,n=[]){return pc(e,this,n,t),n.sort(bu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)pc(e[i],this,n,t);return n.sort(bu),n}};function bu(r,e){return r.distance-e.distance}function pc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)pc(s[o],e,t,!0)}}class mc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Au=new me;class H_{constructor(e=new me(1/0,1/0),t=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Au.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Au).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class G_ extends Si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function wu(r,e,t,n){const i=W_(n);switch(t){case Dd:return r*e;case Vc:return r*e/i.components*i.byteLength;case Hc:return r*e/i.components*i.byteLength;case Ld:return r*e*2/i.components*i.byteLength;case Gc:return r*e*2/i.components*i.byteLength;case Id:return r*e*3/i.components*i.byteLength;case wn:return r*e*4/i.components*i.byteLength;case Wc:return r*e*4/i.components*i.byteLength;case ko:case zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Ho:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bl:case zl:return Math.max(r,16)*Math.max(e,8)/4;case Ol:case kl:return Math.max(r,8)*Math.max(e,8)/2;case Vl:case Hl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Go:case sc:case rc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Nd:case oc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ac:case lc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function W_(r){switch(r){case Dn:case Rd:return{byteLength:1,components:1};case Ur:case Cd:case xi:return{byteLength:2,components:1};case kc:case zc:return{byteLength:2,components:4};case os:case Bc:case kn:return{byteLength:4,components:1};case Pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function af(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function X_(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],g=u[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const g=u[p];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,og=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_g=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,T0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:q_,alphahash_pars_fragment:Y_,alphamap_fragment:j_,alphamap_pars_fragment:K_,alphatest_fragment:$_,alphatest_pars_fragment:Z_,aomap_fragment:J_,aomap_pars_fragment:Q_,batching_pars_vertex:eg,batching_vertex:tg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:sg,iridescence_fragment:rg,bumpmap_pars_fragment:og,clipping_planes_fragment:ag,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:hg,color_fragment:ug,color_pars_fragment:dg,color_pars_vertex:fg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:_g,defaultnormal_vertex:gg,displacementmap_pars_vertex:vg,displacementmap_vertex:xg,emissivemap_fragment:yg,emissivemap_pars_fragment:Mg,colorspace_fragment:Sg,colorspace_pars_fragment:Tg,envmap_fragment:Eg,envmap_common_pars_fragment:bg,envmap_pars_fragment:Ag,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Bg,envmap_vertex:Rg,fog_vertex:Cg,fog_pars_vertex:Pg,fog_fragment:Dg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Lg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:Fg,lights_pars_begin:Og,lights_toon_fragment:kg,lights_toon_pars_fragment:zg,lights_phong_fragment:Vg,lights_phong_pars_fragment:Hg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Xg,lights_fragment_maps:qg,lights_fragment_end:Yg,logdepthbuf_fragment:jg,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:Zg,map_fragment:Jg,map_pars_fragment:Qg,map_particle_fragment:ev,map_particle_pars_fragment:tv,metalnessmap_fragment:nv,metalnessmap_pars_fragment:iv,morphinstance_vertex:sv,morphcolor_vertex:rv,morphnormal_vertex:ov,morphtarget_pars_vertex:av,morphtarget_vertex:lv,normal_fragment_begin:cv,normal_fragment_maps:hv,normal_pars_fragment:uv,normal_pars_vertex:dv,normal_vertex:fv,normalmap_pars_fragment:pv,clearcoat_normal_fragment_begin:mv,clearcoat_normal_fragment_maps:_v,clearcoat_pars_fragment:gv,iridescence_pars_fragment:vv,opaque_fragment:xv,packing:yv,premultiplied_alpha_fragment:Mv,project_vertex:Sv,dithering_fragment:Tv,dithering_pars_fragment:Ev,roughnessmap_fragment:bv,roughnessmap_pars_fragment:Av,shadowmap_pars_fragment:wv,shadowmap_pars_vertex:Rv,shadowmap_vertex:Cv,shadowmask_pars_fragment:Pv,skinbase_vertex:Dv,skinning_pars_vertex:Iv,skinning_vertex:Lv,skinnormal_vertex:Nv,specularmap_fragment:Uv,specularmap_pars_fragment:Fv,tonemapping_fragment:Ov,tonemapping_pars_fragment:Bv,transmission_fragment:kv,transmission_pars_fragment:zv,uv_pars_fragment:Vv,uv_pars_vertex:Hv,uv_vertex:Gv,worldpos_vertex:Wv,background_vert:Xv,background_frag:qv,backgroundCube_vert:Yv,backgroundCube_frag:jv,cube_vert:Kv,cube_frag:$v,depth_vert:Zv,depth_frag:Jv,distanceRGBA_vert:Qv,distanceRGBA_frag:e0,equirect_vert:t0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:_0,meshtoon_vert:g0,meshtoon_frag:v0,points_vert:x0,points_frag:y0,shadow_vert:M0,shadow_frag:S0,sprite_vert:T0,sprite_frag:E0},ie={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Xn={basic:{uniforms:Qt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Qt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ve(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Qt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Qt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Qt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ve(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Qt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Qt([ie.points,ie.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Qt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Qt([ie.common,ie.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Qt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Qt([ie.sprite,ie.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Qt([ie.common,ie.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Qt([ie.lights,ie.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Xn.physical={uniforms:Qt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Po={r:0,b:0,g:0},Ki=new Kn,b0=new Ue;function A0(r,e,t,n,i,s,o){const a=new ve(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function g(M){let x=!1;const A=_(M);A===null?f(a,l):A&&A.isColor&&(f(A,1),x=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,x){const A=_(x);A&&(A.isCubeTexture||A.mapping===fa)?(h===void 0&&(h=new At(new Jr(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Xs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ki.copy(x.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(Ki)),h.material.toneMapped=Xe.getTransfer(A.colorSpace)!==nt,(u!==A||d!==A.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new At(new nr(2,2),new Gt({name:"BackgroundMaterial",uniforms:Xs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(A.colorSpace)!==nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,x){M.getRGB(Po,Xd(r)),n.buffers.color.setClear(Po.r,Po.g,Po.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:g,addToRenderList:m,dispose:v}}function w0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,D,z,O,W){let q=!1;const H=u(O,z,D);s!==H&&(s=H,c(s.object)),q=p(S,O,z,W),q&&_(S,O,z,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(S,D,z,O),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,D,z){const O=z.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let q=W[D.id];q===void 0&&(q={},W[D.id]=q);let H=q[O];return H===void 0&&(H=d(l()),q[O]=H),H}function d(S){const D=[],z=[],O=[];for(let W=0;W<t;W++)D[W]=0,z[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,D,z,O){const W=s.attributes,q=D.attributes;let H=0;const K=z.getAttributes();for(const V in K)if(K[V].location>=0){const ue=W[V];let Te=q[V];if(Te===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Te=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Te=S.instanceColor)),ue===void 0||ue.attribute!==Te||Te&&ue.data!==Te.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function _(S,D,z,O){const W={},q=D.attributes;let H=0;const K=z.getAttributes();for(const V in K)if(K[V].location>=0){let ue=q[V];ue===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor));const Te={};Te.attribute=ue,ue&&ue.data&&(Te.data=ue.data),W[V]=Te,H++}s.attributes=W,s.attributesNum=H,s.index=O}function g(){const S=s.newAttributes;for(let D=0,z=S.length;D<z;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){const z=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;z[S]=1,O[S]===0&&(r.enableVertexAttribArray(S),O[S]=1),W[S]!==D&&(r.vertexAttribDivisor(S,D),W[S]=D)}function v(){const S=s.newAttributes,D=s.enabledAttributes;for(let z=0,O=D.length;z<O;z++)D[z]!==S[z]&&(r.disableVertexAttribArray(z),D[z]=0)}function M(S,D,z,O,W,q,H){H===!0?r.vertexAttribIPointer(S,D,z,W,q):r.vertexAttribPointer(S,D,z,O,W,q)}function x(S,D,z,O){g();const W=O.attributes,q=z.getAttributes(),H=D.defaultAttributeValues;for(const K in q){const V=q[K];if(V.location>=0){let ae=W[K];if(ae===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),ae!==void 0){const ue=ae.normalized,Te=ae.itemSize,ze=e.get(ae);if(ze===void 0)continue;const ot=ze.buffer,Y=ze.type,te=ze.bytesPerElement,Me=Y===r.INT||Y===r.UNSIGNED_INT||ae.gpuType===Bc;if(ae.isInterleavedBufferAttribute){const le=ae.data,Se=le.stride,Ze=ae.offset;if(le.isInstancedInterleavedBuffer){for(let Pe=0;Pe<V.locationSize;Pe++)f(V.location+Pe,le.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)m(V.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let Pe=0;Pe<V.locationSize;Pe++)M(V.location+Pe,Te/V.locationSize,Y,ue,Se*te,(Ze+Te/V.locationSize*Pe)*te,Me)}else{if(ae.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)f(V.location+le,ae.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let le=0;le<V.locationSize;le++)m(V.location+le);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let le=0;le<V.locationSize;le++)M(V.location+le,Te/V.locationSize,Y,ue,Te*te,Te/V.locationSize*le*te,Me)}}else if(H!==void 0){const ue=H[K];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(V.location,ue);break;case 3:r.vertexAttrib3fv(V.location,ue);break;case 4:r.vertexAttrib4fv(V.location,ue);break;default:r.vertexAttrib1fv(V.location,ue)}}}}v()}function A(){P();for(const S in n){const D=n[S];for(const z in D){const O=D[z];for(const W in O)h(O[W].object),delete O[W];delete D[z]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const z in D){const O=D[z];for(const W in O)h(O[W].object),delete O[W];delete D[z]}delete n[S.id]}function w(S){for(const D in n){const z=n[D];if(z[S.id]===void 0)continue;const O=z[S.id];for(const W in O)h(O[W].object),delete O[W];delete z[S.id]}}function P(){T(),o=!0,s!==i&&(s=i,c(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function R0(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function C0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==wn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Dn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==kn&&!P)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:A,maxSamples:b}}function P0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ii,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const v=s?0:n,M=v*4;let x=f.clippingState||null;l.value=x,x=h(_,d,M,p);for(let A=0;A!==M;++A)x[A]=t[A];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,x=p;M!==g;++M,x+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function D0(r){let e=new WeakMap;function t(o,a){return a===Zo?o.mapping=Hs:a===Fl&&(o.mapping=Gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zo||a===Fl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qm(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ps=4,Ru=[.125,.215,.35,.446,.526,.582],es=20,sl=new ma,Cu=new ve;let rl=null,ol=0,al=0,ll=!1;const Ji=(1+Math.sqrt(5))/2,bs=1/Ji,Pu=[new C(-Ji,bs,0),new C(Ji,bs,0),new C(-bs,0,Ji),new C(bs,0,Ji),new C(0,Ji,-bs),new C(0,Ji,bs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],I0=new C;class Du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=I0}=s;rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,ol,al),this._renderer.xr.enabled=ll,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:xi,format:wn,colorSpace:Ht,depthBuffer:!1},i=Iu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(s)),this._blurMaterial=N0(s,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,n,i,s){const l=new en(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Cu),u.toneMapping=Fi,u.autoClear=!1;const _=new pi({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new At(new Jr,_);let m=!1;const f=e.background;f?f.isColor&&(_.color.copy(f),e.background=null,m=!0):(_.color.copy(Cu),m=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));const x=this._cubeSize;Do(i,M*x,v>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hs||e.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Do(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pu[(i-s-1)%Pu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new At(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*es-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):es;m>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const f=[];let v=0;for(let w=0;w<es;++w){const P=w/g,T=Math.exp(-P*P/2);f.push(T),w===0?v+=T:w<m&&(v+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const x=this._sizeLods[i],A=3*x*(i>M-Ps?i-M+Ps:0),b=4*(this._cubeSize-x);Do(t,A,b,3*x,2*x),l.setRenderTarget(t),l.render(u,sl)}}function L0(r){const e=[],t=[],n=[];let i=r;const s=r-Ps+1+Ru.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ps?l=Ru[o-r+Ps-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,v=new Float32Array(g*_*p),M=new Float32Array(m*_*p),x=new Float32Array(f*_*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,P=b>2?0:-1,T=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(T,g*_*b),M.set(d,m*_*b);const S=[b,b,b,b,b,b];x.set(S,f*_*b)}const A=new sn;A.setAttribute("position",new Bt(v,g)),A.setAttribute("uv",new Bt(M,m)),A.setAttribute("faceIndex",new Bt(x,f)),e.push(A),i>Ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Iu(r,e,t){const n=new Vn(r,e,t);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function N0(r,e,t){const n=new Float32Array(es),i=new C(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Lu(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Nu(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function U0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zo||l===Fl,h=l===Hs||l===Gs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Du(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Du(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function F0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ns("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function O0(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],r.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let M=0,x=v.length;M<x;M+=3){const A=v[M+0],b=v[M+1],w=v[M+2];d.push(A,b,b,w,w,A)}}else if(_!==void 0){const v=_.array;g=_.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const A=M+0,b=M+1,w=M+2;d.push(A,b,b,w,w,A)}}else return;const m=new(zd(d)?Wd:Gd)(d,1);m.version=g;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function B0(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,_){_!==0&&(r.drawElementsInstanced(n,p,s,d*o,_),t.update(p,n,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function u(d,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,g,0,_);let f=0;for(let v=0;v<_;v++)f+=p[v]*g[v];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function k0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function z0(r,e,t){const n=new WeakMap,i=new $e;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*b*4*u),P=new Vd(w,A,b,u);P.type=kn,P.needsUpdate=!0;const T=x*4;for(let D=0;D<u;D++){const z=f[D],O=v[D],W=M[D],q=A*b*4*D;for(let H=0;H<z.count;H++){const K=H*T;_===!0&&(i.fromBufferAttribute(z,H),w[q+K+0]=i.x,w[q+K+1]=i.y,w[q+K+2]=i.z,w[q+K+3]=0),g===!0&&(i.fromBufferAttribute(O,H),w[q+K+4]=i.x,w[q+K+5]=i.y,w[q+K+6]=i.z,w[q+K+7]=0),m===!0&&(i.fromBufferAttribute(W,H),w[q+K+8]=i.x,w[q+K+9]=i.y,w[q+K+10]=i.z,w[q+K+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new me(A,b)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function V0(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const lf=new Lt,Uu=new Qd(1,1),cf=new Vd,hf=new Pm,uf=new Yd,Fu=[],Ou=[],Bu=new Float32Array(16),ku=new Float32Array(9),zu=new Float32Array(4);function rr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Fu[i];if(s===void 0&&(s=new Float32Array(i),Fu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _a(r,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function H0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function G0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function W0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function X0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function q0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;zu.set(n),r.uniformMatrix2fv(this.addr,!1,zu),Ut(t,n)}}function Y0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;ku.set(n),r.uniformMatrix3fv(this.addr,!1,ku),Ut(t,n)}}function j0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Bu.set(n),r.uniformMatrix4fv(this.addr,!1,Bu),Ut(t,n)}}function K0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function Z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function J0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function Q0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function ix(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Uu.compareFunction=Bd,s=Uu):s=lf,t.setTexture2D(e||s,i)}function sx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hf,i)}function rx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uf,i)}function ox(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cf,i)}function ax(r){switch(r){case 5126:return H0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return j0;case 5124:case 35670:return K0;case 35667:case 35671:return $0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}function lx(r,e){r.uniform1fv(this.addr,e)}function cx(r,e){const t=rr(e,this.size,2);r.uniform2fv(this.addr,t)}function hx(r,e){const t=rr(e,this.size,3);r.uniform3fv(this.addr,t)}function ux(r,e){const t=rr(e,this.size,4);r.uniform4fv(this.addr,t)}function dx(r,e){const t=rr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function fx(r,e){const t=rr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function px(r,e){const t=rr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mx(r,e){r.uniform1iv(this.addr,e)}function _x(r,e){r.uniform2iv(this.addr,e)}function gx(r,e){r.uniform3iv(this.addr,e)}function vx(r,e){r.uniform4iv(this.addr,e)}function xx(r,e){r.uniform1uiv(this.addr,e)}function yx(r,e){r.uniform2uiv(this.addr,e)}function Mx(r,e){r.uniform3uiv(this.addr,e)}function Sx(r,e){r.uniform4uiv(this.addr,e)}function Tx(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||lf,s[o])}function Ex(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hf,s[o])}function bx(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||uf,s[o])}function Ax(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||cf,s[o])}function wx(r){switch(r){case 5126:return lx;case 35664:return cx;case 35665:return hx;case 35666:return ux;case 35674:return dx;case 35675:return fx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return _x;case 35668:case 35672:return gx;case 35669:case 35673:return vx;case 5125:return xx;case 36294:return yx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Ax}}class Rx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ax(t.type)}}class Cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wx(t.type)}}class Px{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Vu(r,e){r.seq.push(e),r.map[e.id]=e}function Dx(r,e,t){const n=r.name,i=n.length;for(cl.lastIndex=0;;){const s=cl.exec(n),o=cl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vu(t,c===void 0?new Rx(a,r,e):new Cx(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Px(a),Vu(t,u)),t=u}}}class Xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Dx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Hu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ix=37297;let Lx=0;function Nx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Gu=new Fe;function Ux(r){Xe._getMatrix(Gu,Xe.workingColorSpace,r);const e=`mat3( ${Gu.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case ea:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Wu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Nx(r.getShaderSource(e),o)}else return i}function Fx(r,e){const t=Ux(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ox(r,e){let t;switch(e){case yd:t="Linear";break;case Md:t="Reinhard";break;case Oc:t="Cineon";break;case Sd:t="ACESFilmic";break;case Ed:t="AgX";break;case bd:t="Neutral";break;case Td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Io=new C;function Bx(){Xe.getLuminanceCoefficients(Io);const r=Io.x.toFixed(4),e=Io.y.toFixed(4),t=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function zx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Sr(r){return r!==""}function Xu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(r){return r.replace(Hx,Wx)}const Gx=new Map;function Wx(r,e){let t=Be[e];if(t===void 0){const n=Gx.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _c(t)}const Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(r){return r.replace(Xx,qx)}function qx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ju(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function jx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function $x(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xd:e="ENVMAP_BLENDING_MULTIPLY";break;case Hp:e="ENVMAP_BLENDING_MIX";break;case Gp:e="ENVMAP_BLENDING_ADD";break}return e}function Zx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Jx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Yx(t),c=jx(t),h=Kx(t),u=$x(t),d=Zx(t),p=kx(t),_=zx(s),g=i.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sr).join(`
`),f.length>0&&(f+=`
`)):(m=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),f=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Be.tonemapping_pars_fragment:"",t.toneMapping!==Fi?Ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Fx("linearToOutputTexel",t.outputColorSpace),Bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=_c(o),o=Xu(o,t),o=qu(o,t),a=_c(a),a=Xu(a,t),a=qu(a,t),o=Yu(o),a=Yu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+m+o,x=v+f+a,A=Hu(i,i.VERTEX_SHADER,M),b=Hu(i,i.FRAGMENT_SHADER,x);i.attachShader(g,A),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(D){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(b).trim();let q=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,b);else{const K=Wu(i,A,"vertex"),V=Wu(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+K+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||W==="")&&(H=!1);H&&(D.diagnostics={runnable:q,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(A),i.deleteShader(b),P=new Xo(i,g),T=Vx(i,g)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,Ix)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=b,this}let Qx=0;class ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ty(e),t.set(e,n)),n}}class ty{constructor(e){this.id=Qx++,this.code=e,this.usedTimes=0}}function ny(r,e,t,n,i,s,o){const a=new jc,l=new ey,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,D,z,O){const W=z.fog,q=O.geometry,H=T.isMeshStandardMaterial?z.environment:null,K=(T.isMeshStandardMaterial?t:e).get(T.envMap||H),V=K&&K.mapping===fa?K.image.height:null,ae=_[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ue=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Te=ue!==void 0?ue.length:0;let ze=0;q.morphAttributes.position!==void 0&&(ze=1),q.morphAttributes.normal!==void 0&&(ze=2),q.morphAttributes.color!==void 0&&(ze=3);let ot,Y,te,Me;if(ae){const tt=Xn[ae];ot=tt.vertexShader,Y=tt.fragmentShader}else ot=T.vertexShader,Y=T.fragmentShader,l.update(T),te=l.getVertexShaderID(T),Me=l.getFragmentShaderID(T);const le=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Ze=O.isInstancedMesh===!0,Pe=O.isBatchedMesh===!0,xt=!!T.map,yt=!!T.matcap,Je=!!K,I=!!T.aoMap,$t=!!T.lightMap,Qe=!!T.bumpMap,ut=!!T.normalMap,ge=!!T.displacementMap,je=!!T.emissiveMap,be=!!T.metalnessMap,Oe=!!T.roughnessMap,Dt=T.anisotropy>0,R=T.clearcoat>0,y=T.dispersion>0,F=T.iridescence>0,X=T.sheen>0,$=T.transmission>0,G=Dt&&!!T.anisotropyMap,xe=R&&!!T.clearcoatMap,se=R&&!!T.clearcoatNormalMap,_e=R&&!!T.clearcoatRoughnessMap,ye=F&&!!T.iridescenceMap,Z=F&&!!T.iridescenceThicknessMap,ce=X&&!!T.sheenColorMap,Ce=X&&!!T.sheenRoughnessMap,we=!!T.specularMap,ne=!!T.specularColorMap,Le=!!T.specularIntensityMap,L=$&&!!T.transmissionMap,re=$&&!!T.thicknessMap,J=!!T.gradientMap,de=!!T.alphaMap,Q=T.alphaTest>0,j=!!T.alphaHash,fe=!!T.extensions;let Ne=Fi;T.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const ft={shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:ot,fragmentShader:Y,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&O._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&O.instanceColor!==null,instancingMorph:Ze&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ht,alphaToCoverage:!!T.alphaToCoverage,map:xt,matcap:yt,envMap:Je,envMapMode:Je&&K.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:$t,bumpMap:Qe,normalMap:ut,displacementMap:d&&ge,emissiveMap:je,normalMapObjectSpace:ut&&T.normalMapType===Zp,normalMapTangentSpace:ut&&T.normalMapType===Od,metalnessMap:be,roughnessMap:Oe,anisotropy:Dt,anisotropyMap:G,clearcoat:R,clearcoatMap:xe,clearcoatNormalMap:se,clearcoatRoughnessMap:_e,dispersion:y,iridescence:F,iridescenceMap:ye,iridescenceThicknessMap:Z,sheen:X,sheenColorMap:ce,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:ne,specularIntensityMap:Le,transmission:$,transmissionMap:L,thicknessMap:re,gradientMap:J,opaque:T.transparent===!1&&T.blending===Ls&&T.alphaToCoverage===!1,alphaMap:de,alphaTest:Q,alphaHash:j,combine:T.combine,mapUv:xt&&g(T.map.channel),aoMapUv:I&&g(T.aoMap.channel),lightMapUv:$t&&g(T.lightMap.channel),bumpMapUv:Qe&&g(T.bumpMap.channel),normalMapUv:ut&&g(T.normalMap.channel),displacementMapUv:ge&&g(T.displacementMap.channel),emissiveMapUv:je&&g(T.emissiveMap.channel),metalnessMapUv:be&&g(T.metalnessMap.channel),roughnessMapUv:Oe&&g(T.roughnessMap.channel),anisotropyMapUv:G&&g(T.anisotropyMap.channel),clearcoatMapUv:xe&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(T.sheenRoughnessMap.channel),specularMapUv:we&&g(T.specularMap.channel),specularColorMapUv:ne&&g(T.specularColorMap.channel),specularIntensityMapUv:Le&&g(T.specularIntensityMap.channel),transmissionMapUv:L&&g(T.transmissionMap.channel),thicknessMapUv:re&&g(T.thicknessMap.channel),alphaMapUv:de&&g(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ut||Dt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(xt||de),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:xt&&T.map.isVideoTexture===!0&&Xe.getTransfer(T.map.colorSpace)===nt,decodeVideoTextureEmissive:je&&T.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(T.emissiveMap.colorSpace)===nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===bn,flipSided:T.side===nn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:fe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&T.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)S.push(D),S.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(v(S,T),M(S,T),S.push(r.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function M(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const S=_[T.type];let D;if(S){const z=Xn[S];D=pa.clone(z.uniforms)}else D=T.uniforms;return D}function A(T,S){let D;for(let z=0,O=h.length;z<O;z++){const W=h[z];if(W.cacheKey===S){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Jx(r,S,T,s),h.push(D)),D}function b(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function w(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:P}}function iy(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function sy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ku(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $u(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,_,g,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function a(u,d,p,_,g,m){const f=o(u,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,_,g,m){const f=o(u,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||sy),n.length>1&&n.sort(d||Ku),i.length>1&&i.sort(d||Ku)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function ry(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new $u,r.set(n,[o])):i>=s.length?(o=new $u,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function oy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ve};break;case"SpotLight":t={position:new C,direction:new C,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function ay(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ly=0;function cy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hy(r){const e=new oy,t=ay(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,s=new Ue,o=new Ue;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,v=0,M=0,x=0,A=0,b=0,w=0;c.sort(cy);for(let T=0,S=c.length;T<S;T++){const D=c[T],z=D.color,O=D.intensity,W=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],O);w++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=D.shadow.matrix,v++}n.directional[p]=H,p++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(z).multiplyScalar(O),H.distance=W,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[g]=H;const K=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,K.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[g]=K.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=q,x++}g++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(z).multiplyScalar(O),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=H,m++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const K=D.shadow,V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=D.shadow.matrix,M++}n.point[_]=H,_++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(O),H.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[f]=H,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==A||P.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,P.directionalLength=p,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=A,P.numLightProbes=w,n.version=ly++)}function l(c,h){let u=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const M=c[f];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Zu(r){const e=new hy(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function uy(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Zu(r),e.set(i,[a])):s>=o.length?(a=new Zu(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function py(r,e,t){let n=new $c;const i=new me,s=new me,o=new $e,a=new o_({depthPacking:$p}),l=new a_,c={},h=t.maxTextureSize,u={[vi]:nn,[nn]:vi,[bn]:bn},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:dy,fragmentShader:fy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new At(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let f=this.type;this.render=function(b,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const T=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),z=r.state;z.setBlending(_i),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=f!==ci&&this.type===ci,W=f===ci&&this.type!==ci;for(let q=0,H=b.length;q<H;q++){const K=b[q],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ae=V.getFrameExtents();if(i.multiply(ae),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ae.x),i.x=s.x*ae.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ae.y),i.y=s.y*ae.y,V.mapSize.y=s.y)),V.map===null||O===!0||W===!0){const Te=this.type!==ci?{minFilter:Ot,magFilter:Ot}:{};V.map!==null&&V.map.dispose(),V.map=new Vn(i.x,i.y,Te),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const ue=V.getViewportCount();for(let Te=0;Te<ue;Te++){const ze=V.getViewport(Te);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),z.viewport(o),V.updateMatrices(K,Te),n=V.getFrustum(),x(w,P,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===ci&&v(V,P),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(T,S,D)};function v(b,w){const P=e.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,P,d,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,P,p,g,null)}function M(b,w,P,T){let S=null;const D=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const z=S.uuid,O=w.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let q=W[O];q===void 0&&(q=S.clone(),W[O]=q,w.addEventListener("dispose",A)),S=q}if(S.visible=w.visible,S.wireframe=w.wireframe,T===ci?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=r.properties.get(S);z.light=P}return S}function x(b,w,P,T,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===ci)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const O=e.update(b),W=b.material;if(Array.isArray(W)){const q=O.groups;for(let H=0,K=q.length;H<K;H++){const V=q[H],ae=W[V.materialIndex];if(ae&&ae.visible){const ue=M(b,ae,T,S);b.onBeforeShadow(r,b,w,P,O,ue,V),r.renderBufferDirect(P,null,O,ue,b,V),b.onAfterShadow(r,b,w,P,O,ue,V)}}}else if(W.visible){const q=M(b,W,T,S);b.onBeforeShadow(r,b,w,P,O,q,null),r.renderBufferDirect(P,null,O,q,b,null),b.onAfterShadow(r,b,w,P,O,q,null)}}const z=b.children;for(let O=0,W=z.length;O<W;O++)x(z[O],w,P,T,S)}function A(b){b.target.removeEventListener("dispose",A);for(const P in c){const T=c[P],S=b.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const my={[Cl]:Pl,[Dl]:Nl,[Il]:Ul,[Vs]:Ll,[Pl]:Cl,[Nl]:Dl,[Ul]:Il,[Ll]:Vs};function _y(r,e){function t(){let L=!1;const re=new $e;let J=null;const de=new $e(0,0,0,0);return{setMask:function(Q){J!==Q&&!L&&(r.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){L=Q},setClear:function(Q,j,fe,Ne,ft){ft===!0&&(Q*=Ne,j*=Ne,fe*=Ne),re.set(Q,j,fe,Ne),de.equals(re)===!1&&(r.clearColor(Q,j,fe,Ne),de.copy(re))},reset:function(){L=!1,J=null,de.set(-1,0,0,0)}}}function n(){let L=!1,re=!1,J=null,de=null,Q=null;return{setReversed:function(j){if(re!==j){const fe=e.get("EXT_clip_control");j?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),re=j;const Ne=Q;Q=null,this.setClear(Ne)}},getReversed:function(){return re},setTest:function(j){j?le(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(j){J!==j&&!L&&(r.depthMask(j),J=j)},setFunc:function(j){if(re&&(j=my[j]),de!==j){switch(j){case Cl:r.depthFunc(r.NEVER);break;case Pl:r.depthFunc(r.ALWAYS);break;case Dl:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case Il:r.depthFunc(r.EQUAL);break;case Ll:r.depthFunc(r.GEQUAL);break;case Nl:r.depthFunc(r.GREATER);break;case Ul:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=j}},setLocked:function(j){L=j},setClear:function(j){Q!==j&&(re&&(j=1-j),r.clearDepth(j),Q=j)},reset:function(){L=!1,J=null,de=null,Q=null,re=!1}}}function i(){let L=!1,re=null,J=null,de=null,Q=null,j=null,fe=null,Ne=null,ft=null;return{setTest:function(tt){L||(tt?le(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(tt){re!==tt&&!L&&(r.stencilMask(tt),re=tt)},setFunc:function(tt,In,ni){(J!==tt||de!==In||Q!==ni)&&(r.stencilFunc(tt,In,ni),J=tt,de=In,Q=ni)},setOp:function(tt,In,ni){(j!==tt||fe!==In||Ne!==ni)&&(r.stencilOp(tt,In,ni),j=tt,fe=In,Ne=ni)},setLocked:function(tt){L=tt},setClear:function(tt){ft!==tt&&(r.clearStencil(tt),ft=tt)},reset:function(){L=!1,re=null,J=null,de=null,Q=null,j=null,fe=null,Ne=null,ft=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,v=null,M=null,x=null,A=null,b=null,w=new ve(0,0,0),P=0,T=!1,S=null,D=null,z=null,O=null,W=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=K>=2);let ae=null,ue={};const Te=r.getParameter(r.SCISSOR_BOX),ze=r.getParameter(r.VIEWPORT),ot=new $e().fromArray(Te),Y=new $e().fromArray(ze);function te(L,re,J,de){const Q=new Uint8Array(4),j=r.createTexture();r.bindTexture(L,j),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let fe=0;fe<J;fe++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage2D(re+fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q);return j}const Me={};Me[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(r.DEPTH_TEST),o.setFunc(Vs),Qe(!1),ut(Uh),le(r.CULL_FACE),I(_i);function le(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Se(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Ze(L,re){return u[L]!==re?(r.bindFramebuffer(L,re),u[L]=re,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=re),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=re),!0):!1}function Pe(L,re){let J=p,de=!1;if(L){J=d.get(re),J===void 0&&(J=[],d.set(re,J));const Q=L.textures;if(J.length!==Q.length||J[0]!==r.COLOR_ATTACHMENT0){for(let j=0,fe=Q.length;j<fe;j++)J[j]=r.COLOR_ATTACHMENT0+j;J.length=Q.length,de=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,de=!0);de&&r.drawBuffers(J)}function xt(L){return _!==L?(r.useProgram(L),_=L,!0):!1}const yt={[Qi]:r.FUNC_ADD,[bp]:r.FUNC_SUBTRACT,[Ap]:r.FUNC_REVERSE_SUBTRACT};yt[wp]=r.MIN,yt[Rp]=r.MAX;const Je={[Cp]:r.ZERO,[Pp]:r.ONE,[Dp]:r.SRC_COLOR,[wl]:r.SRC_ALPHA,[Op]:r.SRC_ALPHA_SATURATE,[Up]:r.DST_COLOR,[Lp]:r.DST_ALPHA,[Ip]:r.ONE_MINUS_SRC_COLOR,[Rl]:r.ONE_MINUS_SRC_ALPHA,[Fp]:r.ONE_MINUS_DST_COLOR,[Np]:r.ONE_MINUS_DST_ALPHA,[Bp]:r.CONSTANT_COLOR,[kp]:r.ONE_MINUS_CONSTANT_COLOR,[zp]:r.CONSTANT_ALPHA,[Vp]:r.ONE_MINUS_CONSTANT_ALPHA};function I(L,re,J,de,Q,j,fe,Ne,ft,tt){if(L===_i){g===!0&&(Se(r.BLEND),g=!1);return}if(g===!1&&(le(r.BLEND),g=!0),L!==Ep){if(L!==m||tt!==T){if((f!==Qi||x!==Qi)&&(r.blendEquation(r.FUNC_ADD),f=Qi,x=Qi),tt)switch(L){case Ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $o:r.blendFunc(r.ONE,r.ONE);break;case Fh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Oh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $o:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Fh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,M=null,A=null,b=null,w.set(0,0,0),P=0,m=L,T=tt}return}Q=Q||re,j=j||J,fe=fe||de,(re!==f||Q!==x)&&(r.blendEquationSeparate(yt[re],yt[Q]),f=re,x=Q),(J!==v||de!==M||j!==A||fe!==b)&&(r.blendFuncSeparate(Je[J],Je[de],Je[j],Je[fe]),v=J,M=de,A=j,b=fe),(Ne.equals(w)===!1||ft!==P)&&(r.blendColor(Ne.r,Ne.g,Ne.b,ft),w.copy(Ne),P=ft),m=L,T=!1}function $t(L,re){L.side===bn?Se(r.CULL_FACE):le(r.CULL_FACE);let J=L.side===nn;re&&(J=!J),Qe(J),L.blending===Ls&&L.transparent===!1?I(_i):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const de=L.stencilWrite;a.setTest(de),de&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),je(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(L){S!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),S=L)}function ut(L){L!==Sp?(le(r.CULL_FACE),L!==D&&(L===Uh?r.cullFace(r.BACK):L===Tp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),D=L}function ge(L){L!==z&&(H&&r.lineWidth(L),z=L)}function je(L,re,J){L?(le(r.POLYGON_OFFSET_FILL),(O!==re||W!==J)&&(r.polygonOffset(re,J),O=re,W=J)):Se(r.POLYGON_OFFSET_FILL)}function be(L){L?le(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function Oe(L){L===void 0&&(L=r.TEXTURE0+q-1),ae!==L&&(r.activeTexture(L),ae=L)}function Dt(L,re,J){J===void 0&&(ae===null?J=r.TEXTURE0+q-1:J=ae);let de=ue[J];de===void 0&&(de={type:void 0,texture:void 0},ue[J]=de),(de.type!==L||de.texture!==re)&&(ae!==J&&(r.activeTexture(J),ae=J),r.bindTexture(L,re||Me[L]),de.type=L,de.texture=re)}function R(){const L=ue[ae];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{r.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{r.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{r.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{r.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(L){ot.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function Ce(L){Y.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function we(L,re){let J=c.get(re);J===void 0&&(J=new WeakMap,c.set(re,J));let de=J.get(L);de===void 0&&(de=r.getUniformBlockIndex(re,L.name),J.set(L,de))}function ne(L,re){const de=c.get(re).get(L);l.get(re)!==de&&(r.uniformBlockBinding(re,de,L.__bindingPointIndex),l.set(re,de))}function Le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ae=null,ue={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,v=null,M=null,x=null,A=null,b=null,w=new ve(0,0,0),P=0,T=!1,S=null,D=null,z=null,O=null,W=null,ot.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Se,bindFramebuffer:Ze,drawBuffers:Pe,useProgram:xt,setBlending:I,setMaterial:$t,setFlipSided:Qe,setCullFace:ut,setLineWidth:ge,setPolygonOffset:je,setScissorTest:be,activeTexture:Oe,bindTexture:Dt,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:ye,texImage3D:Z,updateUBOMapping:we,uniformBlockBinding:ne,texStorage2D:se,texStorage3D:_e,texSubImage2D:X,texSubImage3D:$,compressedTexSubImage2D:G,compressedTexSubImage3D:xe,scissor:ce,viewport:Ce,reset:Le}}function gy(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return p?new OffscreenCanvas(R,y):Vr("canvas")}function g(R,y,F){let X=1;const $=Dt(R);if(($.width>F||$.height>F)&&(X=F/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const G=Math.floor(X*$.width),xe=Math.floor(X*$.height);u===void 0&&(u=_(G,xe));const se=y?_(G,xe):u;return se.width=G,se.height=xe,se.getContext("2d").drawImage(R,0,0,G,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+G+"x"+xe+")."),se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){r.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,y,F,X,$=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let G=y;if(y===r.RED&&(F===r.FLOAT&&(G=r.R32F),F===r.HALF_FLOAT&&(G=r.R16F),F===r.UNSIGNED_BYTE&&(G=r.R8)),y===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(G=r.R8UI),F===r.UNSIGNED_SHORT&&(G=r.R16UI),F===r.UNSIGNED_INT&&(G=r.R32UI),F===r.BYTE&&(G=r.R8I),F===r.SHORT&&(G=r.R16I),F===r.INT&&(G=r.R32I)),y===r.RG&&(F===r.FLOAT&&(G=r.RG32F),F===r.HALF_FLOAT&&(G=r.RG16F),F===r.UNSIGNED_BYTE&&(G=r.RG8)),y===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(G=r.RG8UI),F===r.UNSIGNED_SHORT&&(G=r.RG16UI),F===r.UNSIGNED_INT&&(G=r.RG32UI),F===r.BYTE&&(G=r.RG8I),F===r.SHORT&&(G=r.RG16I),F===r.INT&&(G=r.RG32I)),y===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(G=r.RGB8UI),F===r.UNSIGNED_SHORT&&(G=r.RGB16UI),F===r.UNSIGNED_INT&&(G=r.RGB32UI),F===r.BYTE&&(G=r.RGB8I),F===r.SHORT&&(G=r.RGB16I),F===r.INT&&(G=r.RGB32I)),y===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),F===r.UNSIGNED_INT&&(G=r.RGBA32UI),F===r.BYTE&&(G=r.RGBA8I),F===r.SHORT&&(G=r.RGBA16I),F===r.INT&&(G=r.RGBA32I)),y===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),y===r.RGBA){const xe=$?ea:Xe.getTransfer(X);F===r.FLOAT&&(G=r.RGBA32F),F===r.HALF_FLOAT&&(G=r.RGBA16F),F===r.UNSIGNED_BYTE&&(G=xe===nt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(R,y){let F;return R?y===null||y===os||y===Fr?F=r.DEPTH24_STENCIL8:y===kn?F=r.DEPTH32F_STENCIL8:y===Ur&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===os||y===Fr?F=r.DEPTH_COMPONENT24:y===kn?F=r.DEPTH_COMPONENT32F:y===Ur&&(F=r.DEPTH_COMPONENT16),F}function A(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ot&&R.minFilter!==pn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function b(R){const y=R.target;y.removeEventListener("dispose",b),P(y),y.isVideoTexture&&h.delete(y)}function w(R){const y=R.target;y.removeEventListener("dispose",w),S(y)}function P(R){const y=n.get(R);if(y.__webglInit===void 0)return;const F=R.source,X=d.get(F);if(X){const $=X[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(R),Object.keys(X).length===0&&d.delete(F)}n.remove(R)}function T(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const F=R.source,X=d.get(F);delete X[y.__cacheKey],o.memory.textures--}function S(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let $=0;$<y.__webglFramebuffer[X].length;$++)r.deleteFramebuffer(y.__webglFramebuffer[X][$]);else r.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)r.deleteFramebuffer(y.__webglFramebuffer[X]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=R.textures;for(let X=0,$=F.length;X<$;X++){const G=n.get(F[X]);G.__webglTexture&&(r.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(F[X])}n.remove(R)}let D=0;function z(){D=0}function O(){const R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function W(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function q(R,y){const F=n.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const X=R.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(F,R,y);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+y)}function H(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Me(F,R,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+y)}function K(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Me(F,R,y);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+y)}function V(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){le(F,R,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+y)}const ae={[ki]:r.REPEAT,[Ni]:r.CLAMP_TO_EDGE,[Jo]:r.MIRRORED_REPEAT},ue={[Ot]:r.NEAREST,[wd]:r.NEAREST_MIPMAP_NEAREST,[Mr]:r.NEAREST_MIPMAP_LINEAR,[pn]:r.LINEAR,[Bo]:r.LINEAR_MIPMAP_NEAREST,[di]:r.LINEAR_MIPMAP_LINEAR},Te={[Jp]:r.NEVER,[sm]:r.ALWAYS,[Qp]:r.LESS,[Bd]:r.LEQUAL,[em]:r.EQUAL,[im]:r.GEQUAL,[tm]:r.GREATER,[nm]:r.NOTEQUAL};function ze(R,y){if(y.type===kn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===pn||y.magFilter===Bo||y.magFilter===Mr||y.magFilter===di||y.minFilter===pn||y.minFilter===Bo||y.minFilter===Mr||y.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ae[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ae[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ae[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ue[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Te[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ot||y.minFilter!==Mr&&y.minFilter!==di||y.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ot(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",b));const X=y.source;let $=d.get(X);$===void 0&&($={},d.set(X,$));const G=W(y);if(G!==R.__cacheKey){$[G]===void 0&&($[G]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[G].usedTimes++;const xe=$[R.__cacheKey];xe!==void 0&&($[R.__cacheKey].usedTimes--,xe.usedTimes===0&&T(y)),R.__cacheKey=G,R.__webglTexture=$[G].texture}return F}function Y(R,y,F){return Math.floor(Math.floor(R/F)/y)}function te(R,y,F,X){const G=R.updateRanges;if(G.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,F,X,y.data);else{G.sort((Z,ce)=>Z.start-ce.start);let xe=0;for(let Z=1;Z<G.length;Z++){const ce=G[xe],Ce=G[Z],we=ce.start+ce.count,ne=Y(Ce.start,y.width,4),Le=Y(ce.start,y.width,4);Ce.start<=we+1&&ne===Le&&Y(Ce.start+Ce.count-1,y.width,4)===ne?ce.count=Math.max(ce.count,Ce.start+Ce.count-ce.start):(++xe,G[xe]=Ce)}G.length=xe+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),_e=r.getParameter(r.UNPACK_SKIP_PIXELS),ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Z=0,ce=G.length;Z<ce;Z++){const Ce=G[Z],we=Math.floor(Ce.start/4),ne=Math.ceil(Ce.count/4),Le=we%y.width,L=Math.floor(we/y.width),re=ne,J=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Le),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Le,L,re,J,F,X,y.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function Me(R,y,F){let X=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=r.TEXTURE_3D);const $=ot(R,y),G=y.source;t.bindTexture(X,R.__webglTexture,r.TEXTURE0+F);const xe=n.get(G);if(G.version!==xe.__version||$===!0){t.activeTexture(r.TEXTURE0+F);const se=Xe.getPrimaries(Xe.workingColorSpace),_e=y.colorSpace===Li?null:Xe.getPrimaries(y.colorSpace),ye=y.colorSpace===Li||se===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Z=g(y.image,!1,i.maxTextureSize);Z=Oe(y,Z);const ce=s.convert(y.format,y.colorSpace),Ce=s.convert(y.type);let we=M(y.internalFormat,ce,Ce,y.colorSpace,y.isVideoTexture);ze(X,y);let ne;const Le=y.mipmaps,L=y.isVideoTexture!==!0,re=xe.__version===void 0||$===!0,J=G.dataReady,de=A(y,Z);if(y.isDepthTexture)we=x(y.format===Br,y.type),re&&(L?t.texStorage2D(r.TEXTURE_2D,1,we,Z.width,Z.height):t.texImage2D(r.TEXTURE_2D,0,we,Z.width,Z.height,0,ce,Ce,null));else if(y.isDataTexture)if(Le.length>0){L&&re&&t.texStorage2D(r.TEXTURE_2D,de,we,Le[0].width,Le[0].height);for(let Q=0,j=Le.length;Q<j;Q++)ne=Le[Q],L?J&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,ne.width,ne.height,ce,Ce,ne.data):t.texImage2D(r.TEXTURE_2D,Q,we,ne.width,ne.height,0,ce,Ce,ne.data);y.generateMipmaps=!1}else L?(re&&t.texStorage2D(r.TEXTURE_2D,de,we,Z.width,Z.height),J&&te(y,Z,ce,Ce)):t.texImage2D(r.TEXTURE_2D,0,we,Z.width,Z.height,0,ce,Ce,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,we,Le[0].width,Le[0].height,Z.depth);for(let Q=0,j=Le.length;Q<j;Q++)if(ne=Le[Q],y.format!==wn)if(ce!==null)if(L){if(J)if(y.layerUpdates.size>0){const fe=wu(ne.width,ne.height,y.format,y.type);for(const Ne of y.layerUpdates){const ft=ne.data.subarray(Ne*fe/ne.data.BYTES_PER_ELEMENT,(Ne+1)*fe/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,Ne,ne.width,ne.height,1,ce,ft)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ne.width,ne.height,Z.depth,ce,ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,we,ne.width,ne.height,Z.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?J&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ne.width,ne.height,Z.depth,ce,Ce,ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,we,ne.width,ne.height,Z.depth,0,ce,Ce,ne.data)}else{L&&re&&t.texStorage2D(r.TEXTURE_2D,de,we,Le[0].width,Le[0].height);for(let Q=0,j=Le.length;Q<j;Q++)ne=Le[Q],y.format!==wn?ce!==null?L?J&&t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,ne.width,ne.height,ce,ne.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,we,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?J&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,ne.width,ne.height,ce,Ce,ne.data):t.texImage2D(r.TEXTURE_2D,Q,we,ne.width,ne.height,0,ce,Ce,ne.data)}else if(y.isDataArrayTexture)if(L){if(re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,we,Z.width,Z.height,Z.depth),J)if(y.layerUpdates.size>0){const Q=wu(Z.width,Z.height,y.format,y.type);for(const j of y.layerUpdates){const fe=Z.data.subarray(j*Q/Z.data.BYTES_PER_ELEMENT,(j+1)*Q/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,Z.width,Z.height,1,ce,Ce,fe)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,Ce,Z.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,Z.width,Z.height,Z.depth,0,ce,Ce,Z.data);else if(y.isData3DTexture)L?(re&&t.texStorage3D(r.TEXTURE_3D,de,we,Z.width,Z.height,Z.depth),J&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,Ce,Z.data)):t.texImage3D(r.TEXTURE_3D,0,we,Z.width,Z.height,Z.depth,0,ce,Ce,Z.data);else if(y.isFramebufferTexture){if(re)if(L)t.texStorage2D(r.TEXTURE_2D,de,we,Z.width,Z.height);else{let Q=Z.width,j=Z.height;for(let fe=0;fe<de;fe++)t.texImage2D(r.TEXTURE_2D,fe,we,Q,j,0,ce,Ce,null),Q>>=1,j>>=1}}else if(Le.length>0){if(L&&re){const Q=Dt(Le[0]);t.texStorage2D(r.TEXTURE_2D,de,we,Q.width,Q.height)}for(let Q=0,j=Le.length;Q<j;Q++)ne=Le[Q],L?J&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,ce,Ce,ne):t.texImage2D(r.TEXTURE_2D,Q,we,ce,Ce,ne);y.generateMipmaps=!1}else if(L){if(re){const Q=Dt(Z);t.texStorage2D(r.TEXTURE_2D,de,we,Q.width,Q.height)}J&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce,Ce,Z)}else t.texImage2D(r.TEXTURE_2D,0,we,ce,Ce,Z);m(y)&&f(X),xe.__version=G.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function le(R,y,F){if(y.image.length!==6)return;const X=ot(R,y),$=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+F);const G=n.get($);if($.version!==G.__version||X===!0){t.activeTexture(r.TEXTURE0+F);const xe=Xe.getPrimaries(Xe.workingColorSpace),se=y.colorSpace===Li?null:Xe.getPrimaries(y.colorSpace),_e=y.colorSpace===Li||xe===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ye=y.isCompressedTexture||y.image[0].isCompressedTexture,Z=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let j=0;j<6;j++)!ye&&!Z?ce[j]=g(y.image[j],!0,i.maxCubemapSize):ce[j]=Z?y.image[j].image:y.image[j],ce[j]=Oe(y,ce[j]);const Ce=ce[0],we=s.convert(y.format,y.colorSpace),ne=s.convert(y.type),Le=M(y.internalFormat,we,ne,y.colorSpace),L=y.isVideoTexture!==!0,re=G.__version===void 0||X===!0,J=$.dataReady;let de=A(y,Ce);ze(r.TEXTURE_CUBE_MAP,y);let Q;if(ye){L&&re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Le,Ce.width,Ce.height);for(let j=0;j<6;j++){Q=ce[j].mipmaps;for(let fe=0;fe<Q.length;fe++){const Ne=Q[fe];y.format!==wn?we!==null?L?J&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Le,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,Ne.width,Ne.height,we,ne,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Le,Ne.width,Ne.height,0,we,ne,Ne.data)}}}else{if(Q=y.mipmaps,L&&re){Q.length>0&&de++;const j=Dt(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Le,j.width,j.height)}for(let j=0;j<6;j++)if(Z){L?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ce[j].width,ce[j].height,we,ne,ce[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Le,ce[j].width,ce[j].height,0,we,ne,ce[j].data);for(let fe=0;fe<Q.length;fe++){const ft=Q[fe].image[j].image;L?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,ft.width,ft.height,we,ne,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Le,ft.width,ft.height,0,we,ne,ft.data)}}else{L?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,ne,ce[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Le,we,ne,ce[j]);for(let fe=0;fe<Q.length;fe++){const Ne=Q[fe];L?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,we,ne,Ne.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Le,we,ne,Ne.image[j])}}}m(y)&&f(r.TEXTURE_CUBE_MAP),G.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Se(R,y,F,X,$,G){const xe=s.convert(F.format,F.colorSpace),se=s.convert(F.type),_e=M(F.internalFormat,xe,se,F.colorSpace),ye=n.get(y),Z=n.get(F);if(Z.__renderTarget=y,!ye.__hasExternalTextures){const ce=Math.max(1,y.width>>G),Ce=Math.max(1,y.height>>G);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,G,_e,ce,Ce,y.depth,0,xe,se,null):t.texImage2D($,G,_e,ce,Ce,0,xe,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),je(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,$,Z.__webglTexture,0,ge(y)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,$,Z.__webglTexture,G),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(R,y,F){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){const X=y.depthTexture,$=X&&X.isDepthTexture?X.type:null,G=x(y.stencilBuffer,$),xe=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=ge(y);je(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,G,y.width,y.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,G,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,G,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,R)}else{const X=y.textures;for(let $=0;$<X.length;$++){const G=X[$],xe=s.convert(G.format,G.colorSpace),se=s.convert(G.type),_e=M(G.internalFormat,xe,se,G.colorSpace),ye=ge(y);F&&je(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,_e,y.width,y.height):je(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,_e,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,_e,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);const $=X.__webglTexture,G=ge(y);if(y.depthTexture.format===Or)je(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(y.depthTexture.format===Br)je(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function xt(R){const y=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=X}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const X=R.texture.mipmaps;X&&X.length>0?Pe(y.__webglFramebuffer[0],R):Pe(y.__webglFramebuffer,R)}else if(F){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=r.createRenderbuffer(),Ze(y.__webglDepthbuffer[X],R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,G),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,G)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Ze(y.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,G),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,G)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function yt(R,y,F){const X=n.get(R);y!==void 0&&Se(X.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&xt(R)}function Je(R){const y=R.texture,F=n.get(R),X=n.get(y);R.addEventListener("dispose",w);const $=R.textures,G=R.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=y.version,o.memory.textures++),G){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let _e=0;_e<y.mipmaps.length;_e++)F.__webglFramebuffer[se][_e]=r.createFramebuffer()}else F.__webglFramebuffer[se]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)F.__webglFramebuffer[se]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(xe)for(let se=0,_e=$.length;se<_e;se++){const ye=n.get($[se]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&je(R)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const _e=$[se];F.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[se]);const ye=s.convert(_e.format,_e.colorSpace),Z=s.convert(_e.type),ce=M(_e.internalFormat,ye,Z,_e.colorSpace,R.isXRRenderTarget===!0),Ce=ge(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,ce,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,F.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Ze(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(G){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),ze(r.TEXTURE_CUBE_MAP,y);for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Se(F.__webglFramebuffer[se][_e],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e);else Se(F.__webglFramebuffer[se],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(y)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let se=0,_e=$.length;se<_e;se++){const ye=$[se],Z=n.get(ye);t.bindTexture(r.TEXTURE_2D,Z.__webglTexture),ze(r.TEXTURE_2D,ye),Se(F.__webglFramebuffer,R,ye,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),m(ye)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,X.__webglTexture),ze(se,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Se(F.__webglFramebuffer[_e],R,y,r.COLOR_ATTACHMENT0,se,_e);else Se(F.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,se,0);m(y)&&f(se),t.unbindTexture()}R.depthBuffer&&xt(R)}function I(R){const y=R.textures;for(let F=0,X=y.length;F<X;F++){const $=y[F];if(m($)){const G=v(R),xe=n.get($).__webglTexture;t.bindTexture(G,xe),f(G),t.unbindTexture()}}}const $t=[],Qe=[];function ut(R){if(R.samples>0){if(je(R)===!1){const y=R.textures,F=R.width,X=R.height;let $=r.COLOR_BUFFER_BIT;const G=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(R),se=y.length>1;if(se)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const _e=R.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);const Z=n.get(y[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Z,0)}r.blitFramebuffer(0,0,F,X,0,0,F,X,$,r.NEAREST),l===!0&&($t.length=0,Qe.length=0,$t.push(r.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&($t.push(G),Qe.push(G),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Qe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);const Z=n.get(y[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,Z,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function ge(R){return Math.min(i.maxSamples,R.samples)}function je(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function be(R){const y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Oe(R,y){const F=R.colorSpace,X=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Ht&&F!==Li&&(Xe.getTransfer(F)===nt?(X!==wn||$!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=yt,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=je}function vy(r,e){function t(n,i=Li){let s;const o=Xe.getTransfer(i);if(n===Dn)return r.UNSIGNED_BYTE;if(n===kc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Pd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Rd)return r.BYTE;if(n===Cd)return r.SHORT;if(n===Ur)return r.UNSIGNED_SHORT;if(n===Bc)return r.INT;if(n===os)return r.UNSIGNED_INT;if(n===kn)return r.FLOAT;if(n===xi)return r.HALF_FLOAT;if(n===Dd)return r.ALPHA;if(n===Id)return r.RGB;if(n===wn)return r.RGBA;if(n===Or)return r.DEPTH_COMPONENT;if(n===Br)return r.DEPTH_STENCIL;if(n===Vc)return r.RED;if(n===Hc)return r.RED_INTEGER;if(n===Ld)return r.RG;if(n===Gc)return r.RG_INTEGER;if(n===Wc)return r.RGBA_INTEGER;if(n===ko||n===zo||n===Vo||n===Ho)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===kl||n===zl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ol)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Hl||n===Gl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vl||n===Hl)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===jl||n===Kl||n===$l||n===Zl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$l)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===sc||n===rc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Go)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nd||n===oc||n===ac||n===lc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Go)return s.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class My{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Lt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gt({vertexShader:xy,fragmentShader:yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new nr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sy extends Si{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const g=new My,m=t.getContextAttributes();let f=null,v=null;const M=[],x=[],A=new me;let b=null;const w=new en;w.viewport=new $e;const P=new en;P.viewport=new $e;const T=[w,P],S=new w_;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=M[Y];return te===void 0&&(te=new $a,M[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=M[Y];return te===void 0&&(te=new $a,M[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=M[Y];return te===void 0&&(te=new $a,M[Y]=te),te.getHandSpace()};function O(Y){const te=x.indexOf(Y.inputSource);if(te===-1)return;const Me=M[te];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,c||o),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let Y=0;Y<M.length;Y++){const te=x[Y];te!==null&&(x[Y]=null,M[Y].disconnect(te))}D=null,z=null,g.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,v=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,le=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?Br:Or,le=m.stencil?Fr:os);const Ze={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ze),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Vn(d.textureWidth,d.textureHeight,{format:wn,type:Dn,depthTexture:new Qd(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Vn(p.framebufferWidth,p.framebufferHeight,{format:wn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Y){for(let te=0;te<Y.removed.length;te++){const Me=Y.removed[te],le=x.indexOf(Me);le>=0&&(x[le]=null,M[le].disconnect(Me))}for(let te=0;te<Y.added.length;te++){const Me=Y.added[te];let le=x.indexOf(Me);if(le===-1){for(let Ze=0;Ze<M.length;Ze++)if(Ze>=x.length){x.push(Me),le=Ze;break}else if(x[Ze]===null){x[Ze]=Me,le=Ze;break}if(le===-1)break}const Se=M[le];Se&&Se.connect(Me)}}const H=new C,K=new C;function V(Y,te,Me){H.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(Me.matrixWorld);const le=H.distanceTo(K),Se=te.projectionMatrix.elements,Ze=Me.projectionMatrix.elements,Pe=Se[14]/(Se[10]-1),xt=Se[14]/(Se[10]+1),yt=(Se[9]+1)/Se[5],Je=(Se[9]-1)/Se[5],I=(Se[8]-1)/Se[0],$t=(Ze[8]+1)/Ze[0],Qe=Pe*I,ut=Pe*$t,ge=le/(-I+$t),je=ge*-I;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(je),Y.translateZ(ge),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const be=Pe+ge,Oe=xt+ge,Dt=Qe-je,R=ut+(le-je),y=yt*xt/Oe*be,F=Je*xt/Oe*be;Y.projectionMatrix.makePerspective(Dt,R,y,F,be,Oe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ae(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let te=Y.near,Me=Y.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),S.near=P.near=w.near=te,S.far=P.far=w.far=Me,(D!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,z=S.far),w.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,S.layers.mask=w.layers.mask|P.layers.mask;const le=Y.parent,Se=S.cameras;ae(S,le);for(let Ze=0;Ze<Se.length;Ze++)ae(Se[Ze],le);Se.length===2?V(S,w,P):S.projectionMatrix.copy(w.projectionMatrix),ue(Y,S,le)};function ue(Y,te,Me){Me===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ws*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let Te=null;function ze(Y,te){if(h=te.getViewerPose(c||o),_=te,h!==null){const Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let le=!1;Me.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Pe=0;Pe<Me.length;Pe++){const xt=Me[Pe];let yt=null;if(p!==null)yt=p.getViewport(xt);else{const I=u.getViewSubImage(d,xt);yt=I.viewport,Pe===0&&(e.setRenderTargetTextures(v,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(v))}let Je=T[Pe];Je===void 0&&(Je=new en,Je.layers.enable(Pe),Je.viewport=new $e,T[Pe]=Je),Je.matrix.fromArray(xt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(xt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(yt.x,yt.y,yt.width,yt.height),Pe===0&&(S.matrix.copy(Je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Je)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Pe=u.getDepthInformation(Me[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,i.renderState)}}for(let Me=0;Me<M.length;Me++){const le=x[Me],Se=M[Me];le!==null&&Se!==void 0&&Se.update(le,te,c||o)}Te&&Te(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const ot=new af;ot.setAnimationLoop(ze),this.setAnimationLoop=function(Y){Te=Y},this.dispose=function(){}}}const $i=new Kn,Ty=new Ue;function Ey(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Xd(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,M,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===nn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===nn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,$i.copy(x),$i.x*=-1,$i.y*=-1,$i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(Ty.makeRotationFromEuler($i)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function by(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=i[v.id];x===void 0&&(_(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(v,A);const b=e.render.frame;s[v.id]!==b&&(d(v),s[v.id]=b)}function h(v){const M=u();v.__bindingPointIndex=M;const x=r.createBuffer(),A=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=i[v.id],x=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let b=0,w=x.length;b<w;b++){const P=Array.isArray(x[b])?x[b]:[x[b]];for(let T=0,S=P.length;T<S;T++){const D=P[T];if(p(D,b,T,A)===!0){const z=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let q=0;q<O.length;q++){const H=O[q],K=g(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,z+W,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,M,x,A){const b=v.value,w=M+"_"+x;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:A[w]=b.clone(),!0;{const P=A[w];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return A[w]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function _(v){const M=v.uniforms;let x=0;const A=16;for(let w=0,P=M.length;w<P;w++){const T=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,D=T.length;S<D;S++){const z=T[S],O=Array.isArray(z.value)?z.value:[z.value];for(let W=0,q=O.length;W<q;W++){const H=O[W],K=g(H),V=x%A,ae=V%K.boundary,ue=V+ae;x+=ae,ue!==0&&A-ue<K.storage&&(x+=A-ue),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=K.storage}}}const b=x%A;return b>0&&(x+=A-b),v.__size=x,v.__cache={},this}function g(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function f(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Ay{constructor(e={}){const{canvas:t=Mm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=_t;let b=0,w=0,P=null,T=-1,S=null;const D=new $e,z=new $e;let O=null;const W=new ve(0);let q=0,H=t.width,K=t.height,V=1,ae=null,ue=null;const Te=new $e(0,0,H,K),ze=new $e(0,0,H,K);let ot=!1;const Y=new $c;let te=!1,Me=!1;const le=new Ue,Se=new Ue,Ze=new C,Pe=new $e,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Je(){return P===null?V:1}let I=n;function $t(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",j,!1),I===null){const N="webgl2";if(I=$t(N,E),I===null)throw $t(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Qe,ut,ge,je,be,Oe,Dt,R,y,F,X,$,G,xe,se,_e,ye,Z,ce,Ce,we,ne,Le,L;function re(){Qe=new F0(I),Qe.init(),ne=new vy(I,Qe),ut=new C0(I,Qe,e,ne),ge=new _y(I,Qe),ut.reverseDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),je=new k0(I),be=new iy,Oe=new gy(I,Qe,ge,be,ut,ne,je),Dt=new D0(x),R=new U0(x),y=new X_(I),Le=new w0(I,y),F=new O0(I,y,je,Le),X=new V0(I,F,y,je),ce=new z0(I,ut,Oe),_e=new P0(be),$=new ny(x,Dt,R,Qe,ut,Le,_e),G=new Ey(x,be),xe=new ry,se=new uy(Qe),Z=new A0(x,Dt,R,ge,X,p,l),ye=new py(x,X,ut),L=new by(I,je,ut,ge),Ce=new R0(I,Qe,je),we=new B0(I,Qe,je),je.programs=$.programs,x.capabilities=ut,x.extensions=Qe,x.properties=be,x.renderLists=xe,x.shadowMap=ye,x.state=ge,x.info=je}re();const J=new Sy(x,I);this.xr=J,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(H,K,!1))},this.getSize=function(E){return E.set(H,K)},this.setSize=function(E,N,B=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,K=N,t.width=Math.floor(E*V),t.height=Math.floor(N*V),B===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(H*V,K*V).floor()},this.setDrawingBufferSize=function(E,N,B){H=E,K=N,V=B,t.width=Math.floor(E*B),t.height=Math.floor(N*B),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Te)},this.setViewport=function(E,N,B,k){E.isVector4?Te.set(E.x,E.y,E.z,E.w):Te.set(E,N,B,k),ge.viewport(D.copy(Te).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,N,B,k){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,N,B,k),ge.scissor(z.copy(ze).multiplyScalar(V).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){ge.setScissorTest(ot=E)},this.setOpaqueSort=function(E){ae=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor(...arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,B=!0){let k=0;if(E){let U=!1;if(P!==null){const ee=P.texture.format;U=ee===Wc||ee===Gc||ee===Hc}if(U){const ee=P.texture.type,oe=ee===Dn||ee===os||ee===Ur||ee===Fr||ee===kc||ee===zc,pe=Z.getClearColor(),he=Z.getClearAlpha(),De=pe.r,Ie=pe.g,Ee=pe.b;oe?(_[0]=De,_[1]=Ie,_[2]=Ee,_[3]=he,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=De,g[1]=Ie,g[2]=Ee,g[3]=he,I.clearBufferiv(I.COLOR,0,g))}else k|=I.COLOR_BUFFER_BIT}N&&(k|=I.DEPTH_BUFFER_BIT),B&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",j,!1),Z.dispose(),xe.dispose(),se.dispose(),be.dispose(),Dt.dispose(),R.dispose(),X.dispose(),Le.dispose(),L.dispose(),$.dispose(),J.dispose(),J.removeEventListener("sessionstart",Rh),J.removeEventListener("sessionend",Ch),Gi.stop()};function de(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=je.autoReset,N=ye.enabled,B=ye.autoUpdate,k=ye.needsUpdate,U=ye.type;re(),je.autoReset=E,ye.enabled=N,ye.autoUpdate=B,ye.needsUpdate=k,ye.type=U}function j(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function fe(E){const N=E.target;N.removeEventListener("dispose",fe),Ne(N)}function Ne(E){ft(E),be.remove(E)}function ft(E){const N=be.get(E).programs;N!==void 0&&(N.forEach(function(B){$.releaseProgram(B)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,B,k,U,ee){N===null&&(N=xt);const oe=U.isMesh&&U.matrixWorld.determinant()<0,pe=_p(E,N,B,k,U);ge.setMaterial(k,oe);let he=B.index,De=1;if(k.wireframe===!0){if(he=F.getWireframeAttribute(B),he===void 0)return;De=2}const Ie=B.drawRange,Ee=B.attributes.position;let Ge=Ie.start*De,st=(Ie.start+Ie.count)*De;ee!==null&&(Ge=Math.max(Ge,ee.start*De),st=Math.min(st,(ee.start+ee.count)*De)),he!==null?(Ge=Math.max(Ge,0),st=Math.min(st,he.count)):Ee!=null&&(Ge=Math.max(Ge,0),st=Math.min(st,Ee.count));const Tt=st-Ge;if(Tt<0||Tt===1/0)return;Le.setup(U,k,pe,B,he);let pt,at=Ce;if(he!==null&&(pt=y.get(he),at=we,at.setIndex(pt)),U.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*Je()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(U.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),ge.setLineWidth(Ae*Je()),U.isLineSegments?at.setMode(I.LINES):U.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else U.isPoints?at.setMode(I.POINTS):U.isSprite&&at.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))at.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ae=U._multiDrawStarts,Mt=U._multiDrawCounts,Ke=U._multiDrawCount,hn=he?y.get(he).bytesPerElement:1,cs=be.get(k).currentProgram.getUniforms();for(let un=0;un<Ke;un++)cs.setValue(I,"_gl_DrawID",un),at.render(Ae[un]/hn,Mt[un])}else if(U.isInstancedMesh)at.renderInstances(Ge,Tt,U.count);else if(B.isInstancedBufferGeometry){const Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Mt=Math.min(B.instanceCount,Ae);at.renderInstances(Ge,Tt,Mt)}else at.render(Ge,Tt)};function tt(E,N,B){E.transparent===!0&&E.side===bn&&E.forceSinglePass===!1?(E.side=nn,E.needsUpdate=!0,so(E,N,B),E.side=vi,E.needsUpdate=!0,so(E,N,B),E.side=bn):so(E,N,B)}this.compile=function(E,N,B=null){B===null&&(B=E),f=se.get(B),f.init(N),M.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),E!==B&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const k=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ee=U.material;if(ee)if(Array.isArray(ee))for(let oe=0;oe<ee.length;oe++){const pe=ee[oe];tt(pe,B,U),k.add(pe)}else tt(ee,B,U),k.add(ee)}),f=M.pop(),k},this.compileAsync=function(E,N,B=null){const k=this.compile(E,N,B);return new Promise(U=>{function ee(){if(k.forEach(function(oe){be.get(oe).currentProgram.isReady()&&k.delete(oe)}),k.size===0){U(E);return}setTimeout(ee,10)}Qe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let In=null;function ni(E){In&&In(E)}function Rh(){Gi.stop()}function Ch(){Gi.start()}const Gi=new af;Gi.setAnimationLoop(ni),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(E){In=E,J.setAnimationLoop(E),E===null?Gi.stop():Gi.start()},J.addEventListener("sessionstart",Rh),J.addEventListener("sessionend",Ch),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(N),N=J.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,P),f=se.get(E,M.length),f.init(N),M.push(f),Se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Se),Me=this.localClippingEnabled,te=_e.init(this.clippingPlanes,Me),m=xe.get(E,v.length),m.init(),v.push(m),J.enabled===!0&&J.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&wa(ee,N,-1/0,x.sortObjects)}wa(E,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,ue),yt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,yt&&Z.addToRenderList(m,E),this.info.render.frame++,te===!0&&_e.beginShadows();const B=f.state.shadowsArray;ye.render(B,E,N),te===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(f.setupLights(),N.isArrayCamera){const ee=N.cameras;if(U.length>0)for(let oe=0,pe=ee.length;oe<pe;oe++){const he=ee[oe];Dh(k,U,E,he)}yt&&Z.render(E);for(let oe=0,pe=ee.length;oe<pe;oe++){const he=ee[oe];Ph(m,E,he,he.viewport)}}else U.length>0&&Dh(k,U,E,N),yt&&Z.render(E),Ph(m,E,N);P!==null&&w===0&&(Oe.updateMultisampleRenderTarget(P),Oe.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,N),Le.resetDefaultState(),T=-1,S=null,M.pop(),M.length>0?(f=M[M.length-1],te===!0&&_e.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function wa(E,N,B,k){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){k&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);const oe=X.update(E),pe=E.material;pe.visible&&m.push(E,oe,pe,B,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const oe=X.update(E),pe=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Pe.copy(oe.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(pe)){const he=oe.groups;for(let De=0,Ie=he.length;De<Ie;De++){const Ee=he[De],Ge=pe[Ee.materialIndex];Ge&&Ge.visible&&m.push(E,oe,Ge,B,Pe.z,Ee)}}else pe.visible&&m.push(E,oe,pe,B,Pe.z,null)}}const ee=E.children;for(let oe=0,pe=ee.length;oe<pe;oe++)wa(ee[oe],N,B,k)}function Ph(E,N,B,k){const U=E.opaque,ee=E.transmissive,oe=E.transparent;f.setupLightsView(B),te===!0&&_e.setGlobalState(x.clippingPlanes,B),k&&ge.viewport(D.copy(k)),U.length>0&&io(U,N,B),ee.length>0&&io(ee,N,B),oe.length>0&&io(oe,N,B),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Dh(E,N,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Vn(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?xi:Dn,minFilter:di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ee=f.state.transmissionRenderTarget[k.id],oe=k.viewport||D;ee.setSize(oe.z*x.transmissionResolutionScale,oe.w*x.transmissionResolutionScale);const pe=x.getRenderTarget(),he=x.getActiveCubeFace(),De=x.getActiveMipmapLevel();x.setRenderTarget(ee),x.getClearColor(W),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),yt&&Z.render(B);const Ie=x.toneMapping;x.toneMapping=Fi;const Ee=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),te===!0&&_e.setGlobalState(x.clippingPlanes,k),io(E,B,k),Oe.updateMultisampleRenderTarget(ee),Oe.updateRenderTargetMipmap(ee),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let st=0,Tt=N.length;st<Tt;st++){const pt=N[st],at=pt.object,Ae=pt.geometry,Mt=pt.material,Ke=pt.group;if(Mt.side===bn&&at.layers.test(k.layers)){const hn=Mt.side;Mt.side=nn,Mt.needsUpdate=!0,Ih(at,B,k,Ae,Mt,Ke),Mt.side=hn,Mt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Oe.updateMultisampleRenderTarget(ee),Oe.updateRenderTargetMipmap(ee))}x.setRenderTarget(pe,he,De),x.setClearColor(W,q),Ee!==void 0&&(k.viewport=Ee),x.toneMapping=Ie}function io(E,N,B){const k=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ee=E.length;U<ee;U++){const oe=E[U],pe=oe.object,he=oe.geometry,De=oe.group;let Ie=oe.material;Ie.allowOverride===!0&&k!==null&&(Ie=k),pe.layers.test(B.layers)&&Ih(pe,N,B,he,Ie,De)}}function Ih(E,N,B,k,U,ee){E.onBeforeRender(x,N,B,k,U,ee),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(x,N,B,k,E,ee),U.transparent===!0&&U.side===bn&&U.forceSinglePass===!1?(U.side=nn,U.needsUpdate=!0,x.renderBufferDirect(B,N,k,U,E,ee),U.side=vi,U.needsUpdate=!0,x.renderBufferDirect(B,N,k,U,E,ee),U.side=bn):x.renderBufferDirect(B,N,k,U,E,ee),E.onAfterRender(x,N,B,k,U,ee)}function so(E,N,B){N.isScene!==!0&&(N=xt);const k=be.get(E),U=f.state.lights,ee=f.state.shadowsArray,oe=U.state.version,pe=$.getParameters(E,U.state,ee,N,B),he=$.getProgramCacheKey(pe);let De=k.programs;k.environment=E.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(E.isMeshStandardMaterial?R:Dt).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",fe),De=new Map,k.programs=De);let Ie=De.get(he);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===oe)return Nh(E,pe),Ie}else pe.uniforms=$.getUniforms(E),E.onBeforeCompile(pe,x),Ie=$.acquireProgram(pe,he),De.set(he,Ie),k.uniforms=pe.uniforms;const Ee=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=_e.uniform),Nh(E,pe),k.needsLights=vp(E),k.lightsStateVersion=oe,k.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Ie,k.uniformsList=null,Ie}function Lh(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Xo.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Nh(E,N){const B=be.get(E);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function _p(E,N,B,k,U){N.isScene!==!0&&(N=xt),Oe.resetTextureUnits();const ee=N.fog,oe=k.isMeshStandardMaterial?N.environment:null,pe=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ht,he=(k.isMeshStandardMaterial?R:Dt).get(k.envMap||oe),De=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!B.morphAttributes.position,Ge=!!B.morphAttributes.normal,st=!!B.morphAttributes.color;let Tt=Fi;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,at=pt!==void 0?pt.length:0,Ae=be.get(k),Mt=f.state.lights;if(te===!0&&(Me===!0||E!==S)){const Zt=E===S&&k.id===T;_e.setState(k,E,Zt)}let Ke=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Mt.state.version||Ae.outputColorSpace!==pe||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==he||k.fog===!0&&Ae.fog!==ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==_e.numPlanes||Ae.numIntersection!==_e.numIntersection)||Ae.vertexAlphas!==De||Ae.vertexTangents!==Ie||Ae.morphTargets!==Ee||Ae.morphNormals!==Ge||Ae.morphColors!==st||Ae.toneMapping!==Tt||Ae.morphTargetsCount!==at)&&(Ke=!0):(Ke=!0,Ae.__version=k.version);let hn=Ae.currentProgram;Ke===!0&&(hn=so(k,N,U));let cs=!1,un=!1,hr=!1;const mt=hn.getUniforms(),xn=Ae.uniforms;if(ge.useProgram(hn.program)&&(cs=!0,un=!0,hr=!0),k.id!==T&&(T=k.id,un=!0),cs||S!==E){ge.buffers.depth.getReversed()?(le.copy(E.projectionMatrix),Tm(le),Em(le),mt.setValue(I,"projectionMatrix",le)):mt.setValue(I,"projectionMatrix",E.projectionMatrix),mt.setValue(I,"viewMatrix",E.matrixWorldInverse);const rn=mt.map.cameraPosition;rn!==void 0&&rn.setValue(I,Ze.setFromMatrixPosition(E.matrixWorld)),ut.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&mt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,un=!0,hr=!0)}if(U.isSkinnedMesh){mt.setOptional(I,U,"bindMatrix"),mt.setOptional(I,U,"bindMatrixInverse");const Zt=U.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),mt.setValue(I,"boneTexture",Zt.boneTexture,Oe))}U.isBatchedMesh&&(mt.setOptional(I,U,"batchingTexture"),mt.setValue(I,"batchingTexture",U._matricesTexture,Oe),mt.setOptional(I,U,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",U._indirectTexture,Oe),mt.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",U._colorsTexture,Oe));const yn=B.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&ce.update(U,B,hn),(un||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,mt.setValue(I,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(xn.envMap.value=he,xn.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(xn.envMapIntensity.value=N.environmentIntensity),un&&(mt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&gp(xn,hr),ee&&k.fog===!0&&G.refreshFogUniforms(xn,ee),G.refreshMaterialUniforms(xn,k,V,K,f.state.transmissionRenderTarget[E.id]),Xo.upload(I,Lh(Ae),xn,Oe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Xo.upload(I,Lh(Ae),xn,Oe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&mt.setValue(I,"center",U.center),mt.setValue(I,"modelViewMatrix",U.modelViewMatrix),mt.setValue(I,"normalMatrix",U.normalMatrix),mt.setValue(I,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Zt=k.uniformsGroups;for(let rn=0,Ra=Zt.length;rn<Ra;rn++){const Wi=Zt[rn];L.update(Wi,hn),L.bind(Wi,hn)}}return hn}function gp(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function vp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,N,B){const k=be.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),be.get(E.texture).__webglTexture=N,be.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:B,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const B=be.get(E);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const xp=I.createFramebuffer();this.setRenderTarget=function(E,N=0,B=0){P=E,b=N,w=B;let k=!0,U=null,ee=!1,oe=!1;if(E){const he=be.get(E);if(he.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(he.__webglFramebuffer===void 0)Oe.setupRenderTarget(E);else if(he.__hasExternalTextures)Oe.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ee=E.depthTexture;if(he.__boundDepthTexture!==Ee){if(Ee!==null&&be.has(Ee)&&(E.width!==Ee.image.width||E.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(E)}}const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(oe=!0);const Ie=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?U=Ie[N][B]:U=Ie[N],ee=!0):E.samples>0&&Oe.useMultisampledRTT(E)===!1?U=be.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[B]:U=Ie,D.copy(E.viewport),z.copy(E.scissor),O=E.scissorTest}else D.copy(Te).multiplyScalar(V).floor(),z.copy(ze).multiplyScalar(V).floor(),O=ot;if(B!==0&&(U=xp),ge.bindFramebuffer(I.FRAMEBUFFER,U)&&k&&ge.drawBuffers(E,U),ge.viewport(D),ge.scissor(z),ge.setScissorTest(O),ee){const he=be.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,B)}else if(oe){const he=be.get(E.texture),De=N;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,he.__webglTexture,B,De)}else if(E!==null&&B!==0){const he=be.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,he.__webglTexture,B)}T=-1},this.readRenderTargetPixels=function(E,N,B,k,U,ee,oe,pe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he){ge.bindFramebuffer(I.FRAMEBUFFER,he);try{const De=E.textures[pe],Ie=De.format,Ee=De.type;if(!ut.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-k&&B>=0&&B<=E.height-U&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),I.readPixels(N,B,k,U,ne.convert(Ie),ne.convert(Ee),ee))}finally{const De=P!==null?be.get(P).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,N,B,k,U,ee,oe,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he)if(N>=0&&N<=E.width-k&&B>=0&&B<=E.height-U){ge.bindFramebuffer(I.FRAMEBUFFER,he);const De=E.textures[pe],Ie=De.format,Ee=De.type;if(!ut.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.bufferData(I.PIXEL_PACK_BUFFER,ee.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),I.readPixels(N,B,k,U,ne.convert(Ie),ne.convert(Ee),0);const st=P!==null?be.get(P).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,st);const Tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Sm(I,Tt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ee),I.deleteBuffer(Ge),I.deleteSync(Tt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,B=0){const k=Math.pow(2,-B),U=Math.floor(E.image.width*k),ee=Math.floor(E.image.height*k),oe=N!==null?N.x:0,pe=N!==null?N.y:0;Oe.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,oe,pe,U,ee),ge.unbindTexture()};const yp=I.createFramebuffer(),Mp=I.createFramebuffer();this.copyTextureToTexture=function(E,N,B=null,k=null,U=0,ee=null){ee===null&&(U!==0?(Ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=U,U=0):ee=0);let oe,pe,he,De,Ie,Ee,Ge,st,Tt;const pt=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(B!==null)oe=B.max.x-B.min.x,pe=B.max.y-B.min.y,he=B.isBox3?B.max.z-B.min.z:1,De=B.min.x,Ie=B.min.y,Ee=B.isBox3?B.min.z:0;else{const yn=Math.pow(2,-U);oe=Math.floor(pt.width*yn),pe=Math.floor(pt.height*yn),E.isDataArrayTexture?he=pt.depth:E.isData3DTexture?he=Math.floor(pt.depth*yn):he=1,De=0,Ie=0,Ee=0}k!==null?(Ge=k.x,st=k.y,Tt=k.z):(Ge=0,st=0,Tt=0);const at=ne.convert(N.format),Ae=ne.convert(N.type);let Mt;N.isData3DTexture?(Oe.setTexture3D(N,0),Mt=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Oe.setTexture2DArray(N,0),Mt=I.TEXTURE_2D_ARRAY):(Oe.setTexture2D(N,0),Mt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Ke=I.getParameter(I.UNPACK_ROW_LENGTH),hn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),cs=I.getParameter(I.UNPACK_SKIP_PIXELS),un=I.getParameter(I.UNPACK_SKIP_ROWS),hr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,De),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ee);const mt=E.isDataArrayTexture||E.isData3DTexture,xn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const yn=be.get(E),Zt=be.get(N),rn=be.get(yn.__renderTarget),Ra=be.get(Zt.__renderTarget);ge.bindFramebuffer(I.READ_FRAMEBUFFER,rn.__webglFramebuffer),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ra.__webglFramebuffer);for(let Wi=0;Wi<he;Wi++)mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(E).__webglTexture,U,Ee+Wi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(N).__webglTexture,ee,Tt+Wi)),I.blitFramebuffer(De,Ie,oe,pe,Ge,st,oe,pe,I.DEPTH_BUFFER_BIT,I.NEAREST);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(U!==0||E.isRenderTargetTexture||be.has(E)){const yn=be.get(E),Zt=be.get(N);ge.bindFramebuffer(I.READ_FRAMEBUFFER,yp),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,Mp);for(let rn=0;rn<he;rn++)mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yn.__webglTexture,U,Ee+rn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yn.__webglTexture,U),xn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.__webglTexture,ee,Tt+rn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zt.__webglTexture,ee),U!==0?I.blitFramebuffer(De,Ie,oe,pe,Ge,st,oe,pe,I.COLOR_BUFFER_BIT,I.NEAREST):xn?I.copyTexSubImage3D(Mt,ee,Ge,st,Tt+rn,De,Ie,oe,pe):I.copyTexSubImage2D(Mt,ee,Ge,st,De,Ie,oe,pe);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else xn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Mt,ee,Ge,st,Tt,oe,pe,he,at,Ae,pt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,ee,Ge,st,Tt,oe,pe,he,at,pt.data):I.texSubImage3D(Mt,ee,Ge,st,Tt,oe,pe,he,at,Ae,pt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ee,Ge,st,oe,pe,at,Ae,pt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ee,Ge,st,pt.width,pt.height,at,pt.data):I.texSubImage2D(I.TEXTURE_2D,ee,Ge,st,oe,pe,at,Ae,pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ke),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,hn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,cs),I.pixelStorei(I.UNPACK_SKIP_ROWS,un),I.pixelStorei(I.UNPACK_SKIP_IMAGES,hr),ee===0&&N.generateMipmaps&&I.generateMipmap(Mt),ge.unbindTexture()},this.copyTextureToTexture3D=function(E,N,B=null,k=null,U=0){return Ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,B,k,U)},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&Oe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Oe.setTextureCube(E,0):E.isData3DTexture?Oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Oe.setTexture2DArray(E,0):Oe.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){b=0,w=0,P=null,ge.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Ju={type:"change"},oh={type:"start"},df={type:"end"},Lo=new tr,Qu=new Ii,wy=Math.cos(70*kd.DEG2RAD),It=new C,on=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hl=1e-6;class Ry extends G_{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new _n,this._lastTargetPosition=new C,this._quat=new _n().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mc,this._sphericalDelta=new mc,this._scale=1,this._panOffset=new C,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new C,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Py.bind(this),this._onPointerDown=Cy.bind(this),this._onPointerUp=Dy.bind(this),this._onContextMenu=By.bind(this),this._onMouseWheel=Ny.bind(this),this._onKeyDown=Uy.bind(this),this._onTouchStart=Fy.bind(this),this._onTouchMove=Oy.bind(this),this._onMouseDown=Iy.bind(this),this._onMouseMove=Ly.bind(this),this._interceptControlDown=ky.bind(this),this._interceptControlUp=zy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ju),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),i<-Math.PI?i+=on:i>Math.PI&&(i-=on),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=It.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lo.origin.copy(this.object.position),Lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lo.direction))<wy?this.object.lookAt(this.target):(Qu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lo.intersectPlane(Qu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>hl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hl||this._lastTargetPosition.distanceToSquared(this.target)>hl?(this.dispatchEvent(Ju),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;It.copy(i).sub(this.target);let s=It.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Cy(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Py(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Dy(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(df),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Iy(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=rt.DOLLY;break;case Is.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rt.ROTATE}break;case Is.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(oh)}function Ly(r){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Ny(r){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(r.preventDefault(),this.dispatchEvent(oh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(df))}function Uy(r){this.enabled!==!1&&this._handleKeyDown(r)}function Fy(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=rt.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=rt.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(oh)}function Oy(r){switch(this._trackPointer(r),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=rt.NONE}}function By(r){this.enabled!==!1&&r.preventDefault()}function ky(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zy(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class or{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vy=new ma(-1,1,1,-1,0,1);class Hy extends sn{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}}const Gy=new Hy;class ah{constructor(e){this._mesh=new At(Gy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function ed(r,e){if(e===jp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===cc||e===Fd){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===cc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}const ul=new WeakMap;class Wy extends as{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new sa(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,_t,n).catch(n)}decodeDracoFile(e,t,n,i,s=Ht,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ul.has(e)){const l=ul.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),ul.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new sn;e.index&&t.setIndex(new Bt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new Bt(o,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==_t)return;const n=new ve;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),Xe.colorSpaceToWorking(n,_t),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new sa(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=Xy.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Xy(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const p=t(u,d,new Int8Array(l),c),_=p.attributes.map(g=>g.array.buffer);p.index&&_.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},_)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,p;const _=a.GetEncodedGeometryType(l);if(_===o.TRIANGULAR_MESH)d=new o.Mesh,p=a.DecodeArrayToMesh(l,l.byteLength,d);else if(_===o.POINT_CLOUD)d=new o.PointCloud,p=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const g={index:null,attributes:[]};for(const m in h){const f=self[u[m]];let v,M;if(c.useUniqueIDs)M=h[m],v=a.GetAttributeByUniqueId(d,M);else{if(M=a.GetAttributeId(d,o[h[m]]),M===-1)continue;v=a.GetAttribute(d,M)}const x=i(o,a,d,m,f,v);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),g.attributes.push(x)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,d)),o.destroy(d),g}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const p=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:p,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),_=l.num_points()*d,g=_*h.BYTES_PER_ELEMENT,m=s(o,h),f=o._malloc(g);a.GetAttributeDataArrayForAllPoints(l,u,m,g,f);const v=new h(o.HEAPF32.buffer,f,_).slice();return o._free(f),{name:c,array:v,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class qy extends as{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zy(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new uM(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=wr.extractUrlBase(e);o=wr.resolveURL(c,this.path)}else o=wr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new sa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ff){try{o[He.KHR_BINARY_GLTF]=new dM(e)}catch(u){i&&i(u);return}s=JSON.parse(o[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new bM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case He.KHR_MATERIALS_UNLIT:o[u]=new Ky;break;case He.KHR_DRACO_MESH_COMPRESSION:o[u]=new fM(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:o[u]=new pM;break;case He.KHR_MESH_QUANTIZATION:o[u]=new mM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Yy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jy{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ht);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new rf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new T_(h),c.distance=u;break;case"spot":c=new M_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Ky{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return pi}extendParams(e,t,n){const i=[];e.color=new ve(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ht),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,_t))}return Promise.all(i)}}class $y{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Zy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(a,a)}return Promise.all(s)}}class Jy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Qy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class eM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ht)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,_t)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class tM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class nM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(a[0],a[1],a[2],Ht),Promise.all(s)}}class iM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class sM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(a[0],a[1],a[2],Ht),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,_t)),Promise.all(s)}}class rM{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class oM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class aM{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class lM{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class cM{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class hM{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class uM{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Tn.TRIANGLES&&c.mode!==Tn.TRIANGLE_STRIP&&c.mode!==Tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const _ of u){const g=new Ue,m=new C,f=new _n,v=new C(1,1,1),M=new Qm(_.geometry,_.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,g.compose(m,f,v));for(const x in l)if(x==="_COLOR_0"){const A=l[x];M.instanceColor=new uc(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);vt.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const ff="glTF",xr=12,td={JSON:1313821514,BIN:5130562};class dM{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ff)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-xr,s=new DataView(e,xr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===td.JSON){const c=new Uint8Array(e,xr+o,a);this.content=n.decode(c)}else if(l===td.BIN){const c=xr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=gc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=gc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Fs[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const _ in p.attributes){const g=p.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}u(p)},a,c,Ht,d)})})}}class pM{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class mM{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class pf extends Qr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,_=e*c,g=_-c,m=-2*p+3*d,f=p-d,v=1-m,M=f-d+u;for(let x=0;x!==a;x++){const A=o[g+x+a],b=o[g+x+l]*h,w=o[_+x+a],P=o[_+x]*h;s[x]=v*A+M*b+m*w+f*P}return s}}const _M=new _n;class gM extends pf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return _M.fromArray(s).normalize().toArray(s),s}}const Tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nd={9728:Ot,9729:pn,9984:wd,9985:Bo,9986:Mr,9987:di},id={33071:Ni,33648:Jo,10497:ki},dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vM={CUBICSPLINE:void 0,LINEAR:zr,STEP:kr},fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new th({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vi})),r.DefaultMaterial}function Zi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yM(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function MM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function SM(r){let e;const t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pl(t.attributes):e=r.indices+":"+pl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+pl(r.targets[n]);return e}function pl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function vc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const EM=new Ue;class bM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new sf(this.options.manager):this.textureLoader=new A_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Zi(s,a,i),hi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(wr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=dl[i.type],a=Fs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Bt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=dl[i.type],c=Fs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(p&&p!==u){const f=Math.floor(d/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let M=t.cache.get(v);M||(g=new c(a,f*p,i.count*p/h),M=new jd(g,p/h),t.cache.add(v,M)),m=new Hr(M,l,d%p/h,_)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),m=new Bt(g,l,_);if(i.sparse!==void 0){const f=dl.SCALAR,v=Fs[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new v(o[1],M,i.sparse.count*f),b=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,P=A.length;w<P;w++){const T=A[w];if(m.setX(T,b[w*l]),l>=2&&m.setY(T,b[w*l+1]),l>=3&&m.setZ(T,b[w*l+2]),l>=4&&m.setW(T,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=nd[d.magFilter]||pn,h.minFilter=nd[d.minFilter]||di,h.wrapS=id[d.wrapS]||ki,h.wrapT=id[d.wrapT]||ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ot&&h.minFilter!==pn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Lt(g);m.needsUpdate=!0,d(m)}),t.load(wr.resolveURL(u,s.path),_,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),hi(u,o),u.userData.mimeType=o.mimeType||TM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Jd,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Zd,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return th}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){const u=i[He.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ht),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,_t)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=bn);const h=s.alphaMode||fl.OPAQUE;if(h===fl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===fl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==pi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new me(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==pi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==pi){const u=s.emissiveFactor;a.emissive=new ve().setRGB(u[0],u[1],u[2],Ht)}return s.emissiveTexture!==void 0&&o!==pi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,_t)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),hi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Zi(i,u,s),u})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return sd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=SM(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=sd(new sn,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?xM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,_=h.length;p<_;p++){const g=h[p],m=o[p];let f;const v=c[p];if(m.mode===Tn.TRIANGLES||m.mode===Tn.TRIANGLE_STRIP||m.mode===Tn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new $m(g,v):new At(g,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Tn.TRIANGLE_STRIP?f.geometry=ed(f.geometry,Fd):m.mode===Tn.TRIANGLE_FAN&&(f.geometry=ed(f.geometry,cc));else if(m.mode===Tn.LINES)f=new i_(g,v);else if(m.mode===Tn.LINE_STRIP)f=new Zc(g,v);else if(m.mode===Tn.LINE_LOOP)f=new s_(g,v);else if(m.mode===Tn.POINTS)f=new r_(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&MM(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),hi(f,s),m.extensions&&Zi(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,_=u.length;p<_;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&Zi(i,u[0],s),u[0];const d=new ts;s.extensions&&Zi(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,_=u.length;p<_;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(kd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ma(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ue;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Kc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],_=i.samplers[p.sampler],g=p.target,m=g.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,v=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",v)),c.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],_=u[2],g=u[3],m=u[4],f=[];for(let v=0,M=d.length;v<M;v++){const x=d[v],A=p[v],b=_[v],w=g[v],P=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=n._createAnimationTracks(x,A,b,w,P);if(T)for(let S=0;S<T.length;S++)f.push(T[S])}return new fc(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,EM)});for(let p=0,_=u.length;p<_;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Kd:c.length>1?h=new ts:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),hi(h,s),s.extensions&&Zi(n,h,s),s.matrix!==void 0){const u=new Ue;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ts;n.name&&(s.name=i.createUniqueName(n.name)),hi(s,n),n.extensions&&Zi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof Yn||d instanceof Lt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Di[s.path]===Di.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Di[s.path]){case Di.weights:c=qs;break;case Di.rotation:c=Ys;break;case Di.translation:case Di.scale:c=js;break;default:switch(n.itemSize){case 1:c=qs;break;case 2:case 3:default:c=js;break}break}const h=i.interpolation!==void 0?vM[i.interpolation]:zr,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const _=new c(l[d]+"."+Di[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ys?gM:pf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function AM(r,e,t){const n=e.attributes,i=new Ti;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const h=vc(Fs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new C,l=new C;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const g=vc(Fs[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Jn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function sd(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=gc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Xe.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),hi(r,e),AM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yM(r,e.targets,t):r})}class Gr extends At{constructor(){super(Gr.Geometry,new pi({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new C,t=new C,n=new xu(16,16),i=new xu(16,16);let s=Dn;const o=Gr.Geometry,a=new Wo({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new Wo({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new At(o,a),h=[],u=lh.Shader,d=new Wo({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new ve(16777215)},scale:{value:new me},screenPosition:{value:new C}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:$o,transparent:!0,depthWrite:!1}),p=new At(o,d);this.addElement=function(v){h.push(v)};const _=new me,g=new me,m=new H_,f=new $e;this.onBeforeRender=function(v,M,x){v.getCurrentViewport(f);const A=v.getRenderTarget(),b=A!==null?A.texture.type:Dn;s!==b&&(n.dispose(),i.dispose(),n.type=i.type=b,s=b);const w=f.w/f.z,P=f.z/2,T=f.w/2;let S=16/f.w;if(_.set(S*w,S),m.min.set(f.x,f.y),m.max.set(f.x+(f.z-16),f.y+(f.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(x.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(x.projectionMatrix),g.x=f.x+e.x*P+P-8,g.y=f.y+e.y*T+T-8,m.containsPoint(g))){v.copyFramebufferToTexture(n,g);let D=a.uniforms;D.scale.value=_,D.screenPosition.value=e,v.renderBufferDirect(x,null,o,a,c,null),v.copyFramebufferToTexture(i,g),D=l.uniforms,D.scale.value=_,D.screenPosition.value=e,v.renderBufferDirect(x,null,o,l,c,null);const z=-e.x*2,O=-e.y*2;for(let W=0,q=h.length;W<q;W++){const H=h[W],K=d.uniforms;K.color.value.copy(H.color),K.map.value=H.texture,K.screenPosition.value.x=e.x+z*H.distance,K.screenPosition.value.y=e.y+O*H.distance,S=H.size/f.w;const V=f.w/f.z;K.scale.value.set(S*V,S),d.uniformsNeedUpdate=!0,v.renderBufferDirect(x,null,o,d,p,null)}}},this.dispose=function(){a.dispose(),l.dispose(),d.dispose(),n.dispose(),i.dispose();for(let v=0,M=h.length;v<M;v++)h[v].texture.dispose()}}}class lh{constructor(e,t=1,n=0,i=new ve(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}lh.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};Gr.Geometry=function(){const r=new sn,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new jd(e,5);return r.setIndex([0,1,2,0,2,3]),r.setAttribute("position",new Hr(t,3,0,!1)),r.setAttribute("uv",new Hr(t,2,3,!1)),r}();const qo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class mf extends or{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pa.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ah(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class rd extends or{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class wM extends or{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class RM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new me);this._width=n.width,this._height=n.height,t=new Vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mf(qo),this.copyPass.material.blending=_i,this.clock=new of}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}rd!==void 0&&(o instanceof rd?n=!0:o instanceof wM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const No={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class CM extends or{constructor(){super(),this.uniforms=pa.clone(No.uniforms),this.material=new Wo({name:No.name,uniforms:this.uniforms,vertexShader:No.vertexShader,fragmentShader:No.fragmentShader}),this._fsQuad=new ah(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Xe.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Md?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ed?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Td&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class PM extends or{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}class DM extends or{constructor(e,t,n=0,i=0){super(),this.scene=e,this.camera=t,this.sampleLevel=4,this.unbiased=!0,this.stencilBuffer=!1,this.clearColor=n,this.clearAlpha=i,this._sampleRenderTarget=null,this._oldClearColor=new ve,this._copyUniforms=pa.clone(qo.uniforms),this._copyMaterial=new Gt({uniforms:this._copyUniforms,vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:$o}),this._fsQuad=new ah(this._copyMaterial)}dispose(){this._sampleRenderTarget&&(this._sampleRenderTarget.dispose(),this._sampleRenderTarget=null),this._copyMaterial.dispose(),this._fsQuad.dispose()}setSize(e,t){this._sampleRenderTarget&&this._sampleRenderTarget.setSize(e,t)}render(e,t,n){this._sampleRenderTarget||(this._sampleRenderTarget=new Vn(n.width,n.height,{type:xi,stencilBuffer:this.stencilBuffer}),this._sampleRenderTarget.texture.name="SSAARenderPass.sample");const i=IM[Math.max(0,Math.min(this.sampleLevel,5))],s=e.autoClear;e.autoClear=!1,e.getClearColor(this._oldClearColor);const o=e.getClearAlpha(),a=1/i.length,l=1/32;this._copyUniforms.tDiffuse.value=this._sampleRenderTarget.texture;const c={fullWidth:n.width,fullHeight:n.height,offsetX:0,offsetY:0,width:n.width,height:n.height},h=Object.assign({},this.camera.view);h.enabled&&Object.assign(c,h);for(let u=0;u<i.length;u++){const d=i[u];this.camera.setViewOffset&&this.camera.setViewOffset(c.fullWidth,c.fullHeight,c.offsetX+d[0]*.0625,c.offsetY+d[1]*.0625,c.width,c.height);let p=a;if(this.unbiased){const _=-.5+(u+.5)/i.length;p+=l*_}this._copyUniforms.opacity.value=p,e.setClearColor(this.clearColor,this.clearAlpha),e.setRenderTarget(this._sampleRenderTarget),e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(this.renderToScreen?null:t),u===0&&(e.setClearColor(0,0),e.clear()),this._fsQuad.render(e)}this.camera.setViewOffset&&h.enabled?this.camera.setViewOffset(h.fullWidth,h.fullHeight,h.offsetX,h.offsetY,h.width,h.height):this.camera.clearViewOffset&&this.camera.clearViewOffset(),e.autoClear=s,e.setClearColor(this._oldClearColor,o)}}const IM=[[[0,0]],[[4,4],[-4,-4]],[[-2,-6],[6,-2],[-6,2],[2,6]],[[1,-3],[-1,3],[5,1],[-3,-5],[-5,5],[-7,-1],[3,7],[7,-7]],[[1,1],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]],[[-4,-7],[-7,-5],[-3,-5],[-5,-4],[-1,-4],[-2,-2],[-6,-1],[-4,0],[-7,1],[-1,2],[-6,3],[-3,3],[-7,6],[-3,6],[-5,7],[-1,7],[5,-7],[1,-6],[6,-5],[4,-4],[2,-3],[7,-2],[1,-1],[4,-1],[2,1],[6,2],[0,4],[4,4],[2,5],[7,5],[5,6],[3,7]]];class LM extends DM{constructor(e,t,n,i){super(e,t,n,i),this.sampleLevel=0,this.accumulate=!1,this.accumulateIndex=-1,this._sampleRenderTarget=null,this._holdRenderTarget=null}render(e,t,n,i){if(this.accumulate===!1){super.render(e,t,n,i),this.accumulateIndex=-1;return}const s=NM[5];this._sampleRenderTarget===null&&(this._sampleRenderTarget=new Vn(n.width,n.height,{type:xi}),this._sampleRenderTarget.texture.name="TAARenderPass.sample"),this._holdRenderTarget===null&&(this._holdRenderTarget=new Vn(n.width,n.height,{type:xi}),this._holdRenderTarget.texture.name="TAARenderPass.hold"),this.accumulateIndex===-1&&(super.render(e,this._holdRenderTarget,n,i),this.accumulateIndex=0);const o=e.autoClear;e.autoClear=!1,e.getClearColor(this._oldClearColor);const a=e.getClearAlpha(),l=1/s.length;if(this.accumulateIndex>=0&&this.accumulateIndex<s.length){this._copyUniforms.opacity.value=l,this._copyUniforms.tDiffuse.value=t.texture;const h=Math.pow(2,this.sampleLevel);for(let u=0;u<h;u++){const d=this.accumulateIndex,p=s[d];if(this.camera.setViewOffset&&this.camera.setViewOffset(n.width,n.height,p[0]*.0625,p[1]*.0625,n.width,n.height),e.setRenderTarget(t),e.setClearColor(this.clearColor,this.clearAlpha),e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(this._sampleRenderTarget),this.accumulateIndex===0&&(e.setClearColor(0,0),e.clear()),this._fsQuad.render(e),this.accumulateIndex++,this.accumulateIndex>=s.length)break}this.camera.clearViewOffset&&this.camera.clearViewOffset()}e.setClearColor(this.clearColor,this.clearAlpha);const c=this.accumulateIndex*l;c>0&&(this._copyUniforms.opacity.value=1,this._copyUniforms.tDiffuse.value=this._sampleRenderTarget.texture,e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),c<1&&(this._copyUniforms.opacity.value=1-c,this._copyUniforms.tDiffuse.value=this._holdRenderTarget.texture,e.setRenderTarget(t),this._fsQuad.render(e)),e.autoClear=o,e.setClearColor(this._oldClearColor,a)}dispose(){super.dispose(),this._holdRenderTarget&&this._holdRenderTarget.dispose()}}const NM=[[[0,0]],[[4,4],[-4,-4]],[[-2,-6],[6,-2],[-6,2],[2,6]],[[1,-3],[-1,3],[5,1],[-3,-5],[-5,5],[-7,-1],[3,7],[7,-7]],[[1,1],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]],[[-4,-7],[-7,-5],[-3,-5],[-5,-4],[-1,-4],[-2,-2],[-6,-1],[-4,0],[-7,1],[-1,2],[-6,3],[-3,3],[-7,6],[-3,6],[-5,7],[-1,7],[5,-7],[1,-6],[6,-5],[4,-4],[2,-3],[7,-2],[1,-1],[4,-1],[2,1],[6,2],[0,4],[4,4],[2,5],[7,5],[5,6],[3,7]]];/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class jn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),jn.nextNameID=jn.nextNameID||0,this.$name.id=`lil-gui-name-${++jn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class UM extends jn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function xc(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const FM={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:xc,toHexString:xc},Wr={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},OM={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=Wr.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Wr.toHexString(i)}},BM={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Wr.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Wr.toHexString(i)}},kM=[FM,Wr,OM,BM];function zM(r){return kM.find(e=>e.match(r))}class VM extends jn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=zM(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=xc(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ml extends jn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class HM extends jn{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,l,c,h,u;const d=5,p=v=>{a=v.clientX,l=c=v.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=v=>{if(o){const M=v.clientX-a,x=v.clientY-l;Math.abs(x)>d?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>d&&g()}if(!o){const M=v.clientY-c;u-=M*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,v,M,x,A)=>(f-v)/(M-v)*(A-x)+x,t=f=>{const v=this.$slider.getBoundingClientRect();let M=e(f,v.left,v.right,this._min,this._max);this._snapClampSetValue(M)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=f=>{t(f.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),o=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=f=>{if(o){const v=f.touches[0].clientX-a,M=f.touches[0].clientY-l;Math.abs(v)>Math.abs(M)?c(f):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),_=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const M=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class GM extends jn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class WM extends jn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var XM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function qM(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let od=!1;class ch{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!od&&a&&(qM(XM),od=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new GM(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new HM(this,e,t,n,i,s);case"boolean":return new UM(this,e,t);case"string":return new WM(this,e,t);case"function":return new ml(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new VM(this,e,t,n)}addFolder(e){const t=new ch({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ml||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ml)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function ui(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function _f(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ks={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$s={duration:.5,overwrite:!1,delay:0},hh,zt,gt,Rn=1e8,ht=1/Rn,yc=Math.PI*2,YM=yc/4,jM=0,gf=Math.sqrt,KM=Math.cos,$M=Math.sin,Kt=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},yi=function(e){return typeof e=="number"},vf=function(e){return typeof e>"u"},$n=function(e){return typeof e=="object"},ln=function(e){return e!==!1},uh=function(){return typeof window<"u"},Uo=function(e){return wt(e)||Kt(e)},xf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jt=Array.isArray,Mc=/(?:-?\.?\d|\.)+/gi,ZM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,yf=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_l=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,JM=/[+-]=-?[.\d]+/,Mf=/[^,'"\[\]\s]+/gi,QM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,St,Wn,Sc,dh,gn={},ra={},Sf,Tf=function(e){return(ra=Zs(e,gn))&&Ve},Ef=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xr=function(e,t){return!t&&console.warn(e)},bf=function(e,t){return e&&(gn[e]=t)&&ra&&(ra[e]=t)||gn},qr=function(){return 0},eS={suppressEvents:!0,isStart:!0,kill:!1},Yo={suppressEvents:!0,kill:!1},tS={suppressEvents:!0},fh={},Oi=[],Tc={},Af,En={},gl={},ad=30,jo=[],ph="",mh=function(e){var t=e[0],n,i;if($n(t)||wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=jo.length;i--&&!jo[i].targetTest(t););n=jo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new RS(e[i],n)))||e.splice(i,1);return e},Rr=function(e){return e._gsap||mh(Cn(e))[0]._gsap},nS=function(e,t,n){return(n=e[t])&&wt(n)?e[t]():vf(n)&&e.getAttribute&&e.getAttribute(t)||n},Ei=function(e,t){return(e=e.split(",")).forEach(t)||e},iS=function(e){return Math.round(e*1e5)/1e5||0},Pt=function(e){return Math.round(e*1e7)/1e7||0},wf=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},sS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},oa=function(){var e=Oi.length,t=Oi.slice(0),n,i;for(Tc={},Oi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},_h=function(e){return!!(e._initted||e._startAt||e.add)},Rf=function(e,t,n,i){Oi.length&&!zt&&oa(),e.render(t,n,!!(zt&&t<0&&_h(e))),Oi.length&&!zt&&oa()},Cf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Mf).length<2?t:Kt(e)?e.trim():e},Pf=function(e){return e},vn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},rS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Zs=function(e,t){for(var n in t)e[n]=t[n];return e},ld=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$n(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},aa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Cr=function(e){var t=e.parent||St,n=e.keyframes?rS(jt(e.keyframes)):vn;if(ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},oS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Df=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ga=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},zi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ns=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},aS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ec=function(e,t,n,i){return e._startAt&&(zt?e._startAt.revert(Yo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},lS=function r(e){return!e||e._ts&&r(e.parent)},cd=function(e){return e._repeat?Js(e._tTime,e=e.duration()+e._rDelay)*e:0},Js=function(e,t){var n=Math.floor(e=Pt(e/t));return e&&n===e?n-1:n},la=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},va=function(e){return e._end=Pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},xa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),va(e),n._dirty||ns(n,e)),e},If=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=la(e.rawTime(),t),(!t._dur||to(0,t.totalDuration(),n)-t._tTime>ht)&&t.render(n,!0)),ns(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ht}},qn=function(e,t,n,i){return t.parent&&zi(t),t._start=Pt((yi(n)?n:n||e!==St?Sn(e,n,t):e._time)+t._delay),t._end=Pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Df(e,t,"_first","_last",e._sort?"_start":0),bc(t)||(e._recent=t),i||If(e,t),e._ts<0&&xa(e,e._tTime),e},Lf=function(e,t){return(gn.ScrollTrigger||Ef("scrollTrigger",t))&&gn.ScrollTrigger.create(t,e)},Nf=function(e,t,n,i,s){if(xh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Af!==Bn.frame)return Oi.push(e),e._lazy=[s,i],1},cS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},bc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hS=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&cS(e)&&!(!e._initted&&bc(e))||(e._ts<0||e._dp._ts<0)&&!bc(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=to(0,e._tDur,t),h=Js(l,a),e._yoyo&&h&1&&(o=1-o),h!==Js(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||zt||i||e._zTime===ht||!t&&e._zTime){if(!e._initted&&Nf(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ht:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ec(e,t,n,!0),e._onUpdate&&!n&&mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zi(e,1),!n&&!zt&&(mn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},uS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Qs=function(e,t,n,i){var s=e._repeat,o=Pt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Pt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&xa(e,e._tTime=e._tDur*a),e.parent&&va(e),n||ns(e.parent,e),e},hd=function(e){return e instanceof tn?ns(e):Qs(e,e._dur)},dS={_start:0,endTime:qr,totalDuration:qr},Sn=function r(e,t,n){var i=e.labels,s=e._recent||dS,o=e.duration()>=Rn?s.endTime(!1):e._dur,a,l,c;return Kt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(jt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Pr=function(e,t,n){var i=yi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ln(l.vars.inherit)&&l.parent;o.immediateRender=ln(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ct(t[0],o,t[s+1])},Hi=function(e,t){return e||e===0?t(e):t},to=function(e,t,n){return n<e?e:n>t?t:n},Vi=function(e,t){return!Kt(e)||!(t=QM.exec(e))?"":t[1]},fS=function(e,t,n){return Hi(n,function(i){return to(e,t,i)})},Ac=[].slice,Uf=function(e,t){return e&&$n(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$n(e[0]))&&!e.nodeType&&e!==Wn},pS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Kt(i)&&!t||Uf(i,1)?(s=n).push.apply(s,Cn(i)):n.push(i)})||n},Cn=function(e,t,n){return gt&&!t&&gt.selector?gt.selector(e):Kt(e)&&!n&&(Sc||!er())?Ac.call((t||dh).querySelectorAll(e),0):jt(e)?pS(e,n):Uf(e)?Ac.call(e,0):e?[e]:[]},wc=function(e){return e=Cn(e)[0]||Xr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Cn(t,n.querySelectorAll?n:n===e?Xr("Invalid scope")||dh.createElement("div"):e)}},Ff=function(e){return e.sort(function(){return .5-Math.random()})},Of=function(e){if(wt(e))return e;var t=$n(e)?e:{each:e},n=is(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return Kt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,p,_){var g=(_||t).length,m=o[g],f,v,M,x,A,b,w,P,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,Rn])[1],!T){for(w=-Rn;w<(w=_[T++].getBoundingClientRect().left)&&T<g;);T<g&&T--}for(m=o[g]=[],f=l?Math.min(T,g)*h-.5:i%T,v=T===Rn?0:l?g*u/T-.5:i/T|0,w=0,P=Rn,b=0;b<g;b++)M=b%T-f,x=v-(b/T|0),m[b]=A=c?Math.abs(c==="y"?x:M):gf(M*M+x*x),A>w&&(w=A),A<P&&(P=A);i==="random"&&Ff(m),m.max=w-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(T>g?g-1:c?c==="y"?g/T:T:Math.max(T,g/T))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Vi(t.amount||t.each)||0,n=n&&g<0?qf(n):n}return g=(m[d]-m.min)/m.max||0,Pt(m.b+(n?n(g):g)*m.v)+m.u}},Rc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Pt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(yi(n)?0:Vi(n))}},Bf=function(e,t){var n=jt(e),i,s;return!n&&$n(e)&&(i=n=e.radius||Rn,e.values?(e=Cn(e.values),(s=!yi(e[0]))&&(i*=i)):e=Rc(e.increment)),Hi(t,n?wt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Rn,h=0,u=e.length,d,p;u--;)s?(d=e[u].x-a,p=e[u].y-l,d=d*d+p*p):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:o,s||h===o||yi(o)?h:h+Vi(o)}:Rc(e))},kf=function(e,t,n,i){return Hi(jt(e)?!t:n===!0?!!(n=0):!i,function(){return jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},mS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},_S=function(e,t){return function(n){return e(parseFloat(n))+(t||Vi(n))}},gS=function(e,t,n){return Vf(e,t,0,1,n)},zf=function(e,t,n){return Hi(n,function(i){return e[~~t(i)]})},vS=function r(e,t,n){var i=t-e;return jt(e)?zf(e,r(0,e.length),t):Hi(n,function(s){return(i+(s-e)%i)%i+e})},xS=function r(e,t,n){var i=t-e,s=i*2;return jt(e)?zf(e,r(0,e.length-1),t):Hi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},gh=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Mf:Mc),n+=e.substr(t,i-t)+kf(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Vf=function(e,t,n,i,s){var o=t-e,a=i-n;return Hi(s,function(l){return n+((l-e)/o*a||0)})},yS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Kt(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(jt(e)&&!jt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=t}else i||(e=Zs(jt(e)?[]:{},e));if(!h){for(l in t)vh.call(a,e,l,"get",t[l]);s=function(_){return Mh(_,a)||(o?e.p:e)}}}return Hi(n,s)},ud=function(e,t,n){var i=e.labels,s=Rn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},mn=function(e,t,n){var i=e.vars,s=i[t],o=gt,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Oi.length&&oa(),a&&(gt=a),h=l?s.apply(c,l):s.call(c),gt=o,h},Tr=function(e){return zi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zt),e.progress()<1&&mn(e,"onInterrupt"),e},Ds,Hf=[],Gf=function(e){if(e)if(e=!e.name&&e.default||e,uh()||e.headless){var t=e.name,n=wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:qr,render:Mh,add:vh,kill:zS,modifier:kS,rawVars:0},o={targetTest:0,get:0,getSetter:Jf,aliases:{},register:0};if(er(),e!==i){if(En[t])return;vn(i,vn(aa(e,s),o)),Zs(i.prototype,Zs(s,aa(e,o))),En[i.prop=t]=i,e.targetTest&&(jo.push(i),fh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}bf(t,i),e.register&&e.register(Ve,i,ar)}else Hf.push(e)},lt=255,Er={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},vl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},Wf=function(e,t,n){var i=e?yi(e)?[e>>16,e>>8&lt,e&lt]:0:Er.black,s,o,a,l,c,h,u,d,p,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Er[e])i=Er[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Mc),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=vl(l+1/3,s,o),i[1]=vl(l,s,o),i[2]=vl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(ZM),n&&i.length<4&&(i[3]=1),i}else i=e.match(Mc)||Er.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/lt,o=i[1]/lt,a=i[2]/lt,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===s?(o-a)/p+(o<a?6:0):u===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Xf=function(e){var t=[],n=[],i=-1;return e.split(Os).forEach(function(s){var o=s.match(yf)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},dd=function(e,t,n){var i="",s=(e+i).match(Os),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Wf(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Xf(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Os,"1").split(yf),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Os),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},Os=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Er)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),MS=/hsl[a]?\(/,SS=function(e){var t=e.join(" "),n;if(Os.lastIndex=0,Os.test(t))return n=MS.test(t),e[1]=dd(e[1],n),e[0]=dd(e[0],n,Xf(e[1])),!0},Yr,Bn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,p,_=function g(m){var f=r()-i,v=m===!0,M,x,A,b;if((f>e||f<0)&&(n+=f-t),i+=f,A=i-n,M=A-o,(M>0||v)&&(b=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,o+=M+(M>=s?4:s-M),x=1),v||(l=c(g)),x)for(p=0;p<a.length;p++)a[p](A,d,b,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Sf&&(!Sc&&uh()&&(Wn=Sc=window,dh=Wn.document||{},gn.gsap=Ve,(Wn.gsapVersions||(Wn.gsapVersions=[])).push(Ve.version),Tf(ra||Wn.GreenSockGlobals||!Wn.gsap&&Wn||{}),Hf.forEach(Gf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Yr=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Yr=0,c=qr},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,f,v){var M=f?function(x,A,b,w){m(x,A,b,w),u.remove(M)}:m;return u.remove(m),a[v?"unshift":"push"](M),er(),M},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},u}(),er=function(){return!Yr&&Bn.wake()},qe={},TS=/^[\d.\-M][\d.\-,\s]/,ES=/["']/g,bS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(ES,"").trim():+c,i=l.substr(a+1).trim();return t},AS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},wS=function(e){var t=(e+"").split("("),n=qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[bS(t[1])]:AS(e).split(",").map(Cf)):qe._CE&&TS.test(e)?qe._CE("",e):n},qf=function(e){return function(t){return 1-e(1-t)}},Yf=function r(e,t){for(var n=e._first,i;n;)n instanceof tn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},is=function(e,t){return e&&(wt(e)?e:qe[e]||wS(e))||t},ls=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Ei(e,function(a){qe[a]=gn[a]=s,qe[o=a.toLowerCase()]=n;for(var l in s)qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=s[l]}),s},jf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/yc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*$M((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:jf(a);return s=yc/s,l.config=function(c,h){return r(e,c,h)},l},yl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:jf(n);return i.config=function(s){return r(e,s)},i};Ei("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ls(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;ls("Elastic",xl("in"),xl("out"),xl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ls("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ls("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ls("Circ",function(r){return-(gf(1-r*r)-1)});ls("Sine",function(r){return r===1?1:-KM(r*YM)+1});ls("Back",yl("in"),yl("out"),yl());qe.SteppedEase=qe.steps=gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-ht;return function(a){return((i*to(0,o,a)|0)+s)*n}}};$s.ease=qe["quad.out"];Ei("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ph+=r+","+r+"Params,"});var RS=function(e,t){this.id=jM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:nS,this.set=t?t.getSetter:Jf},jr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qs(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),Yr||Bn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(er(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xa(this,n),!s._dp||s.parent||If(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&qn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ht||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+cd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+cd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Js(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?la(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ht?0:this._rts,this.totalTime(to(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),va(this),aS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(er(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&qn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?la(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=tS);var i=zt;return zt=n,_h(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),zt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Sn(this,n),ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ln(i)),this._dur||(this._zTime=-ht),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ht)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=wt(n)?n:Pf,a=function(){var c=i.then;i.then=null,wt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Tr(this)},r}();vn(jr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var tn=function(r){_f(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ln(n.sortChildren),St&&qn(n.parent||St,ui(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Lf(ui(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Pr(0,arguments,this),this},t.from=function(i,s,o){return Pr(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Pr(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Cr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ct(i,s,Sn(this,o),1),this},t.call=function(i,s,o){return qn(this,Ct.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ct(i,o,Sn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Cr(o).immediateRender=ln(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Cr(a).immediateRender=ln(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Pt(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,p,_,g,m,f,v,M,x,A,b,w;if(this!==St&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,M=this._ts,f=!M,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=Pt(h%m),h===l?(g=this._repeat,d=c):(A=Pt(h/m),g=~~A,g&&g===A&&(d=c,g--),d>c&&(d=c)),A=Js(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),b&&g&1&&(d=c-d,w=1),g!==A&&!this._lock){var P=b&&A&1,T=P===(b&&g&1);if(g<A&&(P=!P),a=P?0:h%c?c:h,this._lock=1,this.render(a||(w?0:Pt(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;Yf(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=uS(this,Pt(a),Pt(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!A&&(mn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!f){v=0,_&&(h+=this._zTime=-ht);break}}p=_}else{p=this._last;for(var S=i<0?i:d;p;){if(_=p._prev,(p._act||S<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||zt&&_h(p)),d!==this._time||!this._ts&&!f){v=0,_&&(h+=this._zTime=S?-ht:ht);break}}p=_}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-ht)._zTime=d>=a?1:-1,this._ts))return this._start=x,va(this),this.render(i,s,o);this._onUpdate&&!s&&mn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&zi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(mn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(yi(s)||(s=Sn(this,s,i)),!(i instanceof jr)){if(jt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Kt(i))return this.addLabel(i,s);if(wt(i))i=Ct.delayedCall(0,i);else return this}return this!==i?qn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Rn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ct?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Kt(i)?this.removeLabel(i):wt(i)?this.killTweensOf(i):(i.parent===this&&ga(this,i),i===this._recent&&(this._recent=this._last),ns(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pt(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Sn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ct.delayedCall(0,s||qr,o);return a.data="isPause",this._hasPause=1,qn(this,a,Sn(this,i))},t.removePause=function(i){var s=this._first;for(i=Sn(this,i);s;)s._start===i&&s.data==="isPause"&&zi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ui!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Cn(i),l=this._first,c=yi(s),h;l;)l instanceof Ct?sS(l._targets,a)&&(c?(!Ui||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Sn(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,_=Ct.to(o,vn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ht,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Qs(_,m,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,vn({startAt:{time:Sn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ud(this,Sn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ud(this,Sn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ns(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ns(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Rn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,qn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Qs(o,o===St&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(St._ts&&(Rf(St,la(i,St)),Af=Bn.frame),Bn.frame>=ad){ad+=Ks.autoSleep||120;var s=St._first;if((!s||!s._ts)&&Ks.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},e}(jr);vn(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var CS=function(e,t,n,i,s,o,a){var l=new ar(this._pt,e,t,0,1,BS,null,s),c=0,h=0,u,d,p,_,g,m,f,v;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=gh(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(_l)||[];u=_l.exec(i);)_=u[0],g=i.substring(c,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?wf(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=_l.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(JM.test(i)||f)&&(l.e=0),this._pt=l,l},vh=function(e,t,n,i,s,o,a,l,c,h){wt(i)&&(i=i(s||0,e,o));var u=e[t],d=n!=="get"?n:wt(u)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,p=wt(u)?c?US:Zf:yh,_;if(Kt(i)&&(~i.indexOf("random(")&&(i=gh(i)),i.charAt(1)==="="&&(_=wf(d,i)+(Vi(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Cc)return!isNaN(d*i)&&i!==""?(_=new ar(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?OS:Qf,0,p),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&Ef(t,i),CS.call(this,e,t,d,i,p,l||Ks.stringFilter,c))},PS=function(e,t,n,i,s){if(wt(e)&&(e=Dr(e,s,t,n,i)),!$n(e)||e.style&&e.nodeType||jt(e)||xf(e))return Kt(e)?Dr(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Dr(e[a],s,t,n,i);return o},DS=function(e,t,n,i,s,o){var a,l,c,h;if(En[e]&&(a=new En[e]).init(s,a.rawVars?t[e]:PS(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ar(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ds))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ui,Cc,xh=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,p=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,f=e.parent,v=f&&f.data==="nested"?f.vars.targets:m,M=e._overwrite==="auto"&&!hh,x=e.timeline,A,b,w,P,T,S,D,z,O,W,q,H,K;if(x&&(!d||!s)&&(s="none"),e._ease=is(s,$s.ease),e._yEase=u?qf(is(u===!0?s:u,$s.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(z=m[0]?Rr(m[0]).harness:0,H=z&&i[z.prop],A=aa(i,fh),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!p?g.render(-1,!0):g.revert(h&&_?Yo:eS),g._lazy=0),o){if(zi(e._startAt=Ct.set(m,vn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&ln(l),startAt:null,delay:0,onUpdate:c&&function(){return mn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt||!a&&!p)&&e._startAt.revert(Yo),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(a=!1),w=vn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ln(l),immediateRender:a,stagger:0,parent:f},A),H&&(w[z.prop]=H),zi(e._startAt=Ct.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt?e._startAt.revert(Yo):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ln(l)||l&&!_,b=0;b<m.length;b++){if(T=m[b],D=T._gsap||mh(m)[b]._gsap,e._ptLookup[b]=W={},Tc[D.id]&&Oi.length&&oa(),q=v===m?b:v.indexOf(T),z&&(O=new z).init(T,H||A,e,q,v)!==!1&&(e._pt=P=new ar(e._pt,T,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(V){W[V]=P}),O.priority&&(S=1)),!z||H)for(w in A)En[w]&&(O=DS(w,A,e,q,T,v))?O.priority&&(S=1):W[w]=P=vh.call(e,T,w,"get",A[w],q,v,0,i.stringFilter);e._op&&e._op[b]&&e.kill(T,e._op[b]),M&&e._pt&&(Ui=e,St.killTweensOf(T,W,e.globalTime(t)),K=!e.parent,Ui=0),e._pt&&l&&(Tc[D.id]=1)}S&&HS(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,d&&t<=0&&x.render(Rn,!0,!0)},IS=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(h=d[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Cc=1,e.vars[t]="+=0",xh(e,a),Cc=0,l?Xr(t+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=iS(n)+Vi(u.e)),u.b&&(u.b=h.s+Vi(u.b))},LS=function(e,t){var n=e[0]?Rr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Zs({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},NS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(jt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Dr=function(e,t,n,i,s){return wt(e)?e.call(t,n,i,s):Kt(e)&&~e.indexOf("random(")?gh(e):e},Kf=ph+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$f={};Ei(Kf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return $f[r]=1});var Ct=function(r){_f(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Cr(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,v=i.parent||St,M=(jt(n)||xf(n)?yi(n[0]):"length"in i)?[n]:Cn(n),x,A,b,w,P,T,S,D;if(a._targets=M.length?mh(M):Xr("GSAP target "+n+" not found. https://gsap.com",!Ks.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||d||Uo(c)||Uo(h)){if(i=a.vars,x=a.timeline=new tn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:M}),x.kill(),x.parent=x._dp=ui(a),x._start=0,d||Uo(c)||Uo(h)){if(w=M.length,S=d&&Of(d),$n(d))for(P in d)~Kf.indexOf(P)&&(D||(D={}),D[P]=d[P]);for(A=0;A<w;A++)b=aa(i,$f),b.stagger=0,f&&(b.yoyoEase=f),D&&Zs(b,D),T=M[A],b.duration=+Dr(c,ui(a),A,T,M),b.delay=(+Dr(h,ui(a),A,T,M)||0)-a._delay,!d&&w===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),x.to(T,b,S?S(A,T,M):0),x._ease=qe.none;x.duration()?c=h=0:a.timeline=0}else if(_){Cr(vn(x.vars.defaults,{ease:"none"})),x._ease=is(_.ease||i.ease||"none");var z=0,O,W,q;if(jt(_))_.forEach(function(H){return x.to(M,H,">")}),x.duration();else{b={};for(P in _)P==="ease"||P==="easeEach"||NS(P,_[P],b,_.easeEach);for(P in b)for(O=b[P].sort(function(H,K){return H.t-K.t}),z=0,A=0;A<O.length;A++)W=O[A],q={ease:W.e,duration:(W.t-(A?O[A-1].t:0))/100*c},q[P]=W.v,x.to(M,q,z),z+=q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return p===!0&&!hh&&(Ui=ui(a),St.killTweensOf(M),Ui=0),qn(v,ui(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===Pt(v._time)&&ln(u)&&lS(ui(a))&&v.data!=="nested")&&(a._tTime=-ht,a.render(Math.max(0,-h)||0)),m&&Lf(ui(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ht&&!h?l:i<ht?0:i,d,p,_,g,m,f,v,M,x;if(!c)hS(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(d=Pt(u%g),u===l?(_=this._repeat,d=c):(m=Pt(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),f=this._yoyo&&_&1,f&&(x=this._yEase,d=c-d),m=Js(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(M&&this._yEase&&Yf(M,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Pt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Nf(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(d/c),this._from&&(this.ratio=v=1-v),!a&&u&&!s&&!m&&(mn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Ec(this,i,s,o),mn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&mn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ec(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&zi(this,1),!s&&!(h&&!a)&&(u||a||f)&&(mn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Yr||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||xh(this,c),h=this._ease(c/this._dur),IS(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(xa(this,0),this.parent||Df(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Tr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ui&&Ui.vars.overwrite!==!0)._first||Tr(this),this.parent&&o!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Cn(i):a,c=this._ptLookup,h=this._pt,u,d,p,_,g,m,f;if((!s||s==="all")&&oS(a,l))return s==="all"&&(this._pt=0),Tr(this);for(u=this._op=this._op||[],s!=="all"&&(Kt(s)&&(g={},Ei(s,function(v){return g[v]=1}),s=g),s=LS(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){d=c[f],s==="all"?(u[f]=s,_=d,p={}):(p=u[f]=u[f]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ga(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&Tr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Pr(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Pr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return St.killTweensOf(i,s,o)},e}(jr);vn(Ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ei("staggerTo,staggerFrom,staggerFromTo",function(r){Ct[r]=function(){var e=new tn,t=Ac.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var yh=function(e,t,n){return e[t]=n},Zf=function(e,t,n){return e[t](n)},US=function(e,t,n,i){return e[t](i.fp,n)},FS=function(e,t,n){return e.setAttribute(t,n)},Jf=function(e,t){return wt(e[t])?Zf:vf(e[t])&&e.setAttribute?FS:yh},Qf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},OS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},BS=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Mh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},kS=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},zS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ga(this,t,"_pt"):t.dep||(n=1),t=i;return!n},VS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},HS=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ar=function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Qf,this.d=l||this,this.set=c||yh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=VS,this.m=n,this.mt=s,this.tween=i},r}();Ei(ph+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return fh[r]=1});gn.TweenMax=gn.TweenLite=Ct;gn.TimelineLite=gn.TimelineMax=tn;St=new tn({sortChildren:!1,defaults:$s,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ks.stringFilter=SS;var ss=[],Ko={},GS=[],fd=0,WS=0,Ml=function(e){return(Ko[e]||GS).map(function(t){return t()})},Pc=function(){var e=Date.now(),t=[];e-fd>2&&(Ml("matchMediaInit"),ss.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Wn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ml("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),fd=e,Ml("matchMedia"))},ep=function(){function r(t,n){this.selector=n&&wc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=WS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){wt(n)&&(s=i,i=n,n=wt);var o=this,a=function(){var c=gt,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=wc(s)),gt=o,u=i.apply(o,arguments),wt(u)&&o._r.push(u),gt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===wt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=gt;gt=null,n(this),gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ct&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ct)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ss.length;o--;)ss[o].id===this.id&&ss.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),XS=function(){function r(t){this.contexts=[],this.scope=t,gt&&gt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){$n(n)||(n={matches:n});var o=new ep(0,s||this.scope),a=o.conditions={},l,c,h;gt&&!o.selector&&(o.selector=gt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Wn.matchMedia(n[c]),l&&(ss.indexOf(o)<0&&ss.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Pc):l.addEventListener("change",Pc)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ca={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Gf(i)})},timeline:function(e){return new tn(e)},getTweensOf:function(e,t){return St.getTweensOf(e,t)},getProperty:function(e,t,n,i){Kt(e)&&(e=Cn(e)[0]);var s=Rr(e||{}).get,o=n?Pf:Cf;return n==="native"&&(n=""),e&&(t?o((En[t]&&En[t].get||s)(e,t,n,i)):function(a,l,c){return o((En[a]&&En[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Cn(e),e.length>1){var i=e.map(function(h){return Ve.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=En[t],a=Rr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Ds._pt=0,u.init(e,n?h+n:h,Ds,0,[e]),u.render(1,u),Ds._pt&&Mh(1,Ds)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Ve.to(e,vn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return St.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=is(e.ease,$s.ease)),ld($s,e||{})},config:function(e){return ld(Ks,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!En[a]&&!gn[a]&&Xr(t+" effect requires "+a+" plugin.")}),gl[t]=function(a,l,c){return n(Cn(a),vn(l||{},s),c)},o&&(tn.prototype[t]=function(a,l,c){return this.add(gl[t](a,$n(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=is(t)},parseEase:function(e,t){return arguments.length?is(e,t):qe},getById:function(e){return St.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new tn(e),i,s;for(n.smoothChildTiming=ln(e.smoothChildTiming),St.remove(n),n._dp=0,n._time=n._tTime=St._time,i=St._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ct&&i.vars.onComplete===i._targets[0]))&&qn(n,i,i._start-i._delay),i=s;return qn(St,n,0),n},context:function(e,t){return e?new ep(e,t):gt},matchMedia:function(e){return new XS(e)},matchMediaRefresh:function(){return ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Pc()},addEventListener:function(e,t){var n=Ko[e]||(Ko[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ko[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:vS,wrapYoyo:xS,distribute:Of,random:kf,snap:Bf,normalize:gS,getUnit:Vi,clamp:fS,splitColor:Wf,toArray:Cn,selector:wc,mapRange:Vf,pipe:mS,unitize:_S,interpolate:yS,shuffle:Ff},install:Tf,effects:gl,ticker:Bn,updateRoot:tn.updateRoot,plugins:En,globalTimeline:St,core:{PropTween:ar,globals:bf,Tween:Ct,Timeline:tn,Animation:jr,getCache:Rr,_removeLinkedListItem:ga,reverting:function(){return zt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return hh=e}}};Ei("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ca[r]=Ct[r]});Bn.add(tn.updateRoot);Ds=ca.to({},{duration:0});var qS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},YS=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=qS(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Sl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Kt(s)&&(l={},Ei(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}YS(a,s)}}}},Ve=ca.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Sl("roundProps",Rc),Sl("modifiers"),Sl("snap",Bf))||ca;Ct.version=tn.version=Ve.version="3.13.0";Sf=1;uh()&&er();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;var Ir=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++r%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";r=h}var i=(performance||Date).now(),s=i,o=0,a=t(new Ir.Panel("FPS","#0ff","#002")),l=t(new Ir.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Ir.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(l.update(h-i,200),h>=s+1e3&&(a.update(o*1e3/(h-s),100),s=h,o=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:e,setMode:n}};Ir.Panel=function(r,e,t){var n=1/0,i=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,h=2*o,u=3*o,d=15*o,p=74*o,_=30*o,g=document.createElement("canvas");g.width=a,g.height=l,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,l),m.fillStyle=e,m.fillText(r,c,h),m.fillRect(u,d,p,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u,d,p,_),{dom:g,update:function(f,v){n=Math.min(n,f),i=Math.max(i,f),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,d),m.fillStyle=e,m.fillText(s(f)+" "+r+" ("+s(n)+"-"+s(i)+")",c,h),m.drawImage(g,u+o,d,p-o,_,u,d,p-o,_),m.fillRect(u+p-o,d,o,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u+p-o,d,o,s((1-f/v)*_))}}};var jS=`varying vec3 vNormal;\r
varying vec3 vPosition;\r
varying vec2 vUv;\r
varying vec3 view;\r
uniform float u_time;\r
uniform float animDriver;\r
uniform sampler2D noise;\r
uniform float Min;\r
uniform float Max;\r
uniform float Power;\r

float inverseLerp(float v, float minValue, float maxValue) {\r
  return (v - minValue) / (maxValue - minValue);\r
}\r
float remap(float v, float inMin, float inMax, float outMin, float outMax) {\r
  float t = inverseLerp(v, inMin, inMax);\r
  return mix(outMin, outMax, t);\r
}

float fresnel(float amount, vec3 normal, vec3 view){\r
	return pow(\r
		1.0 - clamp(dot(normalize(normal), normalize(view)), 0.0, 1.0),\r
		amount\r
	);\r
}

void main()\r
{\r
vec2 UV = vUv;\r
float UVy = UV.y;\r
vec3 vDir = normalize(cameraPosition - vPosition);\r
vec3 Normal_Main = normalize(vNormal);

float sc = clamp(0., 1.,\r
sin(u_time + 2.) * (cos(u_time * 2.) * -2.));\r
float ChaoticEmission = mix(.8, 1., sc);

float hValueH = mix(4., 9., ChaoticEmission);\r
float HeatMask = remap(pow(UVy, 6.5), 0., hValueH, 0., 1.);

float fresnel_value = -.5;\r
vec3 Color = vec3(0.45);\r

float F = dot(vDir, vNormal);\r
F = remap(F, .5, 1., 0., 1.);\r

gl_FragColor = vec4(vec3(F),0.);\r
}`,KS=`varying vec3 vNormal;\r
varying vec3 vPosition;\r
uniform vec2 resolution;\r
varying vec2 vUv;\r
varying vec3 view;\r
uniform float u_time;\r

void main() {	

    
  vec4 modelPosition = modelMatrix * vec4(position, 1.);\r
  
  vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

  vNormal = modelNormal;\r
  view = normalize(vec3(modelViewMatrix  * vec4(position, 1.0)).xyz);\r
  vPosition = (modelMatrix * vec4(position, 1.0)).xyz;\r
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}`,$S=`varying vec3 vNormal;\r
varying vec3 vPosition;\r
uniform vec2 resolution;\r
varying vec2 vUv;\r
uniform float u_time;\r

void main()\r
{   \r
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.);\r
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    
    vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

    
    vUv = uv;\r
    vNormal = modelNormal;\r
    vPosition = modelPosition.xyz;\r
}`,ZS=`varying vec3 vNormal;\r
varying vec3 vPosition;\r
varying vec2 vUv;\r
uniform float u_time;\r
uniform vec3 C1;\r
uniform vec3 C2;\r
uniform float u_sMovment;\r
uniform sampler2D DirNoise;\r

float inverseLerp(float v, float minValue, float maxValue) {\r
  return (v - minValue) / (maxValue - minValue);\r
}\r
float remap(float v, float inMin, float inMax, float outMin, float outMax) {\r
  float t = inverseLerp(v, inMin, inMax);\r
  return mix(outMin, outMax, t);\r
}\r

void main()\r
{\r
vec2 UV = vUv;\r
float UVy = UV.y;\r

float UVy_Contrast_Mask = remap(UVy - .1, -0.2, 1.2, 0., 1.);\r
UVy_Contrast_Mask = pow(UVy_Contrast_Mask , 2.0);

float sc = clamp(0., 1.,\r
sin(u_time + 2.) * (cos(u_time * 2.) * -2.));\r
float ChaoticEmission = mix(.8, 1., sc);\r
vec3 vDir = normalize(cameraPosition - vPosition);\r
float F = dot(vDir, normalize(vNormal));

float hValueH = mix(4., 9., ChaoticEmission);\r
float HeatMask = remap(pow(UVy, 6.5), 0., hValueH, 0., 1.);

float aContrast = .85;\r
float hValueA = mix(9. , 6.9, ChaoticEmission);\r
float cValueA = mix((aContrast * 1.7), aContrast, ChaoticEmission);\r
float AlphaMask = remap(pow(UVy, cValueA),\r
.1, 6.9, 0., 1.5);

float SpeedFX = 2.9; \r
float noiseRight = texture2D(DirNoise, \r
UV + vec2(u_time * -SpeedFX, 0.)).r;\r
noiseRight = pow(noiseRight, 2.);\r
float noiseLeft = texture2D(DirNoise, \r
UV  + u_time * SpeedFX).g;\r
noiseLeft = pow(noiseLeft, 2.);\r
float alphaNoise = noiseLeft * noiseRight;\r
alphaNoise = pow(alphaNoise, .5);\r
alphaNoise *= pow(AlphaMask, 2.);\r
alphaNoise += HeatMask;\r
alphaNoise = clamp(0., 1., alphaNoise);\r
vec3 colorNoise = vec3(mix(C1, C2, alphaNoise));

if(u_sMovment <= 0.) {\r
  alphaNoise = 0.;\r
}

colorNoise *= pow(F, 2.);

colorNoise *= mix(u_sMovment * 10., (u_sMovment * 10.) * .5, ChaoticEmission); \r

vec4 tTextureLol = texture2D(DirNoise, UV);

colorNoise *= UVy_Contrast_Mask;\r

gl_FragColor = vec4(colorNoise,\r
pow(alphaNoise, .75));\r
}`,JS=`varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vPosition;

varying vec3 N;\r
varying vec3 V;\r
varying vec3 E;

varying vec3 T;\r
varying vec3 B;\r

void main()\r
{\r
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.);\r
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    
    vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

    
    vUv = uv;\r
    vNormal = modelNormal;\r
    vPosition = modelPosition.xyz;\r
}`,QS=`varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vPosition;\r
uniform sampler2D u_planetMap;\r
uniform sampler2D uTextureTest;\r
uniform vec3 u_sDirection;\r
uniform vec3 u_atmoDay;\r
uniform vec3 u_atmoNight;\r
uniform sampler2D u_pNormal;\r
uniform sampler2D u_pAO;\r

void main()\r
{\r
    vec3 viewDir = normalize(vPosition - cameraPosition);\r
    vec3 normal = normalize(vNormal);\r
    vec2 uv = vec2(vUv.x, vUv.y);\r
    vec3 color = vec3(uv, 1.0);\r
    vec3 normal_Texture = normalize((texture2D(u_pNormal, uv)).rgb* 2. - 1.);\r
    normal_Texture = mix(normal, normal_Texture, .55);\r
   
    \r

    
    float sOrient = dot(u_sDirection, normal_Texture);\r
    

    
    float pMix = smoothstep(-.25, .5, sOrient);\r
    vec3 dColor = texture(u_planetMap, uv).rgb;\r
    dColor.r *= 2.1;\r
    dColor *= 1.5;\r
    vec3 nColor =  dColor * vec3(.001, .001, .001);\r
    float pAO = texture(u_pAO, uv).g;\r
    pAO *= .3;\r
    float pRoughness = texture(u_pAO, uv).r;\r
    vec3 pColor = mix(nColor,dColor,pMix);\r

    
    float fresnel = dot(viewDir, normal_Texture) + 1.;\r
    fresnel = pow(fresnel, 1.5) * 4.;

    float atmoMix = smoothstep(-.3, 1., sOrient);\r
    vec3 atmoColor = mix(u_atmoNight, u_atmoDay, atmoMix);\r
    pColor = mix(pColor, atmoColor, atmoMix * fresnel);\r
    pColor *= pAO;\r
    
    vec3 Color = vec3(fresnel, fresnel, fresnel);

    \r

    
    vec3 reflection = reflect(-u_sDirection, normal_Texture);\r
    float specular = -dot(reflection, viewDir);\r
    specular = max(specular, 0.0);\r
    specular = pow(specular, 5.);\r
    specular *= .1;\r
    specular *= pRoughness;

    vec3 specularColor = mix(vec3(1.0), atmoColor, fresnel);\r
    
    pColor += specular * specularColor;

    

    gl_FragColor = vec4(pColor, 1.);\r
    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`,eT=`varying vec3 vNormal;\r
varying vec3 vPosition;

void main()\r
{\r
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.);\r
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    
    vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

    
    vNormal = modelNormal;\r
    vPosition = modelPosition.xyz;\r
}`,tT=`varying vec3 vNormal;\r
varying vec3 vPosition;\r
uniform vec3 u_sDirection;\r
uniform vec3 u_atmoDay;\r
uniform vec3 u_atmoNight;\r
uniform sampler2D u_pNormal;\r

void main()\r
{\r
    vec3 viewDir = normalize(vPosition - cameraPosition);\r
    vec3 normal = normalize(vNormal);\r
  \r
    vec3 color = vec3(1.0);\r
    
    float sOrient = dot(u_sDirection, normal);\r
    

    
    float fresnel = dot(viewDir, normal) + 1.;\r
    fresnel = pow(fresnel, 3.);

    float atmoMix = smoothstep(-.8, 1., sOrient);\r
    vec3 atmoColor = mix(u_atmoNight, u_atmoDay, atmoMix);

    
    float edge = dot(viewDir, normal);\r
    edge = smoothstep(0., .95, edge);\r
    atmoColor *= edge;

    float dayAlpha = smoothstep(-.5, .0, sOrient);\r
    float alpha = edge * dayAlpha;\r

    
    vec3 Color = vec3(edge, edge, edge);

    gl_FragColor = vec4(atmoColor, alpha);\r
    
    
}`,nT=`varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vPosition;

uniform float u_driver;\r

void main()\r
{\r
    vec3 viewDir = normalize(vPosition - cameraPosition);\r
    vec3 normal = normalize(vNormal);\r
    vec2 uv = vec2(vUv.x, vUv.y);\r
    float r = .5;\r
    float circle = length(uv -r);\r
    circle -= .2;\r
    circle = clamp(circle, 0., 1.);\r
    circle = (1. - circle);\r
    circle = pow(circle, 15.);\r

    vec3 color = vec3(circle);\r
    color *= vec3(0.93, 0.22, 0.09);\r
    circle *= .2;\r
    circle *= pow(uv.y, 3.5);\r
    circle *= 4.5;\r
    circle *= clamp(u_driver, 0., 1.);\r
    circle = clamp(circle, 0., 1.);

    gl_FragColor = vec4(color, circle);\r
    
    
}`,iT=`varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vPosition;\r

void main()\r
{\r
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.);\r
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    
    vec3 modelNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

    
    vUv = uv;\r
    vNormal = modelNormal;\r
    vPosition = modelPosition.xyz;\r
}`,sT=`uniform sampler2D tDiffuse;\r
uniform sampler2D tNoise;\r
uniform float u_time;\r
uniform vec2 u_resolution;\r
uniform bool uPixelated;\r
uniform float uPixels;\r
uniform bool uLowres;\r
uniform float uShades;\r
uniform bool uDistort;\r
uniform float uDistortValue;\r
uniform bool uBW;\r
uniform float uColorTransition;\r
uniform float uDistortTransition;\r
uniform sampler2D uDepth;\r
uniform sampler2D uColor;\r
uniform vec2 uCameraPlanes;\r

varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 Position;

#define PI 3.141592

#define SSAO 1.0

#define DIMS uPixels\r
#define SHADES uShades\r
#define DIST_STRENGTH uDistortValue

float rand(vec3 n)\r
{\r
   return fract(abs(sin(dot(n,vec3(4.3357,-5.8464,6.7645))*52.47))*256.75+0.325);   \r
}

float pixelNoise(vec2 uv, float tile)\r
{\r
    vec3 p = vec3(uv * tile,0.0);\r
    float pNoise = (rand(floor(p/64.0))*0.5+rand(floor(p/32.0))*0.3+rand(floor(p/16.0))*0.2);\r
    return pNoise;\r
}

vec3 saturate(vec3 x) {\r
  return clamp(x, vec3(0.0), vec3(1.0));\r
}

float saturate_GS(float x) {\r
    return clamp(x, 0., 1.);\r
}

vec2 rotate(vec2 v, float a) {\r
	float s = sin(a);\r
	float c = cos(a);\r
	mat2 m = mat2(c, s, -s, c);\r
	return m * v;\r
}

vec2 computeUV( vec2 uv, float k, float kcube ){\r
    \r
    vec2 t = uv - .5;\r
    float r2 = t.x * t.x + t.y * t.y;\r
	float f = 0.;\r
    \r
    if( kcube == 0.0){\r
        f = 1. + r2 * k;\r
    }else{\r
        f = 1. + r2 * ( k + kcube * sqrt( r2 ) );\r
    }\r
    \r
    vec2 nUv = f * t + .5;\r
    
 \r
    return nUv;\r
}

float linearToRelativeLuminance(vec3 color) {\r
    return dot(color, vec3(0.2126, 0.7152, 0.0722));\r
}

float inverseLerp(float v, float minValue, float maxValue) {\r
  return (v - minValue) / (maxValue - minValue);\r
}\r
float remap(float v, float inMin, float inMax, float outMin, float outMax) {\r
  float t = inverseLerp(v, inMin, inMax);\r
  return mix(outMin, outMax, t);\r
}\r

float UI_Square(vec2 UV, vec2 Size, float Thickkkk, vec2 Res){

    vec2 UI_uv = UV - .5;

    UI_uv = vec2( UI_uv.x * ((Res.x + Size.x) / Res.x), \r
    UI_uv.y * ((Res.y + Size.y) / Res.y));

    UI_uv += .5;\r

    vec2 L_Square = step(vec2(0.),UI_uv);\r
    vec2 R_Square = step(vec2(0.),1. - UI_uv);

    vec2 L_Square_i = step(vec2(Thickkkk * 0.001 / 2., Thickkkk * 0.001),UI_uv);\r
    vec2 R_Square_i = step(vec2(Thickkkk * 0.001 / 2., Thickkkk * 0.001),1. - UI_uv);

    float UI_Sqr = \r
    ((L_Square.x * L_Square.y) * \r
    (R_Square.x * R_Square.y))\r
    - \r
    ((L_Square_i.x * L_Square_i.y) * \r
    (R_Square_i.x * R_Square_i.y));

    return UI_Sqr;\r
}

vec3 normalFromDepth(float depth, vec2 uv)\r
{   \r
    vec2 UV = gl_FragCoord.xy / (u_resolution.xy * 1.25);

    vec2 offset1 = vec2(.0, .001);\r
    vec2 offset2 = vec2(.001, .0);

    float depth1 = texture(uDepth, UV + offset1).r;\r
    float depth2 = texture(uDepth, UV + offset2).r;\r
    \r
    vec3 p1 = vec3(offset1, depth1 - depth);\r
    vec3 p2 = vec3(offset2, depth2 - depth);

    vec3 normal = cross(p1, p2);\r
    normal.z = -normal.z;

    return normalize(normal);

    

    
    \r
    
    
    
    

    
    \r
}\r
    

void main() {

    vec2 uv = vUv;\r
    vec2 UV_UI = vUv;\r
    vec2 Pixel = vUv * u_resolution;\r
    vec2 res = vUv / u_resolution;

    
    vec2 dims = vec2(128. * DIMS,128. * DIMS);\r
    vec2 texUV = floor(vUv * dims) / dims;

    
    if(uPixelated) {\r
    uv = texUV;\r
    \r
    
    uv = uv * 2. - 1.;\r
    vec2 curveOffst = uv.yx / (PI * 1.5);\r
    uv += uv * curveOffst * curveOffst;\r
    uv = uv * .5 + .5;

    
    UV_UI = UV_UI * 2. - 1.;\r
    vec2 coUI = UV_UI.yx / (PI * 1.5);\r
    UV_UI += UV_UI * coUI * coUI;\r
    UV_UI = UV_UI * .5 + .5;

    }\r
    else {\r
    uv = vUv;\r
    UV_UI = vUv;\r
    }\r

    

    

    float SineWidth = 1.;\r
    float Wave1 = saturate_GS(sin((uv.y * 5.) * SineWidth\r
    + (u_time * 3.5) * SineWidth ));\r
    float Wave2 = saturate_GS(cos((uv.y * 15.) \r
    + (u_time / .75) * SineWidth ));

    float maskDistort = Wave1 * Wave2;

    maskDistort = smoothstep(0., 3., maskDistort); \r
    maskDistort = saturate_GS(maskDistort);

    float noiseT = texture(tNoise, uv * vec2(.05, 25.)\r
    + vec2(maskDistort, 0.)).b;\r
    noiseT = remap(noiseT, 0.2, .8, 0., 1.);\r
    noiseT = pow(noiseT, 3.);\r
    noiseT = saturate_GS(noiseT);\r
    noiseT = mix(0., noiseT, maskDistort);\r
    

    

    float transitionMask = smoothstep(0., 1., \r
    vUv.x - uDistortTransition * 8.);

    float scaleDistUV = mix(1., 0.0, uDistortTransition);

    uv.y *= scaleDistUV;

    vec2 tr_d_UV = (vUv - .5) * vec2(.1, 5.) + u_time/15.;\r
    float tr_Distort = texture(tNoise, rotate(tr_d_UV, .5)).b;\r
    tr_Distort = remap(tr_Distort, .29, 1., 0., 1.);\r
    float tr_Noise = texture(tNoise, vUv + tr_Distort).b;

    tr_Noise = remap(tr_Noise,\r
    0.29, 1., 0., 1.);\r
    tr_Noise = smoothstep(0., 1., tr_Noise);\r
    tr_Noise = mix(0., tr_Noise, uDistortTransition);

    \r

    
    float MaskMover = mix(-.5, .0, uDistortTransition);\r
    float WaveT = min((vUv.x - MaskMover), \r
    1. - (vUv.x + MaskMover));\r
    WaveT = saturate_GS(WaveT);\r
    WaveT = smoothstep(.3, 0., WaveT);\r
    WaveT *= tr_Noise;\r

    float tr_Noise_R = smoothstep(0.3, 1., tr_Noise);\r
    float tr_Noise_G = smoothstep(0.0, 2., tr_Noise);\r
    float tr_Noise_B = smoothstep(0.0, .8, tr_Noise);

    float dOffset_R = 0.;\r
    float dOffset_G = 0.;\r
    float dOffset_B = 0.;\r
    

    
    if(uDistort) {\r
    uv += (noiseT * DIST_STRENGTH);\r
    uv += mix(0., tr_Noise * .2, transitionMask);\r
    uv -= WaveT;\r
    dOffset_R = (noiseT * 2.) * DIST_STRENGTH + tr_Noise_R / 15.;\r
    dOffset_G = (noiseT * 1.5) * DIST_STRENGTH + tr_Noise_G / 10.;\r
    dOffset_B = (noiseT * 3.) * DIST_STRENGTH + tr_Noise_B / 10.;\r
    }\r

    

    vec3 pixelated = texture(tDiffuse, texUV).rgb;\r
    float pixelated_gs = pixelated.r + pixelated.g + pixelated.b;\r
    pixelated_gs = pow(pixelated_gs, .85);\r
    

    
    float k = -.09;\r
    float kcube = -.15;\r
    float offset = 0.008;

    float red = texture( tDiffuse, computeUV( uv + dOffset_R\r
    , k + offset, kcube ) ).r; \r
    float green = texture( tDiffuse, computeUV( uv\r
    + dOffset_G, k, \r
    kcube) ).g; \r
    float blue = texture( tDiffuse, computeUV( uv + dOffset_B\r
    , k - offset, kcube ) ).b; \r
    \r
    vec3 result = pow(vec3(red, green, blue), vec3(1.08));\r
    

    float lmnc = linearToRelativeLuminance(result.rgb);\r
    float amount = smoothstep(0.1, .5, lmnc) * 3.;\r

    
    \r
    vec3 tintColor = vec3(1., 1., 1.);\r
    float brightAmount = .0122;\r
    result += brightAmount;

    float luminance = dot(result, vec3(.216, .7152, .0722));\r
    float saturationA = 1.1;\r
    result = mix(vec3(luminance), result, saturationA);

    float contrastA = 1.01;\r
    float midpoint = .5;\r
    result = (result - midpoint) * contrastA + midpoint;\r
    \r
    vec3 sg = sign(result - midpoint);\r
    result = sg * pow(\r
        abs(result - midpoint) * 2.0, \r
        vec3(1.0 / contrastA)) * .5 + midpoint;

    \r
    
    vec2 VgntMask = vec2(\r
    uv.x * (1. - uv.x),\r
    uv.y * (1. - uv.y));\r
    VgntMask = clamp(VgntMask, vec2(0.), \r
    vec2(1.));\r
    float Vignette = VgntMask.x * VgntMask.y;

    Vignette = pow(Vignette, 1.1);\r
    Vignette = remap(Vignette, 0., .1, 0.1, 1.);\r

    
    vec3 result_LR = vec3(0.);\r
    if(uLowres){\r
    result_LR = floor(result * SHADES + .5) / SHADES;\r
    result_LR = saturate(pow(result_LR, vec3(1.05)) * 1.2);\r
    result_LR *= saturate_GS(Vignette * 2.);\r
    if(SHADES > 192.){\r
        float SHADES_TRANSITION = SHADES / 256.;\r
        result = mix(result_LR, result, SHADES_TRANSITION);\r
    }\r
    else\r
    {\r
        result = result_LR;\r
    }\r
    }\r

    
    if(uBW){\r
    vec3 result_BW = vec3(\r
    result.r * .2126 + \r
    result.g * .7152 + \r
    result.b * .0722);\r
    result_BW = saturate(pow(result_BW * 1.25 + .003, vec3(.91)));\r
    result_BW = max(vec3(noiseT) * .05, result_BW);\r
    result = mix(result, result_BW, uColorTransition);\r
    }\r

    
    #ifdef SSAO

    float ao_stength = 1.0;\r
    float base = .2;

    float area = .0075;\r
    float falloff = 0.000001;

    float radius = 0.0002;

    const int samples = 16;\r
    const vec3 sample_sphere[samples] = vec3[](\r
      vec3( 0.5381, 0.1856,-0.4319), vec3( 0.1379, 0.2486, 0.4430),\r
      vec3( 0.3371, 0.5679,-0.0057), vec3(-0.6999,-0.0451,-0.0019),\r
      vec3( 0.0689,-0.1598,-0.8547), vec3( 0.0560, 0.0069,-0.1843),\r
      vec3(-0.0146, 0.1402, 0.0762), vec3( 0.0100,-0.1924,-0.0344),\r
      vec3(-0.3577,-0.5301,-0.4358), vec3(-0.3169, 0.1063, 0.0158),\r
      vec3( 0.0103,-0.5869, 0.0046), vec3(-0.0897,-0.4940, 0.3287),\r
      vec3( 0.7119,-0.0154,-0.0918), vec3(-0.0533, 0.0596,-0.5411),\r
      vec3( 0.0352,-0.0631, 0.5460), vec3(-0.4776, 0.2847,-0.0271)\r
    );

    vec3 random = normalize(texture(tNoise, uv * 2.).rgb);\r
    
    random.b = pow(random.b, 9.);\r
    random.b = saturate_GS(random.b);

    float depth = texture(uDepth, uv).r;

    vec3 position = vec3(uv, depth);

    vec3 normal = normalFromDepth(depth, uv);

    float radiusDepth = radius / depth;\r
    float occlusion = 0.0;

    for(int i=0; i < samples; i++) \r
    {\r
        vec3 ray = radiusDepth * reflect(sample_sphere[i], random.bbb);\r
        vec3 hemi_ray = position + sign(dot(ray, normal)) * ray;

        float occ_depth = texture(uDepth, clamp(hemi_ray.xy, 0., 1.)).r;\r
        float difference = depth - occ_depth;

        occlusion += step(falloff, difference) *\r
        (1.0 - smoothstep(falloff, area, difference));\r
        

    }

    float ao = 1.0 - ao_stength * occlusion * (1.0 / 16.);\r
    ao = saturate_GS(ao - base);

    

    #endif\r
    \r

    float near = .1;\r
    float far = 2000.;

    float nDepth = depth * 2.0 - 1.0;

    float linearDepth = (2.0 * near * far) / (far + near - nDepth * (far - near));

    linearDepth = remap(linearDepth, -.1, 10., 0., 1.);

    linearDepth = pow(linearDepth, .7);

    gl_FragColor = vec4(result, 1.);\r
   \r
    \r

    
}`;class rT{constructor(e,t){this.model=e,this.animations=t,this.mixer=new z_(this.model),this.currentAction=null,this.panelsOpen=!1}openPanels(){this._playAnimation(1),console.log("Solar panels opening..."),this.panelsOpen=!0}closePanels(){this._playAnimation(-1),console.log("Solar panels closing..."),this.panelsOpen=!1}arePanelsOpen(){return this.panelsOpen}_playAnimation(e){if(!this.animations||this.animations.length===0){console.error("No animations available for solar panels.");return}this.animations.forEach(t=>{const n=this.mixer.clipAction(t,this.model);this.currentAction&&this.currentAction.getClip()===t?n.time=this.currentAction.time:(n.reset(),n.time=e>0?0:t.duration),n.timeScale=e,n.setLoop(Ud,1),n.clampWhenFinished=!0,n.play(),this.currentAction=n})}update(e){this.mixer&&this.mixer.update(e)}}class oT extends Si{constructor(e,t,n){super(),this.model=e,this.camera=t,this.scene=n,this.velocity=new C(0,0,0),this.acceleration=new C(0,0,0),this.thrust=0,this.minThrust=0,this.maxThrust=100,this.accelerationFactor=.01,this.maxSpeed=1,this.rotationVelocity=new C(0,0,0),this.rotationAcceleration=new C(0,0,0),this.inertiaFactor=.99,this.rotationInertiaFactor=.99,this.verticalVelocity=new C(0,0,0),this.verticalAcceleration=new C(0,0,0),this.horizontalVelocity=new C(0,0,0),this.horizontalAcceleration=new C(0,0,0),this.verticalThrust=0,this.horizontalThrust=0,this.horizontalAccelerationFactor=.1,this.maxHorizontalSpeed=1,this.verticalAccelerationFactor=.1,this.maxVerticalSpeed=1,this.increaseThrust=!1,this.decreaseThrust=!1,this.rcsIndex=0,this.thrustValue=0,this.engineWorkcheck,this.initControls()}setThrustValue(e){this.thrustValue=e,this.dispatchEvent({type:"thrustChange",value:this.thrustValue})}setIndex(e){this.rcsIndex=e,this.dispatchEvent({type:"rcsIndexChange",value:this.rcsIndex})}initControls(){window.addEventListener("keydown",e=>{switch(e.code){case"ShiftLeft":this.increaseThrust=!0;break;case"ControlLeft":this.decreaseThrust=!0;break;case"ArrowLeft":this.rotationAcceleration.x=-.1,this.setIndex(1);break;case"ArrowRight":this.rotationAcceleration.x=.1,this.setIndex(2);break;case"ArrowDown":this.rotationAcceleration.z=.1,this.setIndex(3);break;case"ArrowUp":this.rotationAcceleration.z=-.1,this.setIndex(4);break;case"KeyQ":this.rotationAcceleration.y=.1,this.setIndex(5);break;case"KeyE":this.rotationAcceleration.y=-.1,this.setIndex(6);break;case"KeyW":this.verticalThrust=.1,this.setIndex(7);break;case"KeyS":this.verticalThrust=-.1,this.setIndex(8);break;case"KeyA":this.horizontalThrust=-.1,this.setIndex(9);break;case"KeyD":this.horizontalThrust=.1,this.setIndex(10);break}}),window.addEventListener("keyup",e=>{switch(e.code){case"ShiftLeft":this.increaseThrust=!1;break;case"ControlLeft":this.decreaseThrust=!1;break;case"ArrowUp":this.rotationAcceleration.z=0,this.setIndex(0);break;case"ArrowDown":this.rotationAcceleration.z=0,this.setIndex(0);break;case"ArrowLeft":this.rotationAcceleration.x=0,this.setIndex(0);break;case"ArrowRight":this.rotationAcceleration.x=0,this.setIndex(0);break;case"KeyQ":this.rotationAcceleration.y=0,this.setIndex(0);break;case"KeyE":this.rotationAcceleration.y=0,this.setIndex(0);break;case"KeyW":this.verticalThrust=0,this.setIndex(0);break;case"KeyS":this.verticalThrust=0,this.setIndex(0);break;case"KeyA":this.horizontalThrust=0,this.setIndex(0);break;case"KeyD":this.horizontalThrust=0,this.setIndex(0);break}})}update(e){this.increaseThrust&&(this.thrust=Math.min(this.thrust+1*e*10,this.maxThrust),this.setThrustValue(this.thrust)),this.decreaseThrust&&(this.thrust=Math.max(this.thrust-1*e*10,this.minThrust),this.setThrustValue(this.thrust)),new C(1,0,0).applyQuaternion(this.model.quaternion).normalize();const i=new C(0,1,0).applyQuaternion(this.model.quaternion).normalize();this.verticalAcceleration.copy(i).multiplyScalar(this.verticalThrust*this.verticalAccelerationFactor);const o=new C(0,0,1).applyQuaternion(this.model.quaternion).normalize();this.horizontalAcceleration.copy(o).multiplyScalar(this.horizontalThrust*this.horizontalAccelerationFactor),this.verticalVelocity.multiplyScalar(this.inertiaFactor),this.horizontalVelocity.multiplyScalar(this.inertiaFactor),this.verticalVelocity.add(this.verticalAcceleration.clone().multiplyScalar(e)),this.horizontalVelocity.add(this.horizontalAcceleration.clone().multiplyScalar(e)),this.verticalVelocity.clampLength(0,this.maxVerticalSpeed),this.horizontalVelocity.clampLength(0,this.maxHorizontalSpeed),this.model.position.add(this.verticalVelocity.clone().multiplyScalar(e)),this.model.position.add(this.horizontalVelocity.clone().multiplyScalar(e)),this.rotationVelocity.multiplyScalar(this.rotationInertiaFactor),this.rotationVelocity.add(this.rotationAcceleration.clone().multiplyScalar(e)),this.model.rotation.x+=this.rotationVelocity.x*e,this.model.rotation.y+=this.rotationVelocity.y*e,this.model.rotation.z+=this.rotationVelocity.z*e}}function aT(r,e,t){return Math.max(e,Math.min(t,r))}const Mi={},ei=new ch({width:400}),an={DebugPanel:!1,TurnOffAtmo:!1,TurnOffBGMesh:!1,TurnOffModel:!1,TurnOffPlanet:!1},ya=ei.addFolder("Debug");ei.add(an,"DebugPanel");ya.add(an,"TurnOffAtmo");ya.add(an,"TurnOffBGMesh");ya.add(an,"TurnOffModel");ya.add(an,"TurnOffPlanet");const ha=new Ir;ha.showPanel(0);document.body.appendChild(ha.dom);let Tl={},lT=0,ct=null,pd=null;const Re={uTime:{value:0},driver:{value:0},driver_1:{value:0},driver_2:{value:0},E_Driver:{value:0},E_Driver_Soplo:{value:0},E_Switch:{value:0},click_driver:{value:0},click_driver_eng:{value:0},BG_driver:{value:0},Energy:{value:0},Fuel:{value:75},EnginePower:{value:0},ModelScale:{value:0}},We={uColorTransition:{value:1},uPixelated:{value:!1},uPixels:{value:1.8},uLowres:{value:!1},uShades:{value:96},uDistort:{value:!1},uDistortValue:{value:15},uBW:{value:!1},uDistortTransition:{value:0}};function cT(r,e,t){return r*(1-t)+e*t}function hT(r,e){var t=r.x-e.x,n=r.y-e.y;return Math.sqrt(t*t+n*n)}const tp=document.querySelector("canvas.webgl"),uT=new ve().setRGB(1,1,1),Pn={};Pn.atmoDay="#84aad2";Pn.atmoNight="#d89b55";ei.addColor(Pn,"atmoDay").onChange(()=>{Ma.uniforms.u_atmoDay.value.set(Pn.atmoDay),Sa.uniforms.u_atmoDay.value.set(Pn.atmoDay)});ei.addColor(Pn,"atmoNight").onChange(()=>{Ma.uniforms.u_atmoNight.value.set(Pn.atmoNight),Sa.uniforms.u_atmoNight.value.set(Pn.atmoNight)});const dt=new jm,dT=new b_(16752286,0),ti=new rf(uT,4);ti.castShadow=!0;ti.shadow.mapSize.set(1024,1024);ti.shadow.camera.near=-1500;ti.shadow.camera.far=5;ti.shadow.bias=-7e-4;ei.add(ti,"intensity").min(0).max(50).step(.01);dt.add(ti.target);const np=new x_(16752286,0,.07);np.position.set(0,0,-1);dt.add(np);const lr=new sf,Sh=lr.load("/Mars_Color.jpg"),fT=lr.load("/Mars_AO.jpg"),pT=lr.load("/Mars_Normal.jpg"),cr=lr.load("/DirNoise.png");cr.wrapS=ki;cr.wrapT=ki;cr.colorSpace=Ht;Sh.anisotropy=4;const no=lr.load("/8k_stars.png");Sh.colorSpace=_t;let ip=.25,sp=new C(0,0,-1300);const rp=new eh(525,64,64),Ma=new Gt({vertexShader:JS,fragmentShader:QS,uniforms:{u_planetMap:new qt(Sh),uTextureTest:new qt(no),u_pNormal:new qt(pT),u_pAO:new qt(fT),u_sDirection:new qt(new C(0,0,1)),u_atmoDay:new qt(new ve(Pn.atmoDay)),u_atmoNight:new qt(new ve(Pn.atmoNight))}}),Bi=new At(rp,Ma);Bi.castShadow=!0;Bi.position.copy(sp);Bi.rotateOnAxis(new C(0,0,1),ip);dt.add(Bi);const Sa=new Gt({vertexShader:eT,fragmentShader:tT,uniforms:{u_sDirection:new qt(new C(0,0,1)),u_atmoDay:new qt(new ve(Pn.atmoDay)),u_atmoNight:new qt(new ve(Pn.atmoNight))},side:nn,transparent:!0}),rs=new At(rp,Sa);let El=1.04;rs.scale.set(El,El,El);dt.add(rs);rs.position.copy(sp);rs.rotateOnAxis(new C(0,0,1),ip);const mT=new nr(5,5,1,1),op=new Gt({vertexShader:iT,fragmentShader:nT,uniforms:{u_driver:{value:0},u_sDirection:new qt(new C(0,0,1))},transparent:!0}),Bs=new At(mT,op);Bs.position.set(0,0,-1400);Bs.scale.set(550,550,550);dt.add(Bs);const Ta=new mc(1,.402123859659494,3.141592653589793),As=new C,Dc=new At(new Qc(.1,2),new pi);dt.add(Dc);const Ea=lr.load("/Flare.jpg");Ea.transparent=!0;Ea.colorSpace=_t;Ea.toneMappingExposure=.1;const Th=new Gr;Th.addElement(new lh(Ea,1024,0,new ve().setRGB(1,1,1)));const ba=()=>{As.setFromSpherical(Ta),Dc.position.copy(As).multiplyScalar(1255),ti.position.copy(As),Dc.scale.set(25,25,25),Ma.uniforms.u_sDirection.value.copy(As),Sa.uniforms.u_sDirection.value.copy(As),Th.position.copy(As).multiplyScalar(1255)};ba();ei.add(Ta,"phi").min(0).max(Math.PI).onChange(ba);ei.add(Ta,"theta").min(-Math.PI).max(Math.PI).onChange(ba);ti.add(Th);dt.add(dT);dt.add(ti);Mi.Color1="#0f4bff";ei.addColor(Mi,"Color1").onChange(()=>{Kr.uniforms.C1.value.set(Mi.Color1)});Mi.Color2="#ffe5e5";ei.addColor(Mi,"Color2").onChange(()=>{Kr.uniforms.C2.value.set(Mi.Color2)});const Kr=new Gt({uniforms:{DirNoise:{value:cr},u_time:{value:0},u_sMovment:{value:0},C1:{value:new ve(16639)},C2:{value:new ve(6924238)},MinV:{value:0},MaxV:{value:1}},vertexShader:$S,fragmentShader:ZS,transparent:!0,depthWrite:!1,side:bn}),Eh=new Gt({uniforms:{noise:{value:cr},u_time:{value:0},animDriver:{value:0}},vertexShader:KS,fragmentShader:jS,transparent:!0,depthWrite:!1,side:bn}),_T=new nr(50,50,1,1),ua=new At(_T,Eh);ua.position.set(0,0,-24);console.log(ua);const bh=new Wy;bh.setDecoderConfig({type:"js"});bh.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");let $r,Lr,Zr=0,Ye=[];const ap=new qy;ap.setDRACOLoader(bh);ap.load("/Sputnik_mesh.glb",r=>{ct=r.scene,ct.children[2],ct.children[3],Tl=ct.children[5],ct.children[4],r.scene.traverse(v=>{v.castShadow=!0,v.receiveShadow=!0}),ct.children[1].castShadow=!1,ct.children[1].receiveShadow=!1,r.scene.setRotationFromAxisAngle(new C(1,0,0),-.25),r.scene.children[1].material=Kr,Tl.material.emissiveMap,Tl.material.emissiveIntensity=lT,ct.children[0].children[1].material.emissiveIntensity;const t=ct.children[5].material;t.onBeforeCompile=v=>{v.uniforms.Switch=Re.E_Switch,v.uniforms.e_driver=Re.E_Driver_Soplo,v.uniforms.click_driver=Re.click_driver_eng,v.uniforms.uTime=Re.uTime,v.uniforms.driver=Re.driver_1,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
            uniform float uTime;
            uniform float e_driver;
            uniform float Switch;
            uniform float driver;
            uniform float click_driver;
            varying vec3 vModelPosition;

            `),v.vertexShader=v.vertexShader.replace("#include <begin_vertex>",`
             vModelPosition = vec3(position);
             #include <begin_vertex>
             `),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
            uniform float uTime;
            uniform float e_driver;
            uniform float Switch;
            uniform float driver;
            uniform float click_driver;
            varying vec3 vModelPosition;


            vec3 hash( vec3 p ) // replace this by something better
            {
	            p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
                dot(p,vec3(269.5,183.3,246.1)),
                dot(p,vec3(113.5,271.9,124.6)));
	            return -1.0 + 2.0*fract(sin(p)*43758.5453123);
            }

            float noise( in vec3 p )
            {
                vec3 i = floor( p );
                vec3 f = fract( p );
	
	            vec3 u = f*f*(3.0-2.0*f);

                return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), 
                        dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), 
                        dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                    mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), 
                        dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), 
                        dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
            }`),v.fragmentShader=v.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

            vec3 C1 = vec3(.057, .0335, .0243);
            vec3 C2 = vec3(.224, .0137, .0108);


            float TimeBrightness = mix(
            0.3, 
            1., 
            clamp(sin(uTime * 2.) + cos(uTime * 3.), 0., 1.));


            vec4 emissiveColor1 = vec4(0.74, 0.14, 0.0, 1.); //orange
            vec3 viewDir = normalize(vModelPosition - vViewPosition);
            float fresnel = dot(viewDir, normal);
            fresnel = pow(fresnel, 2.0);
            fresnel = 1. - fresnel;
            fresnel = smoothstep(.1, 1.5, fresnel);

            //Noise
            float nTile = 25.;
            float Noise_Distort = noise(vModelPosition * nTile + vec3(uTime, 0., 0.));
            Noise_Distort = pow(Noise_Distort, 2.);
            Noise_Distort *= .02;

            float Noise_Grains = noise(vModelPosition * 450. + vec3(0., 0., uTime * 5.));
            Noise_Grains = pow(Noise_Grains, 2.7);
            Noise_Grains = clamp(Noise_Grains, 0., 1.);



            //CellsPattern
            float pY = pow(abs(fract((vModelPosition.x + Noise_Distort) * 15. + uTime * .25)), 50.);
            float cells = pY;
            cells *= pow((1. - fresnel), 28.);
            cells *= Noise_Grains;
            cells *= TimeBrightness;
            //StripesPattern
            float stripes = sin((vModelPosition.y * 355.));
            stripes = clamp(stripes, 0., 1.);
            stripes *= 0.01;
            stripes *= TimeBrightness;


            //Heat
            float heatMask = vModelPosition.x + 1.5;
            heatMask = smoothstep(.17, 0., heatMask);
            heatMask = smoothstep( 0., 2.5, heatMask);


            //Click_FX
            float Click_FX = clamp(sin(click_driver * 25.), 0. , 1.);


            //Colors
            vec3 CellsColor = cells * vec3(0.74, 0.14, 0.0);
            vec3 FresnelColor = fresnel * vec3(0.64, 0.1, 0.05);
            vec3 StripesColor = stripes * vec3(.5,.5,1.);
            vec3 heatColor = heatMask * vec3(0.74, 0.14, 0.0) * (e_driver / 4.);
            vec3 NGrainsColor = mix(C1, C2, Noise_Grains) * .11;
            vec3 bgColor = vec3(0.74, 0.14, 0.0) * .05; 
            vec3 Click_Color = Click_FX * bgColor * 35.;
            
            vec3 FxColor = ((CellsColor + StripesColor) * 4. + (NGrainsColor)) + bgColor;
            FxColor = max(FxColor, FresnelColor) * driver;
            FxColor = mix(FxColor, FxColor + Click_Color, click_driver );
            vec3 Color = mix(FxColor, FxColor + heatColor, Switch);
            //Color = vec3(NGrainsColor);
            
            
        //     totalEmissiveRadiance = emissiveColor1.rgb;
        //     totalEmissiveRadiance *= (fresnel + stripes);
        //    // totalEmissiveRadiance *= (cells);
        //     totalEmissiveRadiance = Color;
            totalEmissiveRadiance = Color;
            `)};const n=ct.children[4].material;n.onBeforeCompile=v=>{v.uniforms.uTime=Re.uTime,v.uniforms.driver=Re.driver_2,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
            uniform float uTime;
            uniform float driver;
            varying vec3 vModelPosition;

            `),v.vertexShader=v.vertexShader.replace("#include <begin_vertex>",`
             vModelPosition = vec3(position);
             #include <begin_vertex>
             `),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
            uniform float uTime;
            uniform float driver;
            varying vec3 vModelPosition;


            vec3 hash( vec3 p ) // replace this by something better
            {
	            p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
                dot(p,vec3(269.5,183.3,246.1)),
                dot(p,vec3(113.5,271.9,124.6)));
	            return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

            float noise( in vec3 p )
            {
                vec3 i = floor( p );
                vec3 f = fract( p );
	            vec3 u = f*f*(3.0-2.0*f);
                return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), 
                        dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), 
                        dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                    mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), 
                        dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), 
                        dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
}

            `),v.fragmentShader=v.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

            vec3 C1 = vec3(.057, .0335, .0243);
            vec3 C2 = vec3(.224, .0137, .0108);


            float TimeBrightness = mix(
            0.3, 
            1., 
            clamp(sin(uTime * 2.) + cos(uTime * 3.), 0., 1.));


            vec4 emissiveColor1 = vec4(0.74, 0.14, 0.0, 1.); //orange
            vec3 viewDir = normalize(vModelPosition - vViewPosition);
            float fresnel = dot(viewDir, normal);
            fresnel = pow(fresnel, 2.0);
            fresnel = 1. - fresnel;
            fresnel = smoothstep(.1, 1.5, fresnel);

            //Noise
            float nTile = 25.;
            float Noise_Distort = noise(vModelPosition * nTile + vec3(uTime, 0., 0.));
            Noise_Distort = pow(Noise_Distort, 2.);
            Noise_Distort *= .02;

            float Noise_Grains = noise(vModelPosition * 450. + vec3(0., 0., uTime * 5.));
            Noise_Grains = pow(Noise_Grains, 2.7);
            Noise_Grains = clamp(Noise_Grains, 0., 1.);



            //CellsPattern
            float pY = pow(abs(fract((vModelPosition.x + Noise_Distort) * 15. + uTime * .25)), 50.);
            float cells = pY;
            cells *= pow((1. - fresnel), 28.);
            cells *= Noise_Grains;
            cells *= TimeBrightness;
            //StripesPattern
            float stripes = sin((vModelPosition.y * 355.));
            stripes = clamp(stripes, 0., 1.);
            stripes *= 0.01;
            stripes *= TimeBrightness;


            //Colors
            vec3 CellsColor = cells * vec3(0.74, 0.14, 0.0);
            vec3 FresnelColor = fresnel * vec3(0.64, 0.1, 0.05);
            vec3 StripesColor = stripes * vec3(.5,.5,1.);
            vec3 NGrainsColor = mix(C1, C2, Noise_Grains) * .11;
            vec3 bgColor = vec3(0.74, 0.14, 0.0) * .05; 
            
            vec3 Color = (CellsColor + StripesColor) * 4. + (NGrainsColor);
            Color = max(Color, FresnelColor);
            //Color = vec3(NGrainsColor);
            
        
            totalEmissiveRadiance = emissiveColor1.rgb;
           totalEmissiveRadiance *= (fresnel + stripes);
           // totalEmissiveRadiance *= (cells);
            totalEmissiveRadiance = Color + bgColor;
            totalEmissiveRadiance *= driver;
            `)};const i=ct.children[2].children[0].material;i.onBeforeCompile=v=>{v.uniforms.uTime=Re.uTime,v.uniforms.click_driver=Re.click_driver,v.uniforms.driver=Re.driver,v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
            uniform float uTime;
            uniform float driver;
            uniform float click_driver;
            varying vec3 vModelPosition;

            `),v.vertexShader=v.vertexShader.replace("#include <begin_vertex>",`
             vModelPosition = vec3(position);
             #include <begin_vertex>
             `),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
            uniform float uTime;
            uniform float driver;
            uniform float click_driver;
            varying vec3 vModelPosition;
            vec3 hash( vec3 p ) // replace this by something better
            {
	        p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
            dot(p,vec3(269.5,183.3,246.1)),
            dot(p,vec3(113.5,271.9,124.6)));
	        return -1.0 + 2.0*fract(sin(p)*43758.5453123);
            }

            float noise( in vec3 p )
            {
                vec3 i = floor( p );
                vec3 f = fract( p );
	            vec3 u = f*f*(3.0-2.0*f);
            return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), 
                        dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), 
                        dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                    mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), 
                        dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), 
                        dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
}`),v.fragmentShader=v.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

            vec3 C1 = vec3(.057, .0335, .0243);
            vec3 C2 = vec3(.224, .0137, .0108);


            float TimeBrightness = mix(
            0.3, 
            1., 
            clamp(sin(uTime * 2.) + cos(uTime * 3.), 0., 1.));


            vec4 emissiveColor1 = vec4(0.74, 0.14, 0.0, 1.); //orange
            vec3 viewDir = normalize(vModelPosition - vViewPosition);
            float fresnel = dot(viewDir, normal);
            fresnel = pow(fresnel, 2.0);
            fresnel = 1. - fresnel;
            fresnel = smoothstep(.1, 1.5, fresnel);

            //Noise
            float nTile = 25.;
            float Noise_Distort = noise(vModelPosition * nTile + vec3(uTime, 0., 0.));
            Noise_Distort = pow(Noise_Distort, 2.);
            Noise_Distort *= .02;

            float Noise_Grains = noise(vModelPosition * 450. + vec3(0., 0., uTime * 5.));
            Noise_Grains = pow(Noise_Grains, 2.7);
            Noise_Grains = clamp(Noise_Grains, 0., 1.);



            //CellsPattern
            float pY = pow(abs(fract((vModelPosition.y + Noise_Distort) * 15. + uTime * .25)), 50.);
            float cells = pY;
            cells *= pow((1. - fresnel), 28.);
            cells *= Noise_Grains;
            cells *= TimeBrightness;
            //StripesPattern
            float stripes = sin((vModelPosition.y * 355.));
            stripes = clamp(stripes, 0., 1.);
            stripes *= 0.01;
            stripes *= TimeBrightness;


            //Click_FX
            float Click_FX = clamp(sin(click_driver * 25.), 0. , 1.);

            //Colors
            vec3 CellsColor = cells * vec3(0.74, 0.14, 0.0);
            vec3 FresnelColor = fresnel * vec3(0.64, 0.1, 0.05);
            vec3 StripesColor = stripes * vec3(.5,.5,1.);
            vec3 NGrainsColor = mix(C1, C2, Noise_Grains) * .11;
            vec3 bgColor = vec3(0.74, 0.14, 0.0) * .05; 
            vec3 FX_Color = Click_FX * bgColor * 35.;
            
            vec3 Color = (CellsColor + StripesColor) * 4. + (NGrainsColor);
            Color = max(Color, FresnelColor);
            Color = mix(Color, Color + FX_Color, click_driver);
            //Color = vec3(NGrainsColor);
            
        
            totalEmissiveRadiance = emissiveColor1.rgb;
           totalEmissiveRadiance *= (fresnel + stripes);
           // totalEmissiveRadiance *= (cells);
            totalEmissiveRadiance = Color + bgColor;
            totalEmissiveRadiance *= driver;
            `)},console.log(ct);function s(v,M,x,A){for(let b=0;b<v.children.length;b++)v.children[b].name.includes(x)&&(v.children[b].material=M.clone(),A.push(v.children[b]))}s(ct,Eh,"RCS",Ye);function o(v,M,x){for(let A=0;A<v.length;A++)M==!0?Ve.to(v[A].material.uniforms.animDriver,{duration:x,value:1}):Ve.to(v[A].material.uniforms.animDriver,{duration:x,value:0})}let a=[Ye[8],Ye[9],Ye[10],Ye[11]],l=[Ye[4],Ye[5],Ye[6],Ye[7]],c=[Ye[2],Ye[1]],h=[Ye[0],Ye[3]],u=[Ye[4],Ye[8],Ye[11],Ye[7]],d=[Ye[10],Ye[6],Ye[5],Ye[9]],p=[Ye[2],Ye[3]],_=[Ye[0],Ye[1]],g=[Ye[9],Ye[8],Ye[4],Ye[5]],m=[Ye[6],Ye[7],Ye[10],Ye[11]];pd=r.animations,$r=new rT(ct,pd),Lr=new oT(ct,Vt,dt);let f=.01;Lr.addEventListener("rcsIndexChange",v=>{switch(v.value){case 1:o(l,!0,f);break;case 2:o(a,!0,f);break;case 3:o(c,!0,f);break;case 4:o(h,!0,f);break;case 5:o(u,!0,f);break;case 6:o(d,!0,f);break;case 7:o(p,!0,f);break;case 8:o(_,!0,f);break;case 9:o(g,!0,f);break;case 10:o(m,!0,f);break;case 0:o(Ye,!1,f);break}}),Lr.addEventListener("thrustChange",v=>{Zr=v.value}),console.log(ct),dt.add(ct)});const Ic=new V_,gT=new C,lp=new C;lp.normalize();Ic.set(gT,lp);const Ah=Math.min(window.devicePixelRatio,2),Et={width:window.innerWidth,height:window.innerHeight},Vt=new en(75,Et.width/Et.height);Vt.position.z=180;dt.add(Vt);const Nr=new Ry(Vt,tp);Nr.enableDamping=!0;Nr.maxPolarAngle=Math.PI/1.4;const cn=new Ay({canvas:tp,antialias:!1,powerPreference:"default"});cn.setSize(Et.width,Et.height);cn.setPixelRatio(Ah);cn.toneMapping=Oc;cn.outputColorSpace=_t;cn.toneMappingExposure=1.85;cn.shadowMap.enabled=!0;cn.shadowMap.type=vd;console.log("Pixel ratio is "+cn.getPixelRatio());const Zn=new RM(cn);Zn.setSize(Et.width,Et.height);Zn.setPixelRatio(Ah);const vT=new PM(dt,Vt);Zn.addPass(vT);const Aa=new LM(dt,Vt);Aa.name="TAA";Aa.sampleLevel=2;Aa.unbiased=!0;Zn.addPass(Aa);const xT={uniforms:{tDiffuse:{value:null},tNoise:new qt(cr),u_time:{value:1},u_resolution:new qt(new me),uPixelated:{value:!0},uPixels:{value:2.5},uLowres:{value:!0},uShades:{value:192},uDistort:{value:!0},uDistortValue:{value:15},uBW:{value:!0},uColorTransition:{value:1},uDistortTransition:{value:1},uDepth:new qt,uCameraPlanes:new me(2e3,.1)},vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 Position;


        void main()
        {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix 
            * vec4(position, 1.0);
            Position = gl_Position.rgb;

            vUv = uv;

            //vFragDepth = 1.0 + gl_Position.w;
        }
    `,fragmentShader:sT},wh=new mf(xT);wh.needsUpdate=!0;wh.name="PostProcess";Zn.addPass(wh);function Gn(r){for(var e=0;e<Zn.passes.length;e++){const t=Zn.passes[e];if(t.name==r)return t}}function yT(){Gn("PostProcess").uniforms.uPixelated.value=We.uPixelated.value,Gn("PostProcess").uniforms.uPixels.value=We.uPixels.value,Gn("PostProcess").uniforms.uLowres.value=We.uLowres.value,Gn("PostProcess").uniforms.uShades.value=We.uShades.value,Gn("PostProcess").uniforms.uBW.value=We.uBW.value,Gn("PostProcess").uniforms.uDistort.value=We.uDistort.value,Gn("PostProcess").uniforms.uDistortValue.value=We.uDistortValue.value,Gn("PostProcess").uniforms.uColorTransition.value=We.uColorTransition.value,Gn("PostProcess").uniforms.uDistortTransition.value=We.uDistortTransition.value}const MT=new CM(dt,Vt);Zn.addPass(MT);window.addEventListener("resize",()=>{Et.width=window.innerWidth,Et.height=window.innerHeight,Vt.aspect=Et.width/Et.height,Vt.updateProjectionMatrix(),cn.setSize(Et.width,Et.height),cn.setPixelRatio(Ah),Zn.setSize(Et.width,Et.height),console.log("Resize"),console.log(Et.width+"x"+Et.height)});const da=new me;window.addEventListener("mousemove",r=>{da.x=r.clientX/Et.width*2-1,da.y=-(r.clientY/Et.height)*2+1});let md=0;var ks=0,bl=0,zs=0;let Yt=0,An=0;const Al=[document.querySelector(".Zagolovok"),document.querySelector(".text")],ST=document.querySelector(".text"),bt=[document.querySelector(".Dvig"),document.querySelector(".Knopka_1"),document.querySelector(".Solar"),document.querySelector(".Knopka_2"),document.querySelector(".Module")];bt[0].style.opacity=0;bt[2].style.opacity=0;const TT=document.querySelector(".UI");TT.style.opacity=0;const ET=document.querySelector(".Akkum"),_d=document.querySelector(".Obvodka"),cp=document.querySelector(".Verh_Kontur"),hp=document.querySelector(".Niz_Kontur");cp.style.width="0%";hp.style.width="0%";const up=document.querySelector(".Bak");up.style.width=Re.Fuel.value+"%";const Lc=document.querySelector(".MD");Lc.style.opacity="5%";const bT=document.querySelector(".RD");bT.style.opacity="5%";const Nc=document.querySelector(".SP");Nc.style.opacity="5%";window.addEventListener("click",()=>{zs==1&&Yt==0?(Yt+=1,document.querySelector(".Knopka_1 > b1").innerHTML="ЗАПУСТИТЬ",Ve.fromTo(Re.click_driver_eng,{value:1},{duration:.3,value:0}),bt[0].style.opacity=1,bt[0].style.pointerEvents="all"):zs==1&&Yt==2?(Yt+=1,document.querySelector(".Knopka_1 > b1").innerHTML="ВЫКЛЮЧИТЬ",Ve.fromTo(Re.click_driver_eng,{value:1},{duration:.3,value:0}),bt[0].style.opacity=1,bt[0].style.pointerEvents="all"):zs==1&&Yt==1&&(Yt-=1,Ve.fromTo(Re.click_driver_eng,{value:1},{duration:.3,value:0}),bt[0].style.opacity=0)});bt[1].addEventListener("click",()=>{Yt==1?(Yt+=1,Ve.to(Re.E_Switch,{duration:.2,ease:"power3.inOut",value:1}),bt[0].style.pointerEvents="none",bt[0].style.opacity=0):Yt==3&&(Yt=0,Ve.to(Re.E_Switch,{duration:3.3,ease:"power3.inOut",value:0}),Re.E_Driver.value=0,bt[0].style.pointerEvents="none",bt[0].style.opacity=0)});window.addEventListener("click",()=>{ks==1&&An==0?(An+=1,Ve.fromTo(Re.click_driver,{value:1},{duration:.3,value:0}),document.querySelector(".Knopka_2 > b2").innerHTML="ОТКРЫТЬ",bt[2].style.pointerEvents="all",bt[2].style.opacity=1):ks==1&&An==2?(document.querySelector(".Knopka_2 > b2").innerHTML="ЗАКРЫТЬ",Ve.fromTo(Re.click_driver,{value:1},{duration:.3,value:0}),bt[2].style.pointerEvents="all",bt[2].style.opacity=1):ks==1&&An==1&&(An-=1,Ve.fromTo(Re.click_driver,{value:1},{duration:.3,value:0}),bt[2].style.opacity=0)});bt[3].addEventListener("click",()=>{An==1?(An+=1,bt[2].style.opacity=0,bt[2].style.pointerEvents="none",$r.openPanels()):An==2&&(An=0,bt[2].style.opacity=0,bt[2].style.pointerEvents="none",$r.closePanels())});console.log("Состав класса ");function AT(){ET.style.width=Re.Energy.value+"%",An==0?(Ve.to(Re.Energy,{duration:600,value:0}),_d.style.opacity="15%",Nc.style.opacity="5%"):An==2&&(Ve.to(Re.Energy,{duration:600,value:100}),_d.style.opacity="35%",Nc.style.opacity="100%"),hp.style.width=Re.EnginePower.value+"%",Yt==2?(Ve.to(Re.EnginePower,{duration:5,value:100}),Lc.style.opacity="100%"):(Ve.to(Re.EnginePower,{duration:2,value:0}),Lc.style.opacity="5%"),cp.style.width=Zr+"%",Zr>0&&(Re.Fuel.value-=.007,up.style.width=Re.Fuel.value+"%");const r=new C(-1.6,1.2,-7e-4),e=new C(.65,1.1,-7e-4),t=r.clone(),n=e.clone(),i=document.querySelector(".Dvig"),s=document.querySelector(".Solar");t.project(Vt),n.project(Vt);const o=(t.x*.5+.5)*Et.width,a=(-t.y*.5+.5)*Et.height,l=(n.x*.5+.5)*Et.width,c=(-n.y*.5+.5)*Et.height;i.style.left=`${o}px`,i.style.top=`${a}px`,s.style.left=`${l}px`,s.style.top=`${c}px`}function wT(){an.DebugPanel==!0&&(an.TurnOffModel==!0&&ct&&dt.remove(ct),an.TurnOffPlanet==!0?dt.remove(Bi):Bi.parent==null&&an.TurnOffPlanet==!1&&dt.add(Bi),an.TurnOffAtmo==!0?dt.remove(rs):rs.parent==null&&an.TurnOffAtmo==!1&&dt.add(rs),an.TurnOffBGMesh==!0?dt.remove(Bs):Bs.parent==null&&an.TurnOffBGMesh==!1&&dt.add(Bs),ua.parent==null&&an.DebugMeshPlane==!0&&dt.add(ua),Vt.position.z=3,Re.ModelScale.value=1)}let dp=!1,Uc=0;const Fo=7,Oo=7,fp=.1,pp=.4,RT=.7,CT=Math.ceil(fp+pp+RT)*2500;ST.addEventListener("click",()=>{if(Uc==0){Uc+=1,dp=!0,Al[0].style.opacity=0,Al[1].style.opacity=0,Al[1].style.pointerEvents="none",Ve.to(Re.BG_driver,{duration:.5,value:0}),Ve.to(Vt.position,{duration:Fo,delay:Oo,ease:"power4.inOut",x:1,y:0,z:-3.5}),Ve.to(Vt.position,{duration:Fo,delay:Oo,ease:"power3.inOut",x:4}),Ve.to(Vt,{duration:Fo,delay:Oo,ease:"power3.inOut",fov:60}),Ve.to(Re.ModelScale,{duration:Fo,delay:Oo,ease:"power3.inOut",value:1});var r=Ve.timeline();setTimeout(()=>{We.uDistort.value=!0,We.uDistortTransition.value=0,r.to(We.uDistortTransition,{duration:.3,value:1}),r.fromTo(We.uDistortTransition,{value:-1.5},{duration:.1,delay:.1,value:0}),setTimeout(()=>{We.uPixelated.value=!0,We.uBW.value=!0,We.uLowres.value=!0,We.uShades.value=96,r.to(We.uDistortValue,{duration:1,ease:"power3.inOut",value:555}),Ta.set(1,.83,1.83),ba(),r.to(We.uPixels,{duration:.3,delay:fp,value:1.8}),r.to(We.uShades,{duration:.5,value:96},"<"),r.to(We.uDistortValue,{duration:.4,value:5},"<"),r.to(We.uPixels,{duration:.9,delay:pp,value:2.5}),r.to(We.uShades,{duration:1.5,value:168},"<"),r.to(We.uDistortValue,{duration:.5,value:.01},"<"),r.to(We.uShades,{duration:1.5,value:256}),r.fromTo(We.uDistortTransition,{value:.99},{duration:1.8,ease:"power3.inOut",value:0},"<"),r.fromTo(We.uDistortValue,{value:155},{duration:1.5,value:.2},"<"),r.to(We.uColorTransition,{duration:1.3,value:0},"<"),r.to(We.uPixels,{duration:4,value:3.9},"<"),r.to(We.uDistortValue,{duration:.5,value:.01}),setTimeout(()=>{We.uPixelated.value=!0,r.fromTo(We.uDistortValue,{value:155},{duration:2.5,value:.01}),r.to(We.uPixels,{duration:4,value:18.9},"<"),We.uDistort.value=!0,We.uBW.value=!1,We.uLowres.value=!1},CT+2e3)},400)},900)}});console.log(dp+"START!!!111");const PT=new of;let yr={};cn.info.autoReset=!1;const mp=()=>{ha.begin(),wT(),ct&&(Nr.target.copy(ct.position),Nr.position0.copy(ct.position),Nr.update(),ct.scale.set(Re.ModelScale.value,Re.ModelScale.value,Re.ModelScale.value)),Ic.setFromCamera(da,Vt),ct!=null&&(yr=Ic.intersectObject(dt)),ct!=null&&yr!=0&&(yr[0].object.name.includes("S_Panels")?ks=1:ks=0,yr[0].object.name.includes("CPU")?bl=1:bl=0,yr[0].object.name.includes("Engine")?zs=1:zs=0),ks>0||An==1?Ve.to(Re.driver,{duration:.15,ease:"power2.inOut",value:1}):Ve.to(Re.driver,{duration:.1,ease:"power2.inOut",value:0}),bl>0?Ve.to(Re.driver_2,{duration:.15,ease:"power2.inOut",value:1}):Ve.to(Re.driver_2,{duration:.1,ease:"power2.inOut",value:0}),Yt==2&&Zr>25?Ve.to(Re.E_Driver_Soplo,{duration:.5,ease:"power2.inOut",value:1}):Ve.to(Re.E_Driver_Soplo,{duration:.5,ease:"power2.inOut",value:0}),zs>0||Yt==1||Yt==3?Ve.to(Re.driver_1,{duration:.15,ease:"power2.inOut",value:1}):Ve.to(Re.driver_1,{duration:.1,ease:"power2.inOut",value:0}),Yt==2||Yt==3?Re.E_Driver.value=aT(Zr/100,0,1):Ve.to(Re.E_Driver,{duration:.2,ease:"power2.inOut",value:0});const r=hT(da,new me(0,0));if(Uc<1&&r<.5&&r>-.5){var e=r*2;Re.BG_driver.value=cT(1,0,e)}else Ve.to(Re.BG_driver,{duration:.5,value:0});if(ct){var t=ct.children[0].children[1];t.material.emissiveIntensity=0}const n=PT.getElapsedTime(),i=n-md;md=n,window.requestAnimationFrame(mp),Bi.setRotationFromAxisAngle(new C(0,1,0),n*.01),op.uniforms.u_driver.value=Re.BG_driver.value,Re.uTime.value=n,Eh.uniforms.u_time.value=n,yT(),Gn("PostProcess").uniforms.u_time.value=n,Kr.uniforms.u_sMovment.value=Re.E_Driver.value,Kr.uniforms.u_time.value=n,cn.render(dt,Vt),Zn.render(),AT(),$r&&$r.update(i),Lr&&Lr.update(i),ha.end()};mp();no.mapping=Zo;no.brightness=0;dt.background=no;dt.environmentIntensity=.05;no.colorSpace=_t;Mi.clearColor="#ff0000";ei.addColor(Mi,"clearColor").onChange(()=>{cn.setClearColor(Mi.clearColor)});
