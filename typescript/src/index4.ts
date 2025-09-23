function getMax(nums: number[]) {
  let maxValue = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
    }
  }
  return maxValue;
}
console.log(getMax([1, 9, 3]));
