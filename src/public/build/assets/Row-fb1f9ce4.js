import{u as m,c as u,b as N,d as y}from"./Col-c3c577e8.js";import{r as $,a as d}from"./app-33e0e813.js";const x=$.forwardRef(({bsPrefix:c,fluid:s=!1,as:i="div",className:e,...f},o)=>{const a=m(c,"container"),l=typeof s=="string"?`-${s}`:"-fluid";return d(i,{ref:o,...f,className:u(e,s?`${a}${l}`:a)})});x.displayName="Container";const j=x,B=$.forwardRef(({bsPrefix:c,className:s,as:i="div",...e},f)=>{const o=m(c,"row"),a=N(),l=y(),w=`${o}-cols`,p=[];return a.forEach(t=>{const r=e[t];delete e[t];let n;r!=null&&typeof r=="object"?{cols:n}=r:n=r;const R=t!==l?`-${t}`:"";n!=null&&p.push(`${w}${R}-${n}`)}),d(i,{ref:f,...e,className:u(s,o,...p)})});B.displayName="Row";const v=B;export{j as C,v as R};
