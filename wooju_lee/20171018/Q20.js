// 20. 평균구하기
// 배열을 인자로 전달받아 각 요소의 평균을 구하는 함수를 완성하라.

function average(array) {
  array_sum = 0;
  for (i = 0; i < array.length; i++) {
    array_sum += array[i]
  }
  return array_sum / array.length;
}
var testArray = [5, 3, 4];
console.log(average(testArray)); // 4