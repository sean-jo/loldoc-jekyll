---
title: "JavaScript 조건문"
course: "javascript-basic"
date:   2018-06-23 12:00:00 +0900
---



조건문은 어떠한 조건에 따라 논리 구조를 분기시키는 역할을 해요. 표현식의 참 거짓 여부에 따라 어떠한 문장은 실행시키고 어떠한 문장은 건너뛰고 하는거죠.



## if 문

조건문의 기본은 if 문이에요. if문은 기본적으로 아래처럼 구성되요.

```js
if (표현식) {
  // 표현식의 값이 true일 경우 실행할 구문(Statement)
}
```



if 뒤에 괄호를 이용해 표현식을 작성해요. 표현식은 Boolean 값으로 표현될 수 있어야 해요. 즉 표현식의 결과가 true이거나 false 이어야 하죠. 만약 표현식의 결과가 true라면 중괄호 (`{ }`) 내부 (블록 내부) 의 구문이 실행되요. 만약 표현식의 결과가 false라면 중괄호 내부의 구문은 실행되지 않게 되죠.

```js
// conditional.js
var score = 85;

if (score > 60) {
  console.log("Pass")
}
```

위 예제를 실행해 보면 콘솔에 Pass가 찍히는 것을 확인할 수 있어요. 만약 score가 60이라면 어떻게 될까요? 표현식의 값이 `false` 가 되므로 중괄호 내부의 문장은 실행되지 않고 건너뛰게 되요. 예제에서는 다음 문장이 없으니 프로그램이 종료되겠죠. 그럼 콘솔에는 아무것도 찍히지 않아요.



## if...else 문

if 문은 조건문의 값이 `true` 일 경우에만 중괄호 내부의 문장이 실행되요. 만약 `false` 인 경우에도 어떠한 값이 실행되게 하려면 `else` 구문을 함께 이용해요.

```js
if (표현식) {
  // 표현식의 값이 true일 경우 실행할 구문(Statement)
} else {
  // false 일 경우 실행될 구문
}
```

표현식이 true 이면 if의 중괄호 부분이 실행되고, false 라면 else 이후의 중괄호 부분이 실행되는 거죠. 즉 조건의 참과 거짓에 따라 실행될 문장을 분기한거죠. `conditional.js` 예제를 수정해서 실습해보죠.

```js
var score = 60;

if (score > 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

점수에 따라 합격 불합격 여부를 판정하는 프로그램이죠. 결과는 Fail이에요. 맞죠?



## else if 문

예제를 조금더 수정해 보죠. 점수에 따라 합격 불합격을 판정하는 것이 아니라, 점수에 따라 A 부터 F 학점까지 학점을 출력하려면 이렇게 할 수 있어요.

```js
var score = 61;

// if (score > 60) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

if (score > 90) {
  console.log("A");
} else if (score > 80) {
  console.log("B");
} else if (score > 70) {
  console.log("C");
} else if (score > 60) {
  console.log("D");
} else {
  console.log("F");
}
```

결과는 무엇인가요? 다행히 F는 피했네요.



위의 조건문에 논리 연산자를 함께 써서 더 복잡하게 만들어 보죠. 예를 들어 출석률이 90% 이상이어야만 A를 받을 수 있으려면 어떻게 할까요?

```js
var score = 100;
var attendancePercent = 89;

if (score > 90 && attendancePercent >= 90) {
  console.log("A");
} else if (score > 80) {
  console.log("B");
} else if (score > 70) {
  console.log("C");
} else if (score > 60) {
  console.log("D");
} else {
  console.log("F");
}
```



만약 출석률이 75% 미만이라면 아무리 성적이 좋아도 F학점이 뜨게 만들고 싶어요. 이건 어떻게 할까요?





## switch 문

if...else if 문은 경우에 따라 switch 문으로 깔끔하게 표현할 수도 있어요. 

```js
switch (표현식) {
  case 1:
    //...
    break;
  case 2:
    //...
    break;
  default:
    //...
    break;
}
```

switch 다음에 오는 괄호에는 반환값이 있는 어떠한 표현식이든 올 수 있어요. switch 문의 블록 내부는 여러개의 case문과 하나의 default문으로 구성되며, 괄호 내부의 표현식 값에 따라 조건에 부합하는 case문이 실행되요.

만약 case 문에 break 문이 없으면 switch 문이 종료되지 않고 다음 case문을 실행시켜요.





## 삼항 연산자

if...else 문의 표현식으로, 주어진 조건식의 참 거짓에 따라 값을 반환해요.

```js
// 조건부 연산자
(조건식) ? 실행구문1 : 실행구문2;

// 예시
var num = 42;
var result = (num % 2 === 0) ? "even" : "odd";
console.log(result);  // 'even'
```

`?` 이전의 조건식이 참일 경우, `:` 를 기준으로 좌측의 값을 반환하고, 거짓일 경우는 `:` 를 기준으로 우측의 값을 반환하는거죠.

이렇게 삼항연산자를 사용하면 if...else 코드의 길이를 줄이는데 도움이됩니다.

