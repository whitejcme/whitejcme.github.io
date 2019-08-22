<template>
  <section class="bookPage">
    <div class="pageContainer">
      <h2 class="pageHeader">Projects</h2>
      <v-container>
        <v-layout row wrap class="projectRow">
          <v-flex
            v-for="p in projects"
            :key="p.id"
            xs12 sm6 md4 lg3
            class="projectFlex"
          >
            <div class="projectBox">
              <img :src="require(`@/assets/projects/${p.img}`)" alt="Project Overview">
              <div class="projectInfo">
                <div class="details">
                  <div class="Title">{{p.title}}</div>
                  <div class="Info">{{p.info}}</div>
                </div>
                <div class="btn-box">
                  <a :href="p.more" target="_blank">
                    <button class="btn more">View More</button>
                  </a>
                  <a :href="p.git" target="_blank">
                    <button class="btn code">View Code</button>
                  </a>
                </div>
              </div>
              
            </div>
          </v-flex>

        </v-layout>
      </v-container>
    </div>
    <NavArrows :prevLabel="prev" :prevName="prev" :nextLabel="next" :nextName="next"/>
  </section>
</template>


<script>
import NavArrows from '@/components/NavArrows';

export default {
  name: 'Project',
  components: {
    NavArrows
  },
  data() {
    return {
      prev: "Skills",
      next: "Contact",
      projects: [
        {
          id: 1,
          title: 'Movie Recommendation App',
          info: '[May 2019] Movie Recommendation Web Service (SPA) / Built on Django & Python via c9.io / Vue.js, Axios',
          img: "prj1_overview.png",
          more: 'https://drive.google.com/drive/folders/1nF4oy4G7vFhJsOuhYuLx8J7F-98qmicc?usp=sharing',
          git: 'https://github.com/ChangmoKang/PJT'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/style.scss";

.projectRow {
  @include maxWidth(960) {
    max-width: 600px;
  }
  @include maxWidth(600) {
    max-width: 300px;
  }
  margin: 0 auto;
}
.projectFlex {
}
.projectBox {
  width: 90%;
  margin: 20px auto;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: all 0.3s;
  }
  .projectInfo {
    width: 100%; height: 100%;
    position: absolute;
    top: 0; left: 0;
    background: $bgBlack;
    transition: all 0.3s;
    opacity: 0;
    .details {
      height: calc(100% - 55px);
      padding: 20px 20px 5px;
      font-family: $fontContent;
      color: white;
      overflow-y: auto;
      .Title {
        font-size: 1em;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .Info {
        font-size: 0.8em;
      }
    }
    .btn-box {
      height: 55px;
      display: flex;
      justify-content: space-evenly;
      align-items: baseline;
      padding-top: 7px;
      .btn {
        font-size: 0.8em;
        font-family: $fontContent;
        &.more {@include btnSlideRight(white);}
        &.code {@include btnSlideLeft(white);}
      }
    }
  }
  &:hover {
    img {transform: scale(1.1);}
    .projectInfo {opacity: 1;}
  }
}

</style>