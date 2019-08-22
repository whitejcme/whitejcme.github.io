<template>
  <div class="selectedCard">
    <div class="side left">
      <div class="letter">J</div>
      <img class="suit" src="~@/assets/contact/suit_spade.svg">
    </div>
    <div class="side right">
      <div class="letter">J</div>
      <img class="suit" src="~@/assets/contact/suit_spade.svg">
    </div>
    <div class="blackBorder"></div>
    
    <div class="main">
      <img class="suit s1" src="~@/assets/contact/suit_spade.svg">
      <img class="suit s2" src="~@/assets/contact/suit_spade.svg">

      <div class="myName">
        <div>Jiwon</div>
        <div>Juliet</div>
        <div>Yoon</div>
      </div>

    </div>

    <div class="fadeBg"></div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  
}
</script>

<style lang="scss" scoped>
@import "@/css/style.scss";
@import "@/css/contactCards.scss";

.myName {
  width: 100%; height: auto;
  @include centerItem;
  & > div {
    text-align: center;
    font-family: $fontFancy;
    font-size: 2em;
    letter-spacing: 2px;
    margin: 3% 0;
    transform: rotate(0deg);
  }
}

</style>