// 26. 요일 구하기
// 2016 년 1 월 1 일은 금요일이다 .2016 년 a월 b일은 무슨 요일일까 ? 두 수 month, date를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하라.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다.예를 들어 month = 5, date = 24 가 입력된다면 5 월 24 일은 화요일이므로 TUE를 반환한다.


function getDayName(a, b) {
  var inputDay = new Date(2016, a - 1, b);
  var dayName = ['(SUN)', '(MON)', '(TUE)', '(WED)', '(THU)', '(FRI)', '(SAT)'];
  var day = inputDay.getDay();
  return dayName[day];
}

console.log(getDayName(5, 24)); // TUE