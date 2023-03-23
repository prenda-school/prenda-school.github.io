"use strict";(self.webpackChunkprenda_engineering=self.webpackChunkprenda_engineering||[]).push([[7373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Staging"},i="Staging environment overview",l={unversionedId:"Practices/staging",id:"Practices/staging",title:"Staging environment overview",description:"The staging environment generally represents functionality from production plus functionality that may be under development or ready-for-release to production; that means that there may be bugs in staging that won\u2019t exist in production. The underlying databases are refreshed from production daily at 915 AM MST). The staging environment does not implement 3rd party connections (hubspot, mailchimp, etc).",source:"@site/docs/Practices/staging.md",sourceDirName:"Practices",slug:"/Practices/staging",permalink:"/docs/Practices/staging",draft:!1,editUrl:"https://github.com/prenda-school/prenda-school.github.io/tree/main/docs/Practices/staging.md",tags:[],version:"current",frontMatter:{sidebar_label:"Staging"},sidebar:"tutorialSidebar",previous:{title:"Useful Abstractions",permalink:"/docs/Practices/hub/learning"},next:{title:"External Docs",permalink:"/docs/external-documentation"}},s={},c=[{value:"Deployments",id:"deployments",level:2},{value:"Important information",id:"important-information",level:2},{value:"Prenda World",id:"prenda-world",level:3},{value:"Hub",id:"hub",level:3},{value:"Bridge",id:"bridge",level:3},{value:"Discussion",id:"discussion",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"staging-environment-overview"},"Staging environment overview"),(0,r.kt)("p",null,"The staging environment generally represents functionality from production ",(0,r.kt)("em",{parentName:"p"},"plus")," functionality that may be under development or ready-for-release to production; that means that there may be bugs in staging that won\u2019t exist in production. The underlying databases are refreshed from production daily at 9:15 AM UTC (2:15 AM MST). The staging environment does not implement 3rd party connections (hubspot, mailchimp, etc)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Websites"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prenda World"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://stage.prendaworld.com/"},"https://stage.prendaworld.com/")),(0,r.kt)("td",{parentName:"tr",align:null},"Logins with email/password are supported. Google Authentication is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://stage-bridge.prenda.co/app"},"https://stage-bridge.prenda.co/app")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hub"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://stage-hub.prenda.co"},"https://stage-hub.prenda.co")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h1",{id:"technical-information"},"Technical Information"),(0,r.kt)("h2",{id:"deployments"},"Deployments"),(0,r.kt)("p",null,"You can deploy a branch to staging via the GitHub Action ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prenda-school/prendaworld/actions/workflows/deploy-branch-to-staging.yml"},"deploy-branch-to-staging.yml"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click "Run workflow" and select your branch to deploy it out.'),(0,r.kt)("li",{parentName:"ul"},"This will send a slack notice in the ",(0,r.kt)("a",{parentName:"li",href:"https://prenda.slack.com/archives/C04NHS2280J"},"#feed-staging-tech channel"),".")),(0,r.kt)("p",null,"Check this channel to see who was the last person to deploy code, and check that they are done testing on staging. Also put a notice out in the ",(0,r.kt)("a",{parentName:"p",href:"https://prenda.slack.com/archives/C03EG9D0YH5"},"#group-technology-internal")," channel."),(0,r.kt)("h2",{id:"important-information"},"Important information"),(0,r.kt)("h3",{id:"prenda-world"},"Prenda World"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Environment: The Prendaworld staging application is hosted on meteor in the test.prendaworld.com application.\nSettings are in a JSON file in the \u201ccurrent version\u201d link on the ",(0,r.kt)("a",{parentName:"p",href:"https://galaxy.meteor.com/app/test.prendaworld.com/versions"},"galaxy versions page"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Database: The staging Prendaworld database is hosted on ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.mongodb.com/v2/5f0fb9d78f81be4c2e6666b4#/clusters/detail/PrendaWorld-Staging"},"MongoDB Atlas"),". It is hosted in the Northern Virginia region (us-east-1). It is updated daily from the production database by a cron job on the Digital Ocean droplet \u201cschool-general\u201d. The cron job is configured in the /etc/crontab file."))),(0,r.kt)("h3",{id:"hub"},"Hub"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Environment: The hub application is hosted in the Prenda AWS root account in the us-east-2 region on the ",(0,r.kt)("a",{parentName:"p",href:"https://us-east-2.console.aws.amazon.com/ec2/home?region=us-east-2#InstanceDetails:instanceId=i-0969131949eca059a"},"hub-express-staging instance"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Database: The staging Hub database is located in the AWS us-east-2 region in the ",(0,r.kt)("a",{parentName:"p",href:"https://us-east-2.console.aws.amazon.com/rds/home?region=us-east-2#database:id=aurorahub-stage;is-cluster=true"},"aurorahub-stage cluster"),". The cluster is cloned daily by a cron job on the \u201cworkers instance\u201d in our AWS root account in the region us-east-2. The cron job is scheduled in the sysadmin users crontab file."))),(0,r.kt)("h3",{id:"bridge"},"Bridge"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Environment: The bridge application is hosted in the Prenda AWS root account in the us-east-2 region on the ",(0,r.kt)("a",{parentName:"p",href:"https://us-east-2.console.aws.amazon.com/ec2/home?region=us-east-2#InstanceDetails:instanceId=i-0969131949eca059a"},"hub-express-staging instance"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Database: The bridge application accesses the Hub database through API endpoints in the hub application."))),(0,r.kt)("h2",{id:"discussion"},"Discussion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Down the road we may reset staging environments every Monday morning so that it can be ready for being used that week.")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have multiple way to testing changes before being live to our customers, utilize the staging environment or LaunchDarkly flags for this purpose.")))}u.isMDXComponent=!0}}]);