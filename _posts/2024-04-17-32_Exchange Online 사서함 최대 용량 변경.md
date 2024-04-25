---
layout: post
title: "[Outlook] Exchange Online 사서함 최대 용량 변경"
author: sion
categories: [ Administration, Outlook ]
description: "32"
image: assets/images/thumbnail/outlook.png
---

사용자에게 할당된 라이선스 종류에 따라, Exchange Online 사서함의 용량은 상이합니다.  
보통 사용 가능한 최대 용량을 사용하고자 하시지만, 경우에 따라 사서함 용량 변경을 요청주시는 경우도 있습니다.  

본 포스팅에서는 Exchange Online 사서함의 용량을 조절하는 방법에 대해 설명하도록 하겠습니다.  
관련 공식 문서는 다음 [링크][1]를 참고해주세요.  


### 용량 변경

#### Powershell
사서함 용량 변경은 Powershell을 통해 가능합니다.  

```
Connect-ExchangeOnline

Set-Mailbox "사용자 UPN" -ProhibitSendQuota 1GB -ProhibitSendReceiveQuota 1GB -IssueWarningQuota 700MB
```
[Set-Mailbox][2] 명령어를 통해 사서함 용량 조절이 가능하며,  
ProhibitSendQuota, ProhibitSendReceiveQuota 옵션으로 용량 크기 지정이 가능합니다.  
다만, 할당 가능한 용량의 최대치 이상으로 부여할 수는 없습니다.  

- ProhibitSendQuota: 사서함이 해당하는 용량에 도달하는 경우, 메일 발송 불가
- ProhibitSendReceiveQuota: 사서함이 해당하는 용량에 도달하는 경우, 메일 수신 불가
- IssueWarningQuota: 사서함이 해당하는 용량에 도달하는 경우, 오류 메시지 발생

#### 적용
약 10분 전후로 실 사용자에게 적용되며,  
만약 사용자의 사서함 크기가 용량을 초과했을 경우 다음과 같은 오류가 발생하게 됩니다.  

<img src="{{site.baseurl}}/assets/images/32/1.PNG" title="Outlook 수발신 오류1">

<img src="{{site.baseurl}}/assets/images/32/2.PNG" title="Outlook 수발신 오류2">
  


[1]: https://learn.microsoft.com/en-us/exchange/troubleshoot/user-and-shared-mailboxes/increase-or-customize-mailbox-size
[2]: https://learn.microsoft.com/en-us/powershell/module/exchange/set-mailbox?view=exchange-ps