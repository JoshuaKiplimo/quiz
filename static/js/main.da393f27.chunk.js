(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(25),a(4)),s=a(6),u=a(7),i=a.n(u),m=a(19),f=a(18),d=a(2),p=(a(27),{sports:21,history:23,politics:24}),E=r.a.createContext(),h=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(d.a)(a,2),l=c[0],u=c[1],h=Object(n.useState)(!1),b=Object(d.a)(h,2),y=b[0],g=b[1],v=Object(n.useState)(0),N=Object(d.a)(v,2),j=N[0],O=N[1],w=Object(n.useState)(0),C=Object(d.a)(w,2),x=C[0],S=C[1],q=Object(n.useState)(!1),k=Object(d.a)(q,2),V=k[0],A=k[1],_=Object(n.useState)(!1),z=Object(d.a)(_,2),F=z[0],M=z[1],D=Object(n.useState)({category:"sports",amount:"10",difficulty:"easy"}),G=Object(d.a)(D,2),I=G[0],J=G[1],L=function(){var e=Object(f.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:(n=e.sent)&&(r=n.results.map((function(e){var t=e.question,a=e.category,n=e.type,r=e.dificulty,c=e.incorrect_answers,l=e.correct_answer;return{question:t,category:a,type:n,dificulty:r,incorrect_answers:c,correct_answer:l,choices:[].concat(Object(m.a)(c),[l])}})),u(r),g(!1)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),g(!1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){x>=l.length-1?M(!0):S(x+1)};return r.a.createElement(E.Provider,{value:{questions:l,isLoading:y,correctAnswers:j,index:x,handleNext:Q,handleAnswers:function(e,t){e.target.innerText===t&&O(j+1),Q()},handleStart:function(e){e.preventDefault();var t="amount=".concat(I.amount,"&category=").concat(p[I.category],"&difficulty=").concat(I.difficulty),a="".concat("https://opentdb.com/api.php?").concat(t);L(a),M(!1),O(0),A(!0)},handleChange:function(e){e.preventDefault();var t=e.target.value,a=e.target.name;J(Object(s.a)(Object(s.a)({},I),{},Object(o.a)({},a,t)))},start:V,isEnd:F,setIsEnd:M,setStart:A,input:I,replayGame:function(){console.log("end"),M(!0),A(!1)}}},t)},b=function(){return Object(n.useContext)(E)},y=function(){var e=b(),t=e.questions,a=e.index,n=e.handleNext,c=e.handleAnswers,l=e.correctAnswers,o=e.isEnd,s=(e.setStart,e.replayGame);if(0==t.length)return r.a.createElement("h1",null,"loading");var u=t.length,i=t[a],m=i.question,f=i.correct_answer,d=i.choices;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o?"modal-container isOpen":"modal-container"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h2",null,"Congrats!"),r.a.createElement("p",null,"You answered ".concat(Math.round(l/u*100),"% of questions\n            correctly")),r.a.createElement("button",{className:"close-btn",onClick:s},"play again"))),r.a.createElement("section",{className:"quiz"},r.a.createElement("p",{className:"correct-answers"},"Correct Answers: ".concat(l," out of ").concat(u)),r.a.createElement("article",{className:"container"},r.a.createElement("h2",null,m),r.a.createElement("div",{className:"btn-container"},function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}(d).map((function(e,t){return r.a.createElement("button",{key:t,className:"answer-btn",onClick:function(e){return c(e,f)}},e)})))),r.a.createElement("button",{className:"next-question",onClick:n},"Next Question")))},g=function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"loading"}))},v=function(){var e=b(),t=e.handleStart,a=e.handleChange,n=e.input;return r.a.createElement("section",{className:"quiz quiz-small"},r.a.createElement("form",{className:"setup-form",onSubmit:function(e){return t(e)}},r.a.createElement("h2",null,"Setup Quiz"),r.a.createElement("div",{className:"formControl"},r.a.createElement("label",{htmlFor:"amount"},"number of questions"),r.a.createElement("input",{type:"number",name:"amount",id:"amount",className:"form-input",min:"1",max:"50",defaultValue:"10",value:n.amount,onChange:a})),r.a.createElement("div",{className:"formControl"},r.a.createElement("label",{htmlFor:"Category"},"Choose Category"),r.a.createElement("select",{name:"category",id:"category",className:"form-input",value:n.category,onChange:a},r.a.createElement("option",{defaultValue:"sports"},"sports"),r.a.createElement("option",{defaultValue:"history"},"history"),r.a.createElement("option",{defaultValue:"politics"},"politics"))),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"difficulty"},"select difficulty"),r.a.createElement("select",{name:"difficulty",id:"difficulty",className:"form-input",value:n.difficulty,onChange:a},r.a.createElement("option",{defaultValue:"easy"},"easy"),r.a.createElement("option",{defaultValue:"medium"},"medium"),r.a.createElement("option",{defaultValue:"hard"},"hard"))),r.a.createElement("button",{type:"submit",className:"submit-btn"},"start")))};var N=function(){var e=b(),t=e.isLoading,a=e.start;return t?r.a.createElement(g,null):a?r.a.createElement(y,null):r.a.createElement(v,null)};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null,r.a.createElement(N,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.da393f27.chunk.js.map