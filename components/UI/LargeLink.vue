<template>
  <a :href="link">{{ title }}</a>
</template>

<script>
export default {
  props: {
    link: { type: String, default: 'Смотреть' },
    title: { type: String, default: '/' },
  },
}
</script>

<style scoped>
a {
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  height: 40px;
  border: 1.5px solid white;
  padding-top: 10px;
}
</style>
