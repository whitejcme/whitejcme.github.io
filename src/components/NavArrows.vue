<template>
  <nav>
    <router-link :to="{name: `${prevName}`}" :class="{navBtnDisabled: !prevActive}">
      <span id="navPrev" class="navBtn">
        <div class="navArrowRec"></div>
        <div class="navArrowTri"></div>
      </span>
    </router-link>
    <span id="navPrevLabel" class="navLabel">{{prevLabel}}</span>
    <router-link :to="{name: `${nextName}`}" :class="{navBtnDisabled: !nextActive}">
      <span id="navNext" class="navBtn">
        <div class="navArrowRec"></div>
        <div class="navArrowTri"></div>
      </span>
    </router-link>
    <span id="navNextLabel" class="navLabel">{{nextLabel}}</span>
  </nav>
</template>


<script>
export default {
  name: 'NavArrows',
  props: {
    prevActive: {type: Boolean, default: true},
    nextActive: {type: Boolean, default: true},
    prevLabel: {type: String, default: ''},
    nextLabel: {type: String, default: ''},
    prevName: {type: String, default: ''},
    nextName: {type: String, default: ''},
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/style.scss";

nav {
  width: 100%;
  height: 50px;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 15px;
    position: absolute;
    bottom: 100%; left: 0;
    background: linear-gradient(to bottom, transparent, white);
  }
}
.navBtnDisabled {display: none;}
.navBtn {
  width: 32px;
  height: 32px;
  position: absolute;
  bottom: 10px;
  background-color: $navArrows;
  cursor: pointer;
  border-radius: 50%;
  &:hover {background-color: $navArrowsHover;}
  &:active {background-color: $bgBlack;}
  &#navPrev {
    left: 15px;
  }
  &#navNext {
    right: 15px;
  }
}

.navArrowRec {
  position: absolute;
  width: 10px;
  height: 8px;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  #navPrev > & {left: 20px;}
  #navNext > & {right: 10px;}
}
.navArrowTri {
  position: absolute;
  width: 0;
  height: 0;
  top: 7.25px;
  left: 51%;
  border-top: 9px solid transparent;
  border-left: 10px solid white;
  border-bottom: 9px solid transparent;
  #navPrev > & {
    border-left: none;
    border-right: 10px solid white;
    left: 17%;
  }
}

.navLabel {
  position: absolute;
  bottom: 12px;
  font-family: $fontContent;
  font-size: 18px;
  font-weight: bold;
  &#navPrevLabel {left: 55px;}
  &#navNextLabel {right: 55px;}
}
</style>