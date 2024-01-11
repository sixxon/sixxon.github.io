---
layout: post
title: "[Teams] 관리자를 위한 Classic Teams와 New Teams"
author: sion
categories: [ Service, Operation, Teams ]
description: "3"
image: assets/images/3/0.jpg
hidden: true
---




2023년 하반기, MS에서 New Teams를 발표하게 되면서  
테넌트 관리자는 Classic Teams에서 New Teams로 넘어가기 위한 준비가 필요하게 되었습니다.  

이전 포스팅에서는 사용자 측면에서 New Teams에 대해 소개해보았다면,  
본 포스팅에서는 관리자 측면에서 New Teams를 설정하는 방법에 대해 소개해보도록 하겠습니다.  


### New Teams 업데이트 설정

Teams 관리센터를 통해, New Teams 사용 여부 설정이 가능합니다.  

<img src="{{site.baseurl}}/assets/images/3/1.PNG" title="New Teams 정책">

Teams 관리센터 > [Teams] > [Teams update policies] > "Add"를 클릭합니다.  
이때, 다음과 같은 두 가지 설정값 확인이 가능합니다.

**1. Show Teams preview features**  
: Teams preview 기능에 대한 설정

    Off: 비활성화
    Users can opt in
    On for users in Current Channel (Preview): 현재 채널 사용중인 사용자만 활성화
    On for everyone: 모든 사용자 활성화
    *New Teams와는 무관
  
**2. Use new Teams client**  
: New Teams 사용에 대한 설정

    Not enabled: New Teams 비활성화
    Classic Teams as default: Classic Teams를 기본으로 사용
    Microsoft controlled: MS/조직 정책을 따름
    New Teams as default: New Teams를 기본으로 사용
    
<img src="{{site.baseurl}}/assets/images/3/3.PNG" title="New Teams 토글버튼">
*"Classic Teams as default"*, *"Microsoft controlled"*, *"New Teams as default"* 모두  
왼쪽 상단의 토글 버튼을 통해 Classic Teams/New Teams 간 전환이 가능합니다.  

<img src="{{site.baseurl}}/assets/images/3/2.PNG" title="New Teams 비활성화">
다만, *기본값으로 어떤 버전을 강제하는지 유무*와  
추후 *MS에서 지정해놓은 업데이트 일자를 따라가지는지의 유무*가  
다르다고 보시면 되겠습니다.  


### 업데이트 관련 조직 설정

앞서 New Teams 정책을 설정하는 과정에서,  
*"MS/조직 정책을 따른다"* 및 *"MS에서 지정해놓은 업데이트 일자를 따라간다"* 라는 내용을 확인하셨을 겁니다.

MS에서는 다음과 같은 [업데이트 일정]에 따라  
조직의 New Teams의 배포 및 사용을 강제하고 있습니다.  

| 업데이트 채널 | 날짜 |
|---------------|------|
|Teams 공개 미리 보기, 대상 릴리스 채널|2023년 10월|
|현재 채널|2023년 10월 말|
|Semi-Annual Enterprise 채널(미리 보기)|2023년 11월|
|월간 엔터프라이즈 채널|2023년 12월|
|Semi-Annual Enterprise Channel, 반기 확장, LTSC 및 나머지 채널|2024년 1월|
|Government Cloud(GCC, GCC High) 미리 보기, 정부 클라우드(DoD) 미리 보기|2024년 3월|

2024년 3월부터는 어떤 버전이든 새 팀즈가 강제됩니다.

<img src="{{site.baseurl}}/assets/images/3/4.PNG" title="업데이트 채널 설정">

업데이트 채널의 경우,  
Microsoft 365 관리센터 > [설정] > [조직 설정] > [서비스] > [Microsoft 365 설치 옵션]에서 확인 및 설정이 가능합니다.  


### Teams 캐시 위치

캐시 파일의 경로도 바뀌었습니다.  
- Classic Teams: %AppData%\Microsoft
- New Teams: %AppData%\Local\Packages\MSTeams_8wekyb3d8bbwe 




[새로운 버전의 Teams(New Teams, 새 팀즈)]: ("https://learn.microsoft.com/ko-kr/MicrosoftTeams/new-teams-deploy-with-m365apps#rollout-schedule")

[업데이트 일정]: ("https://learn.microsoft.com/ko-kr/microsoftteams/new-teams-desktop-admin#new-teams-schedule-for-clients")