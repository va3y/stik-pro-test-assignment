<template>
  <nav>
    <li>
      <ul>
        New
      </ul>
      <ul @click="$emit('toggleCatalog')">
        Каталог
      </ul>
      <ul>
        Скоро
      </ul>
      <ul>
        Скидки
      </ul>
      <ul>
        Lookbook
      </ul>
      <ul>
        Сертификаты
      </ul>
    </li>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
nav {
  display: inline;
  position: static;
}

@media screen and (max-width: 768px) {
  nav {
    display: none;
  }
}

ul,
li {
  display: inline-block;
  text-transform: uppercase;
}
</style>
