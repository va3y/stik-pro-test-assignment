<template>
  <nav>
    <li>
      <ul>
        Смотреть все
      </ul>
      <ul>
        Платья
      </ul>
      <ul>
        Корсеты и топы
      </ul>
      <ul>
        Рубашки и блузы
      </ul>
      <ul>
        Жакеты и жилеты
      </ul>
      <ul>
        Брюки
      </ul>
      <ul>
        Юбки
      </ul>
      <ul>
        Комбинезоны
      </ul>
      <ul>
        Комплекты
      </ul>
      <ul>
        Свитшоты и худи
      </ul>
      <ul>
        Домашняя капсула
      </ul>
      <ul>
        Аксессуары
      </ul>
      <ul>
        Base
      </ul>
    </li>
    <div class="catalog-card">
      <span>winter 20</span>
      <div class="dash"></div>
      <h2>Домашняя капсула</h2>
    </div>
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
  height: 437px;
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

.catalog-card {
  background: url('~assets/images/white-dress.png');
}
</style>
