import{n as a,s as y,r as z}from"./runtime.PSreMutw.js";const i=[];function m(t,r){return{subscribe:v(t,r).subscribe}}function E(t,r){return t!=t?r==r:t!==r||t&&typeof t=="object"||typeof t=="function"}function v(t,r=a){let o=null;const e=new Set;function c(s){if(E(t,s)&&(t=s,o)){const u=!i.length;for(const n of e)n[1](),i.push(n,t);if(u){for(let n=0;n<i.length;n+=2)i[n][0](i[n+1]);i.length=0}}}function l(s){c(s(t))}function b(s,u=a){const n=[s,u];return e.add(n),e.size===1&&(o=r(c,l)||a),s(t),()=>{e.delete(n),e.size===0&&o&&(o(),o=null)}}return{set:c,update:l,subscribe:b}}function j(t){t.forEach(z)}function A(t,r,o){const e=!Array.isArray(t),c=e?[t]:t;if(!c.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=r.length<2;return m(o,(b,s)=>{let u=!1;const n=[];let p=0,d=a;const g=()=>{if(p)return;d();const f=r(e?n[0]:n,b,s);l?b(f):d=typeof f=="function"?f:a},w=c.map((f,h)=>y(f,x=>{n[h]=x,p&=~(1<<h),u&&g()},()=>{p|=1<<h}));return u=!0,g(),function(){j(w),d(),u=!1}})}function B(t){return{subscribe:t.subscribe.bind(t)}}function q(t){let r;return y(t,o=>r=o)(),r}export{B as a,A as d,q as g,m as r,v as w};