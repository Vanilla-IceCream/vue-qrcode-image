<script lang="ts" setup>
import { ref } from 'vue';
import QrcodeImage from 'vue-qrcode-image';

const qrcode = ref('https://www.npmjs.com/search?q=vue-qrcode-image');
</script>

<template>
  <div class="flex flex-col p-8 gap-4">
    <h1 class="text-4xl font-extrabold">vue-qrcode-image</h1>

    <section class="space-y-2">
      <h2 class="text-3xl font-bold">Basic</h2>
      <QrcodeImage :value="qrcode" class="border rounded-lg" />
    </section>

    <section class="space-y-2">
      <h2 class="text-3xl font-bold">Size</h2>

      <div class="flex gap-4">
        <div>
          <div>:size="5"</div>
          <QrcodeImage :value="qrcode" :size="5" class="border rounded-lg" />
        </div>
        <div>
          <div>:size="6" (default)</div>
          <QrcodeImage :value="qrcode" class="border rounded-lg" />
        </div>
        <div>
          :size="7"
          <QrcodeImage :value="qrcode" :size="7" class="border rounded-lg" />
        </div>
      </div>
    </section>

    <section class="space-y-2">
      <h2 class="text-3xl font-bold">Margin</h2>

      <div class="flex gap-4">
        <div>
          <div>:margin="12"</div>
          <QrcodeImage :value="qrcode" :margin="12" class="border rounded-lg" />
        </div>
        <div>
          <div>:margin="18"</div>
          <QrcodeImage :value="qrcode" :margin="18" class="border rounded-lg" />
        </div>
        <div>
          <div>:margin="24" (default)</div>
          <QrcodeImage :value="qrcode" class="border rounded-lg" />
        </div>
      </div>
    </section>

    <section class="space-y-2">
      <h2 class="text-3xl font-bold">Foreground</h2>

      <div class="flex gap-4">
        <div>
          <div>:foreground="[99, 102, 241]"</div>
          <QrcodeImage :value="qrcode" :foreground="[99, 102, 241]" class="border rounded-lg" />
        </div>
      </div>
    </section>

    <section class="space-y-2">
      <h2 class="text-3xl font-bold">Background</h2>

      <div class="flex gap-4">
        <div>
          <div>:background="[99, 102, 241]"</div>
          <QrcodeImage :value="qrcode" :background="[99, 102, 241]" class="border rounded-lg" />
        </div>
      </div>
    </section>
  </div>
</template>
