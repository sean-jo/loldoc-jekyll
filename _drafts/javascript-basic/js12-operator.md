









## 표현식과 연산자

### 표현식 (Expression)

값으로 평가될 수 있는 문(Statement)



### 연산자 (Operator)

산술 연산자 : `+, -, *, /, %, ++, --`

비교 연산자 : `===, !==, >, >=, <, <=`

할당 연산자 : `x += y`

논리 연산자 : `&&, ||, !`

Equal 연산자 `==` : 변수의 내용만을 따진다.

Strict Equal 연산자 `===` : 변수의 자료형도 따진다.

```javascript
var num1 = 10;
var num2 = new Number(10);
console.log(num1 == num2);     // --> true
console.log(num1 === num2);    // --> false
```



- 논리연산자를 이용한 단축평가 패턴

```js
// suppliedOpitons가 존재하면 사용하고, 그렇지 않으면 기본값을 사용한다.
const options = suppliedOpitons || {name: "Default"}
```



### 삼항 연산자

if...else 문의 표현식

```js
const doIt = false;
const result = doIt ? "Did it" : "Didnt do it";
```



### typeof 연산자

```js
typeof undefined      // "undefined"
typeof null           // "object"
typeof true           // "boolean"
typeof function() {}  // "function"
```



### in 연산자

특정 객체에 속성이 존재하는지를 검사할 때 사용하는 연산자.

```javascript
var arr = [1,2,3,4,5];
console.log(3 in arr);          //=> true

var obj = {name: '홍길동', id: 'user00'};
console.log('name' in obj);     //=> true
```

