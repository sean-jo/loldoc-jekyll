





- 객체(Object) 데이터 타입

```js
// Function
function newFunc(params) {
  return result;
}
newFunc(args);

// Object
function NewClass(params) {
  this.params = params;
}
var myClass = new NewClass(args);


// Array
// Date
// RegExp
```





### 배열 (Array)

배열은 기능이 추가된 특수한 객체.

```javascript
var arr = ["Sean", 30, true];

// 배열 요소의 개수 구하기
arr.length;  //=> 3

//배열 요소 접근
arr[0];              //=> 'Sean'
// 마지막 요소에 접근
arr[arr.length - 1]; //=> true

// 배열 요소에 새 값을 할당하기
arr[2] = false;      // arr는 ["Sean", 30, false]
```



### 날짜 (Date)

```js
/* 날짜 객체 생성 */
const now = new Date();
now;  // Fri Dec 16 2017 00:~~~~

// 특정 날짜에 해당하는 객체 생성
const halloween = new Date(2016, 9, 31);  // 9는 10월;;;
```

