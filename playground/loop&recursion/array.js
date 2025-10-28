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
