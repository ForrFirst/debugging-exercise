const nums = [1, -2, 3, -4, 5];

function lastNegativeIndex(nums) {
  let idx = -1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 0) {
      idx = i;
      break;
    }
  }
  return idx;
}

console.log(lastNegativeIndex(nums));

//แก้บรรทัดที่ 5 เพราะเริ่มต้นที่ตำแหน่งที่ไม่มีอยู่จริง ทำให้ผลลัพธ์ผิด