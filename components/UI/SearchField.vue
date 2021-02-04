<template>
  <input type="search" placeholder="Поиск по сайту" />
</template>

<script>
export default {}
</script>

<style scoped>
input {
  background-color: rgba(0, 0, 0, 0);
  color: white;
  display: flex;
  width: 140px;
}

input::placeholder {
  font-size: 14px;
  color: white;
  opacity: 1;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

input:focus::placeholder {
  color: transparent;
}
</style>
