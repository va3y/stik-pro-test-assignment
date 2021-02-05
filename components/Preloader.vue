<template>
  <div class="preload">
    <LogoVector width="60vw" height="60vw" class="logo-preload" />
  </div>
</template>

<script>
import LogoVector from '@/components/UI/LogoVector'
export default {
  components: {
    LogoVector,
  },
}
</script>

<style scoped>
div {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
