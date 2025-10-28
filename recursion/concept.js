

function printNumber(n){
    if(n === 0) {
        return 0;
    }

    console.log(n);
    printNumber(n - 1) ;
    // No return statement needed here only calling rec until n-1 reaches 0
}


// trying with returning n
function printNumber1(n){
    if(n === 0) {
        return 0;
    }

    n += printNumber(n ) ;
    console.log(n);
    return n - 1;
}


printNumber1(5);
