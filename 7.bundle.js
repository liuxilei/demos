(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1700:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=f(l(50)),n=f(l(7)),a=f(l(18)),o=f(l(6)),r=f(l(9)),c=l(0),s=f(c),d=f(l(468));function f(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){(0,n.default)(this,t);var l=(0,o.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return l.node=(0,c.createRef)(),l.graph=null,l}return(0,r.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){console.log("这里检测路由传过来的参数：",this.props.history.location);this.graph=new d.default.Graph({container:this.node.current,width:1e3,height:800,modes:{default:["click-select"],drag:["drag-node","drag-canvas"]}}),this.graph.data({nodes:[{id:"1",x:300,y:100,size:80,shape:"circle",label:"流程开始",color:"#387ee8",labelCfg:{position:"center",style:{fill:"#fff"}},style:{lineWidth:0,fill:"#1ec18a"}},{id:"2",x:300,y:500,size:80,shape:"circle",color:"#387ee8",label:"流程结束",labelCfg:{position:"center",style:{fill:"#fff"}},style:{lineWidth:0,fill:"#f46767"}}],edges:[{source:"1",target:"2",shape:"cubic",label:"cubic",labelCfg:{position:"center",autoRotate:!0,style:{lineWidth:5,fill:"#722ed1",stroke:"white"}},color:"#387ee8"}]}),this.graph.render(),this.graph.on("click",(function(e){e.target;var t=e.item;if(t)t.getType()})),this.graph.on("node:click",(function(e){e.target,e.item}))}},{key:"render",value:function(){return s.default.createElement(c.Fragment,null,s.default.createElement("div",{ref:this.node}))}}]),t}(c.Component);t.default=u}}]);
//# sourceMappingURL=7.bundle.js.map