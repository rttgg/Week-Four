var x = myFunction(4,3);

function myFunction(a,b){
    return a*b;
}
//both way works
function myFunction(a, b) {
    return a % b;
}
var result = myFunction(13, 5);
result;

//this works too
function myFunction(a, b) {
    return a && b;
}
var result = myFunction(23, 5);
result;
