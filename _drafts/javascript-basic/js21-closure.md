







## 클로저

변수의 상태유지, 함수 내부에 만든 지역변수가 사라지지 않고 계속해서 값을 유지하고 있는 상태. 모든 변수의 범위는 함수를 기준으로 한다.

```javascript
// 예제
function add() {
  var total = 0;
  return function (num) {
    total += num;
    return total;
  };
};
var addFn = add();
console.log(addFn(1));     // 1
console.log(addFn(2));     // 3

// 예제
function outter() {
  var count = 1;
  function inner() {
    count++;
    return count;
  }
  return inner;
}
var counter = outter();

// 즉시 실행 함수와 클로저
var makeSum = (function () {
  var sum = 0;
  return function doJob (num) {
    sum += num;
    return sum;
  };
})();

console.log(makeSum(10));     // 10
console.log(makeSum(20));     // 30
```

