import{g as d,r as u,a as B}from"./app-33e0e813.js";var C={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var o=[],c=0;c<arguments.length;c++){var s=arguments[c];if(s){var a=typeof s;if(a==="string"||a==="number")o.push(s);else if(Array.isArray(s)){if(s.length){var i=n.apply(null,s);i&&o.push(i)}}else if(a==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){o.push(s.toString());continue}for(var r in s)e.call(s,r)&&s[r]&&o.push(r)}}}return o.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(C);var N=C.exports;const v=d(N),E=["xxl","xl","lg","md","sm","xs"],j="xs",h=u.createContext({prefixes:{},breakpoints:E,minBreakpoint:j});function A(t,e){const{prefixes:n}=u.useContext(h);return t||n[e]||e}function S(){const{breakpoints:t}=u.useContext(h);return t}function w(){const{minBreakpoint:t}=u.useContext(h);return t}function O({as:t,bsPrefix:e,className:n,...o}){e=A(e,"col");const c=S(),s=w(),a=[],i=[];return c.forEach(r=>{const p=o[r];delete o[r];let l,m,x;typeof p=="object"&&p!=null?{span:l,offset:m,order:x}=p:l=p;const f=r!==s?`-${r}`:"";l&&a.push(l===!0?`${e}${f}`:`${e}${f}-${l}`),x!=null&&i.push(`order${f}-${x}`),m!=null&&i.push(`offset${f}-${m}`)}),[{...o,className:v(n,...a,...i)},{as:t,bsPrefix:e,spans:a}]}const $=u.forwardRef((t,e)=>{const[{className:n,...o},{as:c="div",bsPrefix:s,spans:a}]=O(t);return B(c,{...o,ref:e,className:v(n,!a.length&&s)})});$.displayName="Col";const k=$;export{k as C,N as a,S as b,v as c,w as d,A as u};
