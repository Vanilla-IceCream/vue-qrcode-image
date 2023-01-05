<script lang="ts" setup>
import { ref } from 'vue';
import QrcodeImage from '../vue-qrcode-image';

const qrcode = ref('https://www.npmjs.com/search?q=vue-qrcode-image');
</script>

<template>
  <QrcodeImage :value="qrcode" />
</template>
