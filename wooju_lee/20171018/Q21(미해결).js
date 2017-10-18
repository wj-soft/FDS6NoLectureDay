// 21. 최단 거리 1 차원 점의 쌍 구하기(DAUM)
// 1 차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들) 의 쌍을 배열로 반환하는 함수를 작성하라.(단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어[1, 3, 4, 8, 13, 17, 20, 23, 24] 이 주어졌다면, 결과값은[[3, 4], [23, 24]] 가 될 것이다.

function findMinDistance(array) {
  arrayAbs = [];
  res = [];
  for (i = 0; i < array.length - 1; i++) {
    arrayAbs[i] = Math.abs(array[i] - array[i + 1]);
  }
  console.log(arrayAbs);
  // 최소거리 인덱스 구하기
  var min = Math.min.apply(null, arrayAbs);

  res.push([array[arrayAbs.indexOf(min)], array[arrayAbs.indexOf(min) + 1]]);

  return res;
}
// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]