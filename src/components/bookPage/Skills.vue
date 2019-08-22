<template>
  <section class="bookPage">
    <div class="pageContainer">
      <h2 class="pageHeader">Skills</h2>
      <div class="content">
        <div class="ranked">
          <div class="left">
            <div class="sideMain">
              <div class="rod"></div>
              <div class="top">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="hornLeft"></div>
              <div class="content">
                <div class="text">Vue.js</div>
                <div class="badge">
                  <img :src="require('@/assets/badge-with-a-star.svg')" alt="">
                  <img :src="require('@/assets/badge-with-a-star.svg')" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="sideMain">
              <div class="rod"></div>
              <div class="top">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="hornRight"></div>
              <div class="content">
                <div class="text">Python</div>
                <div class="badge">
                  <img :src="require('@/assets/badge-with-a-star.svg')" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="center">
            <div class="main">
              <div class="rod">
                <div class="deco"></div>
                <div class="deco"></div>
              </div>
              <div class="top"></div>
              <div class="top"></div>
              <div class="top"></div>
              <div class="top"></div>
              <div class="content">
                <div class="text">HTML <br>&amp; CSS</div>
                <div class="badge">
                  <img :src="require('@/assets/badge-with-a-star.svg')" alt="">
                  <img :src="require('@/assets/badge-with-a-star.svg')" alt="">
                  <img :src="require('@/assets/badge-with-a-star.svg')" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="others">
          <div class="roll rleft">
            <div class="top"></div>
            <div class="bot"></div>
          </div>
          <div class="main">
            <div class="Row">
              <div class="Col">
                <p>Front-end Web</p>
                <ul>
                  <li>HTML, CSS, JavaScript</li>
                  <li>SASS, Vue.js, JQuery, Bootstrap</li>
                </ul>
              </div>
              <div class="Col">
                <p>Back-end Web</p>
                <ul>
                  <li>Python, Django, Flask</li>
                  <li>Node.js, SQLite, Linux</li>
                </ul>
              </div>
            </div>
            <div class="Row">
              <div class="Col">
                <p>Languages</p>
                <ul>
                  <li>Bilingual: Korean, English</li>
                  <li>Basic: Chinese, German</li>
                </ul>
              </div>
              <div class="Col">
                <p>Soft Skills</p>
                <ul>
                  <li>Approachable: enthusiastic chatter</li>
                  <li>Adaptable: open to new ideas</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="roll rright">
            <div class="top"></div>
            <div class="bot"></div>
          </div>
        </div>
      </div>
    </div>
    <NavArrows :prevLabel="prev.label" :prevName="prev.name" :nextLabel="next" :nextName="next" />
    <div id="confetti"></div>
  </section>
</template>


<script>
import NavArrows from '@/components/NavArrows';
import confetti from '@/js/confetti.js';

