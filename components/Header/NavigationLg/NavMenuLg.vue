<template>
  <nav>
    <li>
      <ul>
        О нас
      </ul>
      <ul>
        Instastore
      </ul>
      <ul>
        Вакансии
      </ul>
      <ul>
        Мы в Instagram
      </ul>
      <ul>
        Возврат товара
      </ul>
      <ul>
        Как оформить заказ
      </ul>
      <ul>
        Оплата и доставка
      </ul>
      <ul>
        f.a.q
      </ul>
    </li>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
nav {
  position: absolute;
  top: 86px;
  background: black;
  opacity: 0.95;
  width: 100%;
  height: 303px;
  padding: 40px 0px;
  display: flex;
  justify-content: center;
}

li {
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

ul {
  padding: 15px 0px;
  text-transform: uppercase;
}
</style>
