









## 콜백함수

Javascript에서는 함수도 객체이기 때문에 파라미터로 넘길 수 있고, 넘겨받은 함수를 언제 실행할지 결정할 수도 있다. 따라서, 모든 명령의 실행을 마친 후에 넘겨받은 함수 객체를 실행시킬수도 있는데 이것을 바로 Callback이라고 한다.

```javascript
/* 콜백 기본 사용법 */
// 함수 선언
function sum(a, b, callback) {
  var result = a + b;
  
  callback(result);
  return result;
}

// 콜백 함수
var r = sum(10, 20, function(result) {
  console.log(result + ' added');
})  // '30 added'
r;  // '30'


/* 콜백과 클로저 예시 */
function add(a, b, callback) {
  let result = a + b;
  callback(result);

  let count = 0;
  let history = function () {
    count++;
    return count + ' : ' + a + ' + ' + b + ' = ' + result;
  };
  return history;
}

let add_history = add(10, 10, function(result) {
  console.log('Result : %d', result);
});

console.log('History : ' + add_history());


/* Callback을 이용한 비동기 setTimeout 처리 */
// 함수 정의
var repeatConsoleLog = function (i, callback) {
  setTimeout(function() {
    console.log(i);
    if (i >= 9) {
      callback();
    } else {
      repeatConsoleLog(i+1, callback);
    }
  }, 10);
}

// 함수 실행
repeatConsoleLog(0, function () {
  // 함수의 실행이 끝난 뒤에 이곳의 코드가 실행된다.
  console.log("done");
});
```



