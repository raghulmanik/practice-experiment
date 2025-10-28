function printArrForLoop(arr){
    for(let i = 0 ; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printArrWhileLoop(arr){
    let i = 0;
    while(i < arr.length){
        console.log(arr[i++]);
    }
}

// recursion

function printForward(n){

    //  explain, input = arr.length (therefore, reducing index value until 0)
    // log function placement is important

    if(n < 0) return;

    printForward(n - 1);
    // after recursion forwards
    console.log("forward", arr[n])

}

function printBackward(n){
    if(n < 0) return;
    // before recursion backwards

    console.log("backward", arr[n])
    printBackward(n - 1);
}

function sumArray(n = 0){
    if( n === arr.length ){
        return 0;
    }

    return arr[n] + sumArray(n + 1);
}

function prodArray(n = 0){
    if( n === arr.length ){
        return 1;   //return must be 1
    }

    return arr[n] * prodArray(n + 1);
}



let arr = [1,2,3,4,5];

console.log(prodArray())