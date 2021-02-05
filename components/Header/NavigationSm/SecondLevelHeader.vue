<template>
  <div class="header-block" @click="$store.commit('changeSmMenuPage', 'root')">
    <div class="back-button">
      <Arrow class="arrow" />
      <span class="back-text"> Назад </span>
    </div>
  </div>
</template>

<script>
import Arrow from '~/components/UI/IconsSvg/Arrow.vue'
export default {
  components: {
    Arrow,
  },
}
</script>

<style scoped>
.back-text {
  margin-left: 10px;
}
.back-button {
  cursor: pointer;
}
</style>
