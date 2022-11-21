// 滑动窗口：
// 窗口就是 满足其和 ≥ target 的长度最小的 连续 子数组。
// 窗口的起始位置如何移动：如果当前窗口的值大于s了，窗口就要向前移动了（也就是该缩小了）。
// 窗口的结束位置如何移动：窗口的结束位置就是遍历数组的指针，也就是for循环里的索引。

var target = 7, nums = [2,3,1,2,4,3]

const minSum = (nums, target) => {
    let left = right = sum = 0;
    let maxLen = nums.length +1  // 子数组最大长度不会超过自身

    for(; right <= nums.length; right++) {
        sum = nums[right] + sum


        while(sum >= target){
            maxLen = right - left + 1
            left++
            sum = sum - nums[left-1]
            console.log(sum,left,right, maxLen)    
        }
    }
    
    return maxLen > nums.length ? 0 : maxLen
}

console.log(minSum(nums,target))