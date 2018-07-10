---
title: "JavaScript 반복문"
course: "javascript-basic"
date: 
---



반복문은 어떠한 조건이 참일 경우 블록 내부의 문장을 반복 실행해요.



## while 문

while문은 괄호 내의 조건식이 true일 경우 블록 내의 문장을 실행해요. 블록내의 문장을 모두 실행하고 나면 다시 괄호내의 조건식을 평가해서 조건식이 false가 아니라면 다시 실행되요. 만약 조건식이 false라면 블록을 벗어나고 while 문은 종료되죠.

```js
while (조건식) {
}
```

while문을 사용할 때는 조건문을 false로 만들 수 있는 조건을 만드는 것이 중요해요, 그렇지 않으면 무한 루프에 빠질 위험이 많아요.

> 무한루프 - 반복문에서 어떠한 조건식이 계속 true로 평가되어, 반복문이 종료되지 않고 무한히 계속되는 것



## do...while 문

do...while 문은 while문과 비슷해요. while 문을 실행 시키기 이전에 `do{}` 블록으로 둘러싼 부분의 문장은 무조건 실행 시키고 while문으로 들어가는 거에요.

```js
do {
  // 한번 실행
} while (조건식);
```

그런데 do...while 문은 많이 안써요.



## for 문

for문은 엄청 많이 써요. for 문의 괄호 내부는 세부분으로 나뉘어져 있어요. 

```js
for(초기값; 조건식; 증감식) {
  // statement
}
```

for 문이 실행되면 가장 처음 초기식을 한번 실행시켜요. 그리고 조건식을 확인해서 결과가 true일 경우 블록내의 문장을 실행시키고, 블록이 끝나면 증감식을 실행해요. 그리고 다시 조건식과 비교해서 true면 블록내의 문장을 실행시켜요. 이렇게 조건식의 결과가 false가 될 때까지 블록 내부의 문장을 반복 실행해요.

```js
for(var i=0; i<10; i++) {
  continue;
  // or
  break;
}
```



### 제어문의 예외

break - 루프 중간에 빠져나간다.

continue - 루프에서 다음 단계로 건너뛴다.

return - 제어문을 무시하고 함수를 빠져나간다.

throw - 예외를 발생시킨다.



## in 연산자

in 연산자는 특정 객체에 속성이 존재하는지를 검사할 때 사용하는 연산자에요. in 연산자를 사용하면 배열이나 객체 내에서 원하는 프로퍼티가 있는지 확인할 수 있어요.

```javascript
var arr = [1,2,3,4,5];
console.log(3 in arr);          //=> true

var obj = {name: 'Alice', age: 7};
console.log('name' in obj);     //=> true
```

in 연산자는 주로 for...in 구문을 이용해서 객체나 배열의 각 원소를 순서대로 처리할 때 사용되요.



## for...in 루프

for...in 문은 객체의 프로퍼티에 대해 순차적으로 루프를 실행하도록 해줘요. for...in 문 사이의 변수에는 객체의 프로퍼티 명이 순차적으로 저장되므로 이를 이용해서 블록내에서 여러가지 작업을 할 수 있어요.

```js
var alice = { name: 'Alice', gender: 'Femail', age: 7 };

for(var prop in alice) {
  if(!alice.hasOwnProperty(prop)) continue;
  console.log(prop + ": " + alice[prop]);
}
```




