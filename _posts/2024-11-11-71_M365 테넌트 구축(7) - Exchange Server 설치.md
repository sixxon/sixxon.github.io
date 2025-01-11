---
layout: post
title: "[Admin] M365 테넌트 구축(7) - Exchange Server 설치"
author: sion
categories: [ Administration, Guide, Project_M365Tenant ]
description: "71"
image: assets/images/thumbnail/admin.png
---

해당 시리즈에서는 __AD 서버를 이용한 하이브리드 구조의 M365 테넌트__ 를 직접 구축해보도록 합니다.  

본 포스팅부터는 본격적으로 M365 환경을 구성합니다.  
하이브리드 구성을 위해, Exchange Server 를 설치해봅시다.  

### 개요

하이브리드 구성이란, 조직에서 Exchange Server(On-premise)와 Exchange Online의 메일 사서함을 모두 사용할 수 있는 환경입니다.  

본 포스팅에서는 서버에 Exchange Server를 설치하여, On-premise 사서함을 사용할 수 있는 환경을 만들어보겠습니다.  


### 사전 작업 (DC 서버)

DC 서버(WIN-ADAADC)에 접속합니다.  

아래 링크를 통해 설치파일들을 설치하고, 구성을 진행합니다.  

- [.Net Framework 4.8][2]
- [Visual C++ Redistributable Package for Visual Studio 2013][3] 
- Powershell 명령어 실행
```
Install-WindowsFeature RSAT-ADDS
```

[Exchange Server CU 14][1] 를 다운로드 받습니다.  
파일 다운로드가 완료되면, iso 파일을 더블클릭하여 드라이브에 마운트 시킵니다.  

Powershell 을 실행한 후, 아래 명령어를 차례대로 한 줄씩 실행하여 스키마를 구성합니다.  
```
E:\Setup.exe /IAcceptExchangeServerLicenseTerms_DiagnosticDataOFF /PrepareSchema
E:\Setup.exe /IAcceptExchangeServerLicenseTerms_DiagnosticDataOFF /PrepareAD /OrganizationName:"AllWays365"
E:\Setup.exe /IAcceptExchangeServerLicenseTerms_DiagnosticDataOFF /PrepareAllDomains
```

<img src="{{site.baseurl}}/assets/images/71/1.png" title="사전 작업(DC) 1">

[Active Directory 사용자 및 컴퓨터(Active Directory Users and Computers)]에 들어갑니다.  
"Microsoft Exchange Security Groups" 라는 OU가 새로 생긴 것을 확인할 수 있습니다.  

<img src="{{site.baseurl}}/assets/images/71/2.png" title="사전 작업(DC) 2">

"Users" OU 하위에 메일 서버용 계정(EXAdmin@allways365.life)을 만들어줍니다.  

<img src="{{site.baseurl}}/assets/images/71/3.png" title="사전 작업(DC) 3">

"Domain Admins", "Enterprise Admins", "Organization Management", "Schema Admins" 그룹의 구성원으로 추가합니다.  


### 사전 작업 (메일 서버)

Exchange Server 2019 설치를 위한 [최소 권장사양][4]은 다음과 같습니다.  
- RAM 10GB, SSD 64GB, CPU 4 Core

메일 서버를 위한 Windows Server(WIN-EX)를 올리고, 구성을 진행합니다.  

<img src="{{site.baseurl}}/assets/images/71/4.png" title="사전 작업(메일) 1">

우선, PC의 어드민 계정으로 로그인합니다.  

<img src="{{site.baseurl}}/assets/images/71/5.png" title="사전 작업(메일) 2">

PC의 IP와 DNS 설정을 진행합니다.  
DNS 주소는 DC 서버의 IP 주소로 설정해줍니다.  

<img src="{{site.baseurl}}/assets/images/71/6.png" title="사전 작업(메일) 3">

<img src="{{site.baseurl}}/assets/images/71/7.png" title="사전 작업(메일) 4">

<img src="{{site.baseurl}}/assets/images/71/8.png" title="사전 작업(메일) 5">

PC 이름을 변경하고, 도메인 조인을 진행합니다.  

<img src="{{site.baseurl}}/assets/images/71/9.png" title="사전 작업(메일) 6">

[컴퓨터 구성(Computer Management)] 을 클릭합니다.  

<img src="{{site.baseurl}}/assets/images/71/10.png" title="사전 작업(메일) 7">

[로컬 사용자 및 그룹(Local Users and Groups)] > [그룹(Groups)] > "Administrators" 우클릭 > "Properties" 를 클릭합니다.  

<img src="{{site.baseurl}}/assets/images/71/11.png" title="사전 작업(메일) 8">

"추가(Add)"를 누른 후, 메일 계정(EXAdmin)을 추가합니다.  


