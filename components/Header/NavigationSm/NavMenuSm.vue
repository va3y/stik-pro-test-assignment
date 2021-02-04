<template>
  <nav>
    <SecondLevelCatalog
      v-if="showCatalog"
      @goBack="
        showCatalog = false
        showRoot = true
      "
    />
    <SecondLevelBuyersInfo
      v-if="showBuyersInfo"
      @goBack="
        showBuyersInfo = false
        showRoot = true
      "
    />
    <NavRoot
      v-if="showRoot"
      @openCatalog="
        showCatalog = !showCatalog
        showRoot = false
      "
      @openBuyersInfo="
        showBuyersInfo = !showBuyersInfo
        showRoot = false
      "
    />
  </nav>
</template>

<script>
import NavRoot from '@/components/Header/NavigationSm/NavRoot'
import SecondLevelCatalog from '@/components/Header/NavigationSm/SecondLevelCatalog'
import SecondLevelBuyersInfo from '@/components/Header/NavigationSm/SecondLevelBuyersInfo'
export default {
  components: {
    NavRoot,
    SecondLevelCatalog,
    SecondLevelBuyersInfo,
  },
  props: {
    displayNav: Boolean,
  },
  data() {
    return {
      showCatalog: false,
      showBuyersInfo: false,
      showRoot: true,
    }
  },
  // отключить прокрутку, если меню открылось на телефоне
  watch: {
    displayNav(newVal) {
      const isSm = document.documentElement.clientWidth <= 1079
      if (newVal && isSm) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
  },
}
</script>

<style scoped>
nav >>> ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

nav >>> li {
  height: 50px;
  text-align: center;
  text-transform: uppercase;
  width: 90%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

nav >>> ul:first-child {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

nav >>> .header-block {
  margin: auto;
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  position: fixed;
  left: 0;
  top: var(--header-height);
  width: 100%;
  height: calc(100vh - var(--header-height));
  z-index: 99999;
  overflow: scroll;

  /* точно 93%? */
  background: rgba(0, 0, 0, 0.93);
}
</style>
