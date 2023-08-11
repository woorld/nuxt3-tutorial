<template>
  <h1>Main Page</h1>
  <button @click="onClickShowCoupon">クーポンコードを表示</button>
  <!-- Lazyを頭につけることで表示時にダウンロードされるようになる -->
  <LazyCoupon v-if="isShowCoupon" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isShowCoupon = ref(false);
const onClickShowCoupon = () => {
  isShowCoupon.value = true;
}
</script>
