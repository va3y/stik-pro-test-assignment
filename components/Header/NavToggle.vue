<template>
  <div class="toggle-box" @click="$store.commit('toggleNav')">
    <div v-if="!$store.state.navOpen" class="nav-toggle-burger">
      <div class="bar first-bar"></div>
      <div class="bar second-bar"></div>
      <div class="bar third-bar"></div>
    </div>
    <div v-else class="nav-toggle-cross">
      <CrossIcon width="20" height="20" />
    </div>
  </div>
</template>

<script>
import CrossIcon from '@/components/UI/IconsSvg/CrossIcon'
export default {
  components: {
    CrossIcon,
  },
}
</script>

<style scoped>
.toggle-box {
  width: 30px;
}
.nav-toggle-burger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  height: 17px;
  width: 30px;
  cursor: pointer;
}

.nav-toggle-cross {
  height: 20px;
  width: 25px;
  cursor: pointer;
}

.bar {
  width: 100%;
  height: 1px;
  background-color: white;
}
</style>
