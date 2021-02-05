<template>
  <header>
    <NavMenuLg v-show="$store.state.navOpen" class="lg no-margin" />
    <NavMenuSm v-show="$store.state.navOpen" class="sm no-margin" />
    <CatalogLg v-show="$store.state.catalogOpen" class="lg no-margin" />
    <div class="header-content">
      <LogoVector
        v-if="$store.state.smMenuPage === 'root'"
        width="170"
        height="40"
        class="logo"
      />
      <h3 v-else class="second-level-title">{{ getName }}</h3>
      <div class="menu-and-toggle">
        <NavToggle class="nav-toggle" />

        <NavMenuHeaderLg class="lg" />
      </div>

      <div class="right-icons">
        <LocationSelector class="lg location-selector" />
        <LangSelector class="lang-selector" />
        <UserIcon class="lg" />
        <SearchIcon class="search-icon" />
        <StarIcon />
        <ShopIcon />
      </div>
    </div>
  </header>
</template>

<script>
import LogoVector from '@/components/UI/LogoVector'
import SearchIcon from '@/components/UI/IconsSvg/SearchIcon'
import StarIcon from '@/components/UI/IconsSvg/StarIcon'
import ShopIcon from '@/components/UI/IconsSvg/ShopIcon'
import UserIcon from '@/components/UI/IconsSvg/UserIcon.vue'

import LangSelector from '@/components/UI/LangSelector.vue'
import LocationSelector from '@/components/UI/LocationSelector'
import NavMenuHeaderLg from '@/components/Header/NavigationLg/NavMenuHeaderLg'
import NavMenuLg from '@/components/Header/NavigationLg/NavMenuLg'
import CatalogLg from '@/components/Header/NavigationLg/CatalogLg'
import NavMenuSm from '@/components/Header/NavigationSm/NavMenuSm'

export default {
  components: {
    LogoVector,
    LocationSelector,
    LangSelector,
    NavMenuLg,
    NavMenuSm,
    CatalogLg,
    NavMenuHeaderLg,
    SearchIcon,
    StarIcon,
    ShopIcon,
    UserIcon,
  },
  computed: {
    getName() {
      const name = this.$store.state.smMenuPage
      if (name === 'catalog') return 'Каталог'
      if (name === 'buyersInfo') return 'Покупателям'
      return ''
    },
  },
  mounted() {
    this.makeTransparentOnScroll()
  },
  methods: {
    makeTransparentOnScroll() {
      window.onscroll = () => {
        if (document.documentElement.scrollTop >= 150) {
          document.getElementById('header-content').style.background =
            'rgba(0, 0, 0, 0.5)'
        } else {
          document.getElementById('header-content').style.background =
            'rgba(0, 0, 0, 1)'
        }
      }
    },
  },
}
</script>

<style scoped>
.header-content {
  position: fixed;
  background-color: black;
  height: var(--header-height);
  width: 100%;
  padding: 0px 2.5%;
  display: flex;
  align-items: center;
  z-index: 20;
}

.right-icons {
  display: flex;
  align-items: center;
  margin-left: auto;
  width: 25%;
  justify-content: space-between;
  flex-shrink: 5;
}

.nav-toggle {
  display: flex;
  justify-content: flex-end;
  width: max-content;
  margin-right: 30px;
}

.menu-and-toggle {
  position: absolute;
  left: 23%;
  margin-left: auto;
  display: flex;
  align-items: center;
}

.no-margin {
  margin: 0;
}

.second-level-title {
  position: relative;
  margin-left: auto;
  order: 2;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1em;
}

.sm {
  display: none;
}

.logo {
  padding: 0 10px;
}

@media screen and (max-width: 1250px) {
  .location-selector {
    display: none;
  }
}

@media screen and (max-width: 1079px) {
  .header-content {
    padding: 0 5%;
  }
  .sm {
    display: inline;
  }
  .lg {
    display: none;
  }
  .menu-and-toggle {
    margin-left: 0;
    position: static;
  }
  .nav-toggle {
    order: 1;
    margin-left: 0;
  }
  .logo {
    order: 2;
  }
  .right-icons {
    order: 3;
  }
}

@media screen and (max-width: 375px) {
  .search-icon {
    display: none;
  }
}
</style>
