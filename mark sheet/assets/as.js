var target=document.getElementById('btn');
target.addEventListener('click',function(){
   var eng= document.getElementById('eng').value;
   var urdu= document.getElementById('urdu').value;
   var phy= document.getElementById('phy').value;
   var mat= document.getElementById('mat').value;
  
   var total=Number(eng)+Number(urdu)+Number(phy)+Number(mat);
   var per=(total*100)/400;

   if(per>=80 && per<100){
    var grade="A you are pass";
   }
   else if(per>=60 && per<79){
    var grade="B you are pass";
   }
   else if(per>=40 && per<59){
    var grade="C you are pass";
   }
   else {
    var grade="you are fail";
   }


  document.getElementById('text').innerHTML=`your marks${total} out of 400 <br> 
  your percentage is ${per}% <br> Your Grade is ${grade}`;
}) 