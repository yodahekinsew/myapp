(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},101:function(e,t,n){e.exports=n.p+"static/media/about_me_page_1.9a177bb3.png"},102:function(e,t,n){e.exports=n.p+"static/media/about_me_page_2.b5c6c33e.png"},184:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(31),r=n.n(i),c=n(21),s={tab:"home",showMenu:"closed",menuButton:">"},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TAB":return Object.assign({},e,{tab:t.tab});case"CHANGE_SHOWMENU":return Object.assign({},e,{showMenu:t.showMenu});case"CHANGE_MENUBUTTON":return Object.assign({},e,{menuButton:t.menuButton});default:return e}},l=Object(c.b)({newState:u}),h=n(1),d=(n(97),n(2)),b=n(3),g=n(5),p=n(4),m=n(6),f=(n(10),n(65)),v=n.n(f),k=n(66),w=n.n(k),y=n(67),E=n.n(y),j=n(14),S=function(e){return{type:"CHANGE_TAB",tab:e}},O=function(e){return{type:"CHANGE_SHOWMENU",showMenu:e}},x=function(e){return{type:"CHANGE_MENUBUTTON",menuButton:e}},T=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this.props.func,style:this.props.style},o.a.createElement("header",{style:{color:"white"}},this.props.text))}}]),t}(a.Component),_={changeTab:S},M=Object(h.b)(function(e){return{tab:e.newState.tab,menuButton:e.newState.menuButton}},_)(T),C=n(16),A=n(15);function I(){var e=Object(j.a)(["\n  position: absolute;\n  height: .5vh;\n  width: 2.5vw;\n  background-color: white;\n"]);return I=function(){return e},e}function z(){var e=Object(j.a)(["\n  position: absolute;\n  height: .5vh;\n  width: 2.5vw;\n  background-color: white;\n"]);return z=function(){return e},e}function B(){var e=Object(j.a)(["\n  positon: absolute;\n  height: .5vh;\n  width: 2.5vw;\n  background-color: white;\n"]);return B=function(){return e},e}function R(){var e=Object(j.a)(["\n  background-color: rgba(0,0,0,.85);\n  width: 3vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  align-items: center;\n"]);return R=function(){return e},e}var P=Object(A.a)(C.a.div({">":{marginLeft:"0vw"},"<":{marginLeft:"15vw"}}))(R()),L=Object(A.a)(C.a.div({"<":{transform:"rotate(45deg)",marginTop:"1.25vh"},">":{transform:"rotate(0deg)",marginTop:"0vh"}}))(B()),V=Object(A.a)(C.a.div({"<":{marginTop:"3.5vh"},">":{marginTop:"1.25vh"}}))(z()),N=Object(A.a)(C.a.div({"<":{transform:"rotate(-45deg)",marginTop:"1.25vh"},">":{transform:"rotate(0deg)",marginTop:"2.5vh"}}))(I()),D=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(P,{pose:this.props.menuButton},o.a.createElement(M,{style:{marginTop:"1vh"},text:o.a.createElement("div",{style:{display:"flex",position:"relative",flexDirection:"column",height:"3vh",width:"2.5vw"}},o.a.createElement(L,{pose:this.props.menuButton}),o.a.createElement(V,{pose:this.props.menuButton}),o.a.createElement(N,{pose:this.props.menuButton})),func:function(){"<"===e.props.menuButton?(e.props.changeShowMenu("closed"),e.props.changeMenuButton(">")):">"===e.props.menuButton&&(e.props.changeShowMenu("open"),e.props.changeMenuButton("<"))}}))}}]),t}(a.Component),H={changeTab:S,changeShowMenu:O,changeMenuButton:x},F=Object(h.b)(function(e){return{tab:e.newState.tab,showMenu:e.newState.showMenu,menuButton:e.newState.menuButton}},H)(D),J=n(70),U=n.n(J),G=n(71),W=n.n(G),Y=n(72),K=n.n(Y),X=n(73),$=n.n(X);function q(){var e=Object(j.a)(["\n  background-color: rgba(0,0,0,.85);\n  position: fixed;\n  height: 100vh;\n  width: 15vw;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);return q=function(){return e},e}var Q=Object(A.a)(C.a.div({closed:{marginLeft:"-15vw"},open:{marginLeft:0}}))(q()),Z=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(g.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).onHover=function(e){console.log("hovering"),setTimeout(n.props.changeTab(e),1e3),n.props.changeTab(e)},n}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(Q,{pose:this.props.showMenu},o.a.createElement("div",{style:{marginTop:"2vh",marginRight:"10vw"}},o.a.createElement("img",{alt:"",src:U.a,onClick:function(){e.props.changeTab("home"),window.scrollTo(0,0),setTimeout(function(){e.props.changeShowMenu("closed"),e.props.changeMenuButton(">")},150)},style:{width:"10vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})),o.a.createElement("div",{style:{marginTop:"10vh",marginRight:"10vw"}},o.a.createElement("img",{alt:"",src:W.a,onClick:function(){e.props.changeTab("aboutMe"),window.scrollTo(0,0),setTimeout(function(){e.props.changeShowMenu("closed"),e.props.changeMenuButton(">")},150)},style:{width:"10vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})),o.a.createElement("div",{style:{marginTop:"10vh",marginRight:"14vw"}},o.a.createElement("img",{alt:"",src:K.a,onClick:function(){e.props.changeTab("coolStuff"),window.scrollTo(0,0),setTimeout(function(){e.props.changeShowMenu("closed"),e.props.changeMenuButton(">")},150)},style:{width:"14vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})),o.a.createElement("div",{style:{marginTop:"17vh",marginRight:"10vw"}},o.a.createElement("img",{alt:"",src:$.a,onClick:function(){e.props.changeTab("hireMe"),window.scrollTo(0,0),setTimeout(function(){e.props.changeShowMenu("closed"),e.props.changeMenuButton(">")},150)},style:{width:"10vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})),o.a.createElement("div",{style:{marginTop:"50vh"}},o.a.createElement("header",{style:{color:"white",textDecoration:"underline"}},"Contact Me"),o.a.createElement("header",{style:{color:"white"}},"Email: ",o.a.createElement("a",{href:"mailto:yodahekinsew@gmail.com"},"yodahekinsew@gmail.com")),o.a.createElement("header",{style:{color:"white"}},"Phone: (720) 490-2350"),o.a.createElement("header",{style:{color:"white"}},"LinkedIn: ",o.a.createElement("a",{href:"https://www.linkedin.com/in/yodahe-alemu/"},"Yodahe Alemu"))))}}]),t}(a.Component),ee={changeTab:S,changeShowMenu:O,changeMenuButton:x},te=Object(h.b)(function(e){return{tab:e.newState.tab,showMenu:e.newState.showMenu}},ee)(Z),ne=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{zIndex:"1",height:"100vh",width:"5vw",position:"absolute"}},o.a.createElement(te,null),o.a.createElement(F,null))}}]),t}(a.Component),ae={changeTab:S,changeShowMenu:O},oe=Object(h.b)(function(e){return{tab:e.newState.tab,showMenu:e.newState.showMenu}},ae)(ne),ie=o.a.createElement("img",{alt:"",src:v.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),re=o.a.createElement("img",{alt:"",src:w.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),ce=o.a.createElement("img",{alt:"",src:E.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),se=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(g.a)(this,Object(p.a)(t).call(this))).state={background:ie,tracker:1,show_menu:!1},setInterval(function(){1===e.state.tracker?e.setState({background:re,tracker:2}):2===e.state.tracker?e.setState({background:ce,tracker:3}):e.setState({background:ie,tracker:1})},100),e}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.background,o.a.createElement(oe,null))}}]),t}(a.Component),ue={changeTab:S,changeShowMenu:O},le=Object(h.b)(function(e){return{tab:e.newState.tab,showMenu:e.newState.showMenu}},ue)(se),he=n(74),de=n.n(he),be=n(75),ge=n.n(be),pe=n(76),me=n.n(pe),fe=(n(101),n(102),o.a.createElement("img",{alt:"",src:de.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})),ve=o.a.createElement("img",{alt:"",src:ge.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),ke=o.a.createElement("img",{alt:"",src:me.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),we=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(g.a)(this,Object(p.a)(t).call(this))).state={background:fe,tracker:1,show_menu:!1,tab:1},setInterval(function(){1===e.state.tracker?e.setState({background:ve,tracker:2}):2===e.state.tracker?e.setState({background:ke,tracker:3}):e.setState({background:fe,tracker:1})},100),e}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=1===this.state.tab?"#000000":"#a2a2a2",n=2===this.state.tab?"#000000":"#a2a2a2",a=3===this.state.tab?"#000000":"#a2a2a2";return console.log(this.state.tab),console.log(t),console.log(n),console.log(a),o.a.createElement("div",{style:{height:"100vh",width:"100vw"}},o.a.createElement(oe,null),o.a.createElement("div",{style:{height:"100vh",width:"100vw",position:"relative"}},this.state.background,o.a.createElement("pre",{style:{marginLeft:"50vw",marginTop:"10vh",position:"absolute",height:"80vh",width:"45vw"}},o.a.createElement("div",{style:{height:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-start"}},o.a.createElement(M,{style:{heigth:"100%",fontSize:"1vmax",fontFamily:"monospace",width:"33.3%",backgroundColor:t,color:"white",display:"flex",alignItems:"center",justifyContent:"center"},text:"My Background",func:function(){e.setState({tab:1})}}),o.a.createElement(M,{style:{heigth:"100%",fontSize:"1vmax",fontFamily:"monospace",width:"33.3%",backgroundColor:n,color:"white",display:"flex",alignItems:"center",justifyContent:"center"},text:"My Skills",func:function(){e.setState({tab:2})}}),o.a.createElement(M,{style:{heigth:"100%",fontSize:"1vmax",fontFamily:"monospace",width:"33.4%",backgroundColor:a,color:"white",display:"flex",alignItems:"center",justifyContent:"center"},text:"My Interests",func:function(){e.setState({tab:3})}})),o.a.createElement("div",{style:{height:"95%",width:"100%",backgroundColor:"black",color:"white",padding:"5%",fontSize:".9vmax",fontFamily:"monospace"}},1==this.state.tab?"Hello! My name is Yodahe Alemu!\nI am an Ethiopian from Aurora, Colorado.\n\nI am currently a sophomore at MIT (Massachusetts Institute of Technology)\nstudying Computer Science and Urban and International Development\nand also concentrating in design and economics.\n\nI'm currently doing research with the\nViral Communications group at the MIT Media Lab\n\nWhen I'm not in class or doing research,I'm either\nworking on MIT's fashion magazine - The INFINITE,\ndancing with MIT's DanceTroupe,\nor working on my own personal projects!":2===this.state.tab?"In terms of computer science, I have experience in both\n\n\tBackend Development:\n\t\tJava\n\t\tNode Js\n\t\tAPI Usage\nand\n\n\tFrontend Development:\n\t\tJavaScript\n\t\tHTML and CSS\n\t\tReactJS\n\t\tReact Native":"I am interested in:\n\tUI/UX\n\tArtifical Intelligence\n\tSocial Technology"))))}}]),t}(a.Component),ye={changeTab:S,changeShowMenu:O},Ee=Object(h.b)(function(e){return{tab:e.newState.tab,showMenu:e.newState.showMenu}},ye)(we),je=n(77),Se=n.n(je),Oe=n(78),xe=n.n(Oe),Te=n(79),_e=n.n(Te),Me=n(80),Ce=n.n(Me),Ae=o.a.createElement("img",{alt:"",src:Ce.a,style:{height:"15vh",width:"80vw",marginLeft:"5vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Ie=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{backgroundColor:"#a2a2a2",height:"100vh",width:"100vw"}},Ae,o.a.createElement("div",{style:{position:"relative",marginLeft:"10vw",paddingTop:"20vh",fontSize:"5vmin"}},o.a.createElement("pre",{style:{position:"absolute",backgroundColor:"white",height:"70vh",width:"80vw"}},"In Development..."),o.a.createElement("pre",{style:{position:"absolute",color:"white",backgroundColor:"black",display:"inline",border:"1px solid black",height:"70vh",width:"20vw",marginLeft:"60vw"}},"Description")))}}]),t}(a.Component),ze={changeTab:S},Be=Object(h.b)(function(e){return{tab:e.newState.tab}},ze)(Ie),Re=n(81),Pe=n.n(Re),Le=o.a.createElement("img",{alt:"",src:Pe.a,style:{height:"15vh",width:"80vw",marginLeft:"5vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Ve=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{backgroundColor:"#a2a2a2",height:"100vh",width:"100vw"}},Le,o.a.createElement("div",{style:{position:"relative",marginLeft:"10vw",paddingTop:"20vh",fontSize:"5vmin"}},o.a.createElement("pre",{style:{position:"absolute",backgroundColor:"white",height:"70vh",width:"80vw"}},"In Development..."),o.a.createElement("pre",{style:{position:"absolute",color:"white",backgroundColor:"black",display:"inline",border:"1px solid black",height:"70vh",width:"20vw",marginLeft:"60vw"}},"Description...")))}}]),t}(a.Component),Ne={changeTab:S},De=Object(h.b)(function(e){return{tab:e.newState.tab}},Ne)(Ve),He=n(82),Fe=n.n(He),Je=o.a.createElement("img",{alt:"",src:Fe.a,style:{height:"15vh",width:"80vw",marginLeft:"5vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Ue=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{backgroundColor:"#a2a2a2",height:"100vh",width:"100vw"}},Je,o.a.createElement("div",{style:{marginLeft:"10vw",position:"relative",paddingTop:"20vh",fontSize:"5vmin"}},o.a.createElement("pre",{style:{backgroundColor:"white",position:"absolute",height:"70vh",width:"60vw"}},"In Development..."),o.a.createElement("pre",{style:{position:"absolute",color:"white",backgroundColor:"black",display:"inline",border:"1px solid black",height:"70vh",width:"20vw",marginLeft:"60vw"}},"Description")))}}]),t}(a.Component),Ge={changeTab:S},We=Object(h.b)(function(e){return{tab:e.newState.tab}},Ge)(Ue),Ye=o.a.createElement("img",{alt:"",src:Se.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Ke=o.a.createElement("img",{alt:"",src:xe.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Xe=o.a.createElement("img",{alt:"",src:_e.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),$e=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(g.a)(this,Object(p.a)(t).call(this))).state={background:Ye,tracker:1,show_menu:!1},setInterval(function(){1===e.state.tracker?e.setState({background:Ke,tracker:2}):2===e.state.tracker?e.setState({background:Xe,tracker:3}):e.setState({background:Ye,tracker:1})},100),e}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{position:"absolute",height:"100vh",width:"100vw"}},this.state.background,o.a.createElement(oe,null),o.a.createElement("div",{style:{marginTop:"100vh"}},o.a.createElement(Be,null),o.a.createElement(De,null),o.a.createElement(We,null)))}}]),t}(a.Component),qe={changeTab:S,changeShowMenu:O},Qe=Object(h.b)(function(e){return{tab:e.newState.tab,showMenu:e.newState.showMenu}},qe)($e),Ze=n(83),et=n.n(Ze),tt=n(84),nt=n.n(tt),at=n(85),ot=n.n(at),it=n(86),rt=n.n(it),ct=n(87),st=n.n(ct),ut=n(88),lt=n.n(ut),ht=n(45),dt=n.n(ht),bt=o.a.createElement("img",{alt:"",src:et.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),gt=o.a.createElement("img",{alt:"",src:nt.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),pt=o.a.createElement("img",{alt:"",src:ot.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),mt=o.a.createElement("img",{alt:"",src:rt.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),ft=o.a.createElement("img",{alt:"",src:st.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),vt=o.a.createElement("img",{alt:"",src:lt.a,style:{height:"100vh",width:"100vw",position:"absolute",backgroundAttachment:"fixed",backfaceVisibility:"hidden",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),kt=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(g.a)(this,Object(p.a)(t).call(this))).handleTab=function(t){if(9===t.keyCode){var n=e.state.emailText;e.setState({emailText:n+"\t"}),t.preventDefault(),console.log(e.state.emailText)}},e.state={email:"From: ",subject:"You got the job!",emailText:"",background:bt,tracker:1,show_menu:!1},setInterval(function(){1===e.state.tracker?e.setState({background:gt,tracker:2}):2===e.state.tracker?e.setState({background:pt,tracker:3}):3===e.state.tracker?e.setState({background:mt,tracker:4}):4===e.state.tracker?e.setState({background:ft,tracker:5}):5===e.state.tracker?e.setState({background:vt,tracker:6}):e.setState({background:bt,tracker:1})},100),e}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.background,o.a.createElement("div",{style:{height:"100vh",width:"100vw",position:"absolute"}},o.a.createElement(oe,null),o.a.createElement("div",{style:{marginLeft:"50vw",marginTop:"30vh",height:"60vh",width:"40vw",position:"absolute"}},o.a.createElement("div",{style:{height:"10%",width:"100%",paddingTop:"3.5%",backgroundColor:"rgba(0,0,0,.8)"}},o.a.createElement("pre",{style:{overflow:"hidden",height:"80%",width:"90%",paddingLeft:"3%",paddingRight:"5%",paddingTop:".6%",marginLeft:"5%",backgroundColor:"black"}},o.a.createElement("header",{style:{color:"white",fontFamily:"monospace"}},"To: yodahekinsew@gmail.com"))),o.a.createElement("div",{style:{height:"10%",width:"100%",backgroundColor:"rgba(0,0,0,.8)"}},o.a.createElement("pre",{style:{overflow:"hidden",height:"60%",width:"90%",paddingLeft:"3%",paddingRight:"5%",paddingTop:".6%",marginLeft:"5%",backgroundColor:"black"}},o.a.createElement(dt.a,{fullWidth:!0,value:this.state.email,onChange:function(t){e.setState({email:t.target.value})},style:{color:"white",fontFamily:"monospace",fontSize:"1.5vmin"}}))),o.a.createElement("div",{style:{height:"70%",width:"100%",paddingTop:"4%",backgroundColor:"rgba(0,0,0,.7)"}},o.a.createElement("pre",{style:{overflow:"hidden",height:"90%",width:"90%",marginLeft:"5%",paddingLeft:"3%",paddingRight:"5%",paddingTop:"1%"}},o.a.createElement(dt.a,{onKeyDown:function(t){e.handleTab(t)},multiline:!0,value:this.state.emailText,onChange:function(t){e.setState({emailText:t.target.value})},placeholder:"Type a message here!\nFor example, you could say something like...\n\n\nHello Yodahe,\n\nSuch a cool website! Just wanted to let you know that you got the job! Of course you did - who else could?\n\nBest,\nMy President",rows:20,fullWidth:!0,style:{overflow:"hidden",fontFamily:"monospace",fontSize:"1.5vmin"}}))))))}}]),t}(a.Component),wt={changeTab:S,changeShowMenu:O},yt=Object(h.b)(function(e){return{tab:e.newState.tab,showMenu:e.newState.showMenu}},wt)(kt),Et=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"home"===this.props.tab?o.a.createElement(le,{id:"home"}):"aboutMe"===this.props.tab?o.a.createElement(Ee,{id:"aboutme"}):"coolStuff"===this.props.tab?o.a.createElement(Qe,{id:"coolstuff"}):o.a.createElement(yt,{id:"hireme"}))}}]),t}(a.Component),jt={changeTab:S},St=Object(h.b)(function(e){return{tab:e.newState.tab}},jt)(Et);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ot=Object(c.c)(l);r.a.render(o.a.createElement(h.a,{store:Ot},o.a.createElement(St,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,n){e.exports=n.p+"static/media/home_background_1.e78e9f3a.png"},66:function(e,t,n){e.exports=n.p+"static/media/home_background_2.20362662.png"},67:function(e,t,n){e.exports=n.p+"static/media/home_background_3.1c4adec4.png"},70:function(e,t,n){e.exports=n.p+"static/media/home_menu.d1d0c709.png"},71:function(e,t,n){e.exports=n.p+"static/media/about_me_menu.7b39a72e.png"},72:function(e,t,n){e.exports=n.p+"static/media/cool_stuff_menu.1aa2d3c7.png"},73:function(e,t,n){e.exports=n.p+"static/media/hire_me_menu.f67d6615.png"},74:function(e,t,n){e.exports=n.p+"static/media/about_me_background1_sm.8f2f8746.png"},75:function(e,t,n){e.exports=n.p+"static/media/about_me_background2_sm.21037b60.png"},76:function(e,t,n){e.exports=n.p+"static/media/about_me_background3_sm.ab42a4bb.png"},77:function(e,t,n){e.exports=n.p+"static/media/cool_stuff_background1.95dc089a.JPG"},78:function(e,t,n){e.exports=n.p+"static/media/cool_stuff_background2.fbdcf4c6.JPG"},79:function(e,t,n){e.exports=n.p+"static/media/cool_stuff_background3.0bde9e47.JPG"},80:function(e,t,n){e.exports=n.p+"static/media/soundclout_icon.33efe8e1.png"},81:function(e,t,n){e.exports=n.p+"static/media/free_speech_icon.4bbba776.png"},82:function(e,t,n){e.exports=n.p+"static/media/other_side_icon.bd7111e1.png"},83:function(e,t,n){e.exports=n.p+"static/media/hire_me_background1.5fa899eb.jpg"},84:function(e,t,n){e.exports=n.p+"static/media/hire_me_background2.689006e8.jpg"},85:function(e,t,n){e.exports=n.p+"static/media/hire_me_background3.d6384d6b.jpg"},86:function(e,t,n){e.exports=n.p+"static/media/hire_me_background4.71fd7c49.jpg"},87:function(e,t,n){e.exports=n.p+"static/media/hire_me_background5.52eb4963.jpg"},88:function(e,t,n){e.exports=n.p+"static/media/hire_me_background6.1f088761.jpg"},89:function(e,t,n){e.exports=n(184)},97:function(e,t,n){}},[[89,2,1]]]);
//# sourceMappingURL=main.5018a322.chunk.js.map