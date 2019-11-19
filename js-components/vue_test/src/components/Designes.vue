<template>
  <section class="s_designes">
    <div class="s_designes__top">
      <h3 class="s_designes__title">
        {{ title }}
      </h3>
      <Button text="Добавить дизайн"></Button>
    </div>
    <div class="s_designes__wrap">
      <Design/>
    </div>
  </section>
</template>

<script>

import Button from '@/components/Button.vue';
import Design from '@/components/Design.vue';

export default {
  name: 'Designes',
  data: {
    title: 'Все дизайны'
  },
   components: {
     Button,
     Design
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .s_designes {
    flex-grow: 1;
    padding: 24px 32px;

    background: #2C3D39;
    &__top {
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
