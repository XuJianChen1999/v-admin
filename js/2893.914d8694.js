"use strict";(self.webpackChunkAdmin=self.webpackChunkAdmin||[]).push([[2893],{9584:function(e,t,n){n.d(t,{VO:function(){return s},af:function(){return r},y7:function(){return o}});var l=n(9805),a=n(1073);const o={url:`${a.Z.API_URL}/upload`,name:"文件上传",post:async function(e,t={}){return await l.Z.post(this.url,e,t)}},r={url:`${a.Z.API_URL}/file/list`,name:"获取文件列表",get:async function(e){return await l.Z.get(this.url,e)}},s={url:`${a.Z.API_URL}/file/menu`,name:"获取文件分类",get:async function(){return await l.Z.get(this.url)}};t.ZP={upload:{url:`${a.Z.API_URL}/upload`,name:"文件上传",post:async function(e,t={}){return await l.Z.post(this.url,e,t)}},uploadFile:{url:`${a.Z.API_URL}/uploadFile`,name:"附件上传",post:async function(e,t={}){return await l.Z.post(this.url,e,t)}},exportFile:{url:`${a.Z.API_URL}/fileExport`,name:"导出附件",get:async function(e,t={}){return console.log("this.url------",a.Z),await l.Z.get(this.url,e,t)}},importFile:{url:`${a.Z.API_URL}/fileImport`,name:"导入附件",post:async function(e,t={}){return await l.Z.post(this.url,e,t)}}}},9805:function(e,t,n){var l=n(6265),a=n.n(l),o=n(5410),r=n.n(o),s=n(4076),i=n(2807),u=n(5499),c=n(327),d=n(2111),p=n(1073),f=n(6259);let m=null;const g=new Map,h=[500,502,503,504,403,404,400,401],y={400:"请求错误",401:"登录状态失效，请重新登录",403:"拒绝访问",404:"请求地址不存在",500:"服务器繁忙",502:"网关错误",503:"服务不可用，服务器暂时过载或维护",504:"网关超时"},b='\n<path class="path" d="\n  M 30 15\n  L 28 17\n  M 25.61 25.61\n  A 15 15, 0, 0, 1, 15 30\n  A 15 15, 0, 1, 1, 27.99 7.5\n  L 15 15\n" style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>\n';function Z(e){const{url:t,params:n,data:l={}}=e;return[e.method||"get",t,r().stringify(n),r().stringify(l)].join("&")}function k(e){const t=Z(e);g.has(t)&&(g.get(t)(t),g.delete(t))}a().defaults.withCredentials=!0,a().defaults.timeout=p.Z.TIMEOUT,a().interceptors.request.use((e=>{const{lock:t=!0,loading:n=!0,text:l="加载中...",spinner:o=b,background:r="rgba(0, 0, 0, 0.7)"}=e;n&&(m=s.kN.service({lock:t,text:l,spinner:o,background:r})),k(e),function(e){const t=Z(e);e.cancelToken=e.cancelToken||new(a().CancelToken)((e=>{g.has(t)||g.set(t,e)}))}(e);let i=(0,f.LP)();return i&&(console.log(p.Z.TOKEN_NAME),e.headers[p.Z.TOKEN_NAME]=i),p.Z.REQUEST_CACHE||"get"!==e.method||(e.params=e.params||{}),Object.assign(e.headers,p.Z.HEADERS),e}),(e=>Promise.reject(e))),a().interceptors.response.use((e=>{const{status:t,data:n}=e;if([401,403].includes(t))return(0,f.xY)(),window.location.reload(),!1;!n.flag&&i.z8.error(n.message),k(e.config);const l=setTimeout((()=>{m&&m.close(),clearTimeout(l)}),p.Z.HIDE_LOADING_TIME);return e.data}),(e=>{const t=setTimeout((()=>{m&&m.close(),clearTimeout(t)}),p.Z.HIDE_LOADING_TIME);if(e.response){const t=e.response,n=t.status;if(h.includes(n)){if([401,403].includes(n))return void u.T.confirm("当前用户已被登出或无权限访问当前资源，请尝试重新登录后再操作。","无权限访问",{type:"error",center:!0,showClose:!1,showCancelButton:!1,closeOnClickModal:!1,confirmButtonText:"重新登录"}).then((()=>{(0,f.xY)(),d.Z.replace({path:"/login"})})).catch((()=>{}));c.bM.error({title:"请求错误",message:y[n]})}else c.bM.error({title:"请求错误",message:t.data.message||`Status:${t.status}，未知错误！`})}else console.error(e),c.bM.error({title:"请求错误",message:"请求服务器无响应！"});return Promise.reject(e.response)})),t.Z=a()},2893:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var l=n(3396),a=n(4870),o=n(5046),r=n(1051),s=n.n(r),i=(n(5242),n(1709),n(9584));n(8018),n(5272),n(9995),n(8836),n(304);const u={class:"sceditor"};var c={props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},plugins:{type:[String,Array],default:"code image link preview table"},height:{type:Number,default:300},disabled:{type:Boolean,default:!1},toolbar:{type:[String,Array],default:"undo redo |  forecolor backcolor bold italic underline strikethrough link | formatselect fontselect fontsizeselect |       alignleft aligncenter alignright alignjustify outdent indent lineheight | bullist numlist |       image table  preview | code selectall"}},emits:["update:modelValue","onClick"],setup(e,{emit:t}){const n=e,r=n,c=(0,a.iH)(r.modelValue),d={content_style:"",language_url:"tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:"tinymce/skins/ui/oxide",content_css:"tinymce/skins/content/default/content.css",fontsize_formats:"12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 56px 72px",menubar:!1,statusbar:!0,plugins:r.plugins,toolbar:r.toolbar,height:r.height,placeholder:r.placeholder,images_upload_handler:async(e,t,n)=>{const l=new FormData;l.append("file",e.blob(),e.filename());try{t((await i.y7.post(l)).data.src)}catch(e){n("Image upload failed")}},setup:function(e){e.on("init",(function(){this.getBody().style.fontSize="14px"}))}};function p(e){t("onClick",e,s())}return(0,l.bv)((()=>{s().init({})})),(0,l.YP)((()=>n.modelValue),(e=>c.value=e)),(0,l.YP)(c,(e=>t("update:modelValue",e))),(t,n)=>((0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)((0,a.SU)(o.Z),{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=e=>c.value=e),init:d,disabled:e.disabled,placeholder:e.placeholder,onOnClick:p},null,8,["modelValue","disabled","placeholder"])]))}}}}]);