//Selection Sort Ascending
function selectionSortAsc(arr){
    var length = arr.length;
    for (var i = 0;i < length-1; i++){
        var min = i;
        for(var j = i+1; j < length; j++) {
            if(arr[j] > arr[min]){
                min = j;
            }
        }
        if(min != i){
            var k = arr[i];
            arr[i] = arr[min];
            arr[min] = k;
        }
    }
    return arr;
}
console.log(selectionSortAsc([3,5,9,10,23,56,7,89,92,11,5]));