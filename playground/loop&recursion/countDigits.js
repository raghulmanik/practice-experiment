function digitOfNumber(n) {
    if (n === 0) {
        return  n;
    }
    n = digitOfNumber(Math.floor(n / 10));
    return n + 1
}

function countStr(n){
    let str = n.toString();
    return str.length;
}

function countWhileLoop(n){
    while(n !== 0){
        console.log(n);
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

function countForLoop(n){
    let i = 0

    for(i; n!== 0; i++){
        n = Math.floor(n / 10);
    }
    console.log(i);
}
