"use strict";(self.webpackChunkAdmin=self.webpackChunkAdmin||[]).push([[6077],{4890:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var r=a(3396),n=a(4870),i={props:{text:{type:String,default:"",required:!0},subtext:{type:String,default:""},color:{type:String,default:"rgba(128,128,128,0.2)"}},setup(t,{expose:e}){const a=t,i=(0,n.iH)(null),o=(0,n.iH)(!1);function l(){s();const t=a,e=document.createElement("canvas");e.width=150,e.height=150,e.style.display="none";const r=e.getContext("2d");r.rotate(-45*Math.PI/180),r.translate(-75,25),r.fillStyle=t.color,r.font="bold 20px SimHei",r.textAlign="center",r.fillText(t.text,e.width/2,e.height/2),r.font="14px Microsoft YaHei",r.fillText(t.subtext,e.width/2,e.height/2+20);const n=document.createElement("div");n.setAttribute("class","watermark");const l=`position:absolute;top:0;left:0;right:0;bottom:0;z-index:99;pointer-events:none;background-repeat:repeat;background-image:url('${e.toDataURL("image/png")}');`;n.setAttribute("style",l),i.value.appendChild(n),o.value=!0}function s(){const t=i.value.querySelector(".watermark");t&&t.remove(),o.value=!1}return(0,r.bv)((()=>{l()})),e({createWaterMark:l,clear:s,isCreate:o}),(t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"water-mark",ref_key:"waterMarkRef",ref:i},[(0,r.WI)(t.$slots,"default")],512))}},o=(0,a(89).Z)(i,[["__scopeId","data-v-7d6bd9e7"]])}}]);