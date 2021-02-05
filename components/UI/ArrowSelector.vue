<template>
  <div>
    <Arrow class="arrow arrow-1" @click="$emit('goBack')" />
    <Arrow class="arrow arrow-2" @click="$emit('goNext')" />
  </div>
</template>

<script>
/* eslint-disable */
import Arrow from '@/components/UI/IconsSvg/Arrow' // eslint-disable-line no-unused-vars

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

.arrow {
  cursor: pointer;
  color: gray;
  filter: brightness(0.8);
}

.arrow:hover {
  filter: brightness(3);
}
</style>
