<template>
  <main>
    <PreLoader v-if="this.$store.state.isLoading" />
    <Banner />
    <NewItems />
  </main>
</template>

<script>
import Banner from '@/components/MainPage/Banner'
import NewItems from '@/components/MainPage/NewItems'
import GsapAnimatiions from '@/assets/styles/GsapAnimations'
import PreLoader from '@/components/Preloader'

export default {
  components: {
    Banner,
    NewItems,
    PreLoader,
  },
  mounted() {
    GsapAnimatiions.pageOpen()
    GsapAnimatiions.loadParallax()
    setTimeout(() => {
      this.$store.commit('closePreload')
    }, 3000)
  },
}
</script>

<style scoped></style>
