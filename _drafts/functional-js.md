



# 함수형 자바스크립트



## 고차함수

고차함수란 함수를 다른 함수의 인수로 사용하거나 함수의 리턴값으로 반환하는 함수를 말합니다. 자바스크립트에서 함수는 일급객체이므로 고차함수를 쉽게 사용할 수 있습니다.

고차함수를 사용하면 패턴을 추상화하여 프로그램의 가독성과 유지 보수성을 향상시킬 수 있습니다.



---

> 모던 자스 입문
>
> - [ ] React 책 참조할 것



고차함수 예

```js
function joinStrings(n, f) {
  var s = "";
  for(var i = 0; i < n; i++) {
    s += f(i);
  }
  return s;
}

var digits = joinStrings(10, function(i) { return i; });
var randomChars = joinStrings(8, function(i) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt(0));
});

console.log(digits);
console.log(randomChars);
```



합성함수

함수 f(x)와 g(x)가 있을 때 함수 f(g(x)) 를 f와 g의 합성 함수라고 합니다.

```js
// 인수로 받은 함수를 순차적으로 합성한 함수를 반환
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

var square = function(x) { return x * x; };
var add1 = function(x) { return x + 1; };
var h = compose(square, add1);
console.log(h(2));

```



부분 적용

인수를 여러개 받는 함수의 몇몇 인수를 상수로 지정해서 새로운 함수를 생성하는 기법.

```js
function product(x, y) { return x * y; };
var product2 = product.bind(null, 2);
```



커링

인수를 두 개 이상 받는 함수를 분해하여 인수가 하나인 함수의 중첩 함수로 변환하는 작업.

```js
// Math.pow 를 커링한 함수
var pow = function(exponent) {
  return function(base) {
    return Math.pow(base, exponent);
  }
}
```



커링된 함수의 장점은 부분 적용한 함수를 쉽게 만들어 낼 수 있다는 점

```js
// Math.pow를 부분 적용한 함수들
var square = pow(2);
var sqrt = pow(.5);
var cubicroot = pow(1/3);
```

커링을 활용하면 매개변수를 나타내는 함수 집합을 정의할 수 있다.





메모이제이션

함수를 호출했을 때의 인수와 반환값을 한 쌍으로 만들어 저장해 두는 기법.

함수에 메모이제이션을 적용해 두면 한 번 건네받은 이력이 있는 인수의 결과값으로 저장해 둔 결과를 반환하므로 추가적이 계산을 생략 할 수 있음.

