---
layout: post
title: Microsoft Teams 오류 발생
search: true
category: ["Service"]
tag: ["Teams"]
---

안녕하세요.  
본 포스팅에서는 Microsoft Teams 오류 발생 시 해결법에 대해 설명해드리도록 하겠습니다🙂.  
  
  
  
  
<h2>Microsoft Teams 오류</h2>
![1](/assets/img/post/20230424001.PNG)
Microsoft Teams를 이용하다보면, 간헐적으로 오류가 발생하곤 합니다.  
로그인이 되지 않는다던지, 특정 버튼이 동작하지 않거나 보이지 않는다던지 등등...  
  
오류 발생 시 조치할 수 있는 일차적인 방법에 대해 소개해드립니다.  
  
  
  
  
<h2>Microsoft Teams 캐시/자격증명 제거 방법</h2>  
Microsoft Customer Service and Support로부터 케이스 오픈하여 회신받은 내용을 공유드립니다.  
앱 캐시 및 PC 내 자격증명 제거만으로, 어느정도 증상은 개선할 수 있습니다.  
  
1. Teams 데스크톱 앱을 완전히 종료합니다.  
2. 파일 탐색기(윈도우키+R)에서, "%AppData%\Microsoft" 경로에 접근한 뒤 "Teams" 폴더를 삭제합니다.  
3. 파일 탐색기에서, "%LocalAppData%\Microsoft" 경로에 접근한 뒤, "Teams" 폴더를 삭제합니다.  
![2](/assets/img/post/20230424002.gif)  
4. 제어판의 자격 증명 관리자에서 Windows 자격 증명 탭의 일반 자격 증명을 모두 제거합니다.  
![3](/assets/img/post/20230424003.gif)  
5. Windows 설정 - 계정 - 학교 또는 회사 액세스에 연결된 모든 계정을 연결 끊기 처리합니다.  
6. PC를 재부팅 합니다.  
7. 최신 버전의 Teams를 다운로드 받아서 설치합니다.  
https://teams.microsoft.com/download  
  
  
  
  
<h2>그 외 조치 방법</h2>  
Office 프로그램은 타 프로그램(보안 프로그램 등)으로부터 간섭을 받을 수 있습니다.  
실제 운영 시, 사내 보안프로그램에 의해 Office 프로그램이 정상 동작 하지 않는 경우가 있습니다.  
  
Fiddler 로그 분석, Process Monitor 로그 분석 등의 과정을 통해, 오류의 원인에 대한 파악이 가능합니다.  
해당 툴들에 대한 사용 방법은 별도 포스팅에서 소개하도록 하겠습니다.  
  