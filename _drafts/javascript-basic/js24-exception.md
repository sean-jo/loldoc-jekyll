---
title: ""
---



예외



> 자바스크립트는 런타임에서 에러가 발생할 때마다 예외를 발생시킴. 프로그램에서 throw 문을 사용하여 예외를 발생시킬 수 있다.





## 예외처리

### try..catch..finally

> 예외가 발생하면 자스 인터프리터는 정상적인 프로그램 실행을 즉시 중단하고 가장 가까운 예외처리기로 처리를 넘김. 예외처리기는 catch 절을 사용해 작성

```javascript
try {
  // 문제가 발생할 여지가 있는 코드
  // 예외 발생 시 catch 블록으로 코드의 실행이 옮겨진다
} catch (error) {
  // 문제가 발생할 경우 실행될 코드
} finally {
  // 문제 여부와 상관없이 항상 실행될 코드
}

// 파일 불러오기 P-code
function openWordFile(filePath) {
  var wordWindow = openWordWindow();

  try {
    var fileContents = loadFile(filePath);
    displayFile(wordWindow, fileContents);
  }
  catch (error) {
    displayMessage('Sorry, the file ' + filePath + ' could not be loaded');
    displayMessage('due to the following error: ' + error);
    
    var errorMessage = error.name + " " + error.message;
    console.log(errorMessage);
  }
};
```



### throw

해석기가 오류를 생성하기 전에, 직접 오류를 작성할 수도 있다.

```javascript
throw new Error('메세지');
```

이 구문은 Error 객체를 생성한다.

