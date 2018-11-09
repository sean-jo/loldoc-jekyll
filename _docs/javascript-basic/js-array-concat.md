---
title: "JS Array 요소 조작 concat(), slice(), join(), indexOf()"
course: "javascript-basic"
date:   2018-06-28 10:00:00 +0900
---



자바스크립트 배열 메서드 중 원본 배열은 변경하지 않은체로, 메서드의 반환값으로 새로운 배열을 리턴하는 메서드들을 확인해 보겠습니다.

아무래도 이러한 메서드들이 개발자의 실수를 예방할 수 있기에 선호하는 편입니다.



## 배열 요소 조작

### concat 메서드 - 배열 끝에 새로운 요소 추가

Array.prototype.concat() 메서드는 인수로 받은 값을 원본 배열의 끝에 새로운 요소로 추가한 뒤 새로운 배열을 반환합니다. 만약 인수로 전달받은 값이 배열이라면 한번 분해한 뒤 요소로 추가하게 됩니다.



```js
// 배열의 끝에 value 요소들을 추가한 새로운 사본을 반환
arr.concat(value);

/* 예시 */
var arr = [1, 2, 3];

var newArr = arr.concat(4, 5, 6);      // newArr: [1, 2, 3, 4, 5, 6]
var newArr = arr.concat([4, [5, 6]]);  // newArr: [1, 2, 3, 4, [5, 6]]
```





### slice 메서드 - 배열의 요소 변환

Array.prototype.slice() 메서드는 인수를 통해 지정한 만큼의 요소를 잘라낸 후 해당 배열을 반환합니다. 물론 원본 배열은 그대로 입니다.

이때 첫 번째 인자는 잘라낼 위치의 인덱스 숫자를 지정하며, 두 번째 인자로 가리키는 인덱스 숫자의 바로 앞 요소까지를 잘라낼 요소로 지정합니다. 즉 `slice(2, 4)` 라면 배열의 세번째, 네번째 요소가 선택됩니다.


```js
arr.slice(start, end);
// start - 요소를 어디서부터 가져올지 지정
// end - 어디까지 가져올지 저정, 생략시 마지막까지 지정됨.

var arr = [1, 2, 3, 4, 5];

var newArr = arr.slice(3);     // newArr: [4, 5]
var newArr = arr.slice(2, 4);  // newArr: [3, 4]
```





### join 메서드 - 배열 요소를 문자열로 병합

Array.prototype.join() 메서드는 배열의 모든 요소를 인수로 전달받은 구분문자를 사용해 하나의 문자열로 만들어 반환합니다. 만약 구분문자를 지정해 주지 않으면 기본값으로 쉼표를 사용하게 됩니다.

```js
/* 배열 요소들을 하나로 합친 문자열을 반환 */
arr.join(seperator);
// seperator - 구분자로 사용할 문자, 기본값은 쉼표(,)

var arr = [1, 2, 3];
var str = arr.join("-"); // "1-2-3"

// 인수로 빈문자열을 지정하면 
// 구분문자 없이 하나로 합쳐진 문자열을 반환
var arr = ["h", "e", "l", "l", "o"];
var str = arr.join("");  // 'hello'
```





## 배열 검색

### indexOf 메서드 - 일치하는 요소 반환

indexOf 메서드는 메서드의 첫번째 인수로 지정한 값을 배열 내에서 검색한 후 가장 먼저 찾은 요소의 인덱스를 반환합니다. 만약 해당하는 값이 없을 경우에는 -1을 반환합니다.

lastIndexOf 메서드를 사용하게 되면 배열의 끝에서부터 역순으로 검색하게 됩니다.

위 메서드에 두번째 인수를 지정하게 되면 검색을 시작할 인덱스를 지정하게 됩니다. 예를들어 두번째 인수가 1이라면 배열의 두번째 요소부터 검색을 시작하게 됩니다.

```js
/* indexOf 일치하는 첫번째 요소 인덱스 반환 */
arr.indexOf(value, start)
arr.lastIndexOf(value, start)
// value - 찾는 요소, start - 시작 인덱스


var arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

arr.indexOf(5);       // 1
arr.lastIndexOf(5);   // 5
arr.indexOf(5, 5);    // 5
arr.indexOf(true, 5)  // -1
```





### some, every, includes 메서드

some, every 메서드는 메서드의 인수로 전달받은 콜백함수를 평가하여 조건에 맞는 요소가 있다면 true를, 없다면 false를 반환하는 메서드입니다.

이때 some 메서드는 조건에 맞는 요소가 하나라도 있으면 true를 반환합니다.

every 메서드는 배열의 모든 요소가 조건에 맞아야 true를 반환합니다. 하나라도 맞지 않으면 false를 반환합니다.

```js
/* some, every 조건에 맞는 요소를 반환 */
arr.some(callback);
arr.every(callback); 

/* 예시 */
var arr = [1, 2, 3, 4, 5];
arr.some(function(x) {
  // 배열에 짝수가 하나라도 있다면 true
  return x % 2 === 0;
});  //-> true

arr.every(function(x) {
  // 배열의 모든 요소가 짝수일 경우 true
  return x % 2 === 0;
});  //-> false
```



includes 메서드의 경우, 인수로 전달받은 값이 배열에 포함되어 있는지 확인한 후 해당하는 값이 있다면 true를 리턴합니다.

```js
arr.includes(searchElement)
// 배열에 특정 요소가 포함되어 있는지 여부를 확인하여 true/false 를 리턴.

var a = [1, 2, 3];
a.includes(2);  // true
a.includes(4);  // false
```



