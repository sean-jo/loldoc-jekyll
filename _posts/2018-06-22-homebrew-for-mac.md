---
layout: post
title:  "Homebrew를 사용해서 Mac 패키지를 관리하기"
date:   2018-06-22 11:00:00 +0900
author: Mookheon
categories: tools
image: "/assets/image/article/apple.png"
---



홈브루는 루비 기반으로 만들어진 Mac OS X 용 패키지 관리자 입니다. 패키지 관리자는 맥에 설치되는 애플리케이션의 설치, 삭제, 업그레이드, 의존성 관리 등을 도와주는 도구로, 개발에 필요한 프로그램을 손쉽게 관리할 수 있게 해줍니다. 맥 개발자에게는 사실상 필수인 도구라고 할 수 있습니다.





## Homebrew 설치하기

Homebrew는 Terminal 환경에서 곧바로 설치를 시작할 수 있습니다.

만약 Xcode가 설치되어 있지 않다면, Xcode를 설치하거나 Xcode command line tools가 미리 설치되어 있어야 합니다.

```shell
# Xcode Command line tools 설치
xcode-select --install
```



[Homebrew][homebrew]{:target="_blank"}의 웹사이트를 확인해보면 설치 방법이 간단하게 나와 있습니다. 실제로 설치는 아래의 한줄만 Terminal에서 실행하면 끝납니다.

```bash
# Homebrew 설치하기
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# 설치확인
brew -v
```

Homebrew는 설치되는 모든 패키지를 `/usr/local/` 디렉토리에 심볼릭 링크해서 관리하게 됩니다.





## Homebrew 사용하기

Homebrew를 설치하게되면 터미널에서 brew 명령어를 사용해서 패키지를 관리하게 됩니다. 



### 패키지 검색하기

Homebrew에서 패키지는 formula라고 부르며, Formulae라고 부느는 패키지 브라우저를 통해서 검색할 수 있습니다. 

[https://formulae.brew.sh/analytics/](https://formulae.brew.sh/analytics/){:target="_blank"} 해당 주소로 접속하면 Homebrew를 통해 설치된 패키지의 목록과 통계를 볼 수 있습니다. 그 중, Install On Request Events 를 보면 사용자들이 어떠한 패키지를 가장 많이 설치하는지 알수 있습니다.

물론 `brew search <formula>` 명령어를 이용해서 패키지를 검색할 수도 있습니다.

```shell
# 패키지 검색하기 (rbenv, heroku)
brew search rbenv
brew search heroku
```



### 패키지 설치하기

패키지 설치는 `brew install <formula>` 명령을 이용합니다.

```shell
brew install rbenv
```



### 패키지 업그레이드하기

`brew outdated` 명령어를 통해 업그레이드가 필요한 패키지의 목록을 조회할 수 있습니다. 만약 패키지를 최신 버전으로 업그레이드 하고싶다면 `brew upgrade <formula>` 명령을 이용합니다.

```shell
# 버전업된 패키지 확인하기
brew outdated

# 패키지 업그레이드
brew upgrade rbenv

# 모든 패키지 업그레이드하기
brew upgrade
```



### 패키지 삭제하기

Homebrew는 패키지를 업그레이드 하더라도 예전버전의 패키지를 삭제하지 않기 때문에, 패키지를 설치하고 업그레이드 하다보면 오래된 버전의 패키지가 그대로 남아 있게 됩니다. 만약 이전 버전의 패키지가 필요없다면 `brew cleanup <formula>` 명령어를 이용해 최신버전의 패키지를 제외한 나머지를 모두 삭제할 수 있습니다.

```shell
# 최신버전의 rbenv 패키지만 남겨두기
brew cleanup rbenv
```



만약 패키지 자체를 삭제하고 싶다면 아래와 같이 합니다. `brew uninstall <formula>`

```shell
brew uninstall rbenv
```



### 패키지 관리하기

Mac에 설치된 패키지의 목록을 보기 위해서는 `brew list` 명령을 이용하며, 패키지의 정보를 확인 할 때는 `brew info <formula>` 명령을 사용합니다.

```shell
# 설치한 패키지 목록보기
brew list

# 패키지의 정보 보기
brew info rbenv
```



홈브루를 사용하다가 시스템 에러가 발생할 경우 doctor 명령으로 조회해 볼 수 있습니다.

```shell
# 시스템 오류 점검하기
brew doctor
```



### Homebrew 업데이트하기

홈브루 자체의 버전이 변경되었을 경우에는 brew update 명령을 통해서 Homebrew 자체를 최신버전으로 업데이트 할 수 있습니다.

```shell
brew update
```



### Homebrew 삭제하기

Homebrew가 필요없어 졌다면 아래 스크립트를 통해 Homebrew를 삭제할 수 있습니다.

```shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```



[homebrew]: https://brew.sh/

