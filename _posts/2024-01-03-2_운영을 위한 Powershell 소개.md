---
layout: post
title: "[Admin] 운영을 위한 Powershell 소개"
author: sion
categories: [ Operation, Guide ]
description: "2"
image: assets/images/thumbnail/admin.png
---

본 포스팅에서는, 이전 포스팅에 이어 Microsoft 운영을 위한 방법 중 하나인 Powershell에 대해 소개해보고자 합니다.  


### 개요

Powershell은 Windows에서 사용 가능한 명령 프롬프트 입니다.  
.NET 개체를 인자로 사용하고, 반환한다는 특징이 있습니다.  

자동화를 위한 스크립트로 사용되기도, TUI 환경에서 Windows를 제어하기 위해 사용되기도 합니다만  
Microsoft 365 서비스와 관련된 모듈을 제공해주고, 이를 제어하는 데 사용되기도 합니다.  

관리센터에서 UI를 통해 제공해주는 기능 외에 더 많은 기능을 제공하고 있으므로, 관리자 입장에서는 필수로 사용법을 익혀야 합니다.  
명령어에 대한 문서는 MS에서 제공하고 있으니, 꾸준히 사용하고 찾아보면서 친숙해지는 것이 좋습니다.  

Powershell에서 제공하는 Microsoft 365 관련 모듈은 다음과 같습니다.
(일종의 라이브러리라고 봐도 무방할 것 같습니다.)  

- ExchangeOnline
- Security and Compliance
- SharePoint
- Teams
- AzureAD
- Graph  
등등


### 사전 작업

Powershell 모듈 설치 및 스크립트 실행 전, 실행 정책(Execution Policy) 확인 및 변경이 필요합니다.  

Powershell(혹은 Windows Powershell ISE)을 **관리자 권한**으로 실행한 후 다음과 같은 절차를 진행합니다.  

```
Get-ExecutionPolicy -List
```
위의 명령어를 실행해, CurrentUser 혹은 LocalMachine의 ExecutionPolicy를 확인합니다.  

```
Set-ExecutionPolicy -Scope LocalMachine RemoteSigned
```
Undefined 로 설정이 되어 있는 경우,  
위 명령어를 통해 현 디바이스(LocalMachine)의 실행 정책을 RemoteSigned로 변경해줍니다.  
직접 작성한 스크립트 및 외부로부터 다운로드 받은 모든 스크립트의 실행이 가능한 정책입니다.  

디폴트 설정은 Windows Server의 경우 RemoteSigned, 그 외 Windows client의 경우 Restricted 입니다.  
자세한 내용은 [링크][1]를 참고하세요.  

모듈 설치 시에도 **관리자 권한**으로 Powershell을 실행해야 합니다.


### Powershell 모듈

#### ExchangeOnline

Exchange Online 관련 모듈입니다.  

- 설치
```
#모듈 설치
Install-Module -Name ExchangeOnlineManagement
#모듈 불러오기 및 설치 여부 확인
Import-Module ExchangeOnlineManagement
Get-Module ExchangeOnlineManagement
```
- 사용
```
Connect-ExchangeOnline
```
[ExchangeOnline 모듈 참고문서][2]  
[Connect-ExchangeOnline][3]


#### Security & Compliance

보안 및 컴플라이언스 관련 모듈입니다.  

- 설치: ExchangeOnline 모듈 설치 시 사용 가능
- 사용
```
Connect-IPPSSession
```
[Security & Compliance 모듈 참고문서][4]  
[Connect-IPPSSession][5]  


#### SharePoint

Sharepoint 관련 모듈입니다.  

- 설치
```
#모듈 설치
Install-Module -Name Microsoft.Online.SharePoint.PowerShell
#모듈 불러오기 및 설치 여부 확인
Import-Module Microsoft.Online.SharePoint.PowerShell
Get-Module Microsoft.Online.SharePoint.PowerShell
```
- 사용
```
Connect-SPOService -Url https://도메인명-admin.sharepoint.com
```
[Sharepoint 모듈 참고문서][6]  
[Connect-SPOService][7]  


#### Teams

Teams 관련 모듈입니다.  

- 설치
```
#모듈 설치
Install-Module -Name PowerShellGet -Force -AllowClobber
Install-Module -Name MicrosoftTeams -Force -AllowClobber
#모듈 불러오기 및 설치 여부 확인
Import-Module PowerShellGet
Import-Module MicrosoftTeams
Get-Module PowerShellGet
Get-Module MicrosoftTeams
```
- 사용
```
Connect-MicrosoftTeams
```
[Teams 모듈 참고문서][8]  
[Connect-MicrosoftTeams][9]  


#### AzureAD

AzureAD(Entra ID) 관련 모듈입니다.  

*2024년 3월 30일 deprecated 예정  
*MgGraph로 모듈 이전  

- 설치
```
#모듈 설치
Install-Module AzureAD
#모듈 불러오기 및 설치 여부 확인
Import-Module AzureAD
```
- 사용
```
Connect-AzureAD
```
[AzureAD 모듈 참고문서][10]  
[Connect-AzureAD][11]  


#### Graph

Graph API 기반  관련 모듈입니다.  

- 설치
```
#모듈 설치
Install-Module Microsoft.Graph -Scope AllUsers
#모듈 불러오기 및 설치 여부 확인
Import-Module Microsoft.Graph
```
- 사용
```
Connect-MgGraph
```
[MgGraph 모듈 참고문서][12]  
[Connect-MgGraph][13]  


### 유의사항

1. 모듈 버전에 따라, 제공되는 명령어도 제공되지 않는 명령어도 존재합니다  
    - 이 경우 여러 버전의 모듈을 일일히 삭제/설치 하면서 확인이 필요합니다  
2. 모듈 연결 시 다양한 옵션과 인자가 올 수 있습니다  
    - 자격 증명 없이 연결하거나, 스크립트 자동화를 위해 별도 옵션을 주는 것이 가능합니다  


[1]: https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4
[2]: https://learn.microsoft.com/ko-kr/powershell/exchange/exchange-online-powershell-v2?view=exchange-ps
[3]: https://learn.microsoft.com/en-us/powershell/module/exchange/connect-exchangeonline?view=exchange-ps
[4]: https://learn.microsoft.com/en-us/powershell/exchange/connect-to-scc-powershell?view=exchange-ps
[5]: https://learn.microsoft.com/en-us/powershell/module/exchange/connect-ippssession?view=exchange-ps
[6]: https://learn.microsoft.com/ko-kr/powershell/sharepoint/sharepoint-online/connect-sharepoint-online
[7]: https://learn.microsoft.com/ko-kr/powershell/module/sharepoint-online/connect-sposervice?view=sharepoint-ps
[8]: https://learn.microsoft.com/ko-kr/microsoftteams/teams-powershell-install
[9]: https://learn.microsoft.com/en-us/powershell/module/teams/connect-microsoftteams?view=teams-ps
[10]: https://learn.microsoft.com/en-us/powershell/azure/active-directory/install-adv2?view=azureadps-2.0
[11]: https://learn.microsoft.com/en-us/powershell/module/azuread/connect-azuread?view=azureadps-2.0
[12]: https://learn.microsoft.com/en-us/powershell/microsoftgraph/installation?view=graph-powershell-1.0
[13]: https://learn.microsoft.com/en-us/powershell/module/microsoft.graph.authentication/connect-mggraph?view=graph-powershell-1.0