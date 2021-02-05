<template>
  <nav>
    <ul>
      <li>
        <a href="/">New</a>
      </li>
      <li @mouseenter="$store.commit('openCatalog')">Каталог</li>
      <li>
        <a href="/"> Скоро</a>
      </li>
      <li>
        <a href="/"> Скидки</a>
      </li>
      <li>
        <a href="/"> Lookbook</a>
      </li>
      <li>
        <a href="/"> Сертификаты</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
nav {
  width: 550px;
}

ul {
  width: 100%;
  display: flex;
}

li {
  cursor: pointer;
  margin-right: 4%;
}
</style>
