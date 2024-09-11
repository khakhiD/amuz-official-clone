<div align="center">

# AMUZ 공식 사이트 랜딩 페이지 클로닝

</div>

![alt text](/public/readme-thumbnail.png)

> [배포 사이트 링크](https://amuz-official-clone.vercel.app/)

<br>

## 🚀 프로젝트 소개

<div align="center">
<pre>

아뮤즈 플랫폼 서비스팀 인턴십 첫 과제
**[아뮤즈 공식 홈페이지](https://amuz.co.kr) 랜딩 페이지 클로닝하기**

</pre>
</div>

### 목표

Vue.js의 선언적인 UI 개발 방법을 익힙니다.

### 요구사항 분석

**실제 공식 페이지에 적용된 기술**

- Vue, React, inertia.js
- tailwindcss, styled-components, GSAP
- swiper, lenis, axios
- channel.io
- webpack

<br>

**클로닝에 사용할 기술**

- Vue, Typescript
- tailwindcss, GSAP
- vite

### DOM 구조 예상

- header
  - menu modal
- main
  - section1. Idea
  - section2. Point
  - section3. Work
  - section4. Service
  - section5. Contact
  - fixed conatact button
- footer

### 컴포넌트 추출

- Button
- WorkCard
- ServiceBox
- Header
- Footer
- ChatButton

### 섹션 추출

- IdeaSection.vue
- PointSection.vue
- WorkSection.vue
- SolutionSection.vue
- ContactSection.vue

### 디렉터리 구조

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
 ┃ ┣ DefaultLayout.vue
 ┃ ┗ SectionLayout.vue
 ┣ utils
 ┃ ┗ animations.ts
 ┣ views
 ┃ ┗ LandingPage.vue
 ┣ App.vue
 ┣ main.ts
 ┣ style.css
 ┗ vite-env.d.ts
```
