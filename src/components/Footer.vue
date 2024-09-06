<template>
  <footer
    id="Footer"
    class="max-w-7xl block mx-4 px-4 pt-7 pb-6 text-white md:flex md:mx-auto md:px-20 md:justify-between md:items-end md:pt-[49px] md:pb-[46px]"
    :class="CSS_ANIMATION">
    <div id="company-info" class="flex flex-col transition-all">
      <a href="/" class="mb-8">
        <div class="flex gap-4 text-sm font-Pretendard font-bold">
          <img src="/amuz/amuz01.png" alt="Amuz" class="h-[17px]" />
          <p>{{ CONSTANTS_COMPANY.NAME }}</p>
        </div>
      </a>
      <ul class="font-Pretendard mb-2 text-sm md:text-base">
        <li class="flex gap-3 items-center">
          <span>대표자 : {{ CONSTANTS_COMPANY.CEO }}</span>
          <span class="w-[1px] h-2 bg-gray" />
          <span id="bording"
            >사업자 등록 번호 : {{ CONSTANTS_COMPANY.BUSINESS_NUM }}</span
          >
        </li>
        <li>
          <span>Location : {{ CONSTANTS_COMPANY.LOCATION }}</span>
        </li>
      </ul>
      <ul class="flex gap-6 font-Pretendard text-sm">
        <!-- TODO small device에서 E-mail 다음 줄 바꿈 처리 -->
        <li>E-mail. {{ CONSTANTS_COMPANY.EMAIL }}</li>
        <li>T. {{ CONSTANTS_COMPANY.PHONE }}</li>
        <li>F. {{ CONSTANTS_COMPANY.FAX }}</li>
      </ul>
    </div>
    <div id="official-sns" class="pt-6 md:pt-0">
      <ul class="flex gap-4 md:gap-8 items-center text-sm md:text-base">
        <li>
          <a :href="SNS.BLOG.URL">
            <img :src="SNS.BLOG.ICON_SRC" :alt="SNS.BLOG.ALT" />
          </a>
        </li>
        <li>
          <a :href="SNS.INSTAGRAM.URL">
            <img :src="SNS.INSTAGRAM.ICON_SRC" :alt="SNS.INSTAGRAM.ALT" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import blogIcon from '../assets/blogIcon.svg';
import instagramIcon from '../assets/instagramIcon.svg';

const CONSTANTS_COMPANY = {
  NAME: '(주)아뮤즈',
  CEO: '이우진',
  BUSINESS_NUM: '871-81-007755',
  LOCATION: '부산광역시 부산진구 중앙대로 623, 3F~4F',
  EMAIL: 'amuz@amuz.co.kr',
  PHONE: '02.1833.5770',
  FAX: '070.7575.3852',
};

const SNS = {
  BLOG: {
    ICON_SRC: blogIcon,
    URL: 'https://blog.naver.com/amuz_official',
    ALT: 'amuz official blog',
  },
  INSTAGRAM: {
    ICON_SRC: instagramIcon,
    URL: 'https://www.instagram.com/amuz_official/',
    ALT: 'amuz official instagram',
  },
};

const CSS_ANIMATION = 'transition-all ease-in-out duration-500';
</script>

<style lang="scss" scoped></style>
