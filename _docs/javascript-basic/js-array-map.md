---
title: "JS Array - map(), filter(), forEach(), reduce()"
course: "javascript-basic"
date:   2018-06-29 10:00:00 +0900
---



자바스크립트 배열이 제공하는 map, filter, forEach, reduce 메서드는 배열 조작을 위해 폭넓게 사용되는 메서드입니다. 이러한 함수들은 함수형 프로그래밍 패러다임으로 더욱 많이 사용되는 추세입니다.





## map 메서드

Array.prototype.map() 메서드는 메서드의 인수로 함수를 넘깁니다. 인수로 전달한 함수를 배열의 모든 요소에 대해 한번씩 실행하며, 함수가 리턴한 결과값으로 새로운 배열을 만들어 리턴합니다. 이때 인수로 넘긴 함수는 세 개의 인자를 가집니다.

```js
arr.map(function(value, index, array) {
  // return value
});
```

콜백함수의 각 인자는,

- `value` 는 처리 중인 배열의 각 요소
- `index` 는 처리 중인 배열 요소의 인덱스
- `array` 는 map 함수가 적용되고 있는 배열을 가리킵니다.

이때, map 메서드의 인자로 넘기는 함수는 반드시 리턴값을 반환해야 합니다.



```js
var cart = [
  {name: "Apple", price: 9.9},
  {name: "Banana", price: 11.9}
];

var prices = cart.map(function(v) {
  return v.price;
});
console.log(prices)  //-> [9.9, 11.9]

var discountPrices = prices.map(function(v) {
  return v * 0.8;
});
```





## forEach 메서드

Array.prototype.forEach() 메서드는 인수로 전달받은 콜백함수를 배열의 모든 요소에 대해 한번씩 실행합니다.

```js
arr.forEach(function(value, index, array) {}, thisArg)
// value - 현재 처리 중인 요소
// index - (optional) 처리 중인 요소의 인덱스
// array - (optional) forEach()가 적용되고 있는 배열
// thisArg - (optional) 호출될 때 전달되는 callback의 this 값
```



forEach 메서드를 이용해 배열 각 요소의 합을 구하는 방식입니다.

```js
// 배열의 각 요소의 합
var arr = [1, 3, 5, 7, 9];
var sum = 0;

arr.forEach(function(value, index, array) {
  sum += value;
});

console.log(sum); //-> 25
```





## filter 메서드

Array.prototype.filter() 메서드는 배열의 각 항목 중 콜백함수의 표현식이 true인 항목의 배열을 반환합니다. 이를 통해 특정 조건을 만족하는 배열만을 모아 새로운 배열을 만들어 낼 수 있습니다.

```js
arr.filter(function(value, index, array) {}, thisArg)
```



filter 메서드를 이용해 특정 조건을 만족하는 배열을 모아 새로운 배열로 만듭니다.

```js
var tasks = [
  {item: "Buy Milk", completed: false},
  {item: "Go hospital", completed: true}
];

var uncompletedTasks = tasks.filter(function(task) { 
  return !task.completed; 
});
```





## reduce 메서드

Array.prototype.reduce() 메서드는 인수로 전달받은 콜백함수를 이용해 배열의 각 요소를 순회하면서 배열의 모든 요소를 합성합니다. 이때 콜백함수의 첫 번째 요소로 누적될 값의 초기값을 지정해 줍니다. reduce 함수는 보통 배열의 각 요소를 하나의 값으로 줄이는데 사용됩니다.

```js
arr.reduce(function (acc, item, index, array) {}, init);
// acc - 누적값
// item - 각 요소
// index - 인덱스
// array - 배열자신
// init - 누적값의 초깃값
```

이때 reduce 메서드의 두번째 인자로 누적값의 초기값을 지정해 줄 수도 있습니다.



```js
// 배열의 숫자를 더하기
var arr = [5, 7, 2, 4];

var sum = arr.reduce(function (a, x) {
  return a += x
});

var sum = arr.reduce(function (a, x) {
  return a += x
}, 0);
```



