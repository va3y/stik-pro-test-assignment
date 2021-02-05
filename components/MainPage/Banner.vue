<template>
  <section class="banner">
    <div class="title-box">
      <div class="subtitle ascend-on-loading">
        <span>winter 20/21</span>
        <div class="dash"></div>
      </div>
      <h1 class="ascend-on-loading">Новая капсула одежды для дома</h1>
      <LargeLink title="смотреть" link="/" />
    </div>
  </section>
</template>

<script>
import LargeLink from '@/components/UI/LargeLink'
export default {
  components: {
    LargeLink,
  },
}
</script>

<style scoped>
span {
  font-size: 12px;
}
h1 {
  font-size: 16px;
  margin: 30px 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 150%;
}
section {
  position: relative;
  height: calc(100vh - var(--header-height));
  width: 100%;
  top: var(--header-height);
  margin-bottom: var(--header-height);
  background: url('~assets/images/banner-image.png') no-repeat;
  background-position-x: 100%;
  background-size: cover;
  display: flex;
}

@media screen and (max-width: 768px) {
  section {
    background-position-x: 73%;
  }
}
@media screen and (max-width: 375px) {
  section:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
}

.title-box {
  position: absolute;
  left: 11%;
  width: 241px;
  height: 164px;
  align-self: center;
}

.dash {
  background-color: white;
  width: 20px;
  align-self: center;
  margin-left: 20px;
  height: 1px;
}
.subtitle {
  display: flex;
}
</style>
