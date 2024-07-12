---
layout: post
title: "[Entra] 관리 단위(Administrative Unit) 설정"
author: sion
categories: [ Administration, Entra ]
description: "57"
image: assets/images/thumbnail/admin.png
---

본 포스팅에서는 Microsoft Entra ID에서 제공하는 기능 중 하나인 "관리 단위" 에 대해 설명하고, 설정하는 방법을 알아보도록 하겠습니다.  

### 관리 단위

M365 테넌트를 관리하기 위한, 다양한 관리자 역할이 존재합니다.  
그리고 관리자 역할을 부여받게 되면, 테넌트 내 모든 리소스(사용자, 그룹, 디바이스 등)에 대한 접근 권한이 생깁니다.  

[관리 단위][1]는 일종의 그룹같은 개념입니다.  
관리 단위를 통해, 관리자가 접근할 수 있는 리소스를 제한할 수 있습니다.  

예시로, 다음과 같은 경우에 사용할 수 있습니다.  
- 하나의 테넌트 내에 여러 계열사가 존재하는 경우, 역할을 부여받은 계열사 담당자는 해당 계열사 사용자들에 대해서만 접근 권한을 지녀야 합니다.  

그 외에도, 감사 로그 추출 시 필터링 조건으로 사용할 수도 있습니다.  


#### 관리 단위 생성

<img src="{{site.baseurl}}/assets/images/57/1.PNG" title="관리 단위1">  

[Microsoft Entra 관리 센터] > 검색창에 "관리 단위" 를 검색하고 클릭합니다.  

<img src="{{site.baseurl}}/assets/images/57/2.PNG" title="관리 단위2">  

"추가" 를 눌러 새로운 관리 단위를 생성합니다.  

<img src="{{site.baseurl}}/assets/images/57/3.PNG" title="관리 단위3">  

이름과 설명을 입력합니다.  

[제한된 관리 단위][2] 는 "아니오" 를 체크해줍니다.  
"예"로 설정하는 경우, 해당 관리 단위에 할당된 관리자 외의 다른 관리자는 관련 리소스에 접근할 수 없게 됩니다.  

<img src="{{site.baseurl}}/assets/images/57/4.PNG" title="관리 단위4">  

<img src="{{site.baseurl}}/assets/images/57/5.PNG" title="관리 단위5">  

그 외 설정은 생략해준 뒤, "만들기" 를 클릭합니다.  

<img src="{{site.baseurl}}/assets/images/57/6.PNG" title="관리 단위 활용1">  

생성된 관리 단위에서 "역할 및 관리자" 를 클릭합니다.  
목록에 있는 역할에 사용자를 추가하면, 그 사용자는 해당 관리 단위에 대한 관리자가 됩니다.  

<img src="{{site.baseurl}}/assets/images/57/7.PNG" title="관리 단위 활용2">  

"사용자", "그룹", "디바이스" 에는 관리 단위에 포함시킬 리소스를 등록할 수 있습니다.  

[1]: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/admin-units-assign-roles
[2]: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/admin-units-restricted-management