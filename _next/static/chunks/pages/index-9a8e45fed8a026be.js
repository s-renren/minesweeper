(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(o,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(85)}])},85:function(o,n,e){"use strict";e.r(n);var a=e(5893),t=e(7294),r=e(2729),i=e.n(r);n.default=()=>{let o=[...Array(9)].map(()=>[...Array(9)].map(()=>-1)),n=[...Array(9)].map(()=>[...Array(9)].map(()=>0)),[e,r]=(0,t.useState)(n),[l,c]=(0,t.useState)(n),_=structuredClone(l),d=structuredClone(e),f=()=>!l.flat().includes(1),u=()=>_.flat().filter(o=>1===o).length,s=()=>l.flat().filter((o,n)=>1===o&&1===e.flat()[n]).length>0,h=(o,n)=>{[-1,0,1].forEach(a=>{[-1,0,1].forEach(t=>{var i;(null===(i=e[n+t])||void 0===i?void 0:i[o+a])===0&&(d[n+t][o+a]=1,r(d))})})},m=(o,n)=>{let a=0,t=0;[-1,0,1].forEach(r=>[-1,0,1].forEach(i=>{var c,_,d;(null===(c=l[n+i])||void 0===c?void 0:c[o+r])===1&&(a+=1,(null===(_=e[n+i])||void 0===_?void 0:_[o+r])===2?t+=1:(null===(d=e[n+i])||void 0===d?void 0:d[o+r])===3&&(t+=1))})),console.log("aBCN: ",a),console.log("AFCN: ",t),console.log("---------"),0!==a&&a===t&&h(o,n)},E=(n,e)=>{o[e][n]=[-1,0,1].map(o=>[-1,0,1].map(a=>void 0!==l[e+a]&&1===l[e+a][n+o])).flat().filter(Boolean).length,0===o[e][n]&&[-1,0,1].forEach(a=>[-1,0,1].forEach(t=>{var r;(null===(r=o[e+t])||void 0===r?void 0:r[n+a])===-1&&E(n+a,e+t)}))},g=(o,n)=>{s()||(f()&&((()=>{for(;10>u();){let e=Math.floor(9*Math.random()),a=Math.floor(9*Math.random());e===o&&a===n||(_[a][e]=1)}})(),c(_)),0===e[n][o]&&(d[n][o]=1,r(d),m(o,n)))},v=(o,n)=>{if(s())return;document.getElementsByTagName("html")[0].oncontextmenu=()=>!1;let a=e[n][o];1!==a&&(d[n][o]=0===a?2:2===a?3:3===a?0:a,r(d))};return e.forEach((o,n)=>o.forEach((o,e)=>{1===o&&E(e,n)}),e.forEach((n,e)=>n.forEach((n,a)=>{2===n?o[e][a]=9:3===n?o[e][a]=10:0===n&&(o[e][a]=-1)}))),s()&&l.forEach((n,e)=>n.forEach((n,a)=>{1===n&&(o[e][a]=11)})),(0,a.jsx)("div",{className:i().container,children:(0,a.jsx)("div",{className:i().board,children:o.map((o,n)=>o.map((o,e)=>(0,a.jsx)("div",{className:-1===o?i().stone:9===o||10===o?"".concat(i().flag," ").concat(i().stone):i().number,style:{backgroundPositionX:30-30*o},onClick:()=>g(e,n),onContextMenu:()=>v(e,n)},"".concat(n,"-").concat(e))))})})}},2729:function(o){o.exports={container:"index_container___q52_",number:"index_number__gEG4k",main:"index_main__OmNu0",footer:"index_footer__v7pGE",title:"index_title__k0g7D",description:"index_description__fcKbo",code:"index_code__r6g09",grid:"index_grid__LrZtk",card:"index_card__7H7ka",logo:"index_logo__Z0ACT",board:"index_board__dNO5V",stone:"index_stone__5i_qa",flag:"index_flag__mAaui"}}},function(o){o.O(0,[774,888,179],function(){return o(o.s=8312)}),_N_E=o.O()}]);