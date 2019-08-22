<template>
  <div id="homeWrap">
    <div id="bookOutline">
      <div id="bookContainer">
        <vue-page-transition name="flip-y" style="height: 100%">
          <router-view />
        </vue-page-transition>
        <div v-if="!isWelcomePage" class="blur"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  computed: {
    isWelcomePage() {
      return this.$route.fullPath === "/"
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/css/style.scss";
#homeWrap {
  width: 100%;
  height: 100vh;
  min-height: 500px;
  overflow-y: auto;
  background-color: $bgBlack;
}
@keyframes bookRise {
  0% {top: 10%;}
  95% {top: 2.5%;}
  100% {top: 3%;}
}
#bookOutline {
  width: 95%;
  min-width: 300px;
  max-width: 1140px;
  height: 94%;
  margin: 0 auto;
  position: relative;
  animation: bookRise 1s;
  animation-fill-mode: forwards;
}
#bookContainer {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background-color: white;
  border-radius: 7px;
  padding: 12px;
  box-shadow: inset 0 0 0 12px $bookCoverBrown;
  @include xsDown {
    padding: 10px;
    box-shadow: inset 0 0 0 10px $bookCoverBrown;
  }
  .blur {
    width: calc(100% - 24px);
    height: 50px;
    position: absolute;
    top: 12px; left: 12px;
    background: linear-gradient(to bottom, white 66%, transparent);
    @include xsDown {
      width: calc(100% - 20px);
      top: 10px; left: 10px;
    }  
  }
}


</style>
