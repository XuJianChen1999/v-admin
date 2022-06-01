"use strict";(self.webpackChunkAdmin=self.webpackChunkAdmin||[]).push([[4414,4590],{5631:function(e,t,n){n.d(t,{E$:function(){return a},em:function(){return s},xJ:function(){return l}});var r=n(9805),o=n(8439);const l=e=>(0,r.Z)({url:`${o.nY}/roleInfo/getRoleList`,params:e,hasload:1}),s=e=>(0,r.Z)({url:`${o.nY}/roleInfo/InfoRole`,params:{roleName:e}}),a=e=>(0,r.Z)({url:`${o.nY}/menuInfo/allMenuRole?roleId=${e}`})},9805:function(e,t,n){var r=n(6265),o=n.n(r),l=n(5410),s=n.n(l),a=n(4076),u=n(2807),c=n(5499),i=n(327),d=n(2111),f=n(1073),m=n(6259);let p=null;const g=new Map,h=[500,502,503,504,403,404,400,401],y={400:"请求错误",401:"登录状态失效，请重新登录",403:"拒绝访问",404:"请求地址不存在",500:"服务器繁忙",502:"网关错误",503:"服务不可用，服务器暂时过载或维护",504:"网关超时"},k='\n<path class="path" d="\n  M 30 15\n  L 28 17\n  M 25.61 25.61\n  A 15 15, 0, 0, 1, 15 30\n  A 15 15, 0, 1, 1, 27.99 7.5\n  L 15 15\n" style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>\n';function w(e){const{url:t,params:n,data:r={}}=e;return[e.method||"get",t,s().stringify(n),s().stringify(r)].join("&")}function b(e){const t=w(e);g.has(t)&&(g.get(t)(t),g.delete(t))}o().defaults.withCredentials=!0,o().defaults.timeout=f.Z.TIMEOUT,o().interceptors.request.use((e=>{const{lock:t=!0,loading:n=!0,text:r="加载中...",spinner:l=k,background:s="rgba(0, 0, 0, 0.7)"}=e;n&&(p=a.kN.service({lock:t,text:r,spinner:l,background:s})),b(e),function(e){const t=w(e);e.cancelToken=e.cancelToken||new(o().CancelToken)((e=>{g.has(t)||g.set(t,e)}))}(e);let u=(0,m.LP)();return u&&(console.log(f.Z.TOKEN_NAME),e.headers[f.Z.TOKEN_NAME]=u),f.Z.REQUEST_CACHE||"get"!==e.method||(e.params=e.params||{}),Object.assign(e.headers,f.Z.HEADERS),e}),(e=>Promise.reject(e))),o().interceptors.response.use((e=>{const{status:t,data:n}=e;if([401,403].includes(t))return(0,m.xY)(),window.location.reload(),!1;!n.flag&&u.z8.error(n.message),b(e.config);const r=setTimeout((()=>{p&&p.close(),clearTimeout(r)}),f.Z.HIDE_LOADING_TIME);return e.data}),(e=>{const t=setTimeout((()=>{p&&p.close(),clearTimeout(t)}),f.Z.HIDE_LOADING_TIME);if(e.response){const t=e.response,n=t.status;if(h.includes(n)){if([401,403].includes(n))return void c.T.confirm("当前用户已被登出或无权限访问当前资源，请尝试重新登录后再操作。","无权限访问",{type:"error",center:!0,showClose:!1,showCancelButton:!1,closeOnClickModal:!1,confirmButtonText:"重新登录"}).then((()=>{(0,m.xY)(),d.Z.replace({path:"/login"})})).catch((()=>{}));i.bM.error({title:"请求错误",message:y[n]})}else i.bM.error({title:"请求错误",message:t.data.message||`Status:${t.status}，未知错误！`})}else console.error(e),i.bM.error({title:"请求错误",message:"请求服务器无响应！"});return Promise.reject(e.response)})),t.Z=o()},7214:function(e,t,n){n.d(t,{Ek:function(){return l},_y:function(){return o},dB:function(){return a},kD:function(){return s}}),n(1703);var r=n(4442);const o=()=>{let e=(new Date).getHours(),t="";return e>=0&&e<=10?t="早上好":e>10&&e<=14?t="中午好":e>14&&e<=18?t="下午好":e>18&&e<=24&&(t="晚上好"),t},l=e=>{if(!(0,r.Wl)(e))throw new Error("param must be a function, not "+typeof e);return e.toString().match(/function\s.*?\(([^)]*)\)/)[1].split(",").map((e=>e.replace(/\/\*.*\*\//,"").trim())).filter((e=>e))},s=()=>(new Date).getTime()+Math.random().toString(16).slice(2),a=e=>{if(!(0,r.hj)(e))throw new Error("params must be number, not "+typeof obj);return(e+="").includes(".")||(e+="."),e.replace(/(\d)(?=(\d{3})+\.)/g,(function(e,t){return t+","})).replace(/\.$/,"")}},3618:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(3396),o=n(4870),l=n(2807),s=n(5631),a=n(4442),u=n(7214);function c(e){if((0,a.kJ)(e))return e.length?e.reduce(((e,t)=>{const{menu:n,...r}=t;return e.concat(r,n&&n.length?c(n):[])}),[]):e;console.error(`${(0,u.Ek)(c)[0]} is not an array type`)}const i={class:"dialog-footer"},d=(0,r.Uk)("取消"),f=(0,r.Uk)("确定");var m={props:{modelValue:{type:Boolean,required:!0},title:{type:String,required:!0},type:{type:String,required:!0},roleId:{type:Number,required:!0},treeNodeKey:{type:String,default:"id"}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,a=(0,o.iH)(null),u=(0,o.iH)([]),m={children:"menu",label:"menuName"};function p(){t("update:modelValue",!1)}function g(){l.z8.success("成功，请到控制台查看选择的key"),console.log(a.value.getCheckedKeys()),p()}return(0,r.YP)((()=>n.roleId),(()=>{!async function(){const{flag:e,data:t}=await(0,s.E$)(n.roleId);e&&(u.value=t,"edit"===n.type&&a.value.setCheckedKeys(c(t).map((e=>e.id))))}()})),(t,n)=>{const o=(0,r.up)("el-tree"),l=(0,r.up)("el-button"),s=(0,r.up)("el-dialog");return(0,r.wg)(),(0,r.j4)(s,{"model-value":e.modelValue,title:e.title+"权限","before-close":p,"lock-scroll":""},(0,r.Nv)({default:(0,r.w5)((()=>[(0,r.Wm)(o,{style:{"max-height":"80vh","overflow-y":"scroll"},ref_key:"treeRef",ref:a,"empty-text":"暂无数据",data:u.value,props:m,"show-checkbox":"edit"===e.type,"node-key":e.treeNodeKey,accordion:"","check-strictly":""},null,8,["data","show-checkbox","node-key"])])),_:2},["edit"===e.type?{name:"footer",fn:(0,r.w5)((()=>[(0,r._)("span",i,[(0,r.Wm)(l,{onClick:p},{default:(0,r.w5)((()=>[d])),_:1}),(0,r.Wm)(l,{type:"primary",onClick:g},{default:(0,r.w5)((()=>[f])),_:1})])]))}:void 0]),1032,["model-value","title"])}}}}}]);