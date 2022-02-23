(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{272:function(e,t,n){},273:function(e,t,n){},391:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),s=n.n(c),i=(n(272),n(6)),o=(n(273),n(22)),l=n(5),u=n(4),j=n(21),d=n(14),b=n(29),h=n(1);var O=function(e){var t=e.show,n=e.setShow,r=e.currentUser,c=e.setCurrentUser,s=e.setUserName,o=e.setProfPic,O=Object(a.useState)(!1),p=Object(i.a)(O,2),f=p[0],m=p[1],g=Object(a.useState)({username:r.username,bio:r.bio,profile_picture:r.profile_picture}),x=Object(i.a)(g,2),v=x[0],y=x[1],C=function(){n(!1),y({username:r.username,bio:r.bio,profile_picture:r.profile_picture})},_=function(){return m(!1)},S=function(e){fetch("/users/".concat(e.id),{method:"DELETE"}).then((function(e){e.ok?(c(null),fetch("/logout",{method:"DELETE"})):e.json().then((function(e){alert(e.errors)}))}))};function w(e){y(Object(u.a)(Object(u.a)({},v),{},Object(l.a)({},e.target.id,e.target.value)))}return Object(h.jsxs)("div",{children:[Object(h.jsxs)(j.a,{show:t,onHide:C,children:[Object(h.jsx)(j.a.Header,{closeButton:!0,children:Object(h.jsxs)(j.a.Title,{children:["Edit ",r.username,"'s Profile"]})}),Object(h.jsx)(d.a,{onSubmit:function(e){return function(e){e.preventDefault();var t={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)};fetch("/users/".concat(r.id),t).then((function(e){return e.json()})).then((function(e){y({username:e.username,bio:e.bio,profile_picture:e.profile_picture}),s(e.username),o(e.profile_picture),n(!1)}))}(e)},children:Object(h.jsxs)(d.a.Group,{style:{padding:10},onChange:w,children:[Object(h.jsx)(d.a.Label,{style:{marginTop:5,marginLeft:10},children:"Username"}),Object(h.jsx)(d.a.Control,{type:"text",id:"username",value:v.username,onChange:w}),Object(h.jsx)(d.a.Label,{style:{marginTop:5,marginLeft:10},children:"Bio"}),Object(h.jsx)(d.a.Control,{type:"text",id:"bio",value:v.bio,onChange:w}),Object(h.jsx)(d.a.Label,{style:{marginTop:5,marginLeft:10},children:"Profile Picture"}),Object(h.jsx)(d.a.Control,{type:"text",id:"profile_picture",value:v.profile_picture,onChange:w}),Object(h.jsxs)(j.a.Footer,{children:[Object(h.jsx)(b.a,{variant:"danger",onClick:function(){n(!1),m(!0)},children:"Delete Account"}),Object(h.jsx)(b.a,{variant:"secondary",onClick:C,children:"Cancel"}),Object(h.jsx)(b.a,{variant:"success",type:"submit",children:"Confirm"})]})]})})]}),Object(h.jsxs)(j.a,{show:f,onHide:_,children:[Object(h.jsx)(j.a.Header,{closeButton:!0,children:Object(h.jsx)(j.a.Title,{children:"Are you sure you wish to delete ?"})}),Object(h.jsxs)(j.a.Body,{children:[Object(h.jsx)(b.a,{variant:"secondary",onClick:_,children:"Cancel"}),Object(h.jsx)(b.a,{variant:"danger",onClick:function(){S(r),m(!1)},style:{float:"right"},children:"Delete"})]})]})]})},p=n(77),f=n(61),m=n(168),g=n(166);var x={card:{margin:"0",padding:"0",width:"50px",height:"50px",borderRadius:"50%",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",backgroundColor:"blue"}},v=function(e){var t,n,a=(t=e.radian_interval,n=e.radius,{x:Math.cos(t)*n,y:Math.sin(t)*n}),r=Object(o.f)();return e.server?Object(h.jsx)("div",{style:Object(u.a)(Object(u.a)({},x.card),{},{left:"".concat(e.center.x+a.x,"px"),top:"".concat(e.center.y-a.y,"px")}),onClick:function(){localStorage.setItem("groupId",e.server.id),r("/group")},children:Object(h.jsx)("img",{className:"group-card",alt:"ok",src:e.server.group_picture?e.server.group_picture:"http://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg",style:{width:"100%",height:"100%"},title:e.server.name})}):null},y=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handle_scroll=function(e){clearTimeout(a.anim_id),a.wheel.style.transform="translate(-50%, -50%) rotate(".concat(a.temp_theta+.5*e.deltaY,"deg)"),a.temp_theta+=.5*e.deltaY,a.anim_id=setTimeout((function(){a.setState({theta:a.temp_theta})}),150)},a.state={radius:150,cards:[],theta:0},a.temp_theta=0,a.anim_id=null,a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){for(var e={x:parseFloat(this.wheel.style.width)/2,y:parseFloat(this.wheel.style.height)/2},t=[],n=this.props.array,a=this.props.setGroupId,r=0;r<8;r++)t.push(Object(h.jsx)(v,{radius:this.state.radius,radian_interval:Math.PI/4*r,center:e,server:n[r],setGroupId:a},"card_".concat(r)));this.setState({cards:t})}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{onMouseEnter:function(){return e.props.blockScroll()},onMouseLeave:function(){return e.props.allowScroll()},onWheel:this.handle_scroll,ref:function(t){return e.wheel=t},style:C.wheel,children:this.state.cards})}}]),n}(r.a.Component),C={wheel:{marginTop:"300px",marginBottom:"270px",padding:"0",left:"50%",position:"relative",transform:"translate(-50%, -50%)",height:"100px",width:"100px",backgroundImage:"url('https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80')",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"50px"}},_=y;var S=function(e){var t=e.show,n=e.setShow,r=Object(a.useState)(""),c=Object(i.a)(r,2),s=c[0],O=c[1],p=Object(a.useState)({name:"",group_picture:""}),f=Object(i.a)(p,2),m=f[0],g=f[1],x=Object(o.f)(),v=function(e){g(Object(u.a)(Object(u.a)({},m),{},Object(l.a)({},e.target.id,e.target.value)))};return Object(h.jsxs)(j.a,{show:t,onHide:function(){n(!1),O(""),g({name:"",group_picture:""})},children:[Object(h.jsx)(j.a.Header,{closeButton:!0,children:Object(h.jsx)(j.a.Title,{children:"Find/Create Group"})}),Object(h.jsxs)(j.a.Body,{children:[Object(h.jsx)(d.a.Label,{htmlFor:"titleSearch",style:{marginTop:5,marginLeft:10},children:"Search by Group:"}),Object(h.jsx)(d.a.Control,{type:"text",id:"titleSearch","aria-describedby":"titleBlock",value:s,onChange:function(e){return O(e.target.value)},placeholder:"Group Name"}),Object(h.jsx)(b.a,{style:{marginTop:10},onClick:function(){fetch("/search_groups/".concat(s)).then((function(e){e.ok?e.json().then((function(e){localStorage.setItem("groupId",e.id),O(""),g({name:"",group_picture:""}),n(!1),x("/group")})):e.json().then((function(e){alert(e.error),O("")}))}))},children:"Search"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)(d.a,{onSubmit:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)};fetch("/groups",t).then((function(e){e.ok?e.json().then((function(e){localStorage.setItem("groupId",e.id),O(""),g({name:"",group_picture:""}),n(!1),x("/group")})):e.json().then((function(e){console.log(e),alert(e.errors)}))}))},children:[Object(h.jsx)(d.a.Label,{htmlFor:"titleCreate",style:{marginTop:5,marginLeft:10},children:"Create a New Group:"}),Object(h.jsx)(d.a.Control,{type:"text",id:"name","aria-describedby":"titleBlock",value:m.name,onChange:v,placeholder:"Group Name"}),Object(h.jsx)(d.a.Label,{htmlFor:"titleImage",style:{marginTop:5,marginLeft:10},children:"Group Photo:"}),Object(h.jsx)(d.a.Control,{type:"text",id:"group_picture","aria-describedby":"titleBlock",value:m.group_picture,onChange:v,placeholder:"Image URL"}),Object(h.jsx)(b.a,{variant:"success",type:"submit",style:{marginTop:10},children:"Create"})]})]})]})},w=n(242),D=n.n(w),T=n(41),k="undefined"!==typeof document?document:{};var L=function(e){var t=e.setCurrentUser,n=e.currentUser,r=e.setGroupId,c=Object(a.useState)([]),s=Object(i.a)(c,2),o=s[0],l=s[1],u=Object(a.useState)(!1),j=Object(i.a)(u,2),d=j[0],b=j[1],p=function(){var e=Object(a.useRef)(),t=k.documentElement,n=k.body;return document.getElementsByClassName("wheel-container"),[function(a){if(n&&n.style&&!e.current){var r=window.innerWidth-t.clientWidth,c=parseInt(window.getComputedStyle(n).getPropertyValue("padding-right"))||0;t.style.position="relative",t.style.overflow="hidden",n.style.position="relative",n.style.overflow="hidden",n.style.paddingRight="".concat(c+r,"px"),a("".concat(c+r,"px")),e.current=!0}},function(a){n&&n.style&&e.current&&(t.style.position="",t.style.overflow="",n.style.position="",n.style.overflow="",n.style.paddingRight="",a(!1),e.current=!1)}]}(),f=Object(i.a)(p,2),m=f[0],g=f[1],x=Object(a.useState)("test"),v=Object(i.a)(x,2),y=(v[0],v[1]),C=Object(a.useState)(!1),w=Object(i.a)(C,2),L=w[0],E=w[1],H=Object(a.useState)(n.username),N=Object(i.a)(H,2),U=N[0],I=N[1],P=Object(a.useState)(n.profile_picture),B=Object(i.a)(P,2),A=B[0],G=B[1];Object(a.useEffect)((function(){fetch("/my_total_groups").then((function(e){return e.json()})).then((function(e){l(e.all_groups)}))}),[]);var F=o.map((function(e){return Object(h.jsx)(_,{blockScroll:function(){return m(y)},allowScroll:function(){return g(y)},array:e,setGroupId:r},e[0].name)}));return Object(h.jsxs)("div",{className:"home-div",children:[Object(h.jsxs)("div",{className:"home-nav",children:[Object(h.jsx)(T.b,{to:"/calendar",style:{textDecoration:"none",marginLeft:20},children:Object(h.jsx)(D.a,{color:"error",fontSize:"large"})}),Object(h.jsx)("button",{onClick:function(){t(null),fetch("/logout",{method:"DELETE"})},style:{float:"right",marginRight:10,height:"30px"},children:"Logout"})]}),Object(h.jsxs)("div",{className:"home-prof",children:[Object(h.jsx)("img",{className:"prof-pic",src:A,onClick:function(){return E(!0)},alt:"Profile"}),Object(h.jsxs)("h2",{children:["Welcome ",U,"!"]})]}),Object(h.jsx)("button",{className:"create-group-button",onClick:function(){return b(!0)},children:"Discover and Create"}),Object(h.jsx)(S,{show:d,setShow:b}),Object(h.jsxs)("div",{className:"scroll-bs",children:[Object(h.jsx)("div",{className:"wheel-container",children:F}),Object(h.jsx)(O,{show:L,setShow:E,currentUser:n,setCurrentUser:t,setUserName:I,setProfPic:G})]})]})},E=n(20),H=n(175),N=n(245),U=n.n(N),I=(n(280),n(435)),P=n(441),B=n(250),A=n(446),G=n(442),F=n(445),M=n(119),R=n.n(M),W=n(165);var J=function(e){var t,n=e.showAdd,r=e.setShowAdd,c=e.currentUser,s=e.handleNewEventSubmit,o=e.adminGroups,O=Object(a.useState)({user_id:c.id,group_id:null,title:"",start:"",end:"",desc:"",all_day:!1,color:"blue"}),p=Object(i.a)(O,2),f=p[0],m=p[1],g=Object(a.useState)(!1),x=Object(i.a)(g,2),v=x[0],y=x[1],C=Object(a.useState)(""),_=Object(i.a)(C,2),S=_[0],w=_[1],D=Object(a.useState)(""),T=Object(i.a)(D,2),k=T[0],L=T[1],E=Object(a.useState)(!1),H=Object(i.a)(E,2),N=H[0],U=H[1],I=function(){r(!1),y(!1),U(!1),w(0),L(0),m({user_id:c.id,group_id:null,title:"",start:"",end:"",desc:"",all_day:!1,color:"blue"})},P=function(e){if(e.target)if("allDay"===e.target.id)m(Object(u.a)(Object(u.a)({},f),{},{all_day:!f.all_day}));else if("multiDay"===e.target.id)y(!v),w(0),L(0);else if("start"===e.target.id){var t=new Date(e.target.value);t.setHours(0);var n=new Date(e.target.value);n.setHours(0),t.setDate(t.getDate()+1),n.setDate(n.getDate()+1),m(Object(u.a)(Object(u.a)({},f),{},{start:t,end:n}))}else if("end"===e.target.id){var a=new Date(e.target.value);a.setDate(a.getDate()+1),m(Object(u.a)(Object(u.a)({},f),{},{end:a}))}else if("start_time"===e.target.id){var r=parseInt(e.target.value,10),c=f.start,s=f.end,i=r/60/60;i%1===.5?(c.setHours(i,30),m(Object(u.a)(Object(u.a)({},f),{},{start:c})),r>k&&(s.setHours(i,30),m(Object(u.a)(Object(u.a)({},f),{},{end:s})))):(c.setHours(i,0),m(Object(u.a)(Object(u.a)({},f),{},{start:c})),r>k&&(s.setHours(i,0),m(Object(u.a)(Object(u.a)({},f),{},{end:s}))))}else if("end_time"===e.target.id){var o=parseInt(e.target.value,10);o<S&&(o=S);var j=f.start.getTime(),d=new Date(j),b=o/60/60;b%1===.5?(d.setHours(b,30),m(Object(u.a)(Object(u.a)({},f),{},{end:d}))):(d.setHours(b,0),m(Object(u.a)(Object(u.a)({},f),{},{end:d})))}else"personalEvent"===e.target.id?(U(!N),m(Object(u.a)(Object(u.a)({},f),{},{group_id:null}))):"groupEvent"===e.target.id?U(!N):"group"===e.target.id?m(Object(u.a)(Object(u.a)({},f),{},{group_id:parseInt(e.target.value,10)})):m(Object(u.a)(Object(u.a)({},f),{},Object(l.a)({},e.target.id,e.target.value)));else m(Object(u.a)(Object(u.a)({},f),{},{color:e.hex}))},B=o.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name},e.id)}));return f.all_day?t=null:v?t=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a.Label,{style:{marginLeft:10,marginTop:5},children:"End Date:"}),Object(h.jsx)(d.a.Control,{id:"end",type:"date",name:"end",placeholder:"End Date"})]}):""!==f.start&&(t=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a.Label,{style:{marginLeft:10,marginTop:5},children:"Start:"}),Object(h.jsx)(R.a,{id:"start_time",start:"00:00",end:"23:30",step:30,style:{marginTop:-2},onChange:function(e){return function(e){w(e),e>k&&L(e)}(e)},value:S}),Object(h.jsx)(d.a.Label,{style:{marginLeft:10,marginTop:5},children:"End:"}),Object(h.jsx)(R.a,{id:"end_time",start:"00:00",end:"23:30",step:30,style:{marginTop:-2},onChange:function(e){return function(e){L(e>S?e:S)}(e)},value:k})]})),Object(h.jsxs)(j.a,{show:n,onHide:I,children:[Object(h.jsx)(j.a.Header,{closeButton:!0,children:Object(h.jsx)(j.a.Title,{children:"New Event"})}),Object(h.jsx)(d.a,{onSubmit:function(e){return function(e){e.preventDefault(),s(f),r(!1),y(!1),U(!1),w(0),L(0),m({user_id:c.id,group_id:null,title:"",start:"",end:"",desc:"",all_day:!1,color:"blue"})}(e)},children:Object(h.jsxs)(d.a.Group,{style:{padding:10},onChange:P,children:[Object(h.jsx)(d.a.Label,{htmlFor:"title",style:{marginTop:5,marginLeft:10},children:"Event Title:"}),Object(h.jsx)(d.a.Control,{type:"text",id:"title","aria-describedby":"titleBlock",value:f.title,onChange:P}),Object(h.jsx)(d.a.Label,{htmlFor:"desc",style:{marginTop:5,marginLeft:10},children:"Description:"}),Object(h.jsx)(d.a.Text,{id:"optionalDesc",muted:!0,style:{marginLeft:5},children:"(optional)"}),Object(h.jsx)(d.a.Control,{type:"text",id:"desc","aria-describedby":"descriptionBlock",value:f.desc,onChange:P}),Object(h.jsx)(d.a.Label,{htmlFor:"color",style:{marginTop:5,marginLeft:10},children:"Color:"}),Object(h.jsx)(W.a,{id:"color",onChangeComplete:P,color:f.color,width:"213px"}),Object(h.jsx)(d.a.Label,{style:{marginLeft:10,marginTop:5},children:v?"Stary Date:":"Date:"}),Object(h.jsx)(d.a.Control,{id:"start",type:"date",name:"start",placeholder:"Start Date"}),v?Object(h.jsx)(d.a.Check,{inline:!0,type:"switch",id:"allDayDis",label:"All Day",disabled:!0}):Object(h.jsx)(d.a.Check,{inline:!0,type:"switch",id:"allDay",label:"All Day"}),f.all_day?Object(h.jsx)(d.a.Check,{inline:!0,type:"switch",id:"multiDayDis",label:"Multiple Days",disabled:!0}):Object(h.jsx)(d.a.Check,{inline:!0,type:"switch",id:"multiDay",label:"Multiple Days"}),Object(h.jsx)("br",{}),t,Object(h.jsx)(d.a.Check,{inline:!0,label:"Personal",name:"type",type:"radio",id:"personalEvent",defaultChecked:!0}),Object(h.jsx)(d.a.Check,{inline:!0,label:"Group",name:"type",type:"radio",id:"groupEvent"}),N?Object(h.jsxs)(d.a.Select,{id:"group","aria-label":"Select Group",style:{marginTop:5},children:[Object(h.jsx)("option",{children:"Select Group"}),B]}):null,Object(h.jsxs)(j.a.Footer,{children:[Object(h.jsx)(b.a,{variant:"secondary",onClick:I,children:"Close"}),Object(h.jsx)(b.a,{variant:"success",type:"submit",children:"Add"})]})]})})]})};var z=function(e){var t,n=e.show,r=e.setShow,c=e.event,s=e.handleEditSubmit,o=e.currentUser,O=e.handleDeleteEvent,p=Object(a.useState)(!1),f=Object(i.a)(p,2),m=f[0],g=f[1],x=Object(a.useState)({user_id:o.id,group_id:null,title:"",start:"",end:"",desc:"",all_day:!1,color:"blue"}),v=Object(i.a)(x,2),y=v[0],C=v[1],_=Object(a.useState)(!1),S=Object(i.a)(_,2),w=S[0],D=S[1],T=Object(a.useState)(""),k=Object(i.a)(T,2),L=k[0],E=k[1],H=Object(a.useState)(""),N=Object(i.a)(H,2),U=N[0],I=N[1],P=Object(a.useState)(!1),B=Object(i.a)(P,2),A=B[0],G=B[1],F=Object(a.useState)(!1),M=Object(i.a)(F,2),J=M[0],z=M[1],q=Object(a.useState)(!1),V=Object(i.a)(q,2),Y=V[0],K=V[1],Q=function(){g(!1),D(!1),G(!1),E(0),I(0),K(!1),C({user_id:o.id,group_id:null,title:"",start:"",end:"",desc:"",all_day:!1,color:"blue"})},X=function(e){if(e.target)if("allDay"===e.target.id)C(Object(u.a)(Object(u.a)({},y),{},{all_day:!y.all_day}));else if("multiDay"===e.target.id)D(!w),E(0),I(0);else if("start"===e.target.id){var t=new Date(e.target.value);t.setHours(0);var n=new Date(e.target.value);n.setHours(0),t.setDate(t.getDate()+1),n.setDate(n.getDate()+1),C(Object(u.a)(Object(u.a)({},y),{},{start:t,end:n}))}else if("end"===e.target.id){var a=new Date(e.target.value);a.setDate(a.getDate()+1),C(Object(u.a)(Object(u.a)({},y),{},{end:a}))}else if("start_time"===e.target.id){var r=parseInt(e.target.value,10),c=y.start,s=y.end,i=r/60/60;i%1===.5?(c.setHours(i,30),C(Object(u.a)(Object(u.a)({},y),{},{start:c})),r>U&&(s.setHours(i,30),C(Object(u.a)(Object(u.a)({},y),{},{end:s})))):(c.setHours(i,0),C(Object(u.a)(Object(u.a)({},y),{},{start:c})),r>U&&(s.setHours(i,0),C(Object(u.a)(Object(u.a)({},y),{},{end:s}))))}else if("end_time"===e.target.id){var o=parseInt(e.target.value,10);o<L&&(o=L);var j=y.start.getTime(),d=new Date(j),b=o/60/60;b%1===.5?(d.setHours(b,30),C(Object(u.a)(Object(u.a)({},y),{},{end:d}))):(d.setHours(b,0),C(Object(u.a)(Object(u.a)({},y),{},{end:d})))}else"personalEvent"===e.target.id?(G(!A),C(Object(u.a)(Object(u.a)({},y),{},{group_id:null}))):"groupEvent"===e.target.id?G(!A):"group"===e.target.id?C(Object(u.a)(Object(u.a)({},y),{},{group_id:parseInt(e.target.value,10)})):C(Object(u.a)(Object(u.a)({},y),{},Object(l.a)({},e.target.id,e.target.value)));else C(Object(u.a)(Object(u.a)({},y),{},{color:e.hex}))};y.all_day?t=null:w?t=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a.Label,{style:{marginLeft:10,marginTop:5},children:"End Date:"}),Object(h.jsx)(d.a.Control,{id:"end",type:"date",name:"end",placeholder:"End Date"})]}):""!==y.start&&(t=Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a.Label,{style:{marginLeft:10,marginTop:5},children:"Start:"}),Object(h.jsx)(R.a,{id:"start_time",start:"00:00",end:"23:30",step:30,style:{marginTop:-2},onChange:function(e){return function(e){E(e),e>U&&I(e)}(e)},value:L}),Object(h.jsx)(d.a.Label,{style:{marginLeft:10,marginTop:5},children:"End:"}),Object(h.jsx)(R.a,{id:"end_time",start:"00:00",end:"23:30",step:30,style:{marginTop:-2},onChange:function(e){return function(e){I(e>L?e:L)}(e)},value:U})]}));var Z=function(){return r(!1)},$=function(){return z(!1)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(j.a,{show:n,onHide:Z,children:[Object(h.jsx)(j.a.Header,{closeButton:!0,children:Object(h.jsx)(j.a.Title,{children:c.title})}),Object(h.jsxs)(j.a.Body,{children:[Object(h.jsx)("h6",{children:c.desc}),Object(h.jsxs)("h6",{children:["Start: ",c.start.toUTCString().slice(0,-7)]}),Object(h.jsxs)("h6",{children:["End: ",c.end.toUTCString().slice(0,-7)]})]}),Object(h.jsxs)(j.a.Footer,{children:[Object(h.jsx)(b.a,{variant:"secondary",onClick:Z,children:"Close"}),Object(h.jsx)(b.a,{variant:"primary",onClick:function(){C({user_id:o.id,group_id:c.group_id,title:c.title,start:c.start,end:c.end,desc:c.desc,all_day:c.all_day,color:c.color}),r(!1),g(!0)},children:"Edit"}),Object(h.jsx)(b.a,{variant:"danger",onClick:function(){r(!1),z(!0)},children:"Delete"})]})]}),Object(h.jsxs)(j.a,{show:J,onHide:$,children:[Object(h.jsx)(j.a.Header,{closeButton:!0,children:Object(h.jsxs)(j.a.Title,{children:["Are you sure you wish to delete ",c.title,"?"]})}),Object(h.jsxs)(j.a.Body,{children:[Object(h.jsx)(b.a,{variant:"secondary",onClick:$,children:"Cancel"}),Object(h.jsx)(b.a,{variant:"danger",onClick:function(){O(c),z(!1)},style:{float:"right"},children:"Delete"})]})]}),Object(h.jsxs)(j.a,{show:m,onHide:Q,children:[Object(h.jsx)(j.a.Header,{closeButton:!0,children:Object(h.jsxs)(j.a.Title,{children:["Edit ",c.title]})}),Object(h.jsx)(d.a,{onSubmit:function(e){return function(e){e.preventDefault(),s(c,y),g(!1),D(!1),G(!1),E(0),I(0),K(!1),C({user_id:o.id,group_id:null,title:"",start:"",end:"",desc:"",all_day:!1,color:"blue"})}(e)},children:Object(h.jsxs)(d.a.Group,{style:{padding:10},onChange:X,children:[Object(h.jsx)(d.a.Label,{htmlFor:"title",style:{marginTop:5,marginLeft:10},children:"Event Title:"}),Object(h.jsx)(d.a.Control,{type:"text",id:"title","aria-describedby":"titleBlock",value:y.title,onChange:X}),Object(h.jsx)(d.a.Label,{htmlFor:"desc",style:{marginTop:5,marginLeft:10},children:"Description:"}),Object(h.jsx)(d.a.Text,{id:"optionalDesc",muted:!0,style:{marginLeft:5},children:"(optional)"}),Object(h.jsx)(d.a.Control,{type:"text",id:"desc","aria-describedby":"descriptionBlock",value:y.desc,onChange:X}),Object(h.jsx)(d.a.Label,{htmlFor:"color",style:{marginTop:5,marginLeft:10},children:"Color:"}),Object(h.jsx)(W.a,{id:"color",onChangeComplete:X,color:y.color,width:"213px"}),Y?null:Object(h.jsx)(b.a,{style:{marginTop:8},onClick:function(){return C(Object(u.a)(Object(u.a)({},y),{},{all_day:!1})),void K(!0)},children:"Edit Date(s)"}),Object(h.jsx)("br",{}),Y?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a.Label,{style:{marginLeft:10,marginTop:5},children:w?"Stary Date:":"Date:"}),Object(h.jsx)(d.a.Control,{id:"start",type:"date",name:"start",placeholder:"Start Date"}),w?Object(h.jsx)(d.a.Check,{inline:!0,type:"switch",id:"allDayDis",label:"All Day",disabled:!0}):Object(h.jsx)(d.a.Check,{inline:!0,type:"switch",id:"allDay",label:"All Day"}),y.all_day?Object(h.jsx)(d.a.Check,{inline:!0,type:"switch",id:"multiDayDis",label:"Multiple Days",disabled:!0}):Object(h.jsx)(d.a.Check,{inline:!0,type:"switch",id:"multiDay",label:"Multiple Days"}),Object(h.jsx)("br",{}),t]}):null,Object(h.jsxs)(j.a.Footer,{children:[Object(h.jsx)(b.a,{variant:"secondary",onClick:Q,children:"Cancel"}),Object(h.jsx)(b.a,{variant:"success",type:"submit",children:"Confirm"})]})]})})]})]})},q=Object(H.c)(U.a);var V=function(e){var t=e.currentUser,n=Object(a.useState)(null),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)([]),l=Object(i.a)(o,2),j=l[0],d=l[1],b=Object(a.useState)([]),O=Object(i.a)(b,2),p=O[0],f=O[1],m=Object(a.useState)([]),g=Object(i.a)(m,2),x=g[0],v=g[1],y=Object(a.useState)("All"),C=Object(i.a)(y,2),_=C[0],S=C[1],w=Object(a.useState)([]),D=Object(i.a)(w,2),k=D[0],L=D[1],N=Object(a.useState)(!1),U=Object(i.a)(N,2),M=U[0],R=U[1],W=Object(a.useState)(!1),V=Object(i.a)(W,2),Y=V[0],K=V[1],Q=Object(a.useState)([]),X=Object(i.a)(Q,2),Z=X[0],$=X[1];Object(a.useEffect)((function(){fetch("/all_events").then((function(e){return e.json()})).then((function(e){var t=e.all_events.group,n=e.all_events.personal,a=[].concat(Object(E.a)(t),Object(E.a)(n));v(t),f(n),d(a),L(a),$(e.all_events.admins)}))}),[]);var ee=k.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{start:new Date(e.start),end:new Date(e.end)})}));function te(e){return Object(h.jsx)(B.a,Object(u.a)(Object(u.a)({},e),{},{children:Object(h.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}))}return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)(T.b,{to:"/",style:{textDecoration:"none",position:"absolute",marginLeft:20},children:Object(h.jsx)(F.a,{color:"active",size:"small",children:Object(h.jsx)(te,{})})}),Object(h.jsxs)(I.a,{direction:"row",spacing:5,alignItems:"center",justifyContent:"center",children:[Object(h.jsx)(P.a,{variant:"contained",color:"success",onClick:function(){return R(!0)},children:"New Event"}),Object(h.jsxs)(G.a,{color:"primary",value:_,exclusive:!0,onChange:function(e){return function(e){S(e.target.value),"All"===e.target.value?L(j):"Group"===e.target.value?L(x):"Personal"===e.target.value&&L(p)}(e)},children:[Object(h.jsx)(A.a,{value:"All",children:"All"}),Object(h.jsx)(A.a,{value:"Group",children:"Group"}),Object(h.jsx)(A.a,{value:"Personal",children:"Personal"})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)(H.a,{localizer:q,events:ee,startAccessor:"start",endAccessor:"end",style:{height:900},defaultView:H.b.MONTH,selected:c,onSelectEvent:function(e){s(e),K(!0)},eventPropGetter:function(e){return{style:{backgroundColor:e.color}}}}),Object(h.jsx)(J,{showAdd:M,setShowAdd:R,currentUser:t,handleNewEventSubmit:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};e.group_id?fetch("/group_events",t).then((function(e){e.ok?e.json().then((function(e){v([].concat(Object(E.a)(x),[e])),d([].concat(Object(E.a)(j),[e])),"All"!==_&&"Group"!==_||L([].concat(Object(E.a)(k),[e]))})):e.json().then((function(e){alert(e.errors)}))})):fetch("/personal_events",t).then((function(e){e.ok?e.json().then((function(e){f([].concat(Object(E.a)(p),[e])),d([].concat(Object(E.a)(j),[e])),"All"!==_&&"Personal"!==_||L([].concat(Object(E.a)(k),[e]))})):e.json().then((function(e){alert(e.errors)}))}))},adminGroups:Z}),c?Object(h.jsx)(z,{show:Y,setShow:K,event:c,handleEditSubmit:function(e,t){var n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};t.group_id?fetch("/group_events/".concat(e.id),n).then((function(e){e.ok?e.json().then((function(e){var t=x.map((function(t){return t.id===e.id?e:t})),n=j.map((function(t){return t.group_id&&t.id===e.id?e:t}));v(t),d(n),"All"===_?L(n):"Group"===_&&L(t)})):e.json().then((function(e){alert(e.errors)}))})):fetch("/personal_events/".concat(e.id),n).then((function(e){e.ok?e.json().then((function(e){var t=p.map((function(t){return t.id===e.id?e:t})),n=j.map((function(t){return t.group_id||t.id!==e.id?t:e}));f(t),d(n),"All"===_?L(n):"Personal"===_&&L(t)})):e.json().then((function(e){alert(e.errors)}))}))},currentUser:t,handleDeleteEvent:function(e){e.group_id?fetch("/group_events/".concat(e.id),{method:"DELETE"}).then((function(t){if(t.ok){var n=j.filter((function(t){return!t.group_id||t.id!==e.id})),a=x.filter((function(t){return t.id!==e.id}));v(a),d(n),"All"===_?L(n):"Group"===_&&L(a)}else t.json().then((function(e){alert(e.errors)}))})):fetch("/personal_events/".concat(e.id),{method:"DELETE"}).then((function(t){if(t.ok){var n=j.filter((function(t){return t.group_id||t.id!==e.id})),a=p.filter((function(t){return t.id!==e.id}));f(a),d(n),"All"===_?L(n):"Personal"===_&&L(a)}else t.json().then((function(e){alert(e.errors)}))}))}}):null]})};var Y=function(e){var t,n=e.user,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],o=c[1],l=Object(a.useState)(null),u=Object(i.a)(l,2),d=u[0],b=u[1];return d&&(t=d.all_groups.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{src:e.group_picture,className:"group-prof-pic",alt:e.name}),e.name]})}))),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"group-prof",onClick:function(){fetch("/users/".concat(n.id)).then((function(e){return e.json()})).then((function(e){b(e),console.log(e)})),o(!0)},children:[Object(h.jsx)("img",{src:n.profile_picture,className:"group-prof-pic",alt:n.username}),Object(h.jsx)("div",{title:n.username,children:n.username})]}),Object(h.jsxs)(j.a,{show:s,onHide:function(){return o(!1)},children:[Object(h.jsxs)(j.a.Header,{closeButton:!0,children:[Object(h.jsx)("img",{src:n.profile_picture,className:"group-prof-pic",alt:n.username}),Object(h.jsx)(j.a.Title,{children:n.username})]}),Object(h.jsxs)(j.a.Body,{children:[Object(h.jsxs)("h5",{children:["Birthday: ",n.birthday]}),Object(h.jsxs)("p",{children:["Bio: ",n.bio]}),Object(h.jsxs)("h6",{children:["Servers ",n.username," is in:"]}),Object(h.jsx)("ul",{children:t})]})]})]})},K=n(437);var Q=function(e){var t,n=e.message,r=e.groupID,c=Object(a.useState)(!1),s=Object(i.a)(c,2),o=s[0],l=s[1],u=Object(a.useState)(),d=Object(i.a)(u,2),b=d[0],O=d[1];return b&&(t=b.all_groups.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("img",{src:e.group_picture,className:"group-prof-pic",alt:e.name}),e.name]})}))),n.group.id==r||n.group_id==r?(console.log(n),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"user-text",onClick:function(){fetch("/users/".concat(n.user.id)).then((function(e){return e.json()})).then((function(e){return O(e)})),l(!0)},children:[Object(h.jsx)("img",{className:"group-prof-pic",src:n.user.profile_picture}),Object(h.jsxs)("p",{className:"text-text",children:[n.user.username,": ",n.message]})]}),Object(h.jsxs)(j.a,{show:o,onHide:function(){return l(!1)},children:[Object(h.jsxs)(j.a.Header,{closeButton:!0,children:[Object(h.jsx)("img",{src:n.user.profile_picture,className:"group-prof-pic",alt:n.user.username}),Object(h.jsx)(j.a.Title,{children:n.user.username})]}),Object(h.jsxs)(j.a.Body,{children:[Object(h.jsxs)("h5",{children:["Birthday: ",n.user.birthday]}),Object(h.jsxs)("p",{children:["Bio: ",n.user.bio]}),Object(h.jsxs)("h6",{children:["Servers ",n.user.username," is in:"]}),Object(h.jsx)("ul",{children:t})]})]})]})):null};var X=function(e){var t=e.currentUser,n=Object(a.useState)(null),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],b=Object(a.useState)([]),O=Object(i.a)(b,2),p=O[0],f=O[1],m=localStorage.getItem("groupId");Object(a.useEffect)((function(){fetch("/groups/".concat(m)).then((function(e){return e.json()})).then((function(e){s(e),d(e.user_bool)}))}),[]);var g=Object(a.useState)(),x=Object(i.a)(g,2),v=x[0],y=x[1];function C(e){return Object(h.jsx)(B.a,Object(u.a)(Object(u.a)({},e),{},{children:Object(h.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}))}if(Object(a.useEffect)((function(){fetch("/messages").then((function(e){return e.json()})).then((function(e){f(e)}))}),[]),c){var _,S=null===(_=c.all_users)||void 0===_?void 0:_.map((function(e){return Object(h.jsx)(Y,{user:e},e.id)})),w=p.map((function(e){return Object(h.jsx)(Q,{currentUser:t,message:e,groupID:m})}));return Object(h.jsxs)("div",{children:[Object(h.jsx)(T.b,{to:"/",style:{textDecoration:"none",position:"absolute",marginLeft:20},children:Object(h.jsx)(F.a,{color:"active",size:"small",children:Object(h.jsx)(C,{})})}),Object(h.jsx)("h1",{style:{margin:"auto",textAlign:"center"},children:c.name}),S,w,Object(h.jsx)("div",{children:j?Object(h.jsx)(K.a,{fullWidth:!0,id:"outlined-multiline-flexible",label:"Send Message",multiline:!0,maxRows:1,value:v,onChange:function(e){y(e.target.value)},onKeyPress:function(e){if("Enter"===e.key){var n={group_id:m,message:e.target.value,user_id:t.id};fetch("/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){f([].concat(Object(E.a)(p),[e])),y("")}))}},style:{position:"fixed",bottom:0,width:"100%"}}):Object(h.jsx)(P.a,{variant:"contained",onClick:function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t.id,group_id:m})};fetch("/joined_groups",e).then((function(e){e.ok?d(!0):e.json().then((function(e){console.log(e)}))}))},children:"Join Group"})})]})}return null};var Z=function(e){var t=e.setCurrentUser,n=e.currentUser,r=Object(a.useState)(),c=Object(i.a)(r,2),s=c[0],l=c[1];return Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",element:Object(h.jsx)(L,{setCurrentUser:t,currentUser:n,setGroupId:l})}),Object(h.jsx)(o.a,{path:"/calendar",element:Object(h.jsx)(V,{currentUser:n})}),Object(h.jsx)(o.a,{path:"/group",element:Object(h.jsx)(X,{groupId:s,currentUser:n})})]})};var $=function(){var e=Object(o.f)();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"planit-title",children:"PLANIT"}),Object(h.jsxs)("div",{className:"login-buttons",children:[Object(h.jsx)(b.a,{onClick:function(){console.log("login"),e("/login")},style:{marginRight:"5%"},children:"Login"}),Object(h.jsx)(b.a,{variant:"info",onClick:function(){console.log("signup"),e("/signup")},style:{marginLeft:"5%"},children:"Signup"})]})]})},ee=n(443),te=n(436),ne=n(450),ae=n(444),re=n(448),ce=n(164),se=n.n(ce),ie=n(449),oe=n(447);var le=function(e){var t=e.setCurrentUser,n=Object(a.useState)({username:"",password:""}),r=Object(i.a)(n,2),c=r[0],s=r[1],l=Object(o.f)();return Object(h.jsxs)(oe.a,{component:"main",maxWidth:"xs",children:[Object(h.jsx)(te.a,{}),Object(h.jsxs)(re.a,{sx:{marginTop:20,marginLeft:-9,display:"flex",flexDirection:"column",alignItems:"center",position:"absolute"},children:[Object(h.jsx)(ee.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(h.jsx)(se.a,{})}),Object(h.jsx)(ie.a,{component:"h1",variant:"h5",children:"Log In"}),Object(h.jsxs)(re.a,{component:"form",onSubmit:function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)};fetch("/login",n).then((function(e){e.ok?e.json().then((function(e){t(e),l("/")})):e.json().then((function(e){alert(e.error)}))})),s({username:"",password:""})},noValidate:!0,sx:{mt:1},children:[Object(h.jsx)(K.a,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",value:c.username,onChange:function(e){return s(Object(u.a)(Object(u.a)({},c),{},{username:e.target.value}))},style:{backgroundColor:"#dbdbdb",borderRadius:10}}),Object(h.jsx)(K.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:c.password,onChange:function(e){return s(Object(u.a)(Object(u.a)({},c),{},{password:e.target.value}))},style:{backgroundColor:"#dbdbdb",borderRadius:10}}),Object(h.jsx)(P.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Log In"}),Object(h.jsx)(ae.a,{container:!0,children:Object(h.jsx)(ae.a,{item:!0,children:Object(h.jsx)(ne.a,{href:"/signup",variant:"body2",style:{color:"#ffffff",textDecoration:"none"},children:"Don't have an account? Sign Up"})})}),Object(h.jsx)(ae.a,{container:!0,children:Object(h.jsx)(ae.a,{item:!0,children:Object(h.jsx)(ne.a,{href:"/",variant:"body2",style:{color:"#ffffff",textDecoration:"none"},children:"Home"})})})]})]})]})};var ue=function(e){var t=e.setCurrentUser,n=Object(a.useState)({username:"",password:"",password_confirmation:""}),r=Object(i.a)(n,2),c=r[0],s=r[1],j=Object(o.f)(),d=function(e){s(Object(u.a)(Object(u.a)({},c),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(h.jsxs)(oe.a,{component:"main",maxWidth:"xs",children:[Object(h.jsx)(te.a,{}),Object(h.jsxs)(re.a,{sx:{marginTop:18,marginLeft:-15,display:"flex",flexDirection:"column",alignItems:"center",position:"absolute"},children:[Object(h.jsx)(ee.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(h.jsx)(se.a,{})}),Object(h.jsx)(ie.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(h.jsxs)(re.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)};fetch("/signup",n).then((function(e){e.ok?e.json().then((function(e){console.log(e),t(e),j("/")})):e.json().then((function(e){alert(e.errors)}))})),s({username:"",password:"",password_confirmation:""})},sx:{mt:3},children:[Object(h.jsxs)(ae.a,{container:!0,spacing:2,children:[Object(h.jsx)(ae.a,{item:!0,xs:12,children:Object(h.jsx)(K.a,{autoComplete:"username",name:"username",required:!0,fullWidth:!0,id:"username",label:"Username",onChange:function(e){return d(e)},value:c.username,style:{backgroundColor:"#dbdbdb",borderRadius:10}})}),Object(h.jsx)(ae.a,{item:!0,xs:12,children:Object(h.jsx)(K.a,{required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"new-password",type:"password",onChange:function(e){return d(e)},value:c.password,style:{backgroundColor:"#dbdbdb",borderRadius:10}})}),Object(h.jsx)(ae.a,{item:!0,xs:12,children:Object(h.jsx)(K.a,{required:!0,fullWidth:!0,name:"password_confirmation",label:"Confirm Password",type:"password",id:"password_confirmation",autoComplete:"confirm-password",onChange:function(e){return d(e)},value:c.password_confirmation,style:{backgroundColor:"#dbdbdb",borderRadius:10}})})]}),Object(h.jsx)(P.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(h.jsx)(ae.a,{container:!0,justifyContent:"flex-end",children:Object(h.jsx)(ae.a,{item:!0,children:Object(h.jsx)(ne.a,{href:"/login",variant:"body2",style:{color:"#ffffff",textDecoration:"none"},children:"Already have an account? Log in"})})}),Object(h.jsx)(ae.a,{container:!0,justifyContent:"flex-end",children:Object(h.jsx)(ae.a,{item:!0,children:Object(h.jsx)(ne.a,{href:"/",variant:"body2",style:{color:"#ffffff",textDecoration:"none"},children:"Home"})})})]})]})]})};var je=function(e){var t=e.setCurrentUser;return Object(h.jsx)("div",{className:"logged-out",children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",element:Object(h.jsx)($,{})}),Object(h.jsx)(o.a,{path:"/login",element:Object(h.jsx)(le,{setCurrentUser:t})}),Object(h.jsx)(o.a,{path:"/signup",element:Object(h.jsx)(ue,{setCurrentUser:t})})]})})};n(390);var de=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(i.a)(c,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){fetch("/me",{credentials:"include"}).then((function(e){e.ok?e.json().then((function(e){r(e),l(!0)})):l(!0)}))}),[]),o?Object(h.jsx)(h.Fragment,{children:n?Object(h.jsx)(Z,{setCurrentUser:r,currentUser:n}):Object(h.jsx)(je,{setCurrentUser:r,currentUser:n})}):Object(h.jsx)("div",{})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,451)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},he=n(248),Oe=n(440),pe=Object(he.a)({});s.a.render(Object(h.jsx)(T.a,{children:Object(h.jsx)(Oe.a,{theme:pe,children:Object(h.jsx)(de,{})})}),document.getElementById("root")),be()}},[[391,1,2]]]);
//# sourceMappingURL=main.966e32ed.chunk.js.map