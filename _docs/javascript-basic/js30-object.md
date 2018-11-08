---
title: "JavaScript 객체(Object)"
course: "javascript-basic"
date:   2018-06-27 15:00:00 +0900
---





## 객체 (Object)

객체는 우리 주변의 사물(Object)을 상태(State)과 행위(Behavior)로 나타내어 추상화하는 개념입니다. 상태는 어떠한 사물의 특성을 나타내고, 행위는 그 사물이 가지는 행동을 나타내요. 즉, 객체란 사물에 대한 모델링을 위해 사물을 특정짓는 변수와 함수를 그룹핑 한 것이라고 할 수 있습니다.

고양이를 이용해 예를 들어볼께요. 고양이의 이름, 나이, 품종 등으로 고양이의 상태를 나타낼 수 있습니다. 고양이의 행동으로는, 음식을 먹는 행동, 달리기, 점프하기, 구르기, 쥐잡기 등이 있겠죠.

자바스크립트에서는 이러한 것들을 통해서 고양이라는 객체를 표현할 수 있어요. 방금 예를 들었던 고양이를 객체 리터럴을 이용해 표현하면 이렇게 할 수 있어요.

```js
var kitty = {
  name: "Dinah",
  age: 3,
  species: "Short hair",
  health: 5,

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

자바스크립트의 객체에서 프로퍼티는 이름이 붙어있는 값을 나타내요. 객체의 프로퍼티는 객체명 다음에 점과 프로퍼티명을 붙이거나, 객체명 다음에 대괄호를 둘러싼 프로퍼티명의 문자열을 써서 접근할 수 있다는 것은 배웠죠. 이 프로퍼티가 객체의 상태를 나타내는 데 쓰여요. 프로퍼티는 멤버 변수 (Member variables) 라고도 불려요.



메서드 (Method)

함수가 프로퍼티에 저장될 경우 이러한 함수를 메서드라고 불러요. 즉 메서드는 객체 내에 정의된 함수로, 객체의 프로퍼티 명이 함수의 이름으로 쓰여요. 객체가 소유한 메서드를 호출하기 위해서는 함수 호출과 비슷하게 객체명 다음에 점을 붙이고 `메서드명()` 을 사용해요. 메서드는 멤버 함수 (Member function) 라고도 불려요.



### `this`

this는 함수가 실행될때 그 함수를 호출한 객체를 가리키는 키워드에요. 다시 말해 함수에서 참조하는 메모리 영역을 나타내요. 따라서 객체 메서드 내부의 `this`는 객체를 가리켜요. 위 코드에서는 `kitty`라는 객체를 가리키게 되죠. 



자바스크립트에서 `this`는 함수가 호출되어 실행되는 시점에 결정됩니다. 즉, `this`의 값은 함수가 호출되었을 때 그 함수가 속해있던 객체를 가리키게 되며, 호출될 때 `this` 가 가르키는 객체가 변경될 경우 `this` 의 값도 바뀌게 됩니다.



this 가 가리키는 대상은 상황에 따라 다음과 같습니다.

- 전역 : 전역에서 this의 값은 전역객체를 가리킵니다. Node.js 의 경우 `global` 객체를,  웹브라우저의 경우 `Window` 객체를 가르킵니다.

- 전역 함수 : 전역에서 함수를 호출하게 되면 함수 내부의 this는 전역 객체를 가르킵니다. 이는 함수를 전역에서 선언하고 호출할 경우 함수는 전역객체 내부에 정의되기 때문입니다.

- 객체 : 생성자로 생성한 객체 내부에서의 `this`는 생성한 객체를 가리킵니다. 인스턴스의 메서드 내부에서도 역시 메서드를 호출한 객체를 가리키게 됩니다.

- 이벤트 핸들러 : 이벤트 핸들러 내부에서는 이벤트가 발생한 요소 객체를 가리킵니다.





## 객체 생성자

위와 같이 객체 리터럴을 이용해 객체를 생성하는 방법외에도 생성자를 이용해 객체를 생성하는 밥법도 있습니다. 

```js
function Kitty(name, age, species) {
  this.name = name;
  this.age = age;
  this.species = species;
  this.health = 5;
  
  this.eat = function() {
    this.health = this.health + 1;
  };
  
  this.run = function() {
    console.log(this.name + " Running!!");
  };
}
```



위와 같이 객체를 생성하기 위해 정의한 함수를 생성자 함수라고 부릅니다. 생성자 함수의 이름은 다른 함수와 구분하기 위해 관례적으로 첫글자가 대문자로 시작하는 PascalCase 표기법을 사용합니다.



객체의 생성은 `new` 키워드를 이용해 생성할 수 있습니다. 이렇게 new 연산자를 통해 생성한 객체를 인스턴스라고도 부릅니다. 

```js
var dinah = new Kitty("Dinah", 5, "Short hair");
var cheshire = new Kitty("Cheshire", 10, "Scottish");

console.log(dinah.age);    // 5
console.log(dinah.run());  // Dinah Running!!
console.log(cheshire.name);  // Cheshire
```



위 예에서 `new` 키워드를 이용해 객체를 생성할 때 넘겨준 인수는 `this` 를 사용해 객체의 프로퍼티에 대입됩니다. 따라서 생성한 객체의 프로퍼티는 객체 생성 시 넘겨준 인수를 이용해 초기화됩니다.

생성자를 이용해 객체를 생성하면 동일한 타입의 객체를 여러개 생성 할 수 있으므로 효율적으로 객체를 관리할 수 있습니다.





## Prototype

객체 내부에서 프로퍼티를 이용해 메서드를 정의하면 생성된 모든 인스턴스에 인스턴스 개수만큼의 메서드가 생성됩니다. 이럴경우 인스턴스가 많아질 경우 동일한 메서드를 여러개 생성하게 되어 메모리 소비가 심해지게 되는데요. 이는 프로토타입 객체에 메서드를 정의하는 방식으로 해결할 수 있습니다.

함수 객체에는 `prototype` 프로퍼티가 정의되어 있습니다. `prototype` 프로퍼티는 프로토타입 객체를 가리키고 있는데요. 동일한 생성자로 생성한 모든 객체는 동일한 프로토타입 객체를 가리키게 됩니다.

따라서 객체 생성자의 프로토타입 객체에 메서드를 추가하면 생성되는 모든 인스턴스가 메서드를 공유하므로 메모리 낭비를 줄일 수 있습니다.



```js
function Kitty(name, age, species) {
  this.name = name;
  this.age = age;
  this.species = species;
  this.health = 5;
}

Kitty.prototype.eat = function() {
  this.health = this.health + 1;
};

Kitty.prototype.run = function() {
  console.log(this.name + " Running!!");
};

var dinah = new Kitty("Dinah", 5, "Short hair");
var cheshire = new Kitty("Cheshire", 10, "Scottish");

console.log(dinah.age);    // 5
console.log(dinah.run());  // Dinah Running!!
console.log(cheshire.name);  // Cheshire
```



아래와 같이 prototype 메서드를 객체 리터럴을 대입하는 형태로 추가할 수도 있습니다. 다만 이렇게 사용할 경우 메서드를 동적으로 추가할 수 없게되므로 주의가 필요합니다.

```js
Kitty.prototype = {
  eat: function() {},
  run: function() {}
}
```



