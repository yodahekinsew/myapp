(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/programming.2b914366.jpg"},22:function(e,t,n){e.exports=n(34)},31:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var o,a=n(0),i=n.n(a),c=n(19),l=n.n(c),s=n(12),r={tab:"home",showMenu:"closed",menuButton:">",showOpening:!0,showOptions:!1,pose:"initial",next_pose:"home",channel:"home",selection:1,maxSelection:1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TAB":return Object.assign({},e,{tab:t.tab});case"CHANGE_SHOWMENU":return Object.assign({},e,{showMenu:t.showMenu});case"CHANGE_MENUBUTTON":return Object.assign({},e,{menuButton:t.menuButton});case"CHANGE_SHOWOPENING":return Object.assign({},e,{showOpening:t.showOpening});case"CHANGE_SHOWOPTIONS":return Object.assign({},e,{showOptions:t.showOptions});case"CHANGE_POSE":return Object.assign({},e,{pose:t.pose});case"CHANGE_NEXTPOSE":return Object.assign({},e,{next_pose:t.next_pose});case"CHANGE_CHANNEL":return Object.assign({},e,{channel:t.channel});case"CHANGE_SELECTION":return Object.assign({},e,{selection:t.selection});case"CHANGE_MAXSELECTION":return Object.assign({},e,{maxSelection:t.maxSelection,selection:t.selection});default:return e}},u=Object(s.b)({newState:h}),d=n(2),m=(n(31),n(3)),p=n(4),v=n(6),f=n(5),g=n(7),b=(n(8),function(e){return{type:"CHANGE_TAB",tab:e}}),y=n(10),w=n(1),k=w.a.div({click:{scale:"1.2"},notclick:{scale:"1"}}),E=w.a.div({unmounted:{opacity:"0"},mounted:{opacity:"1"}}),S=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(v.a)(this,Object(f.a)(t).call(this))).handleEnter=function(e){var t=document.getElementById(e);t.style.backgroundColor="white",t.style.color="black"},e.handleLeave=function(e){var t=document.getElementById(e);t.style.backgroundColor="transparent",t.style.color="white"},e.state={pose:{resume:"notclick",contact:"notclick"}},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("fade");console.log(e),e.style.opacity="1"}},{key:"render",value:function(){var e=this;return i.a.createElement(E,{id:"fade",style:{opacity:"0",position:"absolute",transition:"opacity 1s",display:"flex",height:"85vh",marginTop:"15vh",width:"100vw",overflow:"hidden",justifyContent:"center",alignItems:"center"}},i.a.createElement(k,{id:"resumeB",pose:this.state.pose.resume,style:{position:"absolute",height:"8vh",width:"13vw",outline:"solid 1px white",fontFamily:"verdana-bold",textAlign:"center",fontSize:"5vmin",color:"white",marginLeft:"-9vw",marginTop:"0vh"},onMouseEnter:function(){e.handleEnter("resumeB"),e.setState({pose:{resume:"click"}})},onMouseLeave:function(){e.handleLeave("resumeB"),e.setState({pose:{resume:"notclick"}})},onClick:function(){e.props.changeTab("resume")}},"Resume"),i.a.createElement(k,{id:"contactB",pose:this.state.pose.contact,style:{position:"absolute",height:"8vh",width:"13vw",outline:"solid 1px white",fontFamily:"verdana-bold",textAlign:"center",fontSize:"5vmin",color:"white",marginLeft:"9vw",marginTop:"0vh"},onMouseEnter:function(){e.handleEnter("contactB"),e.setState({pose:{contact:"click"}})},onMouseLeave:function(){e.handleLeave("contactB"),e.setState({pose:{contact:"notclick"}})},onClick:function(){e.props.changeTab("contact")}},"Contact"))}}]),t}(a.Component),C={changeTab:b},j=Object(d.b)(function(e){return{tab:e.newState.tab}},C)(S),O=w.a.div({click:{width:"87vw"},notclick:{width:"25vw"}}),x=w.a.div({click:{width:"87vw"},notclick:{width:"25vw"}}),I=w.a.div({click:{width:"87vw"},notclick:{width:"25vw"}}),L=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(v.a)(this,Object(f.a)(t).call(this))).handleEnter=function(t){var n=document.getElementById(t);n.style.backgroundColor="white",n.style.color="black",n.parentNode.style.zIndex="2";for(var o=e.state.menuButtons,a=0;a<o.length;a++){if(o[a]!=t)document.getElementById(o[a]).children[0].style.opacity="0"}},e.handleLeave=function(t){var n=document.getElementById(t);n.style.backgroundColor="rgba(0,0,0,.4)",n.style.color="white",n.parentNode.zIndex="1";for(var o=e.state.menuButtons,a=0;a<o.length;a++){if(o[a]!=t)document.getElementById(o[a]).children[0].style.opacity="1"}},e.state={menuButtons:["background","skills","interests"],pose:{background:"notclick",skills:"notclick",interests:"notclick"}},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("fade").style.opacity="1"}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"fade",style:{opacity:"0",position:"absolute",transition:"opacity 1s",display:"flex",flexDirection:"row",height:"85vh",marginTop:"15vh",width:"100vw",overflow:"hidden",justifyContent:"center",alignItems:"center"}},i.a.createElement(O,{id:"background",pose:this.state.pose.background,style:{backgroundColor:"rgba(0,0,0,.4)",transition:"width .5s, opacity .5s, background-color .5s, color .5s",height:"80vh",margin:"3vh",color:"white",outline:"solid 1px white",whiteSpace:"pre-wrap",fontFamily:"verdana-bold",fontSize:"5vmin",textAlign:"center"},onMouseEnter:function(){e.handleEnter("background"),e.setState({pose:{background:"click",skills:"notclick",interests:"notclick"}})},onMouseLeave:function(){e.handleLeave("background"),e.setState({pose:{background:"notclick",skills:"notclick",interests:"notclick"}})}},i.a.createElement("div",null),"notclick"==this.state.pose.background?i.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},"The Things","\n","I Have Do"):"The Things I Have Done"),i.a.createElement(x,{id:"skills",pose:this.state.pose.skills,style:{backgroundColor:"rgba(0,0,0,.4)",transition:"width .5s, opacity .5s, background-color .5s, color .5s",height:"80vh",margin:"3vh",color:"white",outline:"solid 1px white",whiteSpace:"pre-wrap",fontFamily:"verdana-bold",fontSize:"5vmin",textAlign:"center"},onMouseEnter:function(){e.handleEnter("skills"),e.setState({pose:{background:"notclick",skills:"click",interests:"notclick"}})},onMouseLeave:function(){e.handleLeave("skills"),e.setState({pose:{background:"notclick",skills:"notclick",interests:"notclick"}})}},i.a.createElement("div",null),"notclick"==this.state.pose.skills?i.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},"The Things","\n","I Can Do"):"The Things I Can Do"),i.a.createElement(I,{id:"interests",pose:this.state.pose.interests,style:{backgroundColor:"rgba(0,0,0,.4)",transition:"width .5s, opacity .5s, background-color .5s, color .5s",height:"80vh",margin:"3vh",color:"white",outline:"solid 1px white",whiteSpace:"pre-wrap",fontFamily:"verdana-bold",fontSize:"5vmin",textAlign:"center"},onMouseEnter:function(){e.handleEnter("interests"),e.setState({pose:{background:"notclick",skills:"notclick",interests:"click"}})},onMouseLeave:function(){e.handleLeave("interests"),e.setState({pose:{background:"notclick",skills:"notclick",interests:"notclick"}})}},i.a.createElement("div",null),"notclick"==this.state.pose.interests?i.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},"The Things","\n","I Want to Do"):"The Things I Want to Do"))}}]),t}(a.Component),T={changeTab:b},M=Object(d.b)(function(e){return{tab:e.newState.tab}},T)(L),z=(w.a.div({click:{scale:"1.5"},notclick:{scale:"1"}}),w.a.div({click:{height:"100vw"},notclick:{height:"30vw"}})),A=w.a.div({click:{height:"100vw"},notclick:{height:"30vw"}}),B=w.a.div({click:{height:"100vw"},notclick:{height:"30vw"}}),F=w.a.div({unmounted:{opacity:"0"},mounted:{opacity:"1"}}),N=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(v.a)(this,Object(f.a)(t).call(this))).handleEnter=function(t){var n=document.getElementById(t);n.style.backgroundColor="white",n.style.color="black",n.parentNode.style.zIndex="2";for(var o=e.state.menuIds,a=0;a<o.length;a++){if(o[a]!=t)document.getElementById(o[a]).children[0].style.opacity="0"}},e.handleLeave=function(t){var n=document.getElementById(t);n.style.backgroundColor="transparent",n.style.color="white",n.parentNode.zIndex="1";for(var o=e.state.menuIds,a=0;a<o.length;a++){if(o[a]!=t)document.getElementById(o[a]).children[0].style.opacity="1"}},e.state={menuIds:["soundclout","freespeech","otherside"],pose:{soundclout:"notclick",freespeech:"notclick",otherside:"notclick"}},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("fade");console.log(e),e.style.opacity="1"}},{key:"render",value:function(){var e=this;return i.a.createElement(F,{id:"fade",style:{opacity:"0",position:"absolute",transition:"opacity 1s",display:"flex",flexDirection:"column",height:"85vh",marginTop:"15vh",width:"100vw",overflow:"hidden",justifyContent:"center",alignItems:"center"}},i.a.createElement(z,{id:"soundclout",pose:this.state.pose.soundclout,style:{transition:"background-color .5s, color .5s, height .5s",backgroundColor:"rgba(0,0,0,.4)",fontFamily:"verdana-bold",outline:"solid 1px white",fontSize:"5vmin",width:"90vw",margin:"2vh",paddingLeft:"2vw",textAlign:"left",color:"white",whiteSpace:"pre-wrap"},onMouseEnter:function(){e.handleEnter("soundclout"),e.setState({pose:{soundclout:"click"}})},onMouseLeave:function(){e.handleLeave("soundclout"),e.setState({pose:{soundclout:"notclick",freespeech:"notclick",otherside:"notclick"}})}},i.a.createElement("div",null,"The P3N","click"==this.state.pose.soundclout?"\n\n\tBuilt and designed a 3D drawing tool, which we named the P3N. The entire system used a microcontroller device, a website renderer built with Three.js, and a SQLite python-based server. The system allowed users to draw in 3D - either alone or collaboritvely with other users - and gave users control over certain aspects of their drawing expericene, such as pen size, drawing speed, pen color, and others. The device used a microphone sensor to receive commands from the user and an IMU for directional input from the user.":null)),i.a.createElement(A,{id:"freespeech",pose:this.state.pose.freespeech,style:{transition:"background-color .5s, color .5s, height .5s",backgroundColor:"rgba(0,0,0,.4)",fontFamily:"verdana-bold",outline:"solid 1px white",fontSize:"5vmin",width:"90vw",margin:"2vh",paddingLeft:"2vw",textAlign:"left",color:"white",whiteSpace:"pre-wrap"},onMouseEnter:function(){e.handleEnter("freespeech"),e.setState({pose:{freespeech:"click"}})},onMouseLeave:function(){e.handleLeave("freespeech"),e.setState({pose:{soundclout:"notclick",freespeech:"notclick",otherside:"notclick"}})}},i.a.createElement("div",null,"Crossword Puzzle","click"==this.state.pose.freespeech?"\n\n\tBuilt from ground up a software system that allowed multiple users to select ongoing crossword puzzle games from a server, which we also created, and play in realtime against other users. The software was written entirely in Java and uses a web-based server. ":null)),i.a.createElement(B,{id:"otherside",pose:this.state.pose.otherside,style:{transition:"background-color .5s, color .5s, height .5s",backgroundColor:"rgba(0,0,0,.4)",fontFamily:"verdana-bold",outline:"solid 1px white",fontSize:"5vmin",width:"90vw",margin:"2vh",paddingLeft:"2vw",textAlign:"left",color:"white",whiteSpace:"pre-wrap"},onMouseEnter:function(){e.handleEnter("otherside"),e.setState({pose:{otherside:"click"}})},onMouseLeave:function(){e.handleLeave("otherside"),e.setState({pose:{soundclout:"notclick",freespeech:"notclick",otherside:"notclick"}})}},i.a.createElement("div",null,"OtherSide","click"==this.state.pose.otherside?"\n\n\tIn Development...":null)))}}]),t}(a.Component),D={changeTab:b},H=Object(d.b)(function(e){return{tab:e.newState.tab}},D)(N),G=w.a.div({click:{width:"100vw",height:"85vh",fontSize:"3vmin"},notclick:{width:"90vw",height:"60vh",fontSize:"20vmin"}}),P=w.a.div({unmounted:{opacity:"0"},mounted:{opacity:"1"}}),_=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(v.a)(this,Object(f.a)(t).call(this))).handleEnter=function(e){var t=document.getElementById(e);t.style.backgroundColor="white",t.style.color="black",t.parentNode.style.zIndex="2"},e.handleLeave=function(e){var t=document.getElementById(e);t.style.backgroundColor="rgba(0,0,0,.4)",t.style.color="white"},e.state={pose:"notclick"},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("fade").style.opacity="1"}},{key:"render",value:function(){var e=this;return i.a.createElement(P,{id:"fade",style:{position:"absolute",height:"80vh",marginTop:"15vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(G,{pose:this.state.pose,id:"resumebox",style:{transition:"width .5s, height .5s, background-color .5s, color .5s",whiteSpace:"pre-wrap",overflow:"scroll",backgroundColor:"rgba(0,0,0,.4)",outline:"solid 1px white",fontSize:"20vmin",fontFamily:"verdana-bold",textAlign:"center",marginTop:"5vh",height:"60vh",width:"90vw",color:"white"},onMouseEnter:function(){e.handleEnter("resumebox"),e.setState({pose:"click"})},onMouseLeave:function(){e.handleLeave("resumebox"),e.setState({pose:"notclick"})}},"notclick"==this.state.pose?i.a.createElement("div",{style:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},"Resume"):i.a.createElement("div",{style:{width:"100vw",height:"160vh",whiteSpace:"pre-wrap",textAlign:"left",padding:"5vmin"}},"Experience","\t\t",i.a.createElement("span",{style:{fontFamily:"verdana-italic",fontSize:"2vmin"}},"Google","\t","\t","Engineering Practicum Intern","\t\t","June, 2019 - August, 2019","\t\t\t\t\t\t","Mountain View, CA"),"\n\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin"}},"Incoming intern at Google for the summer of 2019."),"\n\n\t\t\t\t",i.a.createElement("span",{style:{fontFamily:"verdana-italic",fontSize:"2vmin"}},"Nasdaq","\t\t","Full Stack Development Intern","\t\t","January, 2019 - February, 2019","\t\t\t\t\t","Boston, MA"),"\n\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin"}},"Built a ride-sharing app with a team of fellow interns in order to showcase an effective use case of Nasdaq's Markets","\n\t\t\t\t\t\t","Everywhere platform. Used technologies including React-Native to build the app and NodeJS to run an API server.","\n\t\t\t\t\t\t","Responsible for meeting with different groups in order to discuss the Market' Everywhere Platform such as H&M"),"\n\n\t\t\t\t",i.a.createElement("span",{style:{fontFamily:"verdana-italic",fontSize:"2vmin"}},"Intel","\t\t","Software Engineering Intern","\t\t\t","June, 2019 - August, 2019","\t\t\t\t\t\t","Chandler, AZ"),"\n\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin"}},"Built a reinforcement learning model and long-short term memory statistical model that act as a plugin to help improve","\n\t\t\t\t\t\t","network efficiencies for platforms. Tasks included python scripting, data analysis, compiling benchmarks, automating","\n\t\t\t\t\t\t","measurements, and researching and building machine learning models that best fit the scope of the problem."),"\n\n\n","Education",i.a.createElement("span",{style:{fontSize:"2vmin"}},"\t\t\t","Massachusetts Institute of Technology","\t\t\t","Class of 2021","\t\t\t","Cambridge, MA"),"\n\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin"}},"Bachelor's in Computer Science and Engineering"),"\n\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin"}},"GPA: 4.0"),"\n\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin"}},"Relevant Courses:"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"Machine Learning","\t\t\t\t\t\t\t","Artificial Intelligence"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"Algorithms and Data Structures","\t\t\t\t","Computation Structures"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"Elements of Software Construction","\t\t\t\t","Interconnected Embedded Systems"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"Mathematics for Computer Science","\t\t\t\t","Automata, Computability, and Complexity"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"Probability and Random Variables","\t\t\t\t"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}}),"\n\n\n","Technologies",i.a.createElement("span",{style:{fontSize:"2vmin"}},"\t\t","Comfortable with:","\t\t\t\t\t","Experience with:"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"Python","\t\t\t\t\t\t\t","Photoshop"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"JavaScript\\JQuery","\t\t\t\t\t","Photography"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"ReactJS","\t\t\t\t\t\t\t","InDesign"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"React-Native","\t\t\t\t\t\t","C++"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"HTML/CSS","\t\t\t\t\t\t","NodeJS"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"Version Control (Git)","\t\t\t\t","SQL"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"Java","\t\t\t\t\t\t\t"),"\n\t\t\t\t\t",i.a.createElement("span",{style:{fontSize:"2vmin",fontFamily:"verdana"}},"Arduino","\t\t\t\t\t\t\t"))))}}]),t}(a.Component),J={changeTab:b},R=Object(d.b)(function(e){return{tab:e.newState.tab}},J)(_),W=w.a.div({click:{scale:"1.1"},notclick:{scale:"1"}}),U=w.a.div({unmounted:{opacity:"0"},mounted:{opacity:"1"}}),V=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(v.a)(this,Object(f.a)(t).call(this))).handleEnter=function(e){var t=document.getElementById(e);t.style.backgroundColor="white",t.style.color="black"},e.handleLeave=function(e){var t=document.getElementById(e);t.style.backgroundColor="transparent",t.style.color="white"},e.state={pose:{email:"notclick",facebook:"notclick",github:"notclick",twitter:"notclick",linkedIn:"notclick",website:"notclick"}},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("fade");console.log(e),e.style.opacity="1"}},{key:"render",value:function(){var e=this;return i.a.createElement(U,{id:"fade",style:{opacity:"0",position:"absolute",transition:"opacity 1s",display:"flex",flexDirection:"row",height:"85vh",marginTop:"15vh",width:"100vw",overflow:"hidden",justifyContent:"center",alignItems:"center"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"column",fontFamily:"verdana-bold",fontSize:"5vmin",height:"80vh",width:"25vw",margin:"5vh"}},i.a.createElement("a",{style:{textDecoration:"none"},href:"mailto:yodahekinsew@gmail.com"},i.a.createElement(W,{id:"email",pose:this.state.pose.email,style:{transition:"background-color 1s color 1s",backgroundColor:"rgba(0,0,0,.4)",display:"flex",justifyContent:"center",alignItems:"center",height:"30vh",width:"25vw",margin:"5vh",outline:"solid 1px white",color:"white"},onMouseEnter:function(){e.handleEnter("email"),e.setState({pose:{email:"click"}})},onMouseLeave:function(){e.handleLeave("email"),e.setState({pose:{email:"notclick"}})}},"Email")),i.a.createElement("a",{style:{textDecoration:"none"},href:"https://www.facebook.com/yod.alemu"},i.a.createElement(W,{id:"facebook",pose:this.state.pose.facebook,style:{transition:"background-color 1s color 1s",backgroundColor:"rgba(0,0,0,.4)",display:"flex",justifyContent:"center",alignItems:"center",height:"30vh",width:"25vw",margin:"5vh",outline:"solid 1px white",color:"white"},onMouseEnter:function(){e.handleEnter("facebook"),e.setState({pose:{facebook:"click"}})},onMouseLeave:function(){e.handleLeave("facebook"),e.setState({pose:{facebook:"notclick"}})}},"Facebook"))),i.a.createElement("div",{style:{display:"flex",flexDirection:"column",fontFamily:"verdana-bold",fontSize:"5vmin",height:"80vh",width:"25vw",margin:"5vh",color:"white"}},i.a.createElement("a",{style:{textDecoration:"none"},href:"https://github.com/yodahekinsew"},i.a.createElement(W,{id:"github",pose:this.state.pose.github,style:{transition:"background-color 1s color 1s",backgroundColor:"rgba(0,0,0,.4)",display:"flex",justifyContent:"center",alignItems:"center",height:"30vh",width:"25vw",margin:"5vh",outline:"solid 1px white",color:"white"},onMouseEnter:function(){e.handleEnter("github"),e.setState({pose:{github:"click"}})},onMouseLeave:function(){e.handleLeave("github"),e.setState({pose:{github:"notclick"}})}},"Github")),i.a.createElement("a",{style:{textDecoration:"none"},href:"https://twitter.com/KungFuKinsew"},i.a.createElement(W,{id:"twitter",pose:this.state.pose.twitter,style:{transition:"background-color 1s color 1s",backgroundColor:"rgba(0,0,0,.4)",display:"flex",justifyContent:"center",alignItems:"center",height:"30vh",width:"25vw",margin:"5vh",outline:"solid 1px white",color:"white"},onMouseEnter:function(){e.handleEnter("twitter"),e.setState({pose:{twitter:"click"}})},onMouseLeave:function(){e.handleLeave("twitter"),e.setState({pose:{twitter:"notclick"}})}},"Twitter"))),i.a.createElement("div",{style:{display:"flex",flexDirection:"column",fontFamily:"verdana-bold",fontSize:"5vmin",height:"80vh",width:"25vw",margin:"5vh",color:"white"}},i.a.createElement("a",{style:{textDecoration:"none"},href:"https://www.linkedin.com/in/yodahe-alemu/"},i.a.createElement(W,{id:"linkedIn",pose:this.state.pose.linkedIn,style:{transition:"background-color 1s color 1s",backgroundColor:"rgba(0,0,0,.4)",display:"flex",justifyContent:"center",alignItems:"center",height:"30vh",width:"25vw",margin:"5vh",outline:"solid 1px white",color:"white"},onMouseEnter:function(){e.handleEnter("linkedIn"),e.setState({pose:{linkedIn:"click"}})},onMouseLeave:function(){e.handleLeave("linkedIn"),e.setState({pose:{linkedIn:"notclick"}})}},"LinkedIn")),i.a.createElement("a",{style:{textDecoration:"none"},href:"https://yodahekinsew.github.io/myapp/"},i.a.createElement(W,{id:"website",pose:this.state.pose.website,style:{transition:"background-color 1s color 1s",backgroundColor:"rgba(0,0,0,.4)",display:"flex",justifyContent:"center",alignItems:"center",height:"30vh",width:"25vw",margin:"5vh",outline:"solid 1px white",color:"white"},onMouseEnter:function(){e.handleEnter("website"),e.setState({pose:{website:"click"}})},onMouseLeave:function(){e.handleLeave("website"),e.setState({pose:{website:"notclick"}})}},"Website"))))}}]),t}(a.Component),Q={changeTab:b},q=Object(d.b)(function(e){return{tab:e.newState.tab}},Q)(V),K=w.a.div({click:{scale:"1.2"},notclick:{scale:"1"}}),X=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(v.a)(this,Object(f.a)(t).call(this))).handleEnter=function(t){for(var n=e.state.menuButtons,o=0;o<n.length;o++){if(n[o]!=t)document.getElementById(n[o]).style.opacity=".6"}},e.handleLeave=function(t){for(var n=e.state.menuButtons,o=0;o<n.length;o++){if(n[o]!=t)document.getElementById(n[o]).style.opacity="1"}},e.state={menuButtons:["home","portfolio","about","resume","contact"],pose:{logo:"notclick",home:"notclick",portfolio:"notclick",about:"notclick",resume:"notclick",contact:"notclick"}},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.pose),i.a.createElement("div",{style:{position:"absolute",display:"flex",height:"20vh",width:"100vw",overflow:"hidden",justifyContent:"center",alignItems:"center"}},i.a.createElement(K,{id:"home",pose:this.state.pose.home,style:{opacity:"1",transition:"opacity .25s",position:"absolute",height:"3vh",width:"5vw",fontFamily:"verdana-bold",textAlign:"center",fontSize:"2.5vmin",color:"white",marginLeft:"12vw",marginTop:"-2vh"},onMouseEnter:function(){e.handleEnter("home"),e.setState({pose:{home:"click"}})},onMouseLeave:function(){e.handleLeave("home"),e.setState({pose:{home:"notclick"}})},onClick:function(){e.props.changeTab("home")}},"Home"),i.a.createElement(K,{id:"portfolio",pose:this.state.pose.portfolio,style:{opacity:"1",transition:"opacity .25s",position:"absolute",height:"3vh",width:"7vw",fontFamily:"verdana-bold",textAlign:"center",fontSize:"2.5vmin",color:"white",marginLeft:"20vw",marginTop:"-2vh"},onMouseEnter:function(){e.handleEnter("portfolio"),e.setState({pose:{portfolio:"click"}})},onMouseLeave:function(){e.handleLeave("portfolio"),e.setState({pose:{portfolio:"notclick"}})},onClick:function(){e.props.changeTab("portfolio")}},"Portfolio"),i.a.createElement(K,{id:"about",pose:this.state.pose.about,style:{opacity:"1",transition:"opacity .25s",position:"absolute",height:"3vh",width:"5vw",fontFamily:"verdana-bold",textAlign:"center",fontSize:"2.5vmin",color:"white",marginLeft:"28vw",marginTop:"-2vh"},onMouseEnter:function(){e.handleEnter("about"),e.setState({pose:{about:"click"}})},onMouseLeave:function(){e.handleLeave("about"),e.setState({pose:{about:"notclick"}})},onClick:function(){e.props.changeTab("about")}},"About"),i.a.createElement(K,{id:"resume",pose:this.state.pose.resume,style:{opacity:"1",transition:"opacity .25s",position:"absolute",height:"3vh",width:"6vw",fontFamily:"verdana-bold",textAlign:"center",fontSize:"2.5vmin",color:"white",marginLeft:"36vw",marginTop:"-2vh"},onMouseEnter:function(){e.handleEnter("resume"),e.setState({pose:{resume:"click"}})},onMouseLeave:function(){e.handleLeave("resume"),e.setState({pose:{resume:"notclick"}})},onClick:function(){e.props.changeTab("resume")}},"Resume"),i.a.createElement(K,{id:"contact",pose:this.state.pose.contact,style:{opacity:"1",transition:"opacity .25s",position:"absolute",height:"3vh",width:"6vw",fontFamily:"verdana-bold",textAlign:"center",fontSize:"2.5vmin",color:"white",marginLeft:"44vw",marginTop:"-2vh"},onMouseEnter:function(){e.handleEnter("contact"),e.setState({pose:{contact:"click"}})},onMouseLeave:function(){e.handleLeave("contact"),e.setState({pose:{contact:"notclick"}})},onClick:function(){e.props.changeTab("contact")}},"Contact"),i.a.createElement(K,{id:"logo",pose:this.state.pose.logo,style:{transition:"background-color 1s color 1s",position:"absolute",height:"6vh",width:"4vw",outline:"solid 1px white",fontFamily:"verdana-bold",textAlign:"center",fontSize:"4vmin",color:"white",marginLeft:"-45vw",marginTop:"-2vh"},onMouseEnter:function(){var t=document.getElementById("logo");t.style.backgroundColor="white",t.style.color="black",e.setState({pose:{logo:"click"}})},onMouseLeave:function(){var t=document.getElementById("logo");t.style.backgroundColor="transparent",t.style.color="white",e.setState({pose:{logo:"notclick"}})},onClick:function(){e.props.changeTab("home")}},"YA"))}}]),t}(a.Component),Y={changeTab:b},Z=Object(d.b)(function(e){return{tab:e.newState.tab}},Y)(X),$=w.a.div({home:{marginTop:"30vh",marginLeft:"25vw",scale:"1"},portfolio:{marginTop:"-2vh",marginLeft:"0vw",scale:".7"},about:{marginTop:"-2vh",marginLeft:"0vw",scale:".7"},resume:{marginTop:"-2vh",marginLeft:"0vw",scale:".7"},contact:{marginTop:"-2vh",marginLeft:"0vw",scale:".7"}}),ee=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(v.a)(this,Object(f.a)(t).call(this))).state={pose:"notclick"},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement($,{pose:this.props.tab,onClick:function(){e.props.changeTab("home")},style:{position:"absolute",display:"flex",height:"20vh",width:"50vw",overflow:"hidden",justifyContent:"center"}},i.a.createElement("div",{style:{position:"absolute",fontFamily:"verdana-bold",fontSize:"10vmin",color:"white"}},"Yodahe Alemu"),i.a.createElement("div",{style:{position:"absolute",fontFamily:"verdana-bold",fontSize:"5vmin",color:"white",marginTop:"12vh"}},"People | Software | Design"))}}]),t}(a.Component),te={changeTab:b},ne=Object(d.b)(function(e){return{tab:e.newState.tab}},te)(ee),oe=n(21),ae=n.n(oe),ie=i.a.createElement("img",{alt:"",src:ae.a,style:(o={height:"100vh",position:"absolute",width:"100vw"},Object(y.a)(o,"position","absolute"),Object(y.a)(o,"backgroundAttachment","fixed"),Object(y.a)(o,"backfaceVisibility","hidden"),Object(y.a)(o,"backgroundSize","cover"),Object(y.a)(o,"backgroundRepeat","no-repeat"),Object(y.a)(o,"backgroundPosition","center"),o)}),ce=function(e){function t(){return Object(m.a)(this,t),Object(v.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{height:"100vh",width:"100vw",overflow:"hidden"}},ie,i.a.createElement("div",{style:{position:"absolute",backgroundColor:"black",opacity:".6",height:"100vh",width:"100vw"}}),i.a.createElement(Z,null),"home"==this.props.tab?i.a.createElement("div",null,i.a.createElement(j,null)):"portfolio"==this.props.tab?i.a.createElement("div",null,i.a.createElement(H,null)):"about"==this.props.tab?i.a.createElement("div",null,i.a.createElement(M,null)):"resume"==this.props.tab?i.a.createElement("div",null,i.a.createElement(R,null)):"contact"==this.props.tab?i.a.createElement("div",null,i.a.createElement(q,null)):null,i.a.createElement(ne,null))}}]),t}(a.Component),le={changeTab:b},se=Object(d.b)(function(e){return{tab:e.newState.tab}},le)(ce),re=function(e){function t(){return Object(m.a)(this,t),Object(v.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement(se,null)}}]),t}(a.Component),he={changeChannel:function(e){return{type:"CHANGE_CHANNEL",channel:e}}},ue=Object(d.b)(function(e){return{channel:e.newState.channel}},he)(re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=Object(s.c)(u);l.a.render(i.a.createElement(d.a,{store:de},i.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){}},[[22,2,1]]]);
//# sourceMappingURL=main.3e2644ab.chunk.js.map