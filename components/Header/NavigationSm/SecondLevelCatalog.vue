<template>
  <transition name="swipe">
    <div>
      <SecondLevelHeader @goBack="$emit('goBack')" />
      <ul>
        <li>
          <a href="/">Смотреть все</a>
        </li>
        <li>
          <a href="/">Домашняя капсула</a>
        </li>
        <li>
          <a href="/">Корсеты и топы</a>
        </li>
        <li>
          <a href="/"> Платья</a>
        </li>
        <li>
          <a href="/"> Брюки</a>
        </li>
        <li>
          <a href="/"> Рубашки и блузы</a>
        </li>
        <li>
          <a href="/"> Комбинезоны</a>
        </li>
        <li>
          <a href="/"> Комплекты</a>
        </li>
        <li>
          <a href="/"> Юбки</a>
        </li>
        <li>
          <a href="/"> Свитшоты и худи</a>
        </li>
        <li>
          <a href="/"> Аксессуары</a>
        </li>
      </ul>
    </div></transition
  >
</template>

<script>
import SecondLevelHeader from './SecondLevelHeader.vue'
export default {
  components: { SecondLevelHeader },
}
</script>

<style lang="scss" scoped></style>
