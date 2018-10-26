---
title: 	"JavaScript Math 객체"
course: "javascript-basic"
date: 	2018-10-26 10:00:00 +0900
---



자바스크립트에서는 복잡한 수학 연산을 위해 Math 객체를 사용할 수 있습니다. Math 객체의 여러 프로퍼티와 메서드를 이용해 복잡한 수학연산을 진행하는데, 예를 들어 원주율을 이용하기 이해서는 Math 객체에 상수로 정의된 `Math.PI` 프로퍼티를 이용할 수 있습니다.

특히나 `Math.random()` 등의 함수는 랜덤한 숫자값을 얻을 때 자주 사용하므로 반드시 알고있어야 합니다.



## Property

Math 객체에서 자주 사용되는 프로퍼티는 아래와 같습니다.

```js
Math.PI     // PI 값 (3.141592...)
Math.E      // 자연로그 밑수
Math.LN2    // Log2
Math.LN10   // Log10
Math.LOGE2  // Loge2
Math.SQRT2  // 2 제곱근
```





## Method

Math 객체에서 자주 사용되는 메서드는 아래와 같습니다.

```javascript
// 절대값
Math.abs(-5.5);     //-> 5.5

// 1과 2를 비교해 작은값 리턴
Math.min(1, 2);     //-> 1

// 1과 2를 비교해 큰값 리턴
Math.max(1, 2);     //-> 2

// 내림
Math.floor(10.10);  //-> 10

// 올림
Math.ceil(10.10);   //-> 11

// 반올림
Math.round(10.10);  //-> 10

// 난수생성 - 0부터 1사이의 랜덤한 실수값을 리턴
Math.random();
```



Math.random 함수를 이용해 1부터 10사이의 랜덤한 정수값을 리턴하기 위해서는 아래와 같이 사용합니다.

```js
// 1부터 10사이의 랜덤 정수값 리턴
var rand = Math.floor((Math.random() * 10) + 1);
```



기타 다양한 수학연산에 사용되는 메서드를 지원합니다.

```js
Math.pow(x, y);  // X의 y승
Math.sqrt(x);    // x의 제곱근
Math.exp(x);     // 제곱
Math.log(x);     // 로그함수

// 삼각함수
Math.sin(x);
Math.cos(x);
Math.tan(x);
Math.asin(x);
Math.acos(x);
Math.atan(x);
```



