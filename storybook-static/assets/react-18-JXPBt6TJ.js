import{r as s}from"./index-DJO9vBfz.js";import{r as l}from"./index-CazRxOMj.js";var u,a=l;u=a.createRoot,a.hydrateRoot;var n=new Map;function c(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var R=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var f=async(e,t,r)=>{let o=await v(t,r);if(c()){o.render(e);return}let{promise:i,resolve:m}=Promise.withResolvers();return o.render(s.createElement(R,{callback:m},e)),i},h=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},v=async(e,t)=>{let r=n.get(e);return r||(r=u(e,t),n.set(e,r)),r};export{f as renderElement,h as unmountElement};
