<template>
  <section class="bookPage">
    <div class="pageContainer">
      <div class="pictureFrame">
        <div class="skyBg skyNight"></div>
        <div class="skyBg skyDay"></div>
        <Celestial />
        <div class="castleFrame">
          <FrameLeft />
          <FrameMiddle />
          <FrameRight />
        </div>
      </div>
    </div>
    <NavArrows :prevActive="false" :nextLabel="next.label" :nextName="next.name"/>
  </section>
</template>


<script>
import NavArrows from '@/components/NavArrows';
import Celestial from '@/components/bookPage/castle/Celestial';
import FrameLeft from '@/components/bookPage/castle/FrameLeft';
import FrameRight from '@/components/bookPage/castle/FrameRight';
import FrameMiddle from '@/components/bookPage/castle/FrameMiddle';

export default {
  name: 'Welcome',
  components: {
    NavArrows,
    Celestial,
    FrameLeft,
    FrameRight,
    FrameMiddle
  },
  data() {
    return {
      next: {
        label: "About Me",
        name: "AboutMe"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/style.scss";

$skyColorTime: 30s;
$skyColorTimeHalf: 15s;

.pictureFrame {
  width: 90%;
  height: 94%;
  position: absolute;
  top: 3%;
  left: 5%;
  border-radius: 5px;
  overflow: hidden;
}
.skyBg {
  width: 100%; height: 100%;
  position: absolute;
  top: 0; left: 0;
  border-radius: 5px;
  &.skyDay {
    background: radial-gradient(ellipse at bottom, #FFFFFF 20%, #9CECFB 100%);
    opacity: 1;
    animation: skyColor $skyColorTimeHalf linear infinite alternate;
  }
  &.skyNight {
    background: radial-gradient(ellipse at bottom, #FFFDE4 0%, #003666 85%);
    opacity: 0;
    animation: skyColor $skyColorTimeHalf linear infinite alternate-reverse;
  }
}
@keyframes skyColor {
  0% {opacity: 1;}
  40% {opacity: 1;}
  60% {opacity: 0;}
  100% {opacity: 0;}
}
.castleFrame {
  position: absolute;
  width: 100%;
  padding-top: 70%;
  bottom: 0; left: 0;
  @include xsDown {
    padding-top: 120%;
  }
}
</style>
