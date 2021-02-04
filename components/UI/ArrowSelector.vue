<template>
  <div>
    <Arrow class="arrow arrow-1" />
    <Arrow class="arrow arrow-2" />
  </div>
</template>

<script>
// eslint-disable-line no-unused-vars
import Arrow from '@/components/UI/IconsSvg/Arrow'

export default {
  components: {
    Arrow,
  },
}
</script>

<style scoped>
.arrow-1 {
  transform: scale(2);
  margin-right: 40px;
  margin-left: 3px;
}

.arrow-2 {
  transform: scaleX(-2) scaleY(2);
}
</style>
