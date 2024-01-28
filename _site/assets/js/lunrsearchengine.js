
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 페이지가 존재하지 않습니다: 다음 링크를 통해 접속해주세요 "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "반갑습니다 👋",
    "body": "회사에서 M365 운영 업무를 담당하고 있습니다. 이 사이트는 그 과정에서 터득한 내용들을 조금씩 기록해나가는 블로그입니다. 지식은 공유되어야 그 가치를 발휘한다고 생각합니다. 제 사소한 지식이 조금이나마 도움이 되셨으면 좋겠습니다! 잘못된 정보에 대한 지적은 언제나 환영합니다 😌 "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Posts:                                                                                                     [Office] Office 앱 오류 해결 안되는 경우              :       Office 앱 오류 발생 시, 조치를 진행했으나 증상이 개선되지 않는 경우가 있습니다. Windows 환경에서 Office 앱 삭제 후 재부팅 시에도 동일 증상이 발생한다면, 이는 PC 문제일 가능성이 높습니다. :                                                                               Sion                24 Jan 2024                                                                                                                                     [Office] Office 앱 기능 오류              :       Office 앱에는 Excel, Powerpoint, Word와 같은 서비스들이 포함되어 있습니다. 보통 해당 앱들은 이상 없이 정상 동작하지만, 알 수 없는 이유로 문제가 생길 때가 있습니다. :                                                                               Sion                23 Jan 2024                                                                                                                                     [Outlook] Outlook 앱 연결 오류              :       Outlook 설치형 앱을 통해 사서함에 접근하고자 하는 경우,사용자 계정으로 로그인이 필요합니다. :                                                                               Sion                22 Jan 2024                                                                                                                                     [Outlook] Outlook 실행 시 자격증명 프롬프트 오류              :       어느 순간부터, Outlook 앱 실행 시 회색 로그인 창이 반복적으로 뜨는 경우가 있습니다. 계정 패스워드를 입력해도 계속해서 창이 뜹니다. :                                                                               Sion                19 Jan 2024                                                                                                                                     [Office] 정품 인증 오류              :       Office 프로그램(Powerpoint, Excel, Word 등) 사용 시,정품 인증 오류가 발생하는 경우가 있습니다. :                                                                               Sion                17 Jan 2024                                                                                                                                     [etc] Process Monitor 사용법              :       Process Monitor은, Windows 환경에서 동작하는 프로세스에 대한 모니터링이 가능한 툴입니다. 프로세스의 동작, 파일 시스템 I/O 등에 대한 로그 수집이 가능하여,특정 프로세스에서 문제 발생 시 용이하게 사용이 가능합니다. :                                                                               Sion                16 Jan 2024                                               &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %} {% endif %}       Posts:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://localhost:4000/service/office/windows/2024/01/24/Office-%EC%95%B1-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-%EC%95%88%EB%90%98%EB%8A%94-%EA%B2%BD%EC%9A%B0.html",
    "title": "[Office] Office 앱 오류 해결 안되는 경우",
    "body": "2024/01/24 - Office 앱 오류 발생 시, 조치를 진행했으나 증상이 개선되지 않는 경우가 있습니다. Windows 환경에서 Office 앱 삭제 후 재부팅 시에도 동일 증상이 발생한다면, 이는 PC 문제일 가능성이 높습니다. 이 경우 조치 가능한 방법에 대해 설명해보겠습니다. Windows 계정 추가: 기존 프로필은 삭제하지 않은 상태에서, 테스트 용으로 새 Windows 프로필을 생성합니다. Windows [설정] &gt; [계정] &gt; [가족 및 다른 사용자] &gt; “이 PC에 다른 사용자 추가” 를 클릭합니다. “이 사람의 로그인 정보를 가지고 있지 않습니다” &gt; “Microsoft 계정 없이 사용자 추가” 를 클릭합니다. “계정 유형 변경”을 클릭하여 관리자 계정 여부를 설정할 수 있습니다. *Windows 10 기준으로, 상세 가이드는 Windows 프로필 생성을 참고합니다 사용자를 변경하여, 해당 환경에서도 동일한 증상이 발생하는지 확인합니다. Windows 시작 &gt; PC 사용자 명 클릭 &gt; 새로 추가한 사용자 계정으로 로그인합니다. 이후 상황을 재현하여 동일 증상이 발생하는지 확인합니다. PC 포맷: 위 방법을 통해서도 오류가 발생하는 경우,PC 포맷을 진행하는 것이 가장 좋은 방법일 수 있습니다. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/service/office/2024/01/23/Office-%EC%95%B1-%EA%B8%B0%EB%8A%A5-%EC%98%A4%EB%A5%98.html",
    "title": "[Office] Office 앱 기능 오류",
    "body": "2024/01/23 - Office 앱에는 Excel, Powerpoint, Word와 같은 서비스들이 포함되어 있습니다. 보통 해당 앱들은 이상 없이 정상 동작하지만, 알 수 없는 이유로 문제가 생길 때가 있습니다. 오류가 발생하는 원인은 다양하며, 각 경우에 대해 다르게 조치해야 할 수도 있습니다만본 포스팅에서는 통상적인 기능 오류 발생 시 확인할 수 있는 간단한 방법에 대해 소개해보도록 하겠습니다. Sara 설치: 하기 사이트에서 Sara(Microsoft Support and Recovery Assistant)를 설치합니다. Microsoft Support and Recovery Assistant 툴을 실행한 뒤, 적절한 서비스 및 증상을 선택합니다. 프로그램 복구: Windows [제어판] &gt; [프로그램 및 기능]을 클릭합니다. Office 프로그램을 찾아 우클릭 후, [변경/복구] 를 클릭하여 복구를 진행합니다. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/service/operation/outlook/2024/01/22/Outlook-%EC%95%B1-%EC%97%B0%EA%B2%B0-%EC%98%A4%EB%A5%98.html",
    "title": "[Outlook] Outlook 앱 연결 오류",
    "body": "2024/01/22 - Outlook 설치형 앱을 통해 사서함에 접근하고자 하는 경우,사용자 계정으로 로그인이 필요합니다.  그러나, 간혹 Outlook에 로그인이 되지 않는 경우가 있습니다. 이 경우 어떤 방식으로 조치가 가능한지 확인해보도록 하겠습니다. Outlook 프로필 재설정: [제어판] &gt; 검색창에 “mail” 검색 &gt; [Mail(Microsoft Outlook)]을 클릭합니다.  [프로필 보기] 클릭 후,[이 컴퓨터에 설정된 프로필]에 존재하는 모든 메일 계정을 제거합니다. 대부분의 경우, 해당 방법으로 조치가 됩니다. 메일 프로필에는 사용자 메일 계정에 대한 정보가 저장되어 있습니다. (사용자명, 메일 서버명, ISP 등…) 결과적으로, 잘못된 메일 프로필을 삭제 후 재생성하기만 하는 것 만으로도증상이 해결될 수 있습니다. 자격 증명 삭제: [제어판] &gt; [자격증명 관리자] &gt; [Windows 자격 증명] &gt; [일반 자격 증명]에Office 관련 모든 자격증명을 제거합니다.  레지스트리 편집기에서, Identities 하위의 모든 키 값을 제거합니다. HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\16. 0\Common\Identity\Identities PC에 다른 사용자 계정으로 로그인을 하는 경우,계정 정보가 꼬여 로그인이 되지 않는 경우가 있으므로상기 방법을 통해 자격 증명 정보를 제거해줍니다. 최신 인증 활성화: 제어판에서 메일 프로필 등록 시,계정정보 입력 후 Autodiscover 서비스를 호출하는 도중무한로딩이 발생하는 경우가 있습니다. 이 경우, 하기 포스팅을 참고하여 조치합니다. 최신 인증 활성화 "
    }, {
    "id": 9,
    "url": "http://localhost:4000/service/operation/outlook/2024/01/19/Outlook-%EC%8B%A4%ED%96%89-%EC%8B%9C-%EC%9E%90%EA%B2%A9%EC%A6%9D%EB%AA%85-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8-%EC%98%A4%EB%A5%98.html",
    "title": "[Outlook] Outlook 실행 시 자격증명 프롬프트 오류",
    "body": "2024/01/19 - 어느 순간부터, Outlook 앱 실행 시 회색 로그인 창이 반복적으로 뜨는 경우가 있습니다. 계정 패스워드를 입력해도 계속해서 창이 뜹니다. 이러한 경우에 대한 조치 방법은 다음과 같습니다. 레지스트리 변경: 둘 중 하나의 방법을 통해 진행하면 됩니다.  명령 프롬프트(cmd)로 작업Windows [검색] &gt; “명령 프롬프트(cmd)” &gt; 우클릭 후 “관리자 권한으로 실행”을 클릭합니다. 아래 명령어를 한 줄씩 복사하여 실행합니다. 1234REG ADD  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\16. 0\Common\Identity  /v EnableADAL /t REG_DWORD /d 1 /f REG ADD  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\16. 0\Common\Identity  /v Version /t REG_DWORD /d 1 /f REG ADD  HKEY_CURRENT_USER\Software\Microsoft\Exchange  /v AlwaysUseMSOAuthForAutoDiscover /t REG_DWORD /d 1 /f  레지스트리 편집기로 작업Windows [검색] &gt; “레지스트리 편집기(regedit)” 를 실행합니다. 하기 경로에 접근한 뒤, 각 레지스트리 값을 추가/수정 합니다. HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\16. 0\Common\IdentityEnableADAL, REG_DWORD, 1 HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\16. 0\Common\IdentityVersion, REG_DWORD, 1 HKEY_CURRENT_USER\Software\Microsoft\ExchangeAlwaysUseMSOAuthForAutoDiscover, REG_DWORD, 1 이는 최신 인증(Modern Authenticaton)과 기본 인증(Basic Authentication)과 관련된 부분으로,추후 포스팅을 통해 내용을 소개해보도록 하겠습니다. 관심이 있으신 분들은 관련 문서를 확인해보셔도 좋을 것 같습니다. "
    }, {
    "id": 10,
    "url": "http://localhost:4000/service/office/2024/01/17/Office-%EC%A0%95%ED%92%88-%EC%9D%B8%EC%A6%9D-%EC%98%A4%EB%A5%98.html",
    "title": "[Office] 정품 인증 오류",
    "body": "2024/01/17 - Office 프로그램(Powerpoint, Excel, Word 등) 사용 시,정품 인증 오류가 발생하는 경우가 있습니다. 본 포스팅에서는 해당 오류에 대한 해결 방법에 대해 소개하도록 하겠습니다. Office 정품 인증: Office 정품 인증은 두 가지 방법으로 가능합니다.  Office 프로그램의 시리얼 키 입력 Office 프로그램에서 조직 계정으로 로그인1번의 경우, 시리얼 키만 안다면 수행할 수 있는 방법으로PC의 네트워크 상태와 상관없이 수행 가능합니다. 2번의 경우, 조직에서 Office 라이선스를 구매하여 사용하는 경우 수행할 수 있는 방법으로로그인이 필요하므로 네트워크에 문제가 없어야 합니다. 정품 인증 오류: 조직에서 로그인을 통해 정품 인증을 진행할 때,특정 PC에서 오류가 발생하는 경우가 있습니다. 이 경우 하기 방법을 통해 조치를 진행합니다.  Office 프로그램에서 모든 계정 로그아웃 ([파일] &gt; [계정] &gt; [로그아웃]) Windows [설정] &gt; [계정] &gt; “이메일 및 계정”, “회사 또는 학교 액세스 메뉴”에서 사용자 계정 외 다른 계정이 있을 경우 연결 끊기 Windows [제어판] &gt; [자격증명 관리자] &gt; [Windows 자격 증명] &gt; [일반 자격 증명]에 Office 관련 모든 자격증명 제거 레지스트리 편집기(regedit) 실행 후,컴퓨터\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\16. 0\Common\Identity\Identities 하위의 키 값 모두 삭제이후에도 증상 발생 시, 하기 방법을 추가적으로 진행합니다.   Windows [검색] &gt; “서비스”(services. msc) 실행 “Software Protection”, “Network List Sevice” 서비스가 잘 동작하는지 확인 “Software Protection” 서비스가 “중지하는 중” 혹은 “시작하는 중”에서 멈춰있다면, 하기와 같이 레지스트리 값 변경HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatformInactivityShutdownDelay, REG_DWORD, 10진수, 86400 “Software Protection” 서비스(sppsvc 프로세스)는 Windows 프로그램의 인증 및 권한을 확인해주는 서비스로,알 수 없는 원인에 의해 서비스 중지 시, 재시작되도록 위와 같이 레지스트리 값을 변경해줍니다. 마치며: 이후에도 증상 발생 시,PC에 설치 된 보안 프로그램 문제에 의한 이슈일 것으로 추정됩니다. 이 경우, Process Monitor과 같은 툴을 통해 정확한 원인을 분석하거나혹은 PC에 설치되어 있는 보안 프로그램을 하나씩 삭제해가며 확인이 필요합니다. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/operation/etc/2024/01/16/Process-Monitor-%EC%82%AC%EC%9A%A9%EB%B2%95.html",
    "title": "[etc] Process Monitor 사용법",
    "body": "2024/01/16 - Process Monitor은, Windows 환경에서 동작하는 프로세스에 대한 모니터링이 가능한 툴입니다. 프로세스의 동작, 파일 시스템 I/O 등에 대한 로그 수집이 가능하여,특정 프로세스에서 문제 발생 시 용이하게 사용이 가능합니다. Process Monitor 설치 방법: 다음 사이트에 접속해서, Process Monitor를 다운로드 후 설치합니다. Process Monitor Process Monitor 사용 방법: Process Monitor 툴을 실행합니다.  상단메뉴에서 Filter-Filter를 클릭합니다. 설정 창의 왼쪽 중앙에 위치한 Reset 버튼을 클릭한 후, Ok 버튼을 클릭합니다.  “사각 모양” 아이콘을 한번 클릭하여 자동으로 수행되는 데이터 수집을 중단하고,“휴지통 모양” 아이콘을 클릭하여 현재까지 수집된 로그를 지웁니다.  Filter - Enable Advanced Output 을 체크합니다.  다시 “사각 모양” 아이콘을 눌러, 데이터 수집 상태로 변경한 후 이슈를 재현합니다. 이제 Process Monitor 창으로 자료가 수집되는 과정을 확인하실 수 있습니다. 문제를 재현하기 위한 추가적인 작업이 필요하다면 이 시점에 수행하면 됩니다.  문제 재현이 완료되면 File - Save… 메뉴를 통해 로그를 저장합니다.  다음과 같이 옵션을 기본 상태로 두고, 저장 경로만 설정하신 후 PML 파일을 저장합니다. "
    }, {
    "id": 12,
    "url": "http://localhost:4000/operation/etc/2024/01/15/PSR-%EC%82%AC%EC%9A%A9%EB%B2%95.html",
    "title": "[etc] PSR 사용법",
    "body": "2024/01/15 - PSR(Problem Steps Recorder)은 Windows에서 기본 제공하는 툴로,컴퓨터에서 단계적으로 화면을 캡처할 때 사용되고 있습니다. 오류 화면을 재현하면서,주로 Fiddler와 함께 사용합니다. PSR 사용 방법: PSR 로그 수집 방법은 다음과 같습니다. Windows 로고 버튼 + R 키를 눌러, “실행” 창을 열고psr. exe 를 입력 후 실행합니다.  실행된 단계 레코더의 우측에 있는 파란색 물음표 버튼을 클릭합니다. “설정”에서 “저장할 최근 화면 캡쳐 수”를 999로 설정합니다. PSR의 녹화를 시작합니다. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/operation/etc/2024/01/12/Fiddler-%EC%82%AC%EC%9A%A9%EB%B2%95-copy.html",
    "title": "[etc] Fiddler 사용법",
    "body": "2024/01/12 - WireShark와 같이, 네트워크 트래픽 확인 및 패킷 분석을 도와주는 툴이 있습니다. MS에서 문제 확인 및 재현 시 자주 사용하는 툴이므로,사용법을 익혀 두는 것이 유용합니다. Fiddler 설치: 다음 사이트에 접속해서, Fiddler Classic을 다운로드 후 설치합니다. Fiddler Classic Fiddler 사용 방법: Fiddler 로그 수집 방법은 다음과 같습니다.  Fiddler Classic 앱을 실행한 뒤, Tools - Options를 클릭하여 설정을 열어줍니다.  HTTPS 탭에 들어가 “Decrypt HTTPS”를 체크하고 인증서를 설치합니다.  인증서 설치 완료 이후, Tls1. 1과 tls1. 2를 추가 후 저장합니다.  &lt; client &gt;;ssl3;tls1. 0;tsl1. 1;tls1. 2 Decode 버튼이 테두리가 파랑색이 되도록 클릭해주고, Fiddler를 재실행합니다.  Fiddler 우측 상단의 WinConfig 메뉴를 클릭합니다.  User Account Control (UAC) 창이 뜨면 예(Yes)를 클릭합니다.  이후 출력되는 AppContainer 창에서, 항목들을 모두 제외 후 저장합니다. Exempt All -&gt; Save Changes 순으로 클릭합니다. F12키를 눌러 캡쳐를 멈추거나 시작할 수 있습니다. 이때 불필요한 창들은 다 닫습니다. 작업 표시줄의 숨겨진 아이콘, 작업 관리자 등을 통해 불필요한 프로그램들을 모두 종료합니다. 로그를 수집할 시나리오를 시작하기 직전에 F12 키를 눌러 캡처를 시작합니다. 이후 필요한 과정이 진행되고 나면, F12 키를 눌러 캡쳐를 멈추고 File – Save – All Sessions를 눌러 저장해줍니다. "
    }, {
    "id": 14,
    "url": "http://localhost:4000/service/operation/teams/2024/01/11/%EA%B4%80%EB%A6%AC%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-Classic-Teams%EC%99%80-New-Teams-copy.html",
    "title": "[Teams] 관리자를 위한 Classic Teams와 New Teams",
    "body": "2024/01/11 - 2023년 하반기, MS에서 New Teams를 발표하게 되면서테넌트 관리자는 Classic Teams에서 New Teams로 넘어가기 위한 준비가 필요하게 되었습니다. 이전 포스팅에서는 사용자 측면에서 New Teams에 대해 소개해보았다면,본 포스팅에서는 관리자 측면에서 New Teams를 설정하는 방법에 대해 소개해보도록 하겠습니다. New Teams 업데이트 설정: Teams 관리센터를 통해, New Teams 사용 여부 설정이 가능합니다.  Teams 관리센터 &gt; [Teams] &gt; [Teams update policies] &gt; “Add”를 클릭합니다. 이때, 다음과 같은 두 가지 설정값 확인이 가능합니다.  1. Show Teams preview features Teams preview 기능에 대한 설정  Off: 비활성화 Users can opt in On for users in Current Channel (Preview): 현재 채널 사용중인 사용자만 활성화 On for everyone: 모든 사용자 활성화 *New Teams와는 무관   2. Use new Teams client New Teams 사용에 대한 설정  Not enabled: New Teams 비활성화 Classic Teams as default: Classic Teams를 기본으로 사용 Microsoft controlled: MS/조직 정책을 따름 New Teams as default: New Teams를 기본으로 사용  “Classic Teams as default”, “Microsoft controlled”, “New Teams as default” 모두왼쪽 상단의 토글 버튼을 통해 Classic Teams/New Teams 간 전환이 가능합니다. 다만, 기본값으로 어떤 버전을 강제하는지 유무와추후 MS에서 지정해놓은 업데이트 일자를 따라가지는지의 유무가다르다고 보시면 되겠습니다. 업데이트 관련 조직 설정: 앞서 New Teams 정책을 설정하는 과정에서,“MS/조직 정책을 따른다” 및 “MS에서 지정해놓은 업데이트 일자를 따라간다” 라는 내용을 확인하셨을 겁니다. MS에서는 다음과 같은 업데이트 일정에 따라조직의 New Teams의 배포 및 사용을 강제하고 있습니다.       업데이트 채널   날짜         Teams 공개 미리 보기, 대상 릴리스 채널   2023년 10월       현재 채널   2023년 10월 말       Semi-Annual Enterprise 채널(미리 보기)   2023년 11월       월간 엔터프라이즈 채널   2023년 12월       Semi-Annual Enterprise Channel, 반기 확장, LTSC 및 나머지 채널   2024년 1월       Government Cloud(GCC, GCC High) 미리 보기, 정부 클라우드(DoD) 미리 보기   2024년 3월   2024년 3월부터는 어떤 버전이든 새 팀즈가 강제됩니다.  업데이트 채널의 경우,Microsoft 365 관리센터 &gt; [설정] &gt; [조직 설정] &gt; [서비스] &gt; [Microsoft 365 설치 옵션]에서 확인 및 설정이 가능합니다. Teams 캐시 위치: 캐시 파일의 경로도 바뀌었습니다.  Classic Teams: %AppData%\Microsoft New Teams: %AppData%\Local\Packages\MSTeams_8wekyb3d8bbweNew Teams의 캐시 제거 방법은 다음과 같습니다.  Windows [설정] &gt; [앱] &gt; [설치된 앱] &gt; “Microsoft Teams” 선택 &gt; [고급 옵션] &gt; [초기화] %localappdata%\Packages\MSTeams_8wekyb3d8bbwe 삭제혹은, %userprofile%\AppData\Local\Packages\MSTeams_8wekyb3d8bbwe\LocalCache\Microsoft\MSTeams 삭제"
    }, {
    "id": 15,
    "url": "http://localhost:4000/service/operation/teams/2024/01/09/%EC%82%AC%EC%9A%A9%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-Classic-Teams%EC%99%80-New-Teams.html",
    "title": "[Teams] 사용자를 위한 Classic Teams와 New Teams",
    "body": "2024/01/09 - 2023년 하반기, MS에서는 기존 Teams(Classic Teams, 클래식 팀즈)의 지원을 종료하고새로운 버전의 Teams(New Teams, 새 팀즈)를 발표했습니다. 본 포스팅에서는 New Teams에 대해 소개하고, Classic Teams와 비교하며사용자 및 운영자 분들께 도움이 될 만한 내용들을 말씀드려볼까 합니다. New Teams: New Teams는 새로운 버전의 팀즈 입니다. Classic Teams와 비교했을 때 어떤 점이 달라졌을까요?  먼저, UI가 조금 더 깔끔하게 변경되었습니다.  리소스 면에서도 더 효율적인 모습을 보여주고 있습니다. CPU/메모리 점유율이 낮아졌고, 속도도 개선되었습니다. 캐시 파일의 경로도 바뀌었습니다.  Classic Teams: %AppData%\Microsoft New Teams: %AppData%\Local\Packages\MSTeams_8wekyb3d8bbweNew Teams 설치/업데이트: New Teams는 어떻게 사용할 수 있을까요? Teams 다운로드 사이트에서 설치파일을 다운로드 받는 경우,자동으로 New Teams 버전이 설치됩니다. 별도 테넌트가 있는 조직(회사, 학교 등)의 사용자의 경우,조직 설정에 따라 New Teams 사용 가능 여부가 달라집니다.  Classic Teams만 사용 가능하게 설정되어 있을 수도,Classic Teams와 New Teams를 병행하여 사용 가능하게 설정되어 있을 수도,(위 사진과 같이 토글 버튼으로 활성화가 가능합니다)New Teams만 사용 가능하게 설정되어 있을 수도 있습니다. Classic Teams 설치: 그렇다면, 기존에 사용하던 Classic Teams는 더 이상 사용을 못하는걸까요? 공식적으로 다운로드를 제공하지는 않습니다만,비공식적으로 기존 Teams 설치파일 다운로드가 가능합니다. 하기 URL에서, Teams 버전 / 운영체제 버전(32, 64 bit) / 확장자(exe, msi)를 변경하여원하는 Teams 버전 설치파일을 다운로드 하시면 됩니다. 예시)https://statics. teams. cdn. office. net/production-windows/1. 3. 00. 34662/Teams_windows. msihttps://statics. teams. cdn. office. net/production-windows-x64/1. 3. 00. 34662/Teams_windows_x64. msihttps://statics. teams. cdn. office. net/production-windows-x64/1. 6. 00. 26474/Teams_windows_x64. exe 그 외: 실제로 New Teams를 사용해보니,아직까지는 다소 안정성이 낮은 모습을 보여주고 있습니다. 제가 발견한 증상만 해도 이 정도는 되는 것 같네요.  간헐적인 오류 발생 (이건 팀즈 고질적인 문제 . . ) Classic Teams에서 사용했던 3rd party 앱과의 낮은 호환성 테넌트에 새로운 게스트 추가 시, New teams에서는 검색/초대 불가업데이트를 거치며 아무쪼록 좋은 방향으로 개선이 되었으면 하는 바램입니다. "
    }, {
    "id": 16,
    "url": "http://localhost:4000/service/teams/2024/01/04/Teams-%EC%98%A4%EB%A5%98-%EB%B0%9C%EC%83%9D.html",
    "title": "[Teams] 팀즈 오류 발생 시 해결방안",
    "body": "2024/01/04 -  Teams의 경우, 사용해보신 분들은 아시겠지만 자잘한 오류가 많이 발생하는 편입니다. 로그인할 때 오류가 발생하는 경우도 있고,채널에서 탭을 클릭했을 시 접근이 불가능하기도 합니다. 미팅 시 화면공유된 화면이 나오지 않는 경우도 있습니다. 이런 간헐적인 오류들에 대한 간단한 해결 방안을 소개해드리도록 하겠습니다. Windows에서 발생하는 Teams 오류에 대한 해결 방안은 다음과 같습니다. 단, Teams 버전에 따라 조치 방안이 상이합니다. Desktop App: Classic Teams:    Teams 데스크톱 앱을 로그아웃 및 종료 합니다.     파일 탐색기(윈도우키+R)에서, “%AppData%\Microsoft” 경로에 접근한 뒤 “Teams” 폴더를 삭제합니다.     파일 탐색기에서, “%LocalAppData%\Microsoft” 경로에 접근한 뒤, “Teams” 폴더를 삭제합니다.    제어판의 자격 증명 관리자에서 Windows 자격 증명 탭의 일반 자격 증명을 모두 제거합니다.    Windows 설정 - 계정 - 학교 또는 회사 액세스에 연결된 모든 계정을 연결 끊기 처리합니다(학교 또는 회사 계정의 경우).     PC를 재부팅 합니다.  *필요한 경우, 최신 버전의 Teams를 다운로드 받아서 설치합니다. New Teams:    Teams 데스크톱 앱을 로그아웃 및 종료 합니다.     Teams 데스크톱 앱을 재실행한 후, 동일 증상이 발생하는지 확인합니다.     증상이 발생하는 경우, 파일 탐색기(윈도우키+R)에서 “%AppData%\Packages\MSTeams_8wekyb3d8bbwe” 경로에 접근한 뒤 모든 파일을 삭제합니다.  Web: 브라우저 캐시/쿠키를 제거합니다. Edge 브라우저Chrome 브라우저 "
    }, {
    "id": 17,
    "url": "http://localhost:4000/2018/06/12/powerful-things-markdown-editor-copy.html",
    "title": "Powerful things you can do with the Markdown editor",
    "body": "2018/06/12 - There are lots of powerful things you can do with the Markdown editor. If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown! As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}HTML: 12345&lt;li class= ml-1 mr-1 &gt;  &lt;a target= _blank  href= # &gt;  &lt;i class= fab fa-twitter &gt;&lt;/i&gt;  &lt;/a&gt;&lt;/li&gt;CSS: 12345678. highlight . c {  color: #999988;  font-style: italic; }. highlight . err {  color: #a61717;  background-color: #e3d2d2; }JS: 123456789// alertbar later$(document). scroll(function () {  var y = $(this). scrollTop();  if (y &gt; 280) {    $('. alertbar'). fadeIn();  } else {    $('. alertbar'). fadeOut();  }});Python: 1print( Hello World )Ruby: 123require 'redcarpet'markdown = Redcarpet. new( Hello World! )puts markdown. to_htmlC: 1printf( Hello World ); Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
    }, {
    "id": 18,
    "url": "http://localhost:4000/2018/06/12/first-mass-produced.html",
    "title": "The first mass-produced book to deviate from a rectilinear format",
    "body": "2018/06/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 19,
    "url": "http://localhost:4000/2018/06/12/education.html",
    "title": "Education must also train one for quick, resolute and effective thinking.",
    "body": "2018/06/12 - There are lots of powerful things you can do with the Markdown editor If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown! As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}If you want to get really fancy, you can even add syntax highlighting using Rouge.  Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
    }, {
    "id": 20,
    "url": "http://localhost:4000/2018/06/12/acumulated-experience.html",
    "title": "Accumulated experience of social living",
    "body": "2018/06/12 - The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original - which sees Little Red Riding Hood being gobbled up as well as her grandmother - is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. "
    }, {
    "id": 21,
    "url": "http://localhost:4000/2018/05/12/about-bundler.html",
    "title": "About Bundler",
    "body": "2018/05/12 - gem install bundler installs the bundler gem through RubyGems. You only need to install it once - not every time you create a new Jekyll project. Here are some additional details: bundler is a gem that manages other Ruby gems. It makes sure your gems and gem versions are compatible, and that you have all necessary dependencies each gem requires. The Gemfile and Gemfile. lock files inform Bundler about the gem requirements in your site. If your site doesn’t have these Gemfiles, you can omit bundle exec and just run jekyll serve. When you run bundle exec jekyll serve, Bundler uses the gems and versions as specified in Gemfile. lock to ensure your Jekyll site builds with no compatibility or dependency conflicts. For more information about how to use Bundler in your Jekyll project, this tutorial should provide answers to the most common questions and explain how to get up and running quickly. "
    }, {
    "id": 22,
    "url": "http://localhost:4000/2018/01/12/we-all-wait-for-summer.html",
    "title": "We all wait for summer",
    "body": "2018/01/12 - As I engage in the so-called “bull sessions” around and about the school, I too often find that most college men have a misconception of the purpose of education. Most of the “brethren” think that education should equip them with the proper instruments of exploitation so that they can forever trample over the masses. Still others think that education should furnish them with noble ends rather than means to an end. It seems to me that education has a two-fold function to perform in the life of man and in society: the one is utility and the other is culture. Education must enable a man to become more efficient, to achieve with increasing facility the ligitimate goals of his life. "
    }, {
    "id": 23,
    "url": "http://localhost:4000/2018/01/12/tree-of-codes.html",
    "title": "Tree of Codes",
    "body": "2018/01/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original — which sees Little Red Riding Hood being gobbled up as well as her grandmother — is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. "
    }, {
    "id": 24,
    "url": "http://localhost:4000/2018/01/12/red-riding.html",
    "title": "Red Riding Hood",
    "body": "2018/01/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original — which sees Little Red Riding Hood being gobbled up as well as her grandmother — is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 25,
    "url": "http://localhost:4000/2018/01/12/press-and-education.html",
    "title": "Press and education",
    "body": "2018/01/12 - Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 26,
    "url": "http://localhost:4000/2018/01/12/options-for-creating-new-site-with-jekyll.html",
    "title": "Options for creating a new site with Jekyll",
    "body": "2018/01/12 - jekyll new &lt;PATH&gt; installs a new Jekyll site at the path specified (relative to current directory). In this case, Jekyll will be installed in a directory called myblog. Here are some additional details:  To install the Jekyll site into the directory you’re currently in, run jekyll new . If the existing directory isn’t empty, you can pass the –force option with jekyll new . –force.  jekyll new automatically initiates bundle install to install the dependencies required. (If you don’t want Bundler to install the gems, use jekyll new myblog --skip-bundle. ) By default, the Jekyll site installed by jekyll new uses a gem-based theme called Minima. With gem-based themes, some of the directories and files are stored in the theme-gem, hidden from your immediate view.  We recommend setting up Jekyll with a gem-based theme but if you want to start with a blank slate, use jekyll new myblog --blank To learn about other parameters you can include with jekyll new, type jekyll new --help. "
    }, {
    "id": 27,
    "url": "http://localhost:4000/2018/01/12/never-stopped-worrying-never-loved-bomb.html",
    "title": "Never stopped worrying or loving the bomb",
    "body": "2018/01/12 -  I’ve been through fire and water, I tell you! From my earliest pebblehood the wildest things you could imagine have been happening to this world of ours, and I have been right in the midst of them. So begins Hallam Hawksworth’s The Strange Adventures of a Pebble. Written in the 1920s, the book was part of a series which also included The Adventures of a Grain of Dust and A Year in the Wonderland of Trees, all of which were supposed to introduce children to the world of Natural Sciences. In each of them, Hawksworth personifies the natural object he is exploring, and using a mixture of folk tales, scientific facts and colloquial, friendly explanations guides the reader through the history of the natural world. It’s a real thrill of a ride, dramatizing the life cycle of supposedly dull things. The Adventures of a Grain of Dust begins even more loudly than Pebble: I don’t want you to think that I’m boasting, but I do believe I’m one of the greatest travellers that ever was; and if anybody, living or dead, has ever gone through with more than I have I’d like to hear about it. Hallam Hawksworth was the pen-name of teacher Francis Blake Atkinson. He was married to the author Eleanor Stackhouse Atkinson, author of the children’s classic Greyfriars Bobby, which was based on the (supposedly) true story of a Scottish dog who spent fourteen years guarding his masters grave. The couple were both committed to education and published a weekly magazine for Chicago high school students called The Little Chronicle, as well as working for Encyclopaedia companies later in life. "
    }, {
    "id": 28,
    "url": "http://localhost:4000/2018/01/12/is-intelligence-enough.html",
    "title": "External Featured Image",
    "body": "2018/01/12 - Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 29,
    "url": "http://localhost:4000/2018/01/11/quick-start-guide.html",
    "title": "Let's test spoilers",
    "body": "2018/01/11 - Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that gave away the film’s entire plot twist premise. As in many similar films, such as Jacob’s Ladder (1990), Soul Survivors (2001), and The Butterfly Effect (2004), events and people were thoroughly distorted and confused because the protagonist was at the point of death. The tagline was misleading: “When You Don’t Have a Memory, How Can You Remember Who to Trust?” The mind-warping film opened with a hospital patient Simon Cable (Ryan Phillippe) awakening in a hospital with little knowledge (amnesia perhaps?) of what had happened, and why he was there, etc. He was told by attending Dr. Jeremy Newman (Stephen Rea) that it was July 29, 2002 (Simon thought it was the year 2000 - he was confused - he heard a doctor say 20:00 hours!) and that he had died for two minutes from cardiac arrest following the near-fatal accident – but he had been revived (“You’re as good as new”). Dr. Newman: “Simon, this is the 29th of July. The year is 2002. And your wife, whose name is Anna, is waiting outside. ” (The doctor left off four crucial additional words, revealed in the film’s ending. ) (Spoiler: Simon had died and was not resuscitated!). A major clue to everything that truly happened was the scene that played next under the credits - hospital staff failed to bring a patient back to life with a defibrillator after a car accident. Chest compressions failed and there was no pulse. A second major clue was provided by hospital orderly Travis (Stephen Graham): Everybody dies. No mystery there. But why and how everyone dies. Now, there’s a mystery worth solving. Probably the biggest mystery there is. So how do we do spoilers?: 1&lt;span class= spoiler &gt;My hidden paragraph here. &lt;/span&gt;"
    }, {
    "id": 30,
    "url": "http://localhost:4000/2018/01/11/customer-service.html",
    "title": "Inception Movie",
    "body": "2018/01/11 - Review products, books, movies, restaurant and anything you like on your Jekyll blog with Mediumish! JSON-LD ready for review property. How to use?: It’s actually really simple! Add the rating in your YAML front matter. It also supports halfs: 12345678910---layout: posttitle:  Inception Movie author: johncategories: [ Jekyll, tutorial ]tags: [red, yellow]image: assets/images/11. jpgdescription:  My review of Inception movie. Actors, directing and more.  rating: 4. 5---"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});