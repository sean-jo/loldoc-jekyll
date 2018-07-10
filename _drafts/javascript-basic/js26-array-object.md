









## Array

```js
const arr = [1, 2, 3];

// 배열 요소에 접근하기
arr[0];
arr[2];

// 배열 길이
arr.length

// 마지막 요소에 접근
arr[arr.length - 1]; //=> true

// 배열 요소에 새 값을 할당하기
arr[2] = false;      // arr는 ["Sean", 30, false]
```



Array.from()

유사 배열 혹은 반복가능한 객체로부터 새 Array 인스턴스를 만듭니다.

```js
Array.from(arrayLike[, mapFn[, thisArg]])
```



Array.isArray()

인자 객체가 배열이면 true, 그렇지 않으면 false를 리턴.

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
```



### 배열 요소 조작

```js
/* 아이템 추가 제거 */
const arr = [1, 2, 3];

arr.pop();           // 배열의 마지막 요소 제거, 제거된 요소 리턴
arr.push("new");     // 배열 마지막에 요소 추가, 배열의 크기 리턴
arr.shift();         // 배열의 첫번째 요소 제거, 제거된 요소 리턴
arr.unshift("new");  // 배열의 처음에 요소 추가, 배열의 크기 리턴


/* 배열 임의의 위치에 요소 추가 제거 */
arr.splice(start, deleteCount, el);
// start - 수정할 배열 요소의 인덱스
// deleteCount - 삭제할 요소 개수, 제거하지 않을 경우 0
// el - 배열에 추가될 요소
// return - 삭제한 요소
const arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4);  // [], arr: [1, 2, 3, 4, 5, 7]
arr.splice(1, 2);           // [2, 3], arr: [1, 4, 5, 7]


/* 배열의 끝에 여러 요소 추가하기 */
arr.concat(value);
// 배열의 끝에 value 요소들을 추가한 새로운 사본을 반환.
// 제공받은 배열은 한번만 분해한다.
const arr = [1, 2, 3];

let newArr = arr.concat(4, 5, 6);      // newArr: [1, 2, 3, 4, 5, 6]
let newArr = arr.concat([4, [5, 6]]);  // newArr: [1, 2, 3, 4, [5, 6]]


/* 배열의 일부 요소 반환하기 */
arr.slice(start, end);
// start - 요소를 어디서부터 가져올지 지정
// end - 어디까지 가져올지 저정, 생략시 마지막까지 지정됨.
const arr = [1, 2, 3, 4, 5];

let newArr = arr.slice(3);     // newArr: [4, 5]
let enwArr = arr.slice(2, 4);  // newArr: [3, 4]


/* (ES6) 배열 안에서 요소 교체하기 */
arr.copyWithin(position, start, end);
// 배열 요소를 복사해서 다른 위치에 붙여 넣고, 기존의 요소를 덮어쓴다
// position - 복소한 요소를 붙여넣을 위치
// start - 복사를 시작할 위치, end - 복사를 끝낼 위치, 생략가능
const arr = [1, 4, 5, 7];

arr.copyWithin(1, 2);  // [1, 5, 7, 7]


/* (ES6) 배열 채우기 */
arr.fill(value, start, end);
// 정해진 값으로 배열을 채운다.
// start, end - 배열의 일부만 채우기
const arr = new Array(5).fill(1);  // [1,1,1,1,1]
arr.fill("a");                     // ["a", "a", "a", "a", "a"]
arr.fill("c", 2, 4);               // ["a", "a", "c", "c", "a"]
```



Array.prototype.sort()

```js
/* 배열 요소 정렬하기 */
// 요소 순서를 반전 시킴
const arr = [1, 3, 5, 7];
arr.reverse();  // [7, 5, 3, 1]

// 정렬
const arr = [5, 3, 2, 4, 1];
arr.sort();    // arr: [1, 2, 3, 4, 5]

// 정렬 함수를 사용한 정렬
const arr = [
  {name: "SUzanne"},
  {name: "Jim"},
  {name: "Trevor"},
  {name: "Amanda"}
];

arr.sort((a, b) => { a.name > b.name });  // name 프로퍼티 알파벳 순으로 정렬
arr.sort((a, b) => { a.name[1] < b.name[1] });  // 두번째 글자의 역순으로 정렬


// 생년월일순 정렬
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);


// 이름에서 last name 분리 후 알파벳 순 정렬
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);
```



### 배열 검색

```js
/* indexOf 일치하는 첫번째 요소 인덱스 반환 */
arr.indexOf(value, start)
arr.lastIndexOf(value, start)
// value - 찾는 요소, start - 시작 인덱스
// return - 인덱스, 없을 경우 -1
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

