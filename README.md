# vue-qrcode-image

A Vue component for QR code generation.

## Installation

Install `vue-qrcode-image` with your favorite package manager:

```sh
$ npm i vue-qrcode-image
# or
$ yarn add vue-qrcode-image
# or
$ pnpm i vue-qrcode-image
# or
$ bun add vue-qrcode-image
```

## Usage

### Basic

```vue
<script lang="ts" setup>
import { ref } from 'vue';
import QrcodeImage from 'vue-qrcode-image';

const qrcode = ref('https://www.npmjs.com/search?q=vue-qrcode-image');
</script>

<template>
  <QrcodeImage :value="qrcode" />
</template>
```

### Size

- Type: `number`
- Default: `6`

```html
<QrcodeImage :value="qrcode" :size="5" />
```

### Margin

- Type: `number`
- Default: `24`

```html
<QrcodeImage :value="qrcode" :margin="18" />
```

### Foreground

- Type: `[R: number, G: number, B: number]`
- Default: `[0, 0, 0]`

```html
<QrcodeImage :value="qrcode" :foreground="[99, 102, 241]" />
```

### Background

- Type: `[R: number, G: number, B: number]`
- Default: `[255, 255, 255]`

```html
<QrcodeImage :value="qrcode" :background="[99, 102, 241]" />
```
