let buttonAges1=document.querySelector(".Ages1");
let buttonAges2=document.querySelector(".Ages2");
let buttonReallyhungry=document.querySelector(".Reallyhungry");
let buttonkindahungry=document.querySelector(".Kindahungry");
let sumbit=document.querySelector(".submit");
let x=document.querySelector(".picture");

let q1;
let q2;




buttonAges1.onclick=function(){ 
    q1="5-16";
    console.log(q1);

;}

buttonAges2.onclick=function(){ 
    q1="16-32";
    console.log(q1);

;}

buttonReallyhungry.onclick=function(){ 
    q2="really hungry";
    console.log(q2);

;}
   
buttonkindahungry.onclick=function(){ 
    q2="kinda hungry";
    console.log(q2);

;}



// set vaule



sumbit.onclick=function(){

  


    if(q1==="5-16" && q2==="really hungry"){
        console.log("you should try a 3 finger  combo");
        x.innerHTML=('<h3>  you should try a 3 finger combo </h3><img src="canes3.png">');

} else if( q1==="16-32" && q2==="really hungry"){
         console.log(" You should try a caniac combo");
         x.innerHTML=('<h3>  you should try a caniac combo </h3><img src="maxresdefault.png">');
}
else if( q1==="16-32" && q2==="kinda hungry"){
console.log(" You should try a box combo");
x.innerHTML=('<h3>  you should try a  boc combo combo </h3><img src="boxcombo.png">');

} 


else if( q1==="5-16" && q2==="kinda hungry") {
console.log(" You should the kids combo");
x.innerHTML=('<h3>  you should try a kids combo combo </h3><img src="kids combo.png">');
}
  
 

    
    

        

}