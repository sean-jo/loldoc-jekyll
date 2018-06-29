---
layout: post
title:  "윈도우에서 WSL을 이용해 Linux 사용하기"
date:   2018-06-22 12:00:00 +0900
author: Mookheon
categories: tools
image: "/assets/image/article/windows.png"
---



WSL(Windows Subsystem for Linux)은 한글로는 리눅스용 윈도우 하위 시스템 정도로 해석되며, 리눅스의 네이티브 바이너리를 윈도우 환경에서 돌아가도록 만들어낸 시스템입니다. 즉, 윈도우 환경 위에 가상머신없이 리눅스 배포판 버전을 설치할 수 있게 해줍니다.

개발자들은 예나 지금이나 어쩔수 없이 윈도우 환경에 리눅스를 설치해서 상당 수의 개발업무를 진행합니다. 과거에는 주로 파티션을 나눠서 윈도우와 리눅스 멀티부팅을 이용하거나 VirtualBox 등의 가상머신 위에 리눅스를 설치해서 사용했었죠. 물론 지금도 많이 사용되는 방식입니다.

최근에는 Docker for Windows를 이용해 Windows 내에서 Linux 개발 환경을 구축할 수 있습니다. 하지만 Docker for Windows는  Hyper-v를 사용하므로 Windows Pro 이상 버전이 필요하죠. Windows Home 버전에서는 이용할 수 없습니다.

WSL은 가상머신이나 멀티부팅을 사용하지 않고 윈도우 내에 리눅스 콘솔 환경을 사용할 수 있는 나쁘지 않은 방법입니다.



## WSL (리눅스용 윈도우즈 서브시스템)

처음 WSL은 Windows내에서 간단한 Bash 명령어를 사용할 수 있도록 하기 위해 개발 되었습니다. 하지만 지금은 많은 기능 개선으로 어지간한 리눅스 CLI 기반 애플리케이션은 돌릴 수 있게 되었습니다.

처음에는 Ubuntu 배포판만 지원했었으나, 지금은 윈도우 스토어를 통해 SUSE, Debian, Kali 등 다른 배포판을 다운로드 받아 사용할 수있게 되었습니다. 정말 대단하죠. :+1:



### 설치하기

우선 설치를 위해서는 64비트 PC, Windows 10 1607 이상 버전이 필요합니다. 꾸준히 윈도우즈 업데이트를 해왔다면 버전 문제는 없을겁니다.

설치를 위해 `Win + Q` 를 눌러 윈도우 검색창에서`Windows 기능 켜기/끄기` 를 찾아 실행 시킵니다.

![windows 기능 켜기끄기](/assets/image/post/wsl01.png)

Linux용 Windows 하위 시스템을 활성화 시키고 PC 재부팅이 되면 설치가 시작됩니다. 

Microsoft Store를 오픈하고 WSL이라고 입력하면 설치할 수있는 리눅스 배포판을 확인할 수 있습니다. 원하는 배포판을 다운로드 하고, 다운로드 완료 후 실행 시키면 콘솔 창이 열리면서 리눅스 배포판 설치가 진행됩니다.

설치과정 중간에 WSL용 아이디와 비밀번호 설정까지 마치면 설치가 완료됩니다.

설치가 끝나면 바로 WSL 환경에 접속됩니다. 그러면 아래 명령어를 입력해서 설치한 Linux distro를 확인해 보겠습니다.

```bash
lsb_release -a

# 아래와 비슷한 결과가 나오면 됩니다.
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 16.04.4 LTS
Release:        16.04
Codename:       xenial
```



### WSL 사용환경 및 유의사항

WSL은 주로 Windows에 없는 리눅스 명령어 (sed, grep 등)를 사용하거나, 혹은 그동안 사용하기 힘들었던 리눅스 기반의 개발환경을 구성하기에 좋습니다.

저는 그동안 맥으로 작업해왔던 Ruby on Rails 개발환경을 WSL로 구성해보았는데 별 무리 없이 클라우드 환경(Heroku)에 서버 배포까지 WSL 내부에서 가능했습니다.

WSL을 원활하게 사용하기 위해서는 몇가지 주의해야 할 점이 있습니다.

- WSL은 리눅스 콘솔 환경만 지원합니다. X Window GUI환경은 사용할 수 없습니다.
- WSL을 이용해서 윈도우 파일을 마운트하고 조작할 수 있습니다. 하지만 반대로 안정성의 문제로 윈도우 탐색기 등 윈도우 환경에서 WSL 내부 파일을 조작하는 것은 금지됩니다.
- 윈도우즈에서 리눅스 내부의 파일을 생성/변경하면 리눅스 환경이 손상되어 배포판을 제거하고 다시 설치해야 할 수 있습니다.
- 리눅스 명령어 기반 도구(Ruby, Rails, Git, apt-get, vim 등)는 WSL에 설치하고, 텍스트 에디터 등의 GUI 도구는 윈도우에 설치된 것을 사용하는 방식으로 개발 방식을 구성할 수 있습니다.
- 이때 프로젝트 폴더 등은 윈도우에 만들고, WSL에서 마운트하여 접근할 수 있습니다.
- 심볼릭 링크를 사용하면 WSL에서 편하게 윈도우 폴더에 접근할 수 있습니다.



## WSL 사용하기

### 실행 및 종료

wsl을 종료시키기 위해서는 shell에서 `exit`를 입력합니다. 

wsl 실행은 윈도우 앱 목록에서 아이콘을 클릭하면 콘솔 환경이 실행되며 실행시킬 수 있습니다. 혹은 PowerShell 등의 환경에서 `bash` 명령을 입력하면 WSL 환경으로 진입하게 됩니다.



### 윈도우 파일 시스템에 접근하기

WSL 내에서 윈도우 파일시스템에 접근하기 위해서는 다음과 같이 필요한 폴더를 마운트 합니다.

```bash
# D드라이브 하위의 workspace 폴더에 접근하기
cd /mnt/d/workspace
```



매번 윈도우 내부의 작업 디렉토리로 이동하기 위해 위와 같이 명령어를 입력하는 것은 귀찮습니다. 이때, 심볼릭 링크를 이용하면 마치 WSL 내부의 디렉토리를 이용하듯 손쉽게 윈도우 폴더에 접근할 수 있게 됩니다.

```bash
# symbolic link 사용
ln -s "/mnt/d/workspace" /home/<my-wsl-username>/workspace
```

위와 같이 심볼릭 링크를 구성하면 WSL에서 `cd workspace` 명령만으로 간단하게 윈도우의 Workspace 폴더에 접근할 수 있게 됩니다.

이제 리눅스 명령은 wsl 내부에서, 파일 에디팅은 윈도우 앱으로 편하게 작업할 수 있습니다.



## 참조 링크

아래 링크는 각각 Microsoft의 WSL 관련 문서 및 블로그로 연결됩니다.

- Docs [https://docs.microsoft.com/en-us/windows/wsl/about](https://docs.microsoft.com/en-us/windows/wsl/about){:target="_blank"}
- Blog [https://blogs.msdn.microsoft.com/wsl/](https://docs.microsoft.com/en-us/windows/wsl/about){:target="_blank"}



