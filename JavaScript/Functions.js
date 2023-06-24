
 function multiply(x,y){
  return x*y;
 }
console.log("Output by Function Declaration = "+multiply(2,4));

//var multiply2=function multiply(a,b){} with function name 
// var multiply2=funtion(a,b){} without function name
var multiply2=function (a,b){
  return a*b;
};
var result=multiply2(2,4);
console.log("Output by Function Expression = "+result);
console.log("Function Expression defining value = "+ multiply2);    


var multiply3 =(p,q)=>{
  return p*q;
}
console.log("Output by Arrow Function = "+multiply3(2,4))

