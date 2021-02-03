<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header/Header'

export default {
  components: {
    Header,
  },
  data() {
    return {
      showNav: false,
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

html {
  font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  color: white;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  border: 1px solid white;
  background: none;
  padding: 10px 50px 10px 50px;
  color: white;
}
</style>
