// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 
// 满足 i != j、i != k 且 j != k ，
// 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。


// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2： 

// 输入：nums = [0,1,1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：

// 输入：nums = [0,0,0]
// 输出：[[0,0,0]]
// 解释：唯一可能的三元组和为 0 。


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let arr = [];
    if (nums.length < 3) return arr;
    // 想到了使用排序 但是接下来思路就没有了
    nums.sort((a, b) => a - b);
    //看题解使用了双指针
    for (let k = 0; k < nums.length - 2; k++) {
        if(nums[k] > 0) break;
        //跳过nums[k],因为已经将 nums[k - 1] 的所有组合加入到结果中，本次双指针搜索只会得到重复组合。
        if(k > 0 && nums[k] == nums[k - 1]) continue;
        let i = k + 1, j = nums.length - 1;
        while (i < j) {
            let sum = nums[k] + nums[i] + nums[j];
            if (sum < 0) {
                // 需要将i往后移动，sum才有可能为0;
                while (i < j && nums[i] == nums[++i]){};
            } else if (sum > 0) {
                // 需要将j往前移动，sum才有可能为0,同时也要将相同项给忽略掉;
                while (i < j && nums[j] == nums[--j]){};
            } else {
                arr.push([nums[k], nums[i], nums[j]]);
                //略去重复项数据
                while (i < j && nums[i] == nums[++i]){};
                while (i < j && nums[j] == nums[--j]){};

            }

        }

    }
    return arr;


};