<template>
  <footer
    id="Footer"
    class="max-w-7xl block mx-4 md:flex md:mx-20 md:justify-between md:items-end text-white pt-[50px] pb-[45px]">
    <div id="Company" class="transition-all">
      <a href="">
        <div>amuz</div>
        <p>{{ CONSTANTS_COMPANY.NAME }}</p>
      </a>
      <ul>
        <li>
          <span>대표자 : {{ CONSTANTS_COMPANY.CEO }}</span>
        </li>
        <li>
          <span>Location : {{ CONSTANTS_COMPANY.LOCATION }}</span>
        </li>
      </ul>
      <small>
        <ul>
          <li>E-mail. {{ CONSTANTS_COMPANY.EMAIL }}</li>
          <li>T. {{ CONSTANTS_COMPANY.PHONE }}</li>
          <li>F. {{ CONSTANTS_COMPANY.FAX }}</li>
        </ul>
      </small>
    </div>
    <div id="SNS">
      <ul>
        <li>blog</li>
        <li>instagram</li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const CONSTANTS_COMPANY = {
  NAME: `(주)아뮤즈`,
  CEO: `이우진`,
  BUSINESS_NUM: `871-81-007755`,
  LOCATION: `부산광역시 부산진구 중앙대로 623, 3F~4F`,
  EMAIL: `amuz@amuz.co.kr`,
  PHONE: `02.1833.5770`,
  FAX: `070.7575.3852`,
};
</script>

<style lang="scss" scoped></style>