arr.indexOf(5);       // 1
arr.lastIndexOf(5);   // 5
arr.indexOf(5, 5);    // 5
arr.indexOf(true, 3)  // -1


/* findIndex 보조함수를 이용해 요소 인덱스 검색 */
arr.findIndex(obj => obj.name === 'Francis');


/* find 조건에 맞는 요소를 반환 */
// 조건에 맞는 요소가 없을 경우 undefined 리턴
arr.find(obj => {obj.id === 2});

// 특정 인덱스보다 뒤에 있는 제곱수 찾기
arr.find((x, i) => {i > 2 && Number.isInteger(Math.sqrt(x))});

// ID를 조건으로 Person 객체를 검색
const juliet = new Person("Juliet");
const arr = [jamie, juliet, xxx, yyy, zzz];

arr.find(function (p) {
  return p.id === this.id
}, juliet);


/* some, every 조건에 맞는 요소를 반환 */
arr.some(callback);
// 조건에 맞는 요소를 찾으면 즉시 true, 없으면 false 리턴.
arr.some(x => x%2 === 0);  // 배열에 짝수가 있다면 true

arr.every(callback); 
// 배열의 모든 요소가 조건에 맞으면 true, 하나라도 맞지않으면 false 리턴.
arr.every(x => x%2 === 0);  // 홀수가 없으면 true


/* includes 배열에 특정 요소 포함 여부 판단 */
arr.includes(searchElement)
// 배열에 특정 요소가 포함되어 있는지 여부를 확인하여 true/false 를 리턴.

var a = [1, 2, 3]
a.includes(2);  // true
a.includes(4);  // false
```



### map & filter & forEach

Array.prototype.map()

```js
/* map 배열의 각 요소를 변형하여 반환 */
const cart = [
  {name: "Widget", price: 9.95},
  {name: "Gadget", price: 22.95}
];

const prices = cart.map(x => x.price);  // [9.95, 22.95]
const discountPrices = prices.map(x => x * 0.8);
const cart = items.map((x, i) => ({name: x, price: prices[i]}));


// inventors 이름 반환
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);
```



Array.prototype.filter()

```js
/* filter : 배열의 각 항목 중 콜백함수의 표현식이 true인 항목의 배열을 반환 */
var new_array = arr.filter(callback[, thisArg])

const cards = [];
cards.filter(c => c.value === 2);  // value가 2인 객체만 리턴

var nArr = arr.tasks.filter(function(task) { return !task.completed; });
var nArr = arr.task.filter((task) => !task.completed);  // ES2015

// list of inventors who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

console.table(fifteen);
```



Array.prototype.forEach() 반복

```js
// 배열 내의 요소들에 대해 지정된 함수를 한 번씩 실행
arr.forEach(callback(currentValue, index, array), thisArg)
// currentValue - 현재 처리 중인 요소, index - 처리 중인 요소의 인덱스
// array - forEach()가 적용되고 있는 배열
// thisArg - (optional) callback의 this 값. 호출될 때 콜백에 전달된다.
// 리턴 - undefined


// 배열 콘텐츠 출력
[2, 5, 7, 9].forEach(function(element, index, array) {
  console.log(`a[${index}] = ${element}`);
});  // a[0] = 2 ...
```



### reduce

```js
/* reduce 배열 자체를 변형. 보통 배열을 값 하나로 줄이는데 사용 */
arr.reduce((acc, item, index, array) => {}, init);
// acc - 누적값, item - 각 요소, index - 인덱스, arr - 배열자신
// init - 누적값의 초깃값

// 배열의 숫자를 더하기
const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x, 0);
const sum = arr.reduce((a, x) => a += x);  // 배열의 첫 요소가 초깃값일 경우 생략


// 향년 더하기
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);


// data 내부 각 item 갯수 카운트
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function(obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);


/* Array의 max값 구하기 */
var arr = [4, 2, 3];
var max = arr.reduce(function(a, b) {
  return Math.max(a, b);
});

// ES2015 Spread Operator 사용
var arr = [1, 2, 3];
var max = Math.max(...arr);
```



### 문자열 병합

```js
/* join 배열 요소들을 하나로 합친 문자열을 반환 */
arr.join(seperator);
// seperator - 구분자로 사용할 문자, 기본값은 쉼표(,)

var str = arr.join("-"); // "1-2-3"
```

