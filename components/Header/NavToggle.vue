<template>
  <div class="drawer-toggle" @click="$emit('toggleNav')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  height: 17px;
  width: 30px;
  cursor: pointer;
}

.bar {
  width: 100%;
  height: 1px;
  background-color: white;
}
</style>
