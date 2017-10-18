// 25. 중복없는 배열
// 길이가 n인 배열에 1 부터 n까지 숫자가 중복 없이 한 번씩 들어 있는지를 확인하려고 한다.
// 1 부터 n까지 숫자가 중복 없이 한 번씩 들어 있는 경우 true를, 아닌 경우 false를 반환하도록 함수 isNotOverlapArray을 완성하라.단, 배열의 요소는 정수이다.
// 예를들어 주어진 배열이[4, 1, 3, 2] 이라면 true, [4, 1, 3] 또는[1, 3] 이라면 false를 반환한다.

function isNotOverlapArray(array) {
  arr = array.sort(function(a, b) { return a - b; })
  test = [];
  for (i = 0; i < arr.length - 1; i++) {
    test.push(arr[i + 1] - arr[i]);
  }
  if (arr[0] === 1 && Math.max.apply(null, test) === 1 && Math.min.apply(null, test)) { return true } else { return false }
}
console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3])); // false

// array을 오름차순정렬하고 요소간 간격의 차이가 모두 1, 그리고 1이 포함되어있다면 true