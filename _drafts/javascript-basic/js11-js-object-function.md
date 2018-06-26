---
title: "JavaScript 객체와 함수"
course: "javascript-basic"
---



## 함수 (Function)

함수는 일련의 연관성있는 명령어들을 사용하기 쉽게 포장해 놓은 것이에요. 

함수는 보통 믹서기에 비유를 많이해요. 예를들어, 믹서기라는 함수에 당근과 토마토라는 값을 넣으면 당근 토마토 주스라는 결과를 우리에게 돌려주죠. 

```js
// mixer 함수 정의하기
function mixer(items) {
  // 명령어들의 모음
}

// mixer 함수 사용하기
mixer(['carrot', 'tomato']);
//=> 'carrot tomato juice'
```

우리는 믹서기 내부에서 어떠한 원리로 주스를 만드는지는 몰라요. 하지만 그러한 결과를 우리에게 주죠. 이게 믹서기라는 함수를 사용하는 방식이에요.

함수를 사용하는 방식은 함수명 바로 뒤에 괄호를 붙여서 사용해요. 이렇게 함수를 사용하는 것을 함수를 호출한다(call)고 해요.

```js
mixer();
```

만약 함수에 어떠한 입력값을 주고싶다면 괄호 내부에 입력값을 적어주어요.

물론 우리가 프로그래밍을 하기 위해서는 함수를 사용하는 방법 뿐아니라 함수를 정의하는 방법도 알아야해요.





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

console.log(kitty.name);;
console.log(kitty.health);;

kitty.eat();
console.log(kitty.health);;

kitty.run();
```



프로퍼티와 메서드

> 프로퍼티
>
> 이름이 붙어있는 값. 객체의 프로퍼티는 객체명 다음에 점과 프로퍼티명을 붙이거나, 객체명 다음에 대괄호를 둘러싼 프로퍼티명의 문자열을 써서 접근할 수 있음.
>
> 메서드
>
> 함수가 프로퍼티에 저장될 경우 프로퍼티명이 메서드명이 됨. 객체가 소유한 메서드를 호출하기 위해서는 객체명 다음에 점을 붙이고 메서드명() 을 사용함.





### 배열 (Array)

배열은 기능이 추가된 특수한 객체로써, 데이터 값들의 모음이라고 할 수 있어요. 배열의 각 데이터 값에는 0부터 시작하는 인덱스 번호가 있어서 각 데이터 값을 확인할 수 있어요.

```javascript
var arr = ["Sean", 30, true];

// 배열 요소의 개수 구하기
arr.length;  //=> 3

//배열 요소 접근
arr[0];              //=> 'Sean'
// 마지막 요소에 접근
arr[arr.length - 1]; //=> true

// 배열 요소에 새 값을 할당하기
arr[2] = false;      // arr는 ["Sean", 30, false]
```





- 객체(Object) 데이터 타입

```js
// Function
function newFunc(params) {
  return result;
}
newFunc(args);

// Object
function NewClass(params) {
  this.params = params;
}
var myClass = new NewClass(args);


// Array
// Date
// RegExp
```





### 날짜 (Date)

```js
/* 날짜 객체 생성 */
const now = new Date();
now;  // Fri Dec 16 2017 00:~~~~

// 특정 날짜에 해당하는 객체 생성
const halloween = new Date(2016, 9, 31);  // 9는 10월;;;
```



