<template>
  <section class="bookPage">
    <div class="pageContainer">
      <h2 class="pageHeader">Blog Posts</h2>
      <div class="pageContent">

      </div>
    </div>
  </section>
</template>


<script>
import NavArrows from '@/components/NavArrows';

export default {
  name: 'BlogPosts',
  components: {
    NavArrows
  },
  data() {
    return {
      prev: "",
      next: ""
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/css/style.scss";

</style>