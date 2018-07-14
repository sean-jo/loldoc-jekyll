---
layout: post
title:  "Chocolatey로 윈도우에서도 패키지 관리를 해보자"
date:   2018-06-29 10:00:00 +0900
author: Mookheon
categories: tools
image:  "/assets/image/post/choco01.png"
---



그동안 Windows 환경에서는 Mac의 [Homebrew][homebrew] 나 Linux의 apt 와 같은 패키지 매니저가 눈에 띄지 않았습니다. [Chocolatey][choco]{:target="_blank"} 는 NuGet 기반의 윈도우용 패키지 관리자로 `choco` 명령어를 사용해서 손쉽게 윈도우 운영체제에서 사용되는 애플리케이션을 관리할 수 있습니다. Chcolatey는 Microsoft 내부에서도 사용되며, 최근의 MS 정책과 맞물려 생태계도 점차 확대되고 있으며 안정적으로 사용할 수 있습니다.



## Chocolatey 설치하기

Chocolatey를 원할하게 사용하기 위해서는 PowerShell을 사용하는 것이 좋습니다. 설치를 위해서는 PowerShell을 관리자 모드로 실행시킨 뒤 아래 명령을 입력합니다.

```powershell
# Chocolatey 설치하기
Set-ExecutionPolicy Bypass -Scope Process -Force; \
iex ((New-Object System.Net.WebClient).DownloadString( 'https://chocolatey.org/install.ps1' ))

# 설치 확인하기
choco -?
```

> 설치 명령어는 조금씩 변경될 수 있습니다. Chocolatey 공식 홈페이지에서 확인해 보는 것이 좋습니다.

설치를 확인해봤을 때 도움말 페이지가 보인다면 설치가 잘 된거겠죠.

![Chocolatey](/assets/image/post/choco01.png)

설치 확인 명령어에서도 보듯이 Chocolatey는 `choco` 명령어를 사용해 패키지를 관리하게 됩니다.



## 패키지 찾아보기

Chocolatey에서 사용할 수 있는 패키지는 [https://chocolatey.org/packages](https://chocolatey.org/packages){:target="_blank"} 페이지에서 확인해 볼 수 있습니다. 혹은 `choco` 명령어를 이용해서도 쉽게 찾아볼 수 있습니다. 여기서는 `yarn` 을 검색해 보겠습니다.

```shell
# 필요한 패키지 검색하기
$ choco search yarn

Chocolatey v0.10.11
yarn 1.7.0 [Approved] Downloads cached for licensed users
hadoop 3.1.0 [Approved] Downloads cached for licensed users
packageinstaller 2.0.89 [Approved] Downloads cached for licensed users
pode 0.13.0 [Approved]
4 packages found.
```



`choco info` 명령은 패키지에 대한 정보를 확인할 수 있습니다.

```shell
# 패키지 정보 표시
choco info yarn
```



## 패키지 관리하기

Chocolatey를 이용해 패키지를 설치하고 제거하는 방법은 아주 쉽습니다.

```shell
# 업그레이드가 필요한 패키지의 목록보기
choco outdated

# 패키지 설치하기
choco install notepadplusplus

# 패키지 업그레이드하기
choco upgrade nodejs

# 패키지 제거하기
choco uninstall flashplayer
```

> 설치시 패키지 정보를 확인하여 trusted package 여부를 확인하고 trusted pacakage만 설치하는 것이 좋습니다. 



Node.js 의 경우 LTS 버전과 같이 최신 버전이 아닌 버전을 설치하고 싶을 경우에는 설치시 버전을 명시해 줍니다.

```shell
choco install nodejs --version 8.11.2

# Node.js의 경우 LTS 패키지가 존재합니다.
choco install nodejs-lts
```



## 패키지 목록 확인 및 정보보기

`choco list` 명령을 이용해 패키지의 목록을 확인할 수 있습니다. 로컬 컴퓨터에 설치된 패키지의 목록만 보고 싶다면 `--local-only` 옵션을 사용합니다.

```shell
# 로컬 설치된 패키기 목록
choco list --local-only
```



## Chocolatey 관리하기

Chocolatey 자체의 버전 업그레이드가 필요할 경우 아래와 같이 입력해 줍니다.

```shell
# Chocolatey 업그레이드 하기
choco upgrade chocolatey
```



[homebrew]: https://code.apptilus.com/posts/tools/homebrew-for-mac
[choco]: https://chocolatey.org/

