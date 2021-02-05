<template>
  <transition name="menu-open">
    <div class="nav-box" @mouseleave="$store.commit('closeCatalog')">
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
        <div>
          <div class="subtitle">
            <div class="">winter 20</div>
            <div class="dash"></div>
          </div>
          <h2>Домашняя капсула</h2>
        </div>
      </div>
    </div>
  </transition>
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
  z-index: 10;
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
  height: 350px;
  margin-top: 40px;
  margin-left: calc(23vw + 60px);
  column-gap: 40%;
}

li {
  padding: 15px 0px;
}

h2 {
  text-transform: uppercase;
  margin-top: 32px;
  letter-spacing: 0.05em;
}

.catalog-card {
  background: url('~assets/images/white-dress.png') no-repeat;
  background-size: cover;
  opacity: 1;
  width: 30%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 86px;
  padding-left: 40px;
}

.dash {
  width: 20px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
}

.subtitle {
  display: flex;
  align-items: center;
  column-gap: 15px;
}
</style>
