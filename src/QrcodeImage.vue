<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Encoder, Byte } from '@nuintun/qrcode';

type RGB = [R: number, G: number, B: number];

const props = defineProps<{
  value?: string;
  size?: number;
  margin?: number;
  foreground?: RGB;
  background?: RGB;
}>();

const imgSrc = ref();

watch(
  () => props.value,
  (val) => {
    if (val) {
      const encoder = new Encoder();
      const qrcode = encoder.encode(new Byte(val));

      imgSrc.value = qrcode.toDataURL(props.size || 6, {
        margin: props.margin || 24,
        foreground: props.foreground,
        background: props.background,
      });
    }
  },
  { immediate: true },
);
</script>

<template>
  <img v-bind="$attrs" :src="imgSrc" />
</template>
