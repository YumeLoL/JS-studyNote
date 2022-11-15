var arr = [2, 3, 6, 23, 34, 56, 23, 77, 79, 89, 23];
var goal = 23;

function test(arr, goal) {
//  i, j pointer 
    let i = 0;

    for( var j =0; j <= arr.length-1; j++ ){
        if( arr[j] !== goal ){
            arr[i] = arr[j];
            i++
        }
    }

    return {i, arr};

}

console.log(test(arr, goal));
