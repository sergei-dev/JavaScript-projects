<template>
  <section class="s_designes">
    <div class="s_designers__top">
      <h3 class="s_designers__title">
        {{ title }}
      </h3>
      <button class="site-button">Добавить дизайн</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Designes',
  data: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .s_designes {
    flex-grow: 1;

    background: #2C3D39;
  }
</style>
