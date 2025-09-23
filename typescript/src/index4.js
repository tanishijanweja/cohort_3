function getMax(nums) {
    var maxValue = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
        }
    }
    return maxValue;
}
console.log(getMax([1, 9, 3]));
