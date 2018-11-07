---
title: "JavaScript 함수"
course: "javascript-basic"
date:   2018-06-26 12:00:00 +0900
---





## 함수 정의하기

함수 선언문을 통해 선언한 함수는 호이스팅되며, 함수가 해석되는 시점에 메모리에 할당되어 실행됩니다.

```js
function funcName(params) {
  result = params * 2
  return result;
};

var value = funcName(3);
console.log('Hello ' + value);
```



함수 표현식 (함수 리터럴)을 사용한 함수는 호이스팅되지 않습니다. 변수만 선언된 상태로, 함수는 실행되는 시점에 변수에 할당됩니다.

```js
var funcName = function (params) {
  console.log('Hello ' + params);
};
funcName("Aria");
```





## 즉시실행 함수

자바스크립트에는 익명함수를 정의한 후 바로 실행하는 즉시 실행 함수 (Immediately Invoked Function Expression, IIFE) 를 정의할 수 있습니다. 

즉시 실행 함수는 아래와 같이 표현합니다.

```js
(function() {
  console.log("IIFE");
})();
```

함수 정의 구문을 괄호`()` 로 감싼 후 함수를 호출하고 있습니다. 즉, 함수 선언문을 그룹연산자로 묶으면 함수가 평가되어 괄호 내부는 함수 객체의 참조값으로 바뀌며, 이를 즉시 실행하는 형태입니다.

이러한 즉시 실행 함수를 사용하면 함수를 정의하는 동시에 실행할 수 있게 됩니다.

만약 즉시 실행 함수 전체를 변수에 할당하면 변수에는 함수의 결과값이 저장됩니다.



또한, 즉시 실행 함수에 인수값을 넘기고자 한다면 아래와 같이 합니다.

```js
(function(name) {
  console.log("Hello " + name);
})("Alice");
// Hello Alice
```



즉시 실행 함수 내부에 변수를 선언하면 이 변수는 함수 내부에서만 사용 가능한 지역변수가 됩니다. 따라서 즉시 실행 함수를 이용하면 전역 공간을 오염시키지 않고 코드를 작성할 수 있습니다. 특별히 이름 영역을 선언할 방법이 없는 자바스크립트에서는 즉시 실행 함수 기법을 통해 유효범위를 사용할 수 있습니다.

특히 여러 라이브러리를 사용하여 개발을 진행할 경우 라이브러리 내부의 전역변수와 충돌을 방지하기 위해서 많이 사용되며, 라이브러리 자체도 즉시 실행 함수로 감싸져있는 경우가 많습니다.

```js
(function() {
  // 코드
})();
```





## 중첩 함수

중첩 함수는 함수의 내부에 선언된 함수를 말합니다. 중첩 함수는 주로 함수 내에서 객체의 속성처럼 사용되기도 하고, 스코프를 통해 접근 제한의 용도로 사용되기도 합니다.

중첩함수의 스코프는 중첩함수를 둘러싼 외부함수의 지역변수 범위이므로 외부에서 읽거나 쓸 수 없습니다.

```js
function outer() {
  var a = 1;
  
  function inner() {
    var a = 2;
    console.log("inner function: ", a);
  }
  
  console.log("outer function: ", a);
  inner();
}

outer();
//-> outer function:  1
//-> inner function:  2
```





## Arguments 객체

자바스크립트에서 함수를 호출할 때 정의된 파라미터의 수보다 적은 수의 인수를 전달하게 되면 해당 파라미터는 함수 내부에서 `undefined` 가 됩니다.



```js
function hello(name, age) {
  console.log(name + ', ' + age);
}

hello("Alice");  //-> Alice, undefined
```

위 함수에서 함수의 두번째 parameter인 `age`의 값은 함수 호출 시 값을 지정해 주지 않아 `undefined` 가 된 것을 확인할 수 있습니다.



함수 내부에서 Arguments 객체를 이용하면 전달된 파라미터의 수와 상관없이 함수를 호출할 때 전달된 모든 데이터를 꺼내 올 수 있습니다.

즉, 함수 호출 시 넘긴 인수는 차례대로 `arguments` 유사 배열에 저장되며, 배열과 유사하게 사용할 수 있습니다.

```javascript
function hello() {
  console.log(arguments[0] + ', ' + arguments[1]);
}

hello("Alice", 11);  //-> Alice, 11
```



Arguments 객체는 `length` 프로퍼티를 가지고 있으므로, 이를 이용해 함수 호출 시 넘어온 인수의 개수를 알 수 있습니다.

만약 인수의 갯수가 일정하지 않은 함수를 사용할 경우 이를 이용할 수 있습니다.



```js
function sumAll() {
  var sum = 0;
  
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  
  return sum;
}

console.log(sumAll(1, 2, 3, 4, 5));  //-> 15
```

위 함수는 인수로 전달받은 모든 숫자의 합을 구해 그 결과를 반환하는 함수 입니다. 이렇게 인수의 개수가 일정하지 않을 때 Arguments 객체의 `length` 프로퍼티를 이용해 각각의 인수 값을 순회해 계산 결과를 구했습니다.





## 일급 객체로서의 함수

자바스크립트에서 함수는 일급 객체입니다. 자바스크립트의 함수가 일급 객체로써 가지는 특성은 여러가지가 있습니다. 

함수는 변수에 대입할 수 있고, 배열의 요소에 대입할 수 도 있습니다.

함수는 다른 함수의 인수로 사용할 수 있고, 함수의 반환값으로 사용할 수 도 있습니다.

함수는 객체의 생성자로 사용할 수 있습니다. 클래스 구문이 없는 자바스크립트에서는 객체를 생성할 때 함수를 사용하게 됩니다. 

함수는 객체의 메서드로 사용됩니다. 함수를 객체 프로퍼티에 등록함으로써 객체의 메서드와 같이 사용할 수 있습니다.

