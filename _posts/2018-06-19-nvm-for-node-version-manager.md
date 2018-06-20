---
layout: post
title:  "NVM으로 쉽게하는 Node.js 버전관리"
date:   2018-06-19 08:00:00 +0900
categories: nodejs
image: "/assets/image/nvm.png"
---



## NVM이란?

NVM(Node Version Manager)은 Node.js의 버전을 관리하기 위한 도구입니다. 요즘은 Node.js 개발툴 뿐 아니라 수많은 개발도구들이 npm을 통해서 배포되고 있습니다. 하지만 개발툴들이 다양해 질수록 경우에 따라서 Node.js의 버전을 달리 사용해야할 필요성도 생겼죠.

이러한 Node.js의 버전관리를 위해서 NVM이라는 도구를 사용합니다. NVM은 루비의 rvm, rbenv나 파이썬의 pyenv와 비슷하게 다양한 버전의 Node.js를 편하게 설치, 삭제하고 전환할 수 있도록 도와줍니다.



## NVM 설치하기
NVM은 맥 혹은 리눅스 환경에서 쉽게 사용할 수 있습니다. 윈도우 환경에서 Node.js의 버전을 관리하기 위해서는 다른 방법을 사용해야 합니다.

[NVM][NVM]{:target="_blank"}은 NVM 리포지토리의 문서에서 찾을 수 있는 설치 스크립트로 설치 할 수 있습니다.

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

이 스크립트는 nvm 리포지토리를 `~/.nvm` 경로로 복사하고, `~/.bash_profile`이나 `~/.zshrc`에 nvm 실행을 위한 스크립트를 추가해 줍니다.

> 맥에서는 Xcode command line tools이 미리 설치되어 있어야 합니다. 만약 맥에 Xcode가 설치되어 있다면 이미 설치되어 있을겁니다.
```shell
xcode-select --install # Xcode Command line tools 설치
```



설치가 잘 되었는지 확인하기 위해서는 아래 명령어를 실행해 봅니다.

```shell
command -v nvm
```

만약 nvm이라는 결과가 출력된다면 설치가 잘 된것입니다.




## NVM을 이용한 Node.js 설치
nvm을 설치했으면 이제 Node.js를 설치해 봐야겠죠. Node.js의 LTS 최신바전을 설치해 보겠습니다.

```shell
nvm install --lts
```

설치가 잘되었는지 확인해 보겠습니다.

```shell
node -v
```

그리고 `nvm ls-remote` 명령어를 통해서 설치할 수 있는 모든 Node.js의 버전을 조회해 볼 수 있습니다.




## Node.js 버전 변경하기
해당 버전의 node를 사용하기 위해서는 `use` 명령어를 사용합니다.

```shell
nvm use --lts
```

여러 버전의 Node.js를 설치했다면 마찬가지로 nvm use를 사용해 버전을 변경할 수 있습니다. 하지만 새로운 쉘을 실행하거나 다시 띄우게 되면 node의 버번이 시스템 버전으로 변경되어 있는데요. 이를 고정하기 위해서 아래와 같이 해줍니다.

```shell
nvm alias default 8.9.4

# 설치되어 있는 가장 최신버전의 node를 디폴트로 사용하기
nvm alias default node
```



## 기타 사용법

```shell
# 현재 사용중인 버전 확인하기
nvm current

# 설치된 node.js 목록 확인하기
nvm ls

# node.js 설치 경로 확인하기
which node

# 필요없는 node 버전 삭제하기
nvm uninstall 8.9.4
```



[NVM]: https://github.com/creationix/nvm

