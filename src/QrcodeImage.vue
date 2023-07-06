<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Encoder } from '@nuintun/qrcode';

const props = defineProps<{
  value?: string;
  size?: number;
  margin?: number;
}>();

const imgSrc = ref();

watch(
  () => props.value,
  (val) => {
    if (val) {
      const qrcode = new Encoder();
      qrcode.write(val).make();
      imgSrc.value = qrcode.toDataURL(props.size, props.margin);
    }
  },
  { immediate: true },
);
</script>

<template>
  <img v-bind="$attrs" :src="imgSrc" />
</template>
