const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CzMI0I6s.js","./CLVor2ch.js"])))=>i.map(i=>d[i]);
import{_ as w}from"./CLVor2ch.js";import{c as d,a as p,t as l}from"./DOiC-wO4.js";async function g(t,r){return await $fetch(`/__nuxt_content/${r}/sql_dump`,{context:{},responseType:"text",headers:{"content-type":"text/plain"},query:{v:d[String(r)],t:void 0}})}async function S(t,r="gzip"){var i;const e=Uint8Array.from(atob(t),u=>u.charCodeAt(0)),o=(i=new Response(new Blob([e])).body)==null?void 0:i.pipeThrough(new DecompressionStream(r));return(await new Response(o).text()).split(`
`)}function f(t,r){const e=h(t),n={...r};for(const o in n)e[o]==="json"&&n[o]&&n[o]!=="undefined"&&(n[o]=JSON.parse(n[o])),e[o]==="boolean"&&n[o]!=="undefined"&&(n[o]=!!n[o]);for(const o in n)n[o]==="NULL"&&(n[o]=void 0);return n}function h(t){const r=t.match(/FROM\s+(\w+)/);if(!r)return{};const e=p[_(r[1])];return(e==null?void 0:e.fields)||{}}function _(t){return t.replace(/^_content_/,"")}let a;const m={},s={};function R(t){async function r(e){return a||(s._=s._||b(),a=await s._,Reflect.deleteProperty(s,"_")),m[String(e)]||(s[String(e)]=s[String(e)]||y(e),await s[String(e)],m[String(e)]="loaded",Reflect.deleteProperty(s,String(e))),a}return{all:async(e,n)=>(await r(t),a.exec({sql:e,bind:n,rowMode:"object",returnValue:"resultRows"}).map(o=>f(e,o))),first:async(e,n)=>(await r(t),f(e,a.exec({sql:e,bind:n,rowMode:"object",returnValue:"resultRows"}).shift())),exec:async(e,n)=>{await r(t),await a.exec({sql:e,bind:n})}}}async function b(){if(!a){const t=await w(()=>import("./CzMI0I6s.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>e.default);globalThis.sqlite3ApiConfig={silent:!0,debug:(...e)=>console.debug(...e),warn:(...e)=>{String(e[0]).includes("OPFS sqlite3_vfs")||console.warn(...e)},error:(...e)=>console.error(...e),log:(...e)=>console.log(...e)};const r=await t();a=new r.oo1.DB}return a}async function y(t){if(window.sessionStorage.getItem("previewToken"))return a;let r=null;const e=`checksum_${t}`,n=`collection_${t}`;let o="matched";try{const c=a.exec({sql:`SELECT * FROM ${l.info} where id = '${e}'`,rowMode:"object",returnValue:"resultRows"}).shift();(c==null?void 0:c.version)!==d[String(t)]&&(o="mismatch")}catch{o="missing"}if(o!=="matched"){if(window.localStorage.getItem(`content_${e}`)===d[String(t)]&&(r=window.localStorage.getItem(`content_${n}`)),!r){r=await g(void 0,String(t));try{window.localStorage.setItem(`content_${e}`,d[String(t)]),window.localStorage.setItem(`content_${n}`,r)}catch(i){console.error("Database integrity check failed, rebuilding database",i)}}const c=await S(r);await a.exec({sql:`DROP TABLE IF EXISTS ${l[String(t)]}`}),o==="mismatch"&&await a.exec({sql:`DELETE FROM ${l.info} WHERE id = '${e}'`});for(const i of c)try{await a.exec(i)}catch(u){console.error("Error executing command",u)}}return a}export{R as loadDatabaseAdapter};
