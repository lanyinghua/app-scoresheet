function arraySort(arr){
    arr.sort(function(compare1,compare2){
        return compare1 - compare2
    });
    return arr
}
// console.log(ArraySort([3,2,1]));


function medianOfTotalOfClass(totalarr) {//totalarr:[num]

    // let midIndex=parseInt(sortedArray.length/2), median=0;
    // if (sortedArray.length%2===0){
    //     median=(sortedArray[midIndex-1]+sortedArray[midIndex])/2;
    // }else {
    //     median=sortedArray[midIndex];
    // }
    // return median;
}
let arr=[2,5,6,2,8,0];
console.log(medianOfTotalOfClass(arr));