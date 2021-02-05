<template>
  <div class="cont">
    <select>
      <option value="saint-petersburg">Санкт-Петербург</option>
      <option value="moscow">Москва</option>
    </select>
    <Arrow class="arrow" />
  </div>
</template>

<script>
import Arrow from '@/components/UI/IconsSvg/Arrow'
export default {}
</script>

<style scoped>
.cont {
  flex-shrink: 0;
}

select {
  width: 125px;
  border: 0;
  background: 0;
  color: white;
  line-height: 1;
}

.arrow {
  position: relative;
  transform: rotate(-90deg);
  top: 2px;
}
</style>
