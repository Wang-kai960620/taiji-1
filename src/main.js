let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `
/*你好，我是阿凯
今天我要画一个太极图
首先我要画一个圆*/
#div1{
   border: 1px solid red;
   width:200px;
   height:200px;
   border-radius:50% 50% 50% 50%;
   box-shadow: 0 0 3px rgba(0,0,0,1);
   border:none;
}
/*阴阳鱼图是左黑又白的*/
#div1{background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);}
/*我们要给里面添加两个圆，同样也是黑白的*/

#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:rgb(255,255,255);
}
#div1::after{
    width:100px;
    height:100px;
    top:50%;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:rgb(0,0,0);
}
/*我们要给里面添加两个圆的里面在添加两个圆，同样也是黑白的*/

#div2 {
    width: 25px;
    height: 25px;
    top:35px;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:rgb(0,0,0);
}
#div3 {
    width: 25px;
    height: 25px;
    bottom:35px;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:rgb(255,255,255);
}
`;
let string2 = "";

let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    if (n >= string.length) {
      return;
    }
    n = n + 1;
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    step();
  }, 50);
  window.scrollTo(0, 999);
  html.scrollTo(0, 9999);
};
step();
