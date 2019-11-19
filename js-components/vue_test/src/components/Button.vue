<template>
  <button class="site-button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .site-button {
    display: inline-block;
    padding: 7px 11px;

    color: #ffffff;

    background: #418AF2;
    border-radius: 3px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.2);

    transition: background .4s ease;
    &:hover, &:focus {
      background: #094191;
    }
  }
</style>
