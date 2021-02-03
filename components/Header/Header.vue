<template>
  <header>
    <LogoVector class="logo" />
    <NavToggle @toggleNav="displayNav = !displayNav" />
    <NavMenuHeaderLg @toggleCatalog="displayCatalog = !displayCatalog" />
    <LocationSelector />
    <LangSelector />
    <div>
      <SearchIcon />
      <StarIcon />
      <ShopIcon />
    </div>
    <NavMenuLg v-show="displayNav" />
    <CatalogLg v-show="displayCatalog" />
  </header>
</template>

<script>
import LogoVector from '@/components/UI/LogoVector'
import SearchIcon from '@/components/UI/SearchIcon'
import StarIcon from '@/components/UI/StarIcon'
import ShopIcon from '@/components/UI/ShopIcon'

import NavToggle from '@/components/Header/NavToggle'
import LangSelector from '@/components/Header/LangSelector.vue'
import LocationSelector from '@/components/Header/LocationSelector'
import NavMenuHeaderLg from '@/components/Header/NavigationLg/NavMenuHeaderLg'
import NavMenuLg from '@/components/Header/NavigationLg/NavMenuLg'
import CatalogLg from '@/components/Header/NavigationLg/CatalogLg'

export default {
  components: {
    NavToggle,
    LogoVector,
    LocationSelector,
    LangSelector,
    NavMenuLg,
    CatalogLg,
    NavMenuHeaderLg,
    SearchIcon,
    StarIcon,
    ShopIcon,
  },
  data() {
    return {
      displayNav: false,
      displayCatalog: true,
    }
  },
}
</script>

<style scoped>
header {
  display: flex;
  background-color: black;
  height: 86px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .lg-menu {
    display: none;
  }
}

lg-menu {
}
</style>
