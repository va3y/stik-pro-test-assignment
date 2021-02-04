<template>
  <transition name="menu-open">
    <nav class="nav-sm">
      <SecondLevelCatalog
        v-show="showCatalog"
        @goBack="
          showCatalog = false
          showRoot = true
        "
      />
      <SecondLevelBuyersInfo
        v-show="showBuyersInfo"
        @goBack="
          showBuyersInfo = false
          showRoot = true
        "
      />
      <transition name="nav-root">
        <NavRoot
          v-show="showRoot"
          @openCatalog="
            showCatalog = !showCatalog
            showRoot = false
          "
          @openBuyersInfo="
            showBuyersInfo = !showBuyersInfo
            showRoot = false
          "
        />
      </transition>
    </nav>
  </transition>
</template>
"
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
}

nav >>> li a,
nav >>> li div {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  cursor: pointer;
}

nav >>> li:first-of-type {
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
  z-index: 10;
  overflow-y: scroll;
  overflow-x: hidden;

  /* точно 93%? */
  background: rgba(0, 0, 0, 0.93);
}

nav * {
  position: absolute;
  width: 100%;
}
</style>
