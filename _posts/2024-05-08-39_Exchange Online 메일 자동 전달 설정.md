---
layout: post
title: "[Outlook] Exchange Online 메일 자동 전달 설정"
author: sion
categories: [ Administration, Operation, Outlook ]
description: "39"
image: assets/images/thumbnail/outlook.png
---

운영 업무를 진행하다 보면 다양한 사용자들의 니즈를 마주할 수 있는데, 그 중에서도 메일 포워딩 대한 문의를 종종 받게되곤 합니다.  
본 포스팅은 Exchange Online 사서함 사용자의 메일 자동 포워딩을 설정하는 두 가지 방법에 대해 소개해보도록 하겠습니다.  

### Outlook 규칙 설정

사용자가 Outlook 규칙을 통해 설정이 가능합니다.  
규칙 설정 방법은 다음 [링크][1]를 참고해주세요.  

[동작 선택] > "사용자 또는 공용 그룹에 전달" 을 통해 설정이 가능합니다.  


### 사서함 설정

관리자가 Powershell 을 통해서도 설정이 가능합니다.  

```
Connect-ExchangeOnline
Set-Mailbox -Identity "사용자UPN" -DeliverToMailboxAndForward $true -ForwardingSMTPAddress "전달할 메일주소"
```
상기 명령어를 통해 [메일 포워딩 구성][2]이 가능합니다.  
ForwardingSMTPAddress 옵션에 인자로 포워딩할 메일 주소를 넣어주면 됩니다.  

