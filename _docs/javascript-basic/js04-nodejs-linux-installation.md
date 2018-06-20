---
title: "Node.js 설치하기 - Ubuntu LInux"
course: "javascript-basic"
date:   2018-06-20 18:10:00 +0900
---



## Node.js 설치하기 - Ubuntu

리눅스 배포판은 우분투를 기준으로 설명할 거에요. 사실, 리눅스 쓰시는 분들은 이런 구구절절한 설명들 필요 없죠.

Node.js에 대해 조금만 더 알아보죠. Node.js는 크롬의 JavaScript 엔진인 V8엔진에 기반하고 있어요. 구글이 만든 V8엔진을 이용해 자바스크립트를 웹브라우저가 아닌 다른 환경에서 실행되도록 만들었고, 자바스크립트가 폭발적으로 성장하는데 핵심적인 역할을 했죠.

Node.js는 JavaScript 런타임 자체를 의미하기도 하고, Node.js만의 API(Application Programming Interface)를 의미하기도 해요. Python이나 Ruby와 같이 서버측 웹애플리케이션 개발에 폭넓게 사용되고, 클라이언트 측 웹 개발에도 필수적인 존재가 되었어요.

더 자세한 이야기는 Node.js에 대해 본격적으로 알아볼 때 하기로 하고, 우선은 설치부터 해요.



### nvm을 이용해서 우분투에 Node.js 설치하기

맥이나 리눅스에서 Node.js를 설치할 때는 nvm을 이용하는 것이 좋아요. NVM은 Node Version Manager의 줄임말로, 말 그대로 Node.js의 버전관리를 쉽게 할 수 있도록 도와주는 툴이에요.

상세한 설치 방법은 아래 링크를 참조해 주세요.

> [NVM으로 쉽게하는 Node.js 버전관리][nvm]



### apt-get

nvm을 사용할 수 있는 환경이라면 nvm을 사용하는 것을 추천해요. apt를 이용하려면 아래와 같이 해요.

2018년 6월 현재는 8.11.3 LTS 버전이 가장 최신 LTS 버전이네요. LTS버전은 Long Term Support 버전이라는 말로, 유지보수가 지속적으로 되는 안정버전이라는 뜻이에요.

apt를 이용해서 설치하기 전에 우선, LTS 버전의 Node.js인 8.X 버전대의 바이너리 배포판 저장소를 추가해 줘야해요.

```shell
# 저장소 추가
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

# apt 업데이트하기
sudo apt-get update

# nodejs 및 빌드도구 설치하기
sudo apt-get install -y nodejs build-essential
```



### Node.js 설치 확인하기

설치가 완료되었으면 확인해 봐야겠죠. 

터미널 창에 `node -v` 라고 입력해 봅시다.

```shell
node -v
v8.9.4
```

저처럼 설치한 Node.js의 버전이 표시된다면 성공적으로 설치가 된거에요.

> 저는 예전에 설치해 놓아서 버전이 조금 오래되었네요. v8.11.3 이 표시되면 제대로 설치된거겠죠.



[nvm]: /posts/nodejs/nvm

