(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},85:function(e,n,t){"use strict";t.r(n);var o=t(5893),r=t(7294),a=t(2729),i=t.n(a);n.default=()=>{let e=[...Array(9)].map(()=>[...Array(9)].map(()=>-1)),n=[...Array(9)].map(()=>[...Array(9)].map(()=>0)),[t,a]=(0,r.useState)(n),[_,d]=(0,r.useState)(n),c=structuredClone(_),l=structuredClone(t),f=()=>!_.flat().includes(1),u=()=>_.flat().filter((e,n)=>1===e&&1===t.flat()[n]).length>0,s=(n,t)=>{e[t][n]=[-1,0,1].map(e=>[-1,0,1].map(o=>void 0!==_[t+o]&&1===_[t+o][n+e])).flat().filter(Boolean).length,0===e[t][n]&&[-1,0,1].forEach(o=>[-1,0,1].forEach(r=>{var a;(null===(a=e[t+r])||void 0===a?void 0:a[n+o])===-1&&s(n+o,t+r)}))},m=(e,n)=>{if(!u()){if(f()){let t=()=>c.flat().filter(e=>1===e).length;(()=>{for(;10>t();){let t=Math.floor(9*Math.random()),o=Math.floor(9*Math.random());t===e&&o===n||(c[o][t]=1)}})(),d(c)}0===t[n][e]&&(l[n][e]=1,a(l))}},h=(e,n)=>{if(u())return;document.getElementsByTagName("html")[0].oncontextmenu=()=>!1;let o=t[n][e];1!==o&&(l[n][e]=0===o?2:2===o?3:3===o?0:o,a(l))};return t.forEach((n,t)=>n.forEach((n,o)=>{1===n?s(o,t):2===n?e[t][o]=9:3===n?e[t][o]=10:e[t][o]=-1})),u()&&_.forEach((n,t)=>n.forEach((n,o)=>{1===n&&(e[t][o]=11)})),(0,o.jsx)("div",{className:i().container,children:(0,o.jsx)("div",{className:i().board,children:e.map((e,n)=>e.map((e,t)=>(0,o.jsx)("div",{className:-1===e?i().stone:i().number,style:{backgroundPositionX:30-30*e},onClick:()=>m(t,n),onContextMenu:()=>h(t,n)},"".concat(n,"-").concat(t))))})})}},2729:function(e){e.exports={container:"index_container___q52_",number:"index_number__gEG4k",main:"index_main__OmNu0",footer:"index_footer__v7pGE",title:"index_title__k0g7D",description:"index_description__fcKbo",code:"index_code__r6g09",grid:"index_grid__LrZtk",card:"index_card__7H7ka",logo:"index_logo__Z0ACT",board:"index_board__dNO5V",stone:"index_stone__5i_qa"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);