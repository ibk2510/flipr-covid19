(this.webpackJsonpfd=this.webpackJsonpfd||[]).push([[0],{52:function(e,a,t){e.exports=t(83)},57:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(48),c=t.n(r),s=t(16),o=t(1);t(57);function i(){return l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark"},l.a.createElement("a",{class:"navbar-brand",href:"/"},"COVID-19"),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarText"},l.a.createElement("ul",{class:"navbar-nav ml-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/contact"},"Contact & Helpline")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/notifications"},"Notifications & Advisories")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/hospitals"},"Hospitals")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/stats"},"Stats"))))))}var m=t(8),d=t(9),u=t(11),h=t(10),p=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"card shadow br"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("img",{src:"./images/covid.jpeg",alt:"covid-19"})),l.a.createElement("div",{className:"col-md"},l.a.createElement("h1",null,"COVID-19 Pandemic")),l.a.createElement("div",{className:"col"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("div",{className:"card br shadow"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",{class:"card-title"},"COVID-19"),l.a.createElement("p",{class:"card-text"},"Coronavirus disease 2019 (COVID\u201119) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).[10] It was first identified in December 2019 in Wuhan, Hubei, China, and has resulted in an ongoing pandemic. As of 14 September 2020, more than 29 million cases have been reported across 188 countries and territories with more than 924,000 deaths; more than 19.6 million people have recovered")))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("div",{className:"card br shadow"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",{class:"card-title"},"Symptoms"),l.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"Most Common Symptoms"),l.a.createElement("ul",{className:"card-text"},l.a.createElement("li",null,"Fever"),l.a.createElement("li",null,"Dry cough"),l.a.createElement("li",null,"Tiredness")),l.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"Less Common Symptoms"),l.a.createElement("ul",null,l.a.createElement("li",null,"Aches and Pains"),l.a.createElement("li",null,"Sore throat"),l.a.createElement("li",null,"Diarrhoea"),l.a.createElement("li",null,"Conjunctivitis"),l.a.createElement("li",null,"Headache"),l.a.createElement("li",null,"Loss of taste or smell"),l.a.createElement("li",null,"A Rash on skin, or discolouration of fingers or toes")))))))}}]),t}(n.Component),v=t(15),E=t(20),b=t.n(E),f=t(26),N=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={data:null},e.headers=[{title:"S No",prop:"id"},{title:"State",prop:"loc"},{title:"Number",prop:"number"}],e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.rootnet.in/covid19-in/contacts").then((function(e){return e.json()})).then((function(a){e.setState({data:a.data.contacts}),console.log(a)}))}},{key:"render",value:function(){if(null==this.state.data)return l.a.createElement("div",null,l.a.createElement("h2",null,"Fetching data...."));var e=this.state.data.regional.map((function(e,a){return Object(v.a)(Object(v.a)({},e),{},{id:a+1})}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card shadow ctr br"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("div",{className:"card br contactcard"},l.a.createElement("h3",null,"Contact"),l.a.createElement("h6",null,this.state.data.primary.number))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("div",{className:"card br contactcard"},l.a.createElement("h3",null,"Toll-Free"),l.a.createElement("h6",null,this.state.data.primary["number-tollfree"])))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("h1",{className:"icolor"},l.a.createElement("a",{href:this.state.data.primary.twitter},l.a.createElement(f.c,null)))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("h1",{className:"icolor"},l.a.createElement("a",{href:"mailto:"+this.state.data.primary.email},l.a.createElement(f.a,null)))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("h1",{className:"icolor"},l.a.createElement("a",{href:this.state.data.primary.facebook},l.a.createElement(f.b,null))))))),l.a.createElement("div",{className:"card shadow br"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement(b.a,{tableHeaders:this.headers,tableBody:e,rowsPerPage:10})))))}}]),t}(n.Component),g=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={data:null},e.headers=[{title:"S No",prop:"id"},{title:"Date",prop:""},{title:"Notification Title",prop:"title"},{title:"Link",prop:"link"}],e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.rootnet.in/covid19-in/notifications").then((function(e){return e.json()})).then((function(a){e.setState({data:a.data}),console.log(a)}))}},{key:"render",value:function(){if(null==this.state.data)return l.a.createElement("div",null,l.a.createElement("h2",null,"Fetching data...."));var e=this.state.data.notifications.map((function(e,a){var t=l.a.createElement("a",{className:"btn btn-primary",href:e.link},"View");return Object(v.a)(Object(v.a)({},e),{},{id:a+1,link:t})}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card br shadow ctr contactcard"},l.a.createElement("h1",null,"Notifications & Advisories")),l.a.createElement("div",{className:"card shadow br"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement(b.a,{className:"border",tableHeaders:this.headers,tableBody:e,rowsPerPage:7})))))}}]),t}(n.Component),y=t(50),j=t(51),O=(t(82),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState({geographical_state:e.target.value}),console.log(e.target.value,"is the current selected state");var a=e.target.value,t=Object(j.a)(n.state.total_records),l=[];console.log(t,"are the current records");var r,c=Object(y.a)(t);try{for(c.s();!(r=c.n()).done;){var s=r.value;s.fields.state&&(console.log(s.fields.state,a),s.fields.state==a&&l.push(s))}}catch(o){c.e(o)}finally{c.f()}console.log(l,"are the filtered records"),n.setState({records:l})},n.state={total_records:null,records:null,geographical_state:"None"},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.airtable.com/v0/apps1LGyc0CJrFRu2/Imported%20table",{method:"GET",headers:{Authorization:"Bearer keyqf6toevoER2Wix"}}).then((function(e){return e.json()})).then((function(a){console.log(a.records),e.setState({records:a.records,total_records:a.records})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("div",{className:"card br shadow"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h1",null,"Charts"),l.a.createElement("h6",{className:"card-text"},"The Graphical Representation of Deaths"),l.a.createElement("img",{src:"/images/3.png",alt:""})))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("div",{className:"card br shadow"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-subtitle"},"State"),l.a.createElement("select",{class:"custom-select",value:this.state.geographical_state,onChange:this.handleChange},l.a.createElement("option",{value:"None",selected:!0},"Select One"),l.a.createElement("option",{value:"Andaman Nicobar Islands"},"Andaman Nicobar Islands"),l.a.createElement("option",{value:"Andra Pradesh"},"Andra Pradesh"),l.a.createElement("option",{value:"Arunachal pradesh"},"Arunachal pradesh"),l.a.createElement("option",{value:"Assam"},"Assam"),l.a.createElement("option",{value:"Bihar"},"Bihar"),l.a.createElement("option",{value:"Chandigarh"},"Chandigarh"),l.a.createElement("option",{value:"Delhi"},"Delhi"),l.a.createElement("option",{value:"Goa"},"Goa"),l.a.createElement("option",{value:"Gujarat"},"Gujarat"),l.a.createElement("option",{value:"Haryana"},"Haryana"),l.a.createElement("option",{value:"Himachal Pradesh"},"Himachal Pradesh"),l.a.createElement("option",{value:"Jammu and Kashmir"},"Jammu and Kashmir"),l.a.createElement("option",{value:"Jharkhand"},"Jharkhand"),l.a.createElement("option",{value:"Karnataka"},"Karnataka"),l.a.createElement("option",{value:"Kerala"},"Kerala"),l.a.createElement("option",{value:"Ladakh"},"Ladakh"),l.a.createElement("option",{value:"Madhya Pardesh"},"Madhya Pardesh"),l.a.createElement("option",{value:"Maharastra"},"Maharastra"),l.a.createElement("option",{value:"Manipur"},"Manipur"),l.a.createElement("option",{value:"Meghalaya"},"Meghalaya"),l.a.createElement("option",{value:"Mizoram"},"Mizoram"),l.a.createElement("option",{value:"Odisha"},"Odisha"),l.a.createElement("option",{value:"Puducherry"},"Puducherry"),l.a.createElement("option",{value:"Punjab"},"Punjab"),l.a.createElement("option",{value:"Rajasthan"},"Rajasthan"),l.a.createElement("option",{value:"Tamil Nadu"},"Tamil Nadu"),l.a.createElement("option",{value:"Tripura"},"Tripura"),l.a.createElement("option",{value:"Uttar Pradesh"},"Uttar Pradesh"),l.a.createElement("option",{value:"Uttarakhand"},"Uttarakhand"),l.a.createElement("option",{value:"West Bengal"},"West Bengal")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",{className:"card-subtitle"},"Age Group"),l.a.createElement("select",{class:"custom-select"},l.a.createElement("option",{selected:!0},"Open this select menu"),l.a.createElement("option",{value:"1"},"0-9"),l.a.createElement("option",{value:"2"},"10-19"),l.a.createElement("option",{value:"3"},"20-29"),l.a.createElement("option",{value:"4"},"30-39"),l.a.createElement("option",{value:"5"},"40-49"),l.a.createElement("option",{value:"6"},"50-59"),l.a.createElement("option",{value:"7"},"60-69"),l.a.createElement("option",{value:"8"},"70+")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",{className:"card-subtitle"},"Gender"),l.a.createElement("select",{class:"custom-select"},l.a.createElement("option",{selected:!0},"Open this select menu"),l.a.createElement("option",{value:"1"},"Male"),l.a.createElement("option",{value:"2"},"Female"),l.a.createElement("option",{value:"3"},"Unknown")))),l.a.createElement("div",{className:"row-sm"},l.a.createElement("div",{className:"card br shadow"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",null,"From"),l.a.createElement("input",{type:"date",name:"",id:""}),l.a.createElement("h4",null,"To"),l.a.createElement("input",{type:"date",name:"",id:""})))),l.a.createElement("div",{className:"row-sm"},l.a.createElement("div",{className:"card br shadow"},l.a.createElement("div",{className:"card-body"},l.a.createElement("button",{type:"button",class:"btn btn-primary"},"Download"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"input-group mb-3"},l.a.createElement("input",{type:"text",class:"form-control",placeholder:"Mailid To Send","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),l.a.createElement("div",{class:"input-group-append"},l.a.createElement("button",{class:"btn btn-danger",type:"button"},"Send")))))))))}}]),t}(n.Component)),k=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={data:null},e.headers=[{title:"S No",prop:"id"},{title:"State Name",prop:"state"},{title:"Rural Hospitals",prop:"ruralHospitals"},{title:"Rural Beds",prop:"ruralBeds"},{title:"Urban Hospitals",prop:"urbanHospitals"},{title:"Urban Beds",prop:"urbanBeds"},{title:"Total Hospitals",prop:"totalHospitals"},{title:"Total Beds(State Wise)",prop:"totalBeds"}],e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.rootnet.in/covid19-in/hospitals/beds").then((function(e){return e.json()})).then((function(a){e.setState({data:a.data}),console.log(a)}))}},{key:"render",value:function(){if(null==this.state.data)return l.a.createElement("div",null,l.a.createElement("h2",null,"Fetching data...."));var e=this.state.data.regional.map((function(e,a){return Object(v.a)(Object(v.a)({},e),{},{id:a+1})}));return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"card shadow br ctr contactcard"},l.a.createElement("h2",null,"Hospitals & Beds"))),l.a.createElement("div",{className:"card shadow"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement(b.a,{tableHeaders:this.headers,tableBody:e,rowsPerPage:10})))))}}]),t}(n.Component),w=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={data:null},e.headers=[{title:"S No",prop:"id"},{title:"State Name",prop:"state",filterable:!0},{title:"Institute Name",prop:"name"},{title:"City",prop:"city"},{title:"Type",prop:"ownership"},{title:"Admission Capacity",prop:"admissionCapacity"},{title:"Hospital Beds",prop:"hospitalBeds"}],e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.rootnet.in/covid19-in/hospitals/medical-colleges").then((function(e){return e.json()})).then((function(a){e.setState({data:a.data}),console.log(a)}))}},{key:"render",value:function(){if(null==this.state.data)return l.a.createElement("div",null,l.a.createElement("h2",null,"Fetching data...."));var e=this.state.data.medicalColleges.map((function(e,a){return Object(v.a)(Object(v.a)({},e),{},{id:a+1})}));return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"card shadow br ctr contactcard"},l.a.createElement("h2",null,"Medical Colleges & Beds")),l.a.createElement("div",{className:"card shadow"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement(b.a,{tableHeaders:this.headers,tableBody:e,rowsPerPage:10}))))}}]),t}(n.Component),C=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).toggleBox1=function(){n.setState({isActive:!0})},n.toggleBox2=function(){n.setState({isActive:!1})},n.state={isActive:!1},n}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"card shadow br ctr contactcard"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",null,"Hospital Dashboard"))),l.a.createElement("div",{className:"card shadow br my-2"},l.a.createElement("div",{className:"card-body"},l.a.createElement("ul",{class:"nav nav-tabs flex-sm-row"},l.a.createElement("li",{class:"nav-item"},l.a.createElement(s.b,{onClick:this.toggleBox2,className:"nav-link ".concat(this.state.isActive?"":"active"),to:"/hospitals"},"Hospitals & beds")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(s.b,{onClick:this.toggleBox1,className:"nav-link ".concat(this.state.isActive?"active":""),to:"/hospitals/medicalclgbeds"},"Medical Colleges & beds"))),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/hospitals",component:k}),l.a.createElement(o.a,{exact:!0,path:"/hospitals/medicalclgbeds",component:w}))))))}}]),t}(n.Component);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s.a,null,l.a.createElement(i,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:p}),l.a.createElement(o.a,{exact:!0,path:"/contact",component:N}),l.a.createElement(o.a,{exact:!0,path:"/notifications",component:g}),l.a.createElement(o.a,{exact:!0,path:"/stats",component:O}),l.a.createElement(o.a,{exact:!0,path:"/hospitals",component:C}))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.9717fa05.chunk.js.map