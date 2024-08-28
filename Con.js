var content=document.getElementById("content");
content.onclick=function(){
  alert("its active now")
  document.getElementById("content").innerHTML='<img src=Im.jpg alt="Image" class="responsive-img">OFF'
}

let a=false;
 function fun(){
   a=!a;
   if(a==true){
     
     var b=document.getElementById("b");
b.onclick=function(){
  this.style.backgroundColor ="black";
}
  var c=document.getElementById("c");
c.onclick=function(){
  this.style.backgroundColor="green";
}
var d=document.getElementById("d");
d.onclick=function(){
  this.style.backgroundColor="red";
}
var e=document.getElementById("e");
e.onclick=function(){
  this.style.backgroundColor="#2ff3";
}
var f=document.getElementById("f");
f.onclick=function(){
  this.style.backgroundColor="yellow";
}
var g=document.getElementById("g");
g.onclick=function(){
  this.style.backgroundColor="orange";
}

     }/*else{
       alert("u shoud have active the toggle first")
     }*/
     
     
     
   else {
   
b.onclick=function(){
  
  alert("first make toggle on ");
}
       var c=document.getElementById("c");
       c.onclick=function(){
         alert("hffgfgggffg");
       }
     }
 }
     
