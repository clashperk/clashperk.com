(this["webpackJsonpclashperk.com"]=this["webpackJsonpclashperk.com"]||[]).push([[0],{57:function(e,a,t){e.exports=t(79)},62:function(e,a,t){},70:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var l=t(12),n=(t(38),t(15)),r=t.n(n),o=t(6),c=t(8),s=t(9),i=t(11),m=t(10),u=t(84),h=t(85),d=t(86),E=t(0),p=t.n(E),f=(t(62),t(91)),b=t(90),y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).onScroll=function(){e.setState({scrollY:window.scrollY})},e.scrollTo=function(){window.scrollTo(0,e.props.scrollRef)},e.state={scrollY:0},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){var e="transparent",a="white";return window.innerWidth<700||this.state.scrollY>0?(e="white",a="black"):(e="transparent",a="white"),p.a.createElement(f.a,{collapseOnSelect:!0,variant:"light",expand:"lg",fixed:"top",style:{background:e}},p.a.createElement(f.a.Brand,{as:l.b,style:{fontSize:"16px",color:a},to:"/",onClick:function(){return window.scrollTo(0,0)}},"CLASHPERK"),p.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),p.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},p.a.createElement(b.a,{className:"mr-auto"},p.a.createElement(b.a.Link,{style:{color:a},href:"#",disabled:"true",hidden:!0},"HOME")),p.a.createElement(b.a,null,p.a.createElement(b.a.Link,{as:l.b,style:{color:a},href:"#features",onClick:this.scrollTo,hidden:this.props.hide},"FEATURES"),p.a.createElement(b.a.Link,{as:l.b,to:"/guide",style:{color:a}},"GUIDE"),p.a.createElement(b.a.Link,{href:"/invite",style:{color:a}},"INVITE"),p.a.createElement(b.a.Link,{href:"https://discord.gg/ppuppun",style:{color:a}},"SUPPORT"))))}}]),t}(p.a.Component),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(y,{hide:!0}),p.a.createElement("div",{id:"privacy"},p.a.createElement(u.a,{id:"heading"},p.a.createElement(h.a,null,p.a.createElement(d.a,{sm:!0},p.a.createElement("h1",{style:{textAlign:"center",fontSize:"30px"}},"Privacy Policy"),p.a.createElement("h2",{style:{textAlign:"center",fontSize:"20px"}},"This document entails the privacy policy and agreement that you accept when adding ClashPerk to your server, or as a member or any server in which ClashPerk is on.")))),p.a.createElement(u.a,{id:"content"},p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,"Data Collected By Command"),p.a.createElement("h4",null,"The following may be collected via user run command, and may be entered by the user, voluntarily. This data is not collected automatically. When providing data in this way, you forego any rights to the content of the data provided."),p.a.createElement("ul",null,p.a.createElement("li",null,"Server Configurations (Region, Name, ID)"),p.a.createElement("li",null,"Server Ownership"),p.a.createElement("li",null,"User ID")))),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,"Data Collected When Features Are Enabled"),p.a.createElement("h4",null,"The following will be collected automatically when a server administrator configures the bot to perform checks for updates or another automated feature within ClashPerk. These features are not enabled automatically, and therefore the following will not be collected automatically unless the corresponding feature is enabled."),p.a.createElement("ul",null,p.a.createElement("li",null,"Server Configurations (Name, ID)"),p.a.createElement("li",null,"Channel ID"),p.a.createElement("li",null,"Role ID"),p.a.createElement("li",null,"User ID")))),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,"Data Collected Automatically"),p.a.createElement("h4",null,"The following is collected automatically when ClashPerk joins a server. This data is used to provide statistics or server information."),p.a.createElement("ul",null,p.a.createElement("li",null,"Server Configurations (Region, Name, ID, Creation Date, Large Status)"),p.a.createElement("li",null,"Server Ownership"),p.a.createElement("li",null,"Server Member Count"),p.a.createElement("li",null,"Server Channel Count")))),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,"Data Storage and Protection"),p.a.createElement("h4",null,"All data is stored on secured servers. Maximum efforts are taken to keep collected data, as defined above, protected, but absolute security cannot be guaranteed. We are not liable for any damages or stolen information, in which we collect, from our servers."))),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,"Server Member Agreement"),p.a.createElement("h4",null,"By being a member of a server which uses ClashPerk's services or features, you are consenting to the policies outlined in this agreement. If you, the server member, do not agree with any policies outlined in this agreement, you have the right to leave the server in which this bot is a part of."))),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,"Server Administrator Agreement"),p.a.createElement("h4",null,"By adding ClashPerk to your server, you are consenting to the policies outlined in this agreement. If you, the server administrator, do not agree with any of the policies outlined in this agreement, you have the right to remove ClashPerk from your server."))),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,"Service User Agreement"),p.a.createElement("h4",null,"By being a member of the ClashPerk Team and having access to the ClashPerk Admin Web Panel, you are consenting to the policies outlined in this agreement. If you, the service user, do not agree with any policies outlined in this agreement, you have the right to ask for removal of your access to the services."))))))}}]),t}(p.a.Component),v=t(87),w=t(92),k=(t(70),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).toolTip=function(e){return p.a.createElement(v.a,{id:"button-tooltip"},e)},e}return Object(s.a)(t,[{key:"render",value:function(){return p.a.createElement("footer",null,p.a.createElement(u.a,null,p.a.createElement("div",{id:"icons"},p.a.createElement(w.a,{placement:"top",delay:{show:150,hide:400},overlay:this.toolTip("Join Support Server")},p.a.createElement("a",{href:"https://discord.gg/ppuppun"},p.a.createElement("i",{className:"fab fa-discord"}))),p.a.createElement(w.a,{placement:"top",delay:{show:150,hide:400},overlay:this.toolTip("Visit GitHub")},p.a.createElement("a",{href:"https://github.com/clashperk"},p.a.createElement("i",{className:"fab fa-github"}))),p.a.createElement(w.a,{placement:"top",delay:{show:150,hide:400},overlay:this.toolTip("Support us on Patreon")},p.a.createElement("a",{href:"https://www.patreon.com/join/clashperk"},p.a.createElement("i",{className:"fab fa-patreon"})))),p.a.createElement(h.a,null,p.a.createElement(d.a,null,p.a.createElement("p",null,"\xa9 ClashPerk ",(new Date).getFullYear())),p.a.createElement(d.a,null,p.a.createElement("div",{id:"legal"},p.a.createElement(l.b,{to:"/privacy"},"PRIVACY"),p.a.createElement(l.b,{to:"/rules"},"RULES"))))))}}]),t}(p.a.Component)),C=(t(72),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement(y,{hide:!0}),p.a.createElement("section",{id:"rules",style:{background:"#2a2c30"}},p.a.createElement(u.a,null,p.a.createElement("h2",{style:{textAlign:"center",fontSize:"30px"}},"Rules"),p.a.createElement("h3",{style:{textAlign:"center",padding:"30px",borderBottom:"solid 1px"}},"By using ClashPerk, you agree to these rules. If you break any rules, we reserve the right to ban you from ClashPerk"),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items",sm:!0},p.a.createElement("h2",null,"Rule One"),p.a.createElement("h3",null,"Userbotting or anything else used to automate running commands is strictly forbidden. As well as massive amounts of spam is not allowed.")),p.a.createElement(d.a,{className:"items",sm:!0},p.a.createElement("h2",null,"Rule Two"),p.a.createElement("h3",null,"Sharing bugs with other users is forbidden. Please report all bugs to staff on ClashPerk's Support Server so we can fix it as soon as possible."))),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items",sm:!0},p.a.createElement("h2",null,"Rule Three"),p.a.createElement("h3",null,"Using the bot to advertise anything will result in punishment. This includes other discord servers.")),p.a.createElement(d.a,{className:"items",sm:!0},p.a.createElement("h2",null,"Rule Four"),p.a.createElement("h3",null,"The Discord Terms of Service and Discord Community Guidelines also are enforcable through our bot."))),p.a.createElement("h3",{style:{textAlign:"center",paddingTop:"5px",color:"red"}},"Thank You! \u2764"))))}}]),t}(p.a.Component)),S=(t(73),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(y,{hide:!0}),p.a.createElement("div",{id:"guide"},p.a.createElement(u.a,{id:"heading"},p.a.createElement(h.a,null,p.a.createElement(d.a,{sm:!0},p.a.createElement("h1",{style:{textAlign:"center",fontSize:"45px"}},"Guide"),p.a.createElement("br",null),p.a.createElement("h2",{style:{textAlign:"center",fontSize:"20px"}},"A Quick Setup Guide For ClashPerk")))),p.a.createElement(u.a,{id:"content"},p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,"Step 1: Live Boards and Logs"),p.a.createElement("h4",null,"Create a new category (read-only for members) and get the bot access to it. Create 5 channels within that category (if you need all of live boards and logs)"),p.a.createElement("br",null),p.a.createElement("ul",null,p.a.createElement("li",null,p.a.createElement("h6",null,"Last Online Board"),p.a.createElement("p",null,"Self updating board which shows last seen of clan members.",p.a.createElement("br",null),p.a.createElement("a",{href:"/faq#how-does-last-online-work"},"How does it work?")),p.a.createElement("code",{className:"border"},"*setup lastonline ","<#clanTag>")),p.a.createElement("hr",null),p.a.createElement("li",null,p.a.createElement("h6",null,"Clan Games Board"),p.a.createElement("p",null,"Self updating board which shows clan games score of clan members.",p.a.createElement("br",null),p.a.createElement(l.b,{href:""},"How does it work?")),p.a.createElement("code",{className:"border"},"*setup clangames ","<#clanTag>")),p.a.createElement("hr",null),p.a.createElement("li",null,p.a.createElement("h6",null,"Donation Log"),p.a.createElement("p",null,"Logs donations and receives in a Discord channel."),p.a.createElement("code",{className:"border"},"*setup donations ","<#clanTag>")),p.a.createElement("hr",null),p.a.createElement("li",null,p.a.createElement("h6",null,"Live War Board"),p.a.createElement("p",null,"Logs donations and receives in a Discord channel."),p.a.createElement("code",{className:"border"},"*setup clan-wars ","<#clanTag>")),p.a.createElement("hr",null),p.a.createElement("li",null,p.a.createElement("h6",null,"Live Clan Promotional Embed"),p.a.createElement("p",null,"Create live updating clan promotional embeds for recruitment purpose and quick reference to your members."),p.a.createElement("code",{className:"border"},"*setup clanembed ","<#clanTag>")),p.a.createElement("hr",null),p.a.createElement("li",null,p.a.createElement("h6",null,"Clan Feed (aka Member Log)"),p.a.createElement("p",null,"Clan member join / leave log and flagged or banned player alert system. ",p.a.createElement("br",null),p.a.createElement(l.b,{href:""},"How does it work?")),p.a.createElement("code",{className:"border"},"*setup clan-feed ","<#clanTag>"," [@role]")),p.a.createElement("hr",null)))),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,"Step 2: Linking Player and Clan"),p.a.createElement("h4",null,"Once you link your clan / player, you won't have to type your clan / player tag for any other lookup commands."),p.a.createElement("br",null),p.a.createElement("ul",null,p.a.createElement("li",null,p.a.createElement("h6",null,"Link Clan"),p.a.createElement("p",null,"Links a clan to a Discord user account."),p.a.createElement("code",{className:"border"},"*link ","<#clanTag> [@user]"," ")),p.a.createElement("hr",null),p.a.createElement("li",null,p.a.createElement("h6",null,"Link Player"),p.a.createElement("p",null,"Links a player to a Discord user account."),p.a.createElement("code",{className:"border"},"*link ","<#playerTag> [@user]"," ")),p.a.createElement("hr",null)))))))}}]),t}(E.Component)),T=t(88),N=t(89),O=t(26),P=t.n(O),x=t(53),j=t.n(x),A=(t(75),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("section",{id:"features",style:{background:"#4a82f1"}},p.a.createElement(u.a,null,p.a.createElement(j.a,{left:!0},p.a.createElement("h1",{style:{textAlign:"center",padding:"30px"}},"Features")),p.a.createElement(P.a,{left:!0},p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items",sm:!0},p.a.createElement("i",{className:"fas fa-search"}),p.a.createElement("h2",null,"Clash Search"),p.a.createElement("h3",null,"Search Players, Clans ",p.a.createElement("br",null),"Or Anything in the Game")),p.a.createElement(d.a,{className:"items",sm:!0},p.a.createElement("i",{className:"fas fa-rss"}),p.a.createElement("h2",null,"Clan Feed"),p.a.createElement("h3",null,"See when Players Join or Leave,",p.a.createElement("br",null),"Troops Donations or Receives")),p.a.createElement(d.a,{className:"items",sm:!0},p.a.createElement("i",{className:"fas fa-user-check"}),p.a.createElement("h2",null,"User Friendly"),p.a.createElement("h3",null,"No Complex Setup. It Requires ",p.a.createElement("br",null),"Only One Command to get Started"))),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items",sm:!0},p.a.createElement("i",{className:"fas fa-award"}),p.a.createElement("h2",null,"Best Players"),p.a.createElement("h3",null,"Top Donations, Heroes, Trophies,",p.a.createElement("br",null),"Clan Games")),p.a.createElement(d.a,{className:"items",sm:!0},p.a.createElement("i",{className:"fas fa-trophy"}),p.a.createElement("h2",null,"War"),p.a.createElement("h3",null,"CWL, War Log, Roster,",p.a.createElement("br",null),"Missed Attacks, Current Attacks")),p.a.createElement(d.a,{className:"items",sm:!0},p.a.createElement("i",{className:"fas fa-bolt"}),p.a.createElement("h2",null,"Stable"),p.a.createElement("h3",null,"Stable and Always Online ",p.a.createElement("br",null),"ClashPerk will Always be there for You.")))))))}}]),t}(p.a.Component)),D=(t(76),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={offset:0},e.scrollRef=p.a.createRef(),e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({offset:this.scrollRef.current.offsetTop})}},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(y,{scrollRef:this.state.offset,hide:!1})," ",p.a.createElement("section",{id:"header",style:{background:"linear-gradient(135deg, #305af3 10%, #7b30f3)"}},p.a.createElement("div",{className:"details"},p.a.createElement(T.a,{id:"logo",src:"./icon-large.png",rounded:!0}),p.a.createElement(P.a,{top:!0},p.a.createElement("h1",null,"ClashPerk")),p.a.createElement(P.a,{bottom:!0},p.a.createElement("h2",null,"Feature-Rich and Powerful Clash of Clans Discord Bot")),p.a.createElement(P.a,{left:!0},p.a.createElement("p",null,p.a.createElement("a",{href:"https://clashperk.com/invite",target:"_blank",rel:"noopener noreferrer"},p.a.createElement(N.a,{id:"button"},"Invite ClashPerk")),p.a.createElement("a",{href:"https://discord.gg/ppuppun",target:"_blank",rel:"noopener noreferrer"},p.a.createElement(N.a,{id:"button"},"Official Discord")))))),p.a.createElement("div",{ref:this.scrollRef},p.a.createElement(A,null)))}}]),t}(p.a.Component)),L=(t(77),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(y,{hide:!0}),p.a.createElement("div",{id:"faq"},p.a.createElement(u.a,{className:"heading"},p.a.createElement(h.a,null,p.a.createElement(d.a,{sm:!0},p.a.createElement("h1",{style:{textAlign:"center",fontSize:"40px"}},"FAQ"),p.a.createElement("br",null),p.a.createElement("h2",{id:"commonly-asked-questions",style:{textAlign:"center",fontSize:"20px"}},"Commonly Asked Questions")))),p.a.createElement(u.a,{className:"content"},p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,p.a.createElement("a",{href:"#commonly-asked-questions"},"#")," Q1: Is ClashPerk Legal / Fair Play?"),p.a.createElement("h4",null,"Yes, we always support Fair Play. ",p.a.createElement("br",null),"ClashPerk collects all the data directly from Supercell API. ",p.a.createElement("br",null),"For more info visit",p.a.createElement("a",{style:{color:"white"},href:"https://developer.clashofclans.com"},"https://developer.clashofclans.com")))),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,p.a.createElement("a",{href:"#commonly-asked-questions"},"#")," Q2: Why the bot is not working in my server?"),p.a.createElement("h4",null,"Make sure that ClashPerk has all required permissions in your Discord."))),p.a.createElement(h.a,null,p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,p.a.createElement("a",{href:"#what-is-clan-verification"},"#")," Q3: What is clan verification?"),p.a.createElement("h4",null,"It's a security feature of the bot to ensure you are a Leader or Co-Leader in the clan and you're not trying to abuse the bot by tracking clans which you don't own."),p.a.createElement("strong",null,"How to verify?"),p.a.createElement("ul",{style:{paddingTop:"10px",paddingBottom:"10px"}},p.a.createElement("li",null,"In order to verify your clan, you need to be a leader / co-leader of the clan"),p.a.createElement("li",null,"Add the code CPXX at end of the clan description. (actual code will be provided by the bot)")),p.a.createElement("strong",null,"Things to know..."),p.a.createElement("h4",{style:{paddingTop:"5px"}},"You should wait at least 2 min before you run the command again and the code should be removed once the command has been successfully run."))),p.a.createElement(h.a,{id:"how-does-last-online-work"},p.a.createElement(d.a,{className:"items"},p.a.createElement("h1",null,p.a.createElement("a",{href:"#how-does-last-online-work"},"#")," Q4: How does last online work?"),p.a.createElement("h4",null,"The bot can't see who is online in your clan. So it uses the following points to determine an approximate last online time!"),p.a.createElement("ul",null,p.a.createElement("li",null,"Donated or Received Troops"),p.a.createElement("li",null,"Gained or Lost Versus Trophies"),p.a.createElement("li",null,"Player Name Change"),p.a.createElement("li",null,"Increased XP Level"),p.a.createElement("li",null,"Gained Legend Trophies"),p.a.createElement("li",null,"Attacked in War (Coming Soon)")))),p.a.createElement(h.a,{id:"how-does-clan-games-scoreboard-work"},p.a.createElement(d.a,{className:"items",style:{paddingTop:"5px"}},p.a.createElement("h1",null,p.a.createElement("a",{href:"#how-does-clan-games-scoreboard-work"},"#")," Q5: How does Clan Games scoreboard work?"),p.a.createElement("h4",null,"The Clan Games point can't be obtained directly! It's only possible by comparing ",p.a.createElement("strong",null,"Games Champion")," achievement. ",p.a.createElement("br",null),"Our system pulls everyone's ",p.a.createElement("strong",null,"Games Champion")," achievement beginning of the Clan Games and compares every 30 min."))))))}}]),t}(E.Component)),I=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(o.d,null,p.a.createElement(o.b,{exact:!0,path:"/",component:D}),p.a.createElement(o.b,{exact:!0,path:"/privacy",component:g}),p.a.createElement(o.b,{exact:!0,path:"/rules",component:C}),p.a.createElement(o.b,{exact:!0,path:"/guide",component:S}),p.a.createElement(o.b,{exact:!0,path:"/faq",component:L}),p.a.createElement(o.a,{to:"/"})),p.a.createElement(k,null))};t(78);r.a.render(p.a.createElement(l.a,null,p.a.createElement(I,null)),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.0c6c1aa5.chunk.js.map