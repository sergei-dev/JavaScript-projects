<template>
  <aside class="s_sidebar">
    <div class="s_sidebar__img-wrap">
      <img src="" alt="">
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .s_sidebar {
    padding: 8px 7px;
    width: 100%;
    max-width: 40px;

    background: #627b7a;
  }
</style>
