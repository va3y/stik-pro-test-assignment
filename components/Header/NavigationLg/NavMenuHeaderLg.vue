<template>
  <nav>
    <ul>
      <li>
        <a href="/">New</a>
      </li>
      <li @mouseover="$emit('toggleCatalog')">Каталог</li>
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
ul {
  width: 100%;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
}

li {
  cursor: pointer;
  font-weight: 600;
  margin: 0 2%;
}
</style>
