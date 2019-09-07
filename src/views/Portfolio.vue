<template>
  <div class="view">
    <TitleBar v-bind:backbtn="this.backbtn"/>
    <div class="view__content portfolio" >
    <ProjectCard v-for="item in projects" :imgUrl="item.imgUrl" :title="item.title" :description="item.description" :code="item.code" :deployed="item.deployed" />
    </div>

    <FooterBar />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectCard from '@/components/ProjectCard.vue'
import TitleBar from '@/components/TitleBar.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
  name: 'home',
  components: {
    ProjectCard,
    TitleBar,
    FooterBar
  },
  data: function(){
    return {
      backbtn:true,
      projects: [{title:"Budget App", description:"An app to help users implement the envelope method of personal budgeting. Currently under development, pre-alpha", code:"https://github.com/sjustintaylor/budget-app", deployed:"", imgUrl:"budget-app.png"}, {title:"Work Timer", description:"A pomodoro inspired work/break timer. Features accurate timers (to within 15ms), a bell to notify the user at the end of each time period, and pause/reset functionality", code:"https://github.com/sjustintaylor/maximum-effort", deployed:"http://angry-goblin.surge.sh/", imgUrl:"max-effort.png"}]
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/main';
.portfolio{
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:1rem;
  padding:1rem;
  @media screen and (max-width: 60em){
    grid-template-columns: 1fr;
  }
}
</style>
