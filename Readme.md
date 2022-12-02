https://natonato.github.io/allure-playwright-ghpages-test

1. Playwright 설치 : https://playwright.dev/docs/intro
2. allure-playwright 설치 : https://www.npmjs.com/package/allure-playwright
   `npm i -D @playwright/test allure-playwright`

3. 테스트 브라우저 설치 `npx playwright install`

4. `playwright.config.ts` 파일에 report 수정
   `[['line'], ['allure-playwright']]`
5. allure cli 설치
   `npm install -g allure-commandline --save-dev`
6. playwright 테스트 - allure로 report생성 - open하기 (`npm run o`로 한번에)

# Custom Tab/Widgets 추가 방법

1. Main 브랜치에 Custom Tab/Widgets 파일을 둔다
2. report 생성 이후 allure-history/${Github.run_number}에 폴더가 생기는데, 여기로 복사
3. 필요하다면 data 가공 스크립트 실행해 widget용 데이터 생성
   
   
# 기타

- 20번 이상 실행시 기존 데이터 삭제 확인
  - 우리 데이터는 동영상, trace 등 포함으로 용량이 크니, 20회 테스트 저장하기에 충분한지 용량 체크 필요
  - 이전 테스트에서 동영상 선택적 제거도 되는지?
- 테스트 자체 실패후 배포 진행시 그래프 연속성 끊김
  - 에러처리 좀 더 제대로 해야..?

# 이슈

- 윈도우에선 `set`으로 ALLURE_RESULTS_DIR 지정시 generate에서 폴더를 못찾는 문제 있음
- `allure-report-action`의 URL이 github.com으로 
