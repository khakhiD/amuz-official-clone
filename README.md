<div align="center">

# AMUZ 공식 사이트 랜딩 페이지 클로닝

</div>

![alt text](/public/readme-thumbnail.png)

> [배포 사이트 링크](https://amuz-official-clone.vercel.app/)

<br>

## 🚀 프로젝트 소개

<div align="center">
<pre>
아뮤즈 플랫폼 서비스팀 인턴십 과제
<strong><a href="https://amuz.co.kr/" target="_blank">아뮤즈 공식 홈페이지</a> 랜딩 페이지 클로닝하기</strong>
</pre>
</div>

### 목표

- **Vue.js**를 사용하여 정적 사이트 구현 및 배포
- 자바스크립트 애니메이션 라이브러리 **GSAP** 활용, 애니메이션 구현

### 사용한 기술 스택

![Vue](https://img.shields.io/badge/Vue3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white) ![tailwindcss](https://img.shields.io/badge/GreenSock-88CE02?style=for-the-badge&logo=greensock&logoColor=white) ![vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### 실제 사용된 기술 스택

![Vue](https://img.shields.io/badge/Vue3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white) ![React](https://shields.io/badge/react-black?logo=react&style=for-the-badge) ![inertia](https://img.shields.io/badge/Inertia_JS-9553E9?style=for-the-badge&logo=Inertia&logoColor=white) ![tailwindcss](https://img.shields.io/badge/GreenSock-88CE02?style=for-the-badge&logo=greensock&logoColor=white) ![styled-components](https://img.shields.io/badge/styled--components-orange?style=for-the-badge&logo=styled-components&logoColor=white) <br /> ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black) ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) ![Lenis](https://img.shields.io/badge/Lenis-000000?style=for-the-badge&logo=Lenis&logoColor=white) ![Channel.io](https://img.shields.io/badge/Channel.io-0080FF?style=for-the-badge&logo=Channel.io&logoColor=white)

### 디렉터리 구조

- Vue 코드를 용도 별로 `views`, `layouts`, `components`, `components/sections`으로 분리
- GSAP로 구현한 애니메이션 함수를 `utils` 디렉터리로 분리

```plain
 src
 ┣ assets
 ┣ components
 ┃ ┣ sections
 ┃ ┃ ┣ ContactSection.vue
 ┃ ┃ ┣ IdeaSection.vue
 ┃ ┃ ┣ PointSection.vue
 ┃ ┃ ┣ SolutionSection.vue
 ┃ ┃ ┗ WorkSection.vue
 ┃ ┣ Button.vue
 ┃ ┣ ChatButton.vue
 ┃ ┣ Footer.vue
 ┃ ┣ Header.vue
 ┃ ┣ ServiceBox.vue
 ┃ ┗ WorkCard.vue
 ┣ layouts
 ┃ ┗ DefaultLayout.vue
 ┣ utils
 ┃ ┗ animations.ts
 ┣ views
 ┃ ┗ LandingPage.vue
 ┣ App.vue
 ┣ main.ts
 ┣ style.css
 ┗ vite-env.d.ts
```

<!-- 맥북 깃허브 테스트용 주석 -->
