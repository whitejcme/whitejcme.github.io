<template>
  <section class="frameSection frameMiddle">
    <CastleFlags />
    <CastleTowerW />
    <CastleBdBack />
    <CastleTowerI />
    <CastleTowerO />
    <CastleBdCenter />
    <CastleBdSideL />
    <CastleBdSideR />
    <CastleTowerJ />
    <CastleTowerN />
  </section>
</template>

<script>
import CastleFlags from '@/components/bookPage/castle/CastleFlags';
import CastleTowerJ from '@/components/bookPage/castle/CastleTowerJ';
import CastleTowerI from '@/components/bookPage/castle/CastleTowerI';
import CastleTowerW from '@/components/bookPage/castle/CastleTowerW';
import CastleTowerO from '@/components/bookPage/castle/CastleTowerO';
import CastleTowerN from '@/components/bookPage/castle/CastleTowerN';
import CastleBdBack from '@/components/bookPage/castle/CastleBdBack';
import CastleBdCenter from '@/components/bookPage/castle/CastleBdCenter';
import CastleBdSideL from '@/components/bookPage/castle/CastleBdSideL';
import CastleBdSideR from '@/components/bookPage/castle/CastleBdSideR';

export default {
  name: "FrameMiddle",
  components: {
    CastleFlags,
    CastleTowerJ,
    CastleTowerI,
    CastleTowerW,
    CastleTowerO,
    CastleTowerN,
    CastleBdBack,
    CastleBdCenter,
    CastleBdSideL,
    CastleBdSideR
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/style.scss";
@import "@/css/castle.scss";

</style>