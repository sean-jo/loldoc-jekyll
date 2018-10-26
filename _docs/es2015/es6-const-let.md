---
title: 	"ES2015 const & let"
course: "es2015"
date:   2018-10-26 09:00:00 +0900
---



## ES6 : const & let

`const`와 `let`은 ES6에 새롭게 추가된 변수 선언자입니다. `const`와 `let`은 `var`를 사용한 변수 선언과는 달리 블록 수준의 유효범위를 갖는 변수를 선언합니다.

기존의 `var`를 이용하여 변수를 선언할 경우 변수는 함수 스코프를 가지는 반면, 블록 스코프를 가지는 `let`과 `const`를 이용해 변수를 선언할 경우 변수는 중괄호 `{}` 내부에서만 유효합니다.



## let

`let`은 블록 스코프를 갖는 변수를 선언할 때 사용합니다.

```js
let name = "Alice";
```



`var`를 사용한 변수 선언과 달리 `let`을 사용해 변수를 선언할 경우 변수를 끌어올리지 않습니다.

```js
/* var */
console.log(x);
var x = 10;

//-> undefined

/* let */
console.log(y);
let y = 10;

//-> ReferenceError: y is not defined
```





## const

`const`는 블록 유효범위를 갖는 상수를 선언할 때 사용합니다. `const` 로 상수를 선언할 경우, `let`혹은 `var`와 달리 반드시 선언시 값을 초기화 해야 합니다. 

또한, `const` 로 선언한 상수에는 새로운 값을 대입하려고 할 경우 오류가 발생합니다.

```js
const alice = "Alice";

alice = "Dinah"
//-> TypeError: Assignment to constant variable.
```

