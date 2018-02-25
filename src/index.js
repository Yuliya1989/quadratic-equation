module.exports = function solveEquation(equation) {
  // your implementation
  var abc=equation.replace(/x/g,"");
abc=abc.replace(/\*/g,"");
abc=abc.replace(/\^2/g,"");
abc=abc.replace(/ /g,"");
abc=abc.replace(/\-/g," -");
abc=abc.replace(/\+/g," ");
abc=abc.split(' ');

if (abc[0]==false) {
var delFirstEmptyElem=abc.shift();
}
var a=abc[0];
var b=abc[1];
var c=abc[2];

var D=b*b-4*a*c;
var x1=0, x2=0;
x1=(-b-Math.sqrt(D))/(2 * a);
x2=(-b+Math.sqrt(D))/(2 * a);
x1=Math.round(x1);
x2=Math.round(x2);

var rez=[x1,x2];
rez.sort(function(a,b) {
return a-b;
});
return rez; 
}
