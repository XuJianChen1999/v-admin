"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1804,2092],{6790:function(e,a,l){l.r(a),l.d(a,{roles:function(){return t},tableData:function(){return n}});const n=[{date:"2019-05-03",avatar:"https://qiniu.qyhever.com/FhPK2ddCN84Y3HgQy6UCcH-IteAe",enable:!0,name:"Tom",id:1,role:[{id:1,name:"超级管理员"}],fullname:"admin"},{date:"2019-10-18 7:41:28",avatar:"https://qiniu.qyhever.com/1641369237455931111fd9bc8b下载",enable:!1,name:"nirav",id:5,role:[{id:5,name:"游客"}],fullname:"qem"},{date:"2016-05-04",avatar:"https://qiniu.qyhever.com/164249213357777e4d9c285e07WechatIMG42",name:"kaifa",id:7,enable:!0,role:[{id:2,name:"开发者"},{id:4,name:"运营"}],fullname:111},{date:"2022-05-17 13:07:53",name:"nirav",role:[],fullname:123,id:102,avatar:"https://qiniu.qyhever.com/1641872010245adc513767356a847b345-7f27-450e-a186-499677d65a2c"},{date:"2016-05-01",name:"qwert",fullname:"一个过客",role:[{id:2,name:"开发者"},{id:4,name:"运营"},{id:3,name:"测试"}],avatar:"https://qiniu.qyhever.com/16527928612045d991f2efb37dimg_avatar",id:13},{avatar:"https://qiniu.qyhever.com/16463574581957493f843e5491视觉 2备份 2.png",date:"2022-03-04 01:31:34",enable:!0,fullname:"qem",name:"哈哈哈",id:16,role:[{id:3,name:"测试"}]},{avatar:"https://qiniu.qyhever.com/16478315042179bb73f0b0492loading",date:"2022-03-21 02:58:56",enable:!0,fullname:"莫娜丽莎",id:17,name:"123",role:[]}],t=[{id:3,name:"测试"},{id:2,name:"开发者"},{id:4,name:"运营"},{id:1,name:"超级管理员"},{id:5,name:"财务"}]},8968:function(e,a,l){l.r(a),l.d(a,{default:function(){return v}});var n=l(3396),t=l(4870),u=l(7139),r=l(9242),m=l(5499),d=l(2807),i=l(6790),o=l(6259),p=l(8439);const c=(0,n.Uk)("查询"),f=(0,n.Uk)("添加"),w=(0,n.Uk)("黑名单人员"),b={key:0},s=(0,n.Uk)("编辑"),h=(0,n.Uk)("删除");var v={setup(e){const a=(0,n.RC)((()=>l.e(7843).then(l.bind(l,7843)))),v=(0,n.RC)((()=>Promise.all([l.e(6054),l.e(265),l.e(1313)]).then(l.bind(l,265)))),g=(0,t.iH)(!1),y=(0,t.iH)(""),W=(0,t.iH)([]),_=(0,t.iH)({username:"",enable:""});function k(e,a){y.value=a,g.value=!0,"edit"===a&&(0,o.LS)(p.OU,e)}return i.tableData.forEach((e=>{const a={"超级管理员":"success","游客":"info","开发者":"","运营":"warning"};e.role.length&&e.role.forEach((e=>e.tagType=a[e.name]))})),W.value=i.tableData,(e,l)=>{const i=(0,n.up)("el-input"),o=(0,n.up)("el-form-item"),p=(0,n.up)("el-col"),q=(0,n.up)("el-option"),U=(0,n.up)("el-select"),V=(0,n.up)("el-button"),C=(0,n.up)("el-row"),D=(0,n.up)("el-form"),H=(0,n.up)("el-avatar"),x=(0,n.up)("el-table-column"),T=(0,n.up)("el-tag"),z=(0,n.up)("el-switch"),B=(0,n.up)("el-link"),F=(0,n.up)("ComWrapper");return(0,n.wg)(),(0,n.j4)(F,{hasBackground:""},{default:(0,n.w5)((()=>[(0,n.Wm)(D,{"label-width":"60px",inline:!0},{default:(0,n.w5)((()=>[(0,n.Wm)(C,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{span:4},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{label:"用户名"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:_.value.username,"onUpdate:modelValue":l[0]||(l[0]=e=>_.value.username=e),placeholder:"请输入用户名",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(p,{span:4},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{label:"状态"},{default:(0,n.w5)((()=>[(0,n.Wm)(U,{modelValue:_.value.enable,"onUpdate:modelValue":l[1]||(l[1]=e=>_.value.enable=e),style:{width:"100%"}},{default:(0,n.w5)((()=>[(0,n.Wm)(q,{label:"全部",value:""}),(0,n.Wm)(q,{label:"启用",value:1}),(0,n.Wm)(q,{label:"禁用",value:0})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(p,{span:6},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{"label-width":"0px"},{default:(0,n.w5)((()=>[(0,n.Wm)(V,{type:"primary"},{default:(0,n.w5)((()=>[c])),_:1}),(0,n.Wm)(V,{type:"primary",onClick:l[2]||(l[2]=e=>k("","add"))},{default:(0,n.w5)((()=>[f])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)((0,t.SU)(a),{tableData:W.value},{default:(0,n.w5)((()=>[(0,n.Wm)(x,{align:"center",label:"头像"},{default:(0,n.w5)((e=>[(0,n.Wm)(H,{size:50,src:e.row.avatar},null,8,["src"])])),_:1}),(0,n.Wm)(x,{align:"center",prop:"name",label:"用户名",width:"180"}),(0,n.Wm)(x,{align:"center",prop:"fullname",label:"真实姓名",width:"180"}),(0,n.Wm)(x,{align:"center",label:"角色"},{default:(0,n.w5)((e=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.row.role,(a=>(0,n.wy)(((0,n.wg)(),(0,n.j4)(T,{key:a.id,type:a.tagType},{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(a.name),1)])),_:2},1032,["type"])),[[r.F8,e.row.role.length]]))),128)),(0,n.wy)((0,n.Wm)(T,{type:"danger"},{default:(0,n.w5)((()=>[w])),_:2},1536),[[r.F8,!e.row.role.length]])])),_:1}),(0,n.Wm)(x,{align:"center",label:"启用状态"},{default:(0,n.w5)((e=>[(0,n.Wm)(z,{modelValue:e.row.enable,"onUpdate:modelValue":a=>e.row.enable=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,n.Wm)(x,{align:"center",prop:"date",label:"添加时间"}),(0,n.Wm)(x,{align:"center",label:"操作"},{default:(0,n.w5)((e=>["admin"===e.row.fullname?((0,n.wg)(),(0,n.iD)("span",b,"-")):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Wm)(B,{type:"primary",underline:!1,onClick:a=>k(e.row,"edit"),style:{"margin-right":"16px"}},{default:(0,n.w5)((()=>[s])),_:2},1032,["onClick"]),(0,n.Wm)(B,{type:"danger",underline:!1,onClick:a=>{return l=e.row,console.log(l),void m.T.confirm((0,n.h)("p",null,[(0,n.h)("span",null,"确定要删除"),(0,n.h)("i",{style:"color: red; margin: 0 12px"},l.fullname),(0,n.h)("span",null,"吗？")]),"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>d.z8.error("删除失败")));var l}},{default:(0,n.w5)((()=>[h])),_:2},1032,["onClick"])],64))])),_:1})])),_:1},8,["tableData"]),(0,n.Wm)((0,t.SU)(v),{type:y.value,modelValue:g.value,"onUpdate:modelValue":l[3]||(l[3]=e=>g.value=e)},null,8,["type","modelValue"])])),_:1})}}}}}]);