---
layout: post
title:  "Jekyll HowTo"
date:   2018-01-01 14:07:08 +0900
author: Mookheon
categories: ruby
image: "/assets/image/HTML5.png"
---

`_posts` directory에 `YYYY-MM-DD-name-of-post.ext` 의 양식으로 글 작성.

code snippets:
```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```
이미지 링크

![html5]({{ "/assets/image/HTML5.png" | absolute_url }})

![nodejs-install1](img/nodejs-install1.png)

- 페이지 링크
  - [nvm](/_posts/2018-06-19-nvm-for-node-version-manager.md)
  - [Link to a post]({% link _posts/2018-06-19-nvm-for-node-version-manager.md %})
  - [Name of Link]({{ site.baseurl }}{% post_url 2018-06-19-nvm-for-node-version-manager %})
- 외부 링크 
  - [Jekyll docs][jekyll-docs]{:target="_blank"}



[jekyll-docs]: https://jekyllrb.com/docs/home
