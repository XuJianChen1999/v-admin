"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1388],{1388:function(e,t,l){l.r(t),l.d(t,{default:function(){return v}});var a=l(3396),n=l(7139),u=l(9242),i=l(4870),o=l(678),c=l(6259),s=l(8439);const r={class:"search"},p={key:0,class:"search-history"},m={class:"search-result"},d=["onClick"],h={class:"title"};var f={emits:["success"],setup(e,{emit:t}){const l=(0,o.tv)(),f=(0,i.iH)(null),v=(0,i.iH)(""),k=(0,i.iH)([]),w=(0,i.iH)([]),y=(0,i.iH)([]);function g(e){w.value=e?function(e){let t=[];const a=k.value.filter((t=>t.meta.title.toLowerCase().indexOf(e.toLowerCase())>=0||t.name.toLowerCase().indexOf(e.toLowerCase())>=0||void 0)),n=l.getRoutes();return a.map((e=>"link"===e.meta.type?n.find((t=>t.path==="/"+e.path)):n.find((t=>t.path===e.path)))).forEach((e=>{t.push({name:e.name,type:e.meta.type,path:"link"===e.meta.type?e.path.slice(1):e.path,icon:e.meta.icon,title:e.meta.title,breadcrumb:e.meta.breadcrumb.map((e=>e.meta.title)).join(" - ")})})),t}(e):[]}function b(e){e.forEach((e=>{if(e.meta.hidden||"button"===e.meta.type)return!1;"iframe"===e.meta.type&&(e.path=`/i/${e.name}`),e.children&&e.children.length>0&&!e.component?b(e.children):k.value.push(e)}))}return(0,a.bv)((()=>{const e=(0,c.rV)(s.L)||[],t=(0,c.rV)(s.sk);y.value=e,b(t),f.value.focus()})),(e,i)=>{const o=(0,a.up)("el-input"),k=(0,a.up)("el-tag"),b=(0,a.up)("ComEmpty"),C=(0,a.up)("el-icon"),L=(0,a.up)("el-scrollbar");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(o,{ref_key:"inputRef",ref:f,modelValue:v.value,"onUpdate:modelValue":i[0]||(i[0]=e=>v.value=e),placeholder:"搜索",size:"large",clearable:"","prefix-icon":"el-icon-search","trigger-on-focus":!1,onInput:g,fullscreen:""},null,8,["modelValue"]),y.value.length?((0,a.wg)(),(0,a.iD)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.value,((e,t)=>((0,a.wg)(),(0,a.j4)(k,{closable:"",effect:"dark",type:"info",key:e,onClick:t=>{return l=e,v.value=l,void g(l);var l},onClose:e=>function(e){y.value.splice(e,1);const t=y.value;t.length<=0?(0,c.cl)(s.L):(0,c.LS)(s.L,t)}(t)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e),1)])),_:2},1032,["onClick","onClose"])))),128))])):(0,a.kq)("",!0),(0,a._)("div",m,[(0,a.wy)((0,a.Wm)(b,{text:"暂无搜索结果"},null,512),[[u.F8,!w.value.length]]),(0,a.wy)((0,a._)("ul",null,[(0,a.Wm)(L,{"max-height":"366px"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.value,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.path,onClick:a=>function(e){const a=v.value;y.value.includes(a)||(y.value.push(a),(0,c.LS)(s.L,y.value)),"link"===e.type?setTimeout((()=>{let t=document.createElement("a");t.style="display: none",t.target="_blank",t.href=e.path,document.body.appendChild(t),t.click(),document.body.removeChild(t)}),10):l.push({path:e.path}),t("success",!0)}(e)},[(0,a.Wm)(C,null,{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e.icon||"el-icon-menu")))])),_:2},1024),(0,a._)("span",h,(0,n.zw)(e.breadcrumb),1)],8,d)))),128))])),_:1})],512),[[u.F8,w.value.length]])])])}}},v=(0,l(89).Z)(f,[["__scopeId","data-v-677e1f6e"]])}}]);