<template>
<div class="title-bar">
  <span class="social-link"><a href="https://www.linkedin.com/in/shaun-j-taylor/" target="_blank">LinkedIn</a></span>
  <span class="social-link"><a href="https://github.com/sjustintaylor/" target="_blank">Github</a></span>
</div>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/css/main';
.title-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    bottom: 0;
    height: 3rem;
    background-color: $white;
    border-top: 1px solid $rich-black;
    border-radius: 0 0 10px 10px;
    @media screen and (max-width: 60em) {
        position: sticky;
    }
}
.title-bar__title {
    text-align: center;
    height: 2rem;
}
.social-link {
    // font-weight: bold;
    &::after {
        margin: 0 1rem;
        content: '-';
    }
    &:last-of-type::after {
        margin: 0;
        content: '';
    }
}
</style>
