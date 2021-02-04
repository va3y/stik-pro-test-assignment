<template>
  <transition name="menu-open">
    <div class="nav-box">
      <nav>
        <ul>
          <li>Смотреть все</li>
          <li>Платья</li>
          <li>Корсеты и топы</li>
          <li>Рубашки и блузы</li>
          <li>Жакеты и жилеты</li>
          <li>Брюки</li>
          <li>Юбки</li>
          <li>Комбинезоны</li>
          <li>Комплекты</li>
          <li>Свитшоты и худи</li>
          <li>Домашняя капсула</li>
          <li>Аксессуары</li>
          <li>Base</li>
        </ul>
      </nav>
      <div class="catalog-card">
        <span>winter 20</span>
        <div class="dash"></div>
        <h2>Домашняя капсула</h2>
      </div>
    </div></transition
  >
</template>

<script>
export default {}
</script>

<style scoped>
.nav-box {
  position: fixed;
  top: 86px;
  left: 0;
  width: 100%;
  height: 437px;
  display: flex;
}

nav {
  width: 70%;
  background: black;
  opacity: 0.95;
}

ul {
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

li {
  padding: 15px 0px;
  text-transform: uppercase;
}

.catalog-card {
  background: url('~assets/images/white-dress.png') no-repeat;
  background-size: cover;
  opacity: 1;
  width: 30%;
}
</style>
