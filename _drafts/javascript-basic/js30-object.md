





## 객체 (Object)

객체는 우리 주변의 사물(Object)을 상태(State)과 행위(Behavior)로 나타내어 추상화하는 개념이에요. 객체라는 말이 어렵게 느껴지는데, 사물이라고 생각하시면 편해요. 상태는 어떠한 사물의 특성을 나타내고, 행위는 그 사물이 가지는 행동을 나타내요. 

고양이를 이용해 예를 들어볼께요. 고양이의 이름, 나이, 품종, 꼬리길이 등으로 고양이의 상태를 나타낼 수 있어요. 고양이의 행동으로는, 음식을 먹는 행동, 달리기, 점프하기, 구르기, 쥐잡기 등이 있겠죠.

자바스크립트에서는 이러한 것들을 통해서 고양이라는 객체를 표현할 수 있어요. 방금 예를 들었던 고양이를 객체로 표현하면 이렇게 할 수 있어요.

```js
var kitty = {
  name: "Dinah",
  age: 3,
  health: 5,
  species: "Short hair",
  eat: function() {
    this.health = this.health + 1;
  },
  run: function() {
    console.log(this.name + " Running!!");
  }
}

console.log(kitty.name);  //-> Dinah
console.log(kitty.health);  //-> 5

kitty.eat();
console.log(kitty.health);  //-> 6

kitty.run();  //-> Dinah Running!!
```



### 객체의 프로퍼티와 메서드

프로퍼티 (Property)

자바스크립트의 객체에서 프로퍼티는 이름이 붙어있는 값을 나타내요. 객체의 프로퍼티는 객체명 다음에 점과 프로퍼티명을 붙이거나, 객체명 다음에 대괄호를 둘러싼 프로퍼티명의 문자열을 써서 접근할 수 있다는 것은 배웠죠. 이 프로퍼티가 객체의 상태를 나타내는 데 쓰여요.

메서드 (Method)

함수가 프로퍼티에 저장될 경우 이러한 함수를 메서드라고 불러요. 즉 메서드는 객체 내에 정의된 함수로, 객체의 프로퍼티 명이 함수의 이름으로 쓰여요. 객체가 소유한 메서드를 호출하기 위해서는 함수 호출과 비슷하게 객체명 다음에 점을 붙이고 `메서드명()` 을 사용해요.

this

메서드 내부의 `this`는 메서드를 가지고 있는 객체를 가리켜요. 위 코드에서는 `kitty`라는 객체를 가리키게 되죠. 





# OOP in JavaScript

## 객체 & 클래스

객체란 물체에 대한 모델을 만들기 위해 변수와 함수를 그룹화한 것, 연관있는 변수와 함수를 묶어서 포장

- Class : 객체의 속성과 동작을 정의하는 데이터타입이다. 
- Instance : 클래스의 실체를 생성한 것
- Property, Member variables : 클래스 내부에 만드는 변수
- Method, Member function : 클래스 내부에 만드는 함수
- this - 함수에서 참조하는 메모리 영역, 함수를 호출한 존재, 실행역역 자체를 의미함
  - 함수에서 this - window 객체
  - 이벤트에서 this - 이벤트를 발생시킨 객체
  - 메서드에서 this - 메서드를 호출한 객체 (인스턴스)
- typeof someVar - 변수의 타입을 리턴
- hasOwnProperty("value") - 객체의 프로퍼티 존재 여부를 확인





### Object Literal 방식의 클래스 생성

```javascript
var user = {
  name: "sean",
  age: 33,
  showInfo: function () {
    console.log("name = " + this.name + ", age = " + this.age);
    // $("#objectTest").html("name = " + this.name + ", age = " + this.age);
  }
}

// 프로퍼티 및 메서드 접근하기
user.name;
user.showInfo();

// 동적으로 실행시간에 처리하는 경우
user['name'];

// 프로퍼티 추가
user.color = "yellow";

// 메서드 추가 및 사용
user.speak = function() { return "Meow!" };
user.speak();
```



### Function 방식의 클래스 생성

```javascript
/* 호텔 예제 */
function Hotel (name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;

  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
};
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

/* 탭메뉴 예제 */
function TabMenu() {
  this.$tabMenu = null;
  this.$menuItems = null;
  this.$selectMenuItem = null;
  // 요소 초기화
  this.init = function (selector) {
    this.$tabMenu = $(selector);
    this.$menuItems = this.$tabMenu.find("li");
  };
  // 이벤트 등록
  this.initEvent = function () {
    var objThis = this;
    this.$menuItems.on("click", function () {
      objThis.setSelectItem($(this));
    });
  };
}
// 인스턴스 생성
var tabMenu = new TabMenu();
// 프로퍼티 및 메서드 접근하기
tabMenu.$menuItems;
tabMenu.initEvent();
```



### Prototype 방식의 클래스 생성

```javascript
/* Prototype 방식의 클래스 생성 예제1 */
function TabMenu (selector) {
    this.$tabMenu = null;
    this.$menuItems = null;
    this.$selectMenuItem = null;

    this.init(selector);
    this.initEvent();
}
// 요소 초기화
TabMenu.prototype.init = function (selector) {
    this.$tabMenu = $(selector);
    this.$menuItems = this.$tabMenu.find("li");
};
// 이벤트 등록
TabMenu.prototype.initEvent = function () {
    var objThis = this;
    this.$menuItems.on("click", function () {
        objThis.setSelectItem($(this));
    });
};

// 인스턴스 생성
var tabMenu = new TabMenu("#menu");
// 프로퍼티 및 메서드 접근하기
tabMenu.$menuItems;
tabMenu.initEvent();


/* Prototype 방식의 클래스 생성 예제2 */
function PacMan() {}
PacMan.prototype.move = function(direction) {};
PacMan.prototype.chomp = function() {};
PacMan.prototype.jump = function() {};

var pacMan = new PacMan();
pacMan.move("up");
pacMan.chomp();
```





### 메서드

```
Character 생성자 함수
- constructor -----------> 인스턴스 객체 (louise) name: "louise", job: "기사"
  -- Property : name
  -- Property : job

- prototype  <--------------- 인스턴스 객체들(louise, lio, ...)이 참조함
  -- Method : move()
  -- Method : attack()
```

prototype 메서드를 객체 리터럴로 간결하게 표현하기

```js
function Character(name, job) {
  this.name = name;
  this.job = job;
}

Character.prototype = {
  move: function() {
    //...
  },
  attack: function() {
    // ...
  },
  escape: function() {
    // ...
  }
}
```



ES6 클래스를 사용한 객체 정의

```js
class Character(
  constructor(name, job) {
    this.name = name;
  	this.job = job;
  }
  move () {
  	// ...
  }
)
```





---

delete 피연산자로 지정된 객체의 프로퍼티나 배열의 원소를 삭제

instanceof 객체 타입 조사

