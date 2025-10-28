const log = console.log;

function fibForLoop(n){
    if(n === 0) return 0;
    if(n === 1) return 1;

    let a = 0;
    let b= 1 ;
    let ans;

    for (let i = 2; i <= n ; i++) {
       ans = a + b
       log(` a -> ${a} and b -> ${b} before`)
       a = b;
       b = ans;
       log(` a -> ${a} and b -> ${b} after`)
       log(`${ans} in ${i}th iteration.`);
    }
    return ans ;
}

function fibWhileLoop(n){

    if(n === 0) return 0;
    if(n === 1) return 1;

    let ans;

    // we need to start at 2nd iteration because 0 and 1 is done for you.
    let i = 2;
    let a = 0;
    let b = 1;

    while(i <= n){
       ans = a + b;
       a = b;
       b = ans;
       i++;
    }
    return ans;
}

function fibRecursion(n){

    if(n === 0) return 0;
    if(n === 1) return 1;

    n = fibRecursion(n - 1) + fibRecursion(n - 2);

    return n;
}