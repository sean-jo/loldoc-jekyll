---
layout: post
title:  "iTerm2와 zsh로 깔끔한 Mac 터미널 환경 만들기"
date:   2018-06-29 12:00:00 +0900
author: Mookheon
categories: tools
image:  "/assets/image/post/iterm2.png"
---



맥에서 기본 터미널을 대체하는 iTerm2 와 zsh를 이용해서 깔끔한 (있어보이는) 맥 터미널 환경을 만들어 봅시다. 아래는 iTerm2의 Snazzy 테마와 zsh를 위한 dracula 테마를 적용한 모습으로, Powerline Font와 같은 폰트를 추가로 설치하지 않고도 깔끔하고 심플해서 추천하는 조합입니다.

![iterm2 website](/assets/image/post/iterm2.png)



## 설치하기

### Homebrew

우선 기본적으로 Homebrew가 설치되어 있어야합니다. 맥에서 기본 터미널을 열고 아래와 같이 입력해서 Homebrew를 설치해 줍니다.

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Homebrew와 관련된 자세한 설명은 아래 링크에서 확인할 수 있습니다.

>  [Homebrew를 사용해서 Mac 패키지를 관리하기][homebrew]



### iTerm2 설치

[iTerm2](https://www.iterm2.com/){:target="_blank"} 는 맥의 기본 Terminal을 대체할 수 있는 터미널 에뮬레이터입니다. 화면분할 등 여러가지 기능, 테마 변경 등 다양한 기능을 가지고 있습니다.

간단하게 홈페이지에서 다운로드 받아 설치하면 됩니다.

![iterm2 website](/assets/image/post/iterm2-01.png)



### zsh 설치

zsh는 bash를 대신하는 shell 환경입니다. oh-my-zsh까지 설치하면 CLI 사용이 아주 편리해 집니다. zsh는 Homebrew를 이용해 설치해 줍니다.

```shell
# zsh 설치하기
brew install zsh

# zsh 설치경로 확인하기
which zsh

# 기본 shell 변경하기
chsh -s $(which zsh)
```



만약 zsh 접근이 제대로 안된다면 기본 터미널 설정을 수정해 줍니다.

> 터미널 환경설정 `일반` -> `셀 열기`를 "기본 로글인 셀"에서 "명령어(절대경로)"로 바꾸고 `/usr/local/bin/zsh` (zsh 설치경로) 를 입력합니다.
>
> 혹은,
>
> `/etc/shells` 파일에 `/usr/local/bin/zsh` 를 추가합니다.



### oh-my-zsh 설치

zsh를 더 편리하게 사용할 수 있게 도와주는 프레임워크로, 플러그인과 테마를 편리하게 사용하기 위해서 필요합니다.

```shell
# wget curl 설치
brew install curl

# oh-my-zsh 설치
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```



## iterm2 테마 꾸미기

iTerm2와 zsh의 테마를 변경해 봅시다.

1. 우선 [https://github.com/mbadolato/iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes){:target="_blank"} 에 접속합니다.
2. 여기서 원하는 iTerm2 테마를 고른 후 다운로드합니다. 저는 Snazzy를 선택했습니다.
3. *iTerm2 > Preferences > Profiles > Colors Tab* 에서 우측 하단 Color Presets을 클릭합니다.
4. `Import` 를 클릭하고 다운로드 받은 테마를 선택해 줍니다.
5. iTerm2를 재실행하면 테마가 적용되어 있습니다.



## zsh 테마 꾸미기

zsh 테마는 `.zshrc` 파일을 수정해서 변경할 수 있습니다.

1. [https://github.com/robbyrussell/oh-my-zsh/wiki/themes](https://github.com/robbyrussell/oh-my-zsh/wiki/themes){:target="_blank"} 에서 원하는 테마를 찾아봅니다. 
2. 저는 마땅한 테마가 보이지 않아서, 개인적으로 선호하는 dracula 테마를 선택했습니다. [https://draculatheme.com/zsh/](https://draculatheme.com/zsh/){:target="_blank"}
3. 테마 파일을 다운로드 받고 압축을 풀고, `oh-my-zsh/themes/dracula.zsh-theme` 의 경로로 테마 파일이 설정되도록 파일을 이동합니다.
4. `vim`이나 VS Code 등 사용하는 편집기로 `~/.zshrc` 파일을 열어줍니다.
5. `ZSH_THEME` 설정을 찾습니다. 여기서 원하는 테마로 변경해줍니다.

```sh
ZSH_THEME="dracula"
```





## 참고 자료

- [https://nesoy.github.io/articles/2018-01/Mac-Terminal](https://nesoy.github.io/articles/2018-01/Mac-Terminal){:target="_blank"}
- [https://subicura.com/2017/11/22/mac-os-development-environment-setup.html](https://subicura.com/2017/11/22/mac-os-development-environment-setup.html){:target="_blank"}
- [https://beomi.github.io/2017/07/07/Beautify-ZSH/](https://beomi.github.io/2017/07/07/Beautify-ZSH/){:target="_blank"}



[homebrew]: /posts/tools/homebrew-for-mac

