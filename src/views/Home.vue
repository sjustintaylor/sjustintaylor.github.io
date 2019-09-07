<template>
<div class="view">
  <TitleBar v-bind:backbtn="this.backbtn"/>
  <div class="view__content">
    <AboutMe />
  </div>
  <FooterBar />
</div>
</template>

<script>
// @ is an alias to /src
import AboutMe from '@/components/AboutMe.vue'
import TitleBar from '@/components/TitleBar.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
  name: 'home',
  components: {
    AboutMe,
    TitleBar,
    FooterBar
  },
  data: function(){
    return {
      backbtn:false
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/main';
</style>
