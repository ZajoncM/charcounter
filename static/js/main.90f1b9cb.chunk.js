(this.webpackJsonpcharcounter=this.webpackJsonpcharcounter||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(2),s=a.n(r),o=(a(14),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"header__title"},"Charcounter"))}),i=a(6),u=a(3),l=a(4),h=a(7),m=a(5),C=a(8),p=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(h.a)(this,Object(m.a)(e).call(this,t))).wordCounter=function(){for(var t=0,e=[],n=!1,c=0;c<a.state.text.length;c++)!1===n?"."!==a.state.text[c]&&" "!==a.state.text[c]&&","!==a.state.text[c]&&(n=!0,e[t]="",e[t]+=a.state.text[c]):" "!==a.state.text[c]?e[t]+=a.state.text[c]:" "===a.state.text[c]&&""!==e[t]&&(e[++t]="");""===e[t]?a.setState({wordCount:e.length-1}):a.setState({wordCount:e.length})},a.charCounterWithoutSpace=function(){var t=Object(i.a)(a.state.text).filter((function(t){return" "!==t}));a.setState({charCountWithoutSpace:t.length})},a.charCounter=function(){var t=a.state.text.length;a.setState({charCount:t})},a.onChange=function(t){a.setState({text:t.target.value,isChanging:!0})},a.state={text:"",wordCount:0,charCount:0,charCountWithoutSpace:0,isChanging:!1},a}return Object(C.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(){this.state.isChanging&&(this.wordCounter(),this.charCounter(),this.charCounterWithoutSpace(),this.setState({isChanging:!1}))}},{key:"render",value:function(){var t=this,e=this.state,a=e.wordCount,n=e.charCount,r=e.charCountWithoutSpace;return c.a.createElement("div",{className:"main__container"},c.a.createElement("div",{className:"main__wordcounter counter"},c.a.createElement("p",{className:"main__text"},"Liczba s\u0142\xf3w: ",a)),c.a.createElement("div",{className:"main__charcounter counter"},c.a.createElement("p",{className:"main__text"},"Liczba znak\xf3w: ",n)),c.a.createElement("div",{className:"main__charcounter-nospace counter"},c.a.createElement("p",{className:"main__text"},"Liczba znak\xf3w (bez spacji): ",r)),c.a.createElement("textarea",{className:"main__input",placeholder:"Tu wklej tekst lub napisz co\u015b...",value:this.state.text,onChange:function(e){return t.onChange(e)}}))}}]),e}(n.Component);var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},c.a.createElement(o,null)),c.a.createElement("div",{className:"main"},c.a.createElement(p,null)))};s.a.render(c.a.createElement(d,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.90f1b9cb.chunk.js.map