아래 링크를 통해 설치파일들을 설치하고, 구성을 진행합니다.  
- [.Net Framework 4.8][2]
- [Visual C++ Redistributable Package for Visual Studio 2013][3]
- [UCMA 4.0][5]
- [IIS Rewrite Module][6]
- Powershell 명령어 실행 (관리자 권한)
```
Install-WindowsFeature Server-Media-Foundation, NET-Framework-45-Features, RPC-over-HTTP-proxy, RSAT-Clustering, RSAT-Clustering-CmdInterface, RSAT-Clustering-Mgmt, RSAT-Clustering-PowerShell, WAS-Process-Model, Web-Asp-Net45, Web-Basic-Auth, Web-Client-Auth, Web-Digest-Auth, Web-Dir-Browsing, Web-Dyn-Compression, Web-Http-Errors, Web-Http-Logging, Web-Http-Redirect, Web-Http-Tracing, Web-ISAPI-Ext, Web-ISAPI-Filter, Web-Lgcy-Mgmt-Console, Web-Metabase, Web-Mgmt-Console, Web-Mgmt-Service, Web-Net-Ext45, Web-Request-Monitor, Web-Server, Web-Stat-Compression, Web-Static-Content, Web-Windows-Auth, Web-WMI, Windows-Identity-Foundation, RSAT-ADDS, Failover-Clustering 
```

[Exchange Server CU 14][1] 를 다운로드 받습니다.  
파일 다운로드가 완료되면, iso 파일을 더블클릭하여 드라이브에 마운트 시킵니다.  


### Exchange Server 설치

마운트 된 드라이브 내 "Setup.exe" 파일을 관리자 권한으로 실행합니다.  

<img src="{{site.baseurl}}/assets/images/71/12.png" title="사전 작업(메일) 8">
"Don't check for updates right now" 선택,

<img src="{{site.baseurl}}/assets/images/71/13.png" title="사전 작업(메일) 9">

다음 선택,

<img src="{{site.baseurl}}/assets/images/71/14.png" title="사전 작업(메일) 10">

진단 데이터(Diagnostic data) 는 공유하지 않는 것으로 선택합니다.  

<img src="{{site.baseurl}}/assets/images/71/15.png" title="사전 작업(메일) 11">

"Don't use recommended settings" 선택,

<img src="{{site.baseurl}}/assets/images/71/16.png" title="사전 작업(메일) 12">

"Mailbox role" 선택,

<img src="{{site.baseurl}}/assets/images/71/17.png" title="사전 작업(메일) 13">

다음 선택,

<img src="{{site.baseurl}}/assets/images/71/18.png" title="사전 작업(메일) 14">

조직 명 입력 후, "Disable malware scanning"은 No 로 선택합니다.  

이후 사전 요구사항 체크와 함께 설치가 진행됩니다.  

### Exchange Server 설치 오류

Exchange Server 설치 시 여러가지 오류가 발생할 수 있습니다.  

이 오류 때문에 메일 서버를 설치하는데 많은 시간을 들이고 애를 먹었는데요,  
포스팅을 보시는 분들은 부디 원만하게 설치하시길 빌며 관련 내용을 공유드립니다🥹  

#### 사전 작업
설치 전, Powershell을 관리자 권한으로 실행 후, 아래 명령어를 실행하여 스크립트 실행권한 조정이 필요합니다.  
```
Set-ExecutionPolicy Unrestricted 
```

#### Domain 조인 시 오류 발생

"an active directory domain controller (ad dc) for the domain could not be contacted, 0x0000232B RCODE_NAME_ERROR"  

PC > 설정 > 네트워크 > 어댑터 옵션 변경 > IPv6 비활성화 (체크 해제) 를 진행합니다.  

#### Installconfig.ps1 failed
Windows Defender를 비활성화 하거나, 삭제해줍니다.  
아래 Powershell 명령어를 통해 Windows Defender 제거가 가능합니다(관리자 권한 필요).  
```
Uninstall-WindowsFeature -Name Windows-Defender
```

#### Installconfig.ps1 failed (fs 폴더 오류)
HostController 내 모든 파일 삭제 후, 다시 Setup.exe를 실행합니다.  


#### 그 외 

오류 발생 시, C:\ExchangeServerSetup 폴더 하위의 로그 텍스트 파일을 통해 오류에 대한 상세 내용 확인이 가능합니다.  

오류 원인 확인을 위해, MS에서 제공하는 파워쉘을 다운로드 받고 실행하여 조치하는 것도 도움이 됩니다.  

[1]: https://www.microsoft.com/en-us/download/details.aspx?id=105878
[2]: https://go.microsoft.com/fwlink/?linkid=2088631
[3]: https://support.microsoft.com/ko-kr/topic/update-for-visual-c-2013-redistributable-package-d8ccd6a5-4e26-c290-517b-8da6cfdf4f10
[4]: https://learn.microsoft.com/ko-kr/exchange/plan-and-deploy/system-requirements?view=exchserver-2019
[5]: https://www.microsoft.com/en-us/download/details.aspx?id=34992
[6]: https://www.iis.net/downloads/microsoft/url-rewrite