import{r as s,j as X,a as o}from"./app-d3013fbc.js";import H from"./ChartPager-13df2cce.js";import{C as N,g as O,A as Y,a as q,L as G,B as J,P as K,b as M,c as Q,D as U,d as Z,e as ee,f as te,R as ae,S as le,h as re,i as oe,j as se,k as ne,T as ce,l as ie,p as de,m as he,n as ge,o as ue,q as me,r as Ce}from"./AnalyticsBar-7101e15f.js";import"./ResolutionDropdown-2d80e47b.js";import{C as fe,R as y}from"./Row-50e19a91.js";import{C as E}from"./Col-2e73e1de.js";import"./Button-24cd0bf7.js";N.register(q,G,J,K,M,Q,U,Z,ee,te,ae,le,re,oe,se,ne,ce,ie,de,he,ge,ue,me,Ce);function Ne(l){s.useState(null);const[h,g]=s.useState(l.pageNo),[f,A]=s.useState(parseInt(l.thePageSetNumber)),[P,be]=s.useState(l.thePageSize),[I,ye]=s.useState(l.thePagingArray),[F,Se]=s.useState(l.theChartArray),[w,L]=s.useState(l.chartData);s.useState(l.theVotes),s.useState(l.parse_resolution),s.useEffect(()=>{function t(){g(1)}let e=document.getElementById("myChart").getContext("2d");$(".page").css("background-color","rgb(239, 239, 239").css("border-color","rgb(255, 255, 255").css("border-width","3px"),$("#page-"+h).css("background-color","#ffc107");let r=l.type,n=D(w,h),u=n.labels,m=n.datasets;t();const b=new N(e,{type:r,data:{labels:u,datasets:m},options:{events:["mousemove","mouseout","click","touchstart","touchmove"],plugins:{tooltip:{events:["click"],position:"average",enabled:!0,interaction:{mode:"index",axis:"xy",intersect:"false"},titleFont:{size:35},bodyFont:{size:30},footerFont:{size:30}}},onHover:a=>{const i=O(a),S=a.chart.scales.x.getValueForPixel(i.x),d=a.chart.scales.y.getValueForPixel(i.y);console.log("Data X",S),console.log("Data Y",d),console.log("Event",a),console.log("Active Elements: ",a.chart.tooltip.getActiveElements());let v=a.chart.chartArea.right-a.chart.chartArea.left;console.log("Chart start: ",a.chart.chartArea.left),console.log("Chart Width: ",v),console.log("Chart end: ",a.chart.chartArea.right);let C=parseFloat(a.chart.chartArea.right),_=parseFloat(a.chart.chartArea.left),p=(C-_)/11;console.log("Element width: ",p),console.log("Click X position: ",a.x);let c=0,x=parseFloat(a.chart.chartArea.left);for(;x<=a.chart.chartArea.right;){if(x<=a.x&&a.x<x+p){c++;break}x+=p,c++}console.log("Selected Index: ",c);let k=[],R;a.chart.data.datasets.map((pe,W)=>{R={datasetIndex:W,index:c-1},k.push(R)}),console.log("Active Elements Array: ",k),a.chart.tooltip.setActiveElements(k,{x:S,y:d}),a.chart.update()}}});return()=>{b.destroy()}},[]),s.useEffect(()=>{$(".page").css("background-color","rgb(239, 239, 239").css("border-color","rgb(255, 255, 255").css("border-width","3px"),$("#page-"+h).css("background-color","#ffc107")},[h]),s.useEffect(()=>{function t(){console.log("new chart data: ",l.chartData),L(l.chartData);let e;h===1||h===0?(e=1,g(e)):(e=h-1,g(e)),g(e),T(e,l.chartData)}console.log("new parse res: ",l.parse_resolution),t()},[l.chartData]);const V=t=>{console.log("page num: ",t.num);let e=t.num;g(e),T(e,null)},z=t=>{console.log(t);let e=t.num;t.nxpagenum,t.type;let r=parseInt(f)*parseInt(P);console.log("highest page:",r),e>r&&(A(f+1),g(e))},j=t=>{console.log(t);let e=t.num,n=parseInt(f-1)*P+1;console.log("Lowest Page:",n),e!=0&&e<n?(A(f-1),g(e)):e==0&&n<=1&&(A(f),g(1))},D=(t,e,r,n)=>{if(e-1<t.dateDataBidenStore.length)return B(e-1,t);{let u=t.dateDataBidenStore.length-1;return B(u,t)}},B=(t,e)=>{let r=["red","orange","yellow","lime","green","teal","blue","purple"],n=e.dateHeadersStore,u=e.dateDataBidenStore,m=e.dateDataOtherStore,b=e.dateDataTrumpStore,a=n[t];var i={};i.label="Biden Votes",i.backgroundColor=r[0],i.borderColor=r[0],i.data=[],u[t].map(c=>{i.data.push(c)});let S=i;var d={};d.label="Trump Votes",d.backgroundColor=r[1],d.borderColor=r[1],d.data=[],b[t].map(c=>{d.data.push(c)});let v=d;var C={};return C.label="Other Votes",C.backgroundColor=r[3],C.borderColor=r[3],C.data=[],m[t].map(c=>{C.data.push(c)}),{labels:a,datasets:[S,v,C]}},T=(t,e=null)=>{e===null&&(e=w),console.log("entering updateChart with page no: ",t),document.getElementById("myChart").getContext("2d"),$(".page").css("background-color","rgb(239, 239, 239").css("border-color","rgb(255, 255, 255").css("border-width","3px"),$("#page-"+t).css("background-color","#ffc107"),l.type;let r=D(e,t),n=r.labels,u=r.datasets,m=N.getChart("myChart");m.data.labels=n,u.forEach((b,a)=>{m.data.datasets[a].data=b.data}),m.update()};return X(fe,{className:"chart-viewer",children:[o(y,{children:o(E,{className:"w-100 d-flex justify-content-center",children:o("h3",{children:l.selectedState})})}),o(y,{children:o(E,{className:"w-100 d-flex justify-content-center",children:o("h4",{children:"Total Votes Bin Stacked Chart"})})}),o(Y,{handleCloseChart:l.handleCloseChart,...l,theResolutions:l.theResolutions,selectResolution:l.selectResolution,selectAnalytics:l.selectAnalytics,chartData:l.chartData,chartType:"BinStackedChart"}),o(y,{children:o(E,{className:"w-100 d-flex justify-content-center",children:o("h4",{children:"Incremental Stacked Total Votes"})})}),o(y,{className:"d-flex justify-content-center",children:o("div",{children:o("canvas",{id:"myChart"})})}),o(y,{className:"h-100 p-1 mt-3 d-flex justify-content-center",children:o(H,{getPageNumber:V,type:"line",leftArrow:j,rightArrow:z,pageNo:h,thePagingArray:I,thePageSetNumber:f,chartData:w,thePageSize:P,theChartArray:F})})]})}export{Ne as default};
