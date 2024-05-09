---
layout: post
title: "[Outlook] 외부 사용자에게 발송한 메일의 Display Name 변경"
author: sion
categories: [ Administration, Outlook ]
description: "40"
image: assets/images/thumbnail/outlook.png
---

조직 내에서 M365 테넌트를 구축해서 사용하는 경우, 사용자 계정은 Display Name으로 각 서비스에 표기됩니다.  
다만, 업무를 하면서 외부 사용자와 메일로 소통을 하거나 Teams를 통해 협업을 해야 하는 경우가 생기게 됩니다.  

메일을 발송 시 사용자의 메일 주소로 표기되는 경우가 있는데, 본 포스팅에서는 해당 설정에 대해 소개해보도록 하겠습니다.  


### 외부 설정

Powershell 명령어를 통해, 관련 설정이 가능합니다.  

```
Connect-ExchangeOnline
Get-RemoteDomain | fl name, SimpleDisplayName
```
[Get-RemoteDomain][1] 명령어를 통해 외부 도메인에 대한 설정값 확인이 가능합니다.  

UseSimpleDisplayName이 False면, 해당 도메인 사용자가 수신받는 메일 발신자가 Display Name으로 표기되고  
UseSimpleDisplayName이 True면, 사용자한테 설정된 SimpleDisplayName으로 표기됩니다.  

```
Set-RemoteDomain -UseSimpleDisplayName $false
```
값이 True 로 설정되어 있으며 Display Name 으로 표기되게끔 설정하고 싶은 경우,  
[Set-RemoteDomain][2] 명령어를 통해 설정 변경이 가능합니다.  

```
Get-user -Identity "사용자UPN" | fl SimpleDisplayName
Set-user -Identity "사용자UPN" -SimpleDisplayName "표기명"
```
[Get-user][3] 명령어를 통해, 사용자의 SimpleDisplayName 값 확인이 가능합니다. 디폴트 값은 공란입니다.  
만약 테넌트의 UseSimpleDisplayName 이 True인데 사용자의 SimpleDisplayName 이 공란인 경우, 사용자의 SMTP 주소를 보여주게 됩니다.  

필요 시, [Set-User][4] 명령어를 통해 설정이 가능합니다.  
다만 아래와 같은 문자만 사용이 가능합니다.  

- a - z
- A - Z
- 0 - 9
- space
- " ' ( ) + , - . / : ?

(다만 제가 테스트 시에는, 알파벳 외 다른 특수문자 및 한글은 적용되지 않는 것으로 확인했습니다. 지금은 정상 적용 될지는 잘 모르겠네요 🤔)

[1]: https://learn.microsoft.com/en-us/powershell/module/exchange/get-remotedomain?view=exchange-ps
[2]: https://learn.microsoft.com/en-us/powershell/module/exchange/set-remotedomain?view=exchange-ps
[3]: https://learn.microsoft.com/en-us/powershell/module/exchange/get-user?view=exchange-ps
[4]: https://learn.microsoft.com/en-us/powershell/module/exchange/set-user?view=exchange-ps