export default {
  name: 'Skills',
  components: {
    NavArrows
  },
  data() {
    return {
      prev: {
        label: "About Me",
        name: "AboutMe"
      },
      next: "Projects"
    }
  },
  mounted() {
    confetti.confetti();
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/style.scss";

.content {
  width: 100%;
  overflow-y: auto;
}
.ranked {
  width: 90%;
  height: 250px;
  margin: 0 auto 30px;
  position: relative;
  @include xsDown {height: 600px;}
  div {position: absolute;}
}
.center {
  left: 50%;
  top: 40px;
  transform: translate(-50%);
  width: 150px;
  height: 150px;
  & > .main {
    width: 100%;
    height: 100%;
    background: $bannerMd;
    &::before, &::after {
      position: absolute;
      width: 0;
      height: 0;
      top: 100%;
      border-top: 50px solid $bannerMd;
    }
    &::before {
      border-right: 75px solid transparent;
    }
    &::after {
      border-left: 75px solid transparent;
      right: 0;
    }
    & > .rod {
      width: 230px;
      height: 10px;
      background-color: $bannerRodDk;
      top: -25px;
      left: -40px;
      &::before, &::after {
        position: absolute;
        width: 10px;
        height: 18px;
        background: $bannerRodDk;
        top: -4px;
        border-radius: 2px;
      }
      &::before {left: -10px;}
      &::after {right: -10px;}
      & > .deco {
        width: 20px; height: 20px;
        border-radius: 50%;
        background: $bannerRodDk;
        top: -5px;
        &:first-child {left: -27px;}
        &:last-child {right: -27px;}
      }
    }
    & > .top {
      width: 30px;
      height: 30px;
      background-color: $bannerMd;
      bottom: 100%;
      &:nth-of-type(2) {left: 40px;}
      &:nth-of-type(3) {right: 40px;}
      &:nth-of-type(4) {right: 0;}
    }
    & > .content {
      width: 100%; height: 100%;
      position: relative;
      & > .text {
        width: 100%;
        position: absolute;
        top: 13%;
        font-family: $fontFancy;
        text-align: center;
        font-size: 1.5em;
      }
      & > .badge {
        width: 100%;
        height: auto;
        position: absolute;
        bottom: 10%;
        display: flex;
        justify-content: center;
        & > img {
          width: 30px;
          margin: 0 3px;
        }
      }
    }
  }
}

.left {
  width: 120px;
  height: 120px;
  top: 100px;
  left: 10%;
  @include xsDown {
    left: 50%;
    top: 280px;
    transform: translate(-50%);
  }
}
.sideMain {
  width: 100%;
  height: 100%;
  background: $bannerLt;
  &::after {
    position: absolute;
    top: 100%;
    width: 0;
    height: 0;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-top: 20px solid $bannerLt;
  }
  & > .rod {
    width: 160px;
    height: 10px;
    background: $yellowMd;
    top: 5px;
    left: -20px;
    &::before, &::after {
      position: absolute;
      width: 10px;
      height: 16px;
      background: $yellowMd;
      border-radius: 5px;
      top: -3px;
    }
    &::before {left: -5px;}
    &::after {right: -5px;}
  }
  & > .top {
    width: 100%;
    height: 20px;
    background: $bannerRodMd;
    & > div {
      width: 26px;
      height: 10px;
      background: $bannerRodMd;
      top: 100%;
      border-radius: 0 0 3px 3px;
      &:nth-of-type(2) {left: 31px;}
      &:nth-of-type(3) {right: 31px;}
      &:nth-of-type(4) {right: 0px;}
    }
  }
  & > .content {
    width: 100%;
    height: 90px;
    position: relative;
    top: 30px; left: 0;
    & > .text {
      width: 100%;
      position: absolute;
      top: 15%;
      text-align: center;
      font-family: $fontFancy;
      font-size: 1.4em;
    }
    & > .badge {
      width: 100%;
      height: auto;
      position: absolute;
      bottom: 5%;
      display: flex;
      justify-content: center;
      & > img {
        width: 30px;
        margin: 0 3px;
      }
    }
  }
}
.hornLeft {
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-left: 40px solid $yellowMd;
  border-bottom: 25px solid transparent;
  top: -15px;
  left: -50px;
  &::after {
    position: absolute;
    width: 7px;
    height: 56px;
    background: $yellowDk;
    border-radius: 3px;
    left: -47px;
    top: -27px;
  }
}

.right {
  width: 120px;
  height: 120px;
  top: 100px;
  right: 10%;
  @include xsDown {
    right: initial;
    left: 50%;
    top: 460px;
    transform: translate(-50%);
  }
}
.hornRight {
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-right: 40px solid $yellowMd;
  border-bottom: 25px solid transparent;
  top: -15px;
  right: -50px;
  &::after {
    position: absolute;
    width: 7px;
    height: 56px;
    background: $yellowDk;
    border-radius: 3px;
    right: -47px;
    top: -27px;
  }
}

/* * * * * * * * * * * * * * * * * * * * * * * * * */

.others {
  width: 75%;
  @include xsDown {width: 70%;}
  height: auto;
  margin: 40px auto;
  position: relative;
  & > .main {
    width: 100%;
    height: auto;
    background-color: $bannerLt;
    font-family: $fontFancy;
    padding: 25px 20px 0px;
    & > .Row {
      width: 100%;
      height: auto;
      & > .Col {
        width: 50%;
        @include smDown {width: 100%;}
        height: auto;
        display: inline-block;
        vertical-align: top;
        padding: 0 15px;
        margin-bottom: 30px;
        & > p {
          margin-bottom: 5px;
          font-size: 1.3em;
        }
        & > ul {
          padding-left: 20px;
          & > li {
            font-size: 1em;
            &::before {
              content: "-";
              position: relative;
              left: -10px;
            }
          }
        }
      }
    }



    
    
  }
  & > .roll {
    width: 30px;
    height: calc(100% + 20px);
    background-color: $bannerMd;
    border-radius: 2px;
    position: absolute;
    top: -10px;
    &.rleft {
      left: -30px;
    }
    &.rright {
      right: -30px;
    }
    & > .top, & > .bot {
      width: 20px;
      height: 7px;
      position: absolute;
      background-color: $bannerDk;
      left: 5px;
    }
    & > .top, & > .top::after {
      bottom: 100%;
      border-radius: 2px 2px 0 0;
    }
    & > .bot, & > .bot::after {
      top: 100%;
      border-radius: 0 0 2px 2px;
    }
    & > .top::after, & > .bot::after {
      position: absolute;
      width: 30%;
      height: 100%;
      background-color: $bannerDker;
      left: 50%;
      transform: translate(-50%);
    }
  }
}


#confetti {
  width: calc(100% - 24px); height: calc(100% - 24px);
  position: absolute;
  top: 12px; left: 12px;
  pointer-events: none;
  @include xsDown {
    width: calc(100% - 20px); height: calc(100% - 20px);
    top: 10px; left: 10px;
  }
}

</style>