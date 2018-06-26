---
title: "JavaScript 조건문"
course: "javascript-basic"
date: 
---



조건문은 어떠한 조건에 따라 논리 구조를 분기시키는 역할을 해요. 표현식의 참 거짓 여부에 따라 어떠한 문장은 실행시키고 어떠한 문장은 건너뛰고 하는거죠.



## if 문

조건문의 기본은 if 문이에요. if문은 if문과 





### 조건문

```javascript
if(a > b && c < d) {
} else if (a >= b || c <= d) {
} else if (!== a) {
}
```



## switch 문

switch다음에 오는 괄호에는 반환값이 있는 어떠한 표현식이든 올 수 있어요. switch 문의 블록 내부는 여러개의 case문과 하나의 default문으로 구성되며, 괄호 내부의 표현식 값에 따라 조건에 부합하는 case문이 실행되요.

```js
// switch
switch(val) {
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

만약 case 문에 break 문이 없으면 switch 문이 종료되지 않고 다음 case문을 실행시켜요.





## 삼항 연산자

if...else 문의 표현식

```js
// 조건부 연산자
(조건식) ? 실행구문1 : 실행구문2;


const doIt = false;
const result = doIt ? "Did it" : "Didnt do it";
```

