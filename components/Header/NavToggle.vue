<template>
  <div class="nav-burger" @click="$emit('toggleNav')">
    <div class="bar first-bar"></div>
    <div class="bar second-bar"></div>
    <div class="bar third-bar"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav-burger {
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
