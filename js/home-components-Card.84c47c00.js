"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3733,2933],{1084:function(e,t,l){l.r(t),l.d(t,{renderCustomers:function(){return s},renderIncome:function(){return o},renderRate:function(){return u},renderSoldOut:function(){return c}});const{Area:a,Bullet:r,Pie:i}=G2Plot,{Chart:n}=G2,o=e=>{fetch("https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json").then((e=>e.json())).then((t=>{new a(e,{data:t,xField:"Date",yField:"scales",xAxis:{range:[0,1],tickCount:5},areaStyle:()=>({fill:"l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff"})}).render()}))},s=e=>{const t=[{type:"3月",value:2654,percent:.4},{type:"4月",value:3654,percent:.02},{type:"5月",value:4400,percent:.2},{type:"6月",value:5300,percent:.24},{type:"7月",value:6200,percent:.28},{type:"8月",value:3300,percent:.14},{type:"9月",value:1500,percent:.06}],l=new n({container:e,autoFit:!0,height:500,padding:[50,20,50,20]});l.data(t),l.scale("value",{alias:"总数"}),l.axis("type",{tickLine:{alignTick:!1}}),l.axis("value",!1),l.tooltip({showMarkers:!1}),l.interval().position("type*value"),l.interaction("element-active"),t.forEach((e=>{l.annotation().text({position:[e.type,e.value],content:e.value,style:{textAlign:"center"},offsetY:-30}).text({position:[e.type,e.value],content:(100*e.percent).toFixed(0)+"%",style:{textAlign:"center"},offsetY:-12})})),l.render()},u=e=>{new r(e,{data:[{title:"满意度",ranges:[40,70,100],measures:[30,50],target:85}],measureField:"measures",rangeField:"ranges",targetField:"target",xField:"title",color:{range:["#FFbcb8","#FFe0b0","#bfeec8"],measure:["#5B8FF9","#61DDAA"],target:"#39a3f4"},label:{measure:{position:"middle",style:{fill:"#fff"}}},xAxis:{line:null},yAxis:!1,tooltip:{showMarkers:!1,shared:!0},legend:{custom:!0,position:"bottom",items:[{value:"差",name:"差",marker:{symbol:"square",style:{fill:"#FFbcb8",r:5}}},{value:"良",name:"良",marker:{symbol:"square",style:{fill:"#FFe0b0",r:5}}},{value:"优",name:"优",marker:{symbol:"square",style:{fill:"#bfeec8",r:5}}},{value:"第一季度",name:"第一季度",marker:{symbol:"square",style:{fill:"#5B8FF9",r:5}}},{value:"第二季度",name:"第二季度",marker:{symbol:"square",style:{fill:" #61DDAA",r:5}}},{value:"目标值",name:"目标值",marker:{symbol:"line",style:{stroke:"#39a3f4",r:5}}}]}}).render()},c=e=>{new i(e,{appendPadding:10,data:[{type:"男生上衣",value:27},{type:"七分裤",value:25},{type:"包包",value:18},{type:"休闲鞋",value:15},{type:"连衣裙",value:10},{type:"其他",value:5}],angleField:"value",colorField:"type",radius:.8,label:{type:"outer",content:"{name} {percentage}"},interactions:[{type:"pie-legend-active"},{type:"element-active"}]}).render()}},3594:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var a=l(3396),r=l(7139),i=l(1084);const n={class:"wrapper"},o={class:"content"},s={class:"title",style:{margin:"0"}},u={class:"value"},c={key:0,style:{width:"90%",height:"160px",margin:"0 auto"},id:"area"},d={key:1,style:{width:"90%",height:"160px",margin:"0 auto"},id:"customer"},p={key:2,style:{width:"90%",height:"160px",margin:"0 auto"},id:"rate"},y={key:3,style:{width:"90%",height:"160px",margin:"0 auto"},id:"total"};var m={setup(e){const t=[{title:"总收入",value:95293,color:"#FAD029"},{title:"好评数",value:67354,color:"#65EA91"},{title:"日活跃",value:1273,color:"#d897eb"},{title:"已售出",value:284,color:"#f69899"}];return(0,a.bv)((()=>{(0,i.renderRate)("rate"),(0,i.renderIncome)("area"),(0,i.renderSoldOut)("total"),(0,i.renderCustomers)("customer")})),(e,l)=>{const i=(0,a.up)("el-icon-wallet-filled"),m=(0,a.up)("el-icon-star-filled"),f=(0,a.up)("el-icon-goods-filled"),v=(0,a.up)("el-icon-histogram"),g=(0,a.up)("el-icon"),w=(0,a.up)("el-card"),k=(0,a.up)("el-col"),b=(0,a.up)("el-row"),h=(0,a.up)("el-main");return(0,a.wg)(),(0,a.j4)(h,{style:{padding:"0px",margin:"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{gutter:20,justify:"space-between"},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(t,((e,t)=>(0,a.Wm)(k,{key:t,lg:6},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a.Wm)(g,{size:100,class:"icon",style:(0,r.j5)({color:e.color})},{default:(0,a.w5)((()=>["总收入"===e.title?((0,a.wg)(),(0,a.j4)(i,{key:0})):(0,a.kq)("",!0),"好评数"===e.title?((0,a.wg)(),(0,a.j4)(m,{key:1})):(0,a.kq)("",!0),"已售出"===e.title?((0,a.wg)(),(0,a.j4)(f,{key:2})):(0,a.kq)("",!0),"日活跃"===e.title?((0,a.wg)(),(0,a.j4)(v,{key:3})):(0,a.kq)("",!0)])),_:2},1032,["style"]),(0,a._)("div",o,[(0,a._)("p",s,(0,r.zw)(e.title),1),(0,a._)("p",u,(0,r.zw)(e.value),1)])]),"总收入"===e.title?((0,a.wg)(),(0,a.iD)("div",c)):(0,a.kq)("",!0),"日活跃"===e.title?((0,a.wg)(),(0,a.iD)("div",d)):(0,a.kq)("",!0),"好评数"===e.title?((0,a.wg)(),(0,a.iD)("div",p)):(0,a.kq)("",!0),"已售出"===e.title?((0,a.wg)(),(0,a.iD)("div",y)):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})}}},f=(0,l(89).Z)(m,[["__scopeId","data-v-177726ba"]])}}]);