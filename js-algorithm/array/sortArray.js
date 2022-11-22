// https://zhuanlan.zhihu.com/p/42586566
// 几种常见的排序算法：冒泡排序、选择排序、插入排序、归并排序、快速排序、希尔排序、堆排序、计数排序、桶排序、基数排序的思想
// 一般在面试中最常考的是快速排序和归并排序等基本的排序算法

// Bubble Sort 冒泡排序
// the bubble sort algorithm compares every two adjacent values and swaps them if the first one is bigger than the second one.
var nums = [11, 3, 5, -4, -1, 0, 3, 10];

const bubbleSort = (nums) => {
  let temp = 0;

  for (let i = nums.length - 1; i > 0; i--) {   // 每次需要排序的长度
    for (let j = 0; j < i; j++) {    // 从第一个元素到第i个元素
      if (nums[j] > nums[j + 1]) {   // 如果满足条件，两个数叫唤
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
};
console.log('bubble sort',bubbleSort(nums));

// 代码优化 improved version of the usual bubble sort algorithm
// 要使算法在最佳情况下有O(n)复杂度，需要做一些改进，增加一个swap的标志，当前一轮没有进行交换时，说明数组已经有序，没有必要再进行下一轮的循环了，直接退出
const bubbleSortImprove = (nums) => {
    let temp = 0;
    
    for (let i = nums.length - 1; i > 0; i--) {   
      let swap = false

      for (let j = 0; j < i; j++) {    
        if (nums[j] > nums[j + 1]) {   
          temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
          swap = true;    //如果进入了交互
        }
      }


      if(swap === false) break  //如果满足条件，没有进行过交互，说明已经是有序的数组了。跳出循环，直接输出结果就行
    }
  
    return nums;
  };
  console.log('bubble sort improve',bubbleSortImprove(nums));




// Selection Sort 选择排序
// 选择排序是一种简单直观的排序算法，它也是一种交换排序算法，和冒泡排序有一定的相似度，可以认为选择排序是冒泡排序的一种改进。
// The basic idea behind the selection sort algorithm is that is finds the minimum value in the data structure, places it in the first position, finds the second minimum value, places it in the second position, and so on.
const selectionSort = (nums) => {
    let minIndex, temp

    for(let i = 0; i < nums.length; i++) {
        minIndex = i;

        // 循环查找最小值
        for(let j= i + 1; j < nums.length; j++) {
            if(nums[minIndex] > nums[j] ){
                minIndex = j
            }
        }
        if(minIndex != i){
            temp = nums[i];
            nums[i] = nums[minIndex]
            nums[minIndex] = temp
        }
    }
    return nums
}
console.log('select sort',selectionSort(nums))


// Insertion Sort 插入排序
// 1.把待排序的数组分成已排序和未排序两部分，初始的时候把第一个元素认为是已排好序的。
// 2.从第二个元素开始，在已排好序的子数组中寻找到该元素合适的位置并插入该位置。
// 3.重复上述过程直到最后一个元素被插入有序子数组中。
var nums = [11, 3, 5, -4, -1, 0, 3, 10];
const insertSort = (nums) => {
    let temp   

    for(let i = 1; i < nums.length; i++) {
        let j = i;  
        temp = nums[i]; // 保存临时数值

        while(j > 0 && nums[j-1] > temp){ // 如果满足条件，将大数后移一位并j--。重复进行while比较
            nums[j] = nums[j -1]  
            j--  
        }

        nums[j] = temp;    // 将临时保存的数值付给nums[j]
    }

    return nums
}
console.log('insert sort',insertSort(nums))


// Quick Sort 快速排序
// 1.从数列中挑出一个元素，称为"基准"（pivot），
// 2.重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任何一边）。在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。
// 3.递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序。
var nums = [11, 3, 5, -4, -1, 0, 3, 10];

var quickSort = function(arr) {  // 首先，定义一个quickSort函数，它的参数是一个数组
    if (arr.length <= 1) { return arr; }  // 检查数组的元素个数，如果小于等于1，就返回

    // 选择"基准"（pivot），并将其与原数组分离，再定义两个空数组，用来存放一左一右的两个子集
    var pivotIndex = Math.floor(arr.length / 2) ;
    var pivot = arr.splice(pivotIndex, 1)[0];   // 拿到 pivot 值

    var left = [];
    var right = [];

    // 开始遍历数组，小于"基准"的元素放入左边的子集，大于基准的元素放入右边的子集
    for (var i = 0; i < arr.length; i++){
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
    }

    // 最后，使用递归不断重复这个过程，就可以得到排序后的数组
    return quickSort(left).concat([pivot], quickSort(right));
};
console.log('quick sort',quickSort(nums))





/
// Merge Sort 归并排序
// function merge_sort(arr){
//     if(arr.length < 2){
//       return arr;
//     }
//     var middle = parseInt(arr.length/2);
//     var left = arr.slice(0,middle);
//     var right = arr.slice(middle);
    
//     return merge(merge_sort(left),merge_sort(right));
//   }
  
// function merge(left,right){
//     var result = [];
//     var i = 0, j = 0;
//     while(i < left.length && j < right.length){
//       if(left[i] > right[j]){
//         result.push(right[j++]);
//       }
//       else{
//         result.push(left[i++]);
//       }
//     }
//     while(i < left.length){
//       result.push(left[i++]);
//     }
//     while(j < right.length){
//       result.push(right[j++]);
//     }
    
//     return result;
// }
  
//   var arr = [1, 2, 3, 5, 6, 7, 8, 9];
//   var result = merge_sort(nums);
//   console.log(result);  //[1, 2, 3, 5, 6, 7, 8, 9]