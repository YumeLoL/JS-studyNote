// 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// 滑动窗口：
// 窗口就是 满足其和 ≥ target 的长度最小的 连续 子数组。
// 窗口的起始位置如何移动：如果当前窗口的值大于s了，窗口就要向前移动了（也就是该缩小了）。
// 窗口的结束位置如何移动：窗口的结束位置就是遍历数组的指针，也就是for循环里的索引。

var target = 19, nums = [2,3,1,2,4,3]

var minSubArrLen = function(target, nums) {
    let left = right = sum = 0;
    let maxLen = nums.length + 1   // 子数组最大长度不会超过自身

    for(right = 0; right < nums.length; right++) {
        sum += nums[right];

        while(sum >= target){
            maxLen = Math.min(maxLen, right - left + 1)
            sum = sum - nums[left]
            left++
        }
    }

    return maxLen > nums.length ? 0 : maxLen
    
}

console.log("min sub array length:", minSubArrLen(target, nums))











// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0209.%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.md
// 904.水果成篮
// 76.最小覆盖子串