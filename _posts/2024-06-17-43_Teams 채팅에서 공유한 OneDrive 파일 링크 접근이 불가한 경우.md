---
layout: post
title: "[OneDrive] Teams 채팅에서 공유한 OneDrive 파일 링크 접근이 불가한 경우"
author: sion
categories: [ Administration, Teams, OneDrive ]
description: "43"
image: assets/images/thumbnail/sharepoint.png
---

특정 사용자와 Teams 채팅을 하는 도중, 파일 공유를 위해 OneDrive 내 파일 링크를 공유했으나  
권한을 부여하였음에도 불구하고 접근이 되지 않는 경우가 있습니다.  

이 경우 조치 가능한 방법에 대해 포스팅해보도록 하겠습니다.


### 액세스가 제한된 사용자 권한 잠금 모드

<img src="{{site.baseurl}}/assets/images/43/1.PNG" title="OneDrive 기능 비활성화1">  

해당 사용자 OneDrive 사이트에 접속한 후, [설정] > [OneDrive 설정]을 클릭합니다.  

<img src="{{site.baseurl}}/assets/images/43/2.PNG" title="OneDrive 기능 비활성화2">  

[기타 설정] > [사이트 모음 기능] 을 선택합니다.  

<img src="{{site.baseurl}}/assets/images/43/3.PNG" title="OneDrive 기능 비활성화3">  

"액세스가 제한된 사용자 권한 잠금 모드" 활성화 상태를 확인하고, 활성화 되어있을 경우 비활성화 합니다.  


### 사이트 모음에서 사용자 삭제

사용자의 OneDrive 사이트에 접속한 뒤, URL의 마지막에 아래 경로를 덧붙입니다.  

```
/_layouts/15/people.aspx?MembershipGroupId=0
```

예를 들어, admin@allways365.onmicrosoft.com 사용자의 경우, 아래 경로로 접속합니다.  
- https://allways365-my.sharepoint.com/personal/admin_allways365_onmicrosoft_com/_layouts/15/people.aspx?MembershipGroupId=0

<img src="{{site.baseurl}}/assets/images/43/4.PNG" title="OneDrive 사이트 모음 삭제1">  

상기 사진과 같이, 모든 사용자 페이지 팝업이 뜨는 것을 확인할 수 있습니다.  

<img src="{{site.baseurl}}/assets/images/43/5.PNG" title="OneDrive 사이트 모음 삭제2">  
 
해당 사용자 옆 체크박스를 선택한 후, 상단 "작업" 메뉴 클릭 > "사이트 모음에서 사용자 삭제"를 클릭합니다.  
이후, 파일을 재공유하여 정상 접근이 가능한지 확인합니다.  


### 관리자 계정으로 사용자 OneDrive 사이트 접근

상기 작업은 OneDrive 사이트 소유자 계정으로 가능하나, 관리자 계정을 통해서도 특정 사용자의 OneDrive에 접근이 가능합니다.  

[Microsoft 365 관리 센터] > [사용자] > [활성 사용자] 에서 사용자를 검색 후, OneDrive 탭을 클릭합니다.  
[파일 액세스 권한 가져오기] 에서 “파일 링크 만들기” 를 클릭합니다.  

해당 링크를 통해 접속 시, 일시적으로 사용자의 OneDrive 사이트에 대한 소유자 권한을 부여받게 됩니다.  

