<template>
  <main>
    <Banner />
    <NewItems />
  </main>
</template>

<script>
import Banner from '@/components/MainPage/Banner'
import NewItems from '@/components/MainPage/NewItems'
import { gsap } from 'gsap'

export default {
  components: {
    Banner,
    NewItems,
  },
  mounted() {
    gsap.fromTo('main', { opacity: 0 }, { opacity: 1, duration: 1 })
  },
}
</script>

<style scoped></style>
