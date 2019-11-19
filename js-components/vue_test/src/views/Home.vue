<template>
  <div class="home">
    <Sidebar></Sidebar>
    <Designes></Designes>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Designes from '@/components/Designes.vue'

export default {
  name: 'home',
  components: {
    Sidebar,
    Designes
  }
}
</script>


<style lang="scss">
  .home {
    display: flex;
    width: 100%;
  }
</style>
