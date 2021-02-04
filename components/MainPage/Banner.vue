<template>
  <section>
    <div class="title-box">
      <div class="subtitle">
        <span>winter 20/21</span>
        <div class="dash"></div>
      </div>
      <h1>Новая капсула одежды для дома</h1>
      <button>смотреть</button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
span {
  font-size: 12px;
}
h1 {
  font-size: 16px;
  margin: 40px 0;
  text-transform: uppercase;
}
section {
  background: url('~assets/images/banner-image.png') no-repeat right;
  background-size: cover;
  position: relative;
  height: calc(100vh);
}
.title-box {
  position: relative;
  top: 40%;
  left: 150px;
  width: 230px;
  height: 200px;
  align-self: center;
}
button {
  text-transform: uppercase;
  width: 100%;
  height: 40px;
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
