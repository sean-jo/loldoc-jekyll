---
layout: post
title:  "Markdown 사용하기: 마크다운으로 글 작성하기"
date:   2018-06-29 17:00:00 +0900
author: Mookheon
categories: tools
image: "/assets/image/article/markdown.png"
---



마크다운은 "존 그루버" 라는 분에 의해 만들어진 텍스트 기반의 마크업 언어로, 쓰기 쉽고 읽기 쉬운 문서를 편하게 작성할 수 있는 방법입니다.

만약 문서의 제목을 표현하고 싶다면 `# 헤더 타이틀` 과 같이 문장 앞에 `#` 을 하나 추가하는 것 만으로 간단하게 표현됩니다. `# 제목` 과 같이 `#` 하나는 HTML으로 변환되면 `h1` 태그를 표현하게 됩니다.

Markdown은 모바일 환경에서도 사용하기 편리한데, 좁은 모바일폰에서는 위지윅 에디터의 사용이 오히려 불편하기에 마크다운을 이용하면 이러한 불편함을 덜어줄 수 있습니다. 덕분에 Bear를 비롯한 수많은 스마트폰 용 마크다운 글쓰기 도구가 등장했습니다.

마크다운 언어가 개발자 커뮤니티에서 확산되게 된 계기는 GitHub 리포지토리에서 `README.md` 파일을 사용해 프로젝트 문서를 생성하게 되면서 부터입니다. GitHub에서는 기존의 마크다운 문법에서 조금 더 개선된 GFM(Github Flavored Markdown) 이라는 문법을 사용하며, 현재는 GFM 문법이 가장 폭넓게 사용되고 있습니다.



## 마크다운 문법 (GFM)

### 헤딩

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

변환된 모습은 아래와 같습니다.

# Heading 1

## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6





### 텍스트 꾸미기

```markdown
**굵은 글씨**
*이탤릭*, _Italic?_
~~취소문자~~
```

**굵은 글씨**
*이탤릭* , _Italic?_
~~취소문자~~





### 인용문

```markdown
> In the words of Abraham Lincoln:
> Pardon my French
```

> In the words of Abraham Lincoln:
> Pardon my French





### 코드인용 및 코드펜스

~~~markdown
코드인용은 `backtick` 을 사용하여 표현합니다.

```javascript
function hello() {
  console.log("hello");
}
```
~~~

코드인용은 `backtick` 을 사용하여 표현합니다.

```javascript
function hello() {
  console.log("hello");
}
```

백틱 세개를 문장의 위 아래에 입력하면 코드펜스 영역이 되며 지원하는 프로그래밍 언어 이름을 백틱 시작 부분에 입력하면 문법 하이라이팅도 가능합니다.





### 링크

```markdown
인라인 링크는 [google](www.google.com)을 이용합니다.
www.google.com 와 같이 유효한 URL을 입력시, 자동으로 URL을 링크합니다.
```

인라인 링크는 [google](www.google.com)을 이용합니다. 
www.google.com 와 같이 유효한 URL을 입력시, 자동으로 URL을 링크합니다.



### 참조 링크

```markdown
[Google][gg] 링크입니다.

[gg]: https://www.google.com
```

[Google][gg]{:target="_blank"} 링크입니다.

[gg]: https://www.google.com

참조링크를 사용해서 링크 목록을 문서의 하단에서 깔끔하게 관리할 수도 있습니다.





### 이미지 링크

```markdown
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
```

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png) 





### 리스트

```markdown
- 리스트1
- 리스트2
  * 공백 인덴트를 이용해 네스팅
    1. 네스팅1
    2. 네스팅2
- 리스트3
1. 순서있는 리스트1
2. 순서있는 리스트2
```

- 리스트1
- 리스트2
  - 공백 인덴트를 이용해 네스팅
    1. 네스팅1
    2. 네스팅2
- 리스트3

1. 순서있는 리스트1
2. 순서있는 리스트2





### 이모지 사용

이모지는 아래 링크를 참조해서 알아낼 수 있습니다.

>  [Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/){:target="_blank"}

```markdown
:+1:, :a:, :accept:, :baby:, :car:, :kiss:, :kr:
```

👍, 🅰️, 🉑, 👶, 🚗, 💋, 🇰🇷





### 라인 구분선

```markdown
------
```

------





### 표 만들기

```markdown
| 제목1 | 제목2 |
|:---:|---:|
| 내용1 | 내용2 |
| 내용3 | 내용4 |
```

| 제목1 | 제목2 |
| :---: | ----: |
| 내용1 | 내용2 |
| 내용3 | 내용4 |

표는 조금 복잡하지만 마크다운 에디터에 표 작성 기능이 있다면 쉽게 작성할 수 있습니다. 두번째 라인에서 `:` 의 사용에 따라 좌, 우, 가운데 정렬도 가능합니다.





### 이스케이프

```markdown
마크다운 포맷 무시하기 - \*강조\* 취소하기
```

마크다운 포맷 무시하기 - \*강조\* 취소하기





## 마크다운 사용하기

마크다운을 활용할 수 있는 방법은 매우 많습니다. 

- 깃허브, Atom, VS Code 등 개발도구에서의 사용은 기본이고, 

- Bear와 같은 스마트폰용 글쓰기 도구, 

- 워드프레스 플러그인, 

- Typora, StackEditor와 같은 데스크탑 및 웹브라우저 환경 글쓰기 도구 등

수많은 곳에서 활용할 수 있습니다.

> 단, 도구에 따라 GitHub Flavored Markdown 과는 조금씩 다른 문법을 사용할 수도 있습니다.



기본적으로 Markdown 파일의 확장자는 `.md` 를 사용하고 마크다운 문법에 맞춰 문서를 작성 후 해당 확장자로 저장하면, 마크다운을 지원하는 뷰어에서 깔끔하게 문서를 확인할 수 있습니다.


