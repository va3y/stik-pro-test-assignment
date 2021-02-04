<template>
  <header>
    <LogoVector class="logo" />
    <NavToggle class="nav-toggle" @toggleNav="displayNav = !displayNav" />
    <NavMenuHeaderLg
      class="lg navigation-header"
      @toggleCatalog="displayCatalog = !displayCatalog"
    />
    <NavMenuLg v-show="displayNav" class="lg no-margin" />
    <CatalogLg v-show="displayCatalog" class="lg no-margin" />

    <NavMenuSm
      v-show="displayNav"
      :display-nav="displayNav"
      class="sm no-margin"
    />

    <div class="right-icons">
      <LocationSelector class="lg" />
      <LangSelector class="lang-selector" />

      <UserIcon class="lg" />
      <SearchIcon />
      <StarIcon />
      <ShopIcon />
    </div>
  </header>
</template>

<script>
import LogoVector from '@/components/UI/LogoVector'
import SearchIcon from '@/components/UI/IconsSvg/SearchIcon'
import StarIcon from '@/components/UI/IconsSvg/StarIcon'
import ShopIcon from '@/components/UI/IconsSvg/ShopIcon'

import LangSelector from '@/components/Header/LangSelector.vue'
import LocationSelector from '@/components/Header/LocationSelector'
import NavMenuHeaderLg from '@/components/Header/NavigationLg/NavMenuHeaderLg'
import NavMenuLg from '@/components/Header/NavigationLg/NavMenuLg'
import CatalogLg from '@/components/Header/NavigationLg/CatalogLg'
import NavMenuSm from '@/components/Header/NavigationSm/NavMenuSm'
import UserIcon from '../UI/IconsSvg/UserIcon.vue'

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
  data() {
    return {
      displayNav: false,
      displayCatalog: false,
    }
  },
}
</script>

<style>
:root {
  --header-height: 86px;
}

@media screen and (max-width: 375px) {
  :root {
    --header-height: 50px;
  }
}
</style>

<style scoped>
.right-icons {
  display: flex;
}

.navigation-header {
  flex: 2;
}

.right-icons * {
  margin: 0 9px;
}

.no-margin {
  margin: 0;
}

header {
  position: fixed;
  z-index: 10;
  display: flex;
  background-color: black;
  height: var(--header-height);
  width: 100%;
  justify-content: space-between;
  padding: 0px 28px;
  align-items: center;
}

.sm {
  display: none;
}

.logo {
  padding-top: 4px;
  padding-left: 10px;
}

@media screen and (max-width: 1079px) {
  .sm {
    display: inline;
  }
  .lg {
    display: none;
  }
  .nav-toggle {
    order: 1;
  }
  .logo {
    order: 2;
  }
  .right-icons {
    order: 3;
  }
}
</style>
