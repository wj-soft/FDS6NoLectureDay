function adder(a, b) {
  var result = a === b ? a : 0;
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) {
    result += i;
  }
  return result;

}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(adder(3, 5))