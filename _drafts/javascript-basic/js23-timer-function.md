









## 타이머함수

```javascript
var timerID = setInterval(func, duration); // duration 마다 func 실행
var timerID = setTimeout(func, duration); // duration 이후 func 실행
clearInterval(timerID); // 타이머 멈추기
```

```js
/* 예시 */
// countdown
function countdown() {
  console.log("Counddown:");
  for (let i=5; i>=0; i--) {
    setTimeout(function() {
      console.log(i === 0 ? "GO!" : i);
    }, (5-i)*1000);
  }
}
countdown();

// MiniDaemon
MiniDaemon.prototype.synchronize = function () {
  if (this.PAUSED) { return; }
  clearInterval(this.SESSION);
  this.SESSION = setInterval(MiniDaemon.forceCall, this.rate, this);
};
 
MiniDaemon.prototype.pause = function () {
  clearInterval(this.SESSION);
  this.PAUSED = true;
};
```

