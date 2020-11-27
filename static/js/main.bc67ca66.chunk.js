(this["webpackJsonpclashperk.com"]=this["webpackJsonpclashperk.com"]||[]).push([[0],{57:function(e,a,t){e.exports=t(78)},62:function(e,a,t){},70:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var l=t(15),n=(t(38),t(14)),r=t.n(n),c=t(6),o=t(8),s=t(9),i=t(11),m=t(10),u=t(83),h=t(84),E=t(85),d=t(0),f=t.n(d),p=(t(62),t(90)),b=t(89),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).onScroll=function(){e.setState({scrollY:window.scrollY})},e.scrollTo=function(){window.scrollTo(0,e.props.scrollRef)},e.state={scrollY:0},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){var e="transparent",a="white";return window.innerWidth<700||this.state.scrollY>0?(e="white",a="black"):(e="transparent",a="white"),f.a.createElement(p.a,{collapseOnSelect:!0,variant:"light",expand:"lg",fixed:"top",style:{background:e}},f.a.createElement(p.a.Brand,{as:l.b,style:{fontSize:"16px",color:a},to:"/",onClick:function(){return window.scrollTo(0,0)}},"CLASHPERK"),f.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),f.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},f.a.createElement(b.a,{className:"mr-auto"},f.a.createElement(b.a.Link,{style:{color:a},href:"#",disabled:"true",hidden:!0},"HOME")),f.a.createElement(b.a,null,f.a.createElement(b.a.Link,{as:l.b,style:{color:a},href:"#features",onClick:this.scrollTo,hidden:this.props.hide},"FEATURES"),f.a.createElement(b.a.Link,{as:l.b,to:"/guide",style:{color:a}},"GUIDE"),f.a.createElement(b.a.Link,{href:"/invite",style:{color:a}},"INVITE"),f.a.createElement(b.a.Link,{href:"https://discord.gg/ppuppun",style:{color:a}},"SUPPORT"))))}}]),t}(f.a.Component),y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement(g,{hide:!0}),f.a.createElement("div",{id:"privacy"},f.a.createElement(u.a,{id:"heading"},f.a.createElement(h.a,null,f.a.createElement(E.a,{sm:!0},f.a.createElement("h1",{style:{textAlign:"center",fontSize:"30px"}},"Privacy Policy"),f.a.createElement("h2",{style:{textAlign:"center",fontSize:"20px"}},"This document entails the privacy policy and agreement that you accept when adding ClashPerk to your server, or as a member or any server in which ClashPerk is on.")))),f.a.createElement(u.a,{id:"content"},f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items"},f.a.createElement("h1",null,"Data Collected By Command"),f.a.createElement("h4",null,"The following may be collected via user run command, and may be entered by the user, voluntarily. This data is not collected automatically. When providing data in this way, you forego any rights to the content of the data provided."),f.a.createElement("ul",null,f.a.createElement("li",null,"Server Configurations (Region, Name, ID)"),f.a.createElement("li",null,"Server Ownership"),f.a.createElement("li",null,"User ID")))),f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items"},f.a.createElement("h1",null,"Data Collected When Features Are Enabled"),f.a.createElement("h4",null,"The following will be collected automatically when a server administrator configures the bot to perform checks for updates or another automated feature within ClashPerk. These features are not enabled automatically, and therefore the following will not be collected automatically unless the corresponding feature is enabled."),f.a.createElement("ul",null,f.a.createElement("li",null,"Server Configurations (Name, ID)"),f.a.createElement("li",null,"Channel ID"),f.a.createElement("li",null,"Role ID"),f.a.createElement("li",null,"User ID")))),f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items"},f.a.createElement("h1",null,"Data Collected Automatically"),f.a.createElement("h4",null,"The following is collected automatically when ClashPerk joins a server. This data is used to provide statistics or server information."),f.a.createElement("ul",null,f.a.createElement("li",null,"Server Configurations (Region, Name, ID, Creation Date, Large Status)"),f.a.createElement("li",null,"Server Ownership"),f.a.createElement("li",null,"Server Member Count"),f.a.createElement("li",null,"Server Channel Count")))),f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items"},f.a.createElement("h1",null,"Data Storage and Protection"),f.a.createElement("h4",null,"All data is stored on secured servers. Maximum efforts are taken to keep collected data, as defined above, protected, but absolute security cannot be guaranteed. We are not liable for any damages or stolen information, in which we collect, from our servers."))),f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items"},f.a.createElement("h1",null,"Server Member Agreement"),f.a.createElement("h4",null,"By being a member of a server which uses ClashPerk's services or features, you are consenting to the policies outlined in this agreement. If you, the server member, do not agree with any policies outlined in this agreement, you have the right to leave the server in which this bot is a part of."))),f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items"},f.a.createElement("h1",null,"Server Administrator Agreement"),f.a.createElement("h4",null,"By adding ClashPerk to your server, you are consenting to the policies outlined in this agreement. If you, the server administrator, do not agree with any of the policies outlined in this agreement, you have the right to remove ClashPerk from your server."))),f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items"},f.a.createElement("h1",null,"Service User Agreement"),f.a.createElement("h4",null,"By being a member of the ClashPerk Team and having access to the ClashPerk Admin Web Panel, you are consenting to the policies outlined in this agreement. If you, the service user, do not agree with any policies outlined in this agreement, you have the right to ask for removal of your access to the services."))))))}}]),t}(f.a.Component),v=t(86),k=t(91),w=(t(70),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).toolTip=function(e){return f.a.createElement(v.a,{id:"button-tooltip"},e)},e}return Object(s.a)(t,[{key:"render",value:function(){return f.a.createElement("footer",null,f.a.createElement(u.a,null,f.a.createElement("div",{id:"icons"},f.a.createElement(k.a,{placement:"top",delay:{show:150,hide:400},overlay:this.toolTip("Join Support Server")},f.a.createElement("a",{href:"https://discord.gg/ppuppun"},f.a.createElement("i",{className:"fab fa-discord"}))),f.a.createElement(k.a,{placement:"top",delay:{show:150,hide:400},overlay:this.toolTip("Visit GitHub")},f.a.createElement("a",{href:"https://github.com/clashperk"},f.a.createElement("i",{className:"fab fa-github"}))),f.a.createElement(k.a,{placement:"top",delay:{show:150,hide:400},overlay:this.toolTip("Support us on Patreon")},f.a.createElement("a",{href:"https://www.patreon.com/join/clashperk"},f.a.createElement("i",{className:"fab fa-patreon"})))),f.a.createElement(h.a,null,f.a.createElement(E.a,null,f.a.createElement("p",null,"\xa9 ClashPerk ",(new Date).getFullYear())),f.a.createElement(E.a,null,f.a.createElement("div",{id:"legal"},f.a.createElement(l.b,{to:"/privacy"},"PRIVACY"),f.a.createElement(l.b,{to:"/rules"},"RULES"))))))}}]),t}(f.a.Component)),C=t(87),S=t(88),N=t(26),T=t.n(N),O=t(53),P=t.n(O),j=(t(73),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("section",{id:"features",style:{background:"#4a82f1"}},f.a.createElement(u.a,null,f.a.createElement(P.a,{left:!0},f.a.createElement("h1",{style:{textAlign:"center",padding:"30px"}},"Features")),f.a.createElement(T.a,{left:!0},f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items",sm:!0},f.a.createElement("i",{className:"fas fa-search"}),f.a.createElement("h2",null,"Clash Search"),f.a.createElement("h3",null,"Search Players, Clans ",f.a.createElement("br",null),"Or Anything in the Game")),f.a.createElement(E.a,{className:"items",sm:!0},f.a.createElement("i",{className:"fas fa-rss"}),f.a.createElement("h2",null,"Clan Feed"),f.a.createElement("h3",null,"See when Players Join or Leave,",f.a.createElement("br",null),"Troops Donations or Receives")),f.a.createElement(E.a,{className:"items",sm:!0},f.a.createElement("i",{className:"fas fa-user-check"}),f.a.createElement("h2",null,"User Friendly"),f.a.createElement("h3",null,"No Complex Setup. It Requires ",f.a.createElement("br",null),"Only One Command to get Started"))),f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items",sm:!0},f.a.createElement("i",{className:"fas fa-award"}),f.a.createElement("h2",null,"Best Players"),f.a.createElement("h3",null,"Top Donations, Heroes, Trophies,",f.a.createElement("br",null),"Clan Games")),f.a.createElement(E.a,{className:"items",sm:!0},f.a.createElement("i",{className:"fas fa-trophy"}),f.a.createElement("h2",null,"War"),f.a.createElement("h3",null,"CWL, War Log, Roster,",f.a.createElement("br",null),"Missed Attacks, Current Attacks")),f.a.createElement(E.a,{className:"items",sm:!0},f.a.createElement("i",{className:"fas fa-bolt"}),f.a.createElement("h2",null,"Stable"),f.a.createElement("h3",null,"Stable and Always Online ",f.a.createElement("br",null),"ClashPerk will Always be there for You.")))))))}}]),t}(f.a.Component)),x=(t(74),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={offset:0},e.scrollRef=f.a.createRef(),e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({offset:this.scrollRef.current.offsetTop})}},{key:"render",value:function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement(g,{scrollRef:this.state.offset,hide:!1})," ",f.a.createElement("section",{id:"header",style:{background:"linear-gradient(135deg, #305af3 10%, #7b30f3)"}},f.a.createElement("div",{className:"details"},f.a.createElement(C.a,{id:"logo",src:"./icon-large.png",rounded:!0}),f.a.createElement(T.a,{top:!0},f.a.createElement("h1",null,"ClashPerk")),f.a.createElement(T.a,{bottom:!0},f.a.createElement("h2",null,"Feature-Rich and Powerful Clash of Clans Discord Bot")),f.a.createElement(T.a,{left:!0},f.a.createElement("p",null,f.a.createElement("a",{href:"https://clashperk.com/invite",target:"_blank",rel:"noopener noreferrer"},f.a.createElement(S.a,{id:"button"},"Invite ClashPerk")),f.a.createElement("a",{href:"https://discord.gg/ppuppun",target:"_blank",rel:"noopener noreferrer"},f.a.createElement(S.a,{id:"button"},"Official Discord")))))),f.a.createElement("div",{ref:this.scrollRef},f.a.createElement(j,null)))}}]),t}(f.a.Component)),A=(t(75),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement(g,{hide:!0}),f.a.createElement("section",{id:"rules",style:{background:"#2a2c30"}},f.a.createElement(u.a,null,f.a.createElement("h2",{style:{textAlign:"center",fontSize:"30px"}},"Rules"),f.a.createElement("h3",{style:{textAlign:"center",padding:"30px",borderBottom:"solid 1px"}},"By using ClashPerk, you agree to these rules. If you break any rules, we reserve the right to ban you from ClashPerk"),f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items",sm:!0},f.a.createElement("h2",null,"Rule One"),f.a.createElement("h3",null,"Userbotting or anything else used to automate running commands is strictly forbidden. As well as massive amounts of spam is not allowed.")),f.a.createElement(E.a,{className:"items",sm:!0},f.a.createElement("h2",null,"Rule Two"),f.a.createElement("h3",null,"Sharing bugs with other users is forbidden. Please report all bugs to staff on ClashPerk's Support Server so we can fix it as soon as possible."))),f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items",sm:!0},f.a.createElement("h2",null,"Rule Three"),f.a.createElement("h3",null,"Using the bot to advertise anything will result in punishment. This includes other discord servers.")),f.a.createElement(E.a,{className:"items",sm:!0},f.a.createElement("h2",null,"Rule Four"),f.a.createElement("h3",null,"The Discord Terms of Service and Discord Community Guidelines also are enforcable through our bot."))),f.a.createElement("h3",{style:{textAlign:"center",paddingTop:"5px",color:"red"}},"Thank You! \u2764"))))}}]),t}(f.a.Component)),D=(t(76),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement(g,{hide:!0}),f.a.createElement("div",{id:"guide"},f.a.createElement(u.a,{id:"heading"},f.a.createElement(h.a,null,f.a.createElement(E.a,{sm:!0},f.a.createElement("h1",{style:{textAlign:"center",fontSize:"45px"}},"Guide"),f.a.createElement("br",null),f.a.createElement("h2",{style:{textAlign:"center",fontSize:"20px"}},"A Quick Setup Guide For ClashPerk")))),f.a.createElement(u.a,{id:"content"},f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items"},f.a.createElement("h1",null,"Step 1: Live Boards and Logs"),f.a.createElement("h4",null,"Create a new category (read-only for members) and get the bot access to it. Create 5 channels within that category (if you need all of live boards and logs)"),f.a.createElement("br",null),f.a.createElement("ul",null,f.a.createElement("li",null,f.a.createElement("h6",null,"Last Online Board"),f.a.createElement("code",{className:"border"},"*setup lastonline ","<#clanTag>")),f.a.createElement("hr",null),f.a.createElement("li",null,f.a.createElement("h6",null,"Clan Games Board"),f.a.createElement("code",{className:"border"},"*setup clangames ","<#clanTag>")),f.a.createElement("hr",null),f.a.createElement("li",null,f.a.createElement("h6",null,"Donation Log"),f.a.createElement("code",{className:"border"},"*setup donations ","<#clanTag>")),f.a.createElement("hr",null),f.a.createElement("li",null,f.a.createElement("h6",null,"Live War Board"),f.a.createElement("code",{className:"border"},"*setup clan-wars ","<#clanTag>")),f.a.createElement("hr",null),f.a.createElement("li",null,f.a.createElement("h6",null,"Live Clan Promotional Embed"),f.a.createElement("code",{className:"border"},"*setup clanembed ","<#clanTag>")),f.a.createElement("hr",null),f.a.createElement("li",null,f.a.createElement("h6",null,"Clan Feed (aka Member Log)"),f.a.createElement("code",{className:"border"},"*setup clan-feed ","#clanTag"," [@role]")),f.a.createElement("hr",null)))),f.a.createElement(h.a,null,f.a.createElement(E.a,{className:"items"},f.a.createElement("h1",null,"Step 2: Linking Player and Clan"),f.a.createElement("h4",null,"Once you link your clan, you won't have to type your clan tag for any other lookup commands."),f.a.createElement("br",null),f.a.createElement("ul",null,f.a.createElement("li",null,f.a.createElement("h6",null,"Link Clan"),f.a.createElement("code",{className:"border"},"*link ","<#clanTag> [@user]"," ")),f.a.createElement("hr",null),f.a.createElement("li",null,f.a.createElement("h6",null,"Link Player"),f.a.createElement("code",{className:"border"},"*link ","<#playerTag> [@user]"," ")),f.a.createElement("hr",null)))))))}}]),t}(d.Component)),L=function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement(c.d,null,f.a.createElement(c.b,{exact:!0,path:"/",component:x}),f.a.createElement(c.b,{exact:!0,path:"/privacy",component:y}),f.a.createElement(c.b,{exact:!0,path:"/rules",component:A}),f.a.createElement(c.b,{exact:!0,path:"/guide",component:D}),f.a.createElement(c.a,{to:"/"})),f.a.createElement(w,null))};t(77);r.a.render(f.a.createElement(l.a,null,f.a.createElement(L,null)),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.bc67ca66.chunk.js.map