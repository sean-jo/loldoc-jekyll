---
title: "JavaScript 클로저"
course: "javascript-basic"
date:   2018-06-26 13:00:00 +0900
---




# JavaScript Closure

클로저는 자바스크립트가 가진 강력한 기능으로, 특정 변수를 외부에 노출시키지 않은 체로 변수의 상태를 유지할 수 있습니다.



일반적으로 함수는 상태를 가지고 있지 않습니다. 함수는 입력값에 따라 동일한 반환값을 가진다고 했습니다. 따라서 함수가 호출될 때마다 변수에 1씩 더하는 `counter()` 함수는 아래와 같이 작성합니다.

```js
var count = 0;

function counter() {
  return count = count + 1;
}

counter();  // 1
counter();  // 2
counter();  // 3
```



하지만 `count` 와 같은 전역변수를 외부에 노출시켜 놓을 경우 문제가 생길 가능성이높습니다. 다른 사람이 작성한 코드와 충돌하여 변수가 다른 값으로 덮어씌워질 수도 있습니다. 이를 전역변수 오염이라고 부르기도 합니다.

이럴 경우 변수를 함수 내부에 숨겨놓을 수 있는데 이때 클로저를 사용할 수 있습니다.





## 클로저 정의

클로저를 사용하면 함수 내부에 만든 지역변수가 사라지지 않고 계속해서 값을 유지하고 있는 상태를 정의할 수 있습니다.

```js
function counter() {
  var count = 0;
  return function() {
    return count = count + 1;
  }
}

counter();  // [Function]
```

위의 `counter()` 함수를 실행하면 함수의 리턴값으로 정의해놓은 익명함수의 참조를 반환합니다.

이때 익명함수는 `counter()` 함수의 지역 변수인 `count` 변수를 참조하고 있습니다.



```js
var inc = counter();

inc();  // 1
inc();  // 2
inc();  // 3
```

이제 전역변수 `inc` 를 선언하고 익명함수를 대입합니다. 즉 함수 리터럴을 이용해 함수를 정의한 것과 같습니다. 이때, `count` 변수는  `inc` 의 익명함수 참조를 통해 참조하게 됩니다.

이렇게 함수를 호출하여 함수 컨텍스트를 생성한 상태에서 반환값인 중첩함수의 객체를 이용해 간접적으로 `counter()` 함수를 참조하면 `counter()` 함수는 메모리에서 지워지지 않고 계속 남아있게 됩니다. 



만약 `counter()` 함수를 새로 호출하면 새로운 함수 컨텍스트가 생성됩니다. 따라서 아래와 같이 `counter()` 함수를 또다른 변수에 대입해 사용하면 별도의 카운터를 생성할 수 있습니다.

```js
var inc1 = counter();
var inc2 = counter();

inc1();  // 1
inc1();  // 2
inc2();  // 1
inc2();  // 2
```



클로저를 이용하면 함수의 내부 상태를 외부로부터 은폐시킬 수 있습니다. 위의 예에서 변수 `count` 는 함수 외부에서 읽거나 쓸 수 없으며, 오직 중첩함수로 정의한 `inc()` 를 통해서만 읽거나 쓸 수 있게됩니다.

다시 말해, 중첩함수 내부에서 바깥함수의 변수를 조작하고자 할 경우 클로저를 정의해서 사용할 수 있습니다.





## 즉시실행 함수와 클로저

즉시 실행 함수를 이용해 클로저를 조금 더 단순하게 사용할 수 있습니다.

```javascript
var counter = (function () {
  var count = 0;
  return function() {
    return count = count + 1;
  }
})();

console.log(counter());  // 1
console.log(counter());  // 2
```


