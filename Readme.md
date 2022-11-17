1. Playwright 설치 : https://playwright.dev/docs/intro
2. allure-playwright 설치 : https://www.npmjs.com/package/allure-playwright
   `npm i -D @playwright/test allure-playwright`
3. `playwright.config.ts` 파일에 report 수정
   `[['line'], ['allure-playwright']]`
4. allure cli 설치
   `npm install -g allure-commandline --save-dev`
5. playwright 테스트 - allure로 report생성 - open하기

#. 이슈

-   윈도우 `set`으로 ALLURE_RESULTS_DIR 지정시 generate에서 폴더를 못찾는 문제 있음
