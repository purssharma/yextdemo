/* empty css                      */import{j as e,F as m,a as d}from"../static/jsx-runtime-dbffbe86.js";import"../static/index-57ee1c51.js";const x={stream:{$id:"country",filter:{savedFilterIds:["dm_banner-bank-directory_address_countrycode"]},fields:["id","uid","meta","name","description","c_addressRegionDisplayName","slug","dm_directoryParents.name","dm_directoryParents.slug","dm_directoryParents.meta","dm_directoryChildren.name","dm_directoryChildren.slug"],localization:{locales:["en"],primary:!1}}},f=({document:t})=>`${t.id}`,N=({relativePrefixToRoot:t,path:c,document:i})=>({title:i.name,charset:"UTF-8",viewport:"width=device-width, initial-scale=1",tags:[{type:"meta",attributes:{description:i.description}},{type:"link",attributes:{rel:"icon",type:"image/x-icon",href:""}}]}),b=({relativePrefixToRoot:t,path:c,document:i,__meta:p})=>{const{_site:h,name:g,description:r,c_addressRegionDisplayName:l,dm_directoryParents:u,dm_directoryChildren:a}=i;console.log(a);const o=a&&a.map(n=>e("div",{children:e("a",{href:t+n.slug,className:"font-bold text-2xl text-blue-700 hover:underline",children:n.name},"uRL")}));var s;return r.includes("United States")?s=r.replace("United States","the United States"):s=r,e(m,{children:e("div",{className:"centered-container",children:d("div",{className:"section space-y-14 px-10",children:[d("div",{className:"space-y-6",children:[d("h1",{className:"text-center",children:["Locations - ",l]}),e("p",{className:"text-2xl text-center",children:s})]}),e("div",{className:"grid gap-10 sm:grid-cols-2 md:grid-cols-4",children:o})]})})})};export{x as config,b as default,N as getHeadConfig,f as getPath};
