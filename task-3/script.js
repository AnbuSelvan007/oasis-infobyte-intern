function call(){
    var p=document.getElementById("h");
    var a=document.getElementById("cel");
    var b=document.getElementById("fah");
    var c=a.value;
    var f=b.value;
    
    if(c!=0){
        var k=(c*1.8)+32;
        b.value=k;
    }
    else{
        var k=(f-32)/1.8;
        a.value=k;
    }
}

const btn1=document.getElementsByClassName('btn1')[0];
const box1=document.getElementsByClassName('box')[0];
var tog=0;
btn1.addEventListener('click',()=>{
    box1.classList.toggle('active');
})
function reset(){
    var a=document.getElementById("cel");
    var b=document.getElementById("fah");
    a.value=null;
    b.value=null;
    
}

