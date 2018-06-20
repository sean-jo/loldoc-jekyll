---
title: "JavaScript 작성하고 실행하기"
course: "javascript-basic"
date:   2018-06-19 17:00:00 +0900
---



## JavaScript 작성하고 실행하기

우리는 Node.js를 설치 했으니 Node.js를 통해 JavaScript 파일을 작성하고 실행하는 법을 알아봅시다.



### REPL 터미널

우선 작성부터 해보죠. CLI 창에 `node` 라고 입력하세요.

그러면 자바스크립트를 작성하고 바로 결과를 확인해 볼수 있도록 해주는 REPL 이라는 것이 실행되요. REPL은 Read Eval Print Loop의 약자로, 읽고 평가하고 출력하고 계속한다는 뜻이네요. 여기에 `1 + 2`를 입력해 봅시다.

```sh
node
> 1 + 2
3
```

REPL은 자바스크립트 코드를 테스트 해보거나 에러를 잡을 때 유용하게 사용할 수 있어요.

Node REPL 실행환경을 종료하기 위해서는 `Ctrl + C`를 두번 누르거나, `.exit` 라고 입력해줍니다. 몇가지 REPL 사용법이 더 있지만 차차 알아보도록 해요. 



### 텍스트 에디터

REPL은 간단하게 JavaScript를 실행해 볼 수 있지만 코드가 조금만 복잡해져도 사용하기 쉽지가 않아요. 결국 코딩을 도와주는 에디터를 사용하게 되는데요. 윈도우의 메모장 같은 프로그램을 이용해서 작성할 수도 있지만 조금 더 편리하게 사용할 수 있는 텍스트 에디터를 사용하는 것이 좋아요.

최근에는 Atom([https://atom.io/][atom]{:target="_blank"}), Brackets([http://brackets.io/][brackets]{:target="_blank"}) 이나 Visual Studio Code([https://code.visualstudio.com/][vscode]{:target="_blank"}) 같은 도구를 많이 사용하고, 이미 익숙한 도구가 있다면 그걸 사용해도 되겠죠.

Atom이나 VS Code의 기본적인 사용 방법은 설치해서 하나하나 사용해 보면 쉽게 익힐 수 있어요. 만약 사용하는 에디터가 없다면 VS Code를 한번 사용해 보세요.



### Hello World

텍스트 에디터를 이용해 JavaScript 프로그램을 작성하고 Node.js를 이용해 실행시켜 봅시다. 

우선 프로젝트를 진행할 디렉토리를 하나 만들어요. 저는 `Workspace`라는 이름의 폴더를 만들었어요. 그리고 그곳에서 또 `javascript-basic`이라는 폴더를 만들구요. 텍스트 에디터를 열어서 해당 폴더를 열어주세요. 그러면 이제 해당 폴더에서 자바스크립트 파일을 만들고 실행해 볼 준비가 되었어요. 텍스트에디터에 다음과 같이 입력하고 파일명은 `helloworld.js`로 작성해서 저장하세요.

```js
console.log("Hello World");
```

그리고는 우리의 CLI 창을 열고, 방금 프로그램을 작성했던 폴더를 찾아가세요.

만약, D드라이브 아래에 Workspace 아래에 javascript-basic이라는 폴더를 만들었다면,

```sh
d:
cd Workspace
cd javascript-basic
```

위와 같이 입력하면 원하는 폴더를 찾아갈 수 있어요. d:은 드라이브를 d드라이브로 바꾸는 명령어고, cd(Change Directory)는 디렉토리를 변경하는 명령어에요. 더 자세한 방법은 명령어 수업을 참고하세요.

여기까지 왔다면 이제 드디어 JavaScript를 실행해 볼 차례에요. javascript-basic 폴더에서 아래 처럼 입력하세요.

```sh
node helloworld.js
```

즉, Node.js를 이용해서 helloworld.js 파일을 실행시키는 거에요. 만약 CLI창에 Hello World라는 글자가 찍힌다면 성공한거에요!

우리가 방금 작성한 프로그램은 "Hello World"라는 문자열을 콜솔에 출력해주는 프로그램이에요. 콘솔은 여기서는 우리의 CLI 화면을 뜻해요. 간단하지만 중요한 프로그램이죠. 앞으로 수만번은 더 console.log() 명령을 사용할 거에요.

방금 우리는 자바스크립트 프로그램을 작성하고 실행까지 해봤어요. 드디어 본격적으로 자바스크립트 문법을 공부할 준비가 되었네요. 이제 시작해 봅시다.

[atom]: https://atom.io/
[brackets]: http://brackets.io/
[vscode]: https://code.visualstudio.com/