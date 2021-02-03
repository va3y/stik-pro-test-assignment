<template>
  <section>
    <div class="title-box">
      <p>winter 20/21</p>
      <h1>Новая капсула одежды для дома</h1>
      <button>смотреть</button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
section {
  text-transform: uppercase;
  background: url('~assets/images/banner-image.png') no-repeat right;
  background-size: cover;
  height: calc(100vh - 86px);
  display: flex;
  align-content: center;
  margin: 0px;
}
.title-box {
  height: 200px;
  align-self: center;
}
button {
  font-size: 14px;
}
</style>
