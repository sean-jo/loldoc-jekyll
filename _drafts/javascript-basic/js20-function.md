---
title: ""
---





# JavaScript 함수

- 함수 - 특정 알고리즘을 포장
- 객체의 생성자 - 클래스가 없는 자바스크립트에서 클래스 대용으로 사용할 수 있는 기능
- 중첩 함수 - 함수 내에서 마치 객체의 속성처럼 사용되거나 접근 제한의 용도로 사용되는 기능
- 객체의 메서드 - 함수를 객체의 속성으로 등록함으로써 객체의 일부로 동작하게 하는 기능
- 이벤트 리스너 - 이벤트 처리 전담 객체로서의 기능
- 네임스페이스 - 객체들의 울타리를 제공하는 기능

```javascript
// 함수선언 - 해석되는 시점에 메모리 공간을 차지
function funcName(params) {
  result = params * 2
  return result;
};

var value = funcName(args);
console.log('Hello ' + value);


// 함수 표현식 - 변수만 선언되고, 함수는 실행과정에서 할당된다
var funcName = function (params) {
  console.log('Hello ' + params);
};
funcName("Aria");


// 익명함수 확장
(function(params) {
  //...
})(
  return result;
)(args);


// 즉시 실행 함수(IIFE)
// 변수에 함수를 할당하는 것이 아니라, 함수의 결과물(리턴값)을 저장한다
var doA = (function(param) {
  //...
  return function () {
    //...
  };
})(args);
doA();


// arguments 객체를 이용해 전달된 파라미터의 수와 상관없이
// 함수 호출에 사용된 데이터를 꺼낼 수 있다.
function doB() {
  console.log(arguments);
};
doB(1,2);     // --> [1, 2]
```





