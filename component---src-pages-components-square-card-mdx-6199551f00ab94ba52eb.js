"use strict";(self.webpackChunkibm_fusion=self.webpackChunkibm_fusion||[]).push([[1876],{3116:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return y}});var n=a(1024),r=(a(1504),a(7876)),l=a(968),o=a(2440);const i=["components"],d={},g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},m=g("PageDescription"),s=g("Row"),c=g("SquareCard"),p={_frontmatter:d},u=l.c;function y(e){let{components:t}=e,a=(0,n.c)(e,i);return(0,r.yg)(u,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(m,{mdxType:"PageDescription"},(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"<SquareCard>")," component should generally be used inside of a\n",(0,r.yg)("inlineCode",{parentName:"p"},'<Row className="square-card-group">')," component. This allows us to\nproperly space the columns components when they wrap on mobile.")),(0,r.yg)("h2",null,"Example"),(0,r.yg)(s,{className:"square-card-group",mdxType:"Row"},(0,r.yg)(c,{title:"A small sentence can go here in conjunction with a pictogram",href:"/",mdxType:"SquareCard"},(0,r.yg)(o.sbU,{"aria-label":"Tools",className:"my-custom-class",mdxType:"Tools"})),(0,r.yg)(c,{title:"A small sentence can go here with no pictogram",href:"/",helperText:"(Optional text)",mdxType:"SquareCard"}),(0,r.yg)(c,{title:"Short title",href:"/",bodyText:"A short body paragraph describing the card could go here.",mdxType:"SquareCard"}),(0,r.yg)(c,{title:"Small title here",smallTitle:!0,href:"/",bodyText:"A short body paragraph describing the card could go here.",disabled:!0,mdxType:"SquareCard"},(0,r.yg)(o.sbU,{"aria-label":"Tools",className:"my-custom-class",mdxType:"Tools"})),(0,r.yg)(c,{title:"Small title here",smallTitle:!0,href:"/",bodyText:"A short body paragraph describing the card could go here.",helperText:"(Optional text)",disabled:!0,mdxType:"SquareCard"})),(0,r.yg)("h2",null,"Code"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/SquareCard/SquareCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/SquareCard",path:"components/SquareCard/SquareCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/SquareCard"},'import { Tools } from \'@carbon/pictograms-react\';\n\n<Row className="square-card-group">\n  <SquareCard\n    title="A small sentence can go here in conjunction with a pictogram"\n    href="/"\n    >\n    <Tools aria-label="Tools" className="my-custom-class" />\n  </SquareCard>\n\n  <SquareCard\n    title="A small sentence can go here with no pictogram"\n    href="/"\n    helperText="(Optional text)"\n    />\n\n  <SquareCard\n    title="Short title"\n    href="/"\n    bodyText="A short body paragraph describing the card could go here."\n    />\n\n  <SquareCard\n    title="Small title here"\n    smallTitle\n    href="/"\n    bodyText="A short body paragraph describing the card could go here."\n    disabled\n    >\n    <Tools aria-label="Tools" className="my-custom-class" />\n  </SquareCard>\n\n  <SquareCard\n    title="Small title here"\n    smallTitle\n    href="/"\n    bodyText="A short body paragraph describing the card could go here."\n    helperText="(Optional text)"\n    disabled\n    />\n</Row>\n')),(0,r.yg)("h3",null,"Props"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"property"),(0,r.yg)("th",{parentName:"tr",align:null},"propType"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default"),(0,r.yg)("th",{parentName:"tr",align:null},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"children"),(0,r.yg)("td",{parentName:"tr",align:null},"node"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Optional pictogram icon to add to bottom left corner cannot be combined with ‘helperText’")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"href"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Set url for card")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallTitle"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Set to true to display smaller title")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"title"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Card title - default is ",(0,r.yg)("inlineCode",{parentName:"td"},"large"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"actionIcon"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ArrowRight")),(0,r.yg)("td",{parentName:"tr",align:null},"Action icon, default is no ‘ArrowRight’, options are ",(0,r.yg)("inlineCode",{parentName:"td"},"Launch"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"ArrowRight"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"Download"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"Disabled"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"Email"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"disabled"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Set for disabled card")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"className"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Add custom class name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"helperText"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Optional helper text that appears at the bottom left corner cannot be combined with ‘children’ text. This is only meant for a date or a category name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bodyText"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Optional body text for card description")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"color"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"light")),(0,r.yg)("td",{parentName:"tr",align:null},"Set to ",(0,r.yg)("inlineCode",{parentName:"td"},"dark")," for dark background")))))}y.isMDXComponent=!0},968:function(e,t,a){a.d(t,{c:function(){return x}});var n=a(1504),r=a(6724),l=a.n(r),o=a(9756),i=a(4096),d=a(1756),g=a(9132),m=a.n(g);var s=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var c=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:i,branch:d}=a||r,g=l+"/edit/"+d+i+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:g},"Edit this page on GitHub"))):null},p=a(9168),u=a(568);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.c)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),i=t===r,d=new RegExp(r+"/?(#.*)?$"),g=a.replace(d,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+g},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component);var h=y,b=a(488),N=a(3008),T=a(8672);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(T.WA,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(T.ou,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=e=>{let{pageContext:t,children:a,location:r,Title:g}=e;const{frontmatter:m={},relativePagePath:u,titleType:y}=t,{tabs:T,title:x,theme:C,description:E,keywords:w,date:S}=m,{interiorTheme:q}=(0,N.c)(),{site:{pathPrefix:v}}=(0,o.useStaticQuery)("2456312558"),P=v?r.pathname.replace(v,""):r.pathname,k=T?P.split("/").filter(Boolean).slice(-1)[0]||l()(T[0],{lower:!0}):"",A=C||q;return n.createElement(d.c,{tabs:T,homepage:!1,theme:A,pageTitle:x,pageDescription:E,pageKeywords:w,titleType:y},n.createElement(s,{title:g?n.createElement(g,null):x,label:"label",tabs:T,theme:A}),T&&n.createElement(h,{title:x,slug:P,tabs:T,currentTab:k}),n.createElement(b.c,{padded:!0},a,n.createElement(c,{relativePagePath:u}),n.createElement(f,{date:S})),n.createElement(p.c,{pageContext:t,location:r,slug:P,tabs:T,currentTab:k}),n.createElement(i.c,null))}}}]);
//# sourceMappingURL=component---src-pages-components-square-card-mdx-6199551f00ab94ba52eb.js.map