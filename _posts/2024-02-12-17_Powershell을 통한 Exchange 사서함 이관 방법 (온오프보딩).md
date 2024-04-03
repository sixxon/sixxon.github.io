---
layout: post
title: "[Outlook] Powershell을 통한 Exchange 사서함 이관 방법 (온보딩/오프보딩)"
author: sion
categories: [ Operation, Outlook ]
description: "17"
image: assets/images/17/0.png
hidden: true
---

이전 포스팅에서는 관리센터에 직접 접속해 사서함 이관을 진행하는 방법을 소개했습니다.  
본 포스팅에서는, Powershell을 이용해 온보딩/오프보딩을 하는 방법에 대해 설명하겠습니다.  

*편의 상, On-premise = Exchange = EX 로, 클라우드 = Exchange Online(EXO) = M365 사서함 으로 혼용하여 이야기합니다.  


### 사전 준비

Powershell을 통해 이관 작업을 진행하기 전,  
작업을 진행할 관리자 계정에 "Move Mailboxes" 권한이 있는지 확인합니다.  

<img src="{{site.baseurl}}/assets/images/17/1.PNG" title="권한 확인 1">

[Entra ID 관리센터] > [역할 및 관리자] > [역할 및 관리자] > "Exchange 관리자" 에 계정을 추가합니다.  

<img src="{{site.baseurl}}/assets/images/17/2.PNG" title="권한 확인 2">

이후, [Exchange 관리센터] > [역할] > [관리자 역할] > "ExchangeServiceAdmins_~~" 역할 그룹을 선택합니다.  
앞서 추가한 "Exchange 관리자" 와 동일한 역할이라고 보면 됩니다.  

"할당됨" 에 계정이 포함되어 있는지 확인하고,  
"사용 권한" 목록에 "Move Mailboxes" 권한이 체크되어 있는지 확인합니다.  
체크가 되어 있지 않다면, 체크 후 저장을 클릭합니다.  

### 온보딩(Onboarding)

온보딩이란, On-premise Exchange 서버에 있는 메일 사서함을 M365 클라우드로 이관하는 작업을 의미합니다.  

Windows [검색] > "Powershell" / "Windows Powershell ISE" 를 검색 후 실행합니다.

```
Connect-ExchangeOnline
```
Exchange Online 모듈에 연결합니다.  
만약 모듈 설치가 안 되어 있거나, Powershell이 처음이신 분들은 링크를 참고하세요.  

```
$remoteserver = (Get-MigrationEndpoint).RemoteServer
$targetdomain = "도메인명.mail.onmicrosoft.com"
$cred = Get-Credential
```
Exchange Online의 Migration Endpoint를 확인합니다.  
RemoteServer 값을 체크해주세요.  

```
New-MoveRequest -Identity "계정@abc.net" -Remote -RemoteHostName $remoteserver -TargetDeliveryDomain $targetdomain -RemoteCredential $cred
```
New-MoveRequest 명령어를 통해 온보딩을 진행합니다.  

*New-MigrationBatch 명령어를 통해서도 이관이 가능하지만, csv 파일에 별도로 이관할 계정을 작성해야 합니다.  
대량 작업이 필요한 경우에는 위 명령어가 조금 더 편할 수 있으니, 상황에 따라 사용하세요.  


### 오프보딩(Offboarding)



### 그 외

사서함 이관 시 아래 주의사항을 참고하세요.

1. 사서함 이관 시간은 사서함 크기에 따라 상이하며, 소요 시간을 알 수는 없습니다
2. M365 라이선스가 할당된 상태에서 온보딩/오프보딩이 가능합니다
3. 마이그레이션 배치 수는 최대 100개로, 이관 완료 시 작업 내역 삭제가 필요합니다
4 기존 온보딩/오프보딩 내역이 있는 경우, 동일 대상에 대해 작업 추가가 불가능하며, 중복되는 작업 내역 삭제가 필요합니다
5. 오프보딩 시, 각 DB마다 지정한 쿼터가 있으므로, 경우에 따라 사전에 M365 사서함 용량 정리가 필요할 수 있습니다
6. Outlook 데스크톱 앱 사용 시, 온보딩 완료 시점에 계정 재설정이 필요합니다  
([제어판] > [Mail (Microsoft Outlook)] > 프로필 보기 > 프로필 삭제)
7. Outlook 웹 사용 시, "outlook.office.com" URL로 접근해야 합니다

~~*관리센터 UI는 언제든지 예고 없이 바뀔 수 있습니다... 방법은 동일하니 똑같이 진행해주시면 됩니다 😐~~

