<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data: () => ({
    //
  }),
};
</script>


<style lang="scss">
@import "./css/reset.css";
@import "./css/style.scss";
::-webkit-scrollbar {
  display: none;
}
</style>
