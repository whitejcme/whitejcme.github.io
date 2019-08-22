<template>
  <div class="previewCard">
    <div class="side left">
      <img :src="require(`@/assets/contact/suit_${info.suit}.svg`)" class="suit s1">
      <img :src="require(`@/assets/contact/suit_${info.suit}.svg`)" class="suit s2">
    </div>
    <div class="main">
      <div class="layer1">
        <div class="layer2">
          <div class="layer3">
            <div class="letter">{{info.letter}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="side right">
      <img :src="require(`@/assets/contact/suit_${info.suit}.svg`)" class="suit s1">
      <img :src="require(`@/assets/contact/suit_${info.suit}.svg`)" class="suit s2">
    </div>
  </div>
</template>


<script>
export default {
  name: "CardPreview",
  props: {
    info: {type: Object}
  }
}
</script>


<style lang="scss" scoped>
@import "@/css/style.scss";
@import "@/css/contactCards.scss";
</style>