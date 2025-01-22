---
layout: post
title: "[etc] Windows Server 평가판 기간 연장"
author: sion
categories: [ Windows, Server, etc ]
description: "74"
image: assets/images/thumbnail/etc.png
---

정식 라이선스 구매 없이 Windows 서버 이용 시, 180일 동안 평가판으로 이용이 가능합니다.  

필요한 경우, 다음 방법을 통해 180일로 연장이 가능합니다.  

### Windows Server 평가판 기간 연장

관리자 권한으로 명령 프롬프트를 실행합니다.  

1. Standard / Datacenter 에디션
```
slmgr.vbs -rearm
```

2. Core 에디션
```
slmgr.vbs -ato
```

이후, PC를 재부팅하여 확인합니다.  


<img src="{{site.baseurl}}/assets/images/74/1.png" title="Windows Server 평가판 기간 연장1">

평가판 기간이 40일 정도 남은 상태에서,  

<img src="{{site.baseurl}}/assets/images/74/2.png" title="Windows Server 평가판 기간 연장2">

명령어 실행 시 사진과 같은 알럿이 뜹니다.  

<img src="{{site.baseurl}}/assets/images/74/3.png" title="Windows Server 평가판 기간 연장3">

재부팅 후 확인해보니 기간이 180일로 연장되어 있는 것을 확인할 수 있습니다.  


