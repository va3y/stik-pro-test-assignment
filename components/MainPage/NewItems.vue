<template>
  <section class="container section-2">
    <div class="card card-1">
      <div class="subtitle">
        <h2>Новинки</h2>
        <a href=""></a>
        <LargeLink class="large-link" title="смотреть" link="/" />
        <ArrowSelector />
      </div>
    </div>
    <div class="card card-2"></div>
    <div class="card card-3"></div>
  </section>
</template>

<script>
import LargeLink from '@/components/UI/LargeLink.vue'
import ArrowSelector from '@/components/UI/ArrowSelector'
export default {
  components: { LargeLink, ArrowSelector },
}
</script>

<style scoped>
h2 {
  text-transform: uppercase;
}

.subtitle {
  position: relative;
  top: 70%;
  margin-left: 30%;
  width: 60%;
  max-width: 200px;
}

@media screen and (max-width: 375px) {
  .subtitle {
    margin: auto;
  }
}

.container {
  display: flex;
  height: 100vh;
}

.container::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.card {
  width: 100%;
  background-size: cover;
}

.card-1 {
  background-image: url('~assets/images/black-dress.png');
  background-position: 70% 0%;
}

.card-2 {
  background-image: url('~assets/images/beige-sweatshirt.png');
  background-position: 40% 0%;
}

.card-3 {
  background-image: url('~assets/images/black-nightie.png');
  background-position: 30% 0%;
}
@media screen and (max-width: 550px) {
  .card-2 {
    display: none;
  }
}
.large-link {
  margin: 20px 0;
}
</style>
