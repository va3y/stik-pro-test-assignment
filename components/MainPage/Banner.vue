<template>
  <section>
    <div class="title-box">
      <div class="subtitle">
        <span>winter 20/21</span>
        <div class="dash"></div>
      </div>
      <h1>Новая капсула одежды для дома</h1>
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
}
section {
  position: relative;
  height: calc(100vh);
  content: '';
  position: relative;
  height: 100vh;
  width: 100%;
  top: var(--header-height);
  background: url('~assets/images/banner-image.png') no-repeat;
  background-position: 90% 0%;
  background-size: cover;
}

@media screen and (max-width: 768px) {
  section {
    background-position: 73% 100%;
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
  position: relative;
  top: 38%;
  left: 11%;
  width: 230px;
  height: 200px;
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
