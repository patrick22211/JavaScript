const nums = [10, 20, 30];
const array = [1, 2 ,3 ,4];

nums[2] = 99;

console.log(nums);

function getLastValue(nums) {
  let num = nums.length - 1
  console.log(nums[num]);
}

getLastValue([1,20,22,5]);

function arraySwap(array) {
  let firstValue = array[0];
  let lastValue = array[array.length -1];

  array[0] = lastValue;
  array[array.length-1] = firstValue;
  return array;
}

console.log(arraySwap([3,20,22,24,8]));