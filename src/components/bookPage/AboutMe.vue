<template>
  <section class="bookPage">
    <div class="pageContainer">
      <h2 class="pageHeader">About Me</h2>
      <div class="pageContent">
        <div class="leftPage">
          <v-container>
            <v-layout row wrap justify-left>
              <v-flex 
                v-for="text in allText" 
                :key="text.preview"
                xs4
                sm3
                md4
                lg3
              >
                <div 
                  class="wordBoxOuter" 
                  v-html="text.html" 
                  :class="{wordBoxSelected: text.current}"
                  @click="setCurrent(text)"
                >
                </div>
              </v-flex>
            </v-layout>
          </v-container>

        </div>
        <div class="rightPage">
          <h3 class="aboutmeWord"><span v-for="letter in currWord" :key="letter.index">{{letter}}</span></h3>
          <p class="aboutmeBlurb">{{currBlurb}}</p>
        </div>
      </div>
    </div>
    <NavArrows :prevLabel="prev" :prevName="prev" :nextLabel="next" :nextName="next" />
  </section>
</template>


<script>
import NavArrows from '@/components/NavArrows';

export default {
  name: 'AboutMe',
  components: {
    NavArrows
  },
  data() {
    return {
      prev: "Welcome",
      next: "Skills",
      currWord: "",
      currBlurb: "",
      allText: [
        {
          preview: "Front-End",
          html: "<div class='wordBox crown'><div class='rightTriangle triL'><div class='crownTop'></div></div><div class='rightTriangle triR'><div class='crownTop'></div></div><div class='triCenter'><div class='crownTop'></div></div></div>",
          word: "Front-End Web Developer",
          blurb: "I aspire to become a front-end web developer with a keen sense for UI/UX design. I love exploring eye-catching web color schemes and user engaging websites.",
          current: false
        },
        {
          preview: "TCK",
          html: "<div class='wordBox diamond'><div class='cut-diamond'></div></div>",
          word: "Third Culture Kid",
          blurb: "Korea will always be my motherland, but I equally value the American, German, and Malaysian aspects of my cultural background. Growing up in different countries has made my capabilities and character so much more unique and dynamic!",
          current: false
        },
        {
          preview: "5 Words",
          html: "<div class='wordBox sword'><div class='pentagon'><div class='recHor'></div><div class='recVer'></div></div></div>",
          word: "5 Words that Describe Me",
          blurb: "APPROACHABLE: Compassionate listener & enthusiastic chatter\nDEDICATED: See through completion. Done is better than perfect!\nHONEST: Direct and straightforward\nPRECISE: Detail-oriented and systematic\nADAPTABLE: Ready to take on new challenges",
          current: false
        },
        {
          preview: "ESTJ",
          html: "<div class='wordBox starwand'><div class='starshape'><div class='wand'></div></div></div>",
          word: "ESTJ (MBTI personality)",
          blurb: '“Loyal, Patient and Reliable – Executives work to exemplify truthfulness and reliability, considering stability and security very important. When Executives say they’ll do something, they keep their word, making them very responsible members of their families, companies and communities.”',
          current: false
        },
        {
          preview: "Motto",
          html: "<div class='wordBox banner'><div class='flag'><div class='flaghanger'></div></div></div>",
          word: 'Everything happens for a reason.',
          blurb: 'Here’s a life motto that keeps me going whenever I come across hardship. What has already happened cannot be undone or forgotten, so just try to make the most out of the experience and move on. I do my best to stay optimistic and focus on the bright side :D',
          current: false
        },
        {
          preview: "SS",
          html: "<div class='wordBox scroll'><div class='cylinder'><div class='strap'></div></div></div>",
          word: 'Social Sciences',
          blurb: 'My academic background was originally in the social sciences, with a B.A in International Relations and Communication. Although I’m now pursuing a career in the IT sector, my two majors still greatly contribute to how I interpret the world around me.',
          current: false
        }
      ]
    }
  },
  methods: {
    setCurrent(text) {
      this.currWord = text.word;
      this.currBlurb = text.blurb;
      this.allText.forEach(t => {
        t.current = false;
      });
      text.current = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/style.scss";
.leftPage, .rightPage {
  width: 50%;
  float: left;
  padding: 0 10px;
  @include maxWidth(960) {
    width: 100%;
    padding: 0 10%;
  }
  @include maxWidth(600) {
    padding-left: 0;
    padding-right: 0;
  }
}
.rightPage {
  @include maxWidth(960) {padding-top: 20px;}
}
.wordBoxOuter {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  @include maxWidth(600) {
    width: 85px;
    height: 85px;
  }
}
h3.aboutmeWord {
  padding: 0;
  font-family: $fontContent;
  font-size: 1.8em;
  letter-spacing: 2px;
  margin-bottom: 15px;
}
h3.aboutmeWord span:first-child {
  font-family: $fontFancy;
  font-size: 2.2em;
  font-weight: normal;
  margin: 0 8px;
}
p.aboutmeBlurb {
  padding: 0 3%;
  font-family: $fontContent;
  line-height: 2.5;
  white-space: pre-wrap;
}
</style>

<style lang="scss">
// not included in scoped style tag because scoped styles are not applied to div tags in v-html
@import "@/css/aboutme.scss";
</style>