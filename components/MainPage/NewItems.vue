<template>
  <section class="container">
    <div class="card card-1"></div>
    <div class="card card-2"></div>
    <div class="card card-3"></div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  display: flex;
  height: calc(100vh);
  filter: brightness(60%);
}

.card {
  width: 100%;
  background-size: cover;
  background-position: left;
}

.card-1 {
  background-image: url('~assets/images/black-dress.png');
}

.card-2 {
  background-image: url('~assets/images/beige-sweatshirt.png');
}

.card-3 {
  background-image: url('~assets/images/black-nightie.png');
}
</style>
