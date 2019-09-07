<template>
  <div class="title-bar">
    <button v-show="backbtn == true" type="button" class="circular-button"><router-link to="/" class="link"><i class="material-icons">
        arrow_back
      </i></router-link></button>
    <h3 class="title-bar__title">Justin Taylor</h3>
    <div class="title-bar__dot-btns">
      <div class="dot-btn dot-btn--yellow">

      </div>
      <div class="dot-btn dot-btn--green">

      </div>
      <div class="dot-btn dot-btn--red">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    backbtn: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/css/main';
.title-bar {
  display:grid;
  grid-template-columns: 50px 1fr 75px;
  position: sticky;
  top: 0;
  background-color:$white;
  border-bottom:1px solid $rich-black;
  border-radius:10px 10px 0 0;
  padding:0.5rem;
  height:3rem;
}
.title-bar__title {
    text-align: center;
    // height:2rem;
    grid-column: 2/3;
}
.title-bar__dot-btns{
  display:inline-flex;
  align-items: center;
  justify-content: space-around;
  grid-column: 3/4;
}
.dot-btn{
  width:18px;
  height:18px;
  border-radius: 10px;
  // margin:0.25rem;
  padding:0;

}
.dot-btn--yellow{
  background-color: $dot-btn--yellow;
  &:hover, &:focus{
    background-color:saturate($dot-btn--yellow, 100%);
  }
  &:active{
    background-color:scale-color($dot-btn--yellow, 25%);
  }
}
.dot-btn--green{
  background-color: $dot-btn--green;
  &:hover, &:focus{
    background-color:saturate($dot-btn--green, 50%);
  }
  &:active{
    background-color:desaturate($dot-btn--green, 25%);
  }
}
.dot-btn--red{
  background-color: $dot-btn--red;
  &:hover, &:focus{
    background-color:saturate($dot-btn--red, 100%);
  }
  &:active{
    background-color:desaturate($dot-btn--red, 25%);
  }
}
.link{
  // color:$mid-grey;
}
</style>
