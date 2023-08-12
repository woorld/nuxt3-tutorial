<template>
  <div>
    <h1>useCount TestPage</h1>
    <div>Count: {{ count }}</div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { count, inc, dec } = useCounter(100);
</script>
