---
title: 	"ES2015 객체와 프로퍼티"
course: "es2015"
date:   2018-10-28 13:00:00 +0900
---



# ES6 Object에 추가된 기능

ES6에서 추가된 객체의 기능들을 확인해보겠습니다.



## 프로퍼티 단축 구문

객체의 프로퍼티를 단순하게 표기할 수 있습니다. 예를 들어 외부 변수명을 이용해 객체에 데이터를 전달할 경우 아래와 같이 간략하게 표현할 수 있습니다.

```js
let name = "Alice";
let age = 10;

let alice = { name, age };
console.log(alice);  // { name: 'Alice', age: 10 }


// 기존 ES5 표기법
var alice = {
  name: name,
  age: age
}
```





## 계산된 프로퍼티 이름 (Computed Property names)

객체의 프로퍼티 이름에 평가값을 사용할 수 있게 되었습니다. 프로퍼티 이름에 대괄호를 이용해 평가식을 사용할 수 있으며 평가된 값이 문자열 타입으로 전환되어 프로퍼티명으로 사용됩니다.

```js
let name = "myName";
let num = 1;

let person = {
  [ name + num ]: "alice"
}

console.log(person);  // { myName1: 'alice' }
```



객체의 프로퍼티 명으로 심볼을 사용할 수 있으며, 만약 Symbol이 사용되었다면 그대로 심볼을 프로퍼티명으로 사용합니다.

```js
let person = {
  [ Symbol("name") ]: "Alice"
}

console.log(person);  // { [Symbol(name)]: 'Alice' }
```





## 메서드 단축 구문

객체의 메서드를 정의할 때 기존의 함수 리터럴 표기법보다 간략한 표기법을 사용할 수 있습니다.

```js
var alice = {
  intoTheRabbitHole() {
    console.log("Rabbit Hole")
  }
}


// 기존 ES5 표기법
var alice = {
  intoTheRabbitHole: function() {
    console.log("Rabbit Hole")
  }
}
```

단, `method() {}` 메서드 표기법은 객체의 메서드로만 사용할 수 있습니다. 즉 객체 생성자 함수로는 사용할 수는 없습니다.

