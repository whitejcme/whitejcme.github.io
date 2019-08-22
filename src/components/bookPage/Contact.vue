<template>
  <section class="bookPage">
    <div class="pageContainer">
      <h2 class="pageHeader">Contact</h2>

        <div class="pageContent">
          
          <!-- CARD PREVIEW -->
          <div class="column cardPreview">
            <div class="content">
              <div class="diamond" :class="{'bobbing': hoverOnCards}">
                <div class="trapezoid">
                  <div class="triUp"></div>
                </div>
                <div class="triDown">
                  <div class="triDown"></div>
                </div>
              </div>
              <div class="diamondSm" :class="{'pulse': hoverOnCards}"><div></div></div>
              <div 
                class="cards" 
                :style="cardsRotateStyle"
                @mouseenter="hoverOnCards = true"
                @mouseleave="hoverOnCards = false"
              >
                <div class="cardsContainer">
                  <div class="card intro" @click="rotateCards(0)">
                    <div class="outer">
                      <CardPreview :info="previewCards[0]" class="inner" :style="cardRotateStyle" />
                    </div>
                  </div>
                  <div class="card email" @click="rotateCards(1)">
                    <div class="outer">
                      <CardPreview :info="previewCards[1]" class="inner" :style="cardRotateStyle" />
                    </div>
                  </div>
                  <div class="card git" @click="rotateCards(2)">
                    <div class="outer">
                      <CardPreview :info="previewCards[2]" class="inner" :style="cardRotateStyle" />
                    </div>
                  </div>
                  <div class="card linkedin" @click="rotateCards(3)">
                    <div class="outer">
                      <CardPreview :info="previewCards[3]" class="inner" :style="cardRotateStyle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SELECTED CARD -->
          <div class="column selectedCard">
            <div class="outer">
              <transition name="slideFade">
                <Card :text="cardTexts[2]" class="card" v-if="currentCardPosition === 3" />
              </transition>
              <transition name="slideFade">
                <Card :text="cardTexts[1]" class="card" v-if="currentCardPosition === 2" />
              </transition>
              <transition name="slideFade">
                <Card :text="cardTexts[0]" class="card" v-if="currentCardPosition === 1" />
              </transition>
              <transition name="slideFade">
                <Intro class="card intro" v-if="currentCardPosition === 0"/>
              </transition>
            </div>
          </div>

        </div>
    </div>
    <NavArrows :prevLabel="prev" :prevName="prev" :nextActive="false" />
  </section>
</template>


<script>
import NavArrows from '@/components/NavArrows';
import Intro from '@/components/bookPage/contactCards/Intro';
import Card from '@/components/bookPage/contactCards/Card';
import CardPreview from '@/components/bookPage/contactCards/CardPreview';

import contactCards from '@/js/contactCards.js';

