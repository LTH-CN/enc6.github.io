function check(){
      var name=document.getElementById("name").value;
   var pass=document.getElementById("pass").value;
   if(name=="loongth" && pass=="666666"){
   alert("登入成功，将自动跳转到下载页面");
   window.document.f.action="./files/TIAN.pptx";
   window.document.f.submit();
   }else{
   alert("用户名或密码错误");
}
      }
