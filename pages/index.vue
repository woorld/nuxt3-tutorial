<template>
  <h1>Main Page</h1>
  <h2>{{ $hello('Nuxt3') }}</h2>
  <!-- assetsの画像パスの指定は頭に~または@をつける -->
  <img src="@/assets/favicon.ico" alt="Nuxt icon assets">
  <!-- publicの画像パスには@や~は不要 -->
  <img src="/favicon.ico" alt="Nuxt icon public">
  <button @click="onClickShowCoupon">クーポンコードを表示</button>
  <!-- Lazyを頭につけることで表示時にダウンロードされるようになる -->
  <LazyCoupon v-if="isShowCoupon" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import '@/assets/css/style.css';

const isShowCoupon = ref(false);
const onClickShowCoupon = () => {
  isShowCoupon.value = true;
}

const { $hello } = useNuxtApp();
</script>

<style scoped>
@import '@/assets/css/style.css';
</style>
