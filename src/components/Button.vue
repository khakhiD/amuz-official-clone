<template>
  <a
    :href
    class="group/btn transition-all duration-1000 ease-in-out max-h-fit cursor-pointer">
    <div
      class="align-middle md:max-h-[56px] py-3 px-[30px] border border-white rounded-[30px] inline-block group-hover/btn:bg-white transition duration-300">
      <span
        class="align-middle text-white font-Poppins text-nowrap text-base md:text-xl font-medium group-hover/btn:text-background transition duration-300 leading-none">
        {{ content }}
      </span>
    </div>
    <div
      v-if="hasNoIcon === false"
      :class="[
        'inline-block align-middle p-[10px] rounded-full bg-primary',
        iconType === 'arrow' ? 'hidden md:inline-block' : null,
      ]">
      <div>
        <img
          v-if="iconType === 'arrow'"
          :class="ICON_BY_TYPE.ARROW.BASECLASS"
          :src="ICON_BY_TYPE.ARROW.SRC"
          :alt="ICON_BY_TYPE.ARROW.ALT" />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import arrowIcon from '../assets/arrow.svg';

interface Props {
  content: string;
  color?: 'blue';
  hasNoIcon?: boolean;
  href?: string;
  iconType?: 'arrow' | 'download';
}

// 기본 값을 가진 props 선언
const props = withDefaults(defineProps<Props>(), {
  content: '버튼 이름',
  color: 'blue',
  hasNoIcon: false,
  href: '',
  iconType: 'arrow',
});

// 아이콘 타입 - 확장 가능
const ICON_BY_TYPE = {
  ARROW: {
    SRC: arrowIcon,
    ALT: 'Arrow Icon',
    BASECLASS: 'group-hover/btn:-rotate-45 transition duration-500 ease-in-out',
  },
};

const { content, iconType, hasNoIcon, href } = props;
</script>

<style lang="scss" scoped></style>
