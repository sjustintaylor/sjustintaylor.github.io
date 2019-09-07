<template>
<div class="content">
  <div class="content__panel content__panel--large content__panel--padding">
    <h4>
      <span class="emphasis">Hi, I'm Justin</span>
    </h4>
    <p>
      I'm a web developer. I write my best code in <code>Javascript, HTML, CSS, SCSS,</code> and <code>C#</code>. While studying Computer Science at QUT, I build <span class="emphasis">web apps</span> with VueJS, and Node.
    </p>
    <p>
      At the moment I'm working on a personal budgeting app. The current version uses VueJS, localForage, Vuex, and Vue Router.
    </p>
    <p>
      I’m currently looking for
      a <span class="emphasis">Junior Web Developer</span>
      position in the <span class="emphasis">Brisbane</span> area
    </p>
  </div>
  <div class="content__panel content__panel--image">
    <img class="panel__image" src="@/assets/img/headshot1.jpg" />
  </div>

  <div class="content__panel content__panel--padding">
    <h4>Links</h4>
    <nav class="panel__links">
      <router-link to="/portfolio" class="text-button"><img src="../assets/img/portfolio.svg" class="text-button__icon" />What I've built</router-link>
      <!-- <a href="https://www.sjustintaylor.com.au/justin-taylor-resume.pdf" target="_blank" class="link">Resume</a> -->
      <a href="https://medium.com/@s.justin.taylor" class="text-button" target="_blank"><img src="../assets/img/article.svg" class="text-button__icon" />Stuff I've written</a>
      <a href="mailto:s.justin.taylor@gmail.com" class="text-button"><img src="../assets/img/work.svg" class="text-button__icon" />Hire me</a>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/css/main';
.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:minmax(1fr, auto);
    grid-gap: 2rem;
    justify-items: end;
    padding: 1rem;
    @media screen and (max-width: 60em) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
}
.content__panel--large {
    grid-row: 1/3;
    @media screen and (max-width: 60em) {
        grid-row: 1;
        min-height: 100%;
    }
}
.content__panel {
    width: 100%;
    border-radius: 10px;
    background-color: $white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    overflow: visible;
}
.content__panel--padding{
  padding:1rem;
}
.content__panel--image {
    overflow: hidden;
    // height:100%;
    margin-right: 0;
    display: flex;
    justify-content: flex-end;
}
.panel__image{
  // display:block;
  width:250px;
}
.panel__links {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content:flex-start;
}

.emphasis {
    color: $blue;
    font-weight: bold;
}
</style>
