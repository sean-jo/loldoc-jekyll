---
title: 	"ES2015 const & let"
course: "es2015"
date:   2018-10-26 09:00:00 +0900
---




`const`와 `let`은 ES6에 새롭게 추가된 변수 선언자입니다. `const`와 `let`은 `var`를 사용한 변수 선언과는 달리 블록 수준의 유효범위를 갖는 변수를 선언합니다.

기존의 `var`를 이용하여 변수를 선언할 경우 변수는 함수 스코프를 가지는 반면, 블록 스코프를 가지는 `let`과 `const`를 이용해 변수를 선언할 경우 변수는 중괄호 `{}` 내부에서만 유효합니다.





## let

### 끌어올림

`var`를 사용한 변수 선언과 달리 `let`을 사용해 변수를 선언할 경우 변수를 끌어올리지 않습니다.

```js
/* var */
console.log(x);  //-> undefined
var x = 10;


/* let */
console.log(y);  //-> ReferenceError: y is not defined
let y = 10;
```



### 블록 스코프

`let`은 블록 스코프를 갖는 변수를 선언할 때 사용합니다.

```js
let name = "Alice";
```



`var` 를 사용할 경우 자주 문제가 되었던 문제는 클로저와 관련된 문제입니다.

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, (i)*1000);
}
//-> 5 5 5 5 5
```

위의 경우  우리의 기대와는 달리 숫자 5가 1초 간격으로 다섯번 찍힙니다. 그 이유는 for 문 내부의 `setTimeout` 함수가 클로저가 되었기 때문입니다.



`let`을 사용할 경우 이 문제를 손쉽게 해결할 수 있습니다.

```js
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, (i)*1000);
}
//-> 0 1 2 3 4
```

위에서와 같이 블록 유효범위를 가지는 `let`을 사용할 경우 반복문이 실행될 때마다 새롭게 블록 내부에서 변수 `i` 를 선언해서 사용하게 됩니다. 





## const

`const`는 블록 유효범위를 갖는 상수를 선언할 때 사용합니다. `const` 로 상수를 선언할 경우, `let`혹은 `var`와 달리 반드시 선언시 값을 초기화 해야 합니다. 

또한, `const` 로 선언한 상수에는 새로운 값을 대입하려고 할 경우 오류가 발생합니다.

```js
const alice = "Alice";

alice = "Dinah"
//-> TypeError: Assignment to constant variable.
```

