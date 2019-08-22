<template>
  <div class="selectedCard">
    <div class="side left">
      <div 
        class="letter"
        :class="{'suitRed': text.red, 'noMargin': !text.spacing}"
      >{{text.letter}}</div>
      <img class="suit" :src="require(`@/assets/contact/suit_${text.suit}.svg`)">
    </div>
    <div class="side right">
      <div 
        class="letter"
        :class="{'suitRed': text.red, 'noMargin': !text.spacing}"
      >{{text.letter}}</div>
      <img class="suit" :src="require(`@/assets/contact/suit_${text.suit}.svg`)">
    </div>
    <div class="blackBorder"></div>
    
    <div class="main">
      <img class="suit s1" :src="require(`@/assets/contact/suit_${text.suit}.svg`)">
      <img class="suit s2" :src="require(`@/assets/contact/suit_${text.suit}.svg`)">
      <div class="Label">{{text.label}}</div>
      <div class="Content" id="address">{{text.content}}</div>
      <div class="btnBox">
        <div class="copy" v-if="!text.link">
          <div class="icon">
            <i class="material-icons-round" @click="copyText" @mouseover="hoverOnCopy = true" @mouseout="hoverOnCopy = false">flag</i>
            <span class="tooltip" id="tooltip" :class="{'visible': hoverOnCopy}">Click to copy</span>
          </div>
        </div>
        <div class="visit" v-if="text.link">
          <a :href="text.link" target="_blank">
            <i class="material-icons-round" @mouseover="hoverOnVisit = true" @mouseout="hoverOnVisit = false">
              forward
            </i>
          </a>
          <div class="prompt" :class="{'visible': hoverOnVisit}">Click to visit</div>
        </div>
      </div>
    </div>
    <div class="fadeBg"></div>

  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Card',
  props: {
    text: {type: Object}
  },
  data() {
    return {
      hoverOnCopy: false,
      hoverOnVisit: false
    }
  },
  watch: {
    hoverOnCopy() {
      if (!this.hoverOnCopy) {
        this.tooltipReset();
      }
    }
  },
  methods: {
    copyText() {
      const $temp = $("<input>");
      $("body").append($temp);
      $temp.val($('#address').text().replace(/ /g,'')).select();
      document.execCommand("copy");
      $temp.remove();

      const tooltip = document.getElementById("tooltip");
      tooltip.innerHTML = "Copied to clipboard";
    },
    tooltipReset() {
      const tooltip = document.getElementById("tooltip");
      setTimeout(function() {
        tooltip.innerHTML = "Click to copy";
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/style.scss";
@import "@/css/contactCards.scss";
</style>

