import{j as s}from"./jsx-runtime-CkxqCPlQ.js";const i=({primary:e=!1,size:t="medium",backgroundColor:o,label:a,...n})=>{const r=e?"storybook-button--primary":"storybook-button--secondary";return s.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${t}`,r].join(" "),style:{backgroundColor:o},...n,children:a})};i.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?",defaultValue:{value:'"medium"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};export{i as B};
