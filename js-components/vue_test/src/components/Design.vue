<template>
  <div class="s_design" :key="id">
    <div class="s_design__img-wrap">
      <img :src="img" alt="" class="s_design__img">
    </div>
    <div class="s_design__head">
      <div class="s_design__id-wrap">
        <span class="s_design__id">
          {{ id }}
        </span>
      </div>
      <h4 class="s_design__title">
        {{ title }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Design',
  props: {
    img: 'https://cdn.pixabay.com/photo/2019/11/08/18/16/matera-4612016__340.jpg',
    id: '1',
    title: 'Ostrov'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .s_design {
    width: calc(100% / 4);
    padding: 10px 20px;
  }
</style>
