













## RegExp

```javascript
var namePattern = /Sean/;
var myName = "Sean Jo";

// test는 불리언을 리턴한다.
namePattern.test(myName);   // true 

// exec는 검색된 문자열의 시작 부분을 담는 배열을 리턴한다.
namePattern.exec(myName);   // ["Sean"]

// match는 검색된 문자열 부분의 배열을 리턴한다.
myName.match(namePattern);  // ["Sean"]
```

