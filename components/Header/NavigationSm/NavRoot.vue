<template>
  <div>
    <div class="header-block">
      <div>
        <PaperPlaneIcon />
        <LocationSelector />
      </div>
      <div>Войти</div>
    </div>
    <ul>
      <li>
        <SearchIcon />
        <SearchField class="search-box" />
      </li>
      <li>
        <a href="/">New</a>
      </li>
      <li>
        <span @click="$emit('openCatalog')"> Каталог </span>
      </li>
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
      <li>
        <a href="/"> О Нас</a>
      </li>
      <li>
        <a href="/"> Instastore</a>
      </li>
      <li>
        <a href="/"> Вакансии</a>
      </li>
      <li>
        <a href="/"> Мы в Instagram</a>
      </li>
      <li>
        <span @click="$emit('openBuyersInfo')"> Покупателям</span>
      </li>
    </ul>
  </div>
</template>

<script>
import LocationSelector from '@/components/Header/LocationSelector'
import SearchIcon from '@/components/UI/IconsSvg/SearchIcon'
import PaperPlaneIcon from '@/components/UI/IconsSvg/PaperPlaneIcon'
import SearchField from '@/components/UI/SearchField'

export default {
  components: {
    LocationSelector,
    SearchIcon,
    PaperPlaneIcon,
    SearchField,
  },
}
</script>

<style scoped>
.search-box {
  margin-left: 15px;
}
span {
  cursor: pointer;
}
</style>
