---
layout: post
title: "[etc] Process Monitor 사용법"
author: sion
categories: [ Operation, etc ]
description: "6"
image: assets/images/6/0.jpg
hidden: true
---

Process Monitor은, Windows 환경에서 동작하는 프로세스에 대한 모니터링이 가능한 툴입니다.  
프로세스의 동작, 파일 시스템 I/O 등에 대한 로그 수집이 가능하여,  
특정 프로세스에서 문제 발생 시 용이하게 사용이 가능합니다.  

### Process Monitor 설치 방법

다음 사이트에 접속해서, Process Monitor를 다운로드 후 설치합니다.  
[Process Monitor]  


### Process Monitor 사용 방법

Process Monitor 툴을 실행합니다.


<img src="{{site.baseurl}}/assets/images/6/1.jpg" title="Process Monitor 세팅1">

상단메뉴에서 Filter-Filter를 클릭합니다.  
설정 창의 왼쪽 중앙에 위치한 Reset 버튼을 클릭한 후, Ok 버튼을 클릭합니다.


<img src="{{site.baseurl}}/assets/images/6/2.png" title="Process Monitor 세팅2">

"사각 모양" 아이콘을 한번 클릭하여 자동으로 수행되는 데이터 수집을 중단하고,  
"휴지통 모양" 아이콘을 클릭하여 현재까지 수집된 로그를 지웁니다.  


<img src="{{site.baseurl}}/assets/images/6/3.gif" title="Process Monitor 세팅3">

Filter - Enable Advanced Output 을 체크합니다.  


<img src="{{site.baseurl}}/assets/images/6/4.gif" title="Process Monitor 세팅4">

다시 "사각 모양" 아이콘을 눌러, 데이터 수집 상태로 변경한 후 이슈를 재현합니다.
 
이제 Process Monitor 창으로 자료가 수집되는 과정을 확인하실 수 있습니다.  
문제를 재현하기 위한 추가적인 작업이 필요하다면 이 시점에 수행하면 됩니다.  


<img src="{{site.baseurl}}/assets/images/6/5.gif" title="Process Monitor 세팅5">

문제 재현이 완료되면 File - Save… 메뉴를 통해 로그를 저장합니다.  
 

<img src="{{site.baseurl}}/assets/images/4/6.jpg" title="Process Monitor 세팅6">

다음과 같이 옵션을 기본 상태로 두고, 저장 경로만 설정하신 후 PML 파일을 저장합니다.  



[Process Monitor]: ("https://learn.microsoft.com/ko-kr/sysinternals/downloads/procmon")