export default {
  name: 'Contact',
  components: {
    NavArrows,
    Intro,
    Card,
    CardPreview
  },
  data() {
    return {
      prev: "Projects",
      cardTexts: [
        {
          label: "Email",
          letter: "E",
          content: "jiwonjulietyoon @gmail.com",
          suit: "heart",
          link: "",
          red: true,
          spacing: false
        },
        {
          label: "GitHub",
          letter: "G",
          content: "github.com /jiwonjulietyoon",
          suit: "club",
          link: "https://www.github.com/jiwonjulietyoon",
          red: false,
          spacing: false
        },
        {
          label: "LinkedIn",
          letter: "L",
          content: "linkedin.com/in /jiwon-yoon -155b89187",
          suit: "diamond",
          link: "https://www.linkedin.com/in/jiwon-yoon-155b89187",
          red: true,
          spacing: false
        }
      ],
      previewCards: [
        {
          letter: "J",
          suit: "spade",
          red: false
        },
        {
          letter: "E",
          suit: "heart",
          red: true
        },
        {
          letter: "G",
          suit: "club",
          red: false
        },
        {
          letter: "L",
          suit: "diamond",
          red: true
        }
      ],
      currentCardPosition: 0,
      cardsRotateTurns: 0,
      cardRotateTurns: 0,
      cardsRotateTime: 0,
      hoverOnCards: false,
    }
  },
  computed: {
    cardsRotateStyle() {
      return { 
        transform: 'rotate(' + this.cardsRotateTurns + 'turn)',
        transition: 'all ' + this.cardsRotateTime + 's'
      }
    },
    cardRotateStyle() {
      return { 
        transform: 'rotate(' + this.cardRotateTurns + 'turn)',
        transition: 'all ' + this.cardsRotateTime + 's'
      }
    }
  },
  methods: {
    rotateCards(target) {
      let res = this.currentCardPosition - target;
      if (Math.abs(res) <= 2) {
        this.cardsRotateTime = Math.abs(res) * 0.6;
        this.cardsRotateTurns += (res * 0.25);
        this.cardRotateTurns -= (res * 0.25);
      } else {
        this.cardsRotateTime = 0.6;
        if (res < 0) {
          this.cardsRotateTurns += 0.25;
          this.cardRotateTurns -= 0.25;
        } else {
          this.cardsRotateTurns -= 0.25;
          this.cardRotateTurns += 0.25;
        }
      }
      this.currentCardPosition = target;
    }
  },
  mounted() {
    contactCards.setSelectedCardSize();
    contactCards.setCardPreviewSize();
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/style.scss";

////////// CARD LAYOUT W/O VUETIFY ///////

.pageContent {
  // border: 1px solid blue;
}

.column {
  // border: 1px solid red;
  // DESKTOP, 2 COLUMNS
  width: 50%;
  display: inline-block;
  min-height: 316px;
  height: calc(94vh - 260px);
  @include maxWidth(767) {height: calc(94vh - 230px);}
  // MOBILE, 1 COLUMN STACKED
  @include maxWidth(600) {
    width: 100%;
    &.cardPreview {
      height: 20vh;
      min-height: 100px;
    }
    &.selectedCard {
      height: calc(74vh - 260px);
    }
  }
}
.cardPreview {
  position: relative;
  & > .content {@include centerItem;}
  @include maxWidth(600) {
    .diamond {display: none;}
  }
}


////////////// DIAMOND ///////////////

.diamond {
  margin: 0 auto;
  width: 60px; height: 60px;
  transition: all 0.5s;
  & > .trapezoid {
    // base <= width
    // height <= border-bottom
    // top width <= border-left, border-right;; larger border => narrower trapezoid top
    width: 60px;
    height: 0;
    border-bottom: 15px solid #00a2ff;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    margin: 0 auto;
    position: relative;
    & > .triUp {
      width: 0;
      height: 0;
      border-left: 17px solid transparent;
      border-right: 17px solid transparent;
      border-bottom: 15px solid #00C0FF;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
  & > .triDown {
    // base <= border-left + border-right
    // height <= border-top
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 40px solid #00C0FF;
    margin: 0 auto;
    position: relative;
    & > .triDown {
      width: 0;
      height: 0;
      border-left: 17px solid transparent;
      border-right: 17px solid transparent;
      border-top: 40px solid #00A2FF;
      position: absolute;
      left: 50%;
      bottom: 100%;
      transform: translate(-50%);
    }
  }
}
.diamond.bobbing {animation: bobbing 0.8s ease-out infinite alternate;}
@keyframes bobbing {
  0% {transform: translateY(0);}
  100% {transform: translateY(5px);}
}
.diamondSm {
  @include minWidth(601) {display: none;}
  position: absolute;
  bottom: calc(100% + 15px);
  left: 50%;
  transform: translate(-50%);
  transform-origin: 0 100%;
  & > div {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom: 7px solid #00A2FF;
    position: relative;
    &::after {
      position: absolute;
      top: 7px;
      left: -5px;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-top: 7px solid #00A2FF;
    }
  }
}
.diamondSm.pulse {animation: pulse 0.5s ease-in infinite alternate;}
@keyframes pulse {
  0% {transform: scale(1) translate(-50%);}
  100% {transform: scale(1.2) translate(-50%);}
}


////////////// PREVIEW CARDS ///////////////  

.cardPreview .cards {
  margin-top: 20px;
  @include maxWidth(600) {
    margin-top: 0;
  }
  // border: 1px solid hotpink;
  border-radius: 50%;
  position: relative;
  &:hover {
    .cardsContainer {transform: scale(1.02);}
    .inner {box-shadow: 0px 0px 7px 0px #BBBBBB;}
  }
  .cardsContainer, .outer, .inner {
    width: 100%; 
    height: 100%; 
    position: relative;
    transition: all 0.3s;
  }
  .card {
    width: 22%;
    height: 31%;
    position: absolute;
    cursor: pointer;
    transition: all 0.3s;
    // border: 1px solid coral;
    &.intro {
      top: 0; left: 39%;
    }
    &.email {
      top: 35%; right: 5%;
    }
    &.git {
      bottom: 0; left: 39%;
    }
    &.linkedin {
      top: 35%; left: 5%;
    }
    &:hover {
      transform: scale(1.1);
      .outer {
        animation: cardReady 2.5s linear infinite;
      }
      .inner {
        box-shadow: 0px 0px 8px 3px #AAAAAA;
      }
    }
  }
}
@keyframes cardReady {
  0%, 100% {transform: rotate(0deg);}
  25% {transform: rotate(5deg);}
  75% {transform: rotate(-5deg);}
}

////////////// SELECTED CARDS ///////////////  


.selectedCard {
  @include maxWidth(600) {
    // min-height: 200px;
  }
  position: relative;
  .outer {
    @include centerItem;
    border-radius: 5px;
    // border: 1px solid blue;
    .card {
      width: 100%; height: 100%;
      position: absolute;
      top: 0; left: 0;
      box-shadow: 2px 2px 8px 0 #CCCCCC;
      // transition: all 0.3s;
    }
  }
}

.slideFade-enter-active {
  transition: all 0.8s ease;
}
.slideFade-leave-active {
  transition: all 0.5s ease;
}
.slideFade-enter, .slideFade-leave-to {
  transform: translateX(20%);
  opacity: 0;
}


</style>
