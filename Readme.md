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

# Custom Tab/Widgets 추가 방법(진행중)

1. Main 브랜치에 Custom Tab/Widgets 파일을 둔다
2. gh-pages 배포가 완료된 후, ${Github.run_number}로 폴더가 생기는데, 여기로 파일들을 이동한다
   1. 배포 과정에서 진행시 반영 안됨.
   2. 정확히는, gh-pages 브랜치에 main 파일을 옮기고, 폴더 생성 후 복사
3. 변경사항을 푸시한다
   - 위젯에 필요하다면 data(csv,json)으로 필요한 데이터 가공/생성 필요
4. gh-pages는 배포 이후 파일 추가되도 정상 반영됨
5. 현재 식별된 문제점
   - 푸시가 두번 발생해 gh-pages 배포 파이프라인 두번 실행됨
   - 두번째 실행시 첫번째 shutdown으로 시간이 2배걸리진 않지만, 로그가 두개 남음(실패-성공)

# 기타

- 20번 이상 실행시 기존 데이터 삭제 확인
  - 우리 데이터는 동영상, trace 등 포함으로 용량이 크니, 20회 테스트 저장하기에 충분한지 용량 체크 필요
  - 이전 테스트 동영상 제거도 되는지?
- 테스트 자체 실패후 배포 진행시 그래프 연속성 끊김
  - 에러처리 좀 더 제대로 해야..?

# 이슈

- 윈도우 `set`으로 ALLURE_RESULTS_DIR 지정시 generate에서 폴더를 못찾는 문제 있음
