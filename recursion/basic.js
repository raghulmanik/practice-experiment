// recursion = "spring-methodology"
// essential debug = log("before") - function call - log("after")
/* working = before recursive function call , the code will be executed and waited until the recursive function
* reaches it's base case and from there just like compressed spring it returns back with point.
and finishes whatever is left after recursion call */


// print number

function printNumber(n){
    // base case
    if(n === 0){
        return ;
    }
    console.log("before",n);
    printNumber(n - 1);
    console.log("after",n);
}

// in Sum Statement we must give return
function sum(n){
    if(n === 0){
        return n;
    }
    n += Sum(n - 1);
    return n;
}

function digitOfNumber(n) {
    if (n === 0) {
        return  n;
    }
    // n / 10 will reduce and math.floor will remove the decimal points
    // so before recursive call will reduce and after recursive call will count the digits
    n = digitOfNumber(Math.floor(n / 10));
    return n + 1;
}

