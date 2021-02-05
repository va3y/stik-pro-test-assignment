<template>
  <transition name="menu-open">
    <nav>
      <ul>
        <li>О нас</li>
        <li>Instastore</li>
        <li>Вакансии</li>
        <li>Мы в Instagram</li>
        <li>Возврат товара</li>
        <li>Как оформить заказ</li>
        <li>Оплата и доставка</li>
        <li>f.a.q</li>
      </ul>
    </nav>
  </transition>
</template>

<script>
export default {}
</script>

<style scoped>
nav {
  position: fixed;
  top: 86px;
  left: 0;
  background: black;
  opacity: 0.95;
  width: 100%;
  height: 303px;
  padding: 40px 0px;
  z-index: 10;
}

ul {
  margin-left: calc(23vw + 60px);
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

li {
  padding: 15px 0px;
}
</style>
