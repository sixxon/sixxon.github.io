---
layout: post
title: "[Teams] 사용자를 위한 Classic Teams와 New Teams"
author: sion
categories: [ Service, Operation, Teams ]
description: "9"
image: assets/images/thumbnail/teams.png
---



2023년 하반기, MS에서는 기존 Teams(Classic Teams, 클래식 팀즈)의 지원을 종료하고  
[새로운 버전의 Teams(New Teams, 새 팀즈)]를 발표했습니다.

본 포스팅에서는 New Teams에 대해 소개하고, Classic Teams와 비교하며  
사용자 및 운영자 분들께 도움이 될 만한 내용들을 말씀드려볼까 합니다.


### New Teams

New Teams는 새로운 버전의 팀즈 입니다.  
Classic Teams와 비교했을 때 어떤 점이 달라졌을까요?

<img src="{{site.baseurl}}/assets/images/9/1.PNG" title="New Teams UI 1">

<img src="{{site.baseurl}}/assets/images/9/2.PNG" title="New Teams UI 2">

먼저, UI가 조금 더 깔끔하게 변경되었습니다.

<img src="{{site.baseurl}}/assets/images/9/3.PNG" title="리소스 비교">

리소스 면에서도 더 효율적인 모습을 보여주고 있습니다.  
CPU/메모리 점유율이 낮아졌고, 속도도 개선되었습니다.

캐시 파일의 경로도 바뀌었습니다.  
- Classic Teams: %AppData%\Microsoft
- New Teams: %AppData%\Local\Packages\MSTeams_8wekyb3d8bbwe 



### New Teams 설치/업데이트

New Teams는 어떻게 사용할 수 있을까요?

Teams 다운로드 사이트에서 설치파일을 다운로드 받는 경우,  
자동으로 New Teams 버전이 설치됩니다.

별도 테넌트가 있는 조직(회사, 학교 등)의 사용자의 경우,  
조직 설정에 따라 New Teams 사용 가능 여부가 달라집니다.

<img src="{{site.baseurl}}/assets/images/9/4.PNG" title="토글 버튼">
<img src="{{site.baseurl}}/assets/images/9/5.PNG" title="새 Teams 전환">

Classic Teams만 사용 가능하게 설정되어 있을 수도,  
Classic Teams와 New Teams를 병행하여 사용 가능하게 설정되어 있을 수도,  
(위 사진과 같이 토글 버튼으로 활성화가 가능합니다)  
New Teams만 사용 가능하게 설정되어 있을 수도 있습니다.


### Classic Teams 설치

그렇다면, 기존에 사용하던 Classic Teams는 더 이상 사용을 못하는걸까요?

공식적으로 다운로드를 제공하지는 않습니다만,  
비공식적으로 기존 Teams 설치파일 다운로드가 가능합니다.

하기 URL에서, Teams 버전 / 운영체제 버전(32, 64 bit) / 확장자(exe, msi)를 변경하여  
원하는 Teams 버전 설치파일을 다운로드 하시면 됩니다.

예시)  
https://statics.teams.cdn.office.net/production-windows/1.3.00.34662/Teams_windows.msi  
https://statics.teams.cdn.office.net/production-windows-x64/1.3.00.34662/Teams_windows_x64.msi  
https://statics.teams.cdn.office.net/production-windows-x64/1.6.00.26474/Teams_windows_x64.exe  


### 그 외

실제로 New Teams를 사용해보니,  
아직까지는 다소 안정성이 낮은 모습을 보여주고 있습니다.  

제가 발견한 증상만 해도 이 정도는 되는 것 같네요.  
- 간헐적인 오류 발생 (이건 팀즈 고질적인 문제 ..)
- Classic Teams에서 사용했던 3rd party 앱과의 낮은 호환성
- 테넌트에 새로운 게스트 추가 시, New teams에서는 검색/초대 불가

업데이트를 거치며 아무쪼록 좋은 방향으로 개선이 되었으면 하는 바램입니다.


[새로운 버전의 Teams(New Teams, 새 팀즈)]: ("https://learn.microsoft.com/ko-kr/MicrosoftTeams/new-teams-deploy-with-m365apps#rollout-schedule")

