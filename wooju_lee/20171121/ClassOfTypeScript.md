# Class (typeScript)
```
class Person {
  //멤버변수의 생성 및 초기화
  constructor (name, arr) {
    this._name = name;
    this._arr = arr;
  }
  //매서드
  sayHi() {
    console.log(`Hi! ${this._name}`)
  }
}
```



# 접근제한자
* public : 어디서나 접근가능
* protected : 자식클래스까지 접근가능
* private : 클래스내부에서만 접근가능
* private readonly : 읽기만 가능한 상태
```
class Foo {
  public x: string;
  protected y: string;
  private z: string;
  private readonly a: string;

  constructor(x: string, y: string, z: string) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
```

# 생성자 파라미터에 접근제한자를 사용할 수있음
```
class Foo {
  // 생성자파라미터에서 멤버변수와 접근제한자를 정의할 수 있다 
  constructor(public x: string) { }
}
```

# static 키워드
```
class Foo {
  constructor(prop) {
    this.prop = prop;
  }
  static staticMethod() {
    return 'staticMethod';
  }
  prototypeMethod() {
    return 'prototypeMethod';
  }
}

const foo = new Foo(123);

console.log(Foo.staticMethod());
console.log(foo.staticMethod());  //정적메서드는 클래스의 인스턴스로 호출 할 수 없다.
```

# 추상클래스
```
abstract class Animal {
  // 추상 메소드
  abstract makeSound(): void;

class Dog extends Animal {
  // 추상 클래스의 추상 메소드를 반드시 구현하여야 한다
  makeSound() {
    console.log('bowwow~~');
  }
}
```
* 반드시 구현해야할 매소드를 만들고 자식클래스는 이를 구현해야 함.
