function action(n){
    if(n === 0){
        return;
    }

    action(n - 1);
    console.log(n);
}


function printRange(start, end){
    if(start > end){
        return;
    }
    console.log(start);
    printRange(start + 1, end);
}

printRange(1 , 10);

function sum(n){
    if(n === 0){
        return 0;
    }

    return n + sum(n - 1);
}

function fac(n){
    if(n === 1){
        return 1;
    }
    return n * fac(n - 1);
}



console.log("ans",fac(5));