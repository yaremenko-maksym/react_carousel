(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),s=n(2),r=n(3),c=n(5),o=n(4),l=n(1),u=n.n(l),m=(n(12),n(13),n(0)),h=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={counter:0},e.scrollRight=function(){e.setState((function(t){var n=e.props,a=n.images,i=n.step,s=n.infinite,r=n.frameSize;return t.counter>a.length-2*i&&t.counter<a.length-i?{counter:a.length-r}:t.counter===a.length-r?s?{counter:0}:{counter:t.counter}:{counter:t.counter+i}}))},e.scrollLeft=function(){e.setState((function(t){var n=e.props,a=n.images,i=n.step,s=n.infinite;return t.counter<i&&t.counter>0?{counter:0}:0===t.counter?s?{counter:a.length-i}:{counter:t.counter}:{counter:t.counter-i}}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.itemWidth,a=e.frameSize,i=e.animationDuration,s=this.state.counter;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"Carousel",style:{width:"".concat(n*a,"px")},children:Object(m.jsx)("ul",{className:"Carousel__list",style:{transition:"all ".concat(i,"ms"),transform:"translateX(".concat(-n*s,"px)"),width:"".concat(n*t.length,"px")},children:t.map((function(e,t){return Object(m.jsx)("li",{className:"Carousel__item",children:Object(m.jsx)("img",{src:e,alt:e[t+1],style:{width:"".concat(n,"px"),height:"".concat(100,"%")}})},e)}))})}),Object(m.jsxs)("div",{className:"nav-buttons",children:[Object(m.jsx)("button",{type:"button",onClick:this.scrollLeft,className:"button",children:Object(m.jsx)("p",{className:"button__text",children:"LEFT"})}),Object(m.jsx)("button",{type:"button",onClick:this.scrollRight,className:"button",children:Object(m.jsx)("p",{className:"button__text",children:"RIGHT"})})]})]})}}]),n}(u.a.Component),p=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1},e.submitChanges=function(t){t.preventDefault();var n=t.target.value,a=!1;switch(t.target.name){case"itemWidth":e.setState({itemWidth:+n});break;case"frameSize":e.setState({frameSize:+n});break;case"step":e.setState({step:+n});break;case"animationDuration":e.setState({animationDuration:+n});break;case"infinite":"true"===n&&(a=!0),e.setState({infinite:a});break;default:e.setState({itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1})}},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.itemWidth,a=e.frameSize,i=e.step,s=e.animationDuration,r=e.infinite;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{className:"App__title",children:["Carousel with ",t.length," images"]}),Object(m.jsx)(h,{images:t,itemWidth:n,frameSize:a,step:i,animationDuration:s,infinite:r}),Object(m.jsxs)("form",{method:"get",className:"controlls",children:["Change properties:",Object(m.jsx)("label",{children:Object(m.jsx)("input",{name:"itemWidth",type:"number",min:"20",placeholder:"Images Width (px)",defaultValue:n,required:!0,className:"controlls__input",onChange:this.submitChanges})}),Object(m.jsx)("label",{children:Object(m.jsx)("input",{name:"frameSize",type:"number",min:"1",max:t.length,placeholder:"Frame Size",defaultValue:a,required:!0,className:"controlls__input",onChange:this.submitChanges})}),Object(m.jsx)("label",{children:Object(m.jsx)("input",{name:"step",type:"number",min:"1",max:t.length,placeholder:"Scroll Step",defaultValue:i,required:!0,className:"controlls__input",onChange:this.submitChanges})}),Object(m.jsx)("label",{children:Object(m.jsx)("input",{name:"animationDuration",type:"number",placeholder:"Animation Duration (ms)",defaultValue:s,required:!0,className:"controlls__input",onChange:this.submitChanges})}),Object(m.jsx)("label",{children:Object(m.jsxs)("select",{name:"infinite",defaultValue:"Choose option",required:!0,className:"controlls__input",onChange:this.submitChanges,children:[Object(m.jsx)("option",{disabled:!0,children:"Choose option"}),Object(m.jsx)("option",{value:"true",children:"True"}),Object(m.jsx)("option",{value:"false",children:"False"})]})})]})]})}}]),n}(u.a.Component),b=p;i.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a8dda497.chunk.js.map