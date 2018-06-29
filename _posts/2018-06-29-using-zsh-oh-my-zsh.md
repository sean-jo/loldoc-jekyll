---
layout: post
title:  "맥과 리눅스에서 zsh와 oh-my-zsh 활용하기"
date:   2018-06-29 15:00:00 +0900
author: Mookheon
categories: tools
image:  "/assets/image/post/zsh.png"
---



Zsh는 인터렉티브한 Shell 환경을 위한 도구로 bash 쉘의 기능을 포함하여 편리한 기능이 여러가지 추가되어 있는 Shell 환경입니다.

oh-my-zsh는 zsh 설정 관리를 위한 프레임워크로 rails, git, OSX, hub, capistrano, brew, ant, php, python 등을 위한 수많은 플러그인과 테마를 지원하고 있어서 zsh를 편리하게 사용할 수 있도록 도와줍니다.

oh-my-zsh의 깃허브 설명에 따르면, 카페에서 oh-my-zsh를 만지고 있으면 간지나기 때문에 사용할만 하다고 하네요. :coffee:



## macOS에 zsh 및 oh-my-zsh 설치하기

> Oh My Zsh 는 기본적으로 맥과 리눅스에서 동작합니다. 윈도우 환경에서는 [WSL][wsl] 등을 사용하여 zsh를 설치할 수 있습니다.



zsh 설치하기

```shell
# zsh 설치
brew install zsh

# 설치경로 확인
which zsh
#=> /usr/bin/zsh

# 기본 sh 변경
chsh -s $(which zsh)
```



oh-my-zsh 설치

```shell
# git wget curl 설치 확인

# oh-my-zsh 설치
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```



자세한 macOS 터미널 환경 설정은 아래 포스팅을 참조해 주세요.

> [iTerm2와 zsh로 깔끔한 Mac 터미널 환경 만들기](/posts/tools/mac-cli-with-iterm2-zsh)



## Ubuntu에 zsh 및 oh-my-zsh 설치하기

zsh 설치하기

```shell
# zsh 설치
sudo apt-get install zsh

# 설치경로 확인
which zsh
#=> /usr/bin/zsh

# 기본 sh 변경
chsh -s $(which zsh)
```



oh-my-zsh 설치

```shell
# git wget curl 설치 확인

# oh-my-zsh 설치
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```



## zsh 사용하기

![zsh](/assets/image/post/iterm2.png)

기본적으로 탭을 이용해서 여러가지 자동완성 기능을 사용할 수 있습니다. shell에 `cd a` 정도만 입력하고 탭을 누르면 바로 자동완성이 되거나 목록을 보여줍니다. 디렉토리가 여러개인 경우 계속 탭을 입력해서 디렉토리를 네비게이션 할 수 있습니다.

```shell
cd a

cd app/
```



Git 에서도 사용할 수 있습니다. `git c` 까지만 입력하고 탭을 누르면 아래와 같은 결과를 볼 수 있습니다.

![zsh](/assets/image/post/zsh.png)



## 플러그인 사용하기

Oh My Zsh에서 플러그인은 git, bundler, node, yarn, rbenv 등 수많은 명령어들의 자동완성과 alias를 지원합니다. Plugin을 활성화 하기 위해서는 `.zshrc` 파일을 수정해 줍니다.

```sh
# ~/.zshrc
plugins=(rails git ruby)
```

각 플러그인들의 사용법은 Oh My Zsh의 위키에 잘 정리되어 있으니 여기서 참조하면 됩니다.

> [Oh My Zsh 위키](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins){:target="_blank"}





## 테마 사용하기

테마는 zsh의 쉘 환경을 보기좋게 꾸며줍니다. 수많은 테마가 준비되어 있고, 간단하게 `.zshrc` 파일을 수정하는 것만으로 테마를 적용할 수 있습니다. 혹은 웹에서 원하는 테마를 찾아서 추가해 줄 수도 있습니다.

oh-my-zsh를 처음 설치하면 기본적으로 oh-my-zsh의 개발자의 이름인 `robbyrussell` 테마가 설치되어 있습니다.

```shell
ZSH_THEME="robbyrussell"
```



테마를 변경하고 싶다면 간단하게 원하는 테마명으로 변경하면 됩니다.

```shell
ZSH_THEME="random"  
# random은 터미널을 실행할 때마다 랜덤하게 테마가 변경됩니다.
```



저는 개인적으로 선호하는 테마이고, 추가 폰트를 설치하지 않아도 깔끔하게 보기 좋은 [dracula 테마](https://draculatheme.com/zsh/){:target="_blank"} 를 설정해서 사용중 입니다. 여기에 iTerm2의 Snazzy 컬러스킴을 입히니 깔끔한 CLI 환경이 완성되어 만족중입니다 :smile_cat:



## 참고

[https://github.com/robbyrussell/oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh){:target="_blank"}
[https://nolboo.kim/blog/2015/08/21/oh-my-zsh/](https://nolboo.kim/blog/2015/08/21/oh-my-zsh/){:target="_blank"}





[wsl]: /posts/tools/windows-subsystem-linux

