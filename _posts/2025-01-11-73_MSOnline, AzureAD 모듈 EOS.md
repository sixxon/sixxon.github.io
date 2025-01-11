---
layout: post
title: "[etc] MSOnline, AzureAD 모듈 EOS"
author: sion
categories: [ Operation, Powershell, etc, Newsletter ]
description: "73"
image: assets/images/thumbnail/etc.png
---

MSOnline 및 AzureAD 모듈은 2025년 3월 이후로 사용이 중지됩니다.  


### 일정

| 날짜 | 동작 |
|------|------|
|2025.01|MSOnline 임시 중단 테스트|
|2025.04|MSOnline 사용 종료|
|2025.04|AzureAD 지원 종료|
|2025.07|AzureAD 사용 종료|


### 내용

- MSOnline

보안에 대한 지속적인 노력의 일환으로 MSOnline 사용 종료가 __2025년 4월 초에서 2025년 5월 말__ 사이에 발생합니다. 고객이 MSOnline의 사용 중지에 대비할 수 있도록 2025년 1월부터 2025년 3월 사이에 일련의 일시적인 중단을 배포할 예정입니다.  
2025년 1월 20일부터 2025년 2월 28일 사이에 모든 테넌트는 MSOnline PowerShell에 대해 2회 이상의 일시적인 중단을 경험하게 됩니다. 각 중단은 3-8시간 동안 지속됩니다.  

- AzureAD

AzureAD는 2025년 3월 30일부터 제공되지 않으며, 사용 기한 연장 및 지원이 불가합니다. 사용 종료는 __3분기(2025년 7월)__ 예정입니다.  


### 조치 방안

Microsoft Graph PowerShell 또는 Microsoft Entra PowerShell(미리 보기)로 마이그레이션 합니다.  

Microsoft Entra 로그인 로그를 사용하여, 모듈 사용 여부를 식별할 수 있습니다. 로그인 로그(대화형 및 비대화형 모두)에서 애플리케이션 이름이 "Azure Active Directory PowerShell"인 로그를 검색합니다.  


### 관련 문서

관련 문서는 다음을 참고해주세요.  

[Important update: Deprecation of Azure AD PowerShell and MSOnline PowerShell modules][1]
[Upgrade from Azure AD PowerShell to Microsoft Graph PowerShell][2]


[1]: https://techcommunity.microsoft.com/blog/identity/important-update-deprecation-of-azure-ad-powershell-and-msonline-powershell-modu/4094536
[2]: https://learn.microsoft.com/ko-kr/powershell/microsoftgraph/migration-steps?view=graph-powershell-1.0
