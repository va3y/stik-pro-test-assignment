<template>
  <transition name="swipe">
    <div>
      <SecondLevelHeader @goBack="$store.commit('changeSmMenuPage', 'root')" />
      <ul>
        <li>
          <a href="/">Оплата и доставка</a>
        </li>
        <li>
          <a href="/">Возврат товара</a>
        </li>
        <li>
          <a href="/">Как оформить заказ</a>
        </li>
        <li>
          <a href="/"> f.a.q</a>
        </li>
      </ul>
    </div></transition
  >
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
