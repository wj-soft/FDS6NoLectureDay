function getDayName(a, b) {
  var data_name = new Date(2016, a - 1, b)
  var day_name = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  return day_name[data_name.getDay()];
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5, 24));
