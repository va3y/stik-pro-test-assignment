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
  justify-content: space-around;
  align-self: center;
  height: 40%;
  width: 35px;
  cursor: pointer;
}

.bar {
  width: 90%;
  height: 1px;
  background-color: white;
}
</style>
