<template>
<div class="project">
  <div class="project__content">
    <img v-show="imgUrl.length>0" :src="imgUrl" class="project__image" />
  </div>
  <h3 class="project__title">{{title}}</h3>
  <p class="project__description">
    {{description}}
  </p>
  <nav class="project__links">
    <a v-bind:href="code" target="_blank" class="text-button">Code</a>
    <a v-show="deployed.length>0" v-bind:href="deployed" target="_blank" class="text-button">Deployed App</a>
  </nav>

</div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    imgUrl: String,
    description: String,
    code: String,
    deployed: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/css/main';
.project {
    background-color: $white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    overflow: visible;
    display:flex;
    flex-direction: column;
    align-items:stretch;
    justify-content: flex-start;
}
.project__content {
    height:250px;
    display:flex;
    justify-content: center;
    background-color: $white;
      border-radius: 10px;
}
.project__title{
  padding:1rem;
  border-top:1px solid $mid-grey;
}
.project__description{
  padding:1rem;
    flex: 1 1 auto;
}
.project__image{
  // border-radius: 10px;
  max-height:   250px;
  margin:0 auto;
}
.project__links {

    display: inline-flex;
    justify-content: space-around;
    align-items:center;
    flex: 1 0 auto;

}
</